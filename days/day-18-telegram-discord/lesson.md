# Day 18 — Talk to Claude From Telegram and Discord

> **Today's pain:** You get ideas on walks and voice memos at 11pm — and none of it reaches your brain until you sit at your laptop.
>
> **Today's action:** Pair Claude to Telegram and Discord so your brain updates from wherever you are.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `02:40:00` → `02:54:40` (see `video-section.md` for the transcript slice).

## Why this matters

Your second brain is useless if it only lives on your laptop. Today you pair Claude Code to Telegram and Discord, so when you get a random idea on a walk, or a voice memo at 11 pm, it still lands in your evolving brain. Same Claude, same context, just reachable from your phone.

## Step-by-step

1. **Install Bun and make sure Claude Code is running.** Open your terminal, check that Bun is installed (if not, grab it), and type `claude` to spin up a session. If you already have Claude Code, you can skip the install step.
2. **Make a Telegram bot.** Open Telegram, search for `BotFather`, hit start, type `/newbot`, give it a name. Bot names are weirdly taken a lot — just keep trying until one sticks. BotFather hands you a token. Copy it.
3. **Install the Telegram plugin inside Claude.** In Claude Code, run `/plugin install telegram`, reload plugins, paste your BotFather token when prompted, hit yes + always continue. Then `/exit` and relaunch Claude with the command the plugin gives you.
4. **Pair your phone.** Open your bot in Telegram, hit start, DM it anything — it sends a 6-digit pair code. Run that code in Claude Code and allow the pairing. Now text "Hi" from your phone — you should see Claude respond, and if you watch your laptop, Obsidian is lighting up because Claude is reading from your evolving brain.
5. **Do the same for Discord.** Go to `discord.com/developers/applications`, create a new application (call it Alexbot or whatever), go to the Bot tab, reset the token, copy it. Scroll down and turn on message content intent, members intent, presence intent. Give it admin privileges. Save.
6. **Install the Discord plugin in Claude.** New terminal, run `claude`, then `/plugin install discord`, reload, run `/discord configure` and paste your token. Allow all.
7. **Invite the bot to your server.** Make a Discord server for yourself if you don't have one. Back in the developer portal, go to Installation, copy the install link, paste it in a new tab, authorize. Right-click your bot in the server → message → it sends a pair code. Paste that code in Claude Code to pair.
8. **Test it.** DM your bot "What was the last carousel I made about?" or "What do you know about Alex?" — watch it pull from your evolving brain and answer. You now have the same Claude, same context, from Telegram or Discord, anywhere.

## Try it yourself

Pair just Telegram today. Skip Discord if you're short on time — Telegram is the faster win. Send your bot one voice memo or one quick idea before you go to sleep. If it lands in your brain folder, you've leveled up.

## Common stuck points

- **Bot name taken.** BotFather rejects a lot of names. Just keep adding numbers and underscores (e.g. `alyx_demo_bot_123`) until it takes one.
- **Discord intents not enabled.** If you forget to flip on message content intent / members intent / presence intent, your bot will connect but not see messages. Scroll down on the Bot tab and flip all three.
- **Forgetting to relaunch Claude after install.** Both Telegram and Discord plugins need you to `/exit` and start a fresh Claude session with the command they print. If you skip that, the token never loads.
- **Getting stuck in setup.** Samin straight up says this part is hard. Don't spend a week sharpening the axe — pair one channel, then move on to building real stuff.

## Key takeaways

- Your AI OS is portable the moment you pair a channel. Same folder, same context, reachable from anywhere.
- Telegram + BotFather is the easiest win. Discord takes more clicks because of the developer portal + intents.
- Both plugins install with `/plugin install <name>` inside Claude Code, then configure with the token.
- The pairing flow is always the same: DM the bot → get a code → paste it in Claude Code → allow.
- This is sharpening the axe. Pair one channel and move on — the real leverage comes from what you build next.

## Resources

See `resources.md`.

## What you'll build

By the end of today you'll have at least one messaging channel (Telegram or Discord) talking directly to your evolving brain. Drop a screenshot into `artifact/` of your bot answering a question about your own life — that's the proof your AI OS is portable.

## Next up

Day 19 →
