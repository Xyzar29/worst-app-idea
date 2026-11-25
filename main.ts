// The Worst App Idea Ever Pitched — a one-liner entry for make.fun.
//
// The grader runs `node main.ts` on Node 22 with MAKEFUN_OUTPUT_DIR set to
// a mounted directory, so this program only ever writes *inside* that
// directory — it never removes or replaces the directory itself.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, 226 characters, inside the gate of 1-240 characters.
const PITCH =
  "Shelfie photographs your bookshelf, rearranges the spines by color, then mails you a framed certificate proving to dinner guests that you have definitely read the books you have never opened — $9.99 a month, smugness included.";

function checkGate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 240) {
    throw new Error(`pitch is ${chars} characters; the gate allows 1-240`);
  }
  if (text.trim().length === 0) {
    throw new Error("pitch must not be only whitespace");
  }
}

checkGate(PITCH);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, PITCH, { encoding: "utf8" });

// Confirm the file on disk is exactly the pitch we gated above.
if (readFileSync(outPath, "utf8") !== PITCH) {
  throw new Error("entry.txt does not match the gated pitch");
}
