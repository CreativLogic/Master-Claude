# Day 6 — Turn Any Workflow Into a One-Click Button

## Tools used in the video

- **Claude Skills** — reusable packaged instructions Claude can run on command. Access via Customize → Skills inside Claude. https://claude.ai <!-- verify URL -->
- **Skill Creator** — Claude's pre-built skill that helps you generate new skills from a prompt. Already installed in every Claude account — find it under Customize.
- **Opus model** — Anthropic's heavier reasoning model. Use for logical, multi-step tasks like building skills. Flip the model selector at the top of Cowork.
- **Slash commands** — type `/skill-name` inside Cowork to run any saved skill.

## Links referenced

- Customize panel — top-left sidebar of Claude app, then "Customize." That's where Skills live.
- Claude Skills docs — https://support.anthropic.com <!-- verify URL -->

## Downloads / templates for this day

The "beefy prompt" Samin dictated on camera to turn a process into a skill. Copy it, swap the specifics for your workflow, and run with Opus selected:

```
We just spent some time building a deck. What I want you to do is turn this
into a repeatable skill that I can run every week with one command.

Here's what the skill should do:

First, gather. Connect to Google Drive, pull the latest weekly receipts, the
credit card statements, the finance data, the ad platform reports, the
PostHog analytics — all the stuff we just did. Make sure you gather that.

Then, categorize all the expenses by channel — paid ads, organic, all those.
Same as what we just did.

Then create the bar graphs and pie charts — whatever we need — and follow the
same structure for the slides. Look at all the slides — executive summary,
agenda, PNL snapshot. Same way. That's the output I'm looking for.

So every week, if I say /weekly marketing report, run this whole process
autonomously. Now go make me the skill.
```

## Further reading

- Anthropic's skills announcement (context for why skills exist and where they're headed) — https://www.anthropic.com/news <!-- verify URL -->
- Samin's deeper dive on skills: see his YouTube video on Claude Skills for the full walkthrough.
