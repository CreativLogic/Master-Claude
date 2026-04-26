# Day 13 — Give Claude Eyes on Your Data

## Tools used in the video

- **Capital Trades** — https://www.capitoltrades.com/ — Free tracker for US congressional stock trades. Shows which politician bought what, when, and the performance of their trades. <!-- verify URL -->
- **Alpaca** — https://alpaca.markets/ — Commission-free paper + live brokerage with an API. Used here for the paper trading account Claude executes trades on.
- **Claude Code** — https://claude.com/product/claude-code — Where the copy-trading bot lives. New session per strategy so each one has its own wall.

## Links referenced

- Capital Trades front page — the data source Claude scrapes on a schedule.
- Alpaca paper trading dashboard — where you generate API keys for the new strategy account.

## Downloads / templates for this day

Starter prompt — paste into a new Claude Code session after giving it your Alpaca keys and the Capital Trades URL:

```
Hey, so I'm trying to set up a copy trading bot. I've also given you access to my Alpaca account. I want you to make a new folder inside this folder so we can have this running and have these schedules done.

What I want you to do:
1. Find a politician who has been having really good success in the stock market recently and is actively trading.
2. Copy their trades. Set up your cron jobs and schedules so you're always looking at Capital Trades to see what they're up to, and copy those trades. Buy and sell the same options they do — whatever you need to, just copy them. We're going to be tracking that over time.

You'll be using the Alpaca account I just posted the image of.
```

## Further reading

- **STOCK Act (2012)** — the law that forces members of Congress to disclose their trades within 45 days. This is why this data exists at all.
- **Unusual Whales congressional tracker** — paid alternative with deeper analytics on political trades, if you want to go further than the free version.
