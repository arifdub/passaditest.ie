/*
  ===========================================================================
  BOOK 3 · UNIT 3.3 — ASPECTS OF THE ROAD TRAFFIC ACT AND DRIVING LAW

  Source: "Theory Resource Workbook 3 of 4" (Driver Education Supplies),
  book pages 17–26, with the retention-test answers on page 93 (55
  questions). This unit has no post test.

  Omitted retention questions (answer key unsafe):
  - Q10 (horn in a built-up area, keyed "between 11.00 pm and 7.30 am
    unless there is danger"): the unit gives 23.30 to 07.00.
  - Q18 (hazard lights for a prolonged period, keyed "loading goods on
    single yellow lines"): contradicts the Rules of the Road; "on the hard
    shoulder if your vehicle breaks down" is the safe answer.
  - Q34 (the fog-lamp rule refers to "rear fog lamps only"): the unit
    applies it to front and rear fog lights alike.
  - Q45 (producing documents to a garda, keyed "a station of your choice
    the next day"): not in the unit, and the keyed time looks wrong.
  - Q51 (the parking-meter time limit, keyed "2 hours or more"): not in
    the unit.

  Several kept questions go beyond the text (e.g. Q7, Q12, Q20, Q27, Q31,
  Q35, Q40, Q41, Q52, Q55) but have only one defensible option. Fines and
  limits change: the unit itself points to the Rules of the Road for the
  latest figures.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 3, unit: "3.3", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "law": {
    title: "Know the law",
    text: "An ADI must know the Road Traffic Acts of 1961, 1963 and later, their amendments, and the procedures for learner and full licence holders — and keep up with changes. Membership of an instructor association helps; in doubt, ask the RSA or your supervising examiner. Driving under the influence of drink or drugs is an offence under the Road Traffic Act.",
    src: P(17, "Unit introduction; Summaries"),
  },
  "seatbelts": {
    title: "Seatbelts",
    text: "Where fitted, safety belts must be worn. The only exceptions: people with a disabled person's belt or a doctor's medical certificate; driving instructors or testers during a lesson or test; gardaí or defence forces on duty. Seatbelts are for the safety of the driver and passengers. The driver must make sure passengers under 17 wear a belt or the right child restraint.",
    src: P(17, "A driver's responsibility"),
  },
  "drink": {
    title: "Drink and drugs",
    text: "Gardaí may stop any driver suspected of drink or drug driving, or set up checkpoints for breath or saliva tests and impairment tests (asking first about any disability or medical condition). The limits: 50 mg of alcohol per 100 ml of blood for most drivers; 20 mg for learner, novice and professional drivers. Being over brings a fine and disqualification; refusing a sample brings a long automatic disqualification.",
    src: P(18, "Drink driving and drugs; Disqualification periods"),
  },
  "towing": {
    title: "Towing",
    text: "Inspect the tow bar; attach it securely. A breakaway brake means no secondary coupling is needed. Keep the gap between vehicle and trailer to no more than 4.5 metres. Load within the manufacturer's limits, heavier items over the axle. Avoid excessive speed — if the trailer swerves, ease off gently. On a motorway, not in the third lane: overtake in lane 2, then back to lane 1. Don't park a trailer at night facing oncoming traffic unless in a recognised parking area.",
    src: P(18, "Towing"),
  },
  "horn": {
    title: "The horn",
    text: "Every vehicle must have an audible warning device. Use it only to warn other road users of your presence — not while stationary except for safety, and never around animals being led or ridden. It gives you no priority. In a built-up area, not between 23.30 and 07.00 unless there's a traffic emergency.",
    src: P(18, "Vehicle warning instrument"),
  },
  "lights": {
    title: "Lights",
    text: "Fit the regulation lights for your vehicle; extra lights only white to the front and red to the rear (number plate light white). Use headlights when conditions require. Dipped beam in built-up areas, when meeting or following traffic, on lit roads, in fog, snow or heavy rain, at dusk and dawn, and in tunnels. Main beam elsewhere — never towards oncoming traffic. Dazzled? Slow down, look to the nearside verge. Fog lights only when visibility drops to about 100 metres or less. Keep within the range of your dipped headlights.",
    src: P(18, "Vehicle lights; When to use headlights; p.19"),
  },
  "fog": {
    title: "Driving in fog",
    text: "Slow down; never tailgate or follow the lights in front; be able to stop within the distance you can see to be clear. Never accelerate if a vehicle behind is close. Check mirrors early before slowing or turning; on busy roads consider turning left and turning back instead of turning right. At junctions, open the window to stop, look and listen.",
    src: P(19, "Driving in fog"),
  },
  "overtaking": {
    title: "Overtaking",
    text: "Only when necessary and safe, as a single manoeuvre, never directly following another overtaking vehicle, never breaking the speed limit. A 'LONG VEHICLE' is at least 13 metres — allow extra room. Never near crossings, where signs or markings prohibit it, approaching junctions, bends, dips, bridges or hill brows, or in poor conditions. Being overtaken: hold a steady, straight course and don't speed up. Overtake on the left only when the vehicle ahead is turning right, you're turning left a short way ahead, or the left lane is moving faster in a queue.",
    src: P(20, "Overtaking"),
  },
  "tyres": {
    title: "Tyres",
    text: "The driver, not necessarily the owner, is responsible for the vehicle's condition — including tread of at least 1.6 mm for cars (1 mm for motorcycles and vintage vehicles). Check pressures — including the spare — when cold, using the figures on the driver's door frame. Look for cuts, cracks and bulges. Never mix radial and cross-ply on an axle. A space-saver spare is only to finish the journey, at the speed stamped on it (often 60 km/h). Tyre mobility kits seal tread punctures only.",
    src: P(20, "Vehicle tyres; p.21"),
  },
  "points": {
    title: "Penalty points and disqualification",
    text: "A fully licensed driver who reaches 12 points within 36 months is banned for 6 months; a lower threshold applies to learners and to drivers for 2 years after passing the test. Some offences — drink driving, causing death by dangerous driving, refusing a sample — bring automatic disqualification.",
    src: P(18, "Disqualification periods; Retention Q31, Q39–Q42"),
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
    "20 mg for learner, novice and professional drivers; 50 mg for others",
    "Horn: warning only — not 23:30–07:00 in built-up areas",
    "12 points in 36 months = a 6-month ban",
  ],
  cards: [
    {
      icon: "⚖️",
      kicker: "The law",
      title: "An ADI must know it",
      body: [
        "Know the Road Traffic Acts of 1961, 1963 and later, their amendments, and the procedures for learner and full licence holders — and keep up with changes.",
        "An instructor association helps. In doubt, contact the RSA or your supervising examiner.",
      ],
      concept: "law",
      src: P(17, "Unit introduction"),
    },
    {
      icon: "🔗",
      kicker: "Seatbelts",
      title: "Belt up — with few exceptions",
      visual: "seatbelt-exempt",
      ask: {
        prompt: "Who must make sure a 15-year-old passenger wears a belt?",
        options: ["The passenger", "The driver", "The parent, wherever they are"],
        answer: 1,
      },
      list: [
        "A medical certificate or a disabled person's belt",
        "Instructors and testers during a lesson or test",
        "Gardaí and defence forces on duty",
        "Under 17: the driver is responsible",
      ],
      concept: "seatbelts",
      src: P(17, "A driver's responsibility"),
    },
    {
      icon: "🍺",
      kicker: "Drink and drugs",
      title: "If you drink, don't drive",
      visual: "bac-limits",
      list: [
        "Gardaí may stop drivers or run checkpoints — breath, saliva or impairment tests",
        "50 mg per 100 ml of blood for most drivers",
        "20 mg for learner, novice and professional drivers",
        "Over the limit: a fine and disqualification",
      ],
      concept: "drink",
      src: P(18, "Drink driving and drugs; Disqualification periods"),
    },
    {
      icon: "🚚",
      kicker: "Towing",
      title: "Check, couple, load evenly",
      visual: "towing-rules",
      list: [
        "Inspect the tow bar; attach it securely",
        "No more than 4.5 m between vehicle and trailer",
        "Heavier items over the axle; within the maker's limits",
        "Trailer swerving? Ease off gently",
        "Motorway: never the third lane — overtake in lane 2",
      ],
      concept: "towing",
      src: P(18, "Towing"),
    },
    {
      icon: "📯",
      kicker: "The horn",
      title: "A warning — not a right of way",
      visual: "horn-hours",
      list: [
        "Only to warn others of your presence",
        "Not when stationary, except for safety",
        "Never near led or ridden animals",
        "Built-up areas: not 23:30–07:00 unless an emergency",
      ],
      concept: "horn",
      src: P(18, "Vehicle warning instrument"),
    },
    {
      icon: "💡",
      kicker: "Lights",
      title: "Dipped, main beam, fog",
      visual: "dipped-main",
      list: [
        "Extra lights: white to the front, red to the rear only",
        "Dipped in town, meeting or following traffic, at dusk, in tunnels",
        "Main beam elsewhere — never at oncoming traffic",
        "Fog lights only when visibility is about 100 m or less",
        "Drive within the range of your dipped headlights",
      ],
      concept: "lights",
      src: P(18, "Vehicle lights; p.19"),
    },
    {
      icon: "🌫️",
      kicker: "Fog",
      title: "Slow, back, listen",
      visual: "fog-distance",
      list: [
        "Never tailgate or follow the lights ahead",
        "Stop within the distance you can see to be clear",
        "Don't speed up if someone is close behind",
        "At junctions, open the window: stop, look and listen",
      ],
      concept: "fog",
      src: P(19, "Driving in fog"),
    },
    {
      icon: "🏁",
      kicker: "Overtaking",
      title: "Necessary, safe, single",
      visual: "overtake-left",
      list: [
        "A single manoeuvre — never follow another overtaking vehicle",
        "LONG VEHICLE: at least 13 m — allow extra room",
        "Never near crossings, junctions, bends, dips, bridges or hill brows",
        "Being overtaken: steady course, don't speed up",
        "Left only: car ahead turning right, you turning left, faster left lane in a queue",
      ],
      concept: "overtaking",
      src: P(20, "Overtaking"),
    },
    {
      icon: "🛞",
      kicker: "Tyres",
      title: "The driver is responsible",
      visuals: ["tyre-tread", "space-saver"],
      list: [
        "At least 1.6 mm for cars; 1 mm for motorcycles and vintage vehicles",
        "Pressures cold — the figures are on the driver's door frame",
        "Never mix radial and cross-ply on an axle",
        "Space-saver: finish the journey only, at the stamped speed (often 60)",
      ],
      concept: "tyres",
      src: P(20, "Vehicle tyres; p.21"),
    },
    {
      icon: "🚫",
      kicker: "Points and bans",
      title: "12 points, 6 months",
      list: [
        "12 points in 36 months: a 6-month disqualification",
        "A lower threshold for learners and newly qualified drivers",
        "Automatic bans: drink driving, death by dangerous driving, refusing a sample",
      ],
      concept: "points",
      src: P(18, "Disqualification; Retention Q31, Q39–Q42"),
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
    { id: "r1", type: "fill", concept: "drink", visual: "bac-limits",
      before: "The limit for learner, novice and professional drivers is", after: "of alcohol per 100 ml of blood.",
      options: ["20 mg", "50 mg", "80 mg", "10 mg"], answer: "20 mg",
      explain: "50 mg for other drivers.", src: P(18, "Disqualification periods") },
    { id: "r2", type: "flash", concept: "seatbelts", visual: "seatbelt-exempt",
      front: "Who's exempt from wearing a seatbelt?",
      back: "Medical certificate or disabled person's belt; instructors and testers during a lesson or test; gardaí and defence forces on duty.", src: P(17, "A driver's responsibility") },
    { id: "r3", type: "fill", concept: "towing", visual: "towing-rules",
      before: "The gap between a towing vehicle and its trailer must be no more than", after: ".",
      options: ["4.5 metres", "2 metres", "10 metres", "1 metre"], answer: "4.5 metres",
      explain: "About 15 feet.", src: P(18, "Towing") },
    { id: "r4", type: "truefalse", concept: "horn",
      statement: "Sounding the horn gives you priority.", answer: false,
      explain: "It only warns others of your presence.", src: P(18, "Vehicle warning instrument") },
    { id: "r5", type: "fill", concept: "lights",
      before: "Use fog lights only when visibility is about", after: "or less.",
      options: ["100 metres", "500 metres", "50 metres", "1 kilometre"], answer: "100 metres",
      explain: "And turn them off at all other times.", src: P(19, "The use of main beam lights") },
    { id: "r6", type: "flash", concept: "overtaking", visual: "overtake-left",
      front: "When may you overtake on the left?",
      back: "When the vehicle ahead is turning right; when you're turning left a short way ahead; when the left lane is moving faster in a queue.", src: P(20, "You may only overtake on the left when") },
    { id: "r7", type: "fill", concept: "overtaking",
      before: "A 'LONG VEHICLE' sign means the vehicle is at least", after: "long.",
      options: ["13 metres", "8 metres", "20 metres", "5 metres"], answer: "13 metres",
      explain: "You'll need extra road to pass it safely.", src: P(20, "Overtaking procedure") },
    { id: "r8", type: "flash", concept: "overtaking",
      front: "What do you do when someone overtakes you?",
      back: "Keep a steady, straight course on the left, don't speed up, and be ready in case they pull back in front.", src: P(20, "What to do when somebody overtakes you") },
    { id: "r9", type: "truefalse", concept: "tyres",
      statement: "The registered owner, not the driver, is responsible for illegal tyres.", answer: false,
      explain: "The driver is responsible and will be fined.", src: P(20, "Vehicle tyres") },
    { id: "r10", type: "flash", concept: "tyres", visual: "space-saver",
      front: "How should a space-saver spare be used?",
      back: "Only to complete the journey, no faster than the speed stamped on it — generally 60 km/h.", src: P(21, "Temporary use spare tyres") },
    { id: "r11", type: "fill", concept: "points",
      before: "12 penalty points within 36 months brings a", after: "disqualification.",
      options: ["6-month", "1-month", "2-year", "12-month"], answer: "6-month",
      explain: "For a fully licensed driver.", src: P(24, "Retention Q31, Q39") },
  ],
};

/* ---------------------------------------------------------------------------
   3. ON THE RIGHT SIDE OF THE LAW — recognition.
   --------------------------------------------------------------------------- */
