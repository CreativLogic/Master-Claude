# Day 26 — Make a Video Clone of Yourself

> **Today's pain:** You know you should post video, but you don't have time to film every day.
>
> **Today's action:** Record training data, create your HeyGen avatar, and generate your first AI avatar video.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `04:00:00` → `04:08:00` (see `video-section.md` for the transcript slice).

## Why this matters

Yesterday you made an ad with a stock model. Today you clone yourself — so every ad, hook, or B-roll shot can star you without you filming it. This is how you scale content without scaling your camera time, and it's one of the highest-leverage skills in the course. Honestly it's a little weird how realistic it gets.

## Step-by-step

1. **Go to HeyGen → Avatars.** In the left sidebar, click **Avatars**, then **Add a look**, then **Upload look**.
2. **Record your training video.** Hit **Record now**, turn your camera and mic on, and record yourself. Follow HeyGen's prompts for head turns and talking. Wait for the avatar to process.
3. **Start a fresh Claude session.** Make sure Composio is still connected and HeyGen is still wired up from Day 25. You're reusing the exact same plumbing.
4. **Prompt Claude with your avatar name and the scene.** Samin's version: "Hey, can you use the Composio API and with that use HeyGen. With HeyGen, I want you to create a video using the Samin Yasar Avatar, and then make a Seedance video of me shooting a YouTube video, and then I become Batman and jump off." Hit go.
5. **Download the result and review it.** Look for weird mouth shapes, off-tone voice, or Seedance misreading the scene. Samin's Batman clip worked — "I am the hero this studio deserves" — with small timing quirks.
6. **Lock a format you like and reuse it.** Standardize your hook style, aspect ratio, captions position. Once the format is set, Claude can crank variations on a schedule.
7. **Plug Seedance into the rest of your pipeline.** Use it for B-roll shots, reaction clips, or whole videos — Samin uses it to generate B-roll that drops into his real videos.

## Try it yourself

Record your avatar training video today. Even if you don't ship a finished clip, get the clone built. That unlocks everything else.

## Common stuck points

- **Screen recording cuts off during avatar capture.** Set your Mac to "never sleep" before you start, and close anything that might pop up notifications mid-record.
- **The avatar voice sounds flat or off-tone.** Re-record with more energy and variation. Flat input = flat clone. Don't whisper your training video.
- **Claude can't find your avatar by name.** Make sure the avatar is fully processed in HeyGen (green check) before you prompt Claude, and use the exact name HeyGen assigned.

## Key takeaways

- An avatar is training data. Record once, use forever.
- Same plumbing as Day 25 (Claude + Composio + HeyGen) — you just swap the stock model for "use my avatar."
- Standardize a format. That's what makes this scale — every ad feels like yours, not random.
- Seedance is good for more than talking-head. Use it for B-roll, scene shots, product demos.
- The weirdness is the point. When your clone says a line better than you would have on the tenth take, you'll get it.

## Resources

See `resources.md`.

## What you'll build

Save your avatar ID, one rendered video, and the prompt you used into `artifact/`. You'll reuse that prompt template dozens of times.

## Next up

Day 27 →
