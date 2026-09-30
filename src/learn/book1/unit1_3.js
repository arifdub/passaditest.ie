/*
  ===========================================================================
  BOOK 1 · UNIT 1.3 — ROAD POSITIONING

  Source: "Driving Procedures & Road Safety — Resource Workbook, Book 1"
  (Driver Education Supplies), book pages 34–39, with the post-test model
  answers on page 84 and the retention-test answers on page 88.

  Same shape as unit1_1.js; see src/learn/README.md. Every concept, card
  and item carries `src` so it can be checked against its page. Page
  numbers are for audit only and are never shown to learners.

  The retention answer key (p.88: 1a 2b 3c 4a 5c 6b 7c 8b 9a 10a 11c 12d
  13a 14c 15a) agrees with the unit text, so all fifteen are used.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 1, unit: "1.3", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Why road position matters",
    text: "Correct road positioning is important for the safety of all road users. It helps you observe and anticipate the situation ahead, and allows other road users to anticipate your own actions. Positioning during a manoeuvre is an important stage of the MSPSL routine for the same reasons.",
    src: P(34, "Unit introduction"),
  },
  "normal": {
    title: "Normal driving position",
    text: "Unless you intend to overtake or turn right, or road markings, traffic conditions or road layout dictate otherwise, keep well to the left — usually about a metre from the kerb. This helps the free flow of traffic and lets faster vehicles overtake. Give the same clearance to parked vehicles and obstructions in case a door opens, a pedestrian steps out or a vehicle moves off — and don't weave in and out of parked cars.",
    src: P(34, "During normal driving"),
  },
  "too-left": {
    title: "Too close to the left",
    text: "Driving too close to the left could endanger or frighten pedestrians or splash them in wet weather, reduce your control as the surface may be uneven, make you strike the kerb or damage your tyres, and mislead others into thinking you are turning left or stopping.",
    src: P(34, "You should not drive too close to the left"),
  },
  "too-middle": {
    title: "Too close to the middle",
    text: "Driving too close to the middle of the road could endanger you and approaching traffic, mislead others into thinking you intend to turn right, and hinder the free flow of traffic and vehicles that wish to overtake.",
    src: P(34, "You should not drive too close to the middle"),
  },
  "vulnerable": {
    title: "Room for others",
    text: "Drive on the left-hand side with consideration for all road users, giving cyclists and other vulnerable road users enough room. If you need to move from the normal position — to overtake, turn right, or pass pedestrians, cyclists or parked vehicles — make sure it's safe, check oncoming and following traffic, and give a clear signal in good time.",
    src: P(34, "Position on the road"),
  },
  "distance": {
    title: "Travelling distance",
    text: "Keep space in front in case the vehicle ahead stops suddenly — following too closely is the most frequent cause of rear-end collisions, and the faster you go the bigger the gap should be. You can't stop others following you too closely, but you can make it safer: keep your progress, stay to the left so they can overtake, and never increase your speed beyond the legal limit.",
    src: P(35, "Travelling Distance"),
  },
  "lanes": {
    title: "Lane discipline",
    text: "Lanes guide the flow of traffic and make best use of the road space. Where lanes are provided, use them and stay in them, only changing when necessary — and check in good time with your mirrors, and signal, before you do. Position centrally in your lane. Don't weave, straddle two lanes, change lanes at the last minute or drive in the wrong lane for your route.",
    src: P(35, "Traffic & Lane Discipline"),
  },
  "arrows": {
    title: "Lane arrows",
    text: "At some junctions, lanes are marked with arrows showing the direction traffic in that lane may take. You must obey the arrow markings.",
    src: P(35, "Arrows at junctions"),
  },
  "unmarked": {
    title: "Wide road, no markings",
    text: "Where the road is wide enough for lanes but they are unmarked, think in terms of lanes and position accordingly. Unless markings, layout or traffic dictate otherwise, drive normally in the left-hand lane.",
    src: P(35, "Lane bullets"),
  },
  "junction-lanes": {
    title: "Lanes at junctions",
    text: "Two lanes (marked or not), unless signs or markings show otherwise: turn left — left-hand lane; ahead — left-hand lane; turn right — move to the right-hand lane in good time. Three lanes: left — left lane; ahead — left or middle lane; right — right-hand lane in good time.",
    src: P(35, "Approaching Junctions; Where there are three lanes"),
  },
  "accel": {
    title: "Acceleration and deceleration lanes",
    text: "Use them for their intended purpose — to join or leave a road without hindering the through traffic. Get into position early and use them to build up speed or slow down when joining or leaving a road.",
    src: P(35, "Acceleration and deceleration lanes"),
  },
  "one-way": {
    title: "One-way streets",
    text: "Get into position in good time. Enter by turning right — straight into the right-hand lane; by turning left — straight into the left-hand lane. Traffic flows quickly and may overtake on either side, so in the street: turn left — left-hand lane; ahead — any convenient lane; turn right — right-hand lane in good time.",
    src: P(35, "One-way streets; p.36 In the one-way street"),
  },
  "multi-lane": {
    title: "Multi-lane roads and dual carriageways",
    text: "On three or more lanes, drive in the left-hand lane; use the middle and outside lanes for overtaking and passing only, and return to the left as soon as possible. On a dual carriageway, drive in the left lane normally and use the right lane for overtaking or turning right. On three lanes you may stay in the middle if there are slower vehicles in the left lane, but return left once past them.",
    src: P(36, "Multi-Lane Roads; Dual Carriageways"),
  },
  "two-plus-one": {
    title: "2 + 1 roads",
    text: "Two lanes one way and one the other, often with a safety barrier or ghost islands between them, which prevents overtaking on the one-lane section. The two-lane section may give a safe overtaking zone, often alternating about every 2 km. They reduce head-on collisions; right turns are generally controlled, with protected junction boxes.",
    src: P(36, "2 plus 1 Roads"),
  },
  "markings": {
    title: "Turning boxes and hatched markings",
    text: "A turning box — a white arrow in a white-edged box, often at signal-controlled junctions — guides right-turning vehicles: position over the box while waiting to turn. Hatched (merging and diverging) markings deflect traffic and protect endangered traffic; where hatched markings cover an area of roadway, vehicles are prohibited from entering it.",
    src: P(36, "Turning Box; Merging and Diverging Markings"),
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
    "Normal driving: well to the left, about a metre from the kerb",
    "Position centrally in your lane — never weave, straddle or change at the last minute",
    "Obey lane arrows, and get into the right lane in good time",
  ],
  cards: [
    {
      icon: "🛣️",
      kicker: "Road positioning",
      title: "Where you are on the road says a lot",
      body: [
        "Correct road positioning is important for the safety of all road users. It helps you observe and anticipate the situation ahead, and allows other road users to anticipate your own actions.",
        "Positioning during a manoeuvre is an important stage of the MSPSL routine for the same reasons. This unit covers the open road, lane discipline, and one-way streets and systems.",
      ],
      think: ["👀 Can I see well from here?", "🚗 Can others tell what I'm about to do?", "↔️ Am I giving everyone enough room?"],
      src: P(34, "Unit introduction"),
    },
    {
      icon: "📏",
      kicker: "Normal driving",
      title: "Keep well to the left",
      visual: "normal-position",
      ask: {
        prompt: "Before you read on — in normal driving, roughly how far from the kerb?",
        options: ["Right against the kerb", "About a metre", "Just left of the centre line"],
        answer: 1,
      },
      body: [
        "Unless you intend to overtake or turn right, or road markings, traffic conditions or road layout dictate otherwise, keep well to the left — usually about a metre from the kerb.",
        "This assists the free flow of traffic and lets faster vehicles overtake if they wish.",
      ],
      sections: [
        { head: "Give parked vehicles the same clearance, in case", list: ["A door opens", "A pedestrian steps out", "A vehicle moves off"] },
      ],
      callout: "Don't weave in and out when passing lines of parked cars or other obstructions.",
      concept: "normal",
      src: P(34, "During normal driving"),
    },
    {
      icon: "⚖️",
      kicker: "Not too far either way",
      title: "Too close to the left — or the middle",
      visual: "position-zones",
      sections: [
        { head: "Too close to the left could", list: ["Endanger or frighten pedestrians, or splash them in wet weather", "Reduce your control — the surface may be uneven", "Make you strike the kerb or damage your tyres", "Mislead others into thinking you're turning left or stopping"] },
        { head: "Too close to the middle could", list: ["Endanger you and approaching traffic", "Mislead others into thinking you intend to turn right", "Hinder the free flow of traffic and vehicles that wish to overtake"] },
      ],
      concept: "too-left",
      src: P(34, "Too close to the left; too close to the middle"),
    },
    {
      icon: "🚲",
      kicker: "Position on the road",
      title: "Room for everyone",
      body: [
        "Drive on the left-hand side with consideration for all road users, so that cyclists and other vulnerable road users have enough room on the left.",
        "If you need to leave the normal position — to overtake, turn right, or pass pedestrians, cyclists or parked vehicles — make sure it's safe: check oncoming and following traffic, and give a clear signal in good time to warn traffic behind and in front.",
      ],
      concept: "vulnerable",
      src: P(34, "Position on the road"),
    },
    {
      icon: "↕️",
      kicker: "Travelling distance",
      title: "Space in front — and the driver behind",
      visual: "following-distance",
      body: [
        "You need space in front in case the vehicle ahead stops suddenly. The most frequent cause of rear-end collisions is following too closely — and the faster you travel, the greater the gap should be.",
        "You can't stop others following you too closely, but you can make it safer: maintain your progress and stay to the left so they can overtake. Never increase your speed beyond the legal limit.",
      ],
      concept: "distance",
      src: P(35, "Travelling Distance"),
    },
    {
      icon: "🛤️",
      kicker: "Lane discipline",
      title: "Use lanes — and stay in them",
      visual: "straddling",
      body: [
        "Lanes are marked to guide the flow of traffic and make best use of the road space. Don't move from one lane to another without good cause, or without giving way to traffic when necessary.",
        "Where lanes are provided, use them and stay in them. To change lanes, check in good time that the way ahead and behind is clear with your mirrors, and signal appropriately.",
      ],
      sections: [
        { head: "Do", list: ["Position centrally in your lane", "Normally drive in the left-hand lane", "On wide unmarked roads, think in lanes and position accordingly"] },
        { head: "Don't", list: ["Weave from lane to lane", "Straddle two lanes or lane lines", "Change lanes at the last minute", "Drive in the wrong lane for your direction"] },
      ],
      concept: "lanes",
      src: P(35, "Traffic & Lane Discipline"),
    },
    {
      icon: "⬆️",
      kicker: "Lanes at junctions",
      title: "Pick your lane in good time",
      visual: "lanes-at-junction",
      ask: {
        prompt: "Two lanes approaching a junction, no markings. You're going straight ahead. Which lane?",
        options: ["The left-hand lane", "The right-hand lane", "Either — straddle them"],
        answer: 0,
      },
      sections: [
        { head: "Two lanes", list: ["Turn left — keep to the left-hand lane", "Ahead — keep to the left-hand lane", "Turn right — move to the right-hand lane in good time"] },
        { head: "Three lanes", list: ["Turn left — keep to the left-hand lane", "Ahead — left-hand or middle lane", "Turn right — move to the right-hand lane in good time"] },
      ],
      callout: "Where lanes are marked with arrows, you must obey the arrows.",
      concept: "junction-lanes",
      src: P(35, "Arrows; Approaching Junctions; Three lanes"),
    },
    {
      icon: "🏎️",
      kicker: "Slip lanes",
      title: "Acceleration and deceleration lanes",
      visual: "decel-lane",
      list: [
        "Use them for their intended purpose",
        "They let you join or leave a road without hindering the through traffic",
        "Get into position early — build up speed to join, slow down to leave",
      ],
      concept: "accel",
      src: P(35, "Acceleration and deceleration lanes"),
    },
    {
      icon: "➡️",
      kicker: "One-way streets",
      title: "Early position matters",
      visual: "one-way",
      body: [
        "Get into position in good time. Traffic flows quickly in one-way streets, and it's permitted to overtake on the left or right unless signs and markings say otherwise.",
      ],
      sections: [
        { head: "Entering", list: ["Turning right into it — straight into the right-hand lane", "Turning left into it — straight into the left-hand lane"] },
        { head: "In the street", list: ["Turn left — keep to the left-hand lane", "Ahead — use any convenient lane", "Turn right — move to the right-hand lane in good time"] },
      ],
      concept: "one-way",
      src: P(35, "One-way streets; p.36"),
    },
    {
      icon: "🛣️",
      kicker: "Bigger roads",
      title: "Multi-lane roads and dual carriageways",
      visual: "dual-carriageway",
      sections: [
        { head: "Three or more lanes", list: ["Drive in the left-hand lane", "Middle and outside lanes for overtaking and passing only", "Return to the left-hand lane as soon as possible"] },
        { head: "Dual carriageways", list: ["Drive in the left-hand lane normally", "Right-hand lane for overtaking or turning right", "Three lanes: you may stay in the middle while slower vehicles are in the left lane — then return left"] },
      ],
      concept: "multi-lane",
      src: P(36, "Multi-Lane Roads; Dual Carriageways"),
    },
    {
      icon: "🚧",
      kicker: "Special roads and markings",
      title: "2 + 1 roads, turning boxes, hatching",
      visual: "hatched",
      sections: [
        { head: "2 + 1 roads", list: ["Two lanes one way, one the other — often with a barrier or ghost islands", "No overtaking on the one-lane section", "The two-lane section may give a safe overtaking zone (often alternating about every 2 km)", "Right turns generally controlled, with protected junction boxes"] },
        { head: "Turning box", list: ["A white arrow in a white-edged box, often at signal-controlled junctions", "Turning right? Position over the box while you wait"] },
        { head: "Hatched markings", list: ["Deflect traffic into another stream and protect endangered traffic", "Where hatching covers an area of roadway, you must not enter it"] },
      ],
      concept: "markings",
      src: P(36, "2 plus 1; Turning Box; Hatched Markings"),
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
      front: "What does the free flow of traffic depend on?",
      back: "How accurately drivers position and drive their vehicles.",
      src: P(37, "Post-test Q1; answer p.84") },
    { id: "r2", type: "fill", concept: "normal",
      before: "In normal driving, keep well to the left — usually about", after: "from the kerb.",
      options: ["a metre", "half a metre", "two metres", "a car's width"], answer: "a metre",
      explain: "Keep well to the left, usually about a metre from the kerb.",
      src: P(34, "During normal driving") },
    { id: "r3", type: "truefalse", concept: "normal",
      statement: "When passing a line of parked cars, weave in and out of the gaps between them.", answer: false,
      explain: "You should not weave in and out when passing lines of parked cars or other obstructions.",
      src: P(34, "Note") },
    { id: "r4", type: "flash", concept: "lanes",
      front: "Where should you position your vehicle when there are lane markings?",
      back: "In the middle of your lane.",
      src: P(37, "Post-test Q4; answer p.84") },
    { id: "r5", type: "choice", label: "Identify the correct rule", concept: "arrows",
      prompt: "Lanes at a junction are marked with arrows. You…",
      options: ["Can usually ignore them", "Must obey the arrow markings", "Only follow them at night", "Can ignore them if it's safe"], answer: 1,
      explain: "You must obey the arrow markings.",
      src: P(35, "Arrows at junctions") },
    { id: "r6", type: "truefalse", concept: "too-middle",
      statement: "Driving too close to the middle can mislead others into thinking you intend to turn right.", answer: true,
      explain: "It can also endanger you and approaching traffic, and hinder traffic wishing to overtake.",
      src: P(34, "Too close to the middle") },
    { id: "r7", type: "fill", concept: "multi-lane",
      before: "On a dual carriageway, the right-hand lane is for overtaking and", after: ".",
      options: ["turning right", "higher speeds", "lorries", "turning left"], answer: "turning right",
      explain: "Drive in the left lane normally; the right-hand lane is for overtaking or turning right a short distance ahead.",
      src: P(37, "Post-test Q6; answer p.84; p.36") },
    { id: "r8", type: "flash", concept: "one-way",
      front: "Following the road ahead in a one-way street — where should you position?",
      back: "Be guided by the road markings. If there are none, any convenient lane — choose left or right well in advance if the road isn't wide enough for a middle lane.",
      src: P(37, "Post-test Q3; answer p.84; p.36") },
    { id: "r9", type: "truefalse", concept: "markings",
      statement: "You may drive over an area of hatched markings to get into a lane sooner.", answer: false,
      explain: "Where traffic hatched markings have been provided in an area of roadway, vehicles are prohibited from entering the area.",
      src: P(36, "Merging and Diverging Markings") },
    { id: "r10", type: "choice", label: "Tap the correct statement", concept: "distance",
      prompt: "The most frequent cause of rear-end collisions is…",
      options: ["Bad weather", "Following too closely", "Worn brakes", "Driving too slowly"], answer: 1,
      explain: "The most frequent cause of rear ends is following too closely. The faster you go, the bigger the gap should be.",
      src: P(35, "Travelling Distance") },
  ],
};

/* ---------------------------------------------------------------------------
   3. PICK THE LANE — recognition by sorting.
   --------------------------------------------------------------------------- */
