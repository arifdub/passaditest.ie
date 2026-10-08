/*
  ===========================================================================
  BOOK 2 · UNIT 2.6 — ROAD HOLDING

  Source: "Theory Resource Workbook 2 of 4" (Driver Education Supplies),
  book pages 40–47, with the post-test model answers on page 93 and the
  retention-test answers on page 96 (1b 2c 3a 4d 5a 6d 7b 8d 9b 10b 11a
  12c 13a 14a 15d 16a 17a 18a 19b 20a).

  Omitted retention question (answer key unsafe):
  - Q17 ("extra tyre wear due to stress is caused on…", keyed "the front
    wheels"): the unit doesn't say which wheels wear more, and it depends
    on the car (front-, rear- or four-wheel drive).

  Kept, as the only defensible options, though the text doesn't state
  them word for word: Q7 (water in the engine compartment "may seriously
  affect electrical components" — the text says it can stop the engine),
  Q10 (ABS "takes over if you apply too much brake pressure") and Q16
  (radial-ply "more grip than cross-ply" — the text says radials keep
  their tread in contact with the road).

  Page 41 says "keep the engine speed high by slipping the clutch" in a
  flood and page 42 says "leave the clutch alone" when cornering on ice:
  both are kept in their own context.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 2, unit: "2.6", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "forces": {
    title: "Forces on a moving car",
    text: "Gravity pulls the car down onto the road. Acceleration transfers weight to the rear and extra grip to the driven wheels; braking and deceleration transfer weight and grip to the front. Drag is the air's resistance; friction is the road's resistance to the tyres sliding. A moving car has momentum and keeps its speed by inertia — it is most stable going straight, on a level road, at a constant speed.",
    src: P(40, "Vehicle stability; Here comes the science bit"),
  },
  "cornering": {
    title: "Cornering force",
    text: "Turning the wheel applies a cornering (centrifugal) force: weight is thrown to the side opposite the way you steer, giving extra grip to the wheels on the outside of the curve. If the cornering force beats friction and acceleration grip, the car skids sideways; too much speed could roll it. Braking and steering together is highly dangerous — the front-outside wheel acts as an anchor and the rear wheels lose grip.",
    src: P(40, "Here comes the science bit"),
  },
  "wet": {
    title: "Wet roads",
    text: "Grip is reduced: braking distance is at least double that on a dry road. Wet roads are most slippery when rain begins just after a dry spell. Even at low speed a sheet of water hit by the wheels on one side can make the car swerve. The less tread on your tyres, the longer the braking distance in the wet.",
    src: P(41, "Wet roads; Surface water; p.93 answer 5"),
  },
  "aquaplaning": {
    title: "Aquaplaning",
    text: "At higher speeds water can build up between the tyres and the road, so they lose contact and slide on a thin film of water. You'll notice the steering suddenly feels light. To recover, slow down by easing off the accelerator — don't brake or change direction.",
    src: P(41, "Aquaplaning; p.93 answers 1, 2"),
  },
  "floods": {
    title: "Floods and fords",
    text: "Stop and assess the depth; too deep — turn back and find another route. If safe, drive slowly in first gear, keeping the engine speed high by slipping the clutch. Don't rush through: you could lose control, stall and block the road, drench pedestrians and other windscreens, or throw water under the bonnet. Afterwards, check your mirrors, then drive slowly with your left foot lightly on the brake to test and dry them.",
    src: P(41, "Floods; Testing your brakes; p.93 answers 3, 4"),
  },
  "snow": {
    title: "Snow",
    text: "Fallen and falling snow should cause few problems if you remember: road markings are hidden; keep the windscreen and windows clear; increase your separation distance; test your brakes very gently from time to time — snow may pack around the brake linkages. Ice and packed snow are the greatest dangers. Snow chains or mud-and-snow tyres help in prolonged snow.",
    src: P(41, "Snow and ice; p.93 answer 6"),
  },
  "ice-control": {
    title: "Controls on snow and ice",
    text: "Use every control delicately. Moving off: low engine speed and a higher gear to reduce the torque and avoid wheel spin; stuck in a rut, ease off and rock back and forth. Braking distance can be ten times longer — all but the gentlest braking can lock the wheels; get into a lower gear much earlier and brake gently and early. Corners: accelerator sense so you needn't brake, highest reasonable gear, gentle on the gas, clutch alone, no sudden steering.",
    src: P(41, "Moving off; Braking; p.42 Cornering; p.93 answers 7, 10, 11"),
  },
  "black-ice": {
    title: "Black ice",
    text: "Rain freezing on the road as it falls — an invisible hazard. The first warning may be very light steering. Ice is even more dangerous as it begins to thaw. Anti-lock brakes won't help your tyres stay in contact with the road.",
    src: P(41, "Black ice; p.93 answers 8, 9"),
  },
  "hills-ice": {
    title: "Hills on snow and ice",
    text: "Downhill: slow down well before the slope and use engine compression to hold the car back. Uphill: use the highest gear you reasonably can and select it before you start the climb — changing gear on the slope needs very delicate footwork to avoid wheel spin and losing momentum. Keep a bigger gap: if the car ahead stops, you may pass it before losing momentum, or leave it time to get going again.",
    src: P(41, "Going downhill; Going uphill; p.93 answer 12"),
  },
  "out-of-control": {
    title: "Another vehicle out of control",
    text: "If a vehicle is coming towards you obviously out of control, make maximum use of engine braking and only brake if essential; if there's time, slow with engine compression and steer carefully. Avoid braking and steering together. Avoid such situations by having an escape route in mind.",
    src: P(42, "Other vehicles; p.93 answer 13"),
  },
  "tyres": {
    title: "Tyres",
    text: "Your only contact with the road. Cross-ply (older vehicles): cords run diagonally in a trellis. Radial-ply: cords at right angles — thinner, more flexible walls that keep the tread on the road. Never mix types on an axle, or radials front with cross-ply rear — keep one type all round. Check pressures (spare too) at least weekly, when cold, with a reliable gauge; higher for heavy loads or long fast runs. Legal minimum tread: 1.6 mm across the central three-quarters, all the way round.",
    src: P(42, "Tyres; Cross-ply; Radial ply; Note; Pressure; Condition; p.93 answers 16, 17"),
  },
  "tyre-care": {
    title: "Tyre care and bursts",
    text: "Keep tyres free of grease, oil and stones; check for cuts and bulges. Uneven wear comes from wrong pressure, alignment or balance, harsh acceleration, braking and cornering, and road hazards like kerbs. Over- or under-inflated tyres harm braking and steering. A new tyre: drive with caution for the first 160 km. A burst: grip the wheel firmly, keep straight, as little braking as possible, roll to a halt in a safe place. A flat: stop when safe; change it only without risk.",
    src: P(42, "Condition; Burst tyres; p.43; p.93 answers 18, 19"),
  },
  "skids": {
    title: "Skids",
    text: "Parked cars don't skid — drivers cause skids. In order of importance: the driver, the vehicle, the road. They happen when you change speed or direction so suddenly that the tyres lose grip — whenever you slow down, speed up, turn a corner or are on a gradient. If grip is poor your brakes won't get you out of trouble, and even jerky gas pedal linkages can cause skids.",
    src: P(42, "Skidding; p.40; p.93 answers 20–23"),
  },
  "skid-braking": {
    title: "Skids caused by braking",
    text: "Harsh, uncontrolled braking is a main cause. Braking throws weight forward, lightening the rear wheels so they lock and the rear swings out. Remove the cause: release the footbrake so the wheels turn, steer into the skid to straighten up, then reapply the brake gently if needed. Over-correcting causes a skid the other way. Very harsh braking, even on a dry road, can cause a four-wheel skid and loss of all steering and braking.",
    src: P(43, "Skids caused by braking; p.93 answer 24"),
  },
  "skid-accel": {
    title: "Skids caused by acceleration",
    text: "Sudden or harsh acceleration spins the driven wheels — front, rear or all four. Remove the cause: release the accelerator so the wheels grip again. If the car slides sideways, don't steer until some grip has returned.",
    src: P(43, "Skids caused by acceleration"),
  },
  "esc": {
    title: "Electronic Stability Control",
    text: "ESC checks where you're steering against where the car is going, and brakes individual wheels and cuts engine power to hold the intended path — it helps stabilise the car in corners. When it works, its light blinks and you may hear or feel the brakes; the engine may not respond normally and cruise control switches off. It is not a substitute for safe driving.",
    src: P(43, "Electronic Stability Control"),
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
    "Parked cars don't skid — drivers cause skids",
    "Light steering: aquaplaning or black ice — ease off",
    "Snow and ice: everything delicate, high gear, big gap",
  ],
  cards: [
    {
      icon: "🧲",
      kicker: "Vehicle stability",
      title: "The forces at work",
      visual: "car-forces",
      list: [
        "Gravity — pulls the car down onto the road",
        "Acceleration — weight and grip to the rear (driven wheels)",
        "Braking — weight and grip to the front",
        "Drag — the air's resistance",
        "Friction — the road's resistance to tyres sliding",
      ],
      callout: "Most stable: straight, level, steady speed.",
      concept: "forces",
      src: P(40, "Vehicle stability"),
    },
    {
      icon: "↪️",
      kicker: "Cornering",
      title: "Weight goes to the outside",
      visual: "cornering-force",
      ask: {
        prompt: "You steer right. Which wheels get the extra weight and grip?",
        options: ["The right-hand (inside) wheels", "The left-hand (outside) wheels", "The rear wheels only"],
        answer: 1,
      },
      list: [
        "Cornering force throws weight opposite to the way you steer",
        "Too much and the car skids sideways — or rolls over",
        "Braking and steering together: the front-outside wheel anchors, the rear loses grip",
      ],
      concept: "cornering",
      src: P(40, "Here comes the science bit"),
    },
    {
      icon: "🌧️",
      kicker: "Wet roads",
      title: "At least double the braking",
      visual: "stopping-weather",
      list: [
        "Braking distance at least double that on a dry road",
        "Most slippery when rain starts after a dry spell",
        "Water on one side can pull the car to that side",
        "Less tread: longer braking distance in the wet",
      ],
      concept: "wet",
      src: P(41, "Wet roads; Surface water"),
    },
    {
      icon: "🌊",
      kicker: "Aquaplaning",
      title: "Steering suddenly light",
      visual: "aquaplaning",
      ask: {
        prompt: "The steering goes light in heavy rain. You should…",
        options: ["Brake firmly", "Ease off the accelerator", "Steer to the verge"],
        answer: 1,
      },
      body: [
        "At speed, water builds up between the tyres and the road — they slide on a film of water.",
        "Slow down by easing off the accelerator. Don't brake or change direction.",
      ],
      concept: "aquaplaning",
      src: P(41, "Aquaplaning"),
    },
    {
      icon: "🚧",
      kicker: "Floods and fords",
      title: "Check, crawl, test",
      visual: "flood-ford",
      list: [
        "Stop and assess the depth — too deep, turn back",
        "If safe: slowly, first gear, engine speed high by slipping the clutch",
        "Never rush through: lose control, stall, block the road",
        "After: mirrors, then drive slowly with your left foot lightly on the brake",
      ],
      concept: "floods",
      src: P(41, "Floods; Testing your brakes; p.93 answers 3, 4"),
    },
    {
      icon: "❄️",
      kicker: "Snow",
      title: "Few problems — if you remember",
      visual: "snow-ice",
      list: [
        "Road markings will be hidden",
        "Keep the windscreen and windows clear",
        "Increase your separation distance",
        "Test your brakes very gently now and then",
        "Chains or mud-and-snow tyres for prolonged snow",
      ],
      callout: "Ice and packed snow are the greatest dangers.",
      concept: "snow",
      src: P(41, "Snow and ice; p.93 answer 6"),
    },
    {
      icon: "🧊",
      kicker: "Controls on ice",
      title: "Delicately",
      visual: "stopping-weather",
      sections: [
        { head: "Moving off", list: ["Low engine speed, a higher gear — less torque, no wheel spin", "Stuck in a rut: ease off, rock back and forth"] },
        { head: "Braking", list: ["Up to ten times the distance", "Lower gear much earlier; brake gently and early"] },
        { head: "Corners", list: ["Time it so you needn't brake", "Highest reasonable gear, gentle gas, clutch alone, no sudden steering"] },
      ],
      concept: "ice-control",
      src: P(41, "Moving off; Braking; p.42 Cornering; p.93 answers 7, 10, 11"),
    },
    {
      icon: "🖤",
      kicker: "Black ice",
      title: "The invisible hazard",
      visual: "black-ice",
      list: [
        "Rain freezing on the road as it falls",
        "First warning: very light steering",
        "Even more dangerous as it begins to thaw",
        "ABS won't keep your tyres on the road",
      ],
      concept: "black-ice",
      src: P(41, "Black ice; p.93 answers 8, 9"),
    },
    {
      icon: "⛰️",
      kicker: "Hills on snow and ice",
      title: "Gear first, then climb",
      visual: "snow-hill",
      list: [
        "Uphill: highest gear you reasonably can — selected before the climb",
        "Changing on the slope risks wheel spin and losing momentum",
        "Keep a bigger gap so you don't have to stop",
        "Downhill: slow well before the slope; use engine compression",
      ],
      concept: "hills-ice",
      src: P(41, "Going uphill; Going downhill; p.93 answer 12"),
    },
    {
      icon: "🛞",
      kicker: "Tyres",
      title: "Your only contact with the road",
      visuals: ["tyre-tread", "tyre-ply"],
      list: [
        "Legal minimum: 1.6 mm across the central three-quarters, all the way round",
        "Check pressures (spare too) at least weekly, when cold",
        "Higher pressures for heavy loads or long fast runs — see the handbook",
        "Never mix cross-ply and radial — same type all round",
      ],
      concept: "tyres",
      src: P(42, "Tyres; Pressure; Condition; Note"),
    },
    {
      icon: "💥",
      kicker: "Tyre care and bursts",
      title: "Grip firmly, roll to a halt",
      visual: "tyre-burst",
      list: [
        "Uneven wear: wrong pressure, alignment or balance; harsh driving; kerbs",
        "New tyre: drive with caution for the first 160 km",
        "Burst: grip the wheel, keep straight, as little braking as possible",
        "Flat: stop when safe; change it only without risk",
      ],
      concept: "tyre-care",
      src: P(42, "Condition; Burst tyres; p.43; p.93 answers 18, 19"),
    },
    {
      icon: "🌀",
      kicker: "Skidding",
      title: "Drivers cause skids",
      visual: "skid-causes",
      body: [
        "In order of importance: the driver, the vehicle, the road.",
        "Skids happen when you change speed or direction so suddenly that the tyres lose grip — slowing, speeding up, cornering, on a gradient.",
      ],
      callout: "If tyre grip is poor, your brakes are more likely to get you into trouble than out of it.",
      concept: "skids",
      src: P(42, "Skidding; p.40; p.93 answers 20–22"),
    },
    {
      icon: "↩️",
      kicker: "Rear-wheel skid",
      title: "Release, then steer into it",
      visual: "rear-skid",
      ask: {
        prompt: "The rear of the car slides to the right. You…",
        options: ["Brake harder and steer left", "Release the brake and steer right", "Release the brake and don't steer"],
        answer: 1,
      },
      list: [
        "Braking lightens the rear wheels — they lock and swing out",
        "Release the footbrake so the wheels turn again",
        "Steer into the skid to straighten up; reapply the brake gently if needed",
        "Over-correcting skids you the other way",
      ],
      concept: "skid-braking",
      src: P(43, "Skids caused by braking; p.93 answer 24"),
    },
    {
      icon: "💨",
      kicker: "Wheel spin",
      title: "Off the gas",
      visual: "wheelspin",
      list: [
        "Harsh acceleration spins the driven wheels",
        "Release the accelerator so the tyres grip again",
        "Sliding sideways? Don't steer until some grip has returned",
      ],
      concept: "skid-accel",
      src: P(43, "Skids caused by acceleration"),
    },
    {
      icon: "🛡️",
      kicker: "ESC",
      title: "A helper — not a fix",
      visual: "esc",
      list: [
        "Compares where you're steering with where the car goes",
        "Brakes individual wheels and cuts power to hold the line",
        "Light blinks; brake noise or pedal feel is normal",
        "Cruise control switches off when it acts",
      ],
      callout: "Not a substitute for safe driving — adjust to the road and weather.",
      concept: "esc",
      src: P(43, "Electronic Stability Control"),
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
    { id: "r1", type: "flash", concept: "aquaplaning", visual: "aquaplaning",
      front: "What is aquaplaning?",
      back: "A sheet of water builds up under the tyres, so the car slides with no contact with the road.", src: P(93, "Post-test answer 1") },
    { id: "r2", type: "truefalse", concept: "wet",
      statement: "The less tread on a tyre, the greater the braking distance on a wet road.", answer: true,
      explain: "Less tread, less grip in the wet.", src: P(93, "Post-test answer 5") },
    { id: "r3", type: "flash", concept: "black-ice", visual: "black-ice",
      front: "What is black ice?",
      back: "Rain freezing as it falls on the road surface.", src: P(93, "Post-test answer 8") },
    { id: "r4", type: "fill", concept: "ice-control",
      before: "On packed snow and ice, braking distance can be up to", after: "longer.",
      options: ["ten times", "twice", "four times", "five times"], answer: "ten times",
      explain: "All but the gentlest braking could lock the wheels.", src: P(41, "Braking") },
    { id: "r5", type: "flash", concept: "ice-control",
      front: "On icy corners — high gear or low?",
      back: "As high a gear as you reasonably can.", src: P(93, "Post-test answer 10") },
    { id: "r6", type: "truefalse", concept: "tyres",
      statement: "Tyre pressures are best checked when the tyres are hot.", answer: false,
      explain: "Check them cold — warm or hot tyres can give a misleading reading.", src: P(43, "Check tyre pressures weekly; p.93 answer 16") },
    { id: "r7", type: "fill", concept: "tyres", visual: "tyre-tread",
      before: "The legal minimum tread is", after: "across the central three-quarters of the tyre.",
      options: ["1.6 mm", "1 mm", "2.5 mm", "3 mm"], answer: "1.6 mm",
      explain: "Throughout the central 75% of the width and all the way round.", src: P(42, "Condition") },
    { id: "r8", type: "truefalse", concept: "tyre-care",
      statement: "Tyres that are too soft wear out quicker than tyres that are too hard.", answer: true,
      explain: "And the softer the tyre, the more it overheats.", src: P(93, "Post-test answers 14, 15") },
    { id: "r9", type: "flash", concept: "tyre-care",
      front: "What precaution after fitting a new tyre?",
      back: "Drive with caution and at a reasonable speed for the first 160 km.", src: P(93, "Post-test answer 19") },
    { id: "r10", type: "flash", concept: "skids", visual: "skid-causes",
      front: "The main factors in a skid, in order of importance?",
      back: "The driver; the vehicle; the road.", src: P(93, "Post-test answer 20") },
    { id: "r11", type: "truefalse", concept: "skids",
      statement: "Jerky gas pedal linkages can cause skids.", answer: true,
      explain: "Any sudden change of speed can break the tyres' grip.", src: P(93, "Post-test answer 23") },
  ],
};

/* ---------------------------------------------------------------------------
   3. GRIP CHECK — recognition.
   --------------------------------------------------------------------------- */
