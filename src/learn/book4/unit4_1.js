/*
  ===========================================================================
  BOOK 4 · UNIT 4.1 — COMMUNICATION

  Source: "Theory Resource Workbook 4 of 4 — Instructional Techniques &
  Practices" (Driver Education Supplies), book pages 7–16: text pp.7–14,
  post test p.15 (model answers p.83), retention test p.16 (answers p.87,
  10 questions).

  Omitted retention questions (answer key unsafe):
  - Q7 (using a pupil's natural curiosity, keyed a "suitable training aids
    and diagrams"): the text names question-and-answer technique AND
    demonstration materials, so c is equally defensible.

  The "45 hours of lessons and 20 hours of practice" figure is quoted as
  the book gives it ("more recent statistics"), not as an RSA rule.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 4, unit: "4.1", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "two-way": {
    title: "Two-way communication",
    text: "Communication is conveying your meaning to others by an interchange of experience. One-way communication sends a message with no way of checking it's understood. Teaching must be two-way: the instructor transmits, the pupil receives and interprets, and the instructor checks — by discussion or by watching the pupil's actions. The pupil must take part. Learning won't take place unless there's a response from the pupil — an action, gesture, facial expression or speech.",
    src: P(7, "Two-way communication; p.83 answer 1"),
  },
  "motivation": {
    title: "Motivation and behaviour",
    text: "Wanting to learn is motivation; a pupil only learns what they really want to. It's the message understood that matters, not the message given. Effectiveness is measured by observing results — a change in behaviour, meaning any activity of the pupil that can be observed: more skill at a task, or more knowledge. The purpose of communication is to promote a change in behaviour. Poor communication leads to mistakes, misunderstandings, lost time, dissatisfaction and lack of co-operation.",
    src: P(7, "Wanting to learn is known as motivation; p.83 answers 2–5"),
  },
  "non-verbal": {
    title: "Non-verbal signals",
    text: "Gestures and facial expressions add meaning to what is said. A pupil's face can show boredom, puzzlement or surprise — a glazed expression, down-turned eyes and fidgeting suggest boredom. The pupil also reads your expressions. Being sensitive to them tells you the pupil's attention span, mood and attitude to you.",
    src: P(7, "Non-verbal signals; p.83 answer 6"),
  },
  "nervousness": {
    title: "Nervousness",
    text: "A nervous instructor is an unprepared instructor: it stems from lack of knowledge, preparation and confidence. It may show as blushing, stumbling over words, irritating gestures and avoiding eye contact — and the pupil loses interest and confidence. With a nervous pupil, be sensitive and build confidence through encouragement; avoid 'Don't be nervous', which only points out you've noticed.",
    src: P(8, "Nervousness; p.83 answer 7"),
  },
  "rapport": {
    title: "Rapport",
    text: "Rapport is a professional relationship of mutual co-operation — respect, regard, concern and harmony. It's the instructor's responsibility: be firm, fair, warm and friendly, take a keen interest in the pupil's responses, listen carefully and encourage even when an answer is wrong. Never degrade, humiliate, or respond with sarcasm or impatience. Without rapport, learning is slower.",
    src: P(8, "Rapport; p.83 answers 8, 9"),
  },
  "attention": {
    title: "Attention and stimuli",
    text: "Ways of attracting attention are stimuli: your voice, your actions, teaching aids and diagrams. Use stimuli interesting enough to displace distractions; professional teaching aids beat scribbles on scraps of paper. Attention peaks at the start of a lesson — set a challenging, interesting objective then. Go from the known to the unknown, keeping interest with question-and-answer and demonstration materials.",
    src: P(8, "Making communication work; Attention"),
  },
  "feedback": {
    title: "Feedback",
    text: "Feedback is a two-way process in which the pupil is rewarded for effort and attainment while the instructor establishes that the lesson objectives are being met. From the instructor: praise for a correct response or task. From the pupil: actions or replies to your questions or directions.",
    src: P(8, "Feedback; p.83 answer 10"),
  },
  "barriers": {
    title: "Barriers to communication",
    text: "Extrinsic (external) barriers: noise, the way the instructor speaks, activity outside, objects and activity inside the car. Intrinsic (internal) barriers: the pupil's attitudes, feelings, emotions and thoughts about the instructor, the lesson content or unrelated matters.",
    src: P(8, "Barriers to communication"),
  },
  "role": {
    title: "The instructor's role",
    text: "Teach others to drive safely and pass the test, following a syllabus while adapting to each pupil's attitude, aptitude and ability. Plan lessons, demonstrate, correct and advise on errors, keep EDT and lesson records, use dual controls only when needed (and explain why), and keep up with CPD. Only RSA-approved ADIs can deliver and record EDT in the logbook. A sponsor must have held a full licence for at least two years; giving tuition for reward without being an ADI is illegal.",
    src: P(9, "The role of a driving instructor; p.10 EDT"),
  },
  "professional": {
    title: "First impressions and professionalism",
    text: "People judge each other within a minute, and first impressions last. Dress smartly and comfortably — nothing that restricts a quick move. Be well groomed; keep the car tidy and ask if the pupil is comfortable. Keep greetings brief. Ask how the pupil would like to be called. No personal or intimate questions; talk to them, not at them; teach from the known to the unknown. Never criticise other ADIs or discuss other pupils. Don't take phone calls during a lesson.",
    src: P(12, "Making first impressions count; p.13; p.14 Business contact"),
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
    "Teaching is TWO-way — no response, no learning",
    "Measure communication by a change in behaviour",
    "Rapport: firm, fair, warm and friendly",
  ],
  cards: [
    {
      icon: "🔁",
      kicker: "Two-way",
      title: "No response, no learning",
      visual: "two-way-comm",
      ask: {
        prompt: "How do you know a message got through?",
        options: ["You said it clearly", "The pupil responds — by action, gesture or speech", "The pupil stays quiet"],
        answer: 1,
      },
      list: [
        "One-way: no check the message was understood",
        "Two-way: instructor transmits, pupil interprets, instructor checks",
        "A response can be an action, gesture, expression or speech",
        "Keep attention with forward Q&A: 'What if…?'",
      ],
      concept: "two-way",
      src: P(7, "Two-way communication"),
    },
    {
      icon: "🎯",
      kicker: "Motivation",
      title: "The message understood",
      list: [
        "A pupil only learns what they want to learn",
        "What counts is the message understood, not the one given",
        "Purpose of communication: a change in behaviour",
        "Behaviour = any activity of the pupil you can observe",
      ],
      concept: "motivation",
      src: P(7, "Wanting to learn is known as motivation"),
    },
    {
      icon: "🙂",
      kicker: "Non-verbal signals",
      title: "Faces talk",
      visual: "body-language",
      list: [
        "Expressions show boredom, puzzlement or surprise",
        "Bored: glazed expression, down-turned eyes, fidgeting",
        "The pupil reads YOUR expressions too",
        "They tell you attention span, mood and attitude",
      ],
      concept: "non-verbal",
      src: P(7, "Non-verbal signals; p.83 answer 6"),
    },
    {
      icon: "😰",
      kicker: "Nervousness",
      title: "Prepare, and it fades",
      list: [
        "A nervous instructor is an unprepared instructor",
        "Signs: blushing, stumbling, irritating gestures, no eye contact",
        "Build a nervous pupil's confidence with encouragement",
        "Avoid 'Don't be nervous'",
      ],
      concept: "nervousness",
      src: P(8, "Nervousness"),
    },
    {
      icon: "🤝",
      kicker: "Rapport",
      title: "Your responsibility",
      visual: "rapport",
      list: [
        "Mutual co-operation — a two-way relationship",
        "Firm, fair, warm and friendly",
        "Listen carefully; encourage even a wrong answer",
        "Never sarcastic, impatient or humiliating",
      ],
      concept: "rapport",
      src: P(8, "Rapport"),
    },
    {
      icon: "💡",
      kicker: "Attention",
      title: "Use the start of the lesson",
      list: [
        "Stimuli: your voice, actions, teaching aids, diagrams",
        "Make them interesting enough to displace distractions",
        "Attention peaks at the start — set the objective then",
        "Known to unknown, with Q&A and demonstration materials",
      ],
      concept: "attention",
      src: P(8, "Making communication work; Attention"),
    },
    {
      icon: "🔄",
      kicker: "Feedback",
      title: "Both directions",
      visual: "feedback-loop",
      list: [
        "Reward effort and attainment",
        "Check the lesson objectives are being met",
        "From you: praise for a correct response",
        "From the pupil: actions and replies",
      ],
      concept: "feedback",
      src: P(8, "Feedback"),
    },
    {
      icon: "🚧",
      kicker: "Barriers",
      title: "Extrinsic and intrinsic",
      visual: "comm-barriers",
      list: [
        "Extrinsic: noise, how you speak, activity outside or in the car",
        "Intrinsic: the pupil's attitudes, feelings and thoughts",
        "…about you, the lesson, or things unrelated to it",
      ],
      concept: "barriers",
      src: P(8, "Barriers to communication"),
    },
    {
      icon: "🧑‍🏫",
      kicker: "The instructor's role",
      title: "More than the test",
      list: [
        "Follow a syllabus; adapt to each pupil",
        "Plan, demonstrate, correct and keep records",
        "Only ADIs deliver and record EDT in the logbook",
        "Sponsor: a full licence held for at least 2 years",
      ],
      concept: "role",
      src: P(9, "The role of a driving instructor; p.10"),
    },
    {
      icon: "👔",
      kicker: "Professionalism",
      title: "First impressions count",
      visual: "first-impressions",
      list: [
        "People judge each other within the first minute",
        "Dress smartly but able to move quickly",
        "Ask how the pupil likes to be called",
        "No phone calls during a lesson; never criticise other ADIs",
      ],
      concept: "professional",
      src: P(12, "Making first impressions count; p.13–14"),
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
    { id: "r1", type: "flash", concept: "two-way",
      front: "What is meant by 'communication'?",
      back: "Conveying your meaning to others by an interchange of experience.", src: P(83, "Post test answer 1") },
    { id: "r2", type: "flash", concept: "motivation",
      front: "What are the results of poor communication?",
      back: "Mistakes, misunderstandings and lost time — and dissatisfaction and lack of co-operation in the instructor-pupil relationship.", src: P(83, "Post test answer 2") },
    { id: "r3", type: "fill", concept: "motivation",
      before: "The effectiveness of communication is measured by observing its", after: ".",
      options: ["results", "length", "volume", "speed"], answer: "results",
      explain: "Look for a change in behaviour.", src: P(83, "Post test answer 3") },
    { id: "r4", type: "flash", concept: "motivation",
      front: "In instruction, how is 'behaviour' defined?",
      back: "The activities of a person which can be observed by others.", src: P(83, "Post test answer 4") },
    { id: "r5", type: "fill", concept: "motivation",
      before: "The purpose of communication is to promote a change in", after: ".",
      options: ["behaviour", "instructor", "route", "price"], answer: "behaviour",
      explain: "An increase in skill or knowledge.", src: P(83, "Post test answer 5") },
    { id: "r6", type: "flash", concept: "non-verbal", visual: "body-language",
      front: "Which non-verbal signals suggest a pupil is bored?",
      back: "A glazed expression, down-turned eyes and fidgeting.", src: P(83, "Post test answer 6") },
    { id: "r7", type: "flash", concept: "nervousness",
      front: "Why might an instructor be nervous?",
      back: "A lack of knowledge, preparation and confidence.", src: P(83, "Post test answer 7") },
    { id: "r8", type: "truefalse", concept: "nervousness",
      statement: "Telling a pupil 'Don't be nervous' helps them relax.", answer: false,
      explain: "It just points out you've noticed — build confidence with encouragement instead.", src: P(8, "Nervousness") },
    { id: "r9", type: "flash", concept: "rapport", visual: "rapport",
      front: "How is rapport established?",
      back: "A firm, fair, warm and friendly approach, a sympathetic attitude and a keen interest in the pupil's responses and actions.", src: P(83, "Post test answer 9") },
    { id: "r10", type: "flash", concept: "feedback", visual: "feedback-loop",
      front: "What is feedback?",
      back: "A two-way process: the pupil is rewarded for effort and attainment while the instructor finds out whether lesson objectives are being met.", src: P(83, "Post test answer 10") },
  ],
};

/* ---------------------------------------------------------------------------
   3. READ THE SIGNS — recognition.
   --------------------------------------------------------------------------- */
