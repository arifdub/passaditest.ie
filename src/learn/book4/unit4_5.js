/*
  ===========================================================================
  BOOK 4 · UNIT 4.5 — TEACHING ADULTS

  Source: "Theory Resource Workbook 4 of 4 — Instructional Techniques &
  Practices" (Driver Education Supplies), book pages 33–37: text pp.33–35,
  post test p.36 (model answers p.85), retention test p.37 (answers p.87,
  10 questions).

  All ten retention questions match the key and are used. The post test
  numbers two questions "6", so its model answers are matched by content.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 4, unit: "4.5", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "adult-learners": {
    title: "Adults as learners",
    text: "Most of an ADI's work is with adults, from adolescents to the elderly, who bring years of learning and expectations of what a teacher is like. It's commonly believed the ability to learn falls with age — it doesn't. Intelligence, the faculty of understanding, grows into the early thirties with exposure to new learning; abilities are maintained if the adult keeps learning. Providing health doesn't restrict them, adults can learn new skills throughout life. IQ is mental age divided by actual age, expressed as a percentage. Academic ability doesn't guarantee driving ability — driving is mainly a manual skill.",
    src: P(33, "Adults as learners; p.85 answers 1–4"),
  },
  "known-unknown": {
    title: "Known to the unknown",
    text: "Even a 17-year-old has a broad range of knowledge to build on, so always proceed from the known to the unknown — new material that reinforces what's known is learned faster. Example: a normal stop taught from cycling — stop pedalling = off the gas; gently squeeze the brakes = gently brake to slow; squeeze to stop and put a foot down = brake to stop and clutch down. Where new material conflicts with what's known (negative transfer), learning is harder.",
    src: P(33, "Adults as learners; For example"),
  },
  "adolescents": {
    title: "Adolescents",
    text: "May still be in, or just out of, formal education; used to classrooms but not to one-to-one tuition; may expect to be 'spoon fed' and play a passive role; going through physical, mental and emotional change; less subject to parents, more to peer pressure; may be antagonistic to older people, especially teachers; may be over- or under-confident; may only be there because of parental pressure. A peer group (people of similar age, sex and interests) sets standards members conform to — if it favours slapdash driving, a new driver tends to follow. Be a firm, authoritative, credible alternative.",
    src: P(34, "Adolescents; p.85 answers 5–7"),
  },
  "older": {
    title: "Older adults",
    text: "May expect 'to be taught' rather than 'to learn': to be lectured, not questioned, and not to take an active part. They expect a competent instructor, respect a truthful 'I don't know', expect dignity and respect, expect to work to achieve, and like to set their own pace. They may be less confident and over-anxious, becoming dependent on the instructor; are motivated more by short-term goals; have less time to study outside lessons; and may feel an imbalance of power — especially with a younger instructor, who should redress it with a warm, friendly attitude.",
    src: P(34, "Older adults; p.85 answers 8, 15"),
  },
  "language": {
    title: "Language codes",
    text: "Simple, informal terms are understood more easily than jargon, but over-simplifying can reduce meaning. The restricted code uses short, simple, unplanned sentences — clear and easily understood, though depth may be lost. The elaborate code uses technical terms and complex descriptions — in-depth, but meaning can be lost in irrelevant detail and jargon goes over heads. If you must use technical terms, explain them in simple terms.",
    src: P(34, "Language and learning; The elaborate code; p.85 answers 9–12"),
  },
  "tone": {
    title: "Delivery and tone",
    text: "Speak at a normal rate, clearly and decisively, so the pupil hears you distinctly. Keep the same upbeat, never-monotone tone in the last lesson of the day as in the first — even when tired or frustrated by repeated errors, because a change of tone may be taken as anger. Enthusiasm boosts a pupil's confidence.",
    src: P(35, "Verbal communication delivery & tone; p.37 Q10"),
  },
  "stereotyping": {
    title: "Stereotyping",
    text: "First impressions are based on what's seen and on past teacher-pupil experiences. A pupil criticised at home or school may expect criticism and be antagonistic — sarcastic first comments confirm it, so start with praise and encouragement. Have no prejudices about age, race, social background or gender. A pupil adopts the role you portray: tell them they'll be slow and they'll make less effort and learn more slowly; tell them they can achieve quickly and learning speeds up. No two learners learn alike — adapt to each one.",
    src: P(35, "Stereotyping; p.85 answers 13, 14"),
  },
  "credit-blame": {
    title: "Give the credit, share the blame",
    text: "Rely on encouragement. 'WE went a little wide on that left turn; WE'll try another one ahead' — then praise what the pupil did well: 'YOU used your mirror, signalled in good time and kept left.' Often the instructor did share the blame: a late instruction let the pupil approach too fast.",
    src: P(35, "Give the credit and share the blame"),
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
    "Ability to learn doesn't fall with age",
    "Older adults: short-term goals, less confident",
    "A pupil adopts the role you portray",
  ],
  cards: [
    {
      icon: "🧓",
      kicker: "Adults as learners",
      title: "Age isn't the barrier",
      ask: {
        prompt: "Does the ability to learn decrease with age?",
        options: ["Yes, steadily", "No — not if health allows", "Only after 25"],
        answer: 1,
      },
      list: [
        "Intelligence = the faculty of understanding",
        "Abilities are kept by continuing to learn",
        "IQ = mental age ÷ actual age, as a percentage",
        "Academic ability ≠ driving ability (a manual skill)",
      ],
      concept: "adult-learners",
      src: P(33, "Adults as learners; p.85"),
    },
    {
      icon: "🚲",
      kicker: "Known to unknown",
      title: "Build on what they know",
      visual: "known-unknown",
      list: [
        "Every learner brings experience to build on",
        "Material that reinforces the known is learned faster",
        "Conflicting material (negative transfer) slows learning",
      ],
      concept: "known-unknown",
      src: P(33, "For example"),
    },
    {
      icon: "🧑‍🎓",
      kicker: "Adolescents",
      title: "Peers matter",
      visual: "learner-ages",
      list: [
        "Used to classrooms, not one-to-one; may expect spoon feeding",
        "More influenced by peers than parents",
        "May be over- or under-confident, or antagonistic to teachers",
        "Be a firm, authoritative, credible alternative to the peer group",
      ],
      concept: "adolescents",
      src: P(34, "Adolescents; p.85"),
    },
    {
      icon: "👵",
      kicker: "Older adults",
      title: "Dignity and short-term goals",
      list: [
        "May expect to be lectured, not questioned",
        "Expect competence, dignity and respect",
        "Less confident, more anxious; short-term goals motivate",
        "A younger instructor should redress the power imbalance warmly",
      ],
      concept: "older",
      src: P(34, "Older adults"),
    },
    {
      icon: "💬",
      kicker: "Language",
      title: "Restricted vs elaborate",
      visual: "language-codes",
      list: [
        "Restricted: short, simple — clear but less depth",
        "Elaborate: technical — in depth but easily lost",
        "Explain any technical term simply",
      ],
      concept: "language",
      src: P(34, "Language and learning"),
    },
    {
      icon: "🎙️",
      kicker: "Tone",
      title: "Upbeat, all day",
      list: [
        "Normal rate, clear and decisive",
        "Same tone in the last lesson as the first",
        "A changed tone may be read as anger",
        "Enthusiasm boosts confidence",
      ],
      concept: "tone",
      src: P(35, "Verbal communication delivery & tone"),
    },
    {
      icon: "🏷️",
      kicker: "Stereotyping",
      title: "They become what you expect",
      list: [
        "No prejudice by age, race, background or gender",
        "Start with praise and encouragement",
        "'You'll be slow' → less effort, slower learning",
        "Adapt to each pupil's attitude, aptitude and pace",
      ],
      concept: "stereotyping",
      src: P(35, "Stereotyping"),
    },
    {
      icon: "🤝",
      kicker: "Credit and blame",
      title: "'We' for faults, 'you' for success",
      visual: "credit-blame",
      list: [
        "'We went a little wide…'",
        "'You used your mirror well…'",
        "Often a late instruction shares the blame",
      ],
      concept: "credit-blame",
      src: P(35, "Give the credit and share the blame"),
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
    { id: "r1", type: "truefalse", concept: "adult-learners",
      statement: "The ability to learn decreases with age.", answer: false,
      explain: "Not, provided health doesn't impose a restriction.", src: P(85, "Post test answer 1") },
    { id: "r2", type: "fill", concept: "adult-learners",
      before: "Intelligence is the faculty of", after: ".",
      options: ["understanding", "memory", "speech", "speed"], answer: "understanding",
      explain: "It grows with exposure to new learning.", src: P(85, "Post test answer 2") },
    { id: "r3", type: "flash", concept: "adult-learners",
      front: "What is the intelligence quotient (IQ)?",
      back: "Mental age divided by actual age, expressed as a percentage.", src: P(85, "Post test answer 3") },
    { id: "r4", type: "flash", concept: "adolescents",
      front: "What is a peer group?",
      back: "A group of people of similar age, sex and interests.", src: P(85, "Post test answer 5") },
    { id: "r5", type: "flash", concept: "adolescents",
      front: "How can an instructor help a pupil challenge their peer group's opinions?",
      back: "By adopting a firm, authoritative role — a credible alternative to the peer group.", src: P(85, "Post test answer 7") },
    { id: "r6", type: "fill", concept: "older", visual: "learner-ages",
      before: "Older adults are likely to be", after: "confident than younger ones.",
      options: ["less", "more", "equally", "over-"], answer: "less",
      explain: "They may become over-dependent on the instructor.", src: P(85, "Post test answer 8") },
    { id: "r7", type: "flash", concept: "language", visual: "language-codes",
      front: "What is a 'restricted' language code?",
      back: "Short, simple, unplanned sentences — clear and easy to understand, though depth may be reduced.", src: P(85, "Post test answer 10") },
    { id: "r8", type: "flash", concept: "language",
      front: "What should you do if you need technical terms?",
      back: "Explain them in simple terms so the learner understands them.", src: P(85, "Post test answer 12") },
    { id: "r9", type: "flash", concept: "stereotyping",
      front: "What's the main danger of stereotyping a pupil?",
      back: "The pupil will adopt the role you portray for them.", src: P(85, "Post test answer 13") },
    { id: "r10", type: "flash", concept: "older",
      front: "How does an adult's motivation differ from a child's?",
      back: "Adults are motivated more by short-term goals meeting immediate needs; children by longer-term promise of reward.", src: P(85, "Post test answer 15") },
  ],
};

/* ---------------------------------------------------------------------------
   3. KNOW YOUR LEARNER — recognition.
   --------------------------------------------------------------------------- */
