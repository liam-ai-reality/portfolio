# ADR-006 — Regulated series recut after the Digital Omnibus

- **Status:** Accepted
- **Date:** 2026-07-30
- **Deciders:** Liam McCarthy
- **Amends:** ADR-002 (C3 rationale and episode selection). Does not supersede it —
  the three-series portfolio stands.

## Context

The demand signal run (`01-market/signal-regulated-2026-07-30.md`) surfaced a change
in the law that postdates every earlier stage in this repo.

**Regulation (EU) 2026/1744**, the Digital Omnibus on AI, entered into force on
**27 July 2026 — three days before this ADR**. It moves Annex III standalone high-risk
obligations from 2 August 2026 to **2 December 2027**, and Annex I embedded products
to 2 August 2028.

Three things in this repo were wrong:

1. The seed term `gpai obligations august 2026` was factually incorrect. GPAI
   obligations have applied since **2 August 2025**.
2. C3's bull case cited "a clock — the August 2026 GPAI obligations." Wrong article,
   and the date that did matter has moved by sixteen months.
3. Both ADR-002 and season 1 describe the Annex IV template as "the best bridge asset
   in the repo." At least five vendors already give one away free.

## Decision

### 1. The clock relocates to Article 50, and the series follows it

**Article 50 transparency applies on 2 August 2026 — unchanged by the Omnibus** —
with penalties up to €15M or 3% of worldwide turnover.

It is a better anchor than the obligation it replaces:

- **Broader scope.** Anyone operating a chatbot or generating content, not only
  Annex III providers.
- **It is an engineering problem.** Machine-readable indicators, metadata tagging,
  watermarking, cryptographic provenance, audit logs. Buildable and demonstrable.
- **No engineering-register coverage exists.** Supply is entirely law-firm
  commentary from the past fortnight.

### 2. Article 72 post-market monitoring is promoted to the lead Regulated topic

The thinnest supply of any term tested, strong buyer test, and it is where Regulated
and Pilot to Production converge — "observability for non-deterministic systems" is
already in the backlog, and Article 72 is that problem with a legal obligation
attached. Liam can build it; GRC vendors cannot.

### 3. Templates are no longer the bridge-asset strategy

Annex IV and FRIA templates are commodities. The differentiated asset is
**generation, not documentation**: producing Annex IV artefacts from the pipeline —
model cards exported from experiment tracking, dataset cards from pipeline metadata,
docs in-repo under the same PR review as code.

### 4. FRIA drops out of season 1

Article 27 binds public bodies and private providers of public services. Real intent,
but the worst buyer profile in the set — slow procurement, price-sensitive,
framework-bound — and the AI Office's own template is pending, so any asset competes
with a forthcoming official one. Stays in the backlog.

### 5. Season 1 episodes 03 and 05 are replaced

See `07-backlog/season-01.md`.

## Consequences

- **C3's urgency argument weakens for high-risk work and strengthens elsewhere.**
  Buyers facing Annex III just gained seventeen months, so that urgency is gone. It is
  replaced by a narrower but sharper Article 50 deadline three days out, and by the
  slower, more durable Article 72 problem.
- **The recut itself is an episode.** The law changed three days ago and every piece
  of published commentary is from a law firm. An engineering read on what actually
  changed for a build is available now and will not be in a month.
- **Regulated content decays faster than the C3 spec assumed.** Every episode must be
  visibly dated, and the review gate must include a "has the law moved?" check. The
  D7 durability score of 4 was too generous; treat it as 3.
- **This is what the ADR mechanism is for.** The decision was made on 30 July with
  facts that were wrong by 27 July. Nothing earlier in the repo was edited to hide
  that — the debate record stands, with dated addenda.

## What did not change

The three-series portfolio (ADR-002), the funnel logic, cadence (ADR-003), identity
(ADR-004) and measurement (ADR-005) are unaffected. Regulated remains ~20% of
episodes and remains exempt from view-based judgement.
