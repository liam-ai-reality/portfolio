# Operating instructions

This repo follows the Interpreted Context Methodology: numbered stages,
filesystem-as-context, decisions frozen as ADRs.

## Rules

1. **Stages are ordered.** Do not write to stage N without reading stages 0..N-1.
   The context you need is on disk, not in the prompt.
2. **Never silently overwrite a decision.** Stage `04-decision/` is append-only.
   To change a decision, write a new ADR that supersedes the old one by number and
   mark the old one `Superseded by ADR-NNN`. Do not edit the original's substance.
3. **Candidates share a schema.** Every file in `02-candidates/` uses the schema in
   `02-candidates/00-README.md`, unchanged. Comparability is the whole point.
4. **Claims cite a receipt.** Any assertion about what Liam can credibly say on
   camera must point at an entry in `00-context/02-receipts-inventory.md`. If there
   is no receipt, it is an opinion and must be labelled as one.
5. **NDA gate.** Before any episode reaches `07-backlog/`, check it against
   `00-context/05-nda-boundaries.md`. Episodes that fail the gate are rejected, not
   softened.
6. **No invented numbers.** Search volumes, view counts, and revenue figures are
   either measured and sourced, or absent. Placeholder metrics are worse than none —
   see `01-market/03-demand-signals.md` for why this repo currently has a data gap.

## Stage contracts

| Stage | Input | Output |
|---|---|---|
| 00 | Portfolio, CV, existing work | Grounded self-description + what's provable |
| 01 | 00 + external research | Market read with sources |
| 02 | 00 + 01 | Candidate specs, identical schema |
| 03 | 02 + rubric | Weighted scores + argued bull/bear + red team |
| 04 | 03 | ADRs. Immutable once merged. |
| 05 | 04 | Format artefacts implementing the decision |
| 06 | 05 | Repeatable production process |
| 07 | 05 + 06 | Episodes, NDA-gated, demand-signalled |
| 08 | 04 | Metrics that test the ADRs' assumptions |

## Debate protocol (stage 03)

Bull and bear are argued **separately and in good faith**. The bear case is not a
formality — a candidate whose bear case is weak has probably not been examined
properly. Score against the rubric *after* both cases are written, never before.
