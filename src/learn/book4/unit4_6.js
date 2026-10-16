/*
  ===========================================================================
  BOOK 4 · UNIT 4.6 — LESSON PREPARATION

  Source: "Theory Resource Workbook 4 of 4 — Instructional Techniques &
  Practices" (Driver Education Supplies), book pages 38–44: text pp.38–42,
  post test p.43 (model answers p.85), retention test p.44 (answers p.87,
  10 questions).

  All ten retention questions match the key and are used.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 4, unit: "4.6", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "role": {
    title: "Managing the learning experience",
    text: "The instructor's role is to manage the learning experience: prepare the lesson in advance, organise resources and materials, present the information, and make sure the pupil learns. There's no better recipe for disaster than an unprepared driving lesson. Once you have a set of prepared lessons, adapt them to new pupils and situations.",
    src: P(38, "Summaries; Preparing a lesson; p.85 answer 1"),
  },
  "prep": {
    title: "Decide, plan, check",
    text: "Three stages of lesson preparation. Decide: the objectives and their place in the course, the resources, methods and route, and how the objectives will be achieved. Plan: time for each part, and check content, materials and route fit the objectives. Check: make sure the teaching aids are in the car — a disorganised mind is a cluttered one. After the lesson, compare the actual lesson with the plan: did the pupil learn, were objectives achievable, was the route, timing, aid and Q&A right, did the pupil participate? Modify the plan.",
    src: P(38, "Three stages; p.39 Planning; p.41 Check; p.85 answer 3"),
  },
  "learning-types": {
    title: "How pupils learn",
    text: "Signal learning: a conditioned response — sees a child on the footpath (signal), checks the mirror (response); prompt until it's automatic. Stimulus-response: the response is more likely if it was praised before. Trial and error: tries responses until right, then praised. Gestalt (insight): sees the whole problem; the solution comes in a flash. Chaining: a sequence linked step by step with prompts. Verbal association: interprets new words from past experience. Multiple discrimination: tells like from unlike. Concept learning: groups things with similar properties — a hazard is anything that may change speed or direction. Principle learning: chains concepts into a rule — check mirrors on approach to any hazard. Problem-solving: applies principles; the instructor guides toward the solution without revealing it.",
    src: P(38, "Signal learning; p.39; p.85 answer 11"),
  },
  "introduction": {
    title: "The introduction",
    text: "A lesson has three stages: introduction, developmental phase and conclusion. Introduction: recap at the start (remind the pupil of the last lesson, or find out a new pupil's background and experience); give the aim (a broad statement); set the objectives (what the pupil should be able to do by the end) early, so both can measure progress — they should arouse interest so the pupil commits to learning.",
    src: P(39, "Lesson structure; p.40 The introduction; p.85 answers 2, 4"),
  },
  "development": {
    title: "The developmental phase",
    text: "It gets the greatest share of time. Explanation: suited to the pupil, from the known to the unknown, with participation — question-and-answer is the most effective way. Demonstration: helps with tasks needing co-ordination and cuts verbal explanation; exhaust other avenues first and tactfully ask permission before taking the driving seat; go slowly with a talk-through. Give it as soon as possible after the explanation. Practice: as soon as possible — don't expect perfection; use positive feedback. Validation: the pupil performs the task without guidance. Use professional aids and Q&A; choose a route that lets the pupil validate and recap.",
    src: P(40, "The developmental phase; p.41; p.85 answers 5, 6, 8, 9"),
  },
  "conclusion": {
    title: "The conclusion",
    text: "Recap at the end: summarise the main points and assess progress against the objectives, with praise and encouragement. Post-test: to establish the effectiveness of teaching and learning. Forward plan: put the lesson in context with the next one. Recap at the start reminds the pupil of what was achieved last time; at the end it summarises and emphasises the key points.",
    src: P(41, "The conclusion; p.85 answer 7"),
  },
  "transfer": {
    title: "Transfer of learning",
    text: "The overall objective is to transfer responsibility to the pupil for the vehicle, its occupants and others. Positive transfer: previous learning agrees with what's taught and helps. Negative transfer: it conflicts and can hinder. Neutral transfer: the material is completely new — no effect. Measure progress with post- and retention tests; a learning curve is a graph of performance against time. A training plateau is a period of no improvement between periods of improvement — allow time for new things to 'sink in' and praise what's been achieved.",
    src: P(42, "The transfer of learning; p.85 answers 13–16"),
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
    "Prepare: decide, plan, check",
    "Lesson: introduction, development, conclusion",
    "Explain → demonstrate → practise → validate",
  ],
  cards: [
    {
      icon: "🗂️",
      kicker: "Your role",
      title: "Manage the learning experience",
      ask: {
        prompt: "What's the best recipe for a disastrous lesson?",
        options: ["Too many diagrams", "No preparation", "A short route"],
        answer: 1,
      },
      list: [
        "Prepare the lesson in advance",
        "Organise resources and materials",
        "Present the information",
        "Make sure the pupil learns",
      ],
      concept: "role",
      src: P(38, "Summaries"),
    },
    {
      icon: "📋",
      kicker: "Preparation",
      title: "Decide, plan, check",
      visual: "prep-stages",
      list: [
        "Decide: objectives, resources, methods, route",
        "Plan: time for each part, fit to the objectives",
        "Check: the teaching aids are in the car",
        "Afterwards: compare the lesson with the plan",
      ],
      concept: "prep",
      src: P(38, "Three stages; p.41"),
    },
    {
      icon: "🧠",
      kicker: "Types of learning",
      title: "Nine ways in",
      visual: "learning-types",
      list: [
        "Signal and stimulus-response: conditioned, reinforced by praise",
        "Trial and error; insight (gestalt) — the whole, in a flash",
        "Chaining; verbal association; multiple discrimination",
        "Concept → principle → problem-solving",
      ],
      concept: "learning-types",
      src: P(38, "Methods by which a pupil learns; p.39"),
    },
    {
      icon: "🚪",
      kicker: "Introduction",
      title: "Recap, aim, objectives",
      visual: "lesson-structure",
      list: [
        "Recap the last lesson — or a new pupil's experience",
        "Give the aim: a broad statement",
        "Set the objectives early, to arouse interest",
      ],
      concept: "introduction",
      src: P(40, "The introduction"),
    },
    {
      icon: "🛠️",
      kicker: "Development",
      title: "Most of the time",
      list: [
        "Explanation: known to unknown, with Q&A",
        "Demonstration: as soon as possible after explaining",
        "Ask permission tactfully before taking the driving seat",
        "Practice soon, positive feedback; then validation",
      ],
      concept: "development",
      src: P(40, "The developmental phase; p.41"),
    },
    {
      icon: "🏁",
      kicker: "Conclusion",
      title: "Recap, test, look ahead",
      list: [
        "Recap: main points and progress, with praise",
        "Post-test: was the teaching effective?",
        "Forward plan: link to the next lesson",
      ],
      concept: "conclusion",
      src: P(41, "The conclusion"),
    },
    {
      icon: "🔀",
      kicker: "Transfer",
      title: "Positive, negative, neutral",
      visual: "transfer-types",
      list: [
        "Positive: past learning agrees — helps",
        "Negative: past learning conflicts — hinders",
        "Neutral: completely new — no effect",
        "Goal: transfer responsibility to the pupil",
      ],
      concept: "transfer",
      src: P(42, "The transfer of learning"),
    },
    {
      icon: "📈",
      kicker: "Learning curve",
      title: "Plateaus are normal",
      visual: "training-plateau",
      list: [
        "A graph of performance against time",
        "Plateau: no improvement for a while",
        "Allow time to sink in; praise what's achieved",
      ],
      concept: "transfer",
      src: P(42, "Measuring the transfer of learning"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   2. QUICK RECALL — post-test questions with model answers from page 85.
   --------------------------------------------------------------------------- */
