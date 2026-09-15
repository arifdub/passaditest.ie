/*
  ===========================================================================
  CONTENT SOURCES

  The one place where a module id from appStructure.js is joined to the data
  that fills it. Screens ask for content by module id and never import a data
  file directly, so moving or renaming a data file only changes this file.

  Two content shapes:

    deck  — flashcards.  { cards, categories, cat, imageCards }
    quiz  — categorised multiple choice.  { categories }  where each category
            has { id, title, blurb, passMarkPct, questions: [{ q, options,
            correct, explain }] }
  ===========================================================================
*/

import { RULES_CARDS, RULES_CATEGORIES, RULES_CAT } from "./rulesFlashcardsData";
import { ROAD_SIGNS, ROAD_SIGN_CATEGORIES, ROAD_SIGN_CAT } from "./roadSignsData";
import { ADI_FLASHCARDS, ADI_FLASHCARD_CATEGORIES, ADI_FLASHCARD_CAT } from "./adiFlashcardsData";
import ADI_THEORY_PRACTICE_CATEGORIES from "./adiTheoryPracticeData";
import RULES_QUESTIONS from "./rulesQuestions";
import ADI_STAGE_ONE_CATEGORIES from "./adiStageOneData";
import DRIVING_THEORY_CATEGORIES from "./drivingTheoryData";

/* ---------------------------------------------------------------------------
   ADI STAGE 1 MOCK TEST — 151 questions

   adiQuizData.js is in your live repo but wasn't in the zip, so it isn't
   imported here yet. Once the file is back in src/, do two things:

     1. Uncomment the two lines below.
     2. In appStructure.js, set adi.theory.mock to  ready: true

   Nothing else needs changing — the mock test screen is already built and
   will pick the questions up.
   --------------------------------------------------------------------------- */
// import ADI_MOCK_CATEGORIES from "./adiQuizData";
const ADI_MOCK_CATEGORIES = null;

/* ---------------------------------------------------------------------------
   Flashcard decks
   --------------------------------------------------------------------------- */
const DECKS = {
  "adi.theory.flashcards": {
    cards: ADI_FLASHCARDS,
    categories: ADI_FLASHCARD_CATEGORIES,
    cat: ADI_FLASHCARD_CAT,
    imageCards: false,
    title: "ADI Flashcards",
    subtitle: "62 instructor-specific cards",
  },
  "adi.theory.rules": {
    cards: RULES_CARDS,
    categories: RULES_CATEGORIES,
    cat: RULES_CAT,
    imageCards: false,
    title: "Rules of the Road",
    subtitle: "153 cards across 20 topics",
  },
  "adi.theory.signs": {
    cards: ROAD_SIGNS,
    categories: ROAD_SIGN_CATEGORIES,
    cat: ROAD_SIGN_CAT,
    imageCards: true,
    title: "Road Signs",
    subtitle: "199 official signs across 5 categories",
  },

  /* Learner-driver path. Same decks as above under different module ids, so
     a learner's progress is tracked separately from an instructor's. */
  "driving.theory.flashcards": {
    cards: RULES_CARDS,
    categories: RULES_CATEGORIES,
    cat: RULES_CAT,
    imageCards: false,
    title: "Rules of the Road",
    subtitle: "153 cards across 20 topics",
  },
  "driving.theory.signs": {
    cards: ROAD_SIGNS,
    categories: ROAD_SIGN_CATEGORIES,
    cat: ROAD_SIGN_CAT,
    imageCards: true,
    title: "Road Signs",
    subtitle: "199 official signs across 5 categories",
  },
};

/* ---------------------------------------------------------------------------
   ROAD SIGN QUESTIONS

   Built at load time from the 199 signs already in roadSignsData.js rather
   than stored as a separate file, so adding a sign automatically adds a
   question. Wrong options are other sign names from the same category, which
   is what makes them hard — a warning sign's alternatives are other warning
   signs, not a speed limit.
   --------------------------------------------------------------------------- */
function buildSignQuestions() {
  const byCategory = {};
  for (const sign of ROAD_SIGNS) {
    (byCategory[sign.c] = byCategory[sign.c] || []).push(sign);
  }

  const questions = [];
  for (const [catId, signs] of Object.entries(byCategory)) {
    const names = [...new Set(signs.map(s => s.name))];
    if (names.length < 4) continue;   // too few to make a fair question

    for (const sign of signs) {
      const others = names.filter(n => n !== sign.name);
      if (others.length < 3) continue;

      /* Pick three wrong answers by stepping through the list at a fixed
         stride rather than drawing random numbers until three distinct ones
         turn up. Two reasons:

         1. It always terminates. The previous version looped until it had
            three distinct picks, and a seeded generator that lost floating
            point precision could cycle between the same two values forever —
            which hung the whole module at import time and left the app on a
            blank screen.
         2. It is still deterministic, so a given sign always gets the same
            options and a learner isn't re-learning a reshuffled question.

         Making the stride coprime with the list length guarantees the walk
         visits distinct entries. */
      const start = (sign.id * 7) % others.length;
      let stride = (sign.id % (others.length - 1)) + 1;
      while (stride > 1 && others.length % stride === 0) stride--;

      const wrong = [];
      for (let i = 0; i < 3; i++) {
        wrong.push(others[(start + i * stride) % others.length]);
      }

      const options = [...wrong, sign.name];
      // Rotate rather than shuffle, so the answer isn't always last.
      const shift = sign.id % 4;
      const rotated = [...options.slice(shift), ...options.slice(0, shift)];

      questions.push({
        q: "What does this sign mean?",
        image: sign.img,
        options: rotated,
        correct: rotated.indexOf(sign.name),
        category: ROAD_SIGN_CAT[catId]?.label,
      });
    }
  }
  return questions;
}

