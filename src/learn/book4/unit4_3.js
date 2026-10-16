/*
  ===========================================================================
  BOOK 4 · UNIT 4.3 — TEACHING & TESTING

  Source: "Theory Resource Workbook 4 of 4 — Instructional Techniques &
  Practices" (Driver Education Supplies), book pages 22–27: text pp.22–25,
  post test p.26 (model answers p.84), retention test p.27 (answers p.87,
  10 questions).

  Omitted retention questions (answer key unsafe):
  - Q3 (measuring a pupil's progress at any point, keyed c "an attainment
    test"): the unit defines an attainment test as finding the average
    performance of a large group, and a diagnostic test (a) as detecting a
    pupil's weaknesses — the key conflicts with the text.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 4, unit: "4.3", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why-test": {
    title: "Why test?",
    text: "Most pupils aim to pass the driving test, but the instructor must also find out how well the tuition is working and what progress the pupil is making — so keep devising tasks and tests of knowledge and skill. An educational test checks the effectiveness of teaching and learning and assesses whether course objectives are attained. The driving test is an educational test: it shows whether a candidate has learned enough to drive unaccompanied, safely and competently. Passing it is the start of a driving life, not the end.",
    src: P(22, "Teaching and testing; p.84 answers 1, 2"),
  },
  "types": {
    title: "Types of tests",
    text: "Tests can be practical, written, oral or a mix. Employment tests judge suitability for a job; educational tests assess teaching and progress. Educational tests: prerequisite (suitability for a course — e.g. the eyesight test before a learner permit); diagnostic (detect weaknesses in knowledge or skill); attainment (average performance of a large group); pre-test (what the pupil knows already); post-test (what's recalled at the end of a period of instruction); retention (how much can be recalled or demonstrated later). Instructors use diagnostic, pre-, post- and retention tests most.",
    src: P(22, "Types of tests; p.23"),
  },
  "timing": {
    title: "When to test",
    text: "Give a pre-test before a period of instruction and a post-test immediately after it — then you can judge how much learning took place. Retention tests are given at a later date. A pupil who learns quickly in a lesson but can't repeat it later is telling you to recapitulate more. Telling the pupil at the start that there'll be a test at the end makes them pay more attention.",
    src: P(24, "Testing the effectiveness of instruction; p.84 answers 7, 13"),
  },
  "valid-reliable": {
    title: "Validity and reliability",
    text: "A useful test must be valid AND reliable. Valid: it effectively measures the knowledge or skill it was designed to test — so it's linked closely to the lesson or course objectives and shows the pupil can perform without prompting. Reliable: it consistently measures what's been learned — it needs a built-in measure of a pass, and an objective examiner who doesn't pre-judge ('the last time I saw him he was hopeless').",
    src: P(23, "Design of tests; Validity; Reliability"),
  },
  "critical": {
    title: "Relevant, important, critical",
    text: "When building a test, decide which knowledge or skill is: relevant — COULD be known, not immediately important; important — SHOULD be known, not essential to a specific objective; critical — MUST be known to achieve the course objectives.",
    src: P(23, "Relevant – Important – Critical"),
  },
  "referencing": {
    title: "Norm and criterion referencing",
    text: "The driving test is marked objectively: the same degree of difficulty for all, with a uniform, fair marking system. Norm referencing (mainly theory exams): a fixed proportion of candidates pass, so the pass mark may vary year to year. Criterion referencing (mainly practical exams): fixed criteria — the candidate must reach a minimum standard, which stays the same until it's changed. The driving test is criterion-referenced.",
    src: P(23, "The driving test is marked objectively; p.24 Norm; Criterion"),
  },
  "effectiveness": {
    title: "Judging your instruction",
    text: "Effective lessons show marked improvement, but a high pass rate doesn't necessarily make a 'good' instructor — it may reflect younger pupils or ones with prior experience. Be self-critical. Use pre- and post-tests within lessons, and retention tests regularly. Testing gives the pupil a goal, motivation, reinforcement and a sense of achievement; it gives the instructor assessment, course validation and feedback on teaching methods.",
    src: P(24, "Testing the effectiveness of instruction; p.84 answer 14"),
  },
  "stage3": {
    title: "What an assessor looks for",
    text: "The Stage 3 (ability to instruct) assessment areas listed in the unit: setting the learning climate and rapport; the lesson plan; matching instruction to the learner's ability; identifying and analysing driving faults; feedback on performance (one changeable behaviour at a time, balanced, timely, supportive); imparting information clearly and concisely; other areas such as control of the lesson, safety, priorities and time to practise; and overall impression — wrap-up, accurate information, professionalism, safety equipment.",
    src: P(24, "Setting the learning climate…; p.25"),
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
    "Pre-test before, post-test straight after, retention test later",
    "A good test is valid AND reliable",
    "The driving test is criterion-referenced",
  ],
  cards: [
    {
      icon: "🎓",
      kicker: "Why test",
      title: "Is the teaching working?",
      ask: {
        prompt: "Is the driving test an educational test?",
        options: ["Yes", "No — it's an employment test", "No — it's a prerequisite"],
        answer: 0,
      },
      list: [
        "Measures the effectiveness of teaching and learning",
        "Checks course objectives are being attained",
        "The driving test: safe and competent to drive unaccompanied",
        "The test is the start of a driving life",
      ],
      concept: "why-test",
      src: P(22, "Teaching and testing; p.84"),
    },
    {
      icon: "🗂️",
      kicker: "Types",
      title: "Six educational tests",
      visual: "test-timeline",
      list: [
        "Prerequisite: suitability — e.g. the eyesight test",
        "Diagnostic: weak spots; attainment: a group's average",
        "Pre-test: what they know already",
        "Post-test: at the end; retention: at a later date",
      ],
      concept: "types",
      src: P(22, "Types of tests; p.23"),
    },
    {
      icon: "⏱️",
      kicker: "Timing",
      title: "Before, after, later",
      list: [
        "Pre-test before instruction; post-test immediately after",
        "Retention tests regularly, at a later date",
        "Learns fast but forgets? Recapitulate more",
        "Announce the test at the start — attention goes up",
      ],
      concept: "timing",
      src: P(24, "Testing the effectiveness; p.84"),
    },
    {
      icon: "🎯",
      kicker: "Test design",
      title: "Valid and reliable",
      visual: "valid-reliable",
      list: [
        "Valid: measures what it was designed to test",
        "Reliable: measures it consistently",
        "Link the test to the lesson objectives",
        "The examiner must be objective — no pre-judging",
      ],
      concept: "valid-reliable",
      src: P(23, "Design of tests"),
    },
    {
      icon: "🔺",
      kicker: "What to test",
      title: "Could, should, must",
      visual: "must-should-could",
      list: [
        "Relevant: COULD be known",
        "Important: SHOULD be known",
        "Critical: MUST be known for the course objectives",
      ],
      concept: "critical",
      src: P(23, "Relevant – Important – Critical"),
    },
    {
      icon: "📏",
      kicker: "Referencing",
      title: "Norm vs criterion",
      visual: "norm-criterion",
      list: [
        "Norm: a fixed proportion pass — mainly theory exams",
        "Criterion: a fixed standard to reach — mainly practical",
        "The driving test is criterion-referenced",
        "Same difficulty for all, marked objectively",
      ],
      concept: "referencing",
      src: P(23, "Marked objectively; p.24"),
    },
    {
      icon: "🪞",
      kicker: "Your teaching",
      title: "Be self-critical",
      list: [
        "A high pass rate doesn't prove you're a 'good' instructor",
        "Pupil gains: a goal, motivation, reinforcement, achievement",
        "Instructor gains: assessment, course validation, feedback",
      ],
      concept: "effectiveness",
      src: P(24, "Testing the effectiveness; p.84 answer 14"),
    },
    {
      icon: "📋",
      kicker: "Stage 3",
      title: "What assessors look for",
      list: [
        "Learning climate and rapport; a clear lesson plan",
        "Instruction matched to ability; faults identified and analysed",
        "Feedback: one changeable behaviour at a time, timely, supportive",
        "Clear, accurate information; a proper wrap-up",
      ],
      concept: "stage3",
      src: P(24, "Assessment areas; p.25"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   2. QUICK RECALL — post-test questions with model answers from page 84.
   --------------------------------------------------------------------------- */
