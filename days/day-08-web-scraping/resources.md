# Day 8 — Let Claude Scrape the Web for You

## Tools used in the video

- **Claude Chrome extension** — lets Claude drive your actual browser. Install from the Chrome Web Store. https://chromewebstore.google.com/ <!-- verify URL -->
- **Claude in Chrome connector** — the connector version of the extension, wired into Cowork. Turn on from the plus button → Connectors inside any Cowork task.
- **FireCrawl** — sandboxed browser service purpose-built for AI scraping. Handles anti-bot, CAPTCHAs, and keeps sessions logged in safely. https://firecrawl.dev
- **FireCrawl MCP** — the connector package that plugs FireCrawl into Claude. Find the install string at https://firecrawl.dev/mcp <!-- verify URL -->
- **Opus model** — use it for compound requests (scrape + schedule + save + compare + alert all in one prompt).

## Links referenced

- Chrome Web Store — https://chromewebstore.google.com
- FireCrawl homepage — https://firecrawl.dev
- FireCrawl MCP docs — https://docs.firecrawl.dev/mcp <!-- verify URL -->
- Customize panel → "Add custom connector" — inside the Claude app sidebar.

## Downloads / templates for this day

First-scrape prompt (swap out the specifics for your use case):

```
Hey, use FireCrawl to scrape hotel listings near the LA Convention Center on
Booking.com for April 20th to April 24th. Pull the hotel names, star ratings,
room types, prices, and any discounts or deals. Organize it into a clean
table and give me that table.
```

Scrape + schedule + compare prompt (run with Opus):

```
Schedule this to run every morning at 6am. Scrape all the hotels, call the
file LA-Hotel-Tracker.csv, and store it in my Drive.

Each row should have today's date, hotel name, room type, and nightly price.
Compare today's price to yesterday's. If anything drops more than $30, flag
it.
```

## Further reading

- FireCrawl docs — https://docs.firecrawl.dev
- MCP ecosystem overview — https://modelcontextprotocol.io <!-- verify URL --> — the same pattern (install string + API key) works for every MCP, not just FireCrawl. Worth skimming if you want to keep adding custom connectors.
