/*
  ===========================================================================
  BOOK 3 · UNIT 3.10 — SAFETY BELTS & CHILD RESTRAINTS

  Source: "Theory Resource Workbook 3 of 4" (Driver Education Supplies),
  book pages 83–87: text pp.83–85, post test p.86 (model answers p.92),
  retention test p.87 (answers p.94, 11 questions).

  Omitted retention questions (answer key unsafe):
  - Q1 (a car with no belts fitted as standard, "first registered on or
    after 1/6/1971", keyed "may drive legally without seatbelts"): the
    wording is unclear and the date isn't in the unit.
  - Q9 (responsibility for an adult passenger's belt, keyed b "the driver
    passenger"): the option is garbled; "the passenger" (a) is the
    defensible answer.

  Not used from the post-test model answers: 3 and 4 (unclear), 8 (says a
  forward-facing seat needs the airbag off, but the text's rule is about
  rear-facing seats), 9 ("a minimum of 50%" against the text's 33–50%) and
  17 (points "doubled" in court, against retention Q6/Q11's 3 and 5).
  First aid: the CPR depth and rate in the text aren't shown — learn
  first aid from a qualified organisation.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 3, unit: "3.10", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Why wear a belt",
    text: "Stress belts even on the shortest journey — most accidents happen within five miles of home. A belt reduces the seriousness of injury, generally by 33% to 50%. Courts have reduced compensation to people who weren't wearing one, judging their injuries would have been less severe. A safety belt is a restraining device that keeps you in your seat in a sudden stop.",
    src: P(83, "Summaries; p.92 Q1"),
  },
  "law": {
    title: "The law",
    text: "Where belts are fitted, you must wear them — front and rear. Exceptions: people wearing a disabled person's belt, people with a medical exemption certificate, driving instructors or testers during a lesson or test, and Gardaí or Defence Forces on duty. Vintage vehicles not originally fitted are an exception. Buses used for organised transport of children must have certified belts (not scheduled public services). The regulations are S.I. 359 of 1991; check the latest Rules of the Road.",
    src: P(83, "Where safety belts are fitted; p.84 Law"),
  },
  "exemption": {
    title: "Medical exemption",
    text: "An exemption certificate comes from a medical practitioner registered in an EU member state. It must show the name, address and duration, and state clearly that wearing a belt or child restraint is inadvisable on medical grounds for that person.",
    src: P(83, "Exempt persons"),
  },
  "under17": {
    title: "Under-17s: the driver's job",
    text: "By law the driver of a car or goods vehicle must make sure passengers under 17 wear a belt or the right child restraint. Offences — an under-17 without a belt, a child not properly restrained, or a rear-facing restraint on a seat with an active frontal airbag — carry a fixed charge and up to 5 penalty points.",
    src: P(83, "Restraints for passengers under 17; p.84"),
  },
  "child-seats": {
    title: "Child restraints",
    text: "Children under 150 cm and under 36 kg must use an appropriate child restraint in a car or goods vehicle. Under 3: only in the correct child seat (taxis excepted). 3 and over but under 150 cm/36 kg (generally up to 11–12 years): the correct child seat, booster seat or cushion. Never put a rear-facing seat in a front seat with an active airbag; check the handbook about airbags. Seats must meet EU or UN-ECE standards. Two people must never share one belt. Correct restraint can cut injuries by up to 90–95% (rear-facing) and 60% (forward-facing).",
    src: P(83, "Child restraint systems; p.84"),
  },
  "belt-care": {
    title: "Belt fit and care",
    text: "The webbing should lie flat across the body, adjusted to the wearer's size. The inertia reel allows free movement normally but locks in a sudden stop or impact. Check belts regularly — at least weekly — for cuts or tears, the locking system and the anchorages. Don't carry more passengers than there are belts.",
    src: P(92, "Post test Q2, Q12–Q16 model answers"),
  },
  "first-aid": {
    title: "First on the scene",
    text: "Carry a first-aid kit; it's a condition of ADI registration to carry a vehicle safety kit. Stay calm. Make the area safe — hi-vis, warning triangle, hazard lights; switch off engines; no smoking; get bystanders to help. Call the emergency services with the exact location and number of vehicles. Don't move casualties unless there's further danger; don't remove a motorcyclist's helmet unless essential; no food or drink; keep them warm, reassure them and keep them talking. Airway, Breathing, Compressions. Bleeding: firm pressure (pad around anything embedded), raise a limb that isn't broken. Burns: cool with clean cold water for at least 10 minutes; don't remove anything stuck.",
    src: P(84, "Basic first aid; p.85"),
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
    "Under-17s are the DRIVER's responsibility",
    "Under 150 cm and 36 kg: a child restraint",
    "Never a rear-facing seat in front of an active airbag",
  ],
  cards: [
    {
      icon: "🔒",
      kicker: "Why wear one",
      title: "Every journey",
      visual: "belt-fit",
      ask: {
        prompt: "Where do most accidents happen?",
        options: ["On motorways", "Within five miles of home", "Abroad"],
        answer: 1,
      },
      list: [
        "Belts cut the seriousness of injury by about 33–50%",
        "Courts have cut compensation for non-wearers",
        "Keeps you in your seat in a sudden stop",
      ],
      concept: "why",
      src: P(83, "Summaries"),
    },
    {
      icon: "⚖️",
      kicker: "The law",
      title: "Fitted? Wear it",
      visual: "seatbelt-exempt",
      list: [
        "Front and rear, wherever belts are fitted",
        "Exempt: disabled person's belt, medical certificate",
        "Exempt: instructors and testers during a lesson or test",
        "Exempt: Gardaí and Defence Forces on duty",
      ],
      concept: "law",
      src: P(83, "Where safety belts are fitted"),
    },
    {
      icon: "🩺",
      kicker: "Medical exemption",
      title: "A proper certificate",
      list: [
        "From a doctor registered in an EU member state",
        "Name, address and how long it lasts",
        "States a belt is inadvisable on medical grounds",
      ],
      concept: "exemption",
      src: P(83, "Exempt persons"),
    },
    {
      icon: "🧒",
      kicker: "Under 17",
      title: "The driver is responsible",
      list: [
        "Driver must make sure under-17s are belted or restrained",
        "Fixed charge and up to 5 penalty points",
        "Two people must never share one belt",
      ],
      concept: "under17",
      src: P(83, "Restraints for passengers under 17; p.84"),
    },
    {
      icon: "👶",
      kicker: "Child restraints",
      title: "By height and weight",
      visual: "child-seat-stages",
      list: [
        "Under 150 cm and 36 kg: an appropriate child restraint",
        "Under 3: the correct child seat (taxis excepted)",
        "3+ (to about 11–12): child seat, booster seat or cushion",
        "EU or UN-ECE approved",
      ],
      concept: "child-seats",
      src: P(83, "Child restraint systems; p.84"),
    },
    {
      icon: "🎈",
      kicker: "Airbags",
      title: "Rear-facing? Not in front",
      visual: "airbag-rearward",
      list: [
        "Never a rear-facing seat in a front seat with an active airbag",
        "Check the handbook about child seats and airbags",
        "Rear-facing seats cut injuries by up to 90–95%",
      ],
      concept: "child-seats",
      src: P(84, "Caution; Examples of restraint systems"),
    },
    {
      icon: "🛠️",
      kicker: "Fit and care",
      title: "Flat, adjusted, checked",
      visual: "belt-fit",
      list: [
        "Webbing flat across the body, adjusted to size",
        "Inertia reel locks in a sudden stop",
        "Check weekly: cuts, tears, locking, anchorages",
      ],
      concept: "belt-care",
      src: P(92, "Post test model answers"),
    },
    {
      icon: "🚨",
      kicker: "First aid",
      title: "Safe, call, ABC",
      visual: "crash-scene",
      list: [
        "Make it safe: hi-vis, triangle, engines off, no smoking",
        "Call 112 or 999: exact location, number of vehicles",
        "Airway, Breathing, Compressions",
        "Learn first aid from a qualified organisation",
      ],
      concept: "first-aid",
      src: P(84, "Basic first aid; p.85"),
    },
    {
      icon: "🩹",
      kicker: "Casualties",
      title: "Do and don't",
      visual: "casualty-care",
      list: [
        "Don't move them unless there's further danger",
        "Don't remove a motorcyclist's helmet unless essential",
        "Bleeding: firm pressure; burns: cool water 10+ minutes",
        "ADIs must carry a vehicle safety kit",
      ],
      concept: "first-aid",
      src: P(85, "Help those involved; Bleeding; Burns"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   2. QUICK RECALL — includes post-test questions with model answers from
   page 92.
   --------------------------------------------------------------------------- */
