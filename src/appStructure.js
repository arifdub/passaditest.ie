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

import { ADI_SECTIONS, MOCK_LENGTH, TOTAL_QUESTIONS } from "./adiSections";

/* Stage 1 sections each carry their own pass mark. 75% is what the project's
   existing quizzes use and what Irish ADI training providers quote. */
export const PASS_MARK = 75;

export { ADI_SECTIONS, MOCK_LENGTH, TOTAL_QUESTIONS };

/* ---------------------------------------------------------------------------
   MOCK TEST
   --------------------------------------------------------------------------- */
export const MOCK = {
  id: "adi.mock",
  label: "Mock Test",
  blurb: `${MOCK_LENGTH} questions across all five sections, timed.`,
  questionCount: MOCK_LENGTH,
  passMark: PASS_MARK,
  minutes: 90,
};

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
   Pass / fail wording. Never the word "failed".
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
