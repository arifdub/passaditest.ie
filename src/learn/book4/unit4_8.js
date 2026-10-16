/*
  ===========================================================================
  BOOK 4 · UNIT 4.8 — PRACTICAL TEACHING

  Source: "Theory Resource Workbook 4 of 4 — Instructional Techniques &
  Practices" (Driver Education Supplies), book pages 49–55: text pp.49–53,
  post test p.54 (model answers p.86), retention test p.55 (answers p.87,
  10 questions).

  All ten retention questions match the key and are used.

  The model answers on p.86 are numbered one ahead of the post-test
  questions from Q3 on (answer 3 is blank), so they are matched by content
  and cited as "model answer" without a number.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 4, unit: "4.8", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "characteristics": {
    title: "Instructor characteristics",
    text: "Articulate: clear and easily understood, no needless repetition, mumbling or verbiage. Enthusiastic: extra guidance where helpful and a keen interest in events during the lesson; avoid over-control and disinterest. Encouraging: praise good performance; avoid over-criticism and too high a standard. Friendly: relaxed, firm but fair, sympathetic; avoid aloofness, over-familiarity and sarcasm. Patient: repeat explanations without criticism, try a different approach, allow thinking time. Confident: properly prepared, instructions clear and in good time; avoid late, muddled directions.",
    src: P(49, "Instructor characteristics; p.50 Confident"),
  },
  "techniques": {
    title: "Instructional techniques",
    text: "Objectives: well defined and explained at the start — no unplanned drives. Level of instruction: suited to the pupil's ability and experience — not over-simplified, irrelevant or premature. Language: clear, technical terms explained, no jargon. Q&A: to find the starting level, stimulate interest and test recall. Feedback: two-way — answer the pupil's questions, praise, correct misunderstandings tactfully, listen. Dual controls: only to demonstrate or avoid danger; always tell the pupil, and identify the fault that led to it.",
    src: P(50, "Instructional techniques"),
  },
  "directions": {
    title: "Directions",
    text: "Give directions clearly and in good time, tailored to the road and traffic, without excessive verbiage. Standardise them, similar to driving testers, so pupils are familiar with test terminology. The ADI formula: Alert ('I'd like you to…'), Direct ('…turn left'), Identify ('…at the end of the road'). Where junctions are close together, identify first: 'At the end of the road, turn left.' Say 'follow the road ahead', never 'go straight' or 'carry on'; say 'correct', not 'right' (which may prompt a right turn). Keep it brief — 'slow down', 'hold back'. As lessons progress, give less information to encourage independence. A pupil from another school may not know your terms. If you give a late direction, apologise.",
    src: P(50, "Instructions and directions; p.52 The giving of directions"),
  },
  "faults": {
    title: "Fault assessment",
    text: "Fault assessment is the ADI's core competency. Identify: make faults known as they occur; early on, be selective — but always point out dangerous ones; don't list every fault. Analyse: explain why it happened, correctly. Timing: point out faults as they occur unless danger is imminent or several happen together — then pull in somewhere safe, legal and convenient. Delay only to the first safe opportunity; avoid retrospective (unnecessarily late) instruction. Remedy: explain how to avoid it, using aids or demonstration. Never explain faults to the detriment of the pupil's concentration on the road ahead.",
    src: P(50, "Fault assessment; p.51; p.53 Important"),
  },
  "intervention": {
    title: "Correcting errors",
    text: "The most effective way to prevent an error is early verbal intervention — a well-timed prompt. Correct on the move if it's simple and clear. If verbal intervention doesn't work or there isn't time, intervene physically — a steering correction or dual controls — to prevent risk of injury or damage, a breach of the law, excessive stress to the pupil, or mechanical damage. Check the dual mirror before using the dual brake. Keep the dual clutch for demonstrations — pupils learn clutch control by experience, and dipping clutch and brake won't always make them release the gas. Afterwards pull in and explain why, how serious, and the consequences — a learning opportunity, not a reprimand.",
    src: P(53, "Correcting errors; p.86 model answers"),
  },
  "routes": {
    title: "Route planning",
    text: "Leading pupils into situations they can't cope with shatters confidence — find safe routes suited to their ability. Know the local roads and traffic at all times of day; have flexible routes with alternatives so a diversion doesn't force a novice into heavy traffic. Nursery routes: straight, wide roads with little interruption. Intermediate: simple junctions, gradients and bends. Then as many types of road and traffic as possible. Practise manoeuvres first on quiet, wide roads; avoid repeating the same roads (boredom, annoyance to residents), and use test routes ideally not at all — only in the last few lessons, never during test hours.",
    src: P(51, "Route planning; Practising manoeuvres; p.86 model answers"),
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
    "Directions: Alert, Direct, Identify — in good time",
    "Faults: identify, analyse, remedy",
    "Early verbal intervention beats physical",
  ],
  cards: [
    {
      icon: "🌟",
      kicker: "Characteristics",
      title: "What pupils need from you",
      visual: "instructor-traits",
      ask: {
        prompt: "A pupil is slow to react. A patient instructor…",
        options: ["Over-instructs", "Allows time and tries another approach", "Raises their voice"],
        answer: 1,
      },
      list: [
        "Articulate, enthusiastic, encouraging",
        "Friendly: firm but fair, never sarcastic",
        "Patient: repeat without criticism",
        "Confident: prepared, clear and in good time",
      ],
      concept: "characteristics",
      src: P(49, "Instructor characteristics"),
    },
    {
      icon: "🧰",
      kicker: "Techniques",
      title: "Structure for learning",
      list: [
        "Clear objectives at the start — no unplanned drives",
        "Instruction suited to ability and experience",
        "Two-way feedback; correct misunderstandings tactfully",
        "Dual controls only to demonstrate or avoid danger — and say so",
      ],
      concept: "techniques",
      src: P(50, "Instructional techniques"),
    },
    {
      icon: "🧭",
      kicker: "Directions",
      title: "Alert, Direct, Identify",
      visual: "adi-formula",
      list: [
        "'I'd like you to… turn left… at the end of the road'",
        "Junctions close together? Identify the place first",
        "'Follow the road ahead' — not 'go straight' or 'carry on'",
        "'Correct' — not 'right'",
      ],
      concept: "directions",
      src: P(52, "The giving of directions"),
    },
    {
      icon: "🗣️",
      kicker: "Wording",
      title: "Brief and consistent",
      list: [
        "Standardise like a tester",
        "'Slow down', 'hold back' — not long sentences",
        "Less information as they progress — independence",
        "Gave it late? Apologise",
      ],
      concept: "directions",
      src: P(52, "Directions; Briefness"),
    },
    {
      icon: "🔍",
      kicker: "Faults",
      title: "Identify, analyse, remedy",
      visual: "fault-steps",
      list: [
        "Point out faults as they occur — selectively at first",
        "Always point out dangerous faults",
        "Explain why — correctly — and how to avoid it",
        "Several at once? Pull in safely and discuss",
      ],
      concept: "faults",
      src: P(50, "Fault assessment; p.51"),
    },
    {
      icon: "🛑",
      kicker: "Correcting errors",
      title: "Verbal first",
      visual: "intervention-ladder",
      list: [
        "Early verbal intervention is most effective",
        "Physical only if verbal is too late or fails",
        "Check the dual mirror before the dual brake",
        "Afterwards: why, how serious, what could have happened",
      ],
      concept: "intervention",
      src: P(53, "Correcting errors"),
    },
    {
      icon: "🗺️",
      kicker: "Routes",
      title: "Build up gradually",
      visual: "route-progression",
      list: [
        "Nursery: straight, wide, quiet roads",
        "Then junctions, hills and bends; then everything",
        "Have alternatives — never force a novice into heavy traffic",
        "Test routes: only the last few lessons, never during test hours",
      ],
      concept: "routes",
      src: P(51, "Route planning; Practising manoeuvres"),
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
    { id: "r1", type: "flash", concept: "routes",
      front: "When should an instructor use test routes?",
      back: "Ideally not at all — if necessary only in the last few lessons before a test, and never during test hours.", src: P(86, "Post test model answer (Q1)") },
    { id: "r2", type: "flash", concept: "routes",
      front: "Why not use the same routes repeatedly?",
      back: "The pupil gets bored and won't be well prepared — and it can cause danger, inconvenience and annoyance to residents.", src: P(86, "Post test model answer (Q2)") },
    { id: "r3", type: "flash", concept: "directions",
      front: "Why should your terminology be similar to a tester's?",
      back: "So the pupil is familiar with the terminology used during the driving test.", src: P(86, "Post test model answer (Q3)") },
    { id: "r4", type: "flash", concept: "directions",
      front: "What's the likely reaction to late directions?",
      back: "Rash, hurried decisions, poor control and observation, erratic steering, danger — and lost confidence.", src: P(86, "Post test model answer (Q4)") },
    { id: "r5", type: "fill", concept: "intervention", visual: "intervention-ladder",
      before: "The best method of intervention is early", after: "intervention.",
      options: ["verbal", "physical", "dual-brake", "steering"], answer: "verbal",
      explain: "A well-timed prompt.", src: P(86, "Post test model answer (Q6)") },
    { id: "r6", type: "flash", concept: "intervention",
      front: "What should you do before using the dual footbrake?",
      back: "Check the dual mirror.", src: P(86, "Post test model answer (Q8)") },
    { id: "r7", type: "flash", concept: "intervention",
      front: "Why keep the dual clutch to a minimum?",
      back: "Pupils learn clutch control by experience — and dipping clutch and brake won't always make a pupil release the gas.", src: P(86, "Post test model answer (Q9)") },
    { id: "r8", type: "flash", concept: "faults",
      front: "What is 'retrospective' instruction?",
      back: "Fault correction an unnecessarily long time after the fault occurred.", src: P(86, "Post test model answer (Q11)") },
    { id: "r9", type: "fill", concept: "faults", visual: "fault-steps",
      before: "Fault analysis means explaining", after: "a fault occurred.",
      options: ["why", "where", "when", "whether"], answer: "why",
      explain: "Then give the remedy.", src: P(86, "Post test model answer (Q13)") },
    { id: "r10", type: "truefalse", concept: "directions", visual: "adi-formula",
      statement: "Saying 'right' to confirm a correct answer may cause a pupil to turn right.", answer: true,
      explain: "Say 'correct' instead.", src: P(86, "Post test model answer (Q14)") },
  ],
};

/* ---------------------------------------------------------------------------
   3. ON THE ROAD — recognition.
   --------------------------------------------------------------------------- */
