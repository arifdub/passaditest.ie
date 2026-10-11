/*
  ===========================================================================
  BOOK 2 · UNIT 2.11 — TRAFFIC SIGNS & SIGNALS

  Source: "Theory Resource Workbook 2 of 4" (Driver Education Supplies),
  book pages 81–89, with the post-test model answers on page 95 and the
  retention-test answers on page 97 (50 questions).

  Omitted retention questions (answer key unsafe):
  - Q2 (a motorway 50 km/h sign, keyed "minimum speed limit"): not in the
    unit, and a number in a red circle is a maximum.
  - Q9 (two cars with a red sash, keyed "outside lane closed ahead"): that
    sign means no overtaking (option a).
  - Q17 (double yellow line, keyed "no stopping, waiting or parking"): the
    unit says you may stop to set down or pick up passengers.
  - Q27 (flashing reds after a steady amber, keyed "lift bridge"): the
    unit gives the same lights at level crossings (option d).
  - Q30 (where the exit number sits on a motorway sign): not in the unit.
  - Q36 (colours of the school-patrol sign): not in the unit.
  - Q45 (a solid line flanked by a broken line, keyed "no-entry line to a
    one-way street"): not what the unit says; option b is as defensible.
  - Q50 (red circle with an upright black arrow, keyed "no entry"): the
    sign described isn't the no-entry sign, and the wording is unclear.

  The book's traffic-light sequence (green, amber, red) is shown as given;
  Irish lights have no red-and-amber phase.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 2, unit: "2.11", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Early vision, early decision",
    text: "A sign warns of a change in road or traffic conditions ahead, so it must do its job early — giving you time to see it, understand it and act on it (with the MSPSL routine). Symbols are used instead of words because they're understood quickly and universally — by visitors, non-nationals and people with reading difficulties.",
    src: P(81, "Unit introduction; p.95 answers 1, 2"),
  },
  "regulatory": {
    title: "Regulatory signs — circles",
    text: "Circles give orders. Mandatory ('must do'): blue circles with white symbols — e.g. keep left (a diagonal arrow pointing down-left) — plus STOP (white on a red octagon) and Yield Right of Way (an inverted red-bordered triangle). A manually operated STOP sign (white on a red circle) is used at temporary road works. Prohibitory ('must not do'): red-bordered white circles with black or red symbols; a red bar prohibits a movement.",
    src: P(81, "Roadside signs; Mandatory signs; Prohibitory signs; p.95 answers 3, 4, 8"),
  },
  "warning": {
    title: "Warning signs — diamonds",
    text: "Black-bordered yellow diamonds warn of a hazard, sometimes with a plate below giving more information. Road-works signs are the same shape but orange, and must be obeyed. Examples: a flag person controlling traffic, a windsock for crosswinds, a low bridge (high vehicles may use the centre of the road).",
    src: P(81, "Diamond; p.82 Road works; p.95 answer 10"),
  },
  "information": {
    title: "Information signs — rectangles",
    text: "Blue: motorways. Green: primary routes (with route numbers). White with black border: non-primary routes and local information. Brown: tourist signs. Red: hazard information. Diversion patches: black symbols on yellow, placed on existing signs to guide you round a closed road.",
    src: P(81, "Rectangular; p.82 Signs for traffic diversions; p.95 answer 18"),
  },
  "other-signs": {
    title: "Countdowns, chevrons and markers",
    text: "Countdown signs have 3, 2 and 1 diagonal bars: blue for a motorway exit, green for primary routes, black on white for non-primary routes, red on white for a concealed level crossing. Black-and-white chevrons (red and white if temporary) warn of a sharp deviation or closure. Roadside markers: red on the left of the carriageway, white on the right, green at junctions on the left.",
    src: P(82, "Other road signs; Deviation signs; Roadside markers"),
  },
  "markings": {
    title: "Road markings",
    text: "Markings can be seen when signs are hidden and give a continuing message. The more paint, the more important the message. Across the road: a single continuous line at a STOP sign — stop before it; a double broken line at a Yield sign; a single broken line at a roundabout — give way to the right. Along the road: centre lines (keep left), hazard lines (shorter gaps — danger ahead), lane lines (longer gaps).",
    src: P(82, "Road markings; p.83 Single broken line; Along the road; p.95 answer 12"),
  },
  "white-lines": {
    title: "Continuous and double white lines",
    text: "A solid white line at the side marks the edge of the carriageway. Bus lanes (solid line) may not be driven in during their hours, except to cross. With a solid line on your side you must not cross or straddle it except to enter a side road or entrance, when a garda directs you, to pass a stationary obstruction, or to pass a cyclist, road maintenance vehicle or led animals going under 10 km/h — when safe.",
    src: P(83, "Single continuous lines; Both solid and one broken; p.95 answer 13"),
  },
  "hatching": {
    title: "Hatching, ghost islands and chevrons",
    text: "Hatching bordered by a broken line shouldn't be entered unless unavoidable and safe; bordered by a solid line it must not be entered except in circumstances beyond your control. Diagonal hatching usually separates opposing traffic (ghost islands protect traffic turning right); chevrons separate merging and diverging traffic.",
    src: P(83, "Hatch markings and chevrons; p.95 answers 11, 15, 16"),
  },
  "yellow": {
    title: "Yellow markings and boxes",
    text: "Yellow lines along the kerb restrict parking and waiting to the times on a nearby plate — you may only stop to set down or pick up passengers, or load where permitted; unless signed otherwise they apply every day. Yellow box junctions: don't enter unless your exit is clear — you may wait in it only when turning right and held up by oncoming traffic.",
    src: P(83, "Yellow markings; p.84 Yellow box junctions"),
  },
  "studs": {
    title: "Studs and cats' eyes",
    text: "Reflective studs identify lanes and edges: white for lane and centre lines, red for the left edge, amber for the right edge (central reserve), green across slip roads, lay-bys and acceleration or deceleration lanes.",
    src: P(84, "Reflective studs and cats eyes; p.95 answer 14"),
  },
  "lights": {
    title: "Traffic lights",
    text: "Green: go if the way is clear. Amber: stop, unless that could cause an accident or you've crossed the line. Red: stop and wait at the stop line. A green filter arrow lets you go that way even if the main light isn't green; a flashing amber filter (usually left) lets you proceed with caution, giving way. Special lights: swing or lifting bridges, level crossings (twin flashing reds), Luas tramways, road works. Twin flashing ambers warn of a school crossing.",
    src: P(84, "Traffic light signals; Green filter arrows; Special traffic lights; p.95 answer 17"),
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
    "Circles order, triangles warn, rectangles inform",
    "Blue: must do. Red ring: must not do",
    "The more paint, the more important the message",
  ],
  cards: [
    {
      icon: "👀",
      kicker: "Signs",
      title: "Early vision, early decision",
      body: [
        "A sign must work early — so you have time to see it, understand it and act on it, using the MSPSL routine.",
        "Symbols beat words: quicker to understand, and universal — for visitors, non-nationals and anyone with reading difficulties.",
      ],
      concept: "why",
      src: P(81, "Unit introduction; p.95 answers 1, 2"),
    },
    {
      icon: "🔵",
      kicker: "Shapes",
      title: "The shape tells you the job",
      visual: "sign-shapes",
      ask: {
        prompt: "A blue circle tells you what you…",
        options: ["Must not do", "Must do", "Could do"],
        answer: 1,
      },
      list: [
        "Circles give orders — blue: must do; red ring: must not do",
        "Red octagon: STOP · inverted triangle: Yield Right of Way",
        "Yellow diamonds warn of hazards",
        "Rectangles give information",
      ],
      concept: "regulatory",
      src: P(81, "Roadside signs; p.95 answer 3"),
    },
    {
      icon: "⛔",
      kicker: "Regulatory signs",
      title: "Orders you must obey",
      list: [
        "Keep left: diagonal arrow pointing down-left · turn left: horizontal arrow",
        "STOP at a junction: white on a red octagon",
        "Manual STOP (red circle): temporary road works",
        "A red bar prohibits a movement — no bar prohibits a type of traffic",
      ],
      concept: "regulatory",
      src: P(81, "Mandatory; Prohibitory; p.95 answers 4, 7, 8"),
    },
    {
      icon: "🔶",
      kicker: "Warning signs",
      title: "Diamonds — yellow, or orange for road works",
      list: [
        "Yellow diamond, black border: a hazard ahead",
        "A plate below may give more information",
        "Orange: road works — must be obeyed",
        "Low bridge: high vehicles may use the centre of the road",
      ],
      concept: "warning",
      src: P(81, "Diamond; p.82 Road works; p.95 answer 10"),
    },
    {
      icon: "🟩",
      kicker: "Colours",
      title: "What the colour says",
      visual: "sign-colours",
      list: [
        "Blue: motorway · Green: primary route",
        "White: non-primary routes and local information",
        "Brown: tourist · Red: hazard information",
        "Diversions: black symbols on yellow patches on existing signs",
      ],
      concept: "information",
      src: P(81, "Rectangular; p.82; p.95 answer 18"),
    },
    {
      icon: "↘️",
      kicker: "Other signs",
      title: "Countdowns, chevrons, markers",
      visuals: ["countdown-markers", "chevron-sign"],
      list: [
        "Countdown bars 3-2-1: blue (motorway exit), green, black, red (hidden level crossing)",
        "Black-and-white chevrons: sharp deviation; red-and-white: temporary",
        "Roadside markers: red on the left, white on the right, green at left junctions",
      ],
      concept: "other-signs",
      src: P(82, "Other road signs; Deviation signs; Roadside markers"),
    },
    {
      icon: "〰️",
      kicker: "Road markings",
      title: "The more paint, the more important",
      visual: "road-lines",
      ask: {
        prompt: "A hazard line has gaps that are…",
        options: ["Longer than normal", "Shorter than normal", "The same as the centre line"],
        answer: 1,
      },
      list: [
        "Markings can be seen when signs are hidden, and keep giving the message",
        "Across the road: stop line at STOP; double broken at Yield; single broken at roundabouts",
        "Centre line: keep left · hazard line: shorter gaps than normal · lane line: long gaps",
      ],
      concept: "markings",
      src: P(82, "Road markings; p.83; p.95 answer 12"),
    },
    {
      icon: "⏸️",
      kicker: "Continuous lines",
      title: "Solid on your side — don't cross",
      list: [
        "Solid line at the side: the edge of the carriageway",
        "Except: to enter a side road or entrance, a garda directs you, a stationary obstruction",
        "Or to pass a cyclist, maintenance vehicle or led animals under 10 km/h — if safe",
        "Bus lanes: don't drive in them during their hours, except to cross",
      ],
      concept: "white-lines",
      src: P(83, "Single continuous lines; Both solid and one broken; p.95 answer 13"),
    },
    {
      icon: "▧",
      kicker: "Hatching",
      title: "Ghost islands and chevrons",
      visual: "hatched",
      list: [
        "Broken border: don't enter unless unavoidable and safe",
        "Solid border: must not enter except beyond your control",
        "Diagonals separate opposing traffic; chevrons, merging traffic",
        "Ghost islands protect traffic turning right",
      ],
      concept: "hatching",
      src: P(83, "Hatch markings and chevrons; p.95 answers 11, 15, 16"),
    },
    {
      icon: "🟨",
      kicker: "Yellow markings",
      title: "Waiting and boxes",
      visual: "box-junction",
      list: [
        "Yellow lines: parking and waiting restricted to the plate's times",
        "Stop only to set down or pick up, or load where permitted",
        "Box junction: don't enter unless your exit is clear",
        "Turning right? You may wait in it for oncoming traffic",
      ],
      concept: "yellow",
      src: P(83, "Yellow markings; p.84 Yellow box junctions"),
    },
    {
      icon: "✨",
      kicker: "Studs",
      title: "Cats' eyes by colour",
      visual: "cats-eyes",
      list: [
        "White: lane and centre lines",
        "Red: left edge",
        "Amber: right edge / central reserve",
        "Green: slip roads, lay-bys, acceleration and deceleration lanes",
      ],
      concept: "studs",
      src: P(84, "Reflective studs and cats eyes; p.95 answer 14"),
    },
    {
      icon: "🚦",
      kicker: "Traffic lights",
      title: "Green, amber, red — and filters",
      visual: "traffic-lights",
      list: [
        "Amber: stop unless that could cause an accident",
        "Green filter arrow: go that way even if the main light is red",
        "Flashing amber filter: proceed with caution, give way",
        "Twin flashing reds: level crossings and lifting bridges — you must stop",
        "Twin flashing ambers: school crossing ahead",
      ],
      concept: "lights",
      src: P(84, "Traffic light signals; p.95 answer 17"),
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
    { id: "r1", type: "flash", concept: "why",
      front: "Why must a sign do its job early?",
      back: "So you have time to see it, understand it and act on it.", src: P(95, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "why",
      front: "Why use symbols instead of words?",
      back: "They're understood more quickly and are universal — for visitors, non-nationals and anyone with reading difficulty.", src: P(95, "Post-test answer 2") },
    { id: "r3", type: "fill", concept: "regulatory", visual: "sign-shapes",
      before: "A prohibitory sign is a", after: "sign.",
      options: ["\"must not do\"", "\"must do\"", "warning", "information"], answer: "\"must not do\"",
      explain: "A mandatory sign is a 'must do' sign.", src: P(95, "Post-test answer 3") },
    { id: "r4", type: "flash", concept: "regulatory",
      front: "Keep left v turn left — the difference?",
      back: "Keep left: a diagonal arrow pointing down to the left. Turn left: a horizontal arrow pointing left.", src: P(95, "Post-test answer 4") },
    { id: "r5", type: "flash", concept: "regulatory",
      front: "Why a STOP sign?",
      back: "The junction gives so limited a view that you must stop to look properly.", src: P(95, "Post-test answer 5") },
    { id: "r6", type: "flash", concept: "hatching", visual: "hatched",
      front: "What is a ghost island?",
      back: "Painted areas instead of a raised kerb, separating traffic or marking the carriageway edge.", src: P(95, "Post-test answer 11") },
    { id: "r7", type: "flash", concept: "markings",
      front: "Advantages of road markings over signs on posts?",
      back: "They can be seen when other signs are hidden, and give a continuing message.", src: P(95, "Post-test answer 12") },
    { id: "r8", type: "fill", concept: "studs", visual: "cats-eyes",
      before: "Red reflective studs mark the", after: ".",
      options: ["left edge of the road", "centre line", "right edge", "slip roads"], answer: "left edge of the road",
      explain: "Amber marks the right edge; green, slip roads and lay-bys; white, lanes.", src: P(95, "Post-test answer 14") },
    { id: "r9", type: "truefalse", concept: "hatching",
      statement: "You must keep off hatching bordered by a solid white line, if you possibly can.", answer: true,
      explain: "Only enter in circumstances beyond your control.", src: P(95, "Post-test answer 16") },
    { id: "r10", type: "flash", concept: "lights",
      front: "Where would you see twin flashing red lights?",
      back: "At swing or lifting bridges and level crossings.", src: P(95, "Post-test answer 17") },
    { id: "r11", type: "flash", concept: "information",
      front: "What do diversion symbols look like?",
      back: "Patch-sized signs, black symbols on yellow, on existing signs — showing which way to go.", src: P(95, "Post-test answer 18") },
  ],
};

/* ---------------------------------------------------------------------------
   3. READ THE ROAD — recognition.
   --------------------------------------------------------------------------- */
