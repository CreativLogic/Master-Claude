# Claude Course — 28 Days to an AI Operating System

One short video + one small action per day. After 28 days you have a working AI operating system that runs your work.

This repo is the **interactive companion** to the course. Watch each day's video, then come here to do the work with Claude tutoring you the whole way.

## What's in here

- **28 day folders** — each with the written lesson, the exact prompts, the resources, and a `CLAUDE.md` that turns Claude Code into your tutor for that day.
- **An interactive `worksheet.html` per day** — open in your browser. Checklist, reflection prompts, save/export. Auto-saves to your browser so you can walk away and come back.
- **A `PROGRESS.md`** — check off each day as you go.
- **Scripts** — one command prints exactly where you are in the course and what to run next.
- **Skills folder** — the actual slash-command skills from the course, ready to install.

> **Videos live on YouTube / Skool.** They're too big for a git repo (4+ hours, 8GB). This repo is the work you do alongside them.

---

## Before you start

Watch the [START-HERE.md](START-HERE.md) file. It walks you through setting this repo up on your machine in 3 minutes.

## 30-second version

```bash
git clone <this-repo>
cd claude-course-github
./scripts/where-am-i.sh     # prints your next day + the exact command to run
cd days/day-01-welcome
claude                       # Claude Code opens with today's tutor loaded
```

That's it. You're in. Claude knows exactly what Day 1 is about and will walk you through it.

---

## The 28-Day Plan

- **Week 1 (Days 1–6)** — Understand Claude, set up, run your first real project.
- **Week 2 (Days 7–12)** — Put work on autopilot, scrape the web, meet Claude Code.
- **Week 3 (Days 13–18)** — Build real pipelines, set up your second brain, talk to Claude from anywhere.
- **Week 4 (Days 19–24)** — Step back, see your AI OS, build apps overnight with AI teams.
- **Bonus Week (Days 25–28)** — Make AI ads, clone yourself on video, edit with plain English.

Full day-by-day index: [INDEX.md](INDEX.md).

## How this repo makes it interactive

1. **Per-day Claude tutor** — every day folder has its own `CLAUDE.md`. When you `cd` into a day and run `claude`, Claude Code loads that file and becomes your tutor for that day. It knows the pain, the action, the steps, the prompts, and the common stuck points. Ask it anything — it won't spoil later days.
2. **Per-day interactive worksheet** — every day has a `worksheet.html`. Open it in your browser to get a live checklist of the day's steps, reflection prompts, and a "save as markdown" button. Auto-saves to your browser so you can walk away. Export your filled-in worksheet straight to `artifact/` when you're done.
3. **Progress tracking** — check off each day in `PROGRESS.md`. Commit it back to your own fork to see your journey.
4. **Copy-paste prompts** — every prompt Samin uses on camera is in the day's `resources.md` as a code block. Copy, paste, go.
5. **Artifact folders** — every day has an `artifact/` folder. That's where what you build lives. After 28 days you have a folder full of proof that you actually did the work.
6. **Stuck-on-day issues** — use the GitHub issue templates to ask for help on a specific day. The community answers.

---

## Who this is for

- You've heard of Claude but mostly just chat with it.
- You've heard of Claude Code but haven't built anything real with it.
- You want to automate the boring parts of your job.
- You'd rather DO than WATCH.

If you only want to watch — that's fine, the videos stand alone. But the people who clone this repo and do the work are the ones who finish with a working AI OS.

---

## License

MIT. Use it, fork it, ship it.
