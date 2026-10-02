/*
  ===========================================================================
  BOOK 1 · UNIT 1.9 — NIGHT DRIVING

  Source: "Driving Procedures & Road Safety — Resource Workbook, Book 1"
  (Driver Education Supplies), book pages 72–75, with the post-test model
  answers on page 86 and the retention-test answers on page 89
  (1a 2d 3b 4a 5c 6b 7a 8d 9b 10d).

  Retention test Q5 (seat-belt statistics) is omitted: the unit doesn't
  cover it, so its answer can't be checked against the text. Q9 (dip as
  an overtaking vehicle draws alongside) isn't stated in the unit text but
  agrees with its dazzle rules, and is kept as the book sets it.

  Page 72 gives "night" as half an hour after sunset to one and a half hours
  before sunrise, which looks misprinted; the unit teaches the post-test
  answer ("the time between dusk and dawn") and page 73's "you MUST use your
  lights between sunset and sunrise" instead. Post-test answer 5 ("both, at
  all times during darkness") conflicts with page 73 ("unless the road is
  well lit") and isn't used.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 1, unit: "1.9", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "see-be-seen": {
    title: "See and be seen",
    text: "Before a journey partly or wholly at night, make sure your lights, indicators, reflectors and number-plate lighting are clean and working, so you can see and be seen. Keep the windscreen clean. Drive at a speed that lets you stop within the distance your lights show, and keep your headlights properly adjusted — otherwise they may dazzle oncoming traffic, even when dipped.",
    src: P(72, "Introduction"),
  },
  "driver": {
    title: "The driver at night",
    text: "Be more vigilant: your visibility is reduced and your information is less effective. It's even more important not to drive tired, unwell or not concentrating. Make sure your eyesight is up to standard — strained eyes tire a driver more quickly. Before setting off in the dark, give your eyes a couple of minutes to adjust, sitting in the car. Don't wear tinted glasses, sunglasses or night-driving glasses unless prescribed, or tint the windscreen.",
    src: P(72, "The driver and vehicle at night"),
  },
  "vehicle": {
    title: "The car at night",
    text: "Check lights and indicators work and their lenses and your mirrors are clean. Keep spare bulbs. Keep the windscreen and wiper blades clean and in good order — damaged wipers scratch the glass, which adds to dazzle at night.",
    src: P(72, "The driver and vehicle at night"),
  },
  "when-lights": {
    title: "When to put your lights on",
    text: "Night is the time between dusk and dawn, but in practice use your lights when the light conditions dictate. Drivers of dark-coloured cars should put their lights on earlier and switch off later. At dusk, put your lights on before the official lighting-up time to help others see you; at dawn, don't switch off until you're sure others can see you. Lights help others judge your speed and direction.",
    src: P(72, "Lights at Night; p.86 answers 1, 2"),
  },
  "auto-lights": {
    title: "Automatic Light-On",
    text: "Sensors at the base of the rear-view mirror switch the headlights on at dusk or in a tunnel. Directional sensors judge the brightness ahead, and an ambient sensor tells a tunnel from a bridge. Light switches come in different forms — a turn switch on the bulkhead or a steering-wheel stalk — so get to know a car's controls before moving away.",
    src: P(72, "Automatic Light-On"),
  },
  "lighting-up": {
    title: "Lighting up",
    text: "You MUST use your lights between sunset and sunrise, and your headlights on unlit roads. You SHOULD use headlights at night on well-lit motorways and similar high-speed roads, and dipped headlights at night in built-up areas unless the road is well lit.",
    src: P(73, "Lighting up"),
  },
  "dipped": {
    title: "Dipped headlights",
    text: "Use dipped headlights just after dusk and before dawn as long as they help you see; when stopped in traffic or meeting other traffic; in built-up areas with good street lighting and on continuously lit roads; when following another vehicle; in dense fog, falling snow or heavy rain; when daylight is fading; and generally to avoid inconveniencing other traffic. Dipped or dim/dip lights are better than sidelights alone in lit built-up areas.",
    src: P(73, "Use dipped headlights"),
  },
  "main": {
    title: "Main beam and fog lights",
    text: "Use main beam in situations, places and times outside those for dipped headlights. Use fog lights only in dense fog and falling snow — turn them off at all other times. If visibility drops below 100 metres, use rear fog lights.",
    src: P(73, "Use main beam headlights; p.68"),
  },
  "dazzle": {
    title: "Dazzle",
    text: "It's an offence to dazzle other road users. Keep well back from the vehicle ahead on dipped beam. With main beam, dip in good time for oncoming traffic. Dip earlier for a left-hand bend than a right-hand one, as your lights are focused more towards the left. If you're dazzled: slow down, look away to the left verge, stop if necessary, and watch for pedestrians and cyclists on your side. If dazzled from behind, use the mirror's night setting.",
    src: P(73, "Dazzle; What to do if dazzled; p.86 answer 6"),
  },
  "following": {
    title: "Following at night",
    text: "Don't drive on the tail lights of the vehicle in front — it gives a false sense of security and may lure you into driving too close or too fast, or both.",
    src: P(73, "Driving carefully behind other vehicles"),
  },
  "waiting": {
    title: "Waiting in traffic",
    text: "At junctions your brake lights and indicators can dazzle the driver behind. Don't keep your foot on the brake — use the handbrake, unless it's foggy. In a long queue you may cancel your indicator once you're sure it's been seen and understood, and re-signal as you move away.",
    src: P(73, "Lighting up; p.86 answer 7"),
  },
  "parking": {
    title: "Parking at night",
    text: "It's an offence to leave your headlights on in a parked car, even for a few moments. Park legally with the reflectors facing following traffic — on the left, except in a one-way street. On unlit roads it's advisable to leave the sidelights on. Turn your headlights off even when setting down a passenger: the glare can dazzle other drivers.",
    src: P(73, "Parking and waiting; p.86 answers 8–10"),
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
    "Drive so you can stop within the distance your lights show",
    "Dazzled? Slow down, look to the left verge, stop if necessary",
    "Parked at night: headlights off, on the left, reflectors to following traffic",
  ],
  cards: [
    {
      icon: "🌙",
      kicker: "Night driving",
      title: "See — and be seen",
      visual: "stop-in-lights",
      body: [
        "Before any journey partly or wholly in the dark, make sure your lights, indicators, reflectors and number-plate lighting are clean and working — and the windscreen is clean.",
        "Drive at a speed that lets you stop within the distance your lights show. Keep the headlights properly adjusted, or they may dazzle oncoming traffic even when dipped.",
      ],
      think: ["💡 Are all my lights clean and working?", "🛑 Could I stop within what I can see?", "😵 Will I dazzle someone?"],
      concept: "see-be-seen",
      src: P(72, "Introduction"),
    },
    {
      icon: "👁️",
      kicker: "The driver and the car",
      title: "Ready for the dark",
      sections: [
        { head: "The driver", list: ["Be more vigilant — visibility and information are reduced", "Never drive tired, unwell or not concentrating", "Eyesight up to standard — strained eyes tire you faster", "Give your eyes a couple of minutes to adjust before setting off", "No tinted glasses, sunglasses or night-driving glasses unless prescribed"] },
        { head: "The car", list: ["Lights and indicators working; lenses and mirrors clean", "Spare bulbs in the car", "Windscreen and wiper blades clean and in good order — scratched glass adds to dazzle", "Don't tint the windscreen"] },
      ],
      concept: "driver",
      src: P(72, "The driver and vehicle at night"),
    },
    {
      icon: "🌆",
      kicker: "Lights at night",
      title: "When to switch on",
      visual: "dark-car-dusk",
      ask: {
        prompt: "Should the colour of your car affect when you switch your lights on?",
        options: ["No — it makes no difference", "Yes — dark cars on sooner and off later", "Only for white cars"],
        answer: 1,
      },
      list: [
        "Night is the time between dusk and dawn — but switch on whenever the light conditions dictate",
        "Dark-coloured cars: lights on a little earlier, off later",
        "At dusk: on before the official lighting-up time, so others see you",
        "At dawn: don't switch off until you're sure others can see you",
        "Lights help others judge your speed and direction",
      ],
      concept: "when-lights",
      src: P(72, "Lights at Night; p.86 answers 1, 2"),
    },
    {
      icon: "🔆",
      kicker: "Lighting up",
      title: "MUST and SHOULD",
      sections: [
        { head: "You MUST", list: ["Use your lights between sunset and sunrise", "Use your headlights on unlit roads"] },
        { head: "You SHOULD", list: ["Use headlights at night on well-lit motorways and similar high-speed roads", "Use dipped headlights at night in built-up areas, unless the road is well lit"] },
      ],
      concept: "lighting-up",
      src: P(73, "Lighting up"),
    },
    {
      icon: "🔦",
      kicker: "Dipped or main beam?",
      title: "Short and low, or long",
      visual: "dipped-main",
      sections: [
        { head: "Dipped headlights", list: ["Just after dusk and before dawn, as long as they help you see", "When stopped in traffic, or meeting other traffic", "In built-up areas with good street lighting; on continuously lit roads", "When following another vehicle", "In dense fog, falling snow or heavy rain", "When daylight is fading — and to avoid inconveniencing others"] },
        { head: "Main beam", list: ["Everywhere else — outside the dipped-beam situations"] },
      ],
      concept: "dipped",
      src: P(73, "Use dipped headlights; Use main beam"),
    },
    {
      icon: "🌫️",
      kicker: "Fog lights",
      title: "Only in dense fog and snow",
      visuals: ["light-symbol:front-fog", "light-symbol:rear-fog"],
      list: [
        "Use fog lights only in dense fog and falling snow",
        "You must turn them off at all other times",
        "Visibility below 100 metres: use your rear fog lights",
      ],
      concept: "main",
      src: P(73, "Use main beam headlights; p.68"),
    },
    {
      icon: "🤖",
      kicker: "Automatic Light-On",
      title: "Lights that switch themselves",
      body: [
        "Sensors at the base of the rear-view mirror switch the headlights on at dusk or in a tunnel. Directional sensors check the brightness ahead; an ambient sensor tells a tunnel from a bridge.",
        "Light switches come in different forms — a turn switch on the bulkhead, or a stalk on the steering wheel. Always get to know a car's primary and secondary controls before moving away.",
      ],
      concept: "auto-lights",
      src: P(72, "Automatic Light-On"),
    },
    {
      icon: "😵",
      kicker: "Dazzle",
      title: "Don't dazzle — and if you're dazzled",
      visual: "dazzle",
      ask: {
        prompt: "An oncoming car's lights dazzle you. Where should you look?",
        options: ["Straight at the lights", "Towards the left verge — the edge of your side of the road", "At your speedometer"],
        answer: 1,
      },
      sections: [
        { head: "Don't dazzle others", list: ["It's an offence", "Keep well back from the vehicle ahead, on dipped beam", "Dip in good time for oncoming traffic — check what's ahead first"] },
        { head: "If you're dazzled", list: ["Slow down — stop if necessary", "Look away towards the left verge until the vehicle has passed", "Watch for pedestrians and cyclists on your side", "From behind? Use the night-driving setting on the mirror"] },
      ],
      concept: "dazzle",
      src: P(73, "Dazzle; What to do if dazzled"),
    },
    {
      icon: "↩️",
      kicker: "Bends",
      title: "Dip earlier for a left bend",
      visual: "dip-left-bend",
      body: ["Approaching a left-hand bend, dip your lights earlier than you would for a right-hand bend — your lights are focused more towards the left."],
      concept: "dazzle",
      src: P(73, "Dazzle"),
    },
    {
      icon: "🚗",
      kicker: "Following",
      title: "Not on their tail lights",
      visual: "follow-night",
      body: ["Don't drive on the tail lights of the vehicle in front. It gives a false sense of security and may lure you into driving too close, too fast, or both. Keep well back on dipped beam."],
      concept: "following",
      src: P(73, "Driving carefully behind other vehicles"),
    },
    {
      icon: "🛑",
      kicker: "Waiting",
      title: "Handbrake, not footbrake",
      visual: "brake-dazzle",
      ask: {
        prompt: "Waiting at a junction at night with a car behind. What about your brakes?",
        options: ["Keep your foot on the brake", "Use the handbrake — unless it's foggy", "Pump the brake pedal"],
        answer: 1,
      },
      list: [
        "Brake lights and indicators can dazzle the driver behind",
        "Don't keep your foot on the brake — use the handbrake (unless in fog)",
        "In a long queue you may cancel the indicator once you're sure it's been seen and understood — re-signal as you move away",
      ],
      concept: "waiting",
      src: P(73, "Lighting up; p.86 answer 7"),
    },
    {
      icon: "🅿️",
      kicker: "Parking and waiting",
      title: "Headlights off",
      visual: "night-parking",
      list: [
        "It's an offence to leave your headlights on in a parked car — even for a few moments",
        "Park legally with your reflectors facing following traffic",
        "Not on the right at night — except in a one-way street",
        "On unlit roads, it's advisable to leave the sidelights on",
        "Setting down a passenger? Headlights off — the glare can dazzle other drivers",
      ],
      concept: "parking",
      src: P(73, "Parking and waiting; p.86 answers 8–10"),
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
    { id: "r1", type: "flash", concept: "when-lights",
      front: "In driving terms, how is \"night\" defined?",
      back: "The time between dusk and dawn.", src: P(86, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "vehicle",
      front: "What cuts down screen dazzle?",
      back: "A clean windscreen.", src: P(86, "Post-test answer 3") },
    { id: "r3", type: "truefalse", concept: "driver",
      statement: "Un-prescribed night-driving glasses help you see at night.", answer: false,
      explain: "Don't wear tinted glasses, sunglasses or night-driving glasses unless prescribed.", src: P(86, "Post-test answer 4; p.72") },
    { id: "r4", type: "fill", concept: "main", visual: "light-symbol:rear-fog",
      before: "Use rear fog lights if visibility drops below", after: ".",
      options: ["100 metres", "500 metres", "50 metres", "1 km"], answer: "100 metres",
      explain: "Below 100 metres visibility, use rear fog lights — and turn fog lights off at all other times.", src: P(68, "Use vehicle headlights in poor daylight") },
    { id: "r5", type: "truefalse", concept: "lighting-up",
      statement: "You MUST use your headlights on unlit roads.", answer: true,
      explain: "You MUST use your lights between sunset and sunrise, and headlights on unlit roads.", src: P(73, "Lighting up") },
    { id: "r6", type: "flash", concept: "parking", visual: "night-parking",
      front: "Is it permitted to park on the right at night?",
      back: "No — except in a one-way street.", src: P(86, "Post-test answer 9") },
    { id: "r7", type: "flash", concept: "parking",
      front: "Setting down a passenger at night — should you turn your headlights off?",
      back: "Yes. The glare of headlights from a parked car can dazzle and distract other drivers.", src: P(86, "Post-test answer 10") },
    { id: "r8", type: "fill", concept: "driver",
      before: "Before driving off in the dark, give your eyes", after: "to adjust.",
      options: ["a couple of minutes", "half an hour", "ten seconds", "no time"], answer: "a couple of minutes",
      explain: "Remain stationary in the car for a couple of minutes so your eyes adjust to the conditions.", src: P(72, "The driver and vehicle at night") },
    { id: "r9", type: "truefalse", concept: "dazzle",
      statement: "You should dip your lights earlier for a left-hand bend than for a right-hand bend.", answer: true,
      explain: "Your lights are focused more towards the left.", src: P(73, "Dazzle") },
    { id: "r10", type: "flash", concept: "following", visual: "follow-night",
      front: "Why not drive on the tail lights of the vehicle in front?",
      back: "It gives a false sense of security and may lure you into driving too close or too fast — or both.", src: P(73, "Driving carefully behind other vehicles") },
  ],
};

/* ---------------------------------------------------------------------------
   3. LIGHTS ON? — recognition: symbols, pictures and sorts.
   --------------------------------------------------------------------------- */
