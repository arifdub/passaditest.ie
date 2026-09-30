# Interactive Learning — workbook courses

A second learning product inside the app, separate from the question bank
and mock tests. Those **test**; this **teaches**. It turns a source workbook
into short lessons, games and scenarios, and tracks mastery per unit.

```
BOOK LEARNING → INTERACTIVE PRACTICE → UNIT MASTERY → QUESTION BANK (existing) → MOCK TESTS (existing)
```

Nothing here touches the MCQ bank, the five sections or the mock tests. The
only link across is the unit screen's "Practise MCQs" button, which opens the
existing section named in the unit's `mcqLink`.

## Files

| File | What it is |
|---|---|
| `books.js` | The library. Every book and unit, with titles and workbook page ranges. |
| `book1/unit1_1.js` | Unit 1.1 Dealing with Hazards (pp.25–29). |
| `book1/unit1_2.js` | Unit 1.2 Signals & Signalling (pp.30–33). |
| `engine.js` | Progress maths: the record format, XP, levels, mastery, badges, weak areas, review. No UI. |
| `useLearn.js` | Hooks the engine to the account-synced progress store. |
| `LearnScreens.jsx` | Library, book dashboard, unit screen, and the player that runs every activity. |
| `items.jsx` | The interaction types: flash, truefalse, choice, fill, order, match, sort. |
| `HazardHunt.jsx` | The tap-the-hazards street scene. |

## Content shape

```
Book  (books.js)
 └── Unit  { id, title, pages, content }
      └── content (e.g. book1/unit1_1.js)
           ├── concepts     key ideas; wrong answers bring the right one back
           ├── objectives
           ├── mcqLink      the existing question-bank section for this topic
           ├── activities   in learning order, each with a mastery `weight`
           │    ├── learn        cards (body, list, tiles, steps, think, callout, ask-before-reveal)
           │    ├── items        mode: recall | matching | procedure | scenario | walkthrough | retention | challenge
           │    └── hunt         hotspots on a scene
           └── badges
```

Every concept, card, item and hotspot has `src: { book, unit, page, ref }`,
so each piece can be checked against the workbook page it came from. It is
not shown to learners.

## Adding Unit 1.2 (or any unit)

1. Create `book1/unit1_2.js` in the same shape as `unit1_1.js`, from the
   workbook pages listed in `books.js`.
2. In `books.js`, import it and set `content: UNIT_1_2` on unit `1.2`.

No screen or engine changes are needed. Units without `content` show as
"Coming soon".

## Adding Book 2, 3 or 4

Fill in the book's entry in `books.js` — a `moduleId` (e.g. `learn.b2`) and
its units. It then appears in the library, gets its own dashboard, and syncs
under its own progress module.

## How progress is stored

A book's record is a list of short ids in one progress module's
`completedIds` (e.g. `learn.b1`), so it syncs to the account through the
existing `progress` table with no schema change. The id format is written so
that merging two devices is a simple union. See the header of `engine.js`.

**Mastered** needs all of: every activity done, weighted mastery ≥ 80%, unit
challenge ≥ 80%, retention check ≥ 70%.

## Audit notes — Book 1

- **Retention test 1.1, Q9** (page 28). The answer page (88) gives **a**
  ("slow down irrespective of any danger"), but the unit's text (page 26:
  "The driver must decide whether signals, repositioning and speed changes
  are necessary for each hazard") supports **c**. Q9 is left out of the
  retention check until confirmed; recorded as `excluded` in `unit1_1.js`.
- **Retention test 1.2** — the answer key (page 88) agrees with the unit
  text for all ten questions; all are used.
- **Unit 1.2's recognition game** is "Signal or Not?" (sorting situations)
  rather than a street scene: the unit teaches when to signal, so the
  recognition skill is telling a helpful signal from an unnecessary one.
- **Unit 1.5** is headed "Dealing with Hills" on page 49 and in its post test,
  but its model answers on page 85 are headed "Overtaking on Gradients". The
  unit heading is used.
- **Unit 1.10** is headed "Weather, Driver Vision & It's Effects" (page 76);
  the answer pages call it "Weather & Vision". The page 76 heading is used
  (spelling corrected to "Its").
- **Unit 1.11** (pages 82–83) has a post test but no retention test in the
  book; its challenge will need building from the post-test answers (p.87).
