/*
  ===========================================================================
  BOOK 1 · UNIT 1.1 — DEALING WITH HAZARDS

  Source: "Driving Procedures & Road Safety — Resource Workbook, Book 1"
  (Driver Education Supplies), book pages 25–29, with the post-test model
  answers on page 84 and the retention-test answers on page 88.

  Every concept, card and item carries `src` — the book page it comes from
  and what on that page — so the interactive version can be audited line by
  line against the workbook. Nothing here should say more than the page it
  cites. Where the workbook's wording is used it is kept as close as the
  format allows.

  Retention test Q9 is omitted: its answer key disagrees with the unit
  text, so it is not used.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 1, unit: "1.1", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   The unit's key ideas. Items are tagged with one, so a wrong answer can
   bring back the right short explanation, and weak areas can be named.
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "hazard-def": {
    title: "What a hazard is",
    text: "A hazard is any feature or situation which might cause you to change speed or direction. It is therefore any situation which may present actual or potential danger to you, or any other road user.",
    src: P(25, "Summaries — Hazards"),
  },
  "hazard-types": {
    title: "The four kinds of hazard",
    text: "Permanent: road features such as bends, junctions and gradients. Semi-permanent: road features such as stationary vehicles or road works. Moving: pedestrians, cyclists, drivers and animals. Surface: weather conditions, surface contaminants and road surface type/conditions.",
    src: P(25, "Summaries — Hazards, examples"),
  },
  "manoeuvre-def": {
    title: "What a manoeuvre is",
    text: "A manoeuvre is the act of changing your course or speed.",
    src: P(84, "Post-test model answer 2"),
  },
  "plan": {
    title: "Always have a plan",
    text: "Always be looking for hazards, and remember why: they may turn into emergencies very quickly. You look for hazards to have time to plan a way out of any emergency. When you see a hazard, think about the emergencies that could develop and figure out what you would do.",
    src: P(25, "Always Have a Plan"),
  },
  "defensive": {
    title: "Defensive driving",
    text: "Defensive driving means putting safety above all else, being aware of other road users in your vicinity, anticipating their actions and planning accordingly. It involves more than control of the car: driving with responsibility and consideration for other road users, keeping control of your own feelings and patience towards others on the road.",
    src: P(25, "Defensive Driving"),
  },
  "attitude": {
    title: "Attitude and self-preservation",
    text: "You must not drive in such a way as to give offence to other road users or provoke a hostile response. People are usually motivated more strongly by self-preservation than altruism, so the instructor relies heavily on the learner's self-preservation instinct when developing defensive driving.",
    src: P(25, "Defensive Driving, second paragraph"),
  },
  "teach": {
    title: "What a new driver must be taught",
    text: "To recognise road features where danger most often occurs; to identify the causes of accidents, realising the high proportion caused by driver error; to realise their own limitations and those of their vehicle; to assess their personal risk of being involved in a road accident.",
    src: P(26, "The new driver needs both knowledge and experience…"),
  },
  "mspsl": {
    title: "The Hazard Routine — MSPSL",
    text: "Mirrors–Signal–Position–Speed–Look must be applied in any situation where there is a risk to you or another road user. The basic rule is the MSM (Mirrors–Signal–Manoeuvre) routine; the manoeuvre is broken down into three further stages — Position, Speed and Look. All hazards must be dealt with using this routine.",
    src: P(26, "MSPSL"),
  },
  "mirrors": {
    title: "Mirrors",
    text: "Check the position and speed of following traffic in good time. Take effective observation — just looking is not enough.",
    src: P(26, "MSPSL — Mirrors"),
  },
  "signal": {
    title: "Signal",
    text: "If necessary, to show other road users your intent to change course. Clearly and in good time. Consider warning others of your presence.",
    src: P(26, "MSPSL — Signal"),
  },
  "position": {
    title: "Position",
    text: "If necessary, change course and position to give the best view — in good time, so that others can anticipate your actions.",
    src: P(26, "MSPSL — Position"),
  },
  "speed": {
    title: "Speed",
    text: "If necessary, change speed using acceleration/deceleration or the footbrake. Change gear if appropriate to give the greatest control for the conditions.",
    src: P(26, "MSPSL — Speed"),
  },
  "look": {
    title: "Look",
    text: "Look well ahead and behind. Assess the situation, decide on any action necessary, and act sensibly on what you see.",
    src: P(26, "MSPSL — Look"),
  },
  "repeat": {
    title: "Decide, and repeat as it develops",
    text: "The driver must decide whether signals, repositioning and speed changes are necessary for each hazard, and may need to repeat the routine as the situation develops, or as new hazards arise.",
    src: P(26, "Paragraph after the MSPSL list"),
  },
  "own-safety": {
    title: "Your safety is in your hands",
    text: "The essence of defensive driving is to remember that your safety is in your hands. You cannot rely on other road users to do the right thing!",
    src: P(26, "Side note"),
  },
  "medication": {
    title: "Medication",
    text: "Many medicines, even over-the-counter ones, can make you drowsy, and many that do carry a label warning against operating vehicles or machinery — most commonly cold remedies. In many cases, if you have to drive with a cold, you are better off suffering from the cold than from the effects of the medicine. Always read the label or check with your doctor.",
    src: P(26, "Note: About Medication"),
  },
  "potential": {
    title: "Potential hazards to look for",
    text: "Road furniture such as traffic lights; misplaced road or direction signs; anything obstructing a driver's view; children playing on the street; pedestrians at the kerbside; broken traffic lights; traffic lights that are green from the first time you see them; in or around buses or ice-cream vans.",
    src: P(84, "Post-test model answer 9"),
  },
};

/* ---------------------------------------------------------------------------
   1. LEARN — short cards, some asking before they tell.
   --------------------------------------------------------------------------- */
