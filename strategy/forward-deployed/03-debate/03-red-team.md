# Red team

Adversarial pass on the emerging decision, run before the ADRs were written. Each
attack is stated at full strength, then answered — or conceded.

---

### Attack 1 — "The whole thing is a rationalisation for not doing sales."

A consultant with no audience will get more engagements in the next six months from
thirty targeted conversations than from six videos. The channel is a comfortable,
legible, *productive-feeling* alternative to the uncomfortable work of direct
outreach, and it has a twelve-month payback at best.

**Answer: partially conceded, and it changes the plan.** This is the strongest attack
on the page. The channel is a compounding asset, not a pipeline for this quarter, and
it must not be allowed to displace direct business development. Two consequences,
both now binding:

1. The C6 finding stands independently — **start the unrecorded conversations now**,
   this week, with no dependency on the channel existing.
2. `08-measure/` must track whether channel hours are displacing outreach hours, not
   just whether videos perform.

If the honest answer at the season 1 gate is that the channel replaced sales rather
than supplementing it, that is a failure regardless of the metrics.

---

### Attack 2 — "C3 wins the rubric because the rubric was built to make it win."

D1 at 25 is enormous. Set it at 15 and the top two tie. The weighting was chosen
after the candidates were known, which makes the whole exercise a laundering of a
prior conviction.

**Answer: partially conceded.** The order of operations was correct — weights were
fixed before scoring — but the objection about *knowing the candidates while setting
weights* is fair and cannot be fully rebutted. Two mitigations: the weighting derives
from an explicit goal decision made by Liam, not by the rubric's author; and the
sensitivity analysis in the scorecard states plainly where the ranking flips. The
tie at D1=15 is published rather than buried, which is the best available defence.

---

### Attack 3 — "Nobody watches compliance content. This is a spreadsheet fantasy."

D6=2 is generous. The realistic outcome for an EU AI Act video from an unknown
creator is under 200 views. Six of those and the channel is dead of discouragement
regardless of what the ADR says about priced-in low views.

**Answer: conceded on the numbers, answered on the structure.** This is exactly why
C3 does not run alone and why season 1 opens with C2. The morale risk is real and is
managed by sequencing — reach content first, so that the low-view compliance episodes
land on a channel that already has some signal of life rather than into silence.
`08-measure/` states explicitly that C3 episodes are not judged on views.

---

### Attack 4 — "Face on camera plus enterprise buyers plus low volume equals nothing."

Enterprise buyers do not discover consultants on YouTube. They use referrals,
analysts and their existing network. The B2B-YouTube case studies cited in the market
read are marketing content produced by agencies that sell B2B YouTube services.

**Answer: the source scepticism is fair and worth recording.** The evidence base for
B2B YouTube is thinner and more self-interested than the market read implies, and
that caveat belongs in `01-market/`. The counter is that the mechanism does not
depend on discovery alone: a buyer who arrives by referral and *then* finds twelve
videos of demonstrated judgement converts at a higher rate. The channel can work as
trust infrastructure even if it never works as a discovery channel — and that path
is much more robust.

**This reframing should be in the measurement plan**: track whether inbound that
arrives by other routes mentions having watched videos. That is likely to be the
real return, and the obvious instrumentation would miss it entirely.

---

### Attack 5 — "The Demo Tax makes enemies in a small industry."

Tearing down public work is a reputational bet in a field where the people whose
demos get torn down are also the people who refer work — and, for the secondary goal,
the people who hire at labs.

**Answer: real, and priced.** Mitigations are structural rather than attitudinal:
credit the original explicitly, tear down patterns and categories rather than
individuals where possible, prefer targets from large companies and vendors over
individual creators, and always ship the fix. Never tear down someone with a smaller
audience than the channel — punching down is both wrong and commercially stupid.

---

### Attack 6 — "Eight hours per episode is fiction."

First episodes take three times the estimate. Six episodes at a realistic 15 hours is
90 hours — over two full working weeks of unbilled time.

**Answer: conceded.** The estimate is a target, not a forecast, and episode 1 should
be expected to take 15–20 hours. The season structure exists precisely so this is
discovered and priced after six episodes rather than after twenty-six. `08-measure/`
tracks hours per episode as a first-class metric, and if the season 1 average lands
above 10 hours the format must be simplified before season 2 rather than the cadence
being quietly abandoned.

---

### Attack 7 — "Two audiences on one channel will confuse the algorithm."

Mixing developer teardowns with compliance content gives YouTube contradictory
signals and both series will be under-recommended.

**Answer: acknowledged, judged acceptable.** Real risk, but the alternative — two
channels — violates C-1 outright and splits an already tiny audience. The mitigation
is a coherent through-line at the *channel* level ("what happens when AI meets a real
company") even where topics diverge, plus playlists and consistent packaging. If
recommendation performance is visibly bifurcated at the season 2 gate, revisit with a
new ADR rather than by drift.

---

## What the red team changed

1. Unrecorded business development conversations start **now**, independent of the channel.
2. `08-measure/` tracks hours per episode, and tracks whether channel work is
   displacing outreach.
3. Measurement must capture referral-sourced inbound that mentions the videos — the
   likeliest real return, and invisible to naive instrumentation.
4. The thinness of the B2B-YouTube evidence base is recorded as a caveat, not treated
   as settled.
5. Episode 1's cost is expected to be roughly double the target, and that is planned for.
