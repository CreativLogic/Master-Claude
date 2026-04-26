# Day 20 — Why Your Setup Should Improve Itself

## Tools used in the video

- **Evo** — GitHub repo that runs auto research loops on any codebase <!-- Samin, verify the exact repo URL — you called it "this thing called Evo that I found" -->.
- **Claude Code** — [claude.com/code](https://claude.com/code) <!-- verify URL --> — where you install Evo and run discover / optimize.
- **Lighthouse** — [developers.google.com/web/tools/lighthouse](https://developers.google.com/web/tools/lighthouse) — Google's page speed and quality auditor; one of the first metrics Evo surfaces.
- **Your Vercel-deployed site from Day 19** — the codebase Evo runs experiments against.

## Links referenced

- Andrej Karpathy's post on auto research and AI-researcher-style optimization loops <!-- Samin, drop the link to the exact tweet/post you're citing -->
- Evo GitHub repo install command (copied on-screen) <!-- Samin, paste the repo URL so learners can grab it -->

## Downloads / templates for this day

Prompt to install Evo:

```
Hey, can you set this up for me?
<paste the Evo install command from the GitHub repo>
```

Prompt for the discover phase:

```
Can you discover and tell me what kinds of experiments we can run for our website
in this codebase to see what we can do. Use Evo Discover.
```

Prompt for the optimize phase:

```
Now that we have this, can you give me a dashboard of Evo optimized for just loading speed?
```

Metrics worth pointing Evo at after page load:

```
- Conversion rate
- Revenue per visitor
- Email open rate
- Ad CPA / cost per acquisition
- Churn rate
- Lead response time
- Onboarding completion rate
- Content engagement rate
```

## Further reading

- Andrej Karpathy on X — he posts about optimization loops and AI-researcher workflows regularly; worth following if this concept clicks for you.
- The sub-agent pattern — Day 21 goes deep on how multiple sub-agents run wacky experiments in parallel, which is what makes Evo actually compound.
