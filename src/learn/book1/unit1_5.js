/*
  ===========================================================================
  BOOK 1 · UNIT 1.5 — DEALING WITH HILLS

  Source: "Driving Procedures & Road Safety — Resource Workbook, Book 1"
  (Driver Education Supplies), book pages 49–52, with the post-test model
  answers on page 85 (headed there "Overtaking on Gradients") and the
  retention-test answers on page 88 (1c 2d 3a 4d 5b 6b 7b 8d 9c 10a).

  The answer key agrees with the unit text throughout, so all ten
  retention questions are used. Q1 (the 5% ascent sign) comes from the
  book's test, not the unit text, and is kept as the book sets it.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 1, unit: "1.5", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why-hills": {
    title: "Why hills matter",
    text: "Gradients affect the handling and performance of the car, its engine and its brakes. Use MSPSL early, and know how to control the car when moving and secure it properly when stopped.",
    src: P(49, "Unit introduction"),
  },
  "warning": {
    title: "Advance warning",
    text: "Warning signs are usually placed well before steeper hills. On uphill slopes you may see a steep hill sign — expect slow-moving heavy vehicles ahead. A very steep slope may have an extra information sign.",
    src: P(49, "Summaries — Advance Warning"),
  },
  "uphill": {
    title: "Going uphill",
    text: "On approach: check mirrors, assess the slope, look out for slow-moving and heavy vehicles, and consider a lower gear — best to be in the most appropriate gear before you start the climb. Compared with a level road it is harder to gain or keep speed; your brakes slow you sooner, so you can brake later; pressing the clutch or releasing the gas slows you more and quicker; change gear promptly; and change down before a bend.",
    src: P(49, "Going Uphill; Remember"),
  },
  "downhill": {
    title: "Going downhill",
    text: "On approach: check mirrors, assess the slope, and select a low gear to help control your speed. Compared with a level road your brakes take longer, so brake sooner; pressing the clutch makes the car gain speed; releasing the gas slows you less; change gear promptly to avoid building up too much speed. The steeper the hill, the lower the gear.",
    src: P(50, "Going Downhill; Remember"),
  },
  "engine-braking": {
    title: "Engine braking",
    text: "A low gear going downhill gives a greater degree of engine braking and control, so you don't rely on the footbrake.",
    src: P(85, "Post-test answer 3"),
  },
  "brake-fade": {
    title: "Brake fade",
    text: "Brakes used continually downhill overheat and become less effective at stopping the vehicle. Don't rely on the brakes — use the correct combination of lower gears and braking.",
    src: P(85, "Post-test answers 6, 8"),
  },
  "separation": {
    title: "Separation on a hill",
    text: "Increase your separation distance: the vehicle ahead could slow down suddenly. Holding back means you won't have to stop every time the traffic does, and downhill it gives you more time to stop and more warning to traffic behind.",
    src: P(50, "On the Hill"),
  },
  "overtaking": {
    title: "Overtaking on hills",
    text: "Overtaking is difficult. Going uphill, oncoming traffic is faster and less able to slow down. Going downhill, you must not make oncoming traffic slow down, and the vehicle you're overtaking may build up more speed than you expect.",
    src: P(50, "On the Hill; p.85 answer 2"),
  },
  "brow": {
    title: "Hazards: the brow and dead ground",
    text: "Use MSPSL in good time and position early for the best view. At the brow of a hill your view ahead is restricted — keep well left and ease off the gas. Beware of oncoming traffic overtaking. \"Dead ground\" is a dip that hides oncoming traffic from your view — you must not overtake on approach to it.",
    src: P(50, "Hazards on Hills"),
  },
  "parking": {
    title: "Parking on a hill",
    text: "Avoid it if possible — it's harder and needs more room, so leave a bigger gap. Facing downhill: front wheels to the left (kerb or not), handbrake on, reverse gear. Facing uphill: with a kerb, wheels to the right; without, to the left; handbrake on, first gear. Automatic: select park.",
    src: P(50, "Parking on a Hill"),
  },
  "never-park": {
    title: "Never park…",
    text: "At a corner, a bend, the brow of a hill or on a hump-back bridge, or where there is a sharp dip in the road.",
    src: P(49, "You must never park"),
  },
  "moving-off": {
    title: "Moving off on a hill",
    text: "Downhill, the weight of the car helps you move away, so it's easier and the car is harder to stall — and first gear isn't always needed: second may be the most appropriate. Uphill, your car won't gain speed so quickly, so you need a larger gap in the traffic.",
    src: P(85, "Post-test answers 4, 5; retention Q7"),
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
    "Get into the most appropriate gear BEFORE the hill — up or down",
    "Downhill: low gear for engine braking; brake sooner; don't rely on the brakes",
    "Never overtake approaching dead ground or the brow of a hill",
  ],
  cards: [
    {
      icon: "⛰️",
      kicker: "Dealing with hills",
      title: "Gradients change everything",
      visuals: ["hill-up", "hill-down"],
      body: [
        "Driving on a gradient affects the handling and performance of the car, its engine and its braking system.",
        "As an instructor you must teach the particular dangers of hills, the importance of early MSPSL, and how to control the car moving — and secure it properly when stopped.",
      ],
      think: ["⚙️ Am I in the right gear before the slope?", "🛑 Will my brakes work sooner or later here?", "👀 What can't I see over the top?"],
      src: P(49, "Unit introduction"),
    },
    {
      icon: "⚠️",
      kicker: "Advance warning",
      title: "Read the signs",
      body: [
        "Warning signs are usually placed well before steeper hills, uphill or downhill.",
        "On uphill slopes you may also see a steep hill sign — expect slow-moving heavy vehicles ahead. A very steep slope may carry an extra information sign.",
      ],
      concept: "warning",
      src: P(49, "Summaries — Advance Warning"),
    },
    {
      icon: "⬆️",
      kicker: "Going uphill",
      title: "Gear down before the climb",
      visual: "hill-up",
      ask: {
        prompt: "Going uphill, compared with a level road, your brakes will stop the car…",
        options: ["Sooner — so you can brake later", "Later — so brake earlier", "Exactly the same"],
        answer: 0,
      },
      sections: [
        { head: "On approach", list: ["Check your mirrors", "Assess the slope", "Look out for slow-moving and heavy vehicles", "Consider a lower gear — best to be in it before you start the climb"] },
        { head: "Compared with a level road", list: ["Harder to increase or keep your speed", "Your brakes slow you sooner — you can brake later", "Clutch down or easing off the gas slows you more, and quicker", "Change gear promptly so you don't lose too much speed", "Change down before a bend — cornering is harder work for the engine"] },
      ],
      concept: "uphill",
      src: P(49, "Going Uphill; Remember"),
    },
    {
      icon: "⬇️",
      kicker: "Going downhill",
      title: "Low gear, early",
      visual: "hill-down",
      ask: {
        prompt: "Going downhill, you press the clutch down to change gear. The car…",
        options: ["Slows down", "Speeds up", "Stays the same"],
        answer: 1,
      },
      sections: [
        { head: "On approach", list: ["Check your mirrors", "Assess the slope", "Select a low gear to help control your speed"] },
        { head: "Compared with a level road", list: ["Your brakes take longer — brake sooner", "Clutch down makes the car gain speed", "Easing off the gas slows you less than usual", "Change gear promptly so you don't build up too much speed", "The steeper the hill, the lower the gear"] },
      ],
      concept: "downhill",
      src: P(50, "Going Downhill; Remember"),
    },
    {
      icon: "🔥",
      kicker: "Brakes",
      title: "Engine braking and brake fade",
      visual: "brake-fade",
      body: [
        "A low gear going downhill gives a greater degree of engine braking and control — so you avoid over-using the footbrake.",
        "Brake fade: brakes used all the way down overheat and become less effective at stopping you. Don't rely on the brakes as your main way to control speed downhill.",
      ],
      callout: "Control speed downhill with the correct combination of lower gears and braking.",
      concept: "brake-fade",
      src: P(50, "Remember; p.85 answers 3, 6, 8"),
    },
    {
      icon: "↕️",
      kicker: "On the hill",
      title: "More space, careful overtaking",
      visual: "following-distance",
      sections: [
        { head: "Separation", list: ["Increase your separation distance — the vehicle ahead could slow suddenly", "Holding back means you don't stop every time it does", "Downhill, it gives more time to stop and more warning to traffic behind"] },
        { head: "Overtaking", list: ["Overtaking is difficult", "Uphill: oncoming traffic is faster and less able to slow down", "Downhill: you must not make oncoming traffic slow down", "The vehicle you overtake may build up more speed than you expect"] },
      ],
      concept: "separation",
      src: P(50, "On the Hill"),
    },
    {
      icon: "🙈",
      kicker: "Hazards on hills",
      title: "The brow and dead ground",
      visuals: ["brow", "dead-ground"],
      list: [
        "Use MSPSL in good time; position early for the best view without slowing others",
        "At the brow of a hill your view of the road ahead is restricted",
        "Keep well to the left and ease off the gas — the engine has less work to do",
        "Beware of oncoming traffic — someone could be overtaking",
      ],
      callout: "\"Dead ground\" is a dip that hides oncoming traffic. You must not overtake on approach to it.",
      concept: "brow",
      src: P(50, "Hazards on Hills"),
    },
    {
      icon: "🅿️",
      kicker: "Parking on a hill",
      title: "Which way do the wheels go?",
      visuals: ["hill-park:up-kerb", "hill-park:down-kerb"],
      body: ["Avoid parking on a hill if you can: it's harder, needs more room, and you should leave a bigger gap so others can manoeuvre round you."],
      sections: [
        { head: "Facing downhill", list: ["Front wheels to the LEFT — kerb or no kerb", "Handbrake on", "Reverse gear (automatic: park)"] },
        { head: "Facing uphill", list: ["With a kerb — front wheels to the RIGHT", "Without a kerb — front wheels to the LEFT", "Handbrake on", "First gear (automatic: park)"] },
      ],
      concept: "parking",
      src: P(50, "Parking on a Hill"),
    },
    {
      icon: "🚫",
      kicker: "Never",
      title: "Where you must never park",
      visual: "brow",
      list: ["At a corner or a bend", "On the brow of a hill", "On a hump-back bridge", "Where there is a sharp dip in the road"],
      concept: "never-park",
      src: P(49, "You must never park"),
    },
    {
      icon: "🚦",
      kicker: "Moving off",
      title: "Moving off on a slope",
      sections: [
        { head: "Downhill", list: ["The weight of the car helps you move away — easier, and harder to stall", "First gear isn't a must: second may be the most appropriate"] },
        { head: "Uphill", list: ["Your car won't gain speed so quickly", "So you need a larger gap in the traffic behind"] },
      ],
      concept: "moving-off",
      src: P(85, "Post-test answers 4, 5; retention Q7"),
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
    { id: "r1", type: "flash", concept: "downhill", visual: "hill-down",
      front: "Does the car run quicker or slower if you de-clutch going downhill?",
      back: "Quicker.", src: P(51, "Post-test Q1; answer p.85") },
    { id: "r2", type: "flash", concept: "engine-braking",
      front: "Why use a low gear going downhill?",
      back: "It gives a greater degree of engine braking and control.", src: P(51, "Post-test Q3; answer p.85") },
    { id: "r3", type: "truefalse", concept: "moving-off",
      statement: "You must always use first gear when moving off downhill.", answer: false,
      explain: "No — when moving off downhill, second gear may be the most appropriate.", src: P(51, "Post-test Q5; answer p.85") },
    { id: "r4", type: "fill", concept: "downhill",
      before: "The steeper the hill, the", after: "the gear.",
      options: ["lower", "higher", "faster", "longer"], answer: "lower",
      explain: "Always select a low gear as you approach the hill to help control your speed.", src: P(50, "Remember") },
    { id: "r5", type: "choice", label: "Identify the correct rule", concept: "brake-fade", visual: "brake-fade",
      prompt: "What is brake fade?",
      options: ["Worn brake pads", "Brakes overheating with continued use and becoming less effective", "Brake lights not working", "The handbrake slipping"], answer: 1,
      explain: "Brakes may overheat with continued use and become less effective at stopping your vehicle.", src: P(51, "Post-test Q8; answer p.85") },
    { id: "r6", type: "truefalse", concept: "uphill",
      statement: "Going uphill, it is best to get into the most appropriate gear before you start the climb.", answer: true,
      explain: "It is always best practice to get into the most appropriate gear before you commence the climb.", src: P(49, "Side note") },
    { id: "r7", type: "flash", concept: "overtaking", visual: "hill-up",
      front: "Why be especially careful of oncoming traffic when overtaking uphill?",
      back: "Traffic coming downhill towards you is nearly always going faster than you, and is less able to slow or stop quickly.",
      src: P(51, "Post-test Q2; answer p.85") },
    { id: "r8", type: "fill", concept: "brow", visual: "dead-ground",
      before: "A dip in the road that hides oncoming traffic is called", after: ".",
      options: ["dead ground", "a blind spot", "a brow", "a camber"], answer: "dead ground",
      explain: "\"Dead ground\" is a dip on a hill which hides oncoming traffic — never overtake on approach to it.", src: P(50, "Hazards on Hills") },
    { id: "r9", type: "flash", concept: "moving-off",
      front: "Why is moving off downhill easier?",
      back: "The weight of the car helps you move away — gas and clutch are easier and the car is harder to stall.",
      src: P(51, "Post-test Q4; answer p.85") },
  ],
};

/* ---------------------------------------------------------------------------
   3. PARK IT RIGHT — recognition: picture questions and sorts.
   --------------------------------------------------------------------------- */