const recall = {
  id: "recall",
  kind: "items",
  mode: "recall",
  title: "Quick Recall",
  blurb: "Flash cards, true or false, fill the gap",
  xpPer: 10,
  items: [
    { id: "r1", type: "flash", concept: "why-test",
      front: "What is the purpose of an educational test?",
      back: "To test the effectiveness of teaching and learning and assess attainment of course objectives.", src: P(84, "Post test answer 1") },
    { id: "r2", type: "fill", concept: "types", visual: "test-timeline",
      before: "A diagnostic test detects areas of", after: "in a pupil's knowledge.",
      options: ["weakness", "strength", "interest", "attitude"], answer: "weakness",
      explain: "Then you can target the teaching.", src: P(84, "Post test answer 3") },
    { id: "r3", type: "flash", concept: "types",
      front: "What is a pre-test for?",
      back: "To find out what a pupil knows already before instruction begins.", src: P(84, "Post test answer 4") },
    { id: "r4", type: "flash", concept: "types",
      front: "What is a retention test for?",
      back: "To find out how much previously learned material can be recalled or demonstrated.", src: P(84, "Post test answer 6") },
    { id: "r5", type: "flash", concept: "timing",
      front: "When should post-tests and retention tests be given?",
      back: "Post-test immediately after instruction; retention test at a later date.", src: P(84, "Post test answer 7") },
    { id: "r6", type: "fill", concept: "critical", visual: "must-should-could",
      before: "'Critical' material is what the pupil", after: "know to achieve the course objectives.",
      options: ["MUST", "COULD", "SHOULD", "MIGHT"], answer: "MUST",
      explain: "Important = should; relevant = could.", src: P(84, "Post test answer 8") },
    { id: "r7", type: "flash", concept: "valid-reliable", visual: "valid-reliable",
      front: "What is the 'validity' of a test?",
      back: "The degree to which it measures what it was intended to test.", src: P(84, "Post test answer 9") },
    { id: "r8", type: "flash", concept: "valid-reliable",
      front: "What is the 'reliability' of a test?",
      back: "The degree to which it consistently measures what it was intended to measure.", src: P(84, "Post test answer 10") },
    { id: "r9", type: "truefalse", concept: "referencing", visual: "norm-criterion",
      statement: "The driving test is norm-referenced.", answer: false,
      explain: "Criterion-referenced: reach a minimum standard to pass.", src: P(84, "Post test answers 11, 12") },
    { id: "r10", type: "flash", concept: "effectiveness",
      front: "What is a person's aptitude?",
      back: "Their inherent natural ability to learn a particular skill or type of knowledge.", src: P(84, "Post test answer 15") },
  ],
};

