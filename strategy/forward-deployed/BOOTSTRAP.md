# Moving this into its own repo

This tree currently lives inside the `portfolio` repo, on branch
`claude/youtube-channel-strategy-pnw9u9`, under `strategy/forward-deployed/`.

It is only there because the GitHub App in the session that generated it cannot
create repositories (`403 Resource not accessible by integration`). It is meant to
stand alone.

---

## Step 1 — create the empty repo

On GitHub, create a **private** repo named `forward-deployed` under
`liam-ai-reality`. **Do not** initialise it with a README, .gitignore or licence —
it must be empty, or the push in step 2 will be rejected.

## Step 2 — extract with history and push

`git subtree split` rewrites the commits that touched this directory into a branch
whose root *is* this directory. History is preserved; the `strategy/forward-deployed/`
prefix disappears.

```bash
# from a clone of portfolio, on the branch above
git fetch origin claude/youtube-channel-strategy-pnw9u9
git checkout claude/youtube-channel-strategy-pnw9u9

git subtree split --prefix=strategy/forward-deployed -b fd-standalone

git push git@github.com:liam-ai-reality/forward-deployed.git fd-standalone:main
```

Verified 2026-07-30: produces 44 files at the repo root across two commits.

Check it, then clean up the local helper branch:

```bash
git branch -D fd-standalone
```

## Step 3 — remove the holding pen from portfolio

```bash
git checkout claude/youtube-channel-strategy-pnw9u9
git rm -r --cached strategy
printf 'strategy/\n' >> .gitignore
git commit -m "chore: move channel strategy out to its own repo"
git push origin claude/youtube-channel-strategy-pnw9u9
```

The working copy stays on disk; only tracking stops.

### Alternative — no history

If preserving the two commits doesn't matter, `cd` into this directory and
`git init && git add . && git commit && git branch -M main && git remote add origin … && git push -u origin main`.
Simpler, but you lose the record of what changed when — including the ADR-006
correction, which is the most interesting thing in the history.

---

## ⚠ Do not merge `strategy/` into `gh-pages`

The portfolio repo publishes its site from `gh-pages`. This content is private
working material: receipts inventory, NDA boundaries, commercial reasoning, revenue
figures. Check before merging anything from
`claude/youtube-channel-strategy-pnw9u9`.

Once step 3 is done, delete this file — it describes a move that has already happened.

---

## What is done, and what is open

**Done.** Stages 00–08 written. Decision made and recorded across six ADRs, with the
debate and red team that produced it. One demand signal run completed
(`01-market/signal-regulated-2026-07-30.md`), which triggered ADR-006.

**Open, in rough priority order:**

1. **EP03 is time-critical.** Article 50 transparency applies **2 August 2026**. The
   engineering-register commentary window is open now and closes within weeks.
2. **Finish the demand method.** Steps 1, 2 and 4 (autocomplete, top-20 view
   distribution, comment mining) still have no data — they need a browser on an
   unrestricted network, roughly ten minutes per term. Run against the revised seed
   list in `01-market/03-demand-signals.md`. **There are still no view counts
   anywhere in this repo.**
3. **Verify the Article 72 implementing act.** A Commission act laying down the
   post-market monitoring plan template was due by 2 February 2026. Status unknown.
   EP05 depends on it.
4. **Check handle availability** for `@forwarddeployed` before committing to it
   anywhere public.
5. **Set up instrumentation** before EP01 ships — UTMs, bridge-asset capture, the
   inbound log in `08-measure/01-scorecard.md`. Retrofitting it loses the first
   episode's data.
6. **Start the unrecorded business development conversations** (ADR-002, red-team
   attack 1). This does not depend on the channel and should not wait for it.
7. **Competitor teardowns** before planning season 2, not before season 1.
