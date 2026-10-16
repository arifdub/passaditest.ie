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
  {
    id: "learner-permit", unit: "3.2", term: "Learner permit", visual: "learner-path",
    meaning: "The permit a learner needs to take lessons and the driving test.",
    key: "Apply only after passing the driver theory test.",
    src: P("3.2", 11, "Driving licence"),
  },
  {
    id: "six-month-rule", unit: "3.2", term: "Six-month rule", visual: "learner-path",
    meaning: "First-time permit holders wait six months from the permit date before the test.",
    key: "Time to gain experience.",
    src: P("3.2", 12, "The six-month rule"),
  },
  {
    id: "n-plates", unit: "3.2", term: "N-plates (novice driver)", visual: "plates",
    meaning: "Displayed front and rear for 2 years after a first full licence.",
    key: "A novice may not accompany a learner.",
    src: P("3.2", 12, "Novice drivers"),
  },
  {
    id: "edt", unit: "3.2", term: "EDT (Essential Driver Training)", visual: "learner-path",
    meaning: "12 one-hour lessons with an ADI for first-time car learners.",
    key: "Recorded in a logbook and uploaded to the RSA.",
    src: P("3.2", 13, "Essential Driver Training"),
  },
  {
    id: "sponsor", unit: "3.2", term: "Sponsor", visual: "plates",
    meaning: "A qualified driver who supervises practice outside lessons.",
    key: "Tracks practice in the logbook.",
    src: P("3.2", 13, "What is a sponsor"),
  },
  {
    id: "third-party", unit: "3.2", term: "Third party insurance", visual: "insurance-tiers",
    meaning: "Cover for injury or damage you cause to others.",
    key: "The legal minimum.",
    src: P("3.2", 13, "Third party insurance; p.89 answer 4"),
  },
  {
    id: "comprehensive", unit: "3.2", term: "Comprehensive insurance", visual: "insurance-tiers",
    meaning: "Third party, fire and theft, plus accidental damage to your car and injury to you.",
    key: "The dearest of the three types.",
    src: P("3.2", 14, "Comprehensive insurance"),
  },
  {
    id: "no-claims-bonus", unit: "3.2", term: "No-claims bonus", visual: "premium-factors",
    meaning: "A premium discount for claim-free years — a full bonus can take five years.",
    key: "Can be protected for an extra premium.",
    src: P("3.2", 14, "No claims bonuses"),
  },
  {
    id: "nct", unit: "3.2", term: "NCT (vehicle test)", visual: "driving-docs",
    meaning: "Checks that key safety and environmental systems meet legal standards.",
    key: "Cars from 4 years old.",
    src: P("3.2", 89, "Post-test answers 7, 8"),
  },
  {
    id: "bac-limit", unit: "3.3", term: "Blood alcohol limit", visual: "bac-limits",
    meaning: "The legal maximum alcohol in the blood while driving.",
    key: "50 mg per 100 ml for most; 20 mg for learner, novice and professional drivers.",
    src: P("3.3", 18, "Disqualification periods"),
  },
  {
    id: "horn-rules", unit: "3.3", term: "Horn rules", visual: "horn-hours",
    meaning: "Use the horn only to warn others of your presence.",
    key: "Not 23:30–07:00 in built-up areas, unless an emergency.",
    src: P("3.3", 18, "Vehicle warning instrument"),
  },
  {
    id: "overtake-on-left", unit: "3.3", term: "Overtaking on the left", visual: "overtake-left",
    meaning: "Allowed only when the car ahead turns right, you turn left soon, or the left lane moves faster in a queue.",
    key: "Otherwise overtake on the right.",
    src: P("3.3", 20, "You may only overtake on the left"),
  },
  {
    id: "long-vehicle", unit: "3.3", term: "LONG VEHICLE sign", visual: "overtake-left",
    meaning: "Marks a vehicle at least 13 metres long.",
    key: "Allow extra road to overtake it.",
    src: P("3.3", 20, "Overtaking procedure"),
  },
  {
    id: "towing-gap", unit: "3.3", term: "Towing gap", visual: "towing-rules",
    meaning: "The distance between a towing vehicle and its trailer.",
    key: "No more than 4.5 metres.",
    src: P("3.3", 18, "Towing"),
  },
  {
    id: "space-saver", unit: "3.3", term: "Space-saver spare", visual: "space-saver",
    meaning: "A skinny temporary spare wheel.",
    key: "Only to finish the journey, at the stamped speed — often 60 km/h.",
    src: P("3.3", 21, "Temporary use spare tyres"),
  },
  {
    id: "penalty-points", unit: "3.3", term: "Penalty points", visual: "bac-limits",
    meaning: "Points recorded on a licence for driving offences.",
    key: "12 in 36 months means a 6-month ban.",
    src: P("3.3", 24, "Retention Q31, Q39"),
  },
];
