/*
  ===========================================================================
  BOOK 1 — VISUAL DRIVING GLOSSARY

  One card per technical term the course uses: the drawing (largest), the
  term, one sentence of meaning, the key point, and optionally a real-road
  example. Drawings are in ../visuals.jsx, referred to by id ("id:variant"
  where a drawing has variants).

  Terms are added as the unit that teaches them is built, and each carries
  that unit and its source (`src`, hidden from learners) — so the glossary
  never says more than the course has taught.
  ===========================================================================
*/

const P = (unit, page, ref) => ({ book: 1, unit, page, ref });

export default [
  /* ---------------- Unit 1.1 — Dealing with Hazards ---------------- */
  {
    id: "hazard", unit: "1.1", term: "Hazard", visual: "hazard-types",
    meaning: "Any feature or situation which might cause you to change speed or direction.",
    key: "Four kinds: permanent, semi-permanent, moving and surface.",
    example: "A bend, road works, a pedestrian, a wet road.",
    src: P("1.1", 25, "Summaries — Hazards"),
  },
  {
    id: "manoeuvre", unit: "1.1", term: "Manoeuvre", visual: "manoeuvre",
    meaning: "The act of changing your course or speed.",
    key: "Moving out to pass a parked car is a manoeuvre — start with the mirrors.",
    src: P("1.1", 84, "Post-test model answer 2"),
  },
  {
    id: "mspsl", unit: "1.1", term: "MSPSL — the Hazard Routine", visual: "mspsl",
    meaning: "Mirrors – Signal – Position – Speed – Look, applied wherever there is a risk to you or another road user.",
    key: "The basic rule is MSM; the manoeuvre splits into Position, Speed and Look.",
    src: P("1.1", 26, "MSPSL"),
  },
  {
    id: "zone-of-vision", unit: "1.1", term: "Zone of vision", visual: "zone-of-vision",
    meaning: "What can be seen from the vehicle.",
    key: "The good driver regularly scans the road ahead and behind.",
    src: P("1.1", 29, "Retention Q12, Q13"),
  },
  {
    id: "restricted-view", unit: "1.1", term: "Restricted view", visual: "restricted-view",
    meaning: "When something blocks what you can see — a bend, a building line, a parked vehicle.",
    key: "Anything obstructing a driver's view is a potential hazard.",
    example: "A hedge on the inside of a bend hides what's around it.",
    src: P("1.1", 84, "Post-test model answers 9, 10"),
  },

  /* ---------------- Unit 1.2 — Signals & Signalling ---------------- */
  {
    id: "indicator", unit: "1.2", term: "Indicator", visual: "rear-lights:indicator",
    meaning: "A flashing amber light showing you intend to turn, change lane, overtake or stop at the side of the road.",
    key: "Signal early, keep it on through the turn, then check it has cancelled.",
    src: P("1.2", 30, "Signals by Indicator; turn-signal rules"),
  },
  {
    id: "stop-lights", unit: "1.2", term: "Stop lights (brake lights)", visual: "rear-lights:stop",
    meaning: "Red lights that come on when you press the footbrake a little.",
    key: "Brake early and progressively so following drivers have time to react.",
    src: P("1.2", 30, "Stop light Signals"),
  },
  {
    id: "hazard-lights", unit: "1.2", term: "Hazard warning lights", visual: "rear-lights:hazard",
    meaning: "All indicators flashing together, to show you are temporarily blocking the flow of traffic.",
    key: "Not while moving — except briefly on fast roads when slowing suddenly for a hazard ahead.",
    src: P("1.2", 31, "Hazard Warning Lights"),
  },
  {
    id: "reversing-lights", unit: "1.2", term: "Reversing lights", visual: "rear-lights:reversing",
    meaning: "White lights at the rear that come on in reverse gear.",
    key: "Select reverse promptly so others can anticipate that you're about to park.",
    src: P("1.2", 31, "Reversing Lights"),
  },
  {
    id: "flashing-headlights", unit: "1.2", term: "Flashing headlights", visual: "flashing-headlights",
    meaning: "A warning of presence — nothing more.",
    key: "Never take it as an invitation to proceed; decide for yourself whether it's safe.",
    src: P("1.2", 31, "Warning Others of Your Presence"),
  },
  {
    id: "lead-vehicle-zebra", unit: "1.2", term: "Lead vehicle at a zebra crossing", visual: "zebra",
    meaning: "The first vehicle approaching the crossing, which will stop for the pedestrian.",
    key: "An arm signal as well as the indicator can help — it warns oncoming and following traffic.",
    src: P("1.2", 31, "Signals by Arm; Use of Signals"),
  },
  {
    id: "delayed-signal", unit: "1.2", term: "Delayed signal", visual: "side-roads",
    meaning: "Holding your signal back until it can't be misread.",
    key: "Stopping just past a side road? Signal too early and an emerging driver may think you're turning in.",
    src: P("1.2", 30, "When to Signal"),
  },

  /* ---------------- Unit 1.3 — Road Positioning ---------------- */
  {
    id: "normal-position", unit: "1.3", term: "Normal driving position", visual: "normal-position",
    meaning: "Well to the left — usually about a metre from the kerb.",
    key: "It keeps traffic flowing and lets faster vehicles overtake.",
    src: P("1.3", 34, "During normal driving"),
  },
  {
    id: "position-zones", unit: "1.3", term: "Too close to the left / the middle", visual: "position-zones",
    meaning: "The two positions to avoid either side of normal.",
    key: "Too far left: kerb, tyres, pedestrians. Too near the middle: oncoming traffic, and it looks like a right turn.",
    src: P("1.3", 34, "Too close to the left / middle"),
  },
  {
    id: "right-turn-position", unit: "1.3", term: "Right-turn position", visual: "right-turn-position",
    meaning: "On a single carriageway, just left of the centre line.",
    key: "Get there in good time, after mirrors and a signal.",
    src: P("1.3", 38, "Retention Q9"),
  },
  {
    id: "left-turn", unit: "1.3", term: "Left turn", visual: "left-turn",
    meaning: "Turning into a road on your left, from the left-hand lane.",
    key: "With two lanes, turning left and going ahead both use the left-hand lane.",
    src: P("1.3", 35, "Approaching Junctions"),
  },
  {
    id: "parked-clearance", unit: "1.3", term: "Clearance for parked vehicles", visual: "kerb-clearance",
    meaning: "The same room you'd give the kerb — about a metre.",
    key: "In case a door opens, a pedestrian steps out or a vehicle moves off.",
    src: P("1.3", 34, "During normal driving"),
  },
  {
    id: "weaving", unit: "1.3", term: "Weaving", visual: "no-weaving",
    meaning: "Pulling in and out of the gaps between parked cars.",
    key: "Don't — hold a steady line past lines of parked cars.",
    src: P("1.3", 34, "Note"),
  },
  {
    id: "following-distance", unit: "1.3", term: "Following distance", visual: "following-distance",
    meaning: "The space you keep in front, in case the vehicle ahead stops suddenly.",
    key: "Following too closely is the most frequent cause of rear-end collisions. Faster means a bigger gap.",
    src: P("1.3", 35, "Travelling Distance"),
  },
  {
    id: "lane-arrows", unit: "1.3", term: "Lane arrows", visual: "lane-arrows",
    meaning: "White arrows painted in a lane, showing which way traffic in that lane may go.",
    key: "You must obey them — pick your lane in good time.",
    src: P("1.3", 35, "Arrows at junctions"),
  },
  {
    id: "lanes-at-junction", unit: "1.3", term: "Lanes at a junction", visual: "lanes-at-junction",
    meaning: "Which lane to use for your direction when no signs or markings say otherwise.",
    key: "Two lanes: left and ahead — left lane; right — right lane, in good time.",
    src: P("1.3", 35, "Approaching Junctions"),
  },
  {
    id: "straddling", unit: "1.3", term: "Straddling lanes", visual: "straddling",
    meaning: "Driving across the line between two lanes.",
    key: "Position centrally in your lane instead.",
    src: P("1.3", 35, "Lane bullets"),
  },
  {
    id: "acceleration-lane", unit: "1.3", term: "Acceleration lane", visual: "accel-lane",
    meaning: "A lane alongside the main road for building up speed before you join it.",
    key: "Join without hindering the through traffic.",
    src: P("1.3", 35, "Acceleration and deceleration lanes"),
  },
  {
    id: "deceleration-lane", unit: "1.3", term: "Deceleration lane", visual: "decel-lane",
    meaning: "A lane that leaves the main road, for slowing down before you exit.",
    key: "Get into the left-hand lane in good time, then slow down in the deceleration lane — not on the main road.",
    src: P("1.3", 35, "Acceleration and deceleration lanes; retention Q12"),
  },
  {
    id: "one-way-street", unit: "1.3", term: "One-way street", visual: "one-way",
    meaning: "A street where all traffic travels in the same direction.",
    key: "Turning right into it — right-hand lane; left — left-hand lane. Traffic may overtake on either side.",
    src: P("1.3", 35, "One-way streets; p.36"),
  },
  {
    id: "dual-carriageway", unit: "1.3", term: "Dual carriageway", visual: "dual-carriageway",
    meaning: "A road with a division — the central reservation — separating the two directions of traffic.",
    key: "Drive in the left lane normally; the right lane is for overtaking or turning right.",
    src: P("1.3", 36, "Dual Carriageways"),
  },
  {
    id: "multi-lane", unit: "1.3", term: "Multi-lane road", visual: "multi-lane",
    meaning: "A carriageway with three or more lanes in your direction.",
    key: "Drive in the left lane; use the others only to overtake, then return left.",
    src: P("1.3", 36, "Multi-Lane Roads"),
  },
  {
    id: "two-plus-one", unit: "1.3", term: "2 + 1 road", visual: "two-plus-one",
    meaning: "Two lanes one way and one the other, often divided by a barrier or ghost islands.",
    key: "No overtaking on the one-lane section; the two-lane section may give a safe overtaking zone.",
    src: P("1.3", 36, "2 plus 1 Roads"),
  },
  {
    id: "turning-box", unit: "1.3", term: "Turning box", visual: "turning-box",
    meaning: "A white arrow in a white-edged box at some junctions, guiding right-turning traffic.",
    key: "Turning right? Wait positioned over the box.",
    src: P("1.3", 36, "Turning Box"),
  },
  {
    id: "hatched-markings", unit: "1.3", term: "Hatched markings", visual: "hatched",
    meaning: "Diagonal white lines marking an area of road, used to separate or protect traffic.",
    key: "Where hatching covers an area of roadway, you must not enter it.",
    example: "Ghost islands between opposing traffic.",
    src: P("1.3", 36, "Merging and Diverging (Hatched) Markings"),
  },

  /* ---------------- Unit 1.4 — Junctions & Bends ---------------- */
  {
    id: "bend-left", unit: "1.4", term: "Left-hand bend", visual: "bend-left",
    meaning: "A bend curving to your left.",
    key: "Keep to the centre of your lane.",
    src: P("1.4", 41, "On approach"),
  },
  {
    id: "bend-right", unit: "1.4", term: "Right-hand bend", visual: "bend-right",
    meaning: "A bend curving to your right.",
    key: "Keep to the left — it gives the best view round it.",
    src: P("1.4", 41, "On approach; p.85 answer 4"),
  },
  {
    id: "under-acceleration", unit: "1.4", term: "Under acceleration", visual: "bend-speed",
    meaning: "Just enough accelerator for the engine to carry the car round the corner.",
    key: "It keeps the tyres gripping. It doesn't mean speeding up — and never coast.",
    src: P("1.4", 85, "Post-test answers 1, 2"),
  },
  {
    id: "t-junction", unit: "1.4", term: "T-junction", visual: "junction-t",
    meaning: "A road that ends where it meets another, making a T.",
    key: "Traffic already on the road you're joining has priority.",
    src: P("1.4", 40, "Summaries"),
  },
  {
    id: "y-junction", unit: "1.4", term: "Y-junction", visual: "junction-y",
    meaning: "A road joining another at an angle, making a Y.",
    key: "Sharp angles can restrict your view — position for the best view, then peep and creep.",
    src: P("1.4", 41, "Junction categories; p.43"),
  },
  {
    id: "crossroads", unit: "1.4", term: "Crossroads", visual: "junction-cross",
    meaning: "Two roads crossing each other.",
    key: "Particularly hazardous — a driver on the minor road may not realise who has priority.",
    src: P("1.4", 44, "Crossroads"),
  },
  {
    id: "right-side-right-side", unit: "1.4", term: "Turning right: right side to right side", visual: "right-turns-offside",
    meaning: "Two cars turning right from opposite directions pass each other, then each turns behind the other.",
    key: "The safest method — both drivers get a clear view of approaching traffic.",
    src: P("1.4", 44, "Turning right at crossroads"),
  },
  {
    id: "staggered", unit: "1.4", term: "Staggered junction", visual: "junction-staggered",
    meaning: "Side roads that join from each side, offset rather than opposite.",
    key: "Treat it as two junctions close together.",
    src: P("1.4", 41, "Junction categories"),
  },
  {
    id: "roundabout", unit: "1.4", term: "Roundabout", visual: "roundabout",
    meaning: "A junction where traffic circulates, letting it cross or merge without necessarily stopping.",
    key: "Traffic from the immediate right usually has priority.",
    src: P("1.4", 45, "Roundabouts"),
  },
  {
    id: "roundabout-lanes", unit: "1.4", term: "Roundabout lanes", visual: "roundabout-lanes",
    meaning: "Which lane to take on approach.",
    key: "Left lane to turn left, right lane to turn right, left or middle lane for ahead.",
    src: P("1.4", 45, "On approach"),
  },
  {
    id: "stop-line", unit: "1.4", term: "Stop line / yield line", visual: "stop-yield",
    meaning: "A solid line where you must stop; a broken line where you give way.",
    key: "ALWAYS stop at a stop sign. Be PREPARED to stop at a yield sign.",
    src: P("1.4", 41, "You must always stop…"),
  },
  {
    id: "building-line", unit: "1.4", term: "Building line", visual: "building-line",
    meaning: "Where a building conceals your view into a junction.",
    key: "Edge forward — \"peep and creep\" — until your eyes are level with the obstruction.",
    src: P("1.4", 41, "Assess; p.43; p.85 answer 11"),
  },
  {
    id: "emerging", unit: "1.4", term: "Emerging", visual: "junction-t",
    meaning: "Leaving one road to join, cross or turn into another.",
    key: "Never make another vehicle slow down or change direction.",
    src: P("1.4", 42, "Emerging"),
  },
  {
    id: "wide-reserve", unit: "1.4", term: "Wide central reserve", visual: "wide-reserve",
    meaning: "A central reservation wide enough to wait in.",
    key: "Treat each half as a separate road: cross, wait in the reserve, then join.",
    src: P("1.4", 45, "Emerging right — wide central reserve"),
  },

  /* ---------------- Unit 1.5 — Dealing with Hills ---------------- */
  {
    id: "uphill", unit: "1.5", term: "Going uphill", visual: "hill-up",
    meaning: "Gravity slows you: harder to gain speed, and the brakes stop you sooner.",
    key: "Get into the most appropriate gear before the climb.",
    src: P("1.5", 49, "Going Uphill"),
  },
  {
    id: "downhill", unit: "1.5", term: "Going downhill", visual: "hill-down",
    meaning: "Gravity speeds you up: brakes take longer, and pressing the clutch makes the car run faster.",
    key: "Select a low gear as you approach — the steeper the hill, the lower the gear.",
    src: P("1.5", 50, "Going Downhill"),
  },
  {
    id: "brake-fade", unit: "1.5", term: "Brake fade", visual: "brake-fade",
    meaning: "Brakes that overheat with continued use and become less effective.",
    key: "Downhill, use the correct combination of lower gears and braking — don't rely on the brakes.",
    src: P("1.5", 85, "Post-test answers 6, 8"),
  },
  {
    id: "brow", unit: "1.5", term: "Brow of a hill", visual: "brow",
    meaning: "The top of a hill, where your view of the road ahead is restricted.",
    key: "Keep well left, ease off the gas — and never park or overtake there.",
    src: P("1.5", 50, "Hazards on Hills; p.49"),
  },
  {
    id: "dead-ground", unit: "1.5", term: "Dead ground", visual: "dead-ground",
    meaning: "A dip or hollow in the road that hides oncoming traffic from your view.",
    key: "You must not overtake on approach to dead ground.",
    src: P("1.5", 50, "Hazards on Hills"),
  },
  {
    id: "park-uphill-kerb", unit: "1.5", term: "Parking uphill, with a kerb", visual: "hill-park:up-kerb",
    meaning: "Facing uphill beside a kerb.",
    key: "Front wheels to the RIGHT, handbrake on, first gear.",
    src: P("1.5", 50, "Facing Uphill"),
  },
  {
    id: "park-uphill-nokerb", unit: "1.5", term: "Parking uphill, no kerb", visual: "hill-park:up-nokerb",
    meaning: "Facing uphill where there's no kerb.",
    key: "Front wheels to the LEFT, handbrake on, first gear.",
    src: P("1.5", 50, "Facing Uphill"),
  },
  {
    id: "park-downhill", unit: "1.5", term: "Parking downhill", visual: "hill-park:down-kerb",
    meaning: "Facing downhill, with or without a kerb.",
    key: "Front wheels to the LEFT, handbrake on, reverse gear.",
    src: P("1.5", 50, "Facing Downhill"),
  },

  /* ---------------- Unit 1.6 — Overtaking ---------------- */
  {
    id: "overtaking", unit: "1.6", term: "Overtaking", visual: "overtake-path",
    meaning: "Passing a moving or parked vehicle or an obstruction — a manoeuvre that can put you on a collision course with approaching traffic.",
    key: "Mirrors first, then Position, Speed, Look; Mirrors, Signal, Manoeuvre. If in doubt, don't.",
    src: P("1.6", 53, "Unit introduction; p.55"),
  },
  {
    id: "overtake-position", unit: "1.6", term: "Holding back", visual: "overtake-view",
    meaning: "Waiting behind the vehicle you want to pass, near enough to pull out smoothly but not so close you can't see past it.",
    key: "Keeping back lets you see more clearly — never closer than your braking distance.",
    src: P("1.6", 85, "Post-test answers 1, 8; p.55"),
  },
  {
    id: "stationary-obstruction", unit: "1.6", term: "Obstruction on your side", visual: "pass-stationary",
    meaning: "A parked vehicle or obstruction in your half of the road.",
    key: "Oncoming traffic has priority. Wait well back, then move out early — a gradual change of course.",
    src: P("1.6", 54, "Passing stationary vehicles"),
  },
  {
    id: "obstructions-both", unit: "1.6", term: "Obstructions on both sides", visual: "obstructions-both",
    meaning: "Parked vehicles on both sides leave room for only one line of traffic.",
    key: "Be prepared to give way — never rely on approaching traffic to give you priority.",
    src: P("1.6", 54, "Passing stationary vehicles"),
  },
  {
    id: "gradual-change", unit: "1.6", term: "Gradual change of course", visual: "pass-stationary",
    meaning: "Moving out early and smoothly to pass an obstruction, instead of swerving round it late.",
    key: "Gives adequate clearance — for a door opening, a pedestrian stepping out, or the vehicle moving off.",
    src: P("1.6", 54, "Use the MSPSL routine; Adequate clearance"),
  },
  {
    id: "double-white-lines", unit: "1.6", term: "Double white lines", visual: "double-white",
    meaning: "Two white lines along the centre of the road.",
    key: "Don't overtake if you'd cross or straddle double solid lines, or where the line nearest you is continuous.",
    src: P("1.6", 54, "Do not overtake"),
  },
  {
    id: "crawler-lane", unit: "1.6", term: "Crawler lane", visual: "crawler-lane",
    meaning: "An extra uphill lane: double white lines with two lanes going uphill and one going down.",
    key: "Expect them on national routes, dual carriageways, on a hill.",
    src: P("1.6", 85, "Post-test answer 7"),
  },
  {
    id: "overtake-left", unit: "1.6", term: "Overtaking on the left", visual: "overtake-left",
    meaning: "Passing a vehicle on its left-hand side.",
    key: "Only in the exceptions: a vehicle positioned and signalling right; you're turning left; a one-way street; a slower queue on your right.",
    src: P("1.6", 56, "Overtaking on the Left"),
  },
  {
    id: "queue-left", unit: "1.6", term: "Faster lane on the left", visual: "queue-left",
    meaning: "In traffic, your left-hand lane moving more quickly than a queue on your right.",
    key: "You may pass on the left — but never move into a lane on your left just to overtake.",
    src: P("1.6", 56, "Overtaking on the Left; p.54"),
  },
  {
    id: "being-overtaken", unit: "1.6", term: "Being overtaken", visual: "being-overtaken",
    meaning: "Another vehicle passing you.",
    key: "Don't accelerate, keep left, be alert for it pulling in — ease off if it isn't making ground.",
    src: P("1.6", 54, "Procedure when being overtaken"),
  },
  {
    id: "long-vehicle", unit: "1.6", term: "LONG VEHICLE sign", visual: "overtake-large",
    meaning: "A sign on the back of a vehicle at least thirteen metres long.",
    key: "Leave a greater gap for a clear view; you need extra road length to pass and return.",
    src: P("1.6", 53, "Decision to Overtake; p.56"),
  },
  {
    id: "no-overtaking-places", unit: "1.6", term: "No-overtaking places", visual: "no-overtake-places",
    meaning: "Places where overtaking is unsafe or forbidden.",
    key: "Crossings, junctions, bends, the brow of a hill, hump-back bridges, level crossings, where the road narrows, chevrons and hatching, a No Overtaking sign.",
    src: P("1.6", 54, "You must not overtake; p.55"),
  },
  {
    id: "horse-rider", unit: "1.6", term: "Passing horses and riders", visual: "horse-rider",
    meaning: "Overtaking a horse, a rider, or someone in charge of animals.",
    key: "Animals are frightened by noise: allow enough room, don't sound the horn, watch for the person's signals.",
    src: P("1.6", 56, "Passing horses and riders"),
  },

  /* ---------------- Unit 1.7 — Level Crossings & Tramways ---------------- */
  {
    id: "crossing-lights", unit: "1.7", term: "Level crossing lights", visual: "crossing-lights",
    meaning: "A steady amber light with an audible alarm, then twin flashing red lights, warning of a train.",
    key: "Red: stop. Already on the crossing when they start? Keep going.",
    src: P("1.7", 61, "Traffic light control; p.86 answers 5, 6"),
  },
  {
    id: "half-barrier", unit: "1.7", term: "Half-barrier crossing", visual: "crossing-half",
    meaning: "An automatic crossing whose barriers close only the approach side of the road, operated by the train.",
    key: "Never zigzag around half barriers.",
    src: P("1.7", 86, "Post-test answer 3; p.60"),
  },
  {
    id: "open-crossing", unit: "1.7", term: "Open level crossing", visual: "crossing-open",
    meaning: "A level crossing with no gates or barriers, controlled by lights.",
    key: "No attendant — the red lights are your only warning. Stop when they show.",
    src: P("1.7", 86, "Post-test answer 7; p.60"),
  },
  {
    id: "user-operated-crossing", unit: "1.7", term: "User-operated gates", visual: "crossing-gates",
    meaning: "An unattended crossing with gates or barriers across the full road, and no lights — you open them.",
    key: "Stop, look and listen, open BOTH gates, drive all the way over, close BOTH gates.",
    src: P("1.7", 60, "Unattended road user operated crossings"),
  },
  {
    id: "countdown-markers", unit: "1.7", term: "Countdown markers", visual: "countdown-markers",
    meaning: "Red and white marker boards counting down to a level crossing.",
    key: "They may come before a concealed level crossing — approach carefully.",
    src: P("1.7", 60, "On approach"),
  },
  {
    id: "crossing-yellow-box", unit: "1.7", term: "Keeping a crossing clear", visual: "crossing-clear",
    meaning: "A yellow box marking can keep a busy crossing clear of queuing traffic.",
    key: "Never drive on unless the road is clear beyond. Never nose to tail, never stop on or just after it.",
    src: P("1.7", 86, "Post-test answers 4, 10; p.60"),
  },
  {
    id: "railway-telephone", unit: "1.7", term: "Railway telephone", visual: "crossing-breakdown",
    meaning: "A telephone at a crossing to reach the signalman.",
    key: "Use it after a breakdown or accident, to check it's safe, or for permission with large or slow vehicles, low clearance or animals.",
    src: P("1.7", 61, "Railway telephones"),
  },
  {
    id: "swept-path", unit: "1.7", term: "Tram swept path", visual: "tram-swept-path",
    meaning: "The tram's pathway — about 7 metres wide, for two tracks plus safety clearance.",
    key: "Tracks are flush with the road, so you can cross them at junctions. Mind the overhead wires.",
    src: P("1.7", 60, "Tram pathway or swept path"),
  },
  {
    id: "tram-kerb", unit: "1.7", term: "Tram and the left kerb", visual: "tram-kerb",
    meaning: "The space between a tram and the left-hand kerb.",
    key: "You must not drive into it — and don't park where you'd obstruct a tram.",
    src: P("1.7", 60, "Side note"),
  },
  {
    id: "tram-lane", unit: "1.7", term: "Tram lane", visual: "tram-lane",
    meaning: "A lane for trams, marked by a white line, yellow dots, or a different road surface.",
    key: "Don't enter a lane reserved for trams. Trams have priority.",
    src: P("1.7", 61, "Tramways; p.59"),
  },
  {
    id: "lana-tram", unit: "1.7", term: "LÁNA TRAM", visual: "lana-tram",
    meaning: "A road marking showing a section of road used by trams and vehicles.",
    key: "Take extra care — you may have to share the road space with trams.",
    src: P("1.7", 59, "Introduction"),
  },
  {
    id: "no-entry-trams", unit: "1.7", term: "No Entry — Except Trams", visual: "no-entry-trams",
    meaning: "\"Except Trams\": trams only. \"Except Trams and Access\": also drivers or cyclists going to or from a building.",
    key: "Without a reason to reach a building there, you may not enter.",
    src: P("1.7", 59, "Regulatory signs for tram lanes"),
  },
  {
    id: "tram-crossing-sign", unit: "1.7", term: "LOOK BOTH WAYS sign", visual: "tram-crossing-sign",
    meaning: "A tram symbol with LOOK BOTH WAYS (or LOOK RIGHT, LOOK LEFT): a tramway crossing point.",
    key: "Cross the tracks only here — stop, look both ways, listen for horns and chimes.",
    src: P("1.7", 59, "Warning signs for tram lanes"),
  },
  {
    id: "tram-sweep", unit: "1.7", term: "Tram sweep at junctions", visual: "tram-junction",
    meaning: "The extra space a turning tram covers on bends and corners.",
    key: "Obey the lights and keep yellow boxes completely clear.",
    src: P("1.7", 59, "Regulatory signs for tram lanes"),
  },

  /* ---------------- Unit 1.8 — Motorway Driving ---------------- */
  {
    id: "motorway", unit: "1.8", term: "Motorway", visual: "motorway-lanes",
    meaning: "An expressway in a single direction: no right-hand turns, roundabouts or traffic lights, blue signs, a 120 km/h maximum.",
    key: "Keep left unless overtaking. Learners may not use it.",
    src: P("1.8", 64, "Introduction; Summaries"),
  },
  {
    id: "hard-shoulder", unit: "1.8", term: "Hard shoulder", visual: "hard-shoulder-stop",
    meaning: "The strip to the left of lane one, for emergencies.",
    key: "Don't drive or stop on it unless it's an emergency or signs or Gardaí direct you.",
    src: P("1.8", 65, "Motorway Regulations; p.68"),
  },
  {
    id: "central-reservation", unit: "1.8", term: "Central reservation", visual: "motorway-lanes",
    meaning: "The divide between the two carriageways of a motorway.",
    key: "Never cross it, stop on it or walk on it.",
    src: P("1.8", 65, "Motorway Regulations"),
  },
  {
    id: "motorway-join", unit: "1.8", term: "Joining a motorway", visual: "motorway-join",
    meaning: "Using the slip road and acceleration lane to match the speed of the traffic.",
    key: "Build up speed to match a gap; yield to motorway traffic; always signal.",
    src: P("1.8", 67, "Joining the Motorway"),
  },
  {
    id: "motorway-leave", unit: "1.8", term: "Leaving a motorway", visual: "motorway-leave",
    meaning: "Moving to lane one early and slowing in the deceleration lane.",
    key: "One lane at a time; signal by the first countdown marker; missed it? Carry on to the next.",
    src: P("1.8", 68, "Leaving the Motorway"),
  },
  {
    id: "exit-countdown", unit: "1.8", term: "Exit countdown markers", visual: "motorway-leave",
    meaning: "Boards with three, two and one bars, 300, 200 and 100 m before an exit.",
    key: "Signal at the first one at the latest.",
    src: P("1.8", 66, "On the Motorway; p.68"),
  },
  {
    id: "interchange", unit: "1.8", term: "Motorway interchange", visual: "motorway-lanes",
    meaning: "Where motorways join or separate.",
    key: "Slip roads and links may have sharp bends and lower limits.",
    src: P("1.8", 86, "Post-test answers 7, 11"),
  },
  {
    id: "cats-eyes", unit: "1.8", term: "Reflective studs (cat's eyes)", visual: "cats-eyes",
    meaning: "Studs marking lanes and edges at night.",
    key: "White between lanes, yellow/red left edge, amber right edge, green where you may cross.",
    src: P("1.8", 67, "Reflective Studs"),
  },
  {
    id: "gantry-signals", unit: "1.8", term: "Gantry signals", visual: "gantry-signals",
    meaning: "Illuminated signs above the motorway: limits, lane arrows, warnings.",
    key: "Red lights above your lane: go no further in it. Red-ringed limits are mandatory.",
    src: P("1.8", 67, "Illuminated Motorway Signals; p.66"),
  },
  {
    id: "variable-limit", unit: "1.8", term: "Variable speed limit", visual: "gantry-signals",
    meaning: "A limit for the motorway, or one lane, changed for incidents, traffic or weather.",
    key: "It applies until a sign shows a different limit or the signs switch off.",
    src: P("1.8", 67, "Variable speed limit"),
  },
  {
    id: "average-speed", unit: "1.8", term: "Average speed cameras", visual: "average-speed",
    meaning: "Two cameras that time you between them.",
    key: "Arrive too soon and a record goes to the Gardaí.",
    src: P("1.8", 66, "Average speed camera"),
  },
  {
    id: "lri", unit: "1.8", term: "Location Reference Indicator", visual: "lri-sign",
    meaning: "A verge sign every 500 m: the road, the direction, and the distance from the route's start.",
    key: "Blue on motorways, green on dual carriageways — read it out to the emergency services.",
    src: P("1.8", 66, "Location Reference Indicators"),
  },
  {
    id: "motorway-signs", unit: "1.8", term: "Motorway start and end signs", visual: "motorway-signs",
    meaning: "The blue motorway symbol — with a red slash when the motorway ends.",
    key: "Motorway rules apply from the start sign until the end sign.",
    src: P("1.8", 66, "On Approach; retention Q6"),
  },
  {
    id: "two-second-rule", unit: "1.8", term: "Two-second rule", visual: "two-second-rule",
    meaning: "Leaving at least two seconds between you and the vehicle ahead.",
    key: "Or at least one metre per km/h of speed.",
    src: P("1.8", 67, "On the Motorway"),
  },
  {
    id: "motorway-banned", unit: "1.8", term: "Not allowed on motorways", visual: "motorway-banned",
    meaning: "Road users and vehicles prohibited from motorways and slip roads.",
    key: "Pedestrians, cyclists, animals, under 50 cc, learners, slow and oversized vehicles; no reversing or U-turns.",
    src: P("1.8", 65, "Motorway Restrictions"),
  },

  /* ---------------- Unit 1.9 — Night Driving ---------------- */
  {
    id: "dipped-headlights", unit: "1.9", term: "Dipped headlights", visual: "light-symbol:dipped",
    meaning: "Headlights aimed low and to the left, so they don't dazzle others.",
    key: "Meeting or following traffic, lit streets, fog, snow, heavy rain, fading daylight.",
    src: P("1.9", 73, "Use dipped headlights"),
  },
  {
    id: "main-beam", unit: "1.9", term: "Main beam", visual: "light-symbol:main",
    meaning: "Full headlights, lighting the road far ahead.",
    key: "Only where you won't dazzle anyone — dip in good time.",
    src: P("1.9", 73, "Use main beam headlights; Dazzle"),
  },
  {
    id: "sidelights", unit: "1.9", term: "Sidelights", visual: "light-symbol:side",
    meaning: "Small front and rear lights for being seen.",
    key: "Leave them on when parked on an unlit road; dipped headlights are better than sidelights alone in lit areas.",
    src: P("1.9", 86, "Post-test answer 8; p.73"),
  },
  {
    id: "front-fog", unit: "1.9", term: "Front fog lights", visual: "light-symbol:front-fog",
    meaning: "Extra front lights for fog.",
    key: "Only in dense fog and falling snow — off at all other times.",
    src: P("1.9", 73, "Use main beam headlights"),
  },
  {
    id: "rear-fog", unit: "1.9", term: "Rear fog lights", visual: "light-symbol:rear-fog",
    meaning: "Bright rear lights for fog.",
    key: "Use them when visibility drops below 100 metres; off when it clears.",
    src: P("1.9", 68, "Poor daylight conditions; p.73"),
  },
  {
    id: "stop-in-lights", unit: "1.9", term: "Stopping within your lights", visual: "stop-in-lights",
    meaning: "Driving at a speed that lets you stop within the distance your lights show.",
    key: "What's beyond your lights, you can't see.",
    src: P("1.9", 72, "Introduction"),
  },
  {
    id: "dazzle", unit: "1.9", term: "Dazzle", visual: "dazzle",
    meaning: "Being blinded by another vehicle's lights — or blinding someone with yours.",
    key: "Dazzling others is an offence. Dazzled? Slow down, look to the left verge, stop if necessary.",
    src: P("1.9", 73, "Dazzle; What to do if dazzled"),
  },
  {
    id: "dip-left-bend", unit: "1.9", term: "Dipping for a left-hand bend", visual: "dip-left-bend",
    meaning: "Dipping your headlights earlier for a left bend than a right one.",
    key: "Your lights are focused more towards the left.",
    src: P("1.9", 73, "Dazzle"),
  },
  {
    id: "tail-lights", unit: "1.9", term: "Driving on tail lights", visual: "follow-night",
    meaning: "Following the tail lights of the car ahead instead of reading the road.",
    key: "A false sense of security — it lures you too close or too fast.",
    src: P("1.9", 73, "Driving carefully behind other vehicles"),
  },
  {
    id: "brake-light-dazzle", unit: "1.9", term: "Brake-light dazzle", visual: "brake-dazzle",
    meaning: "Your brake lights glaring into the eyes of the driver behind while you wait.",
    key: "Use the handbrake, not the footbrake — except in fog.",
    src: P("1.9", 73, "Lighting up; p.86 answer 7"),
  },
  {
    id: "night-parking", unit: "1.9", term: "Parking at night", visual: "night-parking",
    meaning: "Leaving the car parked after dark.",
    key: "Headlights off; on the left (except one-way streets); reflectors facing following traffic.",
    src: P("1.9", 73, "Parking and waiting; p.86"),
  },
  {
    id: "dark-car", unit: "1.9", term: "Dark-coloured cars", visual: "dark-car-dusk",
    meaning: "Cars that are harder to see as daylight fades.",
    key: "Switch lights on sooner and off later than lighter-coloured cars.",
    src: P("1.9", 72, "Lights at Night; p.86 answer 2"),
  },

  /* ---------------- Unit 1.10 — Weather, Driver Vision & Its Effects ---------------- */
  {
    id: "fog-distance", unit: "1.10", term: "Stopping within what you can see", visual: "fog-distance",
    meaning: "In fog, keeping a speed at which you can stop within the distance you can see to be clear.",
    key: "Never hang on to the tail lights of the car ahead — you'll be too close.",
    src: P("1.10", 79, "You must be able to stop; Front and rear fog lights"),
  },
  {
    id: "fog-shadow", unit: "1.10", term: "Main beam in fog", visual: "fog-shadow",
    meaning: "Using full headlights behind another vehicle in fog.",
    key: "Don't: it casts a shadow ahead of that vehicle and may dazzle its driver.",
    src: P("1.10", 79, "You must be able to stop; p.87 answer 10"),
  },
  {
    id: "fog-junction", unit: "1.10", term: "Junctions in fog", visual: "fog-junction",
    meaning: "Waiting to emerge or turn when you can't see far.",
    key: "Window open to listen, signal early, footbrake on for short stops; never steer by the centre line.",
    src: P("1.10", 79, "At junctions"),
  },
  {
    id: "weather-stopping", unit: "1.10", term: "Stopping in wet and ice", visual: "stopping-weather",
    meaning: "How far it takes to stop when the tyres have less grip.",
    key: "Wet: at least double. Ice: up to ten times.",
    src: P("1.10", 76, "Wet weather; p.78"),
  },
  {
    id: "unresponsive-steering", unit: "1.10", term: "Unresponsive steering", visual: "aquaplaning",
    meaning: "Steering that goes light because water stops the tyres gripping the road.",
    key: "Ease off the accelerator and slow down gradually.",
    src: P("1.10", 76, "Steering unresponsive"),
  },
  {
    id: "icy-bend", unit: "1.10", term: "Icy bends", visual: "icy-bend",
    meaning: "Bends where loss of traction is more likely on ice and snow.",
    key: "Brake progressively on the straight, then steer smoothly round.",
    src: P("1.10", 78, "When driving in icy or snowy weather"),
  },
  {
    id: "snowplough", unit: "1.10", term: "Snowploughs and gritters", visual: "snowplough",
    meaning: "Winter maintenance vehicles that throw snow or spread salt.",
    key: "Never overtake a snowplough unless your lane is already cleared; take care passing gritters.",
    src: P("1.10", 78, "When driving in icy or snowy weather"),
  },
  {
    id: "crosswind", unit: "1.10", term: "Crosswinds", visual: "crosswind",
    meaning: "Strong side gusts on exposed roads, by bridges and through gaps in hedges.",
    key: "Keep well back from motorcyclists overtaking high-sided vehicles.",
    src: P("1.10", 78, "Windy weather"),
  },
  {
    id: "low-sun", unit: "1.10", term: "Low sun glare", visual: "low-sun",
    meaning: "Bright sun low ahead, worse off a wet road.",
    key: "It hides road markings: visor, correct sunglasses, clean screen — slow down or stop if dazzled.",
    src: P("1.10", 79, "Hot Weather; p.87 answers 13, 14"),
  },
  {
    id: "demist", unit: "1.10", term: "Demisting", visual: "demist",
    meaning: "Clearing condensation from the inside of the windows.",
    key: "Fresh air, not recirculation; demister and warm dry air; open a window if necessary.",
    src: P("1.10", 76, "Interior Environment; p.79; p.87 answer 2"),
  },
  {
    id: "winter-kit", unit: "1.10", term: "Winter emergency kit", visual: "winter-kit",
    meaning: "What to carry in winter in case you're stuck or break down.",
    key: "De-icer and scraper, torch, warm clothes, boots, first aid, jump leads, shovel, warm drink, food.",
    src: P("1.10", 76, "Icy and snowy weather"),
  },
];
