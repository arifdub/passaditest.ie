# Mock tests, matched to the real Stage 1 exam

7 files, all into **`src`**.

| File | |
|---|---|
| `adiSections.js` | Section pass marks, 20-per-section paper, 90-minute limit |
| `appStructure.js` | Per-section grading and the verdict wording |
| `QuizPlayer.jsx` | Countdown, auto-submit, section breakdown on the result |
| `progressStore.jsx` | Records a mock's real pass/fail, not a percentage |
| `screens.jsx` | Pass marks on the home screen |
| `App.jsx` | Passes each section its own mark |
| `ui.jsx` | Progress bar can render red |

Carries every change from the previous batches, so this set replaces them.

---

## First, where the numbers come from

**The RSA does not publish the per-section pass marks.** I checked their Stage 1
page and the theorytest.ie booking page — both describe the syllabus and neither
gives a figure. So these come from two Irish ADI training providers:

| Section | Leinster | NUI | **Used here** |
|---|---|---|---|
| Driver testing procedures | 75% | 70% | **75%** |
| Road safety knowledge | 72% | 72% | **72%** |
| Teaching ability | 60% | 60% | **60%** |
| Vehicle maintenance | 70% | 70% | **70%** |
| Category-specific | 70% | 70% | **70%** |

Four of five agree exactly, which is reassuring — two providers arriving
independently at 72% and 60% is not a coincidence. The one disagreement is
taken at the **stricter** figure. A candidate over-prepared for Section 1 loses
nothing; one under-prepared loses the exam.

Both agree on 100 questions and 90 minutes, and both state plainly that **every
section must pass individually**.

If you get official figures from the RSA, they're all in one block at the top of
`adiSections.js` with a comment explaining this. Change them there and the whole
app follows — nothing else holds its own copy.

---

## 1. The thing that was actually wrong

The app was marking a mock as one score out of 100 against 75%. The real exam
does not work that way, and the difference is not cosmetic:

```
Strong everywhere, weak on Teaching Ability
  Test Procedure  20/20      Old app:  88% — PASSED
  Road Safety     20/20      Real RSA: FAILED
  Teaching Abty    8/20  ←
  Mechanics       20/20
  Category B      20/20
```

The app was telling that candidate they were ready for a €150 exam they would
have failed. It also works the other way:

```
Exactly on every boundary
  15/20, 15/20, 12/20, 14/20, 14/20   Old app:  70% — FAILED
                                       Real RSA: PASSED
```

Both cases now come out right. That's the whole point of this change: **the
weakest section decides the result, not the average.** A candidate revising
against an overall percentage will revise the wrong things.

---

## 2. Twenty questions per section

Was 25/30/20/15/10 — my estimate. Now **20 in each of the five**, which is what
the providers describe (80 core across four sections, plus 20 category-specific).

There's a second reason it has to be even. With 10 questions in a section, a 70%
pass mark is meaningless — there is no score between 7 and 8 out of 10, so 70%
and 80% are the same test. At 20 each, every mark lands on a real boundary:

```
Driver Testing Procedures    75%   15/20 passes, 14/20 fails
Road Safety Knowledge        72%   15/20 passes, 14/20 fails
Teaching Ability             60%   12/20 passes, 11/20 fails
Vehicle Maintenance          70%   14/20 passes, 13/20 fails
Category-Specific            70%   14/20 passes, 13/20 fails
```

Verified by running it — each of those ten statements was checked, not assumed.

Sections now also run **in order** rather than interleaved, since the real paper
is sectioned. Within a section the order still reshuffles on every attempt, so
two sittings of Mock 2 are the same 100 questions in a different order. Mock 1
and Mock 2 still share **zero** questions.

**One consequence worth knowing.** Changing the split changes which questions
land in each paper. Mock 1 keeps 85 of its previous 100 and gains 15 — it is
mostly the same paper, but not exactly. Your existing Mock 1 score is still
there; it now refers to a very slightly different paper. Nothing breaks, and
your next attempt is the clean baseline.

---

## 3. The clock

`minutes: 90` had been sitting in the config since the mock was built and
**nothing ever read it**. The timer counted *up*, with no limit and no
submission. That's now a real countdown:

- Starts at **90:00** and counts down.
- **Amber under 10 minutes**, **red and pulsing under 2**, with a banner naming
  how many questions are still blank.
- **Submits itself at zero**, as the real exam does.
- Time is read from the system clock rather than counted in ticks, so a phone
  that sleeps or an app left in the background comes back with the correct time
  remaining rather than a clock that quietly stopped while it wasn't looking.

**Blank now counts as wrong in a mock.** It didn't before — the old code scored
only what you'd answered, so running out of time with 30 unanswered gave you a
percentage on the 70 you'd managed. That flatters exactly the candidate who most
needs to know they were too slow. (Section practice is unchanged: leaving five
and getting 20/20 is still a real 100% on those twenty. That's study, not
assessment.)

