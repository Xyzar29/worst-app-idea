// The Worst App Idea Ever Pitched — a one-line entry for make.fun.
// Writes exactly one line (226 characters, no trailing newline) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Shelfie photographs your bookshelf, rearranges the spines by color, then mails you a framed certificate proving to dinner guests that you have definitely read the books you have never opened — $9.99 a month, smugness included.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate allows 1–240 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-240 gate`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
