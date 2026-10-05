/*
  ===========================================================================
  BOOK 2 · UNIT 2.1 — THE CAR CONTROLS AND DRIVING AIDS

  Source: "Theory Resource Workbook 2 of 4 — Mechanical Knowledge,
  Pedestrians & Traffic Signs" (Driver Education Supplies), book pages
  5–13, with the post-test model answers on page 90 and the retention-test
  answers on page 96 (1c 2b 3a 4d 5b 6b 7a 8a 9c 10b 11d 12d 13b 14c 15a
  16d 17c 18b 19c 20c).

  Retention test Q19 is omitted: its key gives c ("burn engine oil
  faster") for selecting a higher gear as soon as possible, but page 8
  presents early upshifts as eco driving, which supports d ("be better for
  the environment"). Q6 (power steering), Q7 (diesel = compression
  ignition), Q9 (dual-circuit brakes), Q11 (clutch control) and Q16 (horn
  hours) cover points the unit text doesn't state; they are kept as the
  book sets them.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 2, unit: "2.1", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "Why the controls matter",
    text: "An instructor needs enough mechanical knowledge to explain to a novice, clearly and without ambiguity, how the controls work and the principles of safe, sympathetic driving — not a detailed knowledge of a car's construction.",
    src: P(5, "Unit introduction"),
  },
  "checks": {
    title: "Before entering and starting",
    text: "Before entering: windows, mirrors and lights clean; frost, snow and ice removed; tyres checked for wear and damage; no leaks underneath; nothing behind if reversing. Before starting: bonnet, tailgate and doors closed; seat and steering wheel adjusted; mirrors adjusted; lights working; seat belt on; gauges and warning lights checked; loads stored securely.",
    src: P(5, "Before entering the vehicle; Before starting"),
  },
  "seat": {
    title: "The driving seat",
    text: "Adjust the seat first so you can reach and use every control comfortably and easily: knee slightly bent with the clutch fully down, arms reaching the top of the wheel without stretching and relaxed at the elbows, a clear view of the road, body firmly against the seat back. Check the seat locks into position. As soon as you're seated, check the handbrake is applied.",
    src: P(6, "The Driving Seat; p.90 answers 1, 2"),
  },
  "cockpit": {
    title: "Cockpit and ancillary controls",
    text: "Gauges and warning lights (speedometer, rev counter, fuel, temperature), hazard lights, heating and air controls, demisters, airbag deactivator. Steering-wheel controls and stalks: wipers and washers, indicators, lights and dipswitch, horn, cruise control, speed limiter. Ancillary controls are placed so you can use them without taking your hand off the wheel or your eyes off the road. Every car differs — check the owner's handbook.",
    src: P(5, "Identifying Cockpit Controls; p.6; p.9 Ancillary controls"),
  },
  "abc": {
    title: "Foot controls: A, B, C",
    text: "The main controls are grouped into foot controls — Accelerator, Brake and Clutch — and hand controls — steering wheel, handbrake and gear lever. Left to right on the floor: clutch, brake, accelerator.",
    src: P(7, "The Main Controls"),
  },
  "accelerator": {
    title: "Accelerator (gas pedal)",
    text: "Controls the rate at which the fuel and air mixture is supplied to the engine. Right foot only; the harder you press, the faster the engine runs and the more power it makes. Press lightly with gentle changes of pressure. Avoid fierce acceleration and jerky movements.",
    src: P(7, "Accelerator; p.90 answers 4, 5"),
  },
  "brake": {
    title: "Footbrake",
    text: "Slows or stops the car by applying pressure to the front and rear brakes through a hydraulic system. Right foot only — you don't normally need the gas and the brake at the same time. Brake progressively: press lightly with the ball of the foot, increasing pressure gradually as the car slows. Avoid harsh braking and jerky movements.",
    src: P(7, "Brake; p.90 answers 6, 7"),
  },
  "clutch": {
    title: "Clutch",
    text: "Lets the engine run without driving the wheels, and lets you control the car at slow speed. Two plates — one from the engine, one through the gearbox to the wheels — are held together by spring pressure; pressing the pedal forces them apart. Use the left foot, when changing gear and just before stopping. The biting point is where the plates just make contact — felt and heard as the engine speed drops slightly. Avoid jerky use, slipping the clutch when not manoeuvring, and \"riding\" it.",
    src: P(7, "Clutch; p.90 answers 8–10"),
  },
  "steering": {
    title: "Steering",
    text: "Grip lightly but firmly at ten-to-two or quarter-to-three, thumbs up, both hands on unless working another control or giving a signal; never take both hands off while moving. Look well ahead to steer a straight course. Turn using push-pull and feed the wheel back through your hands. Avoid jerky movements, crossing your hands, letting the wheel spin back, and dry steering (turning while stationary).",
    src: P(7, "Steering Wheel; p.8 Avoid; p.90 answers 11, 12"),
  },
  "crossed-hands": {
    title: "Why never cross your hands",
    text: "Push-pull keeps both hands controlling the wheel, so you can change direction instantly. If you have to steer rapidly in general driving you're going too fast. With crossed hands, a deploying airbag (about 350–400 km/h) can drive your hands into your face — causing broken cheekbones and even loss of an eye.",
    src: P(8, "Correct use; On a further note; p.90 answer 14"),
  },
  "steering-terms": {
    title: "Steering lock, oversteer and understeer",
    text: "Steering lock is the angle through which the front wheels can turn. Oversteer: the car responds more than you expect for the amount you turn the wheel. Understeer: it responds less.",
    src: P(90, "Post-test answers 13, 15"),
  },
  "gears": {
    title: "The gear lever",
    text: "Lets you change gear and select neutral, breaking the link between engine and wheels. Gears match the engine's power to the car's speed and load: first is the most powerful, top the least powerful but most economical. Use the palm with a light, firm touch — don't look at the lever, coast, hold it unnecessarily or force it.",
    src: P(8, "Manual Gear Shift Lever; p.90 answers 16, 17"),
  },
  "handbrake": {
    title: "Handbrake / parking brake",
    text: "Usually works on the rear wheels and secures the car once stopped. Press the button, pull up firmly, release the button; to release, lift slightly, press the button and lower. Types include electric (a \"P\" button) and auto-hold. Check only the parking-brake light is showing. Never apply it while moving — real risk of locking the wheels and skidding — except if the footbrake fails.",
    src: P(9, "Handbrake/Parking Brake; p.90 answers 18, 19"),
  },
  "starting": {
    title: "Ignition and starting",
    text: "Key positions: 1 accessories (radio), 2 ignition and instruments, 3 starter — release as soon as the engine starts. Before starting: parking brake on (look for the red \"!\" light), neutral (manual) or P (automatic), clutch down (manual), brake pedal down. Then check gauges and warning lights go out — except one such as engine-cold. A choke, in older cars, enriches the mixture for a cold engine.",
    src: P(9, "Ignition Switch; p.10 Starting the Engine; p.90 answer 20"),
  },
  "visual-aids": {
    title: "Visual driving aids and heated screens",
    text: "Mirrors are the most important visual aids; the rest are on the dashboard. Warning lights: red = danger, amber = warning, green = working or in use. Heated windscreens clear condensation, frost and ice — use them only as long as necessary, then use the heater on fresh air, not recirculation.",
    src: P(10, "Heated Windscreens; Visual Driving Aids"),
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
    "Seat first: reach every control comfortably — knee slightly bent",
    "A, B, C: Accelerator and Brake with the right foot, Clutch with the left",
    "Push-pull steering — never cross your hands",
  ],
  cards: [
    {
      icon: "🚗",
      kicker: "Car controls",
      title: "Explain it simply",
      visual: "pedals",
      body: [
        "You don't need to know how a car is built — but you must be able to explain the controls to a novice, clearly and without ambiguity, and the principles of safe, sympathetic driving.",
        "Every car is different: some use touch screens, some have push-button starts. Get to know each car's controls, and read the owner's handbook.",
      ],
      think: ["🪑 Can I reach everything?", "👣 Which foot for which pedal?", "👀 Can I use the controls without looking?"],
      concept: "why",
      src: P(5, "Unit introduction; p.6 Note"),
    },
    {
      icon: "✅",
      kicker: "Before you drive",
      title: "Checks outside and in",
      sections: [
        { head: "Before getting in", list: ["Windows, mirrors and lights clean", "Frost, snow and ice removed", "Tyres: uneven wear or damage", "No leaks under the car", "Nothing behind if you'll reverse"] },
        { head: "Before starting", list: ["Bonnet, tailgate and doors shut", "Seat and steering wheel adjusted", "Mirrors adjusted; lights working", "Seat belt on", "Gauges and warning lights checked", "Loads stored or fastened securely"] },
      ],
      concept: "checks",
      src: P(5, "Before entering; Before starting"),
    },
    {
      icon: "🪑",
      kicker: "The driving seat",
      title: "Seat first",
      visual: "driving-seat",
      ask: {
        prompt: "The main reason for adjusting the seat properly is to…",
        options: ["Drive as comfortably as possible", "Reach and use each control comfortably and easily", "Fasten the seat belt easily"],
        answer: 1,
      },
      list: [
        "As soon as you're seated: check the handbrake is applied",
        "Knee slightly bent with the clutch pedal fully down",
        "Arms reach the top of the wheel without stretching — relaxed at the elbows",
        "A clear view of the road; body firmly against the seat back",
        "Check the seat locks into position",
      ],
      concept: "seat",
      src: P(6, "The Driving Seat; p.90 answers 1, 2"),
    },
    {
      icon: "🎛️",
      kicker: "Cockpit controls",
      title: "Know the dashboard",
      visual: "warning-colours",
      sections: [
        { head: "Gauges and lights", list: ["Speedometer / odometer; rev counter (not on every car)", "Fuel and temperature gauges", "Warning lights: fuel, oil, engine, water…"] },
        { head: "On and around the wheel", list: ["Wipers and washers", "Indicators; side, dipped and main beam", "Horn; cruise control; speed limiter", "Audio controls"] },
        { head: "Others to adjust", list: ["Steering wheel height and reach", "Seat-belt height; head restraints", "Interior and door mirrors"] },
      ],
      callout: "Red = danger. Amber = warning. Green = working or in use.",
      concept: "cockpit",
      src: P(5, "Identifying Cockpit Controls; p.6; p.10"),
    },
    {
      icon: "🦶",
      kicker: "The main controls",
      title: "A, B and C",
      visual: "pedals",
      ask: {
        prompt: "Which foot operates the brake?",
        options: ["Left", "Right", "Either"],
        answer: 1,
      },
      sections: [
        { head: "Accelerator (gas pedal)", list: ["Controls how fast fuel and air reach the engine", "Right foot; gentle changes of pressure", "Avoid fierce acceleration"] },
        { head: "Brake (progressive)", list: ["Hydraulic: front and rear brakes", "Right foot — you don't normally need gas and brake together", "Progressive braking: light at first, increasing as the car slows"] },
        { head: "Clutch", list: ["Left foot only", "For changing gear and just before stopping", "Avoid riding or slipping it"] },
      ],
      concept: "abc",
      src: P(7, "The Main Controls; p.90 answers 3–7"),
    },
    {
      icon: "⚙️",
      kicker: "The clutch",
      title: "Two plates and a spring",
      visuals: ["clutch-plates:up", "clutch-plates:down", "clutch-plates:biting"],
      ask: {
        prompt: "With the clutch pedal UP, the plates are…",
        options: ["Held apart", "Held together by spring pressure", "Slipping"],
        answer: 1,
      },
      list: [
        "One plate is connected to the engine; the other, through the gearbox, to the wheels",
        "Pedal up: spring pressure holds them together — the engine drives the wheels",
        "Pedal down: the plates part — the engine runs without driving the wheels",
        "Biting point: the plates just touch — the engine note drops slightly",
      ],
      concept: "clutch",
      src: P(7, "Clutch; p.90 answers 8–10"),
    },
    {
      icon: "🛞",
      kicker: "Steering",
      title: "Hands at quarter to three",
      visuals: ["wheel-hands:quarter-three", "push-pull"],
      list: [
        "Grip lightly but firmly at ten-to-two or quarter-to-three — thumbs up",
        "Both hands on, unless changing gear or giving a signal",
        "Never take both hands off while moving",
        "Look well ahead to steer a straight course",
        "Turn with push-pull; feed the wheel back through your hands",
      ],
      sections: [
        { head: "Avoid", list: ["Jerky movements", "Crossing your hands", "Letting the wheel spin back through your hands", "Turning the wheel while stationary"] },
      ],
      concept: "steering",
      src: P(7, "Steering; p.8 Avoid"),
    },
    {
      icon: "💥",
      kicker: "Crossed hands",
      title: "Why it matters",
      visual: "wheel-hands:crossed",
      body: [
        "Push-pull keeps both hands controlling the wheel and lets you change direction instantly. If you need to steer rapidly in normal driving, you're going too fast.",
        "Crossed hands: an airbag deploys towards the driver's face at about 350–400 km/h, driving the hands into the face — broken cheekbones and even loss of an eye.",
      ],
      callout: "Crossing hands is only permissible at very low speed — and best avoided.",
      concept: "crossed-hands",
      src: P(8, "Correct use; On a further note; p.90 answer 14"),
    },
    {
      icon: "↔️",
      kicker: "Steering terms",
      title: "Lock, oversteer, understeer",
      visual: "oversteer",
      body: [
        "Steering lock: the angle through which the front wheels can turn.",
        "Oversteer: the car responds MORE than you expect for the amount you turn the wheel. Understeer: it responds LESS.",
      ],
      concept: "steering-terms",
      src: P(90, "Post-test answers 13, 15"),
    },
    {
      icon: "🕹️",
      kicker: "The gear lever",
      title: "Match power to speed and load",
      visual: "gear-pattern",
      list: [
        "Gears match the engine's power to the car's speed and the load it moves",
        "First gear is the most powerful; top gear the least — but most economical",
        "Low gears for low speed and high load; higher gears for higher speed",
        "Eco driving: higher gears as soon as possible without straining the engine",
        "Palm of the left hand, light but firm touch",
      ],
      sections: [
        { head: "Avoid", list: ["Looking at the lever", "Coasting — clutch down or neutral while moving", "Holding the lever unnecessarily; forcing it"] },
      ],
      concept: "gears",
      src: P(8, "Manual Gear Shift Lever; p.90 answers 16, 17"),
    },
    {
      icon: "🅿️",
      kicker: "Parking brake",
      title: "Secure it once stopped",
      visual: "parking-brake",
      list: [
        "Usually works on the rear wheels",
        "Apply: press the button, pull firmly up, release the button",
        "Release: lift slightly, press the button, lower the lever",
        "Electric: usually a button marked \"P\"; auto-hold works at a standstill",
        "Check only the parking-brake light is showing",
      ],
      callout: "Never apply it while moving — real danger of locking the wheels and skidding. The exception: if the footbrake fails.",
      concept: "handbrake",
      src: P(9, "Handbrake/Parking Brake; p.90 answers 18, 19"),
    },
    {
      icon: "🔑",
      kicker: "Starting the engine",
      title: "Safe start",
      visual: "ignition",
      list: [
        "Parking brake on — look for the red \"!\" light",
        "Neutral (manual) or P (automatic)",
        "Clutch down (manual); brake pedal down",
        "Turn the key or press the button — release as soon as the engine starts",
        "Check the warning lights go out (one may stay on, e.g. engine cold)",
      ],
      callout: "Older cars may have a choke: it enriches the fuel-air mixture for a cold engine.",
      concept: "starting",
      src: P(9, "Ignition; p.10 Starting the Engine; p.90 answer 20"),
    },
    {
      icon: "🌡️",
      kicker: "Heated screens",
      title: "Only as long as needed",
      visual: "demist",
      body: [
        "Heated front and rear screens clear condensation, frost and ice. Use them only when — and only for as long as — necessary.",
        "Once clear and the car's warm, switch off and use the heater on fresh air — recirculation just moves damp air around and the glass mists again.",
      ],
      concept: "visual-aids",
      src: P(10, "Heated Windscreens"),
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
    { id: "r1", type: "flash", concept: "seat",
      front: "What should a driver do as soon as they're seated?",
      back: "Check that the handbrake is applied.", src: P(90, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "accelerator",
      front: "Give another name for the accelerator.",
      back: "The gas pedal.", src: P(90, "Post-test answer 4") },
    { id: "r3", type: "flash", concept: "accelerator",
      front: "What does a carburettor or fuel injector do?",
      back: "Mixes or directs fuel and air, which is then pumped into the engine.", src: P(90, "Post-test answer 5") },
    { id: "r4", type: "fill", concept: "brake",
      visual: "progressive-brake",
      before: "Press the brake lightly at first, increasing pressure as the brakes act — that is", after: "braking.",
      options: ["progressive", "cadence", "emergency", "engine"], answer: "progressive",
      explain: "Light pressure first, increasing as the brakes begin to act.", src: P(90, "Post-test answer 7") },
    { id: "r5", type: "flash", concept: "clutch", visual: "clutch-plates:biting",
      front: "What is the biting point, and how is it found?",
      back: "Where the clutch plates just make contact — felt and heard, as the engine speed drops slightly.", src: P(90, "Post-test answer 10") },
    { id: "r6", type: "truefalse", concept: "steering",
      statement: "You may drive with one hand when changing gear or giving a hand signal.", answer: true,
      explain: "Only when the other hand is needed for another driving job.", src: P(90, "Post-test answer 12") },
    { id: "r7", type: "flash", concept: "steering-terms",
      front: "What does \"steering lock\" mean?",
      back: "The angle through which the front wheels can turn.", src: P(90, "Post-test answer 13") },
    { id: "r8", type: "fill", concept: "gears", visual: "gear-pattern",
      before: "The most powerful gear is", after: ".",
      options: ["first", "top", "reverse", "third"], answer: "first",
      explain: "First is the most powerful; top (fourth, fifth, sixth…) is the least powerful — but most economical.", src: P(90, "Post-test answer 17") },
    { id: "r9", type: "flash", concept: "handbrake",
      front: "Why should the handbrake never be applied while the car is moving?",
      back: "Real danger of locking the wheels and skidding — unless the footbrake has failed.", src: P(90, "Post-test answer 19") },
    { id: "r10", type: "truefalse", concept: "visual-aids", visual: "warning-colours",
      statement: "A green light on the dashboard usually warns of danger.", answer: false,
      explain: "Red = danger, amber = warning, green = functional or in use.", src: P(10, "Visual Driving Aids") },
    { id: "r11", type: "flash", concept: "steering-terms",
      front: "What is oversteer — and understeer?",
      back: "Oversteer: the car responds MORE than you expect for the wheel movement. Understeer: it responds LESS.", src: P(90, "Post-test answer 15") },
  ],
};

/* ---------------------------------------------------------------------------
   3. KNOW YOUR CONTROLS — recognition.
   --------------------------------------------------------------------------- */
