/*
  ===========================================================================
  BOOK 1 · UNIT 1.6 — OVERTAKING

  Source: "Driving Procedures & Road Safety — Resource Workbook, Book 1"
  (Driver Education Supplies), book pages 53–58, with the post-test model
  answers on page 85 and the retention-test answers on page 88
  (1d 2b 3c 4c 5b 6d 7b 8b 9c 10b).

  The answer key agrees with the unit text throughout, so all ten
  retention questions are used. The page 85–86 model answers are numbered
  so that the "golden rule" (Q5) appears as the last line of answer 4:
  "If in doubt, don't overtake"; answers 5 and 6 both describe what to do
  when a driver cuts in after overtaking you.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 1, unit: "1.6", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Overtaking is a manoeuvre",
    text: "You may overtake stationary vehicles, obstructions and moving vehicles — without causing danger or inconvenience to approaching traffic or the vehicle being overtaken. It can put you on a collision course with approaching traffic, so it needs very sound judgement of speed and distance. Overtaking at the wrong time or place is one of the major causes of serious road accidents.",
    src: P(53, "Unit introduction"),
  },
  "decision": {
    title: "The decision to overtake",
    text: "Make sure the road ahead is clear so you can overtake and get back to your own side safely. Never follow another overtaking vehicle. Give way to faster traffic already overtaking. Check the mirror and blind spots well in advance. Signal in good time. Only start when it's safe, overtake with the minimum of delay, then check the mirror, signal and return gradually — without cutting across the vehicle you passed. Never break the speed limit, even when overtaking.",
    src: P(53, "Decision to Overtake"),
  },
  "golden-rule": {
    title: "The golden rule",
    text: "If in doubt, don't overtake. Only overtake at permitted places and only if it is safe — watch for signs, markings and features that restrict your view: hills, dips, bends, bridges, roads narrowing, pedestrian crossings.",
    src: P(85, "Post-test answer 4; p.53 Summaries"),
  },
  "must-not": {
    title: "Where you must not overtake",
    text: "At or near a pelican or zebra crossing or pedestrian signals; where a sign or marking prohibits it; approaching a junction, corner, bend, dip, hump-back bridge or level crossing; at the brow of a hill; on a narrow road or where the road narrows; where you'd drive on chevrons or hatching; where you can't see far enough ahead; in dead ground; where weather reduces visibility; in the left-hand lane of a dual carriageway or motorway when traffic is moving at normal speed.",
    src: P(54, "You must not overtake; Do not overtake (p.55)"),
  },
  "white-lines": {
    title: "Double white lines",
    text: "Do not overtake if you would cross or straddle double solid white lines, or where the line nearest to you is continuous.",
    src: P(54, "Do not overtake"),
  },
  "crossings": {
    title: "Pedestrian crossings",
    text: "In the zigzag area of a crossing you must not overtake the moving vehicle nearest the crossing, or one that has stopped to let a pedestrian cross. Even with no zigzags, don't overtake on the approach to a crossing.",
    src: P(54, "Do not overtake"),
  },
  "on-left": {
    title: "Overtaking on the left",
    text: "Normally overtake on the right. You may overtake on the left only when: the vehicle ahead is positioned and signalling to turn right and you can pass safely on the left (beware of vehicles crossing your path, hidden by it); you're correctly positioned to turn left at a junction; you're in a one-way street (but not a dual carriageway or motorway); or slower vehicles are queuing to your right — you must not move into a lane on your left just to overtake.",
    src: P(56, "Overtaking on the Left; p.54"),
  },
  "being-overtaken": {
    title: "Being overtaken",
    text: "Don't accelerate — keep the same pace, unless the overtaking vehicle isn't making ground: then ease off the gas and let it in. Keep as near to the left as is safe, and be alert in case it pulls back in front of you suddenly. If it cuts in too close, reduce speed and allow a safety gap.",
    src: P(54, "Procedure when being overtaken; p.85 answers 5, 6"),
  },
  "stationary": {
    title: "Passing stationary vehicles",
    text: "If the obstruction is on your side, oncoming traffic has priority. If it's on the other side, don't assume approaching traffic will give way. With obstructions on both sides, be prepared to give way. Never rely on approaching traffic to give you priority.",
    src: P(54, "Passing stationary vehicles"),
  },
  "mspsl-stationary": {
    title: "MSPSL past an obstruction",
    text: "Assess the speed and position of following and approaching traffic; look behind, underneath and between parked vehicles for dangers on the footpath. If you have to wait, keep well back — a clear zone of vision without blocking approaching traffic. When you can go, move out early: a gradual change of course.",
    src: P(54, "Use the MSPSL routine"),
  },
  "clearance": {
    title: "Adequate clearance",
    text: "Always give adequate clearance: a pedestrian may step out, a door could open, the vehicle may move off. The closer you get to the obstruction, the lower your speed needs to be. Downhill, be prepared to let oncoming traffic — especially large or heavy vehicles — have a clear run through.",
    src: P(54, "Always give adequate clearance"),
  },
  "moving": {
    title: "Overtaking moving vehicles",
    text: "Only overtake when it's safe and necessary. Not where your view is restricted, where you'd cause danger or inconvenience, or where signs and markings forbid it. You must be able to see far enough ahead and behind. Before overtaking: anticipate the driver ahead, look for signs, markings and signals, and never follow another vehicle through without your own decision.",
    src: P(54, "Overtaking moving vehicles; p.55 Before overtaking"),
  },
  "procedure": {
    title: "The overtaking procedure",
    text: "Mirrors first: assess following traffic. Position: near enough to pull out smoothly, never closer than your braking distance. Speed: keep pace, consider a lower gear for a reserve of power. Look: road surface, the driver ahead, hazards, approaching traffic — decide. Mirrors again: don't overtake if someone's overtaking you or there's no gap to return to. Signal. Manoeuvre: final checks, out smoothly, promptly, adequate clearance, back in when you can see it in your mirror — don't cut in.",
    src: P(55, "Procedure for overtaking; p.56 Manoeuvre"),
  },
  "sequence": {
    title: "PSL-MSM — in reality, MSPSL several times",
    text: "The basic procedure looks like PSL-MSM (Position, Speed, Look + Mirror, Signal, Manoeuvre) — but always check the mirrors first. In reality: M(S)PSL on approach to the target vehicle; MSPSL in position to overtake; MSPSL during the manoeuvre, as you may see a further hazard; and MSPSL to move back to the left.",
    src: P(56, "From the above; In reality"),
  },
  "hills": {
    title: "Overtaking on hills",
    text: "Uphill, you must get back to the left side BEFORE the brow. Downhill, slow-moving vehicles — particularly heavy ones — can gather speed quickly as they descend. Obstructions on hills need special care: act sooner for an extra safety margin, as gradients affect braking, steering and acceleration.",
    src: P(56, "On hills; p.85 answer 2"),
  },
  "large": {
    title: "Large and long vehicles",
    text: "Leave a greater gap before the manoeuvre to get a clear zone of vision ahead — the overtake will take much longer. A \"LONG VEHICLE\" sign means it's at least thirteen metres long: you need extra road length to pass and return safely to the left.",
    src: P(56, "Overtaking large vehicles; p.53"),
  },
  "judging": {
    title: "Judging distance and speed",
    text: "Be aware of your own speed and the speed of the vehicle you're overtaking — it can take a considerable distance just to catch up with it.",
    src: P(56, "Judging distance and speed"),
  },
  "animals": {
    title: "Horses and animals",
    text: "Animals are frightened by noise. Allow enough room, don't sound the horn, and look out for signals from the person in charge of the animals — act sensibly on what you see.",
    src: P(56, "Passing horses and riders"),
  },
  "crawler": {
    title: "Crawler lanes",
    text: "Where there are double white lines with two lanes going uphill and one going down — on national routes, dual carriageways, on a hill.",
    src: P(85, "Post-test answer 7"),
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
    "If in doubt, don't overtake",
    "Mirrors first — then Position, Speed, Look; Mirrors, Signal, Manoeuvre",
    "Normally overtake on the right; the left only in the exceptions",
  ],
  cards: [
    {
      icon: "🏎️",
      kicker: "Overtaking",
      title: "A manoeuvre that can put you head-on",
      visual: "overtake-path",
      body: [
        "You may overtake stationary vehicles, obstructions and moving vehicles — without causing danger or inconvenience to approaching traffic or the vehicle being overtaken.",
        "Overtaking can put you on a collision course with approaching traffic. It needs very sound judgement of speed and distance. Overtaking at the wrong time or place is one of the major causes of serious road accidents.",
      ],
      think: ["👀 Can I see far enough ahead — and behind?", "📏 Is there room to get back in?", "🤔 Is it necessary?"],
      concept: "why",
      src: P(53, "Unit introduction"),
    },
    {
      icon: "✅",
      kicker: "Decision to overtake",
      title: "Before you commit",
      list: [
        "The road ahead is clear — room to overtake and get back to your own side",
        "Never follow another overtaking vehicle",
        "Give way to faster traffic already overtaking",
        "Check the mirror and blind spots well in advance",
        "Signal in good time — early enough to be seen, understood and acted on",
        "Start only when safe; then accelerate and overtake with the minimum of delay",
        "Mirror, signal, return gradually — don't cut across the vehicle you passed",
        "Never break the speed limit, even when overtaking",
      ],
      callout: "The golden rule: if in doubt, don't overtake.",
      concept: "decision",
      src: P(53, "Decision to Overtake"),
    },
    {
      icon: "🚫",
      kicker: "Where not to",
      title: "Places you must not overtake",
      visual: "no-overtake-places",
      ask: {
        prompt: "There are no zigzag lines, but a pedestrian crossing is just ahead. Can you overtake on the approach?",
        options: ["Yes — no zigzags, no rule", "No — don't overtake on the approach to a crossing", "Only if nobody is on it"],
        answer: 1,
      },
      sections: [
        { head: "Approaching", list: ["A pedestrian crossing (pelican, zebra, pedestrian signals)", "A junction, corner or bend", "A level crossing", "A dip, the brow of a hill, a hump-back bridge", "Dead ground — a dip that hides oncoming traffic"] },
        { head: "Also not", list: ["Where a sign or marking prohibits it — a \"No Overtaking\" sign", "Where you'd drive on chevrons or hatch markings", "On a narrow road, or where the road narrows", "Where you can't see far enough ahead", "Where weather reduces visibility", "Where you could come into conflict with other road users", "In the left lane of a dual carriageway or motorway when traffic moves at normal speed"] },
      ],
      concept: "must-not",
      src: P(54, "You must not overtake; p.55"),
    },
    {
      icon: "〰️",
      kicker: "White lines",
      title: "Double white lines",
      visual: "double-white",
      body: [
        "Do not overtake if you would cross or straddle double solid white lines — or where the line nearest to you is continuous.",
        "Pedestrian crossings: in the zigzag area you must not overtake the moving vehicle nearest the crossing, or one that has stopped to let a pedestrian cross.",
      ],
      concept: "white-lines",
      src: P(54, "Do not overtake"),
    },
    {
      icon: "🅿️",
      kicker: "Stationary vehicles",
      title: "Whose side is the obstruction on?",
      visuals: ["pass-stationary", "obstructions-both"],
      ask: {
        prompt: "A van is parked on YOUR side of the road. A car is coming towards you. Who has priority?",
        options: ["You — you were there first", "The oncoming car", "Whoever flashes first"],
        answer: 1,
      },
      list: [
        "On your side — oncoming traffic has priority",
        "On the other side — don't assume approaching traffic will give way",
        "On both sides — be prepared to give way",
        "Never rely on approaching traffic to give you priority",
      ],
      concept: "stationary",
      src: P(54, "Passing stationary vehicles"),
    },
    {
      icon: "↗️",
      kicker: "MSPSL past an obstruction",
      title: "Wait well back, move out early",
      visual: "pass-stationary",
      list: [
        "Assess the speed and position of following and approaching traffic",
        "Look behind, underneath and between parked vehicles for dangers on the footpath",
        "If you must wait, keep well back: a clear zone of vision, without impeding approaching traffic",
        "When you can go, move out early — a gradual change of course",
      ],
      sections: [
        { head: "Always give adequate clearance", list: ["A pedestrian may step out", "A door could open", "The vehicle may move off", "The closer you get, the lower your speed needs to be"] },
      ],
      callout: "Downhill, be ready to let oncoming traffic — especially large vehicles — have a clear run through. Don't take priority for granted.",
      concept: "mspsl-stationary",
      src: P(54, "Use the MSPSL routine; Adequate clearance"),
    },
    {
      icon: "🚚",
      kicker: "Moving vehicles",
      title: "Safe — and necessary?",
      visual: "overtake-view",
      ask: {
        prompt: "Why hold back from the vehicle you want to overtake?",
        options: ["To save fuel", "You can see more clearly — and won't compromise safety", "So it can speed up"],
        answer: 1,
      },
      body: ["Only overtake when it's safe and necessary. You must be able to see far enough ahead and behind."],
      sections: [
        { head: "Before overtaking", list: ["Anticipate the actions of the driver ahead", "Look for road signs and markings", "Look for signals from the driver ahead and vehicles further ahead", "Don't follow another vehicle through — make your own decision from what you see and know"] },
      ],
      concept: "moving",
      src: P(54, "Overtaking moving vehicles; p.55; p.85 answer 1"),
    },
    {
      icon: "🪞",
      kicker: "Procedure for overtaking",
      title: "Mirrors first — always",
      visual: "overtake-path",
      sections: [
        { head: "Mirrors", list: ["ALWAYS check your mirrors first", "Assess the speed and position of following traffic"] },
        { head: "Position", list: ["Near enough to pull out smoothly when ready", "Never closer than your braking distance"] },
        { head: "Speed", list: ["Keep pace with the vehicle ahead", "Consider a lower gear for a reserve of power"] },
        { head: "Look", list: ["The road surface", "The driver ahead; road hazards ahead", "Speed and position of approaching traffic", "DECIDE whether it's safe"] },
        { head: "Mirrors — again", list: ["Following traffic's position and speed", "Not if a following driver has begun to overtake you", "Not if there's no suitable gap to return into"] },
        { head: "Signal", list: ["Always signal — to help the driver you're overtaking, approaching and following traffic"] },
        { head: "Manoeuvre", list: ["Final checks ahead and behind; move out smoothly", "Overtake as promptly as you can, with adequate clearance", "Move in when you can see it in your rear-view mirror", "Don't cut in too soon"] },
      ],
      concept: "procedure",
      src: P(55, "Procedure for overtaking; p.56 Manoeuvre"),
    },
    {
      icon: "🔁",
      kicker: "The sequence",
      title: "PSL-MSM — and MSPSL, again and again",
      visual: "mspsl",
      body: ["The basic procedure looks like PSL-MSM — Position, Speed, Look + Mirror, Signal, Manoeuvre — but always check your mirrors first."],
      sections: [
        { head: "In reality", list: ["M(S)PSL on approach to the target vehicle — consider a signal to get into position", "MSPSL when in position to overtake", "MSPSL during the manoeuvre — you may see a further hazard", "MSPSL to move back to the left"] },
      ],
      concept: "sequence",
      src: P(56, "From the above; In reality"),
    },
    {
      icon: "⬅️",
      kicker: "Overtaking on the left",
      title: "Only in the exceptions",
      visuals: ["overtake-left", "queue-left"],
      ask: {
        prompt: "The car ahead is in position and signalling right. Can you pass it on the left?",
        options: ["Yes, if it's safe — and watch for vehicles crossing your path", "Never — always on the right", "Only if you sound the horn"],
        answer: 0,
      },
      list: [
        "A vehicle ahead is positioned and signalling to turn right, and you can pass safely on the left",
        "You're correctly positioned to turn left at a junction",
        "You're in a one-way street (not a dual carriageway or motorway)",
        "Slower vehicles are queuing to your right — and the left lane is moving more quickly",
      ],
      callout: "Don't move into a lane on your left simply to overtake.",
      concept: "on-left",
      src: P(56, "Overtaking on the Left; p.54"),
    },
    {
      icon: "🫸",
      kicker: "Being overtaken",
      title: "Let them by",
      visual: "being-overtaken",
      list: [
        "Don't accelerate — keep the same pace",
        "If the overtaking vehicle isn't making ground, ease off the gas and let it in",
        "Keep as near to the left as is safe",
        "Be alert — it may pull back in front of you suddenly",
      ],
      callout: "If a driver cuts in too close: reduce your speed and allow the safety gap.",
      concept: "being-overtaken",
      src: P(54, "Procedure when being overtaken; p.85 answers 5, 6"),
    },
    {
      icon: "⛰️",
      kicker: "Special problems",
      title: "Hills, long vehicles, animals",
      visuals: ["overtake-large", "horse-rider"],
      sections: [
        { head: "On hills", list: ["Uphill: get back to the left BEFORE the brow", "Downhill: slow heavy vehicles can gather speed quickly as they descend"] },
        { head: "Large vehicles", list: ["Leave a greater gap first, for a clear zone of vision ahead", "It will take much longer to complete", "\"LONG VEHICLE\": at least 13 m long — extra road length to pass and return"] },
        { head: "Judging distance and speed", list: ["Be aware of your own speed and the target vehicle's", "It can take a considerable distance just to catch up"] },
        { head: "Horses and animals", list: ["Animals are frightened by noise", "Allow enough room; don't sound the horn", "Watch for signals from the person in charge"] },
      ],
      concept: "hills",
      src: P(56, "Special problems when overtaking; p.53"),
    },
    {
      icon: "🛣️",
      kicker: "Crawler lane",
      title: "Two lanes up, one down",
      visual: "crawler-lane",
      body: ["You can expect a crawler lane where there are double white lines with two lanes going uphill and one going down — on national routes, dual carriageways, on a hill."],
      concept: "crawler",
      src: P(85, "Post-test answer 7"),
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
    { id: "r1", type: "flash", concept: "golden-rule",
      front: "What is the golden rule about overtaking?",
      back: "If in doubt, don't overtake.", src: P(85, "Post-test answer 4–5") },
    { id: "r2", type: "flash", concept: "moving", visual: "overtake-view",
      front: "Why is it best to keep well back before overtaking?",
      back: "You can see more clearly — and you won't compromise safety.", src: P(85, "Post-test answer 1") },
    { id: "r3", type: "truefalse", concept: "decision",
      statement: "You may break the speed limit briefly to complete an overtake.", answer: false,
      explain: "You must not break the speed limit, even when overtaking.", src: P(53, "Decision to Overtake") },
    { id: "r4", type: "fill", concept: "large", visual: "overtake-large",
      before: "A \"LONG VEHICLE\" sign means the vehicle is at least", after: "long.",
      options: ["thirteen metres", "ten metres", "eight metres", "twenty metres"], answer: "thirteen metres",
      explain: "You'll need extra road length to pass it and safely return to the left.", src: P(53, "Decision to Overtake") },
    { id: "r5", type: "truefalse", concept: "decision",
      statement: "It's safe to follow another vehicle that is overtaking — it has already checked the road.", answer: false,
      explain: "Never follow another overtaking vehicle. Make your own decision from what you can see and know.", src: P(53, "Decision to Overtake; p.55") },
    { id: "r6", type: "flash", concept: "procedure",
      front: "What should your speed be before overtaking?",
      back: "Fast enough to keep up with the vehicle ahead, with enough reserve of power to pass it safely.", src: P(85, "Post-test answer 9") },
    { id: "r7", type: "flash", concept: "procedure", visual: "overtake-path",
      front: "Where should you position before overtaking?",
      back: "Near enough to the vehicle ahead to pull out smoothly — but not so close that you can't get a good view.", src: P(85, "Post-test answer 8") },
    { id: "r8", type: "fill", concept: "hills",
      before: "Overtaking uphill, you must be back on the left BEFORE the", after: "of the hill.",
      options: ["brow", "foot", "bend", "middle"], answer: "brow",
      explain: "At the brow your view of oncoming traffic is restricted.", src: P(56, "On hills") },
    { id: "r9", type: "truefalse", concept: "procedure",
      statement: "You should always give a signal when overtaking.", answer: true,
      explain: "Always signal — it helps the driver you're overtaking, approaching traffic and following traffic.", src: P(55, "Signal") },
    { id: "r10", type: "choice", label: "Identify the correct rule", concept: "white-lines", visual: "double-white",
      prompt: "Double white lines: the line nearest to you is continuous. Can you cross it to overtake?",
      options: ["Yes, if the road is clear", "No", "Yes, if you're quick", "Only on a straight road"], answer: 1,
      explain: "Do not overtake where you'd cross or straddle double solid lines, or where the line nearest you is continuous.", src: P(54, "Do not overtake") },
  ],
};

/* ---------------------------------------------------------------------------
   3. OVERTAKE OR NOT? — recognition: picture questions and sorts.
   --------------------------------------------------------------------------- */
