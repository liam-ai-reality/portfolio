# NDA boundaries

The gate every episode passes before it enters `07-backlog/`.

## The three safe routes

### Route A — Rebuild, don't recount
Reconstruct the *pattern* on synthetic data, in public, from scratch. "How I'd build
dispatch routing for a 200-van fleet" is craft; "what happened at $CLIENT" is a
breach. The method is transferable, the engagement is not.

Strongest for: architecture, cost modelling, optimisation, multi-tenancy.

### Route B — Own material only
klasp, cli-printing-press, enhanced-agentic-flow, security_audit are 100% mine, in
public, forever. Unlimited on-camera use, full source, full history.

Strongest for: tooling, methodology, quality gates.

### Route C — Teardown of public things
Other people's repos, published demos, public incidents, published regulation.
Zero client exposure by construction.

Strongest for: the Demo Tax series, regulatory explainers.

## The gate

An episode passes only if **every** answer is yes:

1. Could I publish this if the client were watching, and would they be relaxed?
2. Is every specific number, architecture detail or failure either mine, public, or synthetic?
3. If a viewer tried to identify the client from this, would they fail?
4. Am I naming clients only from the already-public list in R15, and only as a list?
5. Does the episode still work if I delete every client reference entirely?

Question 5 is the useful one. If the episode collapses without the client reference,
the client reference is doing the work, and that is exactly the problem.

## Hard nos

- Any specific failure, outage, security finding or internal disagreement attributable to a named client
- Screenshots of client systems, dashboards, data or code — even redacted
- Client-specific commercial terms, headcount, budgets or timelines
- "A large UK broadcaster…" — the list on the portfolio makes this identifiable, which is worse than naming
- Anything about the npm supply-chain incident that identifies which environments or which client

## Note on the abstraction habit

The portfolio already abstracts well ("Client specifics abstracted"). Carry the same
discipline to video, where it is harder — an offhand sentence in a 15-minute take is
easier to leak than a written case study, and it is permanent once published.