/* ---------------------------------------------------------------------------
   3. TEST THE TEST — recognition.
   --------------------------------------------------------------------------- */
const tests = {
  id: "tests",
  kind: "items",
  mode: "matching",
  title: "Test the Test",
  blurb: "Spot it, sort it — test types and design",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "types",
      prompt: "Which picture shows when each test is given?",
      options: ["test-timeline", "norm-criterion", "valid-reliable"], answer: 0,
      names: ["Test timeline", "Norm vs criterion", "Valid and reliable"],
      explain: "Pre, diagnostic, post, retention.", src: P(22, "Types of tests") },
    {
      id: "k2", type: "sort", concept: "types",
      prompt: "Which test?",
      categories: [
        { id: "pre", label: "Pre-test" },
        { id: "post", label: "Post-test" },
        { id: "ret", label: "Retention" },
      ],
      cards: [
        { text: "'Show me what you know about roundabouts' before teaching them", cat: "pre" },
        { text: "Quiz at the end of today's roundabout lesson", cat: "post" },
        { text: "Roundabout questions two weeks later", cat: "ret" },
        { text: "Checking last month's reversing still holds up", cat: "ret" },
      ],
      explain: "Before, straight after, and later.", src: P(22, "Pre-tests; p.23") },
    { id: "k3", type: "picture", label: "Spot it", concept: "valid-reliable",
      prompt: "Which picture shows what makes a test useful?",
      options: ["must-should-could", "valid-reliable"], answer: 1,
      names: ["Must-should-could", "Valid and reliable"],
      explain: "Both valid and reliable.", src: P(23, "Design of tests") },
    {
      id: "k4", type: "sort", concept: "critical",
      prompt: "For a 'moving off' objective, how much does this matter?",
      categories: [
        { id: "must", label: "Must" },
        { id: "could", label: "Could" },
      ],
      cards: [
        { text: "Mirrors and blind spot before moving", cat: "must" },
        { text: "How the clutch plates are made", cat: "could" },
        { text: "Signal if it would help others", cat: "must" },
        { text: "The history of the car", cat: "could" },
      ],
      explain: "Critical material must be known to meet the objective.", src: P(23, "Relevant – Important – Critical") },
    {
      id: "k5", type: "sort", concept: "referencing",
      prompt: "Norm or criterion?",
      categories: [
        { id: "norm", label: "Norm" },
        { id: "crit", label: "Criterion" },
      ],
      cards: [
        { text: "A fixed proportion of candidates pass", cat: "norm" },
        { text: "The driving test", cat: "crit" },
        { text: "Reach a minimum standard", cat: "crit" },
        { text: "Pass mark may vary year to year", cat: "norm" },
      ],
      explain: "Practical exams are mainly criterion-referenced.", src: P(24, "Norm; Criterion referencing") },
    { id: "k6", type: "picture", label: "Spot it", concept: "referencing",
      prompt: "Which picture explains how the driving test is marked?",
      options: ["norm-criterion", "test-timeline"], answer: 0,
      names: ["Norm vs criterion", "Test timeline"],
      explain: "A fixed standard — criterion-referenced.", src: P(24, "Criterion referencing") },
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
  blurb: "Tests and their purpose",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "types", visual: "test-timeline",
      prompt: "Match the test to its purpose.",
      pairs: [
        ["Prerequisite", "Suitability for a course"],
        ["Diagnostic", "Find areas of weakness"],
        ["Attainment", "Average of a large group"],
        ["Pre-test", "What's already known"],
        ["Retention", "Recall at a later date"],
      ],
      explain: "Instructors mostly use diagnostic, pre, post and retention tests.", src: P(22, "Types of tests; p.23") },
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
  blurb: "Testing through a topic",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "timing", visual: "test-timeline",
      prompt: "Testing a topic — in order.",
      steps: ["Pre-test: what do they know?", "Instruction", "Post-test: straight after", "Retention test: a later lesson"],
      explain: "Then you can truly judge how much learning took place.", src: P(24, "Testing the effectiveness of instruction") },
    { id: "p2", type: "order", concept: "critical", visual: "must-should-could",
      prompt: "Priority when designing a test — highest first.",
      steps: ["Critical — must know", "Important — should know", "Relevant — could know"],
      explain: "Test what the pupil MUST know first.", src: P(23, "Relevant – Important – Critical") },
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
  blurb: "Testing in real lessons",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "timing",
      scene: "🔁 Your pupil nailed the bay park last week but can't do it today.",
      prompt: "What's the message for you?",
      options: ["They're not trying", "Recapitulate more and use retention tests", "Move on to new topics", "Book the test"], answer: 1,
      explain: "Learning fast but forgetting means more recap.", src: P(24, "Testing the effectiveness of instruction") },
    { id: "s2", type: "choice", label: "Scenario", concept: "types",
      scene: "🧑 A new pupil says they've driven on farm roads for years.",
      prompt: "First step?",
      options: ["Start from lesson one", "A pre-test drive to find out what they already know", "Book the driving test", "An attainment test"], answer: 1,
      explain: "Then plan from the known to the unknown.", src: P(27, "Retention Q4 (answer d, p.87)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "valid-reliable",
      scene: "🙄 'I don't need to see him reverse — last time he was hopeless,' says a colleague.",
      prompt: "What's wrong with that?",
      options: ["Nothing", "It's subjective pre-judgement — the assessment isn't reliable", "It saves time", "It's a valid test"], answer: 1,
      explain: "The examiner must be objective.", src: P(23, "Objective") },
    { id: "s4", type: "choice", label: "Scenario", concept: "effectiveness",
      scene: "📊 A colleague boasts a 95% pass rate.",
      prompt: "Does that prove they're a good instructor?",
      options: ["Yes", "Not necessarily — it may reflect who they teach", "Only if over 50 pupils", "Yes, if they're fast"], answer: 1,
      explain: "Be self-critical and look for ways to improve.", src: P(24, "Testing the effectiveness of instruction") },
    { id: "s5", type: "choice", label: "Scenario", concept: "timing",
      scene: "📣 You want your pupil to concentrate on today's junction lesson.",
      prompt: "What helps?",
      options: ["Say nothing about testing", "Tell them at the start there'll be a short test at the end", "Promise a free lesson", "Make it longer"], answer: 1,
      explain: "They're likely to pay more attention.", src: P(84, "Post test answer 13") },
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
  blurb: "Designing a test",
  xpPer: 10,
  situation: "📝 You're building a short test on 'approaching a stop sign' for your pupil.",
  items: [
    { id: "w1", type: "choice", step: "Content", concept: "valid-reliable", prompt: "To be valid, the test must…",
      options: ["Be long", "Match the lesson objectives", "Include motorway rules", "Be oral only"], answer: 1,
      explain: "It must measure what it was designed to test.", src: P(23, "Validity of tests") },
    { id: "w2", type: "choice", step: "Priority", concept: "critical", prompt: "'Stop at the line, even if the road looks clear' is…",
      options: ["Relevant", "Important", "Critical", "Optional"], answer: 2,
      explain: "It MUST be known.", src: P(23, "Critical") },
    { id: "w3", type: "choice", step: "Marking", concept: "valid-reliable", prompt: "To make it reliable, you…",
      options: ["Mark by feel", "Set a clear pass standard and mark objectively", "Mark harder for weaker pupils", "Skip marking"], answer: 1,
      explain: "A reliable test needs a built-in measure of a pass.", src: P(23, "Reliability of tests") },
    { id: "w4", type: "choice", step: "Timing", concept: "timing", prompt: "You give it…",
      options: ["Immediately after the lesson — a post-test", "Before ever teaching it", "Never", "Only in the driving test"], answer: 0,
      explain: "And a retention test a week later.", src: P(84, "Post test answer 7") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 87. Q3 is omitted (see header).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(27, `Retention test Q${n}; answer p.87`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "To be useful to pupil and instructor, any test must be", ["valid but not necessarily reliable", "reliable but not necessarily valid", "both valid and reliable", "reliable only"], 2, "valid-reliable", "valid-reliable"),
    R(2, "A test shown to effectively measure the knowledge or skill it was designed to test is", ["valid", "reliable", "both valid and reliable", "diagnostic"], 0, "valid-reliable"),
    R(4, "A pre-test of what the pupil already knows is best given", ["at a rest stop part way through", "immediately after the briefing", "at the end of the lesson", "at the beginning of the lesson"], 3, "types"),
    R(5, "Material the pupil must know to achieve the course objectives is", ["extra-curricular", "relevant", "important", "critical"], 3, "critical", "must-should-could"),
    R(6, "The reliability of a test may be defined as", ["the degree to which it measures what it's intended to", "the consistency with which it measures what it's intended to", "the degree of subjective judgement", "how easily the instructor can use it"], 1, "valid-reliable"),
    R(7, "Assessing a candidate's driving, the tester will use", ["objective judgements", "subjective judgements", "adjective judgements", "indeterminate judgements"], 0, "referencing"),
    R(8, "The driving test is the type of test known as", ["norm-referenced", "criterion-referenced", "validity-referenced", "subjective"], 1, "referencing", "norm-criterion"),
    R(9, "An aptitude test could be used to determine a new pupil's", ["fundamental ability to perform a task or skill", "feelings towards other road users", "existing driving knowledge", "general intelligence"], 0, "effectiveness"),
    R(10, "To evaluate whether your tuition is effective within a lesson, apply both", ["aptitude and diagnostic tests", "pre- and post-tests", "pre-tests and retention tests", "diagnostic and retention tests"], 1, "timing", "test-timeline"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "types",
      prompt: "The eyesight test before a learner permit is a…", options: ["Diagnostic test", "Prerequisite test", "Retention test", "Attainment test"], answer: 1,
      explain: "It decides suitability for a course.", src: P(22, "Prerequisite tests") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "critical",
      prompt: "Which picture shows how to prioritise test content?", options: ["must-should-could", "test-timeline", "valid-reliable"], answer: 0,
      names: ["Must-should-could", "Test timeline", "Valid and reliable"],
      explain: "Critical, important, relevant.", src: P(23, "Relevant – Important – Critical") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "valid-reliable",
      statement: "A reliable test measures what it's meant to consistently.", answer: true,
      explain: "Valid = measures the right thing; reliable = consistently.", src: P(23, "Reliability of tests") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "types",
      scene: "🧭 Your pupil keeps struggling at junctions and you're not sure why.",
      prompt: "Which test helps?", options: ["Attainment test", "Diagnostic test", "Norm-referenced test", "Prerequisite test"], answer: 1,
      explain: "It detects areas of weakness.", src: P(22, "Diagnostic tests") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "critical",
      prompt: "Match it.", pairs: [["Critical", "Must know"], ["Important", "Should know"], ["Relevant", "Could know"]],
      explain: "Priority for test design.", src: P(23, "Relevant – Important – Critical") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "timing",
      prompt: "In order:", steps: ["Pre-test", "Teach", "Post-test", "Retention test"],
      explain: "Judge real learning.", src: P(24, "Testing the effectiveness") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "referencing",
      scene: "📉 A pupil worries 'they only pass a set number each day'.",
      prompt: "What do you say?", options: ["True — it's a quota", "No — it's criterion-referenced: reach the standard and you pass", "Only on Fridays", "It depends on the tester's mood"], answer: 1,
      explain: "Marked objectively against a fixed standard.", src: P(24, "Criterion referencing") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "valid-reliable",
      prompt: "A useful test must be…", options: ["Valid only", "Reliable only", "Both valid and reliable", "Long"], answer: 2,
      explain: "Both.", src: P(27, "Retention Q1 (answer c, p.87)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "valid-reliable",
      prompt: "Your test gives different marks for the same drive. Which picture shows the problem?", options: ["valid-reliable", "norm-criterion"], answer: 0,
      names: ["Valid and reliable", "Norm vs criterion"],
      explain: "It isn't reliable.", src: P(23, "Reliability of tests") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "timing",
      prompt: "To check tuition is effective within a lesson, use…", options: ["Aptitude and diagnostic tests", "Pre- and post-tests", "Pre- and retention tests", "Diagnostic and retention tests"], answer: 1,
      explain: "Before and immediately after.", src: P(27, "Retention Q10 (answer b, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "4.3",
  number: "4.3",
  title: "Teaching & Testing",
  pages: [22, 27],
  intro: "Why test, the types of educational test, when to give them, validity and reliability, must-should-could, norm and criterion referencing, and what assessors look for.",
  objectives: [
    "Why educational testing is necessary",
    "The different types of tests and their purpose",
    "How to construct a test",
    "Validity and reliability in testing",
  ],
  objectivesSrc: P(22, "Objectives"),
  mcqLink: { sectionId: "adi.sec.pedagogy", label: "Teaching Ability – Pedagogy" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...tests, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "test-designer", icon: "📝", label: "Test Designer", rule: { activity: "tests", min: 100 } },
    { id: "assessment-specialist", icon: "🏆", label: "Assessment Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
