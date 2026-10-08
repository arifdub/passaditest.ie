/*
  ===========================================================================
  BOOK 2 · UNIT 2.7 — MANOEUVRING

  Source: "Theory Resource Workbook 2 of 4" (Driver Education Supplies),
  book pages 48–55, with the post-test model answers on page 93 and the
  retention-test answers on page 96 (1d 2a 3a 4d 5b 6b 7b 8b 9b 10b 11b
  12c 13b 14a 15a 16a 17b 18b 19a 20d).

  Omitted retention questions (answer key unsafe):
  - Q8 (judging the kerb "as it disappears from the rear window and
    reappears in the side window"): the unit never describes it; "keeping
    the kerb visible in the bottom corner of the rear window" and the
    nearside mirror are just as defensible from the text.
  - Q11 (narrow or busy road: "turn off the main road and find a suitable
    place", key b): not in the text, and reversing into a side road on the
    left (option a) is the manoeuvre the unit teaches for turning back.
  - Q18 (someone pulls up too close behind: "switch on your hazard
    lights", key b): not in the text; selecting reverse to show your
    intention (option a) is equally defensible.

  Q13 ("pressing the clutch down then braking") is kept: the turnabout
  stages say "declutch and brake to stop".
  ===========================================================================
*/

const P = (page, ref) => ({ book: 2, unit: "2.7", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "four-questions": {
    title: "Four questions first",
    text: "Before any manoeuvre ask: Is this a safe place? A convenient place? A legal place? A practical place for the vehicle I'm driving? Never start until you can answer YES to all four. Traffic law is based on the Rules of the Road, the law, safety and convenience — and the law does forbid some manoeuvres.",
    src: P(48, "Before manoeuvring; p.93 answers 1–3"),
  },
  "priority": {
    title: "Priority and speed",
    text: "Give priority to all other road users — never cause them inconvenience or danger. If someone approaches, decide whether you'll be in conflict and whether to stop and wait. The secret of manoeuvring is moving slowly enough: time to steer, keep control and look all around, and for the steering to take effect. Control speed with the clutch at or near the biting point, the gas and the footbrake to suit the gradient. Avoid dry steering — don't turn the wheel until the car moves.",
    src: P(48, "Before manoeuvring; p.93 answers 7–9"),
  },
  "seatbelt": {
    title: "Seatbelts",
    text: "You may remove your seatbelt for a manoeuvre that involves reversing — but put it back on in forward gears. A good policy: only remove it for better visibility or comfort. With modern inertia-reel belts it's seldom necessary.",
    src: P(48, "Before manoeuvring"),
  },
  "reverse-rules": {
    title: "Reversing — you must not",
    text: "Don't reverse further than necessary (an offence), from a minor road onto a major road, at a crossroads, or against the flow in a one-way street. U-turns and reversing are also forbidden on motorways and where signs say so.",
    src: P(49, "Reversing; p.93 answers 16, 17"),
  },
  "reverse-prep": {
    title: "Preparing to reverse",
    text: "Turn slightly in your seat for a good view through the rear window and hold the wheel with both hands (resting the left arm on the passenger seat may help in a straight line). Look all around — over both shoulders, in the mirrors, for children behind the car — and keep looking, mostly through the rear window. Take special care near schools, playgrounds, homes and car parks. In doubt, get out and check, or get help — especially in the dark.",
    src: P(49, "Preparation; Observation; Reverse; p.93 answer 13"),
  },
  "reverse-steer": {
    title: "Steering in reverse",
    text: "Turn the wheel the way you want the rear of the car to go. It's often helpful to turn sooner than seems necessary: the rear wheels don't steer, so it takes time to take effect — and the front swings out the other way. Always remember which way the front wheels are pointing. About to hit the kerb? Stop, drive forward, straighten up and continue. Before turning the wheel left, look to the front and all around again.",
    src: P(49, "Steering; p.93 answers 5, 6, 10, 12"),
  },
  "reverse-left": {
    title: "Reversing into a side road on the left",
    text: "Pick a safe side road as you drive past. Mirrors and signal without misleading anyone; stop reasonably close and parallel to the kerb, a reasonable distance beyond the junction (further out the sharper the corner). Handbrake and neutral if not reversing at once. Reverse gear, gas, biting point, look all around; move back slowly, parallel to the kerb. As the rear wheel nears the corner, look around — the front will swing out — and turn. Straighten up and go back far enough to rejoin on the left and turn right.",
    src: P(49, "Reversing into a side road on the left; Give way"),
  },
  "reverse-right": {
    title: "Reversing into a side road on the right",
    text: "Useful when there's no convenient road on the left, or you can't see through the rear or side windows — in a van, for example. Cross to the right-hand side with good mirrors and signal timing; sit so you can look over both shoulders. All-round checks matter even more — you're in the path of oncoming traffic. Reverse much further into the side road. The right shoulder helps judge position, but still look mainly through the rear window.",
    src: P(50, "Reversing into a side road on the right; p.93 answers 14, 15"),
  },
  "give-way": {
    title: "Left or right — give way and avoid",
    text: "Stop and give way to pedestrians at or crossing the junction, to vehicles approaching if you'd make them slow or swerve, and to vehicles emerging. Avoid mounting the kerb, swinging wide, being too far from the kerb, and causing danger or inconvenience.",
    src: P(50, "Whether reversing to the left or right"),
  },
  "turnabout": {
    title: "Turning in the road",
    text: "For a cul-de-sac or a quiet road with no opening — a safe, convenient place with room and no obstructions on the road or footpath. Not necessarily three points. 1: first gear, mirrors and all round, forward slowly with brisk full right lock; just before the kerb steer briskly left, declutch and brake. 2: reverse, look all round, over the left shoulder reverse with brisk full left lock; near the kerb look over the right shoulder, steer briskly right, stop. 3: first gear, look all round, forward steering right, straighten up on the left. Repeat 2 and 3 if needed. Don't touch, mount or overhang the kerb; don't drive towards pedestrians.",
    src: P(50, "Turnabout; Stages 1–3; p.51 Avoid"),
  },
  "u-turn": {
    title: "U-turns",
    text: "Only when it's completely safe. No reverse gear — not expected by others, so not done often. Check it's legal (no signs or continuous white line), not a one-way street or motorway; somewhere you can see clearly all ways, wide and quiet enough. Use MSM, give way to everyone — cyclists, motorcyclists, pedestrians crossing — and avoid the kerb.",
    src: P(48, "U turns; p.51 Making a U-turn"),
  },
  "parallel": {
    title: "Reverse parallel parking",
    text: "Fits a smaller space than parking forwards because the car is more manoeuvrable in reverse — you need a gap of at least one and a half car lengths. MSM; pull up alongside the car ahead of the gap, within about 1 metre, parallel and level or slightly ahead; brake lights on; reverse gear; look all round. Back until level with that car, look again, steer slightly left; when lined up, straighten; steer briskly right to bring the front in, then left to straighten. Handbrake, neutral. Always give way to traffic and pedestrians.",
    src: P(51, "Reverse (parallel) parking"),
  },
  "bay": {
    title: "Reversing into a parking bay",
    text: "Ends up at 90° (or less) to the traffic flow, at the kerbside or in a car park. From right angles to the bay, treat it like a left or right reverse. Driving into the bay opposite and reversing straight back is acceptable, but restricts your view of traffic. Park parallel to the lines and centrally between them, unless that would stop people getting out safely.",
    src: P(52, "Reversing into a parking bay"),
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
    "Safe, convenient, legal, practical — all four YES",
    "Slowly enough to steer, look and control",
    "Reversing: steer the way you want the back to go",
  ],
  cards: [
    {
      icon: "❓",
      kicker: "Before manoeuvring",
      title: "Four questions",
      visual: "four-questions",
      list: [
        "Is this a safe place?",
        "Is this a convenient place?",
        "Is this a legal place?",
        "Is this a practical place for the vehicle I'm driving?",
      ],
      callout: "Never start until you can answer YES to all four.",
      concept: "four-questions",
      src: P(48, "Before manoeuvring; p.93 answer 1"),
    },
    {
      icon: "🐢",
      kicker: "Priority and speed",
      title: "Slowly enough",
      ask: {
        prompt: "The secret of manoeuvring is…",
        options: ["Speed, to get it over with", "Moving slowly enough to steer, look and stay in control", "Full lock at all times"],
        answer: 1,
      },
      list: [
        "Give priority to all other road users",
        "Someone coming? Decide if you'll be in conflict — stop and wait if so",
        "Clutch at or near the biting point; gas and footbrake to suit the gradient",
        "No dry steering — turn the wheel only when the car is moving",
      ],
      concept: "priority",
      src: P(48, "Before manoeuvring; p.93 answers 7–9"),
    },
    {
      icon: "🔗",
      kicker: "Seatbelts",
      title: "Off only for reversing",
      body: [
        "You may remove your seatbelt for a manoeuvre involving reversing — put it back on in forward gears.",
        "Only remove it for better visibility or comfort. Modern inertia-reel belts make it seldom necessary.",
      ],
      concept: "seatbelt",
      src: P(48, "Before manoeuvring"),
    },
    {
      icon: "🚫",
      kicker: "Reversing",
      title: "You must not reverse…",
      visual: "reverse-never",
      list: [
        "Further than necessary — it's an offence",
        "From a minor road onto a major road",
        "At a crossroads",
        "Against the flow in a one-way street",
        "On a motorway, or where signs forbid it",
      ],
      concept: "reverse-rules",
      src: P(49, "Reversing; p.93 answers 16, 17"),
    },
    {
      icon: "👀",
      kicker: "Preparing to reverse",
      title: "Look all around — keep looking",
      visual: "reverse-observe",
      ask: {
        prompt: "Unsure what's behind the car. You should…",
        options: ["Use your mirrors", "Sound the horn", "Get out and check"],
        answer: 2,
      },
      list: [
        "Turn slightly in your seat; both hands on the wheel",
        "Over both shoulders and in the mirrors — children behind the car",
        "Mostly look through the rear window, but keep looking round",
        "Extra care near schools, playgrounds, homes, car parks and in the dark",
        "In doubt? Get out and check — or get help",
      ],
      concept: "reverse-prep",
      src: P(49, "Preparation; Observation; Reverse"),
    },
    {
      icon: "🔄",
      kicker: "Steering in reverse",
      title: "Point the wheel where the back should go",
      visual: "reverse-steer",
      list: [
        "Turn sooner than seems necessary — the rear wheels don't steer",
        "The front swings out the other way",
        "Remember which way the front wheels are pointing",
        "About to hit the kerb? Stop, drive forward, straighten up, continue",
      ],
      concept: "reverse-steer",
      src: P(49, "Steering; p.93 answers 6, 10, 12"),
    },
    {
      icon: "↙️",
      kicker: "Reverse into a road on the left",
      title: "Close, parallel, slow",
      visual: "reverse-left",
      list: [
        "Look into the side road as you drive past",
        "Stop beyond it, close and parallel — further out the sharper the corner",
        "Reverse slowly, parallel to the kerb, looking all round",
        "Turn as the rear wheel reaches the corner — the front swings out",
        "Straighten up; go back far enough to rejoin on the left",
      ],
      concept: "reverse-left",
      src: P(49, "Reversing into a side road on the left"),
    },
    {
      icon: "↘️",
      kicker: "Reverse into a road on the right",
      title: "When the left won't do",
      list: [
        "No convenient road on the left, or no rear or side view — e.g. a van",
        "Cross to the right side with good mirror and signal timing",
        "All-round checks matter even more — you face oncoming traffic",
        "Reverse much further into the side road",
      ],
      concept: "reverse-right",
      src: P(50, "Reversing into a side road on the right; p.93 answers 14, 15"),
    },
    {
      icon: "✋",
      kicker: "Left or right",
      title: "Stop and give way to…",
      sections: [
        { head: "Give way to", list: ["Pedestrians at or crossing the junction", "Vehicles approaching, if they'd have to slow or swerve", "Vehicles wanting to emerge"] },
        { head: "Avoid", list: ["Mounting the kerb", "Swinging out wide", "Staying too far from the kerb"] },
      ],
      concept: "give-way",
      src: P(50, "Whether reversing to the left or right"),
    },
    {
      icon: "↪️",
      kicker: "Turning in the road",
      title: "Not necessarily three points",
      visual: "turnabout",
      sections: [
        { head: "1 · forward", list: ["First gear, look all round", "Slowly, brisk full right lock", "Near the kerb: briskly left, declutch and brake"] },
        { head: "2 · reverse", list: ["Look all round; over the left shoulder", "Brisk full left lock", "Near the kerb: right shoulder, briskly right, stop"] },
        { head: "3 · forward", list: ["First gear, look all round", "Steer right, straighten up on the left"] },
      ],
      callout: "Don't touch, mount or overhang the kerb, or drive towards pedestrians.",
      concept: "turnabout",
      src: P(50, "Turnabout; Stages 1–3; p.51"),
    },
    {
      icon: "⤴️",
      kicker: "U-turns",
      title: "Only when completely safe",
      visual: "u-turn",
      list: [
        "Legal? No signs, no continuous white line, not a one-way street or motorway",
        "Wide and quiet enough; clear view in all directions",
        "MSM — and give way to everyone",
        "Watch for cyclists, motorcyclists and pedestrians",
      ],
      concept: "u-turn",
      src: P(48, "U turns; p.51 Making a U-turn"),
    },
    {
      icon: "🅿️",
      kicker: "Parallel parking",
      title: "One and a half car lengths",
      visual: "parallel-park",
      ask: {
        prompt: "Why can you park in a smaller gap in reverse?",
        options: ["It's easier to see", "The car is more manoeuvrable in reverse", "The kerb guides you"],
        answer: 1,
      },
      list: [
        "Alongside the car ahead of the gap — parallel, within 1 m, level or slightly ahead",
        "Brake lights on, reverse gear, look all around",
        "Back until level; look again; steer slightly left",
        "Right to bring the front in; left to straighten",
      ],
      concept: "parallel",
      src: P(51, "Reverse (parallel) parking"),
    },
    {
      icon: "🚙",
      kicker: "Parking bays",
      title: "Reverse in, drive out",
      visual: "bay-park",
      list: [
        "From right angles: treat it like a left or right reverse",
        "Driving into the opposite bay and reversing straight back is acceptable — but restricts your view",
        "Park parallel to the lines and centrally between them",
      ],
      concept: "bay",
      src: P(52, "Reversing into a parking bay"),
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
    { id: "r1", type: "flash", concept: "four-questions", visual: "four-questions",
      front: "Before manoeuvring, which four questions?",
      back: "Is it safe? Convenient? Within the law? Practical for my vehicle?", src: P(93, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "four-questions",
      front: "What is traffic law based on?",
      back: "The Rules of the Road, the law, safety and convenience.", src: P(93, "Post-test answer 2") },
    { id: "r3", type: "flash", concept: "reverse-steer",
      front: "Why does steering take time to take effect in reverse?",
      back: "Because the rear wheels don't steer.", src: P(93, "Post-test answer 6") },
    { id: "r4", type: "truefalse", concept: "priority",
      statement: "You should normally turn the steering wheel while the car is stationary.", answer: false,
      explain: "No — avoid dry steering; turn the wheel as the car moves.", src: P(93, "Post-test answer 8") },
    { id: "r5", type: "fill", concept: "priority",
      before: "The greater the amount of steering lock, the more important it is to", after: ".",
      options: ["move the car slowly", "accelerate", "use the handbrake", "look in the mirrors"], answer: "move the car slowly",
      explain: "Slowly enough for the steering to have the greatest possible effect.", src: P(93, "Post-test answers 7, 9") },
    { id: "r6", type: "flash", concept: "reverse-steer",
      front: "Reversing — how should practice first begin?",
      back: "Reversing in a straight line.", src: P(93, "Post-test answer 11") },
    { id: "r7", type: "flash", concept: "reverse-steer",
      front: "About to hit, touch or mount the kerb — what do you do?",
      back: "Stop, drive forward, straighten up and continue reversing.", src: P(93, "Post-test answer 12") },
    { id: "r8", type: "truefalse", concept: "reverse-rules",
      statement: "It's an offence to drive backwards on a road further than necessary.", answer: true,
      explain: "Never reverse for longer than is necessary.", src: P(93, "Post-test answer 16") },
    { id: "r9", type: "fill", concept: "parallel", visual: "parallel-park",
      before: "To reverse park between two cars you need a gap of at least", after: ".",
      options: ["one and a half car lengths", "one car length", "two car lengths", "three car lengths"], answer: "one and a half car lengths",
      explain: "The car is more manoeuvrable in reverse.", src: P(51, "Reverse (parallel) parking") },
    { id: "r10", type: "truefalse", concept: "reverse-right",
      statement: "All-round checks are less important when reversing to the right.", answer: false,
      explain: "More important — you're in the path of oncoming traffic.", src: P(93, "Post-test answer 15") },
    { id: "r11", type: "flash", concept: "u-turn", visual: "u-turn",
      front: "What are the options for turning to go back the other way?",
      back: "Reversing into a side road, turning in the road, or a U-turn.", src: P(93, "Post-test answer 4") },
  ],
};

/* ---------------------------------------------------------------------------
   3. MANOEUVRE MATCH — recognition.
   --------------------------------------------------------------------------- */
const manoeuvres = {
  id: "manoeuvres",
  kind: "items",
  mode: "matching",
  title: "Name That Manoeuvre",
  blurb: "Spot it, sort it — reverses, turns and parking",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "turnabout",
      prompt: "Which picture shows turning in the road?",
      options: ["turnabout", "u-turn", "reverse-left", "parallel-park"], answer: 0,
      names: ["Turning in the road", "U-turn", "Left reverse", "Parallel parking"],
      explain: "Forward, reverse, forward — using forward and reverse gears.", src: P(50, "Turnabout") },
    { id: "k2", type: "picture", label: "Spot it", concept: "reverse-left",
      prompt: "Which picture shows reversing into a side road on the left?",
      options: ["reverse-left", "bay-park", "u-turn"], answer: 0,
      names: ["Left reverse", "Bay parking", "U-turn"],
      explain: "Stop beyond the junction, then reverse round the corner keeping close to the kerb.", src: P(49, "Reversing into a side road on the left") },
    { id: "k3", type: "picture", label: "Spot it", concept: "parallel",
      prompt: "Which picture shows reverse parallel parking?",
      options: ["parallel-park", "bay-park", "turnabout"], answer: 0,
      names: ["Parallel parking", "Bay parking", "Turning in the road"],
      explain: "Between two parked cars, parallel to the kerb.", src: P(51, "Reverse (parallel) parking") },
    {
      id: "k4", type: "sort", concept: "reverse-rules",
      prompt: "Reversing here — allowed or not?",
      categories: [
        { id: "ok", label: "Allowed" },
        { id: "no", label: "Not allowed" },
      ],
      cards: [
        { text: "From a major road into a side road", cat: "ok" },
        { text: "Into a parking bay", cat: "ok" },
        { text: "From a side road onto a main road", cat: "no" },
        { text: "At a crossroads", cat: "no" },
        { text: "Against the flow in a one-way street", cat: "no" },
        { text: "On a motorway", cat: "no" },
      ],
      explain: "Reverse from a major road into a minor one — never the other way.", src: P(49, "Reversing; Give way; p.93 answer 17") },
    {
      id: "k5", type: "sort", concept: "turnabout",
      prompt: "Turning in the road — good practice or fault?",
      categories: [
        { id: "ok", label: "Good practice" },
        { id: "no", label: "Fault" },
      ],
      cards: [
        { text: "Steering briskly while moving slowly", cat: "ok" },
        { text: "Looking all around before each stage", cat: "ok" },
        { text: "Stopping before the kerb", cat: "ok" },
        { text: "Overhanging the kerb", cat: "no" },
        { text: "Turning the wheel while stationary", cat: "no" },
        { text: "Driving towards pedestrians on the footpath", cat: "no" },
      ],
      explain: "Slow speed, brisk steering, good observation.", src: P(50, "Turnabout; p.51 Avoid") },
    { id: "k6", type: "picture", label: "Spot it", concept: "reverse-steer",
      prompt: "Which picture shows what happens to the front of the car when you reverse with the wheel turned?",
      options: ["reverse-steer", "reverse-observe"], answer: 0,
      names: ["Steering in reverse", "All-round observation"],
      explain: "The rear goes the way you steer; the front swings out the other way.", src: P(49, "Steering") },
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
  blurb: "Situations and manoeuvres",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "turnabout",
      prompt: "Match the situation to the manoeuvre.",
      pairs: [
        ["A cul-de-sac with no opening", "Turn in the road"],
        ["A wide, quiet road", "U-turn"],
        ["A van with no rear view", "Reverse into a road on the right"],
        ["A gap between two parked cars", "Reverse parallel park"],
      ],
      explain: "Pick the manoeuvre that suits the place and the vehicle.", src: P(50, "Turnabout; p.51; p.93 answer 14") },
    {
      id: "m2", type: "match", concept: "turnabout", visual: "turnabout",
      prompt: "Turning in the road — match the stage.",
      pairs: [
        ["Stage 1", "Forward, full right lock"],
        ["Stage 2", "Reverse, full left lock"],
        ["Stage 3", "Forward, straighten up on the left"],
      ],
      explain: "Repeat stages 2 and 3 if you can't straighten up safely.", src: P(50, "Stages 1–3") },
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
  blurb: "Left reverse, turnabout and parking",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "reverse-left", visual: "reverse-left",
      prompt: "Reversing into a side road on the left — in order.",
      steps: ["Look into the side road as you pass", "Mirrors, signal, stop close and parallel", "Reverse gear, gas, biting point", "Look all around, then back slowly", "Turn as the rear wheel reaches the corner", "Straighten up and continue back"],
      explain: "Keep looking around throughout.", src: P(49, "Reversing into a side road on the left") },
    { id: "p2", type: "order", concept: "turnabout", visual: "turnabout",
      prompt: "Turning in the road, stage 1 — in order.",
      steps: ["Select first gear", "Check mirrors and look all around", "Forward slowly, brisk full right lock", "Just before the kerb, steer briskly left", "Declutch and brake to stop"],
      explain: "Then apply the handbrake if necessary.", src: P(50, "Stage 1") },
    { id: "p3", type: "order", concept: "parallel", visual: "parallel-park",
      prompt: "Reverse parallel parking — in order.",
      steps: ["Pull up alongside the car ahead of the gap", "Select reverse; look all around", "Back until level with that car", "Steer slightly left", "Steer briskly right to bring the front in", "Steer left to straighten the wheels"],
      explain: "Adjust your position, then handbrake and neutral.", src: P(51, "Reverse (parallel) parking") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "priority",
      scene: "🚗 Mid turn-in-the-road, your pupil stops for an approaching car — and its driver waves them on.",
      prompt: "What should your pupil do?",
      options: ["Thank them and go", "Hurry to clear their path", "Wait for the other car to move", "Check the road is clear in all directions before acting"], answer: 3,
      explain: "A wave isn't a guarantee — check everywhere yourself first.", src: P(54, "Retention Q1 (answer d, p.96)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "reverse-rules",
      scene: "↩️ Your pupil wants to reverse out of a side road onto the main road to turn round.",
      prompt: "Your response?",
      options: ["Fine if slow", "No — never reverse from a minor road onto a major road", "Only with hazard lights", "Only at night"], answer: 1,
      explain: "It's unsafe. Reverse from the major road into the minor road instead.", src: P(49, "Reversing; Give way") },
    { id: "s3", type: "choice", label: "Scenario", concept: "reverse-prep", visual: "reverse-observe",
      scene: "🏫 Reversing near a school, your pupil can't be sure nothing is behind the car.",
      prompt: "What should they do?",
      options: ["Use the mirrors well", "Open the door to look", "Sound the horn", "Get out and check"], answer: 3,
      explain: "If in doubt, get out and check — or get help.", src: P(54, "Retention Q4 (answer d, p.96)") },
    { id: "s4", type: "choice", label: "Scenario", concept: "reverse-right",
      scene: "🚐 Your pupil is driving a van with no rear windows and needs to turn back.",
      prompt: "Which manoeuvre suits best?",
      options: ["Don't reverse at all", "Reverse into a side road on the right", "Reverse into a side road on the left", "Only a U-turn"], answer: 1,
      explain: "On the right you can judge your position over your right shoulder.", src: P(54, "Retention Q9 (answer b, p.96)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "reverse-steer", visual: "reverse-steer",
      scene: "🧱 Reversing round a corner, your pupil is about to touch the kerb.",
      prompt: "What now?",
      options: ["Steer harder and keep going", "Stop, drive forward, straighten up and continue", "Mount it gently", "Apply full lock the other way"], answer: 1,
      explain: "Stop and correct — don't hit, touch or mount the kerb.", src: P(93, "Post-test answer 12") },
    { id: "s6", type: "choice", label: "Scenario", concept: "parallel", visual: "parallel-park",
      scene: "🅿️ Your pupil is alongside the car ahead of a gap, ready to reverse park.",
      prompt: "What do they do next?",
      options: ["Switch on the hazard lights", "Select reverse gear — the reversing lights show their intention", "Always apply the handbrake", "Keep the left indicator on throughout"], answer: 1,
      explain: "Brake lights on, select reverse, look all around.", src: P(55, "Retention Q17 (answer b, p.96)") },
    { id: "s7", type: "choice", label: "Scenario", concept: "u-turn", visual: "u-turn",
      scene: "⤴️ A wide, quiet road with good views. Your pupil wants to U-turn.",
      prompt: "What routine?",
      options: ["Use the MSM routine", "Don't signal — it confuses people", "Hazard lights on", "An arm signal only"], answer: 0,
      explain: "MSM, and give way to all other road users.", src: P(55, "Retention Q16 (answer a, p.96)") },
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
  blurb: "Reversing into a side road on the left",
  xpPer: 10,
  situation: "↙️ Your pupil has driven past a quiet side road on the left and is going to reverse into it.",
  items: [
    { id: "w1", type: "choice", step: "Choosing", concept: "four-questions", prompt: "Before starting, they must be able to say YES to…",
      options: ["Is it quick?", "Safe, convenient, legal and practical", "Is anyone watching?", "Is it near home?"], answer: 1,
      explain: "Never commence a manoeuvre until all four are YES.", src: P(48, "Before manoeuvring") },
    { id: "w2", type: "choice", step: "Stopping", concept: "reverse-left", prompt: "Where should they stop?",
      options: ["Right at the corner", "Close and parallel to the kerb, a reasonable distance beyond the side road", "In the middle of the road", "A metre out from the kerb"], answer: 1,
      explain: "Leave space for emerging traffic — further out the sharper the corner.", src: P(49, "Reversing into a side road on the left") },
    { id: "w3", type: "choice", step: "Getting ready", concept: "reverse-prep", prompt: "How should they sit?",
      options: ["Eyes on the kerb", "Turned slightly in the seat for the best view", "Palming the wheel with one hand", "Interior mirror tilted down"], answer: 1,
      explain: "A good view through the rear window, both hands on the wheel.", src: P(54, "Retention Q6 (answer b, p.96)") },
    { id: "w4", type: "choice", step: "Moving back", concept: "priority", prompt: "Controlling the speed depends on…",
      options: ["Always slipping the clutch", "The road gradient — clutch, brake and gas to suit", "Never using the gas", "No clutch going uphill"], answer: 1,
      explain: "Clutch at or near the biting point, with gas and footbrake to suit the gradient.", src: P(54, "Retention Q7 (answer b, p.96)") },
    { id: "w5", type: "choice", step: "The corner", concept: "reverse-steer", prompt: "When should they turn the wheel?",
      options: ["Later than seems necessary", "Sooner than seems necessary", "Only when stopped", "Very slowly"], answer: 1,
      explain: "The rear wheels don't steer — it takes time to take effect.", src: P(54, "Retention Q3 (answer a, p.96)") },
    { id: "w6", type: "choice", step: "A pedestrian", concept: "give-way", prompt: "Someone starts to cross the side road behind them.",
      options: ["Carry on slowly", "Stop and give way", "Sound the horn", "Speed up to finish"], answer: 1,
      explain: "Stop and give way to pedestrians at or crossing the junction.", src: P(50, "Stop and give way to") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 96. Q8, Q11 and Q18 are omitted
   (see header).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(n <= 10 ? 54 : 55, `Retention test Q${n}; answer p.96`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "Whilst manoeuvring to turn and go back, a driver stops for another road user who signals them to continue. The driver should", ["thank the other road user and proceed", "proceed immediately to clear the other road user's path", "wait for the other road user to move on", "check the road is clear in all directions before acting"], 3, "priority"),
    R(2, "Whilst manoeuvring, it is permissible to remove your seatbelt", ["if the manoeuvre involves reversing", "only if travelling in reverse", "if it is more comfortable", "only when parallel parking"], 0, "seatbelt"),
    R(3, "You would advise a pupil that when reversing it is often helpful to", ["turn the steering wheel sooner than seems necessary", "turn the steering wheel later than seems necessary", "turn the steering wheel more slowly than seems necessary", "turn the steering wheel more briskly than seems necessary"], 0, "reverse-steer", "reverse-steer"),
    R(4, "A driver about to reverse should, if unsure of what is behind the car", ["make good use of their mirrors", "open the door to have a look", "sound the horn to warn any pedestrians", "get out of the car and check"], 3, "reverse-prep", "reverse-observe"),
    R(5, "When stopping prior to reversing around a corner, a driver is advised to keep", ["a greater distance from the kerb than for a left reverse", "a greater distance from the kerb, the sharper the corner", "as close to the kerb as possible, to avoid oncoming traffic", "at least a metre from the kerb"], 1, "reverse-left"),
    R(6, "When preparing to reverse around a corner, a driver may find it particularly helpful", ["to keep their eyes on the kerb", "to turn slightly in their seat to get the best view", "to steer, palming the wheel single-handedly", "to adjust the interior mirror downwards"], 1, "reverse-prep"),
    R(7, "'Driving Essential Skills' advises that when reversing", ["the clutch must always be kept in and out of the biting point", "use of clutch, brake and accelerator will depend on the road gradient", "the accelerator must not be used to keep the car moving slowly", "you need not use the clutch on an uphill gradient"], 1, "priority"),
    R(9, "When driving a vehicle with a restricted view to the sides or rear, if you wish to turn and go back you should", ["not reverse", "reverse into a side road on the right", "reverse into a side road on the left", "only make a U-turn"], 1, "reverse-right"),
    R(10, "The most important aspects of car control in a 'turn in the road' are", ["steering slowly and slipping the clutch", "moving slowly and steering briskly, and good observation", "all-around observation and slow speed", "clutch control and observation"], 1, "turnabout", "turnabout"),
    R(12, "A driver should be aware that reversing is only permissible in certain circumstances and must not", ["reverse into a road on the right except in a van or loaded estate car", "reverse into a road on the right for a longer distance than for a road on the left", "reverse from a side road to a main road", "reverse on a busy road"], 2, "reverse-rules", "reverse-never"),
    R(13, "When manoeuvring at very slow speed, a driver should stop the car by", ["applying the handbrake", "pressing the clutch down then braking", "pressing the footbrake before de-clutching", "de-clutching and using the handbrake"], 1, "turnabout"),
    R(14, "When choosing a suitable place for a 'turn in the road', a driver should", ["avoid obstructions on the road or footpath", "use only narrow side roads", "use a suitable gap between parked cars", "not use the MSM routine"], 0, "turnabout"),
    R(15, "Compared with parking in forward gear, parking close to the kerb in reverse makes a smaller gap possible because", ["the car is more manoeuvrable in reverse gear", "the car is less likely to obstruct other traffic", "it is easier to steer in reverse gear", "the kerb can be used as a guide"], 0, "parallel", "parallel-park"),
    R(16, "When making a U-turn, a driver is advised", ["to use the MSM routine", "not to give a signal as it could confuse other road users", "to use hazard warning lights", "to give an appropriate arm signal"], 0, "u-turn", "u-turn"),
    R(17, "When about to park in reverse gear and whilst parallel to the car ahead of a suitable gap, a driver should", ["switch on the hazard warning lights", "select reverse gear promptly to show the reversing lights to following traffic", "always apply the handbrake", "keep a left indicator signal going throughout the manoeuvre"], 1, "parallel"),
    R(19, "When selecting a suitable place for parking in reverse gear, 'Driving Essential Skills' advises that a driver needs a gap of at least", ["one and a half car lengths", "two car lengths", "one and a third car lengths", "one and a quarter car lengths"], 0, "parallel", "parallel-park"),
    R(20, "When manoeuvring, a driver should try to avoid 'dry steering'. This means", ["ensuring the steering mechanism is properly lubricated", "not turning the wheels when stationary except on a wet road", "steering whilst stationary only with power steering fitted", "not steering until the car begins to move"], 3, "priority"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "four-questions",
      prompt: "Which is NOT one of the four questions before a manoeuvre?", options: ["Is it safe?", "Is it legal?", "Is it quick?", "Is it practical for my vehicle?"], answer: 2,
      explain: "Safe, convenient, legal, practical.", src: P(48, "Before manoeuvring") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "u-turn",
      prompt: "Which manoeuvre doesn't use reverse gear?", options: ["u-turn", "turnabout", "reverse-left", "bay-park"], answer: 0,
      names: ["U-turn", "Turning in the road", "Left reverse", "Bay parking"],
      explain: "A U-turn — so it's not generally expected by other road users.", src: P(51, "Making a U-turn") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "turnabout",
      statement: "A turn in the road must always be done in exactly three points.", answer: false,
      explain: "It's often called a 3-point turn, but more turns may be needed.", src: P(50, "Turnabout; Note") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "bay",
      scene: "🛒 In a supermarket car park, your pupil drives forward into a bay to reverse out later.",
      prompt: "What's the drawback?", options: ["None", "Reversing out restricts their view of approaching traffic", "It's illegal", "It wears the clutch"], answer: 1,
      explain: "Reversing into the bay and driving out gives a better view.", src: P(52, "Reversing into a parking bay") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "turnabout",
      prompt: "Match the stage.", pairs: [["Stage 1", "Forward, right lock"], ["Stage 2", "Reverse, left lock"], ["Stage 3", "Forward, straighten"]],
      explain: "Turning in the road.", src: P(50, "Stages 1–3") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "reverse-left",
      prompt: "Left reverse:", steps: ["Stop beyond the junction", "Look all around", "Back slowly along the kerb", "Turn at the corner"],
      explain: "Then straighten and go back far enough.", src: P(49, "Reversing into a side road on the left") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "seatbelt",
      scene: "🔗 Your pupil unclips the seatbelt to reverse into a side road, then drives off forward without it.",
      prompt: "What's wrong?", options: ["Nothing", "The belt must go back on in forward gears", "They should never remove it", "Only passengers may remove it"], answer: 1,
      explain: "Allowed for reversing only — replace it when in forward gears.", src: P(48, "Before manoeuvring") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "parallel",
      prompt: "The minimum gap for reverse parallel parking:", options: ["1½ car lengths", "2 car lengths", "1⅓ car lengths", "1¼ car lengths"], answer: 0,
      explain: "At least one and a half car lengths.", src: P(55, "Retention Q19 (answer a, p.96)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "reverse-steer",
      prompt: "Your pupil keeps forgetting the front swings out when reversing round a corner. Which picture helps?", options: ["reverse-steer", "four-questions", "u-turn"], answer: 0,
      names: ["Steering in reverse", "Four questions", "U-turn"],
      explain: "Steer the way you want the back to go — the front goes the other way.", src: P(49, "Steering") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "priority",
      prompt: "'Dry steering' should be avoided. That means…", options: ["Lubricate the steering", "Only steer stationary on wet roads", "Only steer stationary with power steering", "Don't steer until the car begins to move"], answer: 3,
      explain: "Turn the wheel as the car moves, not when it's stationary.", src: P(55, "Retention Q20 (answer d, p.96)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "2.7",
  number: "2.7",
  title: "Manoeuvring",
  pages: [48, 55],
  intro: "Four questions first, reversing safely, turning round, and parking in reverse.",
  objectives: [
    "The questions to ask yourself before starting a manoeuvre",
    "Road user priorities when manoeuvring",
    "How to prepare for a manoeuvre involving reverse gear",
    "How to reverse into a side road, turn in the road and make a U-turn",
    "How to park in reverse gear",
  ],
  objectivesSrc: P(48, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...manoeuvres, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "name-that-manoeuvre", icon: "🔄", label: "Name That Manoeuvre", rule: { activity: "manoeuvres", min: 100 } },
    { id: "manoeuvring-specialist", icon: "🏆", label: "Manoeuvring Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
