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
| `book1/unit1_3.js` | Unit 1.3 Road Positioning (pp.34–39). |
| `book1/unit1_4.js` | Unit 1.4 Junctions & Bends (pp.40–48). |
| `book1/unit1_5.js` | Unit 1.5 Dealing with Hills (pp.49–52). |
| `book1/unit1_6.js` | Unit 1.6 Overtaking (pp.53–58). |
| `book1/unit1_7.js` | Unit 1.7 Level Crossings & Tramways (pp.59–63). |
| `book1/unit1_8.js` | Unit 1.8 Motorway Driving (pp.64–71). |
| `book1/unit1_9.js` | Unit 1.9 Night Driving (pp.72–75). |
| `book1/unit1_10.js` | Unit 1.10 Weather, Driver Vision & Its Effects (pp.76–81). |
| `book1/unit1_11.js` | Unit 1.11 Driving in Tunnels (pp.82–83). |
| `visuals.jsx` | The road diagrams, one per term; shown before definitions, with explanations, in Spot-it questions and the glossary. |
| `book1/glossary.js` | Book 1's Visual Driving Glossary. |
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
never shown to learners — nor are page numbers or the word "workbook"
anywhere on screen. Learners see the course name and unit number only.

## Adding a unit

1. Create `book1/unit1_N.js` in the same shape as the existing units, from
   the workbook pages listed in `books.js`.
2. In `books.js`, import it and set `content` on that unit.
3. Add its terms to `book1/glossary.js`, drawing any new ones in `visuals.jsx`.

## Deploying

Push to `main` on its own. If the same commit is pushed to a feature branch
at the same moment, Vercel may build it only as a Preview and skip the
Production deploy — the site then stays on the previous version. Push
`main` first and the branch afterwards.

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

- **Retention test 1.1, Q9** — omitted: its answer key (page 88) disagrees
  with the unit text (page 26).
- **Retention test 1.2** — the answer key (page 88) agrees with the unit
  text for all ten questions; all are used.
- **Unit 1.2's recognition game** is "Signal or Not?" (sorting situations)
  rather than a street scene: the unit teaches when to signal, so the
  recognition skill is telling a helpful signal from an unnecessary one.
- **Retention test 1.3** — the answer key agrees with the unit text for all
  fifteen questions; all are used. Its recognition game is "Pick the Lane".
- **Retention test 1.4, Q10** — omitted: its answer key (page 88) disagrees
  with the unit text (page 42). Q1–Q3 (load and tyre pressures) come from
  the book's own test though the unit text doesn't cover them; they are kept
  as the book sets them.
- **Retention test 1.5** — the answer key agrees with the unit text for all
  ten questions; all are used. Hill drawings are side views.
- **Unit 1.5** is headed "Dealing with Hills" on page 49 and in its post test,
  but its model answers on page 85 are headed "Overtaking on Gradients". The
  unit heading is used.
- **Retention test 1.6** — the answer key agrees with the unit text for all
  ten questions; all are used. Its recognition game is "Overtake or Not?".
- **Post test 1.6** — in the model answers (pages 85–86) the "golden rule"
  (Q5) appears as the last line of answer 4: "If in doubt, don't overtake";
  answers 5 and 6 both describe what to do when a driver cuts in after
  overtaking you. Page 56's "your own speed PLUS the speed of the target
  vehicle" is an unfinished sentence; the unit says only to be aware of
  both speeds.
- **Retention test 1.7** — the answer key (page 89) agrees with the unit
  text for all ten questions; all are used. Q6 cites the Rules of the Road
  (open crossings protected by twin red flashing lights), consistent with
  the unit. Its recognition game is "Name That Crossing".
- **Unit 1.7's tram-lane signs** (page 59): the blue sign text says a driver
  "can only enter a tram lane to overtake another vehicle when safe", while
  page 61 says "Do not enter a lane or road reserved for trams". Both are
  taught as written — the first about the blue tram-lane sign, the second
  about tram-only lanes.
- **Retention test 1.8, Q4** — omitted: the unit text bans both learner
  drivers and cyclists (b) and oversized vehicles without permission (d),
  so the question has two right answers. The other eighteen agree with the
  text or the book's own test and are used; Q3, Q6, Q11, Q12, Q14, Q16 and
  Q18 cover points the unit text doesn't state and are kept as the book
  sets them. Its recognition game is "Read the Motorway".
- **Retention test 1.9, Q5** — omitted: it asks a seat-belt statistic the
  unit doesn't cover, so its answer can't be checked against the text. Q9
  isn't stated in the unit but agrees with its dazzle rules and is kept.
  Its recognition game is "Lights On?".
- **Unit 1.9's definition of night** — page 72 gives "half an hour after
  sunset to one and a half hours before sunrise", which looks misprinted.
  The unit teaches the post-test answer ("between dusk and dawn") and page
  73's "you MUST use your lights between sunset and sunrise". Post-test
  answer 5 ("both, at all times during darkness") conflicts with page 73
  ("unless the road is well lit") and isn't used.
- **Unit 1.10** is headed "Weather, Driver Vision & It's Effects" (page 76);
  the answer pages call it "Weather & Vision". The page 76 heading is used
  (spelling corrected to "Its").
- **Retention test 1.10** — the answer key agrees with the unit text for
  all ten questions; all are used. Its recognition game is "What's the
  Weather?". Page 77 says two seconds of glare blindness at 60 km/h covers
  "more than half the distance of a football field" — that's about 33 m,
  less than half a pitch — so the comparison isn't used.
- **Unit 1.11** (pages 82–83) has no retention test in the book, and its
  post-test questions aren't printed — only the model answers (page 87).
  Its Retention Check is built from those model answers and the unit text:
  each correct answer is the book's wording; the wrong options are written
  for the course. Page 83's note that cameras "will begin working shortly"
  in Dublin's Port Tunnel is dated and isn't used. Its recognition game is
  "Tunnel Sense".