const grip = {
  id: "grip",
  kind: "items",
  mode: "matching",
  title: "Grip Check",
  blurb: "Spot it, sort it — water, ice, tyres and skids",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "skid-braking",
      prompt: "Which picture shows a rear-wheel skid being corrected?",
      options: ["rear-skid", "tyre-burst", "wheelspin", "esc"], answer: 0,
      names: ["Rear-wheel skid", "Tyre burst", "Wheel spin", "ESC"],
      explain: "The rear swings out to the right — release the brake and steer right.", src: P(43, "Skids caused by braking") },
    { id: "k2", type: "picture", label: "Spot it", concept: "tyres",
      prompt: "Which tyre is radial-ply?",
      options: ["tyre-ply", "tyre-tread"], answer: 0,
      names: ["Cord patterns", "Tread band"],
      explain: "Radial-ply cords run at right angles across the tyre; cross-ply cords run diagonally.", src: P(42, "Radial ply") },
    {
      id: "k3", type: "sort", concept: "skids",
      prompt: "Skid caused by braking or by acceleration?",
      categories: [
        { id: "brake", label: "Braking" },
        { id: "accel", label: "Acceleration" },
      ],
      cards: [
        { text: "Rear wheels lock and swing out", cat: "brake" },
        { text: "Four-wheel skid on a dry road", cat: "brake" },
        { text: "Driven wheels spin", cat: "accel" },
        { text: "Stuck in a rut, wheels spinning", cat: "accel" },
      ],
      explain: "Braking: release the footbrake. Acceleration: release the gas.", src: P(43, "Skids caused by braking; by acceleration") },
    {
      id: "k4", type: "sort", concept: "ice-control",
      prompt: "On snow and ice — do or don't?",
      categories: [
        { id: "do", label: "Do" },
        { id: "dont", label: "Don't" },
      ],
      cards: [
        { text: "Move off in a higher gear", cat: "do" },
        { text: "Select your gear before the hill", cat: "do" },
        { text: "Brake gently and early", cat: "do" },
        { text: "Brake on the bend", cat: "dont" },
        { text: "Change gear halfway up the hill", cat: "dont" },
        { text: "Rely on ABS on black ice", cat: "dont" },
      ],
      explain: "Use every control delicately and plan well ahead.", src: P(41, "Snow and ice; p.42 Cornering") },
    { id: "k5", type: "picture", label: "Spot it", concept: "floods",
      prompt: "Which picture shows what to do at a flood?",
      options: ["flood-ford", "aquaplaning", "black-ice"], answer: 0,
      names: ["Flood or ford", "Aquaplaning", "Black ice"],
      explain: "Check the depth, crawl through in first gear, test your brakes after.", src: P(41, "Floods") },
    { id: "k6", type: "picture", label: "Spot it", concept: "forces",
      prompt: "Which picture shows the forces acting on a moving car?",
      options: ["car-forces", "cornering-force", "weight-transfer"], answer: 0,
      names: ["Gravity, drag, friction, acceleration", "Cornering force", "Braking weight transfer"],
      explain: "Gravity, acceleration, braking, drag and friction.", src: P(40, "Vehicle stability") },
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
  blurb: "Forces, warnings and fixes",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "forces", visual: "car-forces",
      prompt: "Match the force to what it does.",
      pairs: [
        ["Gravity", "Pulls the car onto the road"],
        ["Acceleration", "Weight to the rear"],
        ["Braking", "Weight to the front"],
        ["Drag", "Air resistance"],
        ["Friction", "Road resists the tyres sliding"],
      ],
      explain: "All drivers should be aware of these forces.", src: P(40, "Vehicle stability") },
    {
      id: "m2", type: "match", concept: "skids",
      prompt: "Match the problem to the fix.",
      pairs: [
        ["Aquaplaning", "Ease off the accelerator"],
        ["Rear-wheel skid", "Release the brake, steer into it"],
        ["Wheel spin", "Release the accelerator"],
        ["Tyre burst", "Grip firmly, roll to a halt"],
      ],
      explain: "Remove the cause first.", src: P(41, "Aquaplaning; p.42; p.43") },
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
  blurb: "Floods and skids",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "floods", visual: "flood-ford",
      prompt: "A flood ahead — in order.",
      steps: ["Stop and assess the depth", "Select first gear", "Drive through slowly, revs high, slipping the clutch", "Check your mirrors", "Drive slowly with the left foot lightly on the brake"],
      explain: "Too deep at the first step? Turn back and use another route.", src: P(41, "Floods; Testing your brakes") },
    { id: "p2", type: "order", concept: "skid-braking", visual: "rear-skid",
      prompt: "A rear-wheel skid from braking — in order.",
      steps: ["Release the footbrake", "Steer into the skid", "Straighten up without over-correcting", "Reapply the brake gently if needed"],
      explain: "Remove the cause, then steer.", src: P(43, "Skids caused by braking") },
    { id: "p3", type: "order", concept: "tyre-care", visual: "tyre-burst",
      prompt: "A tyre bursts — in order.",
      steps: ["Grip the steering wheel firmly", "Keep the car straight", "Use as little braking as possible", "Roll to a halt in a safe place"],
      explain: "Keep control to prevent swerving.", src: P(42, "Burst tyres") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "aquaplaning", visual: "aquaplaning",
      scene: "🌧️ On a fast road in heavy rain, your pupil says the steering has suddenly gone light.",
      prompt: "What should they do?",
      options: ["Brake firmly", "Ease off the accelerator — no braking or steering", "Steer towards the verge", "Change down quickly"], answer: 1,
      explain: "That's aquaplaning — slow down by easing off the accelerator.", src: P(41, "Aquaplaning") },
    { id: "s2", type: "choice", label: "Scenario", concept: "wet",
      scene: "☀️ After three weeks of dry weather, it starts to rain.",
      prompt: "What do you warn your pupil?",
      options: ["Roads are least slippery now", "Roads are at their most slippery — brake earlier, bigger gap", "Only motorways are affected", "Use cruise control"], answer: 1,
      explain: "Wet roads are most slippery when rain begins just after a dry spell.", src: P(46, "Retention Q1 (answer b, p.96)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "out-of-control",
      scene: "🚙 On an icy road a car is sliding towards you, clearly out of control.",
      prompt: "What should your pupil do?",
      options: ["Brake hard and swerve", "Make maximum use of engine braking; brake only if essential", "Steer briskly into its path", "Get out of the car"], answer: 1,
      explain: "Avoid braking and steering together — and always have an escape route in mind.", src: P(47, "Retention Q13 (answer a, p.96); p.42") },
    { id: "s4", type: "choice", label: "Scenario", concept: "ice-control",
      scene: "❄️ Moving off from the kerb in snow, the wheels spin and the car sits in a rut.",
      prompt: "What now?",
      options: ["More gas", "Ease off, move back slightly then forwards in a low to intermediate gear", "Buy a four-wheel drive", "Put a spade under the wheel"], answer: 1,
      explain: "Ease off the accelerator and rock back and forth to get out of the rut.", src: P(47, "Retention Q12 (answer c, p.96); p.93 answer 11") },
    { id: "s5", type: "choice", label: "Scenario", concept: "hills-ice", visual: "snow-hill",
      scene: "⛰️ A snowy hill ahead. Your pupil plans to change down halfway up.",
      prompt: "Your advice?",
      options: ["Fine", "Select the highest gear you reasonably can before the climb and stay in it", "Use first gear all the way", "Coast up"], answer: 1,
      explain: "Changing gear on the slope takes very delicate footwork to avoid wheel spin and loss of momentum.", src: P(41, "Going uphill; p.93 answer 12") },
    { id: "s6", type: "choice", label: "Scenario", concept: "black-ice", visual: "black-ice",
      scene: "🌡️ A frosty morning. The road looks merely wet, but the steering feels very light.",
      prompt: "What could it be?",
      options: ["A puncture", "Black ice", "Low fuel", "Power steering failure"], answer: 1,
      explain: "Black ice is invisible — light steering may be your first warning.", src: P(41, "Black ice") },
    { id: "s7", type: "choice", label: "Scenario", concept: "tyre-care", visual: "tyre-burst",
      scene: "💥 A front tyre bursts at speed and the car pulls to one side.",
      prompt: "What should your pupil do?",
      options: ["Brake hard", "Grip the wheel firmly, keep straight, roll to a halt in a safe place", "Steer with the weave", "Stop immediately where they are"], answer: 1,
      explain: "Avoid braking heavily — use as little as possible.", src: P(47, "Retention Q15 (answer d, p.96)") },
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
  blurb: "A winter drive",
  xpPer: 10,
  situation: "🌨️ A winter lesson: a flooded dip, a snowy hill, a bend on ice and a skid.",
  items: [
    { id: "w1", type: "choice", step: "The flood", concept: "floods", visual: "flood-ford", prompt: "Water across the road in a dip. First?",
      options: ["Speed up to push the water aside", "Stop and check the depth", "Use the highest gear", "Slip the clutch in third"], answer: 1,
      explain: "Stop and gauge the depth; too deep — turn back.", src: P(46, "Retention Q5 (answer a, p.96)") },
    { id: "w2", type: "choice", step: "Through it", concept: "floods", prompt: "Safe to go on. How?",
      options: ["An intermediate gear, slipping the clutch", "1st gear at speed", "A low gear, low revs", "1st gear, slipping the clutch a little, revs high"], answer: 3,
      explain: "Drive slowly in first gear, keeping the engine speed high by slipping the clutch.", src: P(46, "Retention Q6 (answer d, p.96)") },
    { id: "w3", type: "choice", step: "Out the other side", concept: "floods", prompt: "Test the brakes by…",
      options: ["Driving slowly with the left foot lightly on the footbrake", "Accelerating hard and braking", "Using the handbrake", "Driving 10 km slowly"], answer: 0,
      explain: "After checking mirrors — a short distance to dry them.", src: P(46, "Retention Q8 (answer a, p.96)") },
    { id: "w4", type: "choice", step: "The snowy hill", concept: "hills-ice", prompt: "The gear for the climb?",
      options: ["First", "The highest you reasonably can, chosen before the climb", "Neutral", "Change on the way up"], answer: 1,
      explain: "Select it before you commence the climb.", src: P(41, "Going uphill") },
    { id: "w5", type: "choice", step: "Icy bend", concept: "ice-control", prompt: "Approaching the bend, they should…",
      options: ["Brake in the bend", "Use accelerator sense so they needn't brake, gentle and smooth", "Press the clutch down", "Steer sharply"], answer: 1,
      explain: "Braking on a bend on snow and ice is even more dangerous — avoid it.", src: P(42, "Cornering") },
    { id: "w6", type: "choice", step: "The skid", concept: "skid-braking", visual: "rear-skid", prompt: "The rear slides right. They should…",
      options: ["Brake and steer right", "Release the brake and steer right", "Release the brake and steer left", "Release the brake and not steer"], answer: 1,
      explain: "Steer into a rear-wheel skid.", src: P(47, "Retention Q19 (answer b, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 96. Q17 is omitted (see header).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(n <= 10 ? 46 : 47, `Retention test Q${n}; answer p.96`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "'Driving Essential Skills' advises that wet roads are likely to be most slippery after", ["a long spell of wet weather", "a spell of dry weather", "a spell of constant drizzle", "a thunderstorm"], 1, "wet"),
    R(2, "You should make extra allowance for stopping on a wet road and would be advised to allow", ["twice your thinking distance", "ten times your braking distance", "twice your braking distance", "four times your braking distance"], 2, "wet", "stopping-weather"),
    R(3, "Your braking distance on a wet road will increase as", ["your tyre tread depth decreases", "your visibility is reduced", "your speed decreases", "your attention decreases"], 0, "wet"),
    R(4, "The first clear indication a driver may be experiencing aquaplaning is", ["a warning sign at the roadside", "heavy steering", "a non-functioning handbrake", "a light feel to the steering"], 3, "aquaplaning", "aquaplaning"),
    R(5, "The first thing to consider on approach to a flood is", ["stopping to gauge the depth of water", "using the highest and fastest gear", "building up speed before entering to displace the water", "slipping the clutch in gear"], 0, "floods"),
    R(6, "The correct procedure for driving across a ford (flood) is to", ["select an intermediate gear and keep slipping the clutch", "keep your speed high using 1st gear and accelerate", "use a low gear and low engine revs at very low speed", "use first gear, slip the clutch a little and keep the engine revs high"], 3, "floods", "flood-ford"),
    R(7, "Water spraying into the engine compartment is likely to", ["have no effect on diesel-engined vehicles", "seriously affect electrical components", "increase the coolant level of the engine", "clean the carburettor"], 1, "floods"),
    R(8, "Having passed through deep water, a driver is advised to test their brakes", ["by driving slowly with their left foot on the footbrake for a short distance", "with high acceleration, slow speed, lightly pressing the brake", "by applying the handbrake as they drive out of the water", "by driving slowly for 10 km to dry the brakes"], 0, "floods"),
    R(9, "In areas subject to prolonged periods of snow, a driver should consider fitting", ["bias-belted tyres and snow brakes", "snow wheel chains", "larger diameter wheels and snow blades", "a four-wheel drive engine"], 1, "snow"),
    R(10, "Anti-lock braking systems are designed to", ["take over if you don't brake firmly enough", "take over if you apply too much brake pressure", "prevent skidding on ice", "prevent the drive wheels from turning"], 1, "black-ice"),
    R(11, "'Driving Essential Skills' advises that braking distances on ice can be", ["ten times greater than on a dry road", "twice as great as on a dry road", "five times greater than on a dry road", "four times your thinking distance"], 0, "ice-control", "stopping-weather"),
    R(12, "Moving off from the side of the road in snow, a driver gets wheel spin and is stuck in a rut. They should", ["consider buying a four-wheel drive vehicle", "use the highest gear possible to reverse out of the rut", "try to move backwards slightly and then forwards in a low to intermediate gear", "place a spade under the wheels to improve traction"], 2, "ice-control"),
    R(13, "When confronted with an oncoming vehicle out of control on ice, you should", ["make the maximum use of engine braking", "brake gently to a halt", "steer briskly out of the vehicle's path", "leave your vehicle at the earliest opportunity"], 0, "out-of-control"),
    R(14, "Tyre pressures should be checked and adjusted if necessary", ["when they are cold", "when they are hot", "after a short drive", "after a lengthy journey"], 0, "tyres"),
    R(15, "In the event of a tyre bursting whilst driving, you should", ["brake progressively to a halt", "steer in the direction in which the car weaves until stopped", "bring the car to a prompt stop", "grip the steering wheel firmly and roll to a halt in a safe place"], 3, "tyre-care", "tyre-burst"),
    R(16, "Radial-ply tyres have", ["more grip than cross-ply tyres", "less grip than cross-ply tyres", "less flexible walls than cross-ply tyres", "better inner tubes than cross-ply tyres"], 0, "tyres", "tyre-ply"),
    R(18, "The factors involved in a skid, in order of importance, are", ["the driver, the vehicle, the road", "the road, the driver, the vehicle", "the road, the vehicle, the driver", "the vehicle, the road, the driver"], 0, "skids", "skid-causes"),
    R(19, "In a skid where the rear of the car slides to the right, a driver should regain control by", ["braking and steering to the right", "releasing the brake and steering right", "releasing the brake and steering left", "releasing the brake and not steering"], 1, "skid-braking", "rear-skid"),
    R(20, "Over-steering whilst correcting a rear-wheel skid is likely to result in", ["a skid in the opposite direction", "a smaller skid in the same direction", "the vehicle spinning around", "a front-wheel skid"], 0, "skid-braking"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "forces",
      prompt: "A car is most stable when it is…", options: ["Braking on a bend", "Going straight on a level road at a constant speed", "Accelerating downhill", "Cornering slowly"], answer: 1,
      explain: "Straight, level, steady — the engine just overcoming drag and friction.", src: P(40, "Here comes the science bit") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "black-ice",
      prompt: "Which picture shows the hazard that is often invisible?", options: ["black-ice", "flood-ford", "snow-hill", "aquaplaning"], answer: 0,
      names: ["Black ice", "Flood", "Snowy hill", "Aquaplaning"],
      explain: "Rain freezing as it falls — the first warning may be light steering.", src: P(41, "Black ice") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "esc",
      statement: "ESC means you can drive faster on slippery roads.", answer: false,
      explain: "It's not a substitute for safe driving — adjust to the road and weather.", src: P(43, "Electronic Stability Control") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "cornering",
      scene: "↪️ Your pupil brakes hard while turning sharply right on a fast bend.",
      prompt: "What's the danger?", options: ["None", "Weight piles onto the front-outside wheel — the rear can lose grip or the car roll", "Only tyre wear", "The engine stalls"], answer: 1,
      explain: "It acts as an anchor, increasing the risk of the rear wheels losing grip.", src: P(40, "Here comes the science bit") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "tyres",
      prompt: "Match the tyre fact.", pairs: [["Legal tread", "1.6 mm"], ["Pressure check", "Weekly, when cold"], ["New tyre", "Caution for 160 km"]],
      explain: "Your tyres are your only contact with the road.", src: P(42, "Pressure; Condition; p.93 answer 19") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "floods",
      prompt: "At a flood:", steps: ["Check the depth", "First gear, revs high", "Mirrors", "Test the brakes"],
      explain: "Crawl through, then dry the brakes.", src: P(41, "Floods; Testing your brakes") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "skid-accel", visual: "wheelspin",
      scene: "💨 Your pupil floors it pulling out of a junction on a wet road and the wheels spin.",
      prompt: "What's the fix?", options: ["Steer hard", "Release the accelerator to let the tyres grip", "Brake", "Change up"], answer: 1,
      explain: "Remove the cause — and don't steer until some grip returns.", src: P(43, "Skids caused by acceleration") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "skids",
      prompt: "The factors in a skid, in order of importance:", options: ["Driver, vehicle, road", "Road, driver, vehicle", "Road, vehicle, driver", "Vehicle, road, driver"], answer: 0,
      explain: "Drivers cause skids.", src: P(47, "Retention Q18 (answer a, p.96)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "esc",
      prompt: "Which picture shows a system that brakes individual wheels to keep you on line?", options: ["esc", "cornering-force", "rear-skid"], answer: 0,
      names: ["ESC", "Cornering force", "Rear-wheel skid"],
      explain: "ESC compares where you're steering with where the car is going.", src: P(43, "Electronic Stability Control") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "skid-braking",
      prompt: "Over-steering while correcting a rear-wheel skid is likely to cause…", options: ["A skid in the opposite direction", "A smaller skid the same way", "A spin", "A front-wheel skid"], answer: 0,
      explain: "Over-correction can lead to a skid in the opposite direction.", src: P(47, "Retention Q20 (answer a, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "2.6",
  number: "2.6",
  title: "Road Holding",
  pages: [40, 47],
  intro: "The forces on a moving car, water, snow and ice, tyres, and how skids start and stop.",
  objectives: [
    "The forces which act on a moving vehicle",
    "How to recognise and deal with aquaplaning, and with floods",
    "How to drive on snow and ice",
    "How to check and maintain your tyres",
    "The causes of skidding, and how to avoid and correct skids",
  ],
  objectivesSrc: P(40, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...grip, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "grip-check", icon: "🛞", label: "Grip Check", rule: { activity: "grip", min: 100 } },
    { id: "road-holding-specialist", icon: "🏆", label: "Road Holding Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