const lanes = {
  id: "lanes",
  kind: "items",
  mode: "matching",
  title: "Pick the Lane",
  blurb: "Which lane? And what goes wrong when you're off position",
  xp: 25,
  items: [
    {
      id: "l1", type: "sort", concept: "junction-lanes",
      prompt: "No signs or markings say otherwise. Which lane?",
      categories: [
        { id: "left", label: "Left-hand lane" },
        { id: "right", label: "Right-hand lane" },
        { id: "any", label: "Any convenient lane" },
      ],
      cards: [
        { text: "Two lanes at a junction — turning left", cat: "left" },
        { text: "Two lanes at a junction — going ahead", cat: "left" },
        { text: "Two lanes at a junction — turning right", cat: "right" },
        { text: "Turning right into a one-way street", cat: "right" },
        { text: "Turning left into a one-way street", cat: "left" },
        { text: "In a one-way street — going ahead", cat: "any" },
        { text: "Dual carriageway — normal driving", cat: "left" },
        { text: "Dual carriageway — overtaking", cat: "right" },
      ],
      explain: "Two lanes: left and ahead use the left lane; right, the right lane in good time. Into a one-way street, turn straight into the lane on the side you're turning. In a one-way street going ahead, any convenient lane. Dual carriageway: left lane normally, right lane to overtake or turn right.",
      src: P(35, "Approaching Junctions; One-way streets; p.36 Dual Carriageways"),
    },
    {
      id: "l2", type: "sort", concept: "too-left",
      prompt: "What's the risk — driving too close to the left, or too close to the middle?",
      categories: [
        { id: "left", label: "Too close to the left" },
        { id: "mid", label: "Too close to the middle" },
      ],
      cards: [
        { text: "Splashing pedestrians in wet weather", cat: "left" },
        { text: "Striking the kerb or damaging tyres", cat: "left" },
        { text: "Others think you're turning left or stopping", cat: "left" },
        { text: "Uneven surface reduces your control", cat: "left" },
        { text: "Danger to approaching traffic", cat: "mid" },
        { text: "Others think you're turning right", cat: "mid" },
        { text: "Hindering vehicles that wish to overtake", cat: "mid" },
      ],
      explain: "Too far left: pedestrians, splashing, kerbs and tyres, uneven surface, looks like a left turn or stop. Too near the middle: approaching traffic, looks like a right turn, hinders overtaking.",
      src: P(34, "Too close to the left; too close to the middle"),
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
  title: "Match the Road",
  blurb: "Road markings and layouts, and what they mean for you",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "markings",
      prompt: "Match each marking or layout to what you do.",
      pairs: [
        ["Turning box", "Wait over it when turning right"],
        ["Hatched area", "Don't enter it"],
        ["Lane arrows", "Obey them"],
        ["Deceleration lane", "Use it to slow down when leaving"],
        ["2 + 1 road, one-lane section", "No overtaking"],
      ],
      explain: "Turning boxes guide right turns; hatched areas are not to be entered; lane arrows must be obeyed; deceleration lanes are for slowing down to leave; 2 + 1 roads prevent overtaking on the one-lane section.",
      src: P(36, "Turning Box; Hatched Markings; 2 plus 1; p.35 Arrows, Deceleration lanes"),
    },
    {
      id: "m2", type: "match", concept: "one-way",
      prompt: "Entering a two-lane one-way street. Match the direction to the lane.",
      pairs: [
        ["It's on your left", "Turn into the left-hand lane"],
        ["It's on your right", "Turn into the right-hand lane"],
        ["It's directly ahead", "Left, or near the middle — for the lane you want"],
      ],
      explain: "Turn straight into the nearer lane. Going straight in, position to the left or as close to the middle as is safe, depending on which lane you want.",
      src: P(37, "Post-test Q2; answer p.84"),
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
  blurb: "Changing lanes, and returning left after overtaking",
  xp: 30,
  items: [
    {
      id: "p1", type: "order", concept: "lanes",
      prompt: "You need to change lanes. Put it in order.",
      steps: ["Decide the change is necessary", "Check in good time that the way ahead and behind is clear — mirrors", "Signal appropriately", "Move into the new lane", "Position centrally in it"],
      explain: "Only change when necessary; check ahead and behind with the mirrors in good time; signal; move; and position centrally in your new lane.",
      src: P(35, "Traffic & Lane Discipline"),
    },
    {
      id: "p2", type: "order", concept: "multi-lane",
      prompt: "Three-lane dual carriageway: you overtook in the right-hand lane. Get back to the normal position.",
      steps: ["Overtake in the right-hand lane", "Move to the middle lane", "Move to the left-hand lane"],
      explain: "Move to the middle lane and then the left-hand lane — return to the left as soon as possible.",
      src: P(39, "Retention Q15 (answer a, p.88); p.36"),
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
    { id: "s1", type: "choice", label: "Scenario", concept: "normal",
      scene: "🚗🚗🚗 A long line of cars is parked on your side, with gaps between them.",
      visual: "no-weaving",
      prompt: "How do you pass them?",
      options: ["Pull in to the left in each gap", "Keep a steady line with about a metre's clearance — don't weave", "Drive on the centre line", "Speed up to get past quickly"], answer: 1,
      explain: "Give parked vehicles the same clearance as the kerb in case a door opens, a pedestrian steps out or a vehicle moves off — and don't weave in and out.",
      src: P(34, "During normal driving; Note") },
    { id: "s2", type: "choice", label: "Scenario", concept: "distance",
      scene: "🚙 A car is following you very closely on a single carriageway.",
      prompt: "What's the right response?",
      options: ["Speed up to open the gap", "Brake sharply to warn them", "Keep your progress, stay left so they can overtake — never exceed the limit", "Move to the centre so they can't pass"], answer: 2,
      explain: "You cannot stop others following you too closely, but you can make it safer: maintain your progress, stay to the left, and never increase your speed beyond the legal speed limit.",
      src: P(35, "Travelling Distance") },
    { id: "s3", type: "choice", label: "Scenario", concept: "lanes",
      scene: "↪️ On a busy road you realise too late that you're in the wrong lane for your turn.",
      prompt: "What should you do?",
      options: ["Stop and reverse to where you can change lanes", "Continue in the lane you're in and find another way", "Stop and wait for a gap to cut across", "Signal and cut across quickly"], answer: 1,
      explain: "Changing lanes at the last minute is poor lane discipline. Continue in your lane and find another way to your route.",
      src: P(38, "Retention Q6 (answer b, p.88); p.35") },
    { id: "s4", type: "choice", label: "Scenario", concept: "normal",
      scene: "🏍️ You notice a faster vehicle coming up behind you.",
      prompt: "What should you do?",
      options: ["If safe, move towards the left to let it overtake", "Accelerate to the maximum speed", "Hold a metre from the kerb whatever it does", "Move out to stop it breaking the law"], answer: 0,
      explain: "Keeping to the left helps the free flow of traffic and allows faster vehicles to overtake if they wish.",
      src: P(38, "Retention Q4 (answer a, p.88); p.34") },
    { id: "s5", type: "choice", label: "Scenario", concept: "markings",
      scene: "🚦 You're waiting to turn right at traffic lights. There's a white arrow in a white-edged box ahead.",
      visual: "turning-box",
      prompt: "Where do you wait?",
      options: ["Behind the box", "Positioned over the box", "To the left of it", "In the oncoming lane"], answer: 1,
      explain: "Turning boxes guide right-turning vehicles: position over the box while waiting to make the turn.",
      src: P(36, "Turning Box") },
    { id: "s6", type: "choice", label: "Scenario", concept: "markings",
      scene: "🦓 Traffic is queuing. There's an area of diagonal hatched markings beside you, and your turn is just past it.",
      visual: "hatched",
      prompt: "Can you drive across the hatching to reach your turn?",
      options: ["Yes, if the traffic is slow", "No — vehicles are prohibited from entering hatched areas", "Yes, with a signal", "Only at night"], answer: 1,
      explain: "Where hatched markings are provided in an area of roadway, vehicles are prohibited from entering it.",
      src: P(36, "Merging and Diverging Markings") },
    { id: "s7", type: "choice", label: "Scenario", concept: "accel",
      scene: "🛣️ There's a deceleration lane for a left turn some distance ahead.",
      visual: "decel-lane",
      prompt: "How do you use it?",
      options: ["Use it to overtake the queue", "Only if you need to brake hard", "Slow down well before it", "Get into the left lane in good time, then use it to slow down"], answer: 3,
      explain: "Get into position early and use these lanes to slow down when leaving a road — for their intended purpose, not for overtaking.",
      src: P(39, "Retention Q12 (answer d, p.88); p.35") },
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
  blurb: "One right turn, positioned step by step",
  xpPer: 10,
  situation: "↱ You're on a wide single carriageway. Your side has room for two lanes but no lane markings. You want to turn right at the junction ahead, and a car is following you.",
  items: [
    { id: "w1", type: "choice", step: "Where are you now?", concept: "unmarked",
      prompt: "On a wide road with no lane markings, you should…",
      options: ["Drive as close to the middle as is safe", "Keep tight to the left", "Position as if there were lane markings", "Keep to the centre of your side"], answer: 2,
      explain: "Where the road is wide enough for lanes but they are unmarked, think in terms of lanes and position accordingly.",
      src: P(38, "Retention Q3 (answer c, p.88); p.35") },
    { id: "w2", type: "choice", step: "Which lane?", concept: "junction-lanes",
      prompt: "Turning right with two lanes' worth of road, you…",
      options: ["Stay in the left-hand lane", "Move to the right-hand lane in good time", "Straddle both", "Move right at the last moment"], answer: 1,
      explain: "Turn right — move to the right-hand lane in good time.",
      src: P(35, "Approaching Junctions") },
    { id: "w3", type: "choice", step: "Before moving", concept: "lanes",
      prompt: "Before moving across, you must…",
      options: ["Just go — you're turning soon", "Check in good time that the way ahead and behind is clear, with the mirrors, and signal", "Sound the horn", "Slow down first"], answer: 1,
      explain: "Check in good time that the way ahead and behind is clear by proper use of your mirrors, and use appropriate signals.",
      src: P(35, "Traffic & Lane Discipline") },
    { id: "w4", type: "choice", step: "Your position", concept: "too-middle", visual: "right-turn-position",
      prompt: "Normally, the correct position for a right turn on a single carriageway is…",
      options: ["Just left of the centre line", "As far right as you can go", "As close to the middle as possible", "Just over the centre line"], answer: 0,
      explain: "Just left of the centre line — close enough to show your intention, without endangering approaching traffic.",
      src: P(38, "Retention Q9 (answer a, p.88)") },
    { id: "w5", type: "choice", step: "Why there?", concept: "why",
      prompt: "Why does getting there early matter?",
      options: ["So you can go faster", "So others can anticipate your actions — and you can see ahead", "So you don't need to signal", "It doesn't — just be there by the junction"], answer: 1,
      explain: "Correct position helps you observe and anticipate the situation ahead, and allows other road users to anticipate your own actions.",
      src: P(34, "Unit introduction") },
    { id: "w6", type: "choice", step: "If there's a box", concept: "markings",
      prompt: "The junction has a turning box. Where do you wait?",
      options: ["Before the stop line, well back", "Positioned over the box", "Beside the box, on the left", "Past the box"], answer: 1,
      explain: "Vehicles intending to turn right should be positioned over the box while waiting to make the turn.",
      src: P(36, "Turning Box") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 88.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept,
  prompt, options, answer, src: P(n <= 10 ? 38 : 39, `Retention test Q${n}; answer p.88`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "The Rules of the Road advises that where traffic lanes are provided, you should", ["drive in them", "straddle them to ease traffic flow", "weave in and out between them", "keep close to the left of the lane you are in"], 0, "lanes"),
    R(2, "The road position for driving at 50 km/h is", ["just keep left of centre", "where possible always 1 metre from the kerb", "the middle of the road", "as close to the middle of the road as is safe to do so"], 1, "normal"),
    R(3, "Where a road is wide enough for more than one lane in the direction you are travelling but there are no lanes marked, you should", ["drive as close to the middle of the road as is safe", "always keep tight to the left", "position your vehicle as if there were lane markings", "keep to the centre of your side of the road"], 2, "unmarked"),
    R(4, "If, whilst driving, you notice a faster moving vehicle behind, you should", ["if safe, move towards the left to allow the vehicle to overtake", "accelerate to the maximum speed permitted", "drive at least a metre from the kerb regardless of what the following driver intends to do", "move out to prevent the driver from breaking the law"], 0, "normal"),
    R(5, "One reason for the presence of lane markings is to", ["warn drivers of potential hazards ahead", "make it unnecessary for the driver to plan ahead", "make best possible use of the road space", "provide Gardaí with a means to judge whether a driver's behaviour is erratic"], 2, "lanes"),
    R(6, "In a busy road you realise too late that you are in the wrong lane for your turning. 'Driving Essential Skills' advises that you should", ["stop and reverse to a point that you can change lanes easily", "continue in the lane you are in and find another way to your route", "stop in your lane and wait for a suitable gap to make your turn", "check mirrors, signal and cut across another driver's path with acceleration"], 1, "lanes"),
    R(7, "At junctions where lanes are marked with arrows indicating the direction traffic in that lane may take", ["you can usually ignore the arrows", "the arrows tell you the exact point of turn", "you must obey the arrow markings", "you don't have to obey the arrows providing you do not cause inconvenience or danger to other traffic"], 2, "arrows"),
    R(8, "Other than to change lanes you are advised, with regards to lane discipline, to", ["keep to the left of your lane", "keep to the centre of your lane", "keep 1 metre from the left-hand side of your lane", "position to the right of your lane"], 1, "lanes"),
    R(9, "Normally, the correct road position for making a right turn on a single carriageway is", ["just left of the centre line", "as far to the right as you can go", "as close to the middle of the road as possible", "just over the centre line"], 0, "too-middle"),
    R(10, "At a junction, unless road markings or layout or traffic conditions dictate otherwise, you should, if intending to follow the road ahead (straight)", ["keep to the left", "keep as close to the middle of the road as is safe", "keep to the centre of your side of the road", "keep right"], 0, "junction-lanes"),
    R(11, "Driving along a road where there are two lanes in each direction, you should normally use the right-hand lane on your side of the road", ["to follow the road ahead only", "when travelling at higher speeds only", "for overtaking and turning right only", "unless you are towing a trailer"], 2, "multi-lane"),
    R(12, "Some junctions have a deceleration lane for turning left a distance ahead. You should", ["make use of the deceleration lane if you wish to overtake traffic queues ahead", "not use it unless you need to brake firmly to a stop", "slow down well before the deceleration lane so that other road users can see your intention to use it", "get into the left-hand lane in good time before entering the deceleration lane"], 3, "accel"),
    R(13, "To go ahead in a one-way street, you should", ["be guided by road markings", "always select the left-hand lane as most appropriate", "always use the middle lane", "use the right-hand lane"], 0, "one-way"),
    R(14, "In a one-way street you wish to go ahead. There are no road markings but there is room for more than one lane of traffic. You should", ["keep to the left only", "keep to the right only", "use whichever lane is appropriate and safest for your route", "keep to the middle of the road"], 2, "one-way"),
    R(15, "On a three-lane dual carriageway, you have overtaken in the right-hand lane and wish to return to the normal driving position. You should", ["move to the middle lane and then the left-hand lane", "move directly to the left-hand lane", "move to the middle lane and stay there until it is necessary to overtake again", "reposition centrally in the right-hand lane"], 0, "multi-lane"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "why",
      prompt: "The free flow of traffic depends on…", options: ["Speed limits", "How accurately drivers position and drive their vehicles", "Traffic lights", "The number of lanes"], answer: 1,
      explain: "How accurately drivers position and drive their vehicles.", src: P(84, "Post-test answer 1") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "one-way",
      scene: "➡️ You're turning right into a one-way street with two lanes.",
      prompt: "Which lane do you turn into?", options: ["The left-hand lane", "The right-hand lane", "Whichever is emptier", "Straddle both, then choose"], answer: 1,
      explain: "To enter a one-way street by turning right, turn directly into the right-hand lane.", src: P(35, "One-way streets") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "lanes",
      statement: "Where traffic lanes are provided, you should use them and stay in them, only changing when necessary.", answer: true,
      explain: "You must always use them and stay in them, only changing lanes when necessary.", src: P(35, "Traffic & Lane Discipline") },
    { id: "c4", skill: "recognition", type: "choice", label: "Recognise the risk", concept: "too-left",
      prompt: "Which is a risk of driving too close to the left?", options: ["Hindering overtaking traffic", "Misleading others that you're turning right", "Striking the kerb or damaging your tyres", "Endangering approaching traffic"], answer: 2,
      explain: "Too close to the left: pedestrians, splashing, kerbs and tyres, uneven surface, and looking like you'll turn left or stop.", src: P(34, "Too close to the left") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "junction-lanes",
      prompt: "Two lanes at a junction. Match your direction to the lane.",
      pairs: [["Turning left", "Left-hand lane"], ["Going ahead", "Left-hand lane, too"], ["Turning right", "Right-hand lane, in good time"]],
      explain: "Left and ahead: the left-hand lane. Right: the right-hand lane, in good time.", src: P(35, "Approaching Junctions") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "multi-lane",
      prompt: "After overtaking on a three-lane dual carriageway:", steps: ["Overtake in the right-hand lane", "Move to the middle lane", "Move to the left-hand lane"],
      explain: "Middle lane, then the left-hand lane.", src: P(39, "Retention Q15") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "normal",
      scene: "🚪 A van is parked ahead, and the driver's door looks about to open.",
      prompt: "How much room do you give it?", options: ["Just enough to squeeze past", "The same clearance as the kerb — in case a door opens", "None — sound the horn", "Pass on the right-hand footpath"], answer: 1,
      explain: "Give parked vehicles the same clearance, in case a door opens, a pedestrian steps out or a vehicle moves off.", src: P(34, "During normal driving") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "lanes",
      prompt: "Other than to change lanes, lane discipline says keep to…", options: ["The left of your lane", "The centre of your lane", "1 metre from the left of your lane", "The right of your lane"], answer: 1,
      explain: "Position centrally in your lane.", src: P(38, "Retention Q8 (answer b, p.88)") },
    { id: "c9", skill: "application", type: "choice", label: "Application", concept: "multi-lane",
      prompt: "Two lanes each way. When do you normally use the right-hand lane?", options: ["To follow the road ahead", "At higher speeds only", "For overtaking and turning right only", "When towing"], answer: 2,
      explain: "The right-hand lane is for overtaking and turning right.", src: P(39, "Retention Q11 (answer c, p.88)") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "one-way",
      prompt: "In a one-way street, no markings, room for more than one lane, going ahead. You…", options: ["Keep to the left only", "Keep to the right only", "Use whichever lane is appropriate and safest for your route", "Keep to the middle"], answer: 2,
      explain: "Following the road ahead in a one-way street — use any convenient lane.", src: P(39, "Retention Q14 (answer c, p.88); p.36") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "1.3",
  number: "1.3",
  title: "Road Positioning",
  pages: [34, 39],
  intro: "Where to be on the road, which lane to use, and how one-way streets change it.",
  objectives: [
    "The correct road position for normal driving",
    "The correct position to take in lanes of traffic",
    "The differences in road positioning which apply to one-way roads",
  ],
  objectivesSrc: P(34, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...lanes, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "lane-master", icon: "🛣️", label: "Lane Master", rule: { activity: "lanes", min: 100 } },
    { id: "road-positioning-master", icon: "🏆", label: "Road Positioning Master", rule: { activity: "scenarios", min: 80 } },
  ],
};
