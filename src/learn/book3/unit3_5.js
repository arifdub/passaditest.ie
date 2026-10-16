/*
  ===========================================================================
  BOOK 3 · UNIT 3.5 — DRIVER LICENSING

  Source: "Theory Resource Workbook 3 of 4" (Driver Education Supplies),
  book pages 40–52, with the retention-test answers on page 94 (55
  questions). This unit has no post test.

  Omitted retention questions (answer key unsafe):
  - Q7 (applying for a licence, keyed "attend in person"): the unit says
    first licences can be applied for online.
  - Q10 (uploading a certificate of competency online): not in the unit.
  - Q12 (producing a licence to a garda): options b and d say the same.
  - Q14 (conditions to report after a first licence, keyed "prescribed
    glasses"): not in the unit; "a visual problem in one eye" is as
    defensible.
  - Q16 (a pupil unsure which conditions to report, keyed "ask the RSA"):
    the unit says seek professional advice — "consult their doctor" is as
    defensible.
  - Q19 (licence history on an application, keyed "not asked"): declaring
    previous permits (c) is just as defensible.
  - Q29 (a US licence holder moving here): options a and b both fit the
    unit's "may have to exchange".
  - Q36 (learner permits for C, D1 or D, keyed "category B or C1"): the
    unit says only after passing category B — option b is as defensible.

  Licensing rules, fees and codes change: the unit says it is a guide only
  and to check the NDLS and Rules of the Road for updates.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 3, unit: "3.5", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "law": {
    title: "The law on licences",
    text: "Section 38 of the Road Traffic Act 1961: anyone driving a mechanically propelled vehicle in a public place must hold a current learner permit or licence for that category. Section 115: giving false or misleading information on an application is an offence. ADIs must keep up to date with the law and can ask their supervising examiner when unsure.",
    src: P(40, "Legal terms, conditions and obligations"),
  },
  "first-licence": {
    title: "A first full licence",
    text: "Apply online — no paper forms or NDLS visit — with a Public Services Card and verified MyGovID, a driving test pass in that category within the last two years, proof of address (within six months) or residence where needed, any medical report (within one month), CPC or IBT training if required, and the fee (free at 70+). A first full licence means N-plates for 2 years.",
    src: P(40, "Your driving licence"),
  },
  "categories": {
    title: "Vehicle categories",
    text: "A, A1, A2: motorcycles. AM: mopeds. B: cars and light goods vehicles up to 3,500 kg with no more than 8 passenger seats. C, C1: trucks over 3,500 kg. D, D1: buses with more than 8 passenger seats. W: work vehicles and land tractors. E added (BE, CE, DE…) means with a trailer. Only after passing category B can you apply for C; for EC you must hold a full C. Full C holders are entitled to C1, full D to D1.",
    src: P(44, "Vehicle type and category; p.46 Licence category upgrading"),
  },
  "technical-checks": {
    title: "Technical checks on the test",
    text: "Car (B and BE) candidates are asked how they'd check 3 of: tyres, lights, reflectors, indicators, engine oil, coolant, washer fluid, steering, brakes and horn. Motorcycle candidates also check the chain and show the machine on and off its stand. Truck and bus candidates are asked about the red warning triangle, journey planning and power-assisted braking and steering.",
    src: P(41, "Technical checks table"),
  },
  "codes": {
    title: "Licence codes",
    text: "The credit-card licence records conditions in codes understood in every EU language. For example: 01 sight correction; 02 hearing aid; 10–43 modified controls; 78 automatics only; 101 renewal subject to a medical report; 115 organ donor; 991 the six-month rule; 992/993 a second or third learner permit; 999 must be accompanied by a qualified driver. Full list at ndls.ie.",
    src: P(42, "Driving licence codes; p.43"),
  },
  "learner-permit": {
    title: "The learner permit",
    text: "A trainee licence with conditions for safety. Every learner in Ireland must hold an IRISH learner permit for the category — not a UK or other European permit. A theory test pass must come first, and the certificate must be submitted within two years. Category B: at least 17 to hold a first permit. There's no maximum age for the theory test. A learner must be accompanied by someone who has held a full licence in the category for 2 continuous years, display L-plates (a red L on white) front and rear, and not block anyone's view with them.",
    src: P(43, "What is a learner permit; Minimum age; p.45; p.46"),
  },
  "theory-test": {
    title: "The driver theory test",
    text: "Designed to make new drivers safe, courteous and informed. It now includes eco-driving and hazard perception. Book online, by phone or by post with your PPSN; state special needs on the form. Pass: certificate within 30 minutes. Fail: a certificate showing weak areas — wait at least three days to reapply. Cancel with at least five working days' written notice or pay a fee.",
    src: P(44, "Recent changes; Application; Results; Cancelling"),
  },
  "medical": {
    title: "Eyesight and medical reports",
    text: "All first-time permit applicants need a satisfactory eyesight report from a doctor or ophthalmic optician. A medical report is needed for a first permit in C, D1, D, EC1, EC, ED1 or ED; at 70 on the day the licence is granted; or with listed disabilities, alcoholism, epilepsy, or regular medication affecting driving. Over 70: a one- or three-year licence with a doctor's certificate. Conditions like heart disease, diabetes or loss of visual field must be declared — seek professional advice when in doubt.",
    src: P(45, "Eyesight reports; A medical report; Physical disablements"),
  },
  "foreign": {
    title: "Licences from abroad",
    text: "Generally a fully licensed driver from a recognised country may drive here for up to a year after their latest entry, then may have to exchange for an Irish licence. New EU residents may drive on their licence until it expires or they take up residency (more than 185 days a year). A non-national learning here must hold an Irish learner permit and follow Irish rules.",
    src: P(46, "Driving licence exchange; New European residents; Teaching a non-national"),
  },
  "points": {
    title: "Penalty points",
    text: "Points apply 28 days after the notice is issued — the offence and payment dates don't matter. They stay on a current licence for at least 3 years from that date; 12 points means a 6-month disqualification, after which those points are removed. Expired periods don't count. Camera offences go to the registered owner, who must name the driver. Points on a foreign licence are held on a temporary database and transfer if you later get an Irish licence.",
    src: P(47, "Penalty points; Points on licence; Foreign licences"),
  },
  "carrying": {
    title: "Carrying your licence",
    text: "Always carry your licence or permit when driving and produce it to a garda on request. Accompanying drivers and sponsors must carry their licence too. Learners in A1 and A may not carry a passenger; in category W only if the vehicle is built for one and the passenger holds a full licence; learners may not tow in B, C1, C, D1 or D.",
    src: P(45, "Driving licence production; p.46 Further restrictions; p.47 Carrying"),
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
    "An IRISH learner permit for the category — always",
    "Points apply 28 days after the notice; stay 3 years",
    "Carry your licence — so must the accompanying driver",
  ],
  cards: [
    {
      icon: "⚖️",
      kicker: "The law",
      title: "A licence for every category",
      body: [
        "Section 38 of the Road Traffic Act 1961: drive in a public place only with a current permit or licence for that category.",
        "Section 115: giving false or misleading information on an application is an offence.",
      ],
      concept: "law",
      src: P(40, "Legal terms, conditions and obligations"),
    },
    {
      icon: "🚗",
      kicker: "Categories",
      title: "What each letter covers",
      visual: "licence-categories",
      ask: {
        prompt: "Category B covers a car or light van up to…",
        options: ["3,500 kg", "7,500 kg", "12,000 kg"],
        answer: 0,
      },
      list: [
        "A, A1, A2 motorcycles · AM mopeds",
        "B: cars up to 3,500 kg, no more than 8 passenger seats",
        "C, C1 trucks · D, D1 buses · W work vehicles",
        "E added means with a trailer",
        "C needs B first; EC needs a full C",
      ],
      concept: "categories",
      src: P(44, "Vehicle type and category; p.46"),
    },
    {
      icon: "🪪",
      kicker: "The learner permit",
      title: "Irish, current, for the category",
      list: [
        "Every learner needs an IRISH learner permit — not a UK or EU one",
        "Theory test first; submit the certificate within 2 years",
        "Category B: at least 17",
        "Accompanied by someone with a full licence for 2 continuous years",
        "L-plates front and rear — not blocking anyone's view",
      ],
      concept: "learner-permit",
      src: P(43, "What is a learner permit; p.45; p.46"),
    },
    {
      icon: "🔢",
      kicker: "Licence codes",
      title: "Restrictions in numbers",
      visual: "licence-codes",
      ask: {
        prompt: "A pupil's permit shows code 01. It means…",
        options: ["Automatics only", "Sight correction — glasses or lenses", "Organ donor"],
        answer: 1,
      },
      list: [
        "01 sight correction · 02 hearing aid",
        "78 automatics only · 101 renewal needs a medical",
        "991 the six-month rule · 999 must be accompanied",
        "992 / 993 a second or third learner permit",
      ],
      concept: "codes",
      src: P(42, "Full list of licence codes; p.43"),
    },
    {
      icon: "💻",
      kicker: "The theory test",
      title: "Safe, courteous, informed",
      list: [
        "Includes eco-driving and hazard perception",
        "Book online, by phone or post — PPSN to hand",
        "Pass: certificate within 30 minutes",
        "Fail: wait at least 3 days to reapply",
        "Cancel with 5 working days' written notice",
      ],
      concept: "theory-test",
      src: P(44, "Recent changes; Application; Results; Cancelling"),
    },
    {
      icon: "🩺",
      kicker: "Eyesight and medicals",
      title: "Declare it — seek advice",
      list: [
        "Eyesight report for every first-time permit",
        "Medical report: C and D categories, reaching 70, listed conditions",
        "Over 70: a 1- or 3-year licence with a doctor's certificate",
        "In doubt about a condition? Professional advice",
      ],
      concept: "medical",
      src: P(45, "Eyesight reports; A medical report"),
    },
    {
      icon: "🔧",
      kicker: "Technical checks",
      title: "Three checks on test day",
      visual: "daily-checks",
      list: [
        "Car: tyres, lights, reflectors, indicators, oil, coolant",
        "Washer fluid, steering, brakes, horn",
        "Motorcycles: also chain and stand",
        "Trucks and buses: warning triangle, journey planning",
      ],
      concept: "technical-checks",
      src: P(41, "Technical checks"),
    },
    {
      icon: "🌍",
      kicker: "From abroad",
      title: "Exchange, or learn here",
      list: [
        "Recognised full licence: up to a year after latest entry, then maybe exchange",
        "New EU residents: drive until it expires or they become resident",
        "Resident = more than 185 days a year",
        "A non-national learning here needs an Irish learner permit",
      ],
      concept: "foreign",
      src: P(46, "Driving licence exchange; New European residents"),
    },
    {
      icon: "⏱️",
      kicker: "Penalty points",
      title: "28 days, 3 years",
      visual: "licence-clock",
      list: [
        "Points apply 28 days after the notice is issued",
        "They stay at least 3 years from that date",
        "12 points: a 6-month disqualification",
        "Camera offence: the registered owner must name the driver",
      ],
      concept: "points",
      src: P(47, "Penalty points; Registered owner"),
    },
    {
      icon: "👛",
      kicker: "Carry it",
      title: "Licence on you, always",
      list: [
        "Produce your licence to a garda on request",
        "Accompanying drivers and sponsors carry theirs too",
        "Learner motorcyclists: no passengers",
        "Learners in B, C, D: no towing",
      ],
      concept: "carrying",
      src: P(45, "Driving licence production; p.46; p.47"),
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
    { id: "r1", type: "fill", concept: "points", visual: "licence-clock",
      before: "Penalty points apply", after: "after the notice is issued.",
      options: ["28 days", "7 days", "14 days", "31 days"], answer: "28 days",
      explain: "The offence date and payment date make no difference.", src: P(47, "Penalty point start date") },
    { id: "r2", type: "truefalse", concept: "learner-permit",
      statement: "A pupil with a UK learner permit can take lessons in Ireland on it.", answer: false,
      explain: "Every learner in Ireland must hold an Irish learner permit.", src: P(43, "What is a learner permit") },
    { id: "r3", type: "flash", concept: "codes", visual: "licence-codes",
      front: "What does licence code 78 mean?",
      back: "Restricted to vehicles with automatic transmission.", src: P(42, "Full list of licence codes") },
    { id: "r4", type: "flash", concept: "codes",
      front: "What does code 999 mean?",
      back: "Must be accompanied by a qualified driver.", src: P(43, "Licence codes") },
    { id: "r5", type: "fill", concept: "learner-permit",
      before: "The accompanying driver must have held a full licence for at least", after: ".",
      options: ["two continuous years", "one year", "six months", "five years"], answer: "two continuous years",
      explain: "In that vehicle category.", src: P(46, "Accompaniment requirements") },
    { id: "r6", type: "fill", concept: "theory-test",
      before: "After failing the theory test, wait at least", after: "before reapplying.",
      options: ["three days", "three weeks", "a month", "a day"], answer: "three days",
      explain: "The next appointment may be more than three weeks away.", src: P(44, "Failed theory test result") },
    { id: "r7", type: "flash", concept: "categories", visual: "licence-categories",
      front: "What does category D cover?",
      back: "Buses and passenger vehicles with more than 8 passenger seats.", src: P(44, "Vehicle type and category") },
    { id: "r8", type: "truefalse", concept: "points",
      statement: "Penalty points stay on a current licence for at least 3 years from the date they apply.", answer: true,
      explain: "Periods when the licence wasn't current don't count.", src: P(47, "Points on licence") },
    { id: "r9", type: "flash", concept: "foreign",
      front: "When is a person 'resident' in Ireland for licensing?",
      back: "When they live here for more than 185 days in a calendar year.", src: P(46, "New European residents") },
    { id: "r10", type: "truefalse", concept: "theory-test",
      statement: "There's a maximum age for taking the driver theory test.", answer: false,
      explain: "There's no maximum age.", src: P(43, "Drivers of category B vehicles") },
  ],
};

/* ---------------------------------------------------------------------------
   3. LICENCE LOOKUP — recognition.
   --------------------------------------------------------------------------- */