const law = {
  id: "law",
  kind: "items",
  mode: "matching",
  title: "Legal or Not?",
  blurb: "Spot it, sort it — the rules drivers break",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "drink",
      prompt: "Which picture shows the drink-driving limits?",
      options: ["bac-limits", "horn-hours", "seatbelt-exempt"], answer: 0,
      names: ["Alcohol limits", "Horn hours", "Seatbelt exemptions"],
      explain: "20 mg for learner, novice and professional drivers; 50 mg for others.", src: P(18, "Disqualification periods") },
    { id: "k2", type: "picture", label: "Spot it", concept: "overtaking",
      prompt: "Which picture shows when you may pass on the left?",
      options: ["overtake-left", "towing-rules"], answer: 0,
      names: ["Overtaking on the left", "Towing"],
      explain: "Three situations only.", src: P(20, "You may only overtake on the left") },
    {
      id: "k3", type: "sort", concept: "horn",
      prompt: "The horn — allowed or not?",
      categories: [
        { id: "ok", label: "Allowed" },
        { id: "no", label: "Not allowed" },
      ],
      cards: [
        { text: "Warning a pedestrian stepping out", cat: "ok" },
        { text: "A traffic emergency at midnight", cat: "ok" },
        { text: "Hurrying a slow driver", cat: "no" },
        { text: "Passing a horse and rider", cat: "no" },
        { text: "Waiting outside a house at 06:00", cat: "no" },
      ],
      explain: "Only to warn of your presence — never to rebuke, near animals, or at night in town.", src: P(18, "Vehicle warning instrument") },
    {
      id: "k4", type: "sort", concept: "overtaking",
      prompt: "Overtaking — OK or never?",
      categories: [
        { id: "ok", label: "OK if safe" },
        { id: "no", label: "Never" },
      ],
      cards: [
        { text: "Clear straight road, within the limit", cat: "ok" },
        { text: "Left lane moving faster in a queue", cat: "ok" },
        { text: "Approaching a zebra crossing", cat: "no" },
        { text: "Brow of a hill", cat: "no" },
        { text: "Following another overtaking car", cat: "no" },
      ],
      explain: "Only when necessary and safe — never where you can't see.", src: P(20, "Never overtake when") },
    { id: "k5", type: "picture", label: "Spot it", concept: "towing",
      prompt: "Which picture shows the rules for towing?",
      options: ["towing-rules", "space-saver", "overtake-left"], answer: 0,
      names: ["Towing", "Space-saver spare", "Overtaking on the left"],
      explain: "Secure coupling, 4.5 m maximum gap, load over the axle.", src: P(18, "Towing") },
    { id: "k6", type: "picture", label: "Spot it", concept: "horn",
      prompt: "Which picture shows when the horn is banned in built-up areas?",
      options: ["horn-hours", "bac-limits"], answer: 0,
      names: ["23:30 to 07:00", "Alcohol limits"],
      explain: "Unless there's a traffic emergency.", src: P(18, "Vehicle warning instrument") },
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
  blurb: "Numbers to know",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "drink",
      prompt: "Match the number to the rule.",
      pairs: [
        ["20 mg", "Learner, novice, professional limit"],
        ["50 mg", "Other drivers' limit"],
        ["4.5 m", "Maximum towing gap"],
        ["13 m", "A 'LONG VEHICLE'"],
        ["1.6 mm", "Minimum car tread"],
      ],
      explain: "Key figures to teach pupils.", src: P(18, "Disqualification; Towing; p.20") },
    {
      id: "m2", type: "match", concept: "lights",
      prompt: "Match the light to when it's used.",
      pairs: [
        ["Dipped beam", "Meeting or following traffic"],
        ["Main beam", "Unlit roads, nobody ahead"],
        ["Fog lights", "Visibility about 100 m or less"],
        ["Anti-dazzle mirror", "Glare from behind"],
      ],
      explain: "Light up the road without dazzling others.", src: P(19, "Dipped and main beam") },
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
  blurb: "Overtaking and a puncture",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "overtaking",
      prompt: "Overtaking — in order.",
      steps: ["Check the road ahead is clear", "Check mirrors and blind spots", "Signal in good time", "Overtake with minimum delay", "Mirror, signal, move back in gradually"],
      explain: "Without cutting across the vehicle you've passed — and within the speed limit.", src: P(20, "Overtaking procedure") },
    { id: "p2", type: "order", concept: "tyres", visual: "space-saver",
      prompt: "A puncture, using a tyre mobility kit — in order.",
      steps: ["Park at the side, away from moving traffic", "Set the parking brake", "Check the damage is in the tread", "Seal and inflate — leave any nail in", "Drive on gently and get the tyre checked"],
      explain: "Read the owner's manual first; don't run the compressor over 10 minutes.", src: P(21, "Notes on the safe use of tyre mobility kits") },
    { id: "p3", type: "order", concept: "fog",
      prompt: "Emerging at a junction in thick fog — in order.",
      steps: ["Stop at the line", "Open the window", "Look and listen", "Emerge when sure it's clear"],
      explain: "Use fog lights, wipers and demisters too.", src: P(19, "Driving in fog") },
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
  blurb: "The law in practice",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "towing", visual: "towing-rules",
      scene: "🚐 Your pupil's family tows a caravan on a three-lane motorway.",
      prompt: "Which lane must they not use?",
      options: ["The left lane", "The extreme right-hand lane", "Any lane at night", "The middle lane"], answer: 1,
      explain: "Overtake in lane 2 only, then return to lane 1.", src: P(22, "Retention Q6 (answer c, p.93)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "lights",
      scene: "🌙 Dazzled by oncoming headlights on a dark road.",
      prompt: "What should your pupil do?",
      options: ["Flash back", "Slow down, stop if necessary, look to the nearside verge", "Close their eyes briefly", "Switch to main beam"], answer: 1,
      explain: "Watch for pedestrians or cyclists on your side.", src: P(19, "The use of main beam lights") },
    { id: "s3", type: "choice", label: "Scenario", concept: "horn",
      scene: "🐎 Riders on horses are ahead on a narrow lane.",
      prompt: "How do you warn them you're there?",
      options: ["A short beep", "Don't use the horn — slow right down and pass wide and quietly", "Rev the engine", "Flash the headlights"], answer: 1,
      explain: "Never sound the horn around animals being led or ridden.", src: P(18, "Vehicle warning instrument") },
    { id: "s4", type: "choice", label: "Scenario", concept: "overtaking",
      scene: "🚛 A lorry with a 'LONG VEHICLE' sign is ahead on a two-lane road.",
      prompt: "What's different about overtaking it?",
      options: ["Nothing", "It's at least 13 m long — you need much more clear road", "You may exceed the limit", "Overtake on the left"], answer: 1,
      explain: "Make sure you can get back without forcing anyone to move.", src: P(20, "Overtaking procedure") },
    { id: "s5", type: "choice", label: "Scenario", concept: "drink",
      scene: "🍷 Your pupil, on a learner permit, says one glass of wine is 'well under the limit'.",
      prompt: "What do you tell them?",
      options: ["One is fine", "Their limit is just 20 mg — and the safe rule is don't drink and drive", "Have coffee after", "Only if they eat"], answer: 1,
      explain: "Learner, novice and professional drivers have the lower limit.", src: P(18, "Disqualification periods") },
    { id: "s6", type: "choice", label: "Scenario", concept: "tyres", visual: "space-saver",
      scene: "🛞 After a puncture your pupil fits the skinny spare and plans a 200 km motorway run.",
      prompt: "Your advice?",
      options: ["Fine at 120 km/h", "Only finish the journey, at the stamped speed (often 60) — get the tyre fixed", "Inflate it more", "Swap it to the rear"], answer: 1,
      explain: "Space-savers are for temporary use only.", src: P(21, "Temporary use spare tyres") },
    { id: "s7", type: "choice", label: "Scenario", concept: "seatbelts",
      scene: "🧒 A 14-year-old in the back of your pupil's car hasn't buckled up.",
      prompt: "Whose responsibility is it?",
      options: ["The child's", "The driver's", "Nobody's — it's the back seat", "The car owner's"], answer: 1,
      explain: "The driver must ensure passengers under 17 wear a belt or restraint.", src: P(22, "Retention Q8 (answer a, p.93)") },
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
  blurb: "A night drive in fog",
  xpPer: 10,
  situation: "🌫️ An evening lesson: lit streets, then a country road, then thick fog.",
  items: [
    { id: "w1", type: "choice", step: "In town", concept: "lights", prompt: "Well-lit streets at night. Which lights?",
      options: ["Sidelights only", "Dipped headlights", "Main beam", "Fog lights"], answer: 1,
      explain: "Good practice even where street lighting is good.", src: P(19, "The use of dipped headlights") },
    { id: "w2", type: "choice", step: "Country road", concept: "lights", prompt: "An unlit road, a car approaching.",
      options: ["Keep main beam", "Dip the headlights", "Switch off", "Fog lights"], answer: 1,
      explain: "Main beam endangers the oncoming driver.", src: P(19, "The use of main beam lights") },
    { id: "w3", type: "choice", step: "Fog", concept: "fog", visual: "fog-distance", prompt: "Fog descends. Visibility about 80 m. Fog lights?",
      options: ["Not yet", "Yes — visibility is under about 100 m", "Only rear", "Main beam instead"], answer: 1,
      explain: "Turn them off again when it clears.", src: P(19, "Main beam lights — fog") },
    { id: "w4", type: "choice", step: "Following", concept: "fog", prompt: "Tail lights ahead. Your pupil should…",
      options: ["Follow them closely for guidance", "Drop back — never follow the lights in front", "Overtake", "Use main beam"], answer: 1,
      explain: "Stop within the distance you can see to be clear.", src: P(19, "Driving in fog") },
    { id: "w5", type: "choice", step: "A right turn", concept: "fog", prompt: "A right turn off a busy road in fog.",
      options: ["Turn right as normal", "Consider turning left, then turning back", "Stop in the road", "Sound the horn"], answer: 1,
      explain: "Check mirrors well in advance either way.", src: P(19, "Driving in fog") },
    { id: "w6", type: "choice", step: "Parking", concept: "lights", prompt: "Parking for the night on an unlit road.",
      options: ["Headlights on", "Sidelights / parking lights on", "No lights", "Hazard lights"], answer: 1,
      explain: "Don't leave headlights on when parked at night.", src: P(25, "Retention Q46 (answer d, p.93); Q1") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 93. Q10, Q18, Q34, Q45 and Q51 are
   omitted (see header).
   --------------------------------------------------------------------------- */
const page = n => (n <= 13 ? 22 : n <= 25 ? 23 : n <= 37 ? 24 : n <= 50 ? 25 : 26);
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
    R(1, "The Rules of the Road advise drivers not to leave their headlights on when", ["parking your vehicle", "there are streetlights", "stopped at the side of the road momentarily at night", "parked at night"], 3, "lights"),
    R(2, "Rear fog lamps must not be used unless visibility is reduced to", ["10 metres or less", "less than your stopping distance", "100 metres or less", "185 metres or more"], 2, "lights"),
    R(3, "Some vehicles are prohibited on motorways, such as", ["vehicles not capable of reaching and maintaining 50 km/h", "a truck with a trailer", "motorcycles over 100 cc", "double-decker buses"], 0, "law"),
    R(4, "Setting down or picking up passengers on a motorway is", ["only permissible on slip roads", "not permissible", "only permissible on the hard shoulder", "only permitted in daylight"], 1, "law"),
    R(5, "Reversing is only permissible in certain circumstances; a driver must not", ["reverse into a road on the right except in a van or loaded estate", "reverse into a road on the right for longer than on the left", "reverse from a side road onto a main road", "reverse without wearing a seatbelt"], 2, "law"),
    R(6, "If towing a caravan on a three- or four-lane motorway you must", ["drive in the left lane and not overtake", "drive only ever in the left lane", "not drive in the extreme right-hand lane", "not drive in the left-hand lane"], 2, "towing", "towing-rules"),
    R(7, "The maximum motorway speed limit for single-deck buses and coaches (without standing passengers) is", ["120 km/h", "80 km/h", "100 km/h", "65 km/h"], 2, "law"),
    R(8, "It is a driver's responsibility to make sure child passengers wear a seat belt if they are under", ["17 years old", "16 years old", "18 years old", "14 years old"], 0, "seatbelts", "seatbelt-exempt"),
    R(9, "The horn must only be used", ["on roads other than a motorway", "to tell other drivers they are obstructing you", "when the vehicle is moving", "to warn other road users of your presence"], 3, "horn", "horn-hours"),
    R(11, "When purchasing tyres, the recommended type is", ["stretched rubber", "radial", "cross ply", "heavy plastic"], 1, "tyres"),
    R(12, "It is an offence to have the engine running in your vehicle if you", ["have unlocked the doors or left a window open", "are parked at the side of the road", "are investigating a problem with the bonnet open", "have left the vehicle unattended"], 3, "law"),
    R(13, "The Rules of the Road state you may use hazard warning lights when", ["travelling ahead, to confuse the driver behind", "parking on the right-hand side of a road", "you notice traffic slowing down sharply ahead", "letting passengers out on the left"], 2, "lights"),
    R(14, "A person giving driving tuition for reward should be", ["a qualified ADI", "an impatient and intolerant ADI", "good looking, talkative and charming", "under 5 feet 8 inches if teaching in a small car"], 0, "law"),
    R(15, "The legal limit for alcohol in the blood for fully licensed drivers is", ["40 mg per 100 ml of blood", "108 micrograms per 100 ml of urine", "50 mg of alcohol per 100 ml of blood", "35 micrograms per 100 ml of breath"], 2, "drink", "bac-limits"),
    R(16, "When may you stop within the limits (solid white lines) of a pedestrian crossing?", ["under no circumstance", "only in circumstances beyond your control or for traffic reasons", "only to let a pedestrian cross in front", "if pedestrians are not crossing"], 1, "law"),
    R(17, "May you use a handheld mobile telephone whilst driving?", ["no — you would be prosecuted", "no — it could interfere with the electronics", "no — the reception could be poor", "yes, legally"], 0, "law"),
    R(19, "The driver of a vehicle with defective taillights is liable for prosecution under the", ["construction and use regulations", "road vehicle lighting regulations", "highways and byways act", "Motor Vehicles (Driving Licences) Regulations"], 1, "lights"),
    R(20, "A driver could be prosecuted under registration and licensing regulations for", ["minding a vehicle while not the legal owner", "not having the rear number plate lit when driving at night", "keeping an uninsured vehicle off the public road", "displaying a reflective number plate"], 1, "lights"),
    R(21, "Driving under the influence of drink or drugs is an offence under the", ["motor vehicle regulation act", "highways and byways act", "road traffic and vehicle regulation act", "Road Traffic Act"], 3, "drink"),
    R(22, "Temporary 'free-standing' traffic lights at road works", ["have no legal standing", "must be complied with", "need only be obeyed if there's oncoming traffic", "need not be obeyed on bank holidays or weekends"], 1, "law"),
    R(23, "A visitor to this country is permitted to drive if they hold", ["a signed learner permit issued outside Ireland", "an invalid licence issued in Ireland", "a full licence issued outside Ireland or an international driving permit, for a limited period", "only in daylight for one year"], 2, "law"),
    R(24, "On a change of name or address, a driving licence holder must", ["inform the Gardaí", "inform and return the licence to Driver Licensing with the details", "inform Driver Licensing when the licence expires", "advise Driver Licensing when the motor tax is due"], 1, "law"),
    R(25, "Driving while unfit through use of a prescribed medicine is", ["likely to lead to a prosecution", "not an offence if you asked your doctor", "worth a reprimand only if caught", "unwise, but not illegal"], 0, "drink"),
    R(26, "A person who sells a second-hand vehicle", ["allows the buyer to change the ownership forms", "is responsible for informing vehicle registration of the change of ownership", "need not change it until the tax is renewed", "notifies the local Garda station"], 1, "law"),
    R(27, "If an accident involves no injury and only slight vehicle damage, must the Gardaí be called?", ["yes", "by the injured person, not the driver", "leave the car where it is and wait for the Gardaí", "no, if only material damage and both parties agree to settle, having taken all details"], 3, "law"),
    R(28, "Your vehicle fails its NCT. You are legally entitled to drive it", ["after its NCT certificate expires", "until your insurance runs out", "to a pre-arranged appointment for repair and re-test", "until the tax expires"], 2, "law"),
    R(29, "Where would you most quickly find the tyre pressures at a garage forecourt?", ["in the handbook at home", "on the tyre itself", "in the boot", "on the inside of the driver's door or the handbook in the car"], 3, "tyres"),
    R(30, "The legal limit for alcohol in the blood for professional and learner drivers is", ["50 mg per 100 ml of blood", "20 mg per 100 ml of blood", "80 mg per 100 ml of blood", "10 mg per 100 ml of blood"], 1, "drink", "bac-limits"),
    R(31, "A fully licensed driver who receives 12 points in 36 months will be banned for", ["12 months", "6 months", "3 months", "1 month"], 1, "points"),
    R(32, "Motorways may not be used by", ["learner permit holders", "vehicles towing trailers", "PSVs", "learners without a supervisor beside them"], 0, "law"),
    R(33, "It is an offence for a driver on a motorway to", ["drive at less than 120 km/h in the right-hand lane", "stop on the hard shoulder except in an emergency", "stop on a slip road because of a queue", "stop at any time on the carriageway"], 1, "law"),
    R(35, "An instructor whose pupil commits an offence caught on a Garda camera", ["is required by law to provide the pupil's name", "receives the penalty points", "need only notify the pupil", "is not required to provide the pupil's name"], 0, "law"),
    R(36, "Seatbelts are used for the safety of", ["the vehicle", "the driver or passenger", "other road users", "animals in the car"], 1, "seatbelts"),
    R(37, "Driving with uncorrected defective vision is", ["an offence against the person act", "unwise, but not illegal", "a civil offence", "a criminal offence under the Road Traffic Act"], 3, "law"),
    R(38, "Driving a car with all five tyres at the minimum 1.6 mm over 75% of the tyre is", ["legal", "illegal", "legal if at least 1.0 mm over 33%", "legal if at least 1.3 mm over 33%"], 0, "tyres", "tyre-tread"),
    R(39, "The maximum number of penalty points a driver may have over a 36-month period is", ["10", "20", "12", "24"], 2, "points"),
    R(40, "A lower penalty-point threshold for disqualification applies to a learner after passing the test for", ["6 months", "3 months", "1 year", "2 years"], 3, "points"),
    R(41, "When a licence is endorsed or suspended for a period, is it recorded?", ["it is stamped on the licence", "for twenty-two years", "for life", "yes, but removed in time"], 3, "points"),
    R(42, "A person will automatically be disqualified if convicted of", ["careless driving", "drink driving", "providing a specimen", "a criminal offence"], 1, "points"),
    R(43, "A person applying for a licence is liable for prosecution if they", ["don't ask for a copy of the Rules of the Road", "answer a question on the form incorrectly", "knowingly give false information", "fail to supply four photos"], 2, "law"),
    R(44, "The Rules of the Road say driving a vehicle without a horn or audible device is", ["no matter", "not a legal requirement", "an offence — it's required on all road vehicles", "only an offence in cities"], 2, "horn"),
    R(46, "Parking at night on a road with no street lighting is", ["only for bright-coloured cars", "never permissible", "only with front and rear headlamps lit", "permissible with sidelights / parking lights on"], 3, "lights"),
    R(47, "Is it an offence to park within five metres of a junction in clearly marked parking spaces?", ["only during the day", "no — parking is permissible", "permissible if streetlights are on", "unless you leave your headlights on"], 1, "law"),
    R(48, "Medical certificates exempting drivers from wearing a seatbelt may be given", ["on medical grounds", "to taxi drivers and instructors only", "only for vehicles made before June 1964", "to medical personnel"], 0, "seatbelts", "seatbelt-exempt"),
    R(49, "A driver involved in a road traffic accident must, in the first instance,", ["report it to the Gardaí", "stop", "wait twenty days and then report it", "only stop if a passenger is injured"], 1, "law"),
    R(50, "Front fog lamps may", ["only be used in fog and falling snow", "only be mounted two feet from the ground", "not be used without full headlights", "only be used when visibility is seriously reduced"], 3, "lights"),
    R(52, "A driver may face 'automatic disqualification' if prosecuted for", ["road rage", "causing death by dangerous driving", "causing death by careless driving", "four parking fines in three years"], 1, "points"),
    R(53, "Responsibility for securing a load on a vehicle not owned by the driver rests with", ["the Gardaí", "the owner", "the insurers", "the driver of the vehicle"], 3, "towing"),
    R(54, "On approach to a pedestrian crossing marked by zigzag lines you must", ["overtake the moving vehicle nearest the crossing", "not overtake when pedestrians are crossing", "not overtake approaching the crossing", "only overtake if the crossing is clear"], 2, "overtaking"),
    R(55, "Refusing to provide a sample of breath, blood or urine for evidence will", ["attract automatic disqualification of 4 years for a first offence and 6 for a second", "attract 6 years for a first offence and 8 for a second", "attract 4 years for a first offence only", "attract 4 years and a 50% reduction on appeal"], 0, "drink"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "drink",
      prompt: "The blood alcohol limit for most fully licensed drivers is…", options: ["20 mg", "50 mg", "80 mg", "100 mg"], answer: 1,
      explain: "Per 100 ml of blood.", src: P(23, "Retention Q15 (answer c, p.93)") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "seatbelts",
      prompt: "Which picture shows who may be exempt from wearing a seatbelt?", options: ["seatbelt-exempt", "bac-limits", "horn-hours"], answer: 0,
      names: ["Seatbelt exemptions", "Alcohol limits", "Horn hours"],
      explain: "Medical, disabled belt, instructors and testers, gardaí on duty.", src: P(17, "A driver's responsibility") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "lights",
      statement: "You may fit extra lights of any colour to the front of your car.", answer: false,
      explain: "Only white to the front and red to the rear.", src: P(18, "Vehicle lights") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "towing",
      scene: "🚤 A boat trailer starts to snake at speed.",
      prompt: "What should the driver do?", options: ["Brake hard", "Ease off gently to reduce speed", "Accelerate to straighten it", "Steer sharply"], answer: 1,
      explain: "Excessive speed causes swerving — reduce speed gently.", src: P(18, "Towing") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "points",
      prompt: "Match the numbers.", pairs: [["12 points", "A 6-month ban"], ["36 months", "The points period"], ["20 mg", "Learner limit"]],
      explain: "Key figures from the unit.", src: P(24, "Retention Q30, Q31, Q39") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "overtaking",
      prompt: "Overtaking:", steps: ["Road clear ahead", "Mirrors and blind spot", "Signal", "Pass and move back in"],
      explain: "Without cutting in.", src: P(20, "Overtaking procedure") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "overtaking",
      scene: "🚗 A car overtakes your pupil on a busy road.",
      prompt: "Your pupil should…", options: ["Speed up", "Hold a steady, straight course and not speed up", "Move right to block", "Brake hard"], answer: 1,
      explain: "And be ready if it pulls in suddenly.", src: P(20, "What to do when somebody overtakes you") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "law",
      prompt: "Motorways may not be used by…", options: ["Learner permit holders", "Vehicles towing trailers", "PSVs", "Learners without a supervisor"], answer: 0,
      explain: "Learner permit holders are excluded.", src: P(24, "Retention Q32 (answer a, p.93)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "tyres",
      prompt: "Your pupil asks how fast they can drive on the skinny spare. Which picture answers?", options: ["space-saver", "tyre-ply", "towing-rules"], answer: 0,
      names: ["Space-saver spare", "Tyre ply", "Towing"],
      explain: "The speed stamped on it — generally 60 km/h.", src: P(21, "Temporary use spare tyres") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "drink",
      prompt: "Driving while unfit through a prescribed medicine is…", options: ["Likely to lead to a prosecution", "Not an offence if you asked your doctor", "A reprimand only", "Unwise but legal"], answer: 0,
      explain: "Check with your doctor or pharmacist before driving.", src: P(23, "Retention Q25 (answer a, p.93)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "3.3",
  number: "3.3",
  title: "The Road Traffic Acts & the Law",
  pages: [17, 26],
  intro: "Seatbelts, drink and drugs, towing, the horn, lights, fog, overtaking, tyres and penalty points.",
  objectives: [
    "A driver's responsibility",
    "Disqualifications",
    "Vehicle instruments and controls",
  ],
  objectivesSrc: P(17, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...law, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "legal-or-not", icon: "⚖️", label: "Legal or Not?", rule: { activity: "law", min: 100 } },
    { id: "law-specialist", icon: "🏆", label: "Law Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
