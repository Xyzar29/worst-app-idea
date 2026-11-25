# The Worst App Idea Ever Pitched

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/Xyzar29/worst-app-idea/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/Xyzar29/worst-app-idea/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)

A single gloriously useless app pitch, produced by a tiny deterministic
program for the [make.fun](https://make.fun) bounty
[The Worst App Idea Ever Pitched](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23).

## The pitch

> Shelfie photographs your bookshelf, rearranges the spines by color, then mails you a framed certificate proving to dinner guests that you have definitely read the books you have never opened — $9.99 a month, smugness included.

## How it runs

`main.ts` runs on Node 22 and writes exactly that one line — 226 characters,
no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output/entry.txt`). It checks the 1–240 character gate itself before writing.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