const SYM = ["light-symbol:side", "light-symbol:dipped", "light-symbol:main", "light-symbol:front-fog", "light-symbol:rear-fog"];

const lights = {
  id: "lights",
  kind: "items",
  mode: "matching",
  title: "Lights On?",
  blurb: "Symbols, beams and when to use them",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "dipped",
      prompt: "Which symbol is DIPPED headlights?",
      options: [SYM[1], SYM[2], SYM[3], SYM[0]], answer: 0,
      names: ["Dipped headlights", "Main beam", "Front fog lights", "Sidelights"],
      explain: "Dipped: the beam lines slope down — short and low.", src: P(73, "Use dipped headlights") },
    { id: "k2", type: "picture", label: "Spot it", concept: "main",
      prompt: "Which symbol is the REAR FOG light?",
      options: [SYM[4], SYM[3], SYM[2], SYM[1]], answer: 0,
      names: ["Rear fog lights", "Front fog lights", "Main beam", "Dipped headlights"],
      explain: "Rear fog lights (amber symbol): use when visibility drops below 100 m.", src: P(68, "Poor daylight conditions") },
    { id: "k3", type: "picture", label: "Spot it", concept: "dazzle",
      prompt: "Which picture shows what to do when dazzled?",
      options: ["dazzle", "follow-night", "brake-dazzle", "stop-in-lights"], answer: 0,
      names: ["Look to the left verge", "Following at night", "Brake lights at a junction", "Stopping within your lights"],
      explain: "Slow down, look to the left verge, stop if necessary.", src: P(73, "What to do if dazzled") },
    {
      id: "k4", type: "sort", concept: "dipped",
      prompt: "Dipped or main beam?",
      categories: [
        { id: "d", label: "Dipped" },
        { id: "m", label: "Main beam" },
      ],
      cards: [
        { text: "Meeting oncoming traffic", cat: "d" },
        { text: "Following another vehicle", cat: "d" },
        { text: "Heavy rain or falling snow", cat: "d" },
        { text: "A well-lit town street", cat: "d" },
        { text: "An empty, unlit country road", cat: "m" },
      ],
      explain: "Dipped whenever you'd dazzle or inconvenience others, or in fog, snow and heavy rain; main beam otherwise.", src: P(73, "When to use headlights") },
    {
      id: "k5", type: "sort", concept: "lighting-up",
      prompt: "MUST, or SHOULD?",
      categories: [
        { id: "must", label: "MUST" },
        { id: "should", label: "SHOULD" },
      ],
      cards: [
        { text: "Lights between sunset and sunrise", cat: "must" },
        { text: "Headlights on unlit roads", cat: "must" },
        { text: "Headlights on well-lit motorways at night", cat: "should" },
        { text: "Dipped headlights in built-up areas (unless well lit)", cat: "should" },
      ],
      explain: "MUST is the law; SHOULD is strong advice.", src: P(73, "Lighting up") },
    {
      id: "k6", type: "sort", concept: "parking",
      prompt: "Parked at night: OK, or an offence / not allowed?",
      categories: [
        { id: "ok", label: "OK" },
        { id: "no", label: "Not OK" },
      ],
      cards: [
        { text: "On the left, reflectors to following traffic", cat: "ok" },
        { text: "Sidelights on, on an unlit road", cat: "ok" },
        { text: "Headlights left on for a minute", cat: "no" },
        { text: "On the right of a two-way street", cat: "no" },
      ],
      explain: "Headlights off when parked; on the left except in a one-way street; sidelights advisable on unlit roads.", src: P(73, "Parking and waiting; p.86") },
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
  blurb: "Lights and their moments",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "main", visuals: ["light-symbol:front-fog", "light-symbol:main"],
      prompt: "Match the light to when you use it.",
      pairs: [
        ["Dipped headlights", "Meeting or following traffic"],
        ["Main beam", "Unlit roads with no one to dazzle"],
        ["Fog lights", "Dense fog and falling snow only"],
        ["Sidelights", "Parked on an unlit road"],
      ],
      explain: "Each light has its time — and fog lights must be off at all other times.", src: P(73, "When to use headlights; p.86 answer 8") },
    {
      id: "m2", type: "match", concept: "dazzle",
      prompt: "Match the problem to the fix.",
      pairs: [
        ["Dazzled by oncoming lights", "Slow down, look to the left verge"],
        ["Dazzled from behind", "Night setting on the mirror"],
        ["Brake lights dazzling behind", "Handbrake on, foot off the brake"],
        ["Screen dazzle", "A clean windscreen"],
      ],
      explain: "Most dazzle is avoidable — or manageable.", src: P(73, "Dazzle; p.86 answers 3, 7") },
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
  blurb: "Setting off in the dark, and being dazzled",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "driver",
      prompt: "Setting off on a night journey — in order.",
      steps: ["Check lights, indicators and reflectors are clean and working", "Clean the windscreen and mirrors", "Sit in the car a couple of minutes to let your eyes adjust", "Switch on your lights", "Drive at a speed to stop within your lights"],
      explain: "Car first, then your eyes, then lights — and a speed that suits what you can see.", src: P(72, "The driver and vehicle at night; Introduction") },
    { id: "p2", type: "order", concept: "dazzle", visual: "dazzle",
      prompt: "You're dazzled by an oncoming car — in order.",
      steps: ["Slow down", "Look away towards the left verge", "Watch for pedestrians or cyclists on your side", "Stop if necessary", "Continue once the vehicle has passed"],
      explain: "Slow down, look to the left verge, stop if you need to.", src: P(73, "What to do if dazzled") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "dipped", visual: "dipped-main",
      scene: "🌃 You're on main beam on a dark country road. A car's lights appear round a bend ahead.",
      prompt: "What do you do?",
      options: ["Keep main beam — you need to see", "Dip in good time", "Flash them", "Switch to sidelights"], answer: 1,
      explain: "Don't dazzle oncoming traffic: dip your lights in good time.", src: P(73, "Dazzle") },
    { id: "s2", type: "choice", label: "Scenario", concept: "waiting", visual: "brake-dazzle",
      scene: "🌫️ At night in fog, you're waiting at a busy junction with traffic behind you.",
      prompt: "How can you help following drivers?",
      options: ["Flash your fog lights on and off", "Use the indicators alternately", "Switch on hazard warning lights", "Keep your foot on the brake pedal"], answer: 3,
      explain: "In fog, your brake lights help following drivers see you — this is the exception to using the handbrake.", src: P(75, "Retention Q8 (answer d, p.89); p.73") },
    { id: "s3", type: "choice", label: "Scenario", concept: "dazzle",
      scene: "🌙 On an unlit road at night, a car behind is about to overtake you.",
      prompt: "What should you do?",
      options: ["Flash your headlights once it has passed", "Dip your headlights as it draws alongside", "Speed up to keep it in your lights", "Switch your headlights off"], answer: 1,
      explain: "Dip your headlights as the other vehicle draws alongside, so you don't dazzle it.", src: P(75, "Retention Q9 (answer b, p.89)") },
    { id: "s4", type: "choice", label: "Scenario", concept: "when-lights", visual: "dark-car-dusk",
      scene: "🌆 It's getting dark. Your car is dark grey. Lighting-up time is in 15 minutes.",
      prompt: "When do you switch on?",
      options: ["At lighting-up time exactly", "Now — dark cars should put lights on earlier", "When others do", "When the streetlights come on"], answer: 1,
      explain: "Drivers of dark-coloured cars should switch on earlier — and all drivers before the official lighting-up time.", src: P(75, "Retention Q2 (answer d, p.89); p.72") },
    { id: "s5", type: "choice", label: "Scenario", concept: "parking", visual: "night-parking",
      scene: "🅿️ You stop for a minute at night on a two-way street to drop off a friend.",
      prompt: "What about your headlights?",
      options: ["Leave them on — it's only a minute", "Turn them off — the glare can dazzle other drivers", "Switch to main beam", "Use fog lights instead"], answer: 1,
      explain: "It's an offence to leave headlights on in a parked car, even for a few moments.", src: P(73, "Parking and waiting; p.86 answer 10") },
    { id: "s6", type: "choice", label: "Scenario", concept: "dazzle", visual: "dazzle",
      scene: "😵 A lorry with very bright lights is coming towards you on a narrow road.",
      prompt: "What do you do?",
      options: ["Flash your headlights to warn them", "Slow down, look left away from the light, and stop if necessary", "Keep your speed and look to the left", "Switch on your fog lamps"], answer: 1,
      explain: "Slow down and look left away from the light — stop if necessary.", src: P(75, "Retention Q4 (answer a, p.89)") },
    { id: "s7", type: "choice", label: "Scenario", concept: "following", visual: "follow-night",
      scene: "🚗 On a dark road you're following a car's tail lights closely — it feels easier.",
      prompt: "Is that a good idea?",
      options: ["Yes — it shows you the road", "No — it's a false sense of security; keep well back", "Yes, on main beam", "Only on motorways"], answer: 1,
      explain: "Following tail lights may lure you into driving too close or too fast.", src: P(73, "Driving carefully behind other vehicles") },
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
  blurb: "A pupil's first night lesson",
  xpPer: 10,
  situation: "🌙 A pupil's first night lesson: from a lit town, out onto unlit country roads, and back to park.",
  items: [
    { id: "w1", type: "choice", step: "Before moving", concept: "driver", prompt: "You get in the car in the dark car park. First?",
      options: ["Drive off straight away", "Give your eyes a couple of minutes to adjust", "Put on sunglasses", "Switch on main beam"], answer: 1,
      explain: "Remain in the car a couple of minutes so your eyes adjust.", src: P(72, "The driver and vehicle at night") },
    { id: "w2", type: "choice", step: "In town", concept: "dipped", prompt: "In the well-lit town centre, which lights?",
      options: ["Sidelights only", "Dipped headlights", "Main beam", "Fog lights"], answer: 1,
      explain: "Always use dipped headlights in built-up areas — better than sidelights alone where there's street lighting.", src: P(75, "Retention Q7 (answer a, p.89); p.73") },
    { id: "w3", type: "choice", step: "At the lights", concept: "waiting", visual: "brake-dazzle", prompt: "Stopped at a red light with a car behind (no fog)…",
      options: ["Hold the footbrake", "Use the handbrake", "Switch lights off", "Keep the indicator going for minutes"], answer: 1,
      explain: "Don't keep your foot on the brake — use the handbrake, unless it's foggy.", src: P(73, "Lighting up") },
    { id: "w4", type: "choice", step: "Unlit road", concept: "main", visual: "dipped-main", prompt: "Out on an empty unlit road…",
      options: ["Main beam", "Sidelights", "Dipped only", "Fog lights"], answer: 0,
      explain: "Use main beam outside the dipped-beam situations — and you MUST use headlights on unlit roads.", src: P(73, "Use main beam; Lighting up") },
    { id: "w5", type: "choice", step: "A left bend", concept: "dazzle", visual: "dip-left-bend", prompt: "A car's lights show round a left-hand bend ahead.",
      options: ["Dip earlier than you would for a right bend", "Dip only once you see the car", "Stay on main beam", "Flash it"], answer: 0,
      explain: "Dip earlier for a left-hand bend — your lights are focused more to the left.", src: P(73, "Dazzle") },
    { id: "w6", type: "choice", step: "Speed", concept: "see-be-seen", visual: "stop-in-lights", prompt: "How fast on the dark road?",
      options: ["The speed limit, always", "A speed that lets you stop within the distance your lights show", "Faster, to get home", "As fast as the car ahead"], answer: 1,
      explain: "Drive at a speed that lets you stop within the distance covered by your lights.", src: P(72, "Introduction") },
    { id: "w7", type: "choice", step: "Parking", concept: "parking", visual: "night-parking", prompt: "Back in town, parking on an unlit two-way road.",
      options: ["On the right, headlights on", "On the left, headlights off, sidelights on", "On the left, headlights on", "Anywhere, hazards on"], answer: 1,
      explain: "Park on the left with reflectors facing following traffic, headlights off; sidelights on, on unlit roads.", src: P(86, "Post-test answers 8, 9") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 89. Q5 is omitted (see the top
   of this file).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(75, `Retention test Q${n}; answer p.89`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "The manual 'Driving Essential Skills' advises that at night, a driver deciding when to switch on their lights should", ["be guided by the conditions", "keep a reference guide to lighting-up times in the car", "switch on their lights only when streetlights come on", "wait until other drivers switch on their lights"], 0, "when-lights"),
    R(2, "Drivers of dark-coloured cars are advised to switch their lights on", ["when other drivers do", "at all times when driving", "immediately after lighting-up time", "earlier than drivers of lighter-coloured cars"], 3, "when-lights", "dark-car-dusk"),
    R(3, "At dusk, when daylight begins to fade, the main advantage of using your headlights is that", ["you will be able to see other drivers earlier", "other drivers will be able to see you earlier", "other drivers will give way to you earlier", "you will ensure that you are not committing an offence"], 1, "when-lights"),
    R(4, "If dazzled by the lights of another vehicle at night, you should", ["slow down and look left away from the light and stop if necessary", "flash your headlights to warn other traffic", "maintain your speed and look well to the left of the road", "switch on fog lamps for better vision"], 0, "dazzle", "dazzle"),
    R(6, "A scratched or greasy windscreen will", ["reduce glare at night", "increase dazzle at night", "not affect driving at night", "reduce glare in daylight wet conditions"], 1, "vehicle"),
    R(7, "The manual 'Driving Essential Skills' advises that at night you should", ["always use dipped headlights in built-up areas", "use sidelights only where there is street lighting", "use the horn as a warning of presence", "use full beam headlights as a routine"], 0, "dipped"),
    R(8, "At night in fog, whilst waiting at a busy junction, you could help following drivers by", ["flashing your fog lights on and off", "using the left and right indicator intermittently", "switching on hazard warning lights", "keeping your foot on the brake pedal"], 3, "waiting", "brake-dazzle"),
    R(9, "Driving on an unlit road at night, you notice another vehicle about to overtake you and should", ["flash your headlights as soon as it has passed you", "dip your headlights as the other vehicle draws alongside your own", "increase speed when overtaken to keep the vehicle in your range of vision", "switch your headlights off until the vehicle is beyond their range"], 1, "dazzle"),
    R(10, "Drivers should be aware that it is an offence to leave vehicle headlights on", ["when physically reverse parking your car", "any time during daylight hours", "when stopped temporarily at night", "when parked at night"], 3, "parking", "night-parking"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "lighting-up",
      prompt: "You MUST use your lights…", options: ["Between sunset and sunrise", "Only after midnight", "Only on motorways", "Only in fog"], answer: 0,
      explain: "You MUST use your lights between sunset and sunrise — and headlights on unlit roads.", src: P(73, "Lighting up") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "main",
      scene: "🌫️ The fog has cleared but your fog lights are still on.",
      prompt: "What now?", options: ["Leave them — it may come back", "Turn them off — fog lights only in dense fog and falling snow", "Switch to main beam and fog lights", "Flash them to warn others"], answer: 1,
      explain: "You must turn fog lights off at all other times.", src: P(73, "Use main beam headlights") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "driver",
      statement: "Sunglasses help reduce dazzle when driving at night.", answer: false,
      explain: "Don't wear tinted glasses, sunglasses or night-driving glasses unless prescribed.", src: P(72, "The driver and vehicle at night") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "main",
      prompt: "Which symbol is MAIN BEAM?", options: [SYM[2], SYM[1], SYM[0], SYM[4]], answer: 0,
      names: ["Main beam", "Dipped", "Sidelights", "Rear fog"],
      explain: "Main beam: the beam lines are straight — long range. Dip it for others.", src: P(73, "Use main beam headlights") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "dazzle",
      prompt: "Match the bend to when you dip.", pairs: [["Left-hand bend", "Dip earlier"], ["Right-hand bend", "Dip later than for a left bend"], ["Oncoming car on a straight", "Dip in good time"]],
      explain: "Your lights are focused more to the left, so dip earlier for a left-hand bend.", src: P(73, "Dazzle") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "dazzle",
      prompt: "Dazzled by oncoming lights:", steps: ["Slow down", "Look to the left verge", "Stop if necessary"],
      explain: "Slow down, look away to the left, stop if you need to.", src: P(73, "What to do if dazzled") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "parking",
      scene: "🌃 You need to park overnight on an unlit two-way road.",
      prompt: "How?", options: ["On the right, facing oncoming traffic", "On the left, reflectors facing following traffic, sidelights on", "On the left, headlights on", "On the footpath"], answer: 1,
      explain: "Park legally on the left, reflectors to following traffic — on unlit roads, sidelights on.", src: P(86, "Post-test answers 8, 9") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "vehicle",
      prompt: "A scratched or greasy windscreen will…", options: ["Reduce glare at night", "Increase dazzle at night", "Not affect night driving", "Reduce glare in the wet"], answer: 1,
      explain: "Damaged wipers scratch the glass, which adds to dazzle at night.", src: P(75, "Retention Q6 (answer b, p.89)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "following",
      prompt: "You're following another car at night. Which picture shows the right way?", options: ["follow-night", "dipped-main"], answer: 0,
      names: ["Well back, on dipped beam", "Main beam"],
      explain: "Keep well back from the vehicle ahead, on dipped beam.", src: P(73, "Dazzle; Driving carefully behind") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "when-lights",
      prompt: "At dusk, the main advantage of putting your headlights on is that…", options: ["You see other drivers earlier", "Other drivers see you earlier", "Others give way to you", "You avoid an offence"], answer: 1,
      explain: "At dusk, lights on help others see you.", src: P(75, "Retention Q3 (answer b, p.89)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "1.9",
  number: "1.9",
  title: "Night Driving",
  pages: [72, 75],
  intro: "The problems of the dark, the right lights at the right time, dazzle — and parking at night.",
  objectives: [
    "The problems of night driving",
    "The correct use of lights at night",
    "How to drive safely at night",
  ],
  objectivesSrc: P(72, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...lights, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "light-reader", icon: "🔦", label: "Light Reader", rule: { activity: "lights", min: 100 } },
    { id: "night-specialist", icon: "🌙", label: "Night Driving Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
