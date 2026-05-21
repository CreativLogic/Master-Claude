# Master Claude — The Course.
## — 28 Days. One Conversation

This repo IS the course. You don't read it. You **talk to it.**

Paste this URL into Claude Code and ask it anything:

```
https://github.com/CreativLogic/Master-Claude
```

Claude Code clones it, loads the tutor, and you start a conversation. That's the whole UX.

---

## The 30-second start

Open Claude Code (terminal, desktop, or VS Code) and say:

> Hey, can you clone (https://github.com/CreativLogic/Master-Claude) and walk me through it.

Claude pulls the repo, reads the [CLAUDE.md](CLAUDE.md) tutor file, and you can immediately ask things like:

- *"What day should I start on?"*
- *"I'm on Day 6 — which skills do I need installed?"*
- *"Use the Website Cloner skill on `awwwards.com/sites/dinosaur-museum`."*
- *"Show me the prompts from Day 11."*
- *"Run today's worksheet for me."*
- *"I finished Day 4. Mark it done and tell me what's next."*

No menus. No `cd`-ing through folders. Just talk to Claude.

---

## What you can ask, by example

### "Where am I?"
Claude reads [PROGRESS.md](PROGRESS.md), figures out the first unchecked day, and tells you.

### "Which skills do I need for Day N?"
Claude opens [ALL-RESOURCES.md](ALL-RESOURCES.md), finds your day, and lists every tool, connector, and skill — with direct links into [skills/](skills/).

### "Can I have access to the [Website Cloner / E-com Ads / Reels Pipeline] skill?"
Claude reads the skill's `SKILL.md` and either:
- copies it into your `~/.claude/skills/` so it's installed locally, or
- runs the skill right in the conversation if you want it to use it now.

### "Use this skill on my product / site / video."
Claude loads the skill instructions and executes against whatever you point it at. The skills in this repo are designed to be ran directly:

| Ask Claude to… | Skill it'll use |
|---|---|
| Clone any website | [skills/clone-website/](skills/clone-website/) |
| Make 4 e-com ad creatives | [skills/ecom-adds/](skills/ecom-adds/) |
| Produce an Instagram reel | [skills/ai-reels-pipeline/](skills/ai-reels-pipeline/) |
| Render with Remotion correctly | [skills/remotion-best-practices/](skills/remotion-best-practices/) |
| Push course content to Skool | [skills/skool-cli/](skills/skool-cli/) |
| Write copy in a real voice | [skills/ralph-wiggum-marketer/](skills/ralph-wiggum-marketer/) |

### "I'm stuck on Day 12."
Claude pulls up that day's `lesson.md`, walks the steps, and stays scoped — it won't spoil later days unless you ask.

### "Mark Day 4 done."
Claude updates [PROGRESS.md](PROGRESS.md) and tells you exactly what's coming on Day 5.

---

## The 28-day arc

- **Week 1 (Days 1–6)** — Understand Claude. Set up. Run your first real project.
- **Week 2 (Days 7–12)** — Put work on autopilot. Scrape the web. Meet Claude Code.
- **Week 3 (Days 13–18)** — Real pipelines. Second brain. Talk to Claude from your phone.
- **Week 4 (Days 19–24)** — Step back. You have an AI OS. Build apps overnight.
- **Bonus (Days 25–28)** — AI ads. Video clone. Edit with plain English.

Full day-by-day map: [INDEX.md](INDEX.md). Every tool, link, and skill in one list: [ALL-RESOURCES.md](ALL-RESOURCES.md).

---

## What's actually in the repo

- **[days/](days/)** — 28 day folders. Each has a `CLAUDE.md` tutor, a `lesson.md`, a `resources.md`, a `worksheet.html`, and an `artifact/` folder for what you build.
- **[skills/](skills/)** — the actual slash-command skills from the course. Ready to install or run from inside Claude Code.
- **[CLAUDE.md](CLAUDE.md)** — the root tutor file. Claude Code reads this first.
- **[PROGRESS.md](PROGRESS.md)** — checkbox list. Claude updates it as you go.
- **[ALL-RESOURCES.md](ALL-RESOURCES.md)** — every tool / connector / skill referenced in the course, organized by day.

> **Videos live on YouTube + Skool.** Too big for git (~8GB). The repo is the conversation you have *while* watching.

---

## Want to clone it manually?

```bash
git clone https://github.com/CreativLogic/Master-Claude
cd Master-Claude
claude
```

Then ask Claude what to do next. It knows.

---

## License

MIT. Fork it, ship it, sell what you build with it.
