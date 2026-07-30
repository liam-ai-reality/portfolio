# Demand signals — method and current data gap

## The gap, stated plainly

Ahrefs is connected as an MCP server but the current plan returns
`Insufficient plan` on Keywords Explorer **and** on the subscription-usage endpoint.
No search-volume data was pulled for this pass. **There are no keyword volumes in
this repo, and none should be invented** (see `CLAUDE.md` rule 6).

Options: upgrade the Ahrefs plan, or use the YouTube-native method below. The
recommendation is the latter regardless of budget — Google volume is a poor proxy
for YouTube demand, and for the low-volume B2B terms that matter here it is
frequently reported as zero even where real intent exists.

**Second blocker, found 2026-07-30.** Steps 1, 2 and 4 below cannot be run from the
Claude Code session environment either: its network policy denies all Google and
YouTube hosts at the proxy gateway, and the pre-installed Chromium egresses through
the same gateway. **Run those three steps manually from an ordinary browser** — about
ten minutes per term. Steps 3 and 5 can be automated from the session.

## The YouTube-native method

Run this per candidate topic before it enters `07-backlog/`. It costs about ten
minutes and needs no paid tooling.

### 1. Autocomplete harvest
Type the seed phrase into YouTube search and record every suggestion, then repeat
with `a`–`z` appended. Suggestions are surfaced from real query logs, so a suggestion
existing at all is a demand signal. Record verbatim.

### 2. Top-20 view distribution
Search the term and record the view count and age of the top 20 results.

- **All results >100k and <1 year old** → competitive, dominated, skip.
- **Median 1k–20k, several >2 years old** → healthy. Real demand, stale supply.
- **Fewer than 10 real results, or results that don't match intent** → either
  genuinely empty (good, if intent is real) or no demand (bad). Disambiguate with
  step 3.

### 3. Intent disambiguation
For a low-result term, check whether the demand exists elsewhere: a busy Reddit or
Stack Overflow thread, a well-trafficked vendor blog post, or an active LinkedIn
discussion means the demand is real and simply not served on YouTube. That is the
best possible signal for this channel.

### 4. Comment mining
Read the comments on the top 3 results for the term. Unanswered questions are
episode titles. Complaints that a video "doesn't cover production" or "doesn't say
what this costs" are direct commissions.

### 5. The buyer test
Finally, and decisively: **would someone with budget authority type this?**
"how to become an FDE" fails. "AI pilot to production checklist" passes. A topic
that fails the buyer test can still be made, but it is reach content and must be
labelled as such in the backlog.

## Seed terms to run first

**Regulated — revised 2026-07-30 after the first run
([results](signal-regulated-2026-07-30.md), [ADR-006](../04-decision/ADR-006-regulated-series-recut.md)).**
Expect low volume, high intent.

Promoted: `ai act post market monitoring` · `article 72 post market monitoring plan` ·
`eu ai act article 50 transparency` · `ai generated content machine readable marking` ·
`ai watermarking c2pa provenance implementation` · `annex iv documentation automation`

Kept, reframed: `eu ai act high risk classification` · `article 6(3) derogation`

Demoted: `annex iv template` — commoditised, five vendors give one away free.
Dropped: `gpai obligations august 2026` — factually wrong, GPAI applied from
**2 August 2025**. `fria template` — narrow public-sector buyer set, and the AI
Office's official template is still pending.

Pilot to Production — expect medium volume, medium-high intent:
`ai pilot to production` · `multi tenant ai architecture` ·
`bedrock cost at scale` · `llm cost per user` · `ai agent audit trail` ·
`enterprise ai security review`

Demo Tax — expect higher volume, borrowed demand:
Do not run this method for Demo Tax. Its demand signal is the view count of the
artefact being torn down, which is already measured. That is the point of the format.

## Recording

One file per term in this directory, named `signal-<slug>.md`, with the date, the
raw autocomplete list, the top-20 table, and a verdict. Signals go stale in about
six months.
