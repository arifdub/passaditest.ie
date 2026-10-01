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
];
