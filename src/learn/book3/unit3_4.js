/*
  ===========================================================================
  BOOK 3 · UNIT 3.4 — REGISTERED DRIVING INSTRUCTOR REGULATIONS

  Source: "Theory Resource Workbook 3 of 4" (Driver Education Supplies),
  book pages 27–39, with the retention-test answers on page 93 (40
  questions). The post test (p.35) is about the theory-test booking FAQ,
  answered at the back of the book; it isn't used here.

  Omitted retention questions (answer key unsafe):
  - Q10 (who to write to about revoking an ADI licence) and Q11 (attending
    an appeal hearing): appeal procedures aren't in the unit.
  - Q14 (cancelling a test without losing the fee, keyed "ten clear days'
    notice"): not in the unit.
  - Q21 (six driving faults on stage 2, keyed "must consider that the
    candidate has reached the required standard"): the unit says a
    maximum of 5 faults — six means failure.
  - Q22 (seats in the back of the test vehicle): the unit gives three
    adjustable forward-facing passenger seats, so two options fit.

  The unit itself says its information is a guide only: always check the
  latest from the RSA ADI unit.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 3, unit: "3.4", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "eligibility": {
    title: "Becoming an ADI",
    text: "The RSA regulates driving instruction. Applicants must satisfy the ADI Registrar that they're of good repute (Garda checks; a declaration of no serious convictions), be normally resident in Ireland with a PPSN, have held a full licence in the category for at least two years, be Garda vetted by the National Vetting Bureau, and be tax compliant. Regulations under the Road Traffic Act 1968 require anyone instructing for reward to be on the Register.",
    src: P(27, "Eligibility criteria; Legal position"),
  },
  "stages": {
    title: "The three-stage exam",
    text: "Stage 1: theory. Stage 2: driving ability. Stage 3: ability to instruct. Each is sat separately, in order, and all three must be completed within two years of passing stage 1. Theory attempts are unlimited. Exemptions are possible for similar experience or qualifications.",
    src: P(27, "The examination; p.28"),
  },
  "theory": {
    title: "Stage 1 — theory",
    text: "A computer-based test on the Rules of the Road, road safety and instruction — question numbers vary by category. Book online or by phone with your eligibility number; your name must match your ID exactly and your PPSN must be correct. Questions are banded into subjects (road safety, Rules of the Road, pedagogy, disability, fault correction, mechanics, test procedures and more), each with its own pass mark.",
    src: P(28, "Stage one theory test; How to book; Subject banding; p.29"),
  },
  "stage2": {
    title: "Stage 2 — your own driving",
    text: "A longer, more comprehensive test than the learner test: about 1–1½ hours over 25–30 km, with a maximum of 5 driver faults and no serious or potentially serious faults. It includes motorway and suburban driving, hand signals, turnabout, reverses left and right, parallel parking and an emergency stop, plus technical checks. You must show expert handling, correct road procedure, anticipation and sound judgement. The car must be insured, taxed, NCT'd, roadworthy — and show no L-plates or driving-school advertising.",
    src: P(29, "The stage two; p.30"),
  },
  "trainee": {
    title: "The trainee licence",
    text: "A mentoring opportunity, held for a maximum of six months, granted only after passing stage 2. You must not have held one before, and need a registered ADI to sponsor and supervise you, following the RSA syllabus and keeping a record. A sponsor may have only one trainee. Unlike stage 2, the car must display L-plates front and rear.",
    src: P(31, "A trainee licence"),
  },
  "stage3": {
    title: "Stage 3 — ability to instruct",
    text: "The examiner role-plays a pupil — a beginner in phase 1, then a pupil at test standard in phase 2 (topic nominated by the examiner), about 25–30 minutes each, with a few minutes to prepare between. Treat them as two separate lessons. The examiner looks for a recap, clear objectives and plan, clear concise information, a friendly manner, encouragement, matching the learner's level, questions, feedback, building confidence, changing approach when needed, and fault analysis. Results within ten working days.",
    src: P(31, "Stage three test; Role play; p.33"),
  },
  "stage3-car": {
    title: "Stage 3 vehicle",
    text: "Bring your licence. Your insurance must cover the examiner (and any supervisor) for all third party and damage risks — a tuition policy; the RSA accepts no responsibility for claims. L-plates front and rear, a manual gearbox (an automatic restricts you to automatics), right-hand steering and three adjustable forward-facing passenger seats. Clean inside, teaching aids secured, old association badges removed.",
    src: P(32, "Stage three requirements; Vehicle conditions; p.34 Automatic vehicles"),
  },
  "after": {
    title: "After qualifying",
    text: "Comply with the conditions of registration and pay the fee: registration lasts two years. During it you'll have check tests — 'a test of continued ability to give instruction' — where the examiner joins a real lesson with a pupil of your choice. They're a condition of continued registration; failing to attend may mean removal. Unsuccessful at stage 3? Read the report, reapply and pay again, within the two years.",
    src: P(33, "If you have been successful; p.34 The check test"),
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
    "Theory → own driving → instructing, all within 2 years",
    "Stage 2: no L-plates. Stage 3: L-plates front and rear",
    "Registration lasts 2 years, with check tests",
  ],
  cards: [
    {
      icon: "🏛️",
      kicker: "Becoming an ADI",
      title: "Good repute first",
      list: [
        "The RSA regulates driving instruction",
        "Of good repute; Garda vetted; tax compliant",
        "Normally resident in Ireland, with a PPSN",
        "A full licence in the category for at least 2 years",
        "Instructing for reward means being on the Register",
      ],
      concept: "eligibility",
      src: P(27, "Eligibility criteria; Legal position"),
    },
    {
      icon: "3️⃣",
      kicker: "The exam",
      title: "Three stages, two years",
      visual: "adi-stages",
      ask: {
        prompt: "All three stages must be completed within…",
        options: ["One year of applying", "Two years of passing stage 1", "Four years"],
        answer: 1,
      },
      list: [
        "Stage 1 — theory (unlimited attempts)",
        "Stage 2 — your own driving",
        "Stage 3 — your ability to instruct",
        "Sat separately, in order",
      ],
      concept: "stages",
      src: P(27, "The examination; p.28"),
    },
    {
      icon: "💻",
      kicker: "Stage 1",
      title: "The theory test",
      list: [
        "Computer-based; question numbers depend on the category",
        "Book with your eligibility number — online or by phone",
        "Your name must match your ID exactly; PPSN correct",
        "Subject bands — each with its own pass mark",
      ],
      concept: "theory",
      src: P(28, "Stage one theory test; How to book"),
    },
    {
      icon: "🚗",
      kicker: "Stage 2",
      title: "Drive like an expert",
      list: [
        "About 1–1½ hours, 25–30 km",
        "Maximum 5 driver faults; none serious",
        "Motorway, manoeuvres, hand signals, emergency stop, technical checks",
        "Car insured, taxed, roadworthy — no L-plates or school adverts",
      ],
      concept: "stage2",
      src: P(29, "The stage two; p.30"),
    },
    {
      icon: "🪪",
      kicker: "Trainee licence",
      title: "Six months of mentoring",
      visual: "trainee-licence",
      list: [
        "Only after passing stage 2; never held one before",
        "A sponsoring ADI supervises and keeps a record",
        "One trainee per sponsor; RSA syllabus",
        "L-plates front and rear",
      ],
      concept: "trainee",
      src: P(31, "A trainee licence"),
    },
    {
      icon: "🎭",
      kicker: "Stage 3",
      title: "Two phases of role-play",
      visual: "stage3-phases",
      ask: {
        prompt: "In phase 1 the examiner plays…",
        options: ["A test-standard pupil", "A beginner", "Another instructor"],
        answer: 1,
      },
      list: [
        "Phase 1: a beginner · Phase 2: test standard",
        "About 25–30 minutes each",
        "Treat them as two separate lessons",
        "The examiner nominates the phase 2 topic",
      ],
      concept: "stage3",
      src: P(31, "Stage three test; Role play"),
    },
    {
      icon: "🔎",
      kicker: "What the examiner looks for",
      title: "A real lesson",
      list: [
        "Recap and clear objectives; a clear plan",
        "Clear, concise, friendly — no jargon",
        "Match the learner's level; encourage questions",
        "Feedback; change approach if it isn't working",
        "Identify and analyse faults; summarise and link",
      ],
      concept: "stage3",
      src: P(33, "Prior to and during the stage three"),
    },
    {
      icon: "🛡️",
      kicker: "Stage 3 car",
      title: "Insured for the examiner",
      list: [
        "Insurance covering the examiner — a tuition policy",
        "L-plates front and rear",
        "Manual gearbox (automatic: automatics only)",
        "Clean, teaching aids secured, old badges removed",
      ],
      callout: "The RSA accepts no responsibility for claims arising from your car.",
      concept: "stage3-car",
      src: P(32, "Stage three requirements; Vehicle conditions"),
    },
    {
      icon: "✅",
      kicker: "After qualifying",
      title: "Two years, then check tests",
      list: [
        "Pay the fee: registration lasts 2 years",
        "Check tests: the examiner joins a lesson with a pupil of your choice",
        "A condition of continued registration",
        "Failed stage 3? Read the report and reapply within the 2 years",
      ],
      concept: "after",
      src: P(33, "If you have been successful; p.34"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   2. QUICK RECALL
   --------------------------------------------------------------------------- */
