# Season 1 — six episodes

Mix per ADR-002: 3 Demo Tax (reach), 2 Regulated/Pilot (conversion), 1 organisational.
Order follows the cold-start problem, not the rubric ranking — reach first, so the
low-view conversion episodes land on a channel with some signal of life.

Every episode: run the demand method and the NDA gate before scripting.

---

## EP01 — "I ran a viral AI agent through an enterprise security review"
**Demo Tax** · reach · target 15 min

The pilot episode and the format's proof. Pick a genuinely popular, genuinely good
public agent build. Run the full eight-step gauntlet with `security_audit` (R4) live
on screen. Count what fails. Fix the one that would actually block a deployment.

*Hook:* the failure count, stated in the first sentence. No greeting.
*Why first:* borrowed demand solves the cold start better than anything else
available, and it establishes the gauntlet that recurs all season.
*Receipts:* R4, R11 (one line on supply-chain experience, no detail).
*Bridge:* the production-readiness checklist.
*Budget:* 15–20h. This is the expensive one — accept it (red-team attack 6).

---

## EP02 — "Your AI pilot costs 40x more at 10,000 users than at 10"
**Pilot to Production** · conversion · target 14 min

Build a real cost model on screen for a plausible agent workload. Token counts,
retries, context growth, embedding refresh, egress, the bits people forget. State
the answer in £/month. Then the levers that actually move it.

*Hook:* the two numbers side by side.
*Why second:* first buyer-facing episode, and cost is the concern every technical
buyer already has. Highest conversion potential in the season.
*Receipts:* R10 (method, not the client's bill), R13.
*Bridge:* the cost model as a spreadsheet.

---

## EP03 — "The AI Act deadline everyone thinks moved, and the one that didn't"
**Regulated** · conversion · target 16 min · **replaces the original EP03 per ADR-006**

Regulation (EU) 2026/1744 entered into force on 27 July 2026. Annex III high-risk
went to December 2027 — so most teams have concluded they have another year.
**Article 50 transparency still applies on 2 August 2026**, it covers far more
companies than Annex III ever did, and it carries penalties up to €15M or 3% of
turnover. Then build the thing it actually requires: machine-readable marking of
generated content — metadata, provenance, audit log.

*Hook:* "Three days ago the EU moved an AI Act deadline. It wasn't the one you're
about to miss."
*Why this replaces the original:* the original was anchored on an August 2026
high-risk deadline that no longer exists, and on GPAI obligations that have been in
force since **August 2025**. Both were wrong.
*Why third, and why urgently:* the commentary is currently all law-firm blogs from
the past fortnight. An engineering read is available now and won't be in a month.
*Receipts:* R12.
*Bridge:* an Article 50 applicability checklist — does this system need marking, and
what kind.
*Note:* script harder than anything else this season, and put the date on screen.
Accuracy is asymmetric and this area is moving fast.
*Not judged on views* (ADR-005).

---

## EP04 — "What multi-tenant actually means when an agent touches customer data"
**Pilot to Production** · conversion · target 16 min

Build a naive agent over two tenants' data, on synthetic data, and demonstrate the
leak. Then the isolation patterns and what each costs in complexity and money.

*Hook:* the leak, on screen, in the first fifteen seconds.
*Receipts:* R13. NDA route A throughout — rebuild, never recount.
*Bridge:* the isolation checklist.

---

## EP05 — "Post-market monitoring is just observability with a legal deadline"
**Regulated** × **Pilot to Production** · conversion · target 14 min ·
**replaces the original EP05 per ADR-006**

Article 72 requires providers of high-risk systems to systematically collect and
analyse performance data across the system's whole lifetime, on a documented plan
that forms part of the technical documentation. That is not a compliance artefact,
it is an observability system — and the hard part is that the thing being monitored
is non-deterministic. Build it: what to log when output isn't repeatable, what drift
looks like, what an auditor will ask for.

*Hook:* "The EU wrote an observability requirement into law and called it something else."
*Why this replaces the original:* Annex IV templates are a commodity — five vendors
give them away free — and the obligation behind them moved to December 2027. Article
72 had the thinnest supply of any term tested and the strongest buyer test.
*Why it matters strategically:* this is where Regulated and Pilot to Production
converge. One episode serves both tiers, which is the cheapest possible coverage.
*Receipts:* R12, R13.
*Bridge:* a post-market monitoring plan skeleton, generated from pipeline metadata
rather than filled in by hand.
*Note:* a Commission implementing act laying down the PMM plan template was due by
2 February 2026. **Verify whether it landed before scripting.**

---

## EP06 — "Your AI pilot didn't die in engineering. It died in procurement."
**Organisational** · reach + conversion · target 14 min

The season closer and the most personal episode. Why pilots fail at security review,
procurement, and user adoption rather than in the code. Face-led, few keystrokes.
This is where the operator credibility — 4→250, $5m ARR, real dispatchers who didn't
want the tool — does the work.

*Hook:* a flat claim about where pilots actually die.
*Why last:* it needs the technical credibility of the preceding five to land, and it
is the episode most likely to be shared by someone senior.
*Receipts:* R7, R8, R14.
*Bridge:* a pilot-to-production readiness assessment.

---

## Season shape

| EP | Series | Tier | Est. hours |
|---:|---|---|---:|
| 01 | Demo Tax | Reach | 15–20 |
| 02 | Pilot to Production | Conversion | 8 |
| 03 | Regulated (Art 50) | Conversion | 8 |
| 04 | Pilot to Production | Conversion | 8 |
| 05 | Regulated × Pilot (Art 72) | Conversion | 7 |
| 06 | Organisational | Both | 6 |

EP03 and EP05 were recut on 2026-07-30 after the demand signal run
([ADR-006](../04-decision/ADR-006-regulated-series-recut.md)). **EP03 is time-critical**
— Article 50 applies 2 August 2026 and the engineering-register commentary window is
open now.

**~55 hours over three months.** That is the real price. Decide it is worth it now,
not in week six.

Note the mix is deliberately conversion-heavy relative to ADR-002's steady state —
season 1 is a test of whether the *conversion* hypothesis holds, and there is no
point optimising reach for an audience that never converts. If season 1 produces
downloads but no conversations, ADR-005's gate says shift further this way. If it
produces neither, the gate says stop.

**No agent-tooling episode this season.** The cap allows one; spending it here would
buy subscribers instead of testing the hypothesis.
