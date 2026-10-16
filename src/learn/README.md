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
| `book2/unit2_1.js` | Unit 2.1 The Car Controls & Driving Aids (pp.5–13). |
| `book2/unit2_2.js` | Unit 2.2 The Driving Mirrors (pp.14–19). |
| `book2/unit2_3.js` | Unit 2.3 Beginning to Drive (pp.20–26). |
| `book2/unit2_4.js` | Unit 2.4 Changing Gear (pp.27–31). |
| `book2/unit2_5.js` | Unit 2.5 Braking (pp.32–39). |
| `book2/unit2_6.js` | Unit 2.6 Road Holding (pp.40–47). |
| `book2/unit2_7.js` | Unit 2.7 Manoeuvring (pp.48–55). |
| `book2/unit2_8.js` | Unit 2.8 Automatic Transmission (pp.56–59). |
| `book2/unit2_9.js` | Unit 2.9 Mechanical Principles (pp.60–71). |
| `book2/unit2_10.js` | Unit 2.10 Pedestrians & Cyclists (pp.72–80). |
| `book2/unit2_11.js` | Unit 2.11 Traffic Signs & Signals (pp.81–89). |
| `book3/glossary.js` | Book 3 visual glossary (terms added unit by unit). |
| `book3/unit3_1.js` | Unit 3.1 The Driver & the Instructor (pp.5–10). |
| `book3/unit3_2.js` | Unit 3.2 Before Driving (pp.11–16). |
| `book3/unit3_3.js` | Unit 3.3 The Road Traffic Acts & the Law (pp.17–26). |
| `book3/unit3_4.js` | Unit 3.4 Driving Instructor Regulations (pp.27–39). |
| `book3/unit3_5.js` | Unit 3.5 Driver Licensing (pp.40–52). |
| `book3/unit3_6.js` | Unit 3.6 Vehicle Registration & Licensing (pp.53–56). |
| `book3/unit3_7.js` | Unit 3.7 The Driving Test (pp.57–67). |
| `book3/unit3_8.js` | Unit 3.8 Driving Test Forms (pp.68–72). |
| `book2/glossary.js` | Book 2's Visual Glossary. |
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

## Audit notes — Book 2

Book 2 is "Theory Resource Workbook 2 of 4 — Mechanical Knowledge,
Pedestrians & Traffic Signs". Eleven units (2.1–2.11); post-test model
answers on pages 90–95, retention answers on pages 96–97. Each unit links
to the closest MCQ section: car controls and mechanics to "Basic Mechanics
& Vehicle Maintenance"; driving technique (mirrors, pedestrians, signs) to
"Road Safety Precepts & Practices".

- **Retention test 2.1, Q16** — omitted: the stem mixes "when stationary"
  (horn only if there is danger from another moving vehicle, as Book 1's
  post test answers) with "in a built-up area" (not 23:30–07:00), so both
  c and the keyed d are defensible.
