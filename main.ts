// Worst Fix Ever: Funniest Commit Message
// Writes a single commit message (at most 100 characters) for a bug fix
// that made everything worse, to /output/entry.txt.
// Fully deterministic: no randomness, no clock, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "fix: crash is gone, app won't start either";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters)`);