const controls = {
  id: "controls",
  kind: "items",
  mode: "matching",
  title: "Know Your Controls",
  blurb: "Spot it, sort it — pedals, plates and hands",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "clutch",
      prompt: "Which picture shows the clutch pedal pressed DOWN?",
      options: ["clutch-plates:down", "clutch-plates:up", "clutch-plates:biting"], answer: 0,
      names: ["Pedal down — plates apart", "Pedal up — plates together", "Biting point"],
      explain: "Pressing the pedal forces the plates apart: the engine can't drive the wheels.", src: P(7, "Clutch") },
    { id: "k2", type: "picture", label: "Spot it", concept: "steering",
      prompt: "Which picture shows a correct hand position?",
      options: ["wheel-hands:quarter-three", "wheel-hands:crossed"], answer: 0,
      names: ["Quarter to three", "Hands crossed"],
      explain: "Ten-to-two or quarter-to-three, light but firm grip, thumbs up.", src: P(7, "Steering Control") },
    {
      id: "k3", type: "sort", concept: "abc",
      prompt: "Which foot?",
      categories: [
        { id: "left", label: "Left foot" },
        { id: "right", label: "Right foot" },
      ],
      cards: [
        { text: "Clutch", cat: "left" },
        { text: "Brake", cat: "right" },
        { text: "Accelerator", cat: "right" },
      ],
      explain: "Clutch: left. Brake and accelerator: right — you don't normally need both at once.", src: P(7, "The Main Controls") },
    {
      id: "k4", type: "sort", concept: "abc",
      prompt: "Foot control or hand control?",
      categories: [
        { id: "foot", label: "Foot" },
        { id: "hand", label: "Hand" },
      ],
      cards: [
        { text: "Accelerator", cat: "foot" },
        { text: "Brake", cat: "foot" },
        { text: "Clutch", cat: "foot" },
        { text: "Steering wheel", cat: "hand" },
        { text: "Handbrake", cat: "hand" },
        { text: "Gear lever", cat: "hand" },
      ],
      explain: "Foot: A, B and C. Hand: steering wheel, handbrake, gear lever.", src: P(7, "The Main Controls") },
    {
      id: "k5", type: "sort", concept: "steering",
      prompt: "Steering: good practice or a fault?",
      categories: [
        { id: "ok", label: "Good practice" },
        { id: "no", label: "Fault" },
      ],
      cards: [
        { text: "Push-pull, feeding the wheel", cat: "ok" },
        { text: "Looking well ahead to steer straight", cat: "ok" },
        { text: "Crossing your hands", cat: "no" },
        { text: "Letting the wheel spin back after a turn", cat: "no" },
        { text: "Turning the wheel while stationary", cat: "no" },
      ],
      explain: "Push-pull, eyes ahead; avoid crossing, spinning back and dry steering.", src: P(7, "Steering; p.8 Avoid") },
    { id: "k6", type: "picture", label: "Spot it", concept: "visual-aids",
      prompt: "Which picture shows the warning-light colour code?",
      options: ["warning-colours", "light-symbol:main", "rear-lights:hazard", "gantry-signals"], answer: 0,
      names: ["Red, amber, green", "Main beam symbol", "Hazard lights", "Motorway gantry"],
      explain: "Red = danger, amber = warning, green = in use.", src: P(10, "Visual Driving Aids") },
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
  blurb: "Controls and what they do",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "abc", visual: "pedals",
      prompt: "Match the control to its function.",
      pairs: [
        ["Accelerator", "How fast fuel and air reach the engine"],
        ["Brake", "Slows the car through a hydraulic system"],
        ["Clutch", "Lets the engine run without driving the wheels"],
        ["Gear lever", "Matches engine power to speed and load"],
      ],
      explain: "Each control has one job — explain it in one sentence.", src: P(7, "The Main Controls; p.8") },
    {
      id: "m2", type: "match", concept: "starting", visual: "ignition",
      prompt: "Match the ignition position.",
      pairs: [
        ["Position 1", "Accessories, e.g. radio"],
        ["Position 2", "Ignition and instruments"],
        ["Position 3", "Starter"],
      ],
      explain: "Release the key from position 3 as soon as the engine starts.", src: P(9, "Ignition Switch") },
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
  blurb: "Getting in, and starting up",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "checks", visual: "driving-seat",
      prompt: "Getting into the car — the cockpit drill, in order.",
      steps: ["Doors closed", "Seat adjusted", "Steering wheel adjusted", "Seat belt on", "Mirrors adjusted"],
      explain: "Doors, seat, steering, seat belt, mirrors — d.s.s.s.m.", src: P(12, "Retention Q2 (answer b, p.96)") },
    { id: "p2", type: "order", concept: "starting", visual: "ignition",
      prompt: "Starting a manual car — in order.",
      steps: ["Check the parking brake is on", "Check the gear lever is in neutral", "Press the clutch down", "Turn the key and release when the engine starts", "Check the warning lights go out"],
      explain: "Parking brake, neutral, clutch, start, then check the lights.", src: P(10, "Starting the Engine") },
    { id: "p3", type: "order", concept: "handbrake", visual: "parking-brake",
      prompt: "Applying a lever handbrake — in order.",
      steps: ["Press in the button", "Pull the lever firmly upwards", "Release the button", "Check the parking-brake light shows"],
      explain: "Pressing the button stops the ratchet wearing.", src: P(9, "Handbrake Use") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "seat", visual: "driving-seat",
      scene: "🪑 Your pupil is sitting so close the wheel touches their chest, arms tightly bent.",
      prompt: "What do you check?",
      options: ["Nothing — it feels secure", "They can reach every control comfortably, knee slightly bent, arms relaxed — then the seat locks", "Lower the head restraint", "Tilt the mirror"], answer: 1,
      explain: "Reach every control comfortably and easily; knee slightly bent; arms relaxed; seat locked in position.", src: P(6, "The Driving Seat") },
    { id: "s2", type: "choice", label: "Scenario", concept: "gears", visual: "gear-pattern",
      scene: "👇 Your pupil keeps glancing down at the gear lever when changing gear.",
      prompt: "What do you advise?",
      options: ["Keep one eye on the lever", "Look only if a mistake is made", "Look well ahead", "Look down quickly"], answer: 2,
      explain: "Change gear without taking your eyes off the road — look well ahead.", src: P(13, "Retention Q12 (answer d, p.96); p.8") },
    { id: "s3", type: "choice", label: "Scenario", concept: "crossed-hands", visual: "wheel-hands:crossed",
      scene: "🛞 Your pupil crosses their hands to turn on a normal road junction.",
      prompt: "Why correct it?",
      options: ["It looks untidy", "It reduces control — and if the airbag deploys, the hands are driven into the face", "It wears the wheel", "It's only wrong on the test"], answer: 1,
      explain: "Push-pull keeps both hands in control; crossed hands meet the airbag at 350–400 km/h.", src: P(8, "On a further note") },
    { id: "s4", type: "choice", label: "Scenario", concept: "accelerator",
      scene: "🚗 Moving away, your pupil barely presses the accelerator.",
      prompt: "What may happen?",
      options: ["The engine may stall", "Nothing in a diesel", "The car may surge forward", "It's better for the environment"], answer: 0,
      explain: "Too little pressure on the accelerator moving away may stall the engine.", src: P(12, "Retention Q8 (answer a, p.96)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "handbrake",
      scene: "🅿️ Your pupil pulls the handbrake up just before the car stops, to \"help\" it stop.",
      prompt: "What do you say?",
      options: ["Fine — it stops quicker", "Never apply it while moving — it can lock the wheels and skid", "Only on wet roads", "Use it with the clutch down"], answer: 1,
      explain: "Apply the handbrake only once stopped — except if the footbrake fails.", src: P(9, "Avoid; p.90 answer 19") },
    { id: "s6", type: "choice", label: "Scenario", concept: "visual-aids", visual: "warning-colours",
      scene: "🔴 A red light comes on the dashboard while driving.",
      prompt: "What does it usually mean?",
      options: ["A feature is switched on", "Danger — e.g. risk of engine damage or an open door", "Nothing", "Service due next year"], answer: 1,
      explain: "Red or amber warning lights usually warn of danger — to the engine or the driver.", src: P(10, "Visual Driving Aids") },
    { id: "s7", type: "choice", label: "Scenario", concept: "visual-aids",
      scene: "❄️ On a frosty morning you use the heated rear screen. Twenty minutes later it's still on.",
      prompt: "What should you have done?",
      options: ["Leave it on all journey", "Switched it off once clear and used the heater on fresh air", "Used recirculation", "Opened the boot"], answer: 1,
      explain: "Heated screens only for as long as necessary; then the heater on fresh air.", src: P(10, "Heated Windscreens") },
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
  blurb: "A pupil's very first lesson",
  xpPer: 10,
  situation: "🎓 A complete beginner gets into the driver's seat for their first lesson. You talk them through the controls.",
  items: [
    { id: "w1", type: "choice", step: "Seated", concept: "seat", prompt: "First thing as they sit down?",
      options: ["Start the engine", "Check the handbrake is applied", "Adjust the radio", "Find first gear"], answer: 1,
      explain: "As soon as you're seated, check that the handbrake is applied.", src: P(90, "Post-test answer 1") },
    { id: "w2", type: "choice", step: "The seat", concept: "seat", visual: "driving-seat", prompt: "After adjusting the seat, they must make sure…",
      options: ["It's firmly locked in place", "The doors are locked", "It moves freely", "The seat belt is on"], answer: 0,
      explain: "Immediately after adjusting the seat, ensure it's firmly locked in place.", src: P(12, "Retention Q3 (answer a, p.96)") },
    { id: "w3", type: "choice", step: "Pedals", concept: "abc", visual: "pedals", prompt: "How do you describe the pedals?",
      options: ["A, B, C — accelerator, brake, clutch", "Go, stop, slow", "Big, small, middle", "Left, right, centre"], answer: 0,
      explain: "Foot controls are remembered as A, B and C: accelerator, brake and clutch.", src: P(7, "The Main Controls") },
    { id: "w4", type: "choice", step: "Steering", concept: "steering", visual: "push-pull", prompt: "Which steering method do you teach?",
      options: ["Cross-hands", "Rotational", "Push-pull", "One-handed"], answer: 2,
      explain: "'Driving Essential Skills' states the correct method is push-pull.", src: P(12, "Retention Q4 (answer d, p.96)") },
    { id: "w5", type: "choice", step: "Straight", concept: "steering", prompt: "To keep a straight course, they should…",
      options: ["Line up the kerb with the bonnet", "Look well ahead", "Grip the wheel very tightly", "Keep 3 feet from the kerb"], answer: 1,
      explain: "To steer a straight course, look well ahead.", src: P(12, "Retention Q5 (answer b, p.96)") },
    { id: "w6", type: "choice", step: "Starting", concept: "starting", visual: "ignition", prompt: "Before they turn the key to start…",
      options: ["Ignition warning lights off", "Gear lever in neutral only", "Handbrake applied and gear lever in neutral", "Oil light off"], answer: 2,
      explain: "Before operating the starter: handbrake applied and gear lever in neutral.", src: P(13, "Retention Q17 (answer c, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 96. Q19 is omitted (see top).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(n <= 10 ? 12 : 13, `Retention test Q${n}; answer p.96`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "The main reason for adjusting the driving seat properly is to be able to", ["drive as comfortably as possible", "use the mirrors with ease", "reach and use each control comfortably and easily", "fasten the seatbelt easily"], 2, "seat", "driving-seat"),
    R(2, "'Driving Essential Skills' advises that as soon as you are seated you should adjust", ["doors, seat, seatbelt and mirrors (d.s.s.m.)", "doors, seat, steering, seatbelt and mirrors (d.s.s.s.m.)", "doors, seat, mirrors, seatbelt and steering (d.s.m.s.s.)", "doors, seat, ignition, steering and seatbelt (d.s.i.s.s.)"], 1, "checks"),
    R(3, "Immediately after adjusting the driver's seat, you are advised to ensure that", ["it is firmly locked in place", "the doors are locked", "it will move freely forwards or backwards", "you put on the seatbelt"], 0, "seat"),
    R(4, "'Driving Essential Skills' states that the correct method of steering a car is to use the", ["cross-hands technique", "rotational steering technique", "eye-steering technique", "push-pull technique"], 3, "steering", "push-pull"),
    R(5, "To drive a straight course the driver is advised to", ["align the kerb with the nearside edge of the bonnet", "look well ahead", "grip the wheel very firmly with both hands", "keep three feet away from the kerb"], 1, "steering"),
    R(6, "When a vehicle is fitted with power-assisted steering (PAS) a driver must be aware that", ["steering is effortless", "you can easily over-steer", "steering assistance increases with speed", "steering assistance doesn't vary with speed"], 1, "steering-terms"),
    R(7, "The Mechanical Principles book states that a diesel engine is of the type known as", ["compression ignition", "external combustion", "spark ignition", "decompression ignition"], 0, "accelerator"),
    R(8, "Using too little pressure on the accelerator pedal when moving away", ["may result in the engine stalling", "will not matter at all in a diesel-engine car", "may cause the vehicle to surge forward", "is probably better for the environment"], 0, "accelerator"),
    R(9, "The Mechanical Principles book states that dual-circuit braking systems are designed to", ["reduce the chance of locking the wheels in an emergency", "aid an instructor to control braking with a learner", "reduce the risk of brake failure", "maintain levels in the brake fluid reservoir"], 2, "brake"),
    R(10, "With the gear lever in neutral and the clutch pedal up, the clutch plate and flywheel are", ["slipping together", "held together by spring pressure", "held apart by spring pressure", "separated by the thrust bearing"], 1, "clutch", "clutch-plates:up"),
    R(11, "Allowing the clutch plates to engage fully and slowly is a skill known as", ["acceleration sense", "slipping the clutch", "coasting", "clutch control"], 3, "clutch", "clutch-plates:biting"),
    R(12, "Teaching a novice learner driver you would advise, when changing gear, to", ["keep one eye on the gear lever", "avoid looking at the gear lever unless a mistake is made", "look down at the gear lever", "look well ahead"], 3, "gears"),
    R(13, "Cars with heated windscreens front and/or back should be", ["only used before you commence travelling", "only used for as long as necessary", "used to assist in heating the interior of the vehicle", "used one at a time"], 1, "visual-aids"),
    R(14, "The Mechanical Principles book states rear fog lamps should only be used when visibility is seriously reduced, that is to less than", ["328 metres", "50 metres", "100 metres", "300 metres"], 2, "cockpit", "light-symbol:rear-fog"),
    R(15, "'Driving Essential Skills' states that the horn should normally only be used", ["to warn other road users of your presence whilst moving", "to tell other drivers that they are obstructing you", "to give priority to another road user", "only when the vehicle is stationary"], 0, "cockpit"),
    R(16, "'Driving Essential Skills' states that when the car is stationary, the horn must not be used in a built-up area", ["under any circumstance", "between the hours of 2100 and 0630", "unless there is danger from another moving vehicle", "between the hours of 2330 and 0700"], 3, "cockpit"),
    R(17, "Before operating the starter, the driver should ensure that", ["the ignition warning lights are off", "the gear lever is in neutral", "the handbrake is applied and the gear lever is in neutral", "the oil warning light is off"], 2, "starting", "ignition"),
    R(18, "Vehicles with an automatic transmission have", ["no gearshift lever", "no clutch", "no handbrake", "no gears"], 1, "clutch"),
    R(20, "A red or amber button with a \"triangle symbol\" on the dashboard or steering column", ["is the direction indicator repeat light", "operates the handbrake", "operates the hazard warning lights", "warns of an engine emission fault"], 2, "cockpit", "rear-lights:hazard"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "clutch",
      prompt: "The clutch is…", options: ["A brake for the engine", "A device that lets the engine run without driving the wheels", "Part of the steering", "The gear lever"], answer: 1,
      explain: "A device which allows the engine to run without driving the wheels.", src: P(90, "Post-test answer 8") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "clutch",
      scene: "🦶 Your pupil rests their left foot on the clutch pedal between gear changes.",
      prompt: "What's the fault?", options: ["None", "Riding the clutch", "Coasting", "Clutch control"], answer: 1,
      explain: "\"Riding\" the clutch — resting your foot on the pedal when not using it.", src: P(7, "Clutch Avoid") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "handbrake",
      statement: "The handbrake normally works on the rear wheels.", answer: true,
      explain: "The rear wheels… normally.", src: P(90, "Post-test answer 18") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "clutch",
      prompt: "Which picture shows the biting point?", options: ["clutch-plates:biting", "clutch-plates:up", "clutch-plates:down"], answer: 0,
      names: ["Biting point", "Pedal up", "Pedal down"],
      explain: "The plates just touch; the engine speed drops slightly.", src: P(90, "Post-test answer 10") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "visual-aids",
      prompt: "Match the light colour.", pairs: [["Red", "Danger"], ["Amber", "Warning"], ["Green", "Working or in use"]],
      explain: "Red = danger, amber = warning, green = functional or in use.", src: P(10, "Visual Driving Aids") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "starting",
      prompt: "Before starting the engine:", steps: ["Parking brake on", "Neutral", "Clutch down", "Start"],
      explain: "Secure the car, neutral, clutch, then start.", src: P(10, "Starting the Engine") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "gears",
      scene: "⛰️ Climbing a steep hill with a heavy load.",
      prompt: "Which gears suit this?", options: ["High gears", "Low gears — low speed, high load", "Neutral", "Top gear"], answer: 1,
      explain: "Low gears are used at low speed and high load.", src: P(8, "Manual Gear Shift Lever") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "steering",
      prompt: "The correct steering method is the…", options: ["Cross-hands technique", "Rotational technique", "Eye-steering technique", "Push-pull technique"], answer: 3,
      explain: "Push-pull.", src: P(12, "Retention Q4 (answer d, p.96)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "abc",
      prompt: "Which picture shows the foot controls?", options: ["pedals", "gear-pattern"], answer: 0,
      names: ["Clutch, brake, accelerator", "Gear pattern"],
      explain: "Left to right: clutch, brake, accelerator.", src: P(7, "The Main Controls") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "clutch",
      prompt: "Vehicles with automatic transmission have…", options: ["No gear lever", "No clutch pedal", "No handbrake", "No gears"], answer: 1,
      explain: "No clutch.", src: P(13, "Retention Q18 (answer b, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "2.1",
  number: "2.1",
  title: "The Car Controls & Driving Aids",
  pages: [5, 13],
  intro: "The driving seat, the foot and hand controls, starting up, and the dashboard's warnings.",
  objectives: [
    "Understanding and operating the controls",
    "How to adjust the driver's seat",
    "The function of the main hand and foot controls",
    "The correct way to use the main car controls",
    "The function and use of the ancillary controls and visual driving aids",
  ],
  objectivesSrc: P(5, "Objectives"),
  mcqLink: { sectionId: "adi.sec.mechanics", label: "Basic Mechanics & Vehicle Maintenance" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...controls, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "controls-spotter", icon: "🎛️", label: "Controls Spotter", rule: { activity: "controls", min: 100 } },
    { id: "controls-master", icon: "🏆", label: "Controls Master", rule: { activity: "scenarios", min: 80 } },
  ],
};
