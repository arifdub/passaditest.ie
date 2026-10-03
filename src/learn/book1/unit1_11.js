/*
  ===========================================================================
  BOOK 1 · UNIT 1.11 — DRIVING IN TUNNELS

  Source: "Driving Procedures & Road Safety — Resource Workbook, Book 1"
  (Driver Education Supplies), book pages 82–83, with post-test model
  answers on page 87.

  The book has no retention test for this unit, and its post-test
  questions aren't printed — only the twelve model answers on page 87. So
  the Retention Check here is built from those model answers and the unit
  text: each question's correct answer is the book's wording, and the
  wrong options are written for this course. Model answer 5 ("an emergency
  up ahead, even if you cannot see it") is used only where page 82 makes
  its question clear (being told to stop in a tunnel).

  Page 83's note that speed cameras "will begin working shortly in Dublin's
  Port Tunnel" is dated and isn't used; the unit teaches speed-over-distance
  cameras in general. Page 82's "tunnel height and allowable widths
  generally over 2.4 metres" is unclear and isn't used beyond "check the
  height and width notices before entering".
  ===========================================================================
*/

const P = (page, ref) => ({ book: 1, unit: "1.11", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Why tunnels",
    text: "Tunnels are becoming a more popular way of cutting through cities and towns. Just because there isn't one in your area doesn't mean it shouldn't be covered — offer post-test lessons for what pupils didn't get to practise, like tunnels, motorways and night driving.",
    src: P(82, "Introduction"),
  },
  "before": {
    title: "Before entering a tunnel",
    text: "Check your fuel level, remove sunglasses in good time so your eyes adjust to the darker conditions, and turn on dipped headlights — to see and be seen. Never enter a tunnel if you feel unwell or the vehicle is unroadworthy. Tune the radio to the FM frequency shown before the entrance for safety tips and traffic reports.",
    src: P(82, "Summary; p.87 answers 1–3"),
  },
  "restrictions": {
    title: "Tunnel restrictions",
    text: "No pedestrians, learner drivers or pedal cyclists. High or wide vehicles must check the height and width notices before entering; vehicles over average size or carrying hazardous loads may need permission in advance.",
    src: P(82, "Restrictions"),
  },
  "distance": {
    title: "Distance and lanes",
    text: "Keep a safe distance — at least 50 metres for cars and 100 metres for lorries (LGVs) — so you can see well ahead and react to traffic conditions. Stay in your lane; don't change lane or overtake unless totally necessary — in some tunnels overtaking is prohibited; follow the overhead signs.",
    src: P(82, "Restrictions; p.87 answer 4"),
  },
  "stopping": {
    title: "Stopping in a tunnel",
    text: "Don't stop for any reason other than an emergency; if you must, put on your hazard warning lights. Never reverse or make a U-turn. If you're told to stop, stop, switch on warning lights and leave enough distance from the vehicle ahead — there may be an emergency ahead even if you can't see it.",
    src: P(82, "Restrictions; p.87 answer 5"),
  },
  "breakdown": {
    title: "Breaking down",
    text: "If you break down, switch off the ignition and try to reach the nearest lay-by. Emergency lay-bys, where provided, are about every 1 km — make every effort to use them.",
    src: P(83, "Driver Obligations; Emergency Lay-Bys"),
  },
  "fire": {
    title: "Smoke or fire",
    text: "Smoke or fire ahead: stop as early as possible and as far from the danger as you can, turn off the engine, get everyone out and leave by the nearest pedestrian exit — distance markers on the wall show the way. Smoke or fire behind: drive on, out of the tunnel. Your own vehicle on fire: switch off the engine and leave it immediately by the pedestrian exit.",
    src: P(83, "Driver Obligations; p.87 answers 6–8"),
  },
  "operator": {
    title: "The tunnel operator",
    text: "The operator has full authority in the tunnel: always obey their instructions — through loudspeakers and electronic variable message signs — even if the reason isn't apparent at the time. Leave your vehicle and the tunnel when told. CCTV gives the operator a view of every part of the tunnel; FM radio break-in lets them speak to drivers.",
    src: P(83, "Tunnel Operator; CCTV; Loudspeakers; The Operator; p.87 answers 9, 11, 12"),
  },
  "equipment": {
    title: "Safety equipment",
    text: "Emergency telephones are generally on the left-hand side and connect to the tunnel operator. Firefighting niches have hydrants every 125 m and hose reels every 60 m.",
    src: P(83, "Fire Fighting Equipment; p.87 answer 10"),
  },
  "speed": {
    title: "Speed",
    text: "Obey the speed limits and drive at the correct speed for the conditions. Tunnels may use speed-over-distance cameras (ANPR): they time you between entry and exit, and if your average speed is over the limit you get a fine and penalty points.",
    src: P(83, "Driver Obligations; A Note on Speed"),
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
    "Before: fuel, sunglasses off, dipped headlights, FM radio",
    "Inside: 50 m for cars (100 m for lorries), stay in lane, never reverse or U-turn",
    "Fire ahead: stop, engine off, out by the pedestrian exit. Fire behind: drive out",
  ],
  cards: [
    {
      icon: "🚇",
      kicker: "Driving in tunnels",
      title: "Not just for city drivers",
      visual: "tunnel-sign",
      body: [
        "Tunnels are becoming a more popular way of cutting through cities and towns.",
        "No tunnel near you? Cover it anyway — the same as hill starts or roundabouts. Offer post-test lessons for what pupils didn't get to practise: tunnels, motorways, night driving.",
      ],
      think: ["⛽ Do I have enough fuel?", "🕶️ Are my sunglasses off?", "📻 Am I on the tunnel's FM frequency?"],
      concept: "why",
      src: P(82, "Introduction"),
    },
    {
      icon: "🕶️",
      kicker: "Before you enter",
      title: "Fuel, glasses, lights, radio",
      visual: "tunnel-approach",
      ask: {
        prompt: "Why take off sunglasses before the tunnel — and when?",
        options: ["At the entrance — they're not allowed", "In good time, so your eyes adjust to the darker tunnel", "They don't matter"],
        answer: 1,
      },
      list: [
        "Check your fuel level",
        "Remove sunglasses in good time — let your eyes adjust to the darker conditions",
        "Dipped headlights on — to see and be seen",
        "Tune to the FM frequency shown before the entrance: safety tips, traffic reports, incidents",
        "Never enter if you feel unwell or the vehicle isn't roadworthy",
      ],
      concept: "before",
      src: P(82, "Summary; p.87 answers 1–3"),
    },
    {
      icon: "🚫",
      kicker: "Restrictions",
      title: "Who can't go through",
      visual: "tunnel-banned",
      list: [
        "No pedestrians, learner drivers or pedal cyclists",
        "High or wide vehicles: check the height and width notices before entering",
        "Extra-large vehicles and hazardous loads may need permission before the journey",
      ],
      concept: "restrictions",
      src: P(82, "Restrictions"),
    },
    {
      icon: "↕️",
      kicker: "In the tunnel",
      title: "Distance and lane discipline",
      visual: "tunnel-distance",
      ask: {
        prompt: "What's the minimum gap for a car in a tunnel?",
        options: ["2 car lengths", "At least 50 metres", "10 metres"],
        answer: 1,
      },
      list: [
        "At least 50 m for cars, 100 m for lorries — so you can see well ahead and react",
        "Stay in your lane; don't change lane or overtake unless totally necessary",
        "Some tunnels prohibit overtaking — follow the overhead signs",
        "Obey the speed limits — speed-over-distance cameras may time you",
      ],
      concept: "distance",
      src: P(82, "Restrictions; p.83; p.87 answer 4"),
    },
    {
      icon: "🛑",
      kicker: "Stopping",
      title: "Only in an emergency",
      visual: "tunnel-safety",
      list: [
        "Don't stop for any reason other than an emergency — hazard lights on if you must",
        "Never ever reverse or make a U-turn in a tunnel",
        "Told to stop? Stop, warning lights on, and leave enough stopping distance from the vehicle in front — there may be an emergency ahead, even if you can't see it",
        "Broken down? Switch off the ignition and try to reach the nearest lay-by — about every 1 km",
      ],
      concept: "stopping",
      src: P(82, "Restrictions; p.83; p.87 answer 5"),
    },
    {
      icon: "🔥",
      kicker: "Fire",
      title: "Ahead? Get out. Behind? Drive out.",
      visuals: ["tunnel-fire:ahead", "tunnel-fire:behind"],
      ask: {
        prompt: "There's smoke behind you in the tunnel. What do you do?",
        options: ["Stop and get out", "Drive on, out of the tunnel", "Reverse away from it"],
        answer: 1,
      },
      sections: [
        { head: "Smoke or fire ahead", list: ["Stop as early as possible, as far from the danger as you can", "Turn off the engine", "Get yourself and all passengers out", "Leave by the nearest pedestrian exit — distance markers on the wall show the way"] },
        { head: "Smoke or fire behind", list: ["Drive out of the tunnel"] },
        { head: "Your vehicle on fire", list: ["Switch off the engine", "Leave the vehicle immediately by the pedestrian exit"] },
      ],
      concept: "fire",
      src: P(83, "Driver Obligations; p.87 answers 6–8"),
    },
    {
      icon: "📢",
      kicker: "The operator",
      title: "Their word is final",
      visual: "tunnel-safety",
      list: [
        "The tunnel operator has full authority — always obey their instructions, even if the reason isn't apparent",
        "Instructions come by loudspeaker and electronic variable message signs — pay special attention to them",
        "FM radio break-in: the operator can speak to drivers in the tunnel",
        "CCTV: the operator can see every part of the tunnel, always",
        "Leave your vehicle and the tunnel by the nearest exit when told",
      ],
      concept: "operator",
      src: P(83, "Tunnel Operator; FM Radio; CCTV; Loudspeakers; The Operator"),
    },
    {
      icon: "🧯",
      kicker: "Safety equipment",
      title: "Phones, lay-bys, hydrants",
      visual: "tunnel-safety",
      list: [
        "Emergency telephones: generally on the left-hand side — they connect to the tunnel operator",
        "Emergency lay-bys: about every 1 km, where provided",
        "Firefighting niches: hydrants every 125 m, hose reels every 60 m",
      ],
      concept: "equipment",
      src: P(83, "Emergency Lay-Bys; Fire Fighting Equipment; p.87 answer 10"),
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
    { id: "r1", type: "flash", concept: "before",
      front: "What three things should you check before a tunnel journey?",
      back: "Your health, your fuel, and a roadworthy vehicle.", src: P(87, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "before", visual: "tunnel-approach",
      front: "Why use dipped headlights in a tunnel?",
      back: "To see and be seen.", src: P(87, "Post-test answer 3") },
    { id: "r3", type: "fill", concept: "distance", visual: "tunnel-distance",
      before: "In a tunnel, keep at least", after: "behind a car.",
      options: ["50 metres", "10 metres", "200 metres", "two car lengths"], answer: "50 metres",
      explain: "At least 50 m for cars and 100 m for lorries.", src: P(82, "Restrictions") },
    { id: "r4", type: "truefalse", concept: "stopping",
      statement: "If you miss your turning in a tunnel, you may make a careful U-turn.", answer: false,
      explain: "You must never ever reverse or make a U-turn in a tunnel.", src: P(82, "Restrictions") },
    { id: "r5", type: "truefalse", concept: "restrictions",
      statement: "Learner drivers may drive through tunnels with an accompanying driver.", answer: false,
      explain: "No learner drivers in tunnels — and no pedestrians or pedal cyclists.", src: P(82, "Restrictions") },
    { id: "r6", type: "flash", concept: "fire", visual: "tunnel-fire:behind",
      front: "There's smoke or fire behind you. What do you do?",
      back: "Leave the tunnel by continuing to drive ahead.", src: P(87, "Post-test answer 6") },
    { id: "r7", type: "flash", concept: "equipment",
      front: "Where are tunnel emergency telephones, and who do they connect to?",
      back: "Generally on the left-hand side — they connect to the tunnel operator.", src: P(87, "Post-test answer 10") },
    { id: "r8", type: "flash", concept: "operator",
      front: "What is the FM radio break-in facility?",
      back: "A way for the tunnel operators to contact drivers in the tunnel.", src: P(87, "Post-test answer 11") },
    { id: "r9", type: "fill", concept: "breakdown",
      before: "Emergency lay-bys in tunnels are positioned about every", after: ".",
      options: ["1 km", "100 m", "5 km", "60 m"], answer: "1 km",
      explain: "Make every effort to use them.", src: P(83, "Emergency Lay-By's") },
    { id: "r10", type: "truefalse", concept: "operator",
      statement: "You only need to obey the tunnel operator if you can see why.", answer: false,
      explain: "You must always obey the operator's instructions, even if the reason isn't apparent to you at the time.", src: P(83, "The Operator") },
  ],
};

/* ---------------------------------------------------------------------------
   3. TUNNEL SENSE — recognition: pictures and sorts.
   --------------------------------------------------------------------------- */
const tunnels = {
  id: "tunnels",
  kind: "items",
  mode: "matching",
  title: "Tunnel Sense",
  blurb: "Spot it, sort it — before, inside, emergencies",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "why",
      prompt: "Which sign warns of a tunnel ahead?",
      options: ["tunnel-sign", "tram-crossing-sign", "motorway-signs", "lri-sign"], answer: 0,
      names: ["Tunnel ahead", "Tram crossing", "Motorway signs", "Location reference"],
      explain: "A yellow diamond with a tunnel mouth.", src: P(82, "Introduction") },
    { id: "k2", type: "picture", label: "Spot it", concept: "fire",
      prompt: "Fire ahead — which picture shows what to do?",
      options: ["tunnel-fire:ahead", "tunnel-fire:behind"], answer: 0,
      names: ["Stop, leave by the pedestrian exit", "Drive out of the tunnel"],
      explain: "Fire ahead: stop, engine off, out by the nearest pedestrian exit.", src: P(83, "Driver Obligations") },
    {
      id: "k3", type: "sort", concept: "fire",
      prompt: "Smoke or fire — what do you do?",
      categories: [
        { id: "out", label: "Leave on foot by the exit" },
        { id: "drive", label: "Drive out of the tunnel" },
      ],
      cards: [
        { text: "Smoke or fire ahead", cat: "out" },
        { text: "Your own car is on fire", cat: "out" },
        { text: "Smoke or fire behind you", cat: "drive" },
      ],
      explain: "Ahead or in your car: engine off, leave on foot. Behind: drive on out.", src: P(83, "Driver Obligations") },
    {
      id: "k4", type: "sort", concept: "before",
      prompt: "Before the tunnel, or inside it?",
      categories: [
        { id: "before", label: "Before entering" },
        { id: "inside", label: "Inside the tunnel" },
      ],
      cards: [
        { text: "Take sunglasses off", cat: "before" },
        { text: "Check your fuel", cat: "before" },
        { text: "Tune to the FM frequency shown", cat: "before" },
        { text: "Keep at least 50 m behind", cat: "inside" },
        { text: "Stay in your lane", cat: "inside" },
      ],
      explain: "Prepare before you enter; inside, distance and lane discipline.", src: P(82, "Summary; Restrictions") },
    {
      id: "k5", type: "sort", concept: "restrictions",
      prompt: "Allowed in a tunnel?",
      categories: [
        { id: "ok", label: "Allowed" },
        { id: "no", label: "Not allowed" },
      ],
      cards: [
        { text: "A full-licence car driver", cat: "ok" },
        { text: "A lorry within the height and width limits", cat: "ok" },
        { text: "A learner driver", cat: "no" },
        { text: "A pedal cyclist", cat: "no" },
        { text: "A pedestrian", cat: "no" },
      ],
      explain: "No pedestrians, learner drivers or pedal cyclists; large vehicles must check the limits.", src: P(82, "Restrictions") },
    { id: "k6", type: "picture", label: "Spot it", concept: "equipment",
      prompt: "Which picture shows a tunnel's safety features?",
      options: ["tunnel-safety", "tunnel-distance", "hard-shoulder-stop", "motorway-lanes"], answer: 0,
      names: ["Tunnel safety features", "Tunnel distances", "Motorway hard shoulder", "Motorway lanes"],
      explain: "Lay-bys, phones on the left, hydrants and hose reels, CCTV and loudspeakers.", src: P(83, "Safety features") },
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
  blurb: "Distances and safety features",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "equipment", visual: "tunnel-safety",
      prompt: "Match the feature to its spacing.",
      pairs: [
        ["Emergency lay-bys", "About every 1 km"],
        ["Fire hydrants", "Every 125 m"],
        ["Hose reels", "Every 60 m"],
        ["Gap behind a lorry", "100 m"],
      ],
      explain: "Know what's around you — and how far it is.", src: P(83, "Lay-Bys; Fire Fighting; p.82") },
    {
      id: "m2", type: "match", concept: "operator",
      prompt: "Match the system to what it does.",
      pairs: [
        ["CCTV", "The operator sees every part of the tunnel"],
        ["FM radio break-in", "The operator talks to drivers"],
        ["Variable message signs", "Changing instructions — pay attention"],
        ["Emergency telephone", "You talk to the operator"],
      ],
      explain: "The operator watches, speaks and instructs — always obey.", src: P(83, "CCTV; FM; Loudspeakers; p.87") },
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
  blurb: "Entering, and a fire ahead",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "before", visual: "tunnel-approach",
      prompt: "Approaching a tunnel — in order.",
      steps: ["Check you're well, the car's roadworthy and has fuel", "Tune to the FM frequency shown before the entrance", "Remove your sunglasses in good time", "Switch on dipped headlights", "Enter and keep a safe distance"],
      explain: "Health, fuel, car; radio; sunglasses off; dipped lights; distance.", src: P(82, "Summary; p.87") },
    { id: "p2", type: "order", concept: "fire", visual: "tunnel-fire:ahead",
      prompt: "Smoke and fire in the tunnel ahead — in order.",
      steps: ["Stop as early as possible, far from the danger", "Turn off the engine", "Get yourself and all passengers out", "Follow the wall markers to the nearest pedestrian exit", "Leave the tunnel"],
      explain: "Stop early, engine off, everyone out, pedestrian exit.", src: P(87, "Post-test answer 7; p.83") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "breakdown", visual: "tunnel-safety",
      scene: "⚠️ Your car loses power halfway through a tunnel.",
      prompt: "What do you do?",
      options: ["Stop where you are and push it", "Switch off and try to reach the nearest lay-by", "Reverse out", "Make a U-turn"], answer: 1,
      explain: "If you break down, switch off the ignition/engine and try to get to the nearest lay-by.", src: P(83, "Driver Obligations") },
    { id: "s2", type: "choice", label: "Scenario", concept: "stopping",
      scene: "🔴 The signs tell you to stop in the tunnel, but you can't see any problem.",
      prompt: "What do you do?",
      options: ["Carry on — nothing is wrong", "Stop, warning lights on, and leave a gap from the vehicle ahead", "Overtake the stopped traffic", "Reverse to the entrance"], answer: 1,
      explain: "There may be an emergency up ahead even if you can't see it. Stop, switch on warning lights, leave stopping distance.", src: P(82, "Restrictions; p.87 answer 5") },
    { id: "s3", type: "choice", label: "Scenario", concept: "fire", visual: "tunnel-fire:ahead",
      scene: "🔥 Smoke is pouring from a lorry ahead of you.",
      prompt: "What do you do?",
      options: ["Drive past it quickly", "Stop early, engine off, everyone out by the nearest pedestrian exit", "Stay in the car with the windows shut", "Reverse away"], answer: 1,
      explain: "Stop as early and as far from the danger as you can, turn off the engine, get everyone out and use the emergency pedestrian exit.", src: P(87, "Post-test answer 7") },
    { id: "s4", type: "choice", label: "Scenario", concept: "fire",
      scene: "💨 Your own car starts smoking from under the bonnet in the tunnel.",
      prompt: "What do you do?",
      options: ["Drive on to the exit", "Switch off the ignition and leave the vehicle immediately by the pedestrian exit", "Open the bonnet to look", "Phone a garage"], answer: 1,
      explain: "If your vehicle is on fire, switch off and leave it immediately via the pedestrian exit.", src: P(87, "Post-test answer 8") },
    { id: "s5", type: "choice", label: "Scenario", concept: "operator",
      scene: "📢 A loudspeaker tells everyone to leave their vehicles. Traffic is moving fine where you are.",
      prompt: "What do you do?",
      options: ["Ignore it — it can't mean you", "Obey: leave your vehicle and the tunnel by the nearest exit", "Wait to see what others do", "Phone the operator to ask why"], answer: 1,
      explain: "Always obey the operator, even if the reason isn't apparent at the time.", src: P(83, "The Operator") },
    { id: "s6", type: "choice", label: "Scenario", concept: "distance", visual: "tunnel-distance",
      scene: "🚚 Your pupil drives an articulated lorry through a tunnel.",
      prompt: "What gap should they keep?",
      options: ["50 metres", "100 metres", "20 metres", "Two seconds"], answer: 1,
      explain: "At least 50 m for cars, 100 m for LGVs.", src: P(82, "Restrictions") },
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
  blurb: "A newly qualified driver's first tunnel",
  xpPer: 10,
  situation: "☀️ A sunny afternoon. Your newly qualified pupil is heading for a city tunnel for the first time.",
  items: [
    { id: "w1", type: "choice", step: "Planning", concept: "before", prompt: "Before setting off, what should they check?",
      options: ["Their health, fuel and a roadworthy vehicle", "Only the route", "The tunnel's opening hours", "Nothing special"], answer: 0,
      explain: "Your health, fuel and a roadworthy vehicle.", src: P(87, "Post-test answer 1") },
    { id: "w2", type: "choice", step: "Approach", concept: "before", visual: "tunnel-approach", prompt: "They're wearing sunglasses. When should they come off?",
      options: ["In good time before the tunnel", "Inside, once it's dark", "Not at all", "At the exit"], answer: 0,
      explain: "Remove sunglasses in sufficient time to let your eyes adjust to the darker tunnel.", src: P(87, "Post-test answer 2") },
    { id: "w3", type: "choice", step: "Radio", concept: "before", prompt: "A sign shows an FM frequency before the entrance.",
      options: ["Ignore it", "Tune to it — for safety tips and traffic reports", "Turn the radio off", "Only tune in if there's a problem"], answer: 1,
      explain: "Tune to the frequency shown before entry: in many tunnels the operator can break in with the latest information.", src: P(82, "Summary") },
    { id: "w4", type: "choice", step: "Inside", concept: "distance", visual: "tunnel-distance", prompt: "The car in front is slow. Your pupil wants to overtake.",
      options: ["Fine — overtaking is always allowed", "Stay in lane unless totally necessary, and follow the overhead signs", "Overtake on the left", "Flash it"], answer: 1,
      explain: "Stay in your lane; don't overtake unless totally necessary — some tunnels prohibit it.", src: P(82, "Restrictions") },
    { id: "w5", type: "choice", step: "A message", concept: "operator", prompt: "A variable message sign changes as they drive.",
      options: ["Ignore it — they're always the same", "Pay special attention to it", "Slow down to read it all", "Stop to read it"], answer: 1,
      explain: "Variable electronic signs give different messages — pay special attention to them.", src: P(87, "Post-test answer 12") },
    { id: "w6", type: "choice", step: "Exit", concept: "speed", prompt: "Near the exit the road is clear. They speed up past the limit for a moment.",
      options: ["No harm — no camera visible", "Speed-over-distance cameras time the whole tunnel: a fine and penalty points", "Tunnels have no limit", "It's fine near the exit"], answer: 1,
      explain: "Speed-over-distance cameras check your average speed between entry and exit.", src: P(83, "A Note on Speed") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — the book has no retention test for this unit; these
   are built from the page 87 model answers and the unit text.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, ref, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(ref[0], ref[1]),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "Before driving through a tunnel, you should check", ["only your mirrors", "your health, fuel and a roadworthy vehicle", "the tunnel's length", "nothing — tunnels are well lit"], 1, "before", [87, "Built from model answer 1"]),
    R(2, "Sunglasses should be removed before a tunnel", ["only if it's raining", "in sufficient time for your eyes to adjust to the darker conditions", "once you're inside", "they needn't be removed"], 1, "before", [87, "Built from model answer 2"], "tunnel-approach"),
    R(3, "In a tunnel you use dipped headlights", ["only if the lights fail", "to see and be seen", "to warn the operator", "only in an emergency"], 1, "before", [87, "Built from model answer 3"]),
    R(4, "The minimum safe distance for cars in a tunnel is", ["10 metres", "at least 50 metres", "at least 100 metres", "one car length"], 1, "distance", [82, "Built from Restrictions"], "tunnel-distance"),
    R(5, "If there is smoke or fire behind you in a tunnel, you should", ["stop and get out", "reverse to the entrance", "leave the tunnel by continuing to drive ahead", "make a U-turn"], 2, "fire", [87, "Built from model answer 6"], "tunnel-fire:behind"),
    R(6, "If there is smoke or fire ahead of you in a tunnel, you should", ["drive through it quickly", "stop early, turn off the engine and leave by the emergency pedestrian exit", "wait in the car for the fire service", "reverse away from it"], 1, "fire", [87, "Built from model answer 7"], "tunnel-fire:ahead"),
    R(7, "If your vehicle catches fire in a tunnel, you should", ["drive to the exit", "switch off the ignition and leave the vehicle immediately via the pedestrian exit", "try to put it out with a hose reel", "stay in the vehicle"], 1, "fire", [87, "Built from model answer 8"]),
    R(8, "The tunnel operator's instructions should be", ["obeyed only in an emergency", "obeyed", "followed if you agree", "ignored if traffic is moving"], 1, "operator", [87, "Built from model answer 9; p.83"]),
    R(9, "Tunnel emergency telephones are generally", ["on the right-hand side, connected to the Gardaí", "on the left-hand side, connected to the tunnel operator", "only at the entrance", "not provided — use a mobile"], 1, "equipment", [87, "Built from model answer 10"]),
    R(10, "The FM radio break-in facility is", ["a way for the tunnel operators to contact drivers in the tunnel", "a music station for tunnels", "a way to call for help", "only for lorry drivers"], 0, "operator", [87, "Built from model answer 11"]),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "restrictions",
      prompt: "Which of these may NOT use a tunnel?", options: ["A van", "A learner driver", "A coach", "A motorcyclist with a full licence"], answer: 1,
      explain: "No learner drivers, pedestrians or pedal cyclists.", src: P(82, "Restrictions") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "stopping",
      scene: "↩️ You realise you're in the wrong tunnel bore.",
      prompt: "What do you do?", options: ["Reverse to the entrance", "Make a U-turn when it's clear", "Continue to the exit and find your way back", "Stop and ask the operator"], answer: 2,
      explain: "Never ever reverse or make a U-turn in a tunnel; carry on through.", src: P(82, "Restrictions") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "distance",
      statement: "Lorries in a tunnel need a bigger gap than cars — 100 m.", answer: true,
      explain: "At least 50 m for cars and 100 m for LGVs.", src: P(82, "Restrictions") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "fire",
      prompt: "Smoke behind you. Which picture is right?", options: ["tunnel-fire:behind", "tunnel-fire:ahead"], answer: 0,
      names: ["Drive on out of the tunnel", "Stop and leave on foot"],
      explain: "Smoke or fire behind: drive out of the tunnel.", src: P(83, "Driver Obligations") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "equipment",
      prompt: "Match the spacing.", pairs: [["Lay-bys", "About 1 km"], ["Hydrants", "125 m"], ["Hose reels", "60 m"]],
      explain: "Lay-bys every km, hydrants every 125 m, hose reels every 60 m.", src: P(83, "Lay-Bys; Fire Fighting") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "before",
      prompt: "Before entering a tunnel:", steps: ["Check fuel", "Tune to the FM frequency", "Sunglasses off", "Dipped headlights on"],
      explain: "Fuel, radio, sunglasses, lights.", src: P(82, "Summary") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "operator",
      scene: "📻 The radio cuts out and a voice tells drivers to slow down for an incident ahead.",
      prompt: "Who is it, and what do you do?", options: ["A DJ — ignore it", "The tunnel operator — obey", "Another driver — ignore it", "The Gardaí — pull over"], answer: 1,
      explain: "FM radio break-in lets the operator contact drivers — always obey their instructions.", src: P(83, "FM Radio Break-in; The Operator") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "stopping",
      prompt: "You may stop in a tunnel…", options: ["To check a map", "Only in an emergency, with hazard lights on", "If traffic is light", "To let a passenger out"], answer: 1,
      explain: "Don't stop for any reason other than an emergency — hazard lights on if you must.", src: P(82, "Restrictions") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "before",
      prompt: "Which picture shows how to prepare before a tunnel?", options: ["tunnel-approach", "dark-car-dusk"], answer: 0,
      names: ["Before the tunnel", "Dusk"],
      explain: "Sunglasses off, dipped headlights, fuel, FM frequency.", src: P(82, "Summary") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "speed",
      prompt: "Speed-over-distance cameras in a tunnel…", options: ["Only work at the entrance", "Time you between entry and exit and check your average speed", "Only photograph lorries", "Don't exist in Ireland"], answer: 1,
      explain: "They use ANPR to time you over a set distance; over the limit means a fine and penalty points.", src: P(83, "A Note on Speed") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "1.11",
  number: "1.11",
  title: "Driving in Tunnels",
  pages: [82, 83],
  intro: "Preparing to enter, rules inside, and what to do in a breakdown or a fire.",
  objectives: [
    "What to do before entering a tunnel",
    "The rules for tunnels",
    "Emergency and safety procedures",
  ],
  objectivesSrc: P(82, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...tunnels, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "tunnel-sense", icon: "🚇", label: "Tunnel Sense", rule: { activity: "tunnels", min: 100 } },
    { id: "tunnel-specialist", icon: "🏆", label: "Tunnel Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
