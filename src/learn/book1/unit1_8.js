/*
  ===========================================================================
  BOOK 1 · UNIT 1.8 — MOTORWAY DRIVING

  Source: "Driving Procedures & Road Safety — Resource Workbook, Book 1"
  (Driver Education Supplies), book pages 64–71, with the post-test model
  answers on page 86 and the retention-test answers on page 89
  (1c 2b 3a 4b 5b 6d 7c 8b 9b 10a 11a 12c 13b 14c 15d 16a 17c 18b 19b).

  Retention test Q4 is omitted: the unit text bans both learner drivers
  and cyclists (answer b) AND oversized vehicles without permission (d),
  so it has two right answers. Q3, Q6, Q11, Q12, Q14, Q16 and Q18 come
  from the book's own test though the unit text doesn't cover them
  directly; they are kept as the book sets them.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 1, unit: "1.8", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "why": {
    title: "What a motorway is",
    text: "Motorways are expressways in a single direction with no right-hand turns, blue signs, and a maximum speed of 120 km/h. They're probably the safest way to move large volumes of traffic — they separate the traffic flows and remove junctions, roundabouts and traffic lights — but they carry a greater risk of pile-ups, so drive with due care and attention. Slip roads, loops and links may have roundabouts, sharp bends and lower speed limits.",
    src: P(64, "Introduction; Summaries"),
  },
  "learners": {
    title: "Learners and motorways",
    text: "Learner drivers are not allowed on a motorway, but may drive on one \"immediately after passing the driving test\". It's the instructor's responsibility to offer motorway lessons to newly passed drivers.",
    src: P(64, "Introduction"),
  },
  "driver": {
    title: "Preparing — the driver",
    text: "Be alert. Don't drive on a motorway if tired, unwell or thinking of other things. Plan your route and prepare your vehicle. Know your exit numbers and where the service areas are before you start.",
    src: P(64, "Preparing for the journey — the Driver"),
  },
  "checks": {
    title: "Preparing — the vehicle",
    text: "All the regular checks, especially: mirrors clean and set; lights and indicators; tyres — pressures may need to be higher for faster speeds and longer journeys, and poor tyres affect steering at speed; enough fuel, with spare in case a service area is closed; oil and water topped up, leaks fixed BEFORE the journey; brakes and fluid; washers and wipers; luggage and loads secure.",
    src: P(65, "Vehicle Checks; p.86 answer 2"),
  },
  "lanes": {
    title: "Lane discipline",
    text: "Keep left unless overtaking. Lane one (the left lane) is for routine driving; lanes two and three are for overtaking. On three- or four-lane motorways you may stay in the middle lanes when there's a stream of slower traffic in the left lane — return left as soon as practicable. Keep to the centre of your lane; check mirrors and signal to change lane.",
    src: P(65, "Which is the safest lane; p.68"),
  },
  "banned": {
    title: "Who may not use a motorway",
    text: "Pedestrians, pedal cyclists, animals, vehicles under 50 cc, learner drivers, invalid carriages, slow vehicles that can't reach 50 km/h, oversized vehicles without special permission, and vehicles without inflated tyres. No reversing and no U-turns.",
    src: P(65, "Motorway Restrictions"),
  },
  "rules": {
    title: "Motorway regulations",
    text: "Drive only on the carriageway. Don't drive on the hard shoulder unless signs or Gardaí direct you to. Don't reverse, turn, make a U-turn, cross the central reservation or drive against the traffic. Don't stop on the carriageway or central reservation except in an emergency, to avoid an accident, or when red lights, Gardaí or signs tell you to — then hazard lights on. Don't walk on the carriageway, or stop to set down or pick up passengers.",
    src: P(65, "Motorway Regulations; p.66"),
  },
  "outside-lane": {
    title: "Kept out of the outside lane",
    text: "On motorways with three or more lanes, these may not use the outside lane: goods vehicles over 7.5 tonnes, buses and coaches over 12 metres long, and any vehicle towing a trailer or caravan.",
    src: P(66, "Motorway Regulations"),
  },
  "signs": {
    title: "Motorway signs",
    text: "Direction signs show routes to a motorway; where a road becomes a motorway you'll see the motorway symbol on a blue sign. Information signs show distances to services and towns. Route signs are about 2 km from the exit, and at the exit. Countdown markers are 300, 200 and 100 metres from an exit. Overhead downward arrows guide you when lanes reduce.",
    src: P(66, "On Approach; On the Motorway"),
  },
  "sos": {
    title: "SOS telephones and markers",
    text: "SOS phones connect you to a control centre manned 24 hours a day, 365 days a year. They're about 1.6 km (1 mile) apart. Red and white markers at the roadside are at 100-metre intervals; a telephone symbol and arrow show the way to the nearest one.",
    src: P(66, "SOS telephones; Markers"),
  },
  "lri": {
    title: "Location Reference Indicators",
    text: "LRI signs and markings let you tell the emergency services exactly where you are. On the nearside verge, typically every 500 metres. Blue on motorways, green on dual carriageways. Three lines: the road, the direction of travel (N, S, E or W) and the distance from the start of the route.",
    src: P(66, "Location Reference Indicators"),
  },
  "speed": {
    title: "Speed limits and cameras",
    text: "Red-bordered white circular signs at roadworks and contraflows, illuminated ones on overhead gantries, and limits painted on the road must be obeyed. A variable limit can change for an incident, heavy traffic or bad weather; it stays until a different limit or the signs switch off. Average speed cameras time you between two points — arrive too soon and a record goes to the Gardaí.",
    src: P(66, "Mandatory Speed Limits; Average speed camera; p.67"),
  },
  "studs": {
    title: "Reflective studs",
    text: "White: between lanes. Yellow/red: the left-hand edge (hard shoulder or verge). Amber: the right-hand edge next to the central barrier — don't cross. Green: across slip roads, exits, entrances and lay-bys — where you can cross the edge line. Green/yellow: temporary layout changes at roadworks.",
    src: P(67, "Reflective Studs"),
  },
  "signals": {
    title: "Illuminated signals",
    text: "Red lights above the motorway or on a slip road — two pairs flashing side to side — mean don't go any further in that lane. White illuminated signs with flashing amber lights (two pairs, flashing up and down) warn of lane closures, temporary speed limits or fog, or order drivers to leave the motorway or change lane.",
    src: P(67, "Illuminated Motorway Signals; p.86 answers 13, 14"),
  },
  "joining": {
    title: "Joining the motorway",
    text: "Where a main road becomes a motorway, no special procedure — but motorway rules and limits apply. Otherwise join via a slip road and the acceleration lane: build up speed to match a suitable gap in the left lane. Try not to stop in the acceleration lane, but you MUST yield to traffic on the motorway — don't force your way in or use the hard shoulder. Use MSPSL and always signal. Keep left until you've adjusted.",
    src: P(67, "Joining the Motorway; p.86 answer 4"),
  },
  "driving": {
    title: "On the motorway",
    text: "Drive in the left lane. Look well ahead and use mirrors frequently. Beware of vehicles alongside, and don't sit in another driver's blind spot. Keep at least one metre per km/h — or a two-second gap. Headlights in poor daylight; rear fog lights below 100 metres visibility. You may flash your headlights to warn a driver ahead you're about to overtake. Use exterior mirrors before changing lane — a sideways glance is dangerous at speed.",
    src: P(67, "On the Motorway; p.68"),
  },
  "leaving": {
    title: "Leaving the motorway",
    text: "Get into the left lane at the first route sign showing your exit. Change lanes one at a time — never cut straight across. Mirrors and signal in good time — at least at the first countdown marker. Slow down in the deceleration lane. Missed it? Carry on to the next exit. Afterwards, adjust to the new road and check your speedometer — you may be going faster than you think.",
    src: P(68, "Leaving the Motorway; After leaving; p.86 answers 9, 10"),
  },
  "stopping": {
    title: "Stopping and emergencies",
    text: "Stopping on the hard shoulder is extremely dangerous and an offence unless it's an emergency. Steer as far left as possible, hazard lights on (sidelights if needed), get out by the left-hand doors and wait behind the barrier or on the embankment — unless at risk from strangers. Keep animals in the car. Place a warning triangle well back on the hard shoulder. To rejoin, build up speed on the hard shoulder first. Stop only at service areas otherwise; if tired, open a window and stop at the next service area or exit.",
    src: P(68, "Stopping on the Motorway; In an emergency"),
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
    "Keep left unless overtaking — then back to lane one",
    "Join at matching speed, yield to motorway traffic, always signal",
    "Hard shoulder: emergencies only — everyone out by the left doors, behind the barrier",
  ],
  cards: [
    {
      icon: "🛣️",
      kicker: "Motorway driving",
      title: "Fast, safe — if you're careful",
      visual: "motorway-lanes",
      body: [
        "Motorways are expressways in a single direction: no right-hand turns, roundabouts or traffic lights, and a maximum of 120 km/h. Their signs are blue.",
        "Separating the traffic flows and removing junctions makes them probably the safest way to move large volumes of traffic — but they carry a greater risk of pile-ups. Slip roads, loops and links may have roundabouts, sharp bends and lower speed limits.",
      ],
      think: ["⛽ Is the car ready for a long, fast run?", "🗺️ Do I know my exit number?", "😴 Am I fit to drive?"],
      concept: "why",
      src: P(64, "Introduction; Summaries"),
    },
    {
      icon: "🎓",
      kicker: "Learners",
      title: "Straight after the test",
      body: [
        "Learner drivers may not use the motorway, but may do so \"immediately after passing the driving test\".",
        "So it's the instructor's job to offer motorway lessons to newly passed drivers — the procedures, and experience of faster roads.",
      ],
      concept: "learners",
      src: P(64, "Introduction"),
    },
    {
      icon: "🧰",
      kicker: "Preparing for the journey",
      title: "Driver and car",
      sections: [
        { head: "The driver", list: ["Be alert", "Not tired, unwell or thinking of other things", "Plan your route; prepare the vehicle", "Know your exit numbers and the service areas"] },
        { head: "The vehicle", list: ["Mirrors clean and set; lights and indicators working", "Tyres — pressure may need to be higher for speed and long trips; poor tyres affect steering at speed", "Fuel — enough, with spare in case a service area is closed", "Oil and water topped up; leaks fixed BEFORE the journey", "Brakes and fluid; washers and wipers", "Luggage and loads secure"] },
      ],
      concept: "checks",
      src: P(64, "Preparing for the journey; p.65 Vehicle Checks"),
    },
    {
      icon: "🚫",
      kicker: "Restrictions",
      title: "Who can't use it",
      visual: "motorway-banned",
      ask: {
        prompt: "Which of these may NOT use a motorway?",
        options: ["A newly qualified driver", "A learner driver", "A coach under 12 m"],
        answer: 1,
      },
      list: [
        "Pedestrians, pedal cyclists and animals",
        "Vehicles under 50 cc; invalid carriages",
        "Learner drivers",
        "Slow vehicles that can't reach 50 km/h",
        "Oversized vehicles without special permission",
        "Vehicles without inflated tyres",
      ],
      callout: "And no reversing, no U-turns.",
      concept: "banned",
      src: P(65, "Motorway Restrictions"),
    },
    {
      icon: "📜",
      kicker: "Regulations",
      title: "You MUST",
      visual: "motorway-lanes",
      list: [
        "Drive only on the carriageway",
        "Stay off the hard shoulder unless signs or Gardaí direct you",
        "Never reverse, turn, U-turn, cross the central reservation or drive against the traffic",
        "Never stop on the carriageway or central reservation — except in an emergency, to avoid an accident, or when red lights, Gardaí or signs tell you to (hazard lights on)",
        "Never walk on the carriageway; never set down or pick up passengers",
      ],
      sections: [
        { head: "Not in the outside lane (3+ lanes)", list: ["Goods vehicles over 7.5 tonnes", "Buses and coaches over 12 m long", "Anything towing a trailer or caravan"] },
      ],
      concept: "rules",
      src: P(65, "Motorway Regulations; p.66"),
    },
    {
      icon: "↗️",
      kicker: "Joining",
      title: "Match a gap, yield, signal",
      visual: "motorway-join",
      ask: {
        prompt: "What is the acceleration lane for?",
        options: ["To make motorway traffic move out for you", "To match your speed to the traffic on the motorway", "To overtake slow traffic"],
        answer: 1,
      },
      list: [
        "Where a main road becomes a motorway — no special procedure, but motorway rules and limits apply",
        "Otherwise join via a slip road and the acceleration lane",
        "Build up speed to match a suitable gap in the left lane",
        "Try not to stop in the acceleration lane — but you MUST yield to traffic on the motorway",
        "MSPSL: always signal your intention to join",
        "Keep left until you've adjusted to the conditions",
      ],
      callout: "Can't get straight on? Wait in the acceleration lane. Don't force your way in or use the hard shoulder.",
      concept: "joining",
      src: P(67, "Joining the Motorway; p.86 answer 4"),
    },
    {
      icon: "🚗",
      kicker: "Lanes",
      title: "Keep left unless overtaking",
      visual: "motorway-lanes",
      list: [
        "Lane one (left): routine driving",
        "Lanes two and three: overtaking",
        "With a stream of slower traffic in lane one you may stay in a middle lane — return left as soon as practicable",
        "Keep to the centre of your lane",
        "Check mirrors and signal to change lane; use your exterior mirrors — a sideways glance is dangerous at speed",
      ],
      concept: "lanes",
      src: P(65, "Which is the safest lane; p.68"),
    },
    {
      icon: "↔️",
      kicker: "On the motorway",
      title: "Space and visibility",
      visual: "two-second-rule",
      list: [
        "Look well ahead; use your mirrors frequently",
        "Beware of vehicles alongside — don't sit in someone's blind spot",
        "Keep your distance: at least 1 m per km/h, or a two-second gap",
        "Headlights in poor daylight; rear fog lights below 100 m visibility",
        "Consider flashing your headlights to warn a driver ahead you're about to overtake",
      ],
      concept: "driving",
      src: P(67, "On the Motorway; p.68"),
    },
    {
      icon: "🪧",
      kicker: "Signs and markers",
      title: "Blue signs, countdowns, LRIs",
      visuals: ["motorway-signs", "lri-sign"],
      list: [
        "Where a road becomes a motorway: the motorway symbol on a blue sign",
        "Information signs: distances to services and towns",
        "Route signs about 2 km before the exit, and at the exit",
        "Countdown markers 300, 200 and 100 m from an exit",
        "LRI signs every 500 m on the nearside verge: road, direction, distance — blue on motorways, green on dual carriageways",
      ],
      concept: "signs",
      src: P(66, "On Approach; On the Motorway; LRIs"),
    },
    {
      icon: "🚦",
      kicker: "Speed and signals",
      title: "Gantries and limits",
      visual: "gantry-signals",
      ask: {
        prompt: "Red lights flash above your lane. What does it mean?",
        options: ["Slow down a little", "Don't go any further in that lane", "Speed camera ahead"],
        answer: 1,
      },
      list: [
        "Red-bordered circular limits at roadworks, on gantries and painted on the road MUST be obeyed",
        "A variable limit changes for incidents, heavy traffic or bad weather — it stays until a new limit or the signs switch off",
        "Red lights (two pairs, flashing side to side) above a lane or slip road: don't proceed in that lane",
        "Flashing amber with a white sign: lane closures, temporary limits, fog — or an order to leave or change lane",
      ],
      concept: "signals",
      src: P(66, "Mandatory Speed Limits; p.67"),
    },
    {
      icon: "📷",
      kicker: "Average speed cameras",
      title: "Timed between two points",
      visual: "average-speed",
      body: ["Permanent cameras at two points measure how long you take to reach the second. Arrive too soon and a record of the speeding goes to the Gardaí — treated the same as a speed-van image."],
      concept: "speed",
      src: P(66, "Average speed camera"),
    },
    {
      icon: "✨",
      kicker: "Cat's eyes",
      title: "Reflective stud colours",
      visual: "cats-eyes",
      list: [
        "White — between lanes",
        "Yellow/red — the left edge (hard shoulder or verge)",
        "Amber — the right edge by the central barrier: do not cross",
        "Green — across slip roads, exits, entrances, lay-bys: safe to cross the edge line",
        "Green/yellow — temporary layout changes at roadworks",
      ],
      concept: "studs",
      src: P(67, "Reflective Studs"),
    },
    {
      icon: "↙️",
      kicker: "Leaving",
      title: "Early, one lane at a time",
      visual: "motorway-leave",
      list: [
        "Get into the left lane at the first route sign for your exit",
        "Change lanes one at a time — never cut straight across",
        "Mirrors and signal in good time — at least at the first countdown marker",
        "Slow down in the deceleration lane",
      ],
      sections: [
        { head: "Missed your exit?", list: ["Carry on to the next one and find a way back"] },
        { head: "After leaving", list: ["Allow time to adjust to the new road", "Check your speedometer — you may be going faster than you think!"] },
      ],
      concept: "leaving",
      src: P(68, "Leaving; After leaving; p.86 answers 9, 10"),
    },
    {
      icon: "🆘",
      kicker: "Emergencies",
      title: "The hard shoulder",
      visual: "hard-shoulder-stop",
      ask: {
        prompt: "You break down and stop on the hard shoulder. How do you and your passengers get out?",
        options: ["By the right-hand doors — quicker", "By the left-hand doors, then behind the barrier", "Stay in the car with belts on"],
        answer: 1,
      },
      list: [
        "Steer as far left as possible; hazard lights on (sidelights if needed)",
        "Out by the left-hand doors; everyone onto the embankment or behind the barrier — unless at risk from strangers",
        "Keep animals in the vehicle",
        "Warning triangle on the hard shoulder, a reasonable distance back towards following traffic",
        "SOS phones about every 1.6 km — follow the arrow on the 100 m markers; or call Motorway Assistance on 0818 715 100",
        "Rejoining: build up speed on the hard shoulder first",
      ],
      callout: "Tired? Open a window and stop at the next service area — or leave at the next exit.",
      concept: "stopping",
      src: P(68, "Stopping on the Motorway; In an emergency; p.66"),
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
    { id: "r1", type: "flash", concept: "lanes", visual: "motorway-lanes",
      front: "Where should you normally position on a motorway?",
      back: "In the left-hand lane.", src: P(86, "Post-test answer 6") },
    { id: "r2", type: "fill", concept: "signs", visual: "motorway-leave",
      before: "Countdown markers to an exit are about", after: "apart.",
      options: ["100 metres", "50 metres", "300 metres", "1 km"], answer: "100 metres",
      explain: "They're placed 300, 200 and 100 metres from the exit.", src: P(86, "Post-test answer 8; p.66") },
    { id: "r3", type: "flash", concept: "leaving",
      front: "What's the first step when you decide to leave the motorway?",
      back: "Get into the left-hand lane.", src: P(86, "Post-test answer 9") },
    { id: "r4", type: "flash", concept: "leaving",
      front: "What do you do if you miss your exit?",
      back: "Carry on to the next one and find a way back onto your route.", src: P(86, "Post-test answer 10") },
    { id: "r5", type: "flash", concept: "why",
      front: "Why take care on slip roads and motorway link roads?",
      back: "They may have sharp bends.", src: P(86, "Post-test answer 11") },
    { id: "r6", type: "flash", concept: "driving",
      front: "What else does fog affect, other than visibility?",
      back: "Your judgement of speed and distance.", src: P(86, "Post-test answer 12") },
    { id: "r7", type: "truefalse", concept: "signals", visual: "gantry-signals",
      statement: "Red lights flashing above your lane mean you may continue with care.", answer: false,
      explain: "Red lights above your lane: don't go any further in that lane.", src: P(86, "Post-test answer 14; p.67") },
    { id: "r8", type: "flash", concept: "why",
      front: "What is a motorway interchange?",
      back: "Where motorways join or separate.", src: P(86, "Post-test answer 7") },
    { id: "r9", type: "fill", concept: "driving", visual: "two-second-rule",
      before: "Keep at least one metre per km/h — or a", after: "gap.",
      options: ["two-second", "one-second", "five-second", "ten-metre"], answer: "two-second",
      explain: "At least one metre per kilometre per hour of speed, or a two-second time gap.", src: P(67, "On the Motorway") },
    { id: "r10", type: "flash", concept: "rules",
      front: "Something falls from your vehicle onto the motorway. What do you do?",
      back: "Use a roadside telephone to inform the Gardaí. Don't try to remove it yourself.", src: P(86, "Post-test answer 3") },
    { id: "r11", type: "truefalse", concept: "speed",
      statement: "The maximum speed on an Irish motorway is 120 km/h.", answer: true,
      explain: "Motorways have permitted maximum speeds of 120 km/h.", src: P(64, "Introduction") },
    { id: "r12", type: "flash", concept: "driving",
      front: "An increase in the number of vehicles ahead tells you what?",
      back: "Traffic may be slowing because of an accident, or heavy traffic flowing onto the motorway.", src: P(86, "Post-test answer 5") },
  ],
};

/* ---------------------------------------------------------------------------
   3. READ THE MOTORWAY — recognition: picture questions and sorts.
   --------------------------------------------------------------------------- */