const recall = {
  id: "recall",
  kind: "items",
  mode: "recall",
  title: "Quick Recall",
  blurb: "Flash cards, true or false, fill the gap",
  xpPer: 10,
  items: [
    { id: "r1", type: "flash", concept: "stages", visual: "adi-stages",
      front: "The three stages of the ADI exam?",
      back: "Stage 1 theory; stage 2 driving ability; stage 3 ability to instruct.", src: P(27, "The examination") },
    { id: "r2", type: "fill", concept: "eligibility",
      before: "You must have held a full licence in the category for at least", after: ".",
      options: ["two years", "one year", "five years", "six months"], answer: "two years",
      explain: "In the category you wish to teach.", src: P(27, "Legal position") },
    { id: "r3", type: "truefalse", concept: "theory",
      statement: "The number of theory test attempts is limited to two.", answer: false,
      explain: "Unlimited — but all three stages must be done within two years of passing stage 1.", src: P(28, "Stage one theory test") },
    { id: "r4", type: "fill", concept: "stage2",
      before: "Stage 2 allows a maximum of", after: "driver faults.",
      options: ["5", "10", "15", "2"], answer: "5",
      explain: "And no serious or potentially serious faults.", src: P(29, "The stage two") },
    { id: "r5", type: "truefalse", concept: "stage2",
      statement: "The stage 2 car must display L-plates.", answer: false,
      explain: "No L-plates or driving-school advertising for stage 2.", src: P(30, "You should also note that") },
    { id: "r6", type: "fill", concept: "trainee", visual: "trainee-licence",
      before: "A trainee licence can be held for a maximum of", after: ".",
      options: ["six months", "two years", "one year", "three months"], answer: "six months",
      explain: "Granted only after passing stage 2.", src: P(31, "A trainee licence") },
    { id: "r7", type: "flash", concept: "stage3", visual: "stage3-phases",
      front: "What happens in the two phases of stage 3?",
      back: "Phase 1: instructing a beginner. Phase 2: a test-standard pupil, topic nominated by the examiner. About 25–30 minutes each.", src: P(31, "Stage three test") },
    { id: "r8", type: "truefalse", concept: "stage3-car",
      statement: "For stage 3, your insurance must cover the examiner.", answer: true,
      explain: "For all third party and damage risks — a tuition policy.", src: P(32, "Vehicle requirements") },
    { id: "r9", type: "fill", concept: "after",
      before: "ADI registration lasts", after: "from the date of issue.",
      options: ["two years", "four years", "ten years", "one year"], answer: "two years",
      explain: "With check tests during that time.", src: P(33, "If you have been successful") },
    { id: "r10", type: "flash", concept: "after",
      front: "What is the check test?",
      back: "A test of continued ability to give instruction: the examiner joins a lesson with a pupil of your choice.", src: P(34, "The check test") },
  ],
};