const recall = {
  id: "recall",
  kind: "items",
  mode: "recall",
  title: "Quick Recall",
  blurb: "Flash cards, true or false, fill the gap",
  xpPer: 10,
  items: [
    { id: "r1", type: "flash", concept: "role",
      front: "What is the instructor's role in the learning situation?",
      back: "To manage the learning experience.", src: P(85, "Post test answer 1") },
    { id: "r2", type: "flash", concept: "introduction", visual: "lesson-structure",
      front: "What are the three main stages of a lesson?",
      back: "Introduction, developmental stage and conclusion.", src: P(85, "Post test answer 2") },
    { id: "r3", type: "flash", concept: "prep", visual: "prep-stages",
      front: "What are the three stages of lesson preparation?",
      back: "Deciding, planning and checking.", src: P(85, "Post test answer 3") },
    { id: "r4", type: "fill", concept: "introduction",
      before: "Lesson objectives should be stated in the", after: "stage.",
      options: ["introductory", "developmental", "concluding", "validation"], answer: "introductory",
      explain: "So interest is generated early.", src: P(85, "Post test answer 4") },
    { id: "r5", type: "flash", concept: "development",
      front: "When should a demonstration be given?",
      back: "When it would reduce the verbal explanation needed — as soon as possible after the explanation.", src: P(85, "Post test answer 5") },
    { id: "r6", type: "truefalse", concept: "development",
      statement: "The pupil should take part in the explanation phase.", answer: true,
      explain: "The more involved, the more likely they are to learn.", src: P(85, "Post test answer 8") },
    { id: "r7", type: "truefalse", concept: "learning-types",
      statement: "Praise every correct performance makes the pupil more likely to repeat it.", answer: true,
      explain: "Stimulus-response learning.", src: P(85, "Post test answer 10") },
    { id: "r8", type: "flash", concept: "learning-types",
      front: "What is the instructor's role in a problem-solving exercise?",
      back: "To guide the pupil towards the solution without revealing the answer.", src: P(85, "Post test answer 11") },
    { id: "r9", type: "truefalse", concept: "prep",
      statement: "It's acceptable to abandon initial objectives during a lesson.", answer: true,
      explain: "Yes — if something needs immediate remedy or the route must change.", src: P(85, "Post test answer 12") },
    { id: "r10", type: "flash", concept: "transfer", visual: "training-plateau",
      front: "What is a training plateau, and how should you deal with it?",
      back: "A period of no improvement between periods of improvement. Allow time for new concepts to sink in and praise what's achieved.", src: P(85, "Post test answers 15, 16") },
  ],
};