const overtake = {
  id: "overtake",
  kind: "items",
  mode: "matching",
  title: "Overtake or Not?",
  blurb: "Read the road: spot it, sort it",
  xp: 25,
  items: [
    { id: "o1", type: "picture", label: "Spot it", concept: "on-left",
      prompt: "Which picture shows a permitted overtake on the LEFT?",
      options: ["overtake-left", "overtake-path", "being-overtaken", "double-white"], answer: 0,
      names: ["Passing a car turning right", "Overtaking on the right", "Being overtaken", "Double white lines"],
      explain: "When the vehicle ahead is positioned and signalling to turn right, you may pass on the left if it's safe.", src: P(56, "Overtaking on the Left") },
    { id: "o2", type: "picture", label: "Spot it", concept: "white-lines",
      prompt: "Which picture shows double white lines?",
      options: ["double-white", "hatched", "crawler-lane", "queue-left"], answer: 0,
      names: ["Double white lines", "Hatched markings", "Crawler lane", "Queue on the right"],
      explain: "Don't cross or straddle double solid lines, or a continuous line nearest you.", src: P(54, "Do not overtake") },
    { id: "o3", type: "picture", label: "Spot it", concept: "crawler",
      prompt: "Which picture shows a crawler lane?",
      options: ["crawler-lane", "two-plus-one", "multi-lane", "dual-carriageway"], answer: 0,
      names: ["Crawler lane", "2 + 1 road", "Three-lane road", "Dual carriageway"],
      explain: "A crawler lane: double white lines, two lanes going uphill and one going down.", src: P(85, "Post-test answer 7") },
    {
      id: "o4", type: "sort", concept: "must-not",
      prompt: "Could you overtake here, if it's otherwise safe?",
      categories: [
        { id: "no", label: "Must NOT overtake" },
        { id: "may", label: "May overtake" },
      ],
      cards: [
        { text: "Approaching a hump-back bridge", cat: "no" },
        { text: "In the zigzags of a zebra crossing", cat: "no" },
        { text: "On the approach to a level crossing", cat: "no" },
        { text: "Where you'd drive on hatch markings", cat: "no" },
        { text: "Approaching dead ground", cat: "no" },
        { text: "A long straight road with a clear view ahead and behind", cat: "may" },
        { text: "A broken centre line, nothing coming, a gap to return into", cat: "may" },
      ],
      explain: "Don't overtake where your view is restricted, at crossings, junctions, bridges or hatching. Only where you can see far enough ahead and behind.", src: P(54, "You must not overtake; p.55"),
    },
    {
      id: "o5", type: "sort", concept: "on-left",
      prompt: "Passing on the left: permitted, or not?",
      categories: [
        { id: "yes", label: "Permitted on the left" },
        { id: "no", label: "Not permitted" },
      ],
      cards: [
        { text: "The car ahead is in position and signalling right", cat: "yes" },
        { text: "You're correctly positioned to turn left at a junction", cat: "yes" },
        { text: "You're in a one-way street", cat: "yes" },
        { text: "A slower queue is on your right and your lane moves faster", cat: "yes" },
        { text: "Moving into a left lane just to get past someone", cat: "no" },
        { text: "Left lane of a motorway, traffic at normal speed", cat: "no" },
      ],
      explain: "Overtake on the right normally. The left only in the exceptions — never move into a left lane simply to overtake.", src: P(56, "Overtaking on the Left; p.54") },
    {
      id: "o6", type: "sort", concept: "stationary",
      prompt: "Passing a parked vehicle: who has priority?",
      categories: [
        { id: "them", label: "Oncoming traffic" },
        { id: "ready", label: "Be prepared to give way" },
      ],
      cards: [
        { text: "The obstruction is on your side", cat: "them" },
        { text: "Obstructions on both sides", cat: "ready" },
        { text: "The obstruction is on their side", cat: "ready" },
      ],
      explain: "On your side, oncoming traffic has priority. Otherwise don't assume they'll give way — be prepared to.", src: P(54, "Passing stationary vehicles") },
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
  blurb: "The procedure and the special problems",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "procedure", visual: "overtake-path",
      prompt: "Match each step of the procedure to what you do.",
      pairs: [
        ["Mirrors", "Assess following traffic — always first"],
        ["Position", "Near enough to pull out smoothly"],
        ["Speed", "Keep pace; a lower gear for reserve power"],
        ["Look", "Assess approaching traffic and DECIDE"],
      ],
      explain: "Mirrors first, then Position, Speed, Look — then Mirrors, Signal, Manoeuvre.", src: P(55, "Procedure for overtaking") },
    {
      id: "m2", type: "match", concept: "hills",
      prompt: "Match the special problem to the key point.",
      pairs: [
        ["Overtaking uphill", "Back to the left before the brow"],
        ["Overtaking downhill", "Slow heavy vehicles gather speed quickly"],
        ["Long vehicle", "Extra road length to pass and return"],
        ["Horse and rider", "Plenty of room, no horn"],
      ],
      explain: "Each needs more care than an ordinary overtake.", src: P(56, "Special problems when overtaking") },
    {
      id: "m3", type: "match", concept: "sequence",
      prompt: "In reality — match each stage to its routine.",
      pairs: [
        ["On approach to the target vehicle", "M(S)PSL"],
        ["In position to overtake", "MSPSL"],
        ["During the manoeuvre", "MSPSL — a further hazard may appear"],
        ["Returning", "MSPSL to move back to the left"],
      ],
      explain: "You may use each feature of MSPSL several times in one overtake.", src: P(56, "In reality") },
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
  blurb: "Overtaking, step by step",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "procedure", visual: "overtake-path",
      prompt: "Overtaking a moving vehicle — put the procedure in order.",
      steps: ["Mirrors — assess following traffic", "Position — near enough to pull out smoothly", "Speed — keep pace, consider a lower gear", "Look — assess and decide", "Mirrors — check again", "Signal", "Manoeuvre — out smoothly, pass promptly, back in without cutting in"],
      explain: "Mirrors first, then PSL, then MSM.", src: P(55, "Procedure for overtaking") },
    { id: "p2", type: "order", concept: "mspsl-stationary", visual: "pass-stationary",
      prompt: "A van is parked on your side ahead, with traffic coming — in order.",
      steps: ["Assess following and approaching traffic", "Look behind, under and between parked vehicles", "Wait well back while oncoming traffic passes", "Move out early with a gradual change of course", "Pass with adequate clearance"],
      explain: "Oncoming traffic has priority; wait well back, then a gradual change of course with clearance.", src: P(54, "Use the MSPSL routine") },
    { id: "p3", type: "order", concept: "procedure",
      prompt: "The manoeuvre itself — in order.",
      steps: ["Final checks ahead and behind", "Move out smoothly", "Overtake as promptly as you can, with adequate clearance", "See the vehicle in your rear-view mirror", "Move back in — don't cut in"],
      explain: "Move back in only when you can see you're clear of the vehicle in your rear-view mirror.", src: P(56, "Manoeuvre") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "stationary", visual: "pass-stationary",
      scene: "🚐 A delivery van is stopped on your side of the road. A car is coming the other way.",
      prompt: "Who has priority?",
      options: ["You have equal priority", "You do — you're on the main road", "You must signal and go", "Give priority to the approaching car"], answer: 3,
      explain: "As a general rule, if the obstruction is on your side, give priority to approaching traffic.", src: P(58, "Retention Q1 (answer d, p.88)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "on-left", visual: "overtake-left",
      scene: "↪️ The car ahead has moved to the centre and is signalling right. There's room on its left, and a side road to your left just ahead.",
      prompt: "What should you do?",
      options: ["Wait behind it — never pass on the left", "Pass on the left if safe, watching for vehicles crossing your path that it may hide", "Sound your horn and pass", "Pass on its right"], answer: 1,
      explain: "You may pass on the left — but beware of vehicles crossing your path where the driver's view may be obscured by the vehicle you're overtaking.", src: P(56, "Overtaking on the Left") },
    { id: "s3", type: "choice", label: "Scenario", concept: "being-overtaken", visual: "being-overtaken",
      scene: "🚙 A car is overtaking you on a country road but it isn't gaining on you. An oncoming car is now in view.",
      prompt: "What should you do?",
      options: ["Accelerate so it has to drop back", "Ease off the gas and let it in", "Flash your headlights", "Sound the horn"], answer: 1,
      explain: "Don't accelerate. If the overtaking vehicle isn't making ground, ease off the gas and allow it in.", src: P(54, "Procedure when being overtaken; retention Q7") },
    { id: "s4", type: "choice", label: "Scenario", concept: "large", visual: "overtake-large",
      scene: "🚛 You're behind an articulated lorry with a LONG VEHICLE sign, on a road with a broken centre line.",
      prompt: "How do you prepare?",
      options: ["Close up behind it so the overtake is shorter", "Leave a greater gap for a clear view; you'll need extra road length", "Follow the car that's overtaking it", "Overtake on its left"], answer: 1,
      explain: "Leave a greater gap for a clear zone of vision — and remember it's at least 13 m long, so you need extra road to pass and return.", src: P(56, "Overtaking large vehicles; p.53") },
    { id: "s5", type: "choice", label: "Scenario", concept: "animals", visual: "horse-rider",
      scene: "🏇 A rider on a horse is ahead on a narrow lane. The rider raises a hand towards you.",
      prompt: "What should you do?",
      options: ["Sound the horn so they know you're there", "Watch the rider's signal and act on it; pass slowly with plenty of room, no horn", "Pass close and quickly", "Rev the engine to warn the horse"], answer: 1,
      explain: "Animals are frightened by noise. Allow enough room, don't sound the horn, and act sensibly on the rider's signals.", src: P(56, "Passing horses and riders") },
    { id: "s6", type: "choice", label: "Scenario", concept: "must-not", visual: "side-roads",
      scene: "🛣️ You're on a main road with side roads left and right. A slow car is ahead, and a junction is coming up.",
      prompt: "Is it a good place to overtake?",
      options: ["Yes — main roads have priority", "No — it's unsafe to overtake approaching a junction", "Yes, if you're quick", "Only cyclists"], answer: 1,
      explain: "It's unsafe to overtake when approaching a junction.", src: P(58, "Retention Q8 (answer b, p.88)") },
    { id: "s7", type: "choice", label: "Scenario", concept: "hills", visual: "brow",
      scene: "⛰️ You're halfway past a slow tractor going uphill. The brow is getting close.",
      prompt: "What's the rule?",
      options: ["Finish the overtake whatever happens", "You must be back on the left before the brow — if you can't, don't go", "Speed up over the brow", "Stay on the right over the brow"], answer: 1,
      explain: "Overtaking uphill, you must get back to the left side BEFORE the brow of the hill.", src: P(56, "On hills") },
    { id: "s8", type: "choice", label: "Scenario", concept: "being-overtaken",
      scene: "😬 A driver overtakes you and cuts in too close in front.",
      prompt: "What should you do?",
      options: ["Flash and sound the horn", "Reduce speed and allow a safety gap", "Overtake them back", "Brake hard to warn them"], answer: 1,
      explain: "Reduce your speed and allow the safety gap between you and the overtaking vehicle.", src: P(85, "Post-test answer 6") },
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
  blurb: "A slow lorry on a country road",
  xpPer: 10,
  situation: "🚚 You're behind a slow lorry on a two-way country road with a broken centre line. A car is following you. Further ahead the road goes over a hump-back bridge.",
  items: [
    { id: "w1", type: "choice", step: "First", concept: "procedure", prompt: "You're thinking of overtaking. What first?",
      options: ["Pull out to look", "Check your mirrors", "Signal right", "Change up a gear"], answer: 1,
      explain: "ALWAYS check your mirrors first — assess the speed and position of following traffic.", src: P(55, "Mirrors") },
    { id: "w2", type: "choice", step: "Position", concept: "procedure", visual: "overtake-view", prompt: "Where do you position?",
      options: ["Right up behind the lorry", "Near enough to pull out smoothly, not so close you lose the view", "On the centre line", "Far back on the verge"], answer: 1,
      explain: "Near enough to the vehicle ahead, but not so close that you can't get a good view — never closer than your braking distance.", src: P(85, "Post-test answer 8; p.55") },
    { id: "w3", type: "choice", step: "Speed", concept: "procedure", prompt: "And your speed and gear?",
      options: ["Keep pace; consider a lower gear for a reserve of power", "Slow right down", "Top gear for economy", "Coast in neutral"], answer: 0,
      explain: "Fast enough to keep up with the vehicle ahead, with enough reserve of power to pass it safely.", src: P(85, "Post-test answer 9") },
    { id: "w4", type: "choice", step: "Look", concept: "must-not", prompt: "You look ahead — the hump-back bridge is close.",
      options: ["Go now before the bridge", "Don't overtake — wait until well past the bridge", "Go if the lorry slows", "Flash the lorry"], answer: 1,
      explain: "You must not overtake approaching a hump-back bridge. If in doubt, don't.", src: P(54, "You must not overtake") },
    { id: "w5", type: "choice", step: "After the bridge", concept: "procedure", prompt: "Past the bridge, the road is clear — but the car behind has pulled out to overtake YOU.",
      options: ["Pull out anyway", "Don't overtake — a following driver has begun to overtake you", "Speed up to block it", "Signal and go"], answer: 1,
      explain: "Check mirrors again: do not overtake if a following driver has begun to overtake you.", src: P(55, "Mirrors") },
    { id: "w6", type: "choice", step: "The overtake", concept: "procedure", visual: "overtake-path", prompt: "It's clear now. You signal and go. When do you move back in?",
      options: ["As soon as your back bumper passes the lorry", "When you can see the lorry in your rear-view mirror", "After a count of two", "When the lorry flashes you"], answer: 1,
      explain: "Move in again when you can see you're clear of the vehicle in your rear-view mirror. Don't cut in too soon.", src: P(56, "Manoeuvre") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 88.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(58, `Retention test Q${n}; answer p.88`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "As a general rule, if there is an obstruction on your side of the road", ["you have equal priority with approaching traffic", "you should have priority over approaching traffic", "you must signal before passing the obstruction", "you should give priority to approaching traffic"], 3, "stationary", "pass-stationary"),
    R(2, "Passing stationary obstructions, drivers are advised, with regard to available separation distance, that", ["the more space there is the faster the driver should go", "the less space there is the lower the speed needs to be", "it is essential to give at least a metre of clearance", "space isn't important if there is approaching traffic"], 1, "clearance"),
    R(3, "When passing a stationary vehicle, a driver should adopt a road position such that", ["they are well to the left", "they are as close to the middle of the road as is safe", "a gradual change of course can be made", "a signal will never be necessary"], 2, "mspsl-stationary", "pass-stationary"),
    R(4, "Where there are obstructions on both sides of a road and a driver can see approaching traffic ahead", ["the driver should flash their headlights to assume priority", "the driver should assume priority over the oncoming traffic if they are there first", "oncoming traffic should not be expected to give priority to you", "accelerate to get there first"], 2, "stationary", "obstructions-both"),
    R(5, "'Dead ground' is", ["the blind area at the brow of a hill", "a dip in a road which could hide an approaching vehicle", "areas of road markings bordered by a solid white line", "usually only found at graveyards"], 1, "must-not", "dead-ground"),
    R(6, "What should drivers remember when considering whether to overtake a moving vehicle?", ["approaching traffic will usually give way", "if in danger — overtake promptly", "if in doubt — proceed slowly", "if in doubt — don't overtake"], 3, "golden-rule"),
    R(7, "When being overtaken by another vehicle, a driver should, if necessary", ["flash headlights to inform the other driver it is safe to move left", "slow down to allow the other vehicle to pass", "accelerate if the other vehicle is not making progress", "sound the horn if the other driver cuts in"], 1, "being-overtaken", "being-overtaken"),
    R(8, "When following a main road where there are side roads left and right, it is", ["usually safe and convenient to overtake when approaching a junction", "unsafe to overtake when approaching a junction", "always safe to overtake cyclists on approach to a junction", "recommended to overtake close to a junction"], 1, "must-not", "side-roads"),
    R(9, "There is a cyclist ahead and you wish to turn left. You should", ["overtake the cyclist at the junction", "pull alongside the cyclist and stay level until after the junction", "hold back behind the cyclist until they have passed the junction", "overtake the cyclist before the junction"], 2, "must-not", "cyclist-room"),
    R(10, "When overtaking a moving vehicle, drivers should", ["give a signal only if there are other vehicles behind", "always give a signal", "always flash headlights to help oncoming traffic", "always apply the PSLMSM routine"], 1, "procedure"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "golden-rule",
      prompt: "The golden rule about overtaking is…", options: ["Be quick", "If in doubt, don't overtake", "Always flash first", "Follow the car in front"], answer: 1,
      explain: "If in doubt, don't overtake.", src: P(85, "Post-test answer 4–5") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "decision",
      scene: "🚗 The car in front of you pulls out to overtake a tractor. The road looks clear to it.",
      prompt: "Do you follow it through?", options: ["Yes — it has checked the road", "No — never follow another overtaking vehicle; make your own decision", "Yes, if you stay close", "Only if it signals"], answer: 1,
      explain: "Never follow another overtaking vehicle. Decide from what you can see and know.", src: P(53, "Decision to Overtake; p.55") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "on-left",
      statement: "In a one-way street you may overtake on the left.", answer: true,
      explain: "In a one-way street (but not a dual carriageway or motorway) you may overtake on the left.", src: P(56, "Overtaking on the Left") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "stationary",
      prompt: "Which picture shows obstructions on both sides — be prepared to give way?",
      options: ["obstructions-both", "pass-stationary", "kerb-clearance", "queue-left"], answer: 0,
      names: ["Obstructions on both sides", "Obstruction on your side", "Clearance for parked cars", "Queue on the right"],
      explain: "With obstructions on both sides, be prepared to give way — don't rely on oncoming traffic.", src: P(54, "Passing stationary vehicles") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "procedure",
      prompt: "Match the stage to the check.", pairs: [["Mirrors (first)", "Following traffic"], ["Look", "Approaching traffic — decide"], ["Mirrors (again)", "Is anyone overtaking me?"]],
      explain: "Mirrors first, Look to decide, Mirrors again before the signal.", src: P(55, "Procedure for overtaking") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "sequence",
      prompt: "The basic overtaking procedure:", steps: ["Mirrors — first", "Position", "Speed", "Look", "Mirrors — again", "Signal", "Manoeuvre"],
      explain: "PSL-MSM — but always check your mirrors first.", src: P(56, "From the above") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "white-lines", visual: "double-white",
      scene: "〰️ A slow van is ahead. The centre has double white lines, and the one nearest you is solid.",
      prompt: "What do you do?", options: ["Overtake if it's clear", "Stay behind — don't cross a continuous line nearest you", "Straddle the lines to look", "Overtake on the left"], answer: 1,
      explain: "Don't overtake if you'd cross or straddle double solid lines, or where the line nearest you is continuous.", src: P(54, "Do not overtake") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "clearance",
      prompt: "Passing a stationary obstruction, the less space there is…", options: ["The faster you should go", "The lower your speed needs to be", "The more you should signal", "It doesn't matter"], answer: 1,
      explain: "The closer you get to the obstruction, the lower your speed needs to be.", src: P(58, "Retention Q2 (answer b, p.88)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "being-overtaken",
      prompt: "You're being overtaken. Which picture shows the right response?",
      options: ["being-overtaken", "overtake-path"], answer: 0,
      names: ["Keep left, don't accelerate", "Pulling out to overtake"],
      explain: "Keep as near to the left as is safe, don't accelerate, and be alert in case it pulls in suddenly.", src: P(54, "Procedure when being overtaken") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "mspsl-stationary",
      prompt: "Passing a stationary vehicle, adopt a road position so that…", options: ["You're well to the left", "You're as close to the middle as is safe", "A gradual change of course can be made", "A signal is never needed"], answer: 2,
      explain: "Keep well back and move out early — a gradual change of course.", src: P(58, "Retention Q3 (answer c, p.88)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "1.6",
  number: "1.6",
  title: "Overtaking",
  pages: [53, 58],
  intro: "When, where and how to pass parked and moving vehicles — and when not to.",
  objectives: [
    "The procedure for overtaking a stationary vehicle",
    "The procedure for overtaking a moving vehicle",
    "The places and situations in which you should not overtake",
    "When it is permitted to overtake on the left",
  ],
  objectivesSrc: P(53, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...overtake, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "road-reader", icon: "🚫", label: "Road Reader", rule: { activity: "overtake", min: 100 } },
    { id: "overtaking-challenge", icon: "🏎️", label: "Overtaking Challenge", rule: { activity: "scenarios", min: 80 } },
  ],
};
