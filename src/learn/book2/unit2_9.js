/*
  ===========================================================================
  BOOK 2 · UNIT 2.9 — MECHANICAL PRINCIPLES

  Source: "Theory Resource Workbook 2 of 4" (Driver Education Supplies),
  book pages 60–71, with the post-test model answers on page 94 and the
  retention-test answers on page 97 (75 questions).

  Omitted retention questions (answer key unsafe):
  - Q2 (diesel pre-heater, keyed "pre-heats the injectors"): not in the
    unit, and glow plugs heat the combustion chamber, not the injectors.
  - Q8 (automatic choke controlled by "pre-start engine temperature"): not
    in the unit; "outside air temperature" is as defensible from the text.
  - Q13 (low oil pressure light, keyed "switch the engine off
    immediately"): "add oil at the earliest safe opportunity" is also
    defensible; the unit only says low oil pressure damages the engine.
  - Q30 (riding the clutch, keyed "wear on the friction plate"): wear on
    the thrust bearing (option c) is just as defensible, and the unit
    doesn't say.
  - Q34 (synchromesh, keyed "prevents downward selection at an
    inappropriate speed"): Unit 2.4 defines synchromesh as synchronising
    the gear wheels — option c.
  - Q57 (independent suspension, keyed "each wheel isolated from the body
    by a spring"): not in the unit, and the options are loosely worded.
  - Q60 (low-profile tyres "more grip at higher speeds"): not in the unit.
  - Q75 (sixth gear on a long fast journey, keyed "reduced acceleration
    with increased fuel consumption"): a high gear at a steady speed saves
    fuel (Unit 2.4: 1,500–2,000 rpm is most economical).

  Several kept questions aren't stated word for word (e.g. Q3, Q6, Q7,
  Q29, Q36, Q50, Q56, Q62, Q64–Q73) but have only one defensible option.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 2, unit: "2.9", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Why instructors need it",
    text: "You don't need a detailed knowledge of a car's construction, but enough to explain the mechanical principles of its design and safe use, and to identify common defects. Pupils use the controls better when they understand how they work; both of you make more cost-effective use of the car, can diagnose defects, and develop car sympathy.",
    src: P(60, "Unit introduction; p.94 answer 1"),
  },
  "engine": {
    title: "The engine",
    text: "Most cars have at least a four-cylinder internal combustion engine. Burning fuel forces the pistons down; con-rods and the crankshaft turn that into rotation. The four-stroke cycle: induction (fuel and air drawn in), compression, ignition, exhaust. Inlet and exhaust valves control the flow, timed by the camshaft, which turns at half crankshaft speed.",
    src: P(60, "The engine; p.94 answers 2, 3"),
  },
  "fuel": {
    title: "Fuel systems",
    text: "A carburettor mixes fuel with air drawn past a throttle 'butterfly' valve that opens as you press the accelerator; an air filter keeps dust out. The choke restricts the air to a cold engine, enriching the mixture. Fuel injection — electronics, sensors and an in-tank pump — is fitted to all modern cars: better power, economy and lower emissions, with a three-way catalyst.",
    src: P(61, "Fuel systems; p.94 answer 4"),
  },
  "ignition": {
    title: "Ignition",
    text: "In a petrol engine a high-voltage (high-tension) spark across the spark plug ignites the mixture. The coil converts low voltage from the battery to high voltage; the spark is timed by a distributor rotor arm or electronically. Diesels need no spark — compression alone ignites the mixture.",
    src: P(61, "Ignition system; p.94 answer 5"),
  },
  "exhaust": {
    title: "Exhaust",
    text: "The exhaust cools the gases; the silencer's baffles slow them to cut noise. Catalytic converters, part of the exhaust system, reduce harmful, toxic emissions — they convert carbon monoxide to carbon dioxide — and can be irreversibly damaged by leaded petrol.",
    src: P(61, "Exhaust system"),
  },
  "lubrication": {
    title: "Lubrication",
    text: "Every moving part needs a layer of oil to prevent metal-to-metal contact. Oil is stored in the sump and pumped through a filter. If the oil level (pressure) drops too low the engine is damaged — a red warning light or gauge shows it. Change the oil regularly to keep the engine free of dirt that causes friction and wear.",
    src: P(61, "Lubrication system; p.94 answer 6"),
  },
  "cooling": {
    title: "Cooling",
    text: "Water and anti-freeze (which lowers the coolant's freezing point) are pumped through the engine block and the radiator. The water pump is driven by the fan belt from the crankshaft; a belt or electric fan helps when you're slow, switching on at a set temperature. A thermostat lets the engine warm up quickly. Overheating causes: low water or oil, slack fan belt, faulty pump or thermostat, burst hose, wrong ignition timing.",
    src: P(61, "Cooling system; p.63; p.94 answer 7"),
  },
  "transmission": {
    title: "Transmission",
    text: "Clutch, gearbox and differential carry the engine's turning force to the wheels. The clutch — thrust bearing, pressure plate and friction plate against the flywheel — lets the engine be disconnected. The gearbox lets the car be driven with minimum strain on the engine. The final drive and differential let the outer wheel turn faster than the inner on a corner; front-wheel-drive cars add constant velocity joints.",
    src: P(62, "Transmission; The clutch; p.94 answers 8–10"),
  },
  "brakes": {
    title: "The braking system",
    text: "The footbrake works hydraulically: the master cylinder sends pressure through pipes to slave cylinders, pushing pads onto discs (front) or shoes onto drums (rear). Dual circuits make complete failure highly unlikely. Discs are cooled by air, so they fade less. The cable-operated handbrake is independent and usually works only on the rear wheels — for securing the car once stopped. A vacuum servo helps only while the engine runs.",
    src: P(62, "Braking system; p.32"),
  },
  "brake-faults": {
    title: "Brake faults",
    text: "Fade: reduced efficiency when brakes get too hot from prolonged, excessive braking — e.g. down a long hill. A spongy pedal means air in the hydraulics. Pulling to one side: a brake fault (poorly adjusted brakes) or wrongly inflated tyres — seek a garage at once. Warning light, or ABS light staying on: have the system checked. In any doubt, don't use the car.",
    src: P(64, "Braking problems; p.94 answers 11–14"),
  },
  "steering": {
    title: "Steering",
    text: "Rack and pinion: a small gear (pinion) on the steering column turns on a toothed rack, pulling one track rod and pushing the other. Universal joints cope with uneven surfaces. As the rear wheels don't steer, the outer front wheel turns through a smaller angle than the inner — the Ackermann principle. Worn steering shows as excessive free play; if power steering fails, steering takes more effort.",
    src: P(62, "Steering; p.94 answer 16"),
  },
  "suspension": {
    title: "Suspension",
    text: "Springs and dampers (shock absorbers) keep the wheels on the road through bounce, roll and pitch, with good handling and comfort. Springs absorb the bump; dampers slow the recoil so the body stays level. Test by pushing sharply on each corner — if it keeps bouncing, the shock absorbers are worn: poor road holding, braking and cornering, reduced grip.",
    src: P(62, "Suspension; p.64 How to check shock absorbers; p.94 answer 15"),
  },
  "electrical": {
    title: "Electrics",
    text: "The alternator, driven by the fan belt, generates electricity while the engine runs and charges the battery; the battery (12-volt DC, lead/sulphuric acid) powers lights and starter when it doesn't. Most cars are negative earth. Fuses protect the wiring from excess current and fire. An ignition warning light while driving means a charging fault.",
    src: P(63, "Electrical system"),
  },
  "maintenance": {
    title: "Checks and maintenance",
    text: "Keep lights, brakes, steering, exhaust, belts, wipers and washers working; screens clean. Know every warning light — never ignore one. Check fluids weekly: low brake fluid can mean brake failure. Before winter: battery, anti-freeze in the radiator and washer bottle; use ethylene glycol coolant. Smell burning, petrol or an electrical fault? Stop, ignition off, investigate — in a fire, get well away and call the fire brigade.",
    src: P(63, "Vehicle maintenance"),
  },
  "tyres-wear": {
    title: "Tyres and wear",
    text: "Check pressures when cold; higher pressures can suit long high-speed runs (see the handbook). Under-inflated tyres use more fuel and wear both edges; over-inflated wear the centre. Wear on one edge: wheel alignment. Shudder at speed: unbalanced front wheels. After hitting a kerb hard: have the alignment checked. Radials keep the tread on the road and wear more evenly.",
    src: P(64, "Snow tyres; p.42; p.43"),
  },
  "overheating": {
    title: "If it overheats",
    text: "Gauge high, loss of power, pinging or knocking? Pull off safely; neutral and parking brake; air conditioning off. Coolant running out or steam? Stop the engine and don't open the bonnet until it stops. Otherwise leave it running and check the fan works. Never open the radiator or expansion bottle until the engine has cooled. Keep hands and clothing away from the fan and belt.",
    src: P(64, "Overheated engines"),
  },
  "winter-security": {
    title: "Winter, snow and security",
    text: "On snow and ice: keep your distance, brake gently, use engine braking, avoid speed, harsh acceleration and sharp turns. Snow tyres or chains for deep snow — chains under 30 km/h. Carry emergency kit on long journeys. Leaving the car: key out, steering lock on, windows shut, lock it, valuables and documents out, never leave children or pets.",
    src: P(64, "Snow or icy conditions; Snow tyres; Vehicle security"),
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
    "Suck, squeeze, bang, blow — induction, compression, ignition, exhaust",
    "Spongy pedal: air. Fade: heat. Pulls: brake fault or tyres",
    "Never open a hot radiator; never ignore a warning light",
  ],
  cards: [
    {
      icon: "🔧",
      kicker: "Mechanical principles",
      title: "Enough to explain — and spot faults",
      body: [
        "You don't need every detail of a car's construction — but enough to explain how it works to pupils, use it safely, and identify common defects.",
        "Pupils who understand the controls use them better; you both save money, spot defects early and develop car sympathy.",
      ],
      concept: "why",
      src: P(60, "Unit introduction; p.94 answer 1"),
    },
    {
      icon: "⚙️",
      kicker: "The engine",
      title: "The four-stroke cycle",
      visual: "four-stroke",
      ask: {
        prompt: "What controls the flow of fuel and air in, and exhaust out?",
        options: ["The pistons", "The inlet and exhaust valves", "The crankshaft"],
        answer: 1,
      },
      list: [
        "Induction — fuel and air drawn in",
        "Compression — the mixture squeezed",
        "Ignition — the mixture ignites",
        "Exhaust — waste gases pushed out",
      ],
      callout: "The camshaft times the valves, turning at half crankshaft speed.",
      concept: "engine",
      src: P(60, "The engine; p.94 answers 2, 3"),
    },
    {
      icon: "⛽",
      kicker: "Fuel and ignition",
      title: "Mixture and spark",
      sections: [
        { head: "Fuel", list: ["Carburettor: butterfly valve opens with the accelerator", "Choke restricts air — a richer mixture for a cold engine", "Fuel injection on all modern cars: power, economy, lower emissions"] },
        { head: "Ignition", list: ["Coil turns battery low voltage into high-tension spark", "Spark plug ignites the petrol mixture", "Diesels: compression alone ignites it"] },
      ],
      concept: "ignition",
      src: P(61, "Fuel systems; Ignition system; p.94 answers 4, 5"),
    },
    {
      icon: "🛢️",
      kicker: "Lubrication and exhaust",
      title: "Oil in, gases out",
      list: [
        "Oil prevents metal-to-metal contact; stored in the sump, pumped through a filter",
        "Low oil pressure damages the engine — red warning light",
        "Change oil regularly to keep out dirt that causes wear",
        "Exhaust: silencer baffles cut noise; catalytic converter cuts toxic gases",
      ],
      concept: "lubrication",
      src: P(61, "Lubrication; Exhaust; p.94 answer 6"),
    },
    {
      icon: "🌡️",
      kicker: "Cooling",
      title: "Water, anti-freeze, radiator",
      visual: "cooling-system",
      ask: {
        prompt: "The fan belt goes slack. What's likely?",
        options: ["The heater fails", "The engine overheats", "The brakes fade"],
        answer: 1,
      },
      list: [
        "Coolant pumped through the block and radiator",
        "The fan belt drives the water pump",
        "A fan helps at low speed; a thermostat speeds warm-up",
        "Anti-freeze lowers the coolant's freezing point",
      ],
      concept: "cooling",
      src: P(61, "Cooling system; p.94 answer 7"),
    },
    {
      icon: "🔗",
      kicker: "Transmission",
      title: "Engine to wheels",
      visuals: ["drivetrain", "clutch-plates"],
      list: [
        "Clutch: thrust bearing, pressure plate, friction plate — against the flywheel",
        "Gearbox: driving with minimum strain on the engine",
        "Differential: outer wheel faster than inner on a corner",
        "Front-wheel drive: constant velocity joints",
      ],
      callout: "Rasping or squealing as you press the clutch: a worn thrust bearing.",
      concept: "transmission",
      src: P(62, "The clutch; p.94 answers 8–10"),
    },
    {
      icon: "↪️",
      kicker: "The differential",
      title: "Two wheels, two speeds",
      visual: "differential",
      body: ["On a corner the outer wheel travels further than the inner one. The differential lets the driven wheels turn at different speeds, so the inner wheel turns more slowly."],
      concept: "transmission",
      src: P(62, "Final drive and differential"),
    },
    {
      icon: "🛑",
      kicker: "Brakes",
      title: "Hydraulics to all four wheels",
      visual: "hydraulic-brakes",
      list: [
        "Pedal → master cylinder → pipes → slave cylinders",
        "Pads on discs (front); shoes in drums (rear)",
        "Dual circuit: if one half leaks, the other still works",
        "Discs are air-cooled — less likely to fade",
        "Handbrake: cable, independent, usually rear wheels",
      ],
      concept: "brakes",
      src: P(62, "Braking system"),
    },
    {
      icon: "⚠️",
      kicker: "Brake faults",
      title: "Read the symptoms",
      sections: [
        { head: "Symptom → cause", list: ["Spongy pedal → air in the system", "Fade → overheated brakes, prolonged braking", "Pulls to one side → brake fault or tyre pressures"] },
        { head: "Then", list: ["Warning light → ensure brakes work, then a garage", "Any doubt → don't drive it"] },
      ],
      concept: "brake-faults",
      src: P(64, "Braking problems; p.94 answers 11–14"),
    },
    {
      icon: "🎡",
      kicker: "Steering",
      title: "Rack and pinion",
      visual: "rack-pinion",
      list: [
        "The pinion on the column turns on a toothed rack",
        "One track rod pulled, the other pushed",
        "Ackermann: the outer wheel turns through a smaller angle",
        "Worn steering: excessive free play at the wheel",
      ],
      concept: "steering",
      src: P(62, "Steering; p.94 answer 16"),
    },
    {
      icon: "🪀",
      kicker: "Suspension",
      title: "Springs absorb, dampers settle",
      visual: "suspension",
      list: [
        "Springs absorb the bump; dampers slow the recoil",
        "Bounce test: push down on each corner",
        "Keeps bouncing = worn shock absorbers",
        "Worn: poor handling, braking, cornering — reduced grip",
      ],
      concept: "suspension",
      src: P(62, "Suspension; p.64; p.94 answer 15"),
    },
    {
      icon: "🔋",
      kicker: "Electrics",
      title: "Alternator and battery",
      visual: "electrical",
      list: [
        "The alternator (fan belt driven) generates power and charges the battery",
        "Battery: 12-volt DC, lead/sulphuric acid",
        "Negative earth; fuses protect against excess current and fire",
        "Ignition light on while driving: a charging fault",
      ],
      concept: "electrical",
      src: P(63, "Electrical system"),
    },
    {
      icon: "🛞",
      kicker: "Tyres",
      title: "Read the wear",
      visual: "tyre-wear",
      list: [
        "Over-inflated: centre wear · under-inflated: both edges, more fuel",
        "One edge: wheel alignment · shudder at speed: unbalanced front wheels",
        "Hit a kerb hard: have the alignment checked",
        "Check pressures cold",
      ],
      concept: "tyres-wear",
      src: P(64, "p.42; p.43"),
    },
    {
      icon: "♨️",
      kicker: "Overheating",
      title: "Never open it hot",
      visual: "overheat-steps",
      list: [
        "Pull off safely; neutral and parking brake; A/C off",
        "Steam or leaking coolant: engine off, bonnet shut until it stops",
        "Otherwise keep it running and check the fan works",
        "Cap off only once cooled, then add coolant",
      ],
      concept: "overheating",
      src: P(64, "Overheated engines"),
    },
    {
      icon: "🧰",
      kicker: "Maintenance and security",
      title: "Check, winterise, lock",
      list: [
        "Know every warning light — never ignore one",
        "Fluid levels weekly; low brake fluid can mean brake failure",
        "Before winter: battery, anti-freeze in radiator and washer bottle",
        "Leaving the car: key out, steering lock, windows shut, locked, nothing on show",
      ],
      concept: "maintenance",
      src: P(63, "Vehicle maintenance; p.64 Vehicle security"),
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
    { id: "r1", type: "flash", concept: "engine", visual: "four-stroke",
      front: "The sequence of the four-stroke cycle?",
      back: "Induction, compression, ignition, exhaust.", src: P(94, "Post-test answer 2") },
    { id: "r2", type: "flash", concept: "fuel",
      front: "How does the choke enrich the mixture?",
      back: "By restricting the flow of air into the carburettor.", src: P(94, "Post-test answer 4") },
    { id: "r3", type: "flash", concept: "ignition",
      front: "What does the coil do?",
      back: "Converts low-tension voltage from the battery to high-tension voltage for the ignition.", src: P(94, "Post-test answer 5") },
    { id: "r4", type: "flash", concept: "transmission",
      front: "What are the functions of the flywheel?",
      back: "Smooths the engine's rotation; holds the clutch; its toothed rim engages the starter motor.", src: P(94, "Post-test answer 8") },
    { id: "r5", type: "fill", concept: "transmission",
      before: "A rasping or squealing noise when the clutch pedal is pressed suggests a worn", after: ".",
      options: ["thrust bearing", "fan belt", "brake pad", "spark plug"], answer: "thrust bearing",
      explain: "That's how thrust-bearing wear is detected.", src: P(94, "Post-test answer 9") },
    { id: "r6", type: "flash", concept: "brake-faults",
      front: "What is brake fade, and its cause?",
      back: "Reduced braking efficiency when the brakes become too hot — caused by excessive braking.", src: P(94, "Post-test answer 11") },
    { id: "r7", type: "fill", concept: "brake-faults", visual: "hydraulic-brakes",
      before: "Air in the hydraulic brake system shows as", after: ".",
      options: ["a spongy pedal", "a squeal", "a pull to the left", "a hard pedal"], answer: "a spongy pedal",
      explain: "A spongy feel to the brakes.", src: P(94, "Post-test answer 12") },
    { id: "r8", type: "flash", concept: "brake-faults",
      front: "A slave cylinder seizes. The effect?",
      back: "The car pulls to one side when braking.", src: P(94, "Post-test answer 13") },
    { id: "r9", type: "truefalse", concept: "brakes",
      statement: "The handbrake usually works on all four wheels.", answer: false,
      explain: "It's cable-operated, independent, and generally works only on the rear wheels.", src: P(62, "The handbrake") },
    { id: "r10", type: "flash", concept: "steering", visual: "rack-pinion",
      front: "How can worn steering be detected?",
      back: "Excessive free play at the steering wheel.", src: P(94, "Post-test answer 16") },
    { id: "r11", type: "flash", concept: "transmission",
      front: "What is a torque converter?",
      back: "A 'clutch' in an automatic, where oil transmits the engine's turning force to the gearbox.", src: P(94, "Post-test answer 17") },
    { id: "r12", type: "truefalse", concept: "electrical",
      statement: "Most cars are 'negative earth'.", answer: true,
      explain: "The car body is connected to the battery's negative terminal.", src: P(63, "Electrical system") },
  ],
};

/* ---------------------------------------------------------------------------
   3. UNDER THE BONNET — recognition.
   --------------------------------------------------------------------------- */