const signals = {
  id: "signals",
  kind: "items",
  mode: "matching",
  title: "Read the Signs",
  blurb: "Spot it, sort it — signals, barriers, rapport",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "two-way",
      prompt: "Which picture shows how teaching communication should work?",
      options: ["two-way-comm", "comm-barriers", "first-impressions"], answer: 0,
      names: ["Two-way", "Barriers", "First impressions"],
      explain: "The pupil must respond.", src: P(7, "Two-way communication") },
    { id: "k2", type: "picture", label: "Spot it", concept: "non-verbal",
      prompt: "Which picture helps you read a pupil's mood?",
      options: ["rapport", "body-language"], answer: 1,
      names: ["Rapport", "Non-verbal signals"],
      explain: "Facial expressions point to boredom, puzzlement or surprise.", src: P(7, "Non-verbal signals") },
    {
      id: "k3", type: "sort", concept: "barriers",
      prompt: "Extrinsic or intrinsic barrier?",
      categories: [
        { id: "ext", label: "Extrinsic" },
        { id: "int", label: "Intrinsic" },
      ],
      cards: [
        { text: "Roadworks noise", cat: "ext" },
        { text: "The instructor mumbles", cat: "ext" },
        { text: "Pupil worried about an exam", cat: "int" },
        { text: "Pupil dislikes the instructor", cat: "int" },
        { text: "A crash scene by the road", cat: "ext" },
      ],
      explain: "Intrinsic barriers are inside the pupil.", src: P(8, "Barriers to communication") },
    {
      id: "k4", type: "sort", concept: "rapport",
      prompt: "Builds rapport or damages it?",
      categories: [
        { id: "build", label: "Builds" },
        { id: "harm", label: "Damages" },
      ],
      cards: [
        { text: "Encouraging a wrong answer", cat: "build" },
        { text: "A sarcastic remark", cat: "harm" },
        { text: "Listening carefully", cat: "build" },
        { text: "Sighing impatiently", cat: "harm" },
        { text: "Criticising the pupil's last instructor", cat: "harm" },
      ],
      explain: "Firm, fair, warm, friendly — never degrade or humiliate.", src: P(8, "Rapport; p.13") },
    { id: "k5", type: "picture", label: "Spot it", concept: "feedback",
      prompt: "Which picture shows feedback?",
      options: ["feedback-loop", "two-way-comm"], answer: 0,
      names: ["Feedback", "Two-way"],
      explain: "Praise one way, the pupil's replies the other.", src: P(8, "Feedback") },
    {
      id: "k6", type: "sort", concept: "professional",
      prompt: "Professional or not?",
      categories: [
        { id: "pro", label: "Professional" },
        { id: "not", label: "Unprofessional" },
      ],
      cards: [
        { text: "Asking 'What would you like me to call you?'", cat: "pro" },
        { text: "Answering your mobile mid-lesson", cat: "not" },
        { text: "Discussing another pupil's progress", cat: "not" },
        { text: "Teaching from the known to the unknown", cat: "pro" },
      ],
      explain: "Pupil confidentiality is of the utmost importance.", src: P(13, "Initial questions; p.14") },
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
      id: "m1", type: "match", concept: "two-way",
      prompt: "Match the term to its meaning.",
      pairs: [
        ["Communication", "Conveying meaning by interchange"],
        ["Motivation", "Wanting to learn"],
        ["Behaviour", "Activity others can observe"],
        ["Rapport", "Mutual co-operation"],
        ["Stimuli", "Ways of attracting attention"],
      ],
      explain: "The vocabulary of this unit.", src: P(7, "Summaries; p.8") },
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
  blurb: "The communication cycle",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "two-way", visual: "two-way-comm",
      prompt: "Two-way communication — in order.",
      steps: ["Gain the pupil's attention", "Transmit the message", "The pupil interprets it", "The pupil responds", "Check it was understood"],
      explain: "Check by discussion or by watching the pupil's actions.", src: P(7, "Two-way communication; p.8") },
    { id: "p2", type: "order", concept: "professional", visual: "first-impressions",
      prompt: "Meeting a new pupil — in order.",
      steps: ["A brief greeting", "Check the permit and ask their preferred name", "Ask about their experience", "Move to the business of the lesson"],
      explain: "Then teach from the known to the unknown.", src: P(12, "Conversation; p.13 Initial questions") },
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
  blurb: "Communication in the car",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "non-verbal", visual: "body-language",
      scene: "🥱 Ten minutes into your explanation, the pupil is staring ahead and fidgeting.",
      prompt: "What does it suggest, and what do you do?",
      options: ["They're concentrating — keep talking", "Boredom — involve them with questions and get them doing", "They're tired — end the lesson", "Speak louder"], answer: 1,
      explain: "Learning won't happen without a response from the pupil.", src: P(7, "Non-verbal signals; p.83 answer 6") },
    { id: "s2", type: "choice", label: "Scenario", concept: "nervousness",
      scene: "😬 A first-lesson pupil is gripping the wheel and very tense.",
      prompt: "What do you say?",
      options: ["'Don't be nervous!'", "Reassure and encourage — praise what they do well", "Say nothing", "Tell them everyone's nervous"], answer: 1,
      explain: "'Don't be nervous' only shows you've noticed.", src: P(8, "Nervousness") },
    { id: "s3", type: "choice", label: "Scenario", concept: "attention",
      scene: "🚒 A fire engine passes and your pupil keeps watching it instead of listening.",
      prompt: "What's best?",
      options: ["Tell them to pay attention", "Involve them more in the lesson to displace the distraction", "Speak more forcefully", "Drive somewhere else"], answer: 1,
      explain: "Use interesting stimuli to displace other stimuli.", src: P(16, "Retention Q8 (answer d, p.87)") },
    { id: "s4", type: "choice", label: "Scenario", concept: "rapport",
      scene: "🙄 Your pupil gives a wrong answer for the third time.",
      prompt: "How do you respond?",
      options: ["'Come on, we've done this!'", "Encourage the effort, then guide them to the right answer", "Laugh it off", "Move on without comment"], answer: 1,
      explain: "Offer encouragement even when an answer is incorrect.", src: P(8, "Rapport") },
    { id: "s5", type: "choice", label: "Scenario", concept: "professional",
      scene: "📱 Your phone rings during a lesson — it's a new customer.",
      prompt: "What do you do?",
      options: ["Answer quickly", "Let it go to a message or divert it — the pupil has paid for your attention", "Ask the pupil to pull in", "Answer on hands-free"], answer: 1,
      explain: "Taking calls is unprofessional and could be dangerous.", src: P(14, "Business contact") },
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
  blurb: "A first lesson",
  xpPer: 10,
  situation: "🚗 You're collecting Desmond for his first lesson. He's cycled for years but never driven.",
  items: [
    { id: "w1", type: "choice", step: "Greeting", concept: "professional", prompt: "His permit says 'Desmond'. You…",
      options: ["Call him Des", "Ask how he'd like to be called", "Use his surname", "Avoid using a name"], answer: 1,
      explain: "Never shorten a name without permission.", src: P(13, "Initial questions") },
    { id: "w2", type: "choice", step: "Starting point", concept: "professional", prompt: "To start teaching, you…",
      options: ["Begin with motorways", "Relate it to his cycling — known to unknown", "Lecture on the Road Traffic Acts", "Ask about his family"], answer: 1,
      explain: "Most learners have some experience to build on.", src: P(12, "Conversation") },
    { id: "w3", type: "choice", step: "The objective", concept: "attention", prompt: "When should you set the lesson objective?",
      options: ["At the end", "At the start, when attention peaks", "Halfway", "Never"], answer: 1,
      explain: "Make it challenging and interesting.", src: P(8, "Attention") },
    { id: "w4", type: "choice", step: "Checking", concept: "motivation", prompt: "How do you know he's understood the controls?",
      options: ["He nods", "You observe a change in what he can do", "You told him twice", "He doesn't ask questions"], answer: 1,
      explain: "Effectiveness is measured by observing results.", src: P(16, "Retention Q3 (answer b, p.87)") },
    { id: "w5", type: "choice", step: "End of lesson", concept: "feedback", prompt: "He moved off smoothly. You…",
      options: ["Say nothing — it's expected", "Praise the effort and attainment", "List his mistakes only", "Book more lessons"], answer: 1,
      explain: "Feedback acknowledges and rewards the pupil's efforts.", src: P(16, "Retention Q6 (answer d, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 87. Q7 is omitted (see header).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(16, `Retention test Q${n}; answer p.87`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "To teach effectively, the good instructor should be aware that", ["good communication isn't always necessary", "communication must be a two-way process involving the pupil", "good communication won't affect behaviour", "poor communication is unlikely to affect performance"], 1, "two-way", "two-way-comm"),
    R(2, "The purpose of effective communication is to promote", ["professionalism in the instructor", "a change in the pupil's behaviour", "clear and concise speech", "a change in the instructor's methods"], 1, "motivation"),
    R(3, "An instructor can best measure the effectiveness of communication by", ["asking the pupil to repeat what was said", "observing a change in the pupil's behaviour", "asking Rules of the Road questions", "setting a retention test"], 1, "motivation"),
    R(4, "The most effective way to demonstrate confidence when teaching is to", ["speak loudly and clearly", "prepare the subject matter thoroughly", "avoid eye contact", "avoid body language if the pupil makes a dangerous mistake"], 1, "nervousness"),
    R(5, "Developing a professional relationship with the pupil means the instructor will", ["make sure lessons are paid in advance", "establish good rapport with the pupil", "show affection for the pupil", "not avoid physical contact"], 1, "rapport", "rapport"),
    R(6, "Feedback by an instructor is intended to", ["encourage more bookings", "reinforce learning by repeating responses", "answer a question with a question", "acknowledge and reward the pupil's efforts"], 3, "feedback", "feedback-loop"),
    R(8, "The pupil seems more interested in something outside the car than the lesson. The instructor should", ["drive on to another location", "tell the pupil to pay more attention", "speak more forcefully", "involve the pupil more in the lesson to displace the distraction"], 3, "attention"),
    R(9, "An example of an intrinsic barrier to communication is", ["the pupil's attitude to the instructor or subject", "the instructor not speaking loudly enough over noise", "a pupil's hearing difficulty", "an event outside the car"], 0, "barriers", "comm-barriers"),
    R(10, "An instructor only knows effective communication has taken place if the pupil", ["listens quietly", "no longer needs to listen", "makes polite conversation", "attends to what's been said and makes a response"], 3, "two-way"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "two-way",
      prompt: "Learning won't take place unless…", options: ["The instructor talks clearly", "There's a response from the pupil", "The lesson is long", "Diagrams are used"], answer: 1,
      explain: "Action, gesture, expression or speech.", src: P(7, "Two-way communication") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "barriers",
      prompt: "Which picture shows what gets in the way of communication?", options: ["comm-barriers", "rapport", "feedback-loop"], answer: 0,
      names: ["Barriers", "Rapport", "Feedback"],
      explain: "Extrinsic and intrinsic.", src: P(8, "Barriers to communication") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "rapport",
      statement: "Establishing rapport is the pupil's responsibility.", answer: false,
      explain: "It's the instructor's responsibility.", src: P(8, "Rapport") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "barriers",
      scene: "🔊 A pupil can't hear you over the fan and an open window.",
      prompt: "What kind of barrier, and the fix?", options: ["Intrinsic — reassure them", "Extrinsic — close the window, turn the fan down", "Intrinsic — speak slower", "None"], answer: 1,
      explain: "Noise is an external barrier.", src: P(8, "Barriers to communication") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "non-verbal",
      prompt: "Match the signal.", pairs: [["Glazed expression", "Boredom"], ["Frown", "Puzzlement"], ["Blushing, stumbling", "Nervousness"]],
      explain: "Be sensitive to expressions and gestures.", src: P(7, "Non-verbal signals; p.8") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "two-way",
      prompt: "In order:", steps: ["Gain attention", "Give the message", "Get a response", "Check understanding"],
      explain: "Communication must be two-way.", src: P(8, "Making communication work") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "professional",
      scene: "💬 A pupil says their last instructor 'never explained anything'.",
      prompt: "Your reply?", options: ["Agree — some instructors are hopeless", "Don't criticise; focus on this lesson", "Ask for the instructor's name", "Laugh"], answer: 1,
      explain: "You don't know the full story.", src: P(13, "Initial questions") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "feedback",
      prompt: "Feedback by an instructor is intended to…", options: ["Encourage bookings", "Reinforce by repeating responses", "Answer a question with a question", "Acknowledge and reward the pupil's efforts"], answer: 3,
      explain: "And check objectives are being met.", src: P(16, "Retention Q6 (answer d, p.87)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "rapport",
      prompt: "A pupil seems wary of you. Which picture shows how to fix that?", options: ["rapport", "body-language"], answer: 0,
      names: ["Rapport", "Non-verbal signals"],
      explain: "Firm, fair, warm and friendly.", src: P(8, "Rapport") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "nervousness",
      prompt: "The best way to show confidence when teaching is to…", options: ["Speak loudly", "Prepare the subject matter thoroughly", "Avoid eye contact", "Hide your reactions"], answer: 1,
      explain: "A nervous instructor is an unprepared instructor.", src: P(16, "Retention Q4 (answer b, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "4.1",
  number: "4.1",
  title: "Communication",
  pages: [7, 16],
  intro: "Two-way communication, non-verbal signals, nervousness, rapport, attention, feedback, barriers, and the professional instructor.",
  objectives: [
    "Why effective communication is necessary",
    "One-way and two-way communication",
    "Non-verbal signals and their meaning",
    "The importance of rapport and of feedback",
  ],
  objectivesSrc: P(7, "Objectives"),
  mcqLink: { sectionId: "adi.sec.pedagogy", label: "Teaching Ability – Pedagogy" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...signals, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "sign-reader", icon: "🙂", label: "Sign Reader", rule: { activity: "signals", min: 100 } },
    { id: "communication-specialist", icon: "🏆", label: "Communication Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
