# Day 12 — Pick the Right Thing to Automate

## Tools used in the video

- **Claude Code (desktop app)** — where the trading bot lives and the schedule is managed. <!-- verify URL -->
- **Alpaca (paper trading account)** — free fake-money trading account. Set up in Day 11; today we actually use it. https://alpaca.markets
- **Claude Code scheduled tasks (clock icon)** — local tasks that run on a cron-like schedule. Open the clock icon on the left side of Claude Code to see and manage them. Tasks run when your computer is on.
- **`/schedule` slash command** — how Claude creates a scheduled task on your behalf. Just tell Claude "use slash schedule to set this up" in your prompt.

## Links referenced

- Alpaca dashboard: https://app.alpaca.markets <!-- verify URL -->
- Alpaca API docs: https://docs.alpaca.markets <!-- verify URL -->
- Samin's classroom — Skills Vault (contains the trailing stop prompt and docs for learners who want the pre-built version): in the community Classroom → Skills <!-- Samin, verify exact link -->

## Downloads / templates for this day

**The full trailing stop strategy prompt** (paste into your `Trading` folder in Claude Code):

```
I want your help to schedule a trailing stop strategy on Tesla.

Buy Tesla using my Alpaca paper trading account — 10 shares at market price right now.

Set up these rules:

Floor:
- If the stock drops by 10%, sell everything. That's my stop loss. I don't want to lose more than that on this trade.

Trailing floor:
- If the stock goes up 10% from what I paid, move my stop loss up.
- Move it up to 5% below the current price.
- Every time it climbs, move the floor another 5% up.
- The floor only goes up, never down.

Ladder in:
- If the stock drops 20%, buy 10 more shares.
- If it drops 30%, buy 20 more shares.
- This way I'm getting better prices on the way down instead of just losing money.

After you set this up, show me a summary of every order right after you place it.
```

**Scheduling the ongoing check**:

```
During market hours every day, check consistently when we need to move our floor up, or make new stop losses, or re-enter.

Use slash schedule to make sure we have that going. Set your own schedules.
```

**Scenario role-play prompt** (pressure-test before going live):

```
Briefly and really quickly, can you tell me what would happen if Tesla shoots up to $500 randomly? What would you do?
```

**Iterating the ladder logic**:

```
Can you think about what are good ladder buys, and make sure you set that up in the schedule and update the strategy inside our whole strategy of what we're trading right now.

As the price goes up, it buys in gradually, so we're always at somewhat of a profit and we're pretty safe in our buys.
```

## Further reading

- Alpaca trading API + MCP docs for Claude: https://docs.alpaca.markets <!-- verify URL -->
- Trailing stop strategy explained (general finance reading) — any broker's education section covers this, or ask Claude to explain alternative exit strategies.
- Next level of this course: showing Claude where the smart money is, so it stops trading on gut feelings and starts trading on information.