/* ---------------------------------------------------------------------------
   3. STAGE BY STAGE — recognition.
   --------------------------------------------------------------------------- */
const stages = {
  id: "stages",
  kind: "items",
  mode: "matching",
  title: "Stage by Stage",
  blurb: "Spot it, sort it — the three-stage exam",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "stages",
      prompt: "Which picture shows the three-stage ADI exam?",
      options: ["adi-stages", "stage3-phases", "trainee-licence"], answer: 0,
      names: ["Three stages", "Stage 3 phases", "Trainee licence"],
      explain: "Theory, own driving, instructing — within two years.", src: P(27, "The examination") },
    { id: "k2", type: "picture", label: "Spot it", concept: "stage3",
      prompt: "Which picture shows the instructional ability test?",
      options: ["stage3-phases", "adi-stages"], answer: 0,
      names: ["Two role-play phases", "Three stages"],
      explain: "The examiner role-plays a beginner, then a test-standard pupil.", src: P(31, "Stage three test") },
    {
      id: "k3", type: "sort", concept: "stages",
      prompt: "Which stage?",
      categories: [
        { id: "s1", label: "Stage 1" },
        { id: "s2", label: "Stage 2" },
        { id: "s3", label: "Stage 3" },
      ],
      cards: [
        { text: "Computer-based questions", cat: "s1" },
        { text: "An emergency stop", cat: "s2" },
        { text: "No L-plates allowed", cat: "s2" },
        { text: "The examiner plays a pupil", cat: "s3" },
        { text: "L-plates front and rear", cat: "s3" },
      ],
      explain: "Theory, own driving, instructing.", src: P(28, "Stages one to three") },
    {
      id: "k4", type: "sort", concept: "stage3",
      prompt: "Stage 3 — good practice or fault?",
      categories: [
        { id: "ok", label: "Good practice" },
        { id: "no", label: "Fault" },
      ],
      cards: [
        { text: "Recap and set objectives", cat: "ok" },
        { text: "Change approach when it isn't working", cat: "ok" },
        { text: "Summarise and link to the next lesson", cat: "ok" },
        { text: "Technical jargon", cat: "no" },
        { text: "The same lesson for both phases", cat: "no" },
      ],
      explain: "Treat the two phases as two different pupils.", src: P(33, "The ADI candidate must") },
    { id: "k5", type: "picture", label: "Spot it", concept: "trainee",
      prompt: "Which picture shows the trainee licence rules?",
      options: ["trainee-licence", "stage3-phases"], answer: 0,
      names: ["Trainee licence", "Stage 3 phases"],
      explain: "Six months maximum, after stage 2, with a sponsoring ADI.", src: P(31, "A trainee licence") },
    {
      id: "k6", type: "sort", concept: "eligibility",
      prompt: "Needed to apply?",
      categories: [
        { id: "yes", label: "Required" },
        { id: "no", label: "Not required" },
      ],
      cards: [
        { text: "Garda vetting", cat: "yes" },
        { text: "Tax compliance", cat: "yes" },
        { text: "Full licence for 2+ years", cat: "yes" },
        { text: "Your own driving school car", cat: "no" },
        { text: "Years of instructing experience", cat: "no" },
      ],
      explain: "Good repute, vetting, tax compliance, residence and a licence.", src: P(27, "Eligibility; Legal position") },
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
  blurb: "Numbers and stages",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "stages",
      prompt: "Match the number to the rule.",
      pairs: [
        ["2 years", "Complete all three stages"],
        ["6 months", "Trainee licence"],
        ["5", "Maximum stage 2 faults"],
        ["10 working days", "Stage 3 result"],
      ],
      explain: "Key figures for ADI candidates.", src: P(28, "Stage one; p.29; p.31") },
    {
      id: "m2", type: "match", concept: "stages", visual: "adi-stages",
      prompt: "Match the stage to what it tests.",
      pairs: [
        ["Stage 1", "Knowledge — theory"],
        ["Stage 2", "Your own driving"],
        ["Stage 3", "Ability to instruct"],
        ["Check test", "Continued ability to instruct"],
      ],
      explain: "From applicant to registered ADI.", src: P(27, "The examination; p.34") },
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
  blurb: "From applicant to ADI",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "stages", visual: "adi-stages",
      prompt: "Becoming an ADI — in order.",
      steps: ["Apply: good repute, vetting, tax compliance", "Pass stage 1 theory", "Pass stage 2 driving", "Optional trainee licence", "Pass stage 3 instructing", "Pay the fee and join the Register"],
      explain: "All three stages within two years of passing stage 1.", src: P(27, "Eligibility; p.31; p.33") },
    { id: "p2", type: "order", concept: "stage3", visual: "stage3-phases",
      prompt: "Stage 3 — in order.",
      steps: ["Administration and the format explained", "Phase 1: instruct a beginner", "A few minutes to prepare", "Phase 2: the examiner's topic at test standard", "Result within ten working days"],
      explain: "Use the break to prepare your visual teaching aids.", src: P(31, "Stage three test; p.33") },
    { id: "p3", type: "order", concept: "stage3",
      prompt: "Opening a stage 3 lesson — in order.",
      steps: ["Introduce yourself; ask their preferred name", "Point out the dual controls", "Outline what they'll learn", "Invite questions later"],
      explain: "Then recap and set objectives.", src: P(31, "Role play; p.32") },
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
  blurb: "Situations for ADI candidates",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "stage2",
      scene: "🚗 You plan to take stage 2 in your car, which has a driving school roof sign.",
      prompt: "What should you do?",
      options: ["Leave it on", "Remove it — no L-plates or school advertising for stage 2", "Add L-plates too", "Cover it with tape"], answer: 1,
      explain: "It could mislead the public about who is driving.", src: P(36, "Retention Q2 (answer a, p.93); p.30") },
    { id: "s2", type: "choice", label: "Scenario", concept: "stage3-car",
      scene: "🛡️ Your private car only has social, domestic and pleasure insurance. You want to use it for stage 3.",
      prompt: "What's needed?",
      options: ["Nothing", "Insurance covering the examiner — a tuition policy, or hire an insured tuition car", "The RSA covers it", "Only L-plates"], answer: 1,
      explain: "The RSA accepts no responsibility for claims.", src: P(32, "Stage three requirements; Named drivers") },
    { id: "s3", type: "choice", label: "Scenario", concept: "stage3",
      scene: "🎭 In phase 2 the 'pupil' keeps misunderstanding your explanation.",
      prompt: "What does the examiner want to see?",
      options: ["Repeat it louder", "Change your approach — try another way", "Move on", "Correct the examiner"], answer: 1,
      explain: "The ability to change approach when it isn't working.", src: P(33, "Prior to and during the stage three") },
    { id: "s4", type: "choice", label: "Scenario", concept: "trainee",
      scene: "🪪 You've just passed stage 1 and want a trainee licence to start teaching.",
      prompt: "Can you get one?",
      options: ["Yes", "Not yet — only after passing stage 2", "Only after stage 3", "There's no such thing"], answer: 1,
      explain: "Apply having passed stages one and two.", src: P(39, "Retention Q37 (answer b, p.93)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "stage3-car",
      scene: "⚙️ You take stage 3 in an automatic car.",
      prompt: "What's the result if you pass?",
      options: ["Teach any category B car", "A restricted certificate — automatics only", "It's not allowed", "Teach automatics and motorcycles"], answer: 1,
      explain: "An automatic restricts you to teaching in automatics.", src: P(39, "Retention Q38 (answer c, p.93)") },
    { id: "s6", type: "choice", label: "Scenario", concept: "after",
      scene: "📬 A check test appointment arrives for a date you'd rather ignore.",
      prompt: "What's the risk?",
      options: ["None — it's voluntary", "It may result in removal from the Register", "Two more check tests", "A small fine"], answer: 1,
      explain: "Check tests are a condition of continued registration.", src: P(38, "Retention Q31 (answer c, p.93)") },
    { id: "s7", type: "choice", label: "Scenario", concept: "theory",
      scene: "💻 Booking your theory test, you use a nickname, not the name on your passport.",
      prompt: "What could happen?",
      options: ["Nothing", "A long delay or problems at the centre — names must match exactly", "A discount", "A faster result"], answer: 1,
      explain: "And a wrong PPSN means your result won't be found.", src: P(28, "Important — when making an application") },
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
  blurb: "One candidate's journey",
  xpPer: 10,
  situation: "🧭 Aoife wants to become an ADI. Guide her through the process.",
  items: [
    { id: "w1", type: "choice", step: "Applying", concept: "eligibility", prompt: "Where does she apply to join the Register?",
      options: ["The RSA ADI unit", "The local test centre", "Driver Licensing", "The Department of Transport"], answer: 0,
      explain: "Applications go to the RSA ADI unit.", src: P(37, "Retention Q15 (answer a, p.93)") },
    { id: "w2", type: "choice", step: "Requirements", concept: "eligibility", prompt: "To be accepted she must…",
      options: ["Be an experienced instructor", "Be tax compliant, Garda vetted and of good repute", "Own a driving school car", "Have no convictions in 6 months"], answer: 1,
      explain: "Plus residence, a PPSN and a licence for 2+ years.", src: P(38, "Retention Q32 (answer b, p.93)") },
    { id: "w3", type: "choice", step: "Stage 1", concept: "theory", prompt: "How many attempts at the theory test?",
      options: ["As many as she wishes", "Twice in two years", "Once", "Four times"], answer: 0,
      explain: "But all stages within two years of passing stage 1.", src: P(39, "Retention Q34 (answer a, p.93)") },
    { id: "w4", type: "choice", step: "Stage 2", concept: "stage2", prompt: "In stage 2 she's expected to…",
      options: ["Demonstrate skid correction", "Answer Rules of the Road questions", "Drive as an experienced driver with expert handling and consideration", "Drive to L-test standard"], answer: 2,
      explain: "A high standard of driving, proficiency and confidence.", src: P(38, "Retention Q29 (answer c, p.93)") },
    { id: "w5", type: "choice", step: "Stage 3", concept: "stage3", prompt: "Who nominates the lessons in stage 3?",
      options: ["Aoife", "The examiner on the day", "The ADI office in advance", "Chance"], answer: 1,
      explain: "The examiner nominates the phase 2 topic.", src: P(39, "Retention Q40 (answer b, p.93)") },
    { id: "w6", type: "choice", step: "Registered", concept: "after", prompt: "After joining the Register, she may call herself…",
      options: ["A DIR registered instructor", "A D.O.T. approved instructor", "An RSA registered instructor", "An RSA approved driving instructor"], answer: 3,
      explain: "An Approved Driving Instructor.", src: P(38, "Retention Q26 (answer d, p.93)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 93. Q10, Q11, Q14, Q21 and Q22 are
   omitted (see header).
   --------------------------------------------------------------------------- */
const page = n => (n <= 11 ? 36 : n <= 21 ? 37 : n <= 33 ? 38 : 39);
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(page(n), `Retention test Q${n}; answer p.93`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "After initial registration an ADI will be check tested / supervised for a period of", ["as long as ADI registration continues", "6 months", "3 months", "4 years"], 0, "after"),
    R(2, "A vehicle used for the stage 2 test of driving ability", ["must not display L-plates", "must not have dual controls fitted", "must have a driving school L-plate roof sign", "may not have dual controls fitted"], 0, "stage2"),
    R(3, "Having paid the fee, registration as an Approved Driving Instructor normally lasts for", ["2 years", "4 years", "10 years", "1 year"], 0, "after"),
    R(4, "Licences to instruct (trainee licences) are valid for", ["six months", "4 years", "1 year", "2 years"], 0, "trainee", "trainee-licence"),
    R(5, "A disabled person with no left leg wishes to qualify as an ADI in an automatic. They'll first be assessed on", ["driving ability", "ability to take control from the passenger seat", "instructional ability", "the ADI theory test"], 3, "stages", "adi-stages"),
    R(6, "A vehicle used for a 'Check Test' must have rear seatbelts fitted", ["if a motorway lesson is given", "if you're teaching a learner", "only if the examiner requests it", "regardless of the lesson content"], 3, "after"),
    R(7, "A stage 3 candidate will be tested in how many different phases?", ["6", "2", "1", "4"], 1, "stage3", "stage3-phases"),
    R(8, "The core competencies that form the basis of good instruction", ["are 'fault analysis' and 'remedial action'", "require identifying a fault, telling the pupil, and advising how to avoid it", "are 'fault identification' and 'fault analysis'", "require pointing out a fault, explaining why it happened, and advising how to avoid it"], 3, "stage3"),
    R(9, "If you disagree with how an ADI examination was conducted, you must initially complain to", ["the Minister for Transport", "the RSA Registrar", "the Garda Ombudsman", "a solicitor"], 1, "eligibility"),
    R(12, "Having passed the theory, you must undertake stage 2 within", ["2 years of commencing stage one", "1 year of passing stage one", "4 years of passing stage one", "6 weeks of passing stage one"], 0, "stages"),
    R(13, "In the theory exam, you", ["bring a pencil and pen", "need nothing — a pen is supplied", "answer questions on a computer", "have the questions read to you"], 2, "theory"),
    R(15, "Applications for entry onto the instructor register should be made to", ["the RSA ADI unit", "the driving testing services in Ballina", "the local driving test centre", "the Department of Transport"], 0, "eligibility"),
    R(16, "A candidate who fails any part may re-sit without losing credit for passed stages within", ["six months of stage one", "two years of sitting stage one", "one year of stage one", "36 weeks of stage one"], 1, "stages", "adi-stages"),
    R(17, "For the practical parts of the ADI exams, the RSA will", ["insure your vehicle for their risks", "accept responsibility for risks your insurance doesn't cover", "accept no responsibility for any damage caused", "only accept responsibility for damage caused by the candidate"], 2, "stage3-car"),
    R(18, "For ADIs to advertise the ADI qualification they must", ["seek permission from the Registrar", "advertise when they apply", "advertise when they get a trainee permit", "be examined, monitored and registered as approved"], 3, "after"),
    R(19, "On applying for the ADI exam you may be requested to", ["produce a tax clearance certificate", "never produce character references", "have a higher category licence than the one you'll teach", "have held your licence for at least 6 years"], 0, "eligibility"),
    R(20, "The ADI application form says you must hold a full licence for a minimum period in", ["the category in which you'll teach", "that category and one lower", "that category and one higher", "no particular category"], 0, "eligibility"),
    R(23, "Vehicles used for the ADI practical examinations", ["must be a driving school car", "must be taxed, insured and have an NCT cert if required", "must have four doors", "must reach and maintain 70 km/h"], 1, "stage3-car"),
    R(24, "To give free driving instruction to a friend or relative in a car you must", ["have a full licence for the category for at least two years", "have an ADI application form", "be an ADI", "notify Driver Licensing"], 0, "eligibility"),
    R(25, "A candidate enters the Register of Approved Driving Instructors when they", ["have passed all exams including stage three", "have a trainee licence", "have passed the exams, paid the fees and received confirmation", "have passed stage 1"], 2, "after"),
    R(26, "After entering the Register you may call yourself", ["a DIR registered instructor", "a D.O.T. approved instructor", "an RSA registered instructor", "an RSA approved driving instructor"], 3, "after"),
    R(27, "The test of continued ability to instruct (the check test) is", ["voluntary", "compulsory for a few ADIs only", "a condition of continued registration", "required until the instructor scores highly"], 2, "after"),
    R(28, "In the stage 2 test of driving ability you are expected to", ["perform a left-hand reverse only", "perform only the manoeuvres you'd teach a learner", "perform any two manoeuvres", "perform the reversing manoeuvres — left and right corners, turnabout and reverse parking"], 3, "stage2"),
    R(29, "In the stage 2 test you are expected to", ["demonstrate skid correction", "answer Rules of the Road questions", "drive as an experienced driver, with expert handling and consideration for others", "drive to L-test standard"], 2, "stage2"),
    R(30, "An ADI who changes their address must", ["inform their area examiner", "inform the RSA only at renewal", "advise the RSA only when the next check test is due", "inform the ADI Register as soon as practicable"], 3, "after"),
    R(31, "Failing to present yourself for a check test", ["results in automatic removal", "results in two immediate check tests", "may result in removal from the ADI Register", "isn't a cause for concern"], 2, "after"),
    R(32, "To be accepted as an ADI a candidate must", ["be an experienced instructor", "be tax compliant, Garda vetted and of good repute", "have their own driving school car", "have no motoring convictions in 6 months"], 1, "eligibility"),
    R(33, "In the ADI stage 3 test, candidates are examined in", ["one phase", "two phases", "three phases", "four phases"], 1, "stage3", "stage3-phases"),
    R(34, "The number of times a candidate may sit stage 1 within two years is", ["as many as they wish", "twice", "once", "four times"], 0, "theory"),
    R(35, "Candidates for the stage 3 test", ["must provide a vehicle and pupil", "may remove head restraints", "must act the part of a pupil", "will give instruction to a 'role-played' pupil"], 3, "stage3"),
    R(36, "Once qualified you'll receive an RSA ADI display badge and number. When teaching learners you must", ["have it displayed at all times", "display it only when teaching for reward", "display it only for full licence holders", "no conditions apply"], 0, "after"),
    R(37, "To apply for a trainee driving instructor permit you must", ["apply with your initial application", "apply having passed stages one and two", "apply having passed all three stages", "there's no such permit"], 1, "trainee"),
    R(38, "If you presented an automatic car in category B, the outcome would be", ["teach any category B car", "the RSA only accepts manual cars", "a restricted certificate to teach category B automatics only", "teach automatic, manual and lower categories"], 2, "stage3-car"),
    R(39, "The vehicle used for the RSA ADI stage 3 test must", ["have dual controls removed", "have a roof sign or L-plates and dual controls fitted", "have dual controls and a blind-spot mirror", "have dual exterior mirrors"], 1, "stage3-car"),
    R(40, "In the stage 3 examination, lessons will be nominated by", ["the trainee ADI", "the examiner on the day", "the ADI office with your appointment", "lotto"], 1, "stage3"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "eligibility",
      prompt: "Who regulates driving instruction in Ireland?", options: ["The Gardaí", "The Road Safety Authority", "The NCT", "Driver Licensing"], answer: 1,
      explain: "The RSA keeps the Register of Approved Driving Instructors.", src: P(27, "Unit introduction") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "trainee",
      prompt: "Which picture shows the six-month mentoring licence?", options: ["trainee-licence", "adi-stages", "stage3-phases"], answer: 0,
      names: ["Trainee licence", "Three stages", "Stage 3 phases"],
      explain: "Only after passing stage 2.", src: P(31, "A trainee licence") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "stage3",
      statement: "In stage 3 the examiner stays in role until the phase ends — unless an emergency arises.", answer: true,
      explain: "They tell you when they're coming out of role.", src: P(31, "Role play") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "stage3",
      scene: "📚 Between phases you have a few minutes.",
      prompt: "Best use of the time?", options: ["Chat to the examiner", "Plan phase 2 and prepare your visual aids", "Check your phone", "Ask for the result"], answer: 1,
      explain: "Don't be alarmed if the examiner is writing notes.", src: P(33, "What you may expect in phase 3") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "stages",
      prompt: "Match the stage.", pairs: [["Stage 1", "Theory"], ["Stage 2", "Own driving"], ["Stage 3", "Instructing"]],
      explain: "Sat in order, separately.", src: P(27, "The examination") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "stages",
      prompt: "The ADI route:", steps: ["Theory", "Own driving", "Instructing", "Register"],
      explain: "Within two years of passing stage 1.", src: P(27, "The examination") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "stage2",
      scene: "🚘 Stage 2 ends with six minor faults, none serious.",
      prompt: "The likely result?", options: ["A pass", "A fail — the maximum is five", "A borderline pass", "A re-drive"], answer: 1,
      explain: "A maximum of only 5 driver faults.", src: P(29, "The stage two") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "after",
      prompt: "The check test is…", options: ["Voluntary", "For a few ADIs only", "A condition of continued registration", "Only until you score highly"], answer: 2,
      explain: "Throughout your registration.", src: P(38, "Retention Q27 (answer c, p.93)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "stage3",
      prompt: "A candidate asks what to expect in stage 3. Which picture explains it?", options: ["stage3-phases", "adi-stages", "trainee-licence"], answer: 0,
      names: ["Stage 3 phases", "Three stages", "Trainee licence"],
      explain: "Beginner, then test standard.", src: P(31, "Stage three test") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "stage3",
      prompt: "In stage 3, you…", options: ["Provide a vehicle and pupil", "Remove head restraints", "Act the part of a pupil", "Instruct a 'role-played' pupil"], answer: 3,
      explain: "The examiner role-plays the pupil.", src: P(39, "Retention Q35 (answer d, p.93)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "3.4",
  number: "3.4",
  title: "Driving Instructor Regulations",
  pages: [27, 39],
  intro: "Becoming an ADI: eligibility, the three-stage exam, the trainee licence, registration and check tests.",
  objectives: [
    "ADI requirements",
    "Legal positions",
    "Three-stage exam information",
    "Test vehicle conditions",
  ],
  objectivesSrc: P(27, "Objectives"),
  mcqLink: { sectionId: "adi.sec.procedure", label: "Driving Test Procedure & Documentation" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...stages, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "stage-by-stage", icon: "3️⃣", label: "Stage by Stage", rule: { activity: "stages", min: 100 } },
    { id: "regulations-specialist", icon: "🏆", label: "Regulations Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
