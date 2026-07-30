# ADR-005 — Measurement and review gates

- **Status:** Accepted
- **Date:** 2026-07-30
- **Deciders:** Liam McCarthy
- **Supersedes:** —

## Context

The predicted failure mode is not making bad videos. It is making videos that perform
well against YouTube's metrics and produce nothing for the business — and then making
more of them because the numbers look good. The C4 cap in ADR-002 exists for exactly
this reason, and it only works if the scoreboard measures the right thing.

Red-team attack 1 also established that the channel must not become a comfortable
substitute for direct business development.

## Decision

### Primary metric
**Qualified conversations**: inbound from someone with budget authority that cites a
specific video or a bridge asset.

**Season 1 target: 2.**

### Secondary metrics
- Bridge-asset downloads, by asset
- Referral-sourced inbound that *mentions* the videos — per red-team attack 4, this
  is likely the real return and naive instrumentation misses it entirely. Ask every
  inbound lead, unprompted, whether they watched anything.
- Hours per episode (a cost metric, and an early warning for C-1)
- Outreach hours per fortnight — tracked to confirm the channel is supplementing
  direct business development rather than displacing it

### Explicitly not success metrics
Subscribers, views, watch hours, ad revenue, Partner Programme status, klasp installs.
Recorded for diagnosis; never for judgement.

**Regulated (C3) episodes are not judged on views at all.** Low views there are
expected and priced in — a few hundred views on an Annex IV video is the designed
outcome, not underperformance.

### Instrumentation
- Unique UTM per video → liam.dev
- One bridge asset per episode behind a low-friction email capture
- A one-line log per inbound: date, source, video cited, seniority, outcome

### Review gates
At the end of every season, before any episode of the next is planned:

| Signal | Action |
|---|---|
| ≥2 qualified conversations | Continue. Rebalance series mix toward what converted. |
| 1 qualified conversation | Continue one more season, unchanged. Too little data. |
| 0, but downloads healthy | Bridge assets work, topics don't reach buyers. Shift mix toward Regulated and Pilot to Production. |
| 0, and downloads near zero | Stop. The channel is not the right instrument. Return the hours to direct outreach. |
| Avg >10 hours per episode | Simplify the format before season 2 — do not quietly drop cadence. |
| Outreach hours fell | Red-team attack 1 has come true. Fix the balance before continuing. |

## Consequences

- The scoreboard will look bad by creator standards for a long time. That is designed.
- "Stop" is a real, pre-committed outcome. Writing it down now is the only way it
  stays available later, when sunk cost makes it feel unthinkable.
- Judging season 1 on anything other than these gates is a violation of this ADR and
  requires a superseding one.
