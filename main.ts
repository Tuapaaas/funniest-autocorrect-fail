// Funniest Autocorrect Fail — make.fun entry
// A single line that reads as a real autocorrect slip: "panty" for "party".
// The program writes the line to /output/entry.txt and self-checks the gate
// (UTF-8, 1-199 chars, one line, non-blank) before writing.

const LINE =
  "Hey neighbours, we're having a panty at our place on Friday — bring a dish to share, kids welcome!";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (LINE.length < 1 || LINE.length > 199) {
    throw new Error(`entry must be 1-199 characters, got ${LINE.length}`);
  }
  if (LINE.includes("\n") || LINE.trim().length === 0) {
    throw new Error("entry must be a single non-blank line");
  }
  const fs = require("node:fs");
  const path = require("node:path");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
}

main();
