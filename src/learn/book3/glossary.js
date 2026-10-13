/*
  ===========================================================================
  BOOK 3 — VISUAL GLOSSARY

  Same shape as book1/glossary.js: one card per term, drawing first.
  Terms are added as the unit that teaches them is built.
  ===========================================================================
*/

const P = (unit, page, ref) => ({ book: 3, unit, page, ref });

export default [
  {
    id: "driver-attitude", unit: "3.1", term: "Driver's attitude", visual: "driver-qualities",
    meaning: "Responsibility, concentration, anticipation, patience, confidence, communication and awareness, with experience and skill.",
    key: "Developed from the very first lesson.",
    src: P("3.1", 5, "The good driver; p.88 answers 1, 3"),
  },
  {
    id: "anticipation", unit: "3.1", term: "Anticipation", visual: "driver-qualities",
    meaning: "Planning well ahead and acting promptly to changes around you.",
    key: "Continually question what other road users will do.",
    src: P("3.1", 88, "Post-test answer 9"),
  },
  {
    id: "adi", unit: "3.1", term: "ADI (Approved Driving Instructor)", visual: "instructor-qualities",
    meaning: "An instructor on the Register of Approved Driving Instructors kept by the RSA.",
    key: "Only a qualified ADI may give driving tuition for reward.",
    src: P("3.1", 88, "Post-test answer 14; Retention Q18"),
  },
  {
    id: "behavioural-objective", unit: "3.1", term: "Behavioural objective", visual: "lesson-plan",
    meaning: "What the pupil should be able to do by the end of the lesson.",
    key: "Progress is measured by an observed change in skill.",
    src: P("3.1", 6, "The driving lesson; Objectives"),
  },
  {
    id: "planned-lesson", unit: "3.1", term: "Planned lesson", visual: "lesson-plan",
    meaning: "Recap, objectives, briefing, demonstration, practice, praise, recap, link to the next lesson.",
    key: "Every lesson has a beginning, a middle and an end.",
    src: P("3.1", 6, "The driving lesson; p.7"),
  },
  {
    id: "teach-from-known", unit: "3.1", term: "Teaching from the known", visual: "learning-curves",
    meaning: "Building on what the pupil already knows, found with light probe questions.",
    key: "Instructors work in adult education.",
    src: P("3.1", 6, "ADI responsibilities"),
  },
  {
    id: "visual-aid", unit: "3.1", term: "Visual teaching aid", visual: "teaching-aids",
    meaning: "A diagram, folder or board used to explain a topic.",
    key: "About three quarters of knowledge comes from what we see.",
    src: P("3.1", 7, "Teaching aids"),
  },
];
