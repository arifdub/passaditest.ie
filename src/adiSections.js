/*
  ===========================================================================
  THE FIVE STAGE 1 SECTIONS

  The RSA Stage 1 exam is divided into five subject areas, and each carries
  its own pass mark — so a strong overall score with one weak section is still
  a fail. That makes the section, not the question bank it came from, the unit
  a candidate should study and track.

  This file takes every question available in the project and files it under
  the section it belongs to:

    1. Driving Test Procedure & Documentation
    2. Road Safety Precepts & Practices
    3. Pedagogy
    4. Basic Mechanics & Vehicle Maintenance
    5. Category B & BE Towing

  QUESTION IDs
  Every question gets a `qid` derived from a hash of its own text. That gives
  each question a stable identity that survives reordering, so "you have
  answered 48 of 96 questions in this section" keeps meaning the same thing
  when a bank is edited or extended. Progress is stored against these ids.
  ===========================================================================
*/

import ADI_STAGE_ONE from "./adiStageOneData";
import ADI_EXPANSION from "./adiExpansionData";
import ADI_PRACTICE from "./adiTheoryPracticeData";
import RULES_QUESTIONS from "./rulesQuestions";
import { ROAD_SIGNS, ROAD_SIGN_CAT } from "./roadSignsData";

/* Small, fast, stable string hash (FNV-1a). Not cryptographic — it only has
   to be consistent and collision-free enough across a few thousand strings. */
