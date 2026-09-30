/*
  ===========================================================================
  INTERACTIVE LEARNING — VISUALS

  "Never make the learner memorise a word when they could first see what it
  means." Every road term, marking, lane type and position the course uses
  has a drawing here, shown BEFORE its name and definition (learn cards),
  beside a scenario, and as the largest element of its glossary card.

  Usage in content:   visual: "hatched"          (a card, item or glossary)
  Usage in UI:        <Visual id="hatched" />

  All drawings are top-down road diagrams on one grid (viewBox 160 × 100),
  in one palette, so they read as a set. They sit on a light "ground" panel
  in both light and dark mode — like a printed diagram — so the labels
  stay legible without a second colour scheme.

  A visual clarifies what a unit teaches. It must not show a rule the unit
  doesn't state; the unit content is the authority.
  ===========================================================================
*/

import React, { useId, useContext, createContext } from "react";

/* "Bare" drawings hide their text labels — used by the Spot-it picture
   questions, where a label would give the answer away. */
const BareContext = createContext(false);

/* ---- palette ---- */
const C = {
  ground: "#dde9d2",
  road: "#5b6470",
  roadDark: "#4b5563",
  line: "#ffffff",
  kerb: "#cfccc4",
  ink: "#0f172a",
  good: "#10b981",
  bad: "#ef4444",
  amber: "#f59e0b",
  blue: "#3b82f6",
  grey: "#94a3b8",
};

/* ---- building blocks ---- */

/* A car seen from above, centred on (x, y), facing `rot` degrees
   (0 = up the page). */
function Car({ x, y, rot = 0, color = C.blue, ghost, door }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`} opacity={ghost ? 0.45 : 1}>
      <rect x="-4.2" y="-7.5" width="8.4" height="15" rx="2.4" fill={color} stroke="#0f172a" strokeWidth="0.35" />
      <rect x="-3.2" y="-5" width="6.4" height="3" rx="0.8" fill="#e0f2fe" />
      <rect x="-3.2" y="2.4" width="6.4" height="2.4" rx="0.8" fill="#e0f2fe" />
      {door && <rect x="-8.2" y="-2.6" width="4" height="1" rx="0.4" fill={color} stroke="#0f172a" strokeWidth="0.3" transform="rotate(-25 -4.2 -2.6)" />}
    </g>
  );
}

/* A text label with a light halo so it reads over road or grass. */
function Tag({ x, y, children, size = 5, color = C.ink, anchor = "middle", weight = 800 }) {
  const bare = useContext(BareContext);
  if (bare) return null;
  return (
    <text x={x} y={y} fontSize={size} fontWeight={weight} fill={color} textAnchor={anchor}
      stroke="#ffffff" strokeWidth={size * 0.32} strokeLinejoin="round" paintOrder="stroke"
      fontFamily="system-ui, -apple-system, Segoe UI, sans-serif">
      {children}
    </text>
  );
}

/* A path with an arrowhead. */
function Arrow({ d, color = C.good, w = 1.6, dash, mid }) {
  const id = useId().replace(/:/g, "");
  return (
    <g>
      <defs>
        <marker id={`ah${id}`} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      <path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={dash} markerEnd={`url(#ah${id})`} markerMid={mid ? `url(#ah${id})` : undefined} />
    </g>
  );
}

/* A painted lane arrow (white), pointing up, turning left/right. */
function LaneArrow({ x, y, kind = "ahead", s = 1 }) {
  const paths = {
    ahead: "M0 8 L0 -5 M-3 -2 L0 -6 L3 -2",
    left: "M1 8 L1 0 Q1 -4 -3 -4 M-1 -6.5 L-4 -4 L-1 -1.5",
    right: "M-1 8 L-1 0 Q-1 -4 3 -4 M1 -6.5 L4 -4 L1 -1.5",
  };
  return (
    <path d={paths[kind]} transform={`translate(${x} ${y}) scale(${s})`} fill="none"
      stroke={C.line} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  );
}

function Frame({ children, title, h = 100 }) {
  return (
    <svg viewBox={`0 0 160 ${h}`} className="w-full h-auto block" role="img" aria-label={title}>
      <rect x="0" y="0" width="160" height={h} fill={C.ground} />
      {children}
    </svg>
  );
}

