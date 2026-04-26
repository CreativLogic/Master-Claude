# Day 16 — Build Your Second Brain in Obsidian

> **Today's pain:** Your life is scattered across Notes, Slack, Drive, and three different chat histories — your AI has no idea who you are.
>
> **Today's action:** Build a second brain in Obsidian that you and Claude can both work from.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `02:18:00` → `02:25:00` (see `video-section.md` for the transcript slice).

## Why this matters

An AI operating system is a layer you wrap around your work that has actual context on your life. It knows your projects, your goals, the people in your life, your meeting transcripts. For this to pay off, everything — your knowledge, your folders, your skills, your conversations — has to live in one place your AI can access. Today we build that place. Obsidian. Free. Open source. Perfect for a second brain.

## Step-by-step

1. **Know what you're measuring.** Samin's buddy Liam Ottley laid out three KPIs for whether an AIOS is actually working: (1) time away from your desk — how much of your day runs without you at a computer, (2) percentage of tasks heavily augmented or fully automated, (3) revenue per employee. If those three are moving up, the system's earning its keep.
2. **Download Obsidian.** Go to `obsidian.md`, download it, open it up. When it asks, create a new vault from a folder. Make a new folder — call it something like `evolving-brain` — and open that as your vault.
3. **Grab the evolving brain template.** Inside Samin's Skool classroom → Vault → Obsidian Second Brain → there's a link called "evolving brain template." Copy it.
4. **Let Claude set it up.** Open Claude (desktop), select the new `evolving-brain` folder you just made, paste the template link, and say: "Hey, can you set this up for me?" Claude scaffolds the whole structure — folder layout for projects, people, goals, transcripts, plus the two Obsidian plugins you need.
5. **Quit Obsidian, then relaunch it.** This is critical. The plugins only wake up after a restart.
6. **Test the terminal plugin.** On the left sidebar, click **Open terminal**. You now have a full terminal inside Obsidian. Type `claude`. Claude Code boots up right there — it has access to every file in your vault. That's the whole trick: your second brain and your AI share the same filesystem.
7. **Explore agent files.** Also on the sidebar, hit **agent files**. This is where you manage agents, skills, commands, and conversations across everything you're using. Pro move: inside Claude Desktop, copy any conversation's resume ID, paste it into agent files, and you can continue that exact conversation from inside Obsidian.

## Try it yourself

Install Obsidian today. Create the vault. Get Claude to scaffold the evolving brain template. Open the terminal plugin and run `claude` once inside your vault so you know it works.

## Common stuck points

- **Skipping the restart.** If you don't quit and relaunch Obsidian after Claude installs the plugins, the terminal and agent files buttons won't show up. This trips everyone.
- **Putting the vault inside iCloud or Dropbox.** Keep it local. Sync conflicts on a live vault will corrupt your notes and break plugin state.
- **Treating the vault like a notes app.** It's a filesystem. Claude reads these files directly. Structure the folders the way you want your AI to see your life — projects, people, goals, transcripts — and it'll act on what's there.

## Key takeaways

- An AIOS is a context layer around your work — it knows your projects, goals, meetings, people, and acts on your behalf.
- Three KPIs to measure it (credit: Liam Ottley): time away from desk, % of tasks augmented/automated, revenue per employee.
- Obsidian is free, local, open-source, and perfect as the second-brain container because every note is just a file Claude can read.
- The magic is the **terminal plugin** — running Claude Code inside your vault means Claude and your brain share the same filesystem.
- Quit and relaunch Obsidian after plugins install. Always.

## Resources

See `resources.md`.

## What you'll build

An Obsidian vault scaffolded with the evolving brain template, Claude Code running from inside it, and the agent files plugin wired up. Save a screenshot of your vault structure into `artifact/`.

## Next up

Day 17 →
