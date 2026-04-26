# Day 24 — Turn Your Top Task Into a Skill

## Tools used in the video

- **ScreenPipe** — https://screenpi.pe — records your screen + audio locally, data never leaves your machine. Tell Claude "hey, set this up for me" and it installs.
- **RescueTime** — https://www.rescuetime.com — easier workflow tracker if you're not technical. Samin recommends the $12 bundle with time sheets.
- **Claude Skills Vault (Samin's community)** — <!-- verify URL --> inside the Skool classroom — source for the ecom ads skill and memes ad skill Samin downloads on camera. <!-- Samin, verify exact community link -->
- **Nano Banana Pro** — https://deepmind.google/models/gemini-image/pro/ — the image model the ecom ads skill uses for product composites (bottle-in-scene renders).
- **Composio** — https://composio.dev — the connector layer that hooks Claude to Meta Ads and other tools for closed-loop iteration.

## Links referenced

- **Meta Ads via Composio** — connect your Meta Ads account so Claude can read which ads perform and generate new variants on a schedule.
- **Evolving brain sync** — Samin's example of a scheduled skill already running inside his AI OS.
- **Research scheduler** — Samin's own Twitter scraper that finds Karpathy's newest posts, SEO agents, and suggests new automations daily. An example of the Scale step.

## Downloads / templates for this day

The priority matrix prompt — paste this into Claude after dumping your RescueTime or ScreenPipe time sheets:

```
Here's a time sheet of my last [week / two weeks] of work. Build me an
automation priority matrix from it. Columns: task, hours/week, revenue
impact (1-5), feasibility (1-5), priority score (hours + revenue × feas).
Sort by priority score descending. Then pick the top three and write a
one-paragraph plan for each on how I'd turn it into a Claude skill plus a
cron schedule.
```

The Scale step cron prompt — paste into Claude once to set it up:

```
Every [day / week], look at what I've been doing based on my ScreenPipe or
RescueTime data, and give me a report on the things I can automate that
would be highest ROI. Suggest three new skills I haven't built yet and
write a one-line brief for each.
```

The ad skill invocation from the demo:

```
Hey, can you use the ecom ad skill I just put in here. For this product
create some image ads for me, please. Make a new folder, Alex Pink Bottle.
```

## Further reading

- Samin's ecom ads skill (the one used in the demo): search his community's Claude Skills Vault for "product ads" and "memes ad skill."
- Composio's connector list: https://composio.dev/tools — see every service you can wire Claude into for closed-loop automation.
