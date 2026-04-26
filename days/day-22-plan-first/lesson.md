# Day 22 — Plan Before You Build

> **Today's pain:** Jumping from idea to code is why your projects stall at 70%.
>
> **Today's action:** Force the order: idea → plan → MVP → refine. Write the plan document before a line of code gets written.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `03:27:30` → `03:38:00` (see `video-section.md` for the transcript slice).

## Why this matters

Most people open Claude and go "build me this thing." That's a shaky foundation. You end up stuck in a loop — fix this, no not that, fix it again — and you waste hours. Today we flip it. Idea → plan → MVP → refine. That's the order. AutoForge forces you through the plan step so the foundation is actually solid before a single line of code gets written.

## Step-by-step

1. **Open AutoForge in your browser.** It'll say "Welcome to AutoForge." Hit Start Project, name it (use hyphens, no spaces), and pick a fresh folder for it to live in. Samin names his "project-canvas."
2. **Pick "blank application" and "create with Claude."** If Claude happens to be down, run `claude hi` in a terminal to check — sometimes it's back in a minute.
3. **Dump your idea by voice.** This is a word dump, not a pitch deck. Samin literally says: "Hey, I want to build a spatial canvas workspace where I can use Claude Code or Codex. Think of it like an infinite zoomable whiteboard but I can also use drawings. I want tiles where I can do work, see markdown files, a file explorer I can switch around." Keep going until you've spit out everything in your head.
4. **Let AutoForge ask you questions.** This is the magic part. It'll come back with dozens of little considerations — "separate whiteboards per project?" "mini map?" "multiple terminals?" "preview mode like Notion?" "keyboard shortcuts?" "command-Z and drag-and-drop?" — answer each one quickly. Don't agonize. This is what locks the foundation in.
5. **Call out the framework.** Electron app vs web app, design system, the stack. Samin asks for an Electron app so it opens natively on Mac and Windows. If you don't care, say "just make it quick, I don't want to be involved in technical decisions right now."
6. **Hit go and let it generate the app-spec.txt.** That's the document that contains every single task AutoForge is about to hand to sub agents. This is your PRD, broken down.
7. **Know your alternatives.** Samin's second favorite is **GSD framework** (installs into Claude Code, no UI, just a plan). **Superpowers** is another one on GitHub. All of them use Claude or Codex under the hood — AutoForge just gives you a nice Kanban board to watch.

## Try it yourself

Open AutoForge. Name one real thing you want to build — a personal tool, a side app, the thing you keep telling yourself you'd pay for. Word-dump it and answer every clarifying question. Save the app-spec.txt to `artifact/`.

## Common stuck points

- Trying to give AutoForge a "perfect" idea. Don't. Word vomit is the right input — Claude will ask the right questions.
- Skipping the clarifying questions because they feel tedious. Those questions ARE the plan. Every one you skip becomes a bug.
- Using project names with spaces. Use hyphens — AutoForge will yell at you otherwise.

## Key takeaways

- The right order is idea → plan → MVP → take over and refine. Not "build me this thing."
- A shaky foundation means you'll loop forever. The plan step is what makes the foundation solid.
- AutoForge's real magic is the clarifying questions — it asks you about the little nitty-gritty details so you don't have to think of them yourself.
- Every plan becomes an app-spec.txt that gets broken into small tasks. Sub agents work through those one by one.
- GSD and Superpowers are solid alternatives if you want to experiment. All of them run on Claude Code or Codex under the hood.

## Resources

See `resources.md`.

## What you'll build

A plan. An `app-spec.txt` living in `artifact/` with every task AutoForge is about to run overnight.

## Next up

Day 23 →
