# Day 4 — Make Claude Feel Like a Teammate

> **Today's pain:** Chat is great for one-offs, but real work keeps repeating the same prompts over and over.
>
> **Today's action:** Open Claude Cowork in the desktop app and run a real working session — not just a chat.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `00:23:04` → `00:32:00` (see `video-section.md` for the transcript slice).

## Why this matters

Alex presented the deck. The CEO loved it. Then came the real ask: "do this every Monday." And that's where chat falls apart — Alex would have to gather all the files, drag them in, rewrite the same prompts, every single week. 20–30 minutes of busywork on repeat. Cowork fixes both problems. It's the next level up from chat, and it's the backbone for everything in Level 2 onward — connectors, skills, scheduling, dispatch.

## Step-by-step

1. **Check the prerequisites.** Cowork needs the **Claude Desktop app** (not the browser), on a **recent OS version**, with a **Pro or Max plan**. Free plan won't see Cowork. If you haven't upgraded, go to `claude.ai/upgrade` and get at least the $20 Pro plan.
2. **Open Cowork.** At the top of the Claude Desktop app you'll see a toggle between **Chat** and **Cowork**. Click **Cowork**. That's it. You're in.
3. **Bring your Project over.** Hit the project button, create a new Cowork project, and **import** the project you built on Day 3 (Alex imported `PL for boss`). Memory, system prompt, files — all preconfigured.
4. **Learn the GCPS framework.** Every real piece of work in Cowork follows four steps:
   - **G — Gather.** Use **connectors** to pull context in from Gmail, Drive, HubSpot, PostHog, wherever your data lives. No more dragging files.
   - **C — Contextualize.** Use **projects** to give Claude the framing — system prompt, memory, instructions. You already built this on Day 3.
   - **P — Process.** Let Claude run the whole workflow autonomously — analyze docs, build charts, draft the deck, chain the steps. You describe the end result, Cowork plans and executes.
   - **S — Standardize.** Package the output as a **skill** so it runs the same way every time. Put it on a **schedule** so it happens without you. Control it from your phone with **dispatch**.
5. **Start on G — connect your first connector.** In your project, hit the **plus (+) button → Connectors → Manage Connectors → plus (+) again → Browse connectors.** You'll see hundreds of official Anthropic partners. Pick the one your data lives in. Alex connected:
   - **Google Drive** — for team files, receipts, invoices.
   - **PostHog** — for website data.
   - **HubSpot** — for CRM (leads, funnel, conversions).
   
   Hit the plus on each one, authenticate with your account, done. Each one takes about 30 seconds.
6. **Understand what connectors actually are.** They're built on **MCP** — Model Context Protocol. You don't need to know how it works under the hood. Just know it's a secure standard Claude uses to talk to external apps. Your read/write permissions are respected — Claude only sees what you let it see.

## Try it yourself

Open Cowork today. Import your Day 3 project. Connect at least one connector — Google Drive is the easiest. Ask Claude inside Cowork: "what files do I have in my marketing folder?" See it reach in and pull without you dragging anything. Screenshot it and drop it into `artifact/`.

## Common stuck points

- **Being on the browser instead of desktop.** You won't see the Cowork toggle at all if you're on claude.ai in a browser tab. Open the desktop app.
- **Being on the free plan.** Cowork is Pro and Max only. If the toggle is missing and you're on desktop, check your plan.
- **Skipping the project import.** If you start a fresh Cowork session without importing your project, you lose the system prompt and files. Import first.
- **Getting weird about MCP.** You don't need to learn the protocol. Connectors are just "the thing that lets Claude log into your apps." Set them up, move on.

## Key takeaways

- Chat is for one-offs. Cowork is for recurring real work with multiple steps and multiple models.
- Cowork runs on a **virtual machine** — a sandboxed mini-computer inside your computer. It has its own file system and can interact with external services safely.
- **GCPS** is the framework for every piece of work in Cowork: **G**ather → **C**ontextualize → **P**rocess → **S**tandardize.
- **Connectors** fix the "drag files in every week" problem. Built on MCP. Setup takes 30 seconds per service.
- This is the hinge of Level 2. Everything from here — skills, scheduling, dispatch — stacks on top of Cowork.

## Resources

See `resources.md`.

## What you'll build

By end of today you'll have: Cowork opened in the desktop app, your Day 3 project imported, and at least one connector (Google Drive, HubSpot, or PostHog) authenticated and pulling data. Drop a screenshot of Claude pulling from a connector into `artifact/`.

## Next up

Day 5 →
