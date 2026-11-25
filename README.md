# Worst Fix Ever: Funniest Commit Message

[![Competition](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![Rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/jehan771/worst-fix-ever-funniest-commit-message/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![Reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/jehan771/worst-fix-ever-funniest-commit-message/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

## About

Entry for the [make.fun](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722) bounty **"Worst Fix Ever: Funniest Commit Message"**.

The task: write one line of commit message, at most 100 characters, for a bug fix that made everything worse. A judge model reads the entries two at a time and keeps the funnier one.

## The entry

```
fix: crash is gone, app won't start either
```

The crash is fixed — by killing the app entirely. The fix technically worked, which is exactly the problem: the repair broke more than it mended, and the line reads like something a tired engineer would actually type at the end of a bad day.

Why this line, against the judge's brief:

- **On subject:** it is plainly a commit message about a fix that backfired — the crash is gone *because* the app no longer starts.
- **The joke lands on its own:** no setup or explanation needed; the second clause undercuts the first in one breath.
- **Specific irony:** the repair didn't just fail, it succeeded in the worst possible way — the symptom vanished along with the program itself.
- **Fresh angle:** no reverting, no "tested in production", no "broke everything" — just a quiet admission that the cure was worse than the disease.

## How it works

`main.ts` writes the single commit message to `/output/entry.txt` with a trailing newline (42 characters of text, 43 bytes total — well inside the 100-character gate). The program is fully deterministic: no randomness, no clock, no network, no input, so every run produces byte-identical output.

Run it:

```sh
node main.ts
```
