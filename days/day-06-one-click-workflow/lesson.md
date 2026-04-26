# Day 6 — Turn Any Workflow Into a One-Click Button

> **Today's pain:** You type the same 400-word prompt every Monday just to run your weekly report.
>
> **Today's action:** Turn your recurring workflow into a Skill + slash command you can trigger with one line.

> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `00:39:00` → `00:45:01` (see `video-section.md` for the transcript slice).

## Why this matters

Yesterday you walked Claude through the whole report process end-to-end. Great. But here's the thing — next week you'd have to do it all over again. And the week after that. A Skill is where you package that entire back-and-forth into one slash command. It's the "S" in GCPS — the part that makes the work repeatable so you're not re-explaining yourself every Monday.

## Step-by-step

1. **Open the skill creator.** Go to Customize inside Claude. You'll see a few skills already pre-built — one of them is literally called "skill creator." Open it and look at it. It's a markdown file. That's all a Skill is — a written-down process. Think of it like a recipe card. The steps, the order, the measurements, the tools it references.
2. **Switch to Opus.** This part matters. Making a skill is a logical process — it's hard. Opus handles logical tasks way better than Sonnet. Flip the model selector to Opus before you prompt.
3. **Write the beefy prompt.** Don't be clever, just be specific. Tell it: what to gather (Drive, HubSpot, PostHog, all the connectors from yesterday), what to process (categorize expenses by channel — paid, organic, all that), what to output (bar charts, pie charts, executive summary, agenda, PNL snapshot — same structure as the deck you just liked). End with: "If I type slash weekly marketing report, I want you to run this whole thing autonomously."
4. **Save the skill.** Once Claude finishes generating, you can view the skill file (a bunch of text, don't worry about it) and hit save.
5. **Run it next week like Alex would.** Type `/weekly marketing report` and hit enter. That's it. Claude gathers from every source, processes everything, and spits out the deck — same quality as the manual run, one command.
6. **Or just say it in plain English.** You don't even have to use the slash. Say "make me a weekly marketing report" and Claude will search your skills database and run it on its own.

## Try it yourself

Take the prompt you used on Day 5 and turn it into a skill. Name the slash command something you'll actually remember — `/weekly-report`, `/monday-brief`, whatever. Run it once to make sure it works.

## Common stuck points

- **Using Sonnet to make the skill.** Sonnet is great for everyday stuff. For building the skill itself, use Opus. Logical heavy lifting needs the stronger model, even if it's a bit slower.
- **Skimping on the prompt.** The skill is only as good as the prompt that made it. Be specific about gather steps, process steps, and output format. Reference the exact deck structure you want — executive summary, agenda, PNL snapshot, whatever.
- **Thinking one-shot equals perfect.** First skill probably won't be perfect. Run it, see what breaks, open the skill file, tweak the instructions. That's normal.

## Key takeaways

- A Skill is basically a written-down process — a markdown recipe card that tells Claude: here are the steps, here's the order, here's what to do at each stage.
- Use Opus to build skills. Logical, multi-step packaging work needs the heavier model.
- Skills are the "S" in GCPS — Standardize. Without this step, you're re-explaining yourself to Claude every single week.
- You don't have to memorize the slash command. Say the name in plain English and Claude will find the skill and run it.
- One good skill replaces a whole process doc for your team. Share it, and everyone runs the same report the same way.

## Resources

See `resources.md`.

## What you'll build

`artifact/` should hold your first saved Skill file (export it or screenshot the skill pane) plus the deck that came out when you ran the slash command. That's your proof that the workflow went from "30-minute manual thing" to "one command."

## Next up

Day 7 →
