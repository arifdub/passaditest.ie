/*
  ===========================================================================
  APP STRUCTURE — the single source of truth for the whole app

  Every screen, progress bar, tile and pass/fail message is generated from
  this file. Nothing about the navigation is hard-coded in the UI, so adding
  a new test section later means adding an entry here, not rewriting screens.

  Shape:
    PATH        two top-level paths — Driving Test and ADI
      SECTION   what you get after tapping a path
        MODULE  the actual study tool (learning, flashcards, mcq, mock)

  `id` is what gets written to the database (progress.module_id). Once a
  learner has progress against an id, DON'T rename it — you'd orphan their
  history. Add a new id instead.

  `source` names the data file that feeds the module. `ready: false` means
  the screen exists but the question bank hasn't been written yet — the app
  shows it greyed out with "Coming soon" rather than an empty quiz.
  ===========================================================================
*/

/* Pass marks. Kept here so the pass line lives with the test it belongs to.
   - Irish theory test (category B): 35 out of 40 = 87.5%, rounded to 88.
   - ADI Stage 1: the existing quizzes in the project use 75%. */
export const PASS_MARKS = {
  theory: 88,
  adi: 75,
  practice: 75,
};

export const APP_PATHS = [
  {
    id: "driving",
    label: "Driving & Theory Test",
    tagline: "Category B — car",
    blurb: "For learner drivers. Content coming soon.",
    accent: "emerald",
    // Nothing here is built yet. This path is for ordinary learner drivers,
    // a completely different audience from the ADI candidates the app
    // currently serves. Left in place so the structure is ready, but every
    // module is locked until its own material exists.
    comingSoon: true,
    sections: [
      {
        id: "driving.theory",
        label: "Theory Test",
        blurb: "The written test learner drivers sit before driving on the road.",
        modules: [
          { id: "driving.theory.learning",   label: "Learning Materials", kind: "learning",   blurb: "The seven theory test topics.",        source: "contentSources.js",     ready: true },
          { id: "driving.theory.flashcards", label: "Flashcards",         kind: "flashcards", blurb: "153 Rules of the Road cards.",         source: "rulesFlashcardsData.js", count: 153, ready: true },
          { id: "driving.theory.signs",      label: "Road Signs",         kind: "flashcards", blurb: "199 official signs.",                  source: "roadSignsData.js",      count: 199, ready: true },
          { id: "driving.theory.mcq",        label: "Practice MCQs",      kind: "mcq",        blurb: "By topic, with explanations.",         source: "drivingTheoryData.js",  passMark: PASS_MARKS.theory, ready: true },
          { id: "driving.theory.mock",       label: "Mock Test",          kind: "mock",       blurb: "40 questions, timed.",                 source: "drivingTheoryData.js",  questionCount: 40, passMark: PASS_MARKS.theory, ready: true },
        ],
      },
      {
        id: "driving.full",
        label: "Practical Driving Test",
        blurb: "The on-the-road test — manoeuvres, faults, test-day procedure.",
        modules: [
          { id: "driving.full.learning",   label: "Learning Materials", kind: "learning",   blurb: "Test structure and faults.", source: null, ready: false },
          { id: "driving.full.flashcards", label: "Flashcards",         kind: "flashcards", blurb: "Key concepts.",              source: null, ready: false },
          { id: "driving.full.mcq",        label: "Practice MCQs",      kind: "mcq",        blurb: "Practical test questions.",  source: null, passMark: PASS_MARKS.practice, ready: false },
          { id: "driving.full.mock",       label: "Mock Test",          kind: "mock",       blurb: "Simulate the real test.",    source: null, passMark: PASS_MARKS.practice, ready: false },
        ],
      },
    ],
  },

  {
    id: "adi",
    label: "ADI Test",
    tagline: "Approved Driving Instructor",
    blurb: "All three stages of the RSA instructor qualification.",
    accent: "blue",
    sections: [
      {
        id: "adi.theory",
        label: "Theory Test",
        blurb: "Stage 1 — the written instructor exam.",
        modules: [
          {
            id: "adi.theory.learning",
            label: "Learning Materials",
            kind: "learning",
            blurb: "The five sections of the Stage 1 exam.",
            source: "contentSources.js",
            ready: true,
          },
          {
            id: "adi.theory.flashcards",
            label: "ADI Flashcards",
            kind: "flashcards",
            blurb: "62 instructor-specific cards across 6 categories.",
            source: "adiFlashcardsData.js",
            count: 62,
            ready: true,
          },
          {
            id: "adi.theory.rules",
            label: "Rules of the Road Flashcards",
            kind: "flashcards",
            blurb: "153 cards across 20 topics.",
            source: "rulesFlashcardsData.js",
            count: 153,
            ready: true,
          },
          {
            id: "adi.theory.signs",
            label: "Road Signs",
            kind: "flashcards",
            blurb: "199 official signs across 5 categories.",
            source: "roadSignsData.js",
            count: 199,
            ready: true,
          },
          {
            id: "adi.theory.mcq",
            label: "Practice MCQs",
            kind: "mcq",
            blurb: "478 questions — ADI theory, Rules of the Road and road signs.",
            source: "adiTheoryPracticeData.js + rulesQuestions.js + roadSignsData.js",
            count: 478,
            passMark: PASS_MARKS.adi,
            ready: true,
          },
          {
            id: "adi.theory.mock",
            label: "Mock Test",
            kind: "mock",
            blurb: "100 questions, timed, drawn across every section.",
            source: "adiTheoryPracticeData.js + rulesQuestions.js + roadSignsData.js",
            questionCount: 100,
            passMark: PASS_MARKS.adi,
            ready: true,
          },
        ],
      },
      {
        id: "adi.practical",
        label: "Practical Test",
        blurb: "Stage 2 — your own driving, to instructor standard.",
        modules: [
          {
            id: "adi.practical.learning",
            label: "Learning Materials",
            kind: "learning",
            blurb: "Stage 2 standards, faults and test structure.",
            source: null,
            ready: false,
          },
          {
            id: "adi.practical.flashcards",
            label: "Flashcards",
            kind: "flashcards",
            blurb: "Key concepts and definitions.",
            source: null,
            ready: false,
          },
          {
            id: "adi.practical.mcq",
            label: "Practice MCQs",
            kind: "mcq",
            blurb: "Stage 2 practice questions.",
            source: null,
            passMark: PASS_MARKS.adi,
            ready: false,
          },
          {
            id: "adi.practical.mock",
            label: "Mock Test",
            kind: "mock",
            blurb: "Simulate the real Stage 2 test.",
            source: null,
            passMark: PASS_MARKS.adi,
            ready: false,
          },
        ],
      },
      {
        id: "adi.instructability",
        label: "Instructability Test",
        blurb: "Stage 3 — teaching a real lesson to test standard.",
        modules: [
          {
            id: "adi.instructability.learning",
            label: "Learning Materials",
            kind: "learning",
            blurb: "Teaching techniques and lesson structure.",
            source: null,
            ready: false,
          },
          {
            id: "adi.instructability.flashcards",
            label: "Flashcards",
            kind: "flashcards",
            blurb: "Teaching techniques and approaches.",
            source: null,
            ready: false,
          },
          {
            id: "adi.instructability.mcq",
            label: "Practice MCQs",
            kind: "mcq",
            blurb: "Stage 3 practice questions.",
            source: null,
            passMark: PASS_MARKS.adi,
            ready: false,
          },
          {
            id: "adi.instructability.mock",
            label: "Mock Test",
            kind: "mock",
            blurb: "Simulate the real Stage 3 test.",
            source: null,
            passMark: PASS_MARKS.adi,
            ready: false,
          },
        ],
      },
    ],
  },
];

