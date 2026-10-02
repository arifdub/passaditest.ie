/*
  ===========================================================================
  BOOK 1 · UNIT 1.4 — JUNCTIONS & BENDS

  Source: "Driving Procedures & Road Safety — Resource Workbook, Book 1"
  (Driver Education Supplies), book pages 40–48, with the post-test model
  answers on page 85 and the retention-test answers on page 88.

  Same shape as unit1_1.js; see src/learn/README.md. Every concept, card
  and item carries `src` (hidden from learners) for auditing.

  Retention test Q10 is omitted: its answer key disagrees with the unit
  text, so it is not used.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 1, unit: "1.4", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "priority": {
    title: "Stop, yield and priority",
    text: "At a Stop sign you must stop at the sign or stop line, even if there's no traffic. At a Yield sign or line, give way to any traffic on or at the junction and only proceed when safe. Traffic going straight ahead on a major road has right of way; at junctions of equal importance, traffic on your right has right of way. \"Right of way\" is priority, not an absolute right — proceed with caution.",
    src: P(40, "Summaries"),
  },
  "give-way": {
    title: "Who you must give way to",
    text: "Pedestrians already crossing at a junction or on a zebra crossing, or on a pelican crossing when the amber light flashes; pedestrians and traffic when moving off; traffic already turning; traffic in another lane when changing lanes; traffic on a public road when leaving a private entrance; and oncoming traffic when turning right from a major road into a minor one.",
    src: P(40, "In short you must give way or priority"),
  },
  "bends": {
    title: "Dealing with bends",
    text: "Look well ahead for warning signs and markings, then apply MSPSL. Your view is restricted — beware oncoming traffic (it may be in the middle of the road), obstructions and pedestrians. Left-hand bend: keep to the centre of your lane. Right-hand bend: keep to the left. Slow down in good time — lowest speed as you enter — and drive round under acceleration; don't coast. As you come out, check mirrors and make progress.",
    src: P(41, "Dealing with Bends"),
  },
  "under-accel": {
    title: "Under acceleration",
    text: "Using the accelerator so the engine is doing just enough work to drive the car round the corner — it keeps the wheels gripping the road. It does not mean speeding up. Don't coast (grip is reduced) and don't accelerate fiercely.",
    src: P(85, "Post-test answers 1, 2; p.41, p.43"),
  },
  "junction-def": {
    title: "What a junction is",
    text: "Any point where two or more roads meet, marked or unmarked: T-junction, Y-junction, crossroads, staggered junction, roundabout. They may be approached from the minor road, the major road, or roads of equal priority — to turn left, turn right or go ahead.",
    src: P(41, "Dealing with Junctions"),
  },
  "assess": {
    title: "Assess the junction",
    text: "On approach: check your mirrors; look for advance information — traffic flow, warning signs, road markings, direction signs, give way and stop signs, traffic lights; a change in building line or road surface; gaps in parked vehicles; and decide which road, if any, has priority. Joining a new road, assess visibility, traffic density and speed, gradient, width and surface, other road users and hazards.",
    src: P(41, "On approach ASSESS the junction; p.42"),
  },
  "building-line": {
    title: "Building line",
    text: "Where a building conceals your view into a junction. A change in building line is something to look for on approach.",
    src: P(41, "Assess — building line"),
  },
  "stop-yield": {
    title: "Stop sign and yield sign",
    text: "You must ALWAYS stop at a stop sign. You must be PREPARED to stop at a yield right of way sign. Road signs can show priority by the broader line on the sign. At unmarked junctions all roads have the same priority — but as a guide, give way to traffic on your right.",
    src: P(41, "You must always stop…"),
  },
  "turn-position": {
    title: "Position for the turn",
    text: "Turning left — keep well to the left, about 1 metre from the kerb; don't cut in on cyclists you've just overtaken; don't swing wide; don't turn too soon or your rear wheels cut the corner and may strike the kerb. Turning right — as close to the middle of the road as is safe, with regard for approaching traffic and room for them to pass.",
    src: P(42, "Position"),
  },
  "junction-speed": {
    title: "Speed on approach",
    text: "It depends on visibility. Slow down in good time and select the gear for the speed and control needed — but don't slow too soon. The radius of a left turn is generally smaller than a right, so you need to be slower.",
    src: P(42, "Speed on approach"),
  },
  "observation": {
    title: "Observation and zones of vision",
    text: "Take effective observation before entering any junction; you must not cause other vehicles to change position or speed. At a junction, your zone of vision is your view into the other road — limited by buildings, hedges, bends, gradients, other vehicles, light and weather, hazards and road furniture. Keep looking all the time.",
    src: P(42, "Observation; Zones of Vision"),
  },
  "emerging": {
    title: "Emerging",
    text: "Emerging means leaving one road to join, cross or turn into another road. You must not cause another vehicle to slow down or change direction. Look out for pedestrians already crossing the new road — they have priority.",
    src: P(42, "Emerging; Pedestrians; p.43"),
  },
  "making-turn": {
    title: "Making the turn",
    text: "Under acceleration as the turn begins; steady speed to the apex; the engine pulling the car round; don't coast, don't accelerate fiercely. Turning right across traffic: give priority to approaching traffic, look out for pedestrians, cyclists and motorcyclists, and don't cut the corner. After the turn: mirrors, cancel the signal, make progress, keep a safe distance, adjust to the new road.",
    src: P(43, "Making the Turn; After the Turn"),
  },
  "acute": {
    title: "Acute-angle junctions",
    text: "Where the approach road meets at a very sharp angle the view may be restricted: position to get the best possible view, and use the \"peep & creep\" method before moving further.",
    src: P(43, "Acute Angle Turning"),
  },
  "crossroads": {
    title: "Crossroads",
    text: "Particularly hazardous: look for signs showing priority and be prepared to give way where nothing guides you. A driver on the minor road may not realise which road has priority. Turning right with an oncoming car also turning right: the safest method is right side to right side — turning behind each other, both get a clear view. Left side to left side is the alternative, but your view is partly blocked. Layout, markings or a Garda may decide which.",
    src: P(44, "Crossroads; Turning right"),
  },
  "dual": {
    title: "Dual carriageways",
    text: "A central reservation separates the streams, with at least two lanes each way. Traffic is faster, so use MSPSL earlier. Leaving left: left lane in good time, mirrors and signal, then slow down in the deceleration lane — don't cut across to it from the right or middle lane. Joining: don't emerge until sure you won't make traffic alter speed or direction. With an acceleration lane, match speed to a gap, and stay left until used to the speed.",
    src: P(44, "Dual Carriageways"),
  },
  "reserve": {
    title: "Emerging right across a central reserve",
    text: "WIDE reserve: treat each half as a separate road — when clear from your right, move to the reserve and position to see clearly left, then join the left-hand lane. NARROW reserve: don't emerge until both sides are clear. Observation is the key word.",
    src: P(45, "Emerging right — wide / narrow central reserve"),
  },
  "roundabouts": {
    title: "Roundabouts",
    text: "They keep traffic flowing without necessarily stopping. Traffic from the immediate right usually has priority. On approach, position as at any junction: three lanes — left lane to turn left, right lane to turn right, left or middle lane to go ahead. In it, left lane for left or ahead, right lane to turn right. Leaving: mirrors and a left signal as you pass the exit before yours; check the nearside mirror before moving left.",
    src: P(45, "Roundabouts"),
  },
  "mini": {
    title: "Mini and multiple roundabouts",
    text: "Mini roundabouts: the same rules. Limited space means less time to signal, larger vehicles may drive over the marking, and don't enter unless sure others can clear your route. Double mini and multiple roundabouts: normal priority rules, and treat each roundabout separately.",
    src: P(45, "Mini roundabouts; Double and multiple"),
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
    "Always stop at a STOP sign; be prepared to stop at a YIELD sign",
    "Left-hand bend: centre of your lane. Right-hand bend: keep left. Round it under acceleration",
    "Emerging: never make another vehicle slow down or change direction",
  ],
  cards: [
    {
      icon: "🔀",
      kicker: "Junctions & bends",
      title: "Where roads meet — and curve",
      visuals: ["junction-cross"],
      body: [
        "Junctions present a combination of road hazards that need good observation, anticipation and concentration — so MSPSL is essential at any junction.",
        "This unit covers cornering at junctions and bends, and how to deal with each type of junction.",
      ],
      think: ["👀 Who has priority here?", "🧭 Where should my car be?", "⏱️ How slow for this turn?"],
      src: P(40, "Unit introduction"),
    },
    {
      icon: "🛑",
      kicker: "Priority",
      title: "Stop, yield — and who goes first",
      visual: "stop-yield",
      ask: {
        prompt: "A Stop sign, and the major road is completely clear. Do you have to stop?",
        options: ["No, if you can see it's clear", "Yes — always, at the sign or stop line", "Only if another car is coming"],
        answer: 1,
      },
      body: [
        "At a Stop sign you must stop at the sign or the stop line, even if there's no traffic. At a Yield sign or line, give way to any traffic on or at the junction and proceed only when it's safe.",
        "Traffic going straight ahead on a major road has right of way. At junctions of equal importance, traffic on your right has right of way.",
      ],
      callout: "\"Right of way\" is not an absolute right — it's priority. Always proceed with caution.",
      concept: "priority",
      src: P(40, "Summaries; p.41"),
    },
    {
      icon: "🚸",
      kicker: "Give way",
      title: "You must give way to…",
      list: [
        "Pedestrians already crossing at a junction, or on a zebra crossing",
        "Pedestrians on a pelican crossing when the amber light is flashing",
        "Pedestrians and traffic when you move off — from a stop, a yield sign or a parking space",
        "Traffic already turning at a junction",
        "Traffic in another lane when you want to change lanes",
        "Traffic on a public road when you come out of a private entrance",
        "Oncoming traffic when turning right from a major road into a minor road",
      ],
      concept: "give-way",
      src: P(40, "In short you must give way or priority"),
    },
    {
      icon: "↩️",
      kicker: "Bends",
      title: "Position for the bend",
      visuals: ["bend-left", "bend-right"],
      body: [
        "Look well ahead for warning signs and road markings, then apply MSPSL. Your view will be restricted, so beware of oncoming traffic, obstructions and pedestrians — and remember approaching traffic could well be in the middle of the road!",
      ],
      sections: [
        { head: "On approach", list: ["Left-hand bend — keep to the centre of your lane", "Right-hand bend — keep to the left", "Slow down in good time: your speed should be lowest as you enter", "Showing brake lights can alert drivers behind to the danger ahead"] },
      ],
      concept: "bends",
      src: P(41, "Dealing with Bends — On approach"),
    },
    {
      icon: "⚙️",
      kicker: "Through the bend",
      title: "Under acceleration",
      visual: "bend-speed",
      ask: {
        prompt: "\"Drive round the bend under acceleration.\" Does that mean speed up?",
        options: ["Yes — accelerate through it", "No — just enough power to carry the car round", "It means coast in neutral"],
        answer: 1,
      },
      body: [
        "Under acceleration means using the accelerator so the engine is doing just enough work to drive the car round the corner. It keeps the wheels gripping the road surface.",
      ],
      list: [
        "Do not coast round the bend — your grip will be reduced",
        "Do not accelerate fiercely",
        "As you come out of the bend, check your mirrors and make progress",
      ],
      concept: "under-accel",
      src: P(41, "Select the appropriate gear; p.85 answers 1–2"),
    },
    {
      icon: "🗺️",
      kicker: "Junctions",
      title: "Five kinds of junction",
      visuals: ["junction-t", "junction-y", "junction-staggered", "roundabout"],
      body: [
        "A junction is any point where two or more roads meet. It may be marked or unmarked: a T-junction, Y-junction, crossroads, staggered junction or roundabout.",
        "You may approach from the minor road, the major road, or roads of equal priority — to turn left, turn right or follow the road ahead.",
      ],
      concept: "junction-def",
      src: P(41, "Dealing with Junctions"),
    },
    {
      icon: "🔍",
      kicker: "On approach",
      title: "Assess the junction",
      visual: "building-line",
      list: [
        "Check your mirrors",
        "Look for advance information: traffic flow, warning signs, road markings, direction signs, give way and stop signs, traffic lights",
        "A change in building line — where a building hides your view into the junction",
        "A change in road surface; gaps in parked vehicles",
        "Decide which road, if any, has priority",
      ],
      callout: "At unmarked junctions all roads have the same priority — but as a guide, always give way to traffic on your right.",
      concept: "assess",
      src: P(41, "On approach ASSESS the junction"),
    },
    {
      icon: "↔️",
      kicker: "Position and speed",
      title: "Setting up the turn",
      visuals: ["left-turn", "right-turn-position"],
      sections: [
        { head: "Turning left", list: ["Keep well to the left, about 1 metre from the kerb", "Don't cut in on cyclists you've just overtaken", "Don't swing wide", "Don't turn too soon — your rear wheels cut the corner and may strike the kerb"] },
        { head: "Turning right", list: ["As close to the middle of the road as is safe", "Leave room for approaching traffic to pass"] },
        { head: "Speed", list: ["Depends on visibility — slow down in good time, pick the gear", "Don't slow too soon", "Left turns are usually tighter than right, so go slower"] },
      ],
      concept: "turn-position",
      src: P(42, "Position; Speed on approach"),
    },
    {
      icon: "👁️",
      kicker: "Observation",
      title: "Zones of vision at a junction",
      visual: "zone-of-vision",
      body: [
        "Take effective observation before entering any junction — you must not cause other vehicles to change position or speed.",
        "At a junction, your zone of vision is your view into the other road. It's limited by buildings, hedges, bends, gradients, other vehicles, light and weather, hazards, road furniture and signs.",
      ],
      callout: "Is looking right, left and right enough before emerging? No — keep looking all the time.",
      concept: "observation",
      src: P(42, "Observation; p.85 answer 9"),
    },
    {
      icon: "🚦",
      kicker: "Emerging",
      title: "Leaving one road for another",
      visual: "junction-t",
      body: [
        "Emerging means leaving one road to join, cross or turn into another road.",
        "When joining or crossing the path of another vehicle, you must not cause it to slow down or change direction. Look out for pedestrians already crossing the new road — they have priority.",
      ],
      concept: "emerging",
      src: P(42, "Emerging; Pedestrians; p.43"),
    },
    {
      icon: "🔄",
      kicker: "Making the turn",
      title: "Round the corner — and after",
      sections: [
        { head: "Making the turn", list: ["Under acceleration as the turn begins", "Constant speed to the apex", "The engine pulls the car round — don't coast, don't accelerate fiercely"] },
        { head: "Turning right across traffic", list: ["Give priority to approaching traffic", "Special lookout for pedestrians, cyclists and motorcyclists", "Don't cut the corner"] },
        { head: "After the turn", list: ["Check mirrors; make sure the signal has cancelled", "Build up speed for the new road; keep a safe distance", "Allow time to adjust to the new road"] },
      ],
      concept: "making-turn",
      src: P(43, "Making the Turn; After the Turn"),
    },
    {
      icon: "📐",
      kicker: "Sharp angles",
      title: "Acute-angle junctions: peep & creep",
      visual: "building-line",
      body: [
        "Where a road joins at a very sharp angle the view may be restricted. Position to get the best possible view of the approaching road, then use the \"peep & creep\" method — edge forward slowly — before moving further.",
        "Emerging at an acute angle, try to position so your car is at a right angle to the major road.",
      ],
      concept: "acute",
      src: P(43, "Acute Angle Turning; p.85 answer 12"),
    },
    {
      icon: "✚",
      kicker: "Crossroads",
      title: "The most hazardous junction",
      visuals: ["junction-cross", "right-turns-offside"],
      body: [
        "Look for signs showing priority, and be prepared to give way where nothing guides you. A driver on the minor road may not realise which road has priority.",
      ],
      sections: [
        { head: "Both turning right?", list: ["Safest: right side to right side — turn behind each other; both get a clear view", "Alternative: left side to left side — your view is partly obstructed", "Layout, road markings or a Garda may decide; try to make eye contact"] },
      ],
      concept: "crossroads",
      src: P(44, "Crossroads; Turning right"),
    },
    {
      icon: "🛣️",
      kicker: "Dual carriageways",
      title: "Leaving and joining",
      visuals: ["decel-lane", "accel-lane"],
      body: ["Traffic is faster, so start MSPSL earlier."],
      sections: [
        { head: "Leaving to the left", list: ["Left-hand lane in good time; mirrors and signal", "Slow down in the deceleration lane", "Don't cut across from the right or middle lane", "Watch for sharp bends on short slip roads"] },
        { head: "Turning right off it", list: ["Right-hand lane in good time; reduce speed", "Position in the turning lane; go only when safe — you may cross two or more fast lanes"] },
        { head: "Joining", list: ["Don't emerge until you won't make traffic change speed or direction", "Acceleration lane: match the speed of a gap; check the blind spot; stay left until used to the speed"] },
      ],
      concept: "dual",
      src: P(44, "Dual Carriageways"),
    },
    {
      icon: "🟩",
      kicker: "Central reserve",
      title: "Emerging right onto a dual carriageway",
      visual: "wide-reserve",
      sections: [
        { head: "WIDE central reserve", list: ["Treat each half as a separate road", "When clear from your right, move to the reserve", "Position to see clearly left; when clear, join the left-hand lane"] },
        { head: "NARROW central reserve", list: ["Don't emerge until both sides are clear", "Be aware of hatch markings on the road"] },
      ],
      callout: "Observation is the key word when meeting, joining, overtaking or merging with other traffic.",
      concept: "reserve",
      src: P(45, "Emerging right — wide / narrow central reserve"),
    },
    {
      icon: "⭕",
      kicker: "Roundabouts",
      title: "Keep the traffic flowing",
      visuals: ["roundabout", "roundabout-lanes"],
      body: [
        "A roundabout lets traffic cross or merge without necessarily stopping. Traffic from the immediate right usually has priority.",
      ],
      sections: [
        { head: "On approach (three lanes)", list: ["Left lane — turn left", "Right lane — turn right", "Left or middle lane — ahead"] },
        { head: "In the roundabout", list: ["Left lane for left or ahead; right lane to turn right", "More than two lanes — follow the road markings"] },
        { head: "Leaving", list: ["Mirrors and a left signal as you pass the exit before yours", "Check the nearside mirror before moving to the left lane"] },
      ],
      concept: "roundabouts",
      src: P(45, "Roundabouts"),
    },
    {
      icon: "🔵",
      kicker: "Small roundabouts",
      title: "Mini and multiple roundabouts",
      body: ["Apply the same rules as any other roundabout. Limited space means:"],
      list: [
        "Less time to signal to leave",
        "Larger vehicles may not be able to avoid driving over the marking",
        "Don't enter unless certain other vehicles on it can clear your route",
        "Double mini and multiple roundabouts: treat each one separately",
      ],
      concept: "mini",
      src: P(45, "Mini roundabouts"),
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
    { id: "r1", type: "flash", concept: "under-accel", visual: "bend-speed",
      front: "What does \"under acceleration\" mean?",
      back: "The engine should be \"under load\" — use the accelerator so the engine does just enough work to drive the car round the corner.",
      src: P(46, "Post-test Q1; answer p.85") },
    { id: "r2", type: "truefalse", concept: "under-accel",
      statement: "\"Under acceleration\" means you should speed up as you turn.", answer: false,
      explain: "No — just enough power to carry the car round. Don't coast and don't accelerate fiercely.",
      src: P(46, "Post-test Q2; answer p.85") },
    { id: "r3", type: "choice", label: "Identify the correct position", concept: "bends", visual: "bend-left",
      prompt: "Your road position approaching a left-hand bend:",
      options: ["Tight to the left", "In the centre of your lane", "Close to the middle of the road", "Just over the centre line"], answer: 1,
      explain: "Left-hand bend — keep to the centre of your lane.",
      src: P(41, "On approach; p.85 answer 3") },
    { id: "r4", type: "choice", label: "Identify the correct position", concept: "bends", visual: "bend-right",
      prompt: "Which position gives the greatest view on a right-hand bend?",
      options: ["Well to the left", "Centre of the lane", "Near the centre line", "Over the centre line"], answer: 0,
      explain: "Right-hand bend — keep to the left for the best view round it.",
      src: P(46, "Post-test Q4; answer p.85") },
    { id: "r5", type: "fill", concept: "stop-yield", visual: "stop-yield",
      before: "You must ALWAYS", after: "at a stop sign.",
      options: ["stop", "slow down", "give way", "signal"], answer: "stop",
      explain: "You must always stop at a stop sign — and be prepared to stop at a yield sign.",
      src: P(41, "You must always stop at a stop sign") },
    { id: "r6", type: "flash", concept: "emerging", visual: "junction-t",
      front: "What is meant by \"emerging\"?",
      back: "Leaving one road to turn into, join or cross another.",
      src: P(46, "Post-test Q8; answer p.85") },
    { id: "r7", type: "truefalse", concept: "observation", visual: "zone-of-vision",
      statement: "Looking right, left and right once is enough before emerging.", answer: false,
      explain: "No — keep looking all the time to take effective observation.",
      src: P(46, "Post-test Q9; answer p.85") },
    { id: "r8", type: "fill", concept: "stop-yield",
      before: "At unmarked junctions, as a guide, give way to traffic on your", after: ".",
      options: ["right", "left", "major road", "wider road"], answer: "right",
      explain: "All roads have the same priority at unmarked junctions — but as a guide, give way to traffic on your right.",
      src: P(41, "Road signs can indicate the priority…") },
    { id: "r9", type: "flash", concept: "emerging",
      front: "When do you give way to pedestrians at a junction?",
      back: "When they are already on the road into which you are turning.",
      src: P(46, "Post-test Q10; answer p.85; p.42") },
    { id: "r10", type: "choice", label: "Tap the correct statement", concept: "bends",
      prompt: "How does camber affect a right-hand bend?",
      options: ["It pulls you towards the centre", "It may tip you towards the left of the road, especially going too fast", "It has no effect", "It improves grip"], answer: 1,
      explain: "The camber may tip you towards the left of the road, especially when going too fast.",
      src: P(46, "Post-test Q5; answer p.85") },
    { id: "r11", type: "flash", concept: "acute",
      front: "When can you see the whole situation at a junction?",
      back: "When your eyes are level with any obstructions — only then can you make a safe and sensible decision.",
      src: P(46, "Post-test Q11; answer p.85") },
    { id: "r12", type: "flash", concept: "dual", visual: "dual-carriageway",
      front: "Define \"dual carriageway\".",
      back: "A road with a division which separates opposing streams of traffic.",
      src: P(46, "Post-test Q13; answer p.85") },
  ],
};

/* ---------------------------------------------------------------------------
   3. NAME THE JUNCTION — recognition: picture questions and a sort.
   --------------------------------------------------------------------------- */
