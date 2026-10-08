/*
  ===========================================================================
  BOOK 2 · UNIT 2.8 — AUTOMATIC TRANSMISSION

  Source: "Theory Resource Workbook 2 of 4" (Driver Education Supplies),
  book pages 56–59, with the post-test model answers on page 94 and the
  retention-test answers on page 97 (1b 2d 3a 4b 5b 6b 7b 8a 9b 10d).

  The answer key agrees with the unit text for all ten retention
  questions; all are used.

  Page 57 notes that some belt-drive (CVT) types "must be started in the D
  or R position"; this unusual case is shown only as "check the handbook",
  beside the general rule (start in P or N with the handbrake on).
  ===========================================================================
*/

const P = (page, ref) => ({ book: 2, unit: "2.8", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Why instructors need to know",
    text: "Automatics make the physical task of driving much easier and are often used by drivers with disabilities — but they must be controlled differently to be safe. Every instructor must understand all the vehicles in their category: you may give a pre-test lesson in a pupil's own automatic car.",
    src: P(56, "Unit introduction"),
  },
  "how": {
    title: "How an automatic changes gear",
    text: "No clutch pedal. The transmission senses when a change is needed: up with increasing road speed and reducing load, down with decreasing speed and more load — for example uphill. It won't always choose the right gear: it may change up when the load drops (downhill) and leave you too high, and there's reduced engine braking in any automatic. So the selector lets you over-ride it.",
    src: P(56, "Automatic transmission; p.94 answers 1–3"),
  },
  "selector": {
    title: "The gear selector",
    text: "Typically P – Park: mechanically locks the transmission, only when stationary. R – Reverse. N – Neutral. D – Drive, forward gears. 2 and 1 – gear locks. L – Lock, stops it changing up. L, 2 and 1 are for heavy traffic, slow manoeuvres and steep hills. Layouts vary — check the handbook. Select L in 2nd and once it drops to 1st it stays there until D or another gear is chosen.",
    src: P(56, "Gear selector; p.94 answers 4, 5, 7"),
  },
  "kick-down": {
    title: "Kick-down",
    text: "A form of foot control for quick acceleration — to overtake, for example. A short, sharp press right down on the gas makes the transmission change down to the next lowest gear, giving a power reserve.",
    src: P(56, "Kick-down; p.94 answer 6"),
  },
  "creep": {
    title: "Creep",
    text: "If the engine's tick-over gives enough drive to move the car in gear, it 'creeps' — use the brakes to stop it. Excessive creep is dangerous: check it on a level surface and have the tick-over adjusted. Never rely on creep to hold the car on an uphill slope — if the engine cut out, it would roll back. Use the handbrake.",
    src: P(57, "Creep; p.94 answers 12–15"),
  },
  "handbrake": {
    title: "The handbrake",
    text: "Keep it in good working order and apply it whenever the car is stationary. Unless the selector is in N or P the car can move off by creep or if the accelerator is pressed by accident — and with a choke in use it could pull away.",
    src: P(57, "Importance of the handbrake; p.94 answer 11"),
  },
  "driving": {
    title: "Driving an automatic",
    text: "Start the engine only with the handbrake on and the selector in P or N (engine stops? handbrake, neutral, restart). Select D to move away normally, or a low-gear lock for manual-style flexibility. Avoid harsh acceleration — it can surge forward and delay upward changes. Use the right foot only for both pedals; when manoeuvring, very light gas with left-foot braking is convenient. Slow down in good time for bends and junctions, so you turn under gentle acceleration — slowing late, it may change up.",
    src: P(57, "Driving with automatic transmission; p.94 answers 9, 16, 17"),
  },
  "types": {
    title: "Other types",
    text: "Belt-drive (CVT): varies the ratio of engine to road speed with no gears as such — usually D, N, R and sometimes P; the handbrake is essential, and some types start differently, so check the handbook. Semi-automatics: no clutch pedal, but the driver decides and selects the gear (they de-clutch automatically). Pre-selectors: choose the gear with a lever; it changes only when a gear-change pedal (not a clutch) is pressed — common on coaches.",
    src: P(57, "Belt drive automatics; Other types; p.94 answers 10, 18–20"),
  },
  "hybrid": {
    title: "Hybrids and electric vehicles",
    text: "Hybrids and EVs are automatics. A hybrid (HEV) uses a petrol engine and an electric motor, run by a high-voltage battery; its computer uses the engine, the motor or both. The battery is charged by the engine (even at idle) and when decelerating — regenerative braking. A plug-in hybrid (PHEV) can also drive on electric only until the battery is low, and is charged from an external power source.",
    src: P(57, "Hybrid or electric vehicles"),
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
    "Stationary? Handbrake on — creep or a slip of the foot can move it",
    "Start only in P or N, with the handbrake on",
    "Right foot for both pedals; slow down early for bends",
  ],
  cards: [
    {
      icon: "🅰️",
      kicker: "Automatic transmission",
      title: "No clutch — it changes itself",
      visual: "auto-pedals",
      ask: {
        prompt: "What makes an automatic change UP a gear?",
        options: ["Pressing the brake", "Increasing speed and reducing load", "Going uphill"],
        answer: 1,
      },
      list: [
        "No clutch pedal — the transmission selects the gear",
        "Up with increasing road speed and lower load",
        "Down with decreasing speed or more load — e.g. uphill",
        "Often used by drivers with disabilities",
      ],
      concept: "how",
      src: P(56, "Automatic transmission; p.94 answers 1, 2"),
    },
    {
      icon: "🤔",
      kicker: "Not always right",
      title: "Why you can over-ride it",
      body: [
        "It may change up when the load drops — going downhill — leaving you in too high a gear.",
        "And every automatic has reduced engine braking. So the selector lets you over-ride the automatic mechanism.",
      ],
      concept: "how",
      src: P(56, "Automatic transmission; p.94 answer 3"),
    },
    {
      icon: "🕹️",
      kicker: "The selector",
      title: "P R N D 2 1 L",
      visual: "auto-selector",
      list: [
        "P — Park: mechanically locks the transmission; only when stationary",
        "R — Reverse · N — Neutral · D — Drive",
        "2, 1 — gear locks · L — stops it changing up",
        "L, 2, 1: heavy traffic, slow manoeuvres, steep hills",
      ],
      callout: "Layouts vary — always check the handbook.",
      concept: "selector",
      src: P(56, "Gear selector; p.94 answers 4, 7"),
    },
    {
      icon: "🚀",
      kicker: "Kick-down",
      title: "A short, sharp press",
      visual: "kick-down",
      body: [
        "Press the gas sharply right down and the transmission changes down to the next lowest gear — a power reserve for quick acceleration, for example to overtake.",
      ],
      concept: "kick-down",
      src: P(56, "Kick-down; p.94 answer 6"),
    },
    {
      icon: "🐌",
      kicker: "Creep",
      title: "Tick-over moves the car",
      visual: "creep",
      ask: {
        prompt: "Waiting on an uphill slope in D. What holds the car?",
        options: ["Creep", "The handbrake", "Neutral"],
        answer: 1,
      },
      list: [
        "In gear, tick-over can be enough to move the car — use the brakes",
        "Excessive creep is dangerous: check it on the level, adjust the tick-over",
        "Never rely on creep uphill — if the engine cuts out, you roll back. Use the handbrake",
      ],
      concept: "creep",
      src: P(57, "Creep; p.94 answers 12–15"),
    },
    {
      icon: "🅿️",
      kicker: "The handbrake",
      title: "On whenever you stop",
      body: [
        "Keep it in good order and apply it whenever the car is stationary.",
        "Unless the selector is in N or P, the car can move off by creep, or if the accelerator is pressed by accident.",
      ],
      concept: "handbrake",
      src: P(57, "Importance of the handbrake; p.94 answer 11"),
    },
    {
      icon: "🚗",
      kicker: "Driving",
      title: "Start, move off, manoeuvre",
      visual: "auto-pedals",
      list: [
        "Start only with the handbrake on, selector in P or N",
        "Select D to move away — or a low-gear lock for flexibility",
        "Avoid harsh acceleration: it surges and delays upward changes",
        "Right foot for both pedals; manoeuvring: light gas, left-foot braking",
      ],
      concept: "driving",
      src: P(57, "Driving with automatic transmission; p.94 answer 9"),
    },
    {
      icon: "↪️",
      kicker: "Bends and junctions",
      title: "Slow early, gentle gas",
      visual: "auto-bend",
      body: [
        "Slowing late for a bend or junction, the box can change up as you slow.",
        "Slow down in good time, then make the turn 'under acceleration' — right foot lightly on the gas, with caution.",
      ],
      concept: "driving",
      src: P(57, "Driving with automatic transmission; p.94 answers 16, 17"),
    },
    {
      icon: "🧩",
      kicker: "Other types",
      title: "CVT, semi-auto, pre-selector",
      visual: "auto-types",
      list: [
        "CVT (belt drive): no gears as such — D, N, R and sometimes P",
        "Semi-automatic: no clutch pedal, but the DRIVER chooses the gear",
        "Pre-selector: choose a gear, it changes when the gear-change pedal is pressed (coaches)",
      ],
      concept: "types",
      src: P(57, "Belt drive automatics; Other types; p.94 answers 18–20"),
    },
    {
      icon: "⚡",
      kicker: "Hybrids and EVs",
      title: "All automatics",
      visual: "hybrid",
      list: [
        "HEV: petrol engine and electric motor — one, the other, or both",
        "Battery charged by the engine and by regenerative braking",
        "PHEV: can also drive on electric only, and plugs in to charge",
      ],
      concept: "hybrid",
      src: P(57, "Hybrid or electric vehicles"),
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
    { id: "r1", type: "flash", concept: "how", visual: "auto-pedals",
      front: "What is meant by automatic transmission?",
      back: "No clutch pedal — it senses and changes gear itself, based on terrain and load.", src: P(94, "Post-test answer 1") },
    { id: "r2", type: "truefalse", concept: "how",
      statement: "An automatic transmission always selects the right gear.", answer: false,
      explain: "No — downhill it may change up and leave you too high.", src: P(94, "Post-test answer 3") },
    { id: "r3", type: "flash", concept: "selector", visual: "auto-selector",
      front: "What is the 'L' position for?",
      back: "It locks the transmission in a low gear — for slow-moving traffic and going downhill.", src: P(94, "Post-test answer 4") },
    { id: "r4", type: "flash", concept: "selector",
      front: "You select 'L' in 2nd and it drops to 1st. What then?",
      back: "It stays in 1st and won't change up again unless D or another gear is selected.", src: P(94, "Post-test answer 5") },
    { id: "r5", type: "fill", concept: "kick-down", visual: "kick-down",
      before: "Kick-down: a short, sharp press right down on the gas gives", after: ".",
      options: ["a quick change down to the next lowest gear", "a change up a gear", "neutral", "engine braking"], answer: "a quick change down to the next lowest gear",
      explain: "A power reserve for quick acceleration.", src: P(94, "Post-test answer 6") },
    { id: "r6", type: "flash", concept: "driving",
      front: "The engine stops. What do you do to restart?",
      back: "Apply the handbrake and select neutral before starting the engine.", src: P(94, "Post-test answer 9") },
    { id: "r7", type: "flash", concept: "creep", visual: "creep",
      front: "What is creep, and how is it adjusted?",
      back: "The tick-over giving enough drive to move the car (tick-over too fast) — adjust the tick-over speed.", src: P(94, "Post-test answers 12, 13") },
    { id: "r8", type: "fill", concept: "creep",
      before: "Check the creep", after: ".",
      options: ["on the level", "uphill", "downhill", "on the motorway"], answer: "on the level",
      explain: "On a level surface — then have the tick-over adjusted if needed.", src: P(94, "Post-test answer 14") },
    { id: "r9", type: "truefalse", concept: "creep",
      statement: "You can rely on creep to hold the car on an upward slope.", answer: false,
      explain: "No — use the handbrake.", src: P(94, "Post-test answer 15") },
    { id: "r10", type: "flash", concept: "types",
      front: "Semi-automatic or automatic — what's the difference?",
      back: "With a semi-automatic, the DRIVER must decide which gear is needed.", src: P(94, "Post-test answer 18") },
    { id: "r11", type: "truefalse", concept: "types",
      statement: "Semi-automatics de-clutch automatically.", answer: true,
      explain: "There's no clutch pedal — but you choose the gear.", src: P(94, "Post-test answer 19") },
  ],
};

/* ---------------------------------------------------------------------------
   3. SELECT IT — recognition.
   --------------------------------------------------------------------------- */
const selector = {
  id: "selector",
  kind: "items",
  mode: "matching",
  title: "Select It",
  blurb: "Spot it, sort it — selector, creep and kick-down",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "kick-down",
      prompt: "Which picture shows kick-down?",
      options: ["kick-down", "creep", "auto-bend"], answer: 0,
      names: ["Kick-down to overtake", "Creep", "Bends in an automatic"],
      explain: "A sharp press right down for a lower gear and a power reserve.", src: P(56, "Kick-down") },
    { id: "k2", type: "picture", label: "Spot it", concept: "creep",
      prompt: "Which picture shows why you mustn't rely on creep uphill?",
      options: ["creep", "kick-down", "hill-start"], answer: 0,
      names: ["Creep", "Kick-down", "Hill start"],
      explain: "If the engine cut out, the car would roll back — use the handbrake.", src: P(57, "Creep") },
    {
      id: "k3", type: "sort", concept: "selector",
      prompt: "Which selector position?",
      categories: [
        { id: "p", label: "P" },
        { id: "d", label: "D" },
        { id: "l", label: "L / 2 / 1" },
      ],
      cards: [
        { text: "Parked and locked", cat: "p" },
        { text: "Starting the engine", cat: "p" },
        { text: "Moving away normally", cat: "d" },
        { text: "A steep downhill", cat: "l" },
        { text: "Heavy, slow traffic", cat: "l" },
      ],
      explain: "P only when stationary; D for normal driving; low locks to stop unwanted upward changes.", src: P(56, "Gear selector; p.57") },
    {
      id: "k4", type: "sort", concept: "types",
      prompt: "Who picks the gear?",
      categories: [
        { id: "car", label: "The car" },
        { id: "driver", label: "The driver" },
      ],
      cards: [
        { text: "Automatic in D", cat: "car" },
        { text: "CVT belt drive", cat: "car" },
        { text: "Semi-automatic", cat: "driver" },
        { text: "Pre-selector", cat: "driver" },
      ],
      explain: "Semi-automatics and pre-selectors have no clutch pedal — but the driver chooses the gear.", src: P(57, "Other types") },
    { id: "k5", type: "picture", label: "Spot it", concept: "selector",
      prompt: "Which picture shows the pedals in an automatic?",
      options: ["auto-pedals", "pedals"], answer: 0,
      names: ["Two pedals: brake and gas", "Three pedals: clutch, brake, gas"],
      explain: "No clutch pedal in an automatic.", src: P(56, "Automatic transmission") },
    { id: "k6", type: "picture", label: "Spot it", concept: "driving",
      prompt: "Which picture shows how to take a bend in an automatic?",
      options: ["auto-bend", "kick-down"], answer: 0,
      names: ["Slow early, gentle gas", "Kick-down"],
      explain: "Slow down in good time, then turn under gentle acceleration.", src: P(57, "Driving with automatic transmission") },
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
  blurb: "Positions and terms",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "selector", visual: "auto-selector",
      prompt: "Match the selector position.",
      pairs: [
        ["P", "Locks the transmission"],
        ["N", "Neutral"],
        ["D", "Forward gears"],
        ["L", "Stops it changing up"],
      ],
      explain: "Layouts vary — check the handbook.", src: P(56, "Gear selector") },
    {
      id: "m2", type: "match", concept: "types",
      prompt: "Match the term to its meaning.",
      pairs: [
        ["Kick-down", "Sharp press for a lower gear"],
        ["Creep", "Tick-over moves the car"],
        ["CVT", "Belt drive, no gears as such"],
        ["Pre-selector", "Change happens when a pedal is pressed"],
      ],
      explain: "The words every instructor needs for an automatic.", src: P(56, "Kick-down; p.57") },
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
  blurb: "Starting, moving off and bends",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "driving", visual: "auto-selector",
      prompt: "Starting and moving off in an automatic — in order.",
      steps: ["Handbrake on", "Selector in P or N", "Start the engine", "Foot on the footbrake, select D", "Release the handbrake and move away gently"],
      explain: "Start only with the handbrake on and the selector in P or N; avoid harsh acceleration.", src: P(57, "Driving with automatic transmission") },
    { id: "p2", type: "order", concept: "driving", visual: "auto-bend",
      prompt: "A bend in an automatic — in order.",
      steps: ["Slow down in good time", "Reach the right speed before the bend", "Right foot lightly on the gas", "Turn under gentle acceleration"],
      explain: "Slowing late can make it change up.", src: P(57, "Driving with automatic transmission; p.94 answers 16, 17") },
    { id: "p3", type: "order", concept: "kick-down", visual: "kick-down",
      prompt: "Kick-down to overtake — in order.",
      steps: ["Check it's safe to overtake", "Short, sharp press right down on the gas", "Transmission drops to the next lowest gear", "Use the power reserve to pass"],
      explain: "Kick-down gives quick acceleration when you need it.", src: P(56, "Kick-down") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "handbrake",
      scene: "🚦 At red lights in an automatic, your pupil sits in D with their foot lightly on the brake.",
      prompt: "What's the safe rule?",
      options: ["Fine as it is", "Apply the handbrake fully every time you stop", "Only if creep won't hold it", "Never use the handbrake in D"], answer: 1,
      explain: "Unless in N or P, creep or a slip onto the gas can move the car.", src: P(59, "Retention Q6 (answer b, p.97)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "creep", visual: "creep",
      scene: "⛰️ Waiting on a hill, your pupil relies on creep to stop rolling back.",
      prompt: "What do you tell them?",
      options: ["Good technique", "Use the handbrake — if the engine cut out, it would roll back", "Rev the engine more", "Select L"], answer: 1,
      explain: "Never rely on creep uphill.", src: P(57, "Creep; p.94 answer 15") },
    { id: "s3", type: "choice", label: "Scenario", concept: "how",
      scene: "⬇️ On a long, steep downhill in D, the car keeps picking up speed.",
      prompt: "What helps?",
      options: ["Neutral", "Select a low gear lock (L, 2 or 1) to stop it changing up", "Kick-down", "Park"], answer: 1,
      explain: "The box may change up when the load drops — and engine braking is reduced.", src: P(56, "Automatic transmission; Gear selector") },
    { id: "s4", type: "choice", label: "Scenario", concept: "driving", visual: "auto-pedals",
      scene: "🦶 Your pupil, used to a manual, uses their left foot to brake on the open road.",
      prompt: "What should they normally do?",
      options: ["Left foot for braking", "Right foot for both pedals", "Handbrake to slow", "Change through the gears with the selector"], answer: 1,
      explain: "It's safest to use the right foot only for both pedals.", src: P(59, "Retention Q7 (answer b, p.97)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "kick-down", visual: "kick-down",
      scene: "🚜 Clear road ahead, a slow tractor, and your pupil needs extra power to overtake.",
      prompt: "Which feature helps?",
      options: ["Creep", "Kick-down", "Park", "Neutral"], answer: 1,
      explain: "A short, sharp press gives the next lowest gear and quick acceleration.", src: P(59, "Retention Q5 (answer b, p.97)") },
    { id: "s6", type: "choice", label: "Scenario", concept: "driving", visual: "auto-bend",
      scene: "↪️ Braking late for a junction, your pupil notices the car change UP a gear.",
      prompt: "Why, and what's the fix?",
      options: ["A fault — see a garage", "The box can change up as you slow; slow down in good time and turn under gentle acceleration", "Use kick-down", "Select P"], answer: 1,
      explain: "The transmission can sometimes change up inappropriately.", src: P(59, "Retention Q9 (answer b, p.97)") },
    { id: "s7", type: "choice", label: "Scenario", concept: "driving",
      scene: "🔑 The engine stalls in traffic while in D.",
      prompt: "How should your pupil restart?",
      options: ["Restart in D", "Handbrake on, select N (or P), then start", "Press the gas and restart", "Kick-down"], answer: 1,
      explain: "Start only with the handbrake applied and the selector in P or N.", src: P(94, "Post-test answer 9; p.57") },
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
  blurb: "A lesson in a pupil's own automatic",
  xpPer: 10,
  situation: "🚙 A pre-test lesson in your pupil's family car — an automatic.",
  items: [
    { id: "w1", type: "choice", step: "Starting", concept: "driving", prompt: "Before starting the engine…",
      options: ["Select D", "Handbrake on, selector in P or N", "Foot on the gas", "Select L"], answer: 1,
      explain: "Otherwise it could move off.", src: P(57, "Driving with automatic transmission") },
    { id: "w2", type: "choice", step: "Moving off", concept: "driving", prompt: "Pulling away, they should…",
      options: ["Accelerate hard", "Avoid harsh acceleration", "Use kick-down", "Keep the handbrake on"], answer: 1,
      explain: "Harsh acceleration can surge forward and delay upward changes.", src: P(57, "Driving with automatic transmission") },
    { id: "w3", type: "choice", step: "Uphill", concept: "how", prompt: "Climbing a hill, the transmission will…",
      options: ["Hold one gear", "Need the low gear selector", "Need kick-down", "Change down automatically"], answer: 3,
      explain: "It changes down with more load on the engine.", src: P(59, "Retention Q2 (answer d, p.97)") },
    { id: "w4", type: "choice", step: "A bend", concept: "driving", visual: "auto-bend", prompt: "Approaching a sharp bend…",
      options: ["Brake in the bend", "Slow in good time, then gentle gas through it", "Select N", "Kick-down"], answer: 1,
      explain: "Make the turn under acceleration.", src: P(57, "Driving with automatic transmission") },
    { id: "w5", type: "choice", step: "Parking", concept: "selector", prompt: "Parked by the kerb, they select P. P is…",
      options: ["Instead of the handbrake", "To lock the transmission mechanically when parked", "For tight manoeuvres", "Like neutral"], answer: 1,
      explain: "Only when stationary — and the handbrake still goes on.", src: P(59, "Retention Q4 (answer b, p.97)") },
    { id: "w6", type: "choice", step: "Reflection", concept: "how", prompt: "Compared with a manual, engine braking in an automatic is…",
      options: ["Reduced", "None at all", "Increased", "Extra in P"], answer: 0,
      explain: "There is reduced engine braking in any automatic car.", src: P(59, "Retention Q8 (answer a, p.97)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 97.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(59, `Retention test Q${n}; answer p.97`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "Vehicles with automatic transmission select a gear ratio according to", ["the speed of the engine", "the load on the engine and road speed", "the road speed only", "the engine load only"], 1, "how"),
    R(2, "When driving uphill in a vehicle fitted with automatic transmission", ["the transmission will maintain one gear", "the driver will need to use the low gear selector", "the driver must use kick-down to select a lower gear", "the transmission will change down gear automatically"], 3, "how"),
    R(3, "The purpose of the gear selector in a vehicle with automatic transmission is to enable", ["the driver to over-ride the automatic mechanism", "the driver to get a power reserve for overtaking", "the transmission to take the strain out of driving", "the vehicle to be driven in manual mode"], 0, "selector", "auto-selector"),
    R(4, "The 'Park' position on the gear selector of an automatic should be used", ["instead of the handbrake", "to lock the transmission mechanically when parked", "to manoeuvre the car into tight spaces", "instead of the 'neutral' position in a manual gearbox"], 1, "selector", "auto-selector"),
    R(5, "Kick-down is a feature of vehicles fitted with automatic transmission which", ["provides a quick change to a low power gear", "provides quick acceleration when you need it", "causes the car to change up a gear to overtake", "is most useful in an emergency stop"], 1, "kick-down", "kick-down"),
    R(6, "In a vehicle with automatic transmission, the safe rule regarding the handbrake is", ["only use it if 'creep' will not prevent the car rolling", "apply it fully every time you stop", "only apply it after 'Park' has been selected", "not to apply it if 'Drive' is selected"], 1, "handbrake"),
    R(7, "When driving a car with automatic transmission, the driver should normally use", ["the left foot for braking", "the right foot for braking", "the handbrake to slow the car", "the selector lever to change through the gears in order"], 1, "driving", "auto-pedals"),
    R(8, "Vehicles with automatic transmission generally have", ["reduced engine braking compared to a manual car", "no engine braking", "increased engine braking compared to a manual car", "additional braking when 'Park' is selected"], 0, "how"),
    R(9, "When approaching and turning corners in a car with automatic transmission", ["a low gear selection must be made on approach", "the transmission can sometimes change up inappropriately", "the driver must accelerate by a short sharp pressure on the gas pedal", "the driver should always brake gently when making the turn"], 1, "driving", "auto-bend"),
    R(10, "Creep is the tendency of a vehicle fitted with automatic transmission to", ["move forward when in neutral", "slip back on a hill", "drift from side to side when cruising at high speed", "move slowly when a gear has been selected"], 3, "creep", "creep"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "selector",
      prompt: "'P' should only be selected when…", options: ["Slowing down", "The vehicle is stationary", "Reversing", "Going downhill"], answer: 1,
      explain: "It mechanically locks the transmission.", src: P(56, "Gear selector") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "selector",
      prompt: "Which picture shows an automatic's gear selector?", options: ["auto-selector", "gear-pattern"], answer: 0,
      names: ["P R N D 2 1 L", "Manual gear pattern"],
      explain: "The selector replaces the manual gear lever.", src: P(56, "Gear selector") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "hybrid",
      statement: "Hybrid and electric vehicles are automatics.", answer: true,
      explain: "A hybrid's computer chooses between the engine, the motor or both.", src: P(57, "Hybrid or electric vehicles") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "creep",
      scene: "🐌 Your pupil's automatic creeps forward strongly at every stop.",
      prompt: "What's the fix?", options: ["Brake harder", "Check it on the level and have the tick-over adjusted", "Drive in N", "Use kick-down"], answer: 1,
      explain: "Excessive creep is dangerous — the tick-over is too fast.", src: P(57, "Creep; p.94 answers 12–14") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "types",
      prompt: "Match the type.", pairs: [["Automatic", "Chooses the gear itself"], ["Semi-automatic", "Driver chooses, no clutch"], ["Pre-selector", "Gear-change pedal"]],
      explain: "Who chooses, and how it changes.", src: P(57, "Other types") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "driving",
      prompt: "Starting an automatic:", steps: ["Handbrake on", "P or N", "Start the engine", "Select D"],
      explain: "Then release the handbrake and move away gently.", src: P(57, "Driving with automatic transmission") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "driving",
      scene: "🅿️ Manoeuvring slowly into a tight space in an automatic.",
      prompt: "A convenient, safe technique?", options: ["Kick-down", "Very light gas, controlling speed with left-foot braking", "Neutral and coast", "Select P"], answer: 1,
      explain: "For manoeuvring only — otherwise the right foot does both pedals.", src: P(57, "Driving with automatic transmission") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "creep",
      prompt: "Creep is the tendency of an automatic to…", options: ["Move forward in neutral", "Slip back on a hill", "Drift at high speed", "Move slowly when a gear is selected"], answer: 3,
      explain: "Tick-over gives enough drive to move the car.", src: P(59, "Retention Q10 (answer d, p.97)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "kick-down",
      prompt: "Your pupil needs a burst of power to overtake. Which picture shows how?", options: ["kick-down", "creep", "auto-bend"], answer: 0,
      names: ["Kick-down", "Creep", "Bends"],
      explain: "A short, sharp press right down on the gas.", src: P(56, "Kick-down") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "how",
      prompt: "An automatic selects its gear according to…", options: ["Engine speed", "The load on the engine and road speed", "Road speed only", "Engine load only"], answer: 1,
      explain: "Speed and load together.", src: P(59, "Retention Q1 (answer b, p.97)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "2.8",
  number: "2.8",
  title: "Automatic Transmission",
  pages: [56, 59],
  intro: "The selector, kick-down and creep, the handbrake, driving an automatic, and other types.",
  objectives: [
    "The function and correct use of the main controls",
    "When automatic transmission will change gear",
    "The meaning of 'creep' and 'kick-down'",
    "The meaning of 'semi-automatics' and 'pre-selectors'",
    "The importance of the handbrake",
  ],
  objectivesSrc: P(56, "Objectives"),
  mcqLink: { sectionId: "adi.sec.mechanics", label: "Basic Mechanics & Vehicle Maintenance" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...selector, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "select-it", icon: "🕹️", label: "Select It", rule: { activity: "selector", min: 100 } },
    { id: "automatic-specialist", icon: "🏆", label: "Automatic Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
