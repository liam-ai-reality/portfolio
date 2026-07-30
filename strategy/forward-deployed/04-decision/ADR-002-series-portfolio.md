# ADR-002 — Series portfolio

- **Status:** Accepted
- **Date:** 2026-07-30
- **Deciders:** Liam McCarthy
- **Supersedes:** —

## Context

The weighted rubric ranked six candidates: C3 Regulated (435), C2 Demo Tax (405),
C4 Agent tooling (370), C6 Interviews (360), C1 Forward Deployed (350), C5 Build in
public (275).

Taking the winner alone would be a mistake. C3 scores **5 on buyer proximity and 2 on
discovery demand** — it converts brilliantly and reaches nobody. C2 is its mirror:
5 on demand, 3 on buyer proximity. The rubric ranks single candidates and cannot
express complementarity, a blind spot flagged in `01-rubric.md` before scoring began.

## Decision

Run **three series in one channel, as a deliberate funnel**, plus one capped extra.

### Tier 1 — Reach: **The Demo Tax** (C2)
Production-grading public AI builds. Borrowed demand solves the cold start; NDA-immune
by construction; spends only renewable receipts. **~50% of episodes.**

### Tier 2 — Conversion: **Pilot to Production**
The enterprise problems, rebuilt on synthetic data: multi-tenancy, authz, cost at
scale, observability, audit trails, adoption. Drawn from C2's premise but aimed at
decision-makers rather than ICs — it is the bridge between the reach tier and the
moat. Receipts R9, R10, R13, R14. **~30% of episodes.**

### Tier 3 — Moat: **Regulated** (C3)
EU AI Act as engineering. Highest buyer proximity available, near-zero competition,
the best bridge assets in the repo, and a dated demand spike in August 2026.
**~20% of episodes.** Explicitly **not judged on views**.

### Capped extra — Agent tooling (C4)
**Maximum one episode per season.** Largest audience, no buyer proximity. Any
proposal to increase the allocation must cite inbound, not subscribers.

## Rejected

- **C5 Build in public** — rejected outright. No search intent, demands unpublishable
  numbers, no bridge asset. Belongs on LinkedIn.
- **C6 Interviews** — deferred to year two. Excellent business logic, 12–20h per
  episode against an 8h budget, and needs an audience before good guests accept.
  **But the business logic is extracted now:** start these conversations unrecorded
  and unpublished, immediately. That is not content strategy, it is calling people,
  and it should not wait for a channel.
- **C1 Forward Deployed as content** — rejected. Job seekers cannot buy. Retained as
  identity only: ADR-004.

## Consequences

- The funnel must be visible in the packaging: Demo Tax episodes link to Pilot to
  Production, which links to Regulated. Playlists, end screens, descriptions.
- Season 1 opens with Demo Tax, not with the rubric winner. Sequencing follows the
  cold-start problem; strategy follows buyer proximity. These point different ways
  and both are respected.
- Three series on one channel gives YouTube mixed topical signals. Acknowledged in
  red-team attack 7 and judged acceptable; revisit at the season 2 gate if
  recommendation performance is visibly bifurcated.
- The C4 cap will feel wrong when its numbers outperform everything else. That is the
  predicted failure mode, and the cap exists precisely because the pull will be strong.