- **Retention test 2.1, Q19** — omitted: the key gives c ("burn engine oil
  faster") for selecting higher gears as soon as possible; page 8 presents
  that as eco driving, which supports d ("better for the environment").
  Q6, Q7, Q9 and Q11 cover points the unit text doesn't state and are
  kept as the book sets them. Its recognition game is "Know Your Controls".
- **Retention test 2.2, Q18** — omitted: page 14 supports both holding the
  mirror by its edges (keyed a) and the best view, especially to the
  offside (b). Q1, Q3 and Q4 cover points the unit text doesn't state and
  are kept as the book sets them. Page 16's A-pillar table of named car
  models isn't used. Its recognition game is "Check Your Mirrors".
- **Retention test 2.3, Q1 and Q7** — omitted. Q1 keys "once every day"
  for pre-start checks, but the cockpit drill is "every time you get in"
  (option d). Q7 keys "complete the cockpit drill", but page 21's rule
  before starting (handbrake, clutch down, neutral) matches no option in
  full. Q10–Q12 cover points the text doesn't state and are kept as set.
  Its recognition game is "Ready to Go?".
- **Retention test 2.4** — the answer key agrees with the unit text for all
  ten questions; all are used. Page 28's gear speed-range chart is drawn
  without numbers (its scale is unclear). Its recognition game is "Right
  Gear?".
- **Retention test 2.5, Q17 and Q18** — omitted. Q17 keys reaction
  time for thinking distance, but page 34 says it is proportional to speed
  and reaction time (speed is also an option). Q18 keys speed for braking
  distance, but the road surface (also an option) is on the same list.
  Q19 (30 v 60 km/h: "a third of the distance", key d) matches the book's
  table (10.8 m v 32.4 m). Q20 keys 12 m at 60 km/h where the table
  gives 11.0 m (nearest option) and is kept. The dry table's "50" on the
  77.7 m row is the 100 km/h row. Its recognition game is "Brake Smart".
- **Retention test 2.6, Q17** — omitted: it keys "the front wheels" for
  extra tyre wear, which the unit never states and which depends on the
  car. Q7 (electrical components), Q10 (ABS takes over with too much
  brake pressure) and Q16 (radials grip better) aren't stated word for
  word but are the only defensible options, and are kept. Its recognition
  game is "Grip Check".
- **Retention test 2.7, Q8, Q11 and Q18** — omitted: their keyed answers
  (judging the kerb as it "reappears in the side window"; "turn off the
  main road and find a suitable place"; "switch on your hazard lights")
  aren't in the text, and another option is just as defensible each time.
  Q13 (clutch down, then brake) is kept: the turnabout stages say
  "declutch and brake to stop". Its recognition game is "Name That
  Manoeuvre".
- **Retention test 2.8** — the answer key (p.97) agrees with the unit
  text for all ten questions; all are used. Page 57's note that some CVTs
  "must be started in D or R" is shown only as "check the handbook". Its
  recognition game is "Select It".
- **Retention test 2.9 (75 questions), Q2, Q8, Q13, Q30, Q34, Q57, Q60
  and Q75** — omitted. Q34 (synchromesh) and Q75 (sixth gear "increases
  fuel consumption") contradict the book's own text; the others key facts
  the unit doesn't give, with another option just as defensible (pre-heater
  "heats the injectors"; choke "controlled by pre-start temperature"; oil
  light "switch off immediately" v "add oil"; riding the clutch wears the
  friction plate v thrust bearing; independent suspension wording;
  low-profile tyres). 67 are used. Its recognition game is "Under the
  Bonnet".
- **Retention test 2.10 (49 questions), Q17, Q20 and Q35** — omitted.
  Q17 keys a school-bus sign shape the unit doesn't describe; Q20 keys
  "uneven surface" where the unit's own list also gives crosswinds; Q35
  (animals at night) isn't in the unit and two options differ only by an
  armband. 46 are used. Its recognition game is "Share the Road".
- **Retention test 2.11 (50 questions), Q2, Q9, Q17, Q27, Q30, Q36, Q45
  and Q50** — omitted. Q9 (two cars with a red sash keyed "outside lane
  closed" — it means no overtaking) and Q17 (double yellow "no stopping" —
  the unit allows setting down) contradict the text; Q2, Q27, Q45 and Q50
  have another option as defensible; Q30 and Q36 aren't in the unit. 42
  are used. Its recognition game is "Read the Road". Book 2 is complete.

## Audit notes — Book 3

Source: "Theory Resource Workbook 3 of 4" — The Driving Test, Law &
Licensing. Ten units (the contents page lists nine; Unit 3.10 on safety
belts follows 3.9). Post-test model answers pp.88–92; retention answers
p.93 onwards.

- **Retention test 3.1, Q5** — omitted: the key gives "anticipation" as
  the hallmark of a good driver, which the unit doesn't say; "sound
  judgement" is as defensible. Its recognition game is "Good Driver, Good
  Teacher".
- **Retention test 3.2, Q2 and Q3** — omitted. Q2 keys "your use of the
  vehicle is insured" where "insured against third party risks" is as
  defensible; Q3 keys "reported to the licensing authority" where the unit
  says to see a doctor before applying. Its recognition game is "Road
  Legal?".
- **Retention test 3.3 (55 questions), Q10, Q18, Q34, Q45 and Q51** —
  omitted. Q18 keys "loading on single yellow lines" for hazard lights
  (contradicts the Rules of the Road); Q10's horn hours don't match the
  unit's 23.30–07.00; Q34 limits the fog-lamp rule to rear lamps; Q45 and
  Q51 key facts not in the unit. 50 are used. This unit has no post test.
  Its recognition game is "Legal or Not?".
- **Retention test 3.4 (40 questions), Q10, Q11, Q14, Q15, Q22 and Q36**
  — omitted. Q15 keys "the driving testing services in Ballina" where "the
  RSA ADI unit" is as defensible; Q36 (badge display) and Q10, Q11, Q14
  (appeals and cancellation notice) aren't in the unit; Q22's seat
  requirement has two fitting options. 34 are used. Its recognition game is "Stage by Stage".
- **Retention test 3.5 (55 questions), Q7, Q10, Q12, Q14, Q16, Q19, Q29
  and Q36** — omitted. Q7 keys "attend in person" though the unit says
  first licences can be applied for online; Q19 keys "not asked about
  licence history"; the others have a second defensible option or aren't
  in the unit. 47 are used. Its recognition game is "Licence Lookup".
- **Retention test 3.6 (24 questions), Q18 and Q24** — omitted: HGV
  taxing documents aren't in the unit, and Q24's keyed exemption ("state
  vehicles and motorcycles") isn't one the unit gives. 22 are used. Its
  recognition game is "On the Record".
- **Retention test 3.7 (41 questions), Q11, Q19, Q21, Q24 and Q39** —
  omitted: loaded commercial vehicles, the 10-year expired-licence rule and
  advance permission for interpreters aren't in the unit; Q21 (indicators
  fail → terminate) and Q39 (deaf candidate "normal test" vs interpreter)
  have a second defensible option. 36 are used. Its recognition game is
  "Test Day".
- **Retention test 3.8 (30 questions), Q4, Q6, Q9, Q15, Q22 and Q30** —
  omitted. Q6 keys a written complaint to the RSA and Q22 an appeal of the
  "decision", against Unit 3.7's District Court appeal that can't overturn
  the result; Q30 keys "phone the test centre" though the unit says the
  RSA website or the number on the form; Q15 keys "control" when an option
  reads "too wide"; Q4 and Q9 aren't in the unit. 24 are used. The text's
  line that a permit plus a pass certificate "function as a full licence"
  isn't used (it conflicts with Unit 3.7). Its recognition game is "Mark
  the Fault".
