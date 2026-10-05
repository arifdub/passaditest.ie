/*
  ===========================================================================
  BOOK 2 · UNIT 2.4 — CHANGING GEAR (MANUAL TRANSMISSION)

  Source: "Theory Resource Workbook 2 of 4" (Driver Education Supplies),
  book pages 27–31, with the post-test model answers on page 92 and the
  retention-test answers on page 96 (1b 2a 3d 4b 5c 6b 7b 8b 9d 10c).

  The answer key agrees with the unit text, so all ten retention questions
  are used. Q9 (slow traffic: a low gear) and Q10 (wheel spin from harsh
  acceleration in low gears) aren't stated word for word but agree with
  the text, and are kept as the book sets them.

  Page 28's speed-range chart for each gear isn't reproduced with numbers:
  its scale is unclear and ranges vary by car. The drawing shows the
  overlap only.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 2, unit: "2.4", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Where, when and how",
    text: "To drive a manual car safely you must know where, when and how to change gear — matching engine power to the car's speed, its load and the road and traffic conditions. There's no hard and fast rule: cars differ in engine capacity and power-to-weight ratio.",
    src: P(27, "Unit introduction"),
  },
  "up": {
    title: "Changing up",
    text: "Always the same: left hand on the gear lever; at the same time, clutch fully down and ease off the gas (not fully); select the next higher gear; at the same time, clutch up smoothly, press the gas and return your hand to the wheel. Releasing the gas lets the engine speed drop to match the higher gear.",
    src: P(27, "Changing up; p.92 answer 6"),
  },
  "down-braking": {
    title: "Changing down while braking",
    text: "As a general rule, brake to reduce speed before changing down. Left hand on the lever; clutch fully down while keeping some pressure on the footbrake; select the lower gear; clutch up smoothly, continue braking or return to the gas; hand back to the wheel.",
    src: P(27, "Changing down; Changing down whilst braking"),
  },
  "down-accel": {
    title: "Changing down under acceleration",
    text: "To accelerate more quickly, or when road speed drops (a hazard, a hill): left hand on the lever; clutch fully down while keeping some pressure on the gas; select the lower gear; clutch up smoothly, pressing the gas to raise the engine speed for a smooth change. \"Under acceleration\" means the engine is pulling the car — not always gaining speed.",
    src: P(27, "Changing down whilst under acceleration; p.28 Note; p.92 answers 2, 11"),
  },
  "block": {
    title: "Block changing",
    text: "You don't have to go through the gears in order, if it's done in sympathy with the engine. Slowing down, it's preferable and just as safe to brake first and miss out intermediate gears — \"block\" gear changing. Changing up, with enough speed, 3rd to 5th or 4th to 6th is fine. Going down through the gears in order can help when first learning the gearbox.",
    src: P(27, "Note; p.28 Note; p.92 answer 10"),
  },
  "synchromesh": {
    title: "Synchromesh and double de-clutching",
    text: "Synchromesh is a mechanism in modern gearboxes that synchronises the gear wheels, so you needn't exactly match road and engine speed — forward gears only. In older cars without it, drivers double de-clutched: pausing in neutral, letting the clutch up and dabbing the gas to raise the engine speed before engaging the lower gear. Not needed on most modern cars.",
    src: P(27, "Synchromesh; p.28 Double declutching; p.92 answers 3, 7"),
  },
  "when": {
    title: "When to change",
    text: "Knowing when is as important as knowing how. Listen to the engine — sound and vibration — and check the handbook. The bigger the engine, the less often you change; extra load (passengers, uphill) means more changes and lower gears. The higher the speed, the higher the gear, and speed ranges overlap. A rev counter shows engine revolutions per minute: about 1,500–2,000 rpm at a steady speed is most economical.",
    src: P(28, "When to change gear; REV counters; Engine size; Speed"),
  },
  "wrong-gear": {
    title: "Too low or too high",
    text: "Too low a gear for the speed and load causes excess engine wear, wastes fuel and harms the environment. Too high a gear makes the car shudder — change down. Never drive in a higher gear slipping the clutch.",
    src: P(28, "Note; p.92 answer 15"),
  },
  "road-ahead": {
    title: "Anticipation",
    text: "Anticipate the road ahead and change gear in good time, before the hazard. Lower gears give more control — engine flexibility and a reserve of power. On approach to a steep hill change down: more power uphill, help controlling speed downhill. Before overtaking, consider a lower gear for extra acceleration.",
    src: P(29, "The road ahead; Gradients; Overtaking"),
  },
  "slowing": {
    title: "Using the gears to slow down",
    text: "Normally avoid it: extra strain on the engine and transmission, and following traffic gets no brake-light warning. Acceptable going downhill (to avoid prolonged braking and loss of braking efficiency) and on a very slippery surface, where braking risks a skid — ease off the gas in good time; the engine slows the car less than the brakes.",
    src: P(29, "Using gears to slow the car; p.92 answer 9"),
  },
  "coasting": {
    title: "Coasting",
    text: "Letting the car move without being driven by the engine — clutch down unnecessarily or the lever in neutral. It lessens control, especially steering and braking; can make it hard to select a gear if something happens; and the car speeds up downhill. Never coast down a hill.",
    src: P(29, "Good driving practices; p.92 answers 12, 13"),
  },
  "faults": {
    title: "Faults and good practice",
    text: "Never force the lever, rush changes, look at the lever, hold it unnecessarily, or coast. Can't engage a gear? Back to neutral, let the clutch up, press it again and re-select. Slow down before changing down (avoid over-revving); stop completely before selecting reverse; don't ride the brakes; take extra care on slippery surfaces.",
    src: P(29, "Faults to avoid; Good driving practices; p.92 answers 4, 5"),
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
    "Knowing WHEN to change matters as much as HOW",
    "Brake first, then change down — you can skip gears",
    "Never coast, never force the lever, never look at it",
  ],
  cards: [
    {
      icon: "⚙️",
      kicker: "Changing gear",
      title: "Match power to speed and load",
      visual: "gear-pattern",
      body: [
        "Select gears that match the engine's power to the car's speed — considering its load and the road and traffic.",
        "There's no fixed rule: cars vary in engine size and power-to-weight ratio. Good co-ordination of hand and foot, and a light but firm touch on the lever.",
      ],
      think: ["👂 What is the engine telling me?", "🛣️ What's coming up ahead?", "🏋️ Am I carrying a load or climbing?"],
      concept: "why",
      src: P(27, "Unit introduction; How to change gear"),
    },
    {
      icon: "⬆️",
      kicker: "Changing up",
      title: "Always the same four steps",
      visual: "gear-pattern",
      ask: {
        prompt: "Why ease off the gas when changing up?",
        options: ["To save fuel", "To let the engine speed drop to match the higher gear", "To stop the car"],
        answer: 1,
      },
      list: [
        "Left hand on the gear lever",
        "Clutch fully down and, at the same time, ease off the gas (not fully)",
        "Select the next higher gear",
        "Clutch up smoothly, press the gas, hand back to the wheel — at the same time",
      ],
      concept: "up",
      src: P(27, "Changing up; p.92 answer 6"),
    },
    {
      icon: "⬇️",
      kicker: "Changing down",
      title: "Braking — or accelerating?",
      ask: {
        prompt: "Changing down to accelerate past a hazard, should you keep pressure on the gas?",
        options: ["No — release it fully", "Yes — keep some pressure on the gas", "Use the footbrake instead"],
        answer: 1,
      },
      sections: [
        { head: "Whilst braking (the general rule)", list: ["Left hand on the lever", "Clutch fully down, keep some pressure on the footbrake", "Select the appropriate lower gear", "Clutch up smoothly; continue braking or return to the gas"] },
        { head: "Under acceleration", list: ["Left hand on the lever", "Clutch fully down, keep some pressure on the gas", "Select the lower gear", "Clutch up smoothly, pressing the gas to raise engine speed"] },
      ],
      callout: "\"Under acceleration\" means the engine is pulling the car — not always gaining speed.",
      concept: "down-accel",
      src: P(27, "Changing down; p.28 Note; p.92 answer 2"),
    },
    {
      icon: "⏭️",
      kicker: "Block changing",
      title: "You don't have to go in order",
      visual: "block-change",
      list: [
        "Slowing down: brake first, then miss out the gears you don't need — just as safe",
        "Speeding up: with enough speed, 3rd to 5th or 4th to 6th is fine",
        "Always in sympathy with the engine",
        "Going down in order can help a learner get to know the gearbox",
      ],
      concept: "block",
      src: P(27, "Note; p.28 Note; p.92 answer 10"),
    },
    {
      icon: "🔄",
      kicker: "Synchromesh",
      title: "Why modern changes are easy",
      body: [
        "Synchromesh synchronises the gear wheels, allowing some variation between engine and road speed — so you don't have to match them exactly. Forward gears only.",
        "Older cars without it needed double de-clutching: pause in neutral, clutch up, dab the gas to speed the gears up, then engage the lower gear — reasonably quickly. Not necessary on most modern cars.",
      ],
      concept: "synchromesh",
      src: P(27, "Synchromesh; p.28 Double declutching; p.92 answers 3, 7, 8"),
    },
    {
      icon: "👂",
      kicker: "When to change",
      title: "Listen, look, anticipate",
      visuals: ["gear-ranges", "rev-counter"],
      list: [
        "Listen to the engine — most drivers judge by sound or vibration; check the handbook",
        "Bigger engines need fewer changes; load or a hill means more, and lower gears",
        "Higher speed, higher gear — and the ranges overlap",
        "A rev counter shows engine rpm: about 1,500–2,000 at a steady speed for economy",
      ],
      concept: "when",
      src: P(28, "When to change gear; REV counters; Engine size; Speed"),
    },
    {
      icon: "⚖️",
      kicker: "Too low or too high",
      title: "Engine sympathy",
      list: [
        "Too low a gear: excess engine wear, wasted fuel, worse for the environment",
        "Too high a gear: the car shudders — change down",
        "Never drive in a higher gear while slipping the clutch",
      ],
      concept: "wrong-gear",
      src: P(28, "Note; p.92 answer 15"),
    },
    {
      icon: "🔭",
      kicker: "The road ahead",
      title: "Change in good time",
      visual: "hill-up",
      list: [
        "Anticipate, and change before the hazard",
        "Lower gears give more control — flexibility and a reserve of power",
        "Steep hill: change down — power going up, speed control going down",
        "Before overtaking: consider a lower gear for extra acceleration",
      ],
      concept: "road-ahead",
      src: P(29, "The road ahead; Gradients; Overtaking"),
    },
    {
      icon: "🐢",
      kicker: "Slowing with the gears",
      title: "Normally — don't",
      visual: "hill-down",
      body: ["Using the gears to slow the car strains the engine and transmission, and drivers behind get no brake-light warning."],
      sections: [
        { head: "But it's acceptable", list: ["Going downhill — to avoid prolonged braking and loss of braking efficiency", "On a very slippery surface, where braking risks a skid — ease off the gas in good time"] },
      ],
      callout: "The engine is not as efficient at slowing the car as the brakes.",
      concept: "slowing",
      src: P(29, "Using gears to slow the car; p.92 answer 9"),
    },
    {
      icon: "🚫",
      kicker: "Coasting",
      title: "Always in gear on the move",
      visual: "coasting",
      ask: {
        prompt: "Coasting mainly reduces your control of…",
        options: ["The clutch", "Steering and braking", "The radio"],
        answer: 1,
      },
      list: [
        "Coasting: clutch down unnecessarily, or the lever in neutral, while moving",
        "Less control — especially steering and braking",
        "Hard to select a gear if the unexpected happens",
        "Downhill, the car picks up speed — never coast down a hill",
      ],
      concept: "coasting",
      src: P(29, "Good driving practices; p.92 answers 12, 13"),
    },
    {
      icon: "✋",
      kicker: "Faults to avoid",
      title: "Gentle hands, eyes up",
      list: [
        "Never force the lever or rush a change",
        "Never take your eyes off the road to change gear",
        "Never hold the lever unnecessarily",
        "Can't engage a gear? Neutral, clutch up, clutch down again, re-select",
        "Slow down before changing down — avoid over-revving",
        "Stop completely before selecting reverse",
      ],
      concept: "faults",
      src: P(29, "Faults to avoid; Good driving practices; p.92 answers 4, 5"),
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
      front: "What two things make a good gear change?",
      back: "Knowing WHEN to change and HOW to change.", src: P(92, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "down-accel",
      front: "Changing down — do you keep any pressure on the gas?",
      back: "Yes — only when changing down under acceleration.", src: P(92, "Post-test answer 2") },
    { id: "r3", type: "flash", concept: "synchromesh",
      front: "What is synchromesh?",
      back: "A device that synchronises the speed of the gear wheels, allowing some variation between engine and road speeds.", src: P(92, "Post-test answer 3") },
    { id: "r4", type: "truefalse", concept: "faults",
      statement: "If the gear won't go in, use firm pressure on the lever.", answer: false,
      explain: "Never force it. Back to neutral, let the clutch up, press it again and re-engage.", src: P(92, "Post-test answers 4, 5") },
    { id: "r5", type: "fill", concept: "when", visual: "rev-counter",
      before: "For best economy at a steady speed, keep the engine at about", after: "rpm.",
      options: ["1,500–2,000", "500–800", "3,500–4,000", "6,000"], answer: "1,500–2,000",
      explain: "As a guide, 1,500–2,000 rpm when driving at a constant speed.", src: P(28, "REV Counters") },
    { id: "r6", type: "flash", concept: "coasting", visual: "coasting",
      front: "What is coasting?",
      back: "Letting the car move without being driven by the engine — clutch down unnecessarily or the lever in neutral.", src: P(92, "Post-test answer 12") },
    { id: "r7", type: "flash", concept: "down-accel",
      front: "What's the general rule for when to change down?",
      back: "Change down to accelerate more quickly, or if road speed drops.", src: P(92, "Post-test answer 11") },
    { id: "r8", type: "flash", concept: "wrong-gear",
      front: "What is \"over-run\"?",
      back: "Driving with little pressure on the gas, so the engine doesn't seem to be driving the car.", src: P(92, "Post-test answer 14") },
    { id: "r9", type: "truefalse", concept: "block", visual: "block-change",
      statement: "When slowing down it's just as safe to brake first and miss out intermediate gears.", answer: true,
      explain: "That's block gear changing — done in sympathy with the engine.", src: P(28, "Note") },
    { id: "r10", type: "fill", concept: "wrong-gear",
      before: "Driving in too high a gear for the speed and load may make the car", after: ".",
      options: ["shudder", "skid", "stall instantly", "overheat"], answer: "shudder",
      explain: "Too high: shudder. Too low: excess wear and wasted fuel.", src: P(28, "Note") },
  ],
};

/* ---------------------------------------------------------------------------
   3. RIGHT GEAR? — recognition.
   --------------------------------------------------------------------------- */
