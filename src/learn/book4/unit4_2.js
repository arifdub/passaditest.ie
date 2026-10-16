/*
  ===========================================================================
  BOOK 4 · UNIT 4.2 — BEHAVIOURAL OBJECTIVES

  Source: "Theory Resource Workbook 4 of 4 — Instructional Techniques &
  Practices" (Driver Education Supplies), book pages 17–21: text pp.17–19,
  post test p.20 (model answers p.83), retention test p.21 (answers p.87,
  10 questions).

  All ten retention questions match the key and are used. Q7 (encourage a
  good attitude "by encouragement and example") goes beyond the text but
  has only one defensible option.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 4, unit: "4.2", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "aims": {
    title: "Aims and objectives",
    text: "An aim is a broad statement of intent and the first step in planning: it sets out the subject — 'We're going to try reversing today'. An objective is specific: it tells the pupil exactly what must be achieved — 'By the end of the lesson you should be able to select a safe place and reverse the car, under control, at a safe speed, into a side road, keeping close to the kerb.' An aim can be read several ways; an objective can't.",
    src: P(17, "Aims and objectives; p.83 answers 1, 2"),
  },
  "parts": {
    title: "The parts of an objective",
    text: "A lesson objective must include the terminal behaviour required of the pupil, the conditions under which it is to be achieved, and the standard of performance considered acceptable. Example — turn in the road: terminal behaviour, turn the vehicle round using forward and reverse gears, under control, with regard for others; conditions, in this vehicle on any road; standard, move slowly, steer briskly, no hesitancy, no stalling, roll-back or over-revving, no striking or mounting the kerb, effective observation, no danger or inconvenience to others.",
    src: P(17, "The parts of a behavioural objective; p.18 Example"),
  },
  "action-verbs": {
    title: "Behavioural objectives and action verbs",
    text: "Objectives say what the pupil should be able to do, say or think, so they're written in terms of observable behaviour — 'behavioural objectives' — which can be measured to assess progress. Use action verbs (state, move, identify, explain, select, perform, compare, describe, show, choose, conclude, discriminate) and avoid words open to wide interpretation: know, understand, grasp the meaning of, appreciate.",
    src: P(17, "Since objectives tell the pupil; p.83 answers 4, 5"),
  },
  "advantages": {
    title: "Why use them",
    text: "Behavioural objectives let the instructor plan a course, decide on resources, construct assessment tests and evaluate performance. They tell the pupil exactly what's to be achieved so progress can be measured against the tasks. The first step in preparing a course is defining the behavioural objectives to be achieved at or before the end of it. Set the objective at the start of the lesson, when attention is at its peak.",
    src: P(83, "Post test answers 6, 7"),
  },
  "domains": {
    title: "Three domains",
    text: "Objectives are classified into three domains (spheres) of learning. Affective: feelings, attitudes, emotions and values — e.g. an objective to change the pupil's attitude to pedestrian safety; hard to define and measure, so compare behaviour with what's acceptable. Cognitive: information, knowledge, sensation, perception and thought. Psychomotor: muscular control and manual skills. Driving is primarily a psychomotor skill.",
    src: P(18, "Types of objectives; p.19; p.83 answers 8, 9"),
  },
  "cognitive": {
    title: "Cognitive levels",
    text: "From simplest: recall (remember facts — 'the left pedal is the clutch'); comprehension (explain your actions — clutch down before stopping so the engine won't stall); application (use knowledge in new situations — clutch control at junctions and when reversing); analysis (break a statement or operation into its parts and relate them); synthesis (assemble concepts into a new arrangement); evaluation (make value judgements — showing brake lights early for a child about to run out).",
    src: P(18, "Recall; Comprehension; p.19 Application to Evaluation; p.83 answers 14, 15"),
  },
  "sensorimotor": {
    title: "Sensorimotor skill",
    text: "Alongside psychomotor skill, the pupil develops sensorimotor skill: unconscious control and co-ordination of movements depending on the response of the controls. When braking, moving the right foot to the brake is mainly psychomotor; judging the pressure by the braking force felt is mainly sensorimotor — the instructor can't tell the pupil exactly how hard to press.",
    src: P(19, "The psychomotor domain; p.83 answer 10"),
  },
};

/* ---------------------------------------------------------------------------
   1. LEARN
   --------------------------------------------------------------------------- */
