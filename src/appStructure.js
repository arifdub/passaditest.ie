/*
  ===========================================================================
  APP STRUCTURE — ADI Stage 1

  The app is built around the five subject areas of the RSA Stage 1 exam.
  Each carries its own pass mark in the real test, so the section is the unit
  a candidate studies and tracks progress against — not the bank a question
  happened to come from.

  Home screen, in order:
    · the five exam sections, each with its own progress
    · the mock test, 100 questions across all five
    · flashcards, kept separate as study material rather than testing

  The sections themselves are defined in adiSections.js, which is where the
  questions are filed. This file only describes the app's shape.
  ===========================================================================
*/

import {
  ADI_SECTIONS, SECTION_BY_ID, MOCK_LENGTH, MOCK_MINUTES,
  MOCK_WEIGHTS, TOTAL_QUESTIONS, MOCK_CAPACITY,
} from "./adiSections";

/* ---------------------------------------------------------------------------
   PASS MARKS

   Each section's own mark lives on the section in adiSections.js, with a note
   on where the figures come from. This is the fallback for anything that has
   no section — and the highest of the five, so the fallback is never the
   lenient option.
   --------------------------------------------------------------------------- */
export const PASS_MARK = 75;

export function passMarkFor(sectionId) {
  return SECTION_BY_ID[sectionId]?.passMark ?? PASS_MARK;
}

export {
  ADI_SECTIONS, SECTION_BY_ID, MOCK_LENGTH, MOCK_MINUTES,
  TOTAL_QUESTIONS, MOCK_CAPACITY,
};

/* ---------------------------------------------------------------------------
   MOCK TEST

   Set up to mirror the real paper: 100 questions, 20 per section, 90 minutes
   on a countdown, and a result that grades each section separately.
   --------------------------------------------------------------------------- */
export const MOCKS = [
  {
    id: "adi.mock",          // unchanged, so existing scores stay attached
    paper: 1,
    label: "Mock Test 1",
    blurb: `Exam conditions — ${MOCK_LENGTH} questions, ${MOCK_MINUTES} minutes, every section must pass.`,
    questionCount: MOCK_LENGTH,
    minutes: MOCK_MINUTES,
  },
  {
    id: "adi.mock.2",
    paper: 2,
    label: "Mock Test 2",
    blurb: `A different ${MOCK_LENGTH} questions. No overlap with Mock Test 1.`,
    questionCount: MOCK_LENGTH,
    minutes: MOCK_MINUTES,
  },
  /* Papers 3 to 7 became possible as the bank grew. Before the expansion,
     Pedagogy held 53 questions against 20 per paper, which capped the whole
     app at two non-overlapping papers however large the other sections were —
     the thinnest section always sets the ceiling.

     Seven is the honest limit today: Mechanics has 143 and Category B 144, so
     both fill exactly seven. An eighth needs 160 in each, which is 33 more
     questions. Adding a paper before then would repeat questions from an
     earlier one — the builder wraps around rather than handing back a short
     paper, so nothing breaks, but the papers stop being independent. */
  {
    id: "adi.mock.3",
    paper: 3,
    label: "Mock Test 3",
    blurb: `A third ${MOCK_LENGTH} questions, sharing none with papers 1 or 2.`,
    questionCount: MOCK_LENGTH,
    minutes: MOCK_MINUTES,
  },
  {
    id: "adi.mock.4",
    paper: 4,
    label: "Mock Test 4",
    blurb: `${MOCK_LENGTH} more questions, again with no overlap.`,
    questionCount: MOCK_LENGTH,
    minutes: MOCK_MINUTES,
  },
  {
    id: "adi.mock.5",
    paper: 5,
    label: "Mock Test 5",
    blurb: `${MOCK_LENGTH} questions drawn from the parts of the bank the earlier papers left.`,
    questionCount: MOCK_LENGTH,
    minutes: MOCK_MINUTES,
  },
  {
    id: "adi.mock.6",
    paper: 6,
    label: "Mock Test 6",
    blurb: `${MOCK_LENGTH} more questions, again sharing none with any other paper.`,
    questionCount: MOCK_LENGTH,
    minutes: MOCK_MINUTES,
  },
  {
    id: "adi.mock.7",
    paper: 7,
    label: "Mock Test 7",
    blurb: `The last full paper the bank supports — ${MOCK_LENGTH} fresh questions.`,
    questionCount: MOCK_LENGTH,
    minutes: MOCK_MINUTES,
  },
];

/* ---------------------------------------------------------------------------
   GRADING A MOCK

   The whole point of this function: an average is not how Stage 1 is marked.
   Every section has to clear its own bar, so the result is decided by the
   worst section, not the mean. Somebody on 88 overall who took 11 of 20 in
   Teaching Ability has not passed, and telling them they have would be the
   single most damaging thing this app could do.

   `log` is the per-question record the quiz builds: { sectionId, isRight }.
   Unanswered questions never reach it, so a paper finished early is marked on
   what was attempted — except in a timed mock, where the caller passes the
   full paper so that anything left blank counts against the candidate, as it
   would in the real exam.
   --------------------------------------------------------------------------- */
