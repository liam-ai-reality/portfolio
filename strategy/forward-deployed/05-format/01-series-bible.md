# Series bible

Three series, one channel. Implements ADR-002.

---

## The Demo Tax — reach tier (~50%)

**Promise:** there is a tax between a demo and a system. Here is what it costs.

**Fixed gauntlet, stated on screen every episode, in this order:**

1. **Isolation** — what happens with two customers' data in it?
2. **Authorisation** — who can call this, and who decided?
3. **Cost at 10k users** — real arithmetic, real token counts, stated in £/month.
4. **Failure** — what happens when the model, the API or the network fails?
5. **Observability** — when it goes wrong at 3am, what do you have?
6. **Audit** — can you prove afterwards what it did and why?
7. **Security** — `security_audit` (R4) run live. Semgrep, OSV, Grype, gitleaks, Trivy, Checkov.
8. **Regulatory** — does this land in EU AI Act scope? Thirty seconds, hands off to Regulated.

**Structure:** credit the original (30s) → gauntlet (8–10 min) → the one that would
actually stop a deployment → **fix it properly on camera** (3–4 min) → what the rest
would cost.

**Rules.** Credit the original as a good demo that never claimed to be a system.
Never tear down anyone with a smaller audience than the channel. Prefer vendors and
large companies over individual creators. **Always ship the fix** — this is what
separates the format from dunking, and it is non-negotiable (red-team attack 5).

**Bridge asset:** the gauntlet, as a production-readiness checklist.

---

## Pilot to Production — conversion tier (~30%)

**Promise:** the problems that kill AI projects after the demo works.

**Core loop:** one problem, rebuilt from scratch on synthetic data, with the decision
points made explicit. Not a tutorial — a walk through the judgement.

**Territory:** multi-tenancy and isolation, cost modelling at scale, audit trails,
observability for non-deterministic systems, rollback and evaluation, procurement and
security review, and user adoption — the last being the one nobody films and the one
that kills the most pilots.

**Register:** aimed at someone who has to sign off, not someone who has to type. Fewer
keystrokes, more consequences. Numbers stated in money and risk, not in tokens.

**Receipts:** R9, R10, R13, R14. NDA route A throughout — rebuild, never recount.

**Bridge asset:** the artefact built in the episode — cost model spreadsheet,
isolation checklist, evaluation harness.

---

## Regulated — moat tier (~20%)

**Promise:** the EU AI Act as something you build, not something you read.

**Core loop:** one obligation → what it actually requires in engineering terms →
build or demonstrate the artefact that satisfies it → give the artefact away.

**Territory:** Article 5/6 and Annex III risk classification, FRIA workflow, Annex IV
technical documentation, post-market monitoring, GPAI obligations, logging and
record-keeping duties.

**Hard rules.** Open every episode with the boundary: *engineer, not a lawyer; this
is how to build it, not whether you must.* Accuracy is asymmetric here — the audience
is expert, and an error is permanent and quotable. Script these more carefully than
anything else, and date every episode visibly, because guidance moves.

**Bridge assets:** Annex IV template, risk-classification decision tree, FRIA
worksheet. The strongest in the repo — anyone downloading one has a live obligation.

**Not judged on views** (ADR-005).

---

## Agent tooling — capped, one per season

klasp and agent quality gates. Reach and OSS adoption only. Any argument for more
than one per season must cite inbound, not subscribers (ADR-002).

---

## Channel-level through-line

Every episode, whatever the series, answers a version of the same question: **what
happens when this meets a real company?** If an episode doesn't answer it, it belongs
on someone else's channel.
