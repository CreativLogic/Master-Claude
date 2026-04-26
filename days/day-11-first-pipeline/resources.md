# Day 11 — Build Your First Real Pipeline

## Tools used in the video

- **Claude Code (desktop app)** — where the whole pipeline lives. Click the **Code** tab in the Claude app. <!-- verify URL -->
- **Blotato** — social media auto-posting tool with MCP support. Connects Instagram, YouTube, X, and others. https://blotato.com
- **Firecrawl** — scraping and research connector, already set up in an earlier day. Used here to research daily AI/Claude topics. https://firecrawl.dev
- **Alpaca** — stock trading platform with a free paper-trading account. Where tomorrow's trading bot will live. https://alpaca.markets
- **Custom connector panel in Claude** — Customize → Connector → plus button → Add custom connector. This is how you paste an MCP URL for any tool.

## Links referenced

- Blotato: https://blotato.com
- Alpaca: https://alpaca.markets
- Firecrawl: https://firecrawl.dev
- GitHub (for the carousel skill from Day 10): https://github.com

## Downloads / templates for this day

**Carousel iteration prompt** (used after dropping in your headshot):

```
Hey, edit this skill so that it always uses my image, I just attached the image to you. Can you remake the carousel and open it up in my Finder again?
```

**Lock the skill permanently**:

```
Make sure you edit the skill to always use this picture, and save the skill inside this folder.
```

**The full pipeline prompt (research → carousel → auto-post → schedule)**:

```
Just like the carousel we generated, I want you to use Firecrawl to do research on new advancements and fun things happening in the world of AI and Claude.

Then make a carousel.

Then post that carousel with Blotato.

Just to test it out, do one right now, and set a schedule that I want you to be doing this every day at 12 AM. I want to see that on the schedule as well.
```

**Alpaca connection test** (after pasting endpoint, key, secret into Claude Code):

```
I just gave you the documentation and my keys to connect to my Alpaca trading account.

I'm just testing the connection right now. Can you please buy one share of Apple? I want to see it inside my account.
```

**Save credentials so you don't have to paste again**:

```
Hey, can you make sure in this folder you save these credentials so I don't have to keep giving them to you when we want to trade? We're going to be using this account, and in this folder we're going to be doing a lot of trades.
```

## Further reading

- Blotato API / MCP docs: https://blotato.com <!-- Samin, verify exact docs URL -->
- Alpaca paper trading docs: https://docs.alpaca.markets <!-- verify URL -->
- MCP overview (if custom connectors are new to you) — covered earlier in the course.
