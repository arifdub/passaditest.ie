/*
  ===========================================================================
  BOOK 2 · UNIT 2.2 — THE DRIVING MIRRORS

  Source: "Theory Resource Workbook 2 of 4" (Driver Education Supplies),
  book pages 14–19, with the post-test model answers on pages 90–91 and
  the retention-test answers on page 96 (1a 2c 3d 4c 5c 6b 7a 8d 9b 10c
  11c 12b 13c 14c 15d 16a 17c 18a 19c 20c).

  Retention test Q18 is omitted: page 14 tells you both to hold the mirror
  by its edges (the keyed a) and to get the best possible view, especially
  to the offside (b), so it has two right answers. Q1 (rear view as
  important as the view ahead), Q3 (the legal requirement for mirrors) and
  Q4 (towing a caravan) cover points the unit text doesn't state; they are
  kept as the book sets them.

  Page 16's table of "best" and "worst" A-pillar widths by car model isn't
  used — it names specific models and can date; the unit keeps the point
  that pillars hide objects up to 23 m away.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 2, unit: "2.2", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "The driver's third eye",
    text: "Most cars have an interior mirror and two door mirrors. They give you a view of the road behind, so you can keep up to date and make safe, sensible decisions based on the position and speed of following traffic. Emphasise their correct use from the first lesson.",
    src: P(14, "Unit introduction; The Function of the Mirrors"),
  },
  "glass": {
    title: "Flat and convex glass",
    text: "The interior mirror is usually flat glass: a true picture of the road behind. Most door mirrors are convex (curved): a wider field of view, but vehicles look smaller — and so further away than they really are. Learn to judge distance by comparing an approaching vehicle in the interior and door mirrors, then looking round for the real view — only when stationary.",
    src: P(14, "The Function of the Mirrors; p.90 answer 4; p.91 answer 16"),
  },
  "adjust": {
    title: "Adjusting the mirrors",
    text: "Never adjust the mirrors while moving. Adjust them before driving, in your normal driving position, so you don't need to move your head to see following traffic. Hold the interior mirror by its edges (no finger marks) and get the best possible view through the rear window, especially to the offside — all four sides if possible, otherwise the top and offside. Set the door mirrors for the best view behind, with the side of your car only just visible.",
    src: P(14, "Adjustment; p.90 answers 1, 2"),
  },
  "anti-dazzle": {
    title: "Day/night and electrochromic mirrors",
    text: "A day/night (anti-dazzle) mirror has a tab: flip it to deflect the glare of lights behind — you lose some rear clarity. An electric chromic mirror (ECM) dims itself automatically using a sensor in the glass, and returns to normal in reverse; on some cars it can be switched off.",
    src: P(14, "Day and Night Mirror; Electric Chromic Mirror; p.91 answer 17"),
  },
  "using": {
    title: "Using the mirrors",
    text: "Check them frequently to keep up to date. Use the interior mirror first on approach to any hazard and before any manoeuvre. Door mirrors are \"directional\": the offside mirror before moving right, turning right or overtaking. Use frequent glances so your eyes aren't off the road ahead for long. Ask: how close, how fast, what is it doing, do I need a signal, when, is my move safe?",
    src: P(15, "Using the Mirrors; p.91 answers 18, 19"),
  },
  "when": {
    title: "Well before…",
    text: "You MUST use the mirrors effectively in good time, well before: moving off, signalling, changing direction, turning, overtaking, changing lane, slowing down or stopping, and opening your door. Just looking is not enough — act sensibly on what you see. The only exception: an emergency stop.",
    src: P(15, "You MUST always use the mirrors; p.90 answers 5, 7, 8"),
  },
  "blind-spots": {
    title: "Blind spots",
    text: "Every vehicle has blind spots — areas hidden by the body (such as the door pillars) or outside the range of the mirrors. When stationary, check them by looking round. On the move, a quick sideways glance before changing lanes or merging may be needed, but should be the exception: while you look round you may lose touch with what's ahead. Don't stay in another driver's blind spot — if you can't see the driver in their mirror, they can't see you.",
    src: P(15, "Blind Spots; p.90 answer 3; p.91 answers 14, 15"),
  },
  "a-pillar": {
    title: "The A-pillar",
    text: "The windscreen pillars (A-frame) can hide pedestrians, cyclists, motorcycles — even a whole car — and can impair your view of objects up to 23 m away. Modern pillars are thicker. Pause and look around the pillars, especially at junctions; it's fine to move in your seat. Up to 21% of junction crashes involve \"looked, but failed to see\".",
    src: P(15, "The A-frame Blind Spots; p.16 Remember"),
  },
  "routine": {
    title: "MSM and MS(M)PSL",
    text: "Mirrors–Signal–Manoeuvre: never signal without first checking your mirrors, and do both well before you act. The hazard routine expands it: Mirrors–Signal–(Mirror)–Position–Speed–Look, and Look means Look, Assess, Decide and Act. The extra mirror is usually the door mirror — e.g. interior mirror, signal, offside mirror when turning right. Apply it to any hazard: anything that might make you change course or speed.",
    src: P(16, "The Hazard Routine; MS(M)PSL; p.90 answers 6, 11, 12"),
  },
  "tints": {
    title: "Window tints",
    text: "Don't fit or use excessively dark tinting on the windscreen or front side windows: an RSA tester will refuse the car for the driving test or ADI test. Factory tinting meeting the visual light transmittance (VLT) standard is fine; there are no VLT limits for the rear windscreen or rear passenger windows.",
    src: P(16, "A Word on Window Tints"),
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
    "Mirrors well before you signal, move, slow down or open the door — and act on what you see",
    "Door mirrors are convex: vehicles are closer than they look",
    "Every car has blind spots — look round, and around the A-pillars",
  ],
  cards: [
    {
      icon: "🪞",
      kicker: "Driving mirrors",
      title: "The driver's third eye",
      visual: "mirror-coverage",
      body: [
        "Most cars have an interior mirror and two door-mounted exterior mirrors. They show the road behind, so you can make safe, sensible decisions based on the position and speed of following traffic.",
        "Emphasise correct mirror use from the very first lesson.",
      ],
      think: ["🚗 What's behind me — how close, how fast?", "💡 Do I need a signal?", "✅ Is my move safe?"],
      concept: "why",
      src: P(14, "Unit introduction; The Function of the Mirrors"),
    },
    {
      icon: "🔍",
      kicker: "Flat and convex",
      title: "Closer than they look",
      visual: "flat-convex",
      ask: {
        prompt: "In a convex door mirror, a following car appears to be…",
        options: ["At its actual distance", "Closer than it is", "Further away than it is"],
        answer: 2,
      },
      list: [
        "Interior mirror: usually flat glass — a true picture",
        "Door mirrors: usually convex (curved) — a wider field of view",
        "But vehicles look smaller, so further away than they really are",
        "Practise judging distance: compare a car in the interior and door mirrors, then look round — only when stationary",
      ],
      concept: "glass",
      src: P(14, "The Function of the Mirrors; p.91 answer 16"),
    },
    {
      icon: "🔧",
      kicker: "Adjustment",
      title: "Set them before you drive",
      visual: "mirror-coverage",
      ask: {
        prompt: "When should the mirrors be adjusted?",
        options: ["While driving, as needed", "When the vehicle is stationary", "Only at the start of the test"],
        answer: 1,
      },
      list: [
        "NEVER adjust the mirrors while moving",
        "Adjust in your normal driving position — no head movement should be needed",
        "Interior: hold it by the edges; the best view through the rear window, especially to the offside",
        "Frame all four sides if possible — if not, the top and offside",
        "Door mirrors: the best view behind, with the side of your car only just visible",
      ],
      concept: "adjust",
      src: P(14, "Adjustment; p.90 answers 1, 2"),
    },
    {
      icon: "🌙",
      kicker: "At night",
      title: "Anti-dazzle mirrors",
      visuals: ["anti-dazzle:day", "anti-dazzle:night"],
      list: [
        "Day/night mirror: flip the tab to deflect glare from lights behind — you lose a little rear clarity",
        "Electric chromic mirror (ECM): a sensor in the glass dims it automatically",
        "An ECM returns to normal in reverse; some can be switched off — check the handbook",
      ],
      concept: "anti-dazzle",
      src: P(14, "Day and Night Mirror; Electric Chromic Mirror; p.91 answer 17"),
    },
    {
      icon: "↔️",
      kicker: "Using the mirrors",
      title: "Interior first, then directional",
      visual: "offside-nearside",
      list: [
        "Check frequently to keep up to date",
        "Interior mirror first on approach to any hazard and before any manoeuvre",
        "Door mirrors are \"directional\": the offside mirror before moving right, turning right or overtaking",
        "Frequent glances — don't take your eyes off the road ahead for long",
      ],
      sections: [
        { head: "Ask yourself", list: ["How close is the following traffic?", "How fast is it moving — and what is it doing?", "Do I need to signal — and when?", "Is my manoeuvre safe?"] },
      ],
      concept: "using",
      src: P(15, "Using the Mirrors; p.91 answers 18, 19"),
    },
    {
      icon: "⏱️",
      kicker: "In good time",
      title: "Well before you act",
      visual: "mirrors-when",
      list: [
        "Moving off · signalling · changing direction",
        "Turning left or right · overtaking · changing lane",
        "Slowing down or stopping (normally) · opening your door",
      ],
      callout: "Just looking is not enough — act sensibly on what you see. The one exception to the mirror rule: an emergency stop.",
      concept: "when",
      src: P(15, "You MUST always use the mirrors; p.90 answers 5, 7, 8"),
    },
    {
      icon: "🙈",
      kicker: "Blind spots",
      title: "What the mirrors miss",
      visuals: ["mirror-coverage", "lorry-blindspot"],
      ask: {
        prompt: "Why is looking round into the blind spot on the move risky?",
        options: ["It's illegal", "While you look round you may lose touch with what's ahead", "It confuses other drivers"],
        answer: 1,
      },
      list: [
        "Every vehicle has blind spots the mirrors don't cover",
        "Stationary: check them by looking round",
        "On the move: a quick sideways glance before changing lanes or merging — the exception, not the rule",
        "Don't stay in another driver's blind spot — e.g. behind or alongside a lorry",
      ],
      callout: "If you can't see the driver in their mirror, they can't see you.",
      concept: "blind-spots",
      src: P(15, "Blind Spots; p.91 answers 14, 15"),
    },
    {
      icon: "🏍️",
      kicker: "The A-pillar",
      title: "Look around the pillar",
      visual: "a-pillar",
      list: [
        "The windscreen pillars can hide pedestrians, cyclists, motorcycles — even a whole car",
        "They can impair your view of objects up to 23 m away; modern pillars are thicker",
        "Pause and look around the pillars, especially when emerging at junctions",
        "It's okay to move in your seat to see round an obstruction",
      ],
      callout: "Up to 21% of junction crashes list \"looked, but failed to see\".",
      concept: "a-pillar",
      src: P(15, "The A-frame Blind Spots; p.16 Remember"),
    },
    {
      icon: "🔁",
      kicker: "The hazard routine",
      title: "MS(M)PSL",
      visual: "msmpsl",
      body: [
        "Mirrors–Signal–Manoeuvre: never signal without first checking the mirrors, and do both well before you act.",
        "The hazard routine expands it: Mirrors, Signal, (Mirror), Position, Speed, Look — and Look means Look, Assess, Decide and Act. The extra mirror is usually the door mirror, e.g. turning right: interior mirror, signal, offside mirror.",
      ],
      callout: "Use it for any hazard — anything that might make you change course or speed.",
      concept: "routine",
      src: P(16, "The Hazard Routine; MS(M)PSL; p.90 answers 6, 11, 12"),
    },
    {
      icon: "🕶️",
      kicker: "Window tints",
      title: "Too dark means no test",
      body: [
        "Don't fit or use excessively dark tint on the windscreen or front side windows — an RSA tester will refuse the car for the driving test or ADI test.",
        "Factory tint meeting the visual light transmittance (VLT) standard is fine. There are no VLT limits for the rear windscreen or rear passenger windows.",
      ],
      concept: "tints",
      src: P(16, "A Word on Window Tints"),
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
    { id: "r1", type: "flash", concept: "adjust",
      front: "How many sides of the rear window should the interior mirror frame?",
      back: "All four if possible — if not, the top and offside must be visible.", src: P(90, "Post-test answer 2") },
    { id: "r2", type: "flash", concept: "blind-spots",
      front: "How do you get over blind spots?",
      back: "Mainly by using the outside mirrors, and looking around when necessary.", src: P(90, "Post-test answer 3") },
    { id: "r3", type: "fill", concept: "glass", visual: "flat-convex",
      before: "Convex mirrors give a wider view but make vehicles appear", after: "than they really are.",
      options: ["further away", "closer", "faster", "larger"], answer: "further away",
      explain: "Flat glass gives a true picture; convex glass a wider field of view, with objects appearing more distant.", src: P(90, "Post-test answer 4") },
    { id: "r4", type: "flash", concept: "routine",
      front: "What does MSM mean?",
      back: "Mirrors–Signal–Manoeuvre. Never signal without first checking your mirrors, and do both well before you act.", src: P(90, "Post-test answer 6") },
    { id: "r5", type: "flash", concept: "when",
      front: "What exceptions are there to the MSM rule?",
      back: "None other than the emergency stop.", src: P(90, "Post-test answer 8") },
    { id: "r6", type: "truefalse", concept: "using",
      statement: "If there's no one behind, there's no need to check the mirror.", answer: false,
      explain: "Yes, check — situations change quickly.", src: P(90, "Post-test answer 10") },
    { id: "r7", type: "truefalse", concept: "using",
      statement: "You may still need to signal when there's no one behind.", answer: true,
      explain: "You may help another road user ahead or to the side.", src: P(90, "Post-test answer 9") },
    { id: "r8", type: "fill", concept: "a-pillar", visual: "a-pillar",
      before: "A-pillars can impair your view of objects as much as", after: "away.",
      options: ["23 metres", "2 metres", "100 metres", "5 metres"], answer: "23 metres",
      explain: "Look around the windscreen pillars, especially when emerging at junctions.", src: P(15, "The A-frame Blind Spots") },
    { id: "r9", type: "flash", concept: "using",
      front: "For how long should you look in the mirrors?",
      back: "Frequent glances — so your eyes aren't off the road ahead for long.", src: P(91, "Post-test answer 19") },
    { id: "r10", type: "flash", concept: "blind-spots",
      front: "What should you never do when reversing?",
      back: "Rely solely on your mirrors. Look all around, all the time.", src: P(91, "Post-test answer 20") },
    { id: "r11", type: "flash", concept: "anti-dazzle", visual: "anti-dazzle:night",
      front: "What is a day/night (anti-dazzle) mirror?",
      back: "An interior mirror with a flip tab that cuts dazzle from lights behind at night — at the cost of a little rear clarity.", src: P(91, "Post-test answer 17; p.14") },
  ],
};

/* ---------------------------------------------------------------------------
   3. CHECK YOUR MIRRORS — recognition.
   --------------------------------------------------------------------------- */