const systems = {
  id: "systems",
  kind: "items",
  mode: "matching",
  title: "Under the Bonnet",
  blurb: "Spot it, sort it — systems and faults",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "engine",
      prompt: "Which picture shows the four-stroke cycle?",
      options: ["four-stroke", "cooling-system", "drivetrain"], answer: 0,
      names: ["Four strokes", "Cooling system", "Transmission"],
      explain: "Induction, compression, ignition, exhaust.", src: P(60, "The engine") },
    { id: "k2", type: "picture", label: "Spot it", concept: "suspension",
      prompt: "Which picture shows how to test the shock absorbers?",
      options: ["suspension", "tyre-wear", "rack-pinion"], answer: 0,
      names: ["Bounce test", "Tyre wear", "Steering"],
      explain: "Push down sharply on each corner — continued bouncing means worn dampers.", src: P(64, "How to check shock absorbers") },
    {
      id: "k3", type: "sort", concept: "transmission",
      prompt: "Which system does it belong to?",
      categories: [
        { id: "trans", label: "Transmission" },
        { id: "brake", label: "Braking" },
        { id: "cool", label: "Cooling" },
      ],
      cards: [
        { text: "Differential", cat: "trans" },
        { text: "Thrust bearing", cat: "trans" },
        { text: "Master cylinder", cat: "brake" },
        { text: "Slave cylinders", cat: "brake" },
        { text: "Thermostat", cat: "cool" },
        { text: "Radiator", cat: "cool" },
      ],
      explain: "Clutch, gearbox, differential; hydraulic brakes; coolant, pump, radiator, thermostat.", src: P(61, "Cooling; p.62") },
    {
      id: "k4", type: "sort", concept: "brake-faults",
      prompt: "Symptom — likely cause?",
      categories: [
        { id: "air", label: "Air in brakes" },
        { id: "heat", label: "Overheated brakes" },
        { id: "tyre", label: "Tyre / wheel" },
      ],
      cards: [
        { text: "Spongy brake pedal", cat: "air" },
        { text: "Brakes weak after a long steep hill", cat: "heat" },
        { text: "Wear on one edge of a tyre", cat: "tyre" },
        { text: "Steering shudder at speed", cat: "tyre" },
      ],
      explain: "Air: spongy. Heat: fade. Wheels: alignment and balance.", src: P(94, "Post-test answers 11, 12; p.71") },
    { id: "k5", type: "picture", label: "Spot it", concept: "tyres-wear",
      prompt: "Which picture tells you about tyre pressures from the tread?",
      options: ["tyre-wear", "tyre-tread", "tyre-ply"], answer: 0,
      names: ["Wear patterns", "Legal tread", "Ply types"],
      explain: "Centre wear: over-inflated. Both edges: under-inflated. One edge: alignment.", src: P(70, "Retention Q64, Q65") },
    { id: "k6", type: "picture", label: "Spot it", concept: "brakes",
      prompt: "Which picture shows the dual-circuit hydraulic brakes?",
      options: ["hydraulic-brakes", "electrical", "cooling-system"], answer: 0,
      names: ["Hydraulic brakes", "Electrics", "Cooling"],
      explain: "Two circuits — if one leaks, the other still works.", src: P(62, "Braking system") },
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
      id: "m1", type: "match", concept: "engine",
      prompt: "Match the part to its job.",
      pairs: [
        ["Camshaft", "Times the valves"],
        ["Coil", "Low voltage to high voltage"],
        ["Thermostat", "Lets the engine warm up quickly"],
        ["Alternator", "Generates power, charges the battery"],
        ["Fuse", "Protects the wiring"],
      ],
      explain: "Know what each part does to explain it to pupils.", src: P(60, "The engine; p.61; p.63") },
    {
      id: "m2", type: "match", concept: "transmission",
      prompt: "Match the part to its job.",
      pairs: [
        ["Clutch", "Disconnects engine from transmission"],
        ["Gearbox", "Minimum strain on the engine"],
        ["Differential", "Wheels turn at different speeds"],
        ["Damper", "Slows the spring's recoil"],
      ],
      explain: "From engine to road.", src: P(62, "The clutch; Suspension") },
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
  blurb: "Four strokes and an overheating engine",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "engine", visual: "four-stroke",
      prompt: "The four-stroke cycle — in order.",
      steps: ["Induction — fuel and air in", "Compression", "Ignition", "Exhaust — gases out"],
      explain: "Repeated continuously in each cylinder.", src: P(60, "The engine") },
    { id: "p2", type: "order", concept: "overheating", visual: "overheat-steps",
      prompt: "The engine overheats — in order.",
      steps: ["Pull off the road safely", "Neutral and parking brake", "Air conditioning off", "Steam or leak: switch the engine off", "Wait for it to cool before opening the cap"],
      explain: "Never open the radiator or expansion bottle while hot.", src: P(64, "Overheated engines") },
    { id: "p3", type: "order", concept: "brakes", visual: "hydraulic-brakes",
      prompt: "How the footbrake works — in order.",
      steps: ["Press the brake pedal", "Master cylinder builds pressure", "Fluid through the pipes", "Slave cylinders push pads or shoes", "Discs and drums slow the wheels"],
      explain: "A hydraulic system magnifies the pressure on the pedal.", src: P(62, "Braking system") },
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
  blurb: "Faults on the road",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "brake-faults",
      scene: "⛰️ Halfway down a long, steep hill the brakes suddenly feel weaker.",
      prompt: "The likely cause?",
      options: ["They've seized", "They've gone spongy", "Too much engine braking", "They've overheated — fade"], answer: 3,
      explain: "Prolonged braking heats the brakes. Use a lower gear and engine braking going down.", src: P(68, "Retention Q38 (answer d, p.97)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "brake-faults",
      scene: "↖️ Every time your pupil brakes, the car pulls to the left.",
      prompt: "What should you do?",
      options: ["Move further from the kerb", "Seek qualified help as soon as possible", "Use cadence braking", "Use the parking brake instead"], answer: 1,
      explain: "Most likely a brake fault or wrongly inflated tyres — consult a garage immediately.", src: P(69, "Retention Q40 (answer b, p.97); p.64") },
    { id: "s3", type: "choice", label: "Scenario", concept: "overheating", visual: "overheat-steps",
      scene: "♨️ The temperature gauge is in the red and steam is coming from the bonnet.",
      prompt: "What now?",
      options: ["Open the radiator cap", "Pull off, engine off, and wait for it to cool before opening anything", "Pour cold water in immediately", "Keep driving to a garage"], answer: 1,
      explain: "Never open the radiator or expansion bottle until the engine has cooled.", src: P(64, "Overheated engines") },
    { id: "s4", type: "choice", label: "Scenario", concept: "electrical",
      scene: "🔋 The ignition warning light comes on while driving.",
      prompt: "What does it warn of?",
      options: ["Overheating", "A flat battery", "Oil level", "A fault in the charging system"], answer: 3,
      explain: "The alternator isn't charging — the battery will run down.", src: P(70, "Retention Q53 (answer d, p.97)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "suspension", visual: "suspension",
      scene: "🪀 You press down on the front wing and the car keeps bouncing.",
      prompt: "The most likely cause?",
      options: ["Over-inflated tyres", "Under-inflated tyres", "Sports suspension", "Worn shock absorbers"], answer: 3,
      explain: "Worn dampers affect road holding, braking and cornering — have them replaced.", src: P(70, "Retention Q55 (answer d, p.97)") },
    { id: "s6", type: "choice", label: "Scenario", concept: "tyres-wear",
      scene: "💥 Your pupil hits a kerb hard at speed.",
      prompt: "What do you advise?",
      options: ["Have the wheels balanced", "Have the wheel alignment checked", "Renew the front tyres", "Ignore it"], answer: 1,
      explain: "A hard knock can knock the wheels out of alignment.", src: P(71, "Retention Q70 (answer b, p.97)") },
    { id: "s7", type: "choice", label: "Scenario", concept: "brake-faults",
      scene: "⚠️ The ABS warning light stays on after you start the engine.",
      prompt: "What should you do?",
      options: ["Release the parking brake", "Pump the brake pedal", "Have the brake fluid checked", "Have the braking system checked immediately"], answer: 3,
      explain: "Never ignore a warning light — it could mean a dangerous fault.", src: P(67, "Retention Q26 (answer d, p.97)") },
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
  blurb: "A pre-lesson check of your car",
  xpPer: 10,
  situation: "🔎 Before a day of lessons you check your car — and a pupil asks how it all works.",
  items: [
    { id: "w1", type: "choice", step: "Under the bonnet", concept: "cooling", prompt: "The coolant is low. Letting it stay low could…",
      options: ["Make the thermostat stick", "Be fine in winter", "Stop the carburettor flooding", "Cause the engine to overheat"], answer: 3,
      explain: "Coolant draws heat from the block to the radiator.", src: P(67, "Retention Q16 (answer d, p.97)") },
    { id: "w2", type: "choice", step: "Winter prep", concept: "cooling", prompt: "Why anti-freeze?",
      options: ["Stops the thermostat seizing", "Lowers the coolant's freezing point", "Thins the oil", "Stops brakes locking"], answer: 1,
      explain: "And ethylene glycol coolant also prevents corrosion and lubricates the pump.", src: P(67, "Retention Q19 (answer b, p.97)") },
    { id: "w3", type: "choice", step: "The oil", concept: "lubrication", prompt: "Your pupil asks what engine oil prevents.",
      options: ["Excessive fuel use", "Metal-to-metal contact in the engine", "Clutch friction", "Coolant wear"], answer: 1,
      explain: "Every moving part needs a layer of oil.", src: P(67, "Retention Q15 (answer b, p.97)") },
    { id: "w4", type: "choice", step: "Tyres", concept: "tyres-wear", visual: "tyre-wear", prompt: "When do you check pressures?",
      options: ["At every rest stop", "After fast driving", "When warm after a short trip", "When the tyres are cold"], answer: 3,
      explain: "Warm or hot tyres give a misleading reading.", src: P(71, "Retention Q68 (answer d, p.97)") },
    { id: "w5", type: "choice", step: "The brakes", concept: "brakes", prompt: "Your pupil asks how pedal pressure reaches the wheels.",
      options: ["A cable", "Hydraulic fluid", "The vacuum servo", "The transmission"], answer: 1,
      explain: "Master cylinder, pipes and slave cylinders.", src: P(69, "Retention Q44 (answer b, p.97)") },
    { id: "w6", type: "choice", step: "Leaving it", concept: "winter-security", prompt: "Parking up for lunch, you…",
      options: ["Leave the windows open a little", "Take the key, steering lock on, windows shut, lock it", "Leave the documents in the glovebox", "Leave it unlocked for a few minutes"], answer: 1,
      explain: "And never leave valuables or documents in the car.", src: P(64, "Vehicle security") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 97. Q2, Q8, Q13, Q30, Q34, Q57,
   Q60 and Q75 are omitted (see header).
   --------------------------------------------------------------------------- */
const page = n => (n <= 13 ? 66 : n <= 26 ? 67 : n <= 39 ? 68 : n <= 52 ? 69 : n <= 65 ? 70 : 71);
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(page(n), `Retention test Q${n}; answer p.97`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "The good driving instructor", ["needs to know every detail of the construction of their car", "will have a required understanding of the principles of vehicle construction", "will not need to teach a pupil the mechanical principles of a car", "will need to teach detailed vehicle mechanics to some pupils"], 1, "why"),
    R(3, "Your vehicle will use more fuel if", ["you have over-inflated tyres", "it is regularly serviced", "it has under-inflated tyres", "you accelerate and brake gently"], 2, "tyres-wear"),
    R(4, "Anti-lock braking systems prevent the wheels locking when braking heavily. This means that", ["the vehicle is impossible to skid", "tyres are less prone to wear unevenly", "the vehicle will not aquaplane", "tyres are less likely to lose their grip with the road surface"], 3, "brakes"),
    R(5, "When would you consider it an advantage to inflate tyres to a slightly higher pressure than normal?", ["for driving at higher speeds over long distances", "when the car is lightly loaded", "to reduce traction when heavily loaded", "when driving on poor road surfaces"], 0, "tyres-wear"),
    R(6, "Turning the steering wheel while your car is stationary may", ["not be a problem with power-assisted steering", "damage the engine", "twist the tyre tread permanently", "damage the tyres and steering mechanism"], 3, "steering"),
    R(7, "An automatic choke that has not disengaged will", ["make acceleration easier", "make the vehicle easier to control on hills", "not affect vehicle control", "make the vehicle more difficult to control"], 3, "fuel"),
    R(9, "A catalytic converter, fitted to modern vehicles", ["is part of the fuel system", "cleans exhaust from diesel engines", "is part of the exhaust system", "operates on the air intake system"], 2, "exhaust"),
    R(10, "What is cruise control?", ["a system on motorways to allow free-flowing traffic", "a GPS device that shows you where you are", "a device that issues advice to drivers on a leisurely drive", "a device, usually electronic, that lets the vehicle select and maintain a fixed speed on the open road"], 3, "why"),
    R(11, "If whilst driving you see a warning light illuminate on your instrument panel, you should", ["check out the fault at the end of your journey", "replace the faulty fuse promptly", "check out the fault as soon as you can do so safely", "immediately switch off the ignition and coast to a stop"], 2, "maintenance"),
    R(12, "Where is the windscreen washer control normally positioned?", ["on the dashboard", "usually on a stalk by the steering column", "in the engine compartment", "on the floor"], 1, "maintenance"),
    R(14, "In a vehicle with automatic transmission, an automatic choke can cause the vehicle to", ["run too hot", "creep excessively", "stall", "kick down prematurely"], 1, "fuel"),
    R(15, "One purpose of engine oil is to prevent", ["excessive fuel consumption", "metal-to-metal contact in the engine", "friction on the clutch plate", "excessive wear in the coolant system"], 1, "lubrication"),
    R(16, "Allowing the radiator coolant to get too low", ["will cause the thermostat to stick", "is not a problem in winter", "will prevent the carburettor from flooding", "could result in the engine overheating"], 3, "cooling", "cooling-system"),
    R(17, "If the fan belt of a car is too slack it is possible that", ["the electric fan will fail", "the thermostat will stick", "the engine coolant will overheat", "the heater won't work"], 2, "cooling", "cooling-system"),
    R(18, "The engine of a car may exceed its optimum running temperature if", ["the thermostat is sticking", "the exhaust outlet is blocked", "diesel fuel is used", "the catalytic converter has failed"], 0, "cooling"),
    R(19, "The purpose of anti-freeze is", ["to prevent seizure of the engine thermostat", "to reduce the freezing point of the engine coolant", "to reduce the viscosity of the engine oil in winter", "to stop brakes from locking in icy conditions"], 1, "cooling"),
    R(20, "An electrically operated fan in the engine cooling system is designed to", ["switch on with the ignition", "cool the engine in hot weather", "switch on at a particular engine temperature", "warm the interior of the vehicle"], 2, "cooling"),
    R(21, "The transmission system of a car may include", ["clutch, gearbox and master cylinder", "clutch, differential and damper", "clutch, gearbox and constant velocity joint", "gearbox, back axle and slave cylinders"], 2, "transmission", "drivetrain"),
    R(22, "The purpose of the clutch is to enable", ["smooth braking without judder", "the engine to be disconnected from the transmission", "the engine to drive the car when neutral is selected", "the instructor to stop the vehicle"], 1, "transmission"),
    R(23, "The three main parts of the clutch are", ["flywheel, thrust bearing, pressure plate", "friction plate, flywheel, pressure plate", "thrust bearing, pressure plate, friction plate", "flywheel, fulcrum spring, pressure plate"], 2, "transmission", "clutch-plates"),
    R(24, "When turning a corner, the differential", ["causes the driven wheels to turn at the same speed", "causes the outer wheel to turn more slowly than the inner wheel", "automatically compensates for the steering deficit", "allows the inner wheel to turn more slowly than the outer wheel"], 3, "transmission", "differential"),
    R(25, "A rasping or squealing noise heard when the clutch is disengaged", ["indicates poor clutch control", "may indicate a worn thrust bearing", "may indicate the pressure plate is breaking up", "is usually due to a loose fan belt"], 1, "transmission"),
    R(26, "If the anti-lock braking system warning light stays on after engine ignition, you should", ["release the parking brake", "pump the brake pedal", "have the brake fluid level checked", "have the braking system checked immediately"], 3, "brake-faults"),
    R(27, "Anti-lock braking systems automatically assist with braking", ["whenever the driver chooses", "whenever the driver presses the brake pedal", "if the hydraulic system fails", "when the wheels are about to lock"], 3, "brakes"),
    R(28, "When a driver uses the choke on a petrol-engine car, this", ["will enrich the petrol mixture", "will warm the engine", "will weaken the petrol mixture", "will reduce fuel consumption"], 0, "fuel"),
    R(29, "'Free play' in relation to the clutch mechanism refers to", ["the coasting distance required to change gear", "the distance between the pressure plate and friction plate when the pedal is pressed", "the distance the clutch pedal can be pressed before disengaging the clutch", "the thickness of the friction plate that can wear before replacement"], 2, "transmission"),
    R(31, "A small amount of oil on the friction plate in the clutch assembly is", ["not always necessary", "essential", "dangerous", "unlikely to cause the driver a problem"], 2, "transmission"),
    R(32, "The gearbox is designed to enable", ["the car to be driven with minimum engine revolutions and maximum fuel efficiency", "the car to be driven with minimum strain on the engine", "the clutch to take up the drive smoothly", "the driver to save fuel"], 1, "transmission"),
    R(33, "Lower gears are used at low speeds because they", ["are less powerful", "are more powerful", "give greater fuel efficiency", "are quieter"], 1, "transmission"),
    R(35, "A faulty synchromesh is most likely to result in", ["excessive clutch wear", "the gear lever reverting to neutral under acceleration", "difficult or noisy gear selection", "a warning light on the instrument panel"], 2, "transmission"),
    R(36, "Why may you use a speed limiter?", ["to set the maximum speed of a travelling vehicle", "to set the minimum speed of a travelling vehicle", "to place a 100 km/h maximum sticker on the back of the vehicle", "a speed you promised never to exceed"], 0, "why"),
    R(37, "The main benefit of four-wheel drive systems is", ["improved road holding", "reduced engine wear", "reduced tyre wear", "better resale value"], 0, "transmission"),
    R(38, "Driving down a long steep hill you notice your brakes are not working as well as they should. This is probably because", ["they have seized up", "they have become spongy", "you have relied too heavily on engine braking", "they have overheated"], 3, "brake-faults"),
    R(39, "Brake fade is caused mainly by", ["badly worn linings", "hydraulic fluid leakage", "prolonged and excessive braking", "worn brake pads"], 2, "brake-faults"),
    R(40, "If your vehicle pulls to one side when braking, you should", ["position further from the edge of the carriageway", "seek qualified assistance as soon as possible", "use the cadence braking technique", "use the parking brake instead"], 1, "brake-faults"),
    R(41, "If, when braking, the car pulls to one side, the most likely cause is", ["poorly adjusted brakes", "an uneven road surface", "harsh braking", "unevenly worn tyres"], 0, "brake-faults"),
    R(42, "If in any doubt about your vehicle's ability to brake safely you should", ["not use it and have it checked immediately", "drive to the nearest garage and have it checked", "get the vehicle towed to the nearest garage", "drive on — it may work itself out in time"], 0, "brake-faults"),
    R(43, "A spongy feel to the brake pedal may indicate", ["low brake fluid level", "air in the hydraulic system", "brake fade", "a failed pedal rubber"], 1, "brake-faults", "hydraulic-brakes"),
    R(44, "Pressure on the footbrake applies braking force to the wheels via", ["the brake cable", "hydraulic fluid", "the vacuum servo unit", "the transmission system"], 1, "brakes", "hydraulic-brakes"),
    R(45, "The main advantage of a dual braking system on a car is that", ["instructors and testers can take control of the car", "it makes complete brake failure highly unlikely", "if the fluid level falls too low, the secondary system acts as a failsafe", "disc and drum brakes can be fitted to each wheel"], 1, "brakes", "hydraulic-brakes"),
    R(46, "A vacuum servo unit, as part of a hydraulic braking system, helps the driver apply pressure to the brakes and", ["works whether or not the engine is running", "works only when the ignition is off", "might fade if the servo unit is low on coolant", "only works when the engine is running"], 3, "brakes"),
    R(47, "When fitted to a motor car, an anti-lock braking system (ABS)", ["will reduce directional control when cornering and braking at the same time", "will always prevent skidding during harsh braking", "can aid directional control when braking and cornering at the same time", "prevents steering and braking during a skid"], 2, "brakes"),
    R(48, "Your engine has overheated and you need to add coolant to the radiator. You should", ["only use anti-freeze to top up the radiator", "use boiling water if the radiator is hot", "do so immediately with cold water", "allow the radiator to cool before opening the filler cap"], 3, "overheating", "overheat-steps"),
    R(49, "Catalytic converters on petrol-engine cars", ["reduce noise pollution", "reduce emissions from lead replacement petrol", "are more efficient than those on diesel cars", "reduce the emissions of harmful gases"], 3, "exhaust"),
    R(50, "Using excessive force to apply the handbrake is likely to", ["stop the car too quickly", "stretch the cable", "wear the ratchet", "cause a wrist injury"], 1, "brakes"),
    R(51, "Heavy steering can be caused by", ["a firm road surface", "uneven brake pad wear", "worn tyres", "under-inflated tyres"], 3, "steering"),
    R(52, "Your vehicle is fitted with power-assisted steering. If the power failed, this would", ["make the steering stick", "reduce tyre wear", "increase tyre wear", "need more effort from the driver to steer"], 3, "steering"),
    R(53, "If the ignition warning light came on whilst driving, it would warn the driver that the", ["engine was overheating", "battery was flat", "oil level needed checking", "charging system had a fault"], 3, "electrical", "electrical"),
    R(54, "The purpose of a catalytic converter is to reduce", ["soot output", "a fire risk when parked in long grass", "fuel consumption", "toxic exhaust emissions"], 3, "exhaust"),
    R(55, "Testing your suspension, you notice your vehicle keeps bouncing when you press down on the front wing. This more likely indicates", ["over-inflated tyres", "under-inflated tyres", "sports suspension", "worn shock absorbers"], 3, "suspension", "suspension"),
    R(56, "A torsion bar may be part of the suspension system and is essentially a", ["damper", "spring", "strut", "timer"], 1, "suspension"),
    R(58, "Shock absorbers, which form part of the suspension system", ["are dampers", "are springs", "are struts", "are essential in the event of a head-on collision"], 0, "suspension"),
    R(59, "Worn suspension is dangerous and can result in", ["a rough ride and reduced tyre wear", "reduced grip with the road surface", "increased centrifugal pitch", "more even tyre wear"], 1, "suspension"),
    R(61, "Radial-ply tyres", ["tend to retain their shape regardless of road camber", "maintain constant tread contact with the road surface", "may not be used with cross-ply tyres on the same car", "are only fitted to motorcycles"], 1, "tyres-wear", "tyre-ply"),
    R(62, "Which statement best compares radial and cross-ply tyres?", ["cross-ply will last longer and wear more evenly than radial-ply", "radial-ply will wear more evenly but not last as long as cross-ply", "radial-ply are deemed to have better grip, last longer and wear more evenly than cross-ply", "cross-ply and radial-ply tyres generally wear out at the same rate"], 2, "tyres-wear", "tyre-ply"),
    R(63, "Higher tyre pressures than normal may be an advantage when driving", ["at high speeds for long distances", "on very uneven surfaces", "a vehicle towing a trailer or caravan", "an overloaded vehicle"], 0, "tyres-wear"),
    R(64, "Over-inflation of a tyre may result in", ["the tyre overheating", "excessive wear in the centre of the tread", "excessive wear to the outer edges of the tread", "better grip with the road surface"], 1, "tyres-wear", "tyre-wear"),
    R(65, "Under-inflation of a tyre may result in", ["light steering", "excessive wear in the centre of the tread", "excessive wear to the outer edges of the tread", "better grip with the road surface"], 2, "tyres-wear", "tyre-wear"),
    R(66, "Driving in a steady stream of traffic, your steering suddenly seems to pull to one side. It is more than likely that", ["your steering has become unbalanced", "one of your wheels has lost a balance weight", "your front wheels are out of alignment", "you have a puncture"], 3, "tyres-wear"),
    R(67, "Steering wheel shudder, particularly at higher speeds, is probably due to", ["an uneven road surface", "unbalanced front wheels", "over-pressurised shock absorbers", "misaligned driven wheels"], 1, "tyres-wear"),
    R(68, "You should check tyre pressures regularly. When should this be done?", ["at every rest stop in your journey", "after a long spell of high-speed driving", "when tyres are warm after a short journey in town", "when the tyres are cold"], 3, "tyres-wear"),
    R(69, "If a tyre has worn unevenly on one edge, it is most likely that", ["the rear wheels are not balanced", "the wheel alignment is incorrect", "the driver mostly follows routes of left or right turns", "there is a fault with the steering mechanism"], 1, "tyres-wear", "tyre-wear"),
    R(70, "After striking a kerb or road hazard at speed, a driver would be advised to", ["have the wheels balanced", "have the wheel alignment checked", "renew the front tyres", "have their eyesight checked"], 1, "tyres-wear"),
    R(71, "A catalytic converter cleans up exhaust emissions by", ["removing excess sulphur from spent diesel fuel", "converting carbon monoxide to carbon dioxide", "reducing the lead compounds released to the atmosphere", "increasing nitrogen oxide emissions"], 1, "exhaust"),
    R(72, "Catalytic converters can be particularly damaged irreversibly", ["by using leaded petrol", "by allowing the car to run out of fuel", "by using sulphur-free diesel", "by avoiding short journeys"], 0, "exhaust"),
    R(73, "The steering column of a car is collapsible so that", ["the height of the steering wheel may be adjusted", "the driver is less prone to injury in an accident", "shocks from uneven roads aren't transmitted through the wheel", "it can be removed easily by the emergency services"], 1, "steering"),
    R(74, "A rack and pinion mechanism on a vehicle is part of the", ["clutch", "differential", "steering", "transmission"], 2, "steering", "rack-pinion"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "ignition",
      prompt: "Diesel engines ignite the fuel/air mixture by…", options: ["A spark plug", "Compression alone", "The coil", "The choke"], answer: 1,
      explain: "No spark is needed in a diesel.", src: P(61, "Ignition system") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "steering",
      prompt: "Which picture shows the steering mechanism?", options: ["rack-pinion", "drivetrain", "differential"], answer: 0,
      names: ["Rack and pinion", "Transmission", "Differential"],
      explain: "The pinion turns on a toothed rack.", src: P(62, "Steering") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "brakes",
      statement: "Disc brakes are less likely to fade than drum brakes.", answer: true,
      explain: "They have a cooling air flow.", src: P(62, "Disc brakes") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "maintenance",
      scene: "🔥 Driving along, you smell burning rubber.",
      prompt: "What should you do?", options: ["Open the windows", "Stop, switch off the ignition and investigate", "Drive faster to the garage", "Ignore it"], answer: 1,
      explain: "If it's a fire, move well away and call the fire brigade.", src: P(63, "The vehicle") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "brake-faults",
      prompt: "Match the symptom to its cause.", pairs: [["Spongy pedal", "Air in the system"], ["Fade", "Overheated brakes"], ["Clutch squeal", "Worn thrust bearing"]],
      explain: "Symptoms tell you the fault.", src: P(94, "Post-test answers 9, 11, 12") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "engine",
      prompt: "Four strokes:", steps: ["Induction", "Compression", "Ignition", "Exhaust"],
      explain: "Suck, squeeze, bang, blow.", src: P(60, "The engine") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "tyres-wear", visual: "tyre-wear",
      scene: "🛞 The tread on your front tyre is worn badly on its inner edge only.",
      prompt: "The likely cause?", options: ["Over-inflation", "Under-inflation", "Incorrect wheel alignment", "Too much motorway driving"], answer: 2,
      explain: "Wear on one edge points to alignment.", src: P(71, "Retention Q69 (answer b, p.97)") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "transmission",
      prompt: "When turning a corner, the differential…", options: ["Turns both wheels at the same speed", "Turns the outer wheel slower", "Compensates the steering", "Lets the inner wheel turn slower than the outer"], answer: 3,
      explain: "The outer wheel travels further.", src: P(67, "Retention Q24 (answer d, p.97)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "cooling",
      prompt: "Your pupil asks why the fan belt matters for the engine temperature. Which picture shows it?", options: ["cooling-system", "electrical", "four-stroke"], answer: 0,
      names: ["Cooling system", "Electrics", "Four strokes"],
      explain: "The fan belt drives the water pump — slack belt, overheating.", src: P(61, "Cooling system") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "brake-faults",
      prompt: "In any doubt about your vehicle's ability to brake safely, you should…", options: ["Not use it and have it checked immediately", "Drive to the nearest garage", "Get it towed", "Drive on"], answer: 0,
      explain: "Don't take chances with brakes.", src: P(69, "Retention Q42 (answer a, p.97)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "2.9",
  number: "2.9",
  title: "Mechanical Principles",
  pages: [60, 71],
  intro: "Engine, fuel, ignition, cooling, transmission, brakes, steering, suspension and electrics — and how to spot faults.",
  objectives: [
    "The engine, its lubrication and cooling systems",
    "The ignition, fuel and exhaust systems",
    "The transmission system",
    "The braking system and steering mechanism",
    "The suspension and electrical systems",
  ],
  objectivesSrc: P(60, "Objectives"),
  mcqLink: { sectionId: "adi.sec.mechanics", label: "Basic Mechanics & Vehicle Maintenance" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...systems, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "under-the-bonnet", icon: "🔧", label: "Under the Bonnet", rule: { activity: "systems", min: 100 } },
    { id: "mechanics-specialist", icon: "🏆", label: "Mechanics Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
