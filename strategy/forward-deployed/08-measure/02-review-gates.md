# Review gates

From ADR-005. Run at the end of every season, **before** any episode of the next is
planned. Not negotiable and not deferrable — the season structure exists to force
this to happen.

## The gate

| Signal | Action |
|---|---|
| **≥2 qualified conversations** | Continue. Rebalance the series mix toward whatever converted. |
| **1 qualified conversation** | Continue one more season, unchanged. Too little data to act on. |
| **0, downloads healthy** | Bridge assets work, topics aren't reaching buyers. Shift the mix further toward Regulated and Pilot to Production. |
| **0, downloads near zero** | **Stop.** The channel is not the right instrument. Return the hours to direct outreach. |
| **Avg >10 hours per episode** | Simplify the format before season 2. Do not quietly reduce cadence instead. |
| **Outreach hours fell** | Red-team attack 1 has come true. Fix the balance before continuing. |

## On "Stop"

It is written down now, while it costs nothing, precisely because it will feel
unthinkable later. By the end of a season there will be six videos, a subscriber
count, a format that works, and real sunk cost. Every one of those makes stopping
harder and none of them is evidence that it's working.

Stopping is not failure. It is the experiment returning a result. The hypothesis —
that a small, high-intent YouTube channel generates enterprise consulting inbound —
is genuinely uncertain, and the evidence base for it is thinner and more
self-interested than the market read suggests (red-team attack 4). Running the
experiment cheaply and reading the result honestly is the whole point of the season
structure.

## Questions to answer in writing at each gate

1. Which episode produced the most qualified attention, and was that predictable?
2. Which episode was the biggest waste of hours?
3. Did anything in the ADRs turn out to be wrong? If so, write a superseding ADR —
   do not edit the original.
4. What broke during the builds that should become season 2 episodes?
5. Is the tone still right? Specifically: has the Demo Tax drifted toward dunking?
   Check comment sentiment for people defending the original authors.
6. Is the C4 cap holding, and is it under pressure? Pressure means the metrics are
   pulling toward the wrong audience.

## Superseding

Any change to a decision requires a new ADR in `04-decision/` that names what it
supersedes. The old ADR stays, marked `Superseded by ADR-NNN`. This is what stops the
strategy being quietly relitigated one small drift at a time — which is the way these
things actually go wrong.