const JN = ["junction-t", "junction-y", "junction-cross", "junction-staggered", "roundabout"];
const JN_NAMES = ["T-junction", "Y-junction", "Crossroads", "Staggered junction", "Roundabout"];
const pick = (ans, others) => {
  const opts = [ans, ...others];
  return { options: opts.map(i => JN[i]), names: opts.map(i => JN_NAMES[i]), answer: 0 };
};

const junctions = {
  id: "junctions",
  kind: "items",
  mode: "matching",
  title: "Name the Junction",
  blurb: "Spot the junction, the line and the bend position",
  xp: 25,
  items: [
    { id: "j1", type: "picture", label: "Spot it", concept: "junction-def", prompt: "Which is a T-junction?", ...pick(0, [1, 2, 3]),
      explain: "A minor road meeting a major road at a right angle, like a T.", src: P(41, "Junction categories") },
    { id: "j2", type: "picture", label: "Spot it", concept: "junction-def", prompt: "Which is a staggered junction?", ...pick(3, [2, 0, 4]),
      explain: "Side roads offset from each other rather than directly opposite.", src: P(41, "Junction categories") },
    { id: "j3", type: "picture", label: "Spot it", concept: "junction-def", prompt: "Which is a Y-junction?", ...pick(1, [0, 3, 2]),
      explain: "A road joining at an angle, like a Y.", src: P(41, "Junction categories") },
    { id: "j4", type: "picture", label: "Spot it", concept: "crossroads", prompt: "Which junction does the unit call particularly hazardous?", ...pick(2, [0, 1, 4]),
      explain: "Crossroads — look for signs showing priority, and remember a driver on the minor road may not realise which road has priority.", src: P(44, "Crossroads") },
    { id: "j5", type: "picture", label: "Spot it", concept: "bends", prompt: "Which car is correctly positioned for a right-hand bend?",
      options: ["bend-right", "bend-left", "right-turn-position", "position-zones"], answer: 0,
      names: ["Right-hand bend — keep left", "Left-hand bend — centre of lane", "Right turn at a junction", "Position zones"],
      explain: "Right-hand bend — keep to the left for the best view round it.", src: P(41, "On approach") },
    {
      id: "j6", type: "sort", concept: "stop-yield",
      prompt: "Stop line or yield line — what does each require?",
      categories: [
        { id: "stop", label: "Stop line / sign" },
        { id: "yield", label: "Yield line / sign" },
      ],
      cards: [
        { text: "Always stop, even if the road is clear", cat: "stop" },
        { text: "Solid white line with STOP painted", cat: "stop" },
        { text: "Be prepared to stop", cat: "yield" },
        { text: "Give way to traffic on or at the junction", cat: "yield" },
        { text: "Broken lines with a triangle", cat: "yield" },
      ],
      explain: "You must always stop at a stop sign or line. At a yield sign or line, be prepared to stop and give way to any traffic on or at the junction.",
      src: P(40, "Summaries; p.41"),
    },
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
  blurb: "Positions, roundabout lanes and key terms",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "bends", visuals: ["bend-left", "bend-right"],
      prompt: "Match the situation to the road position.",
      pairs: [
        ["Left-hand bend", "Centre of your lane"],
        ["Right-hand bend", "Keep to the left"],
        ["Turning left at a junction", "About 1 metre from the kerb"],
        ["Turning right at a junction", "As close to the middle as is safe"],
      ],
      explain: "Bends: left — centre of the lane; right — keep left. Junctions: left turn — about a metre from the kerb; right turn — as close to the middle as is safe.",
      src: P(41, "Bends — On approach; p.42 Position"),
    },
    {
      id: "m2", type: "match", concept: "roundabouts", visual: "roundabout-lanes",
      prompt: "Three lanes approaching a roundabout. Match the direction to the lane.",
      pairs: [
        ["Turning left", "Left lane"],
        ["Turning right", "Right lane"],
        ["Going ahead", "Left or middle lane"],
      ],
      explain: "Unless signs or markings say otherwise: left lane to turn left, right lane to turn right, left or middle lane for ahead.",
      src: P(45, "Roundabouts — On approach; p.85 answer 15"),
    },
    {
      id: "m3", type: "match", concept: "junction-def",
      prompt: "Match the term to its meaning.",
      pairs: [
        ["Junction", "Any point where two or more roads meet"],
        ["Emerging", "Leaving one road to join, cross or turn into another"],
        ["Building line", "Where a building conceals your view into a junction"],
        ["Dual carriageway", "A road with a division separating opposing traffic"],
      ],
      explain: "All four are defined in this unit.",
      src: P(41, "Junctions; p.42 Emerging; p.41 building line; p.85 answer 13"),
    },
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
  blurb: "Bends, leaving a dual carriageway, and after the turn",
  xp: 30,
  items: [
    {
      id: "p1", type: "order", concept: "bends", visual: "bend-speed",
      prompt: "Dealing with a bend — put it in order.",
      steps: ["Look well ahead for warning signs and markings", "Apply MSPSL and get into position", "Slow down in good time — lowest speed as you enter", "Drive round under acceleration", "As you come out, check mirrors and make progress"],
      explain: "Spot it, MSPSL and position, slow before the bend, under acceleration through it, then mirrors and progress.",
      src: P(41, "Dealing with Bends"),
    },
    {
      id: "p2", type: "order", concept: "dual", visual: "decel-lane",
      prompt: "Leaving a dual carriageway to the left by a slip road.",
      steps: ["Move into the left-hand lane in good time", "Check mirrors and signal in good time", "Move into the deceleration lane", "Reduce speed there"],
      explain: "Left lane early, mirrors and signal, then into the deceleration lane and slow down there — never cut across from the right or middle lane.",
      src: P(44, "Leaving a dual carriageway"),
    },
    {
      id: "p3", type: "order", concept: "making-turn",
      prompt: "After the turn — in order.",
      steps: ["Check your mirrors", "Make sure your signal has cancelled", "Make progress — build up speed for the new road", "Keep a safe distance from the vehicle ahead"],
      explain: "Mirrors, cancel the signal, make progress, keep a safe distance — and allow time to adjust to the new road.",
      src: P(43, "After the Turn"),
    },
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
  blurb: "Real situations, one decision each",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "priority", visual: "stop-yield",
      scene: "🛑 You reach a Stop sign at 6 a.m. The major road is completely empty in both directions.",
      prompt: "What do you do?",
      options: ["Roll through slowly — it's clear", "Stop at the line, then go when safe", "Slow down and give way", "Sound the horn and go"], answer: 1,
      explain: "You must stop at the sign or stop line even if there is no traffic on the road you want to enter.",
      src: P(40, "Summaries") },
    { id: "s2", type: "choice", label: "Scenario", concept: "bends", visual: "bend-right",
      scene: "↪️ A sharp right-hand bend is ahead. A hedge hides what's round it.",
      prompt: "What's the right approach?",
      options: ["Move towards the centre line for a better view", "Keep to the left, slow down in good time, expect oncoming traffic in the middle of the road", "Keep your speed and brake in the bend", "Coast round in neutral"], answer: 1,
      explain: "Right-hand bend — keep to the left. Slow down in good time; your view is restricted and approaching traffic could be in the middle of the road.",
      src: P(41, "Dealing with Bends") },
    { id: "s3", type: "choice", label: "Scenario", concept: "turn-position", visual: "left-turn",
      scene: "🚴 You've just overtaken a cyclist and now want to turn left into a side road.",
      prompt: "What should you do?",
      options: ["Turn in quickly ahead of them", "Don't cut in on the cyclist — hold back and let them pass the junction", "Swing wide to give them room", "Sound the horn and turn"], answer: 1,
      explain: "Turning left — do not cut in on cyclists you have just overtaken.",
      src: P(42, "Position — turning left") },
    { id: "s4", type: "choice", label: "Scenario", concept: "emerging", visual: "junction-t",
      scene: "🚶 You're turning left into a side road. A pedestrian is already crossing it.",
      prompt: "Who has priority?",
      options: ["You — you're on the main road", "The pedestrian — they're already crossing the new road", "Whoever is faster", "You, if you signalled"], answer: 1,
      explain: "Look out for pedestrians already crossing the new road before you turn — they have priority.",
      src: P(42, "Pedestrians") },
    { id: "s5", type: "choice", label: "Scenario", concept: "building-line", visual: "building-line",
      scene: "🏢 You're emerging from a narrow street. A building on the corner hides the main road.",
      prompt: "What's the method?",
      options: ["Go quickly before anything comes", "Peep and creep: edge forward until your eyes are level with the obstruction and you can see the whole situation", "Stop well back and wait for a gap you can hear", "Sound the horn and pull out"], answer: 1,
      explain: "Only when your eyes are level with any obstruction can you see the whole situation and make a safe decision.",
      src: P(43, "Acute Angle Turning; p.85 answer 11") },
    { id: "s6", type: "choice", label: "Scenario", concept: "crossroads", visual: "right-turns-offside",
      scene: "✚ At a crossroads, you and an oncoming car are both turning right.",
      prompt: "Which is the safest method?",
      options: ["Right side to right side — turn behind each other", "Left side to left side — turn in front of each other", "Whoever arrived first goes, the other waits", "Both wait for a Garda"], answer: 0,
      explain: "Right side to right side is safest: both drivers get a clear view of approaching traffic. The layout, markings or a Garda may dictate otherwise.",
      src: P(44, "Turning right at crossroads") },
    { id: "s7", type: "choice", label: "Scenario", concept: "reserve", visual: "wide-reserve",
      scene: "🟩 You want to turn right onto a dual carriageway with a wide central reserve.",
      prompt: "How do you do it?",
      options: ["Wait until both carriageways are clear at once, then go", "Treat each half as a separate road: cross when clear from the right, wait in the reserve, then join when clear from the left", "Go into the right-hand lane of the far side", "Cross to the reserve and turn immediately"], answer: 1,
      explain: "With a wide reserve, treat each half as a separate road. (With a narrow reserve, don't emerge until both sides are clear.)",
      src: P(45, "Emerging right — wide central reserve") },
    { id: "s8", type: "choice", label: "Scenario", concept: "roundabouts", visual: "roundabout",
      scene: "⭕ You're on a roundabout and your exit is the next one.",
      prompt: "When do you signal left?",
      options: ["As you enter the roundabout", "As soon as you pass the exit before the one you want", "Only once you're in the exit", "You don't signal on roundabouts"], answer: 1,
      explain: "Check mirrors and give a left signal as soon as you pass the exit before the one you want — and check the nearside mirror before moving left.",
      src: P(45, "Leaving the roundabout") },
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
  blurb: "One right turn into a side road, step by step",
  xpPer: 10,
  situation: "↱ You're on a major road and want to turn right into a side road ahead. There's oncoming traffic, and the side road's corner is hidden by a building.",
  items: [
    { id: "w1", type: "choice", step: "First", concept: "assess", prompt: "When you see the junction ahead, what's the first thing you do?",
      options: ["Signal right", "Check your mirrors", "Slow down", "Move to the centre"], answer: 1,
      explain: "Check your mirrors — the first step in assessing any junction.", src: P(46, "Post-test Q6; answer p.85") },
    { id: "w2", type: "choice", step: "Routine", concept: "assess", prompt: "Which routine do you apply at a junction?",
      options: ["MSM only", "MSPSL", "Look–Assess–Go", "None — just turn"], answer: 1,
      explain: "MSPSL is essential at any junction.", src: P(46, "Post-test Q7; answer p.85") },
    { id: "w3", type: "choice", step: "Assess", concept: "building-line", visual: "building-line", prompt: "The building hides your view into the side road. That's called…",
      options: ["A blind spot", "A change in building line", "A zone of vision", "An acute angle"], answer: 1,
      explain: "A building line is where a building conceals your view into a junction — look for changes in it on approach.", src: P(41, "Assess") },
    { id: "w4", type: "choice", step: "Position", concept: "turn-position", visual: "right-turn-position", prompt: "Where do you position to turn right?",
      options: ["Well to the left", "As close to the middle of the road as is safe", "Over the centre line", "In the oncoming lane"], answer: 1,
      explain: "Turning right — as close to the middle of the road as is safe, leaving room for approaching traffic.", src: P(42, "Position") },
    { id: "w5", type: "choice", step: "Oncoming traffic", concept: "give-way", prompt: "Oncoming traffic is approaching. You…",
      options: ["Accelerate to clear it", "Wait — don't start the turn until the oncoming traffic and the minor road are clear", "Start slowly to see if they'll give way", "Cut the corner to be quicker"], answer: 1,
      explain: "Turning right from a major road into a minor one, you give way to oncoming traffic — and don't commence the turn until it and the minor road are clear.", src: P(48, "Retention Q13; p.40") },
    { id: "w6", type: "choice", step: "The turn", concept: "making-turn", prompt: "As you turn, you must not…",
      options: ["Use the accelerator", "Cut the corner", "Look into the new road", "Keep the signal on"], answer: 1,
      explain: "You MUST NOT cut the corner or cross to the right-hand carriageway until you're sure you can clear it safely.", src: P(43, "Crossing the path of other vehicles") },
    { id: "w7", type: "choice", step: "After", concept: "making-turn", prompt: "In the new road, first…",
      options: ["Speed up hard", "Check your mirrors and make sure the signal has cancelled", "Stop and look back", "Flash your lights"], answer: 1,
      explain: "After the turn: mirrors, signal cancelled, make progress, safe distance.", src: P(43, "After the Turn") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 88. Q10 is omitted (see the top of this file).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(n <= 10 ? 47 : 48, `Retention test Q${n}; answer p.88`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "'Driving Essential Skills' advises that any extra load being carried in or on a vehicle", ["is unlikely to affect the handling characteristics", "will affect its handling on bends", "will cause a vehicle to over-steer", "will improve road holding on bends"], 1, "bends"),
    R(2, "Driving with under-inflated tyres will", ["result in a lighter feel to the steering and cause the tyres to overheat", "cause tyres to overheat but result in increased road holding", "affect both road holding and tyre wear", "improve road holding on bends"], 2, "bends"),
    R(3, "Driving a vehicle with over-inflated tyres will", ["increase road holding in a bend", "not reduce road holding in a bend", "reduce the risk of uneven tyre wear", "increase the risk of skidding in bends"], 3, "bends"),
    R(4, "For vehicle stability, the correct procedure for driving in bends is to", ["ensure that you accelerate throughout the bend", "always choose a low gear to control speed", "drive round it 'under acceleration'", "slow down as you drive round it"], 2, "under-accel", "bend-speed"),
    R(5, "A driver in a bend can see the road ahead is clear and wishes to accelerate. They should only increase speed", ["just after entering the bend", "after reaching the midpoint of the bend", "as the road straightens", "after changing to a lower gear in the bend"], 2, "bends", "bend-speed"),
    R(6, "The Rules of the Road states that at a stop line, drivers", ["must stop if they can see other traffic approaching", "must always stop", "need not stop if they can see the major road is clear", "need only stop if there is also an octagonal stop sign"], 1, "stop-yield", "stop-yield"),
    R(7, "A driver approaching a left-hand bend finds that their view is restricted. They should", ["move to the centre of the road to improve the view", "move towards the centre line, after the crown of the bend", "keep well to the left on approach to the bend", "approach at a speed which will allow the car to be stopped safely within the limits of vision"], 3, "bends", "bend-left"),
    R(8, "The correct road position to take on approach to a left-hand bend is", ["in the centre of your lane to give a better view", "as close to the middle of the road as is safe", "tight to the left", "just over the centre line of the road"], 0, "bends", "bend-left"),
    R(9, "The correct road position to take on approach to a right-hand bend is", ["in the centre of your lane", "as close to the middle of the road as is safe", "well to the left to give a better view", "just over the centre line"], 2, "bends", "bend-right"),
    R(11, "'Driving Essential Skills' advises that when turning left into a minor road the driver", ["may need to swing wide if the turning is sharp", "should slow down sufficiently to avoid ending up on the wrong side of the minor road", "should be aware that left turns are often not as sharp as right turns", "should avoid cutting the corner"], 1, "junction-speed", "left-turn"),
    R(12, "With regard to speed on approach to junctions, 'Driving Essential Skills' advises that the driver", ["should adjust speed as necessary", "must take junctions at 16 km/h or less", "need not slow down unless intending to turn left or right", "should usually slow down and select third gear"], 0, "junction-speed"),
    R(13, "A driver approaching a minor road from a major road to turn right sees oncoming traffic on the major road. The driver should be aware that they", ["should accelerate to clear the approaching traffic", "should not commence the turn until all oncoming traffic and the minor road is clear", "should commence the turn slowly, to see if the approaching traffic will give way", "may accelerate and cut the corner into the minor road"], 1, "give-way", "right-turn-position"),
    R(14, "The best description of the term \"emerging\" is", ["leaving one road to cross, join or turn into another road", "joining a major road at a T-junction", "giving equal priority to other traffic at a Y-junction", "peeping and creeping at a closed junction"], 0, "emerging", "junction-t"),
    R(15, "At unmarked junctions a driver should always", ["assume priority if on the wider road", "assume priority", "assume that other drivers will respond in a safe and sensible manner", "give priority to traffic approaching from their right"], 3, "stop-yield"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "junction-def", visual: "junction-cross",
      prompt: "A junction is…", options: ["Only where traffic lights are", "Any point where two or more roads meet", "Only a crossroads", "Where a minor road ends"], answer: 1,
      explain: "Any point where two or more roads meet, marked or unmarked.", src: P(41, "Dealing with Junctions") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "under-accel", visual: "bend-speed",
      scene: "↩️ You're halfway round a long left-hand bend.",
      prompt: "What should your feet be doing?", options: ["Clutch down, coasting", "Gentle accelerator — just enough to carry the car round", "Braking steadily", "Accelerating hard"], answer: 1,
      explain: "Drive round under acceleration — don't coast, don't accelerate fiercely.", src: P(41, "Select the appropriate gear") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "stop-yield",
      statement: "You must always stop at a stop sign, even when the road is clear.", answer: true,
      explain: "You must ALWAYS stop at a stop sign.", src: P(41, "You must always stop") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "junction-def",
      prompt: "Which is a roundabout?", options: ["roundabout", "junction-cross", "junction-t", "junction-y"], answer: 0,
      names: ["Roundabout", "Crossroads", "T-junction", "Y-junction"],
      explain: "A roundabout keeps traffic flowing; traffic from the immediate right usually has priority.", src: P(45, "Roundabouts") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "roundabouts", visual: "roundabout-lanes",
      prompt: "In the roundabout — match the lane.", pairs: [["Going left", "Left lane"], ["Going straight ahead", "Left lane, too"], ["Turning right", "Right lane"]],
      explain: "In the roundabout: left lane to go left or straight ahead, right lane to turn right.", src: P(45, "In the roundabout") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "bends",
      prompt: "Order: dealing with a bend.", steps: ["Look ahead for signs and markings", "MSPSL and position", "Slow down in good time", "Drive round under acceleration", "Mirrors, make progress"],
      explain: "Spot, MSPSL and position, slow, under acceleration, then mirrors and progress.", src: P(41, "Dealing with Bends") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "dual", visual: "decel-lane",
      scene: "🛣️ You're in the right-hand lane of a dual carriageway and suddenly see your exit's slip road.",
      prompt: "What do you do?", options: ["Cut across to the deceleration lane", "Carry on and take the next exit", "Stop and wait for a gap", "Brake hard in the right lane"], answer: 1,
      explain: "Do not cut from the right or middle lane directly to the deceleration lane — move left in good time, or go on to the next exit.", src: P(44, "Leaving a dual carriageway") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "bends", visual: "bend-right",
      prompt: "On approach to a right-hand bend, position…", options: ["In the centre of your lane", "As close to the middle as is safe", "Well to the left to give a better view", "Just over the centre line"], answer: 2,
      explain: "Well to the left for the better view.", src: P(47, "Retention Q9 (answer c, p.88)") },
    { id: "c9", skill: "application", type: "choice", label: "Application", concept: "mini",
      prompt: "At a mini roundabout, a lorry ahead is already on it. You should…", options: ["Enter alongside it", "Not enter unless certain it can clear your route", "Sound the horn", "Drive over the centre marking"], answer: 1,
      explain: "Limited space: don't enter unless certain other vehicles on it can clear the route you intend to take.", src: P(45, "Limited space means that…") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "stop-yield",
      prompt: "At unmarked junctions a driver should always…", options: ["Assume priority if on the wider road", "Assume priority", "Assume others will respond sensibly", "Give priority to traffic from their right"], answer: 3,
      explain: "At unmarked junctions all roads have equal priority — give way to traffic on your right.", src: P(48, "Retention Q15 (answer d, p.88)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "1.4",
  number: "1.4",
  title: "Junctions & Bends",
  pages: [40, 48],
  intro: "Bends, every kind of junction, dual carriageways and roundabouts.",
  objectives: [
    "How to drive round a bend",
    "The definition of a junction",
    "How to turn into a side road, and how to emerge",
    "How to approach a crossroads to turn left, right or go ahead",
    "How to enter and leave dual carriageways",
    "How to approach and use roundabouts",
  ],
  objectivesSrc: P(40, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...junctions, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "junction-spotter", icon: "🗺️", label: "Junction Spotter", rule: { activity: "junctions", min: 100 } },
    { id: "junction-specialist", icon: "🏆", label: "Junction Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
