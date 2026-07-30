# Tooling

Bias to what already exists. Every new tool is setup time taken from the 8-hour budget.

## Already owned — use these

| Tool | Use |
|---|---|
| `security_audit` (R4) | The Demo Tax gauntlet, step 7. Runs live on camera. |
| `klasp` (R1) | Agent-tooling episodes; also demonstrates quality gates in passing |
| `enhanced-agentic-flow` (R3) | Methodology content; this repo is itself an artefact of it |
| liam.dev | Landing pages for bridge assets. Already deployed, already styled. |
| `assets/tokens.css` | Palette source for thumbnails and graphics — channel/site coherence |

## Needed

| Need | Recommendation | Note |
|---|---|---|
| Microphone | The one real purchase | Audio quality outranks everything else on this list |
| Screen recording | OBS | Free, scriptable scene switching |
| Editing | Whatever is fastest to learn | Do not optimise this. Editing skill is not the bottleneck; hours are. |
| Thumbnails | One reusable template with slots | 20-minute cap per thumbnail |
| Email capture | Simplest option that emits a CSV | Bridge assets only. Don't build a marketing stack. |
| Link tracking | Hand-rolled UTMs | One per video, logged in `08-measure/` |

## Explicitly not needed

- A CRM. A text file logging inbound is sufficient at this volume and will remain so
  through season 2.
- An analytics stack. YouTube Studio plus the inbound log covers every metric ADR-005
  actually judges.
- AI script generation. The market read is explicit that human-written scripts are
  what distinguishes surviving channels, and the whole positioning is
  visible-practitioner. Using AI to draft the script would be self-defeating.
  Research assistance is fine; voice is not.
- A second camera, lighting rig, or studio. See `05-format/04-visual-identity.md` —
  the room should look like a room.

## Reusing the podcast pipeline

The Autonomous Podcast SaaS (Step Functions → Bedrock → TTS → RSS) is a working
content pipeline, but it automates the wrong half. It generates content; the
bottleneck here is production of *human* content. Do not reach for it.

The one legitimate reuse: an audio-only feed of published episodes, if it ever seems
worth having. Low priority — the buyers being targeted watch, they don't listen.
