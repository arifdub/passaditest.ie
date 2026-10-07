/*
  ===========================================================================
  BOOK 2 · UNIT 2.5 — BRAKING

  Source: "Theory Resource Workbook 2 of 4" (Driver Education Supplies),
  book pages 32–39, with the post-test model answers on page 92 and the
  retention-test answers on page 96 (1c 2b 3b 4d 5b 6b 7d 8d 9b 10d 11b
  12b 13c 14c 15a 16a 17b 18c 19b 20b 21c).

  Omitted retention questions (answer key unsafe):
  - Q17 ("thinking distance depends above all on…", keyed "the driver's
    reaction time"): p.34 says thinking distance is directly proportional
    to the speed of the vehicle AND the driver's reaction time, and "the
    speed of the vehicle" is also an option — two defensible answers.
  - Q18 ("braking distance depends above all on…", keyed "the speed of the
    vehicle"): the unit's own list (p.34; p.92 answer 9) puts the road
    surface, weather, brakes and tyres alongside speed, and "the condition
    of the road surface" is also an option — two defensible answers.
  - Q19 (30 v 60 km/h, keyed "four times the distance"): the book's own
    table gives 10.8 m at 30 km/h and 32.4 m at 60 km/h — about a third,
    which is option d, not b. The "four times" rule applies to braking
    distance alone, not the overall stop the question asks about.

  Kept with a note: Q20 keys "about 12 m" for the reaction distance at
  60 km/h; the table on p.33 gives 11.0 m — 12 m is the nearest option.

  The dry table on p.33 prints "50" on the 77.7 m row; it is the 100 km/h
  row (the wet table has 100 there), and is shown as 100 here.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 2, unit: "2.5", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "golden-rule": {
    title: "The golden rule",
    text: "Never drive so fast that you cannot stop well within the distance you can see to be clear. Braking isn't just knowing your stopping distances and pressing the pedal — a car's brakes are only as good as the driver using them, and safe braking depends above all on the driver.",
    src: P(32, "Unit introduction; p.35 As a rule; p.92 answers 1, 10"),
  },
  "power-assist": {
    title: "Power-assisted brakes",
    text: "Most modern cars have power-assisted brakes. If the engine isn't running the assist doesn't work: you can still stop, but you need more force on the pedal and the stopping distance is longer. Reserve power drops with each press, so don't pump the pedal — only on slippery surfaces, to keep steering control.",
    src: P(32, "Power-assisted brakes"),
  },
  "progressive": {
    title: "Progressive braking",
    text: "Light pressure on the footbrake, increasing it as the car slows, then easing off just before stopping so the car halts smoothly — little or no pressure as it actually stops. It goes hand in hand with anticipation, gives others time to react, prevents locked wheels and skidding, saves fuel and wear, and is more comfortable.",
    src: P(32, "Progressive braking; p.92 answers 3, 4"),
  },
  "normal-stop": {
    title: "Stopping normally",
    text: "Always the same, except in an emergency: check mirrors; decide whether a signal is needed; signal if necessary; right foot off the gas; light pressure on the footbrake; just before stopping, clutch fully down; ease the footbrake (unless on a gradient); handbrake; neutral; cancel the signal and take your feet off the pedals. Hands stay on the steering wheel. You don't necessarily need to change down before stopping.",
    src: P(32, "Stopping normally; p.92 answers 2, 5, 11"),
  },
  "weight": {
    title: "Braking and steering",
    text: "The harder you brake, the more weight shifts to the front — steering gets harder and you have less control. Harsh braking in a straight line can cause a rear-wheel skid; braking on a bend throws weight to the outside of the curve as well as to the front, where a serious skid could result. Avoid braking while steering.",
    src: P(32, "Braking and steering; p.35 How ABS works; Retention Q12"),
  },
  "stopping-distance": {
    title: "Stopping distance",
    text: "The distance travelled between seeing a hazard and stopping — thinking distance plus braking distance. Never get closer than your overall stopping distance. It depends on your perception time (¼–½ s), your reaction time (¼–¾ s), the vehicle's reaction time and its braking capability. Health, concentration, alcohol, drugs and tiredness affect the first two.",
    src: P(33, "Stopping distances; Stopping distances for cars; p.92 answers 6, 7"),
  },
  "tables": {
    title: "The numbers",
    text: "Dry: 30 km/h 10.8 m; 50 km/h 24 m; 60 km/h 32.4 m (11.0 thinking + 21.4 braking); 80 km/h 52.7 m; 100 km/h 77.7 m; 120 km/h 107.5 m. Wet: same thinking distance, longer braking — 60 km/h 48.5 m; 100 km/h 122.6 m (18.3 + 104.3). Double your speed and the braking distance is about four times as long.",
    src: P(33, "Stopping distance tables; p.34"),
  },
  "factors": {
    title: "Thinking and braking factors",
    text: "Thinking distance depends on how quickly you react — your health and concentration; the figures assume about two-thirds of a second for an alert driver. Braking distance depends on the driver, the speed, the condition of brakes, steering, suspension and tyres, the size and weight of the vehicle and its load, the gradient, the weather and the road surface.",
    src: P(34, "Thinking and braking distances; p.92 answers 8, 9"),
  },
  "speed-kills": {
    title: "Speed kills",
    text: "A pedestrian hit at 60 km/h: 9 in 10 are killed. At 50 km/h: 5 in 10. At 30 km/h: 1 in 10. That's why there are 30 km/h \"Slow Zones\" in housing estates. The rural speed limit sign — a white circle with black diagonal stripes — means use sensible judgement, but never exceed 80 km/h.",
    src: P(34, "Speed; Slow Zones; Rural speed limit sign; p.36"),
  },
  "separation": {
    title: "Separation distance",
    text: "The only safe gap is your overall stopping distance. Where that isn't practical in heavy traffic, never less than your thinking distance — and much more in poor conditions. A reasonable rule: 1 metre per km/h in good conditions, double in the wet. Judge it with the two-second rule. Someone too close behind? Slow gradually to increase the gap ahead.",
    src: P(34, "Separation distances; p.92 answer 13"),
  },
  "emergency": {
    title: "The emergency stop",
    text: "An emergency means imminent danger of injury to yourself or another road user — not animals. Most important: quick reactions and correct use of the controls. Both hands on the wheel; brake progressively and firmly without locking the wheels (don't ease off as it stops); clutch down just before stopping; leave the handbrake alone. Don't check mirrors or signal. Stopped: handbrake and neutral if not moving off; then mirrors and look over both shoulders before moving away.",
    src: P(35, "Emergency stop; p.34; p.92 answers 14–18, 21–24"),
  },
  "cadence-abs": {
    title: "Cadence braking and ABS",
    text: "Cadence braking (older cars without ABS or ESP): on a very slippery surface, pump the pedal — maximum pressure, release just before the wheels lock, quickly reapply. ABS stops the wheels locking so you keep steering control and removes the need for cadence braking — but ice, snow, fallen leaves and gravel still limit it. Locked wheels mean a skid, no steering and a longer stop.",
    src: P(35, "Cadence braking; ABS/ESP; How ABS works"),
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
    "Stop well within the distance you can see to be clear",
    "Light, firmer, ease off — progressive braking",
    "Stopping = thinking + braking; double the speed, four times the braking",
  ],
  cards: [
    {
      icon: "👁️",
      kicker: "The golden rule",
      title: "Stop within what you can see",
      visual: "golden-rule",
      body: [
        "Never drive so fast that you cannot stop well within the distance you can see to be clear.",
        "The braking system is only as good as the driver who uses it — safe braking depends above all on the driver.",
      ],
      concept: "golden-rule",
      src: P(32, "Unit introduction; p.92 answers 1, 10"),
    },
    {
      icon: "🔋",
      kicker: "Power-assisted brakes",
      title: "Engine off — harder pedal",
      ask: {
        prompt: "The engine cuts out while driving. The brakes…",
        options: ["Stop working", "Still work, but need more force and stop the car over a longer distance", "Work better"],
        answer: 1,
      },
      list: [
        "No engine, no power assist — press harder",
        "The stopping distance will be longer",
        "Reserve power drops with each press: don't pump the pedal",
        "Pump only to keep steering control on slippery surfaces",
      ],
      concept: "power-assist",
      src: P(32, "Power-assisted brakes"),
    },
    {
      icon: "📈",
      kicker: "Progressive braking",
      title: "Light, firmer, ease off",
      visual: "progressive-brake",
      list: [
        "Light pressure on the footbrake",
        "Increase it as the car slows",
        "Ease off just before stopping — little or no pressure as it halts",
      ],
      sections: [
        { head: "Why", list: ["Others have time to react", "No locked wheels or skids", "Saves fuel and wear and tear", "Comfortable for everyone"] },
      ],
      concept: "progressive",
      src: P(32, "Progressive braking; p.92 answers 3, 4"),
    },
    {
      icon: "🅿️",
      kicker: "Stopping normally",
      title: "The same drill every time",
      visual: "normal-stop",
      ask: {
        prompt: "What do you always do first before slowing or stopping?",
        options: ["Signal", "Check your mirrors", "Change down"],
        answer: 1,
      },
      list: [
        "Mirrors; decide on a signal; signal if necessary",
        "Right foot off the gas; light pressure on the footbrake",
        "Just before stopping: clutch fully down",
        "Ease the footbrake (unless on a gradient)",
        "Handbrake, neutral, cancel the signal, feet off the pedals",
      ],
      callout: "Hands on the wheel. You don't necessarily need to change down before stopping.",
      concept: "normal-stop",
      src: P(32, "Stopping normally; p.92 answers 2, 5, 11"),
    },
    {
      icon: "⚖️",
      kicker: "Braking and steering",
      title: "Weight goes forward — and outward",
      visuals: ["weight-transfer", "brake-bend"],
      list: [
        "Harder braking shifts weight to the front: steering is harder, less control",
        "Harsh braking in a straight line can cause a rear-wheel skid",
        "Braking on a bend throws weight to the outside too — a serious skid could result",
        "So avoid braking while steering",
      ],
      concept: "weight",
      src: P(32, "Braking and steering; p.35 How ABS works"),
    },
    {
      icon: "📏",
      kicker: "Stopping distance",
      title: "Thinking + braking",
      visual: "stopping-distance",
      ask: {
        prompt: "At 50 km/h on a dry road, the overall stopping distance is about…",
        options: ["10 m", "24 m", "52 m"],
        answer: 1,
      },
      list: [
        "Perception time — seeing it's a hazard: ¼–½ s",
        "Reaction time — foot from gas to brake: ¼–¾ s",
        "Vehicle reaction time — the brakes' condition",
        "Vehicle braking capability",
      ],
      callout: "Never get closer than your overall stopping distance.",
      concept: "stopping-distance",
      src: P(33, "Stopping distances; Stopping distances for cars"),
    },
    {
      icon: "🌧️",
      kicker: "Speed and wet roads",
      title: "Double the speed, four times the braking",
      visual: "stopping-wet-dry",
      list: [
        "60 km/h dry: 32.4 m — wet: 48.5 m",
        "100 km/h dry: 77.7 m — wet: 122.6 m",
        "The thinking distance stays the same; the braking distance grows",
        "Double your speed: about four times the braking distance",
      ],
      concept: "tables",
      src: P(33, "Stopping distance tables; p.34"),
    },
    {
      icon: "🧠",
      kicker: "What changes the distances",
      title: "You, the car, the road",
      sections: [
        { head: "Thinking distance", list: ["How quickly you react", "Health and concentration", "Alcohol, drugs, tiredness"] },
        { head: "Braking distance", list: ["Speed", "Brakes, steering, suspension, tyres", "Size, weight and load", "Gradient, weather, road surface"] },
      ],
      concept: "factors",
      src: P(34, "Thinking and braking distances; p.33; p.92 answers 8, 9"),
    },
    {
      icon: "🚸",
      kicker: "Speed kills",
      title: "5 km/h can be life or death",
      visuals: ["pedestrian-speed", "rural-speed-sign"],
      list: [
        "Pedestrian hit at 60 km/h: 9 in 10 killed",
        "At 50 km/h: 5 in 10 — at 30 km/h: 1 in 10",
        "30 km/h Slow Zones in housing estates",
        "Rural speed limit sign: sensible judgement, never above 80 km/h",
      ],
      callout: "From February 2025: 80 km/h on regional roads, 60 km/h on local rural roads.",
      concept: "speed-kills",
      src: P(34, "Speed; Slow Zones; Rural speed limit sign; p.36"),
    },
    {
      icon: "↔️",
      kicker: "Separation distance",
      title: "Keep your gap",
      visual: "two-second-rule",
      list: [
        "The only safe gap: your overall stopping distance",
        "Never less than your thinking distance",
        "1 metre per km/h in good conditions — double in the wet",
        "Use the two-second rule",
        "Tailgated? Slow gradually to increase the gap ahead",
      ],
      concept: "separation",
      src: P(34, "Separation distances; p.92 answer 13"),
    },
    {
      icon: "🛑",
      kicker: "Emergency stop",
      title: "Quick reactions, correct controls",
      visual: "emergency-stop",
      ask: {
        prompt: "In an emergency stop, which pedal first?",
        options: ["The clutch", "The footbrake", "Both together"],
        answer: 1,
      },
      sections: [
        { head: "You must", list: ["Keep both hands on the wheel", "Brake progressively and firmly — don't lock the wheels", "Clutch down just before stopping", "Leave the handbrake alone"] },
        { head: "Don't", list: ["Check mirrors or signal — it costs time and control"] },
        { head: "Once stopped", list: ["Not moving off? Handbrake and neutral", "Mirrors and look over both shoulders before moving away"] },
      ],
      callout: "An emergency: imminent danger of injury to people — not animals.",
      concept: "emergency",
      src: P(35, "Emergency stop; p.34; p.92 answers 14–18"),
    },
    {
      icon: "🧊",
      kicker: "Cadence braking and ABS",
      title: "Keep the wheels turning",
      visuals: ["cadence-braking", "abs-steer"],
      list: [
        "Cadence braking (no ABS/ESP): maximum pressure, release just before the wheels lock, reapply",
        "ABS stops the wheels locking, so you can still steer",
        "ABS removes the need for cadence braking",
        "Its limits: ice, snow, fallen leaves, gravel",
      ],
      concept: "cadence-abs",
      src: P(35, "Cadence braking; ABS/ESP; How ABS works"),
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
    { id: "r1", type: "flash", concept: "golden-rule", visual: "golden-rule",
      front: "What is the golden rule about stopping?",
      back: "Never drive so fast that you cannot stop well within the distance you can see to be clear ahead.", src: P(92, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "progressive",
      front: "What is progressive braking?",
      back: "Light pressure first, increased as the brakes act; then, when the car has slowed enough, easing off as it comes to a stop.", src: P(92, "Post-test answer 3") },
    { id: "r3", type: "flash", concept: "stopping-distance",
      front: "What is the overall stopping distance made up of?",
      back: "Thinking distance and braking distance.", src: P(92, "Post-test answer 7") },
    { id: "r4", type: "fill", concept: "tables", visual: "stopping-distance",
      before: "Double your speed and the braking distance is about", after: "as long.",
      options: ["four times", "twice", "three times", "the same"], answer: "four times",
      explain: "When you double the speed you multiply the braking distance by four.", src: P(34, "Speed") },
    { id: "r5", type: "truefalse", concept: "normal-stop",
      statement: "You must always change down through the gears before stopping.", answer: false,
      explain: "Not necessarily — be in the appropriate gear for the conditions.", src: P(92, "Post-test answer 11") },
    { id: "r6", type: "flash", concept: "emergency",
      front: "With regard to stopping, what is an \"emergency\"?",
      back: "Imminent danger of injury to yourself or another road user (not animals).", src: P(92, "Post-test answer 14") },
    { id: "r7", type: "flash", concept: "emergency",
      front: "Which wheels does the handbrake usually work on?",
      back: "The rear wheels.", src: P(92, "Post-test answer 16") },
    { id: "r8", type: "truefalse", concept: "emergency",
      statement: "Check your mirrors before an emergency stop.", answer: false,
      explain: "No — it could cost valuable time or loss of control.", src: P(92, "Post-test answer 23; p.35") },
    { id: "r9", type: "fill", concept: "separation", visual: "two-second-rule",
      before: "In good conditions, a reasonable gap is", after: "of speed — double it in the wet.",
      options: ["1 metre for every km/h", "1 metre for every 10 km/h", "half a metre per km/h", "one car length"], answer: "1 metre for every km/h",
      explain: "1 m per km/h in good conditions; double in wet or suspect conditions — or use the two-second rule.", src: P(34, "Separation distances") },
    { id: "r10", type: "flash", concept: "emergency",
      front: "Why leave the clutch until just before stopping?",
      back: "You keep the help of engine braking and reduce the risk of skidding.", src: P(92, "Post-test answer 21") },
    { id: "r11", type: "flash", concept: "factors",
      front: "What can cause the wheels to lock?",
      back: "Braking too hard for the conditions.", src: P(92, "Post-test answer 19") },
  ],
};

/* ---------------------------------------------------------------------------
   3. BRAKE SMART — recognition.
   --------------------------------------------------------------------------- */
