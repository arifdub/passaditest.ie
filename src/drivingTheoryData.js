/*
  ===========================================================================
  DRIVING THEORY QUESTION BANK — Category B (car)

  ORIGIN: original questions, written against the subject matter an Irish
  theory-test candidate is examined on. Nothing is copied or reworded from
  any published question set.

  ACCURACY — checked September 2026
  · Rural local roads: 60 km/h since 7 Feb 2025. Older material says 80. Wrong.
  · National secondary roads: still 100 km/h; the cut to 80 has not commenced.
  · Built-up: 50 km/h default, with 30 km/h bye-laws phasing in to Mar 2027.
  · Theory test: 40 questions, pass mark 35.
  Re-check anything numeric against rsa.ie before each release.
  ===========================================================================
*/

const DRIVING_THEORY_CATEGORIES = [
  {
    id: "dt-rules",
    title: "Rules of the Road",
    blurb: "Right of way, priority, general conduct",
    questions: [
      {
        q: "You approach a junction controlled by a Stop sign and can see clearly that no traffic is coming. What must you do?",
        options: ["Slow to walking pace and continue", "Stop only if another vehicle is approaching", "Treat it as a yield sign when visibility is good", "Come to a complete stop at the stop line"],
        correct: 3,
        explain: "A Stop sign requires a complete stop every time, at the stop line if one is marked. Clear visibility makes no difference — rolling through is a traffic control offence and a Grade 3 fault on test.",
      },
      {
        q: "At an unmarked crossroads where no sign or marking indicates priority, who has right of way?",
        options: ["The vehicle on the wider road", "Nobody — you must yield to traffic on your right", "The vehicle that arrives first", "The vehicle travelling straight ahead"],
        correct: 1,
        explain: "Where roads are of equal importance, yield to traffic on your right. Right of way is a priority, not an entitlement — you still proceed only when it is safe.",
      },
      {
        q: "You are turning right; an oncoming vehicle is also turning right into the same road. Which method does the Rules of the Road describe as safer?",
        options: ["Nearside to nearside, passing in front of each other", "Whoever arrives first goes through the middle", "Offside to offside, passing behind each other", "Both stop and use hand signals"],
        correct: 2,
        explain: "Offside to offside — passing behind one another — keeps each driver's view of approaching traffic clear. Nearside to nearside is legal but leaves your view partly blocked by the other car.",
      },
      {
        q: "You are entering a roundabout and traffic is approaching from your immediate right, already on it. You must:",
        options: ["Proceed, because entering traffic has priority", "Give way, unless road markings indicate otherwise", "Give way only if that traffic is signalling left", "Sound the horn and proceed"],
        correct: 1,
        explain: "Traffic already on the roundabout, from your immediate right, normally has priority. Some roundabouts are marked differently, so read the yield lines on approach.",
      },
      {
        q: "A driver may enter a yellow box junction when:",
        options: ["No other vehicles are inside it", "The light ahead is green", "They can clear it within ten seconds", "Turning right, held up only by oncoming traffic"],
        correct: 3,
        explain: "The single exception is turning right: you may wait in the box if the only thing stopping you is oncoming traffic and your exit is clear. Otherwise do not enter unless your exit road is clear.",
      },
      {
        q: "When may you sound the horn in a built-up area between 11.30 p.m. and 7.00 a.m.?",
        options: ["Never", "To alert a driver who has not seen you", "Only where danger arises from another moving vehicle nearby", "To attract someone you are collecting"],
        correct: 2,
        explain: "The horn is a warning instrument, not a greeting. At night in built-up areas it may only be used where danger arises from another vehicle in motion nearby.",
      },
      {
        q: "Double white lines run along the centre of the road, the line nearest you continuous. To overtake you:",
        options: ["Must not cross or straddle them", "May cross if the road ahead is clear", "May straddle but not fully cross them", "May cross if the vehicle ahead is under 30 km/h"],
        correct: 0,
        explain: "When the nearer line is continuous you must not cross or straddle it to overtake. You may cross only to enter a property or road, or to pass an obstruction, and then only when safe.",
      },
      {
        q: "A pedestrian is waiting at the kerb at a zebra crossing. You should:",
        options: ["Continue if you reach the crossing first", "Sound the horn", "Wave them across", "Slow down and be prepared to stop"],
        correct: 3,
        explain: "Slow and be ready to stop. Don't wave pedestrians across — you cannot speak for other drivers, and someone stepping out on your signal may walk into an overtaking vehicle.",
      },
    ],
  },

  {
    id: "dt-speed",
    title: "Speed Limits & Safety Margins",
    blurb: "Default limits, stopping and following distances",
    questions: [
      {
        q: "What is the default speed limit on a rural local road in Ireland?",
        options: ["50 km/h", "80 km/h", "60 km/h", "100 km/h"],
        correct: 2,
        explain: "60 km/h, reduced from 80 on 7 February 2025 under the Road Traffic Act 2024. The rural speed limit sign — white circle with five diagonal black lines — now means 60 on a local road.",
      },
      {
        q: "What is the default speed limit on a motorway in Ireland?",
        options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"],
        correct: 2,
        explain: "120 km/h. It is a default and can be varied — overhead variable message signs override it, and lower limits apply through roadworks.",
      },
      {
        q: "What is the default speed limit on a regional (R) road?",
        options: ["60 km/h", "100 km/h", "120 km/h", "80 km/h"],
        correct: 3,
        explain: "80 km/h on regional roads. National (N) roads default to 100 km/h, and rural local roads to 60 km/h.",
      },
      {
        q: "In dry conditions, what is the minimum recommended gap to the vehicle in front?",
        options: ["One second", "One car length per 10 km/h", "Two seconds", "Half your stopping distance"],
        correct: 2,
        explain: "The two-second rule. Pick a fixed point; if you reach it before finishing 'only a fool breaks the two-second rule', you're too close. At least double it in the wet.",
      },
      {
        q: "Stopping distance is made up of which two components?",
        options: ["Braking distance and skid distance", "Reaction distance and separation distance", "Thinking distance and braking distance", "Perception distance and gear-change distance"],
        correct: 2,
        explain: "Thinking distance plus braking distance. Tiredness, alcohol and distraction lengthen the first; speed, tyres and road surface affect the second.",
      },
      {
        q: "By roughly how much can braking distances increase on ice compared with a dry road?",
        options: ["Twice", "Three times", "Up to ten times", "Five times"],
        correct: 2,
        explain: "Up to ten times on ice; roughly double in the wet. Separation distance, not just speed, is what has to change most in bad conditions.",
      },
      {
        q: "Fog has reduced visibility to about 50 metres. What speed should you drive at?",
        options: ["The posted limit", "Ten km/h below the limit", "A speed at which you can stop within the distance you can see to be clear", "Whatever the vehicle ahead is doing"],
        correct: 2,
        explain: "The limit is a maximum, not a target. You must always be able to stop within the distance you can see to be clear — in fog that is well below the posted limit.",
      },
      {
        q: "A driver who pays a fixed charge notice for speeding receives:",
        options: ["A fine and 3 penalty points", "A fine only", "A fine and 5 penalty points", "An automatic court summons"],
        correct: 0,
        explain: "Payment carries 3 penalty points. The amount rises if unpaid, and a court conviction carries 5 points. Learner and novice drivers are disqualified at 7 points rather than 12.",
      },
    ],
  },

  {
    id: "dt-signs",
    title: "Road Signs & Markings",
    blurb: "Shapes, colours, markings, reflective studs",
    questions: [
      {
        q: "In Ireland, signs warning of a hazard ahead are usually which shape and colour?",
        options: ["Circular with a red border", "Amber diamond with black symbols", "Triangular, white with a red border", "Rectangular, blue with white lettering"],
        correct: 1,
        explain: "Irish warning signs are amber diamonds — a difference from most of Europe, where they are red-bordered triangles. Roadworks warnings use the same diamond in orange.",
      },
      {
        q: "Direction signs on motorways have which background colour?",
        options: ["Green", "Blue", "White", "Brown"],
        correct: 1,
        explain: "Blue for motorways, green for national roads, white for regional and local roads, brown for tourist and heritage destinations.",
      },
      {
        q: "On a motorway, amber reflective studs mark:",
        options: ["The left-hand edge", "The right-hand edge, next to the central reservation", "Slip road openings and lay-bys", "A temporary lane layout change"],
        correct: 1,
        explain: "Amber runs along the right edge against the central reservation. Red marks the left edge, white separates lanes, green marks slip roads and lay-bys, green/yellow warns of temporary layouts.",
      },
      {
        q: "A continuous white line along the edge of the carriageway may be crossed:",
        options: ["Only in an emergency or to enter a property or side road", "Any time, to let faster traffic past", "Whenever traffic is queuing", "Only in daylight"],
        correct: 0,
        explain: "The hard shoulder is not a running lane. Pulling in routinely to let others by puts you where cyclists, pedestrians and broken-down vehicles are expected to be.",
      },
      {
        q: "A white arrow inside a white-edged box at a signalised junction is:",
        options: ["A bus lane marker", "A box junction you must never enter", "A turning box — position here to turn right", "A cycle lane crossing"],
        correct: 2,
        explain: "A turning box guides vehicles waiting to turn right. Position over it while waiting — but do not enter against a red light.",
      },
      {
        q: "Black and white posts with red reflectors along the verge indicate:",
        options: ["The right side of the carriageway", "A level crossing ahead", "A hump-backed bridge", "The left side of the carriageway"],
        correct: 3,
        explain: "Red reflectors mark the left side, matching the red studs used on the left edge. The colour convention is deliberately consistent between studs and marker posts.",
      },
      {
        q: "A circular sign with a red border and a red diagonal line through a car symbol means:",
        options: ["Roadworks in the right lane", "No overtaking", "End of dual carriageway", "No entry for motor vehicles"],
        correct: 1,
        explain: "Circular red-bordered signs are prohibitory. This one prohibits overtaking until an end-of-restriction sign or a change in road layout.",
      },
      {
        q: "Lanes at a junction are marked with arrows showing permitted directions. You:",
        options: ["Must obey them unless markings or traffic reasons prohibit it", "May ignore them if no other traffic is present", "Should treat them as advisory", "May use any lane after 7 p.m."],
        correct: 0,
        explain: "Lane arrows are mandatory. Getting into the right lane early is also what separates a smooth approach from a last-minute lane change, a common test fault.",
      },
    ],
  },

  {
    id: "dt-procedure",
    title: "Road Procedure",
    blurb: "Junctions, overtaking, motorways, lane discipline",
    questions: [
      {
        q: "What does the routine MSPSL stand for?",
        options: ["Mirrors, Signal, Position, Speed, Look", "Mirrors, Speed, Position, Signal, Look", "Manoeuvre, Signal, Position, Stop, Look", "Mirrors, Steering, Position, Speed, Learn"],
        correct: 0,
        explain: "Mirrors, Signal, Position, Speed, Look. It applies to any situation carrying risk, and may need repeating as the situation develops.",
      },
      {
        q: "Which lane is for normal driving on a three-lane motorway?",
        options: ["The middle lane", "Whichever is least congested", "The left lane", "The right lane above 100 km/h"],
        correct: 2,
        explain: "The left lane. Middle and right are for overtaking, returning left when safe. Middle-lane occupation reduces road capacity and pushes others into riskier moves.",
      },
      {
        q: "Which of these is NOT permitted on an Irish motorway?",
        options: ["A learner permit holder", "A car towing a caravan", "A motorcycle over 50 cc", "A bus"],
        correct: 0,
        explain: "Learner permit holders are prohibited, along with pedestrians, cyclists, animals, vehicles under 50 cc and anything incapable of 50 km/h.",
      },
      {
        q: "When may you stop on the hard shoulder of a motorway?",
        options: ["When tired and needing a rest", "To take a phone call", "To check a map", "In an emergency, or if directed by a Garda or sign"],
        correct: 3,
        explain: "Emergencies only, or where directed. Tiredness is dealt with at a service area or by leaving at the next exit — the hard shoulder is one of the most dangerous places on the network.",
      },
      {
        q: "Joining a motorway from a slip road, you should:",
        options: ["Build up speed on the acceleration lane and merge into a gap", "Stop at the end of the slip road and wait", "Move straight to the middle lane", "Pull out immediately — motorway traffic must yield"],
        correct: 0,
        explain: "Match the speed of traffic in the left lane, then merge into a suitable gap. Traffic already on the motorway has priority, which is why matching speed matters.",
      },
      {
        q: "Countdown markers on the approach to a motorway exit are placed at:",
        options: ["50, 100 and 150 metres", "100, 200 and 300 metres", "300, 600 and 900 metres", "500 metres and 1 kilometre"],
        correct: 1,
        explain: "300, 200 and 100 metres — three bars, two bars, one bar. If you miss your exit, carry on to the next one; never reverse or cross the hatching.",
      },
      {
        q: "In which situation are you permitted to overtake on the left?",
        options: ["Whenever the left lane moves faster", "When the vehicle ahead is signalling and positioned to turn right", "On the approach to a pedestrian crossing", "On a motorway whenever traffic on the right is slow"],
        correct: 1,
        explain: "Passing on the left is permitted in limited cases: when the vehicle ahead is positioned and signalling right, when you are correctly positioned to turn left, and in slow-moving queues where lanes move at different speeds.",
      },
      {
        q: "'Dead ground' on a hill refers to:",
        options: ["The blind area at the brow", "The area beyond a solid white line", "A stretch with no reflective studs", "A dip that can hide an approaching vehicle"],
        correct: 3,
        explain: "A dip or hollow hiding oncoming traffic. Never overtake on the approach — the road may look clear only because the dip is concealing a vehicle.",
      },
    ],
  },

  {
    id: "dt-vulnerable",
    title: "Vulnerable Road Users",
    blurb: "Pedestrians, cyclists, motorcyclists, children, animals",
    questions: [
      {
        q: "You are turning left into a side road where pedestrians have already started to cross. You should:",
        options: ["Sound the horn", "Signal them back to the footpath", "Give way and let them complete the crossing", "Drive slowly around behind them"],
        correct: 2,
        explain: "Pedestrians already crossing the road you are turning into have priority. This is one of the most frequently marked observation faults on the driving test.",
      },
      {
        q: "You are following a cyclist and want to turn left at a junction just ahead. You should:",
        options: ["Overtake before the junction", "Pull alongside and stay level", "Sound the horn", "Hold back until the cyclist has passed the junction"],
        correct: 3,
        explain: "Overtaking a cyclist then turning across their path is how left-hook collisions happen. Hold back, let them clear the junction, then turn.",
      },
      {
        q: "A person wearing headphones is about to step off the footpath. You should:",
        options: ["Sound the horn", "Assume they may not have heard you and be ready to slow or stop", "Perform an emergency stop", "Maintain speed"],
        correct: 1,
        explain: "Anticipate that a road user may not have perceived you. The horn may not be heard at all; adjusting speed and position is the reliable response.",
      },
      {
        q: "When passing horses and riders you should:",
        options: ["Sound the horn so the rider knows", "Slow down, allow plenty of room, watch for the rider's signals", "Pass quickly to minimise time alongside", "Rev the engine to move the horse over"],
        correct: 1,
        explain: "Animals are frightened by noise and by vehicles passing close or fast. The person in charge knows the animal — act on their signals.",
      },
      {
        q: "Before turning into a side road on your right, your final check should be for motorcyclists who might be:",
        options: ["Emerging from the left", "Travelling slower than you", "Parked on the footpath", "Overtaking on your right"],
        correct: 3,
        explain: "A motorcycle overtaking on your offside as you begin a right turn is a classic collision. A final offside mirror and blind spot check is what catches it.",
      },
      {
        q: "Why is an arm signal sometimes advisable approaching a zebra crossing?",
        options: ["It is legally required", "Traffic in front as well as behind can see you intend to slow", "It tells the pedestrian it is safe to cross", "It replaces brake lights"],
        correct: 1,
        explain: "A slowing-down arm signal is visible to oncoming traffic, which brake lights are not. It signals your own intention — it does not instruct a pedestrian to cross.",
      },
      {
        q: "Passing a line of parked cars near a school at home time, the main risk to anticipate is:",
        options: ["Doors opening only", "A child stepping out between vehicles where you cannot see them", "Cars moving off without signalling", "Kerb damage to your tyres"],
        correct: 1,
        explain: "Children are small, unpredictable and often hidden by parked vehicles. Reduce speed and increase clearance so a child appearing suddenly is something you can stop for.",
      },
      {
        q: "A cyclist is riding about a metre out from the kerb rather than tight to it. This is:",
        options: ["A normal, safer position giving room to avoid drains, potholes and car doors", "Illegal", "Only permitted where there is no cycle lane", "A signal that they intend to turn right"],
        correct: 0,
        explain: "Riding clear of the kerb keeps a cyclist out of the door zone and off the worst of the surface, and makes them more visible. Give the same clearance you would a car.",
      },
    ],
  },

  {
    id: "dt-vehicle",
    title: "Vehicle & Documents",
    blurb: "Licensing, insurance, NCT, tyres, warning lights",
    questions: [
      {
        q: "What is the minimum legal tyre tread depth for a car in Ireland?",
        options: ["1.6 mm across the central three-quarters, all round", "1.0 mm across the full width", "2.0 mm at any point", "3.0 mm across the central half"],
        correct: 0,
        explain: "1.6 mm across the central three-quarters and around the whole circumference. Grip falls off well before that, so replacing earlier is sensible rather than legally required.",
      },
      {
        q: "A learner permit holder driving a car must:",
        options: ["Display L-plates only at night", "Be accompanied only on national roads", "Display N-plates front and rear", "Display L-plates and be accompanied by a qualified driver"],
        correct: 3,
        explain: "L-plates front and rear, accompanied at all times by someone holding a full licence in that category for at least two years. N-plates are for the first two years after passing.",
      },
      {
        q: "If an owner allows an unaccompanied learner to drive their car, the vehicle:",
        options: ["Is unaffected — only the driver is liable", "Must be re-registered within 14 days", "Loses its NCT certificate", "May be seized by the Gardaí, and the owner may be fined"],
        correct: 3,
        explain: "Under the Clancy Amendment the vehicle can be detained and seized and the owner prosecuted. Responsibility does not stop with the person behind the wheel.",
      },
      {
        q: "Under-inflated tyres typically wear:",
        options: ["Evenly", "More in the centre of the tread", "More on the outside edges", "Only on the inner sidewall"],
        correct: 2,
        explain: "Under-inflation loads the shoulders, so the outer edges go first. Over-inflation wears the centre. One edge only usually means misalignment rather than pressure.",
      },
      {
        q: "How many days do you have to produce an insurance certificate at a Garda station of your choice?",
        options: ["24 hours", "3 days", "7 days", "10 days"],
        correct: 3,
        explain: "Ten days, at a station you nominate. The same applies to a licence and other documents you are required to produce.",
      },
      {
        q: "The red oil warning light comes on while driving. You should:",
        options: ["Continue and check the oil at your destination", "Rev the engine to raise pressure", "Stop as soon as safe, switch off and investigate", "Ignore it if the engine sounds normal"],
        correct: 2,
        explain: "The red oil light means low oil pressure, not low level. Running even briefly without pressure can seize the engine.",
      },
      {
        q: "A car must undergo its first NCT test when it is:",
        options: ["4 years old", "2 years old", "3 years old", "5 years old"],
        correct: 0,
        explain: "First test at four years, then every two years until ten years old, after which it is annual.",
      },
      {
        q: "The battery charging light stays on after the engine starts. This most likely means:",
        options: ["Low engine oil", "Low brake fluid", "The coolant is overheating", "The alternator is not charging — possibly a loose or broken belt"],
        correct: 3,
        explain: "It should go out immediately after starting. If it stays on the alternator is not charging — commonly a slipping or broken drive belt, which will also stop the water pump.",
      },
    ],
  },

  {
    id: "dt-hazards",
    title: "Hazard Awareness & Conditions",
    blurb: "Anticipation, night driving, weather, skidding",
    questions: [
      {
        q: "A hazard is best defined as:",
        options: ["Any situation that may cause you to change speed or direction", "Any object on the carriageway", "Any feature marked by a warning sign", "Any vehicle within 50 metres"],
        correct: 0,
        explain: "Anything that may cause a change of speed or direction. Hazards are grouped as permanent (bends, junctions), semi-permanent (roadworks, parked vehicles), moving (other road users) and surface (weather, contaminants).",
      },
      {
        q: "The main cause of a vehicle skidding is:",
        options: ["The road surface", "The weather", "The tyres", "The driver"],
        correct: 3,
        explain: "The driver. Surface and weather create the conditions, but the skid comes from braking, steering or accelerating too harshly for the grip available.",
      },
      {
        q: "You are dazzled by oncoming headlights at night. You should:",
        options: ["Look towards the left edge of your side of the road and slow down", "Flash your own headlights", "Close one eye", "Switch to full beam"],
        correct: 0,
        explain: "Look away from the light source towards the nearside verge, and slow down — stopping if needed. Flashing back dazzles them in turn and makes it worse for both.",
      },
      {
        q: "Rear fog lights should be used when visibility falls below:",
        options: ["300 metres", "100 metres", "500 metres", "Any time it rains"],
        correct: 1,
        explain: "Below 100 metres. Switch them off as visibility improves — they dazzle following drivers and can mask your brake lights in a queue.",
      },
      {
        q: "What is the first indication that you may be driving on black ice?",
        options: ["Increased road noise", "The steering feels unusually light", "The brakes feel harder", "The engine temperature drops"],
        correct: 1,
        explain: "Tyre noise drops away and the steering goes light, because the tyres have lost their grip. By then all inputs need to be very gentle.",
      },
      {
        q: "In wet conditions your steering suddenly becomes unresponsive. The likely cause is:",
        options: ["Aquaplaning", "A puncture", "Power steering fluid loss", "Brake fade"],
        correct: 0,
        explain: "Aquaplaning. Ease off the accelerator and let the speed fall until the tyres regain contact — braking hard or steering sharply does nothing until grip returns.",
      },
      {
        q: "Approaching a left-hand bend with a restricted view, the correct road position is:",
        options: ["Tight to the left kerb", "As close to the middle of the road as is safe", "Towards the centre of your own lane", "Straddling the centre line"],
        correct: 2,
        explain: "Moving out within your own lane opens the view around a left-hand bend. For a right-hand bend, keep left. In both cases stay inside your lane.",
      },
      {
        q: "You feel drowsy on a long motorway journey. The only reliable remedy is:",
        options: ["Leaving at the next exit or service area and sleeping", "Opening a window and turning up the radio", "Coffee, then continuing", "Increasing speed to shorten the journey"],
        correct: 0,
        explain: "Sleep. Fresh air, caffeine and loud music delay the symptoms briefly without addressing the cause. Stopping on the hard shoulder is not an option — leave the motorway.",
      },
    ],
  },
];

export default DRIVING_THEORY_CATEGORIES;
