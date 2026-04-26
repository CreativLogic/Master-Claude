# Day 9 — Share What You Built With Others

> **Today's pain:** Your skills are locked inside your own setup — your team can't use any of them.
>
> **Today's action:** Bundle your best skill into a plugin, send it to a teammate, and install one of theirs.
>
> **Time:** ~15–20 minutes (watch + do)

---

## Watch

Video: `01:04:00` → `01:14:12` (see `video-section.md` for the transcript slice).

## Why this matters

You've spent the last week building skills for yourself. The real leverage starts the second your teammates can install them in one click. Plugins are how you go from "I use Claude" to "my department runs on Claude" — and they're the same thing an agency would sell to a client.

## Step-by-step

1. **Understand what a plugin actually is.** A skill is one app, like a calculator. A plugin is a whole toolkit bundled for a role — think of it like the IT department setting up your email, Slack, Drive, VPN, and HR portal the day you start a new job. One install, everything's there.
2. **Browse the plugins Anthropic already gives you.** Open Claude, go to **Customize**, and hit **Browse plugins**. You'll see ones for marketing, sales, legal — pretty generic, but good starter templates. Add one to see what's inside: brand review, competitive brief, content creator. It's just a bundle of skills.
3. **Bundle your own skills into a plugin by talking to Claude.** Go back into the project folder where your skills live (in the video, Alex is inside `PNL for boss`). Then word-vomit the plan: "Build me three plugins from the skills we've already created. Plugin one is the core toolkit — branded deck, data pulling from Drive/HubSpot/PostHog, weekly report skill, brand guidelines, required connectors. Plugin two is marketing ops — inherits the weekly marketing report, adds competitive brief and content performance skills. Plugin three is sales ops — pipeline report, deal stage analyzer, follow-up drafter pulling from HubSpot."
4. **Tell Claude the folder structure you want.** "For each plugin, create the folder structure with the skill MD files for every skill, include brand guidelines and templates, list all required connectors, and make each skill actually work."
5. **Save each plugin when it's done.** Hit save on all three. Then open **Customize** — you'll see your personal plugins appear right there.
6. **Share it with a teammate.** Open Finder, search for the project folder (e.g., `PNL for boss`), and you'll see the plugins sitting as folders. Zip one up, send it. Your teammate goes to **Customize → plus button → Create plugin → Upload plugin → browse files**, drops in your file, and they're running your workflow. (Method two: if you're on a Teams plan, share directly. Method three: GitHub — covered in a later level.)
7. **Notice what just happened.** You didn't write code. You spoke to Claude and it built a multi-step workflow you could hand to someone else. That's an agentic workflow. You've been building them this whole time without calling it that.

## Try it yourself

Today: bundle one skill you've used at least three times into a plugin. Send the zip to one person on your team. Ask them to install it and tell you what breaks.

## Common stuck points

- **Dumping too many skills into one plugin.** Plugins are bundled by role — marketing, sales, support. If you stuff ten unrelated skills into "my plugin," nobody knows when to use it.
- **Forgetting to list connectors.** If your skill needs HubSpot, Drive, or Firecrawl and you don't tell the plugin to require them, your teammate installs it and it fails silently. Bake connectors into the prompt.
- **Not knowing where the plugin file actually lives.** Open Finder, search the project name. Everything Claude saves in a project is a real folder on your computer — not hidden in the app.

## Key takeaways

- A skill is one app. A plugin is a toolkit for a role.
- You build plugins by talking — describe the roles, the skills in each, the connectors, hit go.
- Three ways to share: Teams plan, zip-and-upload, GitHub.
- Every skill you package up is also sellable. Alex built a hotel price tracker in an hour — every travel agency, e-comm brand, and SaaS company has the same problem.
- Talking to Claude and watching it build is already agentic workflow. Name it for what it is.

## Resources

See `resources.md`.

## What you'll build

By end of day, `artifact/` holds at least one plugin zip (or a folder structure screenshot) plus the prompt you used to generate it. Keep the prompt — you'll reuse it every time you bundle a new role.

## Next up

Day 10 →
