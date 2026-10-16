/*
  ===========================================================================
  BOOK 4 · UNIT 4.4 — PERCEPTION & LEARNING

  Source: "Theory Resource Workbook 4 of 4 — Instructional Techniques &
  Practices" (Driver Education Supplies), book pages 28–32: text pp.28–30,
  post test p.31 (model answers p.84), retention test p.32 (answers p.87,
  10 questions).

  All ten retention questions match the key and are used.

  Adapted for Ireland: the book's discrimination example contrasts warning
  "triangles" with prohibitory circles (the UK system). Irish warning signs
  are yellow diamonds, so the drawing and text use a diamond.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 4, unit: "4.4", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "perception": {
    title: "Perception",
    text: "Perception is the interpretation of information from the senses (the environment). To learn, the pupil must sense a stimulus — what the instructor says, demonstrates or shows — attend to it, and interpret it. Interpretation depends largely on past experience: new information is compared with what's already known, so two people may perceive the same situation differently. Check the pupil has interpreted the information correctly.",
    src: P(28, "Perception; p.84 answers 1, 2"),
  },
  "senses": {
    title: "Sensation",
    text: "We sense by sight, hearing, smell, taste and touch. Learner drivers perceive mainly through sight and hearing; sight is the most important — about 75% of information (hearing about 13%, touch, smell and taste about 12%). What we see is harder to ignore. So visual aids are highly recommended: a professional teaching aid with images or diagrams teaches better than a long explanation.",
    src: P(28, "Sensation; p.30 In summary; p.84 answer 6"),
  },
  "attention": {
    title: "Attention",
    text: "Attention is the selective focusing of the mind on a given situation (phenomenon). A pupil attends only while the lesson is more interesting than other stimuli — keep distractions to a minimum and use bright, large, colourful, realistic aids. Keep the pupil involved with questions so they apply their own knowledge. The overriding factor in paying attention is the person's state of alertness.",
    src: P(29, "Attention; p.84 answers 8, 9, 15"),
  },
  "overload": {
    title: "Overload and deprivation",
    text: "Too much detail, or stimulating one or several senses too much, causes sensory overload — loss of interest and concentration. Avoid it by keeping to the point: clear objectives, teach the 'critical' knowledge, avoid excessive repetition, and don't bury the core in 'important' and 'relevant' detail (KISS). Sensory deprivation is a lack of sensory information — a repetitive, monotone 'lecture' — leading to boredom; be enthusiastic and vary your methods.",
    src: P(29, "Attention; Sensory deprivation; p.84 answers 3–5"),
  },
  "discrimination": {
    title: "Discrimination",
    text: "Discrimination is the ability to detect the differences between two stimuli. People can interpret the same information differently. A learner may see a sign showing a bicycle and read a warning (expect cyclists) as a prohibition (no cycling), because the signs differ only in shape — and then not expect cyclists ahead.",
    src: P(29, "Discrimination; p.84 answer 10"),
  },
  "motivation": {
    title: "Motivation",
    text: "Motivation is the arousal, control and sustaining of behaviour needed to satisfy a need or achieve a goal. Intrinsic motivation comes from within — curiosity, challenge, desire to master a task — and leads to self-satisfaction. Extrinsic motivation comes from outside — praise, reward, recognition by the instructor, peers, family or employers, even fear of failure — and leads to achievements others can see. Incentives arouse interest and stimulate effort. Set tasks within the pupil's capability that still need effort: too easy slows learning and bores; too hard slows learning as the pupil resents failure.",
    src: P(29, "Motivation; p.30; p.84 answers 11–14"),
  },
  "memory": {
    title: "Memory",
    text: "Memory is short- and long-term; the brain selects what goes into long-term memory. A pupil is more likely to remember new information if it's used during the lesson. They learn best by trying a skill themselves — there's no better aid to memory than hands-on experience.",
    src: P(30, "Memory; p.84 answer 7"),
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
    "Sense → attend → interpret, using past experience",
    "Sight ≈ 75% of what we take in — use visual aids",
    "Too much = overload; too dull = deprivation",
  ],
  cards: [
    {
      icon: "🧠",
      kicker: "Perception",
      title: "Sense, attend, interpret",
      visual: "perception-steps",
      ask: {
        prompt: "What does interpreting new information depend on most?",
        options: ["Past experience", "The weather", "The car"],
        answer: 0,
      },
      list: [
        "The pupil senses a stimulus — what you say, do or show",
        "They attend to it, then interpret it",
        "New information is compared with what's already known",
        "Two people may perceive the same thing differently",
      ],
      concept: "perception",
      src: P(28, "Perception"),
    },
    {
      icon: "👁️",
      kicker: "Sensation",
      title: "Sight comes first",
      visual: "senses-share",
      list: [
        "Sight about 75%, hearing 13%, touch, smell, taste 12%",
        "What we see is harder to ignore",
        "Use professional visual teaching aids",
      ],
      concept: "senses",
      src: P(28, "Sensation; p.30"),
    },
    {
      icon: "🔦",
      kicker: "Attention",
      title: "Keep it more interesting",
      list: [
        "Selective focusing of the mind on a situation",
        "Keep distractions to a minimum",
        "Bright, large, colourful, realistic aids",
        "Keep the pupil involved with questions",
      ],
      concept: "attention",
      src: P(29, "Attention"),
    },
    {
      icon: "🤯",
      kicker: "Overload / deprivation",
      title: "Keep to the point",
      visual: "overload-deprivation",
      list: [
        "Overload: too much detail or stimulation at once",
        "Fix: clear objectives, critical knowledge first — KISS",
        "Deprivation: a monotone 'lecture' — boredom",
        "Fix: enthusiasm and a variety of methods",
      ],
      concept: "overload",
      src: P(29, "Attention; Sensory deprivation"),
    },
    {
      icon: "🔍",
      kicker: "Discrimination",
      title: "Spot the difference",
      visual: "sign-discrimination",
      list: [
        "The ability to detect differences between two stimuli",
        "A bicycle in a diamond: warning — expect cyclists",
        "A bicycle in a red circle: prohibition",
        "Misreading the shape changes what the learner expects",
      ],
      concept: "discrimination",
      src: P(29, "Discrimination"),
    },
    {
      icon: "🔥",
      kicker: "Motivation",
      title: "Inside and outside",
      visual: "motivation-types",
      list: [
        "Intrinsic: curiosity, challenge, mastery — self-satisfaction",
        "Extrinsic: praise, reward, peers, family — visible achievement",
        "Tasks within their capability, but needing effort",
        "Too easy bores; too hard breeds resentment",
      ],
      concept: "motivation",
      src: P(29, "Motivation; p.30"),
    },
    {
      icon: "💾",
      kicker: "Memory",
      title: "Hands-on sticks",
      list: [
        "Short- and long-term memory",
        "Information used during the lesson is remembered better",
        "Best aid to memory: trying it for themselves",
      ],
      concept: "memory",
      src: P(30, "Memory"),
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
    { id: "r1", type: "flash", concept: "perception",
      front: "What is 'perception'?",
      back: "The interpretation of information from the person's surroundings.", src: P(84, "Post test answer 1") },
    { id: "r2", type: "flash", concept: "perception",
      front: "How does perception depend on experience?",
      back: "Information from the senses can only be interpreted by comparing it with past experience.", src: P(84, "Post test answer 2") },
    { id: "r3", type: "flash", concept: "overload", visual: "overload-deprivation",
      front: "What is 'sensory overload'?",
      back: "Excessive inputs to one or more senses.", src: P(84, "Post test answer 3") },
    { id: "r4", type: "flash", concept: "overload",
      front: "What is 'sensory deprivation', and what does it lead to?",
      back: "A lack of sensory information, leading to boredom and loss of interest.", src: P(84, "Post test answer 5") },
    { id: "r5", type: "fill", concept: "senses", visual: "senses-share",
      before: "About", after: "of what a pupil learns comes through sight.",
      options: ["75%", "13%", "50%", "25%"], answer: "75%",
      explain: "About three quarters.", src: P(84, "Post test answer 6") },
    { id: "r6", type: "flash", concept: "memory",
      front: "How is a pupil most likely to remember a new driving task?",
      back: "By trying the task for themselves.", src: P(84, "Post test answer 7") },
    { id: "r7", type: "flash", concept: "attention",
      front: "What is 'attention'?",
      back: "The selective focusing of the mind on a given phenomenon.", src: P(84, "Post test answer 8") },
    { id: "r8", type: "flash", concept: "discrimination", visual: "sign-discrimination",
      front: "What is 'discrimination'?",
      back: "The ability to detect differences between two stimuli.", src: P(84, "Post test answer 10") },
    { id: "r9", type: "fill", concept: "motivation", visual: "motivation-types",
      before: "Motivation that leads to self-satisfaction is", after: ".",
      options: ["intrinsic", "extrinsic", "sensory", "visual"], answer: "intrinsic",
      explain: "Extrinsic leads to achievements others can see.", src: P(84, "Post test answers 13, 14") },
    { id: "r10", type: "fill", concept: "attention",
      before: "The overriding factor in paying attention is the person's state of", after: ".",
      options: ["alertness", "health", "wealth", "mind"], answer: "alertness",
      explain: "A tired pupil can't attend well.", src: P(84, "Post test answer 15") },
  ],
};

/* ---------------------------------------------------------------------------
   3. MIND GAMES — recognition.
   --------------------------------------------------------------------------- */
