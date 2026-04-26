# Day 26 — Make a Video Clone of Yourself

## Tools used in the video

- **HeyGen Avatars** — [heygen.com](https://heygen.com) — record a short video of yourself, HeyGen builds an AI avatar that can say anything you type.
- **Seedance 2.0** — [heygen.com](https://heygen.com) — the video model HeyGen uses to render scenes (Batman transformation, B-roll, etc.).
- **Composio** — [composio.dev](https://composio.dev) — the MCP connector that lets Claude drive HeyGen.
- **Claude** — [claude.ai](https://claude.ai) — where you write the prompt that builds the video.

## Links referenced

- HeyGen Avatars → Add a look — sidebar → Avatars → Add a look → Upload look (inside HeyGen).
- Seedance + Omni-reference — HeyGen's feature for feeding brand assets and context into generated video. <!-- verify URL -->

## Downloads / templates for this day

Avatar prompt template — swap the scene for whatever you want your clone to do:

```
Hey, can you use the Composio API and with that use HeyGen.

With HeyGen, I want you to create a video using the [YOUR AVATAR NAME] avatar.
Make a Seedance video of me [DESCRIBE THE SCENE — what you're doing, where you are,
any transformation or action].

Make the video and then download it or send me the link.
```

## Further reading

- Samin's avatar workflow — how he uses his clone for B-roll, ads, and hooks (see full transcript, 04:02:00 onward).
- HeyGen's voice cloning docs — pair a cloned voice with the cloned avatar for the full deepfake effect. <!-- verify URL -->
