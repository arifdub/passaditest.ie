/*
  ===========================================================================
  BOOK 4 · UNIT 4.7 — THE QUESTION-AND-ANSWER TECHNIQUE

  Source: "Theory Resource Workbook 4 of 4 — Instructional Techniques &
  Practices" (Driver Education Supplies), book pages 45–48: text pp.45–46,
  post test p.47 (model answers p.86), retention test p.48 (answers p.87,
  10 questions).

  All ten retention questions match the key and are used.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 4, unit: "4.7", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why-ask": {
    title: "Why ask questions",
    text: "A question is a statement designed to elicit a (verbal) response. Pupils may be intimidated by the instructor as expert; carefully chosen questions encourage them to develop their own ideas. Q&A is particularly recommended for driving instruction — plan time for questions and prepare key ones in advance. Questions stimulate interest, curiosity and thought; establish understanding, knowledge and attitudes; develop self-expression and self-confidence; encourage communication, involvement and attention; and prompt observation and thought. They arouse curiosity, establish what's known, save teaching time and get the pupil applying previous learning.",
    src: P(45, "The purpose of asking questions; p.86 answers 1, 3, 12"),
  },
  "when": {
    title: "When to ask",
    text: "Use questions at all stages to maintain interest and involvement. Introduction: diagnostic questions find weaknesses, stimulate interest and set the starting level. Development: questions prompt the pupil to apply what they know; encourage the pupil to ask you, so misunderstandings are corrected promptly. Conclusion: questions test what was learned and the effectiveness of the tuition. Also question after an explanation when the pupil's response or expression shows uncertainty. Q&A isn't a one-way street.",
    src: P(45, "When to use Q&A; p.46 After an explanation; p.86 answers 2, 14"),
  },
  "how": {
    title: "Clear, brief, specific",
    text: "Use simple, unambiguous language — brief and clear, avoiding technical terms and jargon. Avoid lengthy questions, questions beyond the pupil's knowledge (they feel insecure or demoralised), and random questions unrelated to the objective. Use a sequence of questions in a logical order to build an idea.",
    src: P(46, "Questions should be clear, brief and specific; p.86 answer 7"),
  },
  "types": {
    title: "Open and closed",
    text: "Closed questions have one correct answer — useful for checking recall of facts. Open questions have many possible answers and encourage thought, reasoning, evaluation and anticipation. Avoid yes/no questions — guesswork has a 50% chance — and elliptical (fill-in-the-word) questions, which need little effort.",
    src: P(46, "Use the correct type of question; p.86 answers 8–10, 13"),
  },
  "respond": {
    title: "Getting a response",
    text: "Ask in an encouraging manner; avoid threatening, very direct or personal questions. Allow time to answer — don't interrupt, finish their sentences, rush them or show impatience. Respond to answers with warmth and enthusiasm. Fear of reprisal, sarcasm or ridicule stops pupils answering.",
    src: P(46, "Getting the pupil to respond; p.86 answer 4"),
  },
  "answers": {
    title: "Handling answers",
    text: "Never ridicule a response. Partly right: praise the correct part. Totally wrong: build their knowledge with simpler questions or prompts leading to the right answer, keeping self-esteem; if that fails, tactfully correct. Didn't understand their answer: ask them to repeat it or go into more depth. To correct a response, repeat it slowly while expanding it to fill gaps. Simple recall for one pupil can be hard work for another. It's not the message given that matters but the message received.",
    src: P(46, "You must not ridicule; p.86 answers 5, 6, 11, 15"),
  },
  "qualities": {
    title: "The good instructor",
    text: "Knowledgeable, articulate, enthusiastic, encouraging, understanding, friendly, patient, confident, tolerant, approachable, personable, trusting, clean, dependable, reliable, honest, interesting and interested.",
    src: P(46, "The good instructor must be"),
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
    "Use questions at every stage of a lesson",
    "Open questions make them think; avoid yes/no",
    "Never ridicule — praise what's right, build the rest",
  ],
  cards: [
    {
      icon: "❓",
      kicker: "Why ask",
      title: "Get them thinking",
      ask: {
        prompt: "Why use Q&A at all stages of a lesson?",
        options: ["To fill time", "To keep the pupil interested and involved", "To test the instructor"],
        answer: 1,
      },
      list: [
        "A question is designed to elicit a response",
        "Arouses curiosity and finds out what's known",
        "Saves teaching time",
        "Develops self-expression and self-confidence",
      ],
      concept: "why-ask",
      src: P(45, "The purpose of asking questions; p.86"),
    },
    {
      icon: "⏱️",
      kicker: "When",
      title: "Every stage",
      visual: "qa-stages",
      list: [
        "Introduction: diagnostic — weak spots and starting level",
        "Development: apply what they know; let them ask you",
        "Conclusion: test what was learned",
        "Also when they look unsure after an explanation",
      ],
      concept: "when",
      src: P(45, "When to use Q&A"),
    },
    {
      icon: "🎯",
      kicker: "How",
      title: "Clear, brief, specific",
      list: [
        "Simple, unambiguous language — no jargon",
        "Not lengthy; not beyond their knowledge",
        "A logical sequence of questions builds an idea",
        "No random questions off the objective",
      ],
      concept: "how",
      src: P(46, "Questions should be clear, brief and specific"),
    },
    {
      icon: "🔓",
      kicker: "Types",
      title: "Open and closed",
      visual: "open-closed",
      list: [
        "Closed: one right answer — checks recall",
        "Open: many answers — thought and anticipation",
        "Avoid yes/no: a 50% guess",
        "Avoid 'fill in the missing word'",
      ],
      concept: "types",
      src: P(46, "Use the correct type of question"),
    },
    {
      icon: "⏳",
      kicker: "Getting a response",
      title: "Patience and warmth",
      visual: "answer-handling",
      list: [
        "Ask encouragingly; nothing threatening or personal",
        "Give them time; don't interrupt or finish their sentence",
        "Respond with warmth and enthusiasm",
        "Fear of ridicule stops answers",
      ],
      concept: "respond",
      src: P(46, "Getting the pupil to respond"),
    },
    {
      icon: "🪜",
      kicker: "Handling answers",
      title: "Build, don't belittle",
      list: [
        "Part right: praise the correct part",
        "Wrong: simpler questions leading to the answer",
        "Still wrong: tactfully correct",
        "Correct by repeating slowly and expanding",
      ],
      concept: "answers",
      src: P(46, "You must not ridicule; p.86"),
    },
    {
      icon: "🌟",
      kicker: "The good instructor",
      title: "Approachable and patient",
      list: [
        "Knowledgeable, articulate, enthusiastic",
        "Encouraging, patient, tolerant, approachable",
        "Honest, reliable, interesting — and interested",
      ],
      concept: "qualities",
      src: P(46, "The good instructor must be"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   2. QUICK RECALL — post-test questions with model answers from page 86.
   --------------------------------------------------------------------------- */
