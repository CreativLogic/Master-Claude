# Day 17 — Pull Your Life Into One Place

> **Today's pain:** Claude doesn't know who you are because your real context lives in Slack, Gmail, old ChatGPT chats — everywhere but one place.
>
> **Today's action:** Pull your ChatGPT exports and connectors into your brain, and set up a sync that keeps it fresh on its own.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `02:25:00` → `02:40:00` (see `video-section.md` for the transcript slice).

## Why this matters

Your brain lives in a bunch of different places right now. Slack, Discord, Gmail, Calendar, meetings, Notion, Obsidian, old ChatGPT chats, Claude chats, whatnot. Today we pull all of that into one folder so Claude actually knows who you are, and we set it up so the brain keeps updating itself while you sleep.

## Step-by-step

1. **Export your ChatGPT history.** Go to ChatGPT → settings (bottom left) → data controls → export data → confirm export. You'll get an email with a download. Pull that export into a new Finder folder called `my brain`. That's the dump point — this is where all your context is going to live.
2. **Sign up for Composio (free).** Go to composio.dev and sign up. Composio has the most amount of connectors — Gmail, Slack, Google Drive, Google Calendar, Twitter, QuickBooks, Stripe, Fathom, Fireflies, all the stuff. Connect whichever apps your life actually lives in.
3. **Wire Composio into Claude.** Go back to Claude, hit customize → connectors → add custom connector → paste the Composio install command. Authenticate, allow everything. Now Claude can reach into every app you connected.
4. **Build the second brain in one prompt.** Inside your evolving brain project, say: "Hey, can you use Composio and in this evolving brain make a bunch of markdown files such that you collect all the information from my YouTube, maybe get the transcripts, and essentially build my second brain. Go through all the apps I've connected in Composio and make me my brain." Let it rip.
5. **Make it a wiki.** Once the files are populated, prompt Claude: "Can you use this to build out my second brain? Ingest all the data and make me my wiki as well." It'll build a Wikipedia-style index — people, projects, health, side hustles, all graphed and linked together.
6. **Set up the self-evolving sync.** In Composio, connect your meeting tool (Fathom, Fireflies, Google Meet). Then tell Claude: "Set up a scheduled task so every Saturday at 6 pm, pull down all my meeting transcripts using Composio and Fathom, save them in here, and then process them into my second brain." Do this for every app you want evolving on its own.
7. **(Optional) Make the schedule remote.** If your computer won't always be on, use a remote scheduled task. Push your evolving brain folder to GitHub first, install the GitHub app in Claude, then run the same sync prompt as a remote task so it keeps working when your laptop is closed.

## Try it yourself

Export your ChatGPT history today. Just that. Drop the zip into a folder called `my brain`. You don't need to hook up every connector tonight — just get the first pile of context onto your machine so Claude has something to chew on.

## Common stuck points

- **Dumping everything at once and expecting magic.** You don't have to connect 10 apps on day one. Even just the ChatGPT export + Gmail via Composio is enough to build a real brain. You can add apps over time.
- **Skipping identity files.** Samin built in identity questions — answer those inside Obsidian before you run the big prompt. If Claude already knows you, the second brain gets way better.
- **Forgetting to pick remote vs local for scheduled tasks.** If your Mac sleeps, local cron jobs don't run. For always-on syncs (meeting ingests, daily briefings), use a remote scheduled task and put your brain folder on GitHub so the cloud agent can actually reach it.

## Key takeaways

- Your context is everywhere — ChatGPT, Gmail, Slack, meetings. Step one is dumping it all into one folder Claude can point at.
- Composio is the connector hub. One auth, and Claude can reach almost every app you use.
- One prompt ("go through all my connected apps and build my second brain") does the heavy lifting. You don't organize — Claude does.
- The wiki is graphed and linked. People, projects, goals, health — all searchable, all connected.
- Scheduled tasks are what makes the brain self-evolving. Remote > local if your computer isn't always on.

## Resources

See `resources.md`.

## What you'll build

You'll end today with an `artifact/my-brain/` folder populated with exported data from at least one source (ChatGPT, Gmail, or your notes) and a Claude-generated wiki index. Drop a screenshot of the wiki into `artifact/` so you can look back and see how far the brain has come.

## Next up

Day 18 →
