/*
  ===========================================================================
  BOOK 2 · UNIT 2.3 — BEGINNING TO DRIVE

  Source: "Theory Resource Workbook 2 of 4" (Driver Education Supplies),
  book pages 20–26, with the post-test model answers on page 91 and the
  retention-test answers on page 96 (1c 2d 3b 4a 5c 6c 7c 8d 9c 10c 11d
  12a 13b 14b 15a).

  Two retention questions are omitted:
    Q1 — "pre-start checks" keyed c (once every day), but the cockpit drill
    is done "every time you get in the car", which supports d (every time
    you commence a journey).
    Q7 — keyed c (complete the cockpit drill); page 21's rule before
    starting is handbrake on, clutch down, neutral, which none of the four
    options states in full.
  Q10 (engine flooding), Q11 (oil warning light), Q12 (glow plugs) cover
  points the unit text doesn't state; they are kept as the book sets them.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 2, unit: "2.3", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Good habits from the start",
    text: "Teach the regular checks, starting the engine, moving off and steering a straight course clearly and concisely — and in the correct sequence from the start, to build good habits for the pupil's driving career. Explain how to change gear and stop before they drive on.",
    src: P(20, "Unit introduction"),
  },
  "daily": {
    title: "Everyday safety checks",
    text: "It's your legal responsibility to keep the car roadworthy. Daily: windscreen, windows and mirrors clean, door mirrors not knocked out of position; lights, brake lights and indicators working (carry spare bulbs); brakes working at the first safe opportunity — stop driving if you think they're faulty; loads secure.",
    src: P(20, "Everyday Safety Checks; p.91 answer 1"),
  },
  "periodic": {
    title: "Periodic checks",
    text: "How often depends on how much you drive — at least weekly and as the owner's handbook says. Tyres (including the spare): look daily; check tread depth and pressures at least once a week. Wipers and washers; engine oil (level ground, preferably cold); coolant (cold engine); brake fluid; battery if not sealed; seat belts. Service regularly — it's vital for safety.",
    src: P(20, "Periodic Checks; p.21; p.91 answers 2, 3"),
  },
  "cockpit": {
    title: "The cockpit drill",
    text: "Every time you get in, for your safety, your passengers' and other road users': handbrake applied; doors closed; seat adjusted to see all round and reach the controls; steering adjusted; seat belts — you and all passengers; mirrors clean and adjusted; enough fuel; loads stored securely.",
    src: P(21, "Cockpit Drill; p.91 answer 4"),
  },
  "starting": {
    title: "Starting the engine",
    text: "ALWAYS check the handbrake is applied, then press the clutch down and check the gear lever is in neutral. Choke if needed (older cars); ignition on; operate the starter; release it as soon as the engine starts; check the oil pressure and ignition lights go out; ease off the gas once it runs smoothly. If those lights stay on, switch off and investigate. A common fault: holding the key at \"start\" too long.",
    src: P(21, "Starting the Engine; p.91 answers 5, 6"),
  },
  "tickover": {
    title: "Tick-over",
    text: "The idling or tick-over speed: the engine running at normal speed without using the accelerator.",
    src: P(91, "Post-test answer 7"),
  },
  "moving-off": {
    title: "Moving off: the routine",
    text: "You must not cause another road user to change speed or direction. Prepare only when a safe opportunity will soon arise. Observe – Prepare – Observe – Signal if necessary – Move off: a variation of MSM. Before moving off: mirrors, look around, signal if necessary, look around again.",
    src: P(22, "Moving Off/Away; p.91 answer 14"),
  },
  "level": {
    title: "On a level road",
    text: "Clutch down; first gear (Drive in an automatic); set the gas; find the biting point and hold the clutch still; observe — mirrors and blind spots, over both shoulders; signal if necessary; hand on the handbrake; look all round again; if safe, release the handbrake and let the clutch up a little as you press the gas gradually. Hands at ten-to-two or quarter-to-three.",
    src: P(22, "On a level road"),
  },
  "angle": {
    title: "At an angle",
    text: "Pulling out from behind an obstruction: the same as a level start, but ask what angle you need, how far it takes you into the road, and whether there's oncoming traffic. It takes longer — good clutch control and further right-shoulder checks; don't release the clutch fully until clear. Leave room for a door to open and watch for pedestrians stepping out ahead.",
    src: P(22, "At an angle/obstruction; p.91 answer 11"),
  },
  "hills": {
    title: "On a slope",
    text: "Uphill: more gas, and find the biting point before releasing the handbrake, with a little more gas as it releases. Downhill: the car's weight helps — don't set the gas or find the biting point; clutch down, select a gear to suit the slope (maybe second), footbrake on, release the handbrake, observe, then release the footbrake and let the clutch up smoothly.",
    src: P(22, "Uphill; p.23 Downhill; p.91 answers 12, 13"),
  },
  "faults": {
    title: "Faults to avoid",
    text: "Moving off without looking; making others change course or speed; signalling when you can't move out safely; harsh acceleration; the wrong gear; misjudging the biting point — stalling or rolling back.",
    src: P(23, "Faults to avoid"),
  },
  "steering": {
    title: "Driving along",
    text: "A novice finds the car's width hard to judge from the driver's seat. Advise: look well ahead, not just over the bonnet; about 1 m from the kerb and room for a door to open past parked cars; smooth, steady movements; push-pull. Once they can steer straight with both hands, practise briefly on a quiet road with just the left and just the right hand, arm slightly stiffened — ready to change gear or work a switch.",
    src: P(23, "Driving Along; p.91 answers 8–10"),
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
    "Before starting: handbrake on, clutch down, neutral",
    "Moving off: mirrors, look round, signal if necessary, look round again",
    "You must not make anyone change speed or direction",
  ],
  cards: [
    {
      icon: "🚦",
      kicker: "Beginning to drive",
      title: "The right sequence from day one",
      visual: "observe-routine",
      body: [
        "This unit covers the regular checks, starting the engine, moving off and steering a straight course.",
        "Teach the correct sequence from the start — it builds good habits for your pupil's whole driving career. And explain how to change gear and stop before they drive on.",
      ],
      think: ["✅ Is the car roadworthy?", "👀 Have I looked all round?", "🛑 Will anyone have to slow for me?"],
      concept: "why",
      src: P(20, "Unit introduction"),
    },
    {
      icon: "🔦",
      kicker: "Everyday checks",
      title: "Your legal responsibility",
      visual: "daily-checks",
      list: [
        "Windscreen, windows and mirrors clean; door mirrors not knocked out of position",
        "Lights, brake lights and indicators working — carry spare bulbs",
        "Brakes: check at the first safe opportunity; stop driving if you think they're faulty",
        "Loads carried on the car secure",
      ],
      concept: "daily",
      src: P(20, "Everyday Safety Checks"),
    },
    {
      icon: "🛢️",
      kicker: "Periodic checks",
      title: "At least weekly",
      visual: "periodic-checks",
      ask: {
        prompt: "How often should you check tyre pressures?",
        options: ["Annually, before the NCT", "At least once a week", "Only when they look flat"],
        answer: 1,
      },
      list: [
        "Tyres (and the spare): look daily; tread depth and pressures at least once a week",
        "Wipers: arms and blades; washer bottles topped up",
        "Engine oil: on level ground, preferably cold",
        "Coolant: cold engine; brake fluid; battery (if not sealed)",
        "Seat belts clean and working",
      ],
      callout: "The owner's handbook says how often — and regular servicing is vital for safety.",
      concept: "periodic",
      src: P(20, "Periodic Checks; p.21; p.91 answers 2, 3"),
    },
    {
      icon: "🪑",
      kicker: "Cockpit drill",
      title: "Every time you get in",
      visual: "cockpit-drill",
      list: [
        "Handbrake applied",
        "Doors all closed — check the sight line in both door mirrors",
        "Seat: see all round, reach every control comfortably",
        "Steering height and reach (some cars)",
        "Seat belts: you and all passengers",
        "Mirrors clean and adjusted; enough fuel; loads stored securely",
      ],
      concept: "cockpit",
      src: P(21, "Cockpit Drill"),
    },
    {
      icon: "🔑",
      kicker: "Starting the engine",
      title: "Handbrake, clutch, neutral",
      visual: "ignition",
      ask: {
        prompt: "The oil and ignition warning lights stay on after the engine starts. What do you do?",
        options: ["Drive gently", "Switch off and investigate", "Rev the engine"],
        answer: 1,
      },
      list: [
        "ALWAYS: handbrake applied, clutch down, gear lever in neutral",
        "Choke if needed (older cars)",
        "Ignition on; operate the starter; release it as soon as the engine starts",
        "Check the oil pressure and ignition lights go out",
        "Light pressure on the gas, then ease off once it runs smoothly",
      ],
      callout: "Learner's common fault: holding the key in the start position too long.",
      concept: "starting",
      src: P(21, "Starting the Engine; p.91 answers 5, 6"),
    },
    {
      icon: "↗️",
      kicker: "Moving off",
      title: "Observe, prepare, observe, signal, go",
      visual: "observe-routine",
      body: [
        "Prepare to move off only when a safe opportunity will soon arise. A signal must be given whenever necessary.",
        "Before moving off: mirrors, look around, signal if necessary — and look around again.",
      ],
      callout: "You must not cause another road user to change speed or direction.",
      concept: "moving-off",
      src: P(22, "Moving Off/Away; p.91 answer 14"),
    },
    {
      icon: "🛣️",
      kicker: "On a level road",
      title: "Step by step",
      visual: "move-off-level",
      sections: [
        { head: "Prepare", list: ["Clutch down", "First gear (automatic: Drive)", "Set the gas", "Find the biting point — hold the clutch still"] },
        { head: "Observe", list: ["Mirrors and blind spots — over both shoulders", "Signal if necessary", "Hand on the handbrake, ready", "Look all round again"] },
        { head: "Go", list: ["If safe: release the handbrake", "Clutch up a little as you gradually press the gas", "Hands at ten-to-two or quarter-to-three"] },
      ],
      concept: "level",
      src: P(22, "On a level road"),
    },
    {
      icon: "↖️",
      kicker: "At an angle",
      title: "Out from behind a parked car",
      visual: "angle-start",
      list: [
        "Ask: what angle do I need? How far into the road will it take me? Any oncoming traffic?",
        "It takes longer — good clutch control, extra right-shoulder checks",
        "Don't release the clutch fully until you're clear",
        "Leave room for a door to open; watch for pedestrians stepping out ahead",
      ],
      callout: "The most common mistake: not steering briskly enough — or moving off too fast, too early off the clutch.",
      concept: "angle",
      src: P(22, "At an angle; p.91 answer 11"),
    },
    {
      icon: "⛰️",
      kicker: "On a slope",
      title: "Uphill and downhill starts",
      visuals: ["hill-start:up", "hill-start:down"],
      ask: {
        prompt: "Moving off downhill, do you need to set the gas and find the biting point?",
        options: ["Yes, always", "No — the car's weight helps; use the footbrake instead", "Only in first gear"],
        answer: 1,
      },
      sections: [
        { head: "Uphill", list: ["As on the level, but more gas", "Find the biting point BEFORE releasing the handbrake", "A little more gas as the handbrake releases"] },
        { head: "Downhill", list: ["Clutch down; a gear to suit the slope — maybe second", "Footbrake on; release the handbrake", "Observe, signal if necessary, look again", "Release the footbrake; clutch up smoothly as the car moves"] },
      ],
      concept: "hills",
      src: P(22, "Uphill; p.23 Downhill"),
    },
    {
      icon: "⚠️",
      kicker: "Faults to avoid",
      title: "Moving away",
      list: [
        "Moving off without looking",
        "Causing others to change course, speed or direction",
        "Signalling when you can't move out safely",
        "Harsh acceleration; the wrong gear",
        "Misjudging the biting point: stalling or rolling back",
      ],
      callout: "Uphill faults: releasing the handbrake too soon (rolling back); holding it too long, letting the clutch up too fast or too little gas (stalling).",
      concept: "faults",
      src: P(23, "Faults to avoid; p.91 answer 12"),
    },
    {
      icon: "🛞",
      kicker: "Driving along",
      title: "Steering a straight course",
      visual: "look-ahead",
      list: [
        "Look well ahead — not just over the front of the car",
        "About 1 m (3 ft) from the kerb; room for a door to open past parked cars",
        "Smooth, steady movements; push-pull",
        "Then: on a quiet road, practise briefly with just the left and just the right hand — arm slightly stiffened",
      ],
      callout: "Your pupil has probably sat in the nearside seat for years — judging the car's width from the driver's seat feels strange.",
      concept: "steering",
      src: P(23, "Driving Along; p.91 answers 8–10"),
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
    { id: "r1", type: "flash", concept: "daily", visual: "daily-checks",
      front: "What are the everyday checks?",
      back: "Windscreen, windows and mirrors clean; lights and indicators working; brakes working; loads secure.", src: P(91, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "periodic",
      front: "What does \"periodic\" mean for vehicle checks?",
      back: "At least weekly, and as recommended in the owner's handbook.", src: P(91, "Post-test answer 3") },
    { id: "r3", type: "fill", concept: "tickover",
      before: "Tick-over (idling) is the engine running at normal speed without using the", after: ".",
      options: ["accelerator", "clutch", "choke", "starter"], answer: "accelerator",
      explain: "When the engine is running at normal speed without using the accelerator.", src: P(91, "Post-test answer 7") },
    { id: "r4", type: "flash", concept: "starting",
      front: "What's a learner's most common fault with the ignition switch?",
      back: "Holding the key in the start position for too long.", src: P(91, "Post-test answer 6") },
    { id: "r5", type: "fill", concept: "steering", visual: "look-ahead",
      before: "Drive about", after: "from the kerb.",
      options: ["1 metre", "3 metres", "10 cm", "half a metre"], answer: "1 metre",
      explain: "About three feet (1 metre) from the kerb, with room for a door to open past parked cars.", src: P(91, "Post-test answer 8; p.23") },
    { id: "r6", type: "truefalse", concept: "hills", visual: "hill-start:down",
      statement: "Moving off downhill, you should always set the gas and find the biting point first.", answer: false,
      explain: "No — the car's weight helps you move off. Use the footbrake instead.", src: P(23, "Downhill") },
    { id: "r7", type: "truefalse", concept: "starting",
      statement: "If the oil or ignition warning light stays on after starting, switch off and investigate.", answer: true,
      explain: "Both should go out once the engine is running.", src: P(21, "Starting the Engine") },
    { id: "r8", type: "flash", concept: "angle",
      front: "What's the most common mistake when driving off at an angle?",
      back: "Not steering briskly enough — or moving off too fast (too early off the clutch).", src: P(91, "Post-test answer 11") },
    { id: "r9", type: "flash", concept: "moving-off",
      front: "What's the sequence of safety checks before moving off?",
      back: "Mirrors, look around, signal if necessary, look around again.", src: P(91, "Post-test answer 14") },
    { id: "r10", type: "fill", concept: "periodic", visual: "periodic-checks",
      before: "Check the engine oil on", after: "ground, preferably with a cold engine.",
      options: ["level", "sloping", "wet", "soft"], answer: "level",
      explain: "Level ground, preferably a cold engine; top up as necessary.", src: P(20, "Engine oil") },
  ],
};

/* ---------------------------------------------------------------------------
   3. READY TO GO? — recognition.
   --------------------------------------------------------------------------- */
