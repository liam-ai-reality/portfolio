# Lifting this out into its own repo

This tree currently lives inside the `portfolio` repo on branch
`claude/youtube-channel-strategy-pnw9u9`, under `strategy/forward-deployed/`.

It is there only because the GitHub App in the session that generated it could not
create repositories (`403 Resource not accessible by integration`). It is meant to be
a standalone repo.

## Steps

1. Create an empty **private** repo on GitHub named `forward-deployed`.
   Do not initialise it with a README.

2. From a clone of `portfolio` with this branch checked out:

```bash
cd strategy/forward-deployed

git init
git add .
git commit -m "Initial commit: channel ICM through stage 04 (decision)"
git branch -M main
git remote add origin git@github.com:liam-ai-reality/forward-deployed.git
git push -u origin main
```

3. Then remove the holding pen from the portfolio repo so it doesn't leak into the
   site:

```bash
cd ../..
git rm -r --cached strategy
echo "strategy/" >> .gitignore
git commit -m "chore: move channel strategy out to its own repo"
```

## Important

`strategy/` must **never** be merged into `gh-pages`. The portfolio repo publishes
from that branch, and this content is private working material — receipts inventory,
NDA boundaries, commercial reasoning and revenue figures.

Check before merging anything from `claude/youtube-channel-strategy-pnw9u9`.

## What is and isn't done

**Done:** stages 00 through 08 are written. The decision is made and recorded in five
ADRs, with the debate and red team that produced it.

**Not done, and deliberately so:**

- **No demand signals have been run.** `01-market/03-demand-signals.md` describes the
  method; the data is absent because Ahrefs returned `Insufficient plan` and no
  numbers should be invented. Run the method before scripting EP01.
- **No competitor teardowns.** Deliberate — season 1 is anchored on receipts and the
  market read, not imitation. Populate before season 2.
- **Handle availability unverified.** Check `@forwarddeployed` before committing to it
  anywhere public.
- **No episode files yet.** `07-backlog/season-01.md` specifies all six; copy
  `05-format/02-episode-template.md` per episode when starting each one.
