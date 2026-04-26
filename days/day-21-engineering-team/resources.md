# Day 21 — Build Like a Real Engineering Team

## Tools used in the video

- **AutoForge** — <!-- verify URL --> https://github.com/autoforge — open-source agent harness that runs the PRD → tickets → agents → review loop overnight. Samin uses it to spin up MVPs. <!-- Samin, verify exact repo link -->
- **Claude Code** — https://www.claude.com/product/claude-code — the agent CLI that executes the tickets AutoForge generates.
- **Codex (OpenAI)** — https://openai.com/codex/ — OpenAI's coding agent. Works with your ChatGPT subscription. Samin's backup when Claude goes down.
- **Obsidian** — https://obsidian.md — where Samin keeps his AI OS / evolving brain folder so both Claude and Codex can work on the same files.

## Links referenced

- Max plan for Claude: https://www.anthropic.com/pricing — needed because overnight agent runs burn tokens fast.
- ChatGPT subscription (for Codex access): https://chat.openai.com

## Downloads / templates for this day

Prompt to kick off AutoForge inside Claude Code:

```
Autoforge. Hey, can you spin this up, please?
```

Prompt to kick off AutoForge inside Codex (same idea, different CLI):

```
Hey, can you set this up for me, please?
```

## Further reading

- The PRD → tickets → code → review → merge loop is how real engineering teams ship. Read a sample PRD template from any Linear or Notion doc library if you want to see what a good one looks like.
- Anthropic's docs on sub agents: https://docs.claude.com/en/docs/claude-code/sub-agents
