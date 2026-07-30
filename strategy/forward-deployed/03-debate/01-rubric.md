# Rubric

Weights derive from `00-context/04-goals.md` (consulting first) and
`00-context/03-constraints.md`. Set **before** scoring, and not adjusted afterwards
to produce a preferred result.

| # | Dimension | Weight | 1 | 5 |
|---|---|---:|---|---|
| D1 | **Buyer proximity** | 25 | Viewer has no budget authority | Viewer arrives with a deadline and a budget |
| D2 | **Receipt strength** | 20 | Anyone could say this | Almost nobody on earth can say this credibly |
| D3 | **NDA safety** | 15 | Depends on untellable stories | Structurally incapable of breaching |
| D4 | **Production cost** | 15 | >12h/episode | <5h/episode |
| D5 | **Competitive whitespace** | 10 | Saturated | Essentially unoccupied |
| D6 | **Discovery demand** | 10 | No one is looking for this | Strong existing or borrowed demand |
| D7 | **Durability** | 5 | Stale within a year | Still matters in three years |

Max 500.

## Why these weights

**D1 at 25** is the whole decision. The goals document is explicit that consulting
inbound is primary, and buyer proximity is the only dimension that measures it
directly. Weighting it below any other dimension would contradict stage 00.

**D2 at 20** because differentiation is the only defence against a market where a
model can generate a competent imitation of most content overnight. Receipts are the
one input that cannot be replicated.

**D3 at 15** because constraint C-2 is structural, not a matter of care. A format
that requires untellable stories does not become tellable through effort.

**D4 at 15** because constraint C-1 is what actually kills channels. Cost is
weighted equal to NDA safety deliberately: an unaffordable format and an
unpublishable one both produce zero videos.

**D5 and D6 at 10** each. Both matter, and they pull against each other — whitespace
usually means low demand. Weighting them equally lets a candidate win by either route.

**D7 at 5** because at this stage getting started beats optimising for 2029.

## Scoring protocol

1. Read the candidate spec and both bull and bear cases in full.
2. Score each dimension independently, resisting halo effects from the candidate's
   overall appeal.
3. Justify any score of 1 or 5 in one sentence in the scorecard.
4. **Do not sum until all candidates are scored on all dimensions.** Score by column,
   not by row.

## The rubric's known blind spot

A weighted score picks the best *single* candidate. It cannot see that a portfolio of
candidates may beat any individual one — particularly where the top scorer is weak on
D6 and would starve for reach on its own.

Read the scorecard as an input to ADR-002, not as the decision. This blind spot is
load-bearing: it is exactly what happened.
