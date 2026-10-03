/*
  ===========================================================================
  BOOK 1 · UNIT 1.10 — WEATHER, DRIVER VISION & ITS EFFECTS

  Source: "Driving Procedures & Road Safety — Resource Workbook, Book 1"
  (Driver Education Supplies), book pages 76–81, with the post-test model
  answers on page 87 and the retention-test answers on page 89
  (1b 2d 3c 4a 5c 6d 7b 8c 9b 10c).

  The answer key agrees with the unit text, so all ten retention questions
  are used. Q8 (low sun on a wet road) and Q9 (clearing a frozen screen by
  hand) aren't word for word in the text but agree with it, and are kept
  as the book sets them.

  Page 77 says that in two seconds of glare blindness a vehicle at 60 km/h
  "will travel more than half the distance of a football field". Two
  seconds at 60 km/h is about 33 m — less than half a pitch — so the
  comparison isn't used; the unit says only that two seconds of glare
  blindness can be dangerous.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 1, unit: "1.10", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Weather and visibility",
    text: "Weather affects both the control of your car and your visibility. The biggest single danger to a driver is being unable to see properly. Weather hazards need extra vigilance, and you and your car must be fit to drive. Avoid driving in adverse weather if you can; if you must, plan the journey, be well prepared, tell someone your estimated arrival time, and take your phone (not to use while driving).",
    src: P(76, "Introduction; Summaries; p.87 answer 1"),
  },
  "windows": {
    title: "Clear windows",
    text: "Set the ventilation to \"fresh air\", not recirculation — recirculation won't keep the windows clear. Rain, spray, fog, snow and ice reduce visibility and mist the inside of the glass. Use the heaters and ventilation: windows clear faster with warm, dry air, but not if the moisture can't escape. Keep the inside of the glass clean and dry, and open a window if necessary. Keep glass cleaner, de-icer and cloths in the car, efficient wiper blades, and winter wash in the bottle in freezing weather.",
    src: P(76, "Interior Environment; p.79; p.87 answer 2"),
  },
  "headlights": {
    title: "Headlights in poor visibility",
    text: "You must use headlights when visibility is seriously reduced — generally 100 metres or less. Use dipped headlights in poor daytime visibility: sidelights aren't powerful enough for others to see you. Front and rear fog lights may be used then too, but you MUST switch them off when visibility improves, and when not needed or in traffic queues.",
    src: P(76, "Exterior Environment; p.79; p.87 answers 7, 8"),
  },
  "wet": {
    title: "Wet weather",
    text: "In the wet, stopping distances are at least double those on dry roads, because the tyres have less grip — so keep further back from the vehicle in front. Wipers don't work as well at higher speeds: air pressure can lift them from the screen. If the steering goes unresponsive, water is probably stopping the tyres gripping: ease off the accelerator and slow down gradually.",
    src: P(76, "Wet weather; Steering unresponsive; p.87 answer 4"),
  },
  "ice": {
    title: "Ice and snow",
    text: "Don't drive in icy or snowy weather unless the journey is essential — if it is, drive with caution and allow more time. Before setting off you MUST clear all snow and ice from all windows, and make sure lights are clean and number plates visible; demist all windows and remove snow that could fall off. Drive with care even on gritted roads; stopping distances can be ten times greater than on dry roads. Avoid sudden actions; drive slowly in as high a gear as possible, accelerating and braking very gently.",
    src: P(76, "Icy and snowy weather; p.78"),
  },
  "ice-bends": {
    title: "Bends and grip on ice",
    text: "On bends, drive particularly slowly — loss of traction is more likely. Brake progressively on the straight before the bend, then steer smoothly round, avoiding sudden actions. Test your grip by braking gently somewhere safe. Light or unresponsive steering may mean ice — and on ice the tyres make virtually no noise.",
    src: P(78, "When driving in icy or snowy weather"),
  },
  "winter-other": {
    title: "Others in winter",
    text: "Take care overtaking vehicles spreading salt or de-icer. Watch out for snowploughs, which may throw snow out on either side — never overtake one unless the lane you'll use has been cleared. Be ready for conditions to change over short distances, and listen to travel bulletins and variable message signs.",
    src: P(78, "When driving in icy or snowy weather"),
  },
  "kit": {
    title: "Winter kit",
    text: "In winter always carry a de-icer and ice scraper, torch, warm clothing and boots, first aid kit, jump leads and a shovel, plus a warm drink and emergency food in case you get stuck or break down.",
    src: P(76, "Icy and snowy weather"),
  },
  "wind": {
    title: "Windy weather",
    text: "High-sided vehicles are most affected, but strong gusts can blow a car, cyclist, motorcyclist or horse rider off course — usually on open stretches exposed to crosswinds, like open dual carriageways and motorways, or passing bridges or gaps in hedges, sometimes with warning signs. Large vehicles cause turbulence. Keep well back from motorcyclists overtaking a high-sided vehicle.",
    src: P(78, "Windy weather"),
  },
  "fog": {
    title: "Fog",
    text: "Fog affects both visibility and your judgement of speed and distance — avoid driving in it if you can, and allow more time if you must. Before entering fog check your mirrors and slow down; switch on your headlights — dipped beam with fog lights. Keep speed down: you may get no early warning of traffic stopping ahead. Patchy fog can suddenly thicken again. Don't overtake. Use wipers and demisters, and beware of drivers without headlights.",
    src: P(78, "Fog; p.79 Driving in Fog; p.87 answers 5, 9, 12"),
  },
  "fog-distance": {
    title: "See clear, stop clear",
    text: "You MUST be able to stop within the distance you can see to be clear ahead. Never follow the rear lights of the vehicle ahead: it gives a false sense of security, you'll be too close, and the vehicle ahead displaces some of the fog. Don't use main beam when following in fog — it casts a shadow ahead of the other car and may dazzle its driver.",
    src: P(79, "Front and rear fog lights; You must be able to stop; p.87 answers 6, 10"),
  },
  "fog-junctions": {
    title: "Junctions in fog",
    text: "Open your windows to hear approaching traffic. Indicate early. Keep your foot on the footbrake for short stops — it warns following traffic — and use the handbrake for longer. Use the horn if it would warn others of your presence. Never use the centre line as a guide. Avoid parking in fog; if you must, reflectors to following traffic, sidelights and hazard lights on. Broken down? Get off the road; if you're an obstruction, inform the Gardaí.",
    src: P(79, "At junctions; p.87 answer 11"),
  },
  "sun": {
    title: "Bright sunlight and heat",
    text: "Keep the car well ventilated to avoid drowsiness. Hot roads may go soft, and rain after a dry spell makes them slippery. Keep the windscreen free of insects, dust, watermarks and grease; use the sun visor and correct sunglasses to cut glare and keep your eyes efficient for longer. Glare off a wet road reduces visibility and hides road markings. Dazzled by the sun? Slow down, and stop if necessary. Check the coolant — the engine may overheat in queues.",
    src: P(79, "Bright sunlight; Hot Weather; p.87 answers 13, 14"),
  },
  "vision": {
    title: "Vision, glare and fatigue",
    text: "Eyes need time to adjust to dim light. Bright light — a camera flash or oncoming high beams — can blind you for seconds, and even two seconds of glare blindness can be dangerous: never look directly at bright lights at night. Fatigue is a bigger problem at night; if you get sleepy, the only safe cure is to get off the road and sleep. Keep lights, windscreen and mirrors clean, headlights properly adjusted, and your stopping distance within your sight distance.",
    src: P(77, "Vision; Glare; Fatigue; Headlights; p.78"),
  },
  "misted-car": {
    title: "A misted-up car approaching",
    text: "Treat it as a hazard: the driver is unlikely to be able to see clearly.",
    src: P(87, "Post-test answer 3"),
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
    "The biggest single danger: being unable to see properly",
    "Wet: stopping distance at least doubles. Ice: up to ten times",
    "Fog: you MUST be able to stop within the distance you can see to be clear",
  ],
  cards: [
    {
      icon: "🌦️",
      kicker: "Weather & vision",
      title: "If you can't see, you can't be safe",
      body: [
        "Weather affects both the control of your car and how well you can see. The biggest single danger to a driver is being unable to see properly.",
        "If you can avoid driving in bad weather, do. If you must go: plan the journey, be well prepared, tell someone when you expect to arrive, and take your phone — though not to use while driving.",
      ],
      think: ["👀 Can I see — and be seen?", "🛑 Can I stop in the distance I can see?", "⏱️ Have I allowed more time?"],
      concept: "why",
      src: P(76, "Summaries; p.87 answer 1"),
    },
    {
      icon: "🌬️",
      kicker: "Clear windows",
      title: "Fresh air, not recirculation",
      visual: "demist",
      ask: {
        prompt: "To keep the windows clear, the ventilation should be set to…",
        options: ["Recirculation", "Fresh air", "Off"],
        answer: 1,
      },
      list: [
        "Air intake on \"fresh air\" — recirculation won't keep the windows clear",
        "Use the heaters and ventilation: warm, dry air clears glass faster — but only if the moisture can escape",
        "Keep the inside of the glass clean, wipe it dry before setting out, and open a window if necessary",
        "Carry glass cleaner, de-icer and cloths; keep wiper blades efficient",
        "In freezing weather, top the washer bottle up with winter wash",
      ],
      callout: "A misted-up car coming towards you? Treat it as a hazard — the driver probably can't see clearly.",
      concept: "windows",
      src: P(76, "Interior Environment; p.79; p.87 answers 2, 3"),
    },
    {
      icon: "💡",
      kicker: "Poor visibility",
      title: "Headlights at 100 metres",
      visual: "light-symbol:rear-fog",
      ask: {
        prompt: "Are sidelights enough in poor daytime visibility?",
        options: ["Yes", "No — use dipped headlights", "Only on motorways"],
        answer: 1,
      },
      list: [
        "You must use headlights when visibility is seriously reduced — generally 100 metres or less",
        "Poor daytime visibility: dipped headlights — sidelights aren't powerful enough for others to see you",
        "Front and rear fog lights only when visibility is under 100 m — in fog, heavy rain, spray, snow or smoke",
        "You MUST switch fog lights off when visibility improves — and when not needed, or in traffic queues",
      ],
      concept: "headlights",
      src: P(76, "Exterior Environment; p.79; p.87 answers 7, 8"),
    },
    {
      icon: "🌧️",
      kicker: "Wet weather",
      title: "Double the distance",
      visuals: ["stopping-weather", "aquaplaning"],
      list: [
        "Stopping distances are at least double those on dry roads — the tyres have less grip",
        "So keep further back, to see and react to changes ahead",
        "Wipers don't work as well at higher speeds — air pressure can lift them off the screen",
        "Steering goes unresponsive? Water is stopping the tyres gripping: ease off the accelerator and slow down gradually",
      ],
      concept: "wet",
      src: P(76, "Wet weather; Steering unresponsive; p.87 answer 4"),
    },
    {
      icon: "❄️",
      kicker: "Before you set off",
      title: "Ice and snow: only if essential",
      visual: "winter-kit",
      sections: [
        { head: "First", list: ["Check the forecast; drive only if the journey is essential", "Allow more time", "Carry winter kit: de-icer, scraper, torch, warm clothes and boots, first aid, jump leads, shovel, a warm drink and food"] },
        { head: "Before you move", list: ["You MUST clear all snow and ice from all windows", "You MUST make sure lights are clean and number plates visible", "Mirrors adjusted, all windows thoroughly demisted", "Remove snow that could fall off into others' path", "Check your route is clear and no more severe weather is forecast"] },
      ],
      concept: "ice",
      src: P(76, "Icy and snowy weather; p.78 Before you set off"),
    },
    {
      icon: "🧊",
      kicker: "Driving on ice",
      title: "Gently does everything",
      visuals: ["stopping-weather", "icy-bend"],
      list: [
        "Drive with care — even on treated or gritted roads",
        "Stay well back: stopping distances can be ten times greater than on dry roads",
        "Slow speed, as high a gear as possible; accelerate and brake very gently; no sudden actions",
        "Bends: brake progressively on the straight first, then steer smoothly round",
        "Test grip by braking gently somewhere safe — light steering may mean ice; on ice tyres make virtually no noise",
      ],
      concept: "ice-bends",
      src: P(78, "When driving in icy or snowy weather"),
    },
    {
      icon: "🚜",
      kicker: "Others in winter",
      title: "Gritters and snowploughs",
      visual: "snowplough",
      list: [
        "Take care overtaking vehicles spreading salt or de-icer",
        "Snowploughs may throw snow out either side — never overtake unless the lane you'll use has been cleared",
        "Conditions can change over short distances",
        "Listen to travel bulletins; read variable message signs",
      ],
      concept: "winter-other",
      src: P(78, "When driving in icy or snowy weather"),
    },
    {
      icon: "💨",
      kicker: "Windy weather",
      title: "Gusts and gaps",
      visual: "crosswind",
      list: [
        "High-sided vehicles are most affected — but gusts can blow a car, cyclist, motorcyclist or horse rider off course",
        "Usually on open roads exposed to crosswinds — open dual carriageways and motorways — and passing bridges or gaps in hedges",
        "Large vehicles create turbulence",
        "Keep well back from a motorcyclist overtaking a high-sided vehicle",
      ],
      concept: "wind",
      src: P(78, "Windy weather"),
    },
    {
      icon: "🌫️",
      kicker: "Fog",
      title: "Slow down, lights on",
      visual: "fog-distance",
      ask: {
        prompt: "In fog, how close should you be able to stop?",
        options: ["Within the distance of the car ahead's tail lights", "Well within the distance you can see to be clear", "Within 100 metres"],
        answer: 1,
      },
      list: [
        "Avoid driving in fog if you can — if you must, allow more time",
        "Before entering fog: check your mirrors and slow down",
        "Switch on your headlights — dipped beam, with fog lights",
        "Keep your speed down: you may get no warning of traffic stopping ahead",
        "Patchy fog can suddenly thicken again",
        "Never follow the car ahead's rear lights — false security, and too close",
        "Don't overtake in fog. Use wipers and demisters; beware drivers without lights",
      ],
      concept: "fog",
      src: P(78, "Fog; p.79; p.87 answers 5, 6, 9, 12"),
    },
    {
      icon: "🔦",
      kicker: "Following in fog",
      title: "Not on main beam",
      visual: "fog-shadow",
      body: ["Don't use main beam when following another driver in fog. It casts a shadow ahead of their car — and may dazzle them. Dipped beam."],
      concept: "fog-distance",
      src: P(79, "You must be able to stop; p.87 answer 10"),
    },
    {
      icon: "👂",
      kicker: "Junctions in fog",
      title: "Listen, signal, show your lights",
      visual: "fog-junction",
      list: [
        "Open your windows so you can hear approaching traffic",
        "Indicate your intentions early",
        "Short stops: keep your foot on the footbrake to warn following traffic; longer: handbrake",
        "Use the horn if it would warn others of your presence",
        "DO NOT use the centre line as a guide — you could endanger oncoming traffic",
      ],
      sections: [
        { head: "Parking or breaking down in fog", list: ["Don't park in fog if you can avoid it — get the car off the road", "If you must: reflectors to following traffic, sidelights and hazard lights on", "Broken down? Off the road as soon as safely possible; if you're an obstruction, inform the Gardaí"] },
      ],
      concept: "fog-junctions",
      src: P(79, "At junctions; p.87 answer 11"),
    },
    {
      icon: "☀️",
      kicker: "Sun and heat",
      title: "Glare, soft roads, hot engines",
      visual: "low-sun",
      list: [
        "Keep the car well ventilated to avoid drowsiness",
        "Hot roads may go soft; rain after a dry spell makes them slippery",
        "Keep the screen free of insects, dust, watermarks and grease",
        "Sun visor and correct sunglasses — they cut glare and keep your eyes efficient for longer",
        "Glare off a wet road reduces visibility and hides road markings",
        "Dazzled by the sun? Slow down — stop if necessary",
        "Check the coolant level — engines overheat in traffic queues",
      ],
      concept: "sun",
      src: P(79, "Bright sunlight and hot weather; p.87 answers 13, 14"),
    },
    {
      icon: "😴",
      kicker: "Vision and fatigue",
      title: "Glare, tiredness, clean glass",
      visual: "dazzle",
      list: [
        "Your eyes need time to adjust to dim light",
        "Bright light — a camera flash or high beams — can blind you for seconds; even two seconds of glare blindness can be dangerous",
        "Never look directly at bright lights when driving at night",
        "Fatigue and lack of alertness are bigger problems at night — if you're sleepy, the only safe cure is to get off the road and sleep",
        "Clean, correctly adjusted headlights; clean glass and mirrors inside and out",
      ],
      concept: "vision",
      src: P(77, "Vision; Glare; Fatigue; Headlights; p.78"),
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
      front: "What is the biggest single danger to a driver?",
      back: "Being unable to see properly.", src: P(87, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "fog",
      front: "What's the first thing to do in fog?",
      back: "Switch on your headlights.", src: P(87, "Post-test answer 5") },
    { id: "r3", type: "fill", concept: "wet", visual: "stopping-weather",
      before: "In wet weather, stopping distances are at least", after: "those on dry roads.",
      options: ["double", "the same as", "half", "ten times"], answer: "double",
      explain: "The tyres have less grip — keep further back.", src: P(76, "Wet weather") },
    { id: "r4", type: "fill", concept: "ice", visual: "stopping-weather",
      before: "On ice, stopping distances can be", after: "greater than on dry roads.",
      options: ["ten times", "twice", "a little", "no"], answer: "ten times",
      explain: "Keep well back from the road user in front.", src: P(78, "When driving in icy or snowy weather") },
    { id: "r5", type: "truefalse", concept: "wet",
      statement: "Wipers work just as well at higher speeds.", answer: false,
      explain: "No — air pressure can lift them from the windscreen.", src: P(87, "Post-test answer 4") },
    { id: "r6", type: "truefalse", concept: "fog",
      statement: "You may overtake in fog if the road seems clear.", answer: false,
      explain: "No — don't overtake in fog.", src: P(87, "Post-test answer 9") },
    { id: "r7", type: "flash", concept: "misted-car",
      front: "A car approaching you is misted up. What should you do?",
      back: "Treat it as a hazard — the driver is unlikely to see clearly.", src: P(87, "Post-test answer 3") },
    { id: "r8", type: "flash", concept: "wet", visual: "aquaplaning",
      front: "The steering suddenly feels unresponsive in heavy rain. What's happening — and what do you do?",
      back: "Water is probably stopping the tyres gripping. Ease off the accelerator and slow down gradually.", src: P(76, "Steering unresponsive") },
    { id: "r9", type: "truefalse", concept: "windows", visual: "demist",
      statement: "Recirculation mode is best for keeping the windows clear.", answer: false,
      explain: "Use \"fresh air\" — recirculation won't keep the inside of the windows clear.", src: P(76, "Interior Environment") },
    { id: "r10", type: "flash", concept: "sun", visual: "low-sun",
      front: "How do wet roads affect visibility in bright sunshine?",
      back: "Glare from the road surface reduces your visibility and makes road markings difficult to see.", src: P(87, "Post-test answer 13") },
  ],
};

/* ---------------------------------------------------------------------------
   3. WHAT'S THE WEATHER? — recognition: pictures and sorts.
   --------------------------------------------------------------------------- */
