/*
  ===========================================================================
  BOOK 4 · UNIT 4.10 — SELF-TEST QUESTIONS (BASIC MECHANICAL PRINCIPLES)
  (shown in the app as "Mechanics Self-Test")

  Source: "Theory Resource Workbook 4 of 4 — Instructional Techniques &
  Practices" (Driver Education Supplies), book pages 70–77: 45 open
  self-test questions (pp.70–72) with the book's answers (pp.73–76). There
  is no multiple-choice key, so the multiple-choice items here are built
  from those printed answers and cite the self-test question.

  Not used (unclear, unverifiable, or vary by car or by law):
  - Q10 (demister "too many energy consumables"), Q13's "125°", Q41
    (bigger cars are safer);
  - warning-triangle distances (Q20), tow-rope length (Q32) and typical
    tyre pressures in psi (Q28) — check the Rules of the Road and the
    vehicle handbook;
  - "lift the car at least 3 mm" in Q27.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 4, unit: "4.10", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "starting": {
    title: "Starting and stopping problems",
    text: "Engine won't start: an electrical problem, fuel supply, or a blocked fuel filter. Some cars need the clutch pressed to start; automatics need the footbrake pressed. Key won't turn: the steering lock is on — turn the wheel slightly to take the pressure off. Key left too long in position 0 or 1: take it out and try again. Car won't lock or unlock remotely: the key battery or car battery may be flat. Engine won't switch off: remove the fuse marked 'motor'.",
    src: P(73, "Answers 1, 2, 4, 5, 6, 24"),
  },
  "electrics": {
    title: "Windows, wipers, fuses",
    text: "Electric windows won't close: check nothing blocks them, check the fuses, and hold the switch past the pressure point for 5 seconds — windows may need resetting after the battery's been disconnected. Wipers jammed: clear debris, leaves, snow and ice. Wipers dead: switch off and on or try the next speed; otherwise a qualified mechanic. Change a fuse when something electrical stops working; fuse boxes are under or around the steering column or in the engine compartment, and each position is labelled.",
    src: P(73, "Answers 3, 7, 8; p.75 answer 35"),
  },
  "lights": {
    title: "Warning lights",
    text: "ABS light flashing: ABS may not be working, but normal brakes still work — beware of skidding. Red brake light while driving: the handbrake is on, the system has a fault, or fluid is low — don't drive on; see a mechanic. Red coolant light: coolant low, leaking or overheating — stop and check, let it cool. Fuel light (usually yellow): on reserve — fill up soon. Red seat-belt light: someone isn't belted, an object on the seat, or a door not closed. Blue light: main beam — dip it if not needed. Indicator flashing fast or steady: a bulb has blown. Red oil light: oil critically low — stop, engine off, top up. A red tyre light: pressure low — slow gradually, stop, change the wheel if necessary. Air-conditioning lamp flashing: losing refrigerant — see a mechanic.",
    src: P(73, "Answers 9, 11–18; p.74 answer 25"),
  },
  "roadside": {
    title: "Roadside tasks",
    text: "Hazard lights flash all indicators together — use them only when stopped or where there's danger; they work without the ignition. Fuel cap won't open: check the central locking, then the handbook. Bulbs: procedures vary — see the handbook. Jack and brace: usually in the boot under the floor. Changing a wheel: handbrake on (chocks if possible), everyone out and away from the road, level ground; loosen nuts before jacking; jack only at the jacking points, never get under the car; remove, fit, hand-tighten, lower, tighten evenly in sequence; get the puncture repaired. Checking pressure: remove the dust cap, gauge on the valve, read in PSI or bar; figures are in the handbook, fuel flap or door frame; check the spare.",
    src: P(73, "Answers 19, 21, 23; p.74 answers 26–29"),
  },
  "towing": {
    title: "Jump starts, pushing and towing",
    text: "Jump starts need caution — modern electronics can be damaged; not all cars allow them; check the handbook. When pushing a car, beware of locking yourself out — leave a door ajar. Towing: never exceed the gross vehicle weight (licence implications may apply); braking distances increase; the towed car in neutral with the key at 0 or 1 so the steering is free, and lights on. Being towed: ignition on — there's little or no steering and braking assistance. Automatics shouldn't be tow-started. The tow eye is usually in the tool kit and screws into a covered recess in the bumper.",
    src: P(75, "Answers 30–34"),
  },
  "safety": {
    title: "Belts, airbags, head restraints",
    text: "Seat belts are compulsory where fitted; the height adjuster can improve comfort. A medical exemption must be in writing and shown to An Garda Síochána on request. Airbags are in the steering wheel, dashboard and sides; they inflate within about a tenth of a second, so sit correctly, back flat to the seat, and never carry items on passenger seats. Head restraints prevent whiplash and should never be removed: the rigid part at least at eye or top-of-ear level and close to the head.",
    src: P(75, "Answers 37, 38; p.76 answers 39, 40; p.69"),
  },
  "engine": {
    title: "Bonnet, radiator, exhaust",
    text: "The bonnet opens with a lever near the driver's or passenger's area. The radiator is at the front of the engine compartment — never open the cap when hot: coolant can exceed 100 °C and scald. The exhaust carries emissions to the rear and gets very hot along its length. The catalytic converter reduces harmful gases — use unleaded petrol in petrol engines. Buying second-hand: the VIN, chassis and body numbers should match the logbook.",
    src: P(75, "Answer 36; p.76 answers 42–45"),
  },
};

/* ---------------------------------------------------------------------------
   1. LEARN
   --------------------------------------------------------------------------- */