const learn = {
  id: "learn",
  kind: "learn",
  title: "Learn",
  blurb: "The unit in short cards",
  xp: 20,
  remember: [
    "Aim = broad intent; objective = exactly what, how well",
    "Objective = terminal behaviour + conditions + standard",
    "Affective, cognitive, psychomotor",
  ],
  cards: [
    {
      icon: "🎯",
      kicker: "Aims and objectives",
      title: "Broad vs exact",
      visual: "aim-objective",
      ask: {
        prompt: "'We're going to try reversing today' is…",
        options: ["An aim", "An objective", "A standard"],
        answer: 0,
      },
      list: [
        "Aim: a broad statement of intent — the first planning step",
        "Objective: exactly what the pupil must achieve",
        "An aim can be read several ways; an objective can't",
      ],
      concept: "aims",
      src: P(17, "Aims and objectives"),
    },
    {
      icon: "🧩",
      kicker: "Three parts",
      title: "Behaviour, conditions, standard",
      visual: "objective-parts",
      list: [
        "Terminal behaviour: what the pupil must be able to do",
        "Conditions: e.g. in this vehicle, on any road",
        "Standard: e.g. no stall, no kerb, good observation",
      ],
      concept: "parts",
      src: P(17, "The parts of a behavioural objective; p.18"),
    },
    {
      icon: "✍️",
      kicker: "Action verbs",
      title: "Say it so it can be seen",
      visual: "action-verbs",
      list: [
        "Written as observable behaviour — so progress can be measured",
        "Use: state, select, perform, identify, explain…",
        "Avoid: know, understand, appreciate, grasp",
      ],
      concept: "action-verbs",
      src: P(17, "Action verbs"),
    },
    {
      icon: "📈",
      kicker: "Advantages",
      title: "For pupil and instructor",
      list: [
        "Plan the course, choose resources, build tests",
        "The pupil knows exactly what to achieve",
        "Both can measure progress",
        "First step in a course: define the objectives",
      ],
      concept: "advantages",
      src: P(83, "Post test answers 6, 7"),
    },
    {
      icon: "🧠",
      kicker: "Domains",
      title: "Heart, head, hands",
      visual: "learning-domains",
      list: [
        "Affective: feelings, attitudes, emotions, values",
        "Cognitive: knowledge, perception, thought",
        "Psychomotor: muscular control and manual skills",
        "Driving is primarily psychomotor",
      ],
      concept: "domains",
      src: P(18, "Types of objectives; p.19"),
    },
    {
      icon: "🪜",
      kicker: "Cognitive levels",
      title: "Recall to evaluation",
      visual: "cognitive-steps",
      list: [
        "Recall → comprehension → application",
        "→ analysis → synthesis → evaluation",
        "Analysis: break into parts; synthesis: build a new arrangement",
        "Evaluation: value judgements",
      ],
      concept: "cognitive",
      src: P(18, "Recall; p.19"),
    },
    {
      icon: "🦶",
      kicker: "Sensorimotor",
      title: "Feeling the controls",
      list: [
        "Unconscious co-ordination that depends on how the controls respond",
        "Moving the foot to the brake: psychomotor",
        "Judging brake pressure by feel: sensorimotor",
      ],
      concept: "sensorimotor",
      src: P(19, "The psychomotor domain"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   2. QUICK RECALL — post-test questions with model answers from page 83.
   --------------------------------------------------------------------------- */
const recall = {
  id: "recall",
  kind: "items",
  mode: "recall",
  title: "Quick Recall",
  blurb: "Flash cards, true or false, fill the gap",
  xpPer: 10,
  items: [
    { id: "r1", type: "flash", concept: "aims",
      front: "What is meant by 'the aim of a lesson'?",
      back: "A broad statement of intent.", src: P(83, "Post test answer 1") },
    { id: "r2", type: "flash", concept: "aims",
      front: "What is 'the lesson objective'?",
      back: "A statement of what the learner must be able to do to show that learning has taken place.", src: P(83, "Post test answer 2") },
    { id: "r3", type: "flash", concept: "parts", visual: "objective-parts",
      front: "What are the three parts of a lesson objective?",
      back: "The terminal behaviour, the conditions, and the acceptable standard of performance.", src: P(83, "Post test answer 3") },
    { id: "r4", type: "flash", concept: "action-verbs", visual: "action-verbs",
      front: "What is an 'action verb'?",
      back: "A word describing clearly what a person can do, say or think.", src: P(83, "Post test answer 5") },
    { id: "r5", type: "fill", concept: "domains", visual: "learning-domains",
      before: "Learning the minimum stopping distances in the Rules of the Road is a", after: "objective.",
      options: ["cognitive", "psychomotor", "affective", "sensorimotor"], answer: "cognitive",
      explain: "It's knowledge.", src: P(83, "Post test answer 11") },
    { id: "r6", type: "fill", concept: "domains",
      before: "Performing a turn in the road is a", after: "objective.",
      options: ["psychomotor", "cognitive", "affective", "evaluation"], answer: "psychomotor",
      explain: "It's a manual skill.", src: P(83, "Post test answer 12") },
    { id: "r7", type: "truefalse", concept: "domains",
      statement: "Driving is predominantly a cognitive skill.", answer: false,
      explain: "It's predominantly psychomotor.", src: P(83, "Post test answer 13") },
    { id: "r8", type: "flash", concept: "cognitive", visual: "cognitive-steps",
      front: "What is meant by 'analysis'?",
      back: "Breaking a statement or operation into its parts and relating them to each other.", src: P(83, "Post test answer 14") },
    { id: "r9", type: "flash", concept: "cognitive",
      front: "What is meant by 'synthesis'?",
      back: "Assembling a variety of concepts to form a new arrangement.", src: P(83, "Post test answer 15") },
    { id: "r10", type: "flash", concept: "sensorimotor",
      front: "In driving, what is a sensorimotor skill?",
      back: "Unconscious control and co-ordination of movements that depend on how the car's controls respond.", src: P(83, "Post test answer 10") },
  ],
};

/* ---------------------------------------------------------------------------
   3. SORT THE OBJECTIVE — recognition.
   --------------------------------------------------------------------------- */
const sorter = {
  id: "domains",
  kind: "items",
  mode: "matching",
  title: "Sort the Objective",
  blurb: "Spot it, sort it — domains, parts and verbs",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "domains",
      prompt: "Which picture shows the three domains of learning?",
      options: ["learning-domains", "objective-parts", "aim-objective"], answer: 0,
      names: ["Domains", "Objective parts", "Aim vs objective"],
      explain: "Affective, cognitive, psychomotor.", src: P(18, "Types of objectives") },
    {
      id: "k2", type: "sort", concept: "domains",
      prompt: "Which domain?",
      categories: [
        { id: "aff", label: "Affective" },
        { id: "cog", label: "Cognitive" },
        { id: "psy", label: "Psychomotor" },
      ],
      cards: [
        { text: "Genuine concern for pedestrians", cat: "aff" },
        { text: "Stating the stopping distances", cat: "cog" },
        { text: "Steering with push-pull", cat: "psy" },
        { text: "Patience with other drivers", cat: "aff" },
        { text: "Explaining why you dip the clutch", cat: "cog" },
        { text: "Co-ordinating clutch and gas", cat: "psy" },
      ],
      explain: "Heart, head and hands.", src: P(18, "Types of objectives; p.19") },
    {
      id: "k3", type: "sort", concept: "action-verbs",
      prompt: "Good objective word?",
      categories: [
        { id: "yes", label: "Action verb" },
        { id: "no", label: "Too vague" },
      ],
      cards: [
        { text: "Select", cat: "yes" },
        { text: "Understand", cat: "no" },
        { text: "Perform", cat: "yes" },
        { text: "Appreciate", cat: "no" },
        { text: "Identify", cat: "yes" },
        { text: "Know", cat: "no" },
      ],
      explain: "Use words that describe observable behaviour.", src: P(17, "Action verbs") },
    { id: "k4", type: "picture", label: "Spot it", concept: "parts",
      prompt: "Which picture shows what every objective must include?",
      options: ["cognitive-steps", "objective-parts"], answer: 1,
      names: ["Cognitive levels", "Objective parts"],
      explain: "Terminal behaviour, conditions, standard.", src: P(17, "The parts of a behavioural objective") },
    {
      id: "k5", type: "sort", concept: "parts",
      prompt: "Which part of the turn-in-the-road objective?",
      categories: [
        { id: "beh", label: "Behaviour" },
        { id: "cond", label: "Conditions" },
        { id: "std", label: "Standard" },
      ],
      cards: [
        { text: "Turn the car round using forward and reverse gears", cat: "beh" },
        { text: "In this vehicle, on any road", cat: "cond" },
        { text: "Without striking the kerb", cat: "std" },
        { text: "Without stalling or rolling back", cat: "std" },
      ],
      explain: "The standard is what's acceptable.", src: P(18, "Example") },
    { id: "k6", type: "picture", label: "Spot it", concept: "cognitive",
      prompt: "Which picture ranks cognitive objectives by complexity?",
      options: ["cognitive-steps", "action-verbs"], answer: 0,
      names: ["Cognitive levels", "Action verbs"],
      explain: "Recall up to evaluation.", src: P(18, "Cognitive domain") },
  ],
};

/* ---------------------------------------------------------------------------
   4. MATCHING
   --------------------------------------------------------------------------- */
const matching = {
  id: "matching",
  kind: "items",
  mode: "matching",
  title: "Match It Up",
  blurb: "Cognitive levels",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "cognitive", visual: "cognitive-steps",
      prompt: "Match the level to the pupil's statement.",
      pairs: [
        ["Recall", "'The left pedal is the clutch'"],
        ["Comprehension", "'Clutch down so I don't stall'"],
        ["Application", "'Clutch control works in reverse too'"],
        ["Evaluation", "'Showing brake lights now is safer'"],
      ],
      explain: "From the unit's clutch and child examples.", src: P(18, "Recall; Comprehension; p.19") },
  ],
};

