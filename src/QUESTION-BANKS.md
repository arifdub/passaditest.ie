# Question banks — what was added

128 original questions, plus the wiring to make the learner-driver path work.

## Upload these four files to `src`

| File | Status |
|---|---|
| `adiStageOneData.js` | New — 72 ADI Stage 1 questions, 6 sections |
| `drivingTheoryData.js` | New — 56 category B theory questions, 7 topics |
| `contentSources.js` | Replaces existing — had a broken import |
| `appStructure.js` | Replaces existing — turns on the theory modules |

Nothing else changes. `rulesQuestions.js`, `rulesFlashcardsData.js` and your own
data files are untouched.

## Copyright

No question, option or explanation is taken or reworded from the Resource
Workbooks or The Motor Car Mechanical Principles. Those books are Des Cummins'
and Driver Education Supplies' product, and a reworded question with the same
options is still a derivative work.

What the workbooks were used for is establishing **what a candidate is examined
on** — the syllabus, the unit structure, the topics. Facts are not
copyrightable. The questions themselves were written fresh against those facts.

The six ADI sections map to the workbooks so your study material and the app
line up:

| Section | Workbook |
|---|---|
| Road Procedure & Hazard Management | WB1 — driving procedure |
| Vehicle Controls & Mechanical Knowledge | WB2 + Mechanical Principles |
| Vulnerable Road Users | WB2, unit 2.10 |
| Law, Licensing & ADI Regulation | WB3 — law, licensing, ADI regs |
| Driving Test Procedure & Documentation | WB3 — test, forms, disability |
| Instructional Technique & Pedagogy | WB4 — communication, lessons, learning |

## One thing your workbooks get wrong

They give the default rural road limit as **80 km/h**. It has been **60 km/h**
since 7 February 2025 under the Road Traffic Act 2024. The rural speed limit
sign — white circle, five diagonal black lines — now means 60 on a local road.

I checked current sources rather than trusting the books, and used 60.

Two related points, both current as of September 2026:

- **National secondary roads are still 100 km/h.** The reduction to 80 is
  legislated but has not commenced.
- **Built-up areas remain 50 km/h by default.** The 30 km/h change is happening
  through local authority bye-laws, area by area, targeted for 31 March 2027 —
  not a national default change.

Speed limits and penalties move. Re-check anything numeric before each release.

## Answer positions are balanced

The first draft had B as the correct answer 35 times out of 56 — enough that
someone could pass by always guessing B. Both banks are now evenly spread:
14/14/14/14 and 18/18/18/18 across A, B, C and D.

Worth remembering if you write more questions by hand. It creeps in without
you noticing, because the natural place to put a correct answer is second.

## Two things to check in your own project

**`rulesQuestions.js`** — this was already in the project and I hadn't seen it
before. Its own header says the wrong answers were generated automatically and
need a read-through. It is wired into the ADI practice pool, so those questions
appear alongside the new ones. Worth reading before you charge anyone.

**`contentSources.js` was broken.** It imported `./drivingTheoryQuestions`,
which does not exist, and used `ADI_STAGE_ONE_CATEGORIES` without importing it.
Either would have failed the Vercel build. Both are fixed in the version here.

## Still empty

- ADI Practical Test (Stage 2) — all four modules
- ADI Instructability Test (Stage 3) — all four modules
- Practical Driving Test — MCQs and mock

Workbooks 1–4 all cover Stage 1, so there was nothing in them to build Stage 2
or Stage 3 from. If you have the Stage 2 and Stage 3 resource workbooks, send
them and I can do the same again.
