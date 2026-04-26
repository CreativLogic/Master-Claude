# Day 27 — Edit Video With Plain English

> **Today's pain:** One long video should become ten clips — but timelines and drag-and-drop editors take an hour per clip.
>
> **Today's action:** Edit and clip your video with plain English using VibeFrame and Hyperframes, driven by Claude Code.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `04:08:00` → `04:15:00` (see `video-section.md` for the transcript slice).

## Why this matters

One long video should become ten posts, not one. Today you learn how Samin actually edits and clips his own videos — using open source tools (VibeFrame + Hyperframes) driven by Claude Code. No timeline, no drag-and-drop editor. Just plain English to Claude, and the clips come out ready to auto-publish through Blotato.

## Step-by-step

1. **Install VibeFrame.** Start a new Claude Code session in a fresh folder called `vibeframes`. Paste the VibeFrame GitHub URL (or npm link) and say: "Hey, can you set this up for me and install the MCP?" Let it run.
2. **Add your API keys.** VibeFrame needs OpenAI, Anthropic, Google, and ElevenLabs keys in its env file. Everything else is optional. Drop the keys in.
3. **Drag your long-form video into Claude.** Once VibeFrame is installed, drop the video file into the Claude chat so Claude knows which video you're talking about.
4. **Prompt Claude to make clips.** Something like: "I'm trying to make highlights for this video. I want a bunch of clips that answer specific questions, clipped from this video — like how Hormozi's highlights channel takes long videos and cuts them into shorts. Make the clips, put them in a folder, and show me." Hit go and wait.
5. **Install Hyperframes for motion graphics.** For vertical Instagram Reels with captions on the bottom and hooks on the top, start another Claude session with Hyperframes installed. Drag one clip in and say: "Install Hyperframes. With Hyperframes, take this clip and make it a vertical Instagram reel. Transcribe the video and put captions on the bottom, and put a hook on top."
6. **Review the output.** Samin's came back with the clip positioned correctly, captions at the bottom, a hook on top — usable as-is or one more iteration away from perfect.
7. **Push to Blotato to auto-publish.** Blotato (from earlier in the course) takes the finished clips and schedules them across every platform on autopilot. That's the full pipeline: one video → Claude clips it → Hyperframes adds graphics → Blotato posts it everywhere.
8. **Check out Clicky.** Samin also shows Clicky — an open source AI companion that follows your cursor and tells you how to use any software. Paste the Clicky setup command into Claude Code, hit go, and you've got a co-pilot that points at buttons and explains what to click. This is a preview of where AI is going.

## Try it yourself

Pick one long-form video you already shot — even a Zoom recording. Run VibeFrame on it tonight. Get three clips out of it. Don't publish them. Just see the pipeline work.

## Common stuck points

- **VibeFrame install fails because of missing env keys.** All four keys (OpenAI, Anthropic, Google, ElevenLabs) need to be set before it runs. Claude will tell you which one's missing — fix and re-run.
- **Clips come back the wrong length or weird cuts.** Be specific in the prompt: "each clip should be 30–60 seconds, full sentences only, start with a hook." Vague prompts = vague clips.
- **Hyperframes layout looks squished.** Tell Claude the target aspect ratio explicitly ("9:16 vertical for Instagram Reels") and where the speaker should sit in the frame.

## Key takeaways

- You don't need a video editor anymore. Claude + VibeFrame + Hyperframes does it in plain English.
- Open source is where the real innovation is. Samin's whole editing stack is open source — the Frontier labs just copy it into their products later.
- One long video is raw material for ten short ones. Clip it, stylize it, schedule it.
- Clicky is a preview of the future: an LLM that follows your cursor and teaches you any software in real time.
- The skill is wiring tools together. The tools will change — the pattern won't.

## Resources

See `resources.md`.

## What you'll build

Drop your VibeFrame folder (or a link), three clips, and one Hyperframes-styled vertical into `artifact/`.

## Next up

Day 28 →