/* ---------------------------------------------------------------------------
   Lookups — built once, so screens never have to walk the tree by hand.
   --------------------------------------------------------------------------- */

export const PATH_BY_ID = Object.fromEntries(APP_PATHS.map(p => [p.id, p]));

export const ALL_SECTIONS = APP_PATHS.flatMap(p =>
  p.sections.map(s => ({ ...s, pathId: p.id, pathLabel: p.label }))
);

export const SECTION_BY_ID = Object.fromEntries(ALL_SECTIONS.map(s => [s.id, s]));

export const ALL_MODULES = ALL_SECTIONS.flatMap(s =>
  s.modules.map(m => ({ ...m, sectionId: s.id, sectionLabel: s.label, pathId: s.pathId }))
);

export const MODULE_BY_ID = Object.fromEntries(ALL_MODULES.map(m => [m.id, m]));

/* Modules that actually count toward a progress bar. Learning material and
   flashcards have no score, so a section's percentage is the average of its
   scored modules only. */
export const isScored = (m) => m.kind === "mcq" || m.kind === "mock";

/* The pass mark for any module, falling back sensibly. */
export const passMarkFor = (moduleId) =>
  MODULE_BY_ID[moduleId]?.passMark ?? PASS_MARKS.practice;

/* What the learner is told after a test. Deliberately encouraging on a fail —
   never "failed", always a next step. */
export function verdictFor(pct, passMark) {
  if (pct >= passMark) {
    return {
      status: "pass",
      title: pct >= 95 ? "Excellent!" : "Passed",
      message: "You're at test standard on this section. Keep it warm with a retry closer to your test date.",
    };
  }
  if (pct >= passMark - 15) {
    return {
      status: "close",
      title: "Almost there",
      message: `You're close — ${passMark}% is the pass mark. Review the ones you missed and go again.`,
    };
  }
  return {
    status: "practice",
    title: "Keep practising",
    message: "Work through the learning materials and flashcards for this topic, then come back to the test.",
  };
}
