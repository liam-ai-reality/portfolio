# Forward Deployed — channel ICM

Interpreted Context Methodology workspace for Liam McCarthy's YouTube channel and
personal brand. Numbered stages, filesystem-as-context, decisions recorded as ADRs.

## Why this exists

To decide — once, with the reasoning written down — what channel to build, and to
stop the decision being relitigated every time a video underperforms.

## Stages

| Stage | Contains | State |
|---|---|---|
| `00-context/` | Who Liam is, what he can prove, what constrains him, what "winning" means | Written |
| `01-market/` | July 2026 market read, niche map, demand-signal method, format economics | Written |
| `02-candidates/` | Six channel concepts, each to an identical schema | Written |
| `03-debate/` | Weighted rubric, bull/bear per candidate, scorecard, red team | Written |
| `04-decision/` | ADRs 001–005 — the decision and why the losers lost | Written |
| `05-format/` | Series bible, episode template, title/thumbnail system, visual identity | Written |
| `06-pipeline/` | Production runbook, tooling, publish checklist | Written |
| `07-backlog/` | Season 1 fully specified, plus a ranked idea backlog | Written |
| `08-measure/` | Scorecard and review gates | Written |

## The decision, in one paragraph

One channel — **Forward Deployed** — running three series in a deliberate funnel:
**The Demo Tax** for reach, **Pilot to Production** for conversion, and
**Regulated** as the moat. Consulting inbound is the primary metric; FDE role
interest is a secondary benefit that costs nothing extra. Fortnightly long-form,
batched two shoot days a month, in seasons of six with a hard review gate at the
end of each. Success is qualified conversations, not views.

Full reasoning: [`04-decision/`](04-decision/).

## Reading order

If you read three files, read these:

1. [`03-debate/02-scorecard.md`](03-debate/02-scorecard.md) — how the six candidates actually scored
2. [`04-decision/ADR-002-series-portfolio.md`](04-decision/ADR-002-series-portfolio.md) — why the rubric winner isn't the whole answer
3. [`07-backlog/season-01.md`](07-backlog/season-01.md) — the six episodes to make

## Working in this repo

See [`CLAUDE.md`](CLAUDE.md) for how agents should use these stages.