/* ---------------------------------------------------------------------------
   3. BUILD THE LESSON — recognition.
   --------------------------------------------------------------------------- */
const lesson = {
  id: "lesson",
  kind: "items",
  mode: "matching",
  title: "Build the Lesson",
  blurb: "Spot it, sort it — stages and learning types",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "introduction",
      prompt: "Which picture shows how a lesson is structured?",
      options: ["lesson-structure", "prep-stages", "transfer-types"], answer: 0,
      names: ["Lesson structure", "Preparation", "Transfer"],
      explain: "Introduction, development, conclusion.", src: P(39, "Lesson structure") },
    {
      id: "k2", type: "sort", concept: "introduction",
      prompt: "Which stage of the lesson?",
      categories: [
        { id: "intro", label: "Introduction" },
        { id: "dev", label: "Development" },
        { id: "conc", label: "Conclusion" },
      ],
      cards: [
        { text: "Set the objectives", cat: "intro" },
        { text: "Demonstration", cat: "dev" },
        { text: "Forward plan", cat: "conc" },
        { text: "Validation", cat: "dev" },
        { text: "Post-test", cat: "conc" },
        { text: "Give the aim", cat: "intro" },
      ],
      explain: "Most time goes to development.", src: P(40, "Introduction; Developmental; p.41 Conclusion") },
    { id: "k3", type: "picture", label: "Spot it", concept: "learning-types",
      prompt: "Which picture lists ways a pupil learns?",
      options: ["training-plateau", "learning-types"], answer: 1,
      names: ["Learning curve", "Learning types"],
      explain: "Signal learning through to principle learning.", src: P(38, "Methods") },
    {
      id: "k4", type: "sort", concept: "learning-types",
      prompt: "Which type of learning?",
      categories: [
        { id: "signal", label: "Signal" },
        { id: "chain", label: "Chaining" },
        { id: "concept", label: "Concept" },
      ],
      cards: [
        { text: "Sees a child, checks the mirror", cat: "signal" },
        { text: "Moving-off routine, step by linked step", cat: "chain" },
        { text: "Anything that may change speed or direction is a hazard", cat: "concept" },
      ],
      explain: "From the unit's examples.", src: P(38, "Signal learning; p.39") },
    {
      id: "k5", type: "sort", concept: "transfer",
      prompt: "Positive, negative or neutral transfer?",
      categories: [
        { id: "pos", label: "Positive" },
        { id: "neg", label: "Negative" },
        { id: "neu", label: "Neutral" },
      ],
      cards: [
        { text: "A cyclist learning road positioning", cat: "pos" },
        { text: "An automatic driver learning a manual clutch", cat: "neg" },
        { text: "A non-driver learning the clutch", cat: "neu" },
      ],
      explain: "Past learning helps, hinders or doesn't matter.", src: P(42, "Transfer of learning") },
    { id: "k6", type: "picture", label: "Spot it", concept: "transfer",
      prompt: "Which picture shows a period of no progress?",
      options: ["training-plateau", "lesson-structure"], answer: 0,
      names: ["Plateau", "Lesson structure"],
      explain: "A training plateau.", src: P(42, "Measuring the transfer") },
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
  blurb: "Learning types",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "learning-types", visual: "learning-types",
      prompt: "Match the type of learning.",
      pairs: [
        ["Trial and error", "Try responses until correct"],
        ["Gestalt", "Solution in a flash of insight"],
        ["Chaining", "A linked sequence of steps"],
        ["Principle", "Concepts combined into a rule"],
        ["Problem-solving", "Apply principles to a problem"],
      ],
      explain: "See The Driving Instructor's Handbook for more.", src: P(39, "Methods") },
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
  blurb: "Running the lesson",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "introduction", visual: "lesson-structure",
      prompt: "A full lesson — in order.",
      steps: ["Recap", "Aim", "Objectives", "Explanation", "Demonstration", "Practice", "Validation", "Recap and post-test", "Forward plan"],
      explain: "Introduction, development, conclusion.", src: P(40, "Lesson structure; p.41") },
    { id: "p2", type: "order", concept: "prep", visual: "prep-stages",
      prompt: "Preparing the lesson — in order.",
      steps: ["Decide the objectives and methods", "Plan the timing and route", "Check the aids are in the car", "After the lesson, compare it with the plan"],
      explain: "Then modify your plans accordingly.", src: P(38, "Three stages; p.41") },
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
  blurb: "Lessons in practice",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "development",
      scene: "🔄 Your pupil keeps struggling with the turnabout after two explanations.",
      prompt: "Before demonstrating, you…",
      options: ["Take over the driving seat straight away", "Try other avenues, then tactfully ask if a demonstration would help", "Skip the topic", "Repeat the same explanation"], answer: 1,
      explain: "Taking a novice from the seat may demoralise them.", src: P(40, "Demonstration") },
    { id: "s2", type: "choice", label: "Scenario", concept: "prep",
      scene: "🗺️ Halfway through, you realise your roundabout diagram is at home.",
      prompt: "What went wrong?",
      options: ["Nothing", "The 'check' stage of preparation", "The aim", "The forward plan"], answer: 1,
      explain: "Check the aids are always in the car.", src: P(41, "Check") },
    { id: "s3", type: "choice", label: "Scenario", concept: "transfer", visual: "training-plateau",
      scene: "📉 After fast progress, your pupil hasn't improved for three lessons and is frustrated.",
      prompt: "What do you do?",
      options: ["Push harder", "Recognise a plateau: allow time to absorb, praise what's achieved", "Suggest stopping", "Book the test"], answer: 1,
      explain: "Learning seldom happens at a constant rate.", src: P(42, "Measuring the transfer of learning") },
    { id: "s4", type: "choice", label: "Scenario", concept: "learning-types",
      scene: "🧩 Your pupil asks how to handle a tricky junction near home.",
      prompt: "Best approach?",
      options: ["Tell them the answer", "Guide them to work it out, pointing out problems with their ideas", "Ignore it", "Drive it for them"], answer: 1,
      explain: "Problem-solving: guide without revealing.", src: P(39, "Problem-solving") },
    { id: "s5", type: "choice", label: "Scenario", concept: "prep",
      scene: "🚧 Your planned route for 'meeting traffic' is closed by roadworks.",
      prompt: "What do you do?",
      options: ["Cancel the lesson", "Adapt or change the objective — that's acceptable", "Drive through anyway", "Teach motorways instead"], answer: 1,
      explain: "Objectives can be abandoned when the route must change.", src: P(85, "Post test answer 12") },
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
  blurb: "A lesson on meeting traffic",
  xpPer: 10,
  situation: "🚗 Today's lesson: dealing with parked cars and oncoming traffic.",
  items: [
    { id: "w1", type: "choice", step: "Start", concept: "introduction", prompt: "You begin with…",
      options: ["A recap of last week's lesson", "The post-test", "The forward plan", "Validation"], answer: 0,
      explain: "Remind the pupil what was achieved.", src: P(44, "Retention Q3 (answer b, p.87)") },
    { id: "w2", type: "choice", step: "Motivation", concept: "introduction", prompt: "To motivate the pupil, the introduction includes…",
      options: ["A challenging and interesting objective", "A threat", "A discount", "A long explanation"], answer: 0,
      explain: "So they commit to learning.", src: P(44, "Retention Q4 (answer a, p.87)") },
    { id: "w3", type: "choice", step: "Development", concept: "development", prompt: "The sequence you follow is…",
      options: ["Explanation, demonstration, practice", "Practice, explanation, demonstration", "Demonstration, validation, practice", "Identify, analyse, remedy"], answer: 0,
      explain: "The advised sequence.", src: P(44, "Retention Q8 (answer c, p.87)") },
    { id: "w4", type: "choice", step: "Validation", concept: "development", prompt: "Later, the pupil handles a narrow street with no prompting. That's…",
      options: ["Validation", "Evaluation", "Demonstration", "Verification"], answer: 0,
      explain: "Performing without guidance.", src: P(44, "Retention Q6 (answer d, p.87)") },
    { id: "w5", type: "choice", step: "Finish", concept: "conclusion", prompt: "You end with…",
      options: ["Recap, post-test and a forward plan", "A new topic", "Nothing", "The aim"], answer: 0,
      explain: "Link to the next lesson.", src: P(41, "The conclusion") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 87. All ten are used.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(44, `Retention test Q${n}; answer p.87`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "An instructor prompts the pupil to link sighting a hazard with checking mirrors; the pupil makes the association. The instructor should then", ["keep prompting", "applaud once", "keep praising every time the correct reaction is seen", "not prompt again"], 2, "learning-types"),
    R(2, "Gestalt learning emphasises the learner's ability to", ["see situations as a whole and solve problems in flashes of inspiration", "solve by trial and error", "solve in logical steps", "ask questions"], 0, "learning-types", "learning-types"),
    R(3, "The recap at the start of a lesson is to", ["repeat the previous lesson", "remind the pupil what was learned in the previous lesson", "remind them what they failed to achieve", "say what will be learned"], 1, "introduction"),
    R(4, "To motivate the pupil, the introduction should include", ["a challenging and interesting objective", "what happens if they don't pay attention", "an explanation of the subject", "a discount for good performance"], 0, "introduction"),
    R(5, "The developmental phase should include", ["a challenging objective", "an explanation of how to achieve the lesson objective", "a post-test", "the aim"], 1, "development"),
    R(6, "Performing the task to an acceptable standard without prompting is known as", ["evaluation", "demonstration", "verification", "validation"], 3, "development"),
    R(7, "For the instructor, post-tests after instruction are useful to", ["verify the teaching method was effective", "discover learning capacity", "allow time to relax", "keep attention at peak"], 0, "conclusion"),
    R(8, "The advised sequence in a lesson plan is", ["explanation, practice, demonstration", "demonstration, validation, practice", "explanation, demonstration, practice", "identification, analysis, remedy"], 2, "development", "lesson-structure"),
    R(9, "A learning curve is best described as", ["how pupil performance varies with time", "a route for novices", "a visual in-car aid", "a road with slight camber"], 0, "transfer", "training-plateau"),
    R(10, "The course's ultimate objective is to transfer responsibility to the pupil, so the level of instruction should", ["stay the same", "increase with performance", "decrease as the pupil becomes more proficient", "increase with lessons taken"], 2, "transfer"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "development",
      prompt: "Which phase gets the most time?", options: ["Introduction", "Developmental", "Conclusion", "Recap"], answer: 1,
      explain: "With aids and Q&A.", src: P(41, "The developmental phase") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "prep",
      prompt: "Which picture shows how to prepare?", options: ["prep-stages", "transfer-types", "learning-types"], answer: 0,
      names: ["Preparation", "Transfer", "Learning types"],
      explain: "Decide, plan, check.", src: P(38, "Three stages") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "transfer",
      statement: "Negative transfer happens when previous learning conflicts with what's being taught.", answer: true,
      explain: "It can hinder or slow learning.", src: P(42, "Negative transfer") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "learning-types",
      scene: "🪞 After weeks of prompts, your pupil now checks the mirror whenever a child appears near the road.",
      prompt: "Which learning has happened?", options: ["Signal learning", "Gestalt", "Verbal association", "Neutral transfer"], answer: 0,
      explain: "Signal (child) → response (mirror).", src: P(38, "Signal learning") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "transfer",
      prompt: "Match it.", pairs: [["Positive transfer", "Helps learning"], ["Negative transfer", "Hinders learning"], ["Neutral transfer", "No effect"]],
      explain: "Transfer of learning.", src: P(42, "Transfer of learning") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "development",
      prompt: "In order:", steps: ["Explanation", "Demonstration", "Practice", "Validation"],
      explain: "The developmental phase.", src: P(40, "The developmental phase") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "conclusion",
      scene: "⏰ Five minutes left in the lesson.",
      prompt: "Best use of them?", options: ["Start a new topic", "Recap, quick post-test, forward plan", "Drive home in silence", "Book more lessons"], answer: 1,
      explain: "The conclusion stage.", src: P(41, "The conclusion") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "development",
      prompt: "Performing without prompting to an acceptable standard is…", options: ["Evaluation", "Demonstration", "Verification", "Validation"], answer: 3,
      explain: "Opportunity must be given to validate.", src: P(44, "Retention Q6 (answer d, p.87)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "transfer",
      prompt: "A pupil who drove an automatic abroad struggles with your manual car. Which picture explains it?", options: ["transfer-types", "lesson-structure"], answer: 0,
      names: ["Transfer", "Lesson structure"],
      explain: "Negative transfer.", src: P(42, "Negative transfer") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "transfer",
      prompt: "As the pupil becomes more proficient, the level of instruction should…", options: ["Stay the same", "Increase", "Decrease", "Grow with lessons taken"], answer: 2,
      explain: "Responsibility transfers to the pupil.", src: P(44, "Retention Q10 (answer c, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "4.6",
  number: "4.6",
  title: "Lesson Preparation",
  pages: [38, 44],
  intro: "Decide, plan and check; how pupils learn; introduction, development and conclusion; transfer of learning and the learning curve.",
  objectives: [
    "The stages involved in planning a lesson",
    "The parts of each stage of a lesson",
    "Different types of learning",
    "Learning curves and positive and negative transfer",
  ],
  objectivesSrc: P(38, "Objectives"),
  mcqLink: { sectionId: "adi.sec.pedagogy", label: "Teaching Ability – Pedagogy" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...lesson, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "lesson-builder", icon: "🗂️", label: "Lesson Builder", rule: { activity: "lesson", min: 100 } },
    { id: "lesson-planning-specialist", icon: "🏆", label: "Lesson Planning Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