const licence = {
  id: "licence",
  kind: "items",
  mode: "matching",
  title: "Licence Lookup",
  blurb: "Spot it, sort it — categories, codes and time limits",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "codes",
      prompt: "Which picture shows the codes printed on a licence?",
      options: ["licence-codes", "licence-categories", "licence-clock"], answer: 0,
      names: ["Licence codes", "Categories", "Time limits"],
      explain: "Codes record restrictions, e.g. 01 glasses, 78 automatics.", src: P(42, "Driving licence codes") },
    { id: "k2", type: "picture", label: "Spot it", concept: "points",
      prompt: "Which picture shows how long points and permits last?",
      options: ["licence-clock", "licence-codes"], answer: 0,
      names: ["Time limits", "Licence codes"],
      explain: "28 days to apply, 3 years on the licence.", src: P(47, "Penalty points") },
    {
      id: "k3", type: "sort", concept: "categories",
      prompt: "Which category?",
      categories: [
        { id: "a", label: "A / AM" },
        { id: "b", label: "B" },
        { id: "cd", label: "C / D" },
      ],
      cards: [
        { text: "A 125 cc motorcycle", cat: "a" },
        { text: "A moped", cat: "a" },
        { text: "A family car", cat: "b" },
        { text: "A light van under 3,500 kg", cat: "b" },
        { text: "A 7.5-tonne truck", cat: "cd" },
        { text: "A 40-seat coach", cat: "cd" },
      ],
      explain: "B stops at 3,500 kg and 8 passenger seats.", src: P(44, "Vehicle type and category") },
    {
      id: "k4", type: "sort", concept: "learner-permit",
      prompt: "Allowed on a learner permit?",
      categories: [
        { id: "yes", label: "Allowed" },
        { id: "no", label: "Not allowed" },
      ],
      cards: [
        { text: "Driving with an accompanying driver", cat: "yes" },
        { text: "Lessons with an ADI", cat: "yes" },
        { text: "Driving alone after failing a test", cat: "no" },
        { text: "A pillion passenger on a learner motorcycle", cat: "no" },
        { text: "Towing a trailer in a car", cat: "no" },
      ],
      explain: "Learners must always be accompanied, and mustn't tow.", src: P(46, "Further restrictions; Accompaniment") },
    { id: "k5", type: "picture", label: "Spot it", concept: "categories",
      prompt: "Which picture shows the vehicle categories?",
      options: ["licence-categories", "licence-clock"], answer: 0,
      names: ["Categories", "Time limits"],
      explain: "A, AM, B, C, D, W — E for trailers.", src: P(44, "Vehicle type and category") },
    {
      id: "k6", type: "sort", concept: "medical",
      prompt: "Medical report needed?",
      categories: [
        { id: "yes", label: "Needed" },
        { id: "no", label: "Not usually" },
      ],
      cards: [
        { text: "First permit for category D", cat: "yes" },
        { text: "Turning 70 when the licence is granted", cat: "yes" },
        { text: "Epilepsy", cat: "yes" },
        { text: "A healthy 17-year-old, category B", cat: "no" },
      ],
      explain: "But every first permit needs an eyesight report.", src: P(45, "A medical report") },
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
  blurb: "Codes and time limits",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "codes", visual: "licence-codes",
      prompt: "Match the code to its meaning.",
      pairs: [
        ["01", "Sight correction"],
        ["78", "Automatics only"],
        ["991", "The six-month rule"],
        ["999", "Must be accompanied"],
        ["115", "Organ donor"],
      ],
      explain: "Full list at ndls.ie.", src: P(42, "Full list of licence codes; p.43") },
    {
      id: "m2", type: "match", concept: "points", visual: "licence-clock",
      prompt: "Match the time limit.",
      pairs: [
        ["28 days", "Points take effect"],
        ["3 years", "Points stay on the licence"],
        ["2 years", "N-plates after a first licence"],
        ["10 years", "A full licence, ages 17–70"],
      ],
      explain: "Key periods to explain to pupils.", src: P(47, "Penalty points; p.40; Retention Q40") },
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
  blurb: "Penalty points and upgrades",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "points", visual: "licence-clock",
      prompt: "Penalty points — in order.",
      steps: ["The offence is detected", "A notice is issued", "28 days pass", "Points apply to the licence", "Points stay at least 3 years"],
      explain: "The offence and payment dates don't affect when they apply.", src: P(47, "Penalty point start date") },
    { id: "p2", type: "order", concept: "categories",
      prompt: "Upgrading from a car to a truck with trailer — in order.",
      steps: ["Pass category B", "Pass the category C theory test", "Get a C learner permit", "Pass the C driving test", "Then apply for EC"],
      explain: "For EC you must hold a full C licence.", src: P(46, "Licence category upgrading") },
    { id: "p3", type: "order", concept: "points",
      prompt: "A camera catches your car — but a friend was driving. In order.",
      steps: ["The notice goes to you, the registered owner", "Complete the form naming the driver", "Return it as the notice says", "The driver receives the fixed charge notice"],
      explain: "The owner must give the details of who was driving.", src: P(47, "Registered owner of vehicle") },
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
  blurb: "Licensing questions pupils ask",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "learner-permit",
      scene: "🇬🇧 A new pupil from Belfast has a UK provisional licence and wants lessons in Dublin.",
      prompt: "What do you tell them?",
      options: ["Fine, start today", "They need an Irish learner permit first", "Only on quiet roads", "Only with an international permit"], answer: 1,
      explain: "All learners in Ireland must hold an Irish learner permit for the category.", src: P(43, "What is a learner permit") },
    { id: "s2", type: "choice", label: "Scenario", concept: "medical",
      scene: "🩺 Mid-course, a pupil tells you they've developed a condition that may affect their driving.",
      prompt: "What do you advise?",
      options: ["Don't worry", "See a doctor before the next lesson", "Stop lessons for good", "Tell your insurer only"], answer: 1,
      explain: "Get professional advice first.", src: P(48, "Retention Q8 (answer b, p.94)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "learner-permit",
      scene: "🚗 A pupil failed their test and wants to drive alone while waiting for the next one.",
      prompt: "Can they?",
      options: ["Yes, they've sat the test", "No — learners must always be accompanied", "Only in daylight", "Only locally"], answer: 1,
      explain: "A learner driving unsupervised commits an offence.", src: P(51, "Retention Q39 (answer b, p.94)") },
    { id: "s4", type: "choice", label: "Scenario", concept: "learner-permit",
      scene: "👨‍👧 A dad offers to supervise his son. He's held a full licence for 3 years, but was disqualified for 2 of them.",
      prompt: "Can he accompany the learner?",
      options: ["Yes", "No — he must not have been disqualified in the previous two years", "Only with a higher category", "No restrictions apply"], answer: 1,
      explain: "A qualified driver holds a full licence for two continuous years.", src: P(52, "Retention Q49 (answer b, p.94)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "codes",
      scene: "⚙️ A pupil passed in an automatic and now wants to drive their parents' manual.",
      prompt: "Can they?",
      options: ["Yes, it's category B", "Not until they pass a test in a manual", "Only on national routes", "Yes, if they tell the NDLS"], answer: 1,
      explain: "Their licence is restricted to automatics (code 78).", src: P(52, "Retention Q54 (answer c, p.94)") },
    { id: "s6", type: "choice", label: "Scenario", concept: "categories",
      scene: "🏍️ A full car licence holder wants to ride a motorcycle.",
      prompt: "What's needed?",
      options: ["Nothing — B covers it", "A learner permit for the motorcycle category", "A temporary licence", "Just a helmet"], answer: 1,
      explain: "A learner permit is needed for each new vehicle type.", src: P(50, "Retention Q25 (answer a, p.94)") },
    { id: "s7", type: "choice", label: "Scenario", concept: "theory-test",
      scene: "📅 A pupil can't make their theory test on Friday. Today is Wednesday.",
      prompt: "What happens if they cancel now?",
      options: ["Full refund", "They may be charged — 5 working days' written notice is needed", "Automatic rebooking", "Nothing"], answer: 1,
      explain: "Without five working days' notice, a cancellation fee may apply.", src: P(44, "Cancelling a theory test") },
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
  blurb: "A pupil from first enquiry to full licence",
  xpPer: 10,
  situation: "📞 Ciara, 17, phones to ask about driving lessons. She hasn't done anything yet.",
  items: [
    { id: "w1", type: "choice", step: "First step", concept: "theory-test", prompt: "What should she do first?",
      options: ["Apply for a full licence", "Study and apply for the theory test", "Apply for a learner permit", "Start lessons"], answer: 1,
      explain: "A theory test pass comes before a learner permit.", src: P(49, "Retention Q24 (answer b, p.94)") },
    { id: "w2", type: "choice", step: "Age", concept: "learner-permit", prompt: "The minimum age for a category B permit is…",
      options: ["16", "17", "18", "21"], answer: 1,
      explain: "At least 17.", src: P(50, "Retention Q34 (answer b, p.94)") },
    { id: "w3", type: "choice", step: "Her permit", concept: "learner-permit", prompt: "Her learner permit will generally be valid for…",
      options: ["Two years", "One year", "Six months", "Three years"], answer: 0,
      explain: "For a healthy person under 70.", src: P(50, "Retention Q35 (answer a, p.94)") },
    { id: "w4", type: "choice", step: "The wait", concept: "learner-permit", prompt: "How long before she can sit the test?",
      options: ["6 months", "6 weeks", "12 months", "12 weeks"], answer: 0,
      explain: "The six-month rule for first-time permits.", src: P(52, "Retention Q53 (answer a, p.94)") },
    { id: "w5", type: "choice", step: "Passed!", concept: "first-licence", prompt: "On passing she's given…",
      options: ["A congratulations card", "A certificate of competency", "A full licence on the spot", "An N-plate"], answer: 1,
      explain: "Then she applies for her full licence.", src: P(52, "Retention Q55 (answer d, p.94)") },
    { id: "w6", type: "choice", step: "N-plates", concept: "first-licence", prompt: "With her first full licence she must display…",
      options: ["An L-plate for 2 years", "N and L plates", "N-plates on her own car only", "N-plates on any vehicle she drives, for 2 years"], answer: 3,
      explain: "Front and rear.", src: P(51, "Retention Q44 (answer d, p.94)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 94. Q7, Q10, Q12, Q14, Q16, Q19,
   Q29 and Q36 are omitted (see header).
   --------------------------------------------------------------------------- */
const page = n => (n <= 12 ? 48 : n <= 24 ? 49 : n <= 35 ? 50 : n <= 45 ? 51 : 52);
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
    R(1, "Candidates applying for a driving test must apply to", ["D.O.E.", "DTTS", "RSA", "NDLS"], 2, "first-licence"),
    R(2, "Failed candidates applying for a second or subsequent driving test will", ["complete another application and go back on the waiting list", "be told to take mandatory lessons", "refer to the previous reference number only", "complete a fresh application each time"], 3, "first-licence"),
    R(3, "A category B holder learning to drive C or C1 is advised that they", ["must attain a learner permit for each higher category", "don't need one — B suffices", "only need one for vehicles over 7.5 tonnes", "can't get separate permits for each category"], 0, "categories"),
    R(4, "In severe weather, driving test candidates could be advised to", ["arrive 30 minutes early", "arrive 30 minutes late", "phone or check the website to see if tests are going ahead", "assume the test won't go ahead"], 2, "first-licence"),
    R(5, "Asked whether someone with a medical condition could have a licence, an ADI should say", ["it depends on the condition and age", "refer to professional advice", "it depends on the likelihood of impairment", "it depends on how they cope"], 1, "medical"),
    R(6, "When does a driver need to report a medical condition?", ["at the next renewal", "immediately after being told by their doctor", "within 9 months", "never"], 1, "medical"),
    R(8, "A pupil develops a medical condition likely to affect driving after lessons begin. You tell them", ["not to worry", "to seek a doctor's advice before the next lesson", "you refuse to teach them", "to tell their insurer at once"], 1, "medical"),
    R(9, "A previously reported medical condition worsens after a licence is granted. You must", ["tell your doctor to withhold your file", "inform the NDLS to have it recorded", "not report it", "seek a driving assessment"], 1, "medical"),
    R(11, "Applicants for the RSA register examinations must", ["include an SAE", "forward it to NDLS", "be Garda and Revenue cleared", "deliver it in person"], 2, "law"),
    R(13, "Which of these must drivers report to the NDLS?", ["chest pains after vigorous exercise", "attacks of angina easily provoked by driving", "sprained limbs", "colour blindness"], 1, "medical"),
    R(15, "With new learner drivers, an instructor should pay particular attention to", ["long-sightedness", "congenital heart disease", "a minor memory problem", "the permit, for code 01 or 'corrective lenses must be worn' or another disability"], 3, "codes", "licence-codes"),
    R(17, "Driving with uncorrected defective vision is", ["a civil offence", "a motoring offence", "an uncivil offence", "unlikely to lead to prosecution"], 1, "medical"),
    R(18, "Applying for a learner permit, are eye tests obligatory?", ["no, only for a full licence", "yes — completed within one month of applying", "only for driving test candidates", "only for a PSV licence"], 1, "medical"),
    R(20, "Advising a new driver about penalty points, you'd say", ["drive within the law or risk losing your new licence", "you're less likely to lose it as a new driver", "you're more likely to lose it as a new driver", "if you lose it you can just get a new permit"], 0, "points"),
    R(21, "A learner permit driver found driving unsupervised", ["is committing an offence", "isn't committing an offence", "gets a warning", "gets 6 penalty points"], 0, "learner-permit"),
    R(22, "After reporting a condition to the NDLS you're given a licence for only 1, 2 or 3 years because", ["you can be restricted to suitable vehicles", "your condition can be reviewed regularly", "you can appeal", "costs can be recouped"], 1, "medical"),
    R(23, "Your pupil tells you they're colour blind. The pupil", ["needs a medical exemption from eye tests", "may only drive accompanied", "must memorise the light sequence", "may drive without any restriction"], 3, "medical"),
    R(24, "Someone wants lessons but has no learner permit. You advise them to", ["study and apply for a full licence", "study and apply for a theory test", "study and apply for a learner permit", "apply for a permit and start lessons"], 1, "theory-test"),
    R(25, "A full category B holder applying to ride a motorcycle (A or A1) should", ["apply for a motorcycle learner permit", "ask for motorcycle entitlement on their licence", "apply for a temporary licence", "get it automatically with category B"], 0, "categories"),
    R(26, "You now live in Ireland and have held a full EU car licence in the last 10 years. You", ["pass an Irish test", "would need to change it if permanently resident", "apply for a learner permit", "get an international permit"], 1, "foreign"),
    R(27, "Drivers should be aware that", ["a permit covers all categories", "a permit for one category covers lower ones", "a full licence covers all categories", "a learner permit is needed for each new vehicle type"], 3, "categories"),
    R(28, "You're Irish, hold a full Irish licence, and will work 3 months elsewhere in Europe. You", ["apply for a permit there", "take a test there", "need do nothing — you can drive on your Irish licence", "get an international permit"], 2, "foreign"),
    R(30, "A category A licence entitles you to control", ["motorcycles and motor tricycles", "a car or light van", "a lorry over 3,500 kg", "a bus with more than 8 passenger seats"], 0, "categories", "licence-categories"),
    R(31, "A category B licence entitles you to control", ["a motorcycle", "a car or light goods vehicle with no more than 8 passenger seats, not over 3,500 kg", "a moped", "a bus with more than 8 passenger seats"], 1, "categories", "licence-categories"),
    R(32, "Having applied for a learner permit, how long until you get it?", ["the next day", "2 to 3 days", "generally 5 to 8 working days by post", "by courier"], 2, "learner-permit"),
    R(33, "The minimum age for category A1 is", ["17", "16", "18", "21"], 1, "categories"),
    R(34, "The minimum age for category B is", ["16", "17", "18", "21"], 1, "categories"),
    R(35, "A learner permit for a healthy person under 70 is valid for", ["two years", "one year", "six months", "three years"], 0, "learner-permit", "licence-clock"),
    R(37, "You received notice of penalty points. When will they apply?", ["31 days after the notice", "7 days after", "14 days after", "28 days after the notice, to a current licence"], 3, "points", "licence-clock"),
    R(38, "Who manages the National Driver Licence Service (NDLS)?", ["the Road Safety Authority", "the Department of Transport", "the theory test centre", "your county council"], 0, "first-licence"),
    R(39, "The learner permit application form advises learners", ["they needn't always be accompanied", "they must always be accompanied", "they must pass first time or reapply", "they may drive alone after failing, while waiting for a test"], 1, "learner-permit"),
    R(40, "The maximum period a full licence is issued for, ages 17 to under 70, is", ["two years", "ten years", "three years", "five years"], 1, "first-licence", "licence-clock"),
    R(41, "How can I check the penalty points on my licence?", ["visit their office", "phone", "email the NDLS for a Driver Statement", "ask a garda"], 2, "points"),
    R(42, "What is the six-month rule and who does it apply to?", ["supervised for six months", "second learner permits", "first-time learner permit holders", "hold the permit six months before learning"], 2, "learner-permit"),
    R(43, "Is a novice driver allowed on the motorway?", ["only after the six-month rule", "not for 2 years", "yes, but accompanied", "yes, and need not be accompanied"], 3, "first-licence"),
    R(44, "Having passed the test, a new driver must display", ["an L-plate for 2 years", "N and L plates for 2 years", "an N-plate on their own vehicle for 2 years", "an N-plate on any vehicle they drive for 2 years"], 3, "first-licence"),
    R(45, "Buying a second-hand car over 4 years old, a learner must ensure", ["a mechanic checks it", "it has a valid, in-date NCT disc", "public indemnity insurance", "it's only for HGVs"], 1, "law"),
    R(46, "Learner motorcycle riders must display on their bike", ["tax, insurance and NCT discs and an L-plate tabard", "a certificate of compliance", "a current tax disc, and a tabard with an L-plate front and rear", "a training certificate"], 2, "learner-permit"),
    R(47, "Learner motorcycle or moped riders must", ["carry pillion passengers to supervise them", "not carry pillion passengers at any time", "wear lap belts", "hold a full car licence first"], 1, "carrying"),
    R(48, "Is the owner who lets an unaccompanied learner drive their vehicle liable?", ["no, only the driver", "yes — the vehicle can be seized and they'd face a fine", "yes, and lose their licence", "they could explain it was necessary"], 1, "learner-permit"),
    R(49, "The accompanying driver has had a full licence for 3 years but was disqualified for 2 of them. May they accompany?", ["yes, over two years", "no — not disqualified in the previous two years", "with a higher category", "no restrictions"], 1, "learner-permit"),
    R(50, "A full B holder with a learner permit for C or D1 — must they display L-plates?", ["only for D1", "yes, on the truck or minibus on a learner permit", "no, they have a full B", "only with under 6 years' experience"], 1, "learner-permit"),
    R(51, "Can you update licence details, e.g. a change of address, online with the NDLS?", ["yes, with a PSC and verified MyGovID", "only with a full B licence", "no — post a form", "only if accompanied"], 0, "first-licence"),
    R(52, "A person applying for a third learner permit, not having taken a test, will get a permit", ["no", "for 1 year, with evidence of a test applied for or booked", "for 2 years, with evidence of a test", "with no restrictions"], 1, "codes"),
    R(53, "The minimum period a new learner must wait before applying for a test is", ["6 months", "6 weeks", "12 months", "12 weeks"], 0, "learner-permit"),
    R(54, "Can someone who passed in an automatic car drive a manual?", ["yes, it's category B", "yes, but not on motorways", "no, not until they pass in a manual", "yes, if they tell the NDLS"], 2, "codes"),
    R(55, "On passing the car driving test you're given", ["a certificate and a card", "a certificate of competency and confidence and experience", "a certificate of competency and confidence", "a certificate of competency"], 3, "first-licence"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "law",
      prompt: "Giving false information on a licence application is an offence under…", options: ["Section 38", "Section 115", "Section 1", "No section"], answer: 1,
      explain: "Section 115 of the Road Traffic Act 1961.", src: P(40, "Legal terms") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "categories",
      prompt: "Which picture shows what each licence letter covers?", options: ["licence-categories", "licence-codes", "licence-clock"], answer: 0,
      names: ["Categories", "Codes", "Time limits"],
      explain: "A, AM, B, C, D, W.", src: P(44, "Vehicle type and category") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "carrying",
      statement: "An accompanying driver doesn't need to carry their own licence.", answer: false,
      explain: "Qualified drivers and sponsors must carry it for inspection.", src: P(47, "Carrying a driving licence") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "foreign",
      scene: "🇫🇷 A French driver has moved here and lives in Ireland all year.",
      prompt: "What about her French licence?", options: ["Drive on it forever", "Once resident (185+ days a year) she may need to exchange it", "She must resit a test", "She needs a learner permit"], answer: 1,
      explain: "New EU residents may drive on it until it expires or they become resident.", src: P(46, "New European residents") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "codes",
      prompt: "Match the code.", pairs: [["01", "Glasses or lenses"], ["78", "Automatics only"], ["999", "Accompanied"]],
      explain: "Codes record restrictions.", src: P(42, "Licence codes") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "points",
      prompt: "Penalty points:", steps: ["Notice issued", "28 days", "Points apply", "3 years on licence"],
      explain: "From the effective date.", src: P(47, "Penalty points") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "theory-test",
      scene: "♿ A pupil with dyslexia is booking the theory test.",
      prompt: "What should they do?", options: ["Nothing different", "State their special needs on the application form", "Take it orally later", "Skip it"], answer: 1,
      explain: "Special arrangements must be requested on the form.", src: P(44, "Special needs") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "points",
      prompt: "Penalty points apply…", options: ["31 days after the notice", "7 days after", "14 days after", "28 days after the notice"], answer: 3,
      explain: "To a current licence.", src: P(51, "Retention Q37 (answer d, p.94)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "codes",
      prompt: "Before a first lesson you check the pupil's permit for code 01. Which picture shows why?", options: ["licence-codes", "licence-categories"], answer: 0,
      names: ["Licence codes", "Categories"],
      explain: "01: sight correction — they must wear glasses or lenses.", src: P(49, "Retention Q15 (answer d, p.94)") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "learner-permit",
      prompt: "A learner driving unsupervised…", options: ["Is committing an offence", "Isn't committing an offence", "Gets a warning", "Gets 6 points"], answer: 0,
      explain: "Learners must always be accompanied.", src: P(49, "Retention Q21 (answer a, p.94)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "3.5",
  number: "3.5",
  title: "Driver Licensing",
  pages: [40, 52],
  intro: "Learner permits and full licences, vehicle categories, licence codes, medicals, licences from abroad and penalty points.",
  objectives: [
    "Learner permit and driver licensing",
    "Vehicle categories",
    "Licence codes",
  ],
  objectivesSrc: P(40, "Objectives"),
  mcqLink: { sectionId: "adi.sec.procedure", label: "Driving Test Procedure & Documentation" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...licence, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "licence-lookup", icon: "🔢", label: "Licence Lookup", rule: { activity: "licence", min: 100 } },
    { id: "licensing-specialist", icon: "🏆", label: "Licensing Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
