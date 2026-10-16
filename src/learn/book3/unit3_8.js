/*
  ===========================================================================
  BOOK 3 · UNIT 3.8 — DRIVING TEST FORMS

  Source: "Theory Resource Workbook 3 of 4" (Driver Education Supplies),
  book pages 68–72, with the retention-test answers on page 94 (30
  questions). This unit has no post test.

  Not used from the text: the line saying a learner permit plus a
  certificate of competence "function as a full driving licence" — it
  conflicts with Unit 3.7, which says you still need an accompanying driver
  until the full licence is issued.

  Omitted retention questions (answer key unsafe):
  - Q4 (an Irish-language test → "complete an Irish version of the learner
    permit form", keyed b): not in the unit, and "need not be an Irish
    speaker" is also arguable.
  - Q6 (appeal → "write to the RSA complaints department", keyed d):
    Unit 3.7 gives an appeal to the District Court.
  - Q9 (asking for an afternoon test by ticking a box, keyed b): not in
    the unit; attaching a note is also defensible.
  - Q15 (too wide from the kerb when reverse parking → "control", keyed
    d): an option literally reads "too wide", and Unit 3.7 says reverse
    parking isn't requested.
  - Q22 (unhappy with the result → "may appeal the tester's decision",
    keyed a): Unit 3.7 says an appeal can't overturn the result; "seek
    legal advice" is also defensible.
  - Q30 (severe weather → "phone the test centre", keyed b): the unit says
    check the RSA website or phone the number on the appointment form
    (option a).

  Kept questions on the marking headings (Q13–Q21, Q26) come only from the
  retention test — the unit doesn't list subsections — and each has one
  defensible option.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 3, unit: "3.8", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "application": {
    title: "Applying",
    text: "Instructors should know the forms connected with the test; the RSA also gives every candidate a booklet when an appointment is made. After applying, the candidate gets an acknowledgement that the application and fee were received, with a reference number to use for any query to the booking centre.",
    src: P(68, "The driving instructor"),
  },
  "appointment": {
    title: "The appointment",
    text: "The appointment gives the date and time, the test centre address and the type of test. It shows the date by which you must tell the RSA to cancel or postpone without losing the fee — a short-notice test has no cancellation date. Queries go to the booking office on the number shown. In fog, ice, snow, high winds or other doubtful weather, check the RSA website or phone the number on the form. It may say where to park. The reference number is your test number — quote it in every call or letter.",
    src: P(68, "Driving test appointments"),
  },
  "conditions": {
    title: "Conditions of the test",
    text: "The appointment form warns that the test may not go ahead if you're late; that you must bring a valid learner permit (right category, in date); provide a properly taxed, insured and roadworthy vehicle displaying L-plates; that an HGV or LGV must not be loaded or partly loaded; and to read the details and conditions carefully.",
    src: P(68, "The appointment form advises test candidates that"),
  },
  "markings": {
    title: "The tester's markings",
    text: "The tester's report sheet doubles as the driving report, given to every candidate, pass or fail, to help identify weaknesses. Grade 1 minor faults are neither serious nor dangerous. Serious and dangerous faults go in their own columns — one serious or one dangerous fault means a fail.",
    src: P(68, "Driving test report; An explanation of the testers markings"),
  },
  "certificate": {
    title: "The pass certificate",
    text: "Every successful candidate gets a certificate of competence showing the date of the pass, the driver number and the vehicle category, with space for notes on any disability. It explains how to get a full licence and is valid for TWO YEARS only. Fill in the full licence application form and bring or send it to the licensing authority with the certificate — keep copies of anything posted. There's no credit for unexpired time on the learner permit.",
    src: P(68, "Pass certificate; p.69 N.B."),
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
    "Quote the reference (test) number in every query",
    "One serious or one dangerous fault = a fail",
    "The pass certificate is valid for two years only",
  ],
  cards: [
    {
      icon: "📨",
      kicker: "Applying",
      title: "Acknowledgement and reference",
      list: [
        "Know the forms connected with the test",
        "The RSA sends every candidate a booklet with the appointment",
        "An acknowledgement confirms the application and fee",
        "Use the reference number for any query",
      ],
      concept: "application",
      src: P(68, "The driving instructor"),
    },
    {
      icon: "📅",
      kicker: "The appointment",
      title: "Everything you need to know",
      visual: "appointment-letter",
      ask: {
        prompt: "It's icy on the morning of the test. What should the candidate do?",
        options: ["Just turn up", "Check the RSA website or phone the number on the form", "Cancel online"],
        answer: 1,
      },
      list: [
        "Date, time, centre address and type of test",
        "Cancel or postpone by the date shown — or lose the fee",
        "Short-notice test: no cancellation date",
        "Bad weather: RSA website or the number on the form",
      ],
      concept: "appointment",
      src: P(68, "Driving test appointments"),
    },
    {
      icon: "⚠️",
      kicker: "Conditions",
      title: "Read them carefully",
      visual: "test-conditions",
      list: [
        "Late? The test may not take place",
        "A valid learner permit — right category, in date",
        "A taxed, insured, roadworthy vehicle with L-plates",
        "HGV or LGV: not loaded or partly loaded",
      ],
      concept: "conditions",
      src: P(68, "The appointment form advises test candidates that"),
    },
    {
      icon: "✏️",
      kicker: "Markings",
      title: "Minor, serious, dangerous",
      visual: "fault-grades",
      list: [
        "The report sheet goes to every candidate — pass or fail",
        "Grade 1 minor: neither serious nor dangerous",
        "One serious fault: a fail",
        "One dangerous fault: a fail",
      ],
      concept: "markings",
      src: P(68, "An explanation of the testers markings"),
    },
    {
      icon: "🎓",
      kicker: "The pass certificate",
      title: "Valid for two years",
      visual: "pass-cert",
      list: [
        "Date passed, driver number, vehicle category, disability notes",
        "Send it with the full licence application to the licensing authority",
        "Keep a copy of anything you post",
        "No credit for unexpired time on the permit",
      ],
      concept: "certificate",
      src: P(68, "Pass certificate; p.69 N.B."),
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
    { id: "r1", type: "flash", concept: "application",
      front: "What comes back soon after applying for a test?",
      back: "An acknowledgement that the application and fee arrived, with a reference number.", src: P(68, "The driving instructor") },
    { id: "r2", type: "truefalse", concept: "appointment", visual: "appointment-letter",
      statement: "A short-notice test appointment has no cancellation date.", answer: true,
      explain: "There isn't time to give one.", src: P(68, "Driving test appointments") },
    { id: "r3", type: "fill", concept: "markings", visual: "fault-grades",
      before: "One serious or one", after: "fault means a fail.",
      options: ["dangerous", "minor", "grade 1", "observation"], answer: "dangerous",
      explain: "Grade 1 minor faults are neither serious nor dangerous.", src: P(68, "An explanation of the testers markings") },
    { id: "r4", type: "fill", concept: "certificate", visual: "pass-cert",
      before: "The certificate of competence is valid for", after: "only.",
      options: ["two years", "one year", "six months", "ten years"], answer: "two years",
      explain: "Apply for the full licence within that time.", src: P(68, "Pass certificate") },
    { id: "r5", type: "truefalse", concept: "certificate",
      statement: "Unexpired time on the learner permit is credited to the full licence.", answer: false,
      explain: "There's no monetary or time credit.", src: P(69, "N.B.") },
    { id: "r6", type: "truefalse", concept: "conditions", visual: "test-conditions",
      statement: "An LGV for the test may be partly loaded.", answer: false,
      explain: "It must not be loaded or partly loaded.", src: P(68, "The appointment form advises") },
    { id: "r7", type: "flash", concept: "markings",
      front: "Who gets the driving test report?",
      back: "Every candidate — pass or fail.", src: P(68, "Driving test report") },
    { id: "r8", type: "fill", concept: "appointment",
      before: "The reference number on the appointment is the candidate's", after: "number.",
      options: ["test", "driver", "PPS", "permit"], answer: "test",
      explain: "Quote it in any call or letter.", src: P(68, "Driving test appointments") },
  ],
};

/* ---------------------------------------------------------------------------
   3. MARK THE FAULT — recognition.
   --------------------------------------------------------------------------- */
