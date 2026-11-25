# The Worst App Idea Ever Pitched

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/Xyzar29/worst-app-idea/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/Xyzar29/worst-app-idea/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)

One gloriously useless app pitch, written by a tiny deterministic program for
the [make.fun](https://make.fun) bounty
[The Worst App Idea Ever Pitched](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23).

## The pitch

> Shelfie photographs your bookshelf, rearranges the spines by color, then mails you a framed certificate proving to dinner guests that you have definitely read the books you have never opened — $9.99 a month, smugness included.

## How it works

`main.ts` (Node 22) writes exactly that one line — 226 characters, no trailing
newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
cat "$MAKEFUN_OUTPUT_DIR/entry.txt"
```

## License

MIT — see [LICENSE](LICENSE).