function hashId(text) {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

/* ---------------------------------------------------------------------------
   ROAD SIGN QUESTIONS

   Built from the sign deck. Distractors are chosen by walking the list of
   other sign names at a fixed stride, which always terminates and always
   gives the same options for the same sign.
   --------------------------------------------------------------------------- */
function buildSignQuestions() {
  const byCategory = {};
  for (const sign of ROAD_SIGNS) {
    (byCategory[sign.c] = byCategory[sign.c] || []).push(sign);
  }

  const out = [];
  for (const [catId, signs] of Object.entries(byCategory)) {
    const names = [...new Set(signs.map(s => s.name))];
    if (names.length < 4) continue;

    for (const sign of signs) {
      const others = names.filter(n => n !== sign.name);
      if (others.length < 3) continue;

      const start = (sign.id * 7) % others.length;
      let stride = (sign.id % (others.length - 1)) + 1;
      while (stride > 1 && others.length % stride === 0) stride--;

      const wrong = [
        others[start % others.length],
        others[(start + stride) % others.length],
        others[(start + stride * 2) % others.length],
      ];
      if (new Set(wrong).size !== 3) continue;

      const options = [...wrong, sign.name];
      const shift = sign.id % 4;
      const rotated = [...options.slice(shift), ...options.slice(0, shift)];

      out.push({
        q: "What does this sign mean?",
        image: sign.img,
        options: rotated,
        correct: rotated.indexOf(sign.name),
        explain: `${sign.name}. Category: ${ROAD_SIGN_CAT[catId]?.label || catId}.`,
      });
    }
  }
  return out;
}

const SIGN_QUESTIONS = buildSignQuestions();

/* ---------------------------------------------------------------------------
   Lookup helpers
   --------------------------------------------------------------------------- */
const pick = (bank, id) => bank.find(c => c.id === id)?.questions || [];

/* ---------------------------------------------------------------------------
   THE MAP

   Which source categories feed which official section. Keeping this as data
   means adding a new bank later is one line, not a code change.
   --------------------------------------------------------------------------- */
const SECTION_DEFS = [
  {
    id: "adi.sec.procedure",
    number: 1,
    label: "Driving Test Procedure & Documentation",
    short: "Test Procedure",
    blurb: "The driving test, fault marking, forms, licensing and ADI regulation.",
    accent: "emerald",
    sources: [
      ...pick(ADI_PRACTICE, "driving-test-procedure"),
      ...pick(ADI_STAGE_ONE, "adi-s1-testing"),
      ...pick(ADI_STAGE_ONE, "adi-s1-law"),
      ...pick(ADI_EXPANSION, "adi-exp-procedure"),
      ...pick(RULES_QUESTIONS, "documents"),
    ],
  },
  {
    id: "adi.sec.safety",
    number: 2,
    label: "Road Safety Precepts & Practices",
    short: "Road Safety",
    blurb: "Hazards, road procedure, positioning, signs, speed and vulnerable road users.",
    accent: "emerald",
    sources: [
      ...pick(ADI_PRACTICE, "road-safety-precepts"),
      ...pick(ADI_PRACTICE, "rsa-official-sample"),
      ...pick(ADI_STAGE_ONE, "adi-s1-procedure"),
      ...pick(ADI_STAGE_ONE, "adi-s1-vulnerable"),
      ...pick(RULES_QUESTIONS, "rules"),
      ...pick(RULES_QUESTIONS, "signs"),
      ...pick(RULES_QUESTIONS, "speed"),
      ...pick(RULES_QUESTIONS, "vulnerable"),
      ...pick(RULES_QUESTIONS, "responsible"),
      ...SIGN_QUESTIONS,
    ],
  },
  {
    id: "adi.sec.pedagogy",
    number: 3,
    label: "Pedagogy",
    short: "Pedagogy",
    blurb: "Teaching technique, communication, lesson structure, learning theory and fault correction.",
    accent: "emerald",
    sources: [
      ...pick(ADI_PRACTICE, "pedagogy"),
      ...pick(ADI_STAGE_ONE, "adi-s1-pedagogy"),
      ...pick(ADI_EXPANSION, "adi-exp-pedagogy"),
    ],
  },
  {
    id: "adi.sec.mechanics",
    number: 4,
    label: "Basic Mechanics & Vehicle Maintenance",
    short: "Mechanics",
    blurb: "Engine, transmission, brakes, tyres, electrics and routine maintenance.",
    accent: "emerald",
    sources: [
      ...pick(ADI_PRACTICE, "mechanics-maintenance"),
      ...pick(ADI_STAGE_ONE, "adi-s1-mechanics"),
      ...pick(ADI_EXPANSION, "adi-exp-mechanics"),
    ],
  },
  {
    id: "adi.sec.categoryb",
    number: 5,
    label: "Category B & BE Towing",
    short: "Category B & BE",
    blurb: "Licence categories, weights, coupling, stability and towing rules.",
    accent: "emerald",
    sources: [
      ...pick(ADI_PRACTICE, "category-b-be-towing"),
      ...pick(ADI_EXPANSION, "adi-exp-categoryb"),
    ],
  },
];

/* ---------------------------------------------------------------------------
   Build the sections: stamp ids, drop duplicates, drop anything malformed.
   --------------------------------------------------------------------------- */
export const ADI_SECTIONS = SECTION_DEFS.map(def => {
  const seen = new Set();
  const questions = [];

  for (const q of def.sources) {
    if (!q || !q.q || !Array.isArray(q.options) || q.options.length !== 4) continue;
    if (q.correct == null || q.correct < 0 || q.correct > 3) continue;

    const qid = hashId(q.q + "|" + q.options.join("|"));
    if (seen.has(qid)) continue;          // same question from two banks
    seen.add(qid);

    questions.push({ ...q, qid, sectionId: def.id, sectionLabel: def.label });
  }

  const { sources, ...rest } = def;
  return { ...rest, questions, total: questions.length };
});

export const SECTION_BY_ID = Object.fromEntries(ADI_SECTIONS.map(s => [s.id, s]));

export const ALL_QUESTIONS = ADI_SECTIONS.flatMap(s => s.questions);

export const TOTAL_QUESTIONS = ALL_QUESTIONS.length;

/* Lets a paused session be rebuilt from stored question ids alone, rather
   than writing whole questions into browser storage. */
export const QUESTION_BY_QID = Object.fromEntries(ALL_QUESTIONS.map(q => [q.qid, q]));

/* ---------------------------------------------------------------------------
   MOCK TEST

   100 questions, the length of the real Stage 1 paper.

   The split below is deliberate rather than proportional. Drawing in
   proportion to bank size gave Road Safety 54 questions out of 100, simply
   because that bank absorbs all 240 road sign questions — which would train a
   candidate for the wrong exam. These weights reflect the emphasis of the
   syllabus instead.

   They are a considered estimate, not published RSA figures. The RSA does not
   publish a per-section question count. Adjust here if you get better
   information, and everything downstream follows.
   --------------------------------------------------------------------------- */
export const MOCK_LENGTH = 100;

const MOCK_WEIGHTS = {
  "adi.sec.procedure": 25,
  "adi.sec.safety":    30,
  "adi.sec.pedagogy":  20,
  "adi.sec.mechanics": 15,
  "adi.sec.categoryb": 10,
};

function shuffle(arr, rand) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function buildMockTest(length = MOCK_LENGTH) {
  const rand = Math.random;
  const available = ADI_SECTIONS.filter(s => s.questions.length > 0);
  if (!available.length) return [];

  const scale = length / MOCK_LENGTH;
  const picked = [];
  const shortfall = [];

  for (const s of available) {
    const want = Math.round((MOCK_WEIGHTS[s.id] || 0) * scale);
    const take = Math.min(want, s.questions.length);
    picked.push(...shuffle(s.questions, rand).slice(0, take));
    // A section with too few questions can't meet its quota; note what's left
    // so the paper is still the right length.
    if (take < want) shortfall.push(want - take);
  }

  // Top up from whatever hasn't been used yet, so the test is always full length.
  if (picked.length < length) {
    const used = new Set(picked.map(q => q.qid));
    const spare = shuffle(ALL_QUESTIONS.filter(q => !used.has(q.qid)), rand);
    picked.push(...spare.slice(0, length - picked.length));
  }

  return shuffle(picked, rand).slice(0, length);
}

export default ADI_SECTIONS;
