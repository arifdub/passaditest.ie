/*
  ===========================================================================
  BOOK 2 · UNIT 2.10 — PEDESTRIANS & CYCLISTS

  Source: "Theory Resource Workbook 2 of 4" (Driver Education Supplies),
  book pages 72–80, with the post-test model answers on page 95 and the
  retention-test answers on page 97 (49 questions).

  Omitted retention questions (answer key unsafe):
  - Q17 (school bus sign, keyed "a black-bordered yellow diamond"): the
    unit doesn't describe the sign, and the keyed shape is doubtful.
  - Q20 (cyclists not riding straight, keyed "an uneven surface"): the
    unit's own list includes crosswinds, so "suffering from wind" is just
    as defensible.
  - Q35 (a person in charge of animals at night): not in the unit; the
    keyed option and the next one differ only by "a reflective armband".

  Several kept questions aren't stated word for word (e.g. Q3, Q12, Q15,
  Q23, Q29, Q31, Q47) but have only one defensible option.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 2, unit: "2.10", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "attitude": {
    title: "Attitude",
    text: "Cyclists, motorcyclists and pedestrians are road users too, and particularly vulnerable. Dealing with them safely is mainly about the pupil's attitude: watch your speed, keep your eyes on the road, take extra care at junctions, roundabouts, in congestion, at night and in wind or rain. A bike on the road is a vehicle with the same rights of way. Care, courtesy and consideration are essential for safe driving.",
    src: P(72, "Unit introduction; Retention Q46"),
  },
  "cyclists": {
    title: "Cyclists and motorcyclists",
    text: "At risk because they can travel faster in slow traffic and aren't anticipated; are less easily seen; are more vulnerable; are unstable, especially at low speed; and are exposed to weather and bad surfaces. Give them at least as much room as a car — picture them lying on their side after a fall, clear of your car. The younger the cyclist, the more you must watch them.",
    src: P(72, "Cyclists and motorcyclists"),
  },
  "wobble": {
    title: "Why cyclists wobble",
    text: "To avoid potholes, drain covers and other hazards; in crosswinds; at low speed; starting off or speeding up; going uphill (they may weave, slow or stop without warning); carrying a heavy load. Their sideways movements can be sudden and involuntary.",
    src: P(72, "Cyclists may wobble or swerve"),
  },
  "cyclist-junctions": {
    title: "Cyclists at junctions and in traffic",
    text: "Cyclists may emerge without looking. One looking around intends to turn right or move out. Turning left, look for cyclists on your nearside — use the nearside mirror; one may be in the bus lane. Emerging, keep a special lookout. In heavy traffic watch both sides: they can travel faster between the streams. From footpaths and cycle routes — especially children — they can pull out without warning. Watch for them on approach and before you turn.",
    src: P(72, "Anticipate the actions of cyclists; p.73; p.95 answers 1, 2"),
  },
  "pedestrians": {
    title: "Pedestrians",
    text: "Show care, courtesy and consideration — especially to the young, the elderly, people with disabilities and those with prams. Never beckon a pedestrian across. Take particular care in busy shopping streets, near stopped buses, parked cars, mobile shops and ice-cream vans; at junctions give way to people crossing the road you're turning into; on left-hand bends; and on roads without footpaths, where pedestrians walk on the right facing traffic.",
    src: P(73, "Pedestrians; Pay particular attention"),
  },
  "vulnerable": {
    title: "Vulnerable pedestrians",
    text: "The elderly may have poor sight and hearing, misjudge speed and distance, and over-estimate their abilities. The young misjudge speed and distance and are impulsive. A blind person may carry a white stick or have a guide dog (trained to wait if a vehicle is near); a deaf and blind person a white stick with two red reflective bands. The deaf may not be identifiable — if someone hasn't looked your way they may not have heard you. People with disabilities may hesitate: allow them more time.",
    src: P(73, "The elderly; The young; Visually impaired; The deaf; p.75"),
  },
  "speed": {
    title: "Speed and children",
    text: "If struck: at 60 km/h most would be killed, at 50 km/h half, at 30 km/h one in ten. In narrow roads where parked cars hide your view, don't exceed 30 km/h. Near schools a flashing amber signal below a school sign warns of children crossing; you MUST stop for a school crossing patrol's 'Stop for children' sign.",
    src: P(73, "The young; p.75 Note"),
  },
  "crossings": {
    title: "Types of crossing",
    text: "Zebra: uncontrolled — flashing yellow beacons on black-and-white poles, white stripes. Supervised: a garda or school warden. Light-controlled: pelican, puffin and toucan, with push buttons in a yellow box. Pelican: a flashing amber phase — give way to people on the crossing. Puffin: an infra-red scanner keeps traffic on red until everyone has crossed. Toucan ('two can cross'): cyclists may ride across; no flashing amber.",
    src: P(74, "Pedestrian crossings; p.75 Puffin, Toucan"),
  },
  "zigzags": {
    title: "Zigzags and crossing rules",
    text: "In the zigzag area you must not overtake the lead vehicle or one stopped for pedestrians, or stop, park or wait (except to let someone cross). Even without zigzags, never overtake on approach. Wait behind the give-way (zebra) or stop line (light-controlled); never stop in the crossing area; keep crossings clear in queues. Approach ready to slow and stop with MSM; never accelerate towards a crossing.",
    src: P(74, "Road markings; Approaching a crossing; p.95 answers 3–5"),
  },
  "zebra": {
    title: "At a zebra",
    text: "In law a pedestrian with a foot on the crossing has priority — you must stop. Anticipate people waiting or walking towards it. A slowing-down arm signal warns pedestrians and other traffic. With a central reserve, each half is a separate crossing.",
    src: P(74, "Zebra crossings; p.95 answer 6"),
  },
  "pelican": {
    title: "At pelicans and toucans",
    text: "Obey the lights. Pelican flashing amber: give way to people on the crossing. A straight pelican with a central reserve is one crossing — give way to people coming from your right even on flashing amber. At a staggered pelican, only to those on your side. Waiting more than a second, handbrake on; never rev or edge forward. Move on only when it's clear and nobody is about to step on.",
    src: P(74, "Pelican crossings; p.75; p.95 answers 7, 8"),
  },
  "danger-areas": {
    title: "Where the danger is",
    text: "Crowded shopping streets, residential areas, bus and tram stops; passing parked vehicles; crossing a pavement or cycle track; reversing (especially into a side road); turning and emerging at junctions; pavements closed for repairs; narrow rural roads without footpaths. Pass a stationary school bus slowly — children may be getting on or off.",
    src: P(75, "Pedestrians and drivers are particularly in danger"),
  },
  "e-scooters": {
    title: "E-bikes and e-scooters",
    text: "They can reach quite high speeds and arrive with little or no warning; riders may not know the rules, may ride on the footpath and weave through traffic, and their slim 'straight line' appearance makes them hard to see and react to.",
    src: P(75, "Electric bikes and scooters"),
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
    "Give cyclists at least a car's width — picture them fallen",
    "Never beckon a pedestrian across",
    "In the zigzags: no overtaking, parking or waiting",
  ],
  cards: [
    {
      icon: "🤝",
      kicker: "Attitude",
      title: "Road users too",
      body: [
        "Cyclists, motorcyclists and pedestrians are particularly vulnerable. Dealing with them safely is mainly about attitude: care, courtesy and consideration.",
        "A bike on the road is a vehicle with the same rights of way — yield to cyclists wherever you'd yield to any vehicle.",
      ],
      concept: "attitude",
      src: P(72, "Unit introduction"),
    },
    {
      icon: "🚴",
      kicker: "Cyclists",
      title: "Picture them lying down",
      visual: "cyclist-wobble",
      ask: {
        prompt: "How much room should you give a cyclist?",
        options: ["Half a metre", "At least as much as you'd give a car", "A car door's width"],
        answer: 1,
      },
      list: [
        "Less easily seen; more vulnerable; unstable at low speed",
        "They wobble for potholes, drains, crosswinds, hills, heavy loads, starting off",
        "Going uphill they may weave, slow or stop without warning",
        "The younger the cyclist, the more you must watch them",
      ],
      concept: "cyclists",
      src: P(72, "Cyclists and motorcyclists; Wobble"),
    },
    {
      icon: "↙️",
      kicker: "Cyclists at junctions",
      title: "Look once, look twice",
      visual: "cyclist-left-turn",
      list: [
        "A cyclist glancing around is about to move out or turn right",
        "Turning left: nearside mirror — one may be in the bus or cycle lane",
        "Emerging: a special lookout for cyclists",
        "Heavy traffic: they pass on both sides between the streams",
        "From footpaths and cycle routes — especially children",
      ],
      concept: "cyclist-junctions",
      src: P(72, "Anticipate the actions of cyclists; p.73; p.95 answers 1, 2"),
    },
    {
      icon: "🚶",
      kicker: "Pedestrians",
      title: "Never beckon them across",
      visual: "danger-spots",
      list: [
        "Busy shopping streets; a stopped bus; parked cars, ice-cream vans",
        "Junctions: give way to people crossing the road you turn into",
        "Left-hand bends hide people in the road",
        "No footpath? They walk on the right, facing you",
      ],
      concept: "pedestrians",
      src: P(73, "Pedestrians; Pay particular attention"),
    },
    {
      icon: "🧓",
      kicker: "Vulnerable pedestrians",
      title: "Old, young, blind, deaf",
      visuals: ["vulnerable-peds", "white-sticks"],
      list: [
        "Elderly: poor sight and hearing; misjudge speed; over-estimate themselves",
        "Young: misjudge speed and distance; impulsive",
        "White stick or guide dog: blind · two red bands: deaf and blind",
        "Not looked your way? They may not have heard you",
        "Hesitant? Allow more time",
      ],
      concept: "vulnerable",
      src: P(73, "The elderly; The young; Visually impaired; The deaf"),
    },
    {
      icon: "🏫",
      kicker: "Children and speed",
      title: "30 km/h where cars hide them",
      visual: "pedestrian-speed",
      list: [
        "60 km/h: most killed · 50: half · 30: one in ten",
        "Narrow roads with parked cars: no more than 30 km/h",
        "Flashing amber under a school sign: children crossing",
        "You MUST stop for a school patrol's 'Stop for children' sign",
      ],
      concept: "speed",
      src: P(73, "The young; p.75 Note"),
    },
    {
      icon: "🦓",
      kicker: "Crossings",
      title: "Zebra, pelican, puffin, toucan",
      visual: "crossing-types",
      list: [
        "Zebra: flashing yellow beacons and stripes — uncontrolled",
        "Pelican: flashing amber — give way to people on it",
        "Puffin: a sensor holds red until everyone has crossed",
        "Toucan: 'two can cross' — cyclists too; no flashing amber",
      ],
      concept: "crossings",
      src: P(74, "Pedestrian crossings; p.75"),
    },
    {
      icon: "〰️",
      kicker: "Zigzags",
      title: "No overtaking, parking or waiting",
      visual: "zigzag-zone",
      ask: {
        prompt: "There are no zigzags on approach to a crossing. May you overtake?",
        options: ["Yes", "No — never overtake on approach", "Only cyclists"],
        answer: 1,
      },
      list: [
        "Don't overtake the lead vehicle or one stopped for pedestrians",
        "Don't stop, park or wait — except to let someone cross",
        "Wait behind the give-way or stop line, never in the crossing",
        "Keep crossings clear in queues; never accelerate towards one",
      ],
      concept: "zigzags",
      src: P(74, "Road markings; Approaching a crossing; p.95 answers 3, 4"),
    },
    {
      icon: "🦶",
      kicker: "At a zebra",
      title: "A foot on it — stop",
      visual: "zebra",
      list: [
        "A pedestrian with a foot on the crossing has priority",
        "Anticipate people waiting or walking towards it",
        "A slowing-down arm signal helps pedestrians and other traffic",
        "Central reserve: each half is a separate crossing",
      ],
      concept: "zebra",
      src: P(74, "Zebra crossings; p.95 answers 5, 6"),
    },
    {
      icon: "🚦",
      kicker: "Pelicans",
      title: "Flashing amber means give way",
      visual: "staggered-crossing",
      list: [
        "Straight across a reserve: one crossing — give way to people from your right",
        "Staggered: two crossings — only those on your side",
        "Waiting? Handbrake on; never rev or edge forward",
        "Go only when clear and nobody is about to step on",
      ],
      concept: "pelican",
      src: P(74, "Pelican crossings; p.75; p.95 answers 7, 8"),
    },
    {
      icon: "⚠️",
      kicker: "Danger areas",
      title: "Where people step out",
      list: [
        "Crowded streets, homes, bus and tram stops",
        "Passing parked vehicles; crossing a pavement or cycle track",
        "Reversing, especially into a side road",
        "Pavements closed for repairs; rural roads with no footpath",
        "A stopped school bus — pass slowly",
      ],
      concept: "danger-areas",
      src: P(75, "Pedestrians and drivers are particularly in danger"),
    },
    {
      icon: "🛴",
      kicker: "E-bikes and e-scooters",
      title: "Fast, slim, unexpected",
      visual: "escooter",
      list: [
        "Quite high speeds, little or no warning",
        "Riders may not know the rules; may ride on the footpath",
        "A slim 'straight line' shape — hard to see and react to",
      ],
      concept: "e-scooters",
      src: P(75, "Electric bikes and scooters"),
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
    { id: "r1", type: "flash", concept: "cyclist-junctions", visual: "cyclist-left-turn",
      front: "There's a bus or cycle lane and you want to turn left. The vital thing?",
      back: "Take extra care, use the nearside mirror — a cyclist may be using the lane.", src: P(95, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "cyclist-junctions",
      front: "A cyclist glances around. What should you think?",
      back: "They may be about to move out or turn right.", src: P(95, "Post-test answer 2") },
    { id: "r3", type: "truefalse", concept: "zigzags",
      statement: "There are always zigzags at pedestrian crossings.", answer: false,
      explain: "Not always — but never overtake on approach anyway.", src: P(95, "Post-test answer 3") },
    { id: "r4", type: "fill", concept: "zigzags", visual: "zigzag-zone",
      before: "In the zigzag area you must not overtake, park or", after: ".",
      options: ["wait", "signal", "brake", "change gear"], answer: "wait",
      explain: "Except to let someone cross, or in circumstances beyond your control.", src: P(95, "Post-test answer 4") },
    { id: "r5", type: "flash", concept: "zebra", visual: "arm-signal:slow",
      front: "What signal could you give approaching a zebra?",
      back: "A slowing-down arm signal.", src: P(95, "Post-test answer 6") },
    { id: "r6", type: "flash", concept: "pelican",
      front: "The pelican sequence after red?",
      back: "An amber light flashes for a short period after the red goes out, then green.", src: P(95, "Post-test answer 7") },
    { id: "r7", type: "flash", concept: "pelican", visual: "staggered-crossing",
      front: "What is a staggered pelican?",
      back: "Separate crossings on each side of a central refuge, not in a straight line.", src: P(95, "Post-test answer 8") },
    { id: "r8", type: "flash", concept: "vulnerable",
      front: "Why may an older person step out without warning?",
      back: "They may be blind, infirm or deaf and not know you're there — or misjudge your speed and distance.", src: P(95, "Post-test answer 9") },
    { id: "r9", type: "fill", concept: "vulnerable", visual: "white-sticks",
      before: "A deaf and blind person may carry a white stick with", after: ".",
      options: ["two red reflective bands", "a yellow band", "a bell", "a green tip"], answer: "two red reflective bands",
      explain: "Or have a dog with a red and white harness.", src: P(95, "Post-test answer 10") },
    { id: "r10", type: "truefalse", concept: "pedestrians",
      statement: "Waving a pedestrian across is helpful if the road looks clear.", answer: false,
      explain: "Never beckon a pedestrian across a road.", src: P(73, "Never beckon a pedestrian") },
    { id: "r11", type: "truefalse", concept: "crossings",
      statement: "Toucan crossings have a flashing amber phase.", answer: false,
      explain: "Toucans have no flashing amber phase.", src: P(75, "Toucan crossings") },
  ],
};

/* ---------------------------------------------------------------------------
   3. SHARE THE ROAD — recognition.
   --------------------------------------------------------------------------- */
