/*
  ===========================================================================
  BOOK 1 · UNIT 1.2 — SIGNALS & SIGNALLING

  Source: "Driving Procedures & Road Safety — Resource Workbook, Book 1"
  (Driver Education Supplies), book pages 30–33, with the post-test model
  answers on page 84 and the retention-test answers on page 88.

  Same shape as unit1_1.js; see src/learn/README.md. Every concept, card
  and item carries `src` so it can be checked against its page.

  The retention answer key (p.88: 1c 2c 3d 4a 5a 6b 7c 8c 9c 10d) agrees
  with the unit text throughout, so all ten questions are used.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 1, unit: "1.2", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "purpose": {
    title: "Why we signal",
    text: "Signals are used to let other road users know what you intend to do, or warn them of your presence. They give advance information that you intend to perform a manoeuvre. Signals are not instructions to other road users and do not give you the right to perform your planned manoeuvre.",
    src: P(30, "Summaries — Purpose"),
  },
  "right-of-way": {
    title: "Signals don't give right of way",
    text: "Remember: the giving of any signal, mechanical or otherwise, does not confer right of way.",
    src: P(31, "Reversing Lights — Remember"),
  },
  "turn-rules": {
    title: "Three good rules for turn signals",
    text: "Signal early — well before you turn; it's the best way to keep others from trying to overtake you. Signal continuously — never cancel a signal until you have completed the turn. Cancel your signal — check it is cancelled after you've turned. For lane changes, put your turn signal on before changing lanes.",
    src: P(30, "There are three good rules for using turn signals"),
  },
  "timing": {
    title: "When to signal",
    text: "Give your signal in good time before your manoeuvre and for long enough to convey your meaning. Not too soon, or another road user could be confused. Where there are several side roads close together, take particular care when intending to stop on the left beyond a side road on the left — signalling too soon may lead an emerging driver to assume you are turning left.",
    src: P(30, "When to Signal"),
  },
  "how": {
    title: "How to signal",
    text: "Signals should always be given in good time so that other road users have time to react safely, and must be readily recognised — so use only the signals shown in the Rules of the Road. Before giving a signal ask yourself: 1. is it necessary, 2. when should it be given, 3. when will it be safe to make your move. You can only answer these properly by making proper use of the mirrors.",
    src: P(30, "How to Signal"),
  },
  "indicator": {
    title: "Signals by indicator",
    text: "Given when intending to turn left or right, change lane, overtake, or stop at the side of the road. They warn traffic ahead and behind, provided their view of your vehicle is not obscured.",
    src: P(30, "Signals by Indicator"),
  },
  "stop-lights": {
    title: "Stop light signals",
    text: "Stop lights illuminate when you apply a little pressure to the footbrake and warn following traffic that you intend to slow down or stop. Early and progressive braking is important to give following drivers time to react.",
    src: P(30, "Stop light Signals"),
  },
  "arm": {
    title: "Arm signals",
    text: "Arm signals can be given when mechanical signals are not used or have failed, and when necessary to reinforce the indicator and stop lights. Don't give both as a routine — but it can be useful, for example when you are the lead vehicle approaching a zebra crossing. There are five arm signals in the Rules of the Road; at zebra crossings the signal warns oncoming as well as following traffic.",
    src: P(31, "Signals by Arm; Use of Signals"),
  },
  "horn": {
    title: "The horn",
    text: "The horn is the \"warning instrument\" — used only to warn other road users of your presence, e.g. a pedestrian who hasn't realised you're there. Do NOT sound it while moving in a built-up area between 11.30 p.m. and 7.00 a.m., or while stationary unless in danger from another moving vehicle nearby. NEVER use it aggressively, too close to pedestrian crossings, when approaching or passing animals, or for elongated periods.",
    src: P(31, "Signal by Audible Tone"),
  },
  "unnecessary": {
    title: "Unnecessary signals",
    text: "There are sometimes good reasons not to signal, when it would not help another road user — you could confuse them. Examples: moving away with no one in sight for some distance (but mind nearby junctions and bends); at junctions where signs and markings restrict you to one direction; brake lights left on in a queue once the handbrake is on and the car behind has stopped (except as the last vehicle, especially in fog); a signal left on after the manoeuvre; following the traffic flow past parked vehicles.",
    src: P(31, "Unnecessary Use of Signals; Examples"),
  },
  "careless": {
    title: "Never signal carelessly",
    text: "You should not signal carelessly — too early or too late — mislead others by giving the wrong signal, and you should never wave a pedestrian across a road.",
    src: P(31, "You should not signal carelessly…"),
  },
  "presence": {
    title: "Flashing headlights",
    text: "Flashing headlights and sounding the horn warn other road users of your presence, not your intentions. Flashing headlamps should not be taken as an invitation to proceed; if another vehicle flashes, you must decide whether it is safe to proceed and be sure of the other driver's intentions.",
    src: P(31, "Warning Others of Your Presence"),
  },
  "hazard-lights": {
    title: "Hazard warning lights",
    text: "Only to inform other road users that you are temporarily blocking the free flow of traffic. Not used when moving, except briefly on fast roads such as motorways if you have to slow down suddenly for an accident or traffic queue ahead.",
    src: P(31, "Hazard Warning Lights"),
  },
  "reversing": {
    title: "Reversing lights",
    text: "Reversing lights warn other road users of your intention to reverse — particularly important when parking in reverse on busy roads. Selecting reverse promptly helps others anticipate your intention to park.",
    src: P(31, "Reversing Lights"),
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
    "Signals warn others of your intentions — they are not instructions and don't give right of way",
    "Before signalling: is it necessary, when should it be given, when will it be safe? Mirrors answer all three",
    "Flashing headlights and the horn warn of your presence only",
  ],
  cards: [
    {
      icon: "🚦",
      kicker: "Signals & signalling",
      title: "Why signals matter",
      body: [
        "The giving of appropriate signals at the correct time and place, and correctly interpreting the signals of other road users, is vitally important for the safety and convenience of all road users.",
        "The learner must appreciate this early in their driving career — and it is the instructor's job to relay it to a pupil clearly and concisely, with the reasons.",
      ],
      think: ["📣 What am I telling other road users?", "⏱️ Is this the right moment?", "👀 Who could benefit from my signal?"],
      src: P(30, "Unit 1.2 introduction"),
    },
    {
      icon: "💬",
      kicker: "Purpose",
      title: "What a signal does — and doesn't do",
      ask: {
        prompt: "Before you read on — a signal is…",
        options: [
          "An instruction to other road users",
          "A warning of your intentions or presence",
          "Your right to make the manoeuvre",
        ],
        answer: 1,
      },
      body: [
        "Signals are used to let other road users know what you intend to do or warn them of your presence. They give advance information that you intend to perform a manoeuvre.",
        "Your signals are not instructions to other road users and do not give you the right to perform your planned manoeuvre. Signals do not confer right of way!",
      ],
      concept: "purpose",
      src: P(30, "Summaries — Purpose"),
    },
    {
      icon: "↪️",
      kicker: "Turn signals",
      title: "Three good rules",
      sections: [
        { head: "Signal early", list: ["Well before you turn — the best way to keep others from trying to overtake you"] },
        { head: "Signal continuously", list: ["You need both hands on the wheel to turn safely", "Never cancel a signal until you have completed the turn"] },
        { head: "Cancel your signal", list: ["Check the signal is cancelled after you've turned"] },
        { head: "Lane changes", list: ["Put your turn signal on before changing lanes"] },
      ],
      concept: "turn-rules",
      src: P(30, "Three good rules for using turn signals"),
    },
    {
      icon: "⏱️",
      kicker: "When to signal",
      title: "Timing matters",
      body: [
        "Give signals in good time before your manoeuvre and for long enough to convey your meaning — but not too soon, or another road user could be confused.",
        "You should normally follow the MSPSL routine, but sometimes the signal needs to be delayed: where there are several side roads close together, take particular care when intending to stop on the left beyond a side road on the left. Signalling too soon may lead an emerging driver to assume you are turning left.",
      ],
      concept: "timing",
      src: P(30, "When to Signal"),
    },
    {
      icon: "❓",
      kicker: "How to signal",
      title: "Three questions first",
      ask: {
        prompt: "Which tool lets you answer these questions properly?",
        options: ["The horn", "The driving mirrors", "The hazard lights"],
        answer: 1,
      },
      body: ["Signals must be given in good time so others can react safely, and must be readily recognised — so use only the signals shown in the Rules of the Road. Before giving a signal, ask yourself:"],
      list: ["1. Is it necessary?", "2. When should it be given?", "3. When will it be safe to make my move?"],
      callout: "You can only answer these questions properly by making proper use of the driving mirrors.",
      concept: "how",
      src: P(30, "How to Signal"),
    },
    {
      icon: "🔆",
      kicker: "Mechanical signals",
      title: "Indicators and stop lights",
      sections: [
        { head: "Indicators", list: ["Turning left or right, changing lane, overtaking, stopping at the side of the road", "Warn traffic ahead and behind — if their view of your vehicle is not obscured"] },
        { head: "Stop lights", list: ["Come on when you apply a little pressure to the footbrake", "Warn following traffic you intend to slow down or stop", "Early, progressive braking gives following drivers time to react"] },
      ],
      concept: "indicator",
      src: P(30, "Signals by Indicator; Stop light Signals"),
    },
    {
      icon: "✋",
      kicker: "Arm signals",
      title: "When the arm helps",
      body: [
        "Arm signals can be given when mechanical signals are not used or have failed, and when necessary to reinforce the indicator and stop lights.",
        "You should not routinely give both — but it can be useful, for example when you are the lead vehicle approaching a zebra crossing. There are five arm signals in the Rules of the Road; at zebra crossings the signal warns oncoming as well as following traffic.",
      ],
      concept: "arm",
      src: P(31, "Signals by Arm; Use of Signals"),
    },
    {
      icon: "📯",
      kicker: "Audible tone",
      title: "The horn — the \"warning instrument\"",
      body: ["Used only to warn other road users of your presence — for example, a pedestrian who you feel has not realised you're there."],
      sections: [
        { head: "You must NOT sound the horn", list: ["In a moving vehicle in a built-up area between 11.30 p.m. and 7.00 a.m.", "In a stationary vehicle — unless in danger from another moving vehicle nearby"] },
        { head: "NEVER use it", list: ["Aggressively", "Too close to pedestrian crossings", "When approaching or passing animals", "For elongated periods"] },
      ],
      concept: "horn",
      src: P(31, "Signal by Audible Tone"),
    },
    {
      icon: "🚫",
      kicker: "Unnecessary signals",
      title: "When not to signal",
      body: ["There are sometimes good reasons not to signal, when it would not help another road user — you could confuse them."],
      list: [
        "Moving away with no other road user in sight for some distance — but mind nearby junctions and bends",
        "At junctions where signs and markings restrict you to one direction",
        "Brake lights left on in a queue once the handbrake is on and the car behind has stopped (unless you're last in the queue, especially in fog)",
        "Failing to cancel a signal once the manoeuvre is complete",
        "Following the traffic flow to overtake parked vehicles — take up position earlier to keep a steady course",
      ],
      concept: "unnecessary",
      src: P(31, "Examples of unnecessary signalling"),
    },
    {
      icon: "⚠️",
      kicker: "Never",
      title: "Careless signals",
      callout: "You should not signal carelessly — too early or late — mislead others by giving the wrong signal, and you should never wave a pedestrian across a road.",
      concept: "careless",
      src: P(31, "You should not signal carelessly…"),
    },
    {
      icon: "💡",
      kicker: "Presence, not intention",
      title: "Flashing headlights and the horn",
      ask: {
        prompt: "Another driver flashes their headlights at you. What does it mean?",
        options: ["\"Go ahead\"", "\"Be aware of my presence\"", "\"Stop\""],
        answer: 1,
      },
      body: [
        "Flashing headlights and sounding the horn warn other road users of your presence rather than of your intentions.",
        "Flashing headlamps should not be taken as an invitation to proceed. If another vehicle flashes, you must decide whether it is safe to proceed and be sure of the other driver's intentions.",
      ],
      concept: "presence",
      src: P(31, "Warning Others of Your Presence"),
    },
    {
      icon: "🟧",
      kicker: "Other lights",
      title: "Hazard and reversing lights",
      sections: [
        { head: "Hazard warning lights", list: ["Only to inform others you are temporarily blocking the free flow of traffic", "Not while moving — except briefly on fast roads such as motorways, if you must slow down suddenly for an accident or queue ahead"] },
        { head: "Reversing lights", list: ["Warn others of your intention to reverse", "Especially important when parking in reverse on busy roads", "Select reverse promptly to help others anticipate"] },
      ],
      concept: "hazard-lights",
      src: P(31, "Hazard Warning Lights; Reversing Lights"),
    },
    {
      icon: "🛑",
      kicker: "Remember",
      title: "Signals don't give right of way",
      callout: "The giving of any signal, mechanical or otherwise, does not confer \"right of way\".",
      concept: "right-of-way",
      src: P(31, "Remember"),
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
    { id: "r1", type: "flash", concept: "purpose",
      front: "Are signals instructions to other road users?",
      back: "No. Signals are not instructions — they warn other road users of your intentions.",
      src: P(32, "Post-test Q8; answer p.84") },
    { id: "r2", type: "truefalse", concept: "right-of-way",
      statement: "Giving a signal gives you the right of way.", answer: false,
      explain: "The giving of any signal, mechanical or otherwise, does not confer right of way.",
      src: P(31, "Remember") },
    { id: "r3", type: "fill", concept: "horn",
      before: "The legal description of the horn is the", after: ".",
      options: ["warning instrument", "audible signal", "sound device", "alert tone"], answer: "warning instrument",
      explain: "The horn is the \"warning instrument\" and should be used only to warn other road users of your presence.",
      src: P(32, "Post-test Q9; answer p.84; p.31") },
    { id: "r4", type: "flash", concept: "stop-lights",
      front: "When do stop light signals begin operating?",
      back: "When the brake pedal is pressed down a little.",
      src: P(32, "Post-test Q5; answer p.84; p.30") },
    { id: "r5", type: "choice", label: "Tap the correct statement", concept: "presence",
      prompt: "Flashing headlights tell another road user…",
      options: ["You may proceed", "I am giving way", "Be aware of my presence", "I am turning"], answer: 2,
      explain: "Flashing headlights warn of your presence. They give no instructions and no information about your intentions.",
      src: P(33, "Retention Q5 (answer a, p.88); post-test Q12–14") },
    { id: "r6", type: "truefalse", concept: "turn-rules",
      statement: "You should cancel a turn signal before you have completed the turn, so both hands are free.", answer: false,
      explain: "Signal continuously: you need both hands on the wheel to turn safely, so never cancel a signal until you have completed the turn.",
      src: P(30, "Three good rules — Signal continuously") },
    { id: "r7", type: "fill", concept: "arm",
      before: "The Rules of the Road show", after: "arm signals.",
      options: ["five", "three", "four", "seven"], answer: "five",
      explain: "There are five arm signals shown in the Rules of the Road.",
      src: P(31, "Use of Signals") },
    { id: "r8", type: "flash", concept: "stop-lights",
      front: "Why is early braking important to following drivers?",
      back: "Your brake lights come on earlier, giving more warning to the driver behind.",
      src: P(32, "Post-test Q6; answer p.84; p.30") },
    { id: "r9", type: "truefalse", concept: "careless",
      statement: "It's helpful to wave a waiting pedestrian across the road.", answer: false,
      explain: "You should never wave a pedestrian across a road.",
      src: P(31, "You should not signal carelessly…") },
    { id: "r10", type: "choice", label: "Identify the correct rule", concept: "how",
      prompt: "Why should you only use the signals shown in the Rules of the Road?",
      options: ["They are the easiest to give", "Your signals must be clearly and easily recognised by all other road users", "Other signals are illegal", "They save time"], answer: 1,
      explain: "Your signals must be readily recognised, so use only the signals shown in the Rules of the Road.",
      src: P(32, "Post-test Q15; answer p.84; p.30") },
  ],
};

/* ---------------------------------------------------------------------------
   3. SIGNAL OR NOT? — recognition: sort situations.
   --------------------------------------------------------------------------- */
