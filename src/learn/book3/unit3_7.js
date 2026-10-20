/*
  ===========================================================================
  BOOK 3 · UNIT 3.7 — ASPECTS OF THE DRIVING TEST

  Source: "Theory Resource Workbook 3 of 4" (Driver Education Supplies),
  book pages 57–67, with the retention-test answers on page 94 (41
  questions). This unit has no post test.

  Omitted retention questions (answer key unsafe):
  - Q11 (a commercial vehicle "ideally should not be loaded", keyed a): not
    in the unit, and the options overlap.
  - Q19 (an expired licence needs a retest after 10 years, keyed a): not in
    the unit.
  - Q21 (indicators fail mid-test → the tester terminates the test, keyed
    b): the unit says nothing about it, and continuing with hand signals is
    also defensible.
  - Q24 (an interpreter "provided permission is issued in advance", keyed
    a): the unit says interpreters are allowed but says nothing about
    advance permission.
  - Q39 (a deaf candidate "may take a normal test", keyed a): the unit
    describes using a signer/interpreter, so b is also defensible.

  Several kept questions go beyond the text (e.g. Q2, Q8, Q12, Q16, Q26–Q36)
  but have only one defensible option. Test procedures change — see rsa.ie.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 3, unit: "3.7", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "eligibility": {
    title: "Being eligible",
    text: "The RSA runs the driving test; a tester checks practical driving, knowledge of the Rules of the Road and the ability to drive competently, safely and with regard for others. It takes about 60 to 100 minutes depending on the category. To sit it you need a valid learner permit — a first-time permit held for at least six months — and completed Essential Driver Training (12 lessons). If EDT isn't finished, cancel the test five days before the appointment.",
    src: P(57, "Aspects of the driving test; You must be eligible"),
  },
  "advice": {
    title: "Advising pupils",
    text: "ADIs should advise pupils to revise the Rules of the Road, study the test preparation booklet, check the test checklist some days before, use their ADI for pre-test advice, practise on all types of road (except motorways) and in all traffic, including at night, and watch the RSA learning-to-drive videos.",
    src: P(57, "ADIs are advised to explain to their pupils"),
  },
  "roadworthy": {
    title: "A roadworthy vehicle",
    text: "Testers may refuse a vehicle that's defective or dirty enough to compromise safety. They check tyres and tread, lights (white/yellow front), indicators (amber), brake lights (red), mirrors, seat belts and anchorages, head restraints, clean uncracked glass, doors opening from inside, suspension, no warning light showing, no exhaust fumes, and loads secured. A test cancelled on roadworthiness or health and safety grounds loses the fee.",
    src: P(58, "Health, safety & your vehicle"),
  },
  "desk": {
    title: "At the desk",
    text: "Arrive in plenty of time — late means no test and a lost fee. The tester checks the learner permit against the photo and the category, then asks the candidate to read, sign and date a statement that the vehicle is roadworthy and insured. Refusing to sign means the test can't go ahead. The tester also checks the insurance disc, then asks questions on the Rules of the Road.",
    src: P(58, "Preliminary administrations; The day of the test"),
  },
  "checks": {
    title: "Checks at the vehicle",
    text: "Technical checks: explain how you'd check any 3 of tyres, lights, reflectors, indicators, engine oil, coolant, washer, steering, brakes, horn and power-steering fluid — chosen at random. Some need the bonnet opened and closed securely; not managing it is a fault. The tester checks L-plates front and rear (a school roof sign is fine), the insurance, NCT and tax discs, records the registration, and checks brake lights and indicators. An automatic means a licence limited to automatics. If the ignition warning lights don't come on, the test won't proceed.",
    src: P(58, "Technical checks; p.59 At the vehicle the tester checks"),
  },
  "controls": {
    title: "Secondary controls",
    text: "Before moving off, the candidate operates any 3 of: wipers, lights (including dipping), washer, fan, air vents, rear window heater, air-conditioning, temperature control, rear fog lights, air intake. If the wipers don't work, the test won't go ahead even if it isn't raining. Then adjust the seat, seat belt, head restraint and mirrors and close the door properly.",
    src: P(59, "Commencement of the test"),
  },
  "drive": {
    title: "The drive",
    text: "Drive in your normal manner; the tester gives directions in good time and you can ask for them to be repeated. Manoeuvres: a turnabout, reversing round a corner (the tester stands outside for heavy vehicles and larger vans), the five hand signals, a hill start and parking — the tester won't ask for reverse parking. Refusing a reverse or turnabout ends the test with no result. A seriously defective handbrake on the hill start ends the test.",
    src: P(59, "The practical test begins; p.60 Reverse; Hand signals; Hill start; Parking"),
  },
  "result": {
    title: "The result",
    text: "The result is given only at the desk. Pass: sign the Certificate of Competency, get a report sheet, apply for a full licence within two years and display N-plates for two years. Fail: a statement of driving test outcome lists the faults. If the test wasn't conducted fairly, appeal to the District Court under section 33 of the Road Traffic Act 1961 — a free retest, but the result can't be overturned.",
    src: P(60, "End of the test; If you pass; If you are unsuccessful"),
  },
  "deferred": {
    title: "Decision deferred",
    text: "A tester can defer a decision pending a Certificate of Fitness, if they believe the candidate may have a progressive incapacity. A 'Defer Decision' form D104 is issued; the candidate is told the tester is 'satisfied with their driving' rather than that they've passed.",
    src: P(61, "Decision deferred"),
  },
  "marking": {
    title: "The marking sheet",
    text: "18 sections, each with subsections: rules & checks, position, observation, reacting to hazards, mirrors, clearance/overtaking, signals, motorcycles, courtesy, alighting, progress, vehicle controls, speed, traffic controls, right of way, reverse, turnabout, parking.",
    src: P(61, "The test report / marking sheet"),
  },
  "other": {
    title: "Other points",
    text: "Dual brake and clutch may be fitted, but no dual accelerator; the tester isn't obliged to use them. No audio or video recording. An interpreter or signer is allowed — but not the driving instructor; sign cards are turned away from the interpreter. Tell the RSA booking office of a change of name or address. The permit photo should match the candidate. A disability needing adapted controls may need noting on the licence or permit via the NDLS, after a medical report.",
    src: P(61, "Other points; Interpreter; Change of details; Important"),
  },
  "adaptations": {
    title: "Adaptations",
    text: "A Mobility Centre can assess what adaptations a driver needs, for a fee, and help find an instructor. Automatic transmission is the most popular and easiest; power steering helps weak or impaired upper limbs. Adaptations should be professionally fitted and maintained — most aren't checked at the NCT — and are zero-rated for VAT. Common ones: hand controls, steering balls, swivel seats, leg lifters, transfer boards, hoists, extended or left-foot pedals, switch extensions and extra mirrors.",
    src: P(62, "Adaptations & equipment; p.63 Common adaptations"),
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
    "Late, unroadworthy, or refuse to sign: no test and the fee is lost",
    "3 technical checks + 3 secondary controls, chosen by the tester",
    "Pass: licence within 2 years, N-plates for 2 years",
  ],
  cards: [
    {
      icon: "🎫",
      kicker: "Eligibility",
      title: "Permit + EDT",
      ask: {
        prompt: "How long must a first-time learner permit be held before the test?",
        options: ["3 months", "6 months", "2 years"],
        answer: 1,
      },
      list: [
        "Run by the RSA; about 60–100 minutes by category",
        "A valid learner permit — first-time: held at least 6 months",
        "Essential Driver Training completed (12 lessons)",
        "EDT not finished? Cancel 5 days before the test",
      ],
      concept: "eligibility",
      src: P(57, "You must be eligible to sit a test"),
    },
    {
      icon: "🧑‍🏫",
      kicker: "Advising pupils",
      title: "Before the big day",
      list: [
        "Revise the Rules of the Road; study the preparation booklet",
        "Check the test checklist some days before",
        "Practise on all road types except motorways — and at night",
        "Use the ADI for pre-test advice",
      ],
      concept: "advice",
      src: P(57, "ADIs are advised to explain to their pupils"),
    },
    {
      icon: "🔧",
      kicker: "Roadworthiness",
      title: "The tester can refuse the car",
      visual: "test-vehicle",
      list: [
        "Tyres, lights, indicators, brake lights, mirrors, belts, head restraints",
        "Clean, uncracked glass; doors open from inside",
        "No warning light on; no exhaust fumes; loads secured",
        "Refused on roadworthiness: the fee is lost",
      ],
      concept: "roadworthy",
      src: P(58, "Health, safety & your vehicle"),
    },
    {
      icon: "🪪",
      kicker: "At the desk",
      title: "ID, statement, questions",
      visual: "test-day",
      list: [
        "Arrive early — late means no test and no refund",
        "Permit checked against the photo and category",
        "Sign the roadworthiness and insurance statement — refuse and there's no test",
        "Questions on the Rules of the Road",
      ],
      concept: "desk",
      src: P(58, "Preliminary administrations; The day of the test"),
    },
    {
      icon: "🛞",
      kicker: "Technical checks",
      title: "Any 3, at random",
      visual: "tech-checks",
      list: [
        "Explain how you'd check them — tyres, lights, oil, coolant, brakes…",
        "Some need the bonnet opened and closed securely",
        "Can't open and secure the bonnet: a fault",
        "Ignition warning lights don't come on: the test won't proceed",
      ],
      concept: "checks",
      src: P(58, "Technical checks; p.59"),
    },
    {
      icon: "🎛️",
      kicker: "Secondary controls",
      title: "Show me how you'd…",
      list: [
        "Any 3: wipers, lights, washer, fan, vents, rear heater, A/C…",
        "Wipers not working: no test, even if it's dry",
        "Then adjust seat, belt, head restraint, mirrors; close the door",
      ],
      concept: "controls",
      src: P(59, "Commencement of the test"),
    },
    {
      icon: "🚗",
      kicker: "The drive",
      title: "Normal driving, plus manoeuvres",
      visuals: ["test-manoeuvres", "arm-signals"],
      list: [
        "Directions given in good time — ask if unsure",
        "Turnabout, reverse round a corner, 5 hand signals, hill start, parking",
        "No reverse parking is asked for",
        "Refuse a reverse or turnabout: the test ends, no result",
      ],
      concept: "drive",
      src: P(59, "The practical test begins; p.60"),
    },
    {
      icon: "🏁",
      kicker: "The result",
      title: "Always at the desk",
      visual: "test-result",
      list: [
        "Pass: sign the Certificate of Competency",
        "Apply for a full licence within 2 years; N-plates for 2 years",
        "Fail: a statement listing the faults",
        "Appeal: District Court, s.33 RTA 1961 — free retest, result stands",
      ],
      concept: "result",
      src: P(60, "If you pass; If you are unsuccessful"),
    },
    {
      icon: "📝",
      kicker: "Marking and deferral",
      title: "18 sections; form D104",
      visual: "marking-sheet",
      list: [
        "The marking sheet has 18 sections, each with subsections",
        "Possible progressive incapacity: decision deferred on form D104",
        "Then the candidate is told the tester is 'satisfied with their driving'",
      ],
      concept: "marking",
      src: P(61, "Decision deferred; The test report"),
    },
    {
      icon: "🦶",
      kicker: "Other points",
      title: "Dual controls, interpreters",
      visual: "dual-controls",
      list: [
        "Dual brake and clutch OK — no dual accelerator",
        "No audio or video recording",
        "An interpreter is allowed — but not the instructor",
        "Change of name or address: tell the RSA booking office",
      ],
      concept: "other",
      src: P(61, "Other points; Interpreter; Change of details"),
    },
    {
      icon: "♿",
      kicker: "Adaptations",
      title: "Professionally fitted",
      visual: "adaptations",
      list: [
        "A Mobility Centre assesses needs (for a fee)",
        "Automatic is the most popular and easiest; power steering helps",
        "Professionally fitted and maintained — the NCT doesn't check most",
        "Adaptations are zero-rated for VAT",
      ],
      concept: "adaptations",
      src: P(62, "Adaptations & equipment; VAT & VRT"),
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
    { id: "r1", type: "fill", concept: "eligibility",
      before: "A first-time learner permit must be held for at least", after: "months before the test.",
      options: ["six", "three", "twelve", "two"], answer: "six",
      explain: "And Essential Driver Training must be complete.", src: P(57, "You must be eligible") },
    { id: "r2", type: "truefalse", concept: "desk", visual: "test-day",
      statement: "If you arrive late, the tester will fit you in later the same day.", answer: false,
      explain: "You won't be allowed to take the test and you lose the fee.", src: P(58, "The day of the test") },
    { id: "r3", type: "fill", concept: "checks", visual: "tech-checks",
      before: "The tester picks", after: "technical checks at random.",
      options: ["3", "5", "2", "all"], answer: "3",
      explain: "You explain how you'd do each check.", src: P(58, "Technical checks") },
    { id: "r4", type: "truefalse", concept: "controls",
      statement: "If the wipers don't work, the test won't go ahead even on a dry day.", answer: true,
      explain: "It's stated outright.", src: P(59, "Commencement of the test") },
    { id: "r5", type: "flash", concept: "drive", visual: "test-manoeuvres",
      front: "Which manoeuvres are asked for on a car test?",
      back: "Turnabout, reverse round a corner, hand signals, hill start and parking — but not reverse parking.", src: P(59, "Turnabout; p.60") },
    { id: "r6", type: "fill", concept: "result", visual: "test-result",
      before: "After passing, apply for a full licence within", after: "years.",
      options: ["two", "one", "five", "ten"], answer: "two",
      explain: "And display N-plates for two years.", src: P(60, "If you pass your driving test") },
    { id: "r7", type: "flash", concept: "deferred",
      front: "What is form D104?",
      back: "A 'Defer Decision' form — the tester waits for a Certificate of Fitness before deciding.", src: P(61, "Decision deferred") },
    { id: "r8", type: "fill", concept: "marking", visual: "marking-sheet",
      before: "The test marking sheet has", after: "sections.",
      options: ["18", "12", "24", "10"], answer: "18",
      explain: "Each divided into subsections.", src: P(61, "The test report / marking sheet") },
    { id: "r9", type: "truefalse", concept: "other", visual: "dual-controls",
      statement: "A dual accelerator may be fitted to a test car.", answer: false,
      explain: "Dual brake and clutch only.", src: P(61, "Other points") },
    { id: "r10", type: "truefalse", concept: "adaptations",
      statement: "Vehicle adaptations for disabled drivers are zero-rated for VAT.", answer: true,
      explain: "Including installation, repair and maintenance.", src: P(62, "VAT & VRT") },
  ],
};

/* ---------------------------------------------------------------------------
   3. TEST DAY — recognition.
   --------------------------------------------------------------------------- */
