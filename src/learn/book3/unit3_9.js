/*
  ===========================================================================
  BOOK 3 · UNIT 3.9 — TEACHING DRIVERS WITH DISABILITIES

  Source: "Theory Resource Workbook 3 of 4" (Driver Education Supplies),
  book pages 73–82: text pp.73–77, post test p.78 (model answers p.91),
  retention test pp.79–82 (answers p.94, 40 questions).

  Omitted retention questions (answer key unsafe):
  - Q8 (a disabled person who wants to drive "must take and pass the RSA
    test", keyed d): taking tuition from a qualified instructor is also
    required now (EDT), so b is defensible too.
  - Q39 (loss of the right hand → "a steering ball with an attachment for an
    artificial right hand", keyed b): the unit gives a steering ball for
    loss of a limb, so a (steering ball for the left hand) is also
    defensible.

  Not used: post-test model answer 3 (it answers a different question than
  "what is tunnel vision"), and the text's line that all e-scooter riders
  over 16 must wear a helmet (not something we can confirm — see rsa.ie).

  Tax schemes, e-scooter and e-moped rules change — see revenue.ie and
  rsa.ie.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 3, unit: "3.9", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "attitude": {
    title: "The right attitude",
    text: "Few physical disabilities stop someone learning to drive. Be sensitive to their needs and the teaching is no different: the same techniques, perhaps with your style, timing and vehicle adapted. Never tell anyone they can't learn to drive without first referring them to a specialist assessment centre. Disability takes many forms — permanent or temporary, visible or not. Put the emphasis on what the driver can do, not what they can't.",
    src: P(73, "Introduction; Summaries; Let's talk about disability; p.91 Q15"),
  },
  "pupils": {
    title: "Disabled pupils",
    text: "Usually highly motivated, but they should be reassured about the test: extra time can be allotted so the tester can allow for any difficulties. After passing, they're restricted to a vehicle with the same or similar adaptations as the test vehicle (shown as licence codes). If a disability causes tiredness, arrange lessons for their best time of day and build stamina by lengthening lessons as ability grows.",
    src: P(73, "Disabled pupils; p.91 Q5"),
  },
  "mobility": {
    title: "Wheelchairs and mobility scooters",
    text: "Manual and powered wheelchairs and powered mobility scooters have an upper speed limit and are designed for footpaths; faster ones can also use the road. On the footpath give pedestrians priority — especially people with hearing or sight loss — slow down, and use dropped kerbs even if it means going further. On the road travel with the traffic, wear hi-vis, use lights at night, don't cause an obstruction, and never use motorways.",
    src: P(73, "Options; On the footpath; p.74 Powered wheelchairs; On the road"),
  },
  "escooter": {
    title: "E-scooters",
    text: "From May 2024: riders must be 16 or over; the scooter needs a CE mark and a declaration of conformity, max 25 kg and 20 km/h. Ride on the left; cycle and bus lanes are allowed. It needs lights, a bell, reflectors and brakes. Obey Gardaí and school wardens and the cyclists' rules. Not allowed: footpaths, pedestrianised areas, motorways, phones, seats, passengers or goods, public transport. No licence, registration, tax or insurance needed; under-16s' scooters can be confiscated.",
    src: P(74, "E-scooters; Key rules; p.77"),
  },
  "emoped": {
    title: "E-bikes and e-mopeds",
    text: "An e-bike is pedal-assisted (the motor stops when you stop pedalling), max 250 W and 25 km/h, with lights; it's treated as a bicycle. An e-moped is a mechanically propelled vehicle: register it with Revenue and pay motor tax. L1e-A (pedal-assisted, up to 25 km/h, up to 1,000 W): €35 tax, a Certificate of Conformity, no licence or insurance, may use cycle and bus lanes. L1e-B (pedal or throttle): a licence is needed, insurance for throttle-assisted, not in cycle or bus lanes. No e-moped on footpaths.",
    src: P(77, "What is an e-bike; What is an e-moped"),
  },
  "hearing": {
    title: "Hearing and speech",
    text: "Partial hearing loss is no real disadvantage: hearing aids, speaking up, and keeping noise down (windows closed, fans low). Total hearing loss: agree a means of communication first — hand signals for basic requests and directions, written explanations at the roadside — and use flashcards, diagrams, route cards and demonstrations more. Deaf pupils feel the vehicle's vibrations, which helps with gear changes. There's no legal restriction on deaf drivers. Speech impediments: write responses, use gestures and expressions.",
    src: P(74, "Hearing and speaking disabilities; p.75; p.91 Q2"),
  },
  "language": {
    title: "Language difficulties",
    text: "Not generally a problem: an interpreter can be used for lessons and the test — but never the candidate's driving instructor. The book's understanding is that the interpreter attends the question session before the test, not the practical drive; check with driver testing as this may change.",
    src: P(75, "Language difficulties"),
  },
  "vision": {
    title: "Visual impairments",
    text: "Every permit or licence applicant submits an eyesight report from an optician or doctor on the prescribed form. Loss of sight in one eye can impair distance judgement (especially if recent) and peripheral vision on that side — the pupil needs more head movement and mirror use, and the instructor can't rely on pointing, particularly if the left eye is affected. Tunnel vision means much less peripheral vision. Mild cases are overcome with head movements and mirrors; severe cases may be refused a licence. Judging distance needs both eyes working together.",
    src: P(75, "Visual impairments; p.91 Q4"),
  },
  "physical": {
    title: "Physical disabilities",
    text: "Secured cushions, footrests or pedal extensions for short stature or legs. Light or power steering for weak arms or legs. Extra mirrors for restricted head and torso movement. Steering balls and lever controls for loss of a limb or its use. Automatics suit limb disabilities. Left leg → automatic; right leg → hand accelerator/brake plus steering ball, or a left-foot accelerator in an automatic; both legs → full hand controls in an automatic plus steering ball; arms → automatic, repositioned controls, steering ball or foot steering; artificial limbs → special attachments.",
    src: P(75, "Physical disabilities; Disability and possible solutions"),
  },
  "support": {
    title: "Schemes, licensing and assessment",
    text: "Revenue's Disabled Drivers and Passengers Scheme gives tax reliefs (VRT, VAT, road tax, fuel) on vehicles; it needs a Primary Medical Certificate from a medical examiner (not a GP), and adaptations must be done before registration. A learner permit needs age 17+, a theory test, and — with a disability — a medical report, via the NDLS. Assessment organisations (e.g. the Disabled Drivers Association and the Irish Wheelchair Association) check that someone can drive before they commit to lessons and equipment; specialist firms fit adaptations.",
    src: P(75, "VRT exemptions; p.76 To qualify; Driving licensing; Driving assessments"),
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
    "Never say 'you can't learn' — refer for assessment first",
    "Teach what they CAN do",
    "The test is a normal test, with extra time if needed",
  ],
  cards: [
    {
      icon: "🤝",
      kicker: "Attitude",
      title: "Never 'you can't'",
      ask: {
        prompt: "A disabled person asks about lessons. What should you never say?",
        options: ["Let's arrange an assessment", "You could never learn to drive", "Let's talk about adaptations"],
        answer: 1,
      },
      list: [
        "Few physical disabilities stop someone learning",
        "Same techniques — adapt your style, timing and vehicle",
        "Refer to a specialist assessment centre before any 'no'",
        "Emphasise what they can do",
      ],
      concept: "attitude",
      src: P(73, "Summaries; p.91 Q1, Q15"),
    },
    {
      icon: "💪",
      kicker: "Disabled pupils",
      title: "Motivated — and reassured",
      list: [
        "Extra test time can be allotted for difficulties",
        "After passing: a vehicle with the same or similar adaptations",
        "Tire quickly? Lessons at their best time of day",
        "Build stamina by lengthening lessons gradually",
      ],
      concept: "pupils",
      src: P(73, "Disabled pupils; p.91 Q5"),
    },
    {
      icon: "🦾",
      kicker: "Physical",
      title: "Simple adaptations first",
      visual: "disability-solutions",
      list: [
        "Short stature: cushions, footrests, pedal extensions",
        "Weak arms or legs: light or power steering",
        "Restricted neck or torso: extra mirrors",
        "Loss of a limb: steering ball, lever controls, often an automatic",
      ],
      concept: "physical",
      src: P(75, "Physical disabilities; Disability and possible solutions"),
    },
    {
      icon: "🎛️",
      kicker: "Controls",
      title: "Steering ball and hand controls",
      visual: "hand-controls",
      list: [
        "Steering ball: steer with one hand",
        "Hand controls: accelerate and brake by hand",
        "Left-foot accelerator: moved to the left of the brake, in an automatic",
        "Infrared remote switches for the secondary controls",
      ],
      concept: "physical",
      src: P(75, "Solutions; p.76 Manufacturers; p.91 Q6, Q9"),
    },
    {
      icon: "👁️",
      kicker: "Vision",
      title: "One eye, tunnel vision",
      visual: "one-eye",
      list: [
        "Eyesight report from an optician or doctor for every applicant",
        "One eye: distance judgement and one side's vision affected",
        "More head movement and mirror use; don't rely on pointing",
        "Tunnel vision: little side vision; severe cases may be refused",
      ],
      concept: "vision",
      src: P(75, "Visual impairments"),
    },
    {
      icon: "🧏",
      kicker: "Hearing and speech",
      title: "Agree how you'll communicate",
      visual: "deaf-pupil",
      list: [
        "Partial loss: hearing aids, speak up, keep noise down",
        "Total loss: agreed hand signals; explain in writing when parked",
        "Flashcards, diagrams, route cards, demonstrations",
        "No legal restriction on deaf drivers",
      ],
      concept: "hearing",
      src: P(74, "Hearing and speaking disabilities; p.75; p.91 Q2"),
    },
    {
      icon: "🗣️",
      kicker: "Language",
      title: "Interpreters",
      list: [
        "An interpreter can be used for lessons and the test",
        "Never the candidate's own driving instructor",
        "Check the current test rules with driver testing",
      ],
      concept: "language",
      src: P(75, "Language difficulties"),
    },
    {
      icon: "🦼",
      kicker: "Mobility vehicles",
      title: "Footpath first, pedestrians first",
      visual: "mobility-scooter",
      list: [
        "Use the footpath where available; pedestrians have priority",
        "Quiet motors — slow down; use dropped kerbs",
        "On the road: with the traffic, hi-vis, lights at night",
        "Never on motorways",
      ],
      concept: "mobility",
      src: P(73, "On the footpath; p.74"),
    },
    {
      icon: "🛴",
      kicker: "E-scooters, e-bikes, e-mopeds",
      title: "Know the differences",
      visual: "e-mobility",
      list: [
        "E-scooter: 16+, max 20 km/h, no footpaths, no passengers",
        "E-bike: pedal-assisted, 250 W, 25 km/h — treated as a bicycle",
        "E-moped: register with Revenue and pay motor tax",
        "L1e-B e-mopeds need a licence and keep out of cycle and bus lanes",
      ],
      concept: "emoped",
      src: P(74, "E-scooters; p.77"),
    },
    {
      icon: "🏛️",
      kicker: "Support",
      title: "Schemes and assessments",
      list: [
        "Revenue scheme: VRT, VAT, road tax and fuel reliefs",
        "Needs a Primary Medical Certificate — not from a GP",
        "Permit at 17+, theory test, medical report via the NDLS",
        "Assessment centres check ability before costly lessons and equipment",
      ],
      concept: "support",
      src: P(75, "VRT exemptions; p.76"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   2. QUICK RECALL — includes post-test questions with the model answers
   from page 91.
   --------------------------------------------------------------------------- */
