# YouTube / personal brand — first pass

> **Superseded by [`forward-deployed/04-decision/`](forward-deployed/). Kept for the record.**
>
> This was the pre-debate thinking. The §4 recommendation here — C2 (Demo Tax) as
> flagship — **did not survive the weighted rubric in stage 03**. Once buyer proximity
> was weighted properly against the consulting-first goal, C3 (Regulated) scored
> higher (435 vs 405), and the actual decision became a three-series funnel rather
> than a single flagship. See `forward-deployed/03-debate/02-scorecard.md`.
>
> Holding pen. This is **not** site content — do not merge `strategy/` into `gh-pages`.
> Written 2026-07-30.

---

## 1. The raw material

Pulled from the portfolio, this is what you actually have to work with.

**Receipts nobody else in this niche has**

| Asset | Why it's rare on YouTube |
|---|---|
| Shipped AI into BBC Studios, Paramount, WBD, ITV, A&E, Crunchyroll, Amazon | Almost every AI creator demos in a fresh repo. You've deployed into procurement, legal, and sceptical end users. |
| 4 → 250 employees, $100k → $5m ARR, EVP/CTO | Operator layer. You can talk org and P&L, not just code. |
| klasp on crates.io + npm + PyPI, EAF, cli-printing-press, security_audit | Public, inspectable code. Un-fakeable. |
| Seven-tool EU AI Act suite | Maybe a few dozen people on earth have *shipped* this. Not opinions — a product. |
| npm supply-chain incident, credential rotation across 15+ envs, zero downtime | War story with a real adversary. |
| AWS SA Pro, Bedrock / CDK / Step Functions, multi-tenant isolation | The unglamorous half that demo channels skip. |
| Autonomous Podcast SaaS (Step Functions → Bedrock → TTS → RSS) | You already built a content pipeline. Reuse it. |

**Constraints — the things that will actually kill this**

1. **Billable hours are the real cost.** Any plan needing a polished weekly video dies in month two. Design for that up front.
2. **Your best stories are under NDA.** The portfolio says "client specifics abstracted" five times. This is the single biggest structural problem and needs solving by format choice, not willpower. (§5)
3. **You're selling two things at once** — an FDE role *and* consulting. Hiring managers and buyers want different videos.
4. **Zero audience.** Discovery has to come from search intent and contrarian hooks. Personality-led content doesn't work until someone already cares who you are.

---

## 2. Market read — July 2026

**a. The slop crackdown is the defining tailwind.** YouTube terminated 16 channels (35M subs, 4.7B lifetime views) in January 2026 under the inauthentic-content policy; roughly 1 in 5 Shorts recommended to a fresh account is mass-produced AI video; Neal Mohan used the phrase "AI slop" in his own annual letter. The scarce commodity is *demonstrably human, demonstrably competent*. Your face, your terminal, your actual AWS bill, your actual failing CI run. Eighteen months ago that was table stakes. Now it's a moat.

**b. The tutorial tier is saturated and commoditised.** "Build an AI agent in 10 minutes", n8n workflow walkthroughs — that lane is owned (Nate Herk went 0 → hundreds of thousands of subs on it) and a model can now generate a passable imitation. Do not compete here.

**c. Format economics.** Long-form takes 55% of net ad revenue; Shorts are a pooled 45% at roughly $0.01–0.07 RPM — a million Shorts views is $10–70. But creators posting both grow subscribers ~3x faster than single-format channels. Conclusion: **long-form is the product, Shorts are the distribution feeder, and Shorts get cut from long-form rather than authored separately.**

**d. B2B inverts view-count logic.** A video ranking for "EU AI Act Annex IV technical documentation" at 200 views/month can be worth more than 200k views on "top 10 AI tools." Your RPM isn't YouTube's RPM — it's your day rate. B2B buyers typically watch 3–5 videos before they contact you, and those are search videos found before they know your name.

**The gap:** everyone teaches how to *build* an AI demo. Nearly nobody shows what happens when one meets a real company — tenancy, authz, cost at scale, an audit trail, a regulator, a dispatcher who doesn't want the tool. You've lived that seven times over.

---

## 3. Strategic call: one channel, several named series

Not "a few channels." Reasons: the algorithm rewards topical coherence; your time is the binding constraint; and your brand through-line ("the person who ships AI into real companies") is stronger undivided.

A second channel is a thing you *earn*, and there's exactly one clean split when you do: **developer audience vs. compliance-buyer audience**. That second one should be Reality AI–branded, not personal.

---

## 4. Candidates (for the debate stage)

Deliberately including the ones I'd reject, with honest bear cases.

### C1 — "Forward Deployed": the craft of the FDE role
- **Bull:** You already own the title in your tagline. FDE is the hot job of 2026 (Palantir → the frontier labs) with essentially no incumbent YouTube voice. Career-intent search is real. Directly serves the hiring goal.
- **Bear:** Career-advice content attracts job seekers, not buyers. The audience can't hire you as a consultant.

### C2 — "The Demo Tax": production-grading other people's AI builds ⭐
Take a popular AI build/tutorial and run it through the gauntlet you'd apply for a paying client: multi-tenant isolation, authz, cost at 10k users, audit trail, security scan, EU AI Act risk classification. Show precisely where it breaks.
- **Bull:** Endlessly repeatable. Sourced from content that has *already proven demand*, which hands you both the topic and the hook. Contrarian in a market drowning in credulity. Every episode is a live demonstration of the thing you sell. **And it's NDA-immune by construction** — you're only ever touching public material.
- **Bear:** Can curdle into a reaction/negativity channel. Must punch at the pattern, never the person. Needs a "here's the fixed version" second half or it's just dunking.

