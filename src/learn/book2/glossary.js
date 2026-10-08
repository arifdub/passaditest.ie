/*
  ===========================================================================
  BOOK 2 — VISUAL GLOSSARY

  Same shape as book1/glossary.js: one card per term, drawing first.
  Terms are added as the unit that teaches them is built.
  ===========================================================================
*/

const P = (unit, page, ref) => ({ book: 2, unit, page, ref });

export default [
  /* ---------------- Unit 2.1 — The Car Controls & Driving Aids ---------------- */
  {
    id: "driving-position", unit: "2.1", term: "Driving position", visual: "driving-seat",
    meaning: "A seat set so you can reach and use every control comfortably and easily.",
    key: "Knee slightly bent with the clutch down; arms relaxed; seat locked; clear view.",
    src: P("2.1", 6, "The Driving Seat; p.90 answer 2"),
  },
  {
    id: "abc-pedals", unit: "2.1", term: "A, B, C — the foot controls", visual: "pedals",
    meaning: "Accelerator, Brake and Clutch.",
    key: "Clutch with the left foot; brake and accelerator with the right.",
    src: P("2.1", 7, "The Main Controls"),
  },
  {
    id: "progressive-braking", unit: "2.1", term: "Progressive braking", visual: "progressive-brake",
    meaning: "Pressing the brake lightly at first, increasing the pressure as the brakes act.",
    key: "Avoid harsh braking and jerky movements.",
    src: P("2.1", 7, "Brake; p.90 answer 7"),
  },
  {
    id: "clutch", unit: "2.1", term: "Clutch", visual: "clutch-plates:down",
    meaning: "Two plates held together by spring pressure; pressing the pedal parts them, so the engine runs without driving the wheels.",
    key: "Left foot. Don't ride it or slip it when not manoeuvring.",
    src: P("2.1", 7, "Clutch; p.90 answers 8, 9"),
  },
  {
    id: "biting-point", unit: "2.1", term: "Biting point", visual: "clutch-plates:biting",
    meaning: "Where the clutch plates just make contact.",
    key: "Felt and heard — the engine speed drops slightly.",
    src: P("2.1", 90, "Post-test answer 10"),
  },
  {
    id: "hand-position", unit: "2.1", term: "Ten-to-two / quarter-to-three", visual: "wheel-hands:quarter-three",
    meaning: "Where to hold the steering wheel — lightly but firmly, thumbs up.",
    key: "Both hands on unless changing gear or signalling.",
    src: P("2.1", 7, "Steering Control; p.90 answers 11, 12"),
  },
  {
    id: "push-pull", unit: "2.1", term: "Push-pull steering", visual: "push-pull",
    meaning: "Feeding the wheel through your hands without crossing them.",
    key: "Both hands always control the wheel; crossed hands meet a deploying airbag.",
    src: P("2.1", 7, "Steering; p.8"),
  },
  {
    id: "oversteer-understeer", unit: "2.1", term: "Oversteer and understeer", visual: "oversteer",
    meaning: "The car responding more (oversteer) or less (understeer) than you expect for the amount you turn the wheel.",
    key: "Steering lock is the angle through which the front wheels can turn.",
    src: P("2.1", 90, "Post-test answers 13, 15"),
  },
  {
    id: "gear-lever", unit: "2.1", term: "Gears", visual: "gear-pattern",
    meaning: "Let you match the engine's power to the car's speed and load.",
    key: "First: most powerful. Top: least powerful, most economical. Don't look at the lever.",
    src: P("2.1", 8, "Manual Gear Shift Lever; p.90 answers 16, 17"),
  },
  {
    id: "parking-brake", unit: "2.1", term: "Parking brake", visual: "parking-brake",
    meaning: "Secures the stopped car — usually on the rear wheels.",
    key: "Never apply it while moving (unless the footbrake fails): the wheels can lock.",
    src: P("2.1", 9, "Handbrake; p.90 answers 18, 19"),
  },
  {
    id: "ignition-positions", unit: "2.1", term: "Ignition positions", visual: "ignition",
    meaning: "1 accessories, 2 ignition and instruments, 3 starter.",
    key: "Parking brake on and neutral before starting; release the key once it starts.",
    src: P("2.1", 9, "Ignition Switch; p.10"),
  },
  {
    id: "warning-colours", unit: "2.1", term: "Warning-light colours", visual: "warning-colours",
    meaning: "The dashboard colour code.",
    key: "Red = danger, amber = warning, green = working or in use.",
    src: P("2.1", 10, "Visual Driving Aids"),
  },

  /* ---------------- Unit 2.2 — The Driving Mirrors ---------------- */
  {
    id: "blind-spots", unit: "2.2", term: "Blind spots", visual: "mirror-coverage",
    meaning: "Areas around the car not seen in any mirror — hidden by the body or outside the mirrors' range.",
    key: "Look round when stationary; on the move, a quick glance only as the exception.",
    src: P("2.2", 15, "Blind Spots"),
  },
  {
    id: "flat-convex", unit: "2.2", term: "Flat and convex mirrors", visual: "flat-convex",
    meaning: "Flat glass gives a true picture; convex glass a wider view.",
    key: "In a convex mirror, vehicles appear further away than they are.",
    src: P("2.2", 14, "The Function of the Mirrors; p.90 answer 4"),
  },
  {
    id: "a-pillar", unit: "2.2", term: "A-pillar (A-frame)", visual: "a-pillar",
    meaning: "The windscreen pillars, which can hide pedestrians, cyclists, motorcycles — even a car.",
    key: "Look around them, especially at junctions — they can hide objects 23 m away.",
    src: P("2.2", 15, "The A-frame Blind Spots"),
  },
  {
    id: "anti-dazzle", unit: "2.2", term: "Day/night mirror", visual: "anti-dazzle:night",
    meaning: "An interior mirror with a flip tab that cuts glare from lights behind.",
    key: "Electric chromic mirrors do it automatically.",
    src: P("2.2", 14, "Day and Night Mirror; ECM"),
  },
  {
    id: "lorry-blindspot", unit: "2.2", term: "Another driver's blind spot", visual: "lorry-blindspot",
    meaning: "The areas a driver — especially of a large vehicle — can't see.",
    key: "If you can't see the driver in their mirror, they can't see you.",
    src: P("2.2", 15, "Blind Spots"),
  },
  {
    id: "offside-nearside", unit: "2.2", term: "Offside and nearside", visual: "offside-nearside",
    meaning: "Offside: the driver's (right) side. Nearside: the kerb (left) side.",
    key: "Door mirrors are directional — check the one on the side you're moving to.",
    src: P("2.2", 15, "Using the Mirrors"),
  },
  {
    id: "msmpsl", unit: "2.2", term: "MS(M)PSL", visual: "msmpsl",
    meaning: "Mirrors, Signal, (Mirror), Position, Speed, Look — the hazard routine, an expansion of MSM.",
    key: "Look = look, assess, decide and act.",
    src: P("2.2", 16, "The Hazard Routine"),
  },
  {
    id: "mirrors-when", unit: "2.2", term: "When to use the mirrors", visual: "mirrors-when",
    meaning: "Well before moving off, signalling, turning, overtaking, changing lane, slowing, stopping, opening a door.",
    key: "The only exception: an emergency stop.",
    src: P("2.2", 15, "You MUST always use the mirrors"),
  },

  /* ---------------- Unit 2.3 — Beginning to Drive ---------------- */
  {
    id: "daily-checks", unit: "2.3", term: "Everyday safety checks", visual: "daily-checks",
    meaning: "Quick checks before driving: glass and mirrors clean, lights and indicators working, brakes, loads.",
    key: "It's your legal responsibility to keep the car roadworthy.",
    src: P("2.3", 20, "Everyday Safety Checks"),
  },
  {
    id: "periodic-checks", unit: "2.3", term: "Periodic checks", visual: "periodic-checks",
    meaning: "At least weekly and as the handbook says: tyres, wipers, washers, oil, coolant, brake fluid, battery, belts.",
    key: "Oil on level ground; coolant with the engine cold; tyre pressures at least weekly.",
    src: P("2.3", 20, "Periodic Checks; p.91 answer 3"),
  },
  {
    id: "cockpit-drill", unit: "2.3", term: "Cockpit drill", visual: "cockpit-drill",
    meaning: "The checks every time you get in: handbrake, doors, seat, steering, seat belts, mirrors, fuel, loads.",
    key: "For your safety, your passengers' and other road users'.",
    src: P("2.3", 21, "Cockpit Drill"),
  },
  {
    id: "tickover", unit: "2.3", term: "Tick-over (idling)", visual: "ignition",
    meaning: "The engine running at normal speed without the accelerator.",
    key: "After starting, ease off the gas once it runs smoothly.",
    src: P("2.3", 91, "Post-test answer 7"),
  },
  {
    id: "moving-off-routine", unit: "2.3", term: "Moving-off routine", visual: "observe-routine",
    meaning: "Observe – Prepare – Observe – Signal if necessary – Move off: a variation of MSM.",
    key: "You must not cause anyone to change speed or direction.",
    src: P("2.3", 22, "Moving Off/Away"),
  },
  {
    id: "angle-start", unit: "2.3", term: "Angle start", visual: "angle-start",
    meaning: "Moving off from behind an obstruction such as a parked car.",
    key: "Steer briskly, slow with clutch control, extra right-shoulder checks; clutch fully up only when clear.",
    src: P("2.3", 22, "At an angle; p.91 answer 11"),
  },
  {
    id: "uphill-start", unit: "2.3", term: "Uphill start", visual: "hill-start:up",
    meaning: "Moving off on an upward slope.",
    key: "More gas; find the biting point before releasing the handbrake.",
    src: P("2.3", 22, "Uphill"),
  },
  {
    id: "downhill-start", unit: "2.3", term: "Downhill start", visual: "hill-start:down",
    meaning: "Moving off on a downward slope.",
    key: "Footbrake on, release the handbrake; no gas needed; gear to suit — maybe second.",
    src: P("2.3", 23, "Downhill"),
  },

  /* ---------------- Unit 2.4 — Changing Gear ---------------- */
  {
    id: "synchromesh", unit: "2.4", term: "Synchromesh", visual: "gear-pattern",
    meaning: "A gearbox mechanism that synchronises the gear wheels, so you needn't exactly match engine and road speed.",
    key: "Forward gears only. Older cars needed double de-clutching.",
    src: P("2.4", 27, "Synchromesh; p.92 answer 3"),
  },
  {
    id: "gear-ranges", unit: "2.4", term: "Gear speed ranges", visual: "gear-ranges",
    meaning: "Each gear can be used over a range of speeds; the ranges overlap.",
    key: "Higher speed, higher gear — but load and hills call for lower gears.",
    src: P("2.4", 28, "Speed; Engine size"),
  },
  {
    id: "rev-counter", unit: "2.4", term: "Rev counter (tachometer)", visual: "rev-counter",
    meaning: "Shows engine revolutions per minute, usually ×1,000.",
    key: "About 1,500–2,000 rpm at a steady speed for economy.",
    src: P("2.4", 28, "REV Counters"),
  },
  {
    id: "block-change", unit: "2.4", term: "Block gear changing", visual: "block-change",
    meaning: "Missing out intermediate gears — e.g. braking, then 5th straight to 2nd.",
    key: "Just as safe as changing in order, done in sympathy with the engine.",
    src: P("2.4", 28, "Note"),
  },
  {
    id: "under-acceleration-gear", unit: "2.4", term: "Changing down under acceleration", visual: "gear-pattern",
    meaning: "Changing down to accelerate harder, keeping some pressure on the gas.",
    key: "\"Under acceleration\": the engine pulling the car — not always gaining speed.",
    src: P("2.4", 27, "Changing down whilst under acceleration; p.28"),
  },
  {
    id: "coasting", unit: "2.4", term: "Coasting", visual: "coasting",
    meaning: "Moving without the engine driving — clutch down or neutral.",
    key: "Less control of steering and braking; never coast down a hill.",
    src: P("2.4", 29, "Good driving practices; p.92 answers 12, 13"),
  },
  {
    id: "stopping-distance", unit: "2.5", term: "Stopping distance", visual: "stopping-distance",
    meaning: "Thinking distance plus braking distance.",
    key: "Double your speed and the braking distance is about four times as long.",
    src: P("2.5", 33, "Stopping distances; p.34; p.92 answer 7"),
  },
  {
    id: "thinking-distance", unit: "2.5", term: "Thinking distance", visual: "stopping-distance",
    meaning: "Distance travelled between seeing a hazard and pressing the brake.",
    key: "Depends on how quickly you react.",
    src: P("2.5", 33, "Stopping distances for cars; p.92 answer 8"),
  },
  {
    id: "braking-distance", unit: "2.5", term: "Braking distance", visual: "stopping-wet-dry",
    meaning: "Distance travelled from pressing the brake until the car stops.",
    key: "Depends on the driver, speed, brakes and tyres, load, gradient, weather and road surface.",
    src: P("2.5", 34, "Thinking and braking distances; p.92 answer 9"),
  },
  {
    id: "emergency-stop", unit: "2.5", term: "Emergency stop", visual: "emergency-stop",
    meaning: "Stopping as quickly as possible, under full control, for imminent danger of injury to people.",
    key: "Not for animals. No mirrors or signal; both hands on the wheel.",
    src: P("2.5", 35, "Most important aspect of the stop; p.92 answers 14, 23, 24"),
  },
  {
    id: "cadence-braking", unit: "2.5", term: "Cadence braking", visual: "cadence-braking",
    meaning: "Pumping the brake: full pressure, release just before the wheels lock, reapply.",
    key: "For older cars without ABS — ABS makes it unnecessary.",
    src: P("2.5", 35, "Cadence braking"),
  },
  {
    id: "abs", unit: "2.5", term: "ABS (anti-lock brakes)", visual: "abs-steer",
    meaning: "Stops the wheels locking under hard braking, so you can still steer.",
    key: "Not a cure-all: ice, snow, wet leaves and loose gravel still lengthen stopping.",
    src: P("2.5", 35, "ABS/ESP"),
  },
  {
    id: "weight-transfer", unit: "2.5", term: "Weight transfer", visual: "weight-transfer",
    meaning: "Braking throws weight onto the front wheels; braking on a bend throws it outward.",
    key: "Avoid braking while steering.",
    src: P("2.5", 32, "Braking and steering; p.35 How ABS works"),
  },
  {
    id: "rural-speed-sign", unit: "2.5", term: "Rural speed limit sign", visual: "rural-speed-sign",
    meaning: "White circle with black diagonal stripes, used on narrow country roads instead of a number.",
    key: "Use sensible judgement — but never exceed 80 km/h.",
    src: P("2.5", 34, "Rural speed limit sign; p.36"),
  },
  {
    id: "cornering-force", unit: "2.6", term: "Cornering force", visual: "cornering-force",
    meaning: "The force pushing a turning car outward — weight goes to the wheels on the outside of the bend.",
    key: "Too much speed: the car slides sideways or even rolls over.",
    src: P("2.6", 40, "Here comes the science bit"),
  },
  {
    id: "momentum-inertia", unit: "2.6", term: "Momentum and inertia", visual: "car-forces",
    meaning: "A moving car keeps its speed by its natural resistance (inertia) to any change.",
    key: "Most stable: straight, level road at a constant speed.",
    src: P("2.6", 40, "Here comes the science bit"),
  },
  {
    id: "aquaplaning", unit: "2.6", term: "Aquaplaning", visual: "aquaplaning",
    meaning: "Water builds up between tyres and road, so the tyres slide on a film of water.",
    key: "First sign: light steering. Ease off the accelerator — don't brake or steer.",
    src: P("2.6", 41, "Aquaplaning; p.93 answers 1, 2"),
  },
  {
    id: "black-ice", unit: "2.6", term: "Black ice", visual: "black-ice",
    meaning: "Rain freezing on the road as it falls — an invisible hazard.",
    key: "First warning may be very light steering.",
    src: P("2.6", 41, "Black ice; p.93 answers 8, 9"),
  },
  {
    id: "tread-depth", unit: "2.6", term: "Legal tread depth", visual: "tyre-tread",
    meaning: "At least 1.6 mm across the central three-quarters of the tyre, all the way round.",
    key: "Less tread, longer braking distance in the wet.",
    src: P("2.6", 42, "Condition; p.93 answers 5, 17"),
  },
  {
    id: "cross-radial-ply", unit: "2.6", term: "Cross-ply and radial-ply", visual: "tyre-ply",
    meaning: "Cross-ply: cords run diagonally. Radial-ply: cords at right angles, thinner flexible walls.",
    key: "Never mix types on an axle — keep the same type all round.",
    src: P("2.6", 42, "Cross-ply; Radial ply; Note"),
  },
  {
    id: "tyre-burst", unit: "2.6", term: "Tyre burst (blow-out)", visual: "tyre-burst",
    meaning: "A sudden loss of air while driving.",
    key: "Grip the wheel firmly, keep straight, little braking, roll to a halt.",
    src: P("2.6", 42, "Burst tyres"),
  },
  {
    id: "skid", unit: "2.6", term: "Skid", visual: "skid-causes",
    meaning: "Tyres lose grip when you change speed or direction too suddenly.",
    key: "Caused in order of importance by the driver, the vehicle, the road.",
    src: P("2.6", 42, "Skidding; p.93 answer 20"),
  },
  {
    id: "rear-wheel-skid", unit: "2.6", term: "Rear-wheel skid", visual: "rear-skid",
    meaning: "The rear of the car slides out, often from harsh braking.",
    key: "Release the brake and steer into the skid; over-correcting skids the other way.",
    src: P("2.6", 43, "Skids caused by braking; p.93 answer 24"),
  },
  {
    id: "wheelspin", unit: "2.6", term: "Wheel spin", visual: "wheelspin",
    meaning: "Driven wheels spinning from sudden or harsh acceleration.",
    key: "Release the accelerator to let the tyres grip again.",
    src: P("2.6", 43, "Skids caused by acceleration"),
  },
  {
    id: "esc", unit: "2.6", term: "ESC (Electronic Stability Control)", visual: "esc",
    meaning: "Compares where you're steering with where the car is going, and brakes individual wheels to hold the line.",
    key: "Not a substitute for safe driving.",
    src: P("2.6", 43, "Electronic Stability Control"),
  },
  {
    id: "four-questions", unit: "2.7", term: "Four questions before manoeuvring", visual: "four-questions",
    meaning: "Is it safe? Convenient? Legal? Practical for the vehicle I'm driving?",
    key: "Never start until all four are YES.",
    src: P("2.7", 48, "Before manoeuvring"),
  },
  {
    id: "dry-steering", unit: "2.7", term: "Dry steering", visual: "reverse-steer",
    meaning: "Turning the steering wheel while the car is stationary.",
    key: "Avoid it — steer once the car begins to move.",
    src: P("2.7", 55, "Retention Q20; p.93 answer 8"),
  },
  {
    id: "reverse-left-road", unit: "2.7", term: "Reversing into a side road on the left", visual: "reverse-left",
    meaning: "Stopping beyond a side road, then reversing round the corner close to the kerb.",
    key: "Turn as the rear wheel reaches the corner — the front swings out.",
    src: P("2.7", 49, "Reversing into a side road on the left"),
  },
  {
    id: "reverse-right-road", unit: "2.7", term: "Reversing into a side road on the right", visual: "reverse-observe",
    meaning: "Crossing to the right-hand side and reversing into a side road there.",
    key: "For vans or no rear view; all-round checks matter even more.",
    src: P("2.7", 50, "Reversing into a side road on the right"),
  },
  {
    id: "turnabout", unit: "2.7", term: "Turning in the road", visual: "turnabout",
    meaning: "Turning round using forward and reverse gears — not necessarily three points.",
    key: "Move slowly, steer briskly, look all around each stage.",
    src: P("2.7", 50, "Turnabout"),
  },
  {
    id: "u-turn", unit: "2.7", term: "U-turn", visual: "u-turn",
    meaning: "Turning round in one sweep without reverse gear.",
    key: "Wide, quiet, legal; MSM. Never on a motorway or one-way street.",
    src: P("2.7", 51, "Making a U-turn"),
  },
  {
    id: "parallel-parking", unit: "2.7", term: "Reverse parallel parking", visual: "parallel-park",
    meaning: "Reversing into a gap between two parked cars, parallel to the kerb.",
    key: "Needs a gap of at least one and a half car lengths.",
    src: P("2.7", 51, "Reverse (parallel) parking"),
  },
  {
    id: "bay-parking", unit: "2.7", term: "Reversing into a parking bay", visual: "bay-park",
    meaning: "Reversing into a marked bay at 90° (or less) to the traffic flow.",
    key: "Park parallel to the lines and centrally between them.",
    src: P("2.7", 52, "Reversing into a parking bay"),
  },
];
