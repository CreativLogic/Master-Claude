# Day 11 — Build Your First Real Pipeline

> **Today's pain:** You have a content workflow that still takes hours of copy-pasting across tools.
>
> **Today's action:** Build your first Claude Code pipeline — something that goes from idea to published end-to-end.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `01:23:00` → `01:33:42` (see `video-section.md` for the transcript slice).

## Why this matters

Yesterday you pulled in a skill and made a carousel. That's step one. Today you chain it: research → carousel → auto-post on a schedule. This is the first thing in the course that actually runs without you. Content on autopilot. You'll also connect to Alpaca so tomorrow you can put trading on autopilot too.

## Step-by-step

1. **Iterate the carousel until it looks like you.** Drop your headshot into the project folder. Then tell Claude: "Edit this skill so it always uses my image, I just attached it. Remake the carousel and open it up in my Finder again." If the copy isn't right or the background's wrong, just say that. This is the iteration loop — type, check, correct, type, check, correct.
2. **Lock the skill so future runs use the right image.** Once the carousel looks good, tell Claude: "Edit the skill to always use this picture, and save the skill inside this folder." Now every future carousel starts from your actual template.
3. **Set up Blotato for auto-posting.** Go to `blotato.com`, log in, open **Settings** on the bottom left. Connect your accounts (YouTube, Instagram, wherever you post). Then go to **API** — you'll see something that says Claude Desktop / Claude Cowork. Copy that MCP URL.
4. **Wire Blotato into Claude as a custom connector.** In Claude, go to **Customize → Connector → plus button → Add custom connector**. Name it "Blotato", paste the MCP, hit add. Then hit **Connect**, approve, and toggle **Always allow**. Done. Now ask Claude: "What accounts do you have connected in my Blotato?" to verify.
5. **Chain the pipeline end-to-end in one prompt.** Go back to your carousel project and tell Claude:

   > "Just like the carousel we generated, I want you to use Firecrawl to do research on new advancements and fun things happening in the world of AI and Claude. Then make a carousel. Then post that carousel with Blotato. Just to test it out, do one right now, and set a schedule to do this every day at 12 AM. I want to see it on the schedule too."

6. **Decide if you want a review step.** If you don't want fully auto-post, just tell Claude to stop after generating the carousel and wait for your approval. Then you review, tweak, and post manually. Same pipeline, with a human checkpoint.
7. **Preview what's next — connect Alpaca for Day 12.** The same pipeline pattern works for trading. Go to `alpaca.markets`, sign up, open the left-hand menu, flip to the **paper trading** account (fake money). Create one called "Trading Claude," give yourself $50,000. Scroll down to **API keys**, hit **Generate new API keys**, save all three: endpoint, key, secret. Open Claude Code, make a new folder called `Trading`, paste all three in. Then test the connection: "I just gave you the docs and my keys for my Alpaca paper trading account. Can you buy one share of Apple? I want to see it inside my account." When it shows up in Alpaca, you're wired up. Last step — tell Claude to save those credentials inside the folder so you never have to paste them again.

## Try it yourself

Pick one content output you do manually every week — a tweet, a carousel, a newsletter blurb. Build the full research → create → post pipeline today with Blotato. Run it once. Let tomorrow's scheduled run go live on its own.

## Common stuck points

- **Forgetting to hit "Always allow" on the connector.** If you don't, Claude will ask you to approve every single Blotato call mid-run and the pipeline hangs.
- **Mistyping the tool name in your prompt.** If you say "Lotato" instead of "Blotato", Claude tries to figure it out and guesses wrong. Just correct yourself — Claude Code lets you steer mid-conversation.
- **Testing Alpaca with real money.** Don't. Use the **paper trading** account. It looks identical and uses fake cash.
- **Not saving API keys to a file.** If you re-paste keys every session, you're doing it wrong. Tell Claude: "Save these credentials in this folder so I don't have to give them to you again."

## Key takeaways

- A pipeline is just a chain: research → create → post, one prompt, one schedule.
- Custom connectors are how you plug any tool with an MCP into Claude — Blotato, Firecrawl, anything.
- You can put a human review step in the middle anytime. Auto-post is optional, not required.
- The same pattern — connector + folder + scheduled prompt — is the setup for trading, reporting, outreach, anything.
- Save your API keys to a file in the project folder. You're not meant to paste them every time.

## Resources

See `resources.md`.

## What you'll build

By end of day, `artifact/` holds: your locked carousel skill (with your image baked in), a working Blotato connector, one post live on social, and your Alpaca `Trading` folder with saved credentials. Tomorrow that Alpaca folder becomes a trading bot.

## Next up

Day 12 →
