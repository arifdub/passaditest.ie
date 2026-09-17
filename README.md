# Mock Test 2

5 files, all into **`src`**.

| File | |
|---|---|
| `adiSections.js` | Builds the named papers |
| `appStructure.js` | Defines Mock 1 and Mock 2 |
| `screens.jsx` | Lists both on home and progress |
| `App.jsx` | Routes each paper to its own questions |
| `progressStore.jsx` | Counts both toward the totals |

These carry every change from the previous batches too, so if any are still
unpushed, this set replaces them.

---

## What changed in how mocks work

Before this, tapping Mock Test drew 100 questions at random. Two attempts were
two different tests, so a score meant little — you couldn't tell whether you
improved or just got an easier draw.

A mock is now a **fixed paper**. Mock Test 2 always contains the same 100
questions, so sitting it twice tells you something. Only the order is
reshuffled each attempt, so nobody learns answers by position.

The two papers **share no questions at all**. Each section's pool is shuffled
once with a fixed seed and then sliced: Mock 1 takes the first 25 Test
Procedure questions, Mock 2 the next 25, and so on down the five sections.

```
                    Mock 1   Mock 2
Test Procedure        25       25
Road Safety           30       30
Pedagogy              20       20
Mechanics             15       15
Category B & BE       10       10
                     ----     ----
                      100      100     overlap: 0 questions
```

Each paper keeps its own score history, so Mock 1 results are untouched — the
first paper deliberately kept its original id.

---

## About the other three

You said you want five. **The bank supports two.** Here is exactly why:

| Section | Have | Per paper | Papers it can fill |
|---|---|---|---|
| Test Procedure | 84 | 25 | 3 |
| Road Safety | 430 | 30 | 14 |
| **Pedagogy** | **53** | **20** | **2** ← the limit |
| Mechanics | 55 | 15 | 3 |
| Category B & BE | 46 | 10 | 4 |

The lowest number wins, so two papers is the honest ceiling today.

What each further paper needs:

- **Mock 3** — 7 more Pedagogy questions. That is the whole gap; everything
  else already has enough.
- **Mock 4** — 16 Test Procedure, 27 Pedagogy, 5 Mechanics (48 total).
- **Mock 5** — 41 Test Procedure, 47 Pedagogy, 20 Mechanics, 4 Category B & BE
  (112 total).

So roughly **120 more questions gets you to five papers**, and Pedagogy is over
a third of that. Workbook 4 is the right source for it — communication, lesson
structure, learning theory, questioning technique, fault assessment.

I'd suggest Mock 3 next: seven Pedagogy questions is an hour's work, not a
project.

**If you switch on a third paper before adding those questions**, nothing
breaks — the builder wraps around rather than handing back a short test — but
Mock 3 would repeat 7 questions from Mock 1. The code is written to degrade
that way on purpose rather than fail.

---

## Adding Mock 3 later

Once the Pedagogy questions are in, it is one entry in `appStructure.js`:

```js
{
  id: "adi.mock.3",
  paper: 3,
  label: "Mock Test 3",
  blurb: `A different ${MOCK_LENGTH} questions.`,
  questionCount: MOCK_LENGTH,
  passMark: PASS_MARK,
  minutes: 90,
},
```

The home screen, progress screen, routing and guest gating all read from that
array, so nothing else needs touching.

**One thing not to touch:** `PARTITION_SEED` at the top of `adiSections.js`.
Changing it reshuffles which questions land in which paper — someone's Mock 2
would silently become a different test while keeping their old score.
