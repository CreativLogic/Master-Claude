# Day 19 — Step Back — You Have an AI Operating System

> **Today's pain:** You've built a lot of pieces, but haven't seen how they fit together as one system.
>
> **Today's action:** Walk through the full AI OS you've built — portable, evolving, running automations on its own.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `02:54:40` → `03:09:59` (see `video-section.md` for the transcript slice).

## Why this matters

Most people using Claude are just typing one-off prompts into a chat window. You now have a living, breathing system that knows who you are, knows your business, and works for you whether you're at your desk or not. Today is the step-back moment — see the whole OS, then use it to ship something sellable in one sitting.

## Step-by-step

1. **See what you actually built.** Your AI OS is three things stacked: it's **portable** (lives in folders, synced to GitHub, open it from any device), it has **evolving context** (every meeting, email, and conversation grows the brain), and it **runs your automations** (briefings, reviews, dashboards — all firing without you). That unlocks working from anywhere, augmenting any task, and measuring revenue per employee.
2. **Open your evolving brain project.** In Claude Desktop, pick the Evolving Brain project. Same project works from Claude Code, Obsidian, or the desktop app — doesn't matter where you work from, it's all the same context.
3. **Clone a website you love, don't vibe-code from scratch.** Vibe-coded sites look generic. Go to [dribbble.com](https://dribbble.com), find a design you want (Samin grabs one with a dinosaur scroll effect), and install the website cloner skill from Samin's community: "Hey, can you please install the skill." Then run `/clone website` and paste the URL.
4. **Prompt the website.** "Build me a website like this for selling my AI services. Cool headline like 'killing headcount.' Build it in the same design so I can start sharing it." Because your AI OS already has your context, the copy will actually sound like you — it'll reference your content pipelines, your RAG systems, your real work.
5. **Save your progress to GitHub.** Right now your site is on localhost — only you can see it. Ask Claude: "Can you make this entire website project, make a repo in GitHub, and upload it there please?" If you don't have GitHub wired up, hit Composio → connect apps → GitHub, then come back. Every time you like a change, push it.
6. **Deploy to Vercel in one prompt.** Customize → connectors → browse connectors → Vercel. Authenticate, allow all. Back in Claude: "Can you upload this site to Vercel so I can share it with other people, please?" It takes a minute. Then click the link — your site is live on the cloud with its little dinosaur and everything.
7. **Add Stripe + gate the product in GitHub.** Sign up for Stripe. Customize → connectors → browse → Stripe → authenticate, allow all. Then in Claude: "This is a skill I have — can you make a fork of it and then make a product in Stripe such that when somebody buys this product, they get access to this GitHub repo?" Claude forks the repo, makes it private, wires up the Stripe → GitHub access flow.
8. **Sell it on the site.** Paste the Stripe link into Claude: "Can you add a big buy button right after the dinosaur section so someone can buy this website cloner skill?" Reload. You now have a live site, a product, and a checkout — all built from one AI OS.

## Try it yourself

Pick one skill or template you've already built. Clone one website you love from Dribbble. Ship the site to Vercel with a Stripe button on it by end of today. Even if nobody buys, you've just proven you can go from idea → live product in an afternoon.

## Common stuck points

- **Prompting a website from scratch.** It'll look generic and vibe-coded. Always start with a clone of something you actually like — the cloner skill is the difference between "basic template" and "near perfect replica."
- **Skipping GitHub and going straight to Vercel.** Vercel deploys from a repo. If your code isn't on GitHub, Claude can't push it to Vercel. Always: localhost → GitHub → Vercel.
- **Forgetting connectors need to be authenticated.** Vercel, Stripe, GitHub — each one needs you to go through the auth flow once in Composio or Claude's connectors panel. After that, Claude just uses them.
- **Not realizing the AIOS context is doing the heavy lifting.** The website headline and copy came from your brain folder, not from the prompt. That's why skipping Days 1–18 makes Day 19 feel like magic you can't reproduce.

## Key takeaways

- You have an AI OS. It's portable, it evolves, and it runs automations — that's not just a chatbot.
- Same project across Claude Desktop, Claude Code, Obsidian. It doesn't matter where you're working from.
- Clone, don't vibe-code. Dribbble + Samin's website cloner skill = sites that actually look good.
- GitHub = save progress. Vercel = go live. Stripe + GitHub = sell a product and gate access automatically.
- The whole website-to-checkout pipeline is just a few prompts once your connectors are hooked up.

## Resources

See `resources.md`.

## What you'll build

A live website deployed on Vercel with a Stripe buy button wired to a private GitHub repo. Drop the live URL and a screenshot of the Stripe checkout into `artifact/` — that's your first sellable thing built from the AI OS.

## Next up

Day 20 →
