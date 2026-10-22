/*
  ===========================================================================
  BOOK 3 · UNIT 3.2 — BEFORE DRIVING

  Source: "Theory Resource Workbook 3 of 4" (Driver Education Supplies),
  book pages 11–16, with the post-test model answers on page 89 and the
  retention-test answers on page 93 (1a 2c 3a 4d 5c 6b 7b 8c 9b 10d).

  Omitted retention questions (answer key unsafe):
  - Q2 (before driving, make sure "your use of the vehicle is insured",
    key c): "you are properly insured against third party risks" (b) is
    just as defensible — the unit gives third party as the legal minimum.
  - Q3 (a health condition must have been "reported to the licensing
    authority", key a): the unit says to visit a doctor before applying,
    so "discussed with your doctor" (b) is just as defensible.

  Added from the regulations (not in the book): the order EDT lessons must
  be taken in (S.I. 173/2011: lessons 1–8 in sequence, 9–12 after lesson 8
  in any order; the instructor must be satisfied before the next lesson),
  and reduced EDT = six lessons (1, 5, 6, 7, 9, 10; S.I. 9/2019 excuses
  2, 3, 4, 8, 11, 12). The book's list of reduced sessions left out lesson 9.

  Fees, ages and procedures change: the unit itself advises checking the
  NDLS and RSA for updates, and the app shows the rules as the book gives
  them.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 3, unit: "3.2", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "permit": {
    title: "The learner permit",
    text: "Since 2007 the learner permit has replaced the provisional licence. A learner must first pass the driver theory test, then apply to the NDLS (in person at a centre, or online with a Public Services Card and verified MyGovID). Only with a learner permit may they take lessons, and they need a current, valid permit to sit the driving test. They must normally live in Ireland and have their photograph taken.",
    src: P(11, "Driving licence; Application for a first learner permit"),
  },
  "apply": {
    title: "What applicants need",
    text: "A Public Services Card and verified MyGovID; a theory test pass in that category within the previous 2 years; eyesight and medical report forms dated within one month if required; proof of address within six months if it changed; proof of normal residence if born outside the EU/EEA; a CPC if required; and the fee — waived for those aged 70 or over.",
    src: P(11, "All applicants need the following"),
  },
  "medical": {
    title: "Eyesight and medical reports",
    text: "Eyesight report: filled in by a registered doctor or ophthalmic optician, and signed in front of them. Medical report: completed by a registered doctor, signed in front of them — needed for the heavier categories (C1, C, D1, D, C1E, CE, D1E, DE) and for drivers reaching 70. With a listed medical condition, or medication likely to affect driving, see a doctor before applying. People who depend on or regularly abuse mind-altering substances may not hold a permit. Anyone recorded as needing glasses must keep their eyesight up to standard.",
    src: P(12, "Eyesight and medical reports; Medical conditions; p.89 answer 3"),
  },
  "six-month": {
    title: "The six-month rule",
    text: "A first-time learner permit holder in categories A, A2, A1, B, AM or W can't take the driving test until six months after the permit's start date — to gain experience. Exemptions include category BE, A1/A2 licence holders moving up after 2 years, and holders of a full foreign licence in that category for more than 6 months (with a letter of entitlement).",
    src: P(12, "The six-month rule; Exemptions"),
  },
  "learner-rules": {
    title: "Learner restrictions",
    text: "Display L-plates, clearly visible front and rear. Be supervised by someone who has held a full licence for that category for at least two years. No towing a trailer, and no motorways. A learner found driving without a qualified accompanying driver commits an offence — a fixed charge, penalty points or both.",
    src: P(89, "Post-test answer 2; p.12 Novice drivers; p.13 Cars and trailers"),
  },
  "novice": {
    title: "Novice drivers",
    text: "A first-time full licence holder is a 'novice driver' for 2 years and must display N-plates front and rear on any vehicle they drive. It applies only once — not again for a new category. Novices don't need an accompanying driver, but may not accompany a learner.",
    src: P(12, "Novice drivers"),
  },
  "legal": {
    title: "Driving legally",
    text: "Always carry your licence or permit and produce it to a garda on request. The vehicle must display valid tax, insurance and NCT certificates, and L or N plates front and rear where needed. The documents you need: a licence for the category, a certificate of insurance, current motor tax and a current NCT certificate where required.",
    src: P(13, "Driving legally; p.89 answer 1"),
  },
  "edt": {
    title: "Essential Driver Training",
    text: "All first learner permit holders for cars must complete EDT with an ADI: 12 one-hour sessions following a set syllabus, recorded in the learner's logbook with the ADI's stamp and signature, and uploaded to the RSA portal. A sponsor — a qualified driver — supervises practice outside lessons. Not every ADI lesson is an EDT lesson: make it clear. Drivers with a full B licence from a country without a licence exchange agreement (held for at least 2 years) can do a reduced EDT of six lessons — 1, 5, 6, 7, 9 and 10 — and can apply to be excused the six-month wait. Order matters: lessons 1 to 8 must be taken in sequence, each only when the instructor is satisfied the pupil has met its standard; lessons 9 to 12 come after lesson 8 and can be taken in any order. Reduced EDT follows the same rule: 1, 5, 6 and 7 in sequence, then 9 and 10 in either order.",
    src: P(13, "Essential Driver Training; Sponsor; Reduced EDT; S.I. 173/2011 and S.I. 9/2019"),
  },
  "insurance": {
    title: "Motor insurance",
    text: "It's a criminal offence to drive without it. The three basic types, in order of cost: third party — the legal minimum, covering injury or damage to others; third party, fire and theft — plus your own car's loss or damage by fire or theft; comprehensive — plus accidental damage to your car and injury to you. Policies usually cover a named vehicle; an excess clause means you pay the first part of any claim. The certificate of insurance notes who's insured, the vehicle, the type and period of cover and the main conditions.",
    src: P(13, "Motor insurance; p.14; p.89 answers 4, 6"),
  },
  "premium": {
    title: "What sets the premium",
    text: "Age (young drivers pay more), the car's model, engine size and condition, an alarm or immobiliser, occupation and use, driving experience, and the no-claims bonus — up to five years of claim-free driving, which can be protected for an extra premium. Convictions such as dangerous or drink driving raise it. Never conceal convictions: it can invalidate the insurance. Get as many quotes as possible.",
    src: P(14, "What determines the premium; p.15 Convictions; p.89 answer 5"),
  },
  "nct": {
    title: "Tax and the NCT",
    text: "Motor tax is compulsory for all motor vehicles on public roads, and the disc can't be transferred between vehicles. The NCT checks that key safety and environmental systems meet minimum legal standards — currently from 4 years old (annually for heavy goods, large passenger vehicles, ambulances and taxis from 1 year). Failed? Arrange repairs and a re-test. Without a current certificate you may drive only to a test, or to a pre-arranged repair.",
    src: P(89, "Post-test answers 7–10"),
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
    "Theory test → learner permit → EDT → 6 months → driving test",
    "Licence, insurance, tax and NCT before you drive",
    "Third party is the legal minimum insurance",
  ],
  cards: [
    {
      icon: "🪪",
      kicker: "The learner permit",
      title: "Theory test first",
      visual: "learner-path",
      ask: {
        prompt: "What must a learner pass before applying for a learner permit?",
        options: ["The driving test", "The driver theory test", "An eyesight test only"],
        answer: 1,
      },
      list: [
        "Replaced the provisional licence in 2007",
        "Pass the theory test, then apply to the NDLS — online or in person",
        "Lessons only once you hold the permit",
        "A current, valid permit is needed to sit the driving test",
      ],
      concept: "permit",
      src: P(11, "Driving licence"),
    },
    {
      icon: "📋",
      kicker: "Applying",
      title: "What applicants need",
      list: [
        "Public Services Card and verified MyGovID",
        "Theory test pass in that category within 2 years",
        "Eyesight and medical reports (if required), dated within a month",
        "Proof of address or residence where needed",
        "The fee — free if you're 70 or over",
      ],
      concept: "apply",
      src: P(11, "All applicants need the following"),
    },
    {
      icon: "👁️",
      kicker: "Eyesight and medical",
      title: "Signed in front of the doctor",
      ask: {
        prompt: "Who can complete the eyesight report?",
        options: ["Any pharmacist", "A registered doctor or ophthalmic optician", "The driving tester"],
        answer: 1,
      },
      list: [
        "Eyesight report: a registered doctor or ophthalmic optician",
        "Medical report: a registered doctor",
        "Medical report needed for heavy categories and drivers reaching 70",
        "A serious condition or medication? See a doctor before applying",
      ],
      concept: "medical",
      src: P(12, "Eyesight and medical reports; Supply a medical report"),
    },
    {
      icon: "⏳",
      kicker: "The six-month rule",
      title: "Time to gain experience",
      body: [
        "A first-time permit holder in categories A, A2, A1, B, AM or W can't take the driving test until six months after the permit's start date.",
        "Exemptions include category BE, moving up from A1/A2 after 2 years, and a full foreign licence held over 6 months.",
      ],
      concept: "six-month",
      src: P(12, "The six-month rule; Exemptions"),
    },
    {
      icon: "🔴",
      kicker: "Learners and novices",
      title: "L-plates and N-plates",
      visual: "plates",
      list: [
        "L-plates front and rear; a supervisor with 2+ years' full licence",
        "Learners: no towing, no motorways, never unaccompanied",
        "N-plates for 2 years after a first full licence",
        "Novices may drive alone — but can't supervise a learner",
      ],
      concept: "learner-rules",
      src: P(89, "Post-test answer 2; p.12 Novice drivers"),
    },
    {
      icon: "📄",
      kicker: "Driving legally",
      title: "Four things before you drive",
      visual: "driving-docs",
      list: [
        "A licence or permit for the category — carry it",
        "A certificate of insurance",
        "Current motor tax",
        "A current NCT certificate, if required",
      ],
      callout: "Produce your licence to a garda on request.",
      concept: "legal",
      src: P(13, "Driving legally; p.89 answer 1"),
    },
    {
      icon: "🎓",
      kicker: "EDT",
      title: "12 one-hour lessons",
      list: [
        "Essential Driver Training with an ADI for all first car permits",
        "Set syllabus, recorded in the logbook — stamped, signed, uploaded",
        "A sponsor supervises practice between lessons",
        "Reduced EDT (6 sessions: 1, 5, 6, 7, 9, 10) for some foreign licence holders",
      ],
      callout: "Not every ADI lesson is an EDT lesson — tell your pupils which they're booking.",
      concept: "edt",
      src: P(13, "Essential Driver Training; Sponsor; Reduced EDT"),
    },
    {
      icon: "🔢",
      kicker: "EDT order",
      title: "Lessons 1–8 in sequence",
      ask: {
        prompt: "Can a pupil take EDT lesson 3 before lesson 2?",
        options: ["Yes, any order is fine", "No — lessons 1 to 8 must be taken in sequence", "Only with the RSA's permission"],
        answer: 1,
      },
      list: [
        "Lessons 1 to 8: strictly in order, 1 → 2 → 3 … → 8",
        "Move on only when the instructor is satisfied the standard is met",
        "Lessons 9 to 12: after lesson 8, in any order",
        "Reduced EDT: 1, 5, 6, 7 in order, then 9 and 10 (either order)",
      ],
      callout: "Lessons build on each other — a pupil who isn't ready repeats the lesson rather than skipping ahead.",
      concept: "edt",
      src: P(13, "EDT — S.I. 173/2011 Reg. 4 and Schedule; reduced course S.I. 9/2019"),
    },
    {
      icon: "🛡️",
      kicker: "Insurance",
      title: "Three types, rising in cost",
      visual: "insurance-tiers",
      list: [
        "Third party — the legal minimum",
        "Third party, fire and theft",
        "Comprehensive — plus your own car and injury to you",
        "Excess: you pay the first part of any claim",
      ],
      callout: "Driving uninsured is a criminal offence.",
      concept: "insurance",
      src: P(13, "Motor insurance; p.14"),
    },
    {
      icon: "💶",
      kicker: "The premium",
      title: "What it depends on",
      visual: "premium-factors",
      list: [
        "Age and experience; the car and its engine size",
        "Occupation and use; an alarm or immobiliser",
        "No-claims bonus — up to 5 years, can be protected",
        "Convictions and penalty points",
      ],
      callout: "Never hide a conviction — it can invalidate the insurance.",
      concept: "premium",
      src: P(14, "What determines the premium; p.15"),
    },
    {
      icon: "🔧",
      kicker: "Tax and the NCT",
      title: "Roadworthy and taxed",
      list: [
        "Motor tax: compulsory; the disc can't be transferred",
        "NCT: from 4 years old (taxis and some heavy vehicles from 1 year)",
        "It checks key safety and environmental systems",
        "Failed? Repair and re-test; drive only to the test or a booked repair",
      ],
      concept: "nct",
      src: P(89, "Post-test answers 7–10"),
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
    { id: "r1", type: "flash", concept: "legal", visual: "driving-docs",
      front: "Which documents must you have before driving a car on a public road?",
      back: "A licence for the category, a certificate of insurance, current motor tax, and a current NCT certificate if required.", src: P(89, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "learner-rules", visual: "plates",
      front: "The restrictions on a learner permit holder driving a car?",
      back: "L-plates front and rear; supervised by someone with a full licence for 2+ years; no towing; no motorways.", src: P(89, "Post-test answer 2") },
    { id: "r3", type: "fill", concept: "insurance", visual: "insurance-tiers",
      before: "The legal minimum insurance cover is", after: ".",
      options: ["third party", "comprehensive", "third party, fire and theft", "none"], answer: "third party",
      explain: "Most policies give more than the minimum.", src: P(89, "Post-test answer 4") },
    { id: "r4", type: "flash", concept: "insurance",
      front: "What's noted on the certificate of insurance?",
      back: "Who's insured, the vehicle covered, the kind of cover, the period of cover and the main conditions.", src: P(89, "Post-test answer 6") },
    { id: "r5", type: "fill", concept: "nct",
      before: "A car must pass the NCT once it's", after: "old.",
      options: ["4 years", "1 year", "2 years", "10 years"], answer: "4 years",
      explain: "One year for taxis, ambulances and some heavy vehicles.", src: P(89, "Post-test answer 7") },
    { id: "r6", type: "flash", concept: "nct",
      front: "What's the purpose of the vehicle test (NCT)?",
      back: "To ensure key safety and environmental systems meet minimum legal standards.", src: P(89, "Post-test answer 8") },
    { id: "r7", type: "truefalse", concept: "nct",
      statement: "Without a current NCT certificate you may still drive to a pre-arranged repair.", answer: true,
      explain: "Or to a testing station — nowhere else.", src: P(89, "Post-test answer 10") },
    { id: "r8", type: "truefalse", concept: "novice",
      statement: "A novice driver may act as the accompanying driver for a learner.", answer: false,
      explain: "Novices may drive alone but must not supervise a learner.", src: P(12, "Novice drivers") },
    { id: "r9", type: "fill", concept: "edt",
      before: "Essential Driver Training is", after: "one-hour sessions with an ADI.",
      options: ["12", "6", "10", "20"], answer: "12",
      explain: "Recorded in the logbook and uploaded to the RSA portal.", src: P(13, "Essential Driver Training") },
    { id: "r9b", type: "truefalse", concept: "edt",
      statement: "EDT lessons 9 to 12 can be taken in any order, once lesson 8 is done.", answer: true,
      explain: "Lessons 1 to 8 must be in sequence; 9 to 12 are flexible after that.", src: P(13, "EDT order — S.I. 173/2011") },
    { id: "r9c", type: "fill", concept: "edt",
      before: "Reduced EDT is six lessons: 1, 5, 6, 7,", after: ".",
      options: ["9 and 10", "8 and 12", "2 and 3", "11 and 12"], answer: "9 and 10",
      explain: "Lessons 2, 3, 4, 8, 11 and 12 are excused.", src: P(13, "Reduced EDT — S.I. 9/2019") },
    { id: "r10", type: "flash", concept: "six-month",
      front: "What is the six-month rule?",
      back: "A first-time permit holder (A, A2, A1, B, AM, W) can't take the driving test until six months after the permit starts.", src: P(12, "The six-month rule") },
    { id: "r11", type: "truefalse", concept: "premium",
      statement: "Leaving a conviction off an insurance application is a sensible way to cut the premium.", answer: false,
      explain: "It risks invalidating the insurance — and breaks the law.", src: P(15, "Convictions and penalty points") },
  ],
};

/* ---------------------------------------------------------------------------
   3. ROAD LEGAL — recognition.
   --------------------------------------------------------------------------- */
