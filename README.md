# PassDrivingTest — ADI Stage 1 app

Unzip this, then upload each folder's contents to the matching place. The
folder names here mirror your repo, with one exception: **`root`** means the
top level of the repo, not a folder called "root".

---

## Where everything goes

### `src/` → your repo's `src` folder — 13 files

Upload all of them together. GitHub will warn that most already exist; that's
expected, they're replacements.

| File | What it does |
|---|---|
| `App.jsx` | Navigation, tab bar, error boundary, signed-in gate |
| `AuthScreen.jsx` | Login, sign-up, guest entry |
| `appAuth.jsx` | Accounts, sessions, guest mode, subscription flag |
| `progressStore.jsx` | Per-question progress, section coverage, Supabase sync |
| `appStructure.js` | App shape — five sections, mock, decks, pass mark |
| `adiSections.js` | Files every question into the five exam sections |
| `adiStageOneData.js` | 72 original ADI questions |
| `rulesQuestions.js` | Rules of the Road questions (generated from the cards) |
| `rulesFlashcardsData.js` | The 153 Rules of the Road cards |
| `contentSources.js` | The three flashcard decks |
| `screens.jsx` | Home, progress, profile |
| `QuizPlayer.jsx` | Practice and mock tests, results, review |
| `FlashcardPlayer.jsx` | Flashcards — swipe, 3D flip |
| `ui.jsx` | Logo, bars, rings, buttons |
| `usePwaInstall.js` | Install-to-home-screen detection |
| `supabaseClient.js` | Database connection |

**Delete `drivingTheoryData.js`** from `src` if it's still there. The category
B learner bank isn't used now the app is ADI-only.

### `public/` → your repo's `public` folder — 2 files

- `logo.png` — the app loads it from `/logo.png`, which only works from here
- `sw.js` — replaces the existing service worker; clears stale caches

Leave `public/signs/` alone. Those 240 sign images are still needed.

### `root/vercel.json` → the **top level** of your repo

Not inside a folder. It sits beside `package.json`. Keeps your existing
keep-alive cron and adds cache rules so a stale `index.html` can't be served
again.

### `sql/` → Supabase, never GitHub

`app-accounts-and-progress.sql` → supabase.com → your project → **SQL Editor**
→ **New query** → paste → **Run**. You want "Success. No rows returned."

Then **Authentication → Sign In / Providers**: enable **Email**, and turn
**Confirm email off** — Supabase's built-in mail is rate-limited and often
never arrives.

---

## Before you commit — check these four

1. **`package.json`** must list all four dependencies:
   `react`, `react-dom`, `lucide-react`, `@supabase/supabase-js`.
   The copy you sent me was missing the last one. The build fails without it.

2. **`roadSignsData.js` must be inside `src`**, not at the repo root.

3. `adiTheoryPracticeData.js` and `adiFlashcardsData.js` must be in `src` too.
   Those are yours; the app imports all three.

4. **Promote the deployment.** A deployment that says "Staged" has built but
   isn't serving your domain. Deployments → the latest one → ⋯ → **Promote to
   Production**. This is what left the old broken version live earlier.

---

## What the app is now

ADI Stage 1 only. Home screen, in order:

**The five exam sections**, each with its own progress bar showing questions
answered out of the section total:

| Section | Questions |
|---|---|
| 1. Driving Test Procedure & Documentation | 68 |
| 2. Road Safety Precepts & Practices | 430 |
| 3. Pedagogy | 29 |
| 4. Basic Mechanics & Vehicle Maintenance | 34 |
| 5. Category B & BE Towing | 30 |

591 questions in total.

**Mock test** — 100 questions, the length of the real paper, weighted
25/30/20/15/10 across the five sections. Answers count toward their own
sections, so one mock moves all five bars.

**Flashcards** — Rules of the Road (153), Road Signs (240), ADI (62). Study
material, kept below the sections.

Pass mark 75%. Results read Passed / Almost there / Keep practising.

---

## Things worth knowing

**The mock weighting is my estimate.** The RSA doesn't publish a per-section
question count. Drawing in proportion to bank size gave Road Safety 54 of 100,
because it absorbs all the sign questions — which would train candidates for
the wrong exam. The weights are one line at the top of `adiSections.js`.

**Two sections are thin.** Pedagogy has 29 questions and Category B & BE has
30, but the mock draws 20 and 10 from them. Candidates will see those
repeatedly. Worth growing first — Workbook 4 is a good source for Pedagogy.

**`rulesQuestions.js` needs a read-through.** It was already in your project
and its own header says the wrong answers were generated automatically. Those
questions feed Section 2. Worth checking before charging anyone.

**Your workbooks are out of date on one point.** They give the default rural
road limit as 80 km/h. It has been 60 km/h since 7 February 2025. The
questions here use 60.

**Copyright.** No question, option or explanation is copied or reworded from
the Resource Workbooks or The Motor Car Mechanical Principles. They were used
to establish what the exam covers — the syllabus and section structure — and
the questions were written fresh against those facts.