/* ---------------------------------------------------------------------------
   5. PROCEDURE BUILDER
   --------------------------------------------------------------------------- */
const procedure = {
  id: "procedure",
  kind: "items",
  mode: "procedure",
  title: "Procedure Builder",
  blurb: "Climbing the ladder",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "cognitive", visual: "cognitive-steps",
      prompt: "Cognitive levels — simplest first.",
      steps: ["Recall", "Comprehension", "Application", "Analysis", "Synthesis", "Evaluation"],
      explain: "Objectives are classified by complexity.", src: P(18, "Cognitive domain; p.19") },
    { id: "p2", type: "order", concept: "advantages",
      prompt: "Planning a course — in order.",
      steps: ["Decide the aims", "Define the behavioural objectives", "Plan the lessons and resources", "Assess progress against the objectives"],
      explain: "Objectives also let you build assessment tests.", src: P(21, "Retention Q2; p.83 answers 6, 7") },
  ],
};

/* ---------------------------------------------------------------------------
   6. WHAT WOULD YOU DO?
   --------------------------------------------------------------------------- */
const scenarios = {
  id: "scenarios",
  kind: "items",
  mode: "scenario",
  title: "What Would You Do?",
  blurb: "Writing and using objectives",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "action-verbs",
      scene: "📝 A trainee writes: 'By the end, the pupil will understand roundabouts.'",
      prompt: "What's wrong?",
      options: ["Nothing", "'Understand' can't be observed — use an action verb and a standard", "It's too short", "It should be an aim"], answer: 1,
      explain: "E.g. 'select the correct lane and signal at a two-lane roundabout'.", src: P(17, "Action verbs") },
    { id: "s2", type: "choice", label: "Scenario", concept: "advantages",
      scene: "⏱️ When should you tell the pupil today's objective?",
      prompt: "Best moment?",
      options: ["At the very beginning, when attention peaks", "After a warm-up", "At the end", "Halfway"], answer: 0,
      explain: "Set a challenging, interesting objective.", src: P(21, "Retention Q1 (answer a, p.87)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "domains",
      scene: "🚶 Your pupil drives past pedestrians at zebra crossings without slowing.",
      prompt: "Which domain does your next objective target?",
      options: ["Psychomotor", "Affective — their attitude to pedestrian safety", "Cognitive only", "Sensorimotor"], answer: 1,
      explain: "Progress begins with awareness, prompted at first.", src: P(18, "The affective domain") },
    { id: "s4", type: "choice", label: "Scenario", concept: "sensorimotor",
      scene: "🛑 Your pupil asks exactly how hard to press the brake.",
      prompt: "What's the honest answer?",
      options: ["Exactly half way", "It depends on speed and surface — feel the braking and adjust", "As hard as possible", "Very lightly always"], answer: 1,
      explain: "That's sensorimotor skill, learned by feel.", src: P(19, "Example") },
    { id: "s5", type: "choice", label: "Scenario", concept: "parts",
      scene: "📏 Your objective for reversing says what to do and where, but not how well.",
      prompt: "What's missing?",
      options: ["The aim", "The standard of performance", "The conditions", "Nothing"], answer: 1,
      explain: "Without a standard you can't judge success.", src: P(17, "The parts of a behavioural objective") },
  ],
};

