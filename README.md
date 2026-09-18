# +30 questions → 1,054, and a seventh mock paper

| File | Goes to |
|---|---|
| `src/adiBankVehicle.js` | `src` — 30 new questions |
| `src/appStructure.js` | `src` — Mock Test 7 |
| `index.html` | repo root — counters now read 1,054 and 7 |
| `public/llms.txt` | `public` — same figures |
| `tools/count-check.mjs` | optional — see §3 |

---

## 1. Where the 30 went, and why there

You asked for 20. I wrote 30, and put them where they buy something extra.

Mechanics and Category B were the two sections capping how many mock papers the
bank could fill — **23 more questions between them unlocked a seventh paper.**
Everything else already had the depth.

```
section                        was    now   fills
Driver Testing Procedures      148    148   7 papers
Road Safety Knowledge          450    450   22 papers
Teaching Ability               169    169   8 papers
Vehicle Maintenance            131    143   7 papers   +12
Category-Specific Knowledge    126    144   7 papers   +18
                              ----   ----
TOTAL                         1024   1054
```

**Mock Test 7 is now in the app.** All seven papers are 20/20/20/20/20 with
**zero overlap between any two of them** — verified across all 21 pairs.

The new questions are the variations you asked for: diagnosing symptoms rather
than reciting definitions. A steering vibration that appears only at speed, oily
coolant, a flat battery every morning despite a working alternator, a horsebox
weight calculation, a frayed breakaway cable, reversing into a driveway on the
left. Same topics, asked the way they actually present.

---

## 2. Why your app says 983 and mine says 1,024

**I don't know, and I would rather say that than guess.** My files count 1,024
before this batch. Yours reports 983, a shortfall of 41.

That is not a rounding difference or a display quirk — it means the JavaScript
running on your phone is not the JavaScript in my folder. The most likely
explanations, in order:

1. **A bank file in the repo is an older copy.** The most probable one, given
   `adiBankVehicle.js` is the file that went missing and had to be re-uploaded
   during the build failure.
2. **The deployed build is older than the repo.** A green deployment is not
   necessarily the one serving the domain — this bit us once already, when a
   rolled-back project showed "Production Staged" and kept serving an old build.
3. **The page was cached on your phone.** Least likely, since the service worker
   forces a network fetch for the HTML, but worth ruling out with a hard reload.

---

## 3. How to find out, rather than guess

`tools/count-check.mjs` counts what is actually in your `src` folder, file by
file and category by category. From the repo root:

```
node tools/count-check.mjs
```

It prints found-versus-expected for every bank and names any file that is short.
A file that failed to upload, uploaded as an older version, or lost its tail in
a paste shows up as a specific number rather than a vague shortfall.

If every file matches and the app still shows a low total, the repo is right and
the **deployment** is stale — check that the newest Vercel deployment is green
*and* is the one assigned to the domain.

A note on this tool: my first version reported two perfectly good files as
holding zero questions, because the banks use two different formatting styles
and I only matched one. Fixed before shipping — a checking tool that raises
false alarms is worse than no tool, because you stop trusting it.

---

## 4. Landing page figures

`index.html` and `llms.txt` now say **1,054** and **seven** mock papers. The
animated counters step to the new numbers.

---

## 5. Verified

```
1,054 questions
  malformed / duplicate options     0
  repeated question stems           0
  unique ids                1054 of 1054
  answer position A/B/C/D   24% 26% 26% 23%
  "pick the longest"        36%   (chance 25%)

7 mock papers
  each                      100 questions, 20/20/20/20/20
  worst overlap, all 21 pairs        0

JSX parses clean, every import resolves.
```

---

## 6. Getting past seven papers

Mechanics and Category B both fill exactly seven. An eighth needs 160 in each —
**about 33 more questions**. Everything else has the depth already.
