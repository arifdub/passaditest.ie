/*
  ===========================================================================
  BOOK 1 · UNIT 1.7 — LEVEL CROSSINGS & TRAMWAYS

  Source: "Driving Procedures & Road Safety — Resource Workbook, Book 1"
  (Driver Education Supplies), book pages 59–63, with the post-test model
  answers on page 86 and the retention-test answers on page 89
  (1b 2a 3c 4b 5a 6a 7c 8b 9c 10a).

  The answer key agrees with the unit text throughout, so all ten
  retention questions are used. Q6 (crossings with neither gates nor
  barriers protected by twin red flashing lights) cites the Rules of the
  Road; it matches the unit's "controlled open crossings ... controlled by
  lights" and is kept as the book sets it.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 1, unit: "1.7", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Why level crossings matter",
    text: "Level crossings are particularly hazardous. A driver must understand and interpret the traffic lights, signs and signals at the various types of crossing, and know what to do in the event of a breakdown or accident on the crossing.",
    src: P(59, "Unit introduction"),
  },
  "approach": {
    title: "On approach",
    text: "Warning signs may show the type of crossing ahead — with or without a gate or barrier. Most have full or half barriers and may be controlled by traffic lights and an audible alarm, operated by an attendant or automatically as the train approaches. Red and white countdown markers may come before a concealed level crossing. Approach carefully and cross with care.",
    src: P(60, "On approach"),
  },
  "must-not": {
    title: "At a level crossing you must not",
    text: "Drive on to the crossing unless the road is clear beyond it; drive \"nose to tail\" over it; stop on or just after it; park close to it; start crossing once the lights, alarm or barriers operate; zigzag around half barriers.",
    src: P(60, "You must not"),
  },
  "types": {
    title: "Types of level crossing",
    text: "Automatic: steady amber then twin red flashing lights, triggered by the approaching train (half barriers are operated automatically by the train). Controlled \"open\": no attendant, gates or barriers — controlled by lights. Gated: no attendant, but half or full barriers. Attendant-operated: the attendant closes the gate before the train and opens it when it's safe. Unattended, road-user operated: no attendant, no lights, but gates or barriers across the full width of the road.",
    src: P(60, "Types of level crossings & control; p.86 answers 3, 7"),
  },
  "user-operated": {
    title: "Gates you open yourself",
    text: "Stop short of the crossing. Get out. Look both ways and listen to make sure no train is approaching. Open the gates at BOTH sides. If safe, drive all the way over. Close both gates before you continue.",
    src: P(60, "Unattended road user operated crossings"),
  },
  "lights": {
    title: "Traffic light control",
    text: "A steady amber light and audible alarm, then twin flashing red lights, warn of a train at most crossings. When they operate you must not drive on to the crossing. The audible warning starts at the same time as the steady amber. If they start while you're already on the crossing, you MUST keep going.",
    src: P(61, "Traffic light control; p.86 answers 2, 5, 6"),
  },
  "second-train": {
    title: "Another train",
    text: "At all light-controlled crossings, if the lights keep showing after a train has passed, or the alarm changes tone, another train is coming — you must wait. Some crossings have an illuminated sign: \"SECOND TRAIN APPROACHING\". Obey the signs.",
    src: P(61, "Traffic light control"),
  },
  "telephone": {
    title: "Railway telephones",
    text: "Where provided, you must use the railway telephone to inform the signalman if you've had an accident or breakdown on the crossing, if you need to check it's safe to cross, or if you need permission to use it — driving a large or slow-moving vehicle, one with limited ground clearance, or herding animals.",
    src: P(61, "Railway telephones"),
  },
  "breakdown": {
    title: "Breakdown or accident on a crossing",
    text: "First priority: get everybody out of the car and clear of the crossing. If available, use the railway telephone at once to inform the signalman. Obey the instructions you're given: move the car clear only if possible and there's time, and only with the signalman's permission. If a train approaches or the lights and alarm operate, GET CLEAR — the train will not be able to stop.",
    src: P(61, "Breakdowns and accidents; p.86 answer 8"),
  },
  "keep-clear": {
    title: "Keep the crossing clear",
    text: "A yellow box marking may be used to keep a busy crossing clear. Never drive on to the crossing unless the road is clear beyond it.",
    src: P(86, "Post-test answers 4, 10"),
  },
  "trams": {
    title: "Luas tramways",
    text: "Dealing with Luas tramways needs special care. Tramways are usually marked by white lines or yellow dots, or a different colour or type of road surface. Don't enter a lane or road reserved for trams. Trams have priority over other vehicles. You must not drive between trams and the left kerb, or park where you'd obstruct a tram or force other drivers to.",
    src: P(61, "Tramways; p.60 side note"),
  },
  "wires": {
    title: "Overhead wires",
    text: "Be aware of the overhead wires used by trams — particularly important for drivers of large vehicles or vehicles carrying high loads, to avoid damage or possible electrocution.",
    src: P(59, "Introduction"),
  },
  "swept-path": {
    title: "The swept path",
    text: "The tram pathway or \"swept path\" is about 7 metres wide, varying with the curve of the line. It takes two tracks, so trams can run each way independently, with safety clearance. It may be marked with distinctive coloured surfacing or materials, or raised slightly. Tracks are set flush with the surface, so other vehicles can cross the pathway at junctions.",
    src: P(60, "Tram pathway or swept path; Road marking; Road sharing"),
  },
  "lana-tram": {
    title: "LÁNA TRAM",
    text: "The LÁNA TRAM road marking draws your attention to tram tracks ahead, to the left or right. It tells you there's a section of road used by trams and vehicles — take extra care, as you may have to share the road space.",
    src: P(59, "Introduction"),
  },
  "tram-signs": {
    title: "Tram lane signs",
    text: "Blue signs show a tram lane running beside a traffic lane ahead; a driver can only enter a tram lane to overtake when safe to do so. A red and white sign shows a pedestrian may not walk beyond it. No Entry \"Except Trams\": only trams may enter. No Entry \"Except Trams and Access\": a driver or cyclist may enter only to reach or leave a building. At junctions on a tram line, always obey the traffic lights and keep yellow boxes completely clear — especially on bends and corners, allowing for the tram's sweep.",
    src: P(59, "Regulatory signs for tram lanes"),
  },
  "tram-crossing": {
    title: "Crossing tram tracks",
    text: "Pedestrians and drivers should cross tram tracks only where they see the tram-crossing sign: a tram symbol with LOOK BOTH WAYS (or LOOK RIGHT, LOOK LEFT). Near tramways, stop, look both ways, listen, obey the signs, and listen for warning horns and tram chimes.",
    src: P(59, "Warning signs for tram lanes"),
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
    "Steady amber + alarm, then twin flashing red: STOP. Already on it? Keep going",
    "Never drive on unless the road beyond is clear",
    "Breakdown: everyone out and clear first, then the railway phone",
  ],
  cards: [
    {
      icon: "🚂",
      kicker: "Level crossings",
      title: "Where road meets railway",
      visual: "crossing-half",
      body: [
        "Level crossings are particularly hazardous. You need to understand the lights, signs and signals at each type of crossing — and know what to do if you break down or have an accident on one.",
        "Teach this even where there are no trains or trams locally: your pupils will probably drive in such areas.",
      ],
      think: ["🚦 What kind of crossing is this?", "➡️ Is the road clear beyond it?", "📞 Where's the railway telephone?"],
      concept: "why",
      src: P(59, "Unit introduction"),
    },
    {
      icon: "⚠️",
      kicker: "On approach",
      title: "Read the warnings",
      visual: "countdown-markers",
      body: [
        "Warning signs may tell you the type of crossing ahead — with or without a gate or barrier.",
        "Most crossings have full or half barriers and may be controlled by traffic lights and an audible alarm — operated by an attendant, or automatically as the train approaches.",
      ],
      callout: "Red and white countdown markers may come before a concealed level crossing.",
      concept: "approach",
      src: P(60, "On approach"),
    },
    {
      icon: "🚦",
      kicker: "Traffic light control",
      title: "Amber, then twin red",
      visual: "crossing-lights",
      ask: {
        prompt: "You're ON the crossing when the amber light comes on and the alarm sounds. What do you do?",
        options: ["Stop where you are", "Keep going and clear the crossing", "Reverse back off it"],
        answer: 1,
      },
      list: [
        "A steady amber light and audible alarm, then twin flashing red lights, warn of a train",
        "The audible warning starts at the same time as the steady amber",
        "When they operate you must not drive on to the crossing",
        "Already on the crossing? You MUST keep going",
      ],
      concept: "lights",
      src: P(61, "Traffic light control; p.86 answers 5, 6"),
    },
    {
      icon: "🚆",
      kicker: "Another train",
      title: "The lights stay on",
      visual: "crossing-lights",
      body: [
        "At all light-controlled crossings: if the lights keep showing after a train has passed, or the tone of the alarm changes, another train is approaching. You must wait.",
        "Some crossings have an extra illuminated sign: \"SECOND TRAIN APPROACHING\". Obey the signs.",
      ],
      concept: "second-train",
      src: P(61, "Traffic light control"),
    },
    {
      icon: "🚧",
      kicker: "Types of crossing",
      title: "Know which one you're at",
      visuals: ["crossing-half", "crossing-open", "crossing-gates"],
      sections: [
        { head: "Automatic", list: ["Steady amber, then twin red flashing lights", "Triggered by the approaching train", "Half barriers are operated automatically by the train"] },
        { head: "Controlled \"open\"", list: ["No attendant, no gates, no barriers", "Controlled by lights"] },
        { head: "Gated", list: ["No attendant, but half or full barriers"] },
        { head: "Attendant-operated", list: ["The attendant closes the gate before the train arrives", "…and opens it when it's safe to proceed"] },
        { head: "Unattended, road-user operated", list: ["No attendant, no traffic lights", "Gates or barriers across the full width of the road — you open them"] },
      ],
      concept: "types",
      src: P(60, "Types of level crossings & control"),
    },
    {
      icon: "🚪",
      kicker: "Gates you open yourself",
      title: "Both gates, both ways",
      visual: "crossing-gates",
      ask: {
        prompt: "At a crossing with gates you open yourself, how many gates do you open before driving on?",
        options: ["The one on your side", "Both — at BOTH sides of the crossing", "None — drive through slowly"],
        answer: 1,
      },
      list: [
        "Stop short of the crossing",
        "Get out of your vehicle",
        "Look both ways and listen — make sure no train is approaching",
        "Open the gates at BOTH sides of the crossing",
        "If safe, drive all the way over",
        "Close both gates before you continue your journey",
      ],
      concept: "user-operated",
      src: P(60, "Unattended road user operated crossings"),
    },
    {
      icon: "⛔",
      kicker: "You must not",
      title: "Never on, never stuck",
      visuals: ["crossing-clear", "crossing-half"],
      list: [
        "Drive on to the crossing unless the road is clear beyond it",
        "Drive \"nose to tail\" over a level crossing",
        "Stop on or just after the crossing",
        "Park close to the crossing",
        "Start crossing once the lights, alarm or barriers operate",
        "Zigzag around half barriers",
      ],
      callout: "A yellow box marking may be used to keep a busy crossing clear.",
      concept: "must-not",
      src: P(60, "You must not; p.86 answer 4"),
    },
    {
      icon: "☎️",
      kicker: "Railway telephones",
      title: "Call the signalman",
      body: ["Where one is provided, you must use the railway telephone to inform the signalman when:"],
      list: [
        "You've had an accident or breakdown on the crossing",
        "You need to check it's safe to cross",
        "You need permission to use the crossing — driving a large vehicle, a slow-moving vehicle, one with limited ground clearance, or herding animals",
      ],
      concept: "telephone",
      src: P(61, "Railway telephones"),
    },
    {
      icon: "🆘",
      kicker: "Breakdowns and accidents",
      title: "People first, car last",
      visual: "crossing-breakdown",
      ask: {
        prompt: "Your car stalls on a level crossing and won't restart. What's your FIRST action?",
        options: ["Phone the signalman", "Get everyone out and clear of the crossing", "Push the car off"],
        answer: 1,
      },
      list: [
        "First priority: get everybody out of the car and clear of the crossing",
        "If available, immediately use the railway telephone to inform the signalman",
        "Obey the instructions you're given",
        "Move the car clear only if it's possible, there's time — and the signalman gives permission",
      ],
      callout: "If a train approaches or the lights and alarm operate: GET CLEAR. The train will not be able to stop.",
      concept: "breakdown",
      src: P(61, "Breakdowns and accidents; p.86 answer 8"),
    },
    {
      icon: "🚋",
      kicker: "Luas tramways",
      title: "Trams have priority",
      visuals: ["tram-kerb", "tram-lane"],
      list: [
        "Tramways are usually marked by white lines or yellow dots, or a different colour or type of road surface",
        "Don't enter a lane or road reserved for trams",
        "Trams have priority over other vehicles",
        "You must not drive between trams and the left kerb",
        "Don't park in a way that would obstruct a tram — or force other drivers to",
      ],
      concept: "trams",
      src: P(61, "Tramways; p.60"),
    },
    {
      icon: "📐",
      kicker: "Swept path",
      title: "The tram's space",
      visual: "tram-swept-path",
      body: [
        "The tram pathway or \"swept path\" is about 7 metres wide, varying with the curve of the line. It takes two tracks, so trams can run each way independently, with safety clearance.",
        "It may be marked with distinctive coloured surfacing or materials, or raised slightly above the road. Tracks are set flush with the surface, so other vehicles can cross it at junctions.",
      ],
      callout: "Mind the overhead wires — especially with a large vehicle or a high load: damage or possible electrocution.",
      concept: "swept-path",
      src: P(60, "Tram pathway or swept path; p.59"),
    },
    {
      icon: "🪧",
      kicker: "Tram signs and markings",
      title: "Read the tram signs",
      visuals: ["lana-tram", "no-entry-trams"],
      sections: [
        { head: "LÁNA TRAM", list: ["Draws attention to tram tracks ahead, left or right", "A section of road used by trams AND vehicles — extra care, you may share it"] },
        { head: "Regulatory signs", list: ["Blue: a tram lane beside a traffic lane ahead — enter it only to overtake when safe", "Red and white: pedestrians may not walk beyond the sign", "No Entry \"Except Trams\": trams only", "No Entry \"Except Trams and Access\": only to enter or leave a building"] },
      ],
      concept: "tram-signs",
      src: P(59, "Regulatory signs for tram lanes; Introduction"),
    },
    {
      icon: "👀",
      kicker: "Crossing tram tracks",
      title: "Look both ways",
      visuals: ["tram-crossing-sign", "tram-junction"],
      list: [
        "Cross tram tracks only where you see the tram-crossing sign — LOOK BOTH WAYS (or LOOK RIGHT, LOOK LEFT)",
        "Near tramways: stop, look both ways, listen, obey the signs",
        "Listen for warning horns and tram chimes",
        "At junctions on a tram line, obey the traffic lights and keep yellow boxes completely clear — allow for the tram's sweep on bends and corners",
      ],
      concept: "tram-crossing",
      src: P(59, "Warning signs for tram lanes; Regulatory signs"),
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
    { id: "r1", type: "flash", concept: "lights", visual: "crossing-lights",
      front: "What is the sequence of lights at a half-barrier crossing?",
      back: "Steady amber, followed by twin red flashing lights.", src: P(86, "Post-test answer 5") },
    { id: "r2", type: "flash", concept: "lights",
      front: "When does the audible warning start?",
      back: "At the same time as the steady amber light.", src: P(86, "Post-test answer 6") },
    { id: "r3", type: "flash", concept: "types", visual: "crossing-open",
      front: "What is an open level crossing?",
      back: "One with no gates or barriers.", src: P(86, "Post-test answer 7") },
    { id: "r4", type: "fill", concept: "keep-clear", visual: "crossing-clear",
      before: "A", after: "marking may be used to keep a busy crossing clear.",
      options: ["yellow box", "zigzag", "hatched", "stop line"], answer: "yellow box",
      explain: "A yellow box keeps the crossing clear — never drive on unless the road beyond is clear.", src: P(86, "Post-test answer 4") },
    { id: "r5", type: "truefalse", concept: "types",
      statement: "Half barriers are raised and lowered by an attendant.", answer: false,
      explain: "Half-barrier crossings are operated automatically by the train.", src: P(86, "Post-test answer 3") },
    { id: "r6", type: "flash", concept: "lights",
      front: "What should you do if a red light shows at a level crossing?",
      back: "Stop.", src: P(86, "Post-test answer 2") },
    { id: "r7", type: "truefalse", concept: "trams",
      statement: "Trams have priority over other vehicles.", answer: true,
      explain: "Trams have priority over other vehicles. Don't enter a lane or road reserved for them.", src: P(61, "Tramways") },
    { id: "r8", type: "fill", concept: "swept-path", visual: "tram-swept-path",
      before: "The tram's swept path is approximately", after: "wide.",
      options: ["7 metres", "3 metres", "12 metres", "1 metre"], answer: "7 metres",
      explain: "About 7 metres, varying with the curve — enough for two tracks and safety clearance.", src: P(60, "Tram pathway or swept path") },
    { id: "r9", type: "truefalse", concept: "trams", visual: "tram-kerb",
      statement: "You may drive between a tram and the left kerb if there's room.", answer: false,
      explain: "You MUST NOT drive between trams and the left kerb.", src: P(60, "Side note") },
    { id: "r10", type: "flash", concept: "keep-clear",
      front: "What must you not do at a level crossing, above all?",
      back: "Drive on to the crossing unless the road is clear beyond it.", src: P(86, "Post-test answer 10") },
  ],
};

/* ---------------------------------------------------------------------------
   3. NAME THAT CROSSING — recognition: picture questions and sorts.
   --------------------------------------------------------------------------- */