const mind = {
  id: "mind",
  kind: "items",
  mode: "matching",
  title: "Mind Games",
  blurb: "Spot it, sort it — senses, motivation, overload",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "senses",
      prompt: "Which picture shows why visual aids work?",
      options: ["senses-share", "perception-steps", "motivation-types"], answer: 0,
      names: ["Senses", "Perception", "Motivation"],
      explain: "Sight accounts for about 75%.", src: P(28, "Sensation") },
    {
      id: "k2", type: "sort", concept: "motivation",
      prompt: "Intrinsic or extrinsic?",
      categories: [
        { id: "in", label: "Intrinsic" },
        { id: "ex", label: "Extrinsic" },
      ],
      cards: [
        { text: "Wants to master the skill", cat: "in" },
        { text: "Parents promised a car if she passes", cat: "ex" },
        { text: "Curious how the gears work", cat: "in" },
        { text: "Afraid of losing face with friends", cat: "ex" },
        { text: "Your praise for a good junction", cat: "ex" },
      ],
      explain: "Intrinsic comes from within.", src: P(29, "Intrinsic; Extrinsic motivation") },
    { id: "k3", type: "picture", label: "Spot it", concept: "discrimination",
      prompt: "Which picture shows 'discrimination'?",
      options: ["overload-deprivation", "sign-discrimination"], answer: 1,
      names: ["Overload", "Sign shapes"],
      explain: "Detecting the difference between two stimuli.", src: P(29, "Discrimination") },
    {
      id: "k4", type: "sort", concept: "overload",
      prompt: "Overload or deprivation?",
      categories: [
        { id: "over", label: "Overload" },
        { id: "dep", label: "Deprivation" },
      ],
      cards: [
        { text: "Ten points explained at once", cat: "over" },
        { text: "A long monotone talk", cat: "dep" },
        { text: "Radio, diagram and commentary together", cat: "over" },
        { text: "Same drill repeated for an hour", cat: "dep" },
      ],
      explain: "Too much vs too little stimulation.", src: P(29, "Attention; Sensory deprivation") },
    { id: "k5", type: "picture", label: "Spot it", concept: "perception",
      prompt: "Which picture shows how a pupil takes in a new idea?",
      options: ["perception-steps", "senses-share"], answer: 0,
      names: ["Perception", "Senses"],
      explain: "Sense, attend, interpret.", src: P(28, "Perception") },
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
  blurb: "Terms and meanings",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "perception",
      prompt: "Match the term to its meaning.",
      pairs: [
        ["Perception", "Interpreting information from the senses"],
        ["Attention", "Selective focusing of the mind"],
        ["Discrimination", "Detecting differences between stimuli"],
        ["Motivation", "Sustaining behaviour to reach a goal"],
        ["Sensory overload", "Too many inputs at once"],
      ],
      explain: "The vocabulary of learning.", src: P(28, "Summaries; p.29") },
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
  blurb: "From stimulus to memory",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "perception", visual: "perception-steps",
      prompt: "Learning something new — in order.",
      steps: ["Sense the stimulus", "Attend to it", "Interpret it against past experience", "Use it in the lesson", "Store it in memory"],
      explain: "Information used during the lesson is remembered better.", src: P(28, "Perception; p.30 Memory") },
    { id: "p2", type: "order", concept: "senses", visual: "senses-share",
      prompt: "Senses by share of information — largest first.",
      steps: ["Sight (75%)", "Hearing (13%)", "Touch, smell and taste (12%)"],
      explain: "Sight is the most important sense.", src: P(30, "In summary") },
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
  blurb: "Keeping pupils learning",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "overload", visual: "overload-deprivation",
      scene: "🤯 Your roundabout briefing runs 15 minutes and the pupil's eyes glaze over.",
      prompt: "Likely cause and fix?",
      options: ["Deprivation — add more detail", "Overload — keep to the point and teach the critical parts", "Tiredness — stop the lesson", "The diagram — don't use one"], answer: 1,
      explain: "Too much detail causes loss of interest.", src: P(32, "Retention Q9 (answer a, p.87)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "senses", visual: "senses-share",
      scene: "🗣️ You're explaining lane positions at a junction using words only.",
      prompt: "What would help most?",
      options: ["Say it louder", "Show a clear visual teaching aid", "Repeat it three times", "Write notes"], answer: 1,
      explain: "About 75% of information comes through sight.", src: P(32, "Retention Q10 (answer a, p.87)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "motivation",
      scene: "🐢 Your slow learner breezes through every task you set.",
      prompt: "What's the risk?",
      options: ["None", "Tasks too easy slow progress and bore them", "They'll fear failure", "You'll earn more"], answer: 1,
      explain: "Set tasks within capability that still need effort.", src: P(32, "Retention Q3 (answer a, p.87)") },
    { id: "s4", type: "choice", label: "Scenario", concept: "discrimination", visual: "sign-discrimination",
      scene: "🚲 Your pupil says a cycle warning sign means 'no bikes allowed'.",
      prompt: "What's happened?",
      options: ["A discrimination error — explain the shapes", "Overload", "A memory test", "Nothing"], answer: 0,
      explain: "They haven't detected the difference in shape.", src: P(29, "Discrimination") },
    { id: "s5", type: "choice", label: "Scenario", concept: "memory",
      scene: "🅿️ You demonstrated parallel parking perfectly. Next week the pupil can't remember it.",
      prompt: "What should you have done?",
      options: ["Demonstrated twice", "Let them practise it themselves in the lesson", "Given notes", "Talked more"], answer: 1,
      explain: "No better aid to memory than hands-on experience.", src: P(30, "Memory") },
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
  blurb: "Teaching hazard signs",
  xpPer: 10,
  situation: "🪧 Your lesson today: recognising warning and regulatory signs.",
  items: [
    { id: "w1", type: "choice", step: "Start", concept: "perception", prompt: "First, you find out…",
      options: ["What signs the pupil already knows", "Nothing — start at the top", "Their exam results", "Their favourite colour"], answer: 0,
      explain: "New information is compared with past experience.", src: P(28, "Perception") },
    { id: "w2", type: "choice", step: "Method", concept: "senses", prompt: "Best way to present them?",
      options: ["A clear visual aid of the signs", "A long verbal list", "Copying notes", "A radio quiz"], answer: 0,
      explain: "Sight is the most important sense.", src: P(28, "Sensation") },
    { id: "w3", type: "choice", step: "Pace", concept: "overload", prompt: "How many signs at a time?",
      options: ["All of them", "A few, keeping to the point", "One a lesson", "As many as fit"], answer: 1,
      explain: "Avoid sensory overload.", src: P(29, "Attention") },
    { id: "w4", type: "choice", step: "Practice", concept: "memory", prompt: "To make it stick, the pupil…",
      options: ["Spots and names signs on a real drive", "Reads about them at home", "Watches you point", "Memorises a list"], answer: 0,
      explain: "Information used during the lesson is remembered.", src: P(30, "Memory") },
    { id: "w5", type: "choice", step: "Praise", concept: "motivation", prompt: "They name every sign. Your praise is…",
      options: ["Extrinsic motivation", "Intrinsic motivation", "Sensory overload", "Discrimination"], answer: 0,
      explain: "It comes from outside the pupil.", src: P(29, "Extrinsic motivation") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 87. All ten are used.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(32, `Retention test Q${n}; answer p.87`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "Sensation, perception and thought relate to which educational domain?", ["psychomotor", "cognitive", "perceptive", "affective"], 1, "perception"),
    R(2, "Perception is best described as the process by which a learner", ["receives and interprets information from the environment", "attends to information from the instructor", "distinguishes between stimuli", "gets to know the instructor"], 0, "perception", "perception-steps"),
    R(3, "If an instructor regularly sets objectives a slow learner achieves easily, this is likely to", ["slow the learner's progress", "make the pupil work harder", "increase fear of failure", "earn more without affecting performance"], 0, "motivation"),
    R(4, "Perception may be an active process in which the pupil's responses to stimuli are affected by", ["novel situations", "past experience", "precise instruction", "the surprise factor"], 1, "perception"),
    R(5, "An instructor uses a good diagram for new material but concentration soon weakens. The instructor should consider that", ["the diagram is a hindrance", "too much emphasis is on the objective", "the explanation may contain excessive detail", "the pupils should try another school"], 2, "overload"),
    R(6, "Discrimination refers to a pupil's ability to", ["tell red from white", "detect the difference between two stimuli", "focus on one distant object", "appreciate the instructor"], 1, "discrimination", "sign-discrimination"),
    R(7, "A pupil may be strongly motivated to learn to drive if", ["they fear losing face with their peer group if they fail", "their peers don't care if they pass", "they fear the instructor", "they can't afford a car"], 0, "motivation"),
    R(8, "A pupil will devote more attention to what the instructor says if", ["they're interested", "there are no distractions outside", "they like the instructor", "they dislike the instructor"], 0, "attention"),
    R(9, "Excessive detail in briefings and regularly bored pupils suggest", ["sensory overload", "sensory deprivation", "sensory perception", "insensitive feelings"], 0, "overload", "overload-deprivation"),
    R(10, "Learners are most likely to perceive driving information presented with", ["good visual information and presentation", "lengthy explanation", "a brief verbal description", "copious notes"], 0, "senses", "senses-share"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "senses",
      prompt: "The most important sense for learning to drive is…", options: ["Hearing", "Touch", "Sight", "Smell"], answer: 2,
      explain: "About 75% of information.", src: P(28, "Sensation") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "overload",
      prompt: "Which picture shows the two ways a lesson loses a pupil?", options: ["overload-deprivation", "motivation-types", "sign-discrimination"], answer: 0,
      names: ["Overload vs deprivation", "Motivation", "Sign shapes"],
      explain: "Too much, or too dull.", src: P(29, "Attention; Sensory deprivation") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "motivation",
      statement: "Fear of failure can motivate a pupil.", answer: true,
      explain: "Like reward, it's an extrinsic motivator.", src: P(29, "Extrinsic motivation") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "attention",
      scene: "😴 Your 8 pm pupil had a 12-hour shift today.",
      prompt: "What's likely to limit their attention?", options: ["The car", "Their state of alertness", "The route", "Your voice"], answer: 1,
      explain: "Alertness is the overriding factor.", src: P(84, "Post test answer 15") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "motivation",
      prompt: "Match it.", pairs: [["Curiosity", "Intrinsic"], ["Parents' reward", "Extrinsic"], ["Too-easy tasks", "Slower learning"]],
      explain: "Set tasks that need some effort.", src: P(29, "Motivation; p.30") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "perception",
      prompt: "In order:", steps: ["Sense", "Attend", "Interpret"],
      explain: "Then compare with past experience.", src: P(28, "Perception") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "overload",
      scene: "📻 You're briefing a pupil while the radio plays and you point at a diagram.",
      prompt: "Risk?", options: ["Deprivation", "Sensory overload — turn the radio off", "None", "Discrimination"], answer: 1,
      explain: "Several senses stimulated together.", src: P(29, "Attention") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "discrimination",
      prompt: "Discrimination is the ability to…", options: ["Tell red from white", "Detect the difference between two stimuli", "Focus on one object", "Judge the instructor"], answer: 1,
      explain: "Important in perception.", src: P(32, "Retention Q6 (answer b, p.87)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "motivation",
      prompt: "Your pupil has lost interest. Which picture shows what drives effort?", options: ["motivation-types", "senses-share"], answer: 0,
      names: ["Motivation", "Senses"],
      explain: "Intrinsic and extrinsic motivators.", src: P(29, "Motivation") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "perception",
      prompt: "Responses to stimuli are affected by…", options: ["Novel situations", "Past experience", "Precise instruction", "Surprise"], answer: 1,
      explain: "Perception depends on experience.", src: P(32, "Retention Q4 (answer b, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "4.4",
  number: "4.4",
  title: "Perception & Learning",
  pages: [28, 32],
  intro: "How a pupil perceives, the senses, attention, sensory overload and deprivation, discrimination, motivation and memory.",
  objectives: [
    "Perception and the act of perceiving",
    "Attention in the learning process",
    "Intrinsic and extrinsic motivation",
    "Discrimination; the roles of sight, hearing and practice",
  ],
  objectivesSrc: P(28, "Objectives"),
  mcqLink: { sectionId: "adi.sec.pedagogy", label: "Teaching Ability – Pedagogy" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...mind, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "mind-reader", icon: "🧠", label: "Mind Reader", rule: { activity: "mind", min: 100 } },
    { id: "learning-specialist", icon: "🏆", label: "Learning Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
