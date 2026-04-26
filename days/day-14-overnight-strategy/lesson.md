# Day 14 — Let Claude Manage a Strategy While You Sleep

> **Today's pain:** A good options strategy stops working the minute you can't manage it every day.
>
> **Today's action:** Teach Claude your rules and let it manage the strategy while you sleep.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `01:52:30` → `02:03:00` (see `video-section.md` for the transcript slice).

## Why this matters

Yesterday we copied what the smart money is already doing. Today we flip the table and become the insurance company — running the wheel strategy, where you collect premiums whether the stock goes up, down, or sideways. The problem with the wheel is management kills most people inside of a few weeks. That's where Claude comes in. It picks the strikes, rolls the contracts, and checks your positions while you sleep.

## Step-by-step

1. **Understand the wheel in one pass.** You sell a cash-secured put below the current price. If it expires worthless, keep the premium and sell another. If you get assigned, you own the shares at a discount (cost basis minus the premium you already collected). Then you sell covered calls above your cost basis. If those expire worthless, keep the premium. If they get called away, you pocket the stock gains plus both premiums. Rinse, repeat.
2. **Head back to your first paper trading Alpaca account.** This is the one from earlier in the course — not the copy-trading one from Day 13. Separate accounts, separate strategies.
3. **Paste the wheel prompt into Claude.** Give it the full spec: sell a cash-secured put ~10% below current price, pick expirations 2-4 weeks out, collect premiums. If assigned, sell covered calls ~10% above your cost basis. Never sell a put unless you have cash to buy the shares. Never sell below your cost basis. Close contracts at 50% profit. Daily summary at market close. Check positions every 15 minutes during market hours. Do nothing outside market hours.
4. **Hit enter and let it schedule itself.** Claude sets up the cron jobs, starts monitoring, and logs the trades. That's the wheel running on autopilot.
5. **Install Claude Code in your terminal.** The desktop app handles maybe 60% of what you'll build. But for managing multiple agents and running an AI operation, the terminal is the move. Open Claude Desktop and ask: "Hey, can you install the Claude Code CLI tool for me, please?" Claude does it for you because it already has terminal access. Or go to Chrome, search "Claude Code install," copy the install command for your OS, paste it into your terminal.
6. **Verify.** Open your terminal, type `claude`, hit enter. When you see the little Claude guy show up, you're off to the races. Same Claude, just a different door into the same house.

## Try it yourself

Run the wheel prompt in your first Alpaca paper account today. Then install Claude Code in your terminal so tomorrow you're ready for the multi-interface stuff.

## Common stuck points

- **Running the wheel in a live account first.** Don't. Use paper until you trust what it's doing. The wheel is mechanically simple but the assignment rules bite if you haven't watched it go through a cycle.
- **Skipping the "never sell below cost basis" rule.** If Claude ignores this you can lock in losses. Put it in the prompt explicitly every time.
- **Assuming the desktop app can do everything.** It can't. Install the CLI today. Multi-agent setups and the control center coming up need it.

## Key takeaways

- The wheel strategy pays you in every direction — up, down, or sideways — but the management is what kills most people. Claude handles the management.
- Paste a full spec into Claude: strike rules, expiration windows, profit-taking rules, schedule, market-hours-only. Then walk away.
- The desktop app is one door. The terminal is another door into the same house — same projects, same CLAUDE.mds, same Claude.
- Installing Claude Code in the terminal: ask the desktop app to do it for you, or run the install command from claude.com/code.
- Different interfaces have different advantages. Over the next few days we're going to walk through each door.

## Resources

See `resources.md`.

## What you'll build

A wheel-strategy bot running inside your first Alpaca paper account, plus Claude Code installed in your terminal. Save the wheel prompt and a screenshot of `claude` running in your terminal to `artifact/`.

## Next up

Day 15 →