const recall = {
  id: "recall",
  kind: "items",
  mode: "recall",
  title: "Quick Recall",
  blurb: "Flash cards, true or false, fill the gap",
  xpPer: 10,
  items: [
    { id: "r1", type: "flash", concept: "why-ask",
      front: "What is a question?",
      back: "A statement designed to elicit a verbal response.", src: P(86, "Post test answer 1") },
    { id: "r2", type: "flash", concept: "why-ask",
      front: "What are the advantages of Q&A technique?",
      back: "It arouses curiosity and interest, establishes what's known, saves teaching time and gets the pupil applying previous learning.", src: P(86, "Post test answer 3") },
    { id: "r3", type: "flash", concept: "respond",
      front: "What would stop a pupil attempting an answer?",
      back: "Fear of reprisal, sarcastic remarks or ridicule.", src: P(86, "Post test answer 4") },
    { id: "r4", type: "flash", concept: "answers", visual: "answer-handling",
      front: "A pupil's answer is partly correct. What do you do first?",
      back: "Praise the correct part of the response.", src: P(86, "Post test answer 5") },
    { id: "r5", type: "flash", concept: "answers",
      front: "You don't understand a pupil's answer. What now?",
      back: "Ask them to repeat it or go into greater depth.", src: P(86, "Post test answer 6") },
    { id: "r6", type: "fill", concept: "types", visual: "open-closed",
      before: "A yes/no question can be answered by guesswork with a", after: "chance.",
      options: ["50%", "25%", "10%", "75%"], answer: "50%",
      explain: "So it tells you little.", src: P(86, "Post test answer 8") },
    { id: "r7", type: "fill", concept: "types",
      before: "Closed questions are useful for checking", after: "of facts.",
      options: ["recall", "evaluation", "anticipation", "reasoning"], answer: "recall",
      explain: "Open questions encourage thought and reasoning.", src: P(86, "Post test answers 9, 10") },
    { id: "r8", type: "flash", concept: "answers",
      front: "How do you handle a totally incorrect answer?",
      back: "Build their knowledge with simpler questions or prompts that lead to the correct response.", src: P(86, "Post test answer 11") },
    { id: "r9", type: "truefalse", concept: "types",
      statement: "Incomplete 'fill in the word' statements make good questions.", answer: false,
      explain: "They need little effort from the pupil.", src: P(86, "Post test answer 13") },
    { id: "r10", type: "flash", concept: "answers",
      front: "How should you correct a pupil's response?",
      back: "Repeat their answer slowly, expanding it to fill gaps in their knowledge.", src: P(86, "Post test answer 15") },
  ],
};

