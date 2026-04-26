# Day 5 — Connect Claude to Your Email and Drive

> **Today's pain:** Claude can't touch your Gmail, Drive, or calendar — so you're still copy-pasting context in.
>
> **Today's action:** Connect Gmail, Google Drive, and one more tool using the built-in connectors.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `00:32:00` → `00:39:00` (see `video-section.md` for the transcript slice).

## Why this matters

Day 4 you built a project. But a project with no tools attached is just a chat with memory — it can't actually reach into your life. Connectors are the part where Claude stops being a smart friend you have to brief every time and starts being a coworker that already knows where the files live. This is the "G" in the GCPS framework we're building the whole week around — Gather.

## Step-by-step

1. **Hit the plus button and open connectors.** Inside Cowork (make sure your project is selected), click the plus icon and go to connectors. You'll see a list — HubSpot, Google Drive, Post Hog, Gmail, all that stuff. Flip on the ones you actually use. For the demo we've got Google Drive, HubSpot, and Post Hog turned on.
2. **Tell Claude where your stuff lives — in plain English.** Don't overthink the prompt. Something like: "Every week my team dumps expense receipts and invoices into our finance folder in Google Drive. Ad platform reports are in marketing. Post Hog has our website analytics. Everything else is in HubSpot." You're giving it the map, not writing a technical spec.
3. **Ask it to pull what it needs.** Same prompt, add the ask at the end: "I need to build the same PNL charts, revenue vs expenses, channel performance breakdown. Can you pull everything you need to do that for me?" Hit let's go.
4. **Watch the progress pane and steer mid-run.** Cowork splits into three things — a progress plan, working folders, and the files it's touching. This is where you can actually cue up a message mid-run, like "only work from the last week folder" — you can't do that in Chat.
5. **Check the file list when it's done.** Open the deck it made. Scroll through. The first pass probably won't nail your style — that's fine. This is the reality of working with AI.
6. **Iterate until it looks right.** Paste in a link to the old deck you liked and say "make sure the output follows the same structure, agenda, and slide order." Go back and forth until it's solid. Don't be precious about it.

## Try it yourself

Pick one repeating task that lives across two apps (Gmail + Drive is a good first one). Turn on both connectors, write one plain-English prompt that tells Claude where the data is and what you want, and let it run end-to-end once.

## Common stuck points

- **Starting from scratch instead of referencing a past output.** If you want consistent formatting, paste in a link to the deck/doc you liked last time. Claude needs a target to aim at.
- **Treating the first output as final.** First prompt isn't going to give you something perfect. Iterate. Add a second message with "make sure it looks like this" and keep going.
- **Forgetting to select the project first.** If your project isn't selected in Cowork, Claude won't have your context docs from Day 4 and you're basically starting cold.

## Key takeaways

- Connectors are Claude's hands — without them it's just talking, not working.
- The "G" in GCPS is Gather. Before Claude can process anything, it needs the raw inputs pulled from the right places.
- Cowork lets you steer mid-run. Chat doesn't. For professional work, default to Cowork.
- Your first prompt is a starting point, not a final answer. Going back and forth is the job, not a failure.
- Always paste a reference to the output style you want. "Make it look like this" beats "make it look nice."

## Resources

See `resources.md`.

## What you'll build

By the end of today, `artifact/` should hold the first deck Claude generated for you end-to-end — pulled from Drive, HubSpot, and Post Hog, then shaped into the structure you actually want. Save the final version and the prompt you used. You'll turn that prompt into a Skill tomorrow.

## Next up

Day 6 →