const motorway = {
  id: "motorway",
  kind: "items",
  mode: "matching",
  title: "Read the Motorway",
  blurb: "Signs, studs, lanes and signals — spot and sort",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "signs",
      prompt: "Which sign shows the motorway regulations no longer apply?",
      options: ["motorway-signs", "lri-sign", "gantry-signals", "no-entry-trams"], answer: 0,
      names: ["Motorway start and end signs", "LRI signs", "Gantry signals", "No entry"],
      explain: "The end of motorway sign is the blue motorway sign with a red slash through it.", src: P(70, "Retention Q6 (answer d, p.89)") },
    { id: "k2", type: "picture", label: "Spot it", concept: "joining",
      prompt: "Which picture shows joining the motorway?",
      options: ["motorway-join", "motorway-leave", "hard-shoulder-stop", "motorway-lanes"], answer: 0,
      names: ["Joining", "Leaving", "Emergency stop", "Lane discipline"],
      explain: "Join from the acceleration lane, matching the speed of a gap in lane one.", src: P(67, "Joining the Motorway") },
    {
      id: "k3", type: "sort", concept: "studs",
      prompt: "Which colour are the studs?",
      categories: [
        { id: "w", label: "White" },
        { id: "r", label: "Yellow / red" },
        { id: "a", label: "Amber" },
        { id: "g", label: "Green" },
      ],
      cards: [
        { text: "Between the lanes", cat: "w" },
        { text: "Left edge — the hard shoulder", cat: "r" },
        { text: "Right edge — by the central barrier", cat: "a" },
        { text: "Across a slip road opening", cat: "g" },
        { text: "Across a lay-by entrance", cat: "g" },
      ],
      explain: "White between lanes, yellow/red on the left edge, amber on the right edge, green where you may cross the edge line.", src: P(67, "Reflective Studs") },
    {
      id: "k4", type: "sort", concept: "banned",
      prompt: "Allowed on the motorway, or not?",
      categories: [
        { id: "ok", label: "Allowed" },
        { id: "no", label: "Not allowed" },
      ],
      cards: [
        { text: "A driver who passed the test today", cat: "ok" },
        { text: "A car towing a caravan (not in the outside lane)", cat: "ok" },
        { text: "A learner driver", cat: "no" },
        { text: "A 49 cc moped", cat: "no" },
        { text: "A tractor that can't reach 50 km/h", cat: "no" },
        { text: "A pedal cyclist", cat: "no" },
      ],
      explain: "New drivers may use the motorway straight after the test; learners, small mopeds, slow vehicles and cyclists may not.", src: P(65, "Motorway Restrictions; p.64, 66") },
    {
      id: "k5", type: "sort", concept: "stopping",
      prompt: "Can you stop here on a motorway?",
      categories: [
        { id: "ok", label: "Yes" },
        { id: "no", label: "No" },
      ],
      cards: [
        { text: "At a service area", cat: "ok" },
        { text: "On the hard shoulder after a breakdown", cat: "ok" },
        { text: "When red lights above your lane tell you to", cat: "ok" },
        { text: "On the hard shoulder to make a phone call", cat: "no" },
        { text: "To pick up a passenger", cat: "no" },
        { text: "On the central reservation to rest", cat: "no" },
      ],
      explain: "Stop at service areas — or only in an emergency, to avoid an accident, or when lights, Gardaí or signs tell you to.", src: P(65, "Motorway Regulations; p.68") },
    { id: "k6", type: "picture", label: "Spot it", concept: "lri",
      prompt: "Which sign helps you tell the emergency services exactly where you are?",
      options: ["lri-sign", "motorway-signs", "average-speed", "gantry-signals"], answer: 0,
      names: ["Location Reference Indicator", "Motorway signs", "Average speed cameras", "Gantry signals"],
      explain: "LRI signs show the road, the direction and the distance from the start of the route.", src: P(66, "Location Reference Indicators") },
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
  blurb: "Distances, signals and lanes",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "signs",
      prompt: "Match the distance.",
      pairs: [
        ["Countdown markers", "300, 200 and 100 m from an exit"],
        ["SOS telephones", "About 1.6 km apart"],
        ["LRI signs", "Typically every 500 m"],
        ["Red and white roadside markers", "Every 100 m"],
      ],
      explain: "Each helps you find your exit, a phone, or your exact location.", src: P(66, "On the Motorway; SOS; LRIs; Markers") },
    {
      id: "m2", type: "match", concept: "signals", visual: "gantry-signals",
      prompt: "Match the signal to its meaning.",
      pairs: [
        ["Red lights above your lane", "Go no further in that lane"],
        ["Red-bordered circle on a gantry", "A mandatory speed limit"],
        ["Flashing amber, white sign", "Lane closure, limit or fog ahead"],
        ["Downward arrows overhead", "Guidance when lanes reduce"],
      ],
      explain: "Red means stop in that lane; red circles are mandatory limits; amber warns.", src: P(67, "Illuminated Motorway Signals; p.66") },
    {
      id: "m3", type: "match", concept: "outside-lane",
      prompt: "On 3+ lanes, these may not use the outside lane — match the limit.",
      pairs: [
        ["Goods vehicles", "Over 7.5 tonnes"],
        ["Buses and coaches", "Over 12 metres long"],
        ["Towing", "Any trailer or caravan"],
      ],
      explain: "Heavy, long and towing vehicles stay out of the outside lane.", src: P(66, "Motorway Regulations") },
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
  blurb: "Joining, leaving and breaking down",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "joining", visual: "motorway-join",
      prompt: "Joining from a slip road — in order.",
      steps: ["Use the slip road into the acceleration lane", "Build up speed to match a gap in the left lane", "MSPSL — signal your intention", "Yield to traffic on the motorway; move in when there's a gap", "Keep left until you've adjusted"],
      explain: "Match the speed, signal, yield, then settle in the left lane.", src: P(67, "Joining the Motorway") },
    { id: "p2", type: "order", concept: "leaving", visual: "motorway-leave",
      prompt: "Leaving the motorway — in order.",
      steps: ["At the first route sign for your exit, move into the left lane", "Mirrors and signal — at least at the first countdown marker", "Move into the deceleration lane", "Slow down in the deceleration lane", "Check your speedometer on the new road"],
      explain: "Left lane early, signal by the first marker, slow in the deceleration lane, then re-adjust.", src: P(68, "Leaving; After leaving") },
    { id: "p3", type: "order", concept: "stopping", visual: "hard-shoulder-stop",
      prompt: "Breaking down on the motorway — in order.",
      steps: ["Steer onto the hard shoulder, as far left as possible", "Stop; hazard lights on", "Everyone out by the left-hand doors", "Wait behind the barrier or on the embankment", "Call for help on an SOS phone"],
      explain: "Off the carriageway, hazards on, out on the left, away from the traffic, then call.", src: P(68, "In an emergency") },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "stopping",
      scene: "😴 An hour into a motorway journey you start feeling drowsy.",
      prompt: "What should you do?",
      options: ["Pull onto the hard shoulder for a coffee", "Open a window and leave at the next exit for a break", "Park on a slip road", "Turn up the radio"], answer: 1,
      explain: "Open a window for ventilation, and stop at the next service area or leave at the next exit.", src: P(70, "Retention Q2 (answer b, p.89); p.68") },
    { id: "s2", type: "choice", label: "Scenario", concept: "joining", visual: "motorway-join",
      scene: "🚗 You're in the acceleration lane but the left lane is full of traffic.",
      prompt: "What do you do?",
      options: ["Drive on the hard shoulder until a gap appears", "Be ready to stop in the acceleration lane", "Go straight to the middle lane", "Cross the chevrons into a gap"], answer: 1,
      explain: "Try to avoid stopping, but you MUST yield to traffic on the motorway — be prepared to stop.", src: P(70, "Retention Q9 (answer b, p.89)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "rules",
      scene: "📦 A box falls off the van ahead and lands in lane two.",
      prompt: "What should you do?",
      options: ["Emergency stop on the hard shoulder", "Stop and fetch it", "Stop at an emergency telephone and call the Gardaí", "Tell the Gardaí at the next service area"], answer: 2,
      explain: "Use the emergency telephone to inform the Gardaí — don't try to remove it yourself.", src: P(70, "Retention Q7 (answer c, p.89); p.86") },
    { id: "s4", type: "choice", label: "Scenario", concept: "lanes",
      scene: "🚙 You're in lane one. Ahead, a car on the slip road wants to join.",
      prompt: "What should you do?",
      options: ["Flash your lights to let it in", "Stop and give way", "Move to another lane if it's safe", "Ignore it — you have priority"], answer: 2,
      explain: "If it's safe, move to another lane so the joining traffic has room.", src: P(71, "Retention Q12 (answer c, p.89)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "lanes",
      scene: "🐢 You're overtaking in the right-hand lane, but the car ahead of you there isn't making much progress.",
      prompt: "What do you do?",
      options: ["Flash repeatedly until it moves", "Move left to undertake", "Wait until it can move left, then proceed", "Sound the horn"], answer: 2,
      explain: "Wait until the driver ahead can move left, then continue.", src: P(71, "Retention Q17 (answer c, p.89)") },
    { id: "s6", type: "choice", label: "Scenario", concept: "driving",
      scene: "🚧 You see serious congestion ahead and want to warn the traffic behind you.",
      prompt: "What can you do?",
      options: ["Stop on the hard shoulder", "Move left to overtake", "Briefly use brake lights and hazard warning lights", "Flash your rear fog lamps"], answer: 2,
      explain: "Briefly (lightly) use your brake lights and hazard warning lights.", src: P(71, "Retention Q14 (answer c, p.89)") },
    { id: "s7", type: "choice", label: "Scenario", concept: "driver",
      scene: "🤔 You suddenly realise you can't remember the last ten minutes of your journey.",
      prompt: "What does that tell you?",
      options: ["Nothing to worry about", "Your driving is automatic", "Traffic flow is good", "You're not fit to be using the motorway"], answer: 3,
      explain: "It's a warning: don't drive on a motorway if tired or thinking of other things.", src: P(71, "Retention Q15 (answer d, p.89); p.64") },
    { id: "s8", type: "choice", label: "Scenario", concept: "leaving", visual: "motorway-leave",
      scene: "↗️ Busy traffic kept you out of the left lane, and your exit has just gone past.",
      prompt: "What should you do?",
      options: ["Stop on the hard shoulder and reverse back", "Carry on to the next exit and find a way back", "Cross the central reservation", "Make a U-turn at the next gap"], answer: 1,
      explain: "Never reverse, turn or cross the central reservation. Carry on to the next exit and find a way back onto your route.", src: P(68, "Leaving; p.86 answer 10") },
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
  blurb: "A newly qualified driver's first motorway trip",
  xpPer: 10,
  situation: "🎓 Your pupil passed the test last week. Today: their first motorway journey, 150 km to a city, joining by a slip road.",
  items: [
    { id: "w1", type: "choice", step: "Before setting off", concept: "checks", prompt: "Which check matters most for a long, fast run?",
      options: ["The radio", "Tyres, fuel, oil and water", "The sun visor", "Seat colour"], answer: 1,
      explain: "Tyres (pressures may need to be higher), fuel, oil and water, the car's condition, instruments and warning lights.", src: P(86, "Post-test answer 2") },
    { id: "w2", type: "choice", step: "Joining", concept: "joining", visual: "motorway-join", prompt: "In the acceleration lane, they should…",
      options: ["Always indicate their intention to join", "Go straight to the fast lane", "Drive at 50 km/h until used to it", "Stop at the end of the lane"], answer: 0,
      explain: "Use MSPSL — always signal your intention to move into the traffic stream.", src: P(70, "Retention Q10 (answer a, p.89)") },
    { id: "w3", type: "choice", step: "Settling in", concept: "lanes", prompt: "Which lane, once joined?",
      options: ["Lane one — keep left until adjusted", "The middle lane", "The fast lane, to get it over with", "Whichever is emptiest"], answer: 0,
      explain: "Keep to the left lane until you have adjusted to the conditions.", src: P(67, "Joining the Motorway") },
    { id: "w4", type: "choice", step: "Following", concept: "driving", visual: "two-second-rule", prompt: "At 100 km/h, how far behind the car ahead?",
      options: ["About 20 m", "At least 100 m — or two seconds", "One car length", "As close as is comfortable"], answer: 1,
      explain: "At least one metre per km/h, or a two-second gap.", src: P(67, "On the Motorway") },
    { id: "w5", type: "choice", step: "An exit passes", concept: "joining", prompt: "They've just passed an exit. What should they expect?",
      options: ["Traffic joining the motorway shortly", "Traffic reversing on the hard shoulder", "A Garda check", "Less traffic"], answer: 0,
      explain: "Just after an exit, expect other traffic joining the motorway.", src: P(71, "Retention Q11 (answer a, p.89)") },
    { id: "w6", type: "choice", step: "Their exit", concept: "leaving", visual: "motorway-leave", prompt: "The first route sign for their exit appears. Now…",
      options: ["Move to the left lane", "Wait for the 100 m marker", "Brake in lane two", "Signal right"], answer: 0,
      explain: "Get into the left-hand lane at the first route sign showing your exit.", src: P(68, "Leaving the Motorway") },
    { id: "w7", type: "choice", step: "After leaving", concept: "leaving", prompt: "Off the motorway, on a national road. What should they check?",
      options: ["Their speedometer — they may be faster than they think", "The fuel gauge only", "Nothing", "The mirror angle"], answer: 0,
      explain: "Adjust your speed for the new road and check your speedometer.", src: P(68, "After leaving the Motorway") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 89. Q4 is omitted (see the top
   of this file).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(n <= 10 ? 70 : 71, `Retention test Q${n}; answer p.89`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "Countdown markers on approach to a motorway exit are placed", ["200 metres apart", "300 metres apart", "100 metres apart", "50 metres apart"], 2, "signs", "motorway-leave"),
    R(2, "Motorway journeys can sometimes seem monotonous, and you can find yourself feeling drowsy. If this happens you are advised to", ["pull in on the hard shoulder and have a coffee", "open a window and leave the motorway at the next exit for a break", "park on a slip road and take a rest", "open a window, turn on the radio to help you concentrate"], 1, "stopping"),
    R(3, "The good driver, aware that they can use higher speeds on a motorway, will", ["plan plenty of rest stops, especially at night", "plan to be on the motorway for the shortest possible time", "plan for few rest stops as they are unlikely to need them", "not need to plan their journey"], 0, "driver"),
    R(5, "Setting down or picking up passengers on a motorway is", ["only permissible on slip roads", "not permissible on any part of a motorway", "only permissible on the hard shoulder", "only advisable when the motorway is quiet"], 1, "rules"),
    R(6, "An advance motorway sign for an end to the motorway (regulations no longer apply) is", ["a blue motorway sign with a white sash through it", "a green sign with the words \"end of motorway\"", "a white sign with black lettering with a red sash through it", "a blue motorway sign with a red slash through it"], 3, "signs", "motorway-signs"),
    R(7, "If, whilst on the motorway, an item should fall from a vehicle ahead, you should", ["perform an emergency stop on the hard shoulder", "stop on the hard shoulder and then attempt to retrieve the item", "stop and use the emergency telephones to call the Gardaí", "advise the Gardaí at the next service area or exit"], 2, "rules"),
    R(8, "The purpose of the acceleration lane on a motorway is to", ["give traffic already on the motorway time to move out", "allow you to adjust your speed to that of the traffic on the motorway", "overtake slow-moving vehicles in the left lane", "give you time to adjust to motorway driving"], 1, "joining", "motorway-join"),
    R(9, "When joining a busy motorway, you should be prepared if necessary to", ["drive on the hard shoulder until you build up speed and there is a suitable gap in the left lane", "be ready to stop in the acceleration lane", "build up speed and move directly to the middle lane", "drive over chevron markings to reach a suitable gap in traffic"], 1, "joining", "motorway-join"),
    R(10, "The manual 'Driving the Essential Skills' advises that when joining a motorway, you should", ["always indicate your intention to join the carriageway", "move into the fast lane as soon as you can", "drive at 50 km/h until used to the higher speeds", "always stop at the end of the acceleration lane"], 0, "joining"),
    R(11, "A driver who has just passed a motorway exit should anticipate that there may shortly be", ["other traffic joining the motorway", "other traffic reversing on the hard shoulder", "a Garda patrol car checking for speeding drivers", "a reduction in traffic volume ahead"], 0, "joining"),
    R(12, "Driving on a motorway, you notice other traffic wishing to join the left-hand lane from a slip road. You should", ["flash your lights to let them in", "stop and give way", "move to another lane if it is safe to do so", "not worry about them since you have priority"], 2, "lanes"),
    R(13, "When driving on a motorway, if you need to give a warning to another road user, you are advised to", ["sound your horn", "flash your headlights", "switch on hazard lights and flash headlights", "pull up close behind before sounding your horn"], 1, "driving"),
    R(14, "Driving on a motorway and seeing serious congestion or an accident ahead, you may, in order to warn following traffic", ["stop on the hard shoulder", "move to a lane on your left to overtake", "briefly (lightly) use brake lights and hazard warning lights", "flash your rear fog lamps"], 2, "driving"),
    R(15, "Driving on a motorway you suddenly realise that you cannot really remember the last ten minutes of your journey. You should consider that this is", ["nothing to worry about", "a sign of automatic driving ability", "an indication that traffic flow is good", "a warning that you are not fit to be using the motorway"], 3, "driver"),
    R(16, "If being towed by another vehicle, the person in the towed vehicle must", ["have a licence in the vehicle category of the vehicle", "be over 17 and be responsible to steer", "not drive over 30 km/h", "not stop on the hard shoulder"], 0, "rules"),
    R(17, "Overtaking on a motorway, you come up behind another vehicle in the right-hand lane which is not making much progress. You should", ["flash your lights repeatedly until the driver moves left", "move left to prompt the driver ahead to do the same", "wait until the driver ahead can move left and then proceed", "sound your horn as a warning"], 2, "lanes"),
    R(18, "The speed limit on motorways for single-decked buses (without standing passengers) is", ["60 km/h", "100 km/h", "120 km/h", "80 km/h"], 1, "speed"),
    R(19, "Emergency telephones are placed on motorways at intervals of", ["1 km", "1.6 km", "at the beginning and end of a motorway", "not placed on motorways — you must use your mobile"], 1, "sos", "hard-shoulder-stop"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "learners",
      prompt: "When may a new driver first drive on a motorway?", options: ["After a year", "Immediately after passing the driving test", "With a learner permit and a supervisor", "Only after a motorway course"], answer: 1,
      explain: "Learners may not, but may do so \"immediately after passing the driving test\".", src: P(64, "Introduction") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "stopping", visual: "hard-shoulder-stop",
      scene: "⚠️ Your car breaks down. You've stopped on the hard shoulder with your dog in the back.",
      prompt: "What about the dog?", options: ["Let it out onto the embankment with you", "Keep it in the vehicle", "Tie it to the barrier", "Walk it to the phone"], answer: 1,
      explain: "Keep animals in the vehicle; get people out on the nearside and behind the barrier.", src: P(68, "In an emergency") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "outside-lane",
      statement: "A car towing a caravan may use the outside lane of a three-lane motorway.", answer: false,
      explain: "Any vehicle towing a trailer or caravan may not use the outside lane of motorways with three or more lanes.", src: P(66, "Motorway Regulations") },
    { id: "c4", skill: "recognition", type: "picture", label: "Spot it", concept: "studs",
      prompt: "Which picture shows the motorway stud colours?", options: ["cats-eyes", "motorway-lanes", "motorway-join", "lri-sign"], answer: 0,
      names: ["Reflective studs", "Lanes", "Joining", "LRI signs"],
      explain: "White between lanes, red on the left, amber on the right, green where you may cross.", src: P(67, "Reflective Studs") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "studs",
      prompt: "Match the stud to the edge.", pairs: [["Amber", "Right edge, central barrier"], ["Yellow / red", "Left edge, hard shoulder"], ["Green", "A slip road opening"]],
      explain: "Amber right, yellow/red left, green where you can cross.", src: P(67, "Reflective Studs") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "leaving",
      prompt: "Leaving the motorway:", steps: ["Left lane at the first route sign", "Signal by the first countdown marker", "Slow down in the deceleration lane", "Check your speed on the new road"],
      explain: "Early lane, early signal, slow in the deceleration lane, re-adjust.", src: P(68, "Leaving; After leaving") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "signals", visual: "gantry-signals",
      scene: "🔴 Red lights start flashing on the gantry above your lane.",
      prompt: "What do you do?", options: ["Carry on carefully", "Don't go any further in that lane", "Speed up to clear it", "Stop on the hard shoulder"], answer: 1,
      explain: "Red lights above your lane: do not go any further in that lane.", src: P(86, "Post-test answer 14") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "rules",
      prompt: "Setting down or picking up passengers on a motorway is…", options: ["Only allowed on slip roads", "Not permissible on any part of a motorway", "Only on the hard shoulder", "Fine when quiet"], answer: 1,
      explain: "You must not stop to set down or pick up passengers.", src: P(70, "Retention Q5 (answer b, p.89)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "stopping",
      prompt: "You've broken down. Which picture shows where your passengers should wait?", options: ["hard-shoulder-stop", "motorway-lanes"], answer: 0,
      names: ["Behind the barrier", "On the carriageway"],
      explain: "Out by the left-hand doors, behind the barrier or on the embankment.", src: P(68, "Stopping on the Motorway") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "sos",
      prompt: "Emergency telephones on motorways are placed at intervals of…", options: ["1 km", "1.6 km", "Only at the start and end", "None — use your mobile"], answer: 1,
      explain: "About 1.6 km (1 mile) apart.", src: P(71, "Retention Q19 (answer b, p.89)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "1.8",
  number: "1.8",
  title: "Motorway Driving",
  pages: [64, 71],
  intro: "Preparing, joining, lane discipline, signs and signals, leaving — and what to do if it goes wrong.",
  objectives: [
    "How to prepare for a motorway journey",
    "The laws and restrictions which apply to motorways",
    "The meaning of road signs and signals on a motorway",
    "The procedures for joining, driving along and leaving a motorway",
  ],
  objectivesSrc: P(64, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...motorway, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "motorway-reader", icon: "🛣️", label: "Motorway Reader", rule: { activity: "motorway", min: 100 } },
    { id: "motorway-specialist", icon: "🏆", label: "Motorway Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
