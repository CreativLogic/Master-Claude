# Day 13 — Give Claude Eyes on Your Data

> **Today's pain:** Your automations run blind — no real signal, just gut feeling baked into prompts.
>
> **Today's action:** Wire Claude into a real-time data feed so it can make decisions on actual signals.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `01:42:30` → `01:52:30` (see `video-section.md` for the transcript slice).

## Why this matters

Most people's bots run on vibes. They prompt Claude with opinions and hope for the best. But the whales moving real money aren't guessing — they're reading filings, volume, and insider data the rest of us don't even know exists. Today we plug Claude into one of those feeds so it can actually see what the big players see.

## Step-by-step

1. **Pick a new paper trading account for this strategy.** In your Alpaca dashboard, hop into a separate paper account so this copy-trading bot stays organized and doesn't mix with the other strategies you're running. Hit **Generate Keys**, copy the API credentials.
2. **Open a fresh Claude Code session.** Start a new session so this bot lives on its own wall. Paste the Alpaca keys in.
3. **Grab the data source — Capital Trades.** Google "CapitalTrades," open it up. It's a free service that tracks US politicians' stock trades (they're legally required to disclose). Copy the URL.
4. **Drop this prompt into Claude.** Paste the Capital Trades URL and tell Claude: "I'm trying to set up a copy trading bot. You've got access to my Alpaca account. Make a new folder inside this folder. Find a politician with really good recent success who's actively trading. Copy their trades. Set up the cron jobs and schedules so you're always checking Capital Trades and copying what they do. Buy and sell the same options they do."
5. **Hit bypass permissions, then enter.** Let Claude work. Go make a coffee. When it finishes it'll have picked a politician (Michael McCaul in Samin's run), set a recurring schedule to check for new trades, and wired everything up against Alpaca.
6. **Ask Claude who it picked and why.** Follow up with "who are you copy trading and why?" so you know which politician the algorithm chose and its reasoning.

## Try it yourself

Set this bot up in a Alpaca paper account today. Let it run for a week. Check back in and see what it traded.

## Common stuck points

- **Mixing strategies in one paper account.** Make a separate Alpaca paper account for each bot. Otherwise your numbers get tangled and you can't tell what's actually working.
- **Forgetting to schedule.** If you don't tell Claude to set up cron jobs, it'll run once and die. The whole point is it keeps checking Capital Trades on its own.
- **Expecting intraday trades.** Politicians aren't day trading. They're required to disclose late, and they usually hold for a while. Even buying their trades a little stale still beats the S&P.

## Key takeaways

- Claude on its own can't scour the internet for real-time data — you have to plug it into services that already collect and organize it.
- Congressional trade data is public, free, and most of them beat the market. Capital Trades surfaces it.
- Backdated one year, copying McCaul on a $50k account would've produced ~34.8% vs. ~15% for buy-and-hold S&P 500.
- The MCP / skill is the plug. Data flows through the service, Claude draws from it whenever it needs to, and it becomes a new ability you can use.
- Separate paper accounts per strategy — so you can actually track what's working.

## Resources

See `resources.md`.

## What you'll build

A Claude Code session hooked into Alpaca and Capital Trades, running a scheduled bot that copy-trades the most active top-performing politician. Drop your prompt, your screenshots, and the folder Claude created into `artifact/`.

## Next up

Day 14 →
