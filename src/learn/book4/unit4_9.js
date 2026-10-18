/*
  ===========================================================================
  BOOK 4 · UNIT 4.9 — GENERAL INFORMATION ON VEHICLES
  (shown in the app as "Vehicle Safety & Maintenance")

  Source: "Theory Resource Workbook 4 of 4 — Instructional Techniques &
  Practices" (Driver Education Supplies), book pages 56–69. This unit has
  no post test and no retention test, so there's no printed answer key:
  every question here is written directly from the text and cites the page
  it comes from.

  Not used (unclear, out of date or not safe to teach as stated):
  - battery charging "220–240-volt dc to 12-volt ac" (the wrong way round);
  - "a 20% drop in pressure cuts tyre life 15% and raises fuel use 3%" and
    "25% of tyres are under-inflated by 10%" (survey figures we can't
    check);
  - a recommended tread "between 3–6 mm" (the legal minimum, 1.6 mm, is
    used instead);
  - horn hours of "10pm–7am" (Irish rules differ by place — the unit just
    says don't use it unnecessarily or in anger);
  - jump-start, towing and wheel-change details, which vary by car — see
    the handbook (covered in Unit 4.10).
  ===========================================================================
*/

const P = (page, ref) => ({ book: 4, unit: "4.9", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "responsibility": {
    title: "Your responsibility as an ADI",
    text: "Instil a sense of responsibility in pupils for themselves, their passengers and everyone sharing the road — the rules of the road, self-awareness and self-preservation. Use 'cause and effect' and open 'what if?' questions: what if that truck doesn't stop at the lights? Even when stopped at lights, in a jam or at a level crossing, you can still teach. Keep it relevant — the pupil is there to learn to drive.",
    src: P(56, "Responsibilities as an ADI"),
  },
  "fatigue": {
    title: "Drowsy driving",
    text: "Tiredness and driving don't mix: slower reactions, decreased awareness and impaired judgement. Symptoms: eyes closing or going out of focus, trouble keeping the head up, constant yawning, wandering thoughts, not remembering the last few miles, drifting between lanes, tailgating, missing signs, hitting rumble strips. Most at risk: the sleep-deprived, lone drivers, long trips without breaks, night driving, drowsy medication or alcohol, long rural roads or motorways, frequent travellers, young people, shift workers and people with undiagnosed sleep disorders.",
    src: P(56, "Drowsy & fatigued driving; p.57 Who is most at risk"),
  },
  "countermeasures": {
    title: "Beating fatigue",
    text: "Before a trip: a good night's sleep, be relaxed (a stressed driver is a dangerous driver), plan long trips with a companion, schedule stops every 2 hours or so, and avoid alcohol and medication that may impair you — ask your doctor or pharmacist. If drowsy while driving: recognise the danger, stop — don't count on the radio or an open window — find a safe place for a break and a brief nap (15–45 minutes), and don't drive for at least 15 minutes after waking. Coffee helps short-term, but takes about 30 minutes to work.",
    src: P(57, "Effective countermeasures; Actions for the drowsy driver"),
  },
  "fluids": {
    title: "Oil, coolant, brake fluid, washer",
    text: "Oil lubricates, reduces friction, cools, protects against corrosion, keeps the engine clean and carries away dirt — a car won't run without it. The filter removes impurities. Use the oil the manufacturer recommends; check with the dipstick on level ground with the engine cool and settled, between min and max. Coolant: check min–max with the engine cool and open the cap slowly. Brake fluid: min–max, keep it clean, avoid skin and paintwork. Washer: no external marks — look inside. Check the handbook: each model differs.",
    src: P(58, "The engine oil; p.67 Engine coolant; Engine oil; Brake fluid; p.68 Washer"),
  },
  "battery": {
    title: "Battery",
    text: "Without a charged battery the car won't operate, yet it's often neglected. It's usually under the bonnet. The two terminals can be kept corrosion-free with a light film of petroleum jelly; corrosion impairs contact. Connect + to + and − to −; when jump-starting, never let the leads touch — and not all cars are suitable for jump-starts. The alternator and drive belts keep it charged as you drive.",
    src: P(58, "The vehicle battery; Making the right connections; p.59 Battery charging"),
  },
  "shocks-steering": {
    title: "Shock absorbers and steering",
    text: "Shock absorbers keep the tyres in contact with the road by damping the springs' bouncing. Test: push down hard on a corner and release — if it keeps bouncing, have them inspected. Signs of wear: knocking from the wheel area, irregular tyre wear. Steering should have little 'play'; with power-assisted steering, check the fluid and don't hold it on full lock for long; a whine on sharp turns can signal trouble.",
    src: P(59, "Shock absorbers; Testing shocks; About shock absorbers; The steering"),
  },
  "brakes": {
    title: "Brakes",
    text: "The pedal pushes a piston in the master cylinder, pumping brake fluid to each wheel, pressing linings against discs or drums. Brakes pulling to one side may be wet (dry them by riding the pedal lightly) or need repair. Renewing pads and shoes is the most common job; fluid leaks are next and can cause total failure. Warning signs: scraping, pulling, spongy, too hard or too soft pedal, rear wheels locking, longer stops, vibration, leaks, cracked hoses, scored discs, low fluid, a weak handbrake, the brake warning light. Pads and shoes on an axle are changed together.",
    src: P(59, "The brakes; Brake components; p.60 Renewing; Warning signs; Problem solving"),
  },
  "tyres": {
    title: "Tyres",
    text: "The law requires at least 1.6 mm of tread across the central three-quarters of the breadth and around the whole circumference, and no cuts or bulges. Wet grip falls as tread wears — slow down in the wet to avoid aquaplaning. Causes of trouble: under- or over-inflation, overloading, clipping kerbs. Under-inflation flexes the casing and wears the outer edges; over-inflation wears the centre and reduces grip. Check pressures cold, at least once a fortnight, with a reliable gauge — figures are in the handbook or inside the driver's door. Don't mix tyre types on an axle. Puncture sprays are temporary only. A tyre driven flat must be examined by a specialist.",
    src: P(60, "The tyres; p.61; p.62 Note; p.69 tread answer"),
  },
  "wheels-exhaust": {
    title: "Alignment, balance and exhaust",
    text: "The car should roll straight on a level surface; misalignment (from potholes, worn parts) causes uneven tyre wear, pulling and higher fuel use — check yearly or every 16,000 km. Unbalanced wheels cause wobble, wheel noise and uneven wear. Rotate tyres at services. Never fit wheel or tyre sizes other than the handbook's. The exhaust carries gases away; a blown, noisy exhaust is illegal and can let fumes into the car, causing headaches or drowsiness. The catalytic converter cleans the gases; the silencer reduces noise; short trips corrode the rear silencer first.",
    src: P(62, "Wheel alignment; p.63 Tracking & balancing; The exhaust system; p.64 Warning signs"),
  },
  "emergencies": {
    title: "Driving emergencies",
    text: "Blowout: ease off the gas rather than braking, hold the wheel firmly until stopped. Skid: don't brake until under control. Steering failure: off the gas, brake very gently as it slows. Brake failure: pump the pedal; use the parking brake slowly and gently; select a lower gear. Stuck accelerator: free it with your toe, else select neutral, brake and stop — never switch off while moving (the steering may lock). Lights fail: try hazards or indicators, pull in safely. Fire: pull in, ignition off, everyone out, call the fire brigade. Smell fuel: stop, ignition off, everyone out, no smoking. Into water: belt off and escape through a window. Level-crossing breakdown with a train coming: get out and away. Flood: assess the depth, go slowly at the highest point, then dry the brakes.",
    src: P(64, "Driving emergencies; p.65; p.66 Fire; If you smell fuel"),
  },
  "checks": {
    title: "Checks before driving",
    text: "Outside: oil, water (including washer), fluids, tyres (tread, cuts, pressures, the spare), windscreen, wipers, wheel nuts, lights, reflectors, brake and fog lights. Inside — the cockpit drill (DSSSM): doors, seat, steering, seat belt, mirrors; then safety equipment, fuel and gauges. Interior mirror: flat, adjusted for eye movement only, with an anti-dazzle setting. Exterior mirrors: convex — objects look smaller and further away. All mirrors have blind spots. No dangling items from the mirror.",
    src: P(66, "Exterior vehicle checks; Prestart checks; p.67 Mirrors"),
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
    "Drowsy? Stop, nap 15–45 min, wait 15 min",
    "Tread at least 1.6 mm; check pressures cold",
    "Never switch off the ignition while moving",
  ],
  cards: [
    {
      icon: "🧑‍🏫",
      kicker: "Your role",
      title: "Cause and effect",
      ask: {
        prompt: "Stopped at red lights with an advanced pupil, you…",
        options: ["Chat about sport", "Ask a 'what if?' question", "Say nothing"],
        answer: 1,
      },
      list: [
        "Build responsibility for self, passengers and others",
        "Open 'what if?' questions, not yes/no",
        "Teach even when stopped",
      ],
      concept: "responsibility",
      src: P(56, "Responsibilities as an ADI"),
    },
    {
      icon: "😪",
      kicker: "Fatigue",
      title: "Know the signs",
      visual: "fatigue-signs",
      list: [
        "Slower reactions, less awareness, poorer judgement",
        "Yawning, heavy eyes, lost miles, drifting",
        "At risk: young drivers, night and shift workers, long trips",
      ],
      concept: "fatigue",
      src: P(56, "Drowsy & fatigued driving; p.57"),
    },
    {
      icon: "☕",
      kicker: "Countermeasures",
      title: "Stop and nap",
      visual: "drowsy-actions",
      list: [
        "Sleep well; plan breaks about every 2 hours",
        "Drowsy? Stop safely; nap 15–45 minutes",
        "Wait 15 minutes after waking before driving",
        "Caffeine takes about 30 minutes to work",
      ],
      concept: "countermeasures",
      src: P(57, "Actions for the drowsy driver"),
    },
    {
      icon: "🛢️",
      kicker: "Fluids",
      title: "Min to max",
      visual: "under-bonnet",
      list: [
        "Oil: dipstick, level ground, engine cool",
        "Coolant: engine cool, open the cap slowly",
        "Brake fluid: min–max, keep it clean",
        "Washer: no marks — look inside",
      ],
      concept: "fluids",
      src: P(58, "The engine oil; p.67–68"),
    },
    {
      icon: "🔋",
      kicker: "Battery",
      title: "The right connections",
      list: [
        "Terminals clean — a film of petroleum jelly",
        "+ to +, − to −; never let leads touch",
        "Not every car can give or take a jump start",
      ],
      concept: "battery",
      src: P(58, "Making the right connections"),
    },
    {
      icon: "🛑",
      kicker: "Brakes",
      title: "Warning signs",
      visual: "brake-warnings",
      list: [
        "Scraping, pulling, a spongy pedal, longer stops",
        "Leaks are the second most common fault",
        "Wet brakes: ride the pedal lightly to dry them",
        "Change pads or shoes on an axle together",
      ],
      concept: "brakes",
      src: P(59, "The brakes; p.60"),
    },
    {
      icon: "🛞",
      kicker: "Tyres",
      title: "1.6 mm, right pressure",
      visual: "tyre-pressure",
      list: [
        "At least 1.6 mm across the central three-quarters",
        "No cuts or bulges",
        "Under-inflated: edges wear; over-inflated: centre wears",
        "Check cold, at least fortnightly",
      ],
      concept: "tyres",
      src: P(60, "The tyres; p.61"),
    },
    {
      icon: "⚙️",
      kicker: "Wheels and exhaust",
      title: "Straight, balanced, quiet",
      list: [
        "Misalignment: pulling, uneven wear, more fuel",
        "Imbalance: wobble, wheel noise",
        "Blown exhaust: illegal, fumes may enter the car",
        "Catalytic converter cleans the gases",
      ],
      concept: "wheels-exhaust",
      src: P(62, "Wheel alignment; p.63"),
    },
    {
      icon: "🚨",
      kicker: "Emergencies",
      title: "Keep control",
      visual: "car-emergencies",
      list: [
        "Blowout: off the gas, hold the wheel firmly",
        "Brake failure: pump, handbrake gently, lower gear",
        "Stuck accelerator: neutral, brake, stop",
        "Never switch off while moving",
      ],
      concept: "emergencies",
      src: P(64, "Driving emergencies; p.65"),
    },
    {
      icon: "✅",
      kicker: "Checks",
      title: "Outside, then DSSSM",
      visual: "cockpit-drill",
      list: [
        "Fluids, tyres, glass, wipers, wheel nuts, lights",
        "Doors, seat, steering, seat belt, mirrors",
        "Interior mirror flat; exterior mirrors convex",
        "All mirrors have blind spots",
      ],
      concept: "checks",
      src: P(66, "Exterior checks; Prestart checks; p.67"),
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
    { id: "r1", type: "flash", concept: "fatigue", visual: "fatigue-signs",
      front: "Three effects of tiredness on a driver?",
      back: "Slower reaction times, decreased awareness and impaired judgement.", src: P(56, "Drowsy & fatigued driving") },
    { id: "r2", type: "fill", concept: "countermeasures", visual: "drowsy-actions",
      before: "After a nap, don't drive for at least", after: "minutes.",
      options: ["15", "2", "60", "5"], answer: "15",
      explain: "Let yourself wake fully.", src: P(57, "Actions for the drowsy driver") },
    { id: "r3", type: "truefalse", concept: "countermeasures",
      statement: "Turning up the radio is a reliable way to stay awake.", answer: false,
      explain: "Stop and take a break instead.", src: P(57, "Actions for the drowsy driver") },
    { id: "r4", type: "flash", concept: "fluids",
      front: "Name four jobs engine oil does.",
      back: "Lubricates, reduces friction, cools, protects against corrosion, keeps the engine clean and carries away dirt.", src: P(58, "The engine oil") },
    { id: "r5", type: "fill", concept: "tyres", visual: "tyre-pressure",
      before: "The legal minimum tread depth is", after: ".",
      options: ["1.6 mm", "1 mm", "3 mm", "0.6 mm"], answer: "1.6 mm",
      explain: "Across the central three-quarters and the whole circumference.", src: P(69, "Tyre tread answer") },
    { id: "r6", type: "truefalse", concept: "tyres",
      statement: "Tyre pressures should be checked when the tyres are cold.", answer: true,
      explain: "Even a short trip warms them and raises the pressure.", src: P(61, "Tyre over-inflation") },
    { id: "r7", type: "flash", concept: "shocks-steering",
      front: "How do you test the shock absorbers?",
      back: "Push down hard on the stationary car and release — if it keeps bouncing, have them inspected.", src: P(59, "Testing shocks") },
    { id: "r8", type: "flash", concept: "emergencies", visual: "car-emergencies",
      front: "Why never switch off the ignition while moving?",
      back: "You may lose power steering, and the steering lock can engage — you won't be able to steer.", src: P(65, "Remember") },
    { id: "r9", type: "flash", concept: "checks",
      front: "What does DSSSM stand for?",
      back: "Doors, seat, steering, seat belt, mirrors — the cockpit drill.", src: P(66, "Prestart checks") },
    { id: "r10", type: "fill", concept: "checks",
      before: "Exterior mirrors are", after: "— objects look smaller and further away.",
      options: ["convex", "flat", "concave", "tinted"], answer: "convex",
      explain: "The interior mirror is flat.", src: P(67, "The exterior mirrors") },
  ],
};

/* ---------------------------------------------------------------------------
   3. CAR CARE — recognition.
   --------------------------------------------------------------------------- */
const carcare = {
  id: "carcare",
  kind: "items",
  mode: "matching",
  title: "Car Care",
  blurb: "Spot it, sort it — checks, warnings, emergencies",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "fatigue",
      prompt: "Which picture shows signs of a tired driver?",
      options: ["fatigue-signs", "brake-warnings", "under-bonnet"], answer: 0,
      names: ["Fatigue signs", "Brake warnings", "Under the bonnet"],
      explain: "Yawning, drifting, lost miles.", src: P(56, "Symptoms of fatigue") },
    { id: "k2", type: "picture", label: "Spot it", concept: "tyres",
      prompt: "Which picture shows how pressure affects tyre wear?",
      options: ["car-emergencies", "tyre-pressure"], answer: 1,
      names: ["Emergencies", "Tyre pressure"],
      explain: "Edges for under-, centre for over-inflation.", src: P(61, "Under- and over-inflation") },
    {
      id: "k3", type: "sort", concept: "tyres",
      prompt: "Under- or over-inflated?",
      categories: [
        { id: "under", label: "Under-inflated" },
        { id: "over", label: "Over-inflated" },
      ],
      cards: [
        { text: "Outer edges wearing fast", cat: "under" },
        { text: "Centre of the tread wearing", cat: "over" },
        { text: "Casing flexes and overheats", cat: "under" },
        { text: "Harsh ride, smaller contact patch", cat: "over" },
      ],
      explain: "Keep to the handbook pressures.", src: P(61, "Tyre under- and over-inflation") },
    {
      id: "k4", type: "sort", concept: "brakes",
      prompt: "Brake warning sign?",
      categories: [
        { id: "yes", label: "Warning sign" },
        { id: "no", label: "Normal" },
      ],
      cards: [
        { text: "Spongy pedal", cat: "yes" },
        { text: "Car pulls to one side when braking", cat: "yes" },
        { text: "Smooth, straight stop", cat: "no" },
        { text: "Brake warning light on", cat: "yes" },
      ],
      explain: "Have any change checked right away.", src: P(60, "Brake failure warning signs") },
    { id: "k5", type: "picture", label: "Spot it", concept: "fluids",
      prompt: "Which picture shows the under-bonnet checks?",
      options: ["under-bonnet", "fatigue-signs"], answer: 0,
      names: ["Under the bonnet", "Fatigue"],
      explain: "Oil, coolant, brake fluid, washer.", src: P(67, "Under the bonnet") },
    {
      id: "k6", type: "sort", concept: "emergencies",
      prompt: "Do or don't in an emergency?",
      categories: [
        { id: "do", label: "Do" },
        { id: "dont", label: "Don't" },
      ],
      cards: [
        { text: "Blowout: brake hard at once", cat: "dont" },
        { text: "Brake failure: pump the pedal", cat: "do" },
        { text: "Stuck accelerator: switch off while moving", cat: "dont" },
        { text: "Car in water: escape through a window", cat: "do" },
        { text: "Smell fuel: stop and get everyone out", cat: "do" },
      ],
      explain: "Keep control; protect people first.", src: P(64, "Driving emergencies; p.65–66") },
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
  blurb: "Parts and jobs",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "wheels-exhaust",
      prompt: "Match the part to its job.",
      pairs: [
        ["Shock absorber", "Keeps tyres on the road"],
        ["Oil filter", "Removes impurities from the oil"],
        ["Catalytic converter", "Cleans the exhaust gases"],
        ["Silencer", "Reduces engine noise"],
        ["Alternator", "Charges the battery"],
      ],
      explain: "Be ready to explain them to pupils.", src: P(58, "Oil filter; p.59; p.63") },
    {
      id: "m2", type: "match", concept: "emergencies", visual: "car-emergencies",
      prompt: "Match the emergency to the first action.",
      pairs: [
        ["Tyre blowout", "Ease off, hold the wheel firmly"],
        ["Brake failure", "Pump the pedal"],
        ["Headlights fail", "Try hazards or indicators"],
        ["Bonnet flies open", "Look out the side window, pull in"],
      ],
      explain: "Then get off the road safely.", src: P(64, "Driving emergencies; p.65–66") },
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
  blurb: "Step by step",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "fluids", visual: "under-bonnet",
      prompt: "Checking the engine oil — in order.",
      steps: ["Park on level ground, engine off and settled", "Pull out the dipstick and wipe it", "Re-insert it fully", "Pull it out and read min–max", "Top up through the filler cap if needed"],
      explain: "Check about monthly.", src: P(67, "Engine oil level") },
    { id: "p2", type: "order", concept: "emergencies",
      prompt: "Stuck accelerator — in order.",
      steps: ["Try to free it with your toe", "Select neutral", "Signal and brake to pull in", "Stop", "Then switch off the ignition"],
      explain: "Never switch off while moving.", src: P(65, "A stuck gas pedal") },
    { id: "p3", type: "order", concept: "checks", visual: "cockpit-drill",
      prompt: "The cockpit drill — in order.",
      steps: ["Doors", "Seat", "Steering", "Seat belt", "Mirrors"],
      explain: "DSSSM.", src: P(66, "Prestart checks") },
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
  blurb: "Advising pupils about their cars",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "countermeasures",
      scene: "🥱 Your pupil arrives yawning after a night shift.",
      prompt: "What do you do?",
      options: ["Carry on — it's paid for", "Discuss fatigue and consider a short, gentle lesson or rescheduling", "Open the windows and drive on", "Give them coffee and start"], answer: 1,
      explain: "Shift workers have a higher fatigue-crash risk.", src: P(57, "Young people; shift workers") },
    { id: "s2", type: "choice", label: "Scenario", concept: "brakes", visual: "brake-warnings",
      scene: "↗️ The school car pulls left when you brake after driving through deep puddles.",
      prompt: "First step?",
      options: ["Ignore it", "Dry the brakes by braking lightly; if it persists, have them checked", "Brake harder", "Drive faster"], answer: 1,
      explain: "Wet brakes may pull to one side.", src: P(59, "The brakes") },
    { id: "s3", type: "choice", label: "Scenario", concept: "tyres",
      scene: "🛞 A pupil's tyre shows a bulge in the sidewall.",
      prompt: "What do you advise?",
      options: ["Fine if tread is OK", "Replace it — driving on a bulge is illegal", "Pump it harder", "Use puncture spray"], answer: 1,
      explain: "No lumps, bulges or tears.", src: P(60, "The tyres; p.61") },
    { id: "s4", type: "choice", label: "Scenario", concept: "emergencies",
      scene: "💨 Smoke starts coming from under the bonnet.",
      prompt: "What do you do?",
      options: ["Open the bonnet to look", "Pull in, ignition off, everyone out and away, call the fire brigade", "Keep driving to a garage", "Pour water in"], answer: 1,
      explain: "Fire spreads alarmingly fast.", src: P(66, "Fire") },
    { id: "s5", type: "choice", label: "Scenario", concept: "wheels-exhaust",
      scene: "🔊 A pupil's car has become much louder and they get headaches driving it.",
      prompt: "Likely cause?",
      options: ["Old tyres", "A worn exhaust letting fumes in — get it checked", "Low washer fluid", "Nothing serious"], answer: 1,
      explain: "Exhaust gases can cause headaches and drowsiness.", src: P(63, "The exhaust system") },
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
  blurb: "A long drive home",
  xpPer: 10,
  situation: "🌙 A newly qualified pupil plans a 4-hour drive home after a late night.",
  items: [
    { id: "w1", type: "choice", step: "Before", concept: "countermeasures", prompt: "Your best advice?",
      options: ["Sleep well first and plan breaks about every 2 hours", "Leave at midnight to beat traffic", "Drink energy drinks", "Drive straight through"], answer: 0,
      explain: "And travel with a companion if possible.", src: P(57, "It is essential that drivers") },
    { id: "w2", type: "choice", step: "Checks", concept: "checks", prompt: "Before setting off they should check…",
      options: ["Tyres, fluids, lights and fuel", "Only the radio", "Nothing — the car's new", "Just the fuel"], answer: 0,
      explain: "Exterior and prestart checks.", src: P(66, "Exterior vehicle checks") },
    { id: "w3", type: "choice", step: "On the road", concept: "fatigue", prompt: "They start missing signs and drifting. That means…",
      options: ["Danger of falling asleep — stop", "Speed up to get home", "Open a window and carry on", "Turn up the music"], answer: 0,
      explain: "Recognise the danger.", src: P(57, "Actions for the drowsy driver") },
    { id: "w4", type: "choice", step: "The break", concept: "countermeasures", prompt: "At a safe stop they…",
      options: ["Nap 15–45 minutes, then wait 15 minutes", "Rest 2 minutes", "Drive on immediately", "Sleep on the hard shoulder"], answer: 0,
      explain: "Coffee can help, but takes about 30 minutes.", src: P(57, "Actions for the drowsy driver") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — written from the text (this unit has no printed
   test or answer key).
   --------------------------------------------------------------------------- */
const R = (n, page, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(page, "Unit text"),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, 56, "Tired drivers have", ["faster reactions", "slower reactions, less awareness and poorer judgement", "better concentration", "no change"], 1, "fatigue"),
    R(2, 57, "Sleep-related crashes are most common among", ["older drivers", "young people", "taxi drivers", "learners with an instructor"], 1, "fatigue"),
    R(3, 57, "A drowsy driver should", ["turn up the radio", "open a window and carry on", "stop somewhere safe for a break and short nap", "speed up to get home"], 2, "countermeasures", "drowsy-actions"),
    R(4, 58, "Engine oil level is best checked", ["with the engine hot and running", "on level ground with the engine off and settled", "while driving", "only at the NCT"], 1, "fluids"),
    R(5, 58, "Battery terminals can be kept corrosion-free with", ["water", "a light film of petroleum jelly", "oil", "tape"], 1, "battery"),
    R(6, 59, "Shock absorbers", ["charge the battery", "keep the tyres in contact with the road", "cool the engine", "clean the exhaust"], 1, "shocks-steering"),
    R(7, 60, "The most common brake maintenance job is", ["replacing the pedal", "renewing pads or shoes", "changing the master cylinder", "bleeding the lights"], 1, "brakes"),
    R(8, 60, "Over-inflated tyres", ["wear the centre of the tread and reduce grip", "wear the outer edges", "improve braking", "last longer"], 0, "tyres", "tyre-pressure"),
    R(9, 62, "Poor wheel alignment causes", ["better fuel economy", "uneven tyre wear and pulling", "brighter lights", "nothing"], 1, "wheels-exhaust"),
    R(10, 63, "A blown, noisy exhaust", ["is legal if it still works", "is illegal and can let fumes into the car", "improves performance", "only affects noise"], 1, "wheels-exhaust"),
    R(11, 64, "If a tyre blows out you should", ["brake hard", "ease off the gas and hold the wheel firmly", "swerve to the verge", "switch off the engine"], 1, "emergencies", "car-emergencies"),
    R(12, 64, "If the brake pedal suddenly fails, first", ["switch off the engine", "pump the pedal to build pressure", "pull the handbrake hard", "jump out"], 1, "emergencies"),
    R(13, 65, "A car entering water: escape", ["through a door", "through a window", "through the boot", "after it sinks"], 1, "emergencies"),
    R(14, 66, "The cockpit drill is", ["DSSSM: doors, seat, steering, seat belt, mirrors", "MSM", "POWDER", "PSL"], 0, "checks", "cockpit-drill"),
    R(15, 67, "The interior mirror should be set so that", ["you move your head to use it", "only eye movement is needed", "it shows the back seat", "it's flat on the roof"], 1, "checks"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "tyres",
      prompt: "The legal tread minimum applies across…", options: ["The outer edges only", "The central three-quarters and the whole circumference", "One groove", "The spare only"], answer: 1,
      explain: "At least 1.6 mm.", src: P(69, "Tyre tread answer") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "brakes",
      prompt: "Which picture shows brake warning signs?", options: ["brake-warnings", "fatigue-signs", "under-bonnet"], answer: 0,
      names: ["Brake warnings", "Fatigue", "Under the bonnet"],
      explain: "Have any change checked right away.", src: P(60, "Warning signs") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "fluids",
      statement: "Open the coolant cap with the engine cool, slowly, to let pressure escape.", answer: true,
      explain: "Hot coolant can scald.", src: P(67, "Engine coolant level") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "emergencies",
      scene: "🌊 A flooded dip ahead on a country road.",
      prompt: "What do you teach?", options: ["Speed through", "Assess the depth; go slowly at the highest point; then dry the brakes", "Stop in the middle", "Reverse in"], answer: 1,
      explain: "Don't submerge the exhaust.", src: P(65, "Driving through a flooded area") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "checks",
      prompt: "Match it.", pairs: [["Interior mirror", "Flat"], ["Exterior mirror", "Convex"], ["All mirrors", "Have blind spots"]],
      explain: "Convex mirrors make things look further away.", src: P(67, "Mirrors") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "countermeasures",
      prompt: "Drowsy:", steps: ["Stop somewhere safe", "Nap 15–45 minutes", "Wait 15 minutes", "Continue"],
      explain: "Don't rely on the radio.", src: P(57, "Actions for the drowsy driver") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "emergencies",
      scene: "🚆 Your car stalls on a level crossing and the warning lights start.",
      prompt: "What now?", options: ["Keep trying to start it", "Get everyone out and well away", "Push it", "Phone a friend"], answer: 1,
      explain: "Only try to move it if absolutely sure no train is coming.", src: P(65, "Breakdown on a railroad crossing") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "tyres",
      prompt: "Over-inflated tyres wear…", options: ["The centre", "The outer edges", "Evenly", "Not at all"], answer: 0,
      explain: "And reduce grip.", src: P(61, "Tyre over-inflation") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "fatigue",
      prompt: "A pupil says they can't remember the last few miles. Which picture applies?", options: ["fatigue-signs", "tyre-pressure"], answer: 0,
      names: ["Fatigue", "Tyre pressure"],
      explain: "A classic sign of fatigue.", src: P(56, "Symptoms of fatigue") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "emergencies",
      prompt: "Never switch off the ignition while moving because…", options: ["It wastes fuel", "The steering may lock", "The radio stops", "It's noisy"], answer: 1,
      explain: "And you lose power steering.", src: P(65, "Remember") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "4.9",
  number: "4.9",
  title: "Vehicle Safety & Maintenance",
  pages: [56, 69],
  intro: "Fatigue, fluids and the battery, shocks, steering, brakes, tyres, wheels and exhaust, driving emergencies, and the checks before every drive.",
  objectives: [
    "Vehicle and driver safety",
    "Basic mechanical principles",
    "A driver's responsibilities",
  ],
  objectivesSrc: P(56, "Objectives"),
  mcqLink: { sectionId: "adi.sec.mechanics", label: "Basic Mechanics & Vehicle Maintenance" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...carcare, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "car-carer", icon: "🔧", label: "Car Carer", rule: { activity: "carcare", min: 100 } },
    { id: "vehicle-safety-specialist", icon: "🏆", label: "Vehicle Safety Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
