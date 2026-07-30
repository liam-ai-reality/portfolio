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

## EP03 — "The EU AI Act, for engineers who have to ship in August"
**Regulated** · conversion · target 16 min

Article 5/6 and Annex III classification, done as a decision procedure rather than a
lecture. Walk three realistic systems through it and reach three different answers.
Boundary stated up front: engineer, not lawyer.

*Hook:* "Most teams get their risk classification wrong in the same two places."
*Why third:* the August GPAI deadline gives it urgency now; landing it after two
episodes means it isn't the channel's first impression.
*Receipts:* R12.
*Bridge:* the risk-classification decision tree.
*Note:* script harder than anything else this season. Accuracy is asymmetric.
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

## EP05 — "Writing Annex IV technical documentation without hiring a consultant"
**Regulated** · conversion · target 14 min

The most directly commercial episode of the season, and deliberately generous: give
away the template that a consultancy would charge for. Someone who downloads it has
a live obligation and no way to meet it.

*Hook:* what Annex IV actually demands, in one sentence, followed by how few teams have it.
*Receipts:* R12 — the strongest single differentiator in the inventory.
*Bridge:* the Annex IV template. **The best bridge asset in the repo.**
*Note:* the apparent paradox — giving away the deliverable — is the point. It
qualifies the lead and demonstrates the capability simultaneously.

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
| 03 | Regulated | Conversion | 8 |
| 04 | Pilot to Production | Conversion | 8 |
| 05 | Regulated | Conversion | 7 |
| 06 | Organisational | Both | 6 |

**~55 hours over three months.** That is the real price. Decide it is worth it now,
not in week six.

Note the mix is deliberately conversion-heavy relative to ADR-002's steady state —
season 1 is a test of whether the *conversion* hypothesis holds, and there is no
point optimising reach for an audience that never converts. If season 1 produces
downloads but no conversations, ADR-005's gate says shift further this way. If it
produces neither, the gate says stop.

**No agent-tooling episode this season.** The cap allows one; spending it here would
buy subscribers instead of testing the hypothesis.