**Pause is the one deliberate departure from the real exam.** You can't pause
Prometric. I kept it because you asked for it and it's genuinely useful mid-week,
but it stops the clock and gives you your remaining time back, which is a real
advantage. The intro screen says so in plain words rather than pretending
otherwise. Say the word if you'd rather a mock be strictly un-pausable.

Prometric also give a 15-minute familiarisation period before the paper. It
isn't part of the timed 90, so it isn't modelled — this clock is the 90 that
counts.

---

## 4. The result screen

Rebuilt around the five sections. The overall ring is still there, but underneath
it every section gets a row: score, a bar, and **the pass mark drawn on the bar
as a line**. A percentage in text is abstract; a line you can see you're short of
is not.

```
Teaching Ability                                   8/20
▓▓▓▓▓▓▓▓░░░░░│░░░░░░░░░░░░░░░░░░░░░░░░
40% · needs 60% (12/20) · 4 more
```

Wording changed with it. `verdictFor` knows one number and cannot express
"strong overall, one section short" — which is the case a candidate most needs
explained. So a mock gets its own:

> **One section short** — 88% overall, but Teaching Ability came in at 40%
> against a 60% pass mark. In the real exam that is a fail however well the rest
> went — you needed 12 of 20 and got 8. That one section is the whole gap.

And when one section is the problem, **Review answers** opens filtered to that
section. Nobody reads a hundred explanations; they read the twenty that cost
them the paper. There are chips at the top of the review to switch sections or
go back to all 100.

---

## 5. Smaller things that followed

- **The section pass marks now show on the home screen**, on each section card.
  They differ — 75% for Test Procedure against 60% for Teaching Ability — and a
  candidate planning their revision should know that before they sit anything.
- **The mock intro lists all five marks** with the score each needs, so exam
  conditions are clear before starting rather than explained afterwards.
- **A running mock shows which section you're in** — "Section 3 · Teaching
  Ability · 7/20" — instead of "question 47 of 100". Since each section passes
  or fails on its own, knowing where you are inside one is the useful fact.
- **`ProgressBar` had no red tone.** It fell back to emerald, so a failed
  section would have rendered as a green bar. Found while wiring the breakdown.
- **`recordResult` now accepts the verdict** rather than deriving it from the
  percentage — otherwise the store would have saved a pass while the screen
  said fail.
- **A mock paused before this change** carries an unbounded count-up figure.
  Anything over 90 minutes would have auto-submitted the instant it resumed,
  ending a paper that was never sat. Those get the clock restarted instead.

---

## 6. Mock 3 — the number changed

Twenty per section moved the goalposts. It was 7 more Pedagogy questions; it's
now **26**, because Mechanics and Category B each need 20 per paper rather than
15 and 10:

| Section | Have | Papers | For Mock 3 |
|---|---|---|---|
| Driver Testing Procedures | 84 | 4 | — |
| Road Safety Knowledge | 430 | 21 | — |
| Teaching Ability | 53 | 2 | **+7** |
| Vehicle Maintenance | 55 | 2 | **+5** |
| Category-Specific | 46 | 2 | **+14** |

**26 questions gets you Mock 3.** All five papers needs 162 — mostly Teaching
Ability (47), Category-Specific (54) and Vehicle Maintenance (45).

Still two papers today, and still safe to add a third entry before writing the
questions: the builder wraps rather than handing back a short paper, so Mock 3
would repeat 26 questions from Mock 1 rather than failing.

Say the word and I'll write the 26.

---

## What I checked, and how

Everything above was run, not read. The probe loaded the real modules in Node
and demonstrated:

- Both papers really are 100 questions, 20/20/20/20/20, with zero overlap
- Sections come out in 5 blocks, not interleaved
- Re-sitting a paper gives the same question set in a different order
- The four grading scenarios above, including the two where the new marking
  disagrees with the old
- All ten pass/fail boundaries
- The countdown at eight points, including both colour thresholds and past zero

The JSX parses clean and every import in `src` resolves to a real export. I
could not run a full Vite build — npm is blocked from this environment — so the
usual caveat applies: **check it renders on your phone once deployed**,
particularly the section breakdown on the result screen and the red banner under
two minutes.

---

## Sources

- [RSA — Stage 1: ADI Theory test](https://www.rsa.ie/services/professional-drivers/approved-driving-instructor-adi/become-an-approved-driving-instructor-(adi)/4.-stage-1-adi-theory-test) — syllabus topics; no figures published
- [Leinster Driving Campus — Stage One Theory Test](https://www.leinsterdrivingcampus.ie/training-services/instructor-training/stage-one-theory-test/) — 100 questions, 90 minutes, per-section marks
- [NUI Driving Instructor Training — ADI Stage 1](https://drivinginstructortraining.ie/adi-stage-1) — 80 core + 20 category-specific, per-section marks
- [Driver Theory Test — ADI booking](https://theorytest.ie/book-your-theory-test/adi-approved-driving-instructor/) — booking and fee only
