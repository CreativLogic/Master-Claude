# Day 10 — Meet Claude Code — The Power Version

> **Today's pain:** Cowork hits a wall when you want Claude to touch your real files, folders, and repos.
>
> **Today's action:** Install Claude Code, open it in your first folder, and write your first CLAUDE.md.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `01:14:12` → `01:23:00` (see `video-section.md` for the transcript slice).

## Why this matters

Cowork is a contractor in their own office. Claude Code is someone sitting at your desk, on your computer, with your files open. Everything you build from here on — pipelines, agents, automations — lives on your actual machine. This is where you stop playing and start shipping.

## Step-by-step

1. **Understand what Claude Code is.** Claude Code is basically Claude running inside your operating system. Unlike Cowork, it doesn't use a virtual machine or a sandbox — it uses your actual files on your actual computer. Chat is texting a smart friend. Cowork is hiring a contractor who works in their own office and hands deliverables back through a window. Claude Code is hiring someone who sits at your desk, on your computer, with everything open.
2. **Open Claude Code in the desktop app.** At the top of the Claude app, you'll see a tab that says **Code**. Click it. When you see the little typing guy on the screen, you're in. (Claude Code also runs in your terminal, in VS Code, and inside other places — later levels will show when to use each. For now, stay in the desktop app.)
3. **Know the one limitation up front.** Claude Code can't access the old Cowork projects you were working with. If you want to use a folder you already have, drag the folder straight into Claude Code and hit open — that's how you point it at your existing work.
4. **Reuse your skills and connectors.** Go to **Customize**. Every skill and connector you already set up in Cowork (Firecrawl, Blotato, Drive, HubSpot, PostHog) works here too. Nothing to redo.
5. **Decide what you're actually going to build.** Alex's plan from the weekly report was to shift budget from paid to organic content. So the build is a pipeline that generates Instagram carousels, researches topics, and posts them automatically. You're going to set that up end-to-end.
6. **Pull a skill from GitHub into your project.** Go to `github.com`, sign up with Google if you need to. Then grab the URL of an existing Instagram Carousel skill (Samin's community has one in the Skills Vault — copy its link). Back in Claude Code, create a new folder called `Carousel Maker`, switch the model to **Opus**, and paste the URL in with this prompt:

   > "Can you use the skill I just pasted? I want you to build out a carousel. The topic should be a long in-depth Claude course about how Claude skills can be stored on GitHub and how you can find more."

7. **Let it run, then open the output in Finder.** When it's done, just say "open it in my Finder" — Claude Code will control your computer, open the right folder, and show you the slides. If the carousel doesn't match your face or your style yet, that's fine. Tomorrow is iteration day.

## Try it yourself

Create one project folder in Claude Code today. Paste in a skill from GitHub (any skill you find useful). Run it once. Open the output in Finder. That's the whole flow — you'll repeat it a hundred times.

## Common stuck points

- **Trying to reopen an old Cowork project in Claude Code.** It won't work. Drag the project folder into Claude Code manually the first time.
- **Running Sonnet on a big build.** When the prompt is beefy — pulling in a GitHub skill, generating assets — switch to **Opus**. Sonnet is fine for "buy a share of Apple" level tasks. Save it for the easy stuff.
- **Not knowing where files saved.** If you don't know where Claude Code wrote your output, just tell it "open this in my Finder." Stop hunting manually.

## Key takeaways

- Cowork works in its own sandbox. Claude Code sits at your desk, on your computer, with your files.
- Chat for quick questions. Cowork for deliverables. Claude Code for anything that needs to persist on your machine or use your machine's resources.
- Drag folders in to open them. Claude Code won't see old Cowork projects on its own.
- Your existing skills and connectors transfer — check **Customize**.
- If you don't know where something is, tell Claude "open it in my Finder." It controls your computer now.

## Resources

See `resources.md`.

## What you'll build

By end of day, `artifact/` holds your first Claude Code project folder (`Carousel Maker` or similar), the GitHub skill URL you pulled in, and the first carousel output it generated. Ugly first draft is the point.

## Next up

Day 11 →