const onroad = {
  id: "onroad",
  kind: "items",
  mode: "matching",
  title: "On the Road",
  blurb: "Spot it, sort it — directions, faults, routes",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "directions",
      prompt: "Which picture shows how to give a direction?",
      options: ["adi-formula", "fault-steps", "route-progression"], answer: 0,
      names: ["Alert, Direct, Identify", "Fault steps", "Routes"],
      explain: "Alert, Direct, Identify.", src: P(52, "The ADI formula") },
    {
      id: "k2", type: "sort", concept: "directions",
      prompt: "Good wording or poor?",
      categories: [
        { id: "good", label: "Good" },
        { id: "poor", label: "Poor" },
      ],
      cards: [
        { text: "'Follow the road ahead'", cat: "good" },
        { text: "'Go straight'", cat: "poor" },
        { text: "'Correct'", cat: "good" },
        { text: "'Right' (meaning well done)", cat: "poor" },
        { text: "'Hold back'", cat: "good" },
        { text: "'You can begin reducing your speed now'", cat: "poor" },
      ],
      explain: "Brief, standard and unambiguous.", src: P(52, "The giving of directions") },
    { id: "k3", type: "picture", label: "Spot it", concept: "intervention",
      prompt: "Which picture shows the order of intervention?",
      options: ["route-progression", "intervention-ladder"], answer: 1,
      names: ["Routes", "Intervention"],
      explain: "Verbal first, then physical.", src: P(53, "Correcting errors") },
    {
      id: "k4", type: "sort", concept: "intervention",
      prompt: "Reason to intervene physically?",
      categories: [
        { id: "yes", label: "Yes" },
        { id: "no", label: "No" },
      ],
      cards: [
        { text: "About to hit a pedestrian", cat: "yes" },
        { text: "About to go through a red light", cat: "yes" },
        { text: "Pupil wobbling on clutch control", cat: "no" },
        { text: "Pupil chose a slightly slow speed", cat: "no" },
      ],
      explain: "Risk of injury, breach of law, excessive stress, mechanical damage.", src: P(86, "Post test model answer (Q5)") },
    { id: "k5", type: "picture", label: "Spot it", concept: "routes",
      prompt: "Which picture shows how routes should build up?",
      options: ["route-progression", "adi-formula"], answer: 0,
      names: ["Routes", "Alert, Direct, Identify"],
      explain: "Nursery → intermediate → varied.", src: P(51, "Route planning") },
    {
      id: "k6", type: "sort", concept: "faults",
      prompt: "Point it out now, or at the first safe stop?",
      categories: [
        { id: "now", label: "Now" },
        { id: "later", label: "First safe stop" },
      ],
      cards: [
        { text: "A dangerous fault on a quiet road", cat: "now" },
        { text: "Several faults in quick succession", cat: "later" },
        { text: "A fault while a hazard is imminent", cat: "later" },
        { text: "A simple fault, easily corrected on the move", cat: "now" },
      ],
      explain: "Never at the expense of concentration on the road ahead.", src: P(51, "Fault assessment & timing") },
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
  blurb: "Faults and fixes",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "faults", visual: "fault-steps",
      prompt: "Match the term.",
      pairs: [
        ["Identification", "Make the fault known"],
        ["Analysis", "Explain why it happened"],
        ["Remedial action", "How to avoid it next time"],
        ["Retrospective instruction", "Correction far too late"],
      ],
      explain: "Fault assessment is the ADI's core competency.", src: P(51, "Fault identification; Analysis; Remedial") },
    {
      id: "m2", type: "match", concept: "directions", visual: "adi-formula",
      prompt: "Match the part of the direction.",
      pairs: [
        ["Alert", "'I'd like you to…'"],
        ["Direct", "'…turn left…'"],
        ["Identify", "'…at the end of the road'"],
      ],
      explain: "The ADI formula.", src: P(52, "The ADI formula") },
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
  blurb: "Directions and errors",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "intervention", visual: "intervention-ladder",
      prompt: "Your pupil is approaching a hazard too fast — in order.",
      steps: ["Give an early verbal prompt", "No response — check the dual mirror", "Use the dual brake", "Pull in and explain why it was needed"],
      explain: "A learning opportunity, not a reprimand.", src: P(53, "Correcting errors; p.86") },
    { id: "p2", type: "order", concept: "routes", visual: "route-progression",
      prompt: "Route progression — in order.",
      steps: ["Moving off and stopping on a nursery route", "Straight-road driving", "Left turns and simple junctions", "Gradients, bends and busier roads", "Every type of road and traffic"],
      explain: "As control and anticipation develop.", src: P(51, "Route planning") },
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
  blurb: "In-car decisions",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "faults",
      scene: "⚠️ In quick succession your pupil misses a mirror check, signals late and drifts wide.",
      prompt: "What do you do?",
      options: ["List them all while driving", "Advise at the first safe opportunity", "Stop with the dual brake", "Repeat the route next lesson"], answer: 1,
      explain: "Don't overload them while driving.", src: P(55, "Retention Q6 (answer c, p.87)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "directions",
      scene: "🔀 Two side roads come up close together and you want the second one.",
      prompt: "How do you phrase it?",
      options: ["'Turn left' as you pass the first", "'At the end of the road… I'd like you to turn left' — identify first", "'Next left'", "Say nothing until the turn"], answer: 1,
      explain: "Avoids an unwanted turn into the first road.", src: P(52, "Identify") },
    { id: "s3", type: "choice", label: "Scenario", concept: "routes",
      scene: "🚧 Roadworks block your nursery route; the only detour is a busy dual carriageway.",
      prompt: "What should have been in place?",
      options: ["Nothing — go anyway", "An alternative route equally suited to the pupil", "A longer lesson", "The test route"], answer: 1,
      explain: "Routes need suitable alternatives.", src: P(51, "Route planning") },
    { id: "s4", type: "choice", label: "Scenario", concept: "intervention",
      scene: "🦶 You had to use the dual brake for a child stepping out.",
      prompt: "What next?",
      options: ["Carry on as normal", "Pull in, explain why, how serious, and what could have happened", "Tell them off", "End the lesson"], answer: 1,
      explain: "So they approach it more cautiously next time.", src: P(53, "Correcting errors") },
    { id: "s5", type: "choice", label: "Scenario", concept: "directions",
      scene: "🧑 A pupil from another school seems confused by your directions.",
      prompt: "Why?",
      options: ["They're slow", "Your terminology may differ from their previous instructor's", "Wrong car", "Too many lessons"], answer: 1,
      explain: "Keep terms standard and explain them.", src: P(55, "Retention Q10 (answer b, p.87)") },
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
  blurb: "A wide left turn",
  xpPer: 10,
  situation: "↩️ Your pupil takes a left turn too fast and swings wide.",
  items: [
    { id: "w1", type: "choice", step: "Spot it", concept: "faults", prompt: "First, you…",
      options: ["Identify the fault to the pupil", "Ignore it", "Grab the wheel", "List every other fault too"], answer: 0,
      explain: "Make faults known as they occur.", src: P(51, "Fault identification") },
    { id: "w2", type: "choice", step: "Why", concept: "faults", prompt: "Next, you explain…",
      options: ["Why it happened — too fast on the approach", "That they're a bad driver", "Nothing", "The history of left turns"], answer: 0,
      explain: "Fault analysis must be correct.", src: P(51, "Fault analysis") },
    { id: "w3", type: "choice", step: "Fix", concept: "faults", prompt: "Then you…",
      options: ["Give remedial advice, perhaps with a diagram", "Move on to roundabouts", "Use the dual clutch", "End the lesson"], answer: 0,
      explain: "Explain how to avoid it in future.", src: P(51, "Remedial action") },
    { id: "w4", type: "choice", step: "Next turn", concept: "directions", prompt: "For the next left turn, the direction is…",
      options: ["Given clearly and in good time", "Given late to test them", "Not given", "Shouted"], answer: 0,
      explain: "Late directions cause rushed decisions.", src: P(86, "Post test model answer (Q4)") },
    { id: "w5", type: "choice", step: "Encourage", concept: "characteristics", prompt: "They get it right. You…",
      options: ["Praise the improvement", "Say nothing", "Point out it took two tries", "Demand perfection"], answer: 0,
      explain: "Use feedback when the pupil does well.", src: P(55, "Retention Q2 (answer a, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 87. All ten are used.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(55, `Retention test Q${n}; answer p.87`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "The good instructor passes on information in", ["technical terms for thorough understanding", "a clear and easily understood manner", "an elaborate verbal code", "as few words as possible"], 1, "characteristics"),
    R(2, "Encouraging a pupil to improve is best achieved by", ["feedback when the pupil does well", "pointing out mistakes as they happen", "extra explanation", "assignments after the lesson"], 0, "characteristics"),
    R(3, "The good instructor shows enthusiasm with a keen interest in events during the lesson and", ["ignoring problems outside", "raising the pitch of their voice", "being as firm as possible", "giving extra guidance where necessary"], 3, "characteristics", "instructor-traits"),
    R(4, "Despite several attempts, the pupil is still uncertain of what's required. The good instructor should", ["give the same explanation again", "try a different approach", "talk the pupil through it", "suggest a new instructor"], 1, "characteristics"),
    R(5, "On fault assessment timing, an instructor should", ["avoid retrospective explanation or instruction", "not point out faults as they occur", "point out every error while driving", "only point out faults when the remedy is obvious"], 0, "faults"),
    R(6, "Several potentially serious errors happen together with little time to correct them. The instructor should", ["stop with the dual controls and explain", "ask the pupil to pull in and explain", "advise the pupil of the errors at the first safe opportunity", "repeat the route next lesson"], 2, "faults", "fault-steps"),
    R(7, "Other than for demonstration, dual controls should only be used when", ["a breach of the law is imminent", "a novice is driving", "there's no time for verbal intervention", "the pupil is driving too fast"], 2, "intervention", "intervention-ladder"),
    R(8, "The advised method for giving directions is", ["alert, direct, identify", "identify, alert, direct", "identify, direct, alert", "direct, identify, alert"], 0, "directions", "adi-formula"),
    R(9, "At a junction where you don't want a turn, if a direction is needed, say", ["carry on", "go straight ahead", "follow the road ahead", "keep left"], 2, "directions"),
    R(10, "A new pupil from another school has had many lessons. So your directions aren't misunderstood you must", ["only use DTS examiners' terminology", "remember your terminology may differ from their previous instructor's", "contact the previous instructor", "give a written list of terms"], 1, "directions"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "faults",
      prompt: "The ADI's core competency, on which check-test grading is based, is…", options: ["Route planning", "Fault assessment", "Lesson timing", "Paperwork"], answer: 1,
      explain: "Identify, analyse, remedy.", src: P(50, "Fault assessment") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "faults",
      prompt: "Which picture shows how to deal with a fault?", options: ["fault-steps", "adi-formula", "instructor-traits"], answer: 0,
      names: ["Fault steps", "Alert, Direct, Identify", "Instructor traits"],
      explain: "Identify, analyse, remedy.", src: P(51, "Fault identification") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "intervention",
      statement: "The dual clutch is a good way to help a pupil with clutch control.", answer: false,
      explain: "Keep it for demonstrations — pupils learn clutch control by experience.", src: P(86, "Post test model answer (Q9)") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "directions",
      scene: "⏱️ You realise you gave a turn instruction too late and the pupil braked hard.",
      prompt: "What do you say?", options: ["'You should've reacted faster'", "'I apologise — I was late giving that instruction'", "Nothing", "'Brake earlier'"], answer: 1,
      explain: "They'll appreciate your honesty.", src: P(52, "Briefness") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "routes",
      prompt: "Match the route.", pairs: [["Nursery", "Straight, wide, quiet"], ["Intermediate", "Junctions, hills, bends"], ["Varied", "Every road and traffic"]],
      explain: "Build up gradually.", src: P(51, "Route planning") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "directions",
      prompt: "The ADI formula:", steps: ["Alert", "Direct", "Identify"],
      explain: "Unless junctions are close together — then identify first.", src: P(52, "The ADI formula") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "routes",
      scene: "📅 It's Tuesday at 11 am and you're near the test centre.",
      prompt: "Should you practise on the test route?", options: ["Yes — any time", "No — never during test hours", "Only manoeuvres", "Only if busy"], answer: 1,
      explain: "Only in the last few lessons, outside test hours.", src: P(86, "Post test model answer (Q1)") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "intervention",
      prompt: "Apart from demonstrations, use the dual controls when…", options: ["A law breach is imminent", "A novice drives", "There's no time for verbal intervention", "The pupil is fast"], answer: 2,
      explain: "Verbal first.", src: P(55, "Retention Q7 (answer c, p.87)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "intervention",
      prompt: "Your verbal prompt didn't work and a cyclist is close. Which picture shows the next step?", options: ["intervention-ladder", "route-progression"], answer: 0,
      names: ["Intervention", "Routes"],
      explain: "Physical intervention — then explain.", src: P(53, "Correcting errors") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "directions",
      prompt: "To confirm no turn at a junction, say…", options: ["Carry on", "Go straight ahead", "Follow the road ahead", "Keep left"], answer: 2,
      explain: "'Go straight' may imply it's safe to proceed.", src: P(55, "Retention Q9 (answer c, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "4.8",
  number: "4.8",
  title: "Practical Teaching",
  pages: [49, 55],
  intro: "Instructor characteristics, instructional techniques, directions and the ADI formula, fault assessment, correcting errors and route planning.",
  objectives: [
    "The reasons for proper route planning",
    "How to give directions and correct errors",
    "Well-timed prompts and the use of dual controls",
    "The terms used in assessing an instructor",
  ],
  objectivesSrc: P(49, "Objectives"),
  mcqLink: { sectionId: "adi.sec.pedagogy", label: "Teaching Ability – Pedagogy" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...onroad, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "road-coach", icon: "🧭", label: "Road Coach", rule: { activity: "onroad", min: 100 } },
    { id: "practical-teaching-specialist", icon: "🏆", label: "Practical Teaching Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