const SIGN_QUESTIONS = buildSignQuestions();

/* The theory bank is the written questions plus the sign questions. */
const DRIVING_THEORY_FULL = [
  ...DRIVING_THEORY_CATEGORIES,
  {
    id: "roadsigns",
    title: "Road Signs",
    blurb: "Identify the sign — all 199, by category.",
    questions: SIGN_QUESTIONS,
  },
];

/* ---------------------------------------------------------------------------
   Question banks
   --------------------------------------------------------------------------- */
/* Everything the Stage 1 written exam draws on, in one pool: the
   instructor-specific questions, road law, and sign recognition. */
const ADI_THEORY_POOL = [
  ...ADI_STAGE_ONE_CATEGORIES,
  ...ADI_THEORY_PRACTICE_CATEGORIES,
  ...RULES_QUESTIONS,
  {
    id: "roadsigns",
    title: "Road Signs",
    blurb: "Identify the sign — all 199, by category.",
    questions: SIGN_QUESTIONS,
  },
];

const QUIZZES = {
  /* ---- Learner driver, category B ---- */
  "driving.theory.mcq": {
    categories: DRIVING_THEORY_FULL,
    title: "Theory Practice MCQs",
    subtitle: "Questions by topic, plus all 199 road signs",
  },
  "driving.theory.mock": {
    categories: DRIVING_THEORY_FULL,
    title: "Theory Mock Test",
    subtitle: "40 questions, timed, pass mark 35",
  },

  /* ---- ADI Stage 1 ---- */
  "adi.theory.mcq": {
    categories: ADI_THEORY_POOL,
    title: "ADI Theory Practice",
    subtitle: "478 questions across every Stage 1 topic",
  },
  "adi.theory.mock": {
    categories: ADI_THEORY_POOL,
    title: "ADI Stage 1 Mock Test",
    subtitle: "100 questions, timed, drawn across every section",
  },
};

/* ---------------------------------------------------------------------------
   Learning material — plain topic pages.

   These are outlines, not the full Rules of the Road text. The full rewritten
   book already exists as rules-of-the-road.pdf / .epub; linking or importing
   that content into the app is a separate job.
   --------------------------------------------------------------------------- */
const LEARNING = {
  "driving.theory.learning": {
    title: "Theory Test — Learning Materials",
    intro: "The topics the theory test draws from, in the order worth studying them.",
    topics: [
      { label: "Rules of the Road", blurb: "Right of way, priority, overtaking, general conduct." },
      { label: "Speed Limits & Safety Margins", blurb: "Default limits, stopping and following distances." },
      { label: "Road Signs & Markings", blurb: "Sign shapes and colours, markings, reflective studs." },
      { label: "Road Procedure", blurb: "Junctions, roundabouts, motorways, lane discipline." },
      { label: "Vulnerable Road Users", blurb: "Pedestrians, cyclists, motorcyclists, children, animals." },
      { label: "Vehicle & Documents", blurb: "Licensing, insurance, NCT, tyres, warning lights." },
      { label: "Hazard Awareness & Conditions", blurb: "Anticipation, night driving, weather, skidding." },
    ],
  },
  "adi.theory.learning": {
    title: "ADI Theory — Learning Materials",
    intro: "The five sections of the Stage 1 written exam.",
    topics: [
      { label: "Driving Test Procedure & Documentation", blurb: "Marking sheets, discs, licence codes, ADI requirements." },
      { label: "Road Safety Precepts & Practices", blurb: "Safe systems, defensive driving, RSA safety policy." },
      { label: "Pedagogy", blurb: "How people learn, lesson structure, feedback and questioning." },
      { label: "Basic Mechanics & Vehicle Maintenance", blurb: "Systems, checks, faults and their symptoms." },
      { label: "Category B & BE Towing", blurb: "Weights, coupling, stability, licence categories." },
      { label: "Rules of the Road", blurb: "Road law as examined at Stage 1 — see the flashcards and MCQs." },
      { label: "Road Signs & Markings", blurb: "All 199 official signs, by category." },
    ],
  },
};

/* ---------------------------------------------------------------------------
   Public lookups
   --------------------------------------------------------------------------- */
export const getDeck = (moduleId) => DECKS[moduleId] || null;
export const getQuiz = (moduleId) => QUIZZES[moduleId] || null;
export const getLearning = (moduleId) => LEARNING[moduleId] || null;

/* True when a module genuinely has something behind it right now. The UI uses
   this as well as the `ready` flag, so a module can never open empty even if
   someone flips a flag before the content lands. */
export function hasContent(module) {
  if (!module) return false;
  switch (module.kind) {
    case "flashcards": return Boolean(DECKS[module.id]);
    case "mcq":
    case "mock":       return Boolean(QUIZZES[module.id]);
    case "learning":   return Boolean(LEARNING[module.id]);
    default:           return false;
  }
}
