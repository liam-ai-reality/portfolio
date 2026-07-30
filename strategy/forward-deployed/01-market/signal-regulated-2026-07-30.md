# Demand signal run — Regulated seed terms

**Date:** 2026-07-30 · **Method:** `03-demand-signals.md` · **Status: PARTIAL**

## What could and could not be run

| Step | Status |
|---|---|
| 1. Autocomplete harvest | **NOT RUN** — blocked |
| 2. Top-20 view distribution | **NOT RUN** — blocked |
| 3. Intent disambiguation | Run in full |
| 4. Comment mining | **NOT RUN** — blocked |
| 5. Buyer test | Run in full |

**Blocker:** the session environment's network policy denies all Google and YouTube
hosts at the proxy gateway (`403` on CONNECT for `suggestqueries.google.com`;
no route to `youtube.com`, `www.youtube.com`, `m.youtube.com`). Server-side fetch is
refused the same way. Chromium is installed but egresses through the same gateway, so
it fails identically. This is host-level policy, not a tooling gap.

**Consequence: there are still no view counts in this repo, and none are invented.**
Steps 1, 2 and 4 must be run manually from an unrestricted browser — about ten
minutes per term. Until then the verdicts below are based on supply composition and
intent evidence only, which is weaker than the full method.

---

## The headline: the clock moved three days ago

**Regulation (EU) 2026/1744** — the Digital Omnibus on AI — was adopted 8 July 2026,
published in the Official Journal 24 July 2026, and **entered into force 27 July 2026**.

| Obligation | Was | Now |
|---|---|---|
| Annex III standalone high-risk | 2 Aug 2026 | **2 Dec 2027** |
| Annex I embedded products | 2 Aug 2027 | **2 Aug 2028** |
| **Article 50 transparency** | 2 Aug 2026 | **2 Aug 2026 — unchanged** |
| Art 50(2) machine-readable marking, models already on market | — | 2 Dec 2026 |
| New Art 5 prohibition (NCII) | — | 2 Dec 2026 |
| GPAI obligations | **2 Aug 2025 — already in force** | legacy models to 2 Aug 2027 |

### Three corrections to this repo

1. **The seed term `gpai obligations august 2026` was factually wrong.** GPAI
   obligations have applied since **2 August 2025**. Removed from the seed list.
2. **The C3 bull case's "there is a clock — the August 2026 GPAI obligations" was
   wrong twice over**: wrong article, and the date that did matter has since moved to
   December 2027.
3. **Season 1 EP03 ("for engineers who have to ship in August") is dead as written.**
   The thing shipping in August is Article 50, not high-risk classification.

### But the clock did not disappear — it relocated, and improved

**Article 50 transparency applies on 2 August 2026 — three days from this run** —
with fines up to €15M or 3% of worldwide turnover. It is a *better* topic than the
one it replaces:

- **Far broader scope.** Anyone with a chatbot, anyone generating content — not just
  Annex III providers. Order-of-magnitude larger addressable audience.
- **It is an engineering problem, not a paperwork one.** Compliance requires embedding
  machine-readable indicators: metadata tagging, watermarking, cryptographic
  provenance, machine-readable audit logs. That is buildable, demonstrable, and
  exactly Liam's register.
- **Nobody has covered it in engineering terms.** Supply is entirely law-firm
  commentary published in the last fortnight.

---

## Per-term findings

### 1. `eu ai act technical documentation` / `annex iv documentation`

**Intent: confirmed strong.** Article 11 + Annex IV require engineering artefacts —
dataset cards, architecture diagrams, risk registers, validation reports, change logs
— version-controlled across the ML lifecycle. Real demand from real teams.

