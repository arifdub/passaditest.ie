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
  {
    id: "adi-register", unit: "3.4", term: "Register of Approved Driving Instructors", visual: "adi-stages",
    meaning: "The RSA's register of those allowed to give driving instruction for reward.",
    key: "Entry after passing all three stages and paying the fee.",
    src: P("3.4", 27, "Legal position"),
  },
  {
    id: "three-stage-exam", unit: "3.4", term: "Three-stage ADI exam", visual: "adi-stages",
    meaning: "Stage 1 theory, stage 2 own driving, stage 3 ability to instruct.",
    key: "All within two years of passing stage 1.",
    src: P("3.4", 27, "The examination"),
  },
  {
    id: "trainee-licence", unit: "3.4", term: "Trainee licence", visual: "trainee-licence",
    meaning: "A licence to gain instructing experience under a sponsoring ADI.",
    key: "Maximum six months, only after passing stage 2.",
    src: P("3.4", 31, "A trainee licence"),
  },
  {
    id: "role-play", unit: "3.4", term: "Stage 3 role-play", visual: "stage3-phases",
    meaning: "The examiner plays a beginner (phase 1) then a test-standard pupil (phase 2).",
    key: "About 25–30 minutes each.",
    src: P("3.4", 31, "Stage three test; Role play"),
  },
  {
    id: "check-test", unit: "3.4", term: "Check test", visual: "adi-stages",
    meaning: "A test of continued ability to instruct, on a real lesson with your pupil.",
    key: "A condition of continued registration.",
    src: P("3.4", 34, "The check test"),
  },
  {
    id: "garda-vetting", unit: "3.4", term: "Garda vetting", visual: "trainee-licence",
    meaning: "Criminal record check by the Garda National Vetting Bureau.",
    key: "Required for entry on the ADI register.",
    src: P("3.4", 27, "Legal position"),
  },
  {
    id: "licence-category", unit: "3.5", term: "Licence category", visual: "licence-categories",
    meaning: "The class of vehicle a licence covers — A, AM, B, C, D, W; E adds a trailer.",
    key: "Category B: up to 3,500 kg and 8 passenger seats.",
    src: P("3.5", 44, "Vehicle type and category"),
  },
  {
    id: "licence-code", unit: "3.5", term: "Licence code", visual: "licence-codes",
    meaning: "A number on the licence recording a condition or restriction.",
    key: "01 glasses, 78 automatics only, 999 must be accompanied.",
    src: P("3.5", 42, "Driving licence codes"),
  },
  {
    id: "qualified-driver", unit: "3.5", term: "Qualified (accompanying) driver", visual: "plates",
    meaning: "Someone with a full licence in the category for 2 continuous years.",
    key: "Must carry their licence too.",
    src: P("3.5", 46, "Accompaniment requirements"),
  },
  {
    id: "points-effective-date", unit: "3.5", term: "Penalty points effective date", visual: "licence-clock",
    meaning: "Points apply 28 days after the notice is issued.",
    key: "They stay at least 3 years.",
    src: P("3.5", 47, "Penalty point start date"),
  },
  {
    id: "licence-exchange", unit: "3.5", term: "Licence exchange", visual: "licence-categories",
    meaning: "Swapping a recognised foreign licence for an Irish one.",
    key: "Residency means more than 185 days a year here.",
    src: P("3.5", 46, "Driving licence exchange"),
  },
  {
    id: "vrc", unit: "3.6", term: "Vehicle Registration Certificate (VRC)", visual: "vrc-transfer",
    meaning: "The document naming a vehicle's registered owner.",
    key: "On a private sale the seller sends it in.",
    src: P("3.6", 53, "Purchasing a second-hand vehicle"),
  },
  {
    id: "vrt", unit: "3.6", term: "VRT (Vehicle Registration Tax)", visual: "tax-refund",
    meaning: "An import tax on new or second-hand vehicles brought into Ireland.",
    key: "Must be paid before the vehicle can be registered.",
    src: P("3.6", 53, "Vehicle Registration Tax"),
  },
  {
    id: "motor-tax-disc", unit: "3.6", term: "Motor tax disc", visual: "driving-docs",
    meaning: "Proof of motor tax, issued for 3, 6 or 12 months.",
    key: "Can't be transferred to another vehicle.",
    src: P("3.6", 53, "Renewing; Vehicle licensing"),
  },
  {
    id: "tax-refund", unit: "3.6", term: "Motor tax refund", visual: "tax-refund",
    meaning: "Tax back when a vehicle is off the road for a qualifying reason.",
    key: "At least three whole months must be left on the disc.",
    src: P("3.6", 54, "Refunds of motor tax"),
  },
  {
    id: "technical-checks", unit: "3.7", term: "Technical checks", visual: "tech-checks",
    meaning: "Checks the candidate explains on test — 3 chosen at random.",
    key: "Some need the bonnet opened and closed securely.",
    src: P("3.7", 58, "Technical checks"),
  },
  {
    id: "certificate-of-competency", unit: "3.7", term: "Certificate of Competency", visual: "test-result",
    meaning: "The certificate signed after passing the driving test.",
    key: "Apply for a full licence within two years of passing.",
    src: P("3.7", 60, "If you pass your driving test"),
  },
  {
    id: "form-d104", unit: "3.7", term: "Form D104 (Defer Decision)", visual: "test-result",
    meaning: "Issued when the tester defers a decision pending a Certificate of Fitness.",
    key: "The candidate is told the tester is 'satisfied with their driving'.",
    src: P("3.7", 61, "Decision deferred"),
  },
  {
    id: "marking-sheet", unit: "3.7", term: "Test marking sheet", visual: "marking-sheet",
    meaning: "The tester's report, set out in 18 sections with subsections.",
    key: "From rules & checks to parking.",
    src: P("3.7", 61, "The test report / marking sheet"),
  },
  {
    id: "mobility-centre", unit: "3.7", term: "Mobility Centre", visual: "adaptations",
    meaning: "A centre offering assessments and advice on vehicle adaptations.",
    key: "Assessment is for a fee; can help find an instructor.",
    src: P("3.7", 62, "Adaptations & equipment"),
  },
  {
    id: "test-reference", unit: "3.8", term: "Test reference number", visual: "appointment-letter",
    meaning: "The number on the appointment — the candidate's test number.",
    key: "Quote it in any call or letter to the booking office.",
    src: P("3.8", 68, "Driving test appointments"),
  },
  {
    id: "short-notice-test", unit: "3.8", term: "Short-notice test", visual: "appointment-letter",
    meaning: "A test offered too late to give a cancellation date.",
    key: "Only ask for one if you can attend with under a week's notice.",
    src: P("3.8", 68, "Driving test appointments"),
  },
  {
    id: "grade-1-fault", unit: "3.8", term: "Grade 1 (minor) fault", visual: "fault-grades",
    meaning: "A fault the tester judges neither serious nor dangerous.",
    key: "Doesn't fail the test on its own.",
    src: P("3.8", 68, "An explanation of the testers markings"),
  },
  {
    id: "serious-fault", unit: "3.8", term: "Serious / dangerous fault", visual: "fault-grades",
    meaning: "Faults marked in their own columns on the report.",
    key: "One of either means a fail.",
    src: P("3.8", 68, "An explanation of the testers markings"),
  },
  {
    id: "certificate-of-competence", unit: "3.8", term: "Certificate of competence", visual: "pass-cert",
    meaning: "Given to every successful candidate: date, driver number, category.",
    key: "Valid for two years only.",
    src: P("3.8", 68, "Pass certificate"),
  },
];