/* ---------------------------------------------------------------------------
   3. ASK IT RIGHT — recognition.
   --------------------------------------------------------------------------- */
const questions = {
  id: "questions",
  kind: "items",
  mode: "matching",
  title: "Ask It Right",
  blurb: "Spot it, sort it — question types and replies",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "types",
      prompt: "Which picture compares types of question?",
      options: ["open-closed", "qa-stages", "answer-handling"], answer: 0,
      names: ["Open vs closed", "Q&A stages", "Handling answers"],
      explain: "Closed: one answer. Open: many.", src: P(46, "Use the correct type") },
    {
      id: "k2", type: "sort", concept: "types",
      prompt: "Open or closed?",
      categories: [
        { id: "open", label: "Open" },
        { id: "closed", label: "Closed" },
      ],
      cards: [
        { text: "'What might that pedestrian do?'", cat: "open" },
        { text: "'What's the speed limit here?'", cat: "closed" },
        { text: "'How could you have handled that better?'", cat: "open" },
        { text: "'Which pedal is the clutch?'", cat: "closed" },
      ],
      explain: "Open questions encourage anticipation.", src: P(46, "Closed; Open questions") },
    {
      id: "k3", type: "sort", concept: "how",
      prompt: "Good question or poor?",
      categories: [
        { id: "good", label: "Good" },
        { id: "poor", label: "Poor" },
      ],
      cards: [
        { text: "'Do you understand?'", cat: "poor" },
        { text: "'The clutch is used to ___?'", cat: "poor" },
        { text: "'Why do we check the mirror before braking?'", cat: "good" },
        { text: "A question on motorways during a first lesson", cat: "poor" },
      ],
      explain: "Avoid yes/no, elliptical and out-of-scope questions.", src: P(46, "Questions should be clear, brief and specific") },
    { id: "k4", type: "picture", label: "Spot it", concept: "when",
      prompt: "Which picture shows when to ask questions?",
      options: ["answer-handling", "qa-stages"], answer: 1,
      names: ["Handling answers", "Q&A stages"],
      explain: "At every stage.", src: P(45, "When to use Q&A") },
    {
      id: "k5", type: "sort", concept: "respond",
      prompt: "Helps a pupil answer, or stops them?",
      categories: [
        { id: "help", label: "Helps" },
        { id: "stop", label: "Stops them" },
      ],
      cards: [
        { text: "Waiting patiently", cat: "help" },
        { text: "Finishing their sentence", cat: "stop" },
        { text: "A sarcastic remark", cat: "stop" },
        { text: "Warm, enthusiastic reply", cat: "help" },
      ],
      explain: "Fear of ridicule stops responses.", src: P(46, "Getting the pupil to respond") },
    { id: "k6", type: "picture", label: "Spot it", concept: "answers",
      prompt: "Which picture shows how to treat a pupil's answers?",
      options: ["answer-handling", "open-closed"], answer: 0,
      names: ["Handling answers", "Open vs closed"],
      explain: "Never ridicule.", src: P(46, "You must not ridicule") },
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
  blurb: "Answers and responses",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "answers",
      prompt: "Match the pupil's answer to your response.",
      pairs: [
        ["Partly correct", "Praise the correct part"],
        ["Totally wrong", "Simpler questions leading up"],
        ["Unclear to you", "Ask them to repeat or expand"],
        ["Still wrong after prompts", "Tactfully correct it"],
      ],
      explain: "Keep the pupil's self-esteem.", src: P(46, "You must not ridicule; p.86") },
    {
      id: "m2", type: "match", concept: "when",
      prompt: "Match the stage to the questions.",
      pairs: [
        ["Introduction", "Diagnostic questions"],
        ["Development", "Apply previous learning"],
        ["Conclusion", "Test what was learned"],
      ],
      explain: "Use Q&A at every stage.", src: P(45, "When to use Q&A") },
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
  blurb: "Building to the right answer",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "answers", visual: "answer-handling",
      prompt: "A pupil gives a totally wrong answer — in order.",
      steps: ["Don't ridicule", "Ask a simpler question", "Build up with further questions", "If still stuck, tactfully correct"],
      explain: "Their self-esteem is maintained.", src: P(46, "You must not ridicule") },
    { id: "p2", type: "order", concept: "respond",
      prompt: "Asking a question well — in order.",
      steps: ["Ask clearly and encouragingly", "Wait — allow time to respond", "Listen without interrupting", "Respond with warmth"],
      explain: "Don't rush or show impatience.", src: P(46, "Getting the pupil to respond") },
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
  blurb: "Q&A on the road",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "respond",
      scene: "🤔 You ask why we check mirrors before signalling. The pupil pauses for a long time.",
      prompt: "What do you do?",
      options: ["Repeat the question impatiently", "Allow them time to respond", "Answer it for them", "Move on"], answer: 1,
      explain: "Don't rush the pupil.", src: P(48, "Retention Q5 (answer c, p.87)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "answers",
      scene: "🚸 Asked about a zebra crossing, your pupil gets half of it right.",
      prompt: "Your first move?",
      options: ["Correct the wrong half", "Praise the correct part", "Ask someone else", "Laugh it off"], answer: 1,
      explain: "Then build on the rest.", src: P(86, "Post test answer 5") },
    { id: "s3", type: "choice", label: "Scenario", concept: "types",
      scene: "🗨️ You keep asking 'Do you understand?' and the pupil always says yes.",
      prompt: "The problem?",
      options: ["None", "Yes/no questions tell you little — ask open questions", "The pupil is lying", "Ask louder"], answer: 1,
      explain: "Guesswork gives a 50% chance.", src: P(46, "Avoid yes or no") },
    { id: "s4", type: "choice", label: "Scenario", concept: "when",
      scene: "📘 It's the start of the lesson and you want to know where to begin.",
      prompt: "Which questions?",
      options: ["Diagnostic questions", "Recap-the-test questions", "Random questions", "None"], answer: 0,
      explain: "They find weaknesses and the right starting level.", src: P(48, "Retention Q8 (answer b, p.87)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "how",
      scene: "🔧 A new pupil can't answer your question about engine braking ratios.",
      prompt: "What went wrong?",
      options: ["They're slow", "The question was beyond their knowledge — they may feel insecure", "Nothing", "Wrong car"], answer: 1,
      explain: "Pitch questions at a suitable level.", src: P(48, "Retention Q2 (answer c, p.87)") },
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
  blurb: "Questioning through a lesson",
  xpPer: 10,
  situation: "🔁 Today's lesson: roundabouts. You plan your key questions in advance.",
  items: [
    { id: "w1", type: "choice", step: "Opening", concept: "when", prompt: "Your first question checks…",
      options: ["What they already know about roundabouts", "The tester's name", "Their favourite car", "Nothing"], answer: 0,
      explain: "A diagnostic question.", src: P(45, "The introduction") },
    { id: "w2", type: "choice", step: "Building", concept: "how", prompt: "To build to 'lane choice', you use…",
      options: ["A sequence of questions in logical order", "Random questions", "One long question", "Demanding, complex questions"], answer: 0,
      explain: "Build on what's known.", src: P(48, "Retention Q7 (answer c, p.87)") },
    { id: "w3", type: "choice", step: "Thinking", concept: "types", prompt: "To get them anticipating, you ask…",
      options: ["'What might the car on the right do?'", "'Is that a roundabout?'", "'Yes or no?'", "'The exit is ___?'"], answer: 0,
      explain: "An open question.", src: P(46, "Open questions") },
    { id: "w4", type: "choice", step: "Their turn", concept: "when", prompt: "You invite them to ask you questions so that…",
      options: ["They can clear up misunderstandings", "You can show off", "They keep talking", "You get a break"], answer: 0,
      explain: "Q&A isn't a one-way street.", src: P(48, "Retention Q9 (answer c, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 87. All ten are used.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(48, `Retention test Q${n}; answer p.87`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "Question-and-answer technique in instruction is", ["not recommended for driving instructors", "only useful if prepared in advance", "suitable at all stages of a lesson", "inappropriate with older learners"], 2, "when", "qa-stages"),
    R(2, "Asking questions beyond the scope of a pupil's knowledge is likely to", ["show a high standard of instruction", "reassure them the instructor is proficient", "make the pupil feel intimidated and insecure", "boost confidence"], 2, "how"),
    R(3, "Simple questions needing little effort to answer", ["show a sympathetic instructor", "make the lesson enjoyable", "stimulate interest", "are unlikely to stimulate interest"], 3, "types"),
    R(4, "The main reason for using open questions is that", ["only yes or no is needed", "the pupil is encouraged to think about a problem and explain", "there's only one correct answer", "an incorrect answer can be accepted"], 1, "types", "open-closed"),
    R(5, "The pupil is taking some time to answer. The instructor should", ["show impatience by repeating the question", "start answering for them", "allow the pupil time to respond", "prompt with words and phrases"], 2, "respond", "answer-handling"),
    R(6, "Language used when asking a question should be", ["clear, specific and ambiguous", "clear and simple", "technical and unambiguous", "specific and technical"], 1, "how"),
    R(7, "To help a pupil fulfil an objective by building on what's known, use", ["diagnostic questioning", "demanding, complex questions", "a sequence of questions in a logical order", "random questions"], 2, "how"),
    R(8, "Questions at the start of a lesson relevant to the objective are best described as", ["multiple-response questioning", "diagnostic questioning", "closed session questioning", "recapitulation questioning"], 1, "when"),
    R(9, "Encouraging pupils to ask their instructor questions gives", ["the pupil a chance to talk", "the instructor a chance to show knowledge", "the pupil a chance to clear up misunderstandings", "the instructor a break"], 2, "when"),
    R(10, "The best way to put a question to a pupil is", ["firmly, for a prompt reply", "in a direct and personal manner", "in a friendly and encouraging manner", "in writing or with a visual aid"], 2, "respond"),
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
      prompt: "Open questions encourage…", options: ["Simple recall", "Thought, reasoning, evaluation and anticipation", "Yes/no answers", "Guessing"], answer: 1,
      explain: "Closed questions check recall.", src: P(86, "Post test answer 10") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "respond",
      prompt: "Which picture shows how to get a pupil answering?", options: ["answer-handling", "qa-stages", "open-closed"], answer: 0,
      names: ["Handling answers", "Q&A stages", "Open vs closed"],
      explain: "Encourage, wait, don't ridicule.", src: P(46, "Getting the pupil to respond") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "how",
      statement: "Questions should use simple, unambiguous language.", answer: true,
      explain: "Brief, clear, no jargon.", src: P(46, "Questions should be clear, brief and specific") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "answers",
      scene: "😬 A pupil gives a completely wrong answer about right of way.",
      prompt: "Best response?", options: ["'No, that's wrong'", "Simpler questions that lead them to the answer", "Laugh", "Ignore it"], answer: 1,
      explain: "Maintain self-esteem.", src: P(86, "Post test answer 11") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "types",
      prompt: "Match it.", pairs: [["Closed question", "One correct answer"], ["Open question", "Many possible answers"], ["Yes/no question", "50% guesswork"]],
      explain: "Use the right type for the response you want.", src: P(46, "Use the correct type") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "when",
      prompt: "Questions through a lesson:", steps: ["Diagnostic", "Apply what's known", "Test what was learned"],
      explain: "Introduction, development, conclusion.", src: P(45, "When to use Q&A") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "when",
      scene: "😕 After your explanation, the pupil frowns and hesitates.",
      prompt: "What now?", options: ["Carry on", "Ask a question to check understanding", "Repeat the explanation word for word", "End the lesson"], answer: 1,
      explain: "Their expression shows uncertainty.", src: P(46, "After an explanation has been given") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "respond",
      prompt: "The best way to put a question is…", options: ["Firmly", "Direct and personal", "Friendly and encouraging", "In writing"], answer: 2,
      explain: "Avoid threatening or personal questions.", src: P(48, "Retention Q10 (answer c, p.87)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "types",
      prompt: "You want your pupil to think ahead about hazards. Which picture shows the right question type?", options: ["open-closed", "answer-handling"], answer: 0,
      names: ["Open vs closed", "Handling answers"],
      explain: "Open questions encourage anticipation.", src: P(46, "Open questions") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "types",
      prompt: "Simple questions needing little effort are…", options: ["Sympathetic", "Enjoyable", "Stimulating", "Unlikely to stimulate interest"], answer: 3,
      explain: "Pitch questions at a suitable level.", src: P(48, "Retention Q3 (answer d, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "4.7",
  number: "4.7",
  title: "Question & Answer Technique",
  pages: [45, 48],
  intro: "Why and when to ask questions, how to word them, open and closed questions, getting a response and handling answers.",
  objectives: [
    "The meaning of a 'question'",
    "The purposes served by asking questions",
    "How questions may be classified",
    "Open and closed questions",
  ],
  objectivesSrc: P(45, "Objectives"),
  mcqLink: { sectionId: "adi.sec.pedagogy", label: "Teaching Ability – Pedagogy" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...questions, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "question-master", icon: "❓", label: "Question Master", rule: { activity: "questions", min: 100 } },
    { id: "qa-specialist", icon: "🏆", label: "Q&A Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
