/*
  ===========================================================================
  WHY DOES MY DEPLOYED APP SHOW A DIFFERENT TOTAL?

  Run this against your own src folder to see exactly what the files in your
  repository add up to, per bank and per section.

      node tools/count-check.mjs

  Run it from the repo root, with the src folder beside it.

  It compares each bank file against what it should contain, so a file that
  failed to upload, uploaded as an older version, or lost its tail during a
  paste shows up as a specific number rather than a vague shortfall.
  ===========================================================================
*/

import { readFileSync, existsSync } from "fs";

/* What each file should hold, as of this release. Update these when banks
   change and the check keeps working. */
const EXPECTED = {
  "adiBankTeaching.js":      { total: 181, cats: { "adi-b2-pedagogy": 116, "adi-b2-procedure": 65 } },
  "adiBankVehicle.js":       { total: 206, cats: { "adi-b2-mechanics": 88, "adi-b2-categoryb": 98, "adi-b2-safety": 20 } },
  "adiTheoryPracticeData.js":{ total: 126 },
  "adiStageOneData.js":      { total: 72 },
  "adiExpansionData.js":     { total: 77 },
  "rulesQuestions.js":       { total: 153 },
};

/* Counting by text rather than by importing, so this runs with plain node in a
   folder with no dependencies installed.

   The banks are formatted two different ways — some put `q:` on its own line,
   others write the whole question object on one line — so the pattern has to
   allow either. My first version only matched the first style and reported two
   perfectly good files as empty, which is exactly the kind of false alarm a
   checking tool must not produce. */
function countQuestions(src) {
  return (src.match(/[{,\n]\s*q:\s*"/g) || []).length;
}

function countInCategory(src, catId) {
  const start = src.indexOf(`id: "${catId}"`);
  if (start === -1) return null;
  /* Up to the next category id, or the end of the file. */
  const rest = src.slice(start + 1);
  const nextIdx = rest.search(/\n\s{4}id:\s*"/);
  const chunk = nextIdx === -1 ? rest : rest.slice(0, nextIdx);
  return countQuestions(chunk);
}

console.log("Question counts in your src folder\n");
console.log("file                          found  expected");
console.log("-".repeat(52));

let grand = 0, problems = [];

for (const [file, want] of Object.entries(EXPECTED)) {
  const path = `src/${file}`;
  if (!existsSync(path)) {
    console.log(`${file.padEnd(28)}  MISSING FROM src/`);
    problems.push(`${file} is not in src/ — this is almost certainly the cause`);
    continue;
  }
  const src = readFileSync(path, "utf8");
  const n = countQuestions(src);
  grand += n;
  const flag = n === want.total ? "" : "   <-- MISMATCH";
  console.log(`${file.padEnd(28)} ${String(n).padStart(5)}  ${String(want.total).padStart(8)}${flag}`);
  if (n !== want.total) {
    problems.push(`${file} holds ${n} questions, expected ${want.total} — likely an older copy`);
  }
  if (want.cats) {
    for (const [cat, expect] of Object.entries(want.cats)) {
      const c = countInCategory(src, cat);
      const f = c === expect ? "" : "   <-- MISMATCH";
      console.log(`   ${cat.padEnd(25)} ${String(c ?? "absent").padStart(5)}  ${String(expect).padStart(8)}${f}`);
      if (c !== expect) problems.push(`  ${cat}: ${c ?? "absent"} vs ${expect} expected`);
    }
  }
}

/* Road sign questions are generated at runtime from the sign deck rather than
   written out, so they are counted separately. */
const signsPath = "src/roadSignsData.js";
let signs = 0;
if (existsSync(signsPath)) {
  const s = readFileSync(signsPath, "utf8");
  signs = (s.match(/\n\s+\{\s*id:\s*\d+/g) || []).length;
  console.log(`\n${"roadSignsData.js".padEnd(28)} ${String(signs).padStart(5)}  ${String(240).padStart(8)}${signs === 240 ? "" : "   <-- MISMATCH"}`);
  console.log("   (these become generated sign questions, a few short of the deck size");
  console.log("    because a sign with too few distinct distractors is skipped)");
}

console.log("\n" + "-".repeat(52));
console.log(`written questions          ${String(grand).padStart(5)}`);
console.log(`plus generated sign questions, giving roughly 1,054 in the app`);

if (problems.length) {
  console.log("\nPROBLEMS FOUND:");
  problems.forEach(p => console.log("  · " + p));
  console.log("\nRe-upload the files listed above to src/ on GitHub, one at a time.");
} else {
  console.log("\nEvery file matches. If the app still shows a lower total, the");
  console.log("deployed build is older than these files — check that the most");
  console.log("recent Vercel deployment is green and is the one serving the domain.");
}