**Supply: commoditised.** At least five vendors already give away free Annex IV
templates ([AuditDraft](https://audit.omensystems.com/resources/ai-system-documentation-template),
[ComplianceRadar](https://www.complianceradar.dev/annex-iv-template),
[KLA Digital](https://kla.digital/annex-iv-template),
[Security Scientist](https://www.securityscientist.net/blog/eu-ai-act-technical-documentation-template/),
[AiActo](https://www.aiacto.eu/en/blog/documentation-technique-ai-act-article-11-annexe-iv)).

**Buyer test: passes.** But **the bridge asset thesis fails.**
`04-decision/ADR-002` and `07-backlog/season-01.md` both call the Annex IV template
"the best bridge asset in the repo". That was wrong — it is a commodity, free in five
places, and it now sits behind a December 2027 deadline.

**Verdict: demote.** The differentiated version is not a template. It is
*generating* Annex IV artefacts from the pipeline — model cards exported from
experiment tracking, dataset cards from pipeline metadata, docs in the repo under the
same PR review as code. Nobody is filming that, and it is Liam's actual skill.

### 2. `eu ai act high risk classification`

**Intent: confirmed.** The genuine confusion is Article 6(3) — being listed in
Annex III does *not* automatically make a system high-risk; there is a derogation with
four conditions, except that profiling of natural persons is always high-risk. The
Commission published draft classification guidance with worked examples (feedback
closed 23 June 2026).

**Supply: present but governance-register.** See below.

**Buyer test: passes, urgency now weak.** The audience just got 17 extra months.

**Verdict: keep, reframe.** Not "you must classify before August" but "here is the
decision procedure, and here is what the delay does and does not buy you."

### 3. `fria fundamental rights impact assessment`

**Intent: real but narrow.** Article 27 binds a specific set of deployers: bodies
governed by public law, and private entities providing public services — healthcare,
education, housing, social services.

**Supply: free templates already exist.** The AI Office's own official template has
**not yet been published**, so any template competes with a forthcoming official one.

**Buyer test: fails on commercial grounds.** Public sector and quasi-public
deployers: slow procurement, price-sensitive, framework-bound. The worst buyer profile
in the Regulated set despite passing on intent.

**Verdict: drop from season 1.** Keep in the backlog.

### 4. `ai act post market monitoring`

**Intent: real and under-served.** Article 72 requires providers to actively and
systematically collect, document and analyse performance data across a system's whole
lifetime, on a documented PMM plan that forms part of the technical documentation. A
Commission implementing act laying down the plan template was due by 2 February 2026
(status unverified — check before scripting).

**Supply: thinnest of all six terms.** Almost entirely statute-reproduction sites.

**Buyer test: passes strongly.**

**Verdict: promote.** This is the best term in the set. It is where Regulated and
Pilot to Production converge — "observability for non-deterministic systems" is
already in the backlog, and Article 72 is that exact problem with a legal obligation
attached. Liam can build it; the GRC vendors cannot.

---

## Supply composition — the whitespace hypothesis holds

YouTube results surfaced indirectly (titles and dates only, **no view counts**):

| Video | Date | Register |
|---|---|---|
| EU AI Act Compliance in 2026: Classification, Oversight, Documentation | May 2026 | Governance |
| AI Compliance Training: 90-Day Implementation Strategy | Jan 2026 | Consultancy |
| Navigating the EU AI Act: Compliance Essentials for High-Risk, Pt 1 & 2 | Mar 2026 | Legal |
| data.europa academy: Next steps to compliance | Jul 2025 | Official webinar |
| The EU AI Act Is Coming — What Your Board Needs to Do | — | Board-level |
| Understanding the EU AI Act (AI Literacy Series) | Jan 2026 | Explainer |

Every one is legal, governance, board or training register. **Not one is "here is the
code."** The gap identified in `02-niche-map.md` is confirmed: the topic is covered,
the *engineering* treatment of it is not.

Caveat: this is a biased sample surfaced via web search, not the top-20 by relevance,
and without view counts it says nothing about whether anyone watches. Step 2 still
needs running.

---

## Revised seed terms

Replacing the list in `03-demand-signals.md`:

**Promoted**
`ai act post market monitoring` · `article 72 post market monitoring plan` ·
`eu ai act article 50 transparency` · `ai generated content machine readable marking` ·
`ai watermarking c2pa provenance implementation` · `annex iv documentation automation`

**Kept, reframed**
`eu ai act high risk classification` · `article 6(3) derogation`

**Demoted** `annex iv template` (commoditised) ·
**Dropped** `gpai obligations august 2026` (factually wrong) ·
`fria template` (narrow, public-sector, official template pending)

## Sources

[Regulation (EU) 2026/1744 in the OJ](https://www.nicfab.eu/en/posts/digital-omnibus-ai-official-journal/) ·
[Digital Omnibus on AI enters into force](https://www.lewissilkin.com/insights/2026/07/27/the-digital-omnibus-on-ai-enters-into-force-today-102nedo) ·
[Gibson Dunn — postponed high-risk deadlines](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/) ·
[Freshfields — final Digital Omnibus, key amendments](https://www.freshfields.com/en/our-thinking/blogs/technology-quotient/eu-ai-act-unpacked-34-the-final-digital-omnibus-on-ai-key-amendments-to-the-a-102nber) ·
[Sidley — Article 50 transparency, preparing for 2 Aug 2026](https://datamatters.sidley.com/2026/06/24/eu-ai-act-transparency-obligations-preparing-for-compliance-by-2-august-2026/) ·
[Commission — Article 50 FAQ](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act) ·
[Article 6 classification rules](https://artificialintelligenceact.eu/article/6/) ·
[Draft Commission guidelines on high-risk classification](https://digital-strategy.ec.europa.eu/en/library/draft-commission-guidelines-classification-high-risk-ai-systems) ·
[Article 27 FRIA](https://artificialintelligenceact.eu/article/27/) ·
[Article 72 post-market monitoring](https://artificialintelligenceact.eu/article/72/) ·
[Skadden — GPAI obligations in force (Aug 2025)](https://www.skadden.com/insights/publications/2025/08/eus-general-purpose-ai-obligations)