const ready = {
  id: "ready",
  kind: "items",
  mode: "matching",
  title: "Ready to Go?",
  blurb: "Checks and starts — spot and sort",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "hills",
      prompt: "Which picture shows an UPHILL start?",
      options: ["hill-start:up", "hill-start:down"], answer: 0,
      names: ["Uphill start", "Downhill start"],
      explain: "Uphill: more gas, and find the biting point before releasing the handbrake.", src: P(22, "Uphill") },
    { id: "k2", type: "picture", label: "Spot it", concept: "angle",
      prompt: "Which picture shows moving off at an angle?",
      options: ["angle-start", "move-off-level", "kerb-clearance", "no-weaving"], answer: 0,
      names: ["Angle start", "Level start", "Clearance for parked cars", "Weaving"],
      explain: "Pulling out from behind an obstruction needs a sharper angle and more observation.", src: P(22, "At an angle") },
    {
      id: "k3", type: "sort", concept: "periodic",
      prompt: "Everyday check, or periodic check?",
      categories: [
        { id: "daily", label: "Every day" },
        { id: "periodic", label: "Periodic" },
      ],
      cards: [
        { text: "Windows and mirrors clean", cat: "daily" },
        { text: "Lights and indicators working", cat: "daily" },
        { text: "Loads secure", cat: "daily" },
        { text: "Tyre pressures and tread", cat: "periodic" },
        { text: "Engine oil and coolant", cat: "periodic" },
        { text: "Brake fluid", cat: "periodic" },
      ],
      explain: "Daily: what you can see and the brakes. Periodic (at least weekly): fluids, tyres, wipers, battery, belts.", src: P(20, "Everyday; Periodic Checks") },
    {
      id: "k4", type: "sort", concept: "hills",
      prompt: "Uphill start or downhill start?",
      categories: [
        { id: "up", label: "Uphill" },
        { id: "down", label: "Downhill" },
      ],
      cards: [
        { text: "More gas than usual", cat: "up" },
        { text: "Biting point before the handbrake", cat: "up" },
        { text: "Footbrake on, then release the handbrake", cat: "down" },
        { text: "Maybe second gear", cat: "down" },
        { text: "No need to find the biting point", cat: "down" },
      ],
      explain: "Uphill: power and the biting point. Downhill: the car's weight does the work; control it with the footbrake.", src: P(22, "Uphill; p.23 Downhill") },
    {
      id: "k5", type: "sort", concept: "faults",
      prompt: "Moving away: good practice or fault?",
      categories: [
        { id: "ok", label: "Good practice" },
        { id: "no", label: "Fault" },
      ],
      cards: [
        { text: "Look over both shoulders", cat: "ok" },
        { text: "Signal only if it helps someone", cat: "ok" },
        { text: "Signal when you can't pull out yet", cat: "no" },
        { text: "Harsh acceleration", cat: "no" },
        { text: "Making a driver behind slow down", cat: "no" },
      ],
      explain: "Look, signal only when it helps, and never make others change course or speed.", src: P(23, "Faults to avoid") },
    { id: "k6", type: "picture", label: "Spot it", concept: "cockpit",
      prompt: "Which picture shows the cockpit drill?",
      options: ["cockpit-drill", "observe-routine", "msmpsl", "mspsl"], answer: 0,
      names: ["Cockpit drill", "Moving-off routine", "MS(M)PSL", "MSPSL"],
      explain: "Handbrake, doors, seat, steering, seat belts, mirrors, fuel, loads.", src: P(21, "Cockpit Drill") },
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
  blurb: "Checks and how to do them",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "periodic", visual: "periodic-checks",
      prompt: "Match the check to how you do it.",
      pairs: [
        ["Engine oil", "Level ground, preferably cold"],
        ["Coolant", "With the engine cold"],
        ["Tyre pressures", "At least once a week"],
        ["Battery", "Top up with distilled water if not sealed"],
      ],
      explain: "Follow the owner's handbook, and service the car regularly.", src: P(20, "Periodic Checks; p.21") },
    {
      id: "m2", type: "match", concept: "angle",
      prompt: "Moving off at an angle — match the question to why it matters.",
      pairs: [
        ["What angle will I need?", "To clear the obstruction"],
        ["How far into the road?", "How much of the other lane I'll use"],
        ["Any oncoming traffic?", "They mustn't have to slow down"],
      ],
      explain: "Ask more questions at the observation stages.", src: P(22, "At an angle; Ask yourself") },
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
  blurb: "Starting up and moving off",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "starting", visual: "ignition",
      prompt: "Starting the engine — in order.",
      steps: ["Check the handbrake is applied", "Clutch down; gear lever in neutral", "Switch on the ignition", "Operate the starter", "Release the key once the engine starts", "Check the oil and ignition lights go out"],
      explain: "Secure the car, start, release promptly, check the warning lights.", src: P(21, "Starting the Engine; p.91 answer 5") },
    { id: "p2", type: "order", concept: "level", visual: "move-off-level",
      prompt: "Moving off on a level road — in order.",
      steps: ["Clutch down, select first gear", "Set the gas", "Find the biting point and hold it", "Mirrors and blind spots", "Signal if necessary", "Look all round again", "Release the handbrake and move off"],
      explain: "Prepare, observe, signal if necessary, look again, go.", src: P(22, "On a level road") },
    { id: "p3", type: "order", concept: "hills", visual: "hill-start:down",
      prompt: "Moving off downhill — in order.",
      steps: ["Clutch down; select a gear to suit the slope", "Apply the footbrake", "Release the handbrake", "Mirrors and right shoulder", "Signal if necessary; look around again", "Release the footbrake; clutch up smoothly"],
      explain: "The footbrake holds the car — no need to set the gas or find the biting point.", src: P(23, "Downhill") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "daily",
      scene: "🛑 On the way to a lesson, the brake pedal feels spongy and the car pulls to one side.",
      prompt: "What should you do?",
      options: ["Drive to the nearest garage", "Have it towed to a garage", "Not drive the car and have it checked immediately", "Carry on — the handbrake will do in an emergency"], answer: 2,
      explain: "If in any doubt about the brakes, stop driving and have the car checked immediately.", src: P(25, "Retention Q5 (answer c, p.96); p.20") },
    { id: "s2", type: "choice", label: "Scenario", concept: "cockpit",
      scene: "🚗 Your pupil will drive a car they've never driven before.",
      prompt: "When should they get to know the controls?",
      options: ["With experience", "Before starting the engine", "Within a few minutes of driving", "After the first journey"], answer: 1,
      explain: "Get to know the controls of an unfamiliar vehicle before starting the engine.", src: P(25, "Retention Q3 (answer b, p.96)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "moving-off", visual: "move-off-level",
      scene: "🚙 Your pupil is about to pull away from the kerb. A car is approaching from behind, quite close.",
      prompt: "What should they do?",
      options: ["Signal and go — it will slow down", "Wait — they mustn't make it change speed or direction", "Pull out quickly", "Sound the horn"], answer: 1,
      explain: "When moving away from rest, you must not cause other drivers to slow down or stop.", src: P(26, "Retention Q15 (answer a, p.96); p.22") },
    { id: "s4", type: "choice", label: "Scenario", concept: "angle", visual: "angle-start",
      scene: "↖️ Parked close behind a van, your pupil moves off and clips the van's corner.",
      prompt: "What went wrong — most likely?",
      options: ["Too much gas", "Not steering briskly enough", "The wrong mirror", "Too early a signal"], answer: 1,
      explain: "The most common mistake driving off at an angle: not steering briskly enough (or moving off too fast).", src: P(91, "Post-test answer 11") },
    { id: "s5", type: "choice", label: "Scenario", concept: "hills", visual: "hill-start:up",
      scene: "⛰️ On a steep uphill start, your pupil's car rolls back as they release the handbrake.",
      prompt: "What's the likely cause?",
      options: ["Too much gas", "Handbrake released before finding the biting point", "Wrong mirror check", "Second gear"], answer: 1,
      explain: "Rolling back: releasing the handbrake too soon, or not finding the biting point.", src: P(91, "Post-test answer 12; p.22") },
    { id: "s6", type: "choice", label: "Scenario", concept: "hills", visual: "hill-start:down",
      scene: "⬇️ Parked facing down a steep hill, your pupil asks which gear to use.",
      prompt: "What do you say?",
      options: ["Always second", "The most appropriate gear for the slope", "Always first", "First, and slip the clutch"], answer: 1,
      explain: "Downhill, select the most appropriate gear — this may be second, depending on the slope.", src: P(26, "Retention Q14 (answer b, p.96); p.23") },
    { id: "s7", type: "choice", label: "Scenario", concept: "steering", visual: "look-ahead",
      scene: "🛞 Your pupil keeps drifting towards the kerb and staring at the bonnet.",
      prompt: "What do you advise?",
      options: ["Look at the kerb", "Look well ahead, not just over the front of the car", "Grip the wheel tighter", "Drive in the middle of the road"], answer: 1,
      explain: "Look well ahead — not just over the front of the vehicle.", src: P(23, "Advice you should give") },
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
  blurb: "A pupil's first move off",
  xpPer: 10,
  situation: "🎓 A new pupil, a quiet level road, the car parked at the kerb. Today they'll start the engine and move off for the first time.",
  items: [
    { id: "w1", type: "choice", step: "Getting in", concept: "cockpit", visual: "cockpit-drill", prompt: "First, the cockpit drill. It starts with…",
      options: ["Fuel", "Handbrake applied", "Mirrors", "Radio"], answer: 1,
      explain: "Handbrake, doors, seat, steering, seat belts, mirrors, fuel.", src: P(21, "Cockpit Drill") },
    { id: "w2", type: "choice", step: "Before starting", concept: "starting", prompt: "Before turning the key, they must…",
      options: ["Select first gear", "Check the handbrake, press the clutch and check neutral", "Press the accelerator", "Signal"], answer: 1,
      explain: "ALWAYS: handbrake applied, clutch down, gear lever in neutral.", src: P(21, "Starting the Engine") },
    { id: "w3", type: "choice", step: "It won't start", concept: "starting", prompt: "The engine doesn't start first time. Advise them to…",
      options: ["Keep the key turned", "Be patient — they could flood it with fuel", "Pump the gas", "Call for help"], answer: 1,
      explain: "Be patient: there's a possibility of flooding the engine with fuel.", src: P(25, "Retention Q10 (answer c, p.96)") },
    { id: "w4", type: "choice", step: "Preparing", concept: "level", prompt: "Engine running. Preparing to move…",
      options: ["Release the handbrake first", "Clutch down, first gear, set the gas, find the biting point", "Signal and go", "Look in the mirror only"], answer: 1,
      explain: "Prepare the car first, then observe.", src: P(22, "On a level road") },
    { id: "w5", type: "choice", step: "Observing", concept: "moving-off", prompt: "Car prepared. The safety checks now are…",
      options: ["Mirrors, signal, go", "Mirrors, look around, signal if necessary, look around", "Look around, signal, mirrors", "Signal, mirrors, go"], answer: 1,
      explain: "Check mirrors, look around, signal if necessary, look around.", src: P(25, "Retention Q8 (answer d, p.96)") },
    { id: "w6", type: "choice", step: "Driving along", concept: "steering", prompt: "Moving now. Where should they position?",
      options: ["Close to the kerb", "About 1 m from the kerb", "In the centre of the road", "On the centre line"], answer: 1,
      explain: "About three feet (1 metre) from the kerb.", src: P(23, "Advice you should give") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 96. Q1 and Q7 omitted (see top).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(n <= 10 ? 25 : 26, `Retention test Q${n}; answer p.96`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(2, "'Driving Essential Skills' recommends that tyre pressures are checked", ["annually, before an NCT test", "every day", "at intervals specified in the car owner's manual", "at least once a week"], 3, "periodic", "periodic-checks"),
    R(3, "When driving an unfamiliar vehicle, you should get to know the controls", ["with experience, particularly in bad weather", "before starting the engine", "within a few minutes of starting to drive", "after your first journey"], 1, "cockpit"),
    R(4, "You should check that lights and indicators are working", ["every day", "every week", "at the service interval", "when travelling at night"], 0, "daily", "daily-checks"),
    R(5, "If in any doubt about your vehicle's ability to brake safely you should", ["drive to the nearest garage to have it checked", "have the car towed to the nearest garage", "not drive the car and have it checked immediately", "not worry since the handbrake will suffice in an emergency"], 2, "daily"),
    R(6, "Safety checks, which the driver makes, are intended to benefit", ["the driver", "the driver and passengers", "the driver, passengers and all other road users", "NCT examiners"], 2, "cockpit"),
    R(8, "The correct sequence of actions to take before moving away is", ["check mirrors, signal if necessary, look around", "check mirrors, look around, signal if necessary", "look around, signal if necessary, check mirrors", "check mirrors, look around, signal if necessary, look around"], 3, "moving-off", "observe-routine"),
    R(9, "A pupil can steer a straight course with both hands on the wheel. To ensure they can steer and use a vehicle control at the same time, you would then advise them to practise on a quiet road", ["steering with just the right hand on the wheel", "steering with just the left hand on the wheel", "steering with either the left hand or the right hand", "steering with the left hand on the gear lever"], 2, "steering"),
    R(10, "If the engine fails to start first time you are advised to be patient, as there is a possibility of", ["flooding the engine with water", "damaging the starter motor", "flooding it with fuel", "blowing a fuse in the electrics"], 2, "starting"),
    R(11, "Driving a car whilst the oil warning light is showing is likely to", ["damage the clutch", "cause damage to the exhaust system", "indicate excessive oil pressure", "damage the engine"], 3, "starting", "warning-colours"),
    R(12, "Starting a diesel car, you may see a glow-plug symbol briefly on the instrument panel when the ignition is switched on. You should", ["wait for this light to go out before operating the starter", "only operate the starter when the glow-plug light is illuminated", "not start the car until a mechanic has checked the fault", "refuel immediately"], 0, "starting"),
    R(13, "It may not be necessary to use the accelerator when moving off downhill because", ["the engine idling speed will be sufficient", "the weight of the car will help you move away", "you will have engaged a higher-powered gear", "the clutch will be fully depressed"], 1, "hills", "hill-start:down"),
    R(14, "Moving off from rest on a downhill gradient you should always select", ["second gear", "the most appropriate gear", "first gear", "first gear and be ready to slip the clutch"], 1, "hills"),
    R(15, "When moving away from rest, you should", ["not cause other drivers to slow down or stop", "accelerate promptly to avoid any following traffic", "only signal if there is traffic behind you", "not need mirrors in a high-powered vehicle"], 0, "moving-off"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "starting",
      prompt: "Before starting the engine you must ALWAYS…", options: ["Press the gas", "Check the handbrake, press the clutch, check neutral", "Select first gear", "Signal"], answer: 1,
      explain: "Handbrake applied, clutch down, gear lever in neutral.", src: P(21, "Starting the Engine") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "angle",
      scene: "🚐 Pulling out from behind a parked van, your pupil lets the clutch up fully straight away.",
      prompt: "What do you advise?", options: ["Fine — quicker", "Don't release the clutch fully until clear of the obstruction", "Use more gas", "Signal again"], answer: 1,
      explain: "Good clutch control: don't release the clutch fully until clear.", src: P(22, "At an angle") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "periodic",
      statement: "Check the coolant level when the engine is hot.", answer: false,
      explain: "Check the coolant when the engine is cold.", src: P(20, "Radiator coolant level") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "hills",
      prompt: "Which start needs the footbrake rather than the biting point?", options: ["hill-start:down", "hill-start:up"], answer: 0,
      names: ["Downhill start", "Uphill start"],
      explain: "Downhill: the car's weight helps — hold it on the footbrake.", src: P(23, "Downhill") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "level",
      prompt: "Match the stage.", pairs: [["Prepare", "Gear, gas, biting point"], ["Observe", "Mirrors and blind spots"], ["Move off", "Release the handbrake, more gas"]],
      explain: "Observe, prepare, observe, signal if necessary, move off.", src: P(22, "Moving Off") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "cockpit",
      prompt: "The cockpit drill:", steps: ["Handbrake", "Doors", "Seat", "Steering", "Seat belts", "Mirrors"],
      explain: "Handbrake, doors, seat, steering, seat belts, mirrors — then fuel and loads.", src: P(21, "Cockpit Drill") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "starting",
      scene: "⛽ In a diesel car, a coil-shaped light shows when the ignition comes on.",
      prompt: "What do you do?", options: ["Start immediately", "Wait for it to go out, then operate the starter", "Call a mechanic", "Refuel"], answer: 1,
      explain: "Wait for the glow-plug light to go out before operating the starter.", src: P(26, "Retention Q12 (answer a, p.96)") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "cockpit",
      prompt: "Safety checks are intended to benefit…", options: ["The driver", "The driver and passengers", "The driver, passengers and all other road users", "NCT examiners"], answer: 2,
      explain: "For the safety of yourself, your passengers and other road users.", src: P(25, "Retention Q6 (answer c, p.96)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "steering",
      prompt: "Your pupil stares at the bonnet. Which picture shows what to teach?", options: ["look-ahead", "zone-of-vision"], answer: 0,
      names: ["Look well ahead", "Zone of vision"],
      explain: "Look well ahead, not just over the front of the car.", src: P(23, "Advice you should give") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "starting",
      prompt: "Driving with the oil warning light on is likely to…", options: ["Damage the clutch", "Damage the exhaust", "Show excessive oil pressure", "Damage the engine"], answer: 3,
      explain: "If the oil light stays on, switch off and investigate.", src: P(26, "Retention Q11 (answer d, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "2.3",
  number: "2.3",
  title: "Beginning to Drive",
  pages: [20, 26],
  intro: "Checks, the cockpit drill, starting the engine, moving off — level, at an angle and on a hill — and steering a straight course.",
  objectives: [
    "The everyday and periodic safety checks on the vehicle",
    "The cockpit drill",
    "The safety precautions before, and the procedure for, starting the engine",
    "Moving away safely, under control, straight ahead, on a level road and on a gradient",
    "How to advise a novice on steering a straight course",
  ],
  objectivesSrc: P(20, "Objectives"),
  mcqLink: { sectionId: "adi.sec.mechanics", label: "Basic Mechanics & Vehicle Maintenance" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...ready, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "pre-flight", icon: "✅", label: "Pre-Flight Checker", rule: { activity: "ready", min: 100 } },
    { id: "moving-off-specialist", icon: "🏆", label: "Moving-Off Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
