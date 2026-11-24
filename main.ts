import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v5.2.1: fixed a bug where the bladder issued a low-battery warning only after the elevator doors closed.";

// The gate accepts 1-160 characters of non-whitespace text, so check
// the entry against it before writing, exactly as the scorer will.
const valid =
  ENTRY.length >= 1 && ENTRY.length <= 160 && ENTRY.trim().length > 0;
if (!valid) {
  throw new Error(`entry must be 1-160 non-whitespace characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
