---
name: skool-cli
description: Programmatically control a Skool classroom — rename folders, create/update pages, batch-push course content — from a logged-in Skool browser tab via Chrome MCP. Use whenever the user wants to push course content to Skool, rename classroom folders, create pages at scale, duplicate a course structure, or otherwise automate Skool.com without clicking through the UI. Triggers on phrases like "push this to Skool", "update the Skool course", "rename Skool folders", "batch-create Skool pages", "Skool classroom automation".
user-invocable: true
---

# Skool CLI

You're about to programmatically update a Skool classroom via its internal API (reverse-engineered — Skool has no public API). The CLI runs **inside a logged-in Skool browser tab** and uses the user's session cookies for auth, so you don't need tokens or credentials.

Source repo: https://github.com/Samin12/skool-cli

## Pre-flight

1. **Chrome MCP required.** This skill drives a logged-in Skool tab via `mcp__Claude_in_Chrome__javascript_tool`. Confirm Chrome MCP tools are available. If not, ask the user to connect the Chrome extension.
2. **User must be logged into Skool** in Chrome. Check tabs context — you need a tab at `skool.com/<group>/classroom/<courseId>`.
3. **Navigate to the classroom root** before injecting the CLI so `window.__NEXT_DATA__` has the tree loaded:
   ```
   https://www.skool.com/<group-slug>/classroom/<course-slug>
   ```

## Inject the CLI

Paste the full CLI source into a `javascript_exec` call against the Skool tab. The source is kept in this skill at `skool.js` (see below) — copy-paste the whole IIFE.

After injection, `window.skool` is available. Verify:

```js
window.skool.flattenTree().units.length
```

## Core operations

### Rename a folder or page
```js
await skool.update('<unit-id>', { title: '📂 Day 01 — New Title' })
```
**Title limit:** 50 UTF-16 code units. `📂` and `📝` emojis each count as 2. A plain " — " (em-dash) counts as 1.

### Update a page's content
```js
await skool.updatePageContent('<page-id>', markdownString, optionalNewTitle)
```
The markdown is converted to Tiptap v2 format. Supports: paragraphs (blank-line-separated), `**bold**`, `` `inline code` ``. Does NOT render markdown headers (`##` will show literally) — use `**Header**` paragraphs instead.

### Create a folder (at course root)
```js
await skool.createFolder('📂 New folder')
// returns the new unit object with .id
```

### Create a page (inside a folder)
```js
await skool.createPage('<parent-folder-id>', '📝 Page title', markdown)
```

### Delete
```js
await skool.remove('<unit-id>')
```

### High-level: push one "day"
Best for course-style content where each day = a folder with exactly 2 pages (Written Guide + Resources):
```js
await skool.pushDay(plan, existingFolderId)
// plan = { folderTitle, writtenGuideTitle, resourcesTitle, writtenGuideMd, resourcesMd }
// existingFolderId = null → creates a new folder at root
//                   = <id> → renames that folder
// In both cases, creates fresh Written Guide + Resources pages inside.
```

## Batch pattern

For pushing many days at once, chunk them into groups of 3–5 per `javascript_exec` call (~15–25KB of text works reliably). Generate the JS via Bash + Python, writing each chunk to `/tmp/c.js`, then Read that file and paste its single line into `javascript_exec`.

```py
# Example Python helper (run via Bash):
import json
plans = [...]  # array of {day, folderTitle, writtenGuideTitle, resourcesTitle, writtenGuideMd, resourcesMd, folderId}
js = f"(async () => {{ const plans = {json.dumps(plans, ensure_ascii=False, separators=(',',':'))}; const out = []; for (const p of plans) {{ try {{ await window.skool.pushDay(p, p.folderId); out.push(`Day ${{p.day}} OK`); }} catch(e) {{ out.push(`Day ${{p.day}} FAIL: ${{e.message}}`); }} }} return out.join('\\n'); }})()"
open('/tmp/c.js','w').write(js)
```

Then Read `/tmp/c.js`, strip the Read-tool line-number prefix, and paste the content as the `text` parameter of a single `mcp__Claude_in_Chrome__javascript_tool` call.

## Content conversion rules

When converting local markdown files to Skool:
- **Strip ATX headers** (`#`, `##`, `###`) — replace with `**Header**` paragraphs
- **Remove** `---` horizontal rules
- **Inline** `> **Foo:**` blockquote front-matter as plain `**Foo:**` paragraphs
- **Convert** `[text](url)` links to plain `text (url)`
- **Drop** video-pointer sections like `## Watch — video-section.md`
- **Collapse** multiple blank lines to single blank lines
- **Preserve**: `**bold**`, `` `code` ``, numbered list items (as separate paragraphs), bullet items (as separate paragraphs)

The `skool.mdToDesc()` function handles the rest (paragraph splitting + inline bold/code parsing).

## Gotchas

- **Context wipes on navigation.** Every time the user navigates the tab, `window.skool` is lost. Re-inject the CLI.
- **Tree is lazy-loaded.** `flattenTree()` only returns children of the currently-selected folder + top-level folders. To see another folder's children, navigate to it first (`?md=<folderId>` in the URL).
- **Bulk limit:** `/courses` POST creates one unit at a time. Loop sequentially, not in parallel, to preserve ordering.
- **Title length:** Over 50 chars → `{"fields":[{"name":"title","error":"Title is too long"}]}`. Check `title.length` before submitting.

## Cleanup

If something goes wrong mid-batch and you create a stray unit, find it by scanning `flattenTree()` for titles that don't match your naming pattern, then `skool.remove(id)`.

## The CLI source

Stored at `~/.claude/skills/skool-cli/skool.js`. On invocation, Read that file and inject its contents into the Skool tab via `javascript_exec`.
