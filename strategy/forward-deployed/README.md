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
| `03-debate/` | Weighted rubric, bull/bear per candidate, scorecard, red team, and the superseded first pass | Written |
| `04-decision/` | ADRs 001–006 — the decision, why the losers lost, and one dated correction | Written |
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

And if you read a fourth: [`01-market/signal-regulated-2026-07-30.md`](01-market/signal-regulated-2026-07-30.md)
— the first demand run, which found the law had changed three days earlier and recut
two of the six episodes.

For what the thinking looked like *before* the rubric, see
[`03-debate/00-first-pass-superseded.md`](03-debate/00-first-pass-superseded.md).

## Open work

Rough priority order.

1. **EP03 is time-critical.** Article 50 transparency applies **2 August 2026**. The
   engineering-register commentary window is open now and closes within weeks.
2. **Finish the demand method.** Steps 1, 2 and 4 (autocomplete, top-20 view
   distribution, comment mining) have no data — they need a browser on an
   unrestricted network, roughly ten minutes per term, against the revised seed list
   in `01-market/03-demand-signals.md`. **There are no view counts anywhere in this
   repo, and none should be invented.**
3. **Verify the Article 72 implementing act.** A Commission act laying down the
   post-market monitoring plan template was due by 2 February 2026. Status unknown.
   EP05 depends on it.
4. **Check handle availability** for `@forwarddeployed` before it appears anywhere public.
5. **Set up instrumentation before EP01 ships** — UTMs, bridge-asset capture, the
   inbound log in `08-measure/01-scorecard.md`. Retrofitting loses the first
   episode's data.
6. **Start the unrecorded business development conversations** (ADR-002, red-team
   attack 1). Independent of the channel; should not wait for it.
7. **Competitor teardowns** before planning season 2, not before season 1.

## Provenance

Stages 00–08 were drafted in the `portfolio` repo and moved here with
`git subtree split`, so the commit history predates this repo. The first-pass note in
`03-debate/` is from before the staged work began.

## Working in this repo

See [`CLAUDE.md`](CLAUDE.md) for how agents should use these stages.
