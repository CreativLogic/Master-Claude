# Day 23 — Let AI Build Apps Overnight

## Tools used in the video

- **AutoForge Kanban dashboard** — <!-- verify URL --> https://github.com/autoforge — the backlog/in-progress/review/done board that watches sub agents ship tasks overnight. <!-- Samin, verify exact repo link -->
- **Claude Code sub agents** — https://docs.claude.com/en/docs/claude-code/sub-agents — how the master agent spins up children to work tasks in parallel.
- **Electron** — https://www.electronjs.org — the framework sub agents built Samin's canvas app with (native Mac/Windows app, not a browser tab).
- **Mac Mini (recommended always-on machine)** — https://www.apple.com/shop/buy-mac/mac-mini — what Samin runs for overnight jobs.

## Links referenced

- **Automation priority matrix** — Alex's example scoring system (revenue impact × feasibility = priority score). Template in the community classroom.
- **SHIPS framework** — Samin's five-step loop: Scan, Hook up, Identify, Package, Scale.

## Downloads / templates for this day

Starter template for the Scan step (paste into a fresh spreadsheet):

```
| Task                  | Hours/week | Revenue impact (1-5) | Feasibility (1-5) | Priority score |
|-----------------------|------------|----------------------|-------------------|----------------|
| Content production    | 5          | 5                    | 4                 | 14             |
| Email triage          |            |                      |                   |                |
| Lead research         |            |                      |                   |                |
| ... (add every recurring task from your week) |
```

Formula: `Priority score = Hours/week + (Revenue impact × Feasibility score)` — Samin ranks from that total.

## Further reading

- Abraham Lincoln quote Samin references: "Give me six hours to chop down a tree and I'll spend four sharpening my axe." The point: preparation is smart, but it can become its own addiction.
- Tomorrow's tools: ScreenPipe and RescueTime — the two apps Samin uses to Scan your workflow automatically instead of by hand.
