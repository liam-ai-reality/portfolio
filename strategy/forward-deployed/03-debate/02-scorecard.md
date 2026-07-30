# Scorecard

Scored by column against `01-rubric.md`, after all bull/bear cases were written.

## Raw scores (1–5)

| | D1 Buyer | D2 Receipt | D3 NDA | D4 Cost | D5 Space | D6 Demand | D7 Durable |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **C1** Forward Deployed | 2 | 5 | 3 | 4 | 5 | 3 | 3 |
| **C2** Demo Tax | 3 | 5 | 5 | 3 | 4 | 5 | 4 |
| **C3** Regulated | 5 | 5 | 4 | 4 | 5 | 2 | 4 |
| **C4** Agent tooling | 2 | 5 | 5 | 4 | 2 | 5 | 3 |
| **C5** Build in public | 3 | 3 | 2 | 4 | 2 | 2 | 2 |
| **C6** Interviews | 5 | 4 | 4 | 1 | 3 | 3 | 4 |

## Weighted totals (max 500)

| Rank | Candidate | Score | |
|---:|---|---:|---|
| 1 | **C3 — Regulated** | **435** | ████████▋ |
| 2 | **C2 — Demo Tax** | **405** | ████████▏ |
| 3 | C4 — Agent tooling | 370 | ███████▍ |
| 4 | C6 — Interviews | 360 | ███████▏ |
| 5 | C1 — Forward Deployed | 350 | ███████ |
| 6 | C5 — Build in public | 275 | █████▌ |

<details>
<summary>Arithmetic</summary>

```
C1  2×25 + 5×20 + 3×15 + 4×15 + 5×10 + 3×10 + 3×5 =  50+100+45+60+50+30+15 = 350
C2  3×25 + 5×20 + 5×15 + 3×15 + 4×10 + 5×10 + 4×5 =  75+100+75+45+40+50+20 = 405
C3  5×25 + 5×20 + 4×15 + 4×15 + 5×10 + 2×10 + 4×5 = 125+100+60+60+50+20+20 = 435
C4  2×25 + 5×20 + 5×15 + 4×15 + 2×10 + 5×10 + 3×5 =  50+100+75+60+20+50+15 = 370
C5  3×25 + 3×20 + 2×15 + 4×15 + 2×10 + 2×10 + 2×5 =  75+60+30+60+20+20+10 = 275
C6  5×25 + 4×20 + 4×15 + 1×15 + 3×10 + 3×10 + 4×5 = 125+80+60+15+30+30+20 = 360
```
</details>

## Justifications for 1s and 5s

- **C1 D1=2** — job seekers; no budget authority.
- **C2 D3=5** — public artefacts only; structurally cannot breach an NDA.
- **C2 D6=5** — borrowed demand, already measured on the artefact being torn down.
- **C3 D1=5** — viewer arrives with a legal deadline and no internal capability.
- **C3 D5=5** — lawyers can't build it, engineers haven't read it; dozens worldwide can do both.
- **C3 D6=2** — genuinely low search volume, even by B2B standards.
- **C4 D5=2** — adjacent to the saturated builder tier.
- **C6 D4=1** — 12–20h/episode against an 8h budget.
- **D2=5 across C1–C4** — the receipts inventory is uniformly strong. This dimension
  turned out not to discriminate, which is itself worth noting: differentiation is
  not the scarce input here. Buyer proximity is.

## The result, and the problem with it

**C3 wins.** That is not what intuition suggested before scoring — the initial
instinct was C2 as flagship — and the rubric is the reason the answer changed. The
prior under-weighted buyer proximity, which the goals document is explicit about.

But look at C3's D6 score: **2**. The winner has no reach engine. A channel running
C3 alone publishes into a void and depends entirely on people already searching for
terms they may not know exist. Meanwhile the runner-up scores 5 on exactly that
dimension and 3 on the one C3 dominates.

The two top candidates are **complementary rather than competing**. C2 brings people
in; C3 converts them. Neither is sufficient alone, and the rubric — which is built to
rank single candidates — cannot express that. This is the blind spot flagged in
`01-rubric.md`, and it is load-bearing.

The decision therefore is not "pick the winner". See
[`04-decision/ADR-002-series-portfolio.md`](../04-decision/ADR-002-series-portfolio.md).

## Sensitivity check

Would a different weighting flip this?

- **D1 at 15 instead of 25** (consulting and hiring weighted equally): C2 → 385,
  C3 → 385. Dead heat. So the consulting-first decision in stage 00 is genuinely
  what separates them — worth knowing, because if that goal changes, this changes.
- **D4 at 25** (if time pressure worsened): C3 → 445, C2 → 390. C3's lead widens.
- **D6 at 25** (if cold-start were treated as existential): C2 → 480, C3 → 405.
  C2 wins clearly.

The ranking is stable under plausible re-weightings except the last, which is the
strongest argument for C2 leading the *sequence* even if C3 leads the *strategy*.
That is reflected in the season 1 running order.