const mirrors = {
  id: "mirrors",
  kind: "items",
  mode: "matching",
  title: "Check Your Mirrors",
  blurb: "Spot the blind spot, sort the mirror",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "blind-spots",
      prompt: "Which picture shows the blind spots the mirrors don't cover?",
      options: ["mirror-coverage", "zone-of-vision", "offside-nearside", "following-distance"], answer: 0,
      names: ["Mirror coverage and blind spots", "Zone of vision ahead", "Offside and nearside", "Following distance"],
      explain: "The red areas at the rear quarters are outside every mirror's view.", src: P(15, "Blind Spots") },
    { id: "k2", type: "picture", label: "Spot it", concept: "a-pillar",
      prompt: "Which picture shows the A-pillar hiding a road user?",
      options: ["a-pillar", "restricted-view", "building-line", "dead-ground"], answer: 0,
      names: ["A-pillar", "Restricted view", "Building line", "Dead ground"],
      explain: "The windscreen pillar can hide a motorcycle — even a whole car.", src: P(15, "The A-frame Blind Spots") },
    { id: "k3", type: "picture", label: "Spot it", concept: "anti-dazzle",
      prompt: "Which mirror is on its night setting?",
      options: ["anti-dazzle:night", "anti-dazzle:day"], answer: 0,
      names: ["Night setting — glare reduced", "Day setting — dazzled"],
      explain: "Flipping the tab deflects the glare from lights behind.", src: P(14, "Day and Night Mirror") },
    {
      id: "k4", type: "sort", concept: "glass",
      prompt: "Flat or convex glass?",
      categories: [
        { id: "flat", label: "Flat" },
        { id: "convex", label: "Convex" },
      ],
      cards: [
        { text: "Usually the interior mirror", cat: "flat" },
        { text: "Gives a true picture", cat: "flat" },
        { text: "Usually the door mirrors", cat: "convex" },
        { text: "Wider field of view", cat: "convex" },
        { text: "Vehicles look further away", cat: "convex" },
      ],
      explain: "Flat: true picture. Convex: wider view, but things seem further away.", src: P(14, "The Function of the Mirrors") },
    {
      id: "k5", type: "sort", concept: "when",
      prompt: "Check the mirrors first?",
      categories: [
        { id: "yes", label: "Mirrors first" },
        { id: "no", label: "The one exception" },
      ],
      cards: [
        { text: "Moving off", cat: "yes" },
        { text: "Opening your car door", cat: "yes" },
        { text: "Slowing down normally", cat: "yes" },
        { text: "Changing lane", cat: "yes" },
        { text: "An emergency stop", cat: "no" },
      ],
      explain: "The mirror rule has only one exception: the emergency stop.", src: P(15, "You MUST always use the mirrors") },
    {
      id: "k6", type: "sort", concept: "using",
      prompt: "Which door mirror first?",
      categories: [
        { id: "off", label: "Offside (right)" },
        { id: "near", label: "Nearside (left)" },
      ],
      cards: [
        { text: "Turning right", cat: "off" },
        { text: "Overtaking", cat: "off" },
        { text: "Moving out to the right", cat: "off" },
        { text: "Turning left", cat: "near" },
        { text: "Pulling in to the left", cat: "near" },
      ],
      explain: "Door mirrors are directional: check the one on the side you're moving towards.", src: P(15, "Using the Mirrors") },
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
  blurb: "The routine, and the mirrors",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "routine", visual: "msmpsl",
      prompt: "Match each letter of MS(M)PSL.",
      pairs: [
        ["M", "Mirrors"],
        ["S", "Signal"],
        ["(M)", "An extra mirror check"],
        ["P", "Position"],
        ["L", "Look, assess, decide, act"],
      ],
      explain: "Mirrors, Signal, (Mirror), Position, Speed, Look.", src: P(16, "MS(M)PSL") },
    {
      id: "m2", type: "match", concept: "glass",
      prompt: "Match the mirror to its feature.",
      pairs: [
        ["Interior mirror", "Flat glass — a true picture"],
        ["Door mirrors", "Convex — a wider view"],
        ["Day/night mirror", "A flip tab against dazzle"],
        ["Electric chromic mirror", "Dims itself automatically"],
      ],
      explain: "Know what each mirror shows you — and how it can mislead.", src: P(14, "Function; Day and Night; ECM") },
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
  blurb: "Setting the mirrors, and the hazard routine",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "adjust",
      prompt: "Setting up the mirrors — in order.",
      steps: ["Car stationary, you in your normal driving position", "Hold the interior mirror by its edges", "Frame the rear window — especially the offside", "Set each door mirror: the side of the car just visible", "Check you need no head movement to see behind"],
      explain: "Never while moving; edges only; best view behind without moving your head.", src: P(14, "Adjustment") },
    { id: "p2", type: "order", concept: "routine", visual: "msmpsl",
      prompt: "The hazard routine — in order.",
      steps: ["Mirrors", "Signal", "Mirror (door mirror)", "Position", "Speed", "Look — assess, decide, act"],
      explain: "MS(M)PSL — the hazard routine is an expansion of MSM.", src: P(16, "MS(M)PSL") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "adjust",
      scene: "🔧 Driving along, your pupil reaches up to adjust the interior mirror.",
      prompt: "What do you say?",
      options: ["Fine, if it's quick", "Never adjust the mirrors while moving — do it before you drive", "Only with the left hand", "Only on straight roads"], answer: 1,
      explain: "Mirrors should only be adjusted when the vehicle is stationary.", src: P(18, "Retention Q7 (answer a, p.96); p.14") },
    { id: "s2", type: "choice", label: "Scenario", concept: "glass", visual: "flat-convex",
      scene: "🚙 In the door mirror, a car behind looks a long way back. Your pupil moves out to overtake.",
      prompt: "What's the danger?",
      options: ["None — it's far away", "Convex mirrors make vehicles look further away than they are", "Door mirrors are flat", "The car may be parked"], answer: 1,
      explain: "Convex glass makes vehicles appear smaller and further away than their actual distance.", src: P(18, "Retention Q2 (answer c, p.96)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "a-pillar", visual: "a-pillar",
      scene: "🏍️ Emerging from a junction, your pupil glances right and pulls out — a motorbike was hidden by the windscreen pillar.",
      prompt: "What should you teach?",
      options: ["Look quicker", "Pause and look around the A-pillar — move in your seat if needed", "Rely on the door mirror", "Sound the horn first"], answer: 1,
      explain: "The A-pillar can hide a motorcycle or a car; look around it, especially at junctions.", src: P(15, "The A-frame Blind Spots; p.16") },
    { id: "s4", type: "choice", label: "Scenario", concept: "blind-spots", visual: "lorry-blindspot",
      scene: "🚛 On a dual carriageway, your pupil sits alongside the rear of a lorry for a long time.",
      prompt: "What do you say?",
      options: ["Fine — it's slow", "Don't stay in its blind spot: if you can't see the driver in their mirror, they can't see you", "Sound the horn", "Flash the lorry"], answer: 1,
      explain: "Avoid staying in another driver's blind spot for longer than necessary.", src: P(15, "Blind Spots") },
    { id: "s5", type: "choice", label: "Scenario", concept: "when",
      scene: "🚪 Parked at the kerb, your pupil goes to open the driver's door.",
      prompt: "First?",
      options: ["Open it a little to look", "Check the mirrors — and look round", "Signal right", "Just open it"], answer: 1,
      explain: "Use the mirrors well before opening your car door.", src: P(15, "You MUST always use the mirrors") },
    { id: "s6", type: "choice", label: "Scenario", concept: "routine",
      scene: "💡 Your pupil signals right, then checks the mirror.",
      prompt: "What's wrong?",
      options: ["Nothing", "Mirrors come before the signal — check, then decide whether to signal", "They should signal twice", "The mirror isn't needed for turns"], answer: 1,
      explain: "Never signal without first checking your mirrors; check them well before signalling.", src: P(90, "Post-test answer 6; retention Q9") },
    { id: "s7", type: "choice", label: "Scenario", concept: "anti-dazzle", visual: "anti-dazzle:day",
      scene: "🌙 At night, headlights behind are dazzling your pupil in the interior mirror.",
      prompt: "What can they do?",
      options: ["Turn the mirror away completely", "Flip the mirror to its night setting", "Brake to let the car pass", "Switch on their fog lights"], answer: 1,
      explain: "The day/night tab deflects the glare — with a little loss of rear clarity.", src: P(14, "Day and Night Mirror") },
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
  blurb: "Turning right at a junction",
  xpPer: 10,
  situation: "↪️ Your pupil is driving on a busy road and needs to turn right at the next junction.",
  items: [
    { id: "w1", type: "choice", step: "First", concept: "using", prompt: "Which mirror first, approaching the hazard?",
      options: ["The offside door mirror", "The interior mirror", "No mirror needed", "The nearside door mirror"], answer: 1,
      explain: "Always use the interior mirror first on approach to any hazard.", src: P(15, "Using the Mirrors") },
    { id: "w2", type: "choice", step: "Deciding", concept: "routine", prompt: "When should they check the mirrors before deciding on a signal?",
      options: ["As the signal is given", "Well before a signal is given", "Just after signalling", "Just before signalling"], answer: 1,
      explain: "Check the mirrors well before signalling.", src: P(18, "Retention Q9 (answer b, p.96)") },
    { id: "w3", type: "choice", step: "Signalled", concept: "routine", prompt: "They've signalled right. Now…",
      options: ["Turn straight away", "Check the offside mirror again — the (M)", "Look only ahead", "Cancel the signal"], answer: 1,
      explain: "Use the mirrors again to check others' reaction — usually the offside door mirror here.", src: P(19, "Retention Q20 (answer c, p.96); p.16") },
    { id: "w4", type: "choice", step: "Approach", concept: "routine", visual: "msmpsl", prompt: "Then the sequence is…",
      options: ["Speed, position, look", "Position, speed, look", "Look, position, speed", "Manoeuvre, then look"], answer: 1,
      explain: "MSPSL: signal, then adjust position, adjust speed, and look.", src: P(19, "Retention Q17 (answer c, p.96)") },
    { id: "w5", type: "choice", step: "At the junction", concept: "a-pillar", visual: "a-pillar", prompt: "Looking into the road they're turning into…",
      options: ["One quick glance is enough", "Look around the A-pillars — something may be hidden", "Rely on the mirrors", "Watch the car ahead"], answer: 1,
      explain: "Pause and check around the windscreen pillars when negotiating junctions.", src: P(15, "The A-frame Blind Spots") },
    { id: "w6", type: "choice", step: "Looking", concept: "routine", prompt: "\"Look\" in the routine means…",
      options: ["Look–assess–decide", "Mirrors–signal–manoeuvre", "Assess–decide–act only", "Position–speed–look"], answer: 0,
      explain: "Look, assess, decide — and act.", src: P(19, "Retention Q16 (answer a, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 96. Q18 is omitted (see top).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(n <= 10 ? 18 : 19, `Retention test Q${n}; answer p.96`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "A driver's rear view is", ["as important as the view of the road ahead", "not as important as the view of the road ahead", "as important as the view in the exterior mirrors", "unimportant when there is a hazard ahead"], 0, "why"),
    R(2, "The Colourfile Professional shows that vehicles seen in a convex mirror will appear to be", ["their actual distance away", "slightly curved", "further away than their actual distance", "closer than their actual distance away"], 2, "glass", "flat-convex"),
    R(3, "Drivers are required by law to ensure that", ["any vehicle they drive has an interior mirror", "all exterior mirrors are convex", "all vehicle mirrors are focused on the centre of their vehicle", "their vehicle has interior and exterior convex mirror/s in usable condition"], 3, "why"),
    R(4, "'Driving Essential Skills' advises that when towing a caravan, you should", ["always look back before changing direction", "fit a wide-angle interior mirror", "fit side mirrors with extended arms", "not need to use the interior mirror"], 2, "adjust"),
    R(5, "Before moving away, the driver should adjust their mirrors to get the best possible", ["offside view", "nearside view", "rear view", "view of the sides of the car"], 2, "adjust"),
    R(6, "Before moving away, a driver should adjust the mirrors so as to get the best possible view", ["with head movements", "without particularly moving the head", "without moving the eyes", "without looking, as use of a signal is sufficient"], 1, "adjust"),
    R(7, "Mirrors should only be adjusted", ["when the vehicle is stationary", "when the vehicle is moving", "after putting on the seat belt", "before starting the engine"], 0, "adjust"),
    R(8, "'Driving Essential Skills' advises that the mirrors must always be used well before approaching a hazard or commencing any manoeuvre, and that this rule is", ["not subject to exception in certain circumstances", "subject to qualification under any circumstance", "not subject to any exception or qualification", "not subject to any exception or qualification except in an emergency"], 3, "when", "mirrors-when"),
    R(9, "When deciding whether a signal is necessary, a driver should check the mirrors", ["as the signal is given", "well before a signal is given", "just before signalling", "just after signalling"], 1, "routine"),
    R(10, "Blind spots are", ["any area outside the range of your headlights", "the areas covered by your exterior mirrors", "areas not seen or covered in your mirrors", "dips in the road that can hide hazards"], 2, "blind-spots", "mirror-coverage"),
    R(11, "'Driving Essential Skills' advises, with regard to blind spots, that", ["looking around is essential on the move", "a quick sideways glance is always necessary", "looking around on the move can be dangerous", "looking around on the move should never be necessary"], 2, "blind-spots"),
    R(12, "Blind spots in a driver's rear view can", ["be overcome with additional exterior mirrors", "never be entirely eliminated by mirrors", "only be eliminated by use of convex mirrors", "nowadays be covered by video monitoring"], 1, "blind-spots"),
    R(13, "Which of the following statements is true about the use of mirrors?", ["They should be slightly off-centred to make you move your head more", "They should be used in an emergency", "They should be used well before any significant change in speed or direction", "They should not be used before accelerating"], 2, "when"),
    R(14, "'Driving Essential Skills' advises the correct routine to apply on approach to any hazard is", ["MSPLS", "MSMPL", "MSPSL", "MPSLS"], 2, "routine", "msmpsl"),
    R(15, "'Driving Essential Skills' advises when approaching any hazard, a driver should check the mirrors and must", ["change speed and direction", "always slow down", "signal before changing speed and direction", "be prepared to change speed or direction"], 3, "routine"),
    R(16, "Looking, as part of the hazard routine, means", ["look–assess–decide", "mirrors–signal–manoeuvre", "assess–decide–act", "position–speed–look"], 0, "routine"),
    R(17, "Approaching a junction, the sequence of actions a driver should follow is to check mirrors and", ["adjust speed, adjust position, signal and manoeuvre", "signal, manoeuvre, adjust position and look", "signal, adjust position, adjust speed and then look", "change speed or course, signal if necessary, look"], 2, "routine"),
    R(19, "'Driving Essential Skills' advises \"effective use\" of mirrors means", ["looking just before signalling", "looking just before any manoeuvre", "looking and acting sensibly on what you see", "glancing at both interior and exterior mirrors"], 2, "when"),
    R(20, "'Driving Essential Skills' advises that having checked the mirrors before giving a signal to help other road users, a driver", ["need not check again before making their move", "should keep their eyes on the road ahead", "should use the mirrors again to check their reaction", "must complete the intended manoeuvre"], 2, "routine"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "when",
      prompt: "The only exception to the mirror rule is…", options: ["Turning left", "An emergency stop", "Moving off", "Slowing gradually"], answer: 1,
      explain: "None other than the emergency stop.", src: P(90, "Post-test answer 8") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "using",
      scene: "🚗 About to overtake a cyclist on the right.",
      prompt: "Which mirrors?", options: ["Nearside only", "Interior, then the offside door mirror", "None — look round", "Interior only"], answer: 1,
      explain: "Interior mirror first; the offside mirror before moving right or overtaking.", src: P(15, "Using the Mirrors") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "glass",
      statement: "The interior mirror usually gives a true picture of the road behind.", answer: true,
      explain: "Interior mirrors are usually flat glass.", src: P(14, "The Function of the Mirrors") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "blind-spots",
      prompt: "Which picture shows the risk of sitting beside a lorry?", options: ["lorry-blindspot", "overtake-large", "crosswind", "tunnel-distance"], answer: 0,
      names: ["Lorry blind spot", "Overtaking a long vehicle", "Crosswind", "Tunnel distances"],
      explain: "If you can't see the driver in their mirror, they can't see you.", src: P(15, "Blind Spots") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "adjust",
      prompt: "Match the mirror to how you set it.", pairs: [["Interior", "Best view through the rear window"], ["Door mirrors", "Side of the car just visible"], ["Either", "Only when stationary"]],
      explain: "Set them before you drive, in your normal driving position.", src: P(14, "Adjustment") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "routine",
      prompt: "The hazard routine:", steps: ["Mirrors", "Signal", "Position", "Speed", "Look"],
      explain: "MSPSL.", src: P(16, "The Hazard Routine") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "blind-spots",
      scene: "🔁 Reversing into a parking space, your pupil watches only the door mirrors.",
      prompt: "What's the fault?", options: ["None", "Relying solely on the mirrors — look all around, all the time", "They should use the interior mirror only", "They should signal"], answer: 1,
      explain: "Never rely solely on your mirrors when reversing.", src: P(91, "Post-test answer 20") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "blind-spots",
      prompt: "Blind spots in a driver's rear view can…", options: ["Be overcome with extra mirrors", "Never be entirely eliminated by mirrors", "Only be removed by convex mirrors", "Be covered by video"], answer: 1,
      explain: "Every vehicle has blind spots the mirrors don't cover.", src: P(19, "Retention Q12 (answer b, p.96)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "glass",
      prompt: "Which mirror makes the car behind look further away?", options: ["flat-convex", "anti-dazzle:night"], answer: 0,
      names: ["Convex door mirror", "Night setting"],
      explain: "Convex glass: a wider view, but objects appear more distant.", src: P(14, "The Function of the Mirrors") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "when",
      prompt: "\"Effective use\" of the mirrors means…", options: ["Looking just before signalling", "Looking just before a manoeuvre", "Looking and acting sensibly on what you see", "Glancing at all mirrors"], answer: 2,
      explain: "Just looking is not enough — act sensibly on what you see.", src: P(19, "Retention Q19 (answer c, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "2.2",
  number: "2.2",
  title: "The Driving Mirrors",
  pages: [14, 19],
  intro: "Setting the mirrors, using them in good time, what they can't show you, and the hazard routine.",
  objectives: [
    "The function of the driving mirrors",
    "The correct way to adjust the driving mirrors",
    "How and when to use the driving mirrors",
    "The limitations of the driving mirrors",
    "The meaning of MSPSL",
  ],
  objectivesSrc: P(14, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...mirrors, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "blind-spot-spotter", icon: "🪞", label: "Blind-Spot Spotter", rule: { activity: "mirrors", min: 100 } },
    { id: "mirror-master", icon: "🏆", label: "Mirror Master", rule: { activity: "scenarios", min: 80 } },
  ],
};
