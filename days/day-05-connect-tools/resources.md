# Day 5 — Connect Claude to Your Email and Drive

## Tools used in the video

- **Claude Cowork** — the workspace where you run projects, see progress, and steer mid-run. https://claude.ai <!-- verify URL -->
- **Google Drive connector** — lets Claude search and read files in your Drive folders. Turn on from the plus button → connectors inside Cowork.
- **HubSpot connector** — pulls CRM data (contacts, deals, company info) straight into the conversation.
- **PostHog connector** — pulls website and product analytics. Samin uses it for the "website analytics" pull in the demo.

## Links referenced

- Claude connectors panel — accessed via the `+` button inside a Cowork session, then "Connectors".
- Google Drive — https://drive.google.com
- HubSpot — https://www.hubspot.com
- PostHog — https://posthog.com

## Downloads / templates for this day

Starter prompt Samin used in the video (copy, tweak, paste into your own Cowork session):

```
Hey, every week my team dumps their expense receipts and invoices into our
finance folder in Google Drive. Our ad platform reports are in marketing, and
PostHog has all our website analytics. Also everything else you need is in
HubSpot for our CRM data.

What I need is the same PNL charts, presentations like we did last time — the
revenues versus the expenses, then the channel performance, the whole
breakdown. Can you pull everything you need to do that for me?
```

Follow-up prompt (when the first output isn't quite right):

```
Here, I attached the slides I really liked. Make sure the output follows the
same structure — has the agenda, the executive summary, the PNL snapshot, and
the same brand colors.
```

## Further reading

- Claude connectors overview — https://support.anthropic.com <!-- verify URL -->
- "Cowork vs Chat — when to use which" — Samin covers this as a throwaway line but it's worth understanding the distinction if you're building serious workflows.
