# Day 19 — Step Back — You Have an AI Operating System

## Tools used in the video

- **Claude Desktop** — [claude.ai/download](https://claude.ai/download) — where you open the Evolving Brain project and run the build.
- **Dribbble** — [dribbble.com](https://dribbble.com) — designer showcase site; where Samin finds the dinosaur-scroll website he clones.
- **Website Cloner skill** — inside Samin's Claude Club community ([skool.com/claude](https://skool.com/claude)) <!-- Samin, verify URL --> — the skill that turns any live site into a near-perfect clone with your own content.
- **GitHub** — [github.com](https://github.com) — where your code lives; each push = saved progress.
- **Composio** — [composio.dev](https://composio.dev) <!-- verify URL --> — connector hub; used here to authenticate GitHub and Stripe with one click.
- **Vercel** — [vercel.com](https://vercel.com) — easiest cloud deploy; pulls from your GitHub repo and gives you a public URL.
- **Vercel MCP connector** — available in Claude under customize → connectors → browse — lets Claude deploy to Vercel directly from a prompt.
- **Stripe** — [stripe.com](https://stripe.com) — payments; Claude wires up products and checkout pages for you.
- **Stripe MCP connector** — available in Claude under customize → connectors → browse — Claude can create products, prices, and checkout links on its own.

## Links referenced

- The dinosaur-scroll inspiration site Samin finds on Dribbble <!-- Samin, paste the exact URL if you remember which shot it was -->
- Claude customize → connectors → browse connectors → Vercel
- Claude customize → connectors → browse connectors → Stripe

## Downloads / templates for this day

Prompt to install the cloner skill:

```
Hey, can you please install the website cloner skill?
```

Prompt to clone + brand a site:

```
/clone website
<paste the URL you want to clone>

Hey, build me a website like this for me selling my AI services.
Give it a cool headline like "killing headcount." Build it in the same design
so I can start sharing it with folks.
```

Prompt to save + deploy:

```
Can you make this entire website project, make a repo in GitHub, and upload it there please?
Then can you upload this site to Vercel so I can share it with other people, please?
```

Prompt to gate a product with Stripe:

```
This is a skill I have — can you make a fork of it and then make a product in Stripe
such that when somebody buys this product, they will be sent access to this GitHub repo?
Stripe and GitHub have a connection such that I can do that.
```

## Further reading

- Claude skills docs — once you see how easy the cloner skill is, you'll want to write your own. Browse skills inside Claude customize.
- Vercel deploy docs — if you want to understand what's happening under the hood when Claude pushes a site live.