const recall = {
  id: "recall",
  kind: "items",
  mode: "recall",
  title: "Quick Recall",
  blurb: "Flash cards, true or false, fill the gap",
  xpPer: 10,
  items: [
    { id: "r1", type: "flash", concept: "why",
      front: "What is a safety belt?",
      back: "A restraining device that keeps you in your seat in a sudden stop.", src: P(92, "Post test Q1 model answer") },
    { id: "r2", type: "flash", concept: "belt-care", visual: "belt-fit",
      front: "Having put a belt on, what should you check?",
      back: "That the webbing lies flat across your body.", src: P(92, "Post test Q2 model answer") },
    { id: "r3", type: "fill", concept: "child-seats", visual: "child-seat-stages",
      before: "Children under 150 cm and under", after: "kg must use a child restraint.",
      options: ["36", "25", "40", "50"], answer: "36",
      explain: "Generally up to 11 or 12 years old.", src: P(83, "Child restraint systems") },
    { id: "r4", type: "truefalse", concept: "under17",
      statement: "A driver can get up to 5 penalty points if a passenger under 17 isn't belted or restrained.", answer: true,
      explain: "Plus a fixed charge.", src: P(83, "Restraints for passengers under 17") },
    { id: "r5", type: "truefalse", concept: "law",
      statement: "A driving instructor giving a lesson is exempt from wearing a belt.", answer: true,
      explain: "So are testers during a test.", src: P(83, "Exempt persons") },
    { id: "r6", type: "flash", concept: "child-seats",
      front: "How many 'facing' types of child seat are there?",
      back: "Two: forward-facing and rear-facing.", src: P(92, "Post test Q7 model answer") },
    { id: "r7", type: "flash", concept: "belt-care",
      front: "When does the belt's free movement lock?",
      back: "In an emergency or sudden stop, or a collision — the inertia reel locks it.", src: P(92, "Post test Q12, Q15 model answers") },
    { id: "r8", type: "truefalse", concept: "belt-care",
      statement: "You may carry more passengers than there are seat belts if the trip is short.", answer: false,
      explain: "Don't carry more than the vehicle was designed to carry.", src: P(92, "Post test Q13 model answer") },
    { id: "r9", type: "fill", concept: "first-aid",
      before: "Cool a burn with clean cold water for at least", after: "minutes.",
      options: ["10", "2", "30", "60"], answer: "10",
      explain: "Don't remove anything sticking to it.", src: P(85, "Burns") },
    { id: "r10", type: "flash", concept: "belt-care",
      front: "How often should belts be checked, and for what?",
      back: "At least weekly: cuts or tears, the inertia locking system and all anchorages.", src: P(92, "Post test Q16 model answer") },
  ],
};