const weather = {
  id: "weather",
  kind: "items",
  mode: "matching",
  title: "What's the Weather?",
  blurb: "Spot the hazard, sort the response",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "fog-distance",
      prompt: "Which picture shows why not to use main beam when following in fog?",
      options: ["fog-shadow", "fog-distance", "dipped-main", "low-sun"], answer: 0,
      names: ["Shadow cast ahead of the car in front", "Stopping within what you can see", "Dipped and main beam", "Low sun glare"],
      explain: "Main beam in fog casts a shadow ahead of the vehicle you follow and may dazzle its driver.", src: P(79, "You must be able to stop") },
    { id: "k2", type: "picture", label: "Spot it", concept: "wind",
      prompt: "Which picture shows a crosswind hazard?",
      options: ["crosswind", "snowplough", "icy-bend", "aquaplaning"], answer: 0,
      names: ["Crosswind through a gap", "Snowplough", "Ice on a bend", "Water under the tyres"],
      explain: "Gusts through gaps in hedges or by bridges can blow riders and cars off course.", src: P(78, "Windy weather") },
    {
      id: "k3", type: "sort", concept: "headlights",
      prompt: "Fog lights on, or off?",
      categories: [
        { id: "on", label: "Fog lights ON" },
        { id: "off", label: "Fog lights OFF" },
      ],
      cards: [
        { text: "Thick fog, visibility 50 m", cat: "on" },
        { text: "Heavy spray, visibility under 100 m", cat: "on" },
        { text: "The fog has cleared", cat: "off" },
        { text: "Queuing in traffic, the drivers behind can see you", cat: "off" },
        { text: "Light drizzle, good visibility", cat: "off" },
      ],
      explain: "Only when visibility is seriously reduced — under 100 m. Off when it improves, or in queues.", src: P(79, "Front and rear fog lights") },
    {
      id: "k4", type: "sort", concept: "fog-junctions",
      prompt: "At a junction in fog: do, or don't?",
      categories: [
        { id: "do", label: "Do" },
        { id: "dont", label: "Don't" },
      ],
      cards: [
        { text: "Open your window to listen", cat: "do" },
        { text: "Indicate early", cat: "do" },
        { text: "Footbrake on for a short stop", cat: "do" },
        { text: "Follow the centre line as a guide", cat: "dont" },
        { text: "Main beam behind the car in front", cat: "dont" },
      ],
      explain: "Listen, signal early, show your brake lights — never steer by the centre line.", src: P(79, "At junctions") },
    {
      id: "k5", type: "sort", concept: "ice",
      prompt: "Driving on ice and snow: right, or wrong?",
      categories: [
        { id: "ok", label: "Right" },
        { id: "no", label: "Wrong" },
      ],
      cards: [
        { text: "High gear, gentle on the pedals", cat: "ok" },
        { text: "Brake on the straight before a bend", cat: "ok" },
        { text: "Clear only a patch of the windscreen", cat: "no" },
        { text: "Overtake the snowplough", cat: "no" },
        { text: "The road is gritted, so normal speed", cat: "no" },
      ],
      explain: "All windows cleared, gentle and slow even on gritted roads, never past a snowplough onto uncleared road.", src: P(78, "Before you set off; When driving in icy or snowy weather") },
    { id: "k6", type: "picture", label: "Spot it", concept: "kit",
      prompt: "Which picture shows your winter kit?",
      options: ["winter-kit", "motorway-banned", "no-overtake-places", "demist"], answer: 0,
      names: ["Winter emergency kit", "Not allowed on motorways", "No-overtaking places", "Clearing the windscreen"],
      explain: "De-icer and scraper, torch, warm clothes and boots, first aid, jump leads, shovel, a warm drink and food.", src: P(76, "Icy and snowy weather") },
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
  blurb: "Weather and what it does",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "wet", visual: "stopping-weather",
      prompt: "Match the weather to the key fact.",
      pairs: [
        ["Rain", "Stopping distance at least doubles"],
        ["Ice", "Stopping distance up to ten times"],
        ["Fog", "Visibility and judgement of speed and distance"],
        ["Strong wind", "Gusts push vehicles off course"],
      ],
      explain: "Each kind of weather takes something away — grip, sight or stability.", src: P(76, "Wet weather; p.78; p.79") },
    {
      id: "m2", type: "match", concept: "windows",
      prompt: "Match the problem to the fix.",
      pairs: [
        ["Misted inside of the screen", "Demister, fresh air, open a window"],
        ["Glare from bright sun", "Sun visor and correct sunglasses"],
        ["Frozen washer bottle", "Winter wash fluid"],
        ["Snow on the roof", "Remove it before you set off"],
      ],
      explain: "Prepare the car so you can see — and so you don't put others at risk.", src: P(76, "Interior; p.78, 79") },
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
  blurb: "Fog, a frosty morning, an icy bend",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "fog", visual: "fog-distance",
      prompt: "Approaching a bank of fog — in order.",
      steps: ["Check your mirrors", "Slow down", "Switch on dipped headlights (fog lights if under 100 m)", "Keep a speed that lets you stop within the distance you can see"],
      explain: "Mirrors, slow down, lights on, and a speed to stop within what you can see.", src: P(78, "Fog; p.79") },
    { id: "p2", type: "order", concept: "ice",
      prompt: "A frosty morning, before you drive off — in order.",
      steps: ["Check the forecast and whether the journey is essential", "Clear all snow and ice from all windows", "Clean the lights and number plates", "Demist all windows and check the mirrors", "Set off slowly, gently, in a high gear"],
      explain: "Decide, clear, clean, demist — then drive gently.", src: P(78, "Before you set off; When driving in icy or snowy weather") },
    { id: "p3", type: "order", concept: "ice-bends", visual: "icy-bend",
      prompt: "An icy bend ahead — in order.",
      steps: ["Brake progressively on the straight", "Enter the bend at a slow speed", "Steer smoothly round", "Avoid any sudden actions"],
      explain: "Slow down before the bend, then steer smoothly.", src: P(78, "When driving in icy or snowy weather") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "fog-distance", visual: "fog-distance",
      scene: "🌫️ The fog is very thick. The only thing you can see is the rear lights of the car ahead.",
      prompt: "What does that tell you?",
      options: ["You'll get there quicker", "You know the layout of the road ahead", "You're probably too close to stop in an emergency", "Your lights won't dazzle them"], answer: 2,
      explain: "If you can see its rear lights in thick fog, you're probably too close to stop in an emergency.", src: P(81, "Retention Q5 (answer c, p.89)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "headlights",
      scene: "🚗 Stopped at the back of a queue in fog, your rear fog lights are on. The drivers behind have stopped too.",
      prompt: "What should you do?",
      options: ["Leave the hazard lights on", "Switch the rear fog lights off immediately", "Flash the hazard lights", "Switch off the rear fog lights once the drivers behind have seen you, to avoid dazzle"], answer: 3,
      explain: "Avoid dazzle by switching off the rear fog lights when following drivers have seen you — switch them off in traffic queues.", src: P(81, "Retention Q6 (answer d, p.89)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "windows", visual: "demist",
      scene: "💧 Your windscreen keeps misting up on the inside in heavy rain.",
      prompt: "What's the best way to clear it?",
      options: ["Wipe it with a cloth all the way", "Use the demisters and wipers", "Use the demisters and open a window if necessary", "Wipe it with your hand"], answer: 2,
      explain: "Warm, dry air from the demister clears the glass — but the moisture has to escape: open a window if necessary.", src: P(81, "Retention Q10 (answer c, p.89)") },
    { id: "s4", type: "choice", label: "Scenario", concept: "wind", visual: "crosswind",
      scene: "🏍️ It's very windy. Ahead, a motorcyclist is overtaking a high-sided lorry on an exposed road.",
      prompt: "What do you do?",
      options: ["Close up to overtake both", "Keep well back from the motorcyclist", "Sound the horn", "Overtake the motorcyclist first"], answer: 1,
      explain: "Motorcyclists are particularly affected — keep well back from them when they're overtaking a high-sided vehicle.", src: P(78, "Windy weather") },
    { id: "s5", type: "choice", label: "Scenario", concept: "winter-other", visual: "snowplough",
      scene: "🚜 You're behind a snowplough on a two-lane road. The right-hand lane hasn't been cleared.",
      prompt: "Can you overtake?",
      options: ["Yes, carefully", "No — never overtake unless the lane you'll use has been cleared", "Yes, if you flash it", "Only uphill"], answer: 1,
      explain: "Snowploughs throw snow out either side; never overtake one unless your lane has been cleared.", src: P(78, "When driving in icy or snowy weather") },
    { id: "s6", type: "choice", label: "Scenario", concept: "sun", visual: "low-sun",
      scene: "☀️ It's a wet afternoon and the sun is low ahead of you.",
      prompt: "What should you expect?",
      options: ["Road markings easier to see", "Glare in the mirrors", "Road markings very difficult to see", "Road markings looking yellow"], answer: 2,
      explain: "Glare from the wet road reduces visibility and makes road markings very difficult to see.", src: P(81, "Retention Q8 (answer c, p.89); p.87") },
    { id: "s7", type: "choice", label: "Scenario", concept: "vision",
      scene: "😴 Late at night, your eyelids feel heavy and you can't remember the last few kilometres.",
      prompt: "What's the only safe cure?",
      options: ["Turn up the radio", "Open the window and keep going", "Get off the road at the nearest safe place and sleep", "Drive faster to get home"], answer: 2,
      explain: "If you're sleepy, stop at the nearest safe place: the only safe cure is to sleep.", src: P(78, "If you get sleepy") },
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
  blurb: "A foggy winter's evening",
  xpPer: 10,
  situation: "🌫️ A winter evening. Fog is forecast and the car is frosted over. Your pupil has to get home across the county.",
  items: [
    { id: "w1", type: "choice", step: "Deciding", concept: "why", prompt: "Before anything else…",
      options: ["Go — it's only fog", "Travel only if necessary or urgent; if so, plan and allow more time", "Take the motorway — faster", "Wait for dark"], answer: 1,
      explain: "In suspect weather, travel only if necessary or urgent — and if you must, plan and allow more time.", src: P(81, "Retention Q2 (answer d, p.89); p.87 answer 12") },
    { id: "w2", type: "choice", step: "The frost", concept: "ice", prompt: "The windscreen is frozen. What does 'Driving Essential Skills' advise?",
      options: ["Boiling water is best", "Be prepared to clear a frozen screen by hand", "Clear a small patch and wait for it to warm up", "The demisters will flatten the battery"], answer: 1,
      explain: "Be prepared to clear a frozen screen by hand — you MUST clear all snow and ice from all windows.", src: P(81, "Retention Q9 (answer b, p.89); p.78") },
    { id: "w3", type: "choice", step: "Lights", concept: "headlights", prompt: "Fog at dusk. Which lights?",
      options: ["Dipped headlights", "Side and tail lights only", "Full headlights", "Fog lights and full headlights"], answer: 0,
      explain: "In foggy conditions at dusk, use dipped headlights.", src: P(81, "Retention Q4 (answer a, p.89)") },
    { id: "w4", type: "choice", step: "Thicker fog", concept: "headlights", prompt: "Visibility drops below 100 m. Now…",
      options: ["Fog lights with dipped beam", "Main beam", "Hazard lights", "Fog lights only, headlights off"], answer: 0,
      explain: "In dense fog, use fog lights with dipped beam.", src: P(81, "Retention Q1 (answer b, p.89); p.78") },
    { id: "w5", type: "choice", step: "A car ahead", concept: "fog-distance", visual: "fog-shadow", prompt: "You catch up with a slow car in the fog.",
      options: ["Overtake it", "Follow its tail lights closely", "Drop back on dipped beam, able to stop within what you can see", "Main beam to see past it"], answer: 2,
      explain: "Don't overtake; don't hang on to its tail lights; no main beam — stay where you can stop within what you can see.", src: P(79, "Front and rear fog lights; p.87 answers 6, 9, 10") },
    { id: "w6", type: "choice", step: "Turning right", concept: "fog-junctions", visual: "fog-junction", prompt: "You must turn right at a junction in the fog.",
      options: ["Use the centre line as a guide", "Open the window to listen, signal early, footbrake on while waiting", "Turn quickly to get clear", "Switch off your lights"], answer: 1,
      explain: "Open windows to hear traffic, indicate early, show your brake lights; never steer by the centre line.", src: P(79, "At junctions; p.87 answer 11") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 89.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(81, `Retention test Q${n}; answer p.89`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "In dense fog, vehicle headlights and fog lights should", ["never be used with main beam lights", "fog lights used with dipped beam", "fog lights along with hazard warning lights", "headlights only, use fog lights only if traffic is following"], 1, "fog", "fog-distance"),
    R(2, "In suspect weather conditions, you should", ["not drive on motorways", "keep the vehicle interior lights on", "start your journey earlier", "travel only if necessary or urgent"], 3, "why"),
    R(3, "'Driving Essential Skills' advises that rear fog lamps must not be used unless visibility is reduced to", ["75 metres or less", "less than your stopping distance", "100 metres or less", "300 metres or less"], 2, "headlights", "light-symbol:rear-fog"),
    R(4, "'Driving Essential Skills' advises that in foggy conditions at dusk you are advised to use", ["dipped headlights", "side and tail lights only", "full headlights", "fog lights and full headlights"], 0, "headlights"),
    R(5, "When fog is very thick and you can see the rear lights of the vehicle ahead, 'Driving Essential Skills' advises that", ["you are more likely to complete your journey quicker", "keeping the lights of the car in front, you have the security of knowing the layout of the road ahead", "you are probably too close to stop in an emergency", "keeping close to the car in front, your fog lights will not dazzle the driver ahead"], 2, "fog-distance", "fog-distance"),
    R(6, "When stopped temporarily at the back of a traffic queue in fog, you are advised to", ["leave on your hazard warning lights", "switch off your rear fog lights immediately to comply with the law", "switch on hazard warning lights briefly to alert following drivers", "avoid dazzle by switching off rear fog lights when following drivers have seen you"], 3, "headlights"),
    R(7, "The glare of constant sunlight can interfere with your concentration. In these conditions, 'Driving Essential Skills' advises that", ["frequent stops are better than the use of sunglasses", "the correct sunglasses can keep your eyes more relaxed, less tired and more efficient for longer", "you should not need sunglasses unless driving abroad", "windscreen tinting sprays are probably the best solution"], 1, "sun"),
    R(8, "On a wet day, a low-angle sun ahead has the effect of", ["making road markings easier to see", "causing glare in the driving mirrors", "making road markings very difficult to see", "making road markings appear yellow"], 2, "sun", "low-sun"),
    R(9, "You need to demist your windscreen in winter weather. 'Driving Essential Skills' advises that", ["boiling water is the best way to clear a frozen windscreen", "you should be prepared to clear a frozen screen by hand", "just clear a small bit to drive forward — when the car warms up, all windows will clear", "prolonged use of the demisters could flatten your battery"], 1, "ice"),
    R(10, "The best way of clearing a misted-up windscreen interior is to", ["use a cloth to wipe the screen throughout your journey", "use the car's demisters and wipers", "use the car's demisters and open a window if necessary", "wipe the screen with the flat of your hand"], 2, "windows", "demist"),
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
      prompt: "The biggest single danger to a driver is…", options: ["Speed", "Being unable to see properly", "Other drivers", "Wet roads"], answer: 1,
      explain: "Being unable to see properly.", src: P(87, "Post-test answer 1") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "wet", visual: "aquaplaning",
      scene: "🌧️ Driving through standing water, the steering suddenly goes light.",
      prompt: "What do you do?", options: ["Brake hard", "Ease off the accelerator and slow down gradually", "Steer sharply to the verge", "Accelerate through it"], answer: 1,
      explain: "Water is preventing the tyres gripping: ease off and slow down gradually.", src: P(76, "Steering unresponsive") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "headlights",
      statement: "Sidelights are enough in poor daytime visibility.", answer: false,
      explain: "No — use dipped headlights; sidelights aren't powerful enough for others to see you.", src: P(79, "Hot Weather; p.87 answer 7") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "ice-bends",
      prompt: "Which picture shows how to take an icy bend?", options: ["icy-bend", "bend-left", "crosswind", "dip-left-bend"], answer: 0,
      names: ["Brake on the straight, steer smoothly", "A left-hand bend", "Crosswind", "Dipping at night"],
      explain: "Brake progressively on the straight, then steer smoothly round.", src: P(78, "When driving in icy or snowy weather") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "ice",
      prompt: "Match the road to the stopping distance.", pairs: [["Dry", "Normal"], ["Wet", "At least double"], ["Icy", "Up to ten times"]],
      explain: "Less grip, longer stops.", src: P(76, "Wet weather; p.78") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "fog",
      prompt: "Entering fog:", steps: ["Mirrors", "Slow down", "Headlights on", "Stop within what you can see"],
      explain: "Check mirrors, slow down, lights on — and keep a stopping distance within your sight.", src: P(78, "Fog; p.79") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "fog-distance", visual: "fog-shadow",
      scene: "🌫️ You're following a car in fog and your pupil reaches for main beam to see better.",
      prompt: "What do you say?", options: ["Good idea", "No — it casts a shadow ahead of the car in front and may dazzle the driver", "Only with fog lights", "Flash it instead"], answer: 1,
      explain: "Not if it would cast a shadow ahead of the vehicle you're following.", src: P(87, "Post-test answer 10") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "headlights",
      prompt: "Rear fog lamps must not be used unless visibility is reduced to…", options: ["75 m or less", "Less than your stopping distance", "100 m or less", "300 m or less"], answer: 2,
      explain: "100 metres or less.", src: P(81, "Retention Q3 (answer c, p.89)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "windows",
      prompt: "The screen is misting up. Which picture shows the right settings?", options: ["demist", "low-sun"], answer: 0,
      names: ["Demister, fresh air, window open", "Sun visor and glasses"],
      explain: "Fresh air, not recirculation; demister on; open a window so moisture escapes.", src: P(76, "Interior Environment; p.79") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "sun",
      prompt: "In constant bright sunlight, 'Driving Essential Skills' advises that…", options: ["Frequent stops beat sunglasses", "The correct sunglasses keep your eyes relaxed and efficient for longer", "Sunglasses are only for abroad", "Tint the windscreen"], answer: 1,
      explain: "Sunglasses of the correct type reduce glare and keep your eyes efficient for longer.", src: P(81, "Retention Q7 (answer b, p.89)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "1.10",
  number: "1.10",
  title: "Weather, Driver Vision & Its Effects",
  pages: [76, 81],
  intro: "Rain, ice, wind, fog and sun — what each does to your view and your grip, and how to drive through it.",
  objectives: [
    "The effects of extreme weather conditions on visibility",
    "The correct driving procedures for hazardous weather conditions",
    "How to use the car controls and driving aids to best advantage in extreme weather",
  ],
  objectivesSrc: P(76, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...weather, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "weather-reader", icon: "🌦️", label: "Weather Reader", rule: { activity: "weather", min: 100 } },
    { id: "all-weather-driver", icon: "🏆", label: "All-Weather Driver", rule: { activity: "scenarios", min: 80 } },
  ],
};
