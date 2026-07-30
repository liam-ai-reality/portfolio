# C3 — Regulated: bull and bear

> **Addendum 2026-07-30 — two claims below were wrong.** The bull case's "there is a
> clock — the August 2026 GPAI obligations" is incorrect twice: GPAI obligations have
> applied since **2 August 2025**, and the August 2026 date that did matter (Annex III
> high-risk) moved to **2 December 2027** when Regulation (EU) 2026/1744 entered into
> force on 27 July 2026. The bear case's point about regulatory decay was
> correspondingly understated.
>
> The argued text below is left unedited — it is the record of the debate as it was
> held. See `01-market/signal-regulated-2026-07-30.md` and
> `04-decision/ADR-006-regulated-series-recut.md` for the correction and what changed.

## Bull

**The buyer proximity is not merely high, it is qualitatively different.** Every
other candidate attracts people who might one day have a problem. This one attracts
people who have a legal obligation, a date, and no internal capability. A viewer
searching "Annex IV technical documentation" is not browsing. Against a rubric that
weights D1 at 25, this is decisive.

**The competition is close to zero, and structurally so.** The lawyers who understand
the Act cannot build the software. The engineers who can build it have not read the
Act. Liam has shipped a seven-tool suite covering classification, FRIA, Annex IV
generation and post-market monitoring (R12). The population of people who can make
this content credibly is measured in dozens, worldwide. That is not a niche, it is
a moat.

**The bridge asset is the best available anywhere in this repo.** An Annex IV
template or a risk-classification decision tree is downloaded only by someone with a
live obligation. The qualification happens before the conversation starts. Compare
C4, whose bridge asset is an OSS install that qualifies nobody.

**There is a clock.** The August 2026 GPAI obligations create dated, urgent demand.
Urgency is the scarcest ingredient in B2B content and here it arrives for free.

**Geography becomes an asset.** Constraint C-6 lists the UK/EU base as a mild
handicap. In this candidate it inverts completely — proximity to the regulation, the
timezone, and the market that has to comply.

**It is the strongest differentiator in a sales conversation.** "I have shipped EU AI
Act compliance as working software" ends a category of competitive comparison.

## Bear

**The audience may be too small to sustain a channel.** D6 is the weak point and it
is weak by a lot. These search terms have low volume even by B2B standards. A channel
that publishes six videos to a few hundred views each will feel like failure long
before the first engagement lands, and morale is a real input to whether season 2
happens.

**No reach engine.** Nothing here will ever be recommended broadly. Without a
companion format the channel has no top of funnel and depends entirely on people
already searching for a term they may not know exists.

**Accuracy risk is asymmetric and severe.** One wrong claim about a legal obligation,
made to an audience of compliance professionals, is worse than making nothing. The
audience is expert and the error is permanent and quotable. This also inflates the
scripting cost well above the naive estimate.

**It is work, not enthusiasm.** Regulatory content is dry to make and dry to watch.
Sustained as a sole format it is a burnout risk, and burnout is the failure mode
constraint C-1 already flags as most likely.

**Liability boundary.** Sitting close to legal advice without being it requires a
disclaimer on every episode and constant discipline about which side of the line the
content is on.

**Regulatory content decays.** Guidance shifts, deadlines pass, interpretations
settle. The August 2026 clock is an advantage now and a stale reference in eighteen
months. D7 is weaker than it first appears.

**The suite itself cannot be shown.** R12 was built for a client. The approach can be
rebuilt in public, but that is additional unbudgeted work — the receipt is real but
it is not directly filmable, which is a meaningful gap between the credential and
the content.

## Where the bear is answered

The small-audience objection is answered by the economics, not by the metrics:
`00-context/04-goals.md` explicitly prices a 900-view video with two qualified calls
above a 40,000-view video with none. Low views here are expected and priced in, and
`08-measure/` must be set up so this does not read as failure at the review gate.

The no-reach-engine and burnout objections are **not** answered within this
candidate, and cannot be. They are the reason C3 must not run alone — which is
precisely the argument of ADR-002.
