# Start Here

3 minutes. Then you're in.

## 1. Prerequisites

- **Claude Code** — install from https://claude.com/product/claude-code
- **Claude subscription** — Pro ($20/mo) is enough to start. You'll need Max ($100+) by around Day 10.
- **Git** — you already have it if you're reading this on your machine.
- **A terminal** — macOS Terminal, iTerm, Warp, or whatever. Warp is what Samin uses.

## 2. Clone this repo

```bash
git clone <this-repo-url> claude-course
cd claude-course
```

## 3. Find where you are

```bash
./scripts/where-am-i.sh
```

This reads `PROGRESS.md` and prints the next day you haven't finished, plus the exact command to start it.

Output looks like:
```
You're on Day 3 — Your First Project: Make Claude Do Real Work
Range: 09:57–23:04

Next step:
    cd days/day-03-first-project
    claude
```

## 4. Go to that day and open Claude

```bash
cd days/day-03-first-project
claude
```

Claude Code will read the per-day `CLAUDE.md` and open as your tutor for Day 3. You can talk to it normally — ask about today's lesson, get unstuck, request clarifications.

## 5. Open the interactive worksheet

While Claude Code is running in the terminal, also open today's worksheet in your browser:

```bash
open worksheet.html            # macOS
xdg-open worksheet.html        # Linux
start worksheet.html           # Windows
```

Or just double-click `worksheet.html` in Finder / Explorer.

You'll see:
- **A checklist** of today's steps — check them off as you go (auto-saves to your browser).
- **Reflection prompts** — what you expected, what you did, what got you stuck, one thing you'll do tomorrow.
- **Save / Export / Reset** buttons — Export downloads a `.md` file you can drop right into `artifact/`.

The worksheet is a standalone HTML file. No server, no build step, no internet required. Works offline.

## 6. Finish the day

Every day ends with you putting something in the `artifact/` folder. That's your proof.

When you're done, the fastest path is: hit **Export as Markdown** on the worksheet, save it into `artifact/`. Or:
```bash
# from the day's folder
echo "done" > artifact/DONE
```

Then mark the checkbox in `PROGRESS.md` by hand, or run `../../scripts/mark-done.sh 3` from that day's folder (replace `3` with the day number).

## 7. Commit your progress

If you want to track your journey:
```bash
git add PROGRESS.md days/day-03-first-project/artifact/
git commit -m "Day 3 done"
git push
```

Your own fork becomes a record of the whole 28 days.

---

## How to use Claude as your tutor

When Claude Code is loaded in a day folder, try these:

- **"Where am I in today's lesson?"** — it tells you based on what's in `artifact/`.
- **"Walk me through step 2."** — it explains just that step.
- **"I'm stuck on X."** — pastes error or describes problem, Claude helps.
- **"Give me the exact prompt to copy."** — pulls from `resources.md`.
- **"Am I done?"** — Claude checks your `artifact/` folder and tells you what's missing.

Claude will not spoil later days. Tutor-mode only.

---

## Where to go when you're stuck

1. **Read the day's `lesson.md`** again — most issues are solved here.
2. **Ask Claude inside that day's folder** — it has the full context.
3. **Open a GitHub issue** — use the "Stuck on Day N" template. Include what you tried.
4. **Post in the community** — link in `docs/community.md`.

Now go finish Day 1.
