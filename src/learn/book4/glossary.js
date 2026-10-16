/*
  ===========================================================================
  BOOK 4 — VISUAL GLOSSARY

  Same shape as book1/glossary.js: one card per term, drawing first.
  Terms are added as the unit that teaches them is built.
  ===========================================================================
*/

const P = (unit, page, ref) => ({ book: 4, unit, page, ref });

export default [
  {
    id: "two-way-communication", unit: "4.1", term: "Two-way communication", visual: "two-way-comm",
    meaning: "The instructor transmits, the pupil interprets and responds, and the instructor checks understanding.",
    key: "Learning won't happen without a response from the pupil.",
    src: P("4.1", 7, "Two-way communication"),
  },
  {
    id: "rapport", unit: "4.1", term: "Rapport", visual: "rapport",
    meaning: "A professional relationship of mutual co-operation between instructor and pupil.",
    key: "The instructor's job: firm, fair, warm and friendly.",
    src: P("4.1", 8, "Rapport"),
  },
  {
    id: "non-verbal-signals", unit: "4.1", term: "Non-verbal signals", visual: "body-language",
    meaning: "Gestures and facial expressions that add meaning to what is said.",
    key: "A glazed look, down-turned eyes and fidgeting suggest boredom.",
    src: P("4.1", 7, "Non-verbal signals"),
  },
  {
    id: "feedback", unit: "4.1", term: "Feedback", visual: "feedback-loop",
    meaning: "A two-way process: the pupil is rewarded for effort, the instructor checks objectives are being met.",
    key: "Praise from you; actions and replies from the pupil.",
    src: P("4.1", 8, "Feedback"),
  },
  {
    id: "intrinsic-barrier", unit: "4.1", term: "Extrinsic / intrinsic barriers", visual: "comm-barriers",
    meaning: "Things that block communication — outside the pupil (noise, distractions) or inside (attitudes, feelings).",
    key: "The pupil's attitude to you is an intrinsic barrier.",
    src: P("4.1", 8, "Barriers to communication"),
  },
  {
    id: "lesson-aim", unit: "4.2", term: "Aim (of a lesson)", visual: "aim-objective",
    meaning: "A broad statement of intent — the subject of the lesson.",
    key: "The first step in planning.",
    src: P("4.2", 17, "An aim"),
  },
  {
    id: "lesson-objective", unit: "4.2", term: "Behavioural objective", visual: "objective-parts",
    meaning: "Exactly what the pupil must be able to do: terminal behaviour, conditions and standard.",
    key: "Written with action verbs so it can be observed.",
    src: P("4.2", 17, "The parts of a behavioural objective"),
  },
  {
    id: "learning-domains", unit: "4.2", term: "Affective, cognitive, psychomotor", visual: "learning-domains",
    meaning: "The three domains of learning: feelings and attitudes; knowledge and thought; manual skill.",
    key: "Driving is primarily psychomotor.",
    src: P("4.2", 18, "Types of objectives"),
  },
  {
    id: "sensorimotor", unit: "4.2", term: "Sensorimotor skill", visual: "learning-domains",
    meaning: "Unconscious co-ordination that depends on how the controls respond — e.g. brake pressure by feel.",
    key: "Learned through feedback from the car.",
    src: P("4.2", 19, "The psychomotor domain"),
  },
];