### C3 — Regulated AI / EU AI Act
- **Bull:** Near-zero competition. Highest-value audience on this list. The August 2026 GPAI obligations put a clock on the topic. You have a shipped product, not takes.
- **Bear:** Dry and visually hard. Low ceiling. It's work rather than fun — real burnout risk as a primary channel.

### C4 — Keeping AI coding agents honest (klasp's audience)
- **Bull:** Largest, fastest-growing dev audience. You ship the tooling. "Quality gates" is a genuine counter-position to the "10x your output" consensus.
- **Bear:** Most crowded lane, closest to the slop, and the audience is devs who don't buy consulting.

### C5 — Building Reality AI in public
- **Bear-heavy:** Works on LinkedIn, weak on YouTube without revenue numbers or drama — and you can't publish client revenue. Skip.

### C6 — Long-form interviews with enterprise AI leaders
- **Bull:** Business development wearing a content costume. Your BBC/Paramount/ITV network is the unlock. Proven format (Lex-style).
- **Bear:** High effort, slow, and you need an audience before good guests say yes. **Year-two move.**

### Recommendation
**C2 as the flagship format, inside a C1-flavoured channel identity, with C3 and C4 as recurring series.**

Handle: `@forwarddeployed`. Channel title carrying your name too, since one goal is being hired. It's ownable, it's already your positioning, it reads to both hiring managers and buyers, and it survives you changing topic.

---

## 5. The NDA problem — solve it explicitly

This is what quietly kills the channel if you don't design around it. Three routes through:

1. **Rebuild, don't recount.** Reconstruct the *pattern* on synthetic data, in public. "How I'd build dispatch routing for a 200-van fleet" — no client, all craft.
2. **OSS as the primary on-camera surface.** klasp, EAF, security_audit are 100% yours to show, in full, forever.
3. **Teardowns of public things.** Other people's repos, public demos, public incidents. Zero exposure.

Note that all three point at C2. That's most of why it's the flagship.

---

## 6. Format design for someone who bills by the day

- **One long-form per fortnight**, 12–20 min, **batched** — two shoot days a month, not a weekly grind.
- **3 Shorts cut from each long-form.** Never authored separately.
- **Seasons, not forever-cadence.** Six episodes, then stop and assess. Seasons suit consultants; open-ended cadence doesn't.
- **First six episodes are search-anchored, not personality-anchored.** You have no audience to carry personality yet.
- **Zero stock B-roll. No robot imagery.** Terminal, editor, AWS console, real diffs, real failing CI. That's the visual identity, and it's the precise inverse of slop.

---

## 7. Measurement — the thing that's easy to get wrong

Success is **qualified conversations, not views.**

- Unique UTM per video → liam.dev
- Count inbound that references a specific video
- klasp installs by week, against publish dates

900 views and two inbound calls beats 40k views and none. **Review gate at episode 6**, against those numbers — not subscriber count.

---

## 8. Open data gap

Ahrefs is connected but returns `Insufficient plan` on Keywords Explorer *and* on the subscription-usage endpoint, so no real search volumes were pulled for this pass. Demand validation in stage 01 should use **YouTube-native signals** instead: autocomplete, the view-count distribution across the top 20 results for a query, and comment mining. Arguably better anyway — Google volume is a poor proxy for YouTube volume.

---

## 9. Proposed ICM repo

`liam-ai-reality/forward-deployed` — numbered stages, filesystem-as-context, ADRs, matching EAF conventions.

```
00-context/     who-i-am.md · receipts-inventory.md · constraints.md · goals.md · nda-boundaries.md
01-market/      niche-map.md · competitor-teardowns/ · demand-signals.md · format-economics.md
02-candidates/  one spec per concept, identical schema so they're comparable
03-debate/      bull.md + bear.md per candidate · rubric.md · red-team.md
04-decision/    ADR-001-channel-thesis · ADR-002-format · ADR-003-cadence
05-format/      series-bible.md · episode-template.md · title-thumbnail-system.md · visual-identity.md
06-pipeline/    production-runbook.md · tooling.md · publish-checklist.md
07-backlog/     episodes/*.md — one per idea, w/ demand signal + hook + which receipt it spends
08-measure/     scorecard.md · review-gates.md
```

The point of ICM here is stage 03. Candidates get written to a **fixed schema** so a bull agent and a bear agent can argue each one against the same rubric, and the ADR records *why the losers lost* — so this doesn't get relitigated in three months.

---

## Sources

- [YouTube's AI Slop Crackdown: 4.7 Billion Views Wiped](https://outlierkit.com/resources/youtube-ai-slop-crackdown-2026/)
- [YouTube's AI Slop Problem And How Marketers Can Compete](https://www.searchenginejournal.com/youtubes-ai-slop-problem-and-how-marketers-can-compete/567297/)
- [YouTube Monetization 2026: Thresholds and Shorts Changes](https://quasa.io/media/youtube-monetization-2026-new-thresholds-and-shorts-revenue-shifts)
- [What's Actually Working on YouTube in 2026 — Gillian Perkins](https://www.gillianperkins.com/blog/whats-actually-working-on-youtube-in-2026-algorithm-shifts)
- [YouTube Content Strategy for Business in 2026](https://channelcraftagency.com/blog/youtube-content-strategy-for-business-has-changed-dramatically-in-2026)
- [B2B YouTube Case Study: IT Consulting Firm](https://outlierkit.com/resources/b2b-youtube-case-study-it-consulting/)
- [AI YouTube Channels Growth Guide 2026](https://ytzolo.com/blog/ai-youtube-channels-growth-guide/)
- [10 Best AI & LLM YouTube Channels in 2026](https://learnwithpath.com/blog/best-youtube-channels-for-ai-engineering-2026)