/* A vertical two-way road, x from l to r, centre line dashed. */
function VRoad({ l = 45, r = 115, centre = true, h = 100, kerb = true }) {
  const mid = (l + r) / 2;
  return (
    <g>
      {kerb && <rect x={l - 5} y="0" width="5" height={h} fill={C.kerb} />}
      {kerb && <rect x={r} y="0" width="5" height={h} fill={C.kerb} />}
      <rect x={l} y="0" width={r - l} height={h} fill={C.road} />
      {centre && <line x1={mid} y1="0" x2={mid} y2={h} stroke={C.line} strokeWidth="0.9" strokeDasharray="6 5" />}
    </g>
  );
}

/* ===========================================================================
   THE DRAWINGS
   =========================================================================== */
const DRAW = {
  /* ---------------- positions ---------------- */
  "normal-position": () => (
    <Frame title="Normal driving position">
      <VRoad />
      <line x1="47" y1="10" x2="59" y2="10" stroke={C.good} strokeWidth="0.8" />
      <line x1="47" y1="7" x2="47" y2="13" stroke={C.good} strokeWidth="0.8" />
      <line x1="59" y1="7" x2="59" y2="13" stroke={C.good} strokeWidth="0.8" />
      <Tag x="53" y="6" size="4.2" color={C.good}>≈ 1 m</Tag>
      <Car x="63" y="30" color={C.good} />
      <Arrow d="M63 20 L63 4" />
      <Tag x="63" y="55" size="4.4">NORMAL POSITION</Tag>
      <Tag x="63" y="61" size="3.6" weight={600}>well left, about a metre from the kerb</Tag>
      <Car x="97" y="72" rot={180} color={C.grey} />
      <Arrow d="M97 82 L97 96" color={C.grey} w={1.2} />
      <Tag x="80" y="97" size="3.4" weight={600} color="#475569">centre line</Tag>
    </Frame>
  ),

  "position-zones": () => (
    <Frame title="Too close to the left, normal, too close to the middle">
      <VRoad />
      <rect x="45" y="0" width="6" height="100" fill={C.bad} opacity="0.35" />
      <rect x="54" y="0" width="16" height="100" fill={C.good} opacity="0.3" />
      <rect x="73" y="0" width="7" height="100" fill={C.bad} opacity="0.35" />
      <Car x="62" y="50" color={C.good} />
      <Tag x="22" y="30" size="4.2" color={C.bad}>TOO CLOSE</Tag>
      <Tag x="22" y="35" size="4.2" color={C.bad}>TO THE LEFT</Tag>
      <Tag x="22" y="42" size="3.3" weight={600}>kerb, tyres,</Tag>
      <Tag x="22" y="46" size="3.3" weight={600}>pedestrians, splashing</Tag>
      <Tag x="62" y="80" size="4.2" color="#047857">NORMAL</Tag>
      <Tag x="138" y="30" size="4.2" color={C.bad}>TOO CLOSE TO</Tag>
      <Tag x="138" y="35" size="4.2" color={C.bad}>THE MIDDLE</Tag>
      <Tag x="138" y="42" size="3.3" weight={600}>oncoming traffic,</Tag>
      <Tag x="138" y="46" size="3.3" weight={600}>looks like a right turn</Tag>
      <Arrow d="M34 38 L45 38" color={C.bad} w={1} />
      <Arrow d="M126 38 L79 38" color={C.bad} w={1} />
    </Frame>
  ),

  "right-turn-position": () => (
    <Frame title="Position for a right turn">
      <rect x="0" y="22" width="45" height="26" fill={C.ground} />
      <rect x="115" y="22" width="45" height="26" fill={C.road} />
      <VRoad />
      <rect x="115" y="22" width="45" height="26" fill={C.road} />
      <line x1="115" y1="35" x2="160" y2="35" stroke={C.line} strokeWidth="0.9" strokeDasharray="6 5" />
      <Car x="74" y="68" color={C.good} />
      <Arrow d="M74 58 L74 44 Q74 42 80 40 L140 40" />
      <Tag x="74" y="90" size="4.4">RIGHT TURN</Tag>
      <Tag x="74" y="96" size="3.5" weight={600}>just left of the centre line</Tag>
    </Frame>
  ),

  "left-turn": () => (
    <Frame title="Left turn">
      <VRoad />
      <rect x="0" y="22" width="45" height="26" fill={C.road} />
      <line x1="0" y1="35" x2="45" y2="35" stroke={C.line} strokeWidth="0.9" strokeDasharray="6 5" />
      <Car x="56" y="70" color={C.good} />
      <Arrow d="M56 60 L56 52 Q56 42 44 42 L14 42" />
      <Tag x="56" y="92" size="4.4">LEFT TURN</Tag>
      <Tag x="56" y="98" size="3.5" weight={600}>keep to the left</Tag>
    </Frame>
  ),

  "kerb-clearance": () => (
    <Frame title="Clearance for parked vehicles">
      <VRoad />
      <Car x="51" y="30" color={C.grey} door />
      <Car x="51" y="55" color={C.grey} />
      <Tag x="22" y="30" size="3.6" weight={700}>door opens</Tag>
      <Tag x="22" y="50" size="3.6" weight={700}>pedestrian</Tag>
      <Tag x="22" y="54" size="3.6" weight={700}>steps out</Tag>
      <Tag x="22" y="70" size="3.6" weight={700}>car moves off</Tag>
      <Car x="67" y="85" color={C.good} />
      <Arrow d="M67 75 L67 8" />
      <line x1="55.5" y1="42" x2="62.5" y2="42" stroke={C.good} strokeWidth="0.7" />
      <Tag x="59" y="40" size="3.4" color="#047857">≈1 m</Tag>
      <Tag x="138" y="45" size="4">SAME CLEARANCE</Tag>
      <Tag x="138" y="50" size="4">AS THE KERB</Tag>
    </Frame>
  ),

  "no-weaving": () => (
    <Frame title="Don't weave between parked cars">
      <VRoad />
      {[15, 38, 70].map(y => <Car key={y} x="51" y={y} color={C.grey} />)}
      <path d="M58 98 Q52 88 52 82 Q52 78 58 74 L60 58 Q52 54 52 50 Q52 46 60 44 L60 28" fill="none" stroke={C.bad} strokeWidth="1.2" strokeDasharray="2 1.6" />
      <Tag x="28" y="55" size="4" color={C.bad}>✗ WEAVING</Tag>
      <Arrow d="M67 98 L67 4" />
      <Tag x="136" y="55" size="4" color="#047857">✓ STEADY LINE</Tag>
    </Frame>
  ),

  "cyclist-room": () => (
    <Frame title="Room for cyclists">
      <VRoad />
      <text x="50" y="44" fontSize="8" textAnchor="middle">🚴</text>
      <Car x="68" y="80" color={C.good} />
      <Arrow d="M68 70 L68 58 Q68 48 72 42 L72 26 Q72 16 62 10 L62 2" />
      <line x1="54" y1="38" x2="66" y2="38" stroke={C.good} strokeWidth="0.7" />
      <Tag x="126" y="30" size="4">ENOUGH ROOM</Tag>
      <Tag x="126" y="36" size="3.4" weight={600}>for cyclists and other</Tag>
      <Tag x="126" y="41" size="3.4" weight={600}>vulnerable road users</Tag>
      <Tag x="126" y="62" size="3.3" weight={600}>check oncoming and following</Tag>
      <Tag x="126" y="67" size="3.3" weight={600}>traffic, signal in good time</Tag>
    </Frame>
  ),

  "following-distance": () => (
    <Frame title="Following distance">
      <VRoad />
      <Car x="62" y="18" color={C.blue} />
      <Car x="62" y="78" color={C.good} />
      <line x1="72" y1="27" x2="72" y2="69" stroke={C.good} strokeWidth="0.8" />
      <line x1="69" y1="27" x2="75" y2="27" stroke={C.good} strokeWidth="0.8" />
      <line x1="69" y1="69" x2="75" y2="69" stroke={C.good} strokeWidth="0.8" />
      <Tag x="136" y="44" size="4.4">SPACE IN FRONT</Tag>
      <Tag x="136" y="50" size="3.5" weight={600}>faster = bigger gap</Tag>
      <Tag x="24" y="20" size="3.6" weight={700}>may stop</Tag>
      <Tag x="24" y="25" size="3.6" weight={700}>suddenly</Tag>
      <Tag x="24" y="80" size="3.6" weight={700}>you</Tag>
    </Frame>
  ),

  /* ---------------- lanes ---------------- */
  "lane-arrows": () => (
    <Frame title="Lane arrows">
      <rect x="30" y="0" width="100" height="100" fill={C.road} />
      <line x1="63" y1="0" x2="63" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <line x1="97" y1="0" x2="97" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <line x1="30" y1="26" x2="130" y2="26" stroke={C.line} strokeWidth="1.4" />
      <LaneArrow x={46} y={52} kind="left" s={2.2} />
      <LaneArrow x={80} y={52} kind="ahead" s={2.2} />
      <LaneArrow x={114} y={52} kind="right" s={2.2} />
      <Tag x="46" y="82" size="4">TURN LEFT</Tag>
      <Tag x="80" y="82" size="4">AHEAD</Tag>
      <Tag x="114" y="82" size="4">TURN RIGHT</Tag>
      <Tag x="80" y="96" size="3.6" weight={600}>You must obey the arrows</Tag>
    </Frame>
  ),

  "lanes-at-junction": () => (
    <Frame title="Choosing your lane at a junction">
      <rect x="0" y="0" width="160" height="26" fill={C.road} />
      <rect x="45" y="26" width="70" height="74" fill={C.road} />
      <line x1="80" y1="26" x2="80" y2="100" stroke={C.line} strokeWidth="0.9" strokeDasharray="5 4" />
      <line x1="45" y1="26" x2="115" y2="26" stroke={C.line} strokeWidth="1.2" />
      <Car x="62" y="62" color={C.good} />
      <Car x="98" y="62" color={C.amber} />
      <Arrow d="M62 52 Q62 16 20 13" />
      <Arrow d="M62 52 L62 4" color="#059669" />
      <Arrow d="M98 52 Q98 16 145 13" color={C.amber} />
      <Tag x="62" y="84" size="4">LEFT LANE</Tag>
      <Tag x="62" y="90" size="3.3" weight={600}>turn left or ahead</Tag>
      <Tag x="98" y="84" size="4">RIGHT LANE</Tag>
      <Tag x="98" y="90" size="3.3" weight={600}>turn right, in good time</Tag>
    </Frame>
  ),

  "straddling": () => (
    <Frame title="Straddling lanes">
      <rect x="40" y="0" width="80" height="100" fill={C.road} />
      <line x1="80" y1="0" x2="80" y2="100" stroke={C.line} strokeWidth="0.9" strokeDasharray="5 4" />
      <Car x="60" y="30" color={C.good} />
      <Tag x="60" y="46" size="3.6" color="#047857">✓ centre of lane</Tag>
      <Car x="80" y="72" color={C.bad} />
      <Tag x="80" y="92" size="3.8" color={C.bad}>✗ STRADDLING TWO LANES</Tag>
    </Frame>
  ),

  "one-way": () => (
    <Frame title="Entering a one-way street">
      <rect x="0" y="30" width="160" height="40" fill={C.road} />
      <line x1="0" y1="50" x2="160" y2="50" stroke={C.line} strokeWidth="0.9" strokeDasharray="5 4" />
      <rect x="60" y="70" width="40" height="30" fill={C.road} />
      <Tag x="130" y="27" size="4.2">ONE-WAY  →</Tag>
      <Car x="72" y="88" color={C.good} />
      <Arrow d="M72 80 Q72 60 92 60 L150 60" />
      <Tag x="120" y="67" size="3.4">turning right → right-hand lane</Tag>
      <rect x="60" y="0" width="40" height="30" fill={C.road} />
      <Car x="88" y="12" rot={180} color={C.amber} />
      <Arrow d="M88 20 Q88 40 108 40 L150 40" color={C.amber} />
      <Tag x="126" y="36" size="3.4">turning left → left-hand lane</Tag>
    </Frame>
  ),

  "dual-carriageway": () => (
    <Frame title="Dual carriageway and central reservation">
      <rect x="0" y="8" width="160" height="34" fill={C.road} />
      <rect x="0" y="42" width="160" height="12" fill="#7aa35a" />
      <rect x="0" y="54" width="160" height="34" fill={C.road} />
      <line x1="0" y1="25" x2="160" y2="25" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <line x1="0" y1="71" x2="160" y2="71" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      {/* Driving on the left: traffic heading right (→) uses the top
          carriageway, its left lane on the outside, its right lane beside
          the central reservation. */}
      <Car x="40" y="16" rot={90} color={C.good} />
      <Arrow d="M52 16 L72 16" />
      <Car x="100" y="34" rot={90} color={C.amber} />
      <Arrow d="M112 34 L132 34" color={C.amber} />
      <Car x="120" y="80" rot={-90} color={C.grey} />
      <Arrow d="M108 80 L88 80" color={C.grey} w={1.2} />
      <Tag x="80" y="50" size="4.2" color="#14532d">CENTRAL RESERVATION</Tag>
      <Tag x="30" y="5" size="3.4">left lane: normal</Tag>
      <Tag x="112" y="5" size="3.4">right lane: overtake / turn right</Tag>
      <Tag x="120" y="96" size="3.4" weight={600} color="#475569">opposite direction</Tag>
    </Frame>
  ),

  "multi-lane": () => (
    <Frame title="Three-lane road">
      <rect x="30" y="0" width="100" height="100" fill={C.road} />
      <line x1="63" y1="0" x2="63" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <line x1="97" y1="0" x2="97" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <Car x="46" y="70" color={C.grey} />
      <Car x="80" y="60" color={C.good} />
      <Arrow d="M80 50 Q80 30 60 22 Q46 16 46 4" />
      <Tag x="46" y="92" size="3.5">LEFT: normal</Tag>
      <Tag x="80" y="92" size="3.5">MIDDLE / OUTSIDE</Tag>
      <Tag x="80" y="97" size="3.1" weight={600}>overtaking only — then return left</Tag>
    </Frame>
  ),

  /* Slip lanes are drawn with traffic running right-to-left, so the slip
     road is on the driver's left — as it is when driving on the left. The
     road is drawn mirrored; the labels are placed unmirrored. */
  "accel-lane": () => (
    <Frame title="Acceleration lane">
      <g transform="translate(160 0) scale(-1 1)">
        <rect x="0" y="16" width="160" height="30" fill={C.road} />
        <line x1="0" y1="31" x2="160" y2="31" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
        <path d="M0 90 Q40 56 80 50 L130 50 L150 46 L80 46 Q38 50 -2 80 Z" fill={C.road} />
        <path d="M0 92 Q42 58 80 56 L128 56 Q140 54 152 46" fill="none" stroke={C.road} strokeWidth="8" />
        <line x1="60" y1="46" x2="130" y2="46" stroke={C.line} strokeWidth="0.9" strokeDasharray="2 2" />
        <Car x="40" y="66" rot={62} color={C.good} />
        <Arrow d="M50 60 Q80 51 118 50 Q130 47 138 40" />
      </g>
      <Tag x="80" y="12" size="4">←  MAIN CARRIAGEWAY</Tag>
      <Tag x="48" y="66" size="4">ACCELERATION LANE</Tag>
      <Tag x="48" y="72" size="3.3" weight={600}>build up speed, then join</Tag>
    </Frame>
  ),

  "decel-lane": () => (
    <Frame title="Deceleration lane">
      <g transform="translate(160 0) scale(-1 1)">
        <rect x="0" y="16" width="160" height="30" fill={C.road} />
        <line x1="0" y1="31" x2="160" y2="31" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
        <path d="M30 46 L80 46 Q120 50 160 88 L160 96 Q118 58 80 54 L30 54 Z" fill={C.road} />
        <line x1="30" y1="46" x2="100" y2="46" stroke={C.line} strokeWidth="0.9" strokeDasharray="2 2" />
        <Car x="20" y="38" rot={90} color={C.good} />
        <Arrow d="M30 40 Q50 50 80 50 Q116 54 148 84" />
      </g>
      <Tag x="80" y="12" size="4">←  MAIN CARRIAGEWAY</Tag>
      <Tag x="90" y="68" size="4">DECELERATION LANE</Tag>
      <Tag x="90" y="74" size="3.3" weight={600}>slow down here, not on the main road</Tag>
      <Tag x="10" y="98" size="3.6">EXIT</Tag>
    </Frame>
  ),

  "two-plus-one": () => (
    <Frame title="2 + 1 road">
      <rect x="0" y="20" width="160" height="60" fill={C.road} />
      <line x1="0" y1="40" x2="160" y2="40" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <rect x="0" y="57" width="160" height="3" fill="#cbd5e1" />
      <line x1="0" y1="57" x2="160" y2="57" stroke="#334155" strokeWidth="0.4" />
      <line x1="0" y1="60" x2="160" y2="60" stroke="#334155" strokeWidth="0.4" />
      {/* Heading right: left lane on top, overtaking lane beside the barrier. */}
      <Car x="40" y="30" rot={90} color={C.grey} />
      <Car x="70" y="48" rot={90} color={C.good} />
      <Arrow d="M82 48 L104 48" />
      <Car x="110" y="70" rot={-90} color={C.amber} />
      <Arrow d="M98 70 L78 70" color={C.amber} />
      <Tag x="80" y="15" size="4">TWO LANES → overtaking zone</Tag>
      <Tag x="80" y="92" size="4">ONE LANE ← no overtaking</Tag>
      <Tag x="136" y="54" size="3.2" color="#334155">barrier</Tag>
    </Frame>
  ),

  /* ---------------- markings ---------------- */
  "hatched": () => (
    <Frame title="Hatched markings">
      <rect x="0" y="20" width="160" height="60" fill={C.road} />
      <defs>
        <clipPath id="hatchclip"><path d="M20 50 L70 42 L140 42 L140 58 L70 58 Z" /></clipPath>
      </defs>
      <path d="M20 50 L70 42 L140 42 L140 58 L70 58 Z" fill="none" stroke={C.line} strokeWidth="1" />
      <g clipPath="url(#hatchclip)">
        {Array.from({ length: 30 }, (_, i) => (
          <line key={i} x1={i * 5} y1="62" x2={i * 5 + 16} y2="38" stroke={C.line} strokeWidth="1" />
        ))}
      </g>
      <Car x="50" y="30" rot={90} color={C.good} />
      <Arrow d="M60 30 L100 30" />
      <Car x="110" y="70" rot={-90} color={C.grey} />
      <Tag x="80" y="12" size="4.4">HATCHED MARKINGS</Tag>
      <Tag x="80" y="92" size="3.8" color={C.bad}>Where hatching covers the road: do not enter</Tag>
    </Frame>
  ),

  "turning-box": () => (
    <Frame title="Turning box">
      <rect x="55" y="0" width="50" height="100" fill={C.road} />
      <rect x="0" y="30" width="160" height="34" fill={C.road} />
      <line x1="80" y1="64" x2="80" y2="100" stroke={C.line} strokeWidth="0.9" strokeDasharray="5 4" />
      <rect x="70" y="36" width="20" height="22" fill="none" stroke={C.line} strokeWidth="1" strokeDasharray="2 1.4" />
      <path d="M78 54 L78 44 Q78 41 82 41 L86 41 M84 38.8 L87 41 L84 43.2" fill="none" stroke={C.line} strokeWidth="1" />
      <Car x="80" y="47" color={C.good} />
      <Arrow d="M86 45 Q96 42 140 40" dash="2 2" />
      <circle cx="112" cy="72" r="3.2" fill="#111827" />
      <circle cx="112" cy="72" r="1.8" fill="#22c55e" />
      <Tag x="30" y="80" size="4.2">TURNING BOX</Tag>
      <Tag x="30" y="86" size="3.3" weight={600}>wait over the box</Tag>
      <Tag x="30" y="91" size="3.3" weight={600}>to turn right</Tag>
    </Frame>
  ),

  /* ---------------- hazards & observation ---------------- */
  "restricted-view": () => (
    <Frame title="Restricted view">
      <path d="M50 100 L50 55 Q50 20 90 16 L160 14 L160 34 L92 36 Q72 40 72 60 L72 100 Z" fill={C.road} />
      <path d="M72 100 L72 60 Q72 40 92 36 L160 34" fill="none" stroke={C.line} strokeWidth="0" />
      <path d="M78 100 L78 62 Q80 46 98 42 L160 40 L160 100 Z" fill="#4d7c0f" />
      <Tag x="120" y="72" size="4" color="#f7fee7">hedge / wall</Tag>
      <Car x="61" y="84" color={C.good} />
      <path d="M61 76 L100 38" stroke={C.amber} strokeWidth="0.9" strokeDasharray="2 1.5" />
      <path d="M61 76 L66 18" stroke={C.amber} strokeWidth="0.9" strokeDasharray="2 1.5" />
      <Car x="120" y="24" rot={-90} color={C.bad} ghost />
      <Tag x="120" y="10" size="3.4" color={C.bad}>can't be seen</Tag>
      <Tag x="30" y="42" size="4.4" color="#b45309">RESTRICTED</Tag>
      <Tag x="30" y="48" size="4.4" color="#b45309">VIEW</Tag>
    </Frame>
  ),

  "zone-of-vision": () => (
    <Frame title="Zone of vision">
      <VRoad />
      <path d="M62 64 L20 0 L140 0 Z" fill={C.amber} opacity="0.22" />
      <path d="M62 64 L20 0 M62 64 L140 0" stroke={C.amber} strokeWidth="0.7" strokeDasharray="2 1.5" />
      <path d="M62 74 L50 100 L74 100 Z" fill={C.blue} opacity="0.18" />
      <Car x="62" y="70" color={C.good} />
      <Tag x="80" y="22" size="4.4" color="#92400e">ZONE OF VISION</Tag>
      <Tag x="80" y="28" size="3.4" weight={600}>what can be seen from the vehicle</Tag>
      <Tag x="130" y="92" size="3.2" weight={600} color="#1e40af">mirrors: behind</Tag>
    </Frame>
  ),

  "manoeuvre": () => (
    <Frame title="A manoeuvre: a change of course or speed">
      <VRoad />
      <Car x="51" y="40" color={C.grey} />
      <Car x="56" y="88" color={C.good} />
      <Arrow d="M56 78 L56 62 Q56 54 66 50 L66 30 Q66 24 56 18 L56 4" />
      <Tag x="130" y="36" size="4.2">CHANGE OF COURSE</Tag>
      <Tag x="130" y="60" size="4.2">OR SPEED</Tag>
      <Tag x="130" y="66" size="3.3" weight={600}>= a manoeuvre</Tag>
    </Frame>
  ),

  "hazard-types": () => (
    <Frame title="The four kinds of hazard">
      <path d="M40 100 L40 40 Q40 10 80 8 L160 6 L160 24 L82 26 Q62 28 62 50 L62 100 Z" fill={C.road} />
      <path d="M62 100 L62 50 Q62 28 82 26 L160 24" fill="none" />
      <circle cx="54" cy="18" r="6" fill="none" stroke={C.amber} strokeWidth="1" />
      <Tag x="22" y="14" size="3.6" color="#92400e">PERMANENT</Tag>
      <Tag x="22" y="19" size="3" weight={600}>bend, junction</Tag>
      <text x="56" y="56" fontSize="7" textAnchor="middle">🚧</text>
      <Tag x="22" y="54" size="3.6" color="#92400e">SEMI-</Tag>
      <Tag x="22" y="59" size="3.6" color="#92400e">PERMANENT</Tag>
      <text x="72" y="72" fontSize="7" textAnchor="middle">🚶</text>
      <Tag x="118" y="72" size="3.6" color="#92400e">MOVING</Tag>
      <Tag x="118" y="77" size="3" weight={600}>pedestrians, cyclists, animals</Tag>
      <ellipse cx="51" cy="88" rx="9" ry="3" fill="#60a5fa" opacity="0.7" />
      <Tag x="22" y="90" size="3.6" color="#92400e">SURFACE</Tag>
      <Tag x="22" y="95" size="3" weight={600}>weather, road surface</Tag>
      <Tag x="118" y="44" size="3.6">…anything that may</Tag>
      <Tag x="118" y="49" size="3.6">make you change</Tag>
      <Tag x="118" y="54" size="3.6">speed or direction</Tag>
    </Frame>
  ),

  "mspsl": () => (
    <Frame title="The MSPSL hazard routine" h={60}>
      {[
        ["🪞", "MIRRORS"], ["🔆", "SIGNAL"], ["↔️", "POSITION"], ["⏱️", "SPEED"], ["👁️", "LOOK"],
      ].map(([icon, label], i) => (
        <g key={label} transform={`translate(${16 + i * 32} 0)`}>
          <circle cx="0" cy="24" r="12" fill="#ffffff" stroke={C.good} strokeWidth="1.2" />
          <text x="0" y="28.5" fontSize="12" textAnchor="middle">{icon}</text>
          <Tag x="0" y="48" size="4.2">{label}</Tag>
          {i < 4 && <path d={`M14 24 L${18} 24`} stroke={C.good} strokeWidth="1.4" />}
        </g>
      ))}
    </Frame>
  ),

  /* ---------------- signals ---------------- */
  "rear-lights": ({ variant = "indicator" }) => {
    const L = { indicator: [C.amber, null], stop: ["#dc2626", "#dc2626"], hazard: [C.amber, C.amber], reversing: ["#f8fafc", "#f8fafc"] }[variant];
    const names = { indicator: "INDICATOR", stop: "STOP LIGHTS", hazard: "HAZARD WARNING LIGHTS", reversing: "REVERSING LIGHTS" };
    const means = { indicator: "I intend to turn, change lane or stop", stop: "I'm slowing down or stopping", hazard: "I'm temporarily blocking traffic", reversing: "I intend to reverse" };
    return (
      <Frame title={names[variant]}>
        <rect x="45" y="30" width="70" height="36" rx="8" fill={C.blue} stroke="#0f172a" strokeWidth="0.6" />
        <rect x="55" y="18" width="50" height="16" rx="5" fill="#1d4ed8" />
        <rect x="59" y="21" width="42" height="10" rx="3" fill="#bfdbfe" />
        <rect x="68" y="52" width="24" height="7" rx="1" fill="#f8fafc" stroke="#0f172a" strokeWidth="0.4" />
        {[[52, L[0]], [100, L[1]]].map(([x, col], i) => (
          <g key={i}>
            <rect x={x} y="38" width="8" height="6" rx="1.4" fill={col || "#7f1d1d"} stroke="#0f172a" strokeWidth="0.4"
              className={col && variant !== "stop" && variant !== "reversing" ? "vis-blink" : ""} />
            {col && <circle cx={x + 4} cy="41" r="7" fill={col} opacity="0.25" className={variant !== "stop" && variant !== "reversing" ? "vis-blink" : ""} />}
          </g>
        ))}
        <rect x="50" y="66" width="12" height="8" rx="2" fill="#111827" />
        <rect x="98" y="66" width="12" height="8" rx="2" fill="#111827" />
        <Tag x="80" y="86" size="4.8">{names[variant]}</Tag>
        <Tag x="80" y="93" size="3.6" weight={600}>{means[variant]}</Tag>
      </Frame>
    );
  },

  "flashing-headlights": () => (
    <Frame title="Flashing headlights">
      <rect x="0" y="36" width="160" height="30" fill={C.road} />
      <Car x="38" y="51" rot={90} color={C.amber} />
      <path d="M46 47 L70 38 M46 51 L72 51 M46 55 L70 64" stroke="#fde047" strokeWidth="1.3" strokeLinecap="round" />
      <Car x="120" y="51" rot={-90} color={C.good} />
      <Tag x="80" y="18" size="4.6">FLASHING HEADLIGHTS</Tag>
      <Tag x="80" y="25" size="3.8" color="#047857">= "be aware of my presence"</Tag>
      <Tag x="80" y="82" size="3.8" color={C.bad}>✗ not an instruction  ✗ not "go ahead"</Tag>
      <Tag x="80" y="90" size="3.4" weight={600}>decide for yourself whether it's safe</Tag>
    </Frame>
  ),

  "zebra": () => (
    <Frame title="Zebra crossing">
      <VRoad />
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} x={47 + i * 10} y="24" width="6" height="16" fill={C.line} />
      ))}
      <rect x="36" y="18" width="3" height="28" fill="#111827" />
      <circle cx="37.5" cy="16" r="3.4" fill={C.amber} />
      <text x="36" y="36" fontSize="7" textAnchor="middle">🚶</text>
      <Car x="62" y="56" color={C.good} />
      <Car x="62" y="80" color={C.grey} />
      <Tag x="130" y="56" size="3.8">lead vehicle</Tag>
      <Tag x="130" y="61" size="3.3" weight={600}>an arm signal can help</Tag>
      <Tag x="130" y="80" size="3.3" weight={600}>following traffic</Tag>
      <Tag x="80" y="10" size="4.4">ZEBRA CROSSING</Tag>
    </Frame>
  ),

  "side-roads": () => (
    <Frame title="Signalling near several side roads">
      <VRoad />
      <rect x="0" y="62" width="45" height="12" fill={C.road} />
      <rect x="0" y="26" width="45" height="12" fill={C.road} />
      <Car x="20" y="68" rot={90} color={C.amber} />
      <Car x="56" y="92" color={C.good} />
      <Arrow d="M56 84 L56 50 Q56 46 51 44" />
      <rect x="47" y="40" width="12" height="7" rx="1" fill="none" stroke={C.good} strokeWidth="0.7" strokeDasharray="1.5 1" />
      <Tag x="80" y="52" size="3.6" anchor="start">stopping here</Tag>
      <Tag x="30" y="84" size="3.4" color={C.bad}>signal too early here…</Tag>
      <Tag x="30" y="58" size="3.4" color={C.bad}>…this driver may pull out</Tag>
      <Tag x="115" y="20" size="3.8">Delay the signal</Tag>
      <Tag x="115" y="26" size="3.8">until you've passed</Tag>
      <Tag x="115" y="32" size="3.8">the side road</Tag>
    </Frame>
  ),
};

/* The list, for the glossary and for checking content refers to real ids. */
export const VISUAL_IDS = Object.keys(DRAW);

/* `id` may carry a variant after a colon: "rear-lights:stop".
   `bare` hides the labels. */
export function Visual({ id, className = "", bare = false }) {
  if (!id) return null;
  const [name, variant] = String(id).split(":");
  const draw = DRAW[name];
  if (!draw) return null;
  return (
    <div className={`rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 ${className}`}>
      <BareContext.Provider value={bare}>{draw({ variant })}</BareContext.Provider>
    </div>
  );
}

/* One drawing or several (`visuals: [...]`), stacked. */
export function Visuals({ ids, className = "", gap = "space-y-2" }) {
  const list = (Array.isArray(ids) ? ids : [ids]).filter(Boolean);
  if (!list.length) return null;
  return (
    <div className={`${gap} ${className}`}>
      {list.map(id => <Visual key={id} id={id} />)}
    </div>
  );
}
