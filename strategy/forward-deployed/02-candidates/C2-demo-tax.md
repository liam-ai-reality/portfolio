# C2 — The Demo Tax: production-grading public AI builds

## Premise
Take a popular, public AI build — a viral tutorial, a launch demo, a starred repo —
and run it through the gauntlet a paying client would apply: multi-tenant isolation,
authorisation, cost at ten thousand users, observability, audit trail, security scan,
EU AI Act risk classification. Show precisely where it breaks. Then fix the worst of
it on camera.

The name is the thesis: there is a tax between a demo and a system, everyone
pretends it doesn't exist, and it is exactly what Liam is paid to pay.

## Core loop
1. Pick a public artefact with proven attention.
2. State the gauntlet up front — the same checklist every episode.
3. Run it. `security_audit` (R4) does real work on screen; Semgrep, OSV, Grype,
   gitleaks, Trivy, Checkov produce real findings.
4. Count the failures. Rank by what would actually stop a deployment.
5. Fix the worst one properly, on camera.
6. State what it would cost to fix the rest.

## Who watches
Engineers who just watched the original and felt uneasy. Engineering leads
evaluating whether to let their team ship something like it. Increasingly, security
and platform people, who are close to budget.

## Can they buy?
**Sometimes.** Audience skews IC developer, but engineering leads and platform owners
are well represented and they hold or influence budget. This is the reach engine,
not the conversion engine.

## Receipts spent
R4 primarily — renewable, since the toolkit is public and reusable every episode.
R1, R3 incidentally. Spends almost no finite Tier-2 credibility, which is a major
and under-rated advantage.

## NDA route
**C, entirely.** Public artefacts only. Structurally incapable of breaching an NDA,
which is the strongest single property of this candidate given constraint C-2.

## Production cost
Medium-high. 7–9 hours — the build and break work is real. At the top of the
8-hour budget, so the checklist must stay fixed to keep it repeatable.

## Discovery mechanism
**Borrowed demand.** The artefact torn down has already proven its audience, which
solves the cold-start problem (C-4) better than anything else on this list. Titles
can reference the original's popularity directly.

## Bridge asset
The gauntlet itself, as a downloadable production-readiness checklist. Strong: it is
useful, it is obviously Liam's work, and someone who downloads it is someone with a
system to assess.

## Kill condition
If the tone reads as dunking rather than teaching, engagement will be high and
inbound will be zero — people do not hire someone they watched be unkind. Watch for
comment sentiment defending the original author. Two episodes of that pattern kills it.

## Risk to manage
Punch at the pattern, never the person. Every episode must credit the original as a
good demo that was never claiming to be a system, and must end with the fix rather
than the failure count.
