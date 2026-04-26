# Day 15 — Pick the Right Claude for the Job

> **Today's pain:** You only know one way into Claude — and it's the wrong one half the time.
>
> **Today's action:** Learn all the places Claude lives (desktop, VS Code, Warp, Canvas, Mac Mini) and pick the right door for each job.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `02:03:00` → `02:18:00` (see `video-section.md` for the transcript slice).

## Why this matters

The desktop app is one door into the house. The terminal is another. VS Code, Warp, a canvas — all different doors into the same Claude, same projects, same CLAUDE.mds. Each door is better for a different job. If you want your agents running while your computer is asleep, you need to pick the right doors. Today we walk through all of them.

## Step-by-step

1. **Sync the terminal session back to desktop.** In the terminal, run `/remote control` and enable remote control from the session. Now reload the Claude Desktop app and the exact terminal session shows up there too — same conversation, synced both ways. Handy when you start in the terminal but want to keep going visually.
2. **Try VS Code as a door.** Download VS Code, open the Extensions tab, search "Claude," hit install. Click the little orange icon, sign in. You can chat Claude the same way as desktop, plus it has access to any file in your opened folder. Fair warning: if you close a session in VS Code, you'll probably lose it forever. That's why Samin still prefers the desktop for starters.
3. **Set up Warp.** Download Warp. It's a terminal built for agentic development. Hit "Get started." Pick "Agentic-driven development." Open a local folder (try your AIOS folder). Warp's wins: you can see all past conversations, there's a project explorer, you can share files with your team, and you can drop MCPs directly into it so everything lives in one place.
4. **Peek at Claude Canvas / Poppy AI.** This is Samin's favorite — he wrote this whole course inside it. It's a canvas with a file explorer, multiple Claude Code sessions running side by side, and you can drag files directly into prompts. You can spin up 4 versions of the same thing, pick the best, and keep going. It's local, so it uses your Claude subscription instead of burning API tokens.
5. **Try Anthropic's Agent Manager.** Go to `platform.claude.com`. Hit **Quick start**. Understand the three concepts: **environment** (a computer Claude spins up and manages), **agent** (with MCPs, skills, prompt, model), **sessions** (like individual Claude chats for that agent). Create an agent — e.g. "I want you to create an agent that writes my YouTube scripts using the Ralph Wiggum Copywriter skill." Hit go. Create a new session, say hi. You now have an agent running in the cloud — your computer can be off.
6. **Know the tradeoffs.** Agent Manager runs in the cloud, has built-in tools, session tracking, remembers context over time. But it doesn't use your Claude subscription — you pay API prices. That $200/month plan gets you ~$5k in usage. Same workload on Agent Manager, you'd spend the $5k. You're also locked to Claude models — no swapping in a better OpenAI or Gemini model when one drops.
7. **The Mac Mini solution (preview).** A lot of people are buying Mac Minis and running Claude Code on them 24/7. The Mac Mini becomes your local "server in the cloud" — you text it from your phone, it runs agents, and you don't pay API prices. Samin shows his own AI Agents Control Center briefly — dashboard, Kanban board, vault for keys, calendar for scheduled tasks, Telegram integration. We'll build the actual second-brain version of this starting Day 16 with Obsidian + terminal.

## Try it yourself

Install Warp today and open one of your existing project folders inside it. Run `claude` from Warp's terminal and watch the same session you started in desktop pick right up.

## Common stuck points

- **Trying to use Agent Manager without realizing you're on API pricing.** You'll burn through $200 in a weekend if you're heavy. Use it for production agents where reliability and remote access matter. Use your Claude Desktop/Code subscription for everyday building.
- **Losing VS Code sessions.** They're almost impossible to get back once closed. Use VS Code for one-shot file edits, not for long-running builds.
- **Not knowing which door to walk through.** Rough rule: desktop for everyday building, terminal for quick one-offs, Warp for team/dev projects, canvas for content work, Agent Manager for always-on cloud agents, Mac Mini for always-on local agents.

## Key takeaways

- Claude is one house. Desktop, terminal, VS Code, Warp, canvas, Agent Manager — different doors, same rooms inside.
- Every interface has its own advantage. Pick the one that matches the job.
- Anthropic's Agent Manager (platform.claude.com) runs agents in the cloud with session tracking and built-in tools — but it bills at API rates and locks you to Claude models.
- A Mac Mini gives you the same "always on" benefit without API bills or vendor lock-in.
- `/remote control` in the terminal syncs your session back to desktop. Useful when you want to switch views mid-task.

## Resources

See `resources.md`.

## What you'll build

Warp installed and running Claude. Optionally: one agent created inside `platform.claude.com` so you've seen how the cloud version works. Drop screenshots and your agent prompt in `artifact/`.

## Next up

Day 16 →