const markings = {
  id: "markings",
  kind: "items",
  mode: "matching",
  title: "Mark the Fault",
  blurb: "Spot it, sort it — forms and fault headings",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "markings",
      prompt: "Which picture shows how faults are graded?",
      options: ["fault-grades", "pass-cert", "appointment-letter"], answer: 0,
      names: ["Fault grades", "Pass certificate", "Appointment"],
      explain: "Minor, serious, dangerous.", src: P(68, "An explanation of the testers markings") },
    { id: "k2", type: "picture", label: "Spot it", concept: "certificate",
      prompt: "Which picture shows what you get when you pass?",
      options: ["appointment-letter", "pass-cert"], answer: 1,
      names: ["Appointment", "Pass certificate"],
      explain: "Valid for two years only.", src: P(68, "Pass certificate") },
    {
      id: "k3", type: "sort", concept: "markings",
      prompt: "Which heading would the tester use?",
      categories: [
        { id: "obs", label: "Observation" },
        { id: "control", label: "Control" },
        { id: "signs", label: "Signs and signals" },
      ],
      cards: [
        { text: "Steering wheel slips back through the hands", cat: "control" },
        { text: "Another driver swerves during the reverse", cat: "obs" },
        { text: "Doesn't stop at a stop sign", cat: "signs" },
      ],
      explain: "Control – steering; Reverse – observation; Response to signs – traffic signs.", src: P(71, "Retention Q13, Q16, Q19 (answers p.94)") },
    {
      id: "k4", type: "sort", concept: "markings",
      prompt: "Fail or not?",
      categories: [
        { id: "fail", label: "Fail" },
        { id: "notfail", label: "Not on its own" },
      ],
      cards: [
        { text: "One dangerous fault", cat: "fail" },
        { text: "One serious fault", cat: "fail" },
        { text: "A few grade 1 minor faults", cat: "notfail" },
      ],
      explain: "Minor faults are neither serious nor dangerous.", src: P(68, "An explanation of the testers markings") },
    { id: "k5", type: "picture", label: "Spot it", concept: "conditions",
      prompt: "Which picture shows what the candidate must bring and do?",
      options: ["test-conditions", "fault-grades"], answer: 0,
      names: ["Test conditions", "Fault grades"],
      explain: "On time, valid permit, a legal roadworthy car with L-plates.", src: P(68, "The appointment form advises") },
    {
      id: "k6", type: "sort", concept: "markings",
      prompt: "Which heading?",
      categories: [
        { id: "pos", label: "Positioning" },
        { id: "mirrors", label: "Mirrors" },
        { id: "follow", label: "Following distance" },
      ],
      cards: [
        { text: "Unsure of lane on a multi-lane road", cat: "pos" },
        { text: "Brakes without checking behind", cat: "mirrors" },
        { text: "Tailgates the car in front", cat: "follow" },
      ],
      explain: "Positioning – lane discipline; use of mirrors before changing speed; safe following distance.", src: P(71, "Retention Q18, Q20, Q21 (answers p.94)") },
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
  blurb: "Forms and what they're for",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "appointment",
      prompt: "Match the item to what it's for.",
      pairs: [
        ["Acknowledgement", "Application and fee received"],
        ["Reference number", "Quote it in any query"],
        ["Cancel-by date", "Postpone without losing the fee"],
        ["Driving test report", "Given to every candidate"],
        ["Certificate of competence", "Proof of the pass, 2 years"],
      ],
      explain: "The paperwork around the test.", src: P(68, "Driving test forms") },
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
  blurb: "From application to licence",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "certificate",
      prompt: "Application to full licence — in order.",
      steps: ["Apply for the test", "Receive the acknowledgement and reference", "Receive the appointment", "Pass the test", "Send the licence application with the certificate"],
      explain: "Within two years of passing.", src: P(68, "Driving test forms") },
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
  blurb: "Pupils' questions about the paperwork",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "appointment",
      scene: "📞 Your pupil wants to move their test because of a family wedding.",
      prompt: "What do you advise?",
      options: ["Just don't turn up", "Contact the RSA before the cancel-by date on the appointment", "Ask the tester on the day", "Phone after the date"], answer: 1,
      explain: "Then the fee isn't lost; they can ask for a re-appointment.", src: P(68, "Driving test appointments") },
    { id: "s2", type: "choice", label: "Scenario", concept: "appointment",
      scene: "📬 Four weeks after applying, your pupil has heard nothing.",
      prompt: "What should they do?",
      options: ["Assume the fee is lost", "Contact RSA testing services", "Complain to the Department of Transport", "Wait for an extended test"], answer: 1,
      explain: "An acknowledgement usually arrives within a short period.", src: P(70, "Retention Q7 (answer b, p.94)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "markings", visual: "fault-grades",
      scene: "📄 Your pupil passed but got a report sheet with four minor faults and is upset.",
      prompt: "What do you tell them?",
      options: ["The pass may be withdrawn", "Minor faults don't fail; the report helps them see what to improve", "Ask for a retest", "Complain"], answer: 1,
      explain: "Only a serious or dangerous fault fails.", src: P(68, "An explanation of the testers markings") },
    { id: "s4", type: "choice", label: "Scenario", concept: "certificate", visual: "pass-cert",
      scene: "🗓️ A former pupil passed 20 months ago and still hasn't applied for a full licence.",
      prompt: "What do you advise?",
      options: ["No rush", "Apply soon — the certificate is valid for two years only", "Retake the test first", "Their permit covers it"], answer: 1,
      explain: "Send it with the application form to the licensing authority.", src: P(68, "Pass certificate") },
    { id: "s5", type: "choice", label: "Scenario", concept: "conditions",
      scene: "🚛 A pupil sitting an LGV test plans to bring the van with a half-load on board.",
      prompt: "What do you tell them?",
      options: ["Fine if secured", "It must not be loaded or partly loaded", "Fully loaded is better", "Ask the tester"], answer: 1,
      explain: "As stated on the appointment form.", src: P(68, "The appointment form advises") },
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
  blurb: "A pupil books their test",
  xpPer: 10,
  situation: "💻 Your pupil, Aoife, books her car test online.",
  items: [
    { id: "w1", type: "choice", step: "Booking", concept: "application", prompt: "Booking online with her mum's credit card, it's essential that…",
      options: ["The card holder completes the details", "Aoife's own card is used", "A handwritten confirmation is posted", "A separate email is sent"], answer: 0,
      explain: "The card holder must complete the payment details.", src: P(70, "Retention Q10 (answer a, p.94)") },
    { id: "w2", type: "choice", step: "A query", concept: "appointment", visual: "appointment-letter", prompt: "She has a question about the appointment. She should…",
      options: ["Phone the RSA booking office, quoting her reference", "Phone the Department of the Environment", "Ask the senior examiner on the day", "Phone the test centre"], answer: 0,
      explain: "The number is on the appointment.", src: P(71, "Retention Q17 (answer a, p.94)") },
    { id: "w3", type: "choice", step: "A move", concept: "appointment", prompt: "She moves house before the test. She should…",
      options: ["Bring proof of her old address", "Tell the RSA with her reference number as soon as possible", "Do nothing", "Bring proof of the new address"], answer: 1,
      explain: "Keep the RSA up to date.", src: P(70, "Retention Q2 (answer b, p.94)") },
    { id: "w4", type: "choice", step: "Passed!", concept: "certificate", visual: "pass-cert", prompt: "She passes. The tester gives her…",
      options: ["A full licence", "A certificate of competence and a full licence application form", "A secondary permit form", "A letter about another theory test"], answer: 1,
      explain: "She sends both to the licensing authority.", src: P(72, "Retention Q28 (answer b, p.94)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 94. Q4, Q6, Q9, Q15, Q22 and Q30
   are omitted (see header).
   --------------------------------------------------------------------------- */
const page = (n) => (n <= 12 ? 70 : n <= 24 ? 71 : 72);
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
    R(1, "Someone cancelling a test appointment with ample notice may", ["only ask for a new appointment", "ask for a re-appointment", "only get a refund for a different centre", "only get a refund for medical reasons"], 1, "appointment"),
    R(2, "A candidate with a test booked who changes address should first", ["bring proof of the old address", "inform the RSA with their reference number as soon as possible", "do nothing", "bring proof of the new address"], 1, "appointment"),
    R(3, "The learner driver theory test has", ["40 multiple-choice questions", "60 multiple-choice questions", "70 multiple-response questions", "35 multiple-response questions"], 0, "application"),
    R(5, "Applying for an 'L' test by post, the form and fee go to", ["RSA offices, Co. Donegal", "RSA offices, Ballina, Co. Mayo", "RSA offices, Co. Wexford", "RSA offices, Co. Cork"], 1, "application"),
    R(7, "Four weeks after applying, with no acknowledgement or appointment", ["the fee is lost", "contact RSA testing services", "complain to the Department of Transport", "expect an extended test"], 1, "appointment"),
    R(8, "A candidate should only request a short-notice test if they", ["want to jump the queue", "can take a test with less than a week's notice", "have just passed the theory test", "can afford an extra fee"], 1, "appointment"),
    R(10, "Paying online by credit card, it's essential that", ["the card holder completes the details", "the candidate's own card is used", "a handwritten confirmation is sent", "a separate email confirmation is sent"], 0, "application"),
    R(11, "Driving test applications may be made", ["through post offices", "by post or online through the RSA website", "through driving schools", "through the Department of Transport"], 1, "application"),
    R(12, "The theory test is booked by people", ["after they learn to drive", "before they learn to drive", "just before the practical test", "after they pass the driving test"], 1, "application"),
    R(13, "Letting the steering wheel slip back dangerously after a turn is marked as", ["control – steering", "junctions – cutting corners", "positioning – lane discipline", "junctions – approach speed"], 0, "markings"),
    R(14, "Failing for not moving away safely most likely means", ["stalling on a hill start", "an observation fault", "signalling with no one to benefit", "steering too little"], 1, "markings"),
    R(16, "Causing another driver to swerve during the reverse is marked as", ["reverse – speed", "reverse – accuracy", "reverse – observation", "reverse – control"], 2, "markings"),
    R(17, "A candidate with a query about their appointment should", ["phone the RSA booking office", "phone the Department of the Environment", "ask the senior examiner on the day", "phone the test centre"], 0, "appointment", "appointment-letter"),
    R(18, "Braking without first checking following traffic is marked as", ["position – normal driving", "control – footbrake", "use of mirrors well before changing speed", "following distance"], 2, "markings"),
    R(19, "Failing to stop at a stop sign is marked as", ["lack of control of vision", "response to signs and signals – traffic signs", "control – footbrake", "control – handbrake"], 1, "markings"),
    R(20, "Uncertain positioning on a multi-lane carriageway may fail for", ["positioning – normal driving", "positioning – lane discipline", "response to signs – traffic signs", "control – steering"], 1, "markings"),
    R(21, "A blatant lack of awareness of safe separation distances could fail for", ["not using speed with care", "not giving stationary vehicles clearance", "not following at a safe distance", "not keeping an appropriate speed"], 2, "markings"),
    R(23, "Candidates who make 4 minor faults", ["will not fail", "may fail unless they apologise", "make the tester nervous", "fail and must re-sit the theory test"], 0, "markings", "fault-grades"),
    R(24, "A supervising tester may accompany a test to supervise a tester", ["only after notifying the candidate by post", "occasionally", "only with the instructor's permission", "only after notifying the instructor by post"], 1, "markings"),
    R(25, "A dangerous fault on test is marked as", ["a secondary serious fault if no one was hurt", "a minor fault if no one was around", "a disqualifying fault", "ignored if no one was hurt"], 2, "markings", "fault-grades"),
    R(26, "Being too wide while waiting to turn left, causing inconvenience, is marked as", ["junctions – observation", "position for normal stops", "junctions – turning left", "positioning – normal driving"], 2, "markings"),
    R(27, "The driving test report, given to all candidates, is to", ["help identify weaknesses in their driving", "show how close to perfect they were", "stop new drivers being over-confident", "highlight the ADI's errors"], 0, "markings"),
    R(28, "Successful candidates are given", ["a full licence", "a certificate of competence and a full licence application form", "a certificate and a second permit form", "a certificate and a letter about a theory test"], 1, "certificate", "pass-cert"),
    R(29, "Failed candidates are given", ["a reprimand for wasting time", "a certificate of refusal of competence, a test report and a re-application form", "a disabled-test application", "an extended-test application"], 1, "markings"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "appointment",
      prompt: "The appointment shows…", options: ["Only the date", "Date, time, centre, type of test and a cancel-by date", "The tester's name", "The pass mark"], answer: 1,
      explain: "Plus contact details and sometimes where to park.", src: P(68, "Driving test appointments") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "appointment",
      prompt: "Which picture shows where to find the reference number?", options: ["appointment-letter", "fault-grades", "test-conditions"], answer: 0,
      names: ["Appointment", "Fault grades", "Test conditions"],
      explain: "It's the candidate's test number.", src: P(68, "Driving test appointments") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "markings",
      statement: "Grade 1 faults are neither serious nor dangerous.", answer: true,
      explain: "They don't fail the test on their own.", src: P(68, "An explanation of the testers markings") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "conditions",
      scene: "⏰ A pupil arrives 15 minutes late for the test.",
      prompt: "What's likely?", options: ["A shorter test", "The test may not take place", "A later slot the same day", "A refund"], answer: 1,
      explain: "Testers work to a tight schedule.", src: P(68, "The appointment form advises") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "markings",
      prompt: "Match the fault grade.", pairs: [["Grade 1", "Neither serious nor dangerous"], ["One serious fault", "Fail"], ["One dangerous fault", "Also a fail"]],
      explain: "Serious and dangerous faults have their own columns.", src: P(68, "An explanation of the testers markings") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "certificate",
      prompt: "After passing:", steps: ["Receive the certificate", "Fill in the licence application", "Send both to the licensing authority"],
      explain: "Keep copies of anything posted.", src: P(68, "Pass certificate") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "appointment",
      scene: "🌫️ Thick fog on the morning of a pupil's test.",
      prompt: "What should they do?", options: ["Stay home", "Check the RSA website or phone the number on the appointment form", "Phone the AA", "Drive there regardless"], answer: 1,
      explain: "They'll be told if the test goes ahead or is re-arranged.", src: P(68, "Driving test appointments") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "markings",
      prompt: "The driving test report is to…", options: ["Help identify weaknesses", "Show how close to perfect", "Stop over-confidence", "Mark the ADI"], answer: 0,
      explain: "Given to all candidates.", src: P(72, "Retention Q27 (answer a, p.94)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "markings",
      prompt: "A pupil asks why one mistake failed them. Which picture explains it?", options: ["fault-grades", "pass-cert"], answer: 0,
      names: ["Fault grades", "Pass certificate"],
      explain: "One serious or dangerous fault is a fail.", src: P(68, "An explanation of the testers markings") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "markings",
      prompt: "Causing another driver to swerve during the reverse is marked as…", options: ["Reverse – speed", "Reverse – accuracy", "Reverse – observation", "Reverse – control"], answer: 2,
      explain: "Look all round throughout.", src: P(71, "Retention Q16 (answer c, p.94)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "3.8",
  number: "3.8",
  title: "Driving Test Forms",
  pages: [68, 72],
  intro: "Applications, the appointment and its conditions, the tester's markings and the pass certificate.",
  objectives: [
    "Advice for clients taking a driving test",
    "The learner driving test procedures",
    "Driving test markings",
  ],
  objectivesSrc: P(68, "Objectives"),
  mcqLink: { sectionId: "adi.sec.procedure", label: "Driving Test Procedure & Documentation" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...markings, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "fault-finder", icon: "✏️", label: "Fault Finder", rule: { activity: "markings", min: 100 } },
    { id: "test-forms-specialist", icon: "🏆", label: "Test Forms Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