const learners = {
  id: "learners",
  kind: "items",
  mode: "matching",
  title: "Know Your Learner",
  blurb: "Spot it, sort it — ages, language, tone",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "known-unknown",
      prompt: "Which picture shows teaching from the known to the unknown?",
      options: ["known-unknown", "language-codes", "credit-blame"], answer: 0,
      names: ["Known to unknown", "Language codes", "Credit and blame"],
      explain: "A normal stop taught from cycling.", src: P(33, "For example") },
    {
      id: "k2", type: "sort", concept: "adolescents",
      prompt: "More typical of…",
      categories: [
        { id: "teen", label: "Adolescents" },
        { id: "older", label: "Older adults" },
      ],
      cards: [
        { text: "Strongly swayed by peer pressure", cat: "teen" },
        { text: "Expects to be lectured", cat: "older" },
        { text: "Motivated by short-term goals", cat: "older" },
        { text: "Used to a classroom", cat: "teen" },
        { text: "Over-anxious, depends on the instructor", cat: "older" },
      ],
      explain: "Adapt your approach to each.", src: P(34, "Adolescents; Older adults") },
    { id: "k3", type: "picture", label: "Spot it", concept: "language",
      prompt: "Which picture compares ways of explaining?",
      options: ["learner-ages", "language-codes"], answer: 1,
      names: ["Learner ages", "Language codes"],
      explain: "Restricted vs elaborate code.", src: P(34, "Language and learning") },
    {
      id: "k4", type: "sort", concept: "language",
      prompt: "Restricted or elaborate?",
      categories: [
        { id: "res", label: "Restricted" },
        { id: "ela", label: "Elaborate" },
      ],
      cards: [
        { text: "'Check your mirror.'", cat: "res" },
        { text: "'Disengage the drive via the friction plate'", cat: "ela" },
        { text: "Short, unplanned sentences", cat: "res" },
        { text: "Relies on technical terminology", cat: "ela" },
      ],
      explain: "Simple direct phrases are usually more effective.", src: P(34, "The elaborate code") },
    {
      id: "k5", type: "sort", concept: "stereotyping",
      prompt: "Helps learning or hinders it?",
      categories: [
        { id: "help", label: "Helps" },
        { id: "hurt", label: "Hinders" },
      ],
      cards: [
        { text: "'You'll pick this up quickly'", cat: "help" },
        { text: "'You'll be slow — you're older'", cat: "hurt" },
        { text: "Sarcasm on the first lesson", cat: "hurt" },
        { text: "Early praise and encouragement", cat: "help" },
      ],
      explain: "A pupil adopts the role you portray.", src: P(35, "Stereotyping") },
    { id: "k6", type: "picture", label: "Spot it", concept: "credit-blame",
      prompt: "Which picture shows how to word a fault?",
      options: ["credit-blame", "known-unknown"], answer: 0,
      names: ["Credit and blame", "Known to unknown"],
      explain: "'We' for the fault, 'you' for the success.", src: P(35, "Give the credit") },
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
  blurb: "Cycling to driving",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "known-unknown", visual: "known-unknown",
      prompt: "Match the cycling action to the driving action.",
      pairs: [
        ["Stop pedalling", "Off the gas"],
        ["Gently squeeze the brakes", "Gently brake to slow"],
        ["Squeeze to stop, foot down", "Brake to stop, clutch down"],
      ],
      explain: "Teaching from the known to the unknown.", src: P(33, "For example") },
    {
      id: "m2", type: "match", concept: "adult-learners",
      prompt: "Match the term.",
      pairs: [
        ["Intelligence", "Faculty of understanding"],
        ["IQ", "Mental age ÷ actual age"],
        ["Peer group", "Similar age, sex, interests"],
        ["Stereotyping", "Pre-judging a pupil"],
      ],
      explain: "Terms from this unit.", src: P(85, "Post test answers") },
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
  blurb: "Giving the credit, sharing the blame",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "credit-blame", visual: "credit-blame",
      prompt: "After a wide left turn — in order.",
      steps: ["'We went a little wide on that turn'", "Pick another left turn ahead", "Give the instruction in good time, stressing the approach", "Praise what they did well"],
      explain: "Then move on.", src: P(35, "Give the credit and share the blame") },
    { id: "p2", type: "order", concept: "known-unknown", visual: "known-unknown",
      prompt: "A normal stop, the car way — in order.",
      steps: ["Off the gas", "Gently brake to slow", "Gently brake to a stop", "Clutch down"],
      explain: "Linked to stopping a bicycle.", src: P(33, "For example") },
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
  blurb: "Different learners, different needs",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "adult-learners",
      scene: "👵 A recently retired woman books lessons. A colleague says older people are slower to learn.",
      prompt: "What do you remember?",
      options: ["He's right", "Ability to learn doesn't particularly decrease with age", "Women are slower", "Your pass rate will drop"], answer: 1,
      explain: "Provided health doesn't restrict it.", src: P(37, "Retention Q4 (answer c, p.87)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "older",
      scene: "🧑‍💼 Your pupil is a senior manager twice your age and seems uncomfortable taking instruction.",
      prompt: "How do you redress the imbalance?",
      options: ["Show who's boss", "A warm, friendly attitude", "Impress them with your ability", "Suggest another instructor"], answer: 1,
      explain: "They expect dignity and respect.", src: P(37, "Retention Q3 (answer a, p.87)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "adolescents",
      scene: "🧢 A 17-year-old says his mates all drive fast and think signals are pointless.",
      prompt: "Your approach?",
      options: ["Agree to keep him happy", "Be a firm, authoritative, credible alternative to his peers", "Lecture him for an hour", "Tell his parents"], answer: 1,
      explain: "Peer groups set standards new drivers tend to follow.", src: P(85, "Post test answers 6, 7") },
    { id: "s4", type: "choice", label: "Scenario", concept: "tone",
      scene: "😩 It's your last lesson of a long day and the pupil stalls for the fourth time.",
      prompt: "What do you watch?",
      options: ["Nothing — they'll understand", "Your tone — keep it upbeat; a change may sound angry", "Speed up the lesson", "End early"], answer: 1,
      explain: "Same tone in the last lesson as the first.", src: P(35, "Verbal communication delivery & tone") },
    { id: "s5", type: "choice", label: "Scenario", concept: "language",
      scene: "⚙️ You explain the clutch using 'friction plate' and 'flywheel', and the pupil looks lost.",
      prompt: "What's best?",
      options: ["Use more technical terms", "Explain the terms simply, or use simpler words", "Move on", "Give them a manual"], answer: 1,
      explain: "Technical terms must be adequately explained.", src: P(37, "Retention Q9 (answer a, p.87)") },
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
  blurb: "Patrick's left turn",
  xpPer: 10,
  situation: "↩️ Your pupil Patrick swings wide on a left turn. You realise your instruction came late.",
  items: [
    { id: "w1", type: "choice", step: "Your words", concept: "credit-blame", prompt: "You say…",
      options: ["'You went wide again!'", "'We went a little wide on that one'", "Nothing", "'That was terrible'"], answer: 1,
      explain: "Share the blame.", src: P(35, "Give the credit and share the blame") },
    { id: "w2", type: "choice", step: "Next turn", concept: "credit-blame", prompt: "For the next left turn, you…",
      options: ["Instruct late again", "Identify it early and stress the approach position", "Let him choose", "Skip left turns"], answer: 1,
      explain: "The late instruction caused the fault.", src: P(35, "Give the credit and share the blame") },
    { id: "w3", type: "choice", step: "Success", concept: "credit-blame", prompt: "He gets it right. You…",
      options: ["Say nothing", "Give specific praise: mirror, signal, position", "Say 'about time'", "Book a test"], answer: 1,
      explain: "Give the credit.", src: P(35, "Give the credit") },
    { id: "w4", type: "choice", step: "Confidence", concept: "tone", prompt: "Your enthusiasm will most likely…",
      options: ["Boost his self-confidence", "Discourage questions", "Make you seem a poor teacher", "Seem eccentric"], answer: 0,
      explain: "Enthusiasm is infectious.", src: P(37, "Retention Q10 (answer a, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 87. All ten are used.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(37, `Retention test Q${n}; answer p.87`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "Giving instruction in short progressive steps will usually", ["bore the pupil", "end the lesson early", "cause poor control", "help maintain the pupil's interest"], 3, "known-unknown"),
    R(2, "Language affects how well pupils understand new concepts. It's likely that", ["technical terms let a concept be put simply", "simple language lets a concept be put without losing it in irrelevant detail", "simple language won't allow new concepts", "technical terms won't allow new concepts"], 1, "language", "language-codes"),
    R(3, "You sense a power imbalance because of your pupil's age or position. You should", ["adopt a warm and friendly attitude", "adopt a commanding attitude", "impress them with your ability", "suggest a more qualified instructor"], 0, "older"),
    R(4, "An instructor of 17–25-year-olds is asked to teach a retired lady. Remember that", ["females are slower to learn", "older people learn more slowly", "the ability to learn doesn't particularly decrease with age", "your pass rate will plummet"], 2, "adult-learners"),
    R(5, "Older adults are most likely to be motivated by", ["short-term goals", "long-term objectives", "extremely challenging objectives", "a lack of objectives"], 0, "older", "learner-ages"),
    R(6, "When introducing new material, the instructor should", ["assume older learners have more experience", "proceed from the known to the unknown", "raise the level according to age", "assume younger pupils learn faster"], 1, "known-unknown", "known-unknown"),
    R(7, "Where new material conflicts with what's already known", ["the pupil won't believe the instructor", "there'll be negative transfer of learning", "learning will be easier", "the instructor should argue"], 1, "known-unknown"),
    R(8, "In general, the older the learner", ["the more self-confident", "the more time they'll give to recapping", "the less self-confident they may be", "the more attentive"], 2, "older"),
    R(9, "An instructor using technical terms must make sure", ["they're adequately explained", "only with intellectual adults", "the pupil can admit ignorance", "they explain them if asked"], 0, "language"),
    R(10, "The more enthusiastic an instructor, the more likely they are to", ["boost the pupil's self-confidence", "discourage questions", "be seen as a poor teacher", "seem eccentric"], 0, "tone"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "adult-learners",
      prompt: "Does academic ability guarantee driving ability?", options: ["Yes", "No — driving is mainly a manual skill", "Only for adults", "Only with an IQ over 120"], answer: 1,
      explain: "Academic gifts don't mean psychomotor gifts.", src: P(85, "Post test answer 4") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "adolescents",
      prompt: "Which picture compares younger and older learners?", options: ["learner-ages", "language-codes", "known-unknown"], answer: 0,
      names: ["Learner ages", "Language codes", "Known to unknown"],
      explain: "Adolescents and older adults.", src: P(34, "Adolescents; Older adults") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "older",
      statement: "Older adults will respect a truthful answer even if you don't know the precise answer.", answer: true,
      explain: "Honesty earns respect.", src: P(34, "Older adults") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "stereotyping",
      scene: "🗯️ A colleague tells a pupil 'you'll never pass first time'.",
      prompt: "Likely effect?", options: ["Motivation", "The pupil adopts that role and makes less effort", "None", "Faster learning"], answer: 1,
      explain: "Telling them they'll fail may produce just that.", src: P(35, "Stereotyping") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "language",
      prompt: "Match it.", pairs: [["Restricted code", "Short and simple"], ["Elaborate code", "Technical and detailed"], ["Jargon", "Explain it simply"]],
      explain: "Simple direct phrases usually work best.", src: P(34, "Language and learning") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "known-unknown",
      prompt: "In order:", steps: ["Find what they know", "Link the new skill to it", "Practise the new skill"],
      explain: "Known to unknown.", src: P(33, "Adults as learners") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "older",
      scene: "⏳ A busy 50-year-old parent has little time to study between lessons.",
      prompt: "What helps most?", options: ["Long homework", "Clear short-term goals each lesson", "Longer gaps", "Lecture-style lessons"], answer: 1,
      explain: "Older adults respond to short-term goals.", src: P(34, "Older adults") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "older",
      prompt: "Older adults are most motivated by…", options: ["Short-term goals", "Long-term objectives", "Extreme challenges", "No objectives"], answer: 0,
      explain: "Immediate needs.", src: P(37, "Retention Q5 (answer a, p.87)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "credit-blame",
      prompt: "You gave a late instruction and the pupil braked hard. Which picture shows how to talk about it?", options: ["credit-blame", "learner-ages"], answer: 0,
      names: ["Credit and blame", "Learner ages"],
      explain: "Share the blame.", src: P(35, "Give the credit and share the blame") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "known-unknown",
      prompt: "When new material conflicts with what's known, there's…", options: ["No belief", "Negative transfer", "Easier learning", "An argument"], answer: 1,
      explain: "It's harder to learn.", src: P(37, "Retention Q7 (answer b, p.87)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "4.5",
  number: "4.5",
  title: "Teaching Adults",
  pages: [33, 37],
  intro: "Adults as learners, known to unknown, adolescents and older adults, language codes, tone, stereotyping, and giving the credit while sharing the blame.",
  objectives: [
    "How age affects the ability to learn",
    "What adults expect when learning",
    "Long- and short-term goals and adult motivation",
    "Language in teaching; the dangers of stereotyping",
  ],
  objectivesSrc: P(33, "Objectives"),
  mcqLink: { sectionId: "adi.sec.pedagogy", label: "Teaching Ability – Pedagogy" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...learners, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "learner-reader", icon: "🧓", label: "Know Your Learner", rule: { activity: "learners", min: 100 } },
    { id: "adult-learning-specialist", icon: "🏆", label: "Adult Learning Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
