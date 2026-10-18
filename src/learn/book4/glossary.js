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
  {
    id: "validity", unit: "4.3", term: "Validity (of a test)", visual: "valid-reliable",
    meaning: "The degree to which a test measures what it was intended to test.",
    key: "Link the test to the lesson objectives.",
    src: P("4.3", 23, "Validity of tests"),
  },
  {
    id: "reliability", unit: "4.3", term: "Reliability (of a test)", visual: "valid-reliable",
    meaning: "The degree to which a test consistently measures what it was intended to.",
    key: "Needs an objective examiner and a set pass standard.",
    src: P("4.3", 23, "Reliability of tests"),
  },
  {
    id: "criterion-referenced", unit: "4.3", term: "Criterion-referenced test", visual: "norm-criterion",
    meaning: "A test where candidates must reach a fixed minimum standard to pass.",
    key: "The driving test is criterion-referenced.",
    src: P("4.3", 24, "Criterion referencing"),
  },
  {
    id: "retention-test", unit: "4.3", term: "Pre-, post- and retention tests", visual: "test-timeline",
    meaning: "Tests before instruction, immediately after it, and at a later date.",
    key: "Together they show how much learning took place.",
    src: P("4.3", 22, "Types of tests"),
  },
  {
    id: "must-should-could", unit: "4.3", term: "Critical, important, relevant", visual: "must-should-could",
    meaning: "Material the pupil MUST, SHOULD or COULD know.",
    key: "Critical material is needed for the course objectives.",
    src: P("4.3", 23, "Relevant – Important – Critical"),
  },
  {
    id: "perception", unit: "4.4", term: "Perception", visual: "perception-steps",
    meaning: "The interpretation of information from the senses.",
    key: "Depends largely on past experience.",
    src: P("4.4", 28, "Perception"),
  },
  {
    id: "sensory-overload", unit: "4.4", term: "Sensory overload / deprivation", visual: "overload-deprivation",
    meaning: "Too many inputs at once — or too little stimulation, causing boredom.",
    key: "Keep to the point; vary your methods.",
    src: P("4.4", 29, "Attention; Sensory deprivation"),
  },
  {
    id: "discrimination", unit: "4.4", term: "Discrimination", visual: "sign-discrimination",
    meaning: "The ability to detect the differences between two stimuli.",
    key: "A sign's shape changes its meaning.",
    src: P("4.4", 29, "Discrimination"),
  },
  {
    id: "intrinsic-motivation", unit: "4.4", term: "Intrinsic / extrinsic motivation", visual: "motivation-types",
    meaning: "Motivation from within (curiosity, mastery) or from outside (praise, reward).",
    key: "Intrinsic leads to self-satisfaction.",
    src: P("4.4", 29, "Motivation"),
  },
  {
    id: "known-to-unknown", unit: "4.5", term: "Known to the unknown", visual: "known-unknown",
    meaning: "Building new skills on what the pupil already knows.",
    key: "E.g. a normal stop taught from cycling.",
    src: P("4.5", 33, "Adults as learners"),
  },
  {
    id: "peer-group", unit: "4.5", term: "Peer group", visual: "learner-ages",
    meaning: "People of similar age, sex and interests whose standards members follow.",
    key: "Be a credible alternative to a careless peer group.",
    src: P("4.5", 34, "Adolescents; p.85 answer 5"),
  },
  {
    id: "language-code", unit: "4.5", term: "Restricted / elaborate code", visual: "language-codes",
    meaning: "Short simple speech vs technical, detailed explanation.",
    key: "Explain technical terms simply.",
    src: P("4.5", 34, "Language and learning"),
  },
  {
    id: "stereotyping", unit: "4.5", term: "Stereotyping", visual: "credit-blame",
    meaning: "Pre-judging a pupil by type — age, gender, background.",
    key: "A pupil adopts the role you portray.",
    src: P("4.5", 35, "Stereotyping"),
  },
  {
    id: "negative-transfer", unit: "4.5", term: "Negative transfer", visual: "known-unknown",
    meaning: "When new material conflicts with what's already known.",
    key: "It makes learning harder.",
    src: P("4.5", 37, "Retention Q7"),
  },
  {
    id: "lesson-structure", unit: "4.6", term: "Lesson structure", visual: "lesson-structure",
    meaning: "Introduction, developmental phase and conclusion.",
    key: "Most time goes to the developmental phase.",
    src: P("4.6", 39, "Lesson structure"),
  },
  {
    id: "validation", unit: "4.6", term: "Validation", visual: "lesson-structure",
    meaning: "The pupil performs the task without guidance from the instructor.",
    key: "Give the opportunity in every lesson.",
    src: P("4.6", 41, "Validation"),
  },
  {
    id: "transfer-of-learning", unit: "4.6", term: "Transfer of learning", visual: "transfer-types",
    meaning: "How previous learning helps (positive), hinders (negative) or doesn't affect (neutral) new learning.",
    key: "The aim: transfer responsibility to the pupil.",
    src: P("4.6", 42, "The transfer of learning"),
  },
  {
    id: "training-plateau", unit: "4.6", term: "Learning curve / plateau", visual: "training-plateau",
    meaning: "A graph of performance over time; a plateau is a spell of no improvement.",
    key: "Allow time to absorb; praise progress.",
    src: P("4.6", 42, "Measuring the transfer of learning"),
  },
  {
    id: "signal-learning", unit: "4.6", term: "Signal learning", visual: "learning-types",
    meaning: "A conditioned response: sees a child (signal), checks the mirror (response).",
    key: "Prompt until it's automatic.",
    src: P("4.6", 38, "Signal learning"),
  },
  {
    id: "open-question", unit: "4.7", term: "Open / closed question", visual: "open-closed",
    meaning: "Closed: one correct answer. Open: many possible answers that make the pupil think.",
    key: "Avoid yes/no questions — a 50% guess.",
    src: P("4.7", 46, "Use the correct type of question"),
  },
  {
    id: "diagnostic-question", unit: "4.7", term: "Diagnostic question", visual: "qa-stages",
    meaning: "A question at the start of a lesson to find weaknesses and the right starting level.",
    key: "Used in the introduction.",
    src: P("4.7", 45, "The introduction"),
  },
  {
    id: "elliptical-question", unit: "4.7", term: "Elliptical question", visual: "open-closed",
    meaning: "A 'fill in the missing word' question.",
    key: "Avoid — it needs little effort.",
    src: P("4.7", 46, "Avoid elliptical questions"),
  },
  {
    id: "adi-formula", unit: "4.8", term: "ADI formula (Alert, Direct, Identify)", visual: "adi-formula",
    meaning: "A way of giving directions: get attention, give the direction, say where.",
    key: "Where junctions are close, identify the place first.",
    src: P("4.8", 52, "The giving of directions"),
  },
  {
    id: "fault-assessment", unit: "4.8", term: "Fault assessment", visual: "fault-steps",
    meaning: "Identifying, analysing and remedying a pupil's faults.",
    key: "The ADI's core competency.",
    src: P("4.8", 50, "Fault assessment"),
  },
  {
    id: "retrospective-instruction", unit: "4.8", term: "Retrospective instruction", visual: "fault-steps",
    meaning: "Correcting a fault an unnecessarily long time after it happened.",
    key: "Explain at the first safe opportunity instead.",
    src: P("4.8", 51, "Where it is necessary to delay"),
  },
  {
    id: "verbal-intervention", unit: "4.8", term: "Verbal / physical intervention", visual: "intervention-ladder",
    meaning: "A spoken prompt — or, if too late, a steering correction or dual controls.",
    key: "Early verbal intervention is most effective.",
    src: P("4.8", 53, "Correcting errors"),
  },
  {
    id: "nursery-route", unit: "4.8", term: "Nursery route", visual: "route-progression",
    meaning: "Straight, wide, quiet roads for a novice's first lessons.",
    key: "Then intermediate, then varied routes.",
    src: P("4.8", 51, "Route planning"),
  },
  {
    id: "drowsy-driving", unit: "4.9", term: "Drowsy driving", visual: "fatigue-signs",
    meaning: "Driving while tired: slower reactions, less awareness, poorer judgement.",
    key: "Stop, nap 15–45 minutes, wait 15 minutes before driving.",
    src: P("4.9", 56, "Drowsy & fatigued driving"),
  },
  {
    id: "dsssm", unit: "4.9", term: "DSSSM (cockpit drill)", visual: "cockpit-drill",
    meaning: "Doors, seat, steering, seat belt, mirrors — checked before every drive.",
    key: "Never adjust the seat while moving.",
    src: P("4.9", 66, "Prestart checks"),
  },
  {
    id: "tyre-inflation", unit: "4.9", term: "Under- / over-inflation", visual: "tyre-pressure",
    meaning: "Tyre pressure below or above the handbook figure.",
    key: "Under wears the edges; over wears the centre.",
    src: P("4.9", 61, "Tyre under-inflation; over-inflation"),
  },
  {
    id: "catalytic-converter", unit: "4.9", term: "Catalytic converter", visual: "car-emergencies",
    meaning: "Part of the exhaust that turns harmful gases into a cleaner mixture.",
    key: "Sensitive and expensive — don't submerge the exhaust.",
    src: P("4.9", 63, "The catalytic converter"),
  },
  {
    id: "dashboard-warning", unit: "4.10", term: "Dashboard warning lights", visual: "dash-warnings",
    meaning: "Symbols that warn of faults: red means stop and check, yellow means deal with it soon.",
    key: "Red oil light: stop, engine off, top up.",
    src: P("4.10", 73, "Self-test answers 11–18"),
  },
  {
    id: "hazard-lights", unit: "4.10", term: "Hazard warning lights", visual: "dash-warnings",
    meaning: "All direction indicators flashing together.",
    key: "Only when stopped or where there's danger.",
    src: P("4.10", 73, "Self-test answer 19"),
  },
  {
    id: "head-restraint", unit: "4.10", term: "Head restraint", visual: "head-restraint",
    meaning: "The padded support on top of the seat that guards against whiplash.",
    key: "Rigid part at eye or ear level, close to the head.",
    src: P("4.10", 76, "Self-test answer 40"),
  },
  {
    id: "run-flat-tyre", unit: "4.10", term: "Run-flat tyre", visual: "wheel-change",
    meaning: "A tyre built to get you to the next service station after a puncture.",
    key: "Drive with caution and at reduced speed.",
    src: P("4.10", 74, "Self-test answer 29"),
  },
];