const spot = {
  id: "spot",
  kind: "items",
  mode: "matching",
  title: "Signal or Not?",
  blurb: "Sort situations — and when the horn is allowed",
  xp: 25,
  items: [
    {
      id: "sp1", type: "sort", concept: "unnecessary",
      prompt: "Would a signal help another road user here, or is it unnecessary?",
      categories: [
        { id: "yes", label: "Signal would help" },
        { id: "no", label: "Unnecessary signal" },
      ],
      cards: [
        { text: "Passing a cyclist", cat: "yes" },
        { text: "Changing lanes", cat: "yes" },
        { text: "Pulling in to stop at the side of the road", cat: "yes" },
        { text: "Turning right, with traffic behind you", cat: "yes" },
        { text: "Moving away, nobody in sight for some distance", cat: "no" },
        { text: "Following the traffic flow past parked cars", cat: "no" },
        { text: "Only one direction allowed by signs and markings", cat: "no" },
        { text: "Signal still on after the turn", cat: "no" },
        { text: "Brake lights on in a queue, handbrake on, car behind stopped", cat: "no" },
      ],
      explain: "Signal when it would help another road user. Passing a cyclist: always — following drivers may not see the cyclist. Unnecessary: no one in sight, only one direction possible, following the flow past parked cars (take up position earlier instead), a signal left on, brake lights held in a stopped queue.",
      src: P(31, "Unnecessary Use of Signals; p.30 Indicators; p.84 answers 2–4"),
    },
    {
      id: "sp2", type: "sort", concept: "horn",
      prompt: "The horn: allowed, or not?",
      categories: [
        { id: "ok", label: "Allowed" },
        { id: "not", label: "Not allowed" },
      ],
      cards: [
        { text: "A pedestrian hasn't realised you're there", cat: "ok" },
        { text: "Stationary, in danger from a moving vehicle nearby", cat: "ok" },
        { text: "Moving, built-up area, 11.45 p.m.", cat: "not" },
        { text: "To rebuke another driver", cat: "not" },
        { text: "Approaching animals", cat: "not" },
        { text: "Waiting at the lights to hurry the car in front", cat: "not" },
      ],
      explain: "The horn warns of your presence. Not in a moving vehicle in a built-up area between 11.30 p.m. and 7.00 a.m., not when stationary unless in danger from another moving vehicle, never aggressively, and never when approaching or passing animals.",
      src: P(31, "Signal by Audible Tone; p.84 answers 10–11"),
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
  title: "Match the Signal",
  blurb: "Each signal and what it tells other road users",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "indicator",
      prompt: "Match each signal to what it tells other road users.",
      pairs: [
        ["Indicator", "I intend to turn, change lane, overtake or stop at the side"],
        ["Stop lights", "I intend to slow down or stop"],
        ["Horn", "Be aware of my presence"],
        ["Hazard lights", "I am temporarily blocking the flow of traffic"],
        ["Reversing lights", "I intend to reverse"],
      ],
      explain: "Indicators and stop lights give advance information of your intentions; the horn and flashing headlights warn of your presence; hazard lights say you're temporarily blocking traffic; reversing lights say you intend to reverse.",
      src: P(30, "Indicator; Stop lights. p.31 Horn; Hazard; Reversing"),
    },
    {
      id: "m2", type: "match", concept: "arm",
      prompt: "Match each signal to when it is used.",
      pairs: [
        ["Arm signal", "When mechanical signals aren't used or have failed, or to reinforce them"],
        ["Hazard lights while moving", "Only briefly on fast roads, slowing suddenly for a hazard ahead"],
        ["Flashing headlights", "To warn of your presence — never as an instruction"],
        ["Horn when stationary", "Only if in danger from another moving vehicle nearby"],
      ],
      explain: "Arm signals when mechanical ones aren't used, have failed or need reinforcing; hazard lights only briefly while moving on fast roads; flashing headlights warn of presence; the horn when stationary only if in danger from a moving vehicle.",
      src: P(31, "Signals by Arm; Hazard Warning Lights; Warning Others; Audible Tone"),
    },
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
  blurb: "The questions before a signal, and turn-signal order",
  xp: 30,
  items: [
    {
      id: "p1", type: "order", concept: "how",
      prompt: "Before giving a signal, ask yourself — in order:",
      steps: ["Is it necessary?", "When should it be given?", "When will it be safe to make my move?"],
      explain: "Necessary, when, and when safe — and you can only answer these properly by making proper use of the driving mirrors.",
      src: P(30, "How to Signal"),
    },
    {
      id: "p2", type: "order", concept: "turn-rules",
      prompt: "Using a turn signal — put it in order.",
      steps: ["Signal early, well before you turn", "Keep signalling while you turn", "Complete the turn", "Check the signal is cancelled"],
      explain: "Signal early; signal continuously — never cancel until the turn is complete; then check the signal is cancelled.",
      src: P(30, "Three good rules for using turn signals"),
    },
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
    { id: "s1", type: "choice", label: "Scenario", concept: "timing",
      scene: "🛣️ You plan to stop on the left just past a side road on the left. Several side roads are close together.",
      prompt: "When do you signal?",
      options: ["Well before the first side road", "Delay the signal until you've passed the side road, so an emerging driver doesn't think you're turning in", "Don't signal at all", "Use the hazard lights instead"], answer: 1,
      explain: "There are occasions when the signal must be delayed. Signalling too soon may lead an emerging driver to assume you are actually turning left.",
      src: P(30, "When to Signal") },
    { id: "s2", type: "choice", label: "Scenario", concept: "presence",
      scene: "🚙 You're waiting to emerge. A driver on the main road flashes their headlights at you.",
      prompt: "What do you do?",
      options: ["Pull out — they've let you go", "Treat it as a warning of presence: decide for yourself if it's safe and be sure of their intentions", "Flash back and wait", "Sound the horn to thank them"], answer: 1,
      explain: "Flashing headlamps should not be taken as an invitation to proceed. You must decide whether it is safe and be sure of the other driver's intentions.",
      src: P(31, "Warning Others of Your Presence") },
    { id: "s3", type: "choice", label: "Scenario", concept: "careless",
      scene: "🚶 You've stopped in traffic. A pedestrian is hesitating at the kerb beside you.",
      prompt: "What should you do?",
      options: ["Wave them across", "Flash your headlights at them", "Don't wave them across — never wave a pedestrian across a road", "Sound the horn to hurry them"], answer: 2,
      explain: "You should never wave a pedestrian across a road — you cannot know what other traffic is doing.",
      src: P(31, "You should not signal carelessly…") },
    { id: "s4", type: "choice", label: "Scenario", concept: "unnecessary",
      scene: "🚗🚗🚗 You're stopped in a queue. Your handbrake is on and the car behind has stopped. It's a clear day.",
      prompt: "What about your brake lights?",
      options: ["Keep your foot on the footbrake so they stay lit", "Release the footbrake — brake lights now are unnecessary", "Put on the hazard lights", "Pump the brakes to keep warning"], answer: 1,
      explain: "Leaving on brake lights once the handbrake has secured the vehicle and the vehicle behind has stopped is unnecessary signalling — except as the last vehicle in a queue, especially in fog.",
      src: P(31, "Examples of unnecessary signalling") },
    { id: "s5", type: "choice", label: "Scenario", concept: "horn",
      scene: "🌙 It's 11.45 p.m. You're driving through a built-up area and see a friend on the footpath.",
      prompt: "May you sound the horn to say hello?",
      options: ["Yes, a short tap", "No — not in a moving vehicle in a built-up area between 11.30 p.m. and 7.00 a.m., and the horn is only a warning instrument", "Yes, if no one is asleep", "Only if they wave first"], answer: 1,
      explain: "The horn is the warning instrument, for warning of your presence — and you must not sound it while moving in a built-up area between 11.30 p.m. and 7.00 a.m.",
      src: P(31, "Signal by Audible Tone") },
    { id: "s6", type: "choice", label: "Scenario", concept: "hazard-lights",
      scene: "🛣️ On the motorway, traffic ahead suddenly stops because of an accident. You have to slow down quickly.",
      prompt: "What about the hazard warning lights?",
      options: ["Never while moving", "Briefly, to warn traffic behind that you are slowing suddenly", "Leave them on until you're home", "Only once fully stopped on the hard shoulder"], answer: 1,
      explain: "Hazard lights are not used when moving — except briefly on fast roads such as motorways if you have to slow down suddenly for an accident or traffic queue ahead.",
      src: P(31, "Hazard Warning Lights") },
    { id: "s7", type: "choice", label: "Scenario", concept: "indicator",
      scene: "🚴 A cyclist is ahead of you on a busy road, with traffic following you.",
      prompt: "Should you indicate to go around the cyclist?",
      options: ["Never for a cyclist", "Always — to warn drivers behind that you're passing a moving vehicle they may not see", "Only if the cyclist looks back", "Only at night"], answer: 1,
      explain: "Always: you are passing a moving vehicle, and following drivers may not be able to see the cyclist ahead of your vehicle.",
      src: P(32, "Post-test Q3; answer p.84") },
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
  blurb: "One turn, signalled step by step",
  xpPer: 10,
  situation: "↩️ You intend to turn left into a side road ahead. A car is following you.",
  items: [
    { id: "w1", type: "choice", step: "Ask first", concept: "how",
      prompt: "What do you ask yourself before signalling?",
      options: ["Is the road clear ahead?", "Is it necessary, when should it be given, and when will it be safe to make my move?", "What gear am I in?", "Will the car behind stop?"], answer: 1,
      explain: "Necessary, when, and when safe to move.",
      src: P(30, "How to Signal") },
    { id: "w2", type: "choice", step: "How to answer", concept: "how",
      prompt: "How do you answer those questions properly?",
      options: ["By looking straight ahead", "By making proper use of the driving mirrors", "By slowing right down", "By asking your passenger"], answer: 1,
      explain: "You can only answer these questions properly by making proper use of the driving mirrors.",
      src: P(30, "How to Signal") },
    { id: "w3", type: "choice", step: "Is it needed?", concept: "indicator",
      prompt: "With a car following, is a signal needed?",
      options: ["No — the driver behind can guess", "Yes — it would help another road user", "Only an arm signal", "Only the horn"], answer: 1,
      explain: "Signal when it would help another road user. Indicators warn traffic ahead and behind that you intend to turn.",
      src: P(84, "Post-test answer 2; p.30 Indicators") },
    { id: "w4", type: "choice", step: "When", concept: "timing",
      prompt: "When do you give it?",
      options: ["At the last moment", "In good time and long enough to convey your meaning — not so early it confuses", "Only once you're turning", "As early as possible, whatever the side roads"], answer: 1,
      explain: "In good time before your manoeuvre and for long enough to convey your meaning — but not too soon.",
      src: P(30, "When to Signal") },
    { id: "w5", type: "choice", step: "Slowing", concept: "stop-lights",
      prompt: "You brake to slow for the turn. How should you brake?",
      options: ["Late and firmly", "Early and progressively, so your stop lights warn the driver behind in time", "Only with the gears", "Pump the brakes"], answer: 1,
      explain: "Stop lights come on with a little pressure on the footbrake. Early and progressive braking gives following drivers time to react.",
      src: P(30, "Stop light Signals") },
    { id: "w6", type: "choice", step: "During the turn", concept: "turn-rules",
      prompt: "During the turn, the signal should be…",
      options: ["Cancelled so both hands are free", "Left on — never cancel until the turn is complete", "Switched to hazard lights", "Replaced with an arm signal"], answer: 1,
      explain: "Signal continuously — you need both hands on the wheel, and you never cancel a signal until the turn is complete.",
      src: P(30, "Three good rules — Signal continuously") },
    { id: "w7", type: "choice", step: "After the turn", concept: "turn-rules",
      prompt: "You've completed the turn. Now?",
      options: ["Nothing more to do", "Check the signal has cancelled — indicators don't always cancel themselves", "Signal right", "Flash your headlights"], answer: 1,
      explain: "Cancel your signal: check it is cancelled after you've turned. Failing to cancel is misleading, unnecessary signalling.",
      src: P(30, "Three good rules — Cancel your signal; p.31") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — pages 33, answers page 88.
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept) => ({
  id: `ret${n}`, type: "choice", label: `Retention test · Q${n}`, concept,
  prompt, options, answer, src: P(33, `Retention test Q${n}; answer p.88`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "The workbook's own retention test",
  xpPer: 10,
  items: [
    R(1, "The purpose of giving signals is", ["to give instructions to other road users", "only to warn other users of your intent to turn left or right", "to warn other road users of your intentions", "to warn following traffic of your intent to slow down or change direction"], 2, "purpose"),
    R(2, "Driving the Essential Skills advises that signals should normally be given by/with", ["direction indicators and/or arm signals", "direction indicators only", "direction indicators and/or brake lights", "brake lights and hand/arm signals"], 2, "indicator"),
    R(3, "Vehicle signals need to be given in good time so that", ["other road users have time to see them", "the driver would be blameless in an accident", "the driver can concentrate on positioning the vehicle", "other road users have time to see them and react safely"], 3, "how"),
    R(4, "Advising a pupil who is unsure as to whether to give a signal, an instructor would advise that", ["signals should be given whenever they would help to any other road user", "signals should be given whenever a direction change is necessary", "signals should be given at all times, if in doubt", "signals should be given whenever a change of speed or direction is imminent"], 0, "unnecessary"),
    R(5, "When another driver flashes his headlights, you are advised to remember that the message is", ["be aware of my presence", "you should proceed", "you should not proceed", "I am coming through"], 0, "presence"),
    R(6, "You should avoid flashing your vehicle headlights", ["as a warning to other road users", "to instruct other drivers to proceed", "to reprimand another driver", "during the hours of darkness"], 1, "presence"),
    R(7, "The horn should only be used in a stationary vehicle", ["in a built-up area", "when the vehicle is moving", "if a moving vehicle creates a danger to your vehicle", "between the hours of 11.30 p.m. and 7.00 a.m."], 2, "horn"),
    R(8, "The manual 'Driving the Essential Skills' advises that, when stopping, if a 'left turn' indicator signal might cause confusion to other road users, a driver should use", ["hazard warning lights", "a 'left turn' arm signal", "a 'slowing down' arm signal", "no signal at all"], 2, "arm"),
    R(9, "The Rules of the Road advises that on approach to a zebra crossing where you intend to stop for a pedestrian, you should", ["always give an arm signal", "give an arm signal if you are not driving the lead vehicle", "consider giving an arm signal, if in doubt", "wouldn't need an arm signal"], 2, "arm"),
    R(10, "The manual 'Driving the Essential Skills' advises that when travelling on a road with fast-moving traffic and intending to turn right", ["looking sideways is essential before signalling", "an arm signal should be used as a routine", "you should give a right turn arm signal as you turn", "an arm signal should be used if necessary to emphasise a difficult turn"], 3, "arm"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "purpose",
      prompt: "Are signals instructions to other road users?", options: ["Yes, other drivers must obey them", "No — they warn other road users of your intentions", "Only arm signals are", "Only at junctions"], answer: 1,
      explain: "Signals are not instructions; they warn other road users of your intentions.", src: P(84, "Post-test answer 8") },
    { id: "c2", skill: "application", type: "choice", label: "Scenario", concept: "presence",
      scene: "💡 A lorry driver flashes their headlights as you wait to turn right across their lane.",
      prompt: "What do you do?", options: ["Turn straight away", "Decide for yourself whether it's safe and be sure of their intentions", "Flash back", "Wave them on"], answer: 1,
      explain: "Flashing headlamps should not be taken as an invitation to proceed.", src: P(31, "Warning Others of Your Presence") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "right-of-way",
      statement: "A signal, mechanical or otherwise, does not confer right of way.", answer: true,
      explain: "Signals give advance information; they do not give you the right to make the manoeuvre.", src: P(31, "Remember") },
    { id: "c4", skill: "recognition", type: "choice", label: "Recognise the signal", concept: "stop-lights",
      prompt: "Which signal comes on when you press the footbrake a little?", options: ["Hazard lights", "Stop lights", "Reversing lights", "Indicators"], answer: 1,
      explain: "Stop lights illuminate when you apply a little pressure to the footbrake.", src: P(30, "Stop light Signals") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "indicator",
      prompt: "Match each signal to its message.",
      pairs: [["Indicator", "I intend to turn or change lane"], ["Horn", "Be aware of my presence"], ["Hazard lights", "I'm temporarily blocking traffic"], ["Reversing lights", "I intend to reverse"]],
      explain: "Intentions: indicators, stop lights, reversing lights. Presence: horn, flashing headlights. Hazard lights: temporarily blocking the flow.", src: P(30, "p.30–31") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "how",
      prompt: "Before a signal, ask in order:", steps: ["Is it necessary?", "When should it be given?", "When will it be safe to make my move?"],
      explain: "Necessary, when, when safe — answered by proper use of the mirrors.", src: P(30, "How to Signal") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "unnecessary",
      scene: "🅿️ You're moving away from the kerb. There's no other road user in sight for some distance, and no junction or bend nearby.",
      prompt: "Do you need to signal?", options: ["Yes, always", "No — if sure no other road user could benefit, there's no need", "Use the hazard lights", "Sound the horn instead"], answer: 1,
      explain: "If you are sure there are no other road users who could benefit, there is no need to give a signal — but keep nearby junctions and bends in mind.", src: P(84, "Post-test answer 7; p.31") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "horn",
      prompt: "The horn should only be used in a stationary vehicle…", options: ["In a built-up area", "When the vehicle is moving", "If a moving vehicle creates a danger to your vehicle", "Between 11.30 p.m. and 7.00 a.m."], answer: 2,
      explain: "Only if you are in danger from another moving vehicle nearby.", src: P(33, "Retention Q7 (answer c, p.88)") },
    { id: "c9", skill: "application", type: "choice", label: "Application", concept: "careless",
      prompt: "An elderly pedestrian is waiting to cross beside your stopped car. The right thing is…", options: ["Wave them across", "Never wave a pedestrian across a road", "Flash the headlights", "Sound the horn gently"], answer: 1,
      explain: "You should never wave a pedestrian across a road.", src: P(31, "You should not signal carelessly…") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "how",
      prompt: "Vehicle signals need to be given in good time so that…", options: ["Other road users have time to see them", "The driver would be blameless in an accident", "The driver can concentrate on positioning", "Other road users have time to see them and react safely"], answer: 3,
      explain: "In good time, so other road users have time to react safely.", src: P(33, "Retention Q3 (answer d, p.88)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "1.2",
  number: "1.2",
  title: "Signals & Signalling",
  pages: [30, 33],
  intro: "Give the right signal at the right time — and read the signals of others correctly.",
  objectives: [
    "Why signals are always necessary",
    "Which signals are permitted",
    "How to give signals, including hand/arm signals",
    "How to interpret the signals of other road users",
  ],
  objectivesSrc: P(30, "Objectives"),
  mcqLink: { sectionId: "adi.sec.safety", label: "Road Safety Precepts & Practices" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...spot, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "signal-reader", icon: "🚦", label: "Signal Reader", rule: { activity: "spot", min: 100 } },
    { id: "signalling-specialist", icon: "🏆", label: "Signalling Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