export function gradeMock(log, { totalQuestions } = {}) {
  const rows = ADI_SECTIONS.map(section => {
    const mine = log.filter(item => item.sectionId === section.id);
    const correct = mine.filter(item => item.isRight).length;

    /* Denominator is what the paper set for this section, not what got
       answered — otherwise skipping a section you find hard would raise your
       percentage in it. Falls back to what was seen if the weighting is
       ever out of step with the paper. */
    const total = MOCK_WEIGHTS[section.id] || mine.length;
    const pct = total ? Math.round((correct / total) * 100) : 0;
    const passMark = section.passMark ?? PASS_MARK;

    return {
      id: section.id,
      label: section.short || section.label,
      examLabel: section.examLabel || section.label,
      number: section.number,
      correct,
      total,
      pct,
      passMark,
      /* The real boundary, in whole questions — what a candidate actually
         needs to get right. 72% of 20 is 14.4, so 15. */
      needed: Math.ceil((passMark / 100) * total),
      passed: total > 0 && pct >= passMark,
      seen: mine.length,
    };
  }).filter(r => r.total > 0);

  const failing = rows.filter(r => !r.passed);
  const score = log.filter(item => item.isRight).length;
  const total = totalQuestions || rows.reduce((n, r) => n + r.total, 0) || log.length;
  const pct = total ? Math.round((score / total) * 100) : 0;

  return {
    rows,
    failing,
    score,
    total,
    pct,
    passed: rows.length > 0 && failing.length === 0,
  };
}

/* The wording for a graded mock. Deliberately separate from verdictFor, which
   knows only one number and cannot express "strong overall, one section short"
   — the case a candidate most needs explained. */
export function mockVerdict(grade) {
  if (grade.passed) {
    return {
      status: "pass",
      title: grade.pct >= 95 ? "Excellent!" : "Passed",
      message: `You cleared every section. ${grade.score} of ${grade.total} overall.`,
    };
  }

  const n = grade.failing.length;

  if (n === 1) {
    const f = grade.failing[0];
    return {
      status: grade.pct >= 70 ? "close" : "practice",
      title: "One section short",
      message: `${grade.pct}% overall, but ${f.examLabel} came in at ${f.pct}% against a ${f.passMark}% pass mark. `
        + `In the real exam that is a fail however well the rest went — you needed ${f.needed} of ${f.total} and got ${f.correct}. `
        + `That one section is the whole gap.`,
    };
  }

  return {
    status: grade.pct >= 65 ? "close" : "practice",
    title: `${n} sections short`,
    message: `${grade.pct}% overall. Every section has to reach its own pass mark, and `
      + `${grade.failing.map(f => f.examLabel).join(", ")} did not. Those are where the work is.`,
  };
}

export const MOCK_BY_ID = Object.fromEntries(MOCKS.map(m => [m.id, m]));

/* Kept so anything still importing the old single MOCK keeps working. */
export const MOCK = MOCKS[0];

/* ---------------------------------------------------------------------------
   FLASHCARDS

   Study material, not assessment. Deliberately below the exam sections on the
   home screen: useful for learning, but working through them is not the same
   as being ready for the test.
   --------------------------------------------------------------------------- */
export const DECKS = [
  {
    id: "deck.rules",
    label: "Rules of the Road",
    blurb: "153 quick-recall cards across 20 topics.",
    count: 153,
  },
  {
    id: "deck.signs",
    label: "Road Signs",
    blurb: "Every official sign, by category.",
    count: 240,
  },
  {
    id: "deck.adi",
    label: "ADI Flashcards",
    blurb: "62 cards on instructor-specific topics.",
    count: 62,
  },
];

export const DECK_BY_ID = Object.fromEntries(DECKS.map(d => [d.id, d]));

/* ---------------------------------------------------------------------------
   GUEST ACCESS

   Someone studying without an account gets Section 1 in full, plus the
   flashcards. The other four sections and the mock test ask them to create an
   account first.

   Section 1 rather than a taster of each: a whole section is enough to judge
   whether the app is any good, which is the point of letting anyone in
   without signing up.

   Defined here so the home screen and the router can't drift apart on it — a
   locked card that still opens if you reach it another way is worse than no
   lock at all.
   --------------------------------------------------------------------------- */
export const GUEST_SECTION_ID = "adi.sec.procedure";

export function lockedForGuest(id, isGuest) {
  if (!isGuest) return false;
  if (id === GUEST_SECTION_ID) return false;
  if (id?.startsWith("deck.")) return false;   // flashcards stay open
  return true;                                  // every mock paper included
}

/* ---------------------------------------------------------------------------
   Pass / fail wording for a single section practice, which really is one
   number against one mark. Never the word "failed".
   --------------------------------------------------------------------------- */
export function verdictFor(pct, passMark = PASS_MARK) {
  if (pct >= passMark) {
    return {
      status: "pass",
      title: pct >= 95 ? "Excellent!" : "Passed",
      message: "You're at test standard on this section. Keep it warm with a retry closer to your exam date.",
    };
  }
  if (pct >= passMark - 15) {
    return {
      status: "close",
      title: "Almost there",
      message: `You're close — ${passMark}% is the pass mark. Review what you missed and go again.`,
    };
  }
  return {
    status: "practice",
    title: "Keep practising",
    message: "Work back through this section, then come to the test again.",
  };
}