const docs = {
  id: "docs",
  kind: "items",
  mode: "matching",
  title: "Road Legal?",
  blurb: "Spot it, sort it — permits, plates and cover",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "insurance",
      prompt: "Which picture shows the three types of motor insurance?",
      options: ["insurance-tiers", "premium-factors", "driving-docs"], answer: 0,
      names: ["Insurance types", "Premium factors", "Documents"],
      explain: "Third party, fire and theft, comprehensive — in order of cost.", src: P(13, "Three basic types") },
    { id: "k2", type: "picture", label: "Spot it", concept: "permit",
      prompt: "Which picture shows the route to a full licence?",
      options: ["learner-path", "plates"], answer: 0,
      names: ["The route", "L and N plates"],
      explain: "Theory test, permit, EDT, six months, then the test.", src: P(11, "Driving licence") },
    {
      id: "k3", type: "sort", concept: "learner-rules",
      prompt: "Learner or novice rule?",
      categories: [
        { id: "l", label: "Learner" },
        { id: "n", label: "Novice" },
      ],
      cards: [
        { text: "Must be accompanied", cat: "l" },
        { text: "No motorways", cat: "l" },
        { text: "No towing a trailer", cat: "l" },
        { text: "Plates for 2 years after first full licence", cat: "n" },
        { text: "May not supervise a learner", cat: "n" },
      ],
      explain: "Learners need a supervisor; novices drive alone but can't supervise.", src: P(12, "Novice drivers; p.89 answer 2") },
    {
      id: "k4", type: "sort", concept: "insurance",
      prompt: "Which is the lowest insurance that covers it?",
      categories: [
        { id: "tp", label: "Third party" },
        { id: "tpft", label: "Fire & theft" },
        { id: "comp", label: "Comprehensive" },
      ],
      cards: [
        { text: "Injury to another driver", cat: "tp" },
        { text: "Damage to someone else's car", cat: "tp" },
        { text: "Your car is stolen", cat: "tpft" },
        { text: "Your car catches fire", cat: "tpft" },
        { text: "You crash into a wall", cat: "comp" },
      ],
      explain: "Each type adds cover to the one before.", src: P(13, "Third party; p.14") },
    { id: "k5", type: "picture", label: "Spot it", concept: "legal",
      prompt: "Which picture shows what a car must display?",
      options: ["driving-docs", "insurance-tiers"], answer: 0,
      names: ["Licence, tax, insurance, NCT", "Insurance types"],
      explain: "Tax, insurance and NCT discs — and carry your licence.", src: P(13, "Driving legally") },
    { id: "k6", type: "picture", label: "Spot it", concept: "premium",
      prompt: "Which picture shows what affects the cost of insurance?",
      options: ["premium-factors", "learner-path"], answer: 0,
      names: ["Premium factors", "Route to a licence"],
      explain: "Age, car, use, experience, no-claims bonus, convictions.", src: P(14, "What determines the premium") },
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
  blurb: "Documents and rules",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "insurance", visual: "insurance-tiers",
      prompt: "Match the cover to what it adds.",
      pairs: [
        ["Third party", "Others' injury and property"],
        ["Fire and theft", "Your car burnt or stolen"],
        ["Comprehensive", "Accidental damage to your car"],
        ["Excess", "You pay the first part of a claim"],
      ],
      explain: "In order of increasing cost.", src: P(13, "Motor insurance; p.14") },
    {
      id: "m2", type: "match", concept: "legal",
      prompt: "Match the number to the rule.",
      pairs: [
        ["12", "One-hour EDT sessions"],
        ["6 months", "Wait before the driving test"],
        ["2 years", "N-plates after a first full licence"],
        ["4 years", "Age a car needs its first NCT"],
      ],
      explain: "Key numbers to explain to pupils.", src: P(12, "Six-month rule; p.13; p.89 answer 7") },
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
  blurb: "From learner to full licence",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "permit", visual: "learner-path",
      prompt: "Becoming a full licence holder — in order.",
      steps: ["Pass the driver theory test", "Apply for a learner permit", "Complete EDT with an ADI", "Wait six months from the permit date", "Pass the driving test", "Display N-plates for 2 years"],
      explain: "With L-plates and a supervisor until the test.", src: P(11, "Driving licence; p.12; p.13") },
    { id: "p1b", type: "order", concept: "edt",
      prompt: "Reduced EDT — put the six lessons in order.",
      steps: ["Lesson 1", "Lesson 5", "Lesson 6", "Lesson 7", "Lessons 9 and 10 (either order)"],
      explain: "1, 5, 6 and 7 keep their sequence; 9 and 10 come after and may be taken in either order.", src: P(13, "Reduced EDT — S.I. 9/2019") },
    { id: "p2", type: "order", concept: "nct",
      prompt: "Your car fails the NCT for minor faults — in order.",
      steps: ["Arrange the repair", "Book the re-test", "Have the repairs done", "Have the vehicle re-tested"],
      explain: "Meanwhile drive only to a testing station or a pre-arranged repair.", src: P(89, "Post-test answers 9, 10") },
    { id: "p3", type: "order", concept: "insurance", visual: "insurance-tiers",
      prompt: "Insurance types — cheapest to dearest.",
      steps: ["Third party", "Third party, fire and theft", "Comprehensive"],
      explain: "Each adds cover to the one before.", src: P(13, "Types of insurance in order of increasing cost") },
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
  blurb: "Questions pupils ask",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "permit",
      scene: "📞 Someone wants to book driving lessons but hasn't done anything else yet.",
      prompt: "What's their first step?",
      options: ["Book the driving test", "Pass the driver theory test", "Buy L-plates", "Start EDT"], answer: 1,
      explain: "Then apply for a learner permit — only then can lessons start.", src: P(11, "Driving licence") },
    { id: "s2", type: "choice", label: "Scenario", concept: "novice",
      scene: "🚗 A pupil passed their test last month. Their sister has a learner permit and wants them to sit in.",
      prompt: "Can they?",
      options: ["Yes, they hold a full licence", "No — a novice can't accompany a learner", "Yes, if N-plates are on", "Only on quiet roads"], answer: 1,
      explain: "The supervisor needs a full licence for at least 2 years.", src: P(12, "Novice drivers") },
    { id: "s3", type: "choice", label: "Scenario", concept: "six-month",
      scene: "📅 A pupil got their first car learner permit 3 months ago and wants a test next week.",
      prompt: "What do you tell them?",
      options: ["Book it", "They must wait until six months after the permit's start date", "Only with a reduced EDT", "Only in an automatic"], answer: 1,
      explain: "The six-month rule — time to gain experience.", src: P(12, "The six-month rule") },
    { id: "s4", type: "choice", label: "Scenario", concept: "learner-rules", visual: "plates",
      scene: "🛣️ Your learner wants to try the motorway to get to the next town faster.",
      prompt: "Your answer?",
      options: ["Fine with an ADI", "Learner drivers are excluded from motorways", "Only in the left lane", "Only at night"], answer: 1,
      explain: "Learner car drivers may not drive on motorways.", src: P(16, "Retention Q6 (answer b, p.93)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "premium",
      scene: "💸 A pupil plans to leave a past drink-driving conviction off their insurance form to save money.",
      prompt: "What's the risk?",
      options: ["None", "It can invalidate the insurance — and it's breaking the law", "A small fine", "Only the excess goes up"], answer: 1,
      explain: "Never conceal relevant information from an insurer.", src: P(15, "Convictions and penalty points") },
    { id: "s6", type: "choice", label: "Scenario", concept: "nct",
      scene: "🔧 Your car's NCT has expired; the repair garage booked for tomorrow is 5 km away.",
      prompt: "May you drive it there?",
      options: ["No, never", "Yes — to a pre-arranged repair or to the test", "Yes, anywhere this week", "Only with hazard lights on"], answer: 1,
      explain: "Only to a testing station or a pre-arranged repair.", src: P(89, "Post-test answer 10") },
    { id: "s7", type: "choice", label: "Scenario", concept: "edt",
      scene: "📘 A pupil assumes every lesson with you counts towards their 12 EDT sessions.",
      prompt: "What should you do?",
      options: ["Let them think so", "Make it clear which lessons are EDT sessions", "Count every lesson as EDT", "Skip the logbook"], answer: 1,
      explain: "Not all ADI lessons are EDT lessons — pupils should know what they're booking.", src: P(13, "What is a sponsor") },
    { id: "s8", type: "choice", label: "Scenario", concept: "edt",
      scene: "🔀 A pupil has done EDT lesson 2 and asks to do lesson 4 next because it's on a road they like.",
      prompt: "What do you say?",
      options: ["Fine — any order", "Lesson 3 comes next: lessons 1 to 8 are taken in sequence", "Skip to lesson 9", "Do 3 and 4 together"], answer: 1,
      explain: "And only when you're satisfied lesson 2's standard is met.", src: P(13, "EDT order — S.I. 173/2011") },
    { id: "s9", type: "choice", label: "Scenario", concept: "edt",
      scene: "🌍 A pupil with a full licence from a non-exchange country, held 5 years, has approval for reduced EDT.",
      prompt: "Which lessons do they take?",
      options: ["All 12", "Lessons 1, 5, 6, 7, 9 and 10", "Lessons 1 to 6", "Any six they choose"], answer: 1,
      explain: "Lesson 1 first; lessons 2, 3, 4, 8, 11 and 12 are excused.", src: P(13, "Reduced EDT — S.I. 9/2019") },
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
  blurb: "A new pupil's first steps",
  xpPer: 10,
  situation: "🆕 A 17-year-old has just passed the theory test and wants to start lessons with you.",
  items: [
    { id: "w1", type: "choice", step: "Applying", concept: "apply", prompt: "To apply online for the learner permit they need…",
      options: ["Their parents' licence", "A Public Services Card and verified MyGovID", "An NCT certificate", "Insurance first"], answer: 1,
      explain: "Plus the theory test pass, any reports needed, and the fee.", src: P(11, "All applicants need the following") },
    { id: "w2", type: "choice", step: "Eyesight", concept: "medical", prompt: "The eyesight test may be done by…",
      options: ["An optician only", "An optician and a doctor together", "An optician or a doctor", "The RSA tester before the test"], answer: 2,
      explain: "A registered doctor or ophthalmic optician — sign it in front of them.", src: P(16, "Retention Q5 (answer c, p.93)") },
    { id: "w3", type: "choice", step: "First lesson", concept: "learner-rules", prompt: "On the car they must display…",
      options: ["Their permit", "L-plates front and rear", "Your ADI licence only", "N-plates"], answer: 1,
      explain: "L-plates clearly visible from the front and rear.", src: P(16, "Retention Q7 (answer b, p.93)") },
    { id: "w4", type: "choice", step: "Insurance", concept: "insurance", prompt: "The legal minimum insurance on their family car is…",
      options: ["Fully comprehensive", "Third party", "Third party, fire and theft", "None"], answer: 1,
      explain: "Third party cover is the legal minimum.", src: P(16, "Retention Q9 (answer b, p.93)") },
    { id: "w5", type: "choice", step: "Practice", concept: "edt", prompt: "Between your lessons, who supervises their practice?",
      options: ["Nobody", "A sponsor — a qualified driver", "Another learner", "A novice driver"], answer: 1,
      explain: "The sponsor tracks practice in the logbook.", src: P(13, "What is a sponsor") },
    { id: "w6", type: "choice", step: "Roadworthiness", concept: "legal", prompt: "Who is responsible for the car being roadworthy while driven?",
      options: ["The registered owner", "The registered keeper", "The driver", "The NCT testers"], answer: 2,
      explain: "The driver must make sure the vehicle is fit for the road.", src: P(16, "Retention Q8 (answer c, p.93)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 93. Q2 and Q3 are omitted (see
   header).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(16, `Retention test Q${n}; answer p.93`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "Before driving a motor vehicle, you must ensure that", ["you have a valid licence or permit bearing your image and signature", "your licence or permit is signed in blue ink", "you have a category B driving licence", "you have applied for a learner permit"], 0, "legal", "driving-docs"),
    R(4, "Vehicle excise duty, otherwise known as vehicle tax, is", ["not required if the vehicle is vintage", "a receipt showing the duty has been paid", "a certificate showing the vehicle is insured", "compulsory for all motor vehicles on public roads"], 3, "nct"),
    R(5, "On application for a learner permit an eyesight test is required by law. It may be done by", ["an optician", "an optician and a doctor", "an optician or a doctor", "the RSA tester just before the driving test"], 2, "medical"),
    R(6, "Learner car drivers are excluded from", ["driving at speeds over 60 km/h", "driving on motorways", "driving with L-plates", "driving at night"], 1, "learner-rules", "plates"),
    R(7, "When learning to drive, learner permit holders must display", ["their learner permit on the vehicle", "L-plates on the vehicle", "a trainee licence in the windscreen", "the licence of the instructor or supervising driver"], 1, "learner-rules", "plates"),
    R(8, "Responsibility for ensuring a vehicle is roadworthy while being driven rests with", ["the registered owner", "the registered keeper", "the driver", "the NCT testers"], 2, "legal"),
    R(9, "The minimum motor insurance cover required by law to drive on a public road is", ["fully comprehensive", "third party", "third party, fire and theft", "none of the above"], 1, "insurance", "insurance-tiers"),
    R(10, "Having paid the vehicle excise duty, the owner of a vehicle may", ["transfer the tax disc between vehicles", "only transfer it between vehicles they own", "not keep the vehicle off the public road", "not transfer the tax disc between vehicles"], 3, "nct"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "permit",
      prompt: "The learner permit replaced the provisional licence in…", options: ["1997", "2007", "2013", "2020"], answer: 1,
      explain: "Since 2007.", src: P(11, "Driving licence") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "novice",
      prompt: "Which picture shows the plates for learners and new drivers?", options: ["plates", "driving-docs", "learner-path"], answer: 0,
      names: ["L and N plates", "Documents", "Route to a licence"],
      explain: "L-plates for learners; N-plates for 2 years after the first full licence.", src: P(12, "Novice drivers") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "edt",
      statement: "EDT sessions are recorded in the learner's logbook, stamped and signed by the ADI.", answer: true,
      explain: "And uploaded to the RSA portal.", src: P(13, "Essential Driver Training") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "learner-rules",
      scene: "🚚 Your pupil, on a learner permit, wants to tow a small trailer home.",
      prompt: "Is it allowed?", options: ["Yes, if light", "No — learner permit holders may not tow a trailer", "Only with an ADI", "Only in daylight"], answer: 1,
      explain: "Learners in categories B, C, C1, D and D1 may not tow.", src: P(13, "Cars and trailers") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "medical",
      prompt: "Match the report.", pairs: [["Eyesight report", "Doctor or ophthalmic optician"], ["Medical report", "Registered doctor"], ["Both", "Signed in front of them"]],
      explain: "Dated within one month of applying.", src: P(12, "Eyesight and medical reports") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "permit",
      prompt: "Route to a licence:", steps: ["Theory test", "Learner permit", "EDT", "Driving test"],
      explain: "With the six-month wait before the test.", src: P(11, "Driving licence") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "premium",
      scene: "💶 A pupil wants a cheaper insurance quote.",
      prompt: "Good advice?", options: ["Hide past penalty points", "Get as many quotes as possible and build a no-claims bonus", "Insure the car above its value", "Skip insurance"], answer: 1,
      explain: "Some insurers also give a discount after a course of ADI lessons.", src: P(14, "The premium depends on; No-claims bonuses") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "learner-rules",
      prompt: "Learner car drivers are excluded from…", options: ["Speeds over 60 km/h", "Motorways", "Driving with L-plates", "Driving at night"], answer: 1,
      explain: "No motorways for learners.", src: P(16, "Retention Q6 (answer b, p.93)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "insurance",
      prompt: "A pupil asks what 'third party' means. Which picture explains it?", options: ["insurance-tiers", "premium-factors"], answer: 0,
      names: ["Insurance types", "Premium factors"],
      explain: "Third party: the legal minimum, covering others.", src: P(13, "Third party insurance") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "nct",
      prompt: "After paying motor tax, the owner may…", options: ["Transfer the disc between vehicles", "Transfer it only between their own vehicles", "Not keep the car off the road", "Not transfer the disc between vehicles"], answer: 3,
      explain: "The disc belongs to that vehicle.", src: P(16, "Retention Q10 (answer d, p.93)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "3.2",
  number: "3.2",
  title: "Before Driving",
  pages: [11, 16],
  intro: "Learner permits, eyesight and medical reports, L and N plates, EDT, insurance, tax and the NCT.",
  objectives: [
    "Driving licence requirements for driving a car",
    "Restrictions on learner drivers",
    "Eyesight and maintaining requirements",
    "Types of insurance and the legal minimum",
    "Road tax, insurance and vehicle testing certification",
  ],
  objectivesSrc: P(11, "Objectives"),
  mcqLink: { sectionId: "adi.sec.procedure", label: "Driving Test Procedure & Documentation" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...docs, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "road-legal", icon: "📄", label: "Road Legal", rule: { activity: "docs", min: 100 } },
    { id: "ready-to-drive-specialist", icon: "🏆", label: "Ready-to-Drive Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
