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
];
