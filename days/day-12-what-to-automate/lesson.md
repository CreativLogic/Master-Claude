# Day 12 — Pick the Right Thing to Automate

> **Today's pain:** You're trying to automate everything at once and getting nowhere.
>
> **Today's action:** Use the Automation Priority Matrix to pick ONE high-leverage workflow and start there.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `01:33:42` → `01:42:30` (see `video-section.md` for the transcript slice).

## Why this matters

The worst thing you can do is hand your AI a pile of money — or a pile of work — and say "go figure it out." The right things to automate are rule-based decisions you'd otherwise make manually, over and over. Today you encode your own rules into a Claude trading bot using the trailing stop strategy. Same pattern works for any repeatable decision — approvals, outreach, triage, pricing. Rules are the leverage.

## Step-by-step

1. **Understand why rules are the whole point.** Claude isn't here to "figure out trading." Think of it like a smart thermostat. Once you set the rules — drops below 68, heat kicks on; above 75, AC kicks on — the thermostat handles it all day while you stop fiddling with your phone. Trading works the same way. You encode the rules once. Claude executes thousands of decisions a day at a speed and discipline you could never match manually.
2. **Learn the trailing stop strategy (the example).** You buy a stock at $100. Set a floor: if it drops to $95, sell. That's your max risk — $5. Now if the stock climbs to $110, you want to move the floor up to $105 so you're locking in profit. If it dips and hits $105, you still walk away up $5. If it keeps climbing to $115, floor moves to $110. You can never fall back to where you started. That's the trailing stop. You set the rules once, Claude follows them every second.
3. **Word-vomit the strategy to Claude.** Back in your `Trading` folder in Claude Code (from Day 11), tell Claude:

   > "I want your help to schedule a trailing stop strategy on Tesla. Buy Tesla using my paper trading account — 10 shares at market price right now. Set up these rules: floor, if the stock drops by 10%, sell everything — that's my stop loss. Trailing floor, if the stock goes up 10% from what I paid, move my stop loss up to 5% below the current price. Every time it climbs, move it another 5% up. Floor only goes up, never down. Also ladder in — if the stock drops 20%, buy 10 more shares; if it drops 30%, buy 20 more. This way I'm getting better prices on the way down instead of just losing money. After you set this up, show me a summary of every order right after you place it."

4. **Verify in Alpaca.** When Claude's done, open Alpaca's dashboard. You should see Tesla bought, and a stop-loss sitting at the floor price. If both are there, your rules are live.
5. **Put Claude on a schedule so it keeps checking.** One trade isn't enough — the floor needs to move up as the price climbs. Tell Claude:

   > "During market hours every day, check consistently when we need to move our floor up, make new stop losses, or re-enter. Use slash schedule to make sure we have that going. Set your own schedules."

   Now go to the clock icon on the left side of Claude Code, open it, and you'll see a local task like "Tesla trailing stop monitor" running every 5 minutes, Monday–Friday, 9 AM onward. You didn't touch a thing — Claude set up its own schedule.

6. **Role-play scenarios to pressure-test the rules.** Ask Claude: "Briefly, what would you do if Tesla shoots up to $500 randomly?" It'll walk you through exactly what the trailing stop does on the way up. Do this for a few edge cases before trusting it with bigger positions. If the logic's wrong, just say "change this around" and it rewrites the rules.
7. **Add the layers you missed.** Samin realized ladder buys weren't triggering yet, so he said: "Think about what are good ladder buys, set them up in the schedule, and update the strategy in our whole plan." Claude came back with levels — at −15% buy 10%, at −50% buy 50%. Iterate until the rules match the way you'd actually think about it.

## Try it yourself

Pick one rule-based decision in your life — stock, outreach cadence, content reposting, review triage — and write the rules in English like you would for a new hire. Paste it into Claude Code inside a dedicated project folder. Role-play three scenarios before letting it run live.

## Common stuck points

- **Vague rules.** "Buy when it's a good deal" is not a rule. "If price drops 10% from my entry, buy 10 more shares" is a rule. Be specific, use numbers.
- **Skipping the role-play step.** Before you put anything on a schedule, ask "what would you do if X happens?" for at least three scenarios. You'll catch broken logic before it costs you.
- **Using real money on day one.** Paper trading exists for a reason. Same for other automations — dry-run before live-run.
- **Letting Claude set the strategy.** The strategy is yours. Claude's the executor. If you hand off the thinking, you're not automating — you're gambling.

## Key takeaways

- The best things to automate are rule-based decisions you already make manually.
- Claude executes rules at a speed and discipline you can't match. You encode the rules. It runs them.
- Trailing stop is the worked example — floor only goes up, never down. Same shape applies to any "if X, then Y" decision.
- Use `/schedule` (or just tell Claude to use it) so the bot keeps checking on its own. Check the clock icon to see local tasks running.
- Role-play scenarios before going live. "What would you do if X happens?" is the cheapest test you can run.

## Resources

See `resources.md`.

## What you'll build

By end of day, `artifact/` holds your `Trading` folder with: saved Alpaca credentials, the written trailing stop strategy, and a scheduled local task checking the floor every 5 minutes during market hours. Optional: a second folder applying the same pattern to a non-trading workflow (outreach, content, triage).

## Next up

Day 13 →
