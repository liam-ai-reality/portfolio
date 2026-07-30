# Scorecard

Implements ADR-005. Update on publish and whenever inbound arrives.

## Season 1 — target: 2 qualified conversations

### Qualified conversations
A conversation with someone who has budget authority, who cites a specific video or
bridge asset.

| Date | Who (role, company size) | Video / asset cited | Route | Outcome |
|---|---|---|---|---|
| | | | | |

**Count: 0 / 2**

"Route" matters: `search` (found the video cold) vs `referral` (arrived another way,
then watched). Red-team attack 4 predicts referral will dominate — if so, the channel
is working as trust infrastructure rather than as discovery, which is a *more* robust
outcome and should change how season 2 is planned.

### Bridge assets

| Asset | Episode | Downloads | → conversations |
|---|---|---:|---:|
| Production-readiness checklist | EP01 | 0 | 0 |
| Cost model spreadsheet | EP02 | 0 | 0 |
| Risk-classification decision tree | EP03 | 0 | 0 |
| Isolation checklist | EP04 | 0 | 0 |
| Annex IV template | EP05 | 0 | 0 |
| Pilot readiness assessment | EP06 | 0 | 0 |

### Cost

| EP | Est. hours | Actual | Variance |
|---:|---:|---:|---:|
| 01 | 15–20 | | |
| 02 | 8 | | |
| 03 | 8 | | |
| 04 | 8 | | |
| 05 | 7 | | |
| 06 | 6 | | |

**Season average: — ** (gate: simplify the format if >10)

### Displacement check

| Fortnight | Channel hours | Outreach hours | Note |
|---|---:|---:|---|
| | | | |

Red-team attack 1: if outreach hours fall as channel hours rise, the channel has
become a substitute for business development rather than a supplement. That is a
failure regardless of every other number on this page.

## Diagnostic only — never judgement

Recorded to understand what happened, never to decide whether it worked.

| EP | Views @30d | Subs gained | Avg view duration | CTR |
|---:|---:|---:|---:|---:|
| | | | | |

**Regulated episodes (EP03, EP05) are not judged on views at all.** A few hundred
views there is the designed outcome. If this table starts feeling like the real
scoreboard, re-read ADR-005 — that drift is the predicted failure mode.

## Inbound log

Every inbound, whatever the source. Ask, unprompted: *did you come across any of the
videos?* The answer is the metric naive instrumentation would miss entirely.

```
YYYY-MM-DD | source | video cited | role | seniority | outcome
```