const PARK = ["hill-park:up-kerb", "hill-park:up-nokerb", "hill-park:down-kerb", "hill-park:down-nokerb"];
const PARK_NAMES = ["Uphill, kerb: wheels right", "Uphill, no kerb: wheels left", "Downhill, kerb: wheels left", "Downhill, no kerb: wheels left"];

const parking = {
  id: "parking",
  kind: "items",
  mode: "matching",
  title: "Park It Right",
  blurb: "Wheels, gears and the hill — spot and sort",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "parking",
      prompt: "Facing UPHILL beside a kerb. Which is parked correctly?",
      options: [PARK[0], "hill-park:up-nokerb"], answer: 0, names: [PARK_NAMES[0], "Wheels left — wrong with a kerb uphill"],
      explain: "Facing uphill with a kerb: front wheels to the right, handbrake on, first gear.", src: P(50, "Facing Uphill") },
    { id: "k2", type: "picture", label: "Spot it", concept: "brow",
      prompt: "Which picture shows dead ground?",
      options: ["dead-ground", "brow", "hill-up", "hill-down"], answer: 0,
      names: ["Dead ground", "Brow of a hill", "Going uphill", "Going downhill"],
      explain: "Dead ground is a dip that hides oncoming traffic from your view.", src: P(50, "Hazards on Hills") },
    {
      id: "k3", type: "sort", concept: "parking",
      prompt: "Parking on a hill: which way do the front wheels point?",
      categories: [
        { id: "l", label: "Wheels LEFT" },
        { id: "r", label: "Wheels RIGHT" },
      ],
      cards: [
        { text: "Facing downhill, with a kerb", cat: "l" },
        { text: "Facing downhill, no kerb", cat: "l" },
        { text: "Facing uphill, no kerb", cat: "l" },
        { text: "Facing uphill, with a kerb", cat: "r" },
      ],
      explain: "Only uphill with a kerb turns the wheels to the right. Every other case: to the left.", src: P(50, "Parking on a Hill"),
    },
    {
      id: "k4", type: "sort", concept: "parking",
      prompt: "Which gear do you leave it in?",
      categories: [
        { id: "first", label: "First gear" },
        { id: "rev", label: "Reverse gear" },
      ],
      cards: [
        { text: "Facing uphill, with a kerb", cat: "first" },
        { text: "Facing uphill, no kerb", cat: "first" },
        { text: "Facing downhill, with a kerb", cat: "rev" },
        { text: "Facing downhill, no kerb", cat: "rev" },
      ],
      explain: "Facing uphill — first gear. Facing downhill — reverse gear. Handbrake on every time; automatics in park.", src: P(50, "Parking on a Hill"),
    },
    {
      id: "k5", type: "sort", concept: "uphill",
      prompt: "Compared with a level road — uphill or downhill?",
      categories: [
        { id: "up", label: "Uphill" },
        { id: "down", label: "Downhill" },
      ],
      cards: [
        { text: "Brakes slow you sooner", cat: "up" },
        { text: "Brakes take longer — brake sooner", cat: "down" },
        { text: "Clutch down: the car slows more", cat: "up" },
        { text: "Clutch down: the car gains speed", cat: "down" },
        { text: "Harder to keep your speed", cat: "up" },
        { text: "Harder for the engine to hold the car back", cat: "down" },
      ],
      explain: "Uphill, gravity slows you; downhill, it speeds you up — so brakes, clutch and gas all behave differently.", src: P(49, "Remember; p.50"),
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
  blurb: "Hill parking, and the key terms",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "parking", visuals: ["hill-park:up-kerb", "hill-park:down-nokerb"],
      prompt: "Match the parking position to the precautions.",
      pairs: [
        ["Uphill, no kerb", "Wheels left, handbrake, first gear"],
        ["Uphill, with kerb", "Wheels right, handbrake, first gear"],
        ["Downhill, no kerb", "Wheels left, handbrake, reverse gear"],
        ["Downhill, with kerb", "Wheels left, handbrake, reverse — against the kerb"],
      ],
      explain: "Only uphill with a kerb turns right; uphill uses first gear, downhill reverse; the handbrake always.", src: P(51, "Post-test Q7; answer p.85") },
    {
      id: "m2", type: "match", concept: "brow",
      prompt: "Match the term to its meaning.",
      pairs: [
        ["Dead ground", "A dip that hides oncoming traffic"],
        ["Brow of a hill", "The top, where your view ahead is restricted"],
        ["Brake fade", "Overheated brakes that stop less well"],
        ["Engine braking", "A low gear helping to hold the car back"],
      ],
      explain: "All four are about seeing and controlling speed on hills.", src: P(50, "Hazards on Hills; p.85 answers 3, 8") },
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
  blurb: "Approaching a hill, and parking on one",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "downhill", visual: "hill-down",
      prompt: "Approaching a steep downhill slope — in order.",
      steps: ["Check your mirrors", "Assess the slope", "Select a low gear before the slope", "Control speed with the gear and braking"],
      explain: "Mirrors, assess, low gear before the hill, then the right combination of gear and brakes.", src: P(50, "Going Downhill") },
    { id: "p2", type: "order", concept: "uphill", visual: "hill-up",
      prompt: "Approaching an uphill climb — in order.",
      steps: ["Check your mirrors", "Assess the slope", "Look out for slow-moving and heavy vehicles", "Change to the most appropriate gear before the climb"],
      explain: "Mirrors, assess, look for slow and heavy vehicles, and be in the right gear before you start climbing.", src: P(49, "Going Uphill") },
    { id: "p3", type: "order", concept: "parking", visual: "hill-park:down-kerb",
      prompt: "Parking facing downhill by a kerb — secure the car in order.",
      steps: ["Stop close to the kerb", "Turn the front wheels to the left", "Apply the handbrake firmly", "Leave it in reverse gear"],
      explain: "Facing downhill: wheels left, handbrake on, reverse gear (automatic: park).", src: P(50, "Facing Downhill") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "downhill", visual: "hill-down",
      scene: "⬇️ Approaching a steep downhill slope, you realise your speed is too high. You've checked the mirrors.",
      prompt: "What now?",
      options: ["Perform an emergency stop", "Brake and select a lower gear before the hill", "Use the gears alone to slow down on the slope", "Select a higher gear"], answer: 1,
      explain: "Brake and get into a lower gear before the slope — the gear then helps control your speed on the way down.", src: P(52, "Retention Q6 (answer b, p.88)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "brow", visual: "dead-ground",
      scene: "🚚 A slow lorry is ahead of you. The road dips ahead into a hollow, and you can't see what's in it.",
      prompt: "Do you overtake?",
      options: ["Yes, quickly before anything appears", "No — that dip is dead ground and may hide oncoming traffic", "Yes, if you flash your lights", "Only if the lorry waves you on"], answer: 1,
      explain: "You must not overtake on approach to \"dead ground\" — a dip or hollow that hides oncoming traffic.", src: P(50, "Hazards on Hills") },
    { id: "s3", type: "choice", label: "Scenario", concept: "separation", visual: "following-distance",
      scene: "⬆️ You're following a car up a long hill in slow traffic.",
      prompt: "How close do you follow?",
      options: ["Closer than usual — you'll stop quickly uphill", "Keep well back — it could stop suddenly and make you brake harshly", "Bumper to bumper to keep traffic moving", "It doesn't matter"], answer: 1,
      explain: "Increase your separation distance on a hill: the vehicle ahead could slow down suddenly.", src: P(52, "Retention Q4 (answer d, p.88)") },
    { id: "s4", type: "choice", label: "Scenario", concept: "moving-off",
      scene: "🚗 You're parked on an uphill slope, waiting to move off. A steady stream of traffic is coming up behind you.",
      prompt: "Compared with a level road…",
      options: ["You need a smaller gap — they can slow more easily", "You need a larger gap — your car won't gain speed so quickly", "You needn't signal", "Second gear is best"], answer: 1,
      explain: "Uphill your car won't gain speed so quickly, so wait for a larger gap.", src: P(52, "Retention Q7 (answer b, p.88)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "brow", visual: "brow",
      scene: "⛰️ You're approaching the brow of a hill on a narrow road.",
      prompt: "What's the right approach?",
      options: ["Keep well left and ease off the gas; expect someone overtaking towards you", "Move to the centre for a better view", "Accelerate over the top", "Sound the horn and keep going"], answer: 0,
      explain: "At the brow your view is restricted: keep well to the left, ease off the gas, and beware of oncoming traffic that could be overtaking.", src: P(50, "Hazards on Hills") },
    { id: "s6", type: "choice", label: "Scenario", concept: "brake-fade", visual: "brake-fade",
      scene: "🔥 Halfway down a long mountain road, the brakes feel weaker and smell hot.",
      prompt: "What's happening — and what should you have done?",
      options: ["Nothing — keep braking harder", "Brake fade: they've overheated; a lower gear would have taken load off them", "The handbrake is on", "Tyre pressure is low"], answer: 1,
      explain: "Brakes may overheat with continued use and become less effective. Use the correct combination of lower gears and braking.", src: P(85, "Post-test answers 6, 8; retention Q10") },
    { id: "s7", type: "choice", label: "Scenario", concept: "parking", visual: "hill-park:down-nokerb",
      scene: "🅿️ You have to park facing downhill on a country road with no kerb.",
      prompt: "How do you leave the car?",
      options: ["Wheels right, first gear", "Wheels left, handbrake on, reverse gear", "Wheels straight, neutral", "Wheels right, reverse gear"], answer: 1,
      explain: "Facing downhill, with or without a kerb: wheels to the left, handbrake on, reverse gear.", src: P(52, "Retention Q9 (answer c, p.88); p.50") },
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
  blurb: "A steep hill, down and up again",
  xpPer: 10,
  situation: "⛰️ A warning sign shows a steep hill ahead. The road drops down, then climbs again round a bend. A car is following you.",
  items: [
    { id: "w1", type: "choice", step: "First", concept: "downhill", prompt: "You see the sign. First?",
      options: ["Brake hard", "Check your mirrors", "Change to top gear", "Speed up for the climb"], answer: 1,
      explain: "Check your mirrors, then assess the slope.", src: P(50, "Going Downhill") },
    { id: "w2", type: "choice", step: "Before the drop", concept: "engine-braking", visual: "hill-down", prompt: "Before you start down…",
      options: ["Select a low gear to help control your speed", "Put it in neutral", "Choose the highest gear", "Rely on the brakes"], answer: 0,
      explain: "Always select a low gear as you approach the hill to help control your speed.", src: P(50, "Side note") },
    { id: "w3", type: "choice", step: "Going down", concept: "brake-fade", prompt: "On the way down, how do you control speed?",
      options: ["Footbrake only", "The correct combination of lower gear and braking", "Clutch down to coast", "Gears only"], answer: 1,
      explain: "Use the correct combination of lower gears and braking — relying on the brakes risks brake fade.", src: P(52, "Retention Q10 (answer a, p.88)") },
    { id: "w4", type: "choice", step: "Following", concept: "separation", prompt: "There's a car ahead of you on the slope.",
      options: ["Close up to it", "Increase your separation distance", "Overtake it", "Flash it to speed up"], answer: 1,
      explain: "Downhill, holding back gives you more time to stop and more warning to traffic behind.", src: P(50, "On the Hill") },
    { id: "w5", type: "choice", step: "The climb", concept: "uphill", visual: "hill-up", prompt: "Approaching the climb and the bend…",
      options: ["Change up as you enter the bend", "Consider a lower gear before the bend", "Slip the clutch", "Change down in the bend"], answer: 1,
      explain: "Cornering makes harder work for the engine uphill, so change down before the bend.", src: P(52, "Retention Q2 (answer d, p.88); p.49") },
    { id: "w6", type: "choice", step: "Stopping uphill", concept: "uphill", prompt: "You need to stop at the top. Uphill, you can…",
      options: ["Brake later — the weight of the car helps slow it", "Brake much earlier", "Use only the handbrake", "Not use the footbrake"], answer: 0,
      explain: "Going uphill your brakes slow you sooner, so you can brake later.", src: P(52, "Retention Q3 (answer a, p.88); p.49") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 88.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(52, `Retention test Q${n}; answer p.88`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "According to the Irish Road Signs Trainer, an ascent ahead warning sign would be used where the gradient is less than", ["16% (1 in 6)", "10% (1 in 10)", "5% (1 in 20)", "12% (1 in 8)"], 2, "warning"),
    R(2, "Driving uphill you notice a bend in the road ahead. You should", ["change up a gear and press the accelerator down further as you enter the bend", "slip the clutch for increased traction", "change to a lower gear as you enter the bend", "consider changing to a lower gear before the bend"], 3, "uphill", "hill-up"),
    R(3, "When slowing down to stop the vehicle on an uphill gradient", ["you can brake later as the weight of the car will help you slow down", "you should brake earlier to give more warning to following traffic", "it is not necessary to use the footbrake at all", "you may use the handbrake to stop the car"], 0, "uphill", "hill-up"),
    R(4, "When following another vehicle uphill, you should", ["keep well back as you will need longer to stop the car on the slope", "not need to keep so far back as on a level road since your stopping distance will be reduced", "be ready to change to a higher gear to overtake", "keep well back as the vehicle ahead could stop suddenly and cause you to brake harshly"], 3, "separation", "following-distance"),
    R(5, "Going down a steep hill, a driver who de-clutches to change gear would notice that", ["the vehicle slowed suddenly", "the vehicle would speed up", "engine noise would increase", "the oil level warning light would show"], 1, "downhill", "hill-down"),
    R(6, "Approaching a steep downhill slope, a driver realises their speed is too high and should, after checking the mirrors", ["perform an emergency stop", "brake and select a lower gear before the hill", "use the gears to brake the vehicle before the slope", "promptly select a higher gear"], 1, "downhill", "hill-down"),
    R(7, "Waiting to move away from the side of a road on an uphill slope you see a steady stream of traffic coming up behind you. Compared to a level road, to move off safely", ["you will not need to leave such a large gap as following traffic can slow more easily", "you will need a larger gap as your car will not gain speed so quickly", "you will not need to signal as there is no danger to other traffic", "it will probably be better to use second gear"], 1, "moving-off"),
    R(8, "Facing uphill, you park your car close to the right-hand kerb and, as well as applying the parking brake, you should", ["leave your front wheels pointing to the right", "leave the car in the most powerful forward gear", "select reverse gear before leaving the car", "leave the car in first gear and turn the front wheels left"], 3, "parking"),
    R(9, "Facing downhill, you park your car close to the left of the road and notice there is no kerb. You firmly apply the handbrake and", ["leave your front wheels pointing to the right", "leave the car in first gear and turn your front wheels to the left", "select reverse gear and leave your front wheels turned to the left", "leave the car in reverse gear with the front wheels pointing to the right"], 2, "parking", "hill-park:down-nokerb"),
    R(10, "To control speed on a downhill slope you should", ["use the correct combination of lower gears and braking", "rely on the brakes", "use the gears to slow the car", "rely on engine compression"], 0, "brake-fade", "brake-fade"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "engine-braking",
      prompt: "Why use a low gear going downhill?", options: ["To save fuel", "Greater engine braking and control", "To go faster", "It's a legal requirement"], answer: 1,
      explain: "A low gear gives a greater degree of engine braking and control.", src: P(85, "Post-test answer 3") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "overtaking", visual: "hill-up",
      scene: "⬆️ You're behind a tractor going uphill. A car is coming down towards you in the distance.",
      prompt: "What do you need to remember?", options: ["Oncoming downhill traffic is usually faster and less able to stop", "Oncoming traffic can stop easily", "Uphill overtakes are quicker", "Nothing special"], answer: 0,
      explain: "Traffic coming downhill towards you is nearly always faster and less able to slow or stop quickly.", src: P(85, "Post-test answer 2") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "never-park",
      statement: "You may park on a hump-back bridge if you leave your hazard lights on.", answer: false,
      explain: "You must never park on a hump-back bridge, the brow of a hill, a corner, a bend, or a sharp dip.", src: P(49, "You must never park") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "brow",
      prompt: "Which picture shows the brow of a hill?", options: ["brow", "dead-ground", "hill-down", "brake-fade"], answer: 0,
      names: ["Brow of a hill", "Dead ground", "Going downhill", "Brake fade"],
      explain: "The brow is the top of the hill, where your view of the road ahead is restricted.", src: P(50, "Hazards on Hills") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "parking",
      prompt: "Match the slope to the gear.", pairs: [["Facing uphill", "First gear"], ["Facing downhill", "Reverse gear"], ["Automatic, either way", "Park"]],
      explain: "Uphill first, downhill reverse, automatic in park — handbrake on every time.", src: P(50, "Parking on a Hill") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "downhill",
      prompt: "Approaching a downhill slope:", steps: ["Mirrors", "Assess the slope", "Low gear before the slope", "Gear and brakes together"],
      explain: "Mirrors, assess, low gear before the slope, then gears and brakes in combination.", src: P(50, "Going Downhill") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "moving-off",
      scene: "🚗 You're moving off facing downhill on a quiet road.",
      prompt: "Which gear?", options: ["Always first", "Second may be the most appropriate", "Always third", "Reverse"], answer: 1,
      explain: "When moving off downhill, second gear may be the most appropriate.", src: P(85, "Post-test answer 5") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "downhill", visual: "hill-down",
      prompt: "Going down a steep hill, if you de-clutch to change gear…", options: ["The car slows suddenly", "The car speeds up", "Engine noise increases", "The oil light shows"], answer: 1,
      explain: "The car runs quicker when you de-clutch going downhill.", src: P(52, "Retention Q5 (answer b, p.88)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "parking",
      prompt: "Facing uphill, no kerb. Which is right?", options: ["hill-park:up-nokerb", "hill-park:up-kerb"], answer: 0,
      names: ["Wheels left — correct with no kerb", "Wheels right — that's for a kerb"],
      explain: "Uphill without a kerb: front wheels to the left, handbrake on, first gear.", src: P(50, "Facing Uphill") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "brake-fade",
      prompt: "To control speed on a downhill slope you should…", options: ["Use the correct combination of lower gears and braking", "Rely on the brakes", "Use the gears only", "Rely on engine compression"], answer: 0,
      explain: "Gears and brakes together — never rely on the brakes alone.", src: P(52, "Retention Q10 (answer a, p.88)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "1.5",
  number: "1.5",
  title: "Dealing with Hills",
  pages: [49, 52],
  intro: "Going up, going down, what you can't see over the top, and parking on a slope.",
  objectives: [
    "The procedure on approach to a downhill gradient",
    "The procedure on approach to an uphill gradient",
    "How to drive safely uphill and downhill",
    "How to park on a hill",
  ],
  objectivesSrc: P(49, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...parking, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "hill-parker", icon: "🅿️", label: "Hill Parker", rule: { activity: "parking", min: 100 } },
    { id: "hill-handler", icon: "⛰️", label: "Hill Handler", rule: { activity: "scenarios", min: 80 } },
  ],
};
