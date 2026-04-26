# Skills

Pre-built Claude skills used throughout the course. Drop any folder into `~/.claude/skills/` (or your project's `.claude/skills/`), restart Claude Code, and invoke the slash command the skill defines.

## Available skills

| Skill | What it does | Used in |
|---|---|---|
| [`ai-reels-pipeline/`](ai-reels-pipeline/) | Orchestrate AI Reels production — HeyGen avatars, B-roll curation, storyboarding, Veo clips, JSON configs, Remotion render | Day 26, 27 |
| [`clone-website/`](clone-website/) | Reverse-engineer and clone any website in one shot — extracts assets, CSS, content; dispatches parallel builder agents | Day 19 |
| [`ecom-adds/`](ecom-adds/) | Generate 4 scroll-stopping e-com ad creatives — customer research, Facebook Ads Library competitor analysis, Tavily references, Nano Banana 2 image gen | Day 25 |
| [`ralph-wiggum-marketer/`](ralph-wiggum-marketer/) | Marketer copywriter quality loop (DISCOVER → LEARN → RESEARCH → IDEATE → WRITE → CRITIQUE → ITERATE) used to write course scripts | Internal — script writing |
| [`remotion-best-practices/`](remotion-best-practices/) | Best practices for Remotion (React-based video creation) | Day 27 |
| [`skool-cli/`](skool-cli/) | Programmatically control a Skool classroom — rename folders, create/update pages, batch-push course content via Chrome MCP | Internal — course publishing |

## How to install a skill

1. Copy the folder into `~/.claude/skills/` (global) or `<project>/.claude/skills/` (project-local).
2. Restart Claude Code.
3. Run the slash command the skill defines (each `SKILL.md` lists its trigger).

See Day 6 for the full walkthrough on installing and triggering skills.