const share = {
  id: "share",
  kind: "items",
  mode: "matching",
  title: "Share the Road",
  blurb: "Spot it, sort it — crossings and vulnerable people",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "zigzags",
      prompt: "Which picture shows where you must not overtake, park or wait?",
      options: ["zigzag-zone", "zebra", "crossing-types"], answer: 0,
      names: ["Zigzag area", "Zebra crossing", "Crossing types"],
      explain: "The zigzag lines on approach to the crossing.", src: P(74, "Road markings") },
    { id: "k2", type: "picture", label: "Spot it", concept: "vulnerable",
      prompt: "Which stick tells you the person is deaf AND blind?",
      options: ["white-sticks", "vulnerable-peds"], answer: 0,
      names: ["White stick with red bands", "Vulnerable pedestrians"],
      explain: "Two red reflective bands on a white stick.", src: P(73, "Visually impaired") },
    {
      id: "k3", type: "sort", concept: "crossings",
      prompt: "Which crossing?",
      categories: [
        { id: "zebra", label: "Zebra" },
        { id: "pelican", label: "Pelican" },
        { id: "toucan", label: "Toucan / Puffin" },
      ],
      cards: [
        { text: "Flashing yellow beacons", cat: "zebra" },
        { text: "Foot on it gives priority", cat: "zebra" },
        { text: "Flashing amber: give way", cat: "pelican" },
        { text: "Cyclists may ride across", cat: "toucan" },
        { text: "Sensor holds red until clear", cat: "toucan" },
      ],
      explain: "Zebras are uncontrolled; pelicans flash amber; toucans and puffins don't.", src: P(74, "Pedestrian crossings; p.75") },
    {
      id: "k4", type: "sort", concept: "pedestrians",
      prompt: "Good practice or fault?",
      categories: [
        { id: "ok", label: "Good practice" },
        { id: "no", label: "Fault" },
      ],
      cards: [
        { text: "Handbrake on while waiting at a crossing", cat: "ok" },
        { text: "30 km/h in a narrow street of parked cars", cat: "ok" },
        { text: "Waving a pedestrian across", cat: "no" },
        { text: "Revving to hurry pedestrians", cat: "no" },
        { text: "Sounding the horn at a crossing", cat: "no" },
        { text: "Stopping in a queue on the crossing", cat: "no" },
      ],
      explain: "Care, courtesy and consideration — never harass pedestrians.", src: P(73, "Pedestrians; p.75") },
    { id: "k5", type: "picture", label: "Spot it", concept: "pelican",
      prompt: "Which picture shows crossings you treat as two separate crossings?",
      options: ["staggered-crossing", "zebra"], answer: 0,
      names: ["Straight v staggered", "Zebra"],
      explain: "Staggered pelicans — give way only to people on your side.", src: P(74, "Pelican crossings") },
    { id: "k6", type: "picture", label: "Spot it", concept: "e-scooters",
      prompt: "Which picture shows a hard-to-see, fast-arriving road user?",
      options: ["escooter", "cyclist-wobble", "vulnerable-peds"], answer: 0,
      names: ["E-scooter", "Wobbling cyclist", "Vulnerable pedestrians"],
      explain: "Slim, fast, little warning — and often on the footpath.", src: P(75, "Electric bikes and scooters") },
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
  blurb: "Crossings and people",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "crossings", visual: "crossing-types",
      prompt: "Match the crossing to its feature.",
      pairs: [
        ["Zebra", "Flashing yellow beacons"],
        ["Pelican", "Flashing amber phase"],
        ["Puffin", "Infra-red scanner"],
        ["Toucan", "Cyclists can cross"],
      ],
      explain: "Know each type and its rules.", src: P(74, "Pedestrian crossings; p.75") },
    {
      id: "m2", type: "match", concept: "vulnerable",
      prompt: "Match the person to the risk.",
      pairs: [
        ["Elderly", "Misjudge your speed"],
        ["Young child", "Impulsive, unpredictable"],
        ["Deaf", "May not hear you"],
        ["Disabled", "Need more time"],
      ],
      explain: "Anticipate how each might act.", src: P(73, "The elderly; The young; The deaf") },
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
  blurb: "Crossings and left turns",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "zebra", visual: "zebra",
      prompt: "Approaching a zebra with people waiting — in order.",
      steps: ["Check mirrors", "Slowing-down arm signal if it helps", "Slow down and stop behind the give-way line", "Wait — handbrake on, no revving", "Move off when clear and nobody is about to step on"],
      explain: "MS(M)PSL — and never accelerate towards a crossing.", src: P(74, "Approaching a crossing; p.95 answers 5, 6") },
    { id: "p2", type: "order", concept: "cyclist-junctions", visual: "cyclist-left-turn",
      prompt: "Turning left with a cycle lane — in order.",
      steps: ["Check the interior and nearside mirrors", "Signal left", "Look along the cycle lane and footpath", "Let any cyclist pass", "Turn when clear"],
      explain: "Look once, look twice — a cyclist may be using the lane.", src: P(95, "Post-test answer 1; p.72") },
    { id: "p3", type: "order", concept: "pelican",
      prompt: "A pelican's lights for drivers — in order.",
      steps: ["Green", "Amber", "Red", "Flashing amber", "Green again"],
      explain: "Flashing amber: give way to anyone on the crossing.", src: P(74, "Pelican crossings; p.95 answer 7") },
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
  blurb: "Real situations with pupils",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "speed",
      scene: "🏫 The school warden has stepped back onto the footpath, but a child is about to cross.",
      prompt: "What should your pupil do?",
      options: ["Stop and wave the child across", "Drive on", "Give way only if the warden has seen", "Give way to the child"], answer: 3,
      explain: "Give way — but never beckon them across.", src: P(77, "Retention Q1 (answer d, p.97)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "danger-areas",
      scene: "⚽ Passing a line of parked cars, a ball bounces into the road.",
      prompt: "What now?",
      options: ["Sound the horn", "Slow and flash your lights", "Swerve round the ball", "Be prepared to stop for children"], answer: 3,
      explain: "A child may run out after it.", src: P(77, "Retention Q10 (answer d, p.97)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "pelican",
      scene: "🚦 Waiting at a pelican, people on it are chatting and slow to finish crossing.",
      prompt: "Your pupil should…",
      options: ["Drive on", "Rev gently to hurry them", "Tap the horn", "Wait until they're clear"], answer: 3,
      explain: "Never harass pedestrians — wait patiently.", src: P(78, "Retention Q18 (answer d, p.97)") },
    { id: "s4", type: "choice", label: "Scenario", concept: "pelican", visual: "staggered-crossing",
      scene: "🚶 A straight pelican with a central island. Amber is flashing and someone is heading for the island from the far side.",
      prompt: "What should your pupil do?",
      options: ["Drive on as they reach the island", "Go — the amber allows it", "Wait for them to finish crossing", "No need to give way"], answer: 2,
      explain: "A straight pelican is one crossing — give way to people from your right.", src: P(78, "Retention Q24 (answer c, p.97)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "danger-areas",
      scene: "🔙 Your pupil wants to reverse into a side road where children are playing.",
      prompt: "What's best?",
      options: ["Find another, safer place", "Turn in the road there instead", "Rely on the mirrors", "Tell the children to move"], answer: 0,
      explain: "Reversing near children is especially dangerous.", src: P(78, "Retention Q22 (answer a, p.97)") },
    { id: "s6", type: "choice", label: "Scenario", concept: "zebra",
      scene: "🦯 An elderly person with a walking frame is just on a zebra crossing ahead.",
      prompt: "What should your pupil do?",
      options: ["Carry on — they're slow", "Be ready in case they step on", "Expect them to dash", "Give way to them"], answer: 3,
      explain: "A pedestrian on a zebra has priority.", src: P(80, "Retention Q38 (answer d, p.97)") },
    { id: "s7", type: "choice", label: "Scenario", concept: "e-scooters", visual: "escooter",
      scene: "🛴 An e-scooter is riding along the pavement on your left as you approach a junction.",
      prompt: "What might you expect?",
      options: ["The rider will be responsible", "They may cross the junction without looking", "They'll stop and give way", "They'll get off and walk"], answer: 1,
      explain: "Expect the unexpected — they arrive fast and with little warning.", src: P(80, "Retention Q41 (answer b, p.97)") },
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
  blurb: "A busy town centre at school time",
  xpPer: 10,
  situation: "🏙️ Your pupil drives through town at 3 pm: shops, a bus stop, cyclists and crossings.",
  items: [
    { id: "w1", type: "choice", step: "Bus stop", concept: "danger-areas", prompt: "A bus is stopped at a stop on the left.",
      options: ["Be ready for evasive action", "Beware — a pedestrian may step out ahead of the bus", "Take priority if it signals", "Stop behind it"], answer: 1,
      explain: "People step out from in front of buses.", src: P(80, "Retention Q48 (answer b, p.97)") },
    { id: "w2", type: "choice", step: "A cyclist", concept: "cyclists", visual: "cyclist-wobble", prompt: "Overtaking a cyclist, give them…",
      options: ["A car door's width", "As much room as you would a car", "A third of a metre", "A warning on the horn"], answer: 1,
      explain: "Picture them lying on their side.", src: P(78, "Retention Q19 (answer b, p.97)") },
    { id: "w3", type: "choice", step: "A hill", concept: "wobble", prompt: "A cyclist going uphill ahead may…",
      options: ["Weave, slow down or stop without warning", "Need time to select a gear", "Be helped by tram tracks", "Ignore crosswinds"], answer: 0,
      explain: "Low speed makes them unstable.", src: P(77, "Retention Q6 (answer a, p.97)") },
    { id: "w4", type: "choice", step: "Zebra", concept: "zebra", prompt: "A zebra with a central island. You must…",
      options: ["Give priority to anyone on your side of the road", "Give priority to anyone with a foot on the other side", "Give priority on both sides", "Only stop for running children"], answer: 0,
      explain: "Each half is a separate crossing.", src: P(77, "Retention Q2 (answer a, p.97)") },
    { id: "w5", type: "choice", step: "Queue", concept: "zigzags", prompt: "The queue stops with a crossing just ahead.",
      options: ["Stop on it if nobody's there", "Keep the crossing clear", "Only clear it if people are near", "It doesn't matter"], answer: 1,
      explain: "Crossings must always be kept clear.", src: P(79, "Retention Q25 (answer b, p.97)") },
    { id: "w6", type: "choice", step: "Narrow road", concept: "speed", prompt: "Children around, parked cars hiding the view. Speed?",
      options: ["Speed up to get through", "50 km/h", "Whatever the limit is", "30 km/h or less"], answer: 3,
      explain: "At 30 km/h one in ten struck would be killed — at 50, half.", src: P(79, "Retention Q26 (answer d, p.97)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 97. Q17, Q20 and Q35 are omitted
   (see header).
   --------------------------------------------------------------------------- */
const page = n => (n <= 12 ? 77 : n <= 24 ? 78 : n <= 37 ? 79 : 80);
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(page(n), `Retention test Q${n}; answer p.97`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "At a school crossing point, the person controlling it has stepped back onto the footpath and you notice a child about to cross. You should", ["stop and wave them across", "drive on", "give way to the child only if the traffic controller has noticed", "give way to the child"], 3, "speed"),
    R(2, "Approaching a zebra crossing which has a central island you must", ["give priority to any pedestrian on your side of the road", "give priority to any pedestrian with a foot on the opposite carriageway", "give priority to pedestrians on either side of the island", "only give priority to children running"], 0, "zebra"),
    R(3, "Responsibility for ensuring that children can cross the road with due care and attention rests with", ["the attending parents or carers", "schoolteachers", "the Gardaí", "the child"], 0, "speed"),
    R(4, "On country roads with a footpath on your right but none on your left, be aware that pedestrians", ["must face oncoming traffic", "will only use the footpath", "might not use the footpath", "will only use the footpath if walking away from you"], 2, "pedestrians"),
    R(5, "'Driving Essential Skills' advises drivers to remember that cyclists", ["may glance around before turning left", "may glance around before moving out or turning right", "will always signal before moving out or turning right", "might not move out unexpectedly around drain covers"], 1, "cyclist-junctions"),
    R(6, "'Driving Essential Skills' advises that a cyclist going uphill", ["may weave about, slow down or stop without warning", "will need time to select an appropriate gear", "will be aided by tracks for light rail (LRT)", "is unlikely to be affected by sidewinds"], 0, "wobble", "cyclist-wobble"),
    R(7, "You see elderly pedestrians about to cross the road. You should", ["expect them to give way to you", "accelerate to get past before they start crossing", "stop and wave them across the road", "remember that they may misjudge your speed"], 3, "vulnerable"),
    R(8, "You might expect a deaf and blind person to have with them", ["a guide dog for the blind and a guide dog for the deaf", "a white stick and a hearing dog", "a white stick with a red band", "a guide dog and two white sticks"], 2, "vulnerable", "white-sticks"),
    R(9, "Light signals which instruct drivers to give way to pedestrians are", ["flashing green men", "twin flashing red lights", "flashing amber lights", "lights flashing side to side"], 2, "pelican"),
    R(10, "Driving past a line of parked cars, you notice a ball bounce into the road ahead. You should", ["sound your horn", "slow down and flash your headlights", "swerve to avoid the ball", "be prepared to stop for children"], 3, "danger-areas"),
    R(11, "Driving in town you see a pair of flashing amber lights beneath a roadside sign. This indicates", ["a pedestrian tram boarding point", "a level crossing in the road ahead", "a Toucan crossing ahead", "a potential danger of children in the road"], 3, "speed"),
    R(12, "Some pedestrian crossings sound an audible tone to indicate", ["to drivers that it is unsafe to proceed", "to the visually impaired that it should be safe to cross", "to the deaf that the lights are about to change", "to pedestrians on the crossing to hurry up"], 1, "crossings"),
    R(13, "Beckoning pedestrians to cross a road is", ["acceptable if sure there is no danger from other vehicles", "sometimes useful", "only acceptable at pedestrian crossings", "never acceptable"], 3, "pedestrians"),
    R(14, "The safety difference between pelican and zebra crossings, according to the Rules of the Road, is that", ["drivers do not have to stop at a zebra crossing", "at a pelican the lights give priority; at a zebra a pedestrian must claim priority", "at pelicans a pedestrian will always hear an audible signal", "pelican lights have no flashing amber phase"], 1, "crossings"),
    R(15, "Stopping or parking your car on the footpath where there is tactile paving is", ["recommended for the convenience of blind persons", "dangerous for the visually impaired", "likely to frustrate the deaf", "only advisable if there is nowhere else to park legally"], 1, "vulnerable"),
    R(16, "A Puffin crossing operates an infra-red scanner that in turn holds the traffic lights", ["at steady amber whilst pedestrians are crossing", "at flashing amber whilst pedestrians are crossing", "at green whilst pedestrians are waiting to cross", "at red whilst pedestrians are crossing"], 3, "crossings", "crossing-types"),
    R(18, "Waiting at a zebra crossing, you notice the people on it are in conversation and taking some time to cross. You should", ["drive on", "rev your engine gently to prompt them", "tap the horn lightly", "wait until the pedestrians are clear"], 3, "pelican"),
    R(19, "When overtaking cyclists, drivers are advised by the Rules of the Road to", ["allow a car door's width of clearance", "give them as much room as you would when passing a car", "allow at least one third of a metre clearance", "sound the horn as a warning"], 1, "cyclists", "cyclist-wobble"),
    R(21, "Junctions are particularly dangerous for cyclists, motorcyclists and pedestrians because they are difficult to see. Approaching a junction, watch out for them", ["as you turn", "on approach and before you turn", "on approach and after you turn", "unless you don't intend to turn"], 1, "cyclist-junctions"),
    R(22, "If intending to reverse into a side road where children are playing, you should", ["find another safer place to reverse", "turn into the side road and perform a turn in the road", "give constant attention to your mirrors whilst reversing", "get out and tell the children it is dangerous to play in the road"], 0, "danger-areas"),
    R(23, "Cyclists may feel insecure on roundabouts. 'Driving Essential Skills' advises that cyclists approaching in the left lane", ["should present no danger to drivers", "may hand/arm signal right if they don't intend to take the next exit", "must not turn right", "should always keep to the left lane"], 1, "cyclist-junctions"),
    R(24, "Approaching a pelican crossing with a central island, a pedestrian is approaching the island from the other side. The lights ahead are flashing amber. You should", ["drive on as the pedestrian reaches the island", "proceed in accordance with the flashing amber signal", "wait for the pedestrian to finish crossing before you proceed", "not need to give way to the pedestrian"], 2, "pelican", "staggered-crossing"),
    R(25, "In traffic queues, pedestrian crossings", ["need not be kept clear if there are no pedestrians in sight", "must always be kept clear", "should be kept clear if there are pedestrians nearby", "may not be visible"], 1, "zigzags"),
    R(26, "The Rules of the Road advise that when children are about in narrow roads, where parked cars can obscure your view, you should", ["speed up", "stick to 50 km/h", "ignore the speed limit", "keep your speed down to 30 km/h or less"], 3, "speed"),
    R(27, "According to 'Driving Essential Skills' the elderly are", ["at times predictable at junctions", "especially aware of traffic", "likely to be poor at judging distance and speed", "experienced at judging speed and distance"], 2, "vulnerable"),
    R(28, "Sounding your horn at a pedestrian crossing is", ["recommended to speed the flow of pedestrians", "only necessary when pedestrians are hesitant", "not acceptable", "acceptable if pedestrians haven't started to cross"], 2, "pedestrians"),
    R(29, "Traffic-calming humps in some residential streets are", ["to replace pedestrian crossings", "zebra crossing areas", "crossing areas for pedestrians to cross more safely", "so vehicles must keep in low gears and lower speeds"], 3, "speed"),
    R(30, "The young are particularly at risk when crossing a road because", ["of their experience", "of their poor judgement of speed and distance of traffic", "they are too slow", "they are unaware of the danger of moving vehicles"], 1, "vulnerable"),
    R(31, "The Rules of the Road state that when meeting horses and riders on the road, drivers should", ["rely on the lead rider to keep the horses under control", "take special care as the riders may be inexperienced", "select a lower gear to accelerate past promptly", "follow at a safe distance until they turn off"], 1, "attitude"),
    R(32, "A driver who has sounded the horn to alert a pedestrian ahead, without response, must", ["assume the pedestrian is giving a deaf ear", "beep again but for longer", "assume the pedestrian has a hearing difficulty", "assume they heard but haven't turned to acknowledge you"], 2, "vulnerable"),
    R(33, "Where there are no road markings on approach to a pedestrian crossing, a driver", ["may overtake the vehicle nearest the crossing", "should not park at or just before the crossing", "should never stop just before the crossing", "should treat the crossing as 'not in use'"], 1, "zigzags"),
    R(34, "A zebra crossing may be recognised by", ["flashing beacons and a black and white painted area", "black and white posts at the side approaching the crossing", "traffic light signals", "yellow lines painted across the carriageway"], 0, "crossings", "zebra"),
    R(36, "A cycle lane marked by a solid white line", ["may be entered if there are no cyclists in it", "should not be driven in", "may be driven in to overtake on the left", "may be parked in"], 1, "cyclist-junctions"),
    R(37, "In traffic queues drivers are advised that cyclists and motorcyclists", ["may not overtake on the left", "are not likely to keep up with the traffic flow", "have priority over pedestrians at crossings", "may travel much faster than other vehicles on the road"], 3, "cyclist-junctions"),
    R(38, "Driving towards a zebra crossing you see an elderly person with a walking frame just on the crossing. You", ["don't need to give way if they haven't got a foot on the crossing", "should be ready to give way if they put a foot on the crossing", "should expect them to make a dash for it", "should give way to the pedestrian"], 3, "zebra"),
    R(39, "A driver is recommended to give arm signals on approach to zebra crossings", ["always if there are pedestrians nearby", "if driving the lead vehicle and it would help other road users", "only if intending to overtake the lead vehicle", "only if there is approaching traffic"], 1, "zebra", "zebra"),
    R(40, "A driver approaching a pelican crossing sees flashing amber lights. They should", ["stop unless the lights change to green before the stop line", "give way to pedestrians waiting to cross", "give way to pedestrians already crossing", "be ready to accelerate and assume they will walk faster"], 2, "pelican"),
    R(41, "What might you expect if you see an electric cyclist or scooter riding on the pavement on your left?", ["the rider to be responsible", "that they may cross the junction without looking", "them to stop and give way", "them to get off and walk across"], 1, "e-scooters", "escooter"),
    R(42, "A person on an electric scooter is", ["not causing any harm", "always travelling fast", "difficult to see, because of the straight-line effect and little body movement", "always a responsible adult"], 2, "e-scooters", "escooter"),
    R(43, "What should you be cautious of when seeing an electric cycle or scooter in front of you?", ["they may be travelling faster and arrive quicker than you think", "they are always aware of your presence", "they will give an emphatic beep of the horn", "they will flash their headlights"], 0, "e-scooters"),
    R(44, "Revving your engine at a pedestrian crossing is not advisable because", ["you will waste fuel", "the pedestrians will become impatient", "the pedestrians are likely to shout abuse", "you could cause pedestrians alarm or uncertainty"], 3, "pelican"),
    R(45, "When reversing, a driver should make sure no children are behind the car. To do so, a driver should", ["open the car door to keep a clear view behind", "if unsure, make effective use of mirrors", "sound the horn", "if unsure, get someone to guide them"], 3, "danger-areas"),
    R(46, "The new driver should be made aware that care, courtesy and consideration towards other road users", ["is a necessary evil", "will be learned with experience", "is not necessary in the perfect driver", "is essential for safe driving"], 3, "attitude"),
    R(47, "The Rules of the Road state a group of pedestrians walking should", ["walk in single file on the left-hand side", "walk two abreast on the right-hand side", "walk three abreast on the left-hand side", "walk no more than two abreast, or in single file on busy roads"], 3, "pedestrians"),
    R(48, "Whilst driving you see ahead a bus stopped at a bus stop on the left. You should", ["be ready to take evasive action", "beware as you pass that a pedestrian may step out ahead of the bus", "take priority if the bus driver indicates to pull out", "stop behind the bus so the driver may pull out when ready"], 1, "danger-areas"),
    R(49, "From a driver's point of view, everyone in charge of a mechanically propelled vehicle on a public road should", ["be relied upon to always do the right thing", "not be expected to make serious driver errors", "know the Rules of the Road and abide by them", "always be at fault in an accident"], 2, "attitude"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "crossings",
      prompt: "'Two can cross' describes a…", options: ["Zebra", "Pelican", "Puffin", "Toucan"], answer: 3,
      explain: "Pedestrians and cyclists can cross.", src: P(74, "Toucan crossings") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "cyclist-junctions",
      prompt: "Which picture shows the check to make before turning left across a cycle lane?", options: ["cyclist-left-turn", "cyclist-wobble", "danger-spots"], answer: 0,
      names: ["Turning left past a cyclist", "Wobbling cyclist", "Danger spots"],
      explain: "Nearside mirror and a look along the lane.", src: P(95, "Post-test answer 1") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "pedestrians",
      statement: "On roads without footpaths, pedestrians should walk on the right, facing traffic.", answer: true,
      explain: "So expect them on your side, coming towards you.", src: P(73, "Pay particular attention") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "vulnerable",
      scene: "🦻 A pedestrian at the kerb hasn't looked your way at all.",
      prompt: "What might it mean?", options: ["They've seen you", "They may not have heard you — they could be deaf", "They'll wait", "They're in a hurry"], answer: 1,
      explain: "The deaf may not be easily identified — take care.", src: P(73, "The deaf") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "zigzags",
      prompt: "Match the line.", pairs: [["Zigzags", "No overtaking, parking or waiting"], ["Give-way line", "Wait here at a zebra"], ["Stop line", "Wait here at lights"]],
      explain: "Wait behind the line — never on the crossing.", src: P(74, "Road markings") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "pelican",
      prompt: "Pelican lights:", steps: ["Red", "Flashing amber", "Green"],
      explain: "Flashing amber: give way to anyone on the crossing.", src: P(95, "Post-test answer 7") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "cyclists", visual: "cyclist-wobble",
      scene: "💨 Overtaking a cyclist on an exposed road in a strong crosswind.",
      prompt: "What do you tell your pupil?", options: ["Pass close and quickly", "Give extra room — they could be blown into your path", "Sound the horn", "Follow at 1 m"], answer: 1,
      explain: "Crosswinds can blow cyclists in front of the car.", src: P(72, "Unit introduction; Wobble") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "pedestrians",
      prompt: "Beckoning pedestrians to cross a road is…", options: ["Fine if the road is clear", "Sometimes useful", "Only at crossings", "Never acceptable"], answer: 3,
      explain: "Never beckon a pedestrian across.", src: P(78, "Retention Q13 (answer d, p.97)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "danger-areas",
      prompt: "Which picture lists places where pedestrians often step out?", options: ["danger-spots", "crossing-types", "white-sticks"], answer: 0,
      names: ["Danger spots", "Crossing types", "White sticks"],
      explain: "Buses, parked cars, ice-cream vans, shops, left bends, no footpath.", src: P(73, "Pay particular attention") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "attitude",
      prompt: "Care, courtesy and consideration towards other road users is…", options: ["A necessary evil", "Learned with experience", "Not needed by a perfect driver", "Essential for safe driving"], answer: 3,
      explain: "It's the attitude behind all safe driving.", src: P(80, "Retention Q46 (answer d, p.97)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "2.10",
  number: "2.10",
  title: "Pedestrians & Cyclists",
  pages: [72, 80],
  intro: "Cyclists, pedestrians, vulnerable road users and every kind of crossing.",
  objectives: [
    "How to anticipate the actions of cyclists and pedestrians",
    "The statistics on pedestrian casualties",
    "How to recognise and deal with pedestrian crossings",
    "How to deal with pedestrians with disabilities and age-related problems",
  ],
  objectivesSrc: P(72, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...share, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "share-the-road", icon: "🚸", label: "Share the Road", rule: { activity: "share", min: 100 } },
    { id: "vulnerable-road-users-specialist", icon: "🏆", label: "Vulnerable Road Users Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
