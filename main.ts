// Vending Machine Pickup Line — one line, written to /output/entry.txt.
//
// The line is spoken by the machine itself, in the machine's own world
// (coils, snacks, exact change), with the punch landing on the last words.
// Node 22+, stdlib only, no network, deterministic: the same line every run.
//
// The output path is absolute (/output/entry.txt, per the competition rules),
// so the grader's working directory cannot change where the file lands.
// The script-dir resolution below is kept for any future relative asset;
// nothing is read from disk.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const LINE =
  "Forty snacks in my coils, and you're the only one I'd drop for free — press B4 and catch me.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), LINE, "utf8");
