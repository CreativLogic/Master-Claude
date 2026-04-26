# Day 21 — Build Like a Real Engineering Team

> **Today's pain:** You tell Claude 'build me X' and end up in a loop of fixes — because you skipped how real teams actually ship.
>
> **Today's action:** Learn the build loop real engineering teams use, then install the setup (AutoForge + Codex) that copies it.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `03:17:00` → `03:27:30` (see `video-section.md` for the transcript slice).

## Why this matters

This is where the course shifts. Up until now you've been running single actions and schedules. From today on, we're getting long running teams of AI agents to build software for us overnight — a real SaaS, a real desktop app, the kind of thing that normally takes weeks. And the first move isn't writing code. It's understanding how real engineering teams ship, because that's exactly what we're about to copy with agents.

## Step-by-step

1. **Know what you're signing up for.** This chapter burns tokens. You'll want a Claude Max plan or a Codex plan (or both) because we're leaving agents running overnight. Don't start this on a free tier.
2. **Learn the loop before you run it.** Every software team follows the same repeatable process — PRD → tickets → code → review → test → merge. Then it loops. That's the shape we're handing to AI.
3. **Step one of the loop is the PRD.** Product requirement doc. What we're building, why, who it's for, what features, how users flow through it, edge cases. No code yet. This is the foundation — bad decisions here become bugs later and the AI will loop in confusion. Don't rush this.
4. **Step two: break the PRD into tickets.** Task 1 "build sign up page." Task 2 "test sign up page." Could be 200 tasks. You don't write these — AI will. Each ticket is scoped so one Claude sub agent can pick it up, finish it, and hand it off.
5. **Step three: agents action each task.** One master Claude agent spins up sub agents, assigns them to tasks, moves them across a Kanban board — backlog, in progress, review, done. Then it does it again for the next ticket. All night.
6. **Install AutoForge.** This is the software that runs that whole loop. Open Claude Code in a fresh folder and say: "Autoforge. Hey, can you spin this up, please?" Wait for it.
7. **Set up Codex as your backup.** Claude went down mid-recording — that's why redundancy matters. Google "Codex," download the Mac OS app, sign in with your ChatGPT subscription, switch to GPT-5 (Samin uses GPT-4.5/5-class). Now you can run the exact same Autoforge setup from Codex if Claude is ever down.

## Try it yourself

Pick the folder where your AI OS lives. Open Claude Code in it. Ask it to install AutoForge. While that spins up, download Codex on the side. That's today.

## Common stuck points

- Trying to do this without a Max plan — the agents will stall overnight when you hit rate limits.
- Skipping the PRD step because "AI will figure it out." It won't. It'll loop on the same bug for 3 hours.
- Only installing Claude. If Claude goes down (it does), your whole system is dead. Install Codex as a second brain from day one.

## Key takeaways

- Long running agent teams copy the real software engineering loop: PRD → tickets → agents → review → merge → repeat.
- The PRD is the foundation. Every bad decision here becomes a bug you'll pay for later.
- Tickets exist so each sub agent can fit one scoped task inside its context window. That's why we break things down.
- AutoForge is the tool that runs the whole loop for you. You steer, it builds.
- Never be dependent on one provider. Install Codex alongside Claude so when one goes down, you keep shipping.

## Resources

See `resources.md`.

## What you'll build

Drop your AutoForge install screenshot + your Codex install screenshot into the `artifact/` folder. Tomorrow we'll use both.

## Next up

Day 22 →