const brakes = {
  id: "brakes",
  kind: "items",
  mode: "matching",
  title: "Brake Smart",
  blurb: "Spot it, sort it — distances, skids and stops",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "cadence-abs",
      prompt: "Which picture shows cadence braking?",
      options: ["cadence-braking", "progressive-brake"], answer: 0,
      names: ["Pump: press, release just before lock, reapply", "One smooth press, easing off"],
      explain: "Cadence braking pumps the pedal, releasing just before the wheels lock.", src: P(35, "Cadence braking") },
    { id: "k2", type: "picture", label: "Spot it", concept: "weight",
      prompt: "Which picture shows where the weight goes when you brake?",
      options: ["weight-transfer", "brake-bend", "abs-steer", "golden-rule"], answer: 0,
      names: ["Weight onto the front", "Braking on a bend", "ABS", "Golden rule"],
      explain: "The harder you brake, the more weight is shifted to the front.", src: P(32, "Braking and steering") },
    {
      id: "k3", type: "sort", concept: "factors",
      prompt: "Mainly affects thinking distance or braking distance?",
      categories: [
        { id: "think", label: "Thinking" },
        { id: "brake", label: "Braking" },
      ],
      cards: [
        { text: "Tiredness", cat: "think" },
        { text: "Lack of concentration", cat: "think" },
        { text: "Worn tyres", cat: "brake" },
        { text: "A wet road surface", cat: "brake" },
        { text: "A heavy load", cat: "brake" },
      ],
      explain: "Thinking distance is about you and how quickly you react; braking distance about the car, its load and the road.", src: P(34, "Thinking and braking distances; p.33") },
    {
      id: "k4", type: "sort", concept: "emergency",
      prompt: "In an emergency stop — do or don't?",
      categories: [
        { id: "do", label: "Do" },
        { id: "dont", label: "Don't" },
      ],
      cards: [
        { text: "Both hands on the wheel", cat: "do" },
        { text: "Clutch down just before stopping", cat: "do" },
        { text: "Check the mirrors", cat: "dont" },
        { text: "Signal", cat: "dont" },
        { text: "Pull the handbrake", cat: "dont" },
      ],
      explain: "Quick reactions and correct use of the controls — leave the mirrors, signal and handbrake alone.", src: P(35, "Emergency stop") },
    { id: "k5", type: "picture", label: "Spot it", concept: "speed-kills",
      prompt: "Which sign means: use sensible judgement, but never more than 80 km/h?",
      options: ["rural-speed-sign", "pedestrian-speed"], answer: 0,
      names: ["Rural speed limit sign", "Speed and pedestrians"],
      explain: "White circle, black diagonal stripes — used on narrow country roads.", src: P(34, "Rural speed limit sign") },
    { id: "k6", type: "picture", label: "Spot it", concept: "tables",
      prompt: "Which picture compares the same speed on dry and wet roads?",
      options: ["stopping-wet-dry", "stopping-distance", "progressive-brake", "cadence-braking"], answer: 0,
      names: ["Dry v wet", "Dry, by speed", "Progressive braking", "Cadence braking"],
      explain: "Same thinking distance, much longer braking distance in the wet.", src: P(33, "Stopping distance tables") },
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
  blurb: "Speeds, distances and terms",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "tables",
      prompt: "Match the dry-road speed to its stopping distance.",
      pairs: [
        ["30 km/h", "10.8 m"],
        ["50 km/h", "24 m"],
        ["80 km/h", "52.7 m"],
        ["100 km/h", "77.7 m"],
      ],
      explain: "Approximate stopping distances in dry conditions.", src: P(33, "Stopping distance in dry conditions") },
    {
      id: "m2", type: "match", concept: "speed-kills", visual: "pedestrian-speed",
      prompt: "Match the impact speed to the pedestrians killed.",
      pairs: [
        ["60 km/h", "9 in 10"],
        ["50 km/h", "5 in 10"],
        ["30 km/h", "1 in 10"],
      ],
      explain: "Speed kills — a message that should be ingrained in all new drivers.", src: P(34, "Speed") },
    {
      id: "m3", type: "match", concept: "cadence-abs",
      prompt: "Match the term to its meaning.",
      pairs: [
        ["Progressive braking", "Light, firmer, ease off"],
        ["Cadence braking", "Pump just short of locking"],
        ["ABS", "Wheels don't lock — you can steer"],
        ["Thinking distance", "Seeing the hazard to pressing the brake"],
      ],
      explain: "Different techniques — one goal: stopping under control.", src: P(32, "Progressive braking; p.35") },
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
  blurb: "Normal and emergency stops",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "normal-stop", visual: "normal-stop",
      prompt: "Stopping normally — in order.",
      steps: ["Check mirrors", "Signal if necessary", "Right foot off the gas", "Light pressure on the footbrake", "Clutch fully down just before stopping", "Ease the footbrake", "Handbrake on", "Select neutral"],
      explain: "The drill for stopping is always the same, except in an emergency.", src: P(32, "Stopping normally") },
    { id: "p2", type: "order", concept: "progressive", visual: "progressive-brake",
      prompt: "Progressive braking — in order.",
      steps: ["Light pressure on the footbrake", "Increase pressure as the car slows", "Ease off just before stopping", "Little or no pressure as it halts"],
      explain: "The car comes to a halt smoothly.", src: P(32, "Progressive braking") },
    { id: "p3", type: "order", concept: "emergency", visual: "emergency-stop",
      prompt: "The emergency stop — in order.",
      steps: ["Brake progressively and firmly", "Firm grip on the steering wheel", "Clutch down just before the car stops", "Handbrake and neutral if not moving off", "Mirrors and look over both shoulders"],
      explain: "Then prepare to move off — and look all around first.", src: P(35, "Emergency stop procedure") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "emergency",
      scene: "🐕 A dog runs into the road ahead of your pupil.",
      prompt: "What should they do?",
      options: ["Perform an emergency stop", "Check mirrors and try to stop safely", "Ignore it and drive on", "Stop and confront the owner"], answer: 1,
      explain: "An emergency means imminent danger of injury to people — not animals. Check mirrors and stop safely if you can.", src: P(38, "Retention Q6 (answer b, p.96); p.92 answer 14") },
    { id: "s2", type: "choice", label: "Scenario", concept: "separation", visual: "two-second-rule",
      scene: "🚙 A car behind is following your pupil far too closely.",
      prompt: "What's the safe response?",
      options: ["Dab the brakes to warn them", "Brake firmly to teach them a lesson", "Slow gradually to increase the distance from the vehicle ahead", "Speed up to get away"], answer: 2,
      explain: "Give yourself more room in front, so you can brake gently if you need to.", src: P(39, "Retention Q14 (answer c, p.96); p.92 answer 13") },
    { id: "s3", type: "choice", label: "Scenario", concept: "weight", visual: "brake-bend",
      scene: "↪️ Your pupil enters a bend too fast and starts braking hard mid-corner.",
      prompt: "What's the risk?",
      options: ["None — it's always safe", "Weight thrown to the outside and the front — a serious skid could result", "Only tyre wear", "The engine stalls"], answer: 1,
      explain: "Braking on a bend throws weight outward and forward. Brake before the bend, on the straight.", src: P(32, "Braking and steering") },
    { id: "s4", type: "choice", label: "Scenario", concept: "power-assist",
      scene: "⚡ The engine cuts out as your pupil drives along. They start pumping the brake pedal.",
      prompt: "What do you tell them?",
      options: ["Keep pumping", "Don't pump — press firmly; it needs more force and takes longer to stop", "Pull the handbrake hard", "Restart the engine first"], answer: 1,
      explain: "Without power assist the brakes still work, with more force. Pumping uses up the reserve.", src: P(32, "Power-assisted brakes") },
    { id: "s5", type: "choice", label: "Scenario", concept: "tables", visual: "stopping-wet-dry",
      scene: "🌧️ It starts to rain on a 100 km/h road. Your pupil keeps the same gap as in the dry.",
      prompt: "What should they know?",
      options: ["Nothing changes", "Stopping at 100 km/h goes from about 78 m to about 123 m — double the gap", "Only the thinking distance increases", "ABS cancels out the rain"], answer: 1,
      explain: "Same thinking distance, much longer braking distance. Double the gap in wet conditions.", src: P(33, "Stopping distance tables; p.34 Separation distances") },
    { id: "s6", type: "choice", label: "Scenario", concept: "emergency", visual: "emergency-stop",
      scene: "🧒 A child runs out. Your pupil stops in time and wants to drive straight off.",
      prompt: "What first?",
      options: ["Just go", "Check mirrors and look over both shoulders", "Sound the horn", "Reverse"], answer: 1,
      explain: "You may be stopped mid-lane: cyclists or motorcyclists could be passing on the left, pedestrians crossing.", src: P(92, "Post-test answers 17, 18") },
    { id: "s7", type: "choice", label: "Scenario", concept: "cadence-abs", visual: "abs-steer",
      scene: "🍂 Your pupil's car has ABS. They say they can brake as late as they like on wet leaves.",
      prompt: "Your reply?",
      options: ["True — ABS stops any skid", "ABS keeps steering control, but has limits on ice, snow, leaves and gravel", "ABS only works on dry roads", "Pump the brakes instead"], answer: 1,
      explain: "Vehicle technology has its limits.", src: P(35, "ABS/ESP") },
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
  blurb: "From open road to an emergency",
  xpPer: 10,
  situation: "🛣️ Your pupil drives at 80 km/h on a dry country road, slows for lights in a village, then meets an emergency.",
  items: [
    { id: "w1", type: "choice", step: "Open road", concept: "golden-rule", visual: "golden-rule", prompt: "A blind bend ahead. Their speed should let them…",
      options: ["Stop just after the bend", "Stop well within the distance they can see to be clear", "Brake hard in the bend", "Keep up with traffic"], answer: 1,
      explain: "The golden rule.", src: P(32, "Unit introduction") },
    { id: "w2", type: "choice", step: "Following", concept: "separation", prompt: "The minimum gap behind the car in front, in heavy traffic?",
      options: ["One car length", "Never less than their thinking distance", "Half the stopping distance", "No minimum"], answer: 1,
      explain: "Ideally the overall stopping distance; never less than the thinking distance.", src: P(34, "Separation distances") },
    { id: "w3", type: "choice", step: "Village lights", concept: "progressive", prompt: "Braking for the red light, the footbrake should be…",
      options: ["Pressed harder and harder until the car stops", "Light, increasing as the car slows, then eased as it stops", "Lighter and lighter from the start", "Pumped"], answer: 1,
      explain: "Light pressure to begin with, increasing as the vehicle slows, and reduced as the car stops.", src: P(38, "Retention Q4 (answer d, p.96)") },
    { id: "w4", type: "choice", step: "Stopped", concept: "normal-stop", prompt: "Having just stopped, before anything else they should…",
      options: ["Switch off the engine", "Apply the handbrake", "Check mirrors", "Release the footbrake"], answer: 1,
      explain: "Handbrake on, then neutral.", src: P(38, "Retention Q2 (answer b, p.96)") },
    { id: "w5", type: "choice", step: "Emergency", concept: "emergency", prompt: "A child steps out. Their hands should be…",
      options: ["One on the gear lever", "Both on the steering wheel", "One on the handbrake", "On the horn"], answer: 1,
      explain: "Steering is harder to control, and they may need to steer to avoid a collision or correct a skid.", src: P(92, "Post-test answer 22") },
    { id: "w6", type: "choice", step: "Emergency", concept: "emergency", prompt: "The clutch goes down…",
      options: ["At the same time as the brake", "Just before the car stops", "Before braking", "Not at all"], answer: 1,
      explain: "Keep engine braking help and reduce the risk of skidding.", src: P(38, "Retention Q5 (answer b, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 96. Q17, Q18 and Q19 are omitted
   (see header).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(n <= 10 ? 38 : 39, `Retention test Q${n}; answer p.96`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "When stopping in an emergency, a driver", ["should never brake progressively", "must always brake harder", "should follow the rule of progressive braking", "should press the clutch pedal down at the same time"], 2, "emergency"),
    R(2, "Having just stopped their vehicle, a driver should always, before taking any further action", ["switch off the engine", "apply the handbrake", "check their mirrors", "release the footbrake"], 1, "normal-stop"),
    R(3, "When slowing down to stop on approach to traffic lights", ["gear changing is recommended", "you should always be in the appropriate gear for the conditions", "you should not change gear", "you must change down the gears in order"], 1, "normal-stop"),
    R(4, "The best description of using the footbrake in normal stop control is to", ["apply progressively harder pressure until the car stops", "apply light pressure, increasing the pressure as the car stops", "apply progressively lighter pressure as the car comes to a halt", "apply light pressure to begin with, increasing it as the vehicle slows and reducing it as the car stops"], 3, "progressive", "progressive-brake"),
    R(5, "The correct sequence when stopping in an emergency is to press the footbrake and", ["the clutch pedal at the same time", "press the clutch pedal down just before stopping", "apply the handbrake to avoid skidding", "sound the horn"], 1, "emergency"),
    R(6, "If a dog ran into the road ahead, you should", ["perform an emergency stop", "check your mirrors and try to stop safely", "ignore it and drive on", "stop and chastise the owner"], 1, "emergency"),
    R(7, "When braking in forward motion, extra weight is thrown onto", ["initially the rear wheels, thereafter the front wheels", "the rear wheels", "all four wheels", "the front wheels"], 3, "weight", "weight-transfer"),
    R(8, "Before moving off after an emergency stop, a driver should", ["check over their left and right shoulders only", "look over their right shoulder", "keep their eyes on the road ahead", "take effective all-around observation"], 3, "emergency"),
    R(9, "The correct description of cadence braking is to pump the footbrake so that", ["the brake pedal is released when the wheels lock", "the brake pedal is released as the wheels are about to lock", "the brake pedal is released when the clutch pedal is pressed", "the anti-steering lock system takes control of the vehicle"], 1, "cadence-abs", "cadence-braking"),
    R(10, "Anti-lock braking systems (ABS) are designed", ["to make it impossible to skid", "to enhance your driving skills", "to stop the car automatically in an emergency", "to make cadence braking unnecessary"], 3, "cadence-abs"),
    R(11, "Anti-lock brakes are fitted as a safety feature and can", ["prevent skidding on ice", "help with steering control when braking", "make a vehicle look sportier", "give the driver complete security"], 1, "cadence-abs", "abs-steer"),
    R(12, "On braking whilst steering, 'Driving Essential Skills' recommends that this practice", ["should only be done if your car has ABS fitted", "should be avoided", "will improve your road holding", "will always result in a skid"], 1, "weight", "brake-bend"),
    R(13, "With regard to skidding, the best system of car control is", ["cadence braking", "de-clutching in good time", "avoiding the risk altogether", "retro-fitting anti-lock brakes"], 2, "factors"),
    R(14, "Whilst driving, you notice a vehicle behind is following too closely. From a safety point of view you should", ["dab the footbrake to warn the driver to keep back", "brake firmly to teach the other driver a lesson", "increase your distance from the vehicle ahead", "increase the distance between you"], 2, "separation"),
    R(15, "Safe and controlled braking depends above all on", ["the driver", "the vehicle", "the road", "the weather conditions"], 0, "golden-rule"),
    R(16, "The thinking distance, as part of the overall stopping distance, is the distance travelled between", ["seeing the hazard, reacting and pressing the brake", "applying the footbrake and stopping", "seeing the hazard and beginning to react", "seeing the hazard and stopping the car"], 0, "stopping-distance"),
    R(20, "The reaction distance at 60 km/h for an alert driver is approximately", ["9 metres", "12 metres", "20 metres", "24 metres"], 1, "tables", "stopping-distance"),
    R(21, "The braking distance at 100 km/h for an alert driver on a wet road is approximately", ["150 m", "166 m", "104.3 m", "121 m"], 2, "tables", "stopping-wet-dry"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "stopping-distance",
      prompt: "Stopping distance is…", options: ["Braking distance only", "Thinking distance plus braking distance", "Thinking distance only", "The two-second gap"], answer: 1,
      explain: "The distance between seeing the hazard and stopping the car.", src: P(33, "Stopping distances") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "emergency",
      prompt: "Which picture shows an emergency stop?", options: ["emergency-stop", "normal-stop", "golden-rule", "abs-steer"], answer: 0,
      names: ["Emergency stop", "Stopping normally", "Golden rule", "ABS"],
      explain: "A child in the road: imminent danger of injury.", src: P(35, "Emergency stop") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "progressive",
      statement: "With progressive braking there should be little or no pressure on the footbrake as the car actually stops.", answer: true,
      explain: "Ease off just before stopping so the car halts smoothly.", src: P(32, "Progressive braking") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "factors",
      scene: "🥱 Your pupil had a late night and feels tired.",
      prompt: "Which distance gets longer first?", options: ["Braking distance", "Thinking distance", "Neither", "Only in the wet"], answer: 1,
      explain: "Perception and reaction time are down to you — health, concentration, tiredness.", src: P(33, "Stopping distances for cars") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "tables",
      prompt: "Match the stop to its distance.", pairs: [["60 km/h dry", "32.4 m"], ["60 km/h wet", "48.5 m"], ["100 km/h wet", "122.6 m"]],
      explain: "Wet roads add braking distance, not thinking distance.", src: P(33, "Stopping distance tables") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "emergency",
      prompt: "Emergency stop:", steps: ["Brake firmly", "Clutch just before stopping", "Handbrake and neutral", "Look all around"],
      explain: "Then prepare to move off.", src: P(35, "Emergency stop procedure") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "speed-kills", visual: "pedestrian-speed",
      scene: "🏘️ Your pupil drives at 50 km/h through a housing estate with children playing.",
      prompt: "Why slow to 30?", options: ["To save fuel", "A pedestrian hit at 30 km/h: 1 in 10 killed — at 50: 5 in 10", "It's quieter", "Only because of speed bumps"], answer: 1,
      explain: "5 km/h can be the difference between life and death.", src: P(34, "Speed; Slow Zones") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "weight",
      prompt: "Braking in forward motion throws extra weight onto…", options: ["The rear wheels", "All four wheels", "The front wheels", "The rear, then the front"], answer: 2,
      explain: "Weight goes forward — so rear-wheel skids are more common.", src: P(38, "Retention Q7 (answer d, p.96)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "weight",
      prompt: "Your pupil asks why you want them to slow down before the bend. Which picture explains it?", options: ["brake-bend", "golden-rule", "cadence-braking"], answer: 0,
      names: ["Braking on a bend", "The golden rule", "Cadence braking"],
      explain: "Braking while steering throws weight outward and forward — a serious skid could result. Brake on the straight.", src: P(32, "Braking and steering") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "golden-rule",
      prompt: "Safe and controlled braking depends above all on…", options: ["The driver", "The vehicle", "The road", "The weather"], answer: 0,
      explain: "The braking system is only as good as the driver who uses it.", src: P(39, "Retention Q15 (answer a, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "2.5",
  number: "2.5",
  title: "Braking",
  pages: [32, 39],
  intro: "Progressive braking, the stopping drill, stopping distances, and the emergency stop.",
  objectives: [
    "What is meant by \"progressive\" braking, and how to do it",
    "The drill for stopping normally, under control",
    "How road speed relates to minimum stopping distances",
    "The factors affecting stopping distances",
    "The procedure for stopping in an emergency",
  ],
  objectivesSrc: P(32, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...brakes, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "brake-smart", icon: "🛑", label: "Brake Smart", rule: { activity: "brakes", min: 100 } },
    { id: "braking-specialist", icon: "🏆", label: "Braking Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