const testday = {
  id: "testday",
  kind: "items",
  mode: "matching",
  title: "Test Day",
  blurb: "Spot it, sort it — checks, manoeuvres, results",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "checks",
      prompt: "Which picture shows the technical checks?",
      options: ["tech-checks", "test-manoeuvres", "adaptations"], answer: 0,
      names: ["Technical checks", "Manoeuvres", "Adaptations"],
      explain: "Any 3, chosen at random.", src: P(58, "Technical checks") },
    { id: "k2", type: "picture", label: "Spot it", concept: "drive",
      prompt: "Which picture shows what you'll do on the drive?",
      options: ["test-vehicle", "test-manoeuvres", "tech-checks"], answer: 1,
      names: ["At the vehicle", "Manoeuvres", "Technical checks"],
      explain: "Turnabout, reverse, hand signals, hill start, parking.", src: P(59, "Turnabout; p.60") },
    {
      id: "k3", type: "sort", concept: "desk",
      prompt: "What happens?",
      categories: [
        { id: "stop", label: "No test, fee lost" },
        { id: "go", label: "Test goes ahead" },
      ],
      cards: [
        { text: "Candidate arrives late", cat: "stop" },
        { text: "Car refused as unroadworthy", cat: "stop" },
        { text: "Wipers don't work on a dry day", cat: "stop" },
        { text: "School roof sign with proper L-plates", cat: "go" },
        { text: "Automatic car", cat: "go" },
      ],
      explain: "An automatic just means a licence limited to automatics.", src: P(58, "Health & safety; The day of the test; p.59") },
    { id: "k4", type: "picture", label: "Spot it", concept: "marking",
      prompt: "Which picture shows how the test is marked?",
      options: ["marking-sheet", "test-result"], answer: 0,
      names: ["Marking sheet", "The result"],
      explain: "18 sections with subsections.", src: P(61, "The test report / marking sheet") },
    {
      id: "k5", type: "sort", concept: "checks",
      prompt: "Technical check or secondary control?",
      categories: [
        { id: "tech", label: "Technical check" },
        { id: "sec", label: "Secondary control" },
      ],
      cards: [
        { text: "Engine oil", cat: "tech" },
        { text: "Coolant", cat: "tech" },
        { text: "Tyres", cat: "tech" },
        { text: "Rear window heater", cat: "sec" },
        { text: "Air intake control", cat: "sec" },
        { text: "Rear fog lights", cat: "sec" },
      ],
      explain: "Checks are explained; controls are operated.", src: P(58, "Technical checks; p.59 Commencement") },
    { id: "k6", type: "picture", label: "Spot it", concept: "other",
      prompt: "Which picture shows the dual-control rule?",
      options: ["dual-controls", "test-vehicle"], answer: 0,
      names: ["Dual controls", "At the vehicle"],
      explain: "No dual accelerator.", src: P(61, "Other points") },
    {
      id: "k7", type: "sort", concept: "result",
      prompt: "Pass or fail?",
      categories: [
        { id: "pass", label: "Pass" },
        { id: "fail", label: "Fail" },
      ],
      cards: [
        { text: "Sign the Certificate of Competency", cat: "pass" },
        { text: "N-plates for two years", cat: "pass" },
        { text: "Statement of driving test outcome listing faults", cat: "fail" },
        { text: "Appeal to the District Court", cat: "fail" },
      ],
      explain: "An appeal can bring a free retest, not a pass.", src: P(60, "If you pass; If you are unsuccessful") },
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
  blurb: "Situations and outcomes",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "drive",
      prompt: "Match the situation to the outcome.",
      pairs: [
        ["Refuses the turnabout", "Test curtailed, no result"],
        ["Handbrake seriously defective", "Test abandoned"],
        ["Automatic car", "Licence limited to automatics"],
        ["Possible progressive incapacity", "Form D104"],
        ["Test not conducted fairly", "Appeal to the District Court"],
      ],
      explain: "Know what ends a test and what doesn't.", src: P(59, "p.59–61") },
    {
      id: "m2", type: "match", concept: "eligibility",
      prompt: "Match the number.",
      pairs: [
        ["6 months", "First-time permit held"],
        ["12", "EDT lessons"],
        ["5 days", "Cancel if EDT unfinished"],
        ["18", "Marking sheet sections"],
        ["2 years", "Apply for the full licence"],
      ],
      explain: "The figures pupils ask about.", src: P(57, "Eligibility; p.60–61") },
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
  blurb: "How the test runs",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "desk", visual: "test-day",
      prompt: "Test day — in order.",
      steps: ["Arrive in plenty of time", "ID check at the desk", "Sign the vehicle statement", "Rules of the Road questions", "Checks at the vehicle", "The drive", "Result at the desk"],
      explain: "The result is only announced back at the desk.", src: P(58, "Preliminary administrations; p.59–60") },
    { id: "p2", type: "order", concept: "controls",
      prompt: "In the car, before moving off — in order.",
      steps: ["Start the engine", "Operate 3 secondary controls", "Adjust seat, belt, head restraint and mirrors", "Drive off when ready"],
      explain: "The tester then gives directions in good time.", src: P(59, "Commencement of the test") },
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
  blurb: "Advising a pupil about the test",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "eligibility",
      scene: "📅 Your pupil's test is in 10 days but they still have 3 EDT lessons left that can't be fitted in.",
      prompt: "What do you advise?",
      options: ["Go anyway", "Cancel the test at least five days before", "Do the EDT after the test", "Ask the tester on the day"], answer: 1,
      explain: "EDT must be complete before the test.", src: P(57, "You must be eligible") },
    { id: "s2", type: "choice", label: "Scenario", concept: "roadworthy", visual: "test-vehicle",
      scene: "🔦 The night before, your pupil notices a brake light is out on their own car.",
      prompt: "What do you advise?",
      options: ["Hope the tester won't notice", "Get it fixed before the test — or the car can be refused and the fee lost", "Use hand signals instead", "Bring a spare bulb"], answer: 1,
      explain: "If you question any aspect of roadworthiness, the tester may too.", src: P(58, "Health, safety & your vehicle") },
    { id: "s3", type: "choice", label: "Scenario", concept: "drive",
      scene: "😬 Your pupil is nervous and says they'll refuse the reverse if asked.",
      prompt: "What do you explain?",
      options: ["Refusing just costs marks", "Refusing ends the test with no result — they'd have to re-apply", "The tester will do it for them", "They can swap it for parking"], answer: 1,
      explain: "A non-conducted report sheet is issued.", src: P(60, "Reverse manoeuvre") },
    { id: "s4", type: "choice", label: "Scenario", concept: "result",
      scene: "😞 Your pupil failed and feels the test wasn't conducted fairly.",
      prompt: "What's the position?",
      options: ["The RSA will change the result", "They can appeal to the District Court; at best they get a free retest", "Nothing can be done", "The instructor can overturn it"], answer: 1,
      explain: "Section 33, Road Traffic Act 1961.", src: P(60, "If you are unsuccessful") },
    { id: "s5", type: "choice", label: "Scenario", concept: "other",
      scene: "🗣️ A pupil with limited English asks if you can interpret for them on the test.",
      prompt: "What do you say?",
      options: ["Yes, I'll sit in", "An interpreter is allowed, but not your driving instructor", "No interpreters allowed", "Only for the theory test"], answer: 1,
      explain: "A signer can also accompany a candidate with speech or hearing difficulties.", src: P(61, "Interpreter") },
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
  blurb: "A pupil's test, step by step",
  xpPer: 10,
  situation: "🚗 Your pupil arrives at the test centre in your dual-controlled school car.",
  items: [
    { id: "w1", type: "choice", step: "The car", concept: "other", prompt: "Your car's dual controls are…",
      options: ["Fine — brake and clutch, no accelerator", "Not allowed", "Fine with a dual accelerator", "Must be removed"], answer: 0,
      explain: "So no one can claim the tester drove.", src: P(61, "Other points") },
    { id: "w2", type: "choice", step: "The desk", concept: "desk", prompt: "The tester hands over the vehicle statement. Your pupil should…",
      options: ["Refuse — it's your car", "Read it, sign and date it if satisfied", "Ask you to sign it", "Ignore it"], answer: 1,
      explain: "Refusing to sign means no test.", src: P(58, "Preliminary administrations") },
    { id: "w3", type: "choice", step: "Under the bonnet", concept: "checks", visual: "tech-checks", prompt: "Asked to check the coolant, your pupil can't secure the bonnet.",
      options: ["No problem", "That's a fault", "The test is cancelled", "The tester closes it"], answer: 1,
      explain: "Opening and closing it securely is part of the check.", src: P(59, "Technical checks") },
    { id: "w4", type: "choice", step: "Parking", concept: "drive", prompt: "Near the end the tester says 'find a suitable place and park'. Your pupil…",
      options: ["Must reverse park", "Chooses a suitable place — no reverse parking is asked for", "Parks on the footpath", "Waits for directions"], answer: 1,
      explain: "If they reverse park anyway, they won't be stopped.", src: P(60, "Parking") },
    { id: "w5", type: "choice", step: "The pass", concept: "result", visual: "test-result", prompt: "They pass. Next…",
      options: ["Drive alone straight away on the permit", "Sign the certificate, apply for a licence within 2 years, N-plates", "Wait 6 months", "Retake the theory test"], answer: 1,
      explain: "Until the full licence arrives, they still need an accompanying driver.", src: P(60, "If you pass your driving test") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 94. Q11, Q19, Q21, Q24 and Q39 are
   omitted (see header).
   --------------------------------------------------------------------------- */
const page = (n) => (n <= 12 ? 64 : n <= 25 ? 65 : n <= 36 ? 66 : 67);
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(page(n), `Retention test Q${n}; answer p.94`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "Candidates are advised that the chance of passing", ["varies with the tester", "varies with the test centre", "should be the same regardless of tester or centre", "varies by centre and tester year to year"], 2, "eligibility"),
    R(2, "If a supervising tester sits in on a test", ["they can override the tester", "they're checking the tester, not examining you", "a fail is more likely", "a pass is more likely"], 1, "desk"),
    R(3, "An instructor should advise a test candidate that", ["testers are unsympathetic to nerves", "testers will do their best to put candidates at ease", "testers are trained to look stern", "testers won't repeat directions"], 1, "advice"),
    R(4, "A typical allowable time for a category B practical test is", ["60 minutes", "35 minutes", "25 minutes", "90 minutes"], 0, "eligibility"),
    R(5, "If a candidate doesn't understand what the tester requires", ["they'll fail for asking", "they should ask the tester to explain again", "they should guess", "they should pull in and ask to abandon"], 1, "drive"),
    R(6, "Candidates for a category B test will be asked to perform", ["three reversing manoeuvres", "a left reverse, a turn in the road, a hill start and a parking manoeuvre", "a right reverse, a turnabout, a hill start and no parking", "as many manoeuvres as the tester likes"], 1, "drive", "test-manoeuvres"),
    R(7, "Questions on the primary and secondary controls just before the drive", ["aren't relevant and won't affect the result", "are relevant and will affect the result", "are only asked after a pass", "aren't asked — only in the theory test"], 1, "controls"),
    R(8, "The eyesight test for learner permit holders is done", ["inside a test centre", "before the practical test", "immediately before the theory test", "before the learner permit is issued"], 3, "eligibility"),
    R(9, "If a candidate's signature doesn't match their learner permit, the tester may", ["have them re-sign after a pass", "ask them to try again, then abandon the test until identity is established", "abandon the test immediately", "fail them immediately"], 1, "desk"),
    R(10, "A candidate who tries to adjust the seat while driving", ["may fail for not taking proper precautions before moving away", "won't fail — it's minor", "will fail for moving off out of control", "may fail for misuse of the steering"], 0, "controls"),
    R(12, "A car used for a normal category B test must not", ["have a towbar", "be left-hand drive", "be automatic", "be towing a trailer"], 3, "roadworthy"),
    R(13, "A candidate's car has a very dirty rear window that impairs vision. The tester", ["will clean it", "will ask for extra use of the mirrors", "could consider the vehicle unsuitable for the test", "will rely on the dual mirror"], 2, "roadworthy"),
    R(14, "Vehicles used for a driving test should", ["not have dual controls", "have any dual accelerator removed", "have dual controls", "have any dual clutch removed"], 1, "other", "dual-controls"),
    R(15, "Attempting to bribe a driving tester is", ["worth it in borderline cases", "a criminal offence", "likely to lead to an immediate retest", "only allowed for individuals"], 1, "other"),
    R(16, "The engine revs of a test vehicle should", ["not be increased", "be at the manufacturer's recommended settings", "not exceed 1500 cc", "be set especially slow"], 1, "roadworthy"),
    R(17, "If the tester can't fasten the front passenger seatbelt through no fault of their own", ["the test is postponed until it's fixed", "the tester won't wear it", "the test is cancelled and the fee lost", "the tester sits in the back"], 2, "roadworthy"),
    R(18, "If a test isn't conducted because of the vehicle's condition", ["the fee is refunded", "no test for six months", "the test is cancelled and the fee lost", "the tester is reprimanded"], 2, "roadworthy"),
    R(20, "A category C or C1 test lasts about", ["45+ minutes", "70+ minutes", "2+ hours", "3+ hours"], 1, "eligibility"),
    R(22, "Before a driving test starts, the tester will", ["introduce themselves and immediately ask Rules of the Road questions", "ask for the learner permit and signature, then ask Rules of the Road and signage questions", "fail a candidate for a few wrong answers", "take the permit, ask questions and do an eye test from a wall chart"], 1, "desk"),
    R(23, "If a mechanical fault ends a test midway round the route", ["the test is abandoned and the candidate must reapply", "the candidate pays the tester's taxi fare", "the car can be repaired and the test continued later that day", "the candidate can call a mechanic"], 0, "roadworthy"),
    R(25, "A practical test for a disabled candidate", ["must not exceed 60 minutes", "always lasts longer with more manoeuvres", "gets extra time, includes all the usual manoeuvres and generally takes the same road time", "has no manoeuvres"], 2, "adaptations"),
    R(26, "Extra time may be allotted for a disabled driver's test so the tester", ["can study the faults", "can establish extra details of the disability or adaptations", "can ask for more reversing", "can make more demands"], 1, "adaptations"),
    R(27, "Before applying for a category B test, a learner permit holder", ["must answer 10 oral questions", "must take compulsory Essential Driver Training", "must wait 2 years on a permit", "must have had 2 permits"], 1, "eligibility"),
    R(28, "If there isn't enough space on the test application to give details of a disability, the candidate should", ["fill in two forms", "phone the test centre", "attach a note to the application or pre-assessment form", "explain on the day"], 2, "adaptations"),
    R(29, "At the end of a practical test, the instructor should", ["have a word with the tester out of earshot", "tip the tester after a pass", "argue with the tester after a fail", "none of the above"], 3, "result"),
    R(30, "On test day you should encourage a disabled pupil to", ["avoid discussing the disability", "discuss the disabilities frankly and answer all questions", "discuss only what deserves extra allowance", "discuss only disabilities needing adaptations"], 1, "adaptations"),
    R(31, "At the start of a test for a disabled candidate, the tester", ["may ask about any disabilities not noted on the application", "won't acknowledge the disability", "asks about the main disability to skip tasks", "assesses adaptations for safety only"], 0, "adaptations"),
    R(32, "At the start of a test for a disabled candidate, the tester will", ["ask about any adaptations the vehicle has", "not ask about adaptations", "ask the instructor for an opinion", "ignore the disabilities"], 0, "adaptations"),
    R(33, "Having passed, a candidate applying for a full licence sends the pass certificate to", ["the RSA", "the local Garda", "the AA", "the NDLS"], 3, "result"),
    R(34, "If a disabled candidate passes in an un-adapted vehicle, the tester will", ["issue a normal certificate", "issue a normal certificate if satisfied they can drive an un-adapted vehicle", "charge for extra time", "restrict them to that model"], 1, "adaptations"),
    R(35, "A restriction or adaptation 'recommended by the tester' for a successful disabled candidate will", ["go to the NDLS but not be recorded", "be ignored", "go to the NDLS and be recorded on the licence as codes", "go to the Garda"], 2, "adaptations", "licence-codes"),
    R(36, "When a tester considers a successful candidate needs the adaptations used on test", ["the NDLS is informed and restrictions are noted on the certificate and licence as codes", "they're restricted to an automatic", "they can't drive unsupervised", "they may only drive that car"], 0, "adaptations"),
    R(37, "A restriction is recorded on a driving licence as", ["an alphabetical code", "morse code", "a numerical code", "a colour code"], 2, "adaptations", "licence-codes"),
    R(38, "As a minimum, a category B test vehicle must have", ["a dual brake, interior mirror, forward seat and belt for the tester", "an operational forward-facing seat, a safety belt and a head restraint", "dual controls and a mirror for the tester", "a dual accelerator, mirror and belt for the examiner"], 1, "roadworthy"),
    R(40, "The purpose of the practical driving test is to", ["see if the candidate is competent to drive", "let the candidate get a licence", "provide income for the RSA", "help the candidate get a job"], 0, "eligibility"),
    R(41, "A candidate tested in an automatic will have recorded on their licence", ["competent in manual", "an open licence", "a category B-(A)", "restricted to automatic vehicles"], 3, "checks"),
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
      prompt: "To sit the car test you need…", options: ["A permit held 2 years", "A valid permit (first-time: 6 months) and completed EDT", "Just a theory pass", "A full licence in another category"], answer: 1,
      explain: "Bring the permit to the appointment.", src: P(57, "You must be eligible") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "result",
      prompt: "Which picture shows what happens after the drive?", options: ["test-result", "marking-sheet", "dual-controls"], answer: 0,
      names: ["The result", "Marking sheet", "Dual controls"],
      explain: "Pass or fail, told at the desk.", src: P(60, "End of the test") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "checks",
      statement: "If the ignition warning lights don't come on, the test won't proceed.", answer: true,
      explain: "The candidate turns the ignition fully on.", src: P(59, "At the vehicle the tester checks") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "drive",
      scene: "⛰️ On the hill start, your pupil's handbrake won't hold properly.",
      prompt: "What happens?", options: ["They carry on", "They're asked to secure it with the handbrake; if it's seriously defective the test is abandoned", "The tester holds the footbrake", "They switch to an automatic"], answer: 1,
      explain: "And they return to the centre.", src: P(60, "Hill start") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "other",
      prompt: "Match it.", pairs: [["Dual accelerator", "Not allowed"], ["Interpreter", "Allowed, but not the instructor"], ["Recording device", "Not used"]],
      explain: "Other points from the RSA.", src: P(61, "Other points; Interpreter") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "desk",
      prompt: "In order:", steps: ["ID at the desk", "Rules questions", "Vehicle checks", "The drive"],
      explain: "Result at the desk at the end.", src: P(58, "Preliminary administrations") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "deferred",
      scene: "🩺 After a good drive the tester tells your pupil they're 'satisfied with their driving' and hands over form D104.",
      prompt: "What does that mean?", options: ["A fail", "The decision is deferred until a Certificate of Fitness is produced", "A pass with N-plates", "A retest"], answer: 1,
      explain: "Used where a progressive incapacity is suspected.", src: P(61, "Decision deferred") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "roadworthy",
      prompt: "A test cancelled because of the car's condition means…", options: ["A refund", "No test for 6 months", "The fee is lost", "The tester is reprimanded"], answer: 2,
      explain: "Get it fixed before the test.", src: P(65, "Retention Q18 (answer c, p.94)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "adaptations",
      prompt: "A pupil can't use their right leg. Which picture helps?", options: ["adaptations", "tech-checks"], answer: 0,
      names: ["Adaptations", "Technical checks"],
      explain: "A left-foot accelerator in an automatic.", src: P(63, "Common adaptations") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "other",
      prompt: "A test vehicle should have…", options: ["No dual controls", "Any dual accelerator removed", "Dual controls", "Any dual clutch removed"], answer: 1,
      explain: "Dual brake and clutch are fine.", src: P(65, "Retention Q14 (answer b, p.94)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "3.7",
  number: "3.7",
  title: "The Driving Test",
  pages: [57, 67],
  intro: "Eligibility, roadworthiness, the desk, technical checks and controls, the drive, the result, the marking sheet and vehicle adaptations.",
  objectives: [
    "The requirements for the driving test",
    "The test marking sheet",
    "Analysing faults marked on a driving report",
  ],
  objectivesSrc: P(57, "Objectives"),
  mcqLink: { sectionId: "adi.sec.procedure", label: "Driving Test Procedure & Documentation" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...testday, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "test-ready", icon: "📝", label: "Test Ready", rule: { activity: "testday", min: 100 } },
    { id: "driving-test-specialist", icon: "🏆", label: "Driving Test Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