const crossings = {
  id: "crossings",
  kind: "items",
  mode: "matching",
  title: "Name That Crossing",
  blurb: "Crossings, tram signs and markings — spot and sort",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "types",
      prompt: "Which picture shows an automatic half-barrier crossing?",
      options: ["crossing-half", "crossing-open", "crossing-gates", "crossing-clear"], answer: 0,
      names: ["Half barriers", "Open crossing", "Gates you open yourself", "Yellow box"],
      explain: "Half barriers cover the approach side of the road and are operated automatically by the train.", src: P(86, "Post-test answer 3") },
    { id: "k2", type: "picture", label: "Spot it", concept: "types",
      prompt: "Which is an OPEN level crossing?",
      options: ["crossing-open", "crossing-half", "crossing-gates", "crossing-breakdown"], answer: 0,
      names: ["Open crossing", "Half barriers", "Gates", "Breakdown"],
      explain: "An open crossing has no gates or barriers — it is controlled by lights.", src: P(86, "Post-test answer 7; p.60") },
    { id: "k3", type: "picture", label: "Spot it", concept: "lana-tram",
      prompt: "Which picture shows a road shared by trams and vehicles?",
      options: ["lana-tram", "tram-lane", "no-entry-trams", "tram-crossing-sign"], answer: 0,
      names: ["LÁNA TRAM marking", "Tram lane", "No entry except trams", "Tram crossing sign"],
      explain: "LÁNA TRAM marks a section of road used by trams and vehicles — take extra care.", src: P(59, "Introduction") },
    {
      id: "k4", type: "sort", concept: "types",
      prompt: "Which type of crossing is it?",
      categories: [
        { id: "auto", label: "Automatic" },
        { id: "open", label: "Controlled open" },
        { id: "att", label: "Attendant-operated" },
        { id: "user", label: "You operate it" },
      ],
      cards: [
        { text: "Barriers worked by the approaching train", cat: "auto" },
        { text: "No gates or barriers — lights only", cat: "open" },
        { text: "Someone closes the gate before the train", cat: "att" },
        { text: "No attendant, no lights, full-width gates", cat: "user" },
      ],
      explain: "Knowing the type tells you what to expect — and what to do.", src: P(60, "Types of level crossings & control") },
    {
      id: "k5", type: "sort", concept: "must-not",
      prompt: "At a level crossing: OK, or must not?",
      categories: [
        { id: "ok", label: "OK" },
        { id: "no", label: "Must not" },
      ],
      cards: [
        { text: "Wait until the road beyond is clear", cat: "ok" },
        { text: "Keep going if the alarm sounds while you're on it", cat: "ok" },
        { text: "Follow nose to tail over the crossing", cat: "no" },
        { text: "Zigzag around half barriers", cat: "no" },
        { text: "Stop just after the crossing", cat: "no" },
        { text: "Park close to the crossing", cat: "no" },
      ],
      explain: "Never stop on or just after the crossing, and keep going if you're already on it when the warning starts.", src: P(60, "You must not; p.61") },
    {
      id: "k6", type: "sort", concept: "tram-signs",
      prompt: "No Entry — who may go in?",
      categories: [
        { id: "trams", label: "\"Except Trams\"" },
        { id: "access", label: "\"Except Trams and Access\"" },
      ],
      cards: [
        { text: "Trams only — no other traffic", cat: "trams" },
        { text: "A driver going to a building on the street", cat: "access" },
        { text: "A cyclist leaving a building on the street", cat: "access" },
      ],
      explain: "\"Except Trams\": no other traffic. \"Except Trams and Access\": also drivers or cyclists entering or leaving a building.", src: P(59, "Regulatory signs for tram lanes") },
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
  blurb: "Crossing types, and tram terms",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "types", visuals: ["crossing-half", "crossing-gates"],
      prompt: "Match the crossing to how it's controlled.",
      pairs: [
        ["Automatic", "Amber then twin red, triggered by the train"],
        ["Controlled open", "Lights only — no gates or barriers"],
        ["Gated", "No attendant, half or full barriers"],
        ["Unattended, user-operated", "You open and close the gates"],
      ],
      explain: "Each type warns you differently.", src: P(60, "Types of level crossings & control") },
    {
      id: "m2", type: "match", concept: "swept-path",
      prompt: "Match the tram term to its meaning.",
      pairs: [
        ["Swept path", "About 7 m — two tracks plus clearance"],
        ["LÁNA TRAM", "Road shared by trams and vehicles"],
        ["Overhead wires", "Danger to high loads"],
        ["Tram chimes", "A warning to listen for"],
      ],
      explain: "Trams need room, have priority, and give audible warnings.", src: P(59, "Introduction; p.60") },
    {
      id: "m3", type: "match", concept: "telephone",
      prompt: "Match the situation to the action.",
      pairs: [
        ["Driving a slow-moving vehicle across", "Phone for permission first"],
        ["Lights still on after the train passed", "Wait — another train"],
        ["Alarm sounds while you're on it", "Keep going"],
        ["Red lights flashing ahead", "Stop"],
      ],
      explain: "Phone for permission; wait for a second train; keep going if you're on it; stop at red.", src: P(61, "Railway telephones; Traffic light control") },
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
  blurb: "Gates, breakdowns and the light sequence",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "user-operated", visual: "crossing-gates",
      prompt: "Crossing with gates you open yourself — in order.",
      steps: ["Stop short of the crossing", "Get out of your vehicle", "Look both ways and listen for trains", "Open the gates at BOTH sides", "If safe, drive all the way over", "Close both gates"],
      explain: "Both gates open before you drive on; both closed before you continue.", src: P(60, "Unattended road user operated crossings") },
    { id: "p2", type: "order", concept: "breakdown", visual: "crossing-breakdown",
      prompt: "Your car breaks down on a level crossing — in order.",
      steps: ["Get everybody out and clear of the crossing", "Use the railway telephone to inform the signalman", "Obey the instructions you're given", "Move the car only with permission, if there's time"],
      explain: "People first. Then the signalman. Only try to move the car if the signalman says there's no train coming.", src: P(61, "Breakdowns and accidents; p.86 answer 8") },
    { id: "p3", type: "order", concept: "lights", visual: "crossing-lights",
      prompt: "A train approaches an automatic crossing — what happens, in order?",
      steps: ["Steady amber light and the audible alarm", "Twin red flashing lights", "The train passes", "Lights go off — unless another train is coming"],
      explain: "If the lights keep showing after the train passes, another train is approaching — wait.", src: P(61, "Traffic light control") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "second-train", visual: "crossing-lights",
      scene: "🚆 A train has just passed the crossing, but the red lights are still flashing.",
      prompt: "What do you do?",
      options: ["Check both ways and go", "Phone to report a fault", "Remain and obey the signals — another train is coming", "Edge across the stop line to look"], answer: 2,
      explain: "If the lights keep showing after a train has passed, another train is approaching — you must wait.", src: P(63, "Retention Q3 (answer c, p.89)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "lights",
      scene: "🔔 You're driving over a level crossing when the warning lights come on and the alarm sounds.",
      prompt: "What do you do?",
      options: ["Keep going and clear the crossing", "Stop and get everyone out", "Stop and reverse back", "Stop and phone the signal operator"], answer: 0,
      explain: "You MUST keep going if the lights start or the alarm sounds while you're on the crossing.", src: P(63, "Retention Q5 (answer a, p.89)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "breakdown", visual: "crossing-breakdown",
      scene: "📞 You broke down on a crossing. The signalman told you to get the car clear. While you're pushing it, the alarm sounds.",
      prompt: "What now?",
      options: ["Keep pushing — you were told to", "Get yourself and everyone clear of the crossing at once", "Expect the train to stop", "Send someone to phone again"], answer: 1,
      explain: "If a train approaches or the alarm operates, GET CLEAR — the train will not be able to stop.", src: P(63, "Retention Q8 (answer b, p.89)") },
    { id: "s4", type: "choice", label: "Scenario", concept: "keep-clear", visual: "crossing-clear",
      scene: "🚗 You're in a steady stream of traffic approaching a level crossing. The queue beyond it is crawling.",
      prompt: "For your safety you should…",
      options: ["Not follow nose to tail over the crossing", "Sound the horn before driving on", "Accelerate over promptly", "Keep as close as you can to the car ahead"], answer: 0,
      explain: "Don't drive nose to tail — and never drive on unless the road is clear beyond.", src: P(63, "Retention Q10 (answer a, p.89)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "telephone",
      scene: "🐄 A farmer needs to bring a herd of cattle across a crossing that has a railway telephone.",
      prompt: "What must they do?",
      options: ["Cross quickly between trains", "Use the railway telephone for permission first", "Wait for the lights to flash", "Nothing special"], answer: 1,
      explain: "You need permission to use the crossing when herding animals, driving a large or slow vehicle, or one with limited ground clearance.", src: P(61, "Railway telephones") },
    { id: "s6", type: "choice", label: "Scenario", concept: "trams", visual: "tram-kerb",
      scene: "🚋 A tram is stopped on the tracks near the left kerb. There's a car-width gap between it and the kerb.",
      prompt: "Can you use the gap?",
      options: ["Yes, slowly", "No — never drive between a tram and the left kerb", "Yes, if you sound the horn", "Only on a bike"], answer: 1,
      explain: "You MUST NOT drive between trams and the left kerb.", src: P(60, "Side note") },
    { id: "s7", type: "choice", label: "Scenario", concept: "tram-signs", visual: "tram-junction",
      scene: "🟨 Lights are green at a junction on a tram line, but the far side is queued and a tram is about to turn the corner.",
      prompt: "What do you do?",
      options: ["Go — it's green", "Wait: keep the yellow box completely clear, allowing for the tram's sweep", "Stop in the box", "Edge forward onto the tracks"], answer: 1,
      explain: "At tram-line junctions, obey the lights and keep yellow boxes completely clear — especially on bends and corners, for the tram sweep.", src: P(59, "Regulatory signs for tram lanes") },
    { id: "s8", type: "choice", label: "Scenario", concept: "wires", visual: "tram-swept-path",
      scene: "🚚 Your pupil is a truck driver with a high load on a route with trams.",
      prompt: "What do you warn them about?",
      options: ["Tram chimes", "The overhead wires — damage or possible electrocution", "Yellow dots", "Nothing — trams are on rails"], answer: 1,
      explain: "Overhead wires matter most for large vehicles and high loads: damage or possible electrocution.", src: P(59, "Introduction") },
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
  blurb: "A country crossing with gates",
  xpPer: 10,
  situation: "🌾 On a country road you pass red and white countdown markers. Round the bend is a level crossing with gates across the road — no attendant, no lights.",
  items: [
    { id: "w1", type: "choice", step: "The markers", concept: "approach", visual: "countdown-markers", prompt: "What do the red and white markers tell you?",
      options: ["A school ahead", "A concealed level crossing ahead", "A speed camera", "A narrow bridge"], answer: 1,
      explain: "Red and white countdown markers may come before a concealed level crossing.", src: P(60, "On approach") },
    { id: "w2", type: "choice", step: "Arriving", concept: "user-operated", prompt: "You reach the closed gates. First?",
      options: ["Sound the horn", "Stop short of the crossing", "Push the gate with the bumper", "Phone the signalman"], answer: 1,
      explain: "Stop short of the crossing, then get out.", src: P(60, "Unattended road user operated crossings") },
    { id: "w3", type: "choice", step: "Checking", concept: "user-operated", prompt: "You're out of the car. Next?",
      options: ["Open the near gate and drive on", "Look both ways and listen to make sure no train is coming", "Wait for an attendant", "Open the far gate only"], answer: 1,
      explain: "Look both ways and listen before you open anything.", src: P(60, "Unattended road user operated crossings") },
    { id: "w4", type: "choice", step: "The gates", concept: "user-operated", visual: "crossing-gates", prompt: "No train. Now…",
      options: ["Open the first gate, drive on, then open the second", "Open both gates, then drive over if safe", "Open both and leave them", "Drive through the gates"], answer: 1,
      explain: "Open both gates, proceed if safe, then close both barriers.", src: P(63, "Retention Q9 (answer c, p.89)") },
    { id: "w5", type: "choice", step: "Crossing", concept: "must-not", prompt: "As you cross, where do you stop?",
      options: ["On the tracks, to look again", "Just after the crossing", "Clear of the crossing — all the way over", "Halfway"], answer: 2,
      explain: "Drive all the way over. Never stop on or just after the crossing.", src: P(60, "You must not; Unattended crossings") },
    { id: "w6", type: "choice", step: "Leaving", concept: "user-operated", prompt: "You're across. Before you continue…",
      options: ["Close both gates", "Leave them open for the next driver", "Close the far one only", "Phone the signalman"], answer: 0,
      explain: "Ensure you close both gates before continuing with your journey.", src: P(60, "Unattended road user operated crossings") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 89.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(63, `Retention test Q${n}; answer p.89`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "At an automatic level crossing with lights and barriers, the sequence of lights seen by a driver when a train is approaching is", ["twin amber followed by flashing red lights", "steady amber followed by twin flashing red lights", "steady green and amber followed by flashing red lights", "flashing amber followed by twin red lights"], 1, "lights", "crossing-lights"),
    R(2, "Automatic level crossings that have no gates or barriers", ["will be controlled by flashing red lights", "will never have traffic light control", "will always have an attendant", "will always have an audible warning"], 0, "types", "crossing-open"),
    R(3, "If, after a train has passed, a driver at a level crossing notices that light signals continue to show, the driver should", ["check both ways before proceeding onto the crossing", "telephone the signal operator to advise the fault", "remain and obey the signals", "edge across the stop line and look both ways before proceeding"], 2, "second-train"),
    R(4, "Approaching an automatic half-barrier level crossing, you see the lights begin to show and should next expect to", ["see the train arrive", "see the barriers come down", "hear an audible alarm", "stop and close the gates"], 1, "types", "crossing-half"),
    R(5, "Whilst driving over a level crossing the warning lights come on and the alarm sounds. You should", ["keep going and clear the crossing", "stop and get everyone out of the vehicle and clear of the crossing", "stop, reverse back to get clear of the crossing", "stop and call the signal operator for advice"], 0, "lights"),
    R(6, "According to the Rules of the Road, a few unattended level crossings have neither gates nor barriers and are protected", ["by twin red flashing lights", "by flashing twin amber and twin red lights", "by a yield sign", "by a stop sign"], 0, "types", "crossing-open"),
    R(7, "If your vehicle breaks down on a level crossing, the first action you should take is", ["to telephone the signal operator", "to place a hazard warning triangle on the track", "to get everyone out of the vehicle and clear", "direct following traffic around the hazard"], 2, "breakdown", "crossing-breakdown"),
    R(8, "After a breakdown on a level crossing, the signal operator has advised you to get the car clear of the crossing. While attempting to do so you hear the audible alarm and should", ["continue to follow the instruction to get the car clear", "get yourself and any other person clear of the crossing at once", "expect any approaching train to stop", "send someone to contact the signal operator again"], 1, "breakdown"),
    R(9, "At an unattended level crossing with manually operated barriers, you should, to cross safely", ["open the first barrier, drive on and then open the second barrier", "open both barriers and drive on promptly", "open both barriers, proceed if safe and then close both barriers", "contact the line operator to close the gates"], 2, "user-operated", "crossing-gates"),
    R(10, "You are approaching a level crossing in a steady stream of traffic. For your safety you should", ["not follow 'nose to tail' other traffic over the crossing", "sound your horn before driving onto the crossing", "accelerate promptly over the crossing", "maintain your speed and keep as close as you can to the vehicle ahead"], 0, "must-not", "crossing-clear"),
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
      prompt: "The light sequence at a half-barrier crossing is…", options: ["Flashing amber, then red", "Steady amber, then twin red flashing", "Green, amber, red", "Twin amber, then red"], answer: 1,
      explain: "Steady amber followed by twin red flashing lights.", src: P(86, "Post-test answer 5") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "must-not",
      scene: "🚧 The half barriers have just started to come down. There's no train in sight.",
      prompt: "What do you do?", options: ["Zigzag round them quickly", "Stop — never start crossing once the lights, alarm or barriers operate", "Go — no train", "Reverse"], answer: 1,
      explain: "You must not start crossing once the lights, alarm or barriers operate, or zigzag around half barriers.", src: P(60, "You must not") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "lights",
      statement: "The audible warning starts at the same time as the steady amber light.", answer: true,
      explain: "It starts at the same time as the steady amber.", src: P(86, "Post-test answer 6") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "tram-crossing",
      prompt: "Where should you cross tram tracks?", options: ["tram-crossing-sign", "no-entry-trams", "tram-lane", "lana-tram"], answer: 0,
      names: ["At the LOOK BOTH WAYS sign", "No entry except trams", "A tram lane", "A shared section"],
      explain: "Cross tram tracks only where you see the tram-crossing sign — look both ways.", src: P(59, "Warning signs for tram lanes") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "breakdown",
      prompt: "Breakdown on a crossing — match the order.", pairs: [["First", "Everyone out and clear"], ["Then", "Railway phone to the signalman"], ["Only with permission", "Move the car"]],
      explain: "People, phone, then — only if allowed — the car.", src: P(86, "Post-test answer 8") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "user-operated",
      prompt: "Gates you open yourself:", steps: ["Stop short", "Look and listen", "Open both gates", "Drive all the way over", "Close both gates"],
      explain: "When sure there are no trains, open BOTH gates, drive right across, then close BOTH gates.", src: P(86, "Post-test answer 1") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "lana-tram", visual: "lana-tram",
      scene: "🚋 \"LÁNA TRAM\" is painted on the road ahead of you.",
      prompt: "What does it mean?", options: ["Trams only — don't enter", "The road ahead is shared by trams and vehicles — take extra care", "A tram stop", "No parking"], answer: 1,
      explain: "It tells you there's a section of road used by trams and vehicles — you may have to share it.", src: P(59, "Introduction") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "breakdown",
      prompt: "Your car breaks down on a level crossing. Your FIRST action is to…", options: ["Phone the signal operator", "Place a warning triangle on the track", "Get everyone out of the vehicle and clear", "Direct traffic round"], answer: 2,
      explain: "As your first priority: get everybody out of the car and clear of the crossing.", src: P(63, "Retention Q7 (answer c, p.89)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "must-not",
      prompt: "The queue ahead stretches back to the crossing. Which shows the right thing to do?",
      options: ["crossing-clear", "crossing-breakdown"], answer: 0,
      names: ["Wait until the road beyond is clear", "Stuck on the crossing"],
      explain: "Never drive on to the crossing unless the road is clear beyond it.", src: P(60, "You must not") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "types",
      prompt: "Approaching an automatic half-barrier crossing, the lights begin to show. Next you should expect to…", options: ["See the train arrive", "See the barriers come down", "Hear an audible alarm", "Stop and close the gates"], answer: 1,
      explain: "The barriers come down after the lights start — the alarm starts with the amber.", src: P(63, "Retention Q4 (answer b, p.89)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "1.7",
  number: "1.7",
  title: "Level Crossings & Tramways",
  pages: [59, 63],
  intro: "Railway crossings of every kind, breakdowns on the tracks, and sharing the road with Luas trams.",
  objectives: [
    "How to recognise the various types of level crossing",
    "The actions you need to take on approach to a level crossing",
    "The restrictions which apply to road users at level crossings",
    "The action to take in the event of an accident or breakdown on a level crossing",
  ],
  objectivesSrc: P(59, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...crossings, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "crossing-spotter", icon: "🚂", label: "Crossing Spotter", rule: { activity: "crossings", min: 100 } },
    { id: "crossings-specialist", icon: "🚋", label: "Crossings Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