const gears = {
  id: "gears",
  kind: "items",
  mode: "matching",
  title: "Right Gear?",
  blurb: "Spot it, sort it — up, down and never",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "block",
      prompt: "Which picture shows block gear changing?",
      options: ["block-change", "gear-pattern", "gear-ranges", "msmpsl"], answer: 0,
      names: ["Block changing", "Gear pattern", "Gear speed ranges", "Hazard routine"],
      explain: "Brake first, then go straight to the gear you need.", src: P(28, "Note") },
    { id: "k2", type: "picture", label: "Spot it", concept: "coasting",
      prompt: "Which picture shows a fault?",
      options: ["coasting", "hill-down"], answer: 0,
      names: ["Coasting in neutral", "Low gear downhill"],
      explain: "Coasting downhill in neutral: less control and the car speeds up.", src: P(29, "Good driving practices") },
    {
      id: "k3", type: "sort", concept: "down-accel",
      prompt: "Changing down — braking or under acceleration?",
      categories: [
        { id: "brake", label: "Whilst braking" },
        { id: "accel", label: "Under acceleration" },
      ],
      cards: [
        { text: "Keep some pressure on the footbrake", cat: "brake" },
        { text: "Slowing for a junction", cat: "brake" },
        { text: "Keep some pressure on the gas", cat: "accel" },
        { text: "Before overtaking", cat: "accel" },
        { text: "Road speed drops on a hill", cat: "accel" },
      ],
      explain: "Slowing: brake, then change. To pull harder: keep the gas on through the change.", src: P(27, "Changing down") },
    {
      id: "k4", type: "sort", concept: "slowing",
      prompt: "Using the gears to slow down — acceptable?",
      categories: [
        { id: "ok", label: "Acceptable" },
        { id: "no", label: "Normally avoid" },
      ],
      cards: [
        { text: "A long steep downhill", cat: "ok" },
        { text: "An icy road", cat: "ok" },
        { text: "Stopping at traffic lights", cat: "no" },
        { text: "Slowing in normal traffic", cat: "no" },
      ],
      explain: "Downhill and on slippery surfaces only — otherwise use the brakes so drivers behind see your brake lights.", src: P(29, "Using gears to slow the car") },
    {
      id: "k5", type: "sort", concept: "faults",
      prompt: "Good practice or fault?",
      categories: [
        { id: "ok", label: "Good practice" },
        { id: "no", label: "Fault" },
      ],
      cards: [
        { text: "Light but firm touch on the lever", cat: "ok" },
        { text: "Stop fully before selecting reverse", cat: "ok" },
        { text: "Looking down at the lever", cat: "no" },
        { text: "Resting a hand on the lever", cat: "no" },
        { text: "Neutral to roll down a hill", cat: "no" },
      ],
      explain: "Eyes on the road, hand back on the wheel, always in gear on the move.", src: P(29, "Faults to avoid") },
    { id: "k6", type: "picture", label: "Spot it", concept: "when",
      prompt: "Which picture shows that one speed can be driven in two or three gears?",
      options: ["gear-ranges", "rev-counter", "stopping-weather", "gear-pattern"], answer: 0,
      names: ["Overlapping speed ranges", "Rev counter", "Stopping distances", "Gear pattern"],
      explain: "Each gear covers a range of speeds, and the ranges overlap.", src: P(28, "Speed") },
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
  blurb: "Terms and situations",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "synchromesh",
      prompt: "Match the term to its meaning.",
      pairs: [
        ["Synchromesh", "Matches gear-wheel speeds for you"],
        ["Double de-clutching", "Neutral, clutch up, dab of gas"],
        ["Block changing", "Missing out gears you don't need"],
        ["Coasting", "Moving without the engine driving"],
      ],
      explain: "Modern gearboxes make changes easier — but coasting is never acceptable.", src: P(27, "Synchromesh; p.28; p.92") },
    {
      id: "m2", type: "match", concept: "road-ahead",
      prompt: "Match the situation to the gear choice.",
      pairs: [
        ["About to overtake", "Lower gear for extra acceleration"],
        ["Steep hill ahead", "Change down in good time"],
        ["Car shuddering", "Change down — too high a gear"],
        ["Constant speed on the open road", "A high gear, about 1,500–2,000 rpm"],
      ],
      explain: "Match the gear to the speed, the load and what's ahead.", src: P(28, "Note; p.29") },
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
  blurb: "Up, down, and a stuck gear",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "up", visual: "gear-pattern",
      prompt: "Changing up — in order.",
      steps: ["Left hand on the gear lever", "Clutch fully down; ease off the gas", "Select the next higher gear", "Clutch up smoothly, gas on, hand back to the wheel"],
      explain: "The procedure for changing up is always the same.", src: P(27, "Changing up") },
    { id: "p2", type: "order", concept: "down-braking",
      prompt: "Changing down whilst braking — in order.",
      steps: ["Brake to reduce speed", "Left hand on the gear lever", "Clutch fully down, keep some footbrake", "Select the appropriate lower gear", "Clutch up smoothly; continue braking or gas"],
      explain: "As a general rule, slow down with the brakes first, then change down.", src: P(27, "Changing down whilst braking") },
    { id: "p3", type: "order", concept: "faults",
      prompt: "The gear won't engage — in order.",
      steps: ["Move the lever back to neutral", "Let the clutch out", "Press the clutch down again", "Engage the gear"],
      explain: "Never force it.", src: P(92, "Post-test answer 5") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "faults",
      scene: "✋ Your pupil can't get second gear in and starts pushing hard on the lever.",
      prompt: "What do you tell them?",
      options: ["Push harder", "Select neutral, let the clutch up and try again", "Coast to a stop", "Use an automatic next time"], answer: 1,
      explain: "Never force it: neutral, clutch up, clutch down, re-select.", src: P(31, "Retention Q3 (answer d, p.96)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "road-ahead", visual: "hill-down",
      scene: "⬇️ Your pupil is approaching a steep downhill slope in fourth gear.",
      prompt: "What should they do?",
      options: ["Change up in good time", "Change down, if necessary, in good time to help control speed", "Select the lowest gear available", "Select neutral"], answer: 1,
      explain: "Going downhill a lower gear may be needed to help control speed — change in good time.", src: P(31, "Retention Q4 (answer b, p.96)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "block", visual: "block-change",
      scene: "🚦 Slowing from 80 km/h for a junction, your pupil braked well and now wants second gear from fifth.",
      prompt: "Can they go straight to second?",
      options: ["No — always go down in order", "Yes — it's just as safe as changing down in order", "Only in an emergency", "It will break the gearbox"], answer: 1,
      explain: "Brake first and miss out intermediate gears — block changing.", src: P(31, "Retention Q7 (answer b, p.96); p.28") },
    { id: "s4", type: "choice", label: "Scenario", concept: "coasting", visual: "coasting",
      scene: "🚗 Going down a long hill, your pupil holds the clutch down \"to save fuel\".",
      prompt: "What's the problem?",
      options: ["None", "Coasting — less control of steering and braking, and the car speeds up", "It wears the brakes", "It's only wrong uphill"], answer: 1,
      explain: "Any form of coasting reduces control — particularly steering and braking.", src: P(92, "Post-test answer 13") },
    { id: "s5", type: "choice", label: "Scenario", concept: "slowing",
      scene: "❄️ On a frosty road, your pupil needs to slow down gently.",
      prompt: "What's reasonable here?",
      options: ["Brake hard", "Ease off the gas in good time and use the engine to help slow the car", "Neutral and coast", "Pump the handbrake"], answer: 1,
      explain: "On a slippery surface engine compression can slow the car where braking risks a skid — ease off in good time.", src: P(29, "Using gears to slow the car") },
    { id: "s6", type: "choice", label: "Scenario", concept: "wrong-gear",
      scene: "📳 At 30 km/h in fifth gear, the car shudders.",
      prompt: "What should your pupil do?",
      options: ["Press the gas harder", "Change down to a lower gear", "Slip the clutch", "Change up"], answer: 1,
      explain: "Too high a gear for the speed makes the car shudder. Never slip the clutch in a higher gear — change down.", src: P(28, "Note; p.92 answer 15") },
    { id: "s7", type: "choice", label: "Scenario", concept: "down-accel",
      scene: "🚚 A slow tractor ahead; the road is clear. Your pupil plans to overtake.",
      prompt: "What about the gear?",
      options: ["Stay in top gear", "Consider a lower gear for extra acceleration", "Select neutral first", "Change up"], answer: 1,
      explain: "Before overtaking, consider a lower gear to give extra acceleration — a power reserve.", src: P(29, "Overtaking") },
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
  blurb: "A country drive with a hill and a junction",
  xpPer: 10,
  situation: "🌄 Your pupil drives out of town onto a country road: speeding up, a hill, slow traffic, then a junction to stop at.",
  items: [
    { id: "w1", type: "choice", step: "Speeding up", concept: "up", prompt: "When should they change up, as a general rule?",
      options: ["When the engine roars", "As road speed increases", "When the car judders", "Only to overtake"], answer: 1,
      explain: "Change up to a higher gear as road speed increases.", src: P(31, "Retention Q6 (answer b, p.96)") },
    { id: "w2", type: "choice", step: "Changing up", concept: "up", prompt: "As they press the clutch down, the gas pedal…",
      options: ["Stays fully down", "Is eased off — not fully", "Is pressed harder", "Doesn't matter"], answer: 1,
      explain: "Clutch fully down and ease off the gas (not fully) — at the same time.", src: P(27, "Changing up") },
    { id: "w3", type: "choice", step: "The hill", concept: "road-ahead", visual: "hill-up", prompt: "A steep climb ahead and speed dropping.",
      options: ["Stay in fifth", "Change down in good time", "Coast", "Slip the clutch"], answer: 1,
      explain: "Changing down may be necessary on approach to a steep hill — going uphill you need more power.", src: P(29, "Gradients") },
    { id: "w4", type: "choice", step: "Slow traffic", concept: "when", prompt: "Behind slow-moving traffic, control speed by…",
      options: ["Slipping the clutch in third", "Keeping the clutch down", "Using the footbrake instead of the gas", "A low gear suited to the road and traffic"], answer: 3,
      explain: "Use a low gear suitable to the road and traffic conditions.", src: P(31, "Retention Q9 (answer d, p.96)") },
    { id: "w5", type: "choice", step: "The junction", concept: "block", prompt: "Stopping at the junction ahead, they should…",
      options: ["Change down through every gear", "Change down gears as necessary", "Press the clutch down as they brake", "Not change down at all"], answer: 1,
      explain: "When normally stopping, change down gears as necessary.", src: P(31, "Retention Q1 (answer b, p.96)") },
    { id: "w6", type: "choice", step: "Pulling away", concept: "faults", prompt: "Pulling away from the junction, they floor it in first.",
      options: ["Good — gets clear quickly", "Harsh acceleration in low gears could cause wheel spin and loss of control", "Saves fuel", "Protects the clutch"], answer: 1,
      explain: "Accelerating too long or too harshly in the lower gears could cause wheel spin and loss of control.", src: P(31, "Retention Q10 (answer c, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 96.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(31, `Retention test Q${n}; answer p.96`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "When normally stopping, 'Driving Essential Skills' advises that", ["it is seldom necessary to change down the gears", "you should change down gears as necessary", "you should press the clutch pedal down as you brake", "you should change down the gears in order"], 1, "block"),
    R(2, "According to 'Driving Essential Skills' the most important aspects of gear changing are knowing", ["when and how to change gear", "when and where to change gear", "where and why to change gear", "how and where to change gear"], 0, "why"),
    R(3, "If a driver finds it difficult to engage a gear they should", ["select neutral and coast to a halt", "try a vehicle with automatic transmission", "use firm pressure to force the lever into place", "select neutral, let the clutch pedal up and try again"], 3, "faults"),
    R(4, "Driving towards a steep downhill slope, a driver should change", ["up a gear in good time", "down a gear, if necessary, in good time, to help control speed", "to the lowest gear available", "to the lowest power gear"], 1, "road-ahead", "hill-down"),
    R(5, "Approaching a hazard, a driver decides to change to a lower gear to accelerate more quickly. They are advised to", ["keep some pressure on the footbrake as they change down", "use the footbrake until just before pressing the clutch down", "keep some pressure on the gas pedal as the clutch pedal goes down", "release the gas pedal fully before making the gear change"], 2, "down-accel"),
    R(6, "As a general rule, a driver should change up to a higher gear when", ["the engine begins to roar", "their road speed increases", "the engine and transmission begin to judder", "intending to overtake"], 1, "when", "gear-ranges"),
    R(7, "Changing gear directly from fourth to second is a practice which", ["should be avoided", "is just as safe as changing down the gears in order", "will help a novice driver learn the gearbox", "is likely to break the gearbox"], 1, "block", "block-change"),
    R(8, "Any form of coasting is wrong because it reduces the driver's control of", ["braking", "steering and braking", "the clutch", "the footbrake and clutch"], 1, "coasting", "coasting"),
    R(9, "Driving in slow-moving traffic, a driver should control their speed by", ["slipping the clutch in third gear", "keeping the clutch pedal depressed", "using the footbrake instead of the gas pedal", "using a low gear suitable to the road and traffic conditions"], 3, "when"),
    R(10, "Accelerating for too long or too harshly in the lower gears could cause", ["increased clutch wear", "reduced fuel consumption", "wheel spin and loss of control", "increased traction"], 2, "wrong-gear"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "synchromesh",
      prompt: "Synchromesh works on…", options: ["Reverse only", "Forward gears only", "All gears including reverse", "The clutch"], answer: 1,
      explain: "Synchromesh is a feature of forward gears only.", src: P(27, "Synchromesh") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "faults",
      scene: "↩️ Rolling slowly forward, your pupil tries to select reverse to park.",
      prompt: "What do you say?", options: ["Fine, if gentle", "Stop completely before selecting reverse", "Use more clutch", "Use the handbrake"], answer: 1,
      explain: "Be sure the vehicle is completely stopped before selecting reverse, to prevent damage to the transmission.", src: P(29, "Good driving practices") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "slowing",
      statement: "Using the gears to slow the car is normally the best way to stop.", answer: false,
      explain: "Normally avoid it — extra strain, and no brake-light warning for drivers behind.", src: P(29, "Using gears to slow the car") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "when",
      prompt: "Which instrument shows engine revolutions per minute?", options: ["rev-counter", "warning-colours", "ignition", "gantry-signals"], answer: 0,
      names: ["Rev counter", "Warning lights", "Ignition switch", "Motorway gantry"],
      explain: "The tachometer/rev counter shows crankshaft revolutions per minute, divided by 1,000.", src: P(28, "REV Counters") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "down-accel",
      prompt: "Match the change to the pedal.", pairs: [["Changing up", "Ease off the gas"], ["Down, braking", "Keep some footbrake"], ["Down, accelerating", "Keep some gas"]],
      explain: "What your right foot does depends on why you're changing.", src: P(27, "Changing up; Changing down") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "up",
      prompt: "Changing up:", steps: ["Hand on lever", "Clutch down, ease gas", "Select gear", "Clutch up, gas on"],
      explain: "Always the same four steps.", src: P(27, "Changing up") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "wrong-gear",
      scene: "🔊 Your pupil drives along at 50 km/h in second gear, the engine screaming.",
      prompt: "What's the effect?", options: ["Better control", "Excess engine wear, wasted fuel, worse for the environment", "Lower emissions", "Nothing"], answer: 1,
      explain: "Too low a gear for the speed and load wears the engine and wastes fuel.", src: P(28, "Note") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "coasting",
      prompt: "Coasting is wrong because it reduces your control of…", options: ["Braking", "Steering and braking", "The clutch", "The footbrake and clutch"], answer: 1,
      explain: "It lessens the driver's control, particularly steering and braking.", src: P(31, "Retention Q8 (answer b, p.96)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "block",
      prompt: "You've braked from speed for a corner. Which picture shows the efficient change?", options: ["block-change", "coasting"], answer: 0,
      names: ["Straight to the gear you need", "Neutral"],
      explain: "Brake first, then select the gear you need directly.", src: P(28, "Note") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "down-accel",
      prompt: "Changing down to accelerate past a hazard, you should…", options: ["Keep pressure on the footbrake", "Brake until just before the clutch", "Keep some pressure on the gas as the clutch goes down", "Release the gas fully"], answer: 2,
      explain: "Under acceleration, keep some pressure on the gas pedal.", src: P(31, "Retention Q5 (answer c, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "2.4",
  number: "2.4",
  title: "Changing Gear",
  pages: [27, 31],
  intro: "Changing up and down, when to change, block changing, and why coasting is always wrong.",
  objectives: [
    "The procedures for changing up and down gears",
    "The reasons for changing gear",
    "Faults to avoid when using the gears",
  ],
  objectivesSrc: P(27, "Objectives"),
  mcqLink: { sectionId: "adi.sec.mechanics", label: "Basic Mechanics & Vehicle Maintenance" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...gears, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "gear-sense", icon: "⚙️", label: "Gear Sense", rule: { activity: "gears", min: 100 } },
    { id: "gear-specialist", icon: "🏆", label: "Gear Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