const recall = {
  id: "recall",
  kind: "items",
  mode: "recall",
  title: "Quick Recall",
  blurb: "Flash cards, true or false, fill the gap",
  xpPer: 10,
  items: [
    { id: "r1", type: "flash", concept: "attitude",
      front: "What should an ADI never say to a disabled person asking about lessons?",
      back: "That they could never learn to drive.", src: P(91, "Post test Q1 model answer") },
    { id: "r2", type: "flash", concept: "hearing",
      front: "Are there any legal restrictions on deaf drivers?",
      back: "No — hearing doesn't affect control of the car.", src: P(91, "Post test Q2 model answer") },
    { id: "r3", type: "flash", concept: "vision",
      front: "What's needed to judge distance accurately?",
      back: "Both eyes working together, and a reasonable sense of speed, distance and stopping distances.", src: P(91, "Post test Q4 model answer") },
    { id: "r4", type: "flash", concept: "physical", visual: "hand-controls",
      front: "What is a left-foot accelerator?",
      back: "An accelerator moved to the left of the brake pedal in an automatic car.", src: P(91, "Post test Q9 model answer") },
    { id: "r5", type: "fill", concept: "physical", visual: "disability-solutions",
      before: "The most common aid for a driver with a limb disability is", after: ".",
      options: ["automatic transmission", "a steering ball", "extra mirrors", "a cushion"], answer: "automatic transmission",
      explain: "It often needs only minor further adaptations.", src: P(91, "Post test Q7 model answer") },
    { id: "r6", type: "truefalse", concept: "physical",
      statement: "An accelerator pedal can be vacuum-assisted.", answer: true,
      explain: "Listed among the solutions.", src: P(91, "Post test Q10 model answer") },
    { id: "r7", type: "flash", concept: "physical",
      front: "How can a person with no arms drive?",
      back: "Using foot controls for steering.", src: P(91, "Post test Q13 model answer") },
    { id: "r8", type: "flash", concept: "physical",
      front: "What's a rotating (swivel) seat for?",
      back: "Easy access and exit for a driver with restricted body movements.", src: P(91, "Post test Q14 model answer") },
    { id: "r9", type: "fill", concept: "escooter", visual: "e-mobility",
      before: "E-scooter riders must be", after: "or over.",
      options: ["16", "14", "17", "18"], answer: "16",
      explain: "Gardaí can confiscate an under-16's e-scooter.", src: P(74, "E-scooters") },
    { id: "r10", type: "flash", concept: "physical",
      front: "What might infrared remote controls be used for?",
      back: "Operating the car's ancillary (secondary) controls.", src: P(91, "Post test Q6 model answer") },
  ],
};