/* ---------------------------------------------------------------------------
   7. SITUATION → DECISION
   --------------------------------------------------------------------------- */
const walkthrough = {
  id: "walkthrough",
  kind: "items",
  mode: "walkthrough",
  title: "Situation → Decision",
  blurb: "Planning a turnabout lesson",
  xpPer: 10,
  situation: "🔄 Next lesson your pupil will learn to turn the car round in the road.",
  items: [
    { id: "w1", type: "choice", step: "The aim", concept: "aims", prompt: "Your aim is…",
      options: ["'Today we'll learn to turn the car round'", "'Turn in three moves without touching the kerb'", "'Understand turning'", "'Drive well'"], answer: 0,
      explain: "A broad statement of intent.", src: P(17, "An aim") },
    { id: "w2", type: "choice", step: "Behaviour", concept: "parts", prompt: "The terminal behaviour is…",
      options: ["Turn the vehicle round using forward and reverse gears, under control", "In this vehicle", "Without stalling", "Appreciate the manoeuvre"], answer: 0,
      explain: "What the pupil must be able to do.", src: P(18, "Example") },
    { id: "w3", type: "choice", step: "Conditions", concept: "parts", prompt: "The conditions are…",
      options: ["In this vehicle, on any road", "Move slowly", "Steer briskly", "No hesitancy"], answer: 0,
      explain: "Under which it's to be achieved.", src: P(18, "Example") },
    { id: "w4", type: "choice", step: "Standard", concept: "parts", prompt: "Which belongs in the standard?",
      options: ["Effective observation, not endangering others", "On any road", "Today's aim", "The lesson price"], answer: 0,
      explain: "Plus no stall, no roll-back, no kerb.", src: P(18, "Standard") },
    { id: "w5", type: "choice", step: "Domain", concept: "domains", prompt: "Co-ordinating hands and feet for the manoeuvre is…",
      options: ["Psychomotor", "Affective", "Cognitive", "Evaluation"], answer: 0,
      explain: "A manual skill.", src: P(21, "Retention Q9 (answer c, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 87. All ten are used.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(21, `Retention test Q${n}; answer p.87`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "Give the lesson objective when the pupil's attention is at a peak — most likely", ["at the beginning of the lesson", "after a 15-minute warm-up", "towards the end", "about halfway through"], 0, "advantages"),
    R(2, "When planning tuition, the first step is to set aims. An aim is", ["what the instructor hopes to earn", "a set of detailed specifications", "a broad statement of intent", "a method of directing a pupil"], 2, "aims", "aim-objective"),
    R(3, "The lesson objective, set at the start of a session, should include", ["a broad statement of intent", "the aim of the lesson", "precise details of what's to be learned so progress can be assessed", "a rough outline of the plan"], 2, "parts"),
    R(4, "When writing lesson objectives, avoid terminology which", ["is open to wide interpretation", "defines behaviour clearly", "specifies the outcome", "is easily understood"], 0, "action-verbs", "action-verbs"),
    R(5, "'Psychomotor', 'affective' and 'cognitive' relate to", ["levels of skill", "educational areas or domains", "evaluation of practical thinking", "levels of intelligence"], 1, "domains", "learning-domains"),
    R(6, "To instil the right attitude to other road users, the instructor's objectives concern the pupil's", ["psychomotor domain", "intellect", "cognitive domain", "affective domain"], 3, "domains"),
    R(7, "How can an instructor best encourage a good driving attitude?", ["by being very strict", "by trial and error", "by suggesting reading", "by encouragement and example"], 3, "domains"),
    R(8, "From the pupil's viewpoint, the advantage of set learning objectives is", ["no need to ask questions", "knowing when they're ready for the test", "knowing the instructor is competent", "being able to measure their own progress"], 3, "advantages"),
    R(9, "Co-ordinating hand and foot movements to turn the car in the road is best described as", ["sensorimotor", "autonomous", "psychomotor", "instinctive"], 2, "domains"),
    R(10, "When compiling teaching objectives, it's most important to emphasise to the pupil", ["the time needed", "the demonstration material", "the knowledge and skills to be attained", "the cost"], 2, "advantages"),
  ],
};

/* ---------------------------------------------------------------------------
   9. UNIT CHALLENGE
   --------------------------------------------------------------------------- */
const challenge = {
  id: "challenge",
  kind: "items",
  mode: "challenge",
  title: "Unit Challenge",
  blurb: "Ten mixed challenges across four skills",
  xpPer: 10,
  xpBonus: 50,
  items: [
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "aims",
      prompt: "An objective differs from an aim because it…", options: ["Is broader", "Says exactly what to achieve and how well", "Comes later in the course", "Is optional"], answer: 1,
      explain: "An aim is a broad statement of intent.", src: P(17, "An objective") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "action-verbs",
      prompt: "Which picture shows how to word an objective?", options: ["action-verbs", "learning-domains", "aim-objective"], answer: 0,
      names: ["Action verbs", "Domains", "Aim vs objective"],
      explain: "Use observable action verbs.", src: P(17, "Action verbs") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "domains",
      statement: "The affective domain concerns feelings, attitudes and values.", answer: true,
      explain: "Hard to measure — compare behaviour with what's acceptable.", src: P(18, "The affective domain") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "cognitive",
      scene: "🧒 Your pupil says: 'I'll brake lightly now to show my brake lights, in case that child runs out.'",
      prompt: "Which cognitive level?", options: ["Recall", "Comprehension", "Evaluation", "Analysis"], answer: 2,
      explain: "A value judgement between methods.", src: P(19, "Evaluation") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "parts",
      prompt: "Match the part.", pairs: [["Terminal behaviour", "What the pupil must do"], ["Conditions", "Where and in what"], ["Standard", "How well"]],
      explain: "All three in every objective.", src: P(17, "The parts of a behavioural objective") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "cognitive",
      prompt: "Simplest first:", steps: ["Recall", "Comprehension", "Application", "Evaluation"],
      explain: "Analysis and synthesis come before evaluation.", src: P(18, "Cognitive domain; p.19") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "action-verbs",
      scene: "✍️ Pick the best objective.",
      prompt: "Which one?", options: ["'Know how to park'", "'Appreciate parking'", "'Select a safe place and reverse park within 30 cm of the kerb'", "'Understand parking'"], answer: 2,
      explain: "Observable, with a standard.", src: P(17, "Action verbs") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "domains",
      prompt: "'Psychomotor', 'affective' and 'cognitive' are…", options: ["Levels of skill", "Educational domains", "Practical thinking", "IQ levels"], answer: 1,
      explain: "Spheres of learning.", src: P(21, "Retention Q5 (answer b, p.87)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "domains",
      prompt: "You want to change a pupil's attitude to speeding. Which picture shows the domain?", options: ["learning-domains", "cognitive-steps"], answer: 0,
      names: ["Domains", "Cognitive levels"],
      explain: "The affective domain.", src: P(18, "The affective domain") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "advantages",
      prompt: "Set objectives let the pupil…", options: ["Skip questions", "Know when to book a test", "Judge the instructor", "Measure their own progress"], answer: 3,
      explain: "They know exactly what's to be achieved.", src: P(21, "Retention Q8 (answer d, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "4.2",
  number: "4.2",
  title: "Behavioural Objectives",
  pages: [17, 21],
  intro: "Aims and objectives, the three parts of an objective, action verbs, the affective, cognitive and psychomotor domains, and sensorimotor skill.",
  objectives: [
    "The difference between an aim and an objective",
    "The parts that make up an objective",
    "Classifying objectives by educational domain",
    "Writing an objective for a driving lesson",
  ],
  objectivesSrc: P(17, "Objectives"),
  mcqLink: { sectionId: "adi.sec.pedagogy", label: "Teaching Ability – Pedagogy" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...sorter, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "objective-setter", icon: "🎯", label: "Objective Setter", rule: { activity: "domains", min: 100 } },
    { id: "objectives-specialist", icon: "🏆", label: "Objectives Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