const learn = {
  id: "learn",
  kind: "learn",
  title: "Learn",
  blurb: "The self-test answers in short cards",
  xp: 20,
  remember: [
    "Red light: stop and check; yellow: deal with it soon",
    "Loosen wheel nuts before jacking",
    "Never open a hot radiator",
  ],
  cards: [
    {
      icon: "🔑",
      kicker: "Starting problems",
      title: "Won't start, won't turn",
      ask: {
        prompt: "The key won't turn in the ignition. Most likely?",
        options: ["Flat tyre", "The steering lock is on", "No oil"],
        answer: 1,
      },
      list: [
        "Some cars: clutch down to start; automatics: footbrake",
        "Key stuck: turn the steering wheel slightly",
        "Remote locking dead: key or car battery flat",
        "Won't start: electrics, fuel supply or filter",
      ],
      concept: "starting",
      src: P(73, "Answers 1–6, 24"),
    },
    {
      icon: "🪟",
      kicker: "Electrics",
      title: "Windows, wipers, fuses",
      list: [
        "Windows: clear obstructions, check fuses, hold the switch 5 s",
        "Wipers jammed: clear leaves, snow and ice",
        "Fuse boxes: steering column or engine compartment",
      ],
      concept: "electrics",
      src: P(73, "Answers 3, 7, 8; p.75"),
    },
    {
      icon: "🚨",
      kicker: "Warning lights",
      title: "Know what they mean",
      visual: "dash-warnings",
      list: [
        "Red oil: stop, engine off, top up",
        "Red coolant: stop, let it cool",
        "Red brake: handbrake on, fault or low fluid",
        "ABS: normal brakes still work; blue: main beam",
      ],
      concept: "lights",
      src: P(73, "Answers 11–18"),
    },
    {
      icon: "🛞",
      kicker: "Changing a wheel",
      title: "Safely, in order",
      visual: "wheel-change",
      list: [
        "Everyone out and away from the road",
        "Handbrake on, level ground; loosen nuts first",
        "Jacking points only — never get under the car",
        "Tighten evenly; repair the puncture soon",
      ],
      concept: "roadside",
      src: P(74, "Answer 27"),
    },
    {
      icon: "🔗",
      kicker: "Towing",
      title: "Jump starts and tows",
      list: [
        "Jump starts can damage electronics — check the handbook",
        "Towed car: neutral, key at 0 or 1, lights on",
        "Being towed: ignition on — little steering or braking help",
        "Automatics shouldn't be tow-started",
      ],
      concept: "towing",
      src: P(75, "Answers 30–34"),
    },
    {
      icon: "🎈",
      kicker: "Belts, airbags, restraints",
      title: "Sit right",
      visual: "head-restraint",
      list: [
        "Belts compulsory where fitted; exemptions in writing",
        "Airbags fire within about a tenth of a second",
        "Nothing loose on passenger seats",
        "Head restraint at eye or ear level, never removed",
      ],
      concept: "safety",
      src: P(75, "Answers 37–40"),
    },
    {
      icon: "🔥",
      kicker: "Engine bay",
      title: "Hot parts",
      list: [
        "Never open a hot radiator — coolant over 100 °C",
        "The whole exhaust gets very hot",
        "Petrol engines with a catalyst: unleaded only",
        "Second-hand: VIN and numbers must match the logbook",
      ],
      concept: "engine",
      src: P(76, "Answers 42–45; p.75 answer 36"),
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
  blurb: "Self-test questions — flash, true or false, fill",
  xpPer: 10,
  items: [
    { id: "r1", type: "flash", concept: "starting",
      front: "Self-test Q5: the car won't start when you turn the key?",
      back: "Some cars need the clutch pressed; automatics need the footbrake pressed.", src: P(73, "Self-test answer 5") },
    { id: "r2", type: "flash", concept: "lights", visual: "dash-warnings",
      front: "Q16: a blue light on the dashboard?",
      back: "Main beam is on — dip it if it isn't needed.", src: P(73, "Self-test answer 16") },
    { id: "r3", type: "flash", concept: "lights",
      front: "Q17: an indicator flashing faster than usual?",
      back: "One or more bulbs have blown — replace immediately.", src: P(73, "Self-test answer 17") },
    { id: "r4", type: "truefalse", concept: "lights",
      statement: "If the ABS light comes on, the car has no brakes at all.", answer: false,
      explain: "Normal braking still works, but the car may skid more easily.", src: P(73, "Self-test answer 11") },
    { id: "r5", type: "flash", concept: "roadside",
      front: "Q19: what are hazard lights for?",
      back: "All indicators flashing together — only when stopped or where there's danger. They work without the ignition.", src: P(73, "Self-test answer 19") },
    { id: "r6", type: "fill", concept: "roadside", visual: "wheel-change",
      before: "When changing a wheel, loosen the nuts", after: "jacking the car.",
      options: ["before", "after", "while", "instead of"], answer: "before",
      explain: "The wheel can't spin while it's on the ground.", src: P(74, "Self-test answer 27") },
    { id: "r7", type: "flash", concept: "towing",
      front: "Q33: being towed — what must you ensure?",
      back: "The ignition is on: you'll have little steering and braking assistance.", src: P(75, "Self-test answer 33") },
    { id: "r8", type: "flash", concept: "engine",
      front: "Q36: buying second-hand — how do you know it's legal?",
      back: "The VIN, chassis and body numbers should match the logbook.", src: P(75, "Self-test answer 36") },
    { id: "r9", type: "flash", concept: "safety", visual: "head-restraint",
      front: "Q40: what is a head restraint for?",
      back: "To prevent whiplash in a crash. Set it for the base of the skull and never remove it.", src: P(76, "Self-test answer 40") },
    { id: "r10", type: "truefalse", concept: "engine",
      statement: "It's safe to open the radiator cap as soon as you stop.", answer: false,
      explain: "Pressurised coolant over 100 °C can scald.", src: P(76, "Self-test answer 43") },
  ],
};

/* ---------------------------------------------------------------------------
   3. LIGHTS & FIXES — recognition.
   --------------------------------------------------------------------------- */
const fixes = {
  id: "fixes",
  kind: "items",
  mode: "matching",
  title: "Lights & Fixes",
  blurb: "Spot it, sort it — warnings and roadside jobs",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "lights",
      prompt: "Which picture explains the dashboard warning lights?",
      options: ["dash-warnings", "wheel-change", "head-restraint"], answer: 0,
      names: ["Dashboard lights", "Wheel change", "Head restraint"],
      explain: "Red: stop and check. Yellow: soon.", src: P(73, "Self-test answers 11–18") },
    {
      id: "k2", type: "sort", concept: "lights",
      prompt: "Stop now, or deal with it soon?",
      categories: [
        { id: "stop", label: "Stop now" },
        { id: "soon", label: "Soon" },
      ],
      cards: [
        { text: "Red oil light", cat: "stop" },
        { text: "Red brake light", cat: "stop" },
        { text: "Fuel reserve light", cat: "soon" },
        { text: "Red coolant light", cat: "stop" },
        { text: "Indicator flashing fast", cat: "soon" },
      ],
      explain: "Red warnings mean stop and check.", src: P(73, "Self-test answers 12–18") },
    { id: "k3", type: "picture", label: "Spot it", concept: "roadside",
      prompt: "Which picture shows changing a wheel?",
      options: ["head-restraint", "wheel-change"], answer: 1,
      names: ["Head restraint", "Wheel change"],
      explain: "Loosen first, then jack.", src: P(74, "Self-test answer 27") },
    {
      id: "k4", type: "sort", concept: "roadside",
      prompt: "Changing a wheel — safe or not?",
      categories: [
        { id: "safe", label: "Safe" },
        { id: "unsafe", label: "Unsafe" },
      ],
      cards: [
        { text: "Passengers wait away from the road", cat: "safe" },
        { text: "Reaching under the jacked car", cat: "unsafe" },
        { text: "Jacking at the marked jacking point", cat: "safe" },
        { text: "A brick under the jack for height", cat: "unsafe" },
      ],
      explain: "Never get under a jacked vehicle.", src: P(74, "Self-test answer 27") },
    { id: "k5", type: "picture", label: "Spot it", concept: "safety",
      prompt: "Which picture shows protection from whiplash?",
      options: ["head-restraint", "dash-warnings"], answer: 0,
      names: ["Head restraint", "Dashboard lights"],
      explain: "Set it high and close.", src: P(76, "Self-test answer 40") },
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
  blurb: "Problem and fix",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "starting",
      prompt: "Match the problem to the answer.",
      pairs: [
        ["Key won't turn", "Turn the steering wheel slightly"],
        ["Remote won't unlock", "Key or car battery flat"],
        ["Wipers jammed", "Clear leaves, snow or ice"],
        ["Fuel cap won't open", "Check the central locking"],
        ["Engine won't switch off", "Remove the 'motor' fuse"],
      ],
      explain: "From the self-test answers.", src: P(73, "Self-test answers 2, 6, 7, 21, 24") },
    {
      id: "m2", type: "match", concept: "lights", visual: "dash-warnings",
      prompt: "Match the light.",
      pairs: [
        ["Blue light", "Main beam on"],
        ["Red oil light", "Stop and top up"],
        ["Red seat-belt light", "Someone isn't belted"],
        ["Fuel light", "On reserve"],
      ],
      explain: "Know your dashboard.", src: P(73, "Self-test answers 14–18") },
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
  blurb: "Roadside jobs in order",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "roadside", visual: "wheel-change",
      prompt: "Changing a wheel — in order.",
      steps: ["Handbrake on, everyone out and safe", "Loosen the wheel nuts", "Jack at the jacking point", "Remove the wheel", "Fit the spare and hand-tighten", "Lower the car and tighten evenly"],
      explain: "Then get the puncture repaired.", src: P(74, "Self-test answer 27") },
    { id: "p2", type: "order", concept: "roadside",
      prompt: "Checking a tyre's pressure — in order.",
      steps: ["Find the right pressure in the handbook or door frame", "Remove the dust cap", "Fit the gauge firmly on the valve", "Read and adjust", "Refit the cap — and check the spare"],
      explain: "Check when the tyres are cold.", src: P(74, "Self-test answer 28") },
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
  blurb: "Questions pupils ask about their cars",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "lights", visual: "dash-warnings",
      scene: "🛢️ Mid-lesson, the red oil light comes on.",
      prompt: "What do you tell the pupil?",
      options: ["Keep going to the next garage", "Stop safely, switch off the engine, check and top up the oil", "Ignore it if the engine sounds fine", "Drive slower"], answer: 1,
      explain: "Oil is at a critical level.", src: P(73, "Self-test answer 18") },
    { id: "s2", type: "choice", label: "Scenario", concept: "lights",
      scene: "🔴 The red brake light stays on as your pupil moves off.",
      prompt: "First check?",
      options: ["The fuel", "Is the handbrake still on?", "The radio", "The tyres"], answer: 1,
      explain: "If not, there may be a fault or low fluid — don't drive on.", src: P(73, "Self-test answer 12") },
    { id: "s3", type: "choice", label: "Scenario", concept: "towing",
      scene: "🔋 A pupil wants to jump-start their new car from a neighbour's.",
      prompt: "What do you advise?",
      options: ["Go ahead, any leads", "Check the handbook first — not all cars allow it and electronics can be damaged", "Use the mains", "Push-start it"], answer: 1,
      explain: "Caution is required.", src: P(75, "Self-test answer 30") },
    { id: "s4", type: "choice", label: "Scenario", concept: "safety",
      scene: "🎒 A pupil leaves a heavy bag on the front passenger seat.",
      prompt: "Why move it?",
      options: ["It's untidy", "In a crash an airbag or sudden stop can throw it — put it in the boot", "It's illegal", "It blocks the mirror"], answer: 1,
      explain: "Never carry items on passenger seats.", src: P(75, "Self-test answer 38") },
    { id: "s5", type: "choice", label: "Scenario", concept: "engine",
      scene: "♨️ The car has overheated and a pupil reaches for the radiator cap.",
      prompt: "What do you say?",
      options: ["Go ahead, carefully", "Stop — never open it hot; let it cool first", "Pour cold water on it", "Rev the engine"], answer: 1,
      explain: "Risk of scalding.", src: P(76, "Self-test answer 43") },
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
  blurb: "A puncture on a lesson",
  xpPer: 10,
  situation: "🛞 A red tyre light comes on during a lesson on a country road.",
  items: [
    { id: "w1", type: "choice", step: "The light", concept: "lights", prompt: "It means…",
      options: ["Tyre pressure is low", "Low fuel", "Main beam on", "Seat belt off"], answer: 0,
      explain: "Reduce speed gradually and stop.", src: P(74, "Self-test answer 25") },
    { id: "w2", type: "choice", step: "Stopping", concept: "roadside", prompt: "You stop somewhere safe and…",
      options: ["Everyone gets out and stands well away from the road", "The pupil stays in the car", "You change it on the bend", "You drive on"], answer: 0,
      explain: "Safety first.", src: P(74, "Self-test answer 27") },
    { id: "w3", type: "choice", step: "The tools", concept: "roadside", prompt: "The jack and brace are usually…",
      options: ["In the boot, under the floor", "Under the bonnet", "In the glovebox", "Under a seat"], answer: 0,
      explain: "Check the handbook.", src: P(74, "Self-test answer 26") },
    { id: "w4", type: "choice", step: "The job", concept: "roadside", prompt: "Before jacking, you…",
      options: ["Loosen the wheel nuts", "Remove the nuts", "Let the handbrake off", "Start the engine"], answer: 0,
      explain: "Loosen — don't remove.", src: P(74, "Self-test answer 27") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — built from the printed self-test answers (pp.73–76).
   --------------------------------------------------------------------------- */
const R = (n, q, page, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(page, `Self-test Q${q}; answer p.${page}`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, 1, 73, "The engine doesn't start. Possible causes include", ["low washer fluid", "an electrical problem, fuel supply or a blocked fuel filter", "a flat spare", "worn wipers"], 1, "starting"),
    R(2, 3, 73, "Electric windows won't close. First", ["check nothing is blocking them, and the fuses", "remove the door", "call the gardaí", "disconnect the battery"], 0, "electrics"),
    R(3, 11, 73, "The ABS light flashes while driving. This means", ["no brakes at all", "ABS may not work, but normal braking remains", "the handbrake is on", "low fuel"], 1, "lights", "dash-warnings"),
    R(4, 13, 73, "The red coolant light comes on. You should", ["drive faster to cool it", "stop at the next opportunity and let it cool and check", "ignore it", "open the radiator straight away"], 1, "lights"),
    R(5, 15, 73, "The red seat-belt light comes on. Likely cause", ["a passenger isn't belted, something is on the seat, or a door isn't closed", "low oil", "main beam on", "a puncture"], 0, "lights"),
    R(6, 19, 73, "Hazard warning lights should be used", ["to say thanks", "only when stopped or where there's danger", "when parking on double lines", "in fog instead of fog lights"], 1, "roadside"),
    R(7, 24, 74, "The key is hard to turn in the ignition. Try", ["forcing it", "turning the steering wheel slightly", "a different key", "spraying oil"], 1, "starting"),
    R(8, 27, 74, "When changing a wheel, you should never", ["loosen the nuts first", "get under a jacked vehicle", "use the jacking points", "apply the handbrake"], 1, "roadside", "wheel-change"),
    R(9, 29, 74, "A run-flat tyre is designed to", ["be driven indefinitely", "get you to the next service station, with caution and reduced speed", "never puncture", "replace the spare forever"], 1, "roadside"),
    R(10, 31, 75, "When pushing your car by hand, beware of", ["the radio coming on", "locking yourself out — leave a door ajar", "the airbag", "the handbrake"], 1, "towing"),
    R(11, 33, 75, "When being towed, make sure", ["the ignition is on", "the engine is running", "the car is in gear", "the lights are off"], 0, "towing"),
    R(12, 37, 75, "A doctor says you shouldn't wear a belt. The exemption", ["can be verbal", "must be in writing and shown to the gardaí on request", "isn't possible", "lasts for life"], 1, "safety"),
    R(13, 39, 76, "With airbags, occupants should", ["sit close to the wheel", "sit correctly, back flat to the seat", "put bags on the front seat", "lean forward"], 1, "safety"),
    R(14, 43, 76, "The radiator cap should", ["never be opened while hot", "be opened when hot to check", "be left off", "be opened while driving"], 0, "engine"),
    R(15, 45, 76, "A petrol car with a catalytic converter must use", ["leaded petrol", "unleaded petrol", "diesel", "any fuel"], 1, "engine"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "lights",
      prompt: "A blue dashboard light means…", options: ["Low coolant", "Main beam is on", "Fog lights on", "Cruise control"], answer: 1,
      explain: "Dip if not required.", src: P(73, "Self-test answer 16") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "roadside",
      prompt: "Which picture shows the wheel-change steps?", options: ["wheel-change", "dash-warnings", "head-restraint"], answer: 0,
      names: ["Wheel change", "Dashboard lights", "Head restraint"],
      explain: "Loosen, jack, swap, lower, tighten.", src: P(74, "Self-test answer 27") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "towing",
      statement: "Automatic cars shouldn't be tow-started.", answer: true,
      explain: "As the book notes.", src: P(75, "Self-test answer 33") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "lights",
      scene: "⛽ The yellow fuel light comes on 20 km from home.",
      prompt: "What do you do?", options: ["Panic and stop", "Fill up at the next opportunity", "Ignore it for a week", "Switch off the engine"], answer: 1,
      explain: "You're on reserve.", src: P(73, "Self-test answer 14") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "safety",
      prompt: "Match it.", pairs: [["Head restraint", "Prevents whiplash"], ["Airbag", "Inflates in about 0.1 s"], ["Seat belt", "Compulsory where fitted"]],
      explain: "Passive safety features.", src: P(75, "Self-test answers 37–40") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "roadside",
      prompt: "Wheel change:", steps: ["Loosen nuts", "Jack up", "Swap the wheel", "Lower and tighten"],
      explain: "Handbrake on first.", src: P(74, "Self-test answer 27") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "engine",
      scene: "🚗 A pupil is buying a used car privately.",
      prompt: "What should they check?", options: ["Only the colour", "The VIN, chassis and body numbers match the logbook", "The radio works", "The mileage sticker"], answer: 1,
      explain: "So the vehicle is legal to buy.", src: P(75, "Self-test answer 36") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "lights",
      prompt: "ABS light on: the normal brakes…", options: ["Stop working", "Still work, but beware of skidding", "Get stronger", "Lock"], answer: 1,
      explain: "Have it checked.", src: P(73, "Self-test answer 11") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "safety",
      prompt: "A pupil removed the head restraint to see better. Which picture explains why that's wrong?", options: ["head-restraint", "wheel-change"], answer: 0,
      names: ["Head restraint", "Wheel change"],
      explain: "It protects against whiplash.", src: P(76, "Self-test answer 40") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "roadside",
      prompt: "Hazard lights work…", options: ["Only with the engine running", "Without the ignition on", "Only on motorways", "Only at night"], answer: 1,
      explain: "Use them only when stopped or for danger.", src: P(73, "Self-test answer 19") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "4.10",
  number: "4.10",
  title: "Mechanics Self-Test",
  pages: [70, 77],
  intro: "The book's 45 self-test questions on basic mechanical principles: starting problems, electrics, warning lights, roadside jobs, towing, safety features and the engine bay.",
  objectives: [
    "Answer common questions on basic mechanical principles",
    "Know what each warning light means and what to do",
    "Explain everyday roadside tasks safely",
  ],
  objectivesSrc: P(70, "Self-test questions"),
  mcqLink: { sectionId: "adi.sec.mechanics", label: "Basic Mechanics & Vehicle Maintenance" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...fixes, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "light-reader", icon: "🚨", label: "Light Reader", rule: { activity: "fixes", min: 100 } },
    { id: "self-test-specialist", icon: "🏆", label: "Self-Test Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
