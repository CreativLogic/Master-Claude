# Day 14 — Let Claude Manage a Strategy While You Sleep

## Tools used in the video

- **Alpaca** — https://alpaca.markets/ — Paper + live brokerage with a full options API. The wheel bot executes through Alpaca.
- **Claude Desktop app** — https://claude.com/download — Where ~60% of the work lives. Used here to kick off the wheel and to install Claude Code for you.
- **Claude Code (CLI)** — https://claude.com/product/claude-code — The terminal version of Claude. Installs via a command you can get Claude Desktop to run for you, or grab from the docs.

## Links referenced

- Claude Code install docs — Google "Claude Code install" for the per-OS command (Mac, Windows, Homebrew).
- Claude Desktop download — needed before you can ask it to install the CLI on your behalf.

## Downloads / templates for this day

Wheel strategy prompt — paste into the first Alpaca paper trading Claude session:

```
Run a wheel strategy on Tesla using my Alpaca trading account.

STAGE 1 — SELL PUTS
Sell a cash-secured put on Tesla with a strike price around 10% below the current price.
Pick an expiration 2–4 weeks out. Collect the premium.
If the put expires worthless, sell another and keep collecting premiums.
If I get assigned, I have to buy the stock — move to Stage 2.

STAGE 2 — SELL CALLS
Once I own the shares, sell covered calls with a strike price around 10% above what I paid.
Pick an expiration 2–4 weeks out. Collect the premium.
If the call expires worthless, sell another. Keep collecting premiums.
If my shares get called away (sold), go back to Stage 1 and start again.

RULES
- Never sell a put unless I have enough cash to buy the shares if assigned.
- Never sell below my cost basis (what I actually paid).
- Track my premium across all cycles.
- Check my positions every 15 minutes during market hours — please set the schedule.
- If a contract hits 50% profit before expiration, close it early.
- Give me a daily summary at market close.
- Run this during market hours, do nothing outside market hours.
```

Install Claude Code (ask Claude Desktop to run this for you):

```
Hey, can you install the Claude Code CLI tool for me, please?
```

## Further reading

- **The Wheel Strategy explainer** — plenty of free breakdowns on YouTube if you want to see the math from different angles before you trust Claude with it.
- **Options basics** — puts vs. calls, strikes, premiums, expirations. Worth 30 minutes if any of the Stage 1 / Stage 2 flow was fuzzy.