/* ---------------------------------------------------------------------------
   3. BUCKLE UP — recognition.
   --------------------------------------------------------------------------- */
const restraints = {
  id: "restraints",
  kind: "items",
  mode: "matching",
  title: "Buckle Up",
  blurb: "Spot it, sort it — belts, seats and first aid",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "child-seats",
      prompt: "Which picture shows the danger with airbags?",
      options: ["child-seat-stages", "airbag-rearward", "belt-fit"], answer: 1,
      names: ["Child seat stages", "Airbag danger", "Belt fit"],
      explain: "Never a rear-facing seat in front of an active airbag.", src: P(84, "Examples of restraint systems") },
    { id: "k2", type: "picture", label: "Spot it", concept: "child-seats",
      prompt: "Which picture shows which restraint a child needs?",
      options: ["child-seat-stages", "casualty-care"], answer: 0,
      names: ["Child seat stages", "Casualty care"],
      explain: "By age, height and weight.", src: P(83, "Child restraint systems") },
    {
      id: "k3", type: "sort", concept: "law",
      prompt: "Must wear a belt?",
      categories: [
        { id: "must", label: "Must wear" },
        { id: "exempt", label: "Exempt" },
      ],
      cards: [
        { text: "Adult passenger in the back", cat: "must" },
        { text: "Instructor during a lesson", cat: "exempt" },
        { text: "Garda on duty", cat: "exempt" },
        { text: "Driver on a 2-minute trip", cat: "must" },
        { text: "Holder of a medical exemption certificate", cat: "exempt" },
      ],
      explain: "Everyone else wears a belt wherever one is fitted.", src: P(83, "Where safety belts are fitted") },
    {
      id: "k4", type: "sort", concept: "child-seats",
      prompt: "Which restraint?",
      categories: [
        { id: "child", label: "Child seat" },
        { id: "booster", label: "Seat or booster" },
        { id: "adult", label: "Adult belt" },
      ],
      cards: [
        { text: "A 2-year-old", cat: "child" },
        { text: "A 7-year-old, 120 cm, 22 kg", cat: "booster" },
        { text: "A 15-year-old, 165 cm, 55 kg", cat: "adult" },
      ],
      explain: "Under 150 cm and 36 kg: a child restraint.", src: P(84, "Examples of restraint systems") },
    { id: "k5", type: "picture", label: "Spot it", concept: "first-aid",
      prompt: "Which picture shows how to treat casualties?",
      options: ["casualty-care", "belt-fit"], answer: 0,
      names: ["Casualty care", "Belt fit"],
      explain: "Keep them warm and reassured; don't move them unless in danger.", src: P(85, "Help those involved") },
    {
      id: "k6", type: "sort", concept: "first-aid",
      prompt: "Do or don't?",
      categories: [
        { id: "do", label: "Do" },
        { id: "dont", label: "Don't" },
      ],
      cards: [
        { text: "Keep the casualty warm", cat: "do" },
        { text: "Give them a drink of water", cat: "dont" },
        { text: "Pull off a motorcyclist's helmet", cat: "dont" },
        { text: "Switch off the engines", cat: "do" },
        { text: "Keep them talking", cat: "do" },
      ],
      explain: "Don't remove a helmet unless it's essential.", src: P(85, "Deal with danger; Help those involved") },
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
  blurb: "Numbers to remember",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "child-seats",
      prompt: "Match the number to its meaning.",
      pairs: [
        ["150 cm", "Height limit for a child restraint"],
        ["36 kg", "Weight limit for a child restraint"],
        ["Under 3", "Correct child seat only"],
        ["Under 17", "Driver's responsibility"],
        ["5 points", "Most for an under-17 offence"],
      ],
      explain: "The child-restraint rules.", src: P(83, "Restraints; Child restraint systems; p.84") },
    {
      id: "m2", type: "match", concept: "first-aid",
      prompt: "Match the first-aid step.",
      pairs: [
        ["Airway", "Tilt the head back gently"],
        ["Breathing", "Check it regularly"],
        ["Compressions", "Centre of the chest"],
        ["Bleeding", "Firm pressure on the wound"],
      ],
      explain: "Learn it properly from a qualified organisation.", src: P(85, "In providing emergency care; Bleeding") },
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
  blurb: "First on the scene",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "first-aid", visual: "crash-scene",
      prompt: "First on the scene of a crash — in order.",
      steps: ["Make the area safe", "Call the emergency services", "Check the casualty's airway", "Check breathing", "Start compressions if not breathing normally"],
      explain: "Don't become another victim.", src: P(84, "Basic first aid; p.85") },
    { id: "p2", type: "order", concept: "child-seats",
      prompt: "A growing child's restraints — in order.",
      steps: ["Under 3: the correct child seat", "3+: child seat, booster seat or cushion", "150 cm or 36 kg: the adult belt"],
      explain: "Move on by height and weight, not just age.", src: P(84, "Examples of restraint systems") },
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
  blurb: "Belts, children and crashes",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "under17",
      scene: "🧒 Your pupil gives a lift to their 16-year-old brother, who won't buckle up.",
      prompt: "Who's breaking the law?",
      options: ["Only the brother", "Your pupil, the driver", "Nobody — he's nearly 17", "You as the instructor"], answer: 1,
      explain: "The driver is responsible for passengers under 17.", src: P(83, "Restraints for passengers under 17") },
    { id: "s2", type: "choice", label: "Scenario", concept: "child-seats", visual: "airbag-rearward",
      scene: "👶 A parent wants to fit their baby's rear-facing seat in the front passenger seat.",
      prompt: "What do you tell them?",
      options: ["Fine if the belt is tight", "Not with an active airbag — check the handbook", "Fine on short trips", "Only facing forward"], answer: 1,
      explain: "A rear-facing seat must never be used in front of an active frontal airbag.", src: P(84, "Examples; Caution") },
    { id: "s3", type: "choice", label: "Scenario", concept: "child-seats",
      scene: "🚗 A pupil's niece is 9, 128 cm and 26 kg, and wants to use the adult belt.",
      prompt: "What's the rule?",
      options: ["Fine — she's over 3", "She needs the correct child seat or booster", "Only in the front", "Fine in the back"], answer: 1,
      explain: "Under 150 cm and 36 kg.", src: P(84, "Examples of restraint systems") },
    { id: "s4", type: "choice", label: "Scenario", concept: "first-aid", visual: "casualty-care",
      scene: "🏍️ You come across a motorcyclist down on the road, conscious and breathing.",
      prompt: "What do you do?",
      options: ["Remove the helmet so they can breathe", "Make the scene safe, call 112/999, leave the helmet on, reassure them", "Give them water", "Help them stand up"], answer: 1,
      explain: "Don't remove a helmet unless it's essential.", src: P(85, "Help those involved") },
    { id: "s5", type: "choice", label: "Scenario", concept: "exemption",
      scene: "🩺 A pupil says their doctor told them not to wear a belt.",
      prompt: "What do they need?",
      options: ["Nothing", "An exemption certificate from an EU-registered doctor, stating name, address and duration", "A Garda's permission", "A note from you"], answer: 1,
      explain: "It must state a belt is inadvisable on medical grounds.", src: P(83, "Exempt persons") },
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
  blurb: "A lesson that turns into a rescue",
  xpPer: 10,
  situation: "🚗 Mid-lesson, your pupil spots a car that has just hit a wall ahead.",
  items: [
    { id: "w1", type: "choice", step: "Stop", concept: "first-aid", prompt: "First…",
      options: ["Rush over", "Park safely, hazards on, hi-vis and warning triangle", "Drive past", "Phone a friend"], answer: 1,
      explain: "Make sure you don't become another victim.", src: P(84, "Basic first aid") },
    { id: "w2", type: "choice", step: "Danger", concept: "first-aid", prompt: "At the car…",
      options: ["Switch off the engine; no smoking nearby", "Start moving the driver out", "Open the bonnet", "Take photos"], answer: 0,
      explain: "Further collisions and fire are the main dangers.", src: P(85, "Deal with danger") },
    { id: "w3", type: "choice", step: "Call", concept: "first-aid", prompt: "Calling 112/999, give…",
      options: ["Your licence number", "The exact location and the number of vehicles", "The car's make", "Your insurer"], answer: 1,
      explain: "Stay on the line until all information is given.", src: P(85, "Deal with danger") },
    { id: "w4", type: "choice", step: "The driver", concept: "first-aid", prompt: "The driver is conscious, still belted in.",
      options: ["Get them out", "Leave them in place unless there's more danger; keep them warm and talking", "Give them a drink", "Leave them alone"], answer: 1,
      explain: "Avoid unnecessary movement.", src: P(85, "Help those involved") },
    { id: "w5", type: "choice", step: "Afterwards", concept: "first-aid", prompt: "Your safety kit…",
      options: ["Is optional", "Is a condition of ADI registration", "Is only for tests", "Stays at home"], answer: 1,
      explain: "Don't attend an ADI test without it.", src: P(85, "First aid and safety equipment") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 94. Q1 and Q9 are omitted (see
   header).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(87, `Retention test Q${n}; answer p.94`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(2, "A person who has difficulty wearing a seat belt must", ["have a medical certificate", "have an adaptation fitted", "stop driving", "have someone put it on for them"], 0, "exemption"),
    R(3, "Newborn infants up to 3 months old", ["are exempt from the restraint laws", "can be held on an adult's lap if the adult is belted", "must be in a proper, suitable child restraint", "only need restraining on long journeys"], 2, "child-seats", "child-seat-stages"),
    R(4, "The mechanism that locks a belt in sudden braking or a crash is the", ["inertia (reel)", "comfort zone", "lock", "position"], 0, "belt-care"),
    R(5, "The Rules of the Road say a belt could reduce the risk of death or serious injury by as much as", ["25%", "45%", "75%", "50%"], 3, "why"),
    R(6, "Accepting the penalty without going to court for not wearing a belt, a driver gets", ["2 points", "3 points", "6 points", "1 point"], 1, "law"),
    R(7, "Responsibility for passengers under 17 wearing a belt rests with", ["the driver", "the parent", "the passenger", "the child"], 0, "under17"),
    R(8, "Must passengers wear a belt in the rear of a car?", ["Yes", "Only on long journeys", "Only on motorways", "Only above 50 km/h"], 0, "law"),
    R(10, "To ensure conformity and legal obligations, check that belts", ["are clean", "have no cuts or tears, are anchored and work properly", "aren't dirty", "needn't be checked — a warning light comes on"], 1, "belt-care", "belt-fit"),
    R(11, "Convicted in court for not wearing a belt, a driver gets", ["2 points and a fine", "3 points and a fine", "6 points and a fine", "5 points and a fine"], 3, "law"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "why",
      prompt: "Most accidents happen…", options: ["On motorways", "Within five miles of home", "At night only", "Abroad"], answer: 1,
      explain: "So belt up on every journey.", src: P(83, "Summaries") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "law",
      prompt: "Which picture shows who is exempt from wearing a belt?", options: ["seatbelt-exempt", "child-seat-stages", "casualty-care"], answer: 0,
      names: ["Exemptions", "Child seat stages", "Casualty care"],
      explain: "Medical certificate, instructors and testers at work, Gardaí on duty…", src: P(83, "Where safety belts are fitted") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "child-seats",
      statement: "Two children may share one seat belt on a short trip.", answer: false,
      explain: "A belt is designed for one person only.", src: P(84, "Unrestrained children") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "child-seats",
      scene: "🚕 A parent asks if their 2-year-old needs a child seat in a taxi.",
      prompt: "What does the unit say?", options: ["Yes, always", "The under-3 child-seat rule doesn't cover taxis", "Only on motorways", "Only in the front"], answer: 1,
      explain: "Under 3: correct child seat in a car or goods vehicle other than a taxi.", src: P(84, "Examples of restraint systems") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "child-seats",
      prompt: "Match it.", pairs: [["Under 3", "Correct child seat"], ["3+, under 150 cm", "Seat or booster"], ["150 cm +", "Adult belt"]],
      explain: "By height and weight.", src: P(84, "Examples of restraint systems") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "first-aid",
      prompt: "At a crash:", steps: ["Make it safe", "Call for help", "Airway", "Breathing"],
      explain: "Then compressions if needed.", src: P(84, "Basic first aid; p.85") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "first-aid",
      scene: "🩸 A casualty has a deep cut with glass in it.",
      prompt: "What do you do?", options: ["Pull the glass out", "Build padding around it and bandage — don't press on the glass", "Ignore it", "Pour water on it"], answer: 1,
      explain: "Then raise the limb if it isn't broken.", src: P(85, "Bleeding") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "under17",
      prompt: "Responsibility for under-17s wearing belts rests with…", options: ["The driver", "The parent", "The passenger", "The child"], answer: 0,
      explain: "Up to 5 penalty points.", src: P(87, "Retention Q7 (answer a, p.94)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "belt-care",
      prompt: "A pupil wears their belt twisted. Which picture helps?", options: ["belt-fit", "airbag-rearward"], answer: 0,
      names: ["Belt fit", "Airbag danger"],
      explain: "Webbing flat across the body.", src: P(92, "Post test Q2 model answer") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "belt-care",
      prompt: "The device that locks a belt in a crash is the…", options: ["Inertia reel", "Comfort zone", "Lock", "Position"], answer: 0,
      explain: "It allows free movement at other times.", src: P(87, "Retention Q4 (answer a, p.94)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "3.10",
  number: "3.10",
  title: "Safety Belts & Child Restraints",
  pages: [83, 87],
  intro: "Why and when to wear a belt, exemptions, under-17s and child restraints, belt care, and first aid at the roadside.",
  objectives: [
    "The seat belt law and specific responsibilities",
    "The penalties for not complying",
    "Overcoming common problems",
  ],
  objectivesSrc: P(83, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...restraints, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "buckled-up", icon: "🔒", label: "Buckled Up", rule: { activity: "restraints", min: 100 } },
    { id: "restraints-specialist", icon: "🏆", label: "Restraints Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
