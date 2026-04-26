# Day 23 — Let AI Build Apps Overnight

> **Today's pain:** Building a real app should take weeks — and you don't have weeks.
>
> **Today's action:** Let AutoForge spin up parallel agents to build your app overnight. Leave your Mac on, wake up to a working Electron app.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `03:38:00` → `03:47:00` (see `video-section.md` for the transcript slice).

## Why this matters

Yesterday you made a plan. Today we watch it build itself. AutoForge spun 45 tasks into 91, flagged which ones are blocked by dependencies, and spun up multiple sub agents to run them in parallel. This is the actual overnight payoff — you leave your Mac on, the Kanban board moves on its own, and in the morning you've got a working Electron app. While that runs, we introduce the framework that decides what you should actually be automating in the first place.

## Step-by-step

1. **Watch the Kanban board fill up.** AutoForge creates backlog, in progress, review, done. Tasks that need another task done first get flagged as blocked. This is already happening on your AIOS, inside the Claude Code subscription, underneath your project folder.
2. **Let it run.** Samin's example went from 45 tasks to 91 — more tasks are better because it means more things can run sequentially at the same time, and every feature gets tested.
3. **Don't do this on a coin flip.** Samin's rule: only run the overnight loop after you've already made a quick prototype with plain Claude Code or Codex. You want to know the idea is worth 91 tickets before you burn tokens on it.
4. **Keep the computer on.** Ideally a Mac Mini. Leave it spinning all night. In the morning, open the dashboard — progress graph, dependency tree, all the logs, the terminals, and an assistant you can talk to about the codebase.
5. **Watch the first glimpse appear.** Samin's canvas app rendered for the first time mid-recording — draggable Electron window, file explorer, canvas tiles, markdown files. Built by sub agents on his Claude Code subscription. No Chrome, no browser. A real app.
6. **Now switch gears — introduce the SHIPS framework.** You've got the tool to build anything. The real question is: what should you automate first? Most people pick the shiny thing, not the thing bleeding their time. Samin's five-step framework fixes that — **S**can, **H**ook up, **I**dentify, **P**ackage, **S**cale.
7. **Step one of SHIPS: Scan.** Map out your workflows. The output is a chart he calls the **automation priority matrix** — every task you do in a week, scored by revenue impact (1-5) × feasibility (1-5) = total priority score. Alex's "content production" scored 5 × 4 = 14. That's what you automate first.

## Try it yourself

Leave AutoForge running. While it builds, open a spreadsheet and start the Scan step — write down every recurring task you did this week, time spent, and guess its revenue impact. Tomorrow we turn this into a real priority matrix.

## Common stuck points

- Closing your laptop overnight. It has to stay on. A Mac Mini is ideal because you can leave it running forever.
- Jumping into the overnight build without prototyping first. Validate the idea in 20 minutes before you hand it 91 tickets.
- Confusing "shiny tool" with "high priority." The SHIPS framework exists because most people automate the wrong thing and lose three months.

## Key takeaways

- Parallel sub agents turn one night into a week of iteration. The Kanban board does the orchestration for you.
- More tasks = better. More tasks means more sub agents running in parallel and more features getting tested.
- Only run the overnight loop on ideas you've already prototyped. Don't burn tokens on untested directions.
- Sharpening your axe becomes an addiction. Don't chase shiny new tools — solve the tasks that are actually bleeding your time.
- The SHIPS framework (Scan, Hook up, Identify, Package, Scale) is how you pick the right thing to automate first. Today starts with Scan.

## Resources

See `resources.md`.

## What you'll build

Two things in `artifact/`: a screenshot of your AutoForge Kanban board mid-run, and the first draft of your automation priority matrix spreadsheet.

## Next up

Day 24 →