/* ---------------------------------------------------------------------------
   3. FIND THE SOLUTION — recognition.
   --------------------------------------------------------------------------- */
const solutions = {
  id: "solutions",
  kind: "items",
  mode: "matching",
  title: "Find the Solution",
  blurb: "Spot it, sort it — needs and adaptations",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "vision",
      prompt: "Which picture shows tunnel vision?",
      options: ["one-eye", "tunnel-vision", "deaf-pupil"], answer: 1,
      names: ["Sight in one eye", "Tunnel vision", "Deaf pupil"],
      explain: "Peripheral vision is much reduced.", src: P(75, "The more common visual disabilities") },
    { id: "k2", type: "picture", label: "Spot it", concept: "physical",
      prompt: "Which picture helps someone who can only steer with one hand?",
      options: ["hand-controls", "mobility-scooter"], answer: 0,
      names: ["Steering ball", "Mobility scooters"],
      explain: "A steering ball.", src: P(75, "Physical disabilities") },
    {
      id: "k3", type: "sort", concept: "physical",
      prompt: "Best first solution?",
      categories: [
        { id: "auto", label: "Automatic" },
        { id: "mirrors", label: "Extra mirrors" },
        { id: "pedal", label: "Pedal extensions" },
      ],
      cards: [
        { text: "Missing left leg", cat: "auto" },
        { text: "Stiff neck, restricted head movement", cat: "mirrors" },
        { text: "Short legs", cat: "pedal" },
        { text: "Artificial left leg", cat: "auto" },
      ],
      explain: "Simple adaptations solve many needs.", src: P(75, "Physical disabilities; Solutions") },
    { id: "k4", type: "picture", label: "Spot it", concept: "hearing",
      prompt: "Which picture shows how to teach a profoundly deaf pupil?",
      options: ["deaf-pupil", "e-mobility"], answer: 0,
      names: ["Deaf pupil", "E-mobility"],
      explain: "Agree signals; explain when parked.", src: P(74, "Total hearing loss") },
    {
      id: "k5", type: "sort", concept: "escooter",
      prompt: "Allowed on an e-scooter?",
      categories: [
        { id: "yes", label: "Allowed" },
        { id: "no", label: "Not allowed" },
      ],
      cards: [
        { text: "Riding in a bus lane", cat: "yes" },
        { text: "Riding on the footpath", cat: "no" },
        { text: "Carrying a passenger", cat: "no" },
        { text: "Using a phone", cat: "no" },
        { text: "Riding a regional road", cat: "yes" },
      ],
      explain: "Same rules as cyclists, plus no footpaths, seats or passengers.", src: P(74, "Key rules for e-scooters") },
    { id: "k6", type: "picture", label: "Spot it", concept: "mobility",
      prompt: "Which picture shows the rules for mobility scooters?",
      options: ["mobility-scooter", "e-mobility"], answer: 0,
      names: ["Mobility scooters", "E-scooters and e-bikes"],
      explain: "Footpath first, pedestrians first.", src: P(73, "On the footpath") },
    {
      id: "k7", type: "sort", concept: "emoped",
      prompt: "Which is it?",
      categories: [
        { id: "bike", label: "E-bike" },
        { id: "moped", label: "E-moped" },
      ],
      cards: [
        { text: "Treated as a bicycle", cat: "bike" },
        { text: "Register with Revenue, pay motor tax", cat: "moped" },
        { text: "Max 250 W", cat: "bike" },
        { text: "A mechanically propelled vehicle", cat: "moped" },
      ],
      explain: "E-mopeds are MPVs under Irish law.", src: P(77, "What is an e-bike; e-moped") },
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
  blurb: "Disability and solution",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "physical", visual: "disability-solutions",
      prompt: "Match the disability to a solution.",
      pairs: [
        ["Left leg", "Automatic transmission"],
        ["Right leg", "Left-foot accelerator"],
        ["Both legs", "Full hand controls"],
        ["Restricted neck movement", "Extra mirrors"],
        ["Short stature", "Pedal extensions"],
      ],
      explain: "From the unit's table of solutions.", src: P(75, "Disability and possible solutions") },
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
  blurb: "From enquiry to lessons",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "support",
      prompt: "A newly disabled driver wants to drive again — in order.",
      steps: ["Contact an assessment organisation", "Driving assessment", "Choose and adapt a suitable vehicle", "Lessons with an ADI who knows adaptations"],
      explain: "Assessment first — before committing to costly lessons and equipment.", src: P(76, "Driving assessments") },
    { id: "p2", type: "order", concept: "support",
      prompt: "Tax relief on an adapted car — in order.",
      steps: ["Get a Primary Medical Certificate", "Apply for the VRT exemption", "Complete the adaptations", "Register the vehicle"],
      explain: "Adaptations must be done before registration.", src: P(76, "To qualify") },
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
  blurb: "Teaching pupils with disabilities",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "attitude",
      scene: "📞 A caller has no use of their legs and asks if lessons are worth it.",
      prompt: "What's your response?",
      options: ["Probably not", "Refer them for a mobility assessment and explain an adapted car may suit them", "Book 20 lessons in your car", "Tell them to ask a doctor and leave it"], answer: 1,
      explain: "Never say no without a specialist assessment.", src: P(73, "Summaries") },
    { id: "s2", type: "choice", label: "Scenario", concept: "pupils",
      scene: "😴 Your pupil with MS is sharp at 10 am but fades badly by evening.",
      prompt: "What do you do?",
      options: ["Keep the 7 pm slot so they get used to it", "Move lessons to their best time of day and build stamina gradually", "Stop lessons", "Shorten every lesson to 15 minutes"], answer: 1,
      explain: "Lengthen lessons as ability grows.", src: P(91, "Post test Q5 model answer") },
    { id: "s3", type: "choice", label: "Scenario", concept: "hearing", visual: "deaf-pupil",
      scene: "🧏 Your new pupil is profoundly deaf.",
      prompt: "How do you start?",
      options: ["Shout clearly", "Agree a means of communication, explain while parked, use visual aids", "Bring an interpreter for every lesson", "Only teach on quiet roads"], answer: 1,
      explain: "Keep Q&A on the move to simple hand signals.", src: P(74, "Total hearing loss; p.82 Q40") },
    { id: "s4", type: "choice", label: "Scenario", concept: "vision", visual: "one-eye",
      scene: "👁️ Your pupil recently lost the sight of their left eye.",
      prompt: "What do you change?",
      options: ["Nothing", "Encourage more head movement and mirror use; don't rely on pointing", "Only drive at night", "Cover the right eye"], answer: 1,
      explain: "Distance judgement may also be affected while they adjust.", src: P(75, "The more common visual disabilities") },
    { id: "s5", type: "choice", label: "Scenario", concept: "physical",
      scene: "🦵 Your pupil has a stiff right leg and struggles with the footbrake.",
      prompt: "What do you advise?",
      options: ["Practise on quiet roads", "Have an adaptation fitted to suit their ability", "Stop teaching", "Use the dual brake for them"], answer: 1,
      explain: "E.g. hand controls or a left-foot accelerator in an automatic.", src: P(82, "Retention Q32 (answer b, p.94)") },
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
  blurb: "Ciarán's road back to driving",
  xpPer: 10,
  situation: "🏥 Ciarán lost his left leg in an accident and wants to drive again.",
  items: [
    { id: "w1", type: "choice", step: "First call", concept: "attitude", prompt: "He rings you. You…",
      options: ["Say it's unlikely", "Advise he may suit an automatic and suggest an assessment", "Tell him he needs a special test", "Refer him to driver testing"], answer: 1,
      explain: "Left leg → automatic transmission.", src: P(79, "Retention Q6 (answer c, p.94)") },
    { id: "w2", type: "choice", step: "Paperwork", concept: "support", prompt: "For tax relief on a car he needs a Primary Medical Certificate from…",
      options: ["His GP", "A medical examiner at the local Director of Community Care's office", "The NDLS", "The RSA"], answer: 1,
      explain: "Not from a GP.", src: P(76, "To qualify") },
    { id: "w3", type: "choice", step: "Lessons", concept: "pupils", prompt: "He's anxious about the test. You explain…",
      options: ["It's a special harder test", "It's a normal test; extra time can be allotted", "There are more manoeuvres", "He'll skip the reverse"], answer: 1,
      explain: "The tester allows time for any difficulties.", src: P(73, "Disabled pupils") },
    { id: "w4", type: "choice", step: "Passed", concept: "pupils", prompt: "He passes in his automatic. His licence…",
      options: ["Is unrestricted", "Is restricted to vehicles with the same or similar adaptations (codes)", "Only lets him drive that car", "Lasts one year"], answer: 1,
      explain: "See the licence codes in Unit 3.5.", src: P(73, "Disabled pupils") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 94. Q8 and Q39 are omitted (see
   header).
   --------------------------------------------------------------------------- */
const page = (n) => (n <= 10 ? 79 : n <= 20 ? 80 : n <= 30 ? 81 : 82);
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
    R(1, "If a disability causes tiredness and poor concentration, you should", ["arrange all lessons early in the day", "arrange lessons at all times of day", "cancel and re-arrange the lesson for the pupil's peak time of ability", "never give evening lessons"], 2, "pupils"),
    R(2, "Never tell a disabled person they couldn't learn to drive", ["without an assessment lesson", "without referring them to an eye specialist", "without assessment and/or referral to a mobility assessment centre", "unless more than two limbs are affected"], 2, "attitude"),
    R(3, "A short right leg makes the foot controls hard to use. A simple adaptation is", ["a hand control for braking and de-clutching", "a steering ball and quick-release footbrake", "automatic transmission", "foot pedal extensions"], 3, "physical"),
    R(4, "A one-armed learner with weak legs struggles with the accelerator. The most suitable adaptation might be", ["a left-footed accelerator", "vacuum assistance for the accelerator", "a hand-operated accelerator", "ABS and a steering ball"], 1, "physical"),
    R(5, "A man with little or no use of his lower limbs asks about lessons. You say", ["see your doctor first", "he'll need a car adapted to his ability", "he might suit an automatic", "he's unlikely to be able to drive"], 1, "physical"),
    R(6, "A healthy man missing his left leg asks about lessons. You advise", ["consult driver testing", "he'd need a specially adapted vehicle", "he may suit an automatic", "he's unlikely to drive"], 2, "physical"),
    R(7, "A pupil's disability affects right-arm movement. On test the tester will", ["make him do all the arm signals", "expect him to know the arm signals and their meaning", "not expect any arm signals", "expect arm signals only in an emergency"], 1, "pupils"),
    R(9, "A driver with an artificial left leg may be best suited to", ["an automatic", "a hand-operated clutch", "a hand-operated accelerator", "dual clutch and brake"], 0, "physical"),
    R(10, "Someone who may need vehicle modifications should seek advice from", ["the Department of Transport licensing section", "RSA driver testing", "a disabled drivers organisation", "any ADI"], 2, "support"),
    R(11, "A disabled driver generally takes", ["a shorter test", "more manoeuvres, less driving", "a normal driving test", "fewer manoeuvres, more driving"], 2, "pupils"),
    R(12, "A man with no arms asks about lessons. You'd tell him", ["he could never learn", "he must learn in an invalid carriage", "he'd need a vehicle adapted to his ability and disability", "he'd need a steering ball and power steering"], 2, "physical"),
    R(13, "A completely deaf person may drive", ["an invalid carriage only", "a specially adapted vehicle only", "any motor vehicle", "only diesel vehicles"], 2, "hearing"),
    R(14, "Someone finds it hard to steer or control a car because of their physical abilities. Advise them", ["to take physiotherapy", "to stop driving", "to consult their doctor", "to have an assessment so adaptations can be suggested"], 3, "support"),
    R(15, "A person with sight in one eye only, needing no glasses, passes a normal test. The tester issues", ["a certificate recording the disability", "a certificate restricting the vehicle type", "a normal certificate of competence", "a certificate restricting night or fog driving"], 2, "vision"),
    R(16, "A disability restricting neck movement may be helped by", ["an electric seat", "always being accompanied", "extra mirrors", "physiotherapy"], 2, "physical"),
    R(17, "For a disabled candidate, the tester will", ["not expect a reverse", "use a quiet route", "adjust the route to the disability", "use a normal test route"], 3, "pupils"),
    R(18, "A disabled driver tested in a manual car with normal indicators would", ["not be expected to give hand signals", "be expected to give hand signals when necessary", "take a special test", "not be allowed to take the test"], 1, "pupils"),
    R(19, "A disabled driver's badge on the windscreen tells others the driver", ["is a motability instructor", "is a disabled person", "is entitled to free parking", "may be entitled to parking concessions"], 3, "mobility"),
    R(20, "Automatics help drivers with physical disabilities because", ["the selector is large and easy", "there's no work for the hands", "there's less work for the feet and hands", "less for the feet, more for the hands"], 2, "physical"),
    R(21, "Compared with good vision, a person with tunnel vision has", ["a narrower field of vision directly ahead", "more trouble focusing ahead", "better night sight", "better peripheral vision"], 0, "vision", "tunnel-vision"),
    R(22, "A disabled person on disability benefits can get a learner permit at", ["21", "18", "16", "17"], 3, "support"),
    R(23, "A disabled learner in a manual car with standard controls should apply the handbrake", ["whenever necessary", "only on a gradient", "unless the disability prevents it", "instead of the footbrake"], 0, "pupils"),
    R(24, "A disabled candidate for the driving test takes", ["a normal driving test", "a special extended test", "a simulation test", "an extended test"], 0, "pupils"),
    R(25, "When teaching a profoundly deaf pupil, you should", ["learn sign language or hire an interpreter", "do that and give a route map", "agree some signs first, explain facing the pupil when stopped, and use a visual teaching aid", "give all instructions before each lesson"], 2, "hearing", "deaf-pupil"),
    R(26, "A pupil with no use of the left arm should be advised", ["he needs to know the meaning and use of arm signals", "to give arm signals whenever necessary", "he needn't learn arm signals", "to learn only right-arm signals"], 0, "pupils"),
    R(27, "A pupil with one hand asks for advice. You say", ["hold the wheel with the flat of the hand", "a steering ball would be most helpful", "replace the wheel with foot pedals", "a manual is impossible"], 1, "physical"),
    R(28, "A driver with one eye but otherwise good vision may", ["drive without additional restriction", "drive only with restrictions", "drive only in good visibility", "drive only an adapted vehicle"], 0, "vision"),
    R(29, "A disabled learner with no movement from the hips down may drive directly from", ["a wheelchair", "their home", "outside busy times", "hills"], 0, "physical"),
    R(30, "A disabled driver finds a semi-automatic easier, probably because there's no", ["gear lever", "clutch pedal", "pre-selector", "accelerator"], 1, "physical"),
    R(31, "Difficulty reaching the secondary controls is best helped by", ["arm extensions", "remote secondary control switches", "extra foot controls", "a passenger"], 1, "physical"),
    R(32, "A pupil with a stiff right leg struggles with the footbrake. The instructor should", ["practise on a quiet road", "have an adaptation fitted to suit the pupil", "stop teaching", "help with the dual brake"], 1, "physical"),
    R(33, "A test in a specially adapted vehicle will be", ["on quiet roads", "outside peak times", "the same as any driving test", "extended to include all manoeuvres"], 2, "pupils"),
    R(34, "A driver who has lost both legs", ["may take a test, telling the RSA the type of disability", "can't drive", "must take a longer test", "needn't take a test"], 0, "support"),
    R(35, "A disabled pupil, who has told the RSA about their disability, worries the tester won't make allowances. You say", ["the tester will understand, know the controls and communicate well", "work harder to pass", "the tester will learn as they go", "you're unlikely to pass first time"], 0, "pupils"),
    R(36, "With a total disability in the right leg and an automatic, the first adaptation to consider is", ["a pre-selector lever", "left-side mirrors", "a hand accelerator or left-foot accelerator", "a hand brake control"], 2, "physical"),
    R(37, "Someone whose distance judgement is impaired with both eyes open should", ["cover the right eye", "seek professional advice", "alternate eyes", "drive closer than normal"], 1, "vision"),
    R(38, "A disability restricting body movement may be overcome simply by", ["shorter pedals", "an unpadded seat", "a specially adapted padded seat", "the seat close to the wheel"], 2, "physical"),
    R(40, "Teaching a deaf pupil on the move, be aware that", ["road noise interferes with learning", "an open window gives a sense of speed", "they'll write answers at the lights", "Q&A on the move should be limited to simple hand signals"], 3, "hearing"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "attitude",
      prompt: "When teaching a disabled driver, emphasise…", options: ["What they can't do", "What they can do", "The test faults", "The risks"], answer: 1,
      explain: "Not continually stating what they won't be able to do.", src: P(91, "Post test Q15 model answer") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "physical",
      prompt: "Which picture shows solutions matched to disabilities?", options: ["disability-solutions", "e-mobility", "deaf-pupil"], answer: 0,
      names: ["Solutions", "E-mobility", "Deaf pupil"],
      explain: "From left leg to artificial limbs.", src: P(75, "Disability and possible solutions") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "language",
      statement: "A candidate's driving instructor may act as their interpreter on test.", answer: false,
      explain: "Any interpreter but the instructor.", src: P(75, "Language difficulties") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "escooter",
      scene: "🛴 A 15-year-old pupil's sibling rides an e-scooter on the footpath.",
      prompt: "What's the law?", options: ["Fine on footpaths", "Under 16 can't ride one and footpaths are banned — Gardaí can confiscate it", "Fine with a helmet", "Fine below 20 km/h"], answer: 1,
      explain: "16 or over, and never on footpaths.", src: P(74, "E-scooters; Key rules") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "physical",
      prompt: "Match the aid.", pairs: [["Steering ball", "Steer with one hand"], ["Swivel seat", "Easier getting in and out"], ["Extra mirrors", "Restricted neck movement"]],
      explain: "Simple adaptations.", src: P(75, "Physical disabilities; p.91 Q14") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "support",
      prompt: "Getting back on the road:", steps: ["Driving assessment", "Adapted vehicle", "Lessons"],
      explain: "Assessment before committing money.", src: P(76, "Driving assessments") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "hearing",
      scene: "🧏 Your deaf pupil needs a detailed explanation of a roundabout.",
      prompt: "When and how?", options: ["Shout it on the approach", "Pull in and explain in writing or with a diagram", "Skip it", "Sign it while driving"], answer: 1,
      explain: "Keep instructions on the move to simple hand signals.", src: P(74, "Total hearing loss") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "vision",
      prompt: "Tunnel vision means…", options: ["A narrower field of vision", "Better night sight", "Better peripheral vision", "Trouble focusing up close"], answer: 0,
      explain: "Peripheral vision is substantially less than normal.", src: P(81, "Retention Q21 (answer a, p.94)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "emoped",
      prompt: "A pupil asks whether their e-moped needs tax. Which picture answers?", options: ["e-mobility", "mobility-scooter"], answer: 0,
      names: ["E-scooters, e-bikes, e-mopeds", "Mobility scooters"],
      explain: "E-mopeds are registered with Revenue and taxed.", src: P(77, "What is an e-moped") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "pupils",
      prompt: "A disabled candidate takes…", options: ["A normal driving test", "A special extended test", "A simulation", "An extended test"], answer: 0,
      explain: "With extra time allotted if needed.", src: P(81, "Retention Q24 (answer a, p.94)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "3.9",
  number: "3.9",
  title: "Teaching Drivers with Disabilities",
  pages: [73, 82],
  intro: "The right attitude, physical, visual and hearing needs, adaptations, mobility vehicles and e-scooters, and the schemes that help.",
  objectives: [
    "Advice for potential clients with a disability",
    "The effects of common disabilities on learning to drive",
    "Simple adaptations to overcome common disabilities",
  ],
  objectivesSrc: P(73, "Objectives"),
  mcqLink: { sectionId: "adi.sec.pedagogy", label: "Teaching Ability – Pedagogy" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...solutions, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "solution-finder", icon: "♿", label: "Solution Finder", rule: { activity: "solutions", min: 100 } },
    { id: "inclusive-instructor", icon: "🏆", label: "Inclusive Instructor", rule: { activity: "scenarios", min: 80 } },
  ],
};