const signs = {
  id: "signs",
  kind: "items",
  mode: "matching",
  title: "Read the Road",
  blurb: "Spot it, sort it — shapes, colours and lines",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "regulatory",
      prompt: "Which picture shows what each sign shape means?",
      options: ["sign-shapes", "sign-colours", "road-lines"], answer: 0,
      names: ["Sign shapes", "Sign colours", "Road lines"],
      explain: "Circles order, diamonds warn, rectangles inform.", src: P(81, "Roadside signs") },
    { id: "k2", type: "picture", label: "Spot it", concept: "yellow",
      prompt: "Which picture shows where you must not enter unless your exit is clear?",
      options: ["box-junction", "hatched", "cats-eyes"], answer: 0,
      names: ["Yellow box junction", "Hatching", "Cats' eyes"],
      explain: "Unless you're turning right and held up only by oncoming traffic.", src: P(84, "Yellow box junctions") },
    {
      id: "k3", type: "sort", concept: "regulatory",
      prompt: "Order, warning or information?",
      categories: [
        { id: "order", label: "Order" },
        { id: "warn", label: "Warning" },
        { id: "info", label: "Information" },
      ],
      cards: [
        { text: "Blue circle", cat: "order" },
        { text: "Red-ringed circle", cat: "order" },
        { text: "Yellow diamond", cat: "warn" },
        { text: "Orange diamond", cat: "warn" },
        { text: "Green rectangle", cat: "info" },
        { text: "Brown rectangle", cat: "info" },
      ],
      explain: "Shape and colour tell you the job before you read it.", src: P(81, "Types of signs") },
    {
      id: "k4", type: "sort", concept: "studs",
      prompt: "Which colour of stud?",
      categories: [
        { id: "white", label: "White" },
        { id: "red", label: "Red" },
        { id: "amber", label: "Amber" },
        { id: "green", label: "Green" },
      ],
      cards: [
        { text: "Lane lines", cat: "white" },
        { text: "Left edge", cat: "red" },
        { text: "Central reserve", cat: "amber" },
        { text: "Slip road", cat: "green" },
      ],
      explain: "Studs identify lanes and the limits of the carriageway.", src: P(84, "Reflective studs") },
    { id: "k5", type: "picture", label: "Spot it", concept: "markings",
      prompt: "Which picture shows the different lines along the road?",
      options: ["road-lines", "traffic-lights"], answer: 0,
      names: ["Road lines", "Traffic lights"],
      explain: "Centre, hazard, lane, continuous, solid-and-broken.", src: P(83, "Along the road") },
    { id: "k6", type: "picture", label: "Spot it", concept: "information",
      prompt: "Which picture tells you a tourist sign is brown?",
      options: ["sign-colours", "sign-shapes", "chevron-sign"], answer: 0,
      names: ["Sign colours", "Sign shapes", "Chevrons"],
      explain: "Brown for tourist information.", src: P(81, "Brown signs") },
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
  blurb: "Signs and markings",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "information", visual: "sign-colours",
      prompt: "Match the sign colour.",
      pairs: [
        ["Blue", "Motorway"],
        ["Green", "Primary route"],
        ["Brown", "Tourist"],
        ["Orange", "Road works"],
      ],
      explain: "Colour tells you the type of road or information.", src: P(81, "Rectangular; p.82") },
    {
      id: "m2", type: "match", concept: "markings", visual: "road-lines",
      prompt: "Match the line across the road.",
      pairs: [
        ["Single continuous", "STOP sign — stop before it"],
        ["Double broken", "Yield Right of Way"],
        ["Single broken", "Roundabout — give way to the right"],
      ],
      explain: "Lines across the road tell you whether to stop or give way.", src: P(82, "White markings; p.83") },
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
  blurb: "Lights and sign routine",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "lights", visual: "traffic-lights",
      prompt: "Traffic lights — in order from green.",
      steps: ["Green", "Amber", "Red"],
      explain: "Then green again.", src: P(84, "Traffic light signals sequence") },
    { id: "p2", type: "order", concept: "why",
      prompt: "Responding to a sign — in order.",
      steps: ["See the sign early", "Understand it", "Check mirrors", "Signal and position if needed", "Adjust speed", "Act on it"],
      explain: "Early vision, early decision.", src: P(81, "Unit introduction; p.95 answer 1") },
    { id: "p3", type: "order", concept: "other-signs", visual: "countdown-markers",
      prompt: "Countdown markers — in the order you pass them.",
      steps: ["Three bars", "Two bars", "One bar", "The exit or hazard"],
      explain: "Blue for motorway exits; red for a concealed level crossing.", src: P(82, "Countdown") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "lights", visual: "traffic-lights",
      scene: "🚦 The lights change to amber just before your pupil reaches the line.",
      prompt: "What should they do?",
      options: ["Stop unless stopping would endanger another road user", "Always stop", "Get ready to go", "Speed up"], answer: 0,
      explain: "Amber: stop, unless to do so could cause an accident.", src: P(87, "Retention Q25 (answer a, p.97)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "lights",
      scene: "➡️ Turning right at lights: green shows an arrow straight ahead only; the right filter isn't lit.",
      prompt: "What now?",
      options: ["Wait behind the stop line for the filter", "Proceed if safe", "Assume the lights failed", "Report the fault"], answer: 0,
      explain: "Only go in the direction a lit arrow allows.", src: P(87, "Retention Q26 (answer a, p.97)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "yellow", visual: "box-junction",
      scene: "🟨 Queuing traffic; the far side of the yellow box is blocked. Your pupil is going straight on.",
      prompt: "What should they do?",
      options: ["Enter and wait", "Wait before the box until the exit is clear", "Go round the box", "Sound the horn"], answer: 1,
      explain: "Never enter a box junction unless your exit is clear.", src: P(84, "Yellow box junctions") },
    { id: "s4", type: "choice", label: "Scenario", concept: "lights",
      scene: "🔴 Alternating flashing red lights on the road ahead.",
      prompt: "Your pupil must…",
      options: ["Slow down", "Expect a steady red next", "Go if it looks clear", "Stop before the lights"], answer: 3,
      explain: "Flashing reds at level crossings and lifting bridges mean stop.", src: P(88, "Retention Q40 (answer d, p.97)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "white-lines",
      scene: "🚜 A slow tractor ahead on a road with a solid white line on your side.",
      prompt: "May your pupil cross to overtake?",
      options: ["Yes, if safe", "No — not for a tractor; only for a cyclist, maintenance vehicle or led animals under 10 km/h", "Only with a horn", "Only on a bend"], answer: 1,
      explain: "The exceptions are narrow — a moving tractor isn't one of them.", src: P(83, "Both solid and one broken; p.95 answer 13") },
    { id: "s6", type: "choice", label: "Scenario", concept: "warning",
      scene: "🔶 An orange diamond with a figure holding a flag.",
      prompt: "What does it mean?",
      options: ["A flag person controlling traffic ahead", "Dangerous bends", "An airport", "A windy day"], answer: 0,
      explain: "Orange: road works — obey the signs.", src: P(87, "Retention Q23 (answer a, p.97)") },
    { id: "s7", type: "choice", label: "Scenario", concept: "yellow",
      scene: "🛑 A clearway sign on a busy road during its hours. Your passenger wants to hop out.",
      prompt: "May your pupil stop?",
      options: ["Never", "Only to set down or pick up passengers", "Yes, park for a few minutes", "Only in an emergency"], answer: 1,
      explain: "On a clearway you may only stop to set down or pick up.", src: P(89, "Retention Q44 (answer b, p.97)") },
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
  blurb: "A route full of signs",
  xpPer: 10,
  situation: "🗺️ Your pupil drives from a country road onto a primary route and into town.",
  items: [
    { id: "w1", type: "choice", step: "Country road", concept: "other-signs", visual: "chevron-sign", prompt: "Black-and-white chevron signs ahead mean…",
      options: ["A steep uphill", "A steep downhill", "A diversion", "A sharp bend ahead"], answer: 3,
      explain: "They warn of a sharp deviation in the road.", src: P(88, "Retention Q31 (answer d, p.97)") },
    { id: "w2", type: "choice", step: "Junction", concept: "markings", prompt: "A large white triangle painted before the junction…",
      options: ["Means stop", "Means move left", "Says the junction is open", "Means yield right of way"], answer: 3,
      explain: "It warns of a Yield Right of Way junction.", src: P(89, "Retention Q46 (answer d, p.97)") },
    { id: "w3", type: "choice", step: "Primary route", concept: "information", prompt: "Primary route signs are…",
      options: ["Green", "Blue", "Brown", "White"], answer: 0,
      explain: "Green with white letters and route numbers.", src: P(81, "Green signs") },
    { id: "w4", type: "choice", step: "A hill", concept: "warning", prompt: "A crawler lane on a dual carriageway is found…",
      options: ["On scenic routes", "Before a service area", "Near a garda checkpoint", "On a steep uphill gradient"], answer: 3,
      explain: "For slow vehicles climbing.", src: P(89, "Retention Q49 (answer d, p.97)") },
    { id: "w5", type: "choice", step: "Town", concept: "yellow", prompt: "Kerbside yellow paint — the general rule?",
      options: ["More paint, richer council", "Less paint is better", "More paint, greater restriction", "Less paint, smaller fine"], answer: 2,
      explain: "The more paint, the more important the message.", src: P(88, "Retention Q28 (answer c, p.97)") },
    { id: "w6", type: "choice", step: "One-way street", concept: "markings", prompt: "No road markings in a one-way street, going ahead. Use…",
      options: ["The left lane only", "The right lane until markings appear", "Whichever lane is most appropriate", "The right throughout"], answer: 2,
      explain: "Pick the lane that suits your route.", src: P(87, "Retention Q16 (answer c, p.97)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 97. Q2, Q9, Q17, Q27, Q30, Q36,
   Q45 and Q50 are omitted (see header).
   --------------------------------------------------------------------------- */
const page = n => (n <= 13 ? 86 : n <= 26 ? 87 : n <= 40 ? 88 : 89);
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
    R(1, "Circular traffic signs, red or blue, generally give", ["orders", "warnings", "information", "directions"], 0, "regulatory", "sign-shapes"),
    R(3, "Red-bordered white circular signs generally", ["give advance warning of a speed limit change", "give a prohibitory order", "inform of a danger ahead", "give directions"], 1, "regulatory"),
    R(4, "Red-bordered white circular signs with a red diagonal bar usually indicate", ["end of traffic movement restrictions", "traffic movement restrictions", "no entry for vehicular traffic", "end of minimum speed limits"], 1, "regulatory"),
    R(5, "A red-bordered white triangular sign gives a driver", ["a regulatory sign that gives warning", "an order", "local information", "end of speed restriction"], 1, "regulatory"),
    R(6, "On seeing a red-bordered white triangle sign at the roadside, a driver would be advised to", ["always stop", "give a signal", "check the mirrors", "yield right of way"], 3, "regulatory", "sign-shapes"),
    R(7, "Where would you expect to see a red circular sign with the word 'stop' in white lettering?", ["at a road hazard ahead", "at a school crossing", "temporary and manually operated control at road works", "at an accident black spot ahead"], 2, "regulatory"),
    R(8, "Circular signs with a blue background usually tell a road user what they", ["must not do", "must do", "should not do", "could do"], 1, "regulatory", "sign-shapes"),
    R(10, "On a right-hand bend you notice white zigzag markings on the left side of the road and would", ["avoid driving over the zigzag markings", "not park in the zigzag area", "only drive over them if you saw oncoming traffic", "only park there if there were two yellow lines"], 1, "markings"),
    R(11, "Temporary traffic light signals in the road ahead are generally associated with", ["replacement lights when lights are broken", "road works", "football matches", "the city on Saturdays"], 1, "lights"),
    R(12, "The spaces between white hazard warning markings painted on the road are", ["longer than normal road markings", "narrower than normal road markings", "shorter than normal road markings", "wider than normal road markings"], 2, "markings", "road-lines"),
    R(13, "On an overhead motorway gantry showing a speed restriction over individual lanes, the speed applies to", ["each individual traffic lane", "the right-hand lane", "each separate lane route direction", "all lanes"], 0, "lights"),
    R(14, "A white circular sign with a black border and oblique sashes through it means", ["no entry", "do not proceed further", "a local road with a maximum speed of 80 km/h", "it can be ignored when traffic is quiet"], 2, "regulatory", "rural-speed-sign"),
    R(15, "To follow the road ahead in a one-way system you should", ["follow the vehicle ahead", "select the left-hand lane", "always use the middle of the road", "always be guided by road markings"], 3, "markings"),
    R(16, "In a one-way street with no road markings, going ahead, you should", ["select the left lane only", "use the right-hand lane until markings become visible", "use whichever lane is most appropriate", "keep right throughout regardless"], 2, "markings"),
    R(18, "On the vehicle ahead you see a yellow sign showing children walking. The vehicle", ["is an ice-cream van", "has broken down", "may park on a 'school keep clear' marking", "is a school bus"], 3, "warning"),
    R(19, "A solid white line at the left side of the road indicates", ["a road hazard ahead", "a cycle path on the left", "a footpath on the left", "the edge of the carriageway"], 3, "white-lines"),
    R(20, "A white-bordered blue circle with a bicycle indicates", ["a blue bicycle", "the start or continuation of a cycleway", "no cycles", "end of cycleway"], 1, "regulatory"),
    R(21, "A circular sign with a red 'X' on a white background means", ["disregard the last sign you passed", "a game — the next sign is an 'O'", "a clearway", "it's only found near schools"], 2, "regulatory"),
    R(22, "A red-bordered circular sign with a 'P' inset indicates", ["toilets ahead", "parking ahead", "no parking", "road narrows ahead"], 2, "regulatory"),
    R(23, "An orange diamond-shaped sign with a man holding a flag means", ["a temporary flag person controlling the road ahead", "dangerous bends ahead", "an airport ahead", "a windy day"], 0, "warning"),
    R(24, "On a traffic bollard in a central reserve, a blue circular sign with two arrows pointing downwards means", ["look down", "look right and left", "follow the arrows", "traffic may pass on either side"], 3, "regulatory"),
    R(25, "At traffic lights, the amber light comes on. This indicates", ["stop unless to stop would endanger another road user", "you must stop", "get ready to go", "a fault with the traffic control system"], 0, "lights", "traffic-lights"),
    R(26, "Turning right at lights, the green shows an arrow straight ahead only and your filter isn't lit. You should", ["wait behind the stop line for the filter to show", "proceed if safe", "assume the lights have failed and go", "report the fault"], 0, "lights"),
    R(28, "With regard to yellow waiting and loading restrictions at the kerbside, the general rule is that", ["the more paint, the more affluent the council", "the less paint, the better for drivers", "the more paint, the greater the restriction is likely to be", "the less paint, the less the fine"], 2, "yellow"),
    R(29, "Contra-flow bus and cycle lanes would be found", ["on dual carriageways", "on footpaths", "on motorways", "on one-way streets"], 3, "white-lines"),
    R(31, "Black and white chevron signs indicate", ["a steep uphill gradient", "a steep downhill gradient", "a diversion", "a sharp bend ahead"], 3, "other-signs", "chevron-sign"),
    R(32, "What colour of sign gives local tourist information and areas of interest?", ["brown", "red", "black", "green"], 0, "information", "sign-colours"),
    R(33, "A rectangular blue sign with the letter 'H' in white indicates", ["hospital ahead", "holiday route", "hazard ahead", "hotel ahead"], 0, "information"),
    R(34, "What shape is used for a STOP sign?", ["square", "circular", "triangular", "octagonal"], 3, "regulatory", "sign-shapes"),
    R(35, "A yellow diamond sign with a windsock symbol indicates", ["a reminder to hang out your clothes", "relevant to high-sided vehicles only", "caution to all vehicles, especially high-sided, entering a wind-prone area", "the wind direction"], 2, "warning"),
    R(37, "A series of orange signs with symbols or lettering along a road most likely signify", ["road works", "a contra-flow bus lane in operation", "a with-flow bus lane ahead", "the wrong colour displayed by mistake"], 0, "warning", "sign-colours"),
    R(38, "An unlettered, symbol-free red-bordered white circular sign, usually with an information plate below, is", ["a mandatory prohibition", "a warning sign", "an order", "an information sign"], 0, "regulatory"),
    R(39, "A blue rectangular sign with a bus inset and an information plate below is", ["for two bus lanes ahead", "no entry for buses ahead", "for single-deck buses only", "an advance sign for a bus lane ahead"], 3, "information"),
    R(40, "A driver who notices alternating flashing red lights on the road ahead", ["is probably colour-blind", "should next expect a steady red", "need not stop if the road is clear", "must stop before the lights"], 3, "lights"),
    R(41, "White reflective studs (cats' eyes) on motorways mark", ["lane lines", "the right-hand edge", "acceleration and deceleration lanes", "the left-hand edge"], 0, "studs", "cats-eyes"),
    R(42, "Signs in advance of a motorway on national routes are coloured", ["green background with a blue motorway direction inset", "yellow background with a blue inset", "white background with a blue inset", "blue background with a green inset"], 0, "information"),
    R(43, "Warning signs for a junction with roads of lesser importance show the priority road by", ["the broader line", "coloured arrows", "a pointed line", "a worded sign beneath"], 0, "warning"),
    R(44, "Where a clearway sign is observed on a busy road, during its times of operation drivers may", ["not stop to set down or pick up passengers", "only stop to set down or pick up passengers", "never stop under any circumstance", "not stop in an emergency"], 1, "yellow"),
    R(46, "A large white triangle painted on the road before a junction", ["advises drivers to stop", "advises drivers to move left", "advises the junction ahead is open", "tells drivers they must yield right of way"], 3, "markings"),
    R(47, "A zebra crossing is identifiable by", ["two pelicans on the crossing", "no lights", "two flashing yellow beacons on black and white poles", "always an adult school warden"], 2, "markings", "zebra"),
    R(48, "A motorway terminal sign ending with a roundabout, on a direction sign to a national route, is coloured", ["blue background with green national route inset", "green background with blue inset", "red background with green inset", "black background with green inset"], 0, "information"),
    R(49, "A crawler lane on a dual carriageway is found", ["on scenic routes", "before a service area or slip road", "on approach to a garda observation area", "on a steep uphill gradient"], 3, "warning"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "regulatory",
      prompt: "A STOP sign is…", options: ["Square", "Circular", "Triangular", "Octagonal"], answer: 3,
      explain: "White letters on a red octagon.", src: P(81, "Mandatory signs") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "lights",
      prompt: "Which picture shows the traffic-light sequence?", options: ["traffic-lights", "crossing-lights", "gantry-signals"], answer: 0,
      names: ["Traffic lights", "Level crossing lights", "Motorway gantry"],
      explain: "Green, amber, red.", src: P(84, "Traffic light signals") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "warning",
      statement: "Orange road-works signs are only advisory.", answer: false,
      explain: "They must be obeyed.", src: P(82, "Road works") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "hatching", visual: "hatched",
      scene: "▧ A ghost island bordered by a solid white line, and traffic is slow.",
      prompt: "May your pupil drive on it to get ahead?", options: ["Yes", "No — only in circumstances beyond your control", "Only if it's clear", "Only to turn left"], answer: 1,
      explain: "Solid border: must not be entered.", src: P(83, "Hatch markings and chevrons") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "studs",
      prompt: "Match the stud.", pairs: [["Red", "Left edge"], ["Amber", "Central reserve"], ["Green", "Slip road"]],
      explain: "White marks lanes.", src: P(84, "Reflective studs") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "lights",
      prompt: "Lights from green:", steps: ["Green", "Amber", "Red"],
      explain: "Then back to green.", src: P(84, "Traffic light signals") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "lights",
      scene: "⬅️ A flashing amber filter arrow pointing left.",
      prompt: "Your pupil turning left may…", options: ["Go with caution, giving way to others", "Go — they have priority", "Wait for green", "Reverse"], answer: 0,
      explain: "Proceed with caution, but give way.", src: P(84, "Flashing amber filter lights") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "regulatory",
      prompt: "Circular signs with a blue background tell you what you…", options: ["Must not do", "Must do", "Should not do", "Could do"], answer: 1,
      explain: "Mandatory signs.", src: P(86, "Retention Q8 (answer b, p.97)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "markings",
      prompt: "Your pupil asks how to tell a hazard line from a centre line. Which picture shows it?", options: ["road-lines", "sign-colours", "cats-eyes"], answer: 0,
      names: ["Road lines", "Sign colours", "Cats' eyes"],
      explain: "Hazard lines have shorter gaps.", src: P(83, "Along the road") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "regulatory",
      prompt: "Circular traffic signs, red or blue, generally give…", options: ["Orders", "Warnings", "Information", "Directions"], answer: 0,
      explain: "Circles give orders.", src: P(86, "Retention Q1 (answer a, p.97)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "2.11",
  number: "2.11",
  title: "Traffic Signs & Signals",
  pages: [81, 89],
  intro: "Sign shapes and colours, road markings, studs, yellow lines and boxes, and traffic lights.",
  objectives: [
    "The different types of road sign",
    "The meaning of the shape and colour of signs and road markings",
    "The meaning of the road signs and markings used on our roads",
  ],
  objectivesSrc: P(81, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...signs, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "read-the-road", icon: "🪧", label: "Read the Road", rule: { activity: "signs", min: 100 } },
    { id: "signs-specialist", icon: "🏆", label: "Signs Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