const learn = {
  id: "learn",
  kind: "learn",
  title: "Learn",
  blurb: "The unit in short cards",
  xp: 20,
  /* Shown on the lesson's finish screen. */
  remember: [
    "A hazard: anything that might make you change speed or direction",
    "Defensive driving puts safety above all else",
    "Deal with every hazard using Mirrors–Signal–Position–Speed–Look",
  ],
  cards: [
    {
      icon: "🚗",
      kicker: "Dealing with hazards",
      title: "The good driver deals with hazards",
      body: [
        "The good driver must be able to recognise, anticipate and deal effectively and safely with road hazards.",
        "As an instructor, it will be your responsibility to ensure that your pupil can recognise actual or potential hazards and knows how to apply the \"Hazard Routine\".",
      ],
      think: ["👀 What can you see?", "🧠 What could develop?", "🚗 What might you need to change — speed or direction?"],
      src: P(25, "Unit 1.1 introduction"),
    },
    {
      icon: "⚠️",
      kicker: "Definition",
      title: "What is a hazard?",
      visual: "hazard-types",
      ask: {
        prompt: "Before you read on — which is the correct definition?",
        options: [
          "Anything shown by a warning sign",
          "Any feature or situation which might cause you to change speed or direction",
          "Another vehicle on the road",
        ],
        answer: 1,
      },
      body: [
        "A hazard is any feature or situation which might cause you to change speed or direction.",
        "A hazard is therefore any situation which may present actual or potential danger to you, or any other road user.",
      ],
      concept: "hazard-def",
      src: P(25, "Summaries — Hazards"),
    },
    {
      icon: "🗂️",
      kicker: "Four kinds",
      title: "Types of hazard",
      tiles: [
        { label: "Permanent", text: "Road features such as bends, junctions and gradients" },
        { label: "Semi-permanent", text: "Road features such as stationary vehicles or road works" },
        { label: "Moving", text: "Pedestrians, cyclists, drivers and animals" },
        { label: "Surface", text: "Weather conditions, surface contaminants and road surface type/conditions" },
      ],
      body: ["Each of these is dealt with in more detail in the later units of this course."],
      concept: "hazard-types",
      src: P(25, "Summaries — Hazards, examples"),
    },
    {
      icon: "🧭",
      kicker: "Always have a plan",
      title: "Why you look for hazards",
      visual: "restricted-view",
      body: [
        "You should always be looking for hazards — and don't forget why: they may turn into emergencies very quickly.",
        "You look for any hazards to have time to plan a way out of any emergency. When you see a hazard, think about the emergencies that could develop and figure out what you would do.",
        "Always be prepared to act based on what you see. Being a defensive driver will improve your own safety as well as the safety of all road users.",
      ],
      concept: "plan",
      src: P(25, "Always Have a Plan"),
    },
    {
      icon: "🛡️",
      kicker: "Defensive driving",
      title: "Safety above all else",
      body: [
        "Defensive driving means putting safety above all else, being aware of other road users in your vicinity, anticipating their actions and planning accordingly.",
        "It involves more than control of the car: driving with responsibility and consideration for other road users, keeping control of your own feelings and patience towards others on the road.",
      ],
      concept: "defensive",
      src: P(25, "Defensive Driving"),
    },
    {
      icon: "🤝",
      kicker: "Attitude",
      title: "Don't provoke — and use self-preservation",
      body: [
        "You must not drive in such a way as to give offence to other road users or provoke a hostile response.",
        "People are usually motivated more strongly by self-preservation than altruism (concern for the safety of others). The instructor must rely heavily on the learner-driver's self-preservation instinct when developing defensive driving.",
      ],
      concept: "attitude",
      src: P(25, "Defensive Driving, second paragraph"),
    },
    {
      icon: "🎓",
      kicker: "Teaching the new driver",
      title: "Knowledge and experience",
      body: ["The new driver needs both knowledge and experience to assess actual and potential hazards, and should be taught:"],
      list: [
        "To recognise road features where danger most often occurs",
        "To identify the causes of accidents, realising the high proportion caused by driver error",
        "To realise their own limitations and those of their vehicle",
        "To assess their personal risk of being involved in a road accident",
      ],
      concept: "teach",
      src: P(26, "The new driver needs both knowledge and experience…"),
    },
    {
      icon: "🔁",
      kicker: "The Hazard Routine",
      title: "MSPSL",
      visual: "mspsl",
      ask: {
        prompt: "The basic rule is MSM — Mirrors, Signal, Manoeuvre. The manoeuvre is broken into three stages. Which?",
        options: ["Look, Assess, Position", "Position, Speed, Look", "Assess, Decide, Act"],
        answer: 1,
      },
      body: [
        "The \"Hazard Routine\", Mirrors–Signal–Position–Speed–Look, must be applied in any situation where there is a risk to you or another road user.",
        "The basic rule is the MSM (Mirrors–Signal–Manoeuvre) routine. A manoeuvre is broken down into three further stages — Position, Speed and Look.",
      ],
      steps: ["Mirrors", "Signal", "Position", "Speed", "Look"],
      concept: "mspsl",
      src: P(26, "MSPSL"),
    },
    {
      icon: "🪞",
      kicker: "MSPSL · M and S",
      title: "Mirrors, then Signal",
      sections: [
        { head: "Mirrors", list: ["Check the position and speed of following traffic in good time", "Take effective observation", "Just looking is not enough"] },
        { head: "Signal", list: ["If necessary, to show other road users your intent to change course", "Clearly and in good time", "Consider warning others of your presence"] },
      ],
      concept: "mirrors",
      src: P(26, "MSPSL — Mirrors, Signal"),
    },
    {
      icon: "🛣️",
      kicker: "MSPSL · P and S",
      title: "Position, then Speed",
      sections: [
        { head: "Position", list: ["If necessary, change course and position to give the best view", "In good time so that others can anticipate your actions"] },
        { head: "Speed", list: ["If necessary, change speed using acceleration/deceleration or the footbrake", "Change gear if appropriate to give greatest control for the conditions"] },
      ],
      concept: "position",
      src: P(26, "MSPSL — Position, Speed"),
    },
    {
      icon: "👁️",
      kicker: "MSPSL · L",
      title: "Look — assess, decide, act",
      visual: "zone-of-vision",
      list: ["Look well ahead and behind", "Assess the situation", "Decide on any action necessary", "Act sensibly on what you see"],
      body: [
        "All hazards must be dealt with using the above routine.",
        "The driver must decide whether signals, repositioning and speed changes are necessary for each hazard, and may need to repeat the routine as the situation develops, or as new hazards arise.",
      ],
      concept: "look",
      src: P(26, "MSPSL — Look, and the paragraph after it"),
    },
    {
      icon: "✋",
      kicker: "Remember",
      title: "Your safety is in your hands",
      callout: "The essence of defensive driving is to remember that your safety is in your hands. You cannot rely on other road users to do the right thing!",
      concept: "own-safety",
      src: P(26, "Side note"),
    },
    {
      icon: "💊",
      kicker: "Note",
      title: "About medication",
      body: [
        "Many medicines, even over-the-counter medicines, can make you drowsy; many that do have a label warning against operating vehicles or machinery. The most common are cold remedies, but they are not the only ones.",
        "In many cases, if you have to drive with a cold, you are better off suffering from the cold than from the effects of the medicine. If you have to take any form of medicine, always read the label or check with your doctor. It's your responsibility — see the Rules of the Road for more on drugs, prescribed or otherwise.",
      ],
      concept: "medication",
      src: P(26, "Note: About Medication"),
    },
    {
      icon: "🔎",
      kicker: "Examples",
      title: "Hazards worth naming",
      sections: [
        { head: "Potential hazards", list: ["Road furniture such as traffic lights", "Misplaced road or direction signs", "An obstruction to a driver's view", "Children playing on the street", "Pedestrians at the kerbside", "Broken traffic lights", "Traffic lights green from the first time you see them", "In or around buses or ice-cream vans"] },
        { head: "Stationary", list: ["Building line (restricted visibility)", "Parked or broken-down vehicles", "Bus stops", "Humpback bridges", "Road bends", "Road works"] },
        { head: "Moving", list: ["Driver error", "Overtaking", "A vehicle turning right ahead", "An American tourist on a roundabout", "Pedestrians, motorcyclists and pedal cyclists", "Animals"] },
      ],
      concept: "potential",
      src: P(84, "Post-test model answers 9, 10, 11"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   2. QUICK RECALL — straight after learning, in mixed formats.
   --------------------------------------------------------------------------- */
const recall = {
  id: "recall",
  kind: "items",
  mode: "recall",
  title: "Quick Recall",
  blurb: "Flash cards, true or false, fill the gap",
  xpPer: 10,
  items: [
    {
      id: "r1", visual: "hazard-types", type: "flash", concept: "hazard-def",
      front: "What is the definition of a hazard?",
      back: "Any feature or situation which might cause you to change speed or direction — any situation which may present actual or potential danger to you, or any other road user.",
      src: P(27, "Post-test Q1; answer p.84 and p.25"),
    },
    {
      id: "r2", type: "truefalse", concept: "hazard-def",
      statement: "A hazard in the road ahead is always preceded by a warning sign.",
      answer: false,
      explain: "A hazard is any situation which could cause you to change speed or direction — with or without a sign.",
      src: P(28, "Retention Q1 (answer b, p.88)"),
    },
    {
      id: "r3", visual: "mspsl", type: "fill", concept: "mspsl",
      before: "The Hazard Routine is Mirrors – Signal –", after: "– Speed – Look.",
      options: ["Position", "Pause", "Proceed", "Prepare"], answer: "Position",
      explain: "MSPSL: Mirrors–Signal–Position–Speed–Look.",
      src: P(26, "MSPSL"),
    },
    {
      id: "r4", visual: "hazard-types", type: "truefalse", concept: "hazard-types",
      statement: "Road junctions are hazards.",
      answer: true,
      explain: "Junctions are permanent hazards — road features, like bends and gradients.",
      src: P(28, "Retention Q2 (answer c, p.88); p.25 permanent hazards"),
    },
    {
      id: "r5", visual: "manoeuvre", type: "flash", concept: "manoeuvre-def",
      front: "What is the definition of a manoeuvre?",
      back: "The act of changing your course or speed.",
      src: P(27, "Post-test Q2; answer p.84"),
    },
    {
      id: "r6", visual: "zone-of-vision", type: "fill", concept: "mirrors",
      before: "When you check your mirrors, just looking is not", after: ".",
      options: ["enough", "needed", "safe", "required"], answer: "enough",
      explain: "Take effective observation — just looking is not enough.",
      src: P(26, "MSPSL — Mirrors"),
    },
    {
      id: "r7", type: "choice", label: "Tap the correct statement", concept: "defensive",
      prompt: "Which of these describes the defensive driver?",
      options: [
        "Drives in a spirit of healthy competition",
        "Relies on other road users doing the correct thing",
        "Puts safety first",
        "Is ready to chastise other road users",
      ],
      answer: 2,
      explain: "Defensive driving means putting safety above all else.",
      src: P(28, "Retention Q8 (answer c, p.88); p.25"),
    },
    {
      id: "r8", type: "choice", label: "Identify the correct answer", concept: "attitude",
      prompt: "What mostly motivates a driver to practise defensive driving?",
      options: [
        "Concern for other road users above all",
        "Mostly a concern for their own safety",
        "Fear of the driving test",
        "Wanting to drive faster",
      ],
      answer: 1,
      explain: "People are usually motivated more strongly by self-preservation than altruism — \"mostly a concern for their own safety\".",
      src: P(27, "Post-test Q5; answer p.84; p.25"),
    },
    {
      id: "r9", type: "fill", concept: "defensive",
      before: "The defensive driver puts", after: "above all else.",
      options: ["safety", "speed", "progress", "the pupil"], answer: "safety",
      explain: "Defensive driving means putting safety above all else.",
      src: P(27, "Post-test Q8; answer p.84"),
    },
    {
      id: "r10", type: "truefalse", concept: "defensive",
      statement: "Defensive driving is only about control of the car.",
      answer: false,
      explain: "It involves more than control of the car: responsibility and consideration for others, and control of your own feelings and patience.",
      src: P(25, "Defensive Driving"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   3. HAZARD HUNT — a street scene; tap everything that is a hazard.
   Positions are percentages of the scene (x, y), for the drawing in
   HazardHunt.jsx. Every hotspot names its hazard type and its source.
   --------------------------------------------------------------------------- */
const hunt = {
  id: "hunt",
  kind: "hunt",
  title: "Hazard Hunt",
  blurb: "Tap every hazard in the street",
  xp: 25,
  intro: "You are driving up this road. Tap everything that might cause you to change speed or direction.",
  scene: "street-1",
  hotspots: [
    { id: "bend", label: "Bend ahead", type: "Permanent", x: 50, y: 8,
      why: "Bends are permanent hazards — road features that may make you change speed or direction.",
      concept: "hazard-types", src: P(25, "Permanent hazards") },
    { id: "junction", label: "Side road junction", type: "Permanent", x: 22, y: 30,
      why: "Junctions are permanent hazards — road junctions are always hazards.",
      concept: "hazard-types", src: P(25, "Permanent hazards; retention Q2") },
    { id: "roadworks", label: "Road works", type: "Semi-permanent", x: 62, y: 24,
      why: "Road works are semi-permanent hazards.",
      concept: "hazard-types", src: P(25, "Semi-permanent hazards") },
    { id: "parked", label: "Parked car", type: "Semi-permanent", x: 40, y: 50,
      why: "Stationary and parked vehicles are semi-permanent hazards — they may block your path and your view.",
      concept: "hazard-types", src: P(25, "Semi-permanent hazards; p.84 answer 10") },
    { id: "bus", label: "Bus at the bus stop", type: "Semi-permanent", x: 66, y: 60,
      why: "Bus stops are listed as stationary hazards, and the area in or around buses as a potential hazard.",
      concept: "potential", src: P(84, "Post-test model answers 9 and 10") },
    { id: "pedestrian", label: "Pedestrian at the kerb", type: "Moving", x: 29, y: 64,
      why: "Pedestrians are moving hazards; pedestrians at the kerbside are named as potential hazards.",
      concept: "potential", src: P(25, "Moving hazards; p.84 answer 9") },
    { id: "children", label: "Children playing", type: "Moving", x: 80, y: 40,
      why: "Children playing on the street are named as a potential hazard.",
      concept: "potential", src: P(84, "Post-test model answer 9") },
    { id: "cyclist", label: "Cyclist", type: "Moving", x: 57, y: 40,
      why: "Cyclists are moving hazards.",
      concept: "hazard-types", src: P(25, "Moving hazards") },
    { id: "wet", label: "Wet road surface", type: "Surface", x: 50, y: 80,
      why: "Weather conditions and road surface conditions are surface hazards.",
      concept: "hazard-types", src: P(25, "Surface hazards") },
  ],
};

/* ---------------------------------------------------------------------------
   4. MATCHING — sort the hazards, match each stage of the routine.
   --------------------------------------------------------------------------- */
const matching = {
  id: "matching",
  kind: "items",
  mode: "matching",
  title: "Sort & Match",
  blurb: "Hazard types, and what each MSPSL stage involves",
  xp: 20,
  items: [
    {
      id: "m1", visual: "hazard-types", type: "sort", concept: "hazard-types",
      prompt: "Sort each example into its type of hazard.",
      categories: [
        { id: "perm", label: "Permanent" },
        { id: "semi", label: "Semi-permanent" },
        { id: "move", label: "Moving" },
        { id: "surf", label: "Surface" },
      ],
      cards: [
        { text: "Bends", cat: "perm" },
        { text: "Gradients", cat: "perm" },
        { text: "Junctions", cat: "perm" },
        { text: "Road works", cat: "semi" },
        { text: "Stationary vehicles", cat: "semi" },
        { text: "Pedestrians", cat: "move" },
        { text: "Animals", cat: "move" },
        { text: "Cyclists", cat: "move" },
        { text: "Weather conditions", cat: "surf" },
        { text: "Surface contaminants", cat: "surf" },
      ],
      explain: "Permanent: bends, junctions, gradients. Semi-permanent: stationary vehicles, road works. Moving: pedestrians, cyclists, drivers, animals. Surface: weather, surface contaminants, road surface type/conditions.",
      src: P(25, "Summaries — Hazards, examples"),
    },
    {
      id: "m2", visual: "mspsl", type: "match", concept: "mspsl",
      prompt: "Match each stage of the Hazard Routine to what it involves.",
      pairs: [
        ["Mirrors", "Check the position and speed of following traffic in good time"],
        ["Signal", "Show others your intent to change course, clearly and in good time"],
        ["Position", "Change course and position to give the best view"],
        ["Speed", "Change speed with acceleration/deceleration or footbrake; gear for control"],
        ["Look", "Well ahead and behind — assess, decide, act"],
      ],
      explain: "Each stage is applied if necessary, and the routine may be repeated as the situation develops.",
      src: P(26, "MSPSL"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   5. PROCEDURE BUILDER — orders the workbook actually gives.
   --------------------------------------------------------------------------- */
const procedure = {
  id: "procedure",
  kind: "items",
  mode: "procedure",
  title: "Procedure Builder",
  blurb: "Put the Hazard Routine in order",
  xp: 30,
  items: [
    {
      id: "p1", visual: "mspsl", type: "order", concept: "mspsl",
      prompt: "Put the Hazard Routine in the correct order.",
      steps: ["Mirrors", "Signal", "Position", "Speed", "Look"],
      explain: "Mirrors–Signal–Position–Speed–Look. The basic rule is Mirrors–Signal–Manoeuvre; the manoeuvre breaks down into Position, Speed and Look.",
      detail: [
        "Mirrors — position and speed of following traffic, in good time",
        "Signal — if necessary, clearly and in good time",
        "Position — for the best view, in good time",
        "Speed — acceleration/deceleration, footbrake, gear",
        "Look — well ahead and behind; assess, decide, act",
      ],
      src: P(26, "MSPSL"),
    },
    {
      id: "p2", visual: "zone-of-vision", type: "order", concept: "look",
      prompt: "The \"Look\" stage. Put it in order.",
      steps: ["Look well ahead and behind", "Assess the situation", "Decide on any action necessary", "Act sensibly on what you see"],
      explain: "Look, assess, decide, act — and deal with every hazard using the routine.",
      src: P(26, "MSPSL — Look"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   6. WHAT WOULD YOU DO? — applying the unit to situations.
   --------------------------------------------------------------------------- */
const scenarios = {
  id: "scenarios",
  kind: "items",
  mode: "scenario",
  title: "What Would You Do?",
  blurb: "Real situations, one decision each",
  xpPer: 20,
  items: [
    {
      id: "s1", type: "choice", label: "Scenario", concept: "mirrors",
      scene: "🚐 A van is parked on your side of the road ahead. You'll need to move out to pass it.",
      visual: "kerb-clearance",
      prompt: "What is the very first thing you should do?",
      options: ["Slow down with the footbrake", "Ease off the accelerator", "Check the mirrors", "Select a suitable gear"],
      answer: 2,
      explain: "Mirrors come first in the Hazard Routine: check the position and speed of following traffic in good time, before any change of speed or direction.",
      src: P(28, "Retention Q4 (answer c, p.88); p.26 MSPSL"),
    },
    {
      id: "s2", type: "choice", label: "Scenario", concept: "repeat",
      scene: "🚧 You've checked your mirrors approaching road works on your side. You will need to move out slightly.",
      prompt: "What should you do about a signal?",
      options: [
        "Always give a hand signal at road works",
        "Decide whether a signal is necessary to show others you intend to change course",
        "Never signal — the road works are obvious",
        "Position so a signal is never needed",
      ],
      answer: 1,
      explain: "Signal if necessary, to show other road users your intent to change course — clearly and in good time. The driver must decide whether signals, repositioning and speed changes are necessary for each hazard.",
      src: P(26, "MSPSL — Signal; paragraph after the list"),
    },
    {
      id: "s3", type: "choice", label: "Scenario", concept: "attitude",
      scene: "😤 A driver pulls out in front of you and you have to brake. You feel your temper rise.",
      prompt: "What does defensive driving ask of you?",
      options: [
        "Sound the horn at length so they learn",
        "Follow closely to show them the mistake",
        "Keep control of your feelings and don't provoke a hostile response",
        "Overtake them as soon as possible",
      ],
      answer: 2,
      explain: "Defensive driving includes keeping control of your own feelings and patience towards others. You must not drive in a way that gives offence or provokes a hostile response.",
      src: P(25, "Defensive Driving"),
    },
    {
      id: "s4", type: "choice", label: "Scenario", concept: "potential",
      scene: "🚦 You come round a corner and the traffic lights ahead are already green.",
      prompt: "How should you treat them?",
      options: [
        "As no hazard — green means go",
        "As a potential hazard — think what could develop and plan what you would do",
        "Speed up to get through",
        "Only as a hazard if a pedestrian is waiting",
      ],
      answer: 1,
      explain: "Traffic lights that are green from the first time you see them are named as a potential hazard. Think about what could develop and figure out what you would do.",
      src: P(84, "Post-test model answer 9; p.25 Always Have a Plan"),
    },
    {
      id: "s5", type: "choice", label: "Scenario", concept: "own-safety",
      scene: "🚶 A pedestrian is standing at the kerb ahead, looking at their phone.",
      prompt: "Which thinking is right?",
      options: [
        "They've seen me, so they'll wait",
        "It's their responsibility to stay on the path",
        "My safety is in my hands — I can't rely on them to do the right thing",
        "Pedestrians are only a hazard at crossings",
      ],
      answer: 2,
      explain: "Pedestrians at the kerbside are potential hazards, and the essence of defensive driving is that your safety is in your hands. You cannot rely on other road users to do the right thing.",
      src: P(26, "Side note; p.84 model answer 9"),
    },
    {
      id: "s6", type: "choice", label: "Scenario", concept: "medication",
      scene: "🤧 Your pupil has a heavy cold and took a cold remedy this morning. The box carries a warning about operating vehicles.",
      prompt: "What's the right advice?",
      options: [
        "Cold remedies never affect driving",
        "Read the label or check with a doctor — often it's better to suffer the cold than the effects of the medicine",
        "Drive, but only on quiet roads",
        "Take a second dose to clear the symptoms",
      ],
      answer: 1,
      explain: "Many medicines, cold remedies especially, can make you drowsy. In many cases you are better off suffering from the cold than from the effects of the medicine. Always read the label or check with your doctor.",
      src: P(26, "Note: About Medication"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   7. SITUATION → DECISION → RESULT — one hazard, worked through the routine.
   --------------------------------------------------------------------------- */
const walkthrough = {
  id: "walkthrough",
  kind: "items",
  mode: "walkthrough",
  title: "Situation → Decision",
  blurb: "Work one hazard through the routine, step by step",
  xpPer: 10,
  situation: "🚙 A broken-down car is stopped on your side of the road ahead. Traffic is following you.",
  items: [
    {
      id: "w1", visual: "hazard-types", type: "choice", step: "What do you notice?", concept: "hazard-types",
      prompt: "What kind of hazard is a broken-down vehicle?",
      options: ["Permanent", "Semi-permanent", "Surface", "Not a hazard"],
      answer: 1,
      explain: "Stationary vehicles are semi-permanent hazards; parked or broken-down vehicles are listed as stationary hazards.",
      src: P(25, "Semi-permanent hazards; p.84 answer 10"),
    },
    {
      id: "w2", type: "choice", step: "What is the risk?", concept: "hazard-def", visual: "manoeuvre",
      prompt: "Why does it count as a hazard?",
      options: [
        "Because there is a warning sign",
        "Because it might cause you to change speed or direction",
        "Because it is another vehicle",
        "It only counts if it has hazard lights on",
      ],
      answer: 1,
      explain: "A hazard is any feature or situation which might cause you to change speed or direction.",
      src: P(25, "Summaries — Hazards"),
    },
    {
      id: "w3", visual: "mspsl", type: "choice", step: "What applies?", concept: "mspsl",
      prompt: "Which routine do you apply?",
      options: ["Look–Assess–Decide", "The Hazard Routine: Mirrors–Signal–Position–Speed–Look", "Signal–Position–Mirrors", "None; just steer round it"],
      answer: 1,
      explain: "MSPSL must be applied in any situation where there is a risk to you or another road user.",
      src: P(26, "MSPSL"),
    },
    {
      id: "w4", type: "choice", step: "Mirrors", concept: "mirrors",
      prompt: "What are you checking in the mirrors?",
      options: ["Only that no one is overtaking", "The position and speed of following traffic, in good time", "Your own position in the lane", "Nothing — a glance is enough"],
      answer: 1,
      explain: "Check the position and speed of following traffic in good time. Just looking is not enough.",
      src: P(26, "MSPSL — Mirrors"),
    },
    {
      id: "w5", type: "choice", step: "Signal", concept: "signal",
      prompt: "When is a signal needed here?",
      options: ["Never at a stationary vehicle", "If necessary, to show others you intend to change course — clearly and in good time", "Only once you are alongside it", "Always, with the hazard lights"],
      answer: 1,
      explain: "Signal if necessary to show other road users your intent to change course, clearly and in good time.",
      src: P(26, "MSPSL — Signal"),
    },
    {
      id: "w6", type: "choice", step: "Position", concept: "position",
      prompt: "Why take up your position early?",
      options: ["So steering is effortless", "So other road users can anticipate your actions", "So you won't need to signal", "To be first past it"],
      answer: 1,
      explain: "Change position in good time, for the best view and so that others can anticipate your actions.",
      src: P(28, "Retention Q6 (answer b, p.88); p.26 Position"),
    },
    {
      id: "w7", type: "choice", step: "Speed", concept: "speed",
      prompt: "How can you adjust your speed?",
      options: ["Only by braking hard", "Acceleration/deceleration or the footbrake, with a gear for control", "Only by changing gear", "Speed never needs to change"],
      answer: 1,
      explain: "If necessary, change speed using acceleration/deceleration or the footbrake, and change gear if appropriate for the greatest control.",
      src: P(26, "MSPSL — Speed"),
    },
    {
      id: "w8", visual: "zone-of-vision", type: "choice", step: "Look", concept: "look",
      prompt: "Last stage — what does Look involve?",
      options: ["A quick glance ahead", "Look well ahead and behind; assess, decide, act sensibly on what you see", "Looking at the broken-down car only", "Waiting for the driver to wave you on"],
      answer: 1,
      explain: "Look well ahead and behind, assess the situation, decide on any action, act sensibly — and repeat the routine if the situation develops.",
      src: P(26, "MSPSL — Look"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — the workbook's own retention test (pages 28–29),
   answers from page 88. Q9 is omitted (see the top of this file).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept,
  prompt, options, answer,
  src: P(n <= 10 ? 28 : 29, `Retention test Q${n}; answer p.88`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "A hazard in the road ahead is", ["always preceded by a warning sign", "any situation which could cause you to change speed or direction", "another vehicle", "usually indicated by road markings"], 1, "hazard-def"),
    R(2, "The manual 'Driving the Essential Skills' advises that road junctions are", ["not hazards", "only hazardous when there is moving traffic nearby", "hazards", "only hazardous to pedestrians"], 2, "hazard-types"),
    R(3, "A manoeuvre may be best defined as", ["any change of speed", "the act of making a change in speed or direction", "the technique of controlling the car at very slow speeds", "any change of course"], 1, "manoeuvre-def"),
    R(4, "The very first action a driver should take on seeing a static road hazard is to", ["slow down with the footbrake", "ease off the accelerator pedal", "check the mirrors", "select a suitable gear"], 2, "mirrors"),
    R(5, "The three phases of the 'manoeuvre' element of the Mirror Signal Manoeuvre (MSM) routine are", ["Act-Assess-Decide", "Assess-Decide-Act", "Look-Assess-Position", "Position-Speed-Look"], 3, "mspsl"),
    R(6, "It is advisable to get into position in good time on approach to a hazard ahead so that", ["steering is effortless", "other road users can anticipate your actions", "your signals will confirm what you intend to do", "signals become unnecessary"], 1, "position"),
    R(7, "An instructor should emphasise use of the mirrors on approach to hazards, so that pupils", ["are unlikely to forget to use the mirrors during a driving test", "are more likely to develop defensive driving skills", "will not hesitate to rely on the actions of other road users", "will not worry so much about following vehicles"], 1, "mirrors"),
    R(8, "The defensive driver will always", ["drive in a spirit of healthy competition", "rely on other road users doing the correct thing", "put safety first", "be ready to chastise other road users"], 2, "defensive"),
    R(10, "Taking effective observation on approach to a hazard means that a driver will", ["look well ahead", "look well ahead and assess following traffic", "take a good long look in the mirrors", "only take a quick glance at the rear-view mirror"], 1, "mirrors"),
    R(11, "The manual 'Driving the Essential Skills' advises that when you check your mirrors, just looking is not enough, and that you must", ["be in the correct road position and at the correct speed before looking", "act safely upon what you see", "keep looking in your mirrors as you approach a hazard", "as a rule, keep looking all around whilst driving"], 1, "mirrors"),
    R(12, "A driver's zone of vision is", ["his view into another road at a junction", "what can be seen from the vehicle", "anything visible at the front of the car", "what he can see outside his/her peripheral vision"], 1, "look"),
    R(13, "The good driver will constantly", ["keep his eyes on the road ahead", "look out for hazards in his rear-view mirror", "keep one eye on the mirrors", "regularly scan the road ahead and behind"], 3, "look"),
    R(14, "Other than in an emergency, in situations where there is a potential risk to you or another road user whilst driving", ["you must stop dead", "you should initially apply the MSPSL routine", "you must never change speed before changing direction", "you should not check the mirrors before braking"], 1, "mspsl"),
    R(15, "On approach to a hazard, a good defensive driver will", ["accelerate, (if necessary to escape/avoid the hazard)", "always slow down rather than increase speed", "always use gears to slow the car down", "never need to change speed or direction"], 0, "speed"),
  ],
};

/* ---------------------------------------------------------------------------
   9. UNIT CHALLENGE — ten mixed items, each measuring one of four skills.
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
    { id: "c1", visual: "manoeuvre", skill: "knowledge", type: "choice", label: "Quick recall", concept: "manoeuvre-def",
      prompt: "A manoeuvre is best defined as…", options: ["Any change of speed", "The act of making a change in speed or direction", "Controlling the car at very slow speeds", "Any change of course"], answer: 1,
      explain: "A manoeuvre is the act of changing your course or speed.", src: P(28, "Retention Q3; p.84 answer 2") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "position",
      scene: "🚧 Road works ahead narrow your lane.",
      prompt: "Why get into position in good time?", options: ["So steering is effortless", "So other road users can anticipate your actions", "So you can skip the signal", "So you can speed up past it"], answer: 1,
      explain: "Position in good time so that others can anticipate your actions.", src: P(26, "MSPSL — Position; retention Q6") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "defensive",
      statement: "Defensive driving involves keeping control of your own feelings and patience towards others.", answer: true,
      explain: "Defensive driving is more than control of the car — it includes responsibility, consideration, and control of your own feelings.", src: P(25, "Defensive Driving") },
    { id: "c4", visual: "hazard-types", skill: "recognition", type: "choice", label: "Hazard identification", concept: "hazard-types",
      prompt: "Which of these is a surface hazard?", options: ["Road works", "Surface contaminants", "A junction", "A cyclist"], answer: 1,
      explain: "Surface hazards: weather conditions, surface contaminants and road surface type/conditions.", src: P(25, "Surface hazards") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "hazard-types",
      prompt: "Match each hazard type to an example.",
      pairs: [["Permanent", "Gradients"], ["Semi-permanent", "Road works"], ["Moving", "Animals"], ["Surface", "Weather conditions"]],
      explain: "Permanent: bends, junctions, gradients. Semi-permanent: stationary vehicles, road works. Moving: pedestrians, cyclists, drivers, animals. Surface: weather, contaminants, surface type.", src: P(25, "Summaries — Hazards") },
    { id: "c6", visual: "mspsl", skill: "knowledge", type: "order", label: "Procedure", concept: "mspsl",
      prompt: "Order the Hazard Routine.", steps: ["Mirrors", "Signal", "Position", "Speed", "Look"],
      explain: "Mirrors–Signal–Position–Speed–Look.", src: P(26, "MSPSL") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "mspsl",
      scene: "🐕 A dog is loose on the footpath ahead. It isn't an emergency yet.",
      prompt: "What should you initially do?", options: ["Stop dead", "Apply the MSPSL routine", "Change direction before any change of speed", "Brake before checking the mirrors"], answer: 1,
      explain: "Other than in an emergency, where there is a potential risk you should initially apply the MSPSL routine.", src: P(29, "Retention Q14; p.25 moving hazards") },
    { id: "c8", visual: "zone-of-vision", skill: "retention", type: "choice", label: "Recall", concept: "look",
      prompt: "A driver's zone of vision is…", options: ["His view into another road at a junction", "What can be seen from the vehicle", "Anything visible at the front of the car", "What he can see outside his peripheral vision"], answer: 1,
      explain: "Zone of vision: what can be seen from the vehicle.", src: P(29, "Retention Q12 (answer b, p.88)") },
    { id: "c9", skill: "application", type: "choice", label: "Application", concept: "mirrors",
      prompt: "Checking your mirrors, just looking is not enough. You must also…", options: ["Be in the correct position and speed before looking", "Act safely upon what you see", "Keep looking in the mirrors as you approach", "Keep looking all around"], answer: 1,
      explain: "Look, assess, decide — and act sensibly on what you see.", src: P(29, "Retention Q11 (answer b, p.88); p.26") },
    { id: "c10", visual: "zone-of-vision", skill: "retention", type: "choice", label: "Final challenge", concept: "look",
      prompt: "The good driver will constantly…", options: ["Keep his eyes on the road ahead", "Look out for hazards in his rear-view mirror", "Keep one eye on the mirrors", "Regularly scan the road ahead and behind"], answer: 3,
      explain: "Look well ahead and behind — regularly scan the road ahead and behind.", src: P(29, "Retention Q13 (answer d, p.88); p.26 Look") },
  ],
};

/* ---- visuals on the retention questions, and Spot-it picture questions ---- */
const RET_VISUALS = { 1: "hazard-types", 2: "hazard-types", 3: "manoeuvre", 5: "mspsl", 12: "zone-of-vision", 13: "zone-of-vision", 14: "mspsl" };
retention.items.forEach(it => { const v = RET_VISUALS[Number(it.id.slice(3))]; if (v) it.visual = v; });
recall.items.push(
  { id: "sp1", type: "picture", label: "Spot it", concept: "potential",
    prompt: "Which picture shows a restricted view?", options: ["restricted-view", "zone-of-vision", "hazard-types", "manoeuvre"], answer: 0, names: ["Restricted view", "Zone of vision", "Hazards", "A manoeuvre"],
    explain: "A bend with a hedge hides what’s around it — anything obstructing a driver’s view is a potential hazard.", src: P(84, "Post-test answers 9, 10") },
  { id: "sp2", type: "picture", label: "Spot it", concept: "manoeuvre-def",
    prompt: "Which picture shows a manoeuvre — a change of course?", options: ["zone-of-vision", "manoeuvre", "following-distance", "mspsl"], answer: 1, names: ["Zone of vision", "A manoeuvre", "Following distance", "The Hazard Routine"],
    explain: "A manoeuvre is the act of changing your course or speed — like moving out round a parked car.", src: P(84, "Post-test answer 2") },
);

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "1.1",
  number: "1.1",
  title: "Dealing with Hazards",
  pages: [25, 29],
  intro: "Recognise, anticipate and deal safely with road hazards — and teach the Hazard Routine.",
  objectives: [
    "The definition of a \"hazard\"",
    "The meaning of \"defensive driving\"",
    "How the MSPSL (Mirrors–Signal–Position–Speed–Look) routine applies to hazards",
  ],
  objectivesSrc: P(25, "Objectives"),
  /* The existing question bank section closest to this unit. */
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  /* In learning order. `weight` sets how much each counts toward mastery. */
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...hunt, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "hazard-spotter", icon: "🏆", label: "Hazard Spotter", rule: { activity: "hunt", min: 100 } },
    { id: "hazard-routine", icon: "🔁", label: "Hazard Routine", rule: { activity: "procedure", min: 100 } },
    { id: "defensive-driver", icon: "🛡️", label: "Defensive Driver", rule: { activity: "scenarios", min: 80 } },
  ],
};
