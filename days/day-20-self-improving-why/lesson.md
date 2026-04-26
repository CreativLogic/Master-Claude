# Day 20 — Why Your Setup Should Improve Itself

> **Today's pain:** Everything you've built is good, but nothing of it gets better on its own.
>
> **Today's action:** Understand the Karpathy pattern: pick a metric, let Claude run experiments, keep what wins.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `03:09:59` → `03:17:00` (see `video-section.md` for the transcript slice).

## Why this matters

Everything you've built so far is static. The carousel pipeline spits out the same kind of carousel every week. The website was built once and just sits there. Today you flip that — Claude runs its own experiments on a metric you pick, keeps what works, throws out what doesn't, and you wake up to a better version. All on its own.

## Step-by-step

1. **Understand the concept first.** Andrej Karpathy wrote about this — the same pattern AI researchers use to improve models can be applied to anything measurable. Give Claude a metric, and Claude will run hundreds of experiment cycles in the time you'd normally run one. If you can measure it, you can optimize it.
2. **Pick a metric that actually moves money.** Samin picks website page load speed because every 100 milliseconds kills conversions and a slow site is a leaky funnel. Other good candidates: conversion rate, email open rate, revenue per visitor, CPA, churn, onboarding completion, lead response time. If it's a number, it works.
3. **Install Evo.** Evo is a GitHub repo that makes auto research loops dead simple. Grab the install command from the repo, paste it in Claude, and say: "Hey, can you set this up for me?"
4. **Run discover first.** Prompt: "Can you discover and tell me what kinds of experiments we can run for our website in this codebase? Use Evo Discover." Claude surfaces a list — Lighthouse score, load speed, bundle size, cost-per-visitor, conversions, whatever your codebase supports.
5. **Run optimize.** Point it at one metric: "Now can you give me a dashboard of Evo optimized for just loading speed?" That's it — it's just two things, discover and optimize. This takes a while because Claude is actually running experiments.
6. **Open the Evo dashboard.** When it's done, the dashboard shows every experiment, every sub-agent that ran, every change that stuck and every one that got reverted automatically when it broke something. Samin's page load dropped by a bunch without him touching a single line of code.
7. **Apply the pattern to everything else.** Email open rates, ad CPA, landing page conversions, content engagement, onboarding completion, churn. Same loop. If a client asks "can you improve my X metric?" you can literally just point Evo at it overnight.

## Try it yourself

Pick one metric on one of your own projects — doesn't matter how small. Run `evo discover` on the codebase tonight. Just see what it surfaces. You don't even have to run the optimize step today — the discover output alone will show you what's possible.

## Common stuck points

- **Picking a metric you can't actually measure.** If you can't see the number today, Claude can't optimize it. Start with something that already has tracking — page speed, Lighthouse score, a dashboard you already have.
- **Expecting instant results.** Auto research takes time because it's actually running experiments. Kick it off before bed, check the dashboard in the morning.
- **Worrying about breaking your site.** Evo reverts anything that breaks things automatically. That's the whole point of measuring before keeping a change.
- **Trying to optimize a static output (like a single carousel).** Optimize the *system* (the skill or pipeline that produces carousels), not one artifact. The loop needs something it can vary and re-measure.

## Key takeaways

- If it has a number, Claude can optimize it. If it doesn't, make Claude theorize a number first.
- Auto research = hypothesize, experiment, measure, keep or discard. On repeat. Overnight.
- Evo is two commands: `discover` and `optimize`. That's it.
- Sub-agents do the actual experiment runs in parallel, which is why it compounds so fast.
- Optimization should be the last thing you worry about — set the loop, go to sleep, wake up better.

## Resources

See `resources.md`.

## What you'll build

An Evo dashboard showing at least one optimization run on a real project of yours. Drop a screenshot of the before/after metric into `artifact/` — that's the proof your setup is now improving itself.

## Next up

Day 21 →
