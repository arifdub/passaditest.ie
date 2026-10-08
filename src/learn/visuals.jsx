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

/* A car seen from the side, wheels on the ground at (x, y), tilted `rot`
   degrees (negative = nose up), facing right unless `flip`. */
function SideCar({ x, y, rot = 0, color = C.blue, ghost, flip }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${flip ? -1 : 1} 1)`} opacity={ghost ? 0.45 : 1}>
      <path d="M-11 -3 L-11 -7 Q-10 -9 -7 -9 L-4 -13 Q-3 -14 -1 -14 L5 -14 Q7 -14 8 -12 L10 -9 Q12 -9 12 -7 L12 -3 Z"
        fill={color} stroke="#0f172a" strokeWidth="0.4" />
      <path d="M-3 -9.5 L-1 -12.6 L4 -12.6 L6.5 -9.5 Z" fill="#e0f2fe" />
      <circle cx="-6.5" cy="-2.6" r="2.6" fill="#111827" />
      <circle cx="7" cy="-2.6" r="2.6" fill="#111827" />
    </g>
  );
}

/* A top-down car with its front wheels turned `steer` degrees
   (negative = left), for the hill-parking drawings. */
function WheelCar({ x, y, steer = 0, color = C.good }) {
  /* Wheels drawn on top and outside the body, front pair turned and
     highlighted, so the direction reads at a glance. */
  const wheel = (wx, wy, a, front) => (
    <rect x={wx - 1.5} y={wy - 3.2} width="3" height="6.4" rx="0.8"
      fill={front ? "#f59e0b" : "#111827"} stroke="#0f172a" strokeWidth="0.4"
      transform={`rotate(${a} ${wx} ${wy})`} />
  );
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-4.6" y="-10" width="9.2" height="20" rx="2.6" fill={color} stroke="#0f172a" strokeWidth="0.35" />
      <rect x="-3.4" y="-6.6" width="6.8" height="3.6" rx="0.8" fill="#e0f2fe" />
      <rect x="-3.4" y="3.6" width="6.8" height="2.8" rx="0.8" fill="#e0f2fe" />
      {wheel(-5.6, -6.5, steer, true)}{wheel(5.6, -6.5, steer, true)}
      {wheel(-5.6, 6.5, 0)}{wheel(5.6, 6.5, 0)}
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

/* A lorry seen from above, centred on (x, y), facing up the page:
   cab at the front, a "LONG VEHICLE" plate at the back if `long`. */
function Lorry({ x, y, len = 28, color = "#64748b", long }) {
  const t = -len / 2;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-5.2" y={t + 6} width="10.4" height={len - 6} rx="1" fill={color} stroke="#0f172a" strokeWidth="0.35" />
      <rect x="-4.8" y={t} width="9.6" height="5.4" rx="1.6" fill="#334155" stroke="#0f172a" strokeWidth="0.35" />
      <rect x="-3.8" y={t + 0.8} width="7.6" height="1.8" rx="0.5" fill="#e0f2fe" />
      {long && <rect x="-4.4" y={-t - 2.6} width="8.8" height="2.2" fill="#facc15" stroke="#dc2626" strokeWidth="0.5" />}
    </g>
  );
}

/* Blinking right-hand indicators on a top-down car facing up at (x, y). */
function RightIndicator({ x, y }) {
  return (
    <g className="vis-blink">
      <rect x={x + 3} y={y - 7.8} width="2" height="1.8" rx="0.4" fill={C.amber} />
      <rect x={x + 3} y={y + 6} width="2" height="1.8" rx="0.4" fill={C.amber} />
    </g>
  );
}

/* Railway tracks across the picture at height y; sleepers show off the road
   (between `from` and `to` the rails cross a road surface). */
function Rails({ y, from = 40, to = 120 }) {
  const sleepers = [];
  for (let x = 1; x < 160; x += 5) if (x < from || x > to) sleepers.push(<rect key={x} x={x} y={y - 6} width="2" height="12" fill="#8b6b4a" />);
  return (
    <g>
      <rect x="0" y={y - 7} width={from} height="14" fill="#b8b2a7" />
      <rect x={to} y={y - 7} width={160 - to} height="14" fill="#b8b2a7" />
      {sleepers}
      <line x1="0" y1={y - 3} x2="160" y2={y - 3} stroke="#1f2937" strokeWidth="1" />
      <line x1="0" y1={y + 3} x2="160" y2={y + 3} stroke="#1f2937" strokeWidth="1" />
    </g>
  );
}

/* A train on horizontal rails, nose at x, heading right (or left if `left`). */
function Train({ x, y, left, len = 34 }) {
  const x0 = left ? x : x - len;
  return (
    <g>
      <rect x={x0} y={y - 5} width={len} height="10" rx="2" fill="#15803d" stroke="#0f172a" strokeWidth="0.4" />
      <rect x={left ? x0 : x0 + len - 4} y={y - 5} width="4" height="10" rx="1.5" fill="#facc15" stroke="#0f172a" strokeWidth="0.4" />
    </g>
  );
}

/* A tram seen from above, centred on (x, y), facing `rot` (0 = up). */
function Tram({ x, y, rot = 0, len = 46 }) {
  const t = -len / 2;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <rect x="-5.5" y={t} width="11" height={len} rx="3" fill="#cbd5e1" stroke="#0f172a" strokeWidth="0.4" />
      <rect x="-5.5" y={t} width="11" height="4" rx="2" fill="#facc15" />
      <rect x="-5.5" y={-t - 4} width="11" height="4" rx="2" fill="#facc15" />
      {[0.3, 0.6].map(f => <line key={f} x1="-5.5" y1={t + len * f} x2="5.5" y2={t + len * f} stroke="#64748b" strokeWidth="0.5" />)}
    </g>
  );
}

/* A yellow box: crosshatched yellow lines in a rectangle. */
function YellowBox({ x, y, w, h }) {
  const id = useId().replace(/:/g, "");
  const lines = [];
  for (let i = -h; i < w + h; i += 6) {
    lines.push(<line key={"a" + i} x1={x + i} y1={y} x2={x + i + h} y2={y + h} stroke="#facc15" strokeWidth="0.8" />);
    lines.push(<line key={"b" + i} x1={x + i + h} y1={y} x2={x + i} y2={y + h} stroke="#facc15" strokeWidth="0.8" />);
  }
  return (
    <g>
      <defs><clipPath id={`yb${id}`}><rect x={x} y={y} width={w} height={h} /></clipPath></defs>
      <rect x={x} y={y} width={w} height={h} fill="none" stroke="#facc15" strokeWidth="1.1" />
      <g clipPath={`url(#yb${id})`}>{lines}</g>
    </g>
  );
}

/* A level-crossing light post seen from above, with twin red lights. */
function CrossingLights({ x, y, on = true }) {
  return (
    <g>
      <rect x={x - 4} y={y - 2.5} width="8" height="5" rx="1.5" fill="#111827" />
      <circle cx={x - 2} cy={y} r="1.5" fill="#ef4444" className={on ? "vis-blink" : ""} />
      <circle cx={x + 2} cy={y} r="1.5" fill="#ef4444" className={on ? "vis-blink" : ""} />
    </g>
  );
}

/* A red-and-white barrier from (x1, y) to (x2, y). */
function Barrier({ x1, x2, y }) {
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="#dc2626" strokeWidth="2.2" strokeDasharray="3 3" />
      <circle cx={x1} cy={y} r="2" fill="#334155" />
    </g>
  );
}

/* A motorway seen from above, traffic going up the page on the left-hand
   carriageway: hard shoulder (x 24–36), three lanes (36–96), central
   reservation (96–104), and the opposite carriageway faded on the right. */
function Motorway({ h = 100, studs = false, other = true }) {
  const dots = (x, color) => Array.from({ length: Math.ceil(h / 10) }, (_, i) => (
    <circle key={x + "-" + i} cx={x} cy={5 + i * 10} r="0.9" fill={color} />
  ));
  return (
    <g>
      <rect x="24" y="0" width="12" height={h} fill="#6b7280" />
      <rect x="36" y="0" width="60" height={h} fill={C.road} />
      <line x1="36" y1="0" x2="36" y2={h} stroke="#facc15" strokeWidth="0.9" />
      <line x1="96" y1="0" x2="96" y2={h} stroke="#facc15" strokeWidth="0.9" />
      {[56, 76].map(x => <line key={x} x1={x} y1="0" x2={x} y2={h} stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />)}
      <rect x="96.5" y="0" width="7" height={h} fill="#7aa35a" />
      <line x1="100" y1="0" x2="100" y2={h} stroke="#cbd5e1" strokeWidth="1.4" />
      {other && <rect x="104" y="0" width="56" height={h} fill={C.road} opacity="0.45" />}
      {studs && <g>{dots(56, "#ffffff")}{dots(76, "#ffffff")}{dots(37.5, "#ef4444")}{dots(94.5, "#f59e0b")}</g>}
    </g>
  );
}

/* A blue motorway countdown board with `n` white bars. */
function ExitMarker({ x, y, n }) {
  return (
    <g>
      <rect x={x - 4} y={y - 8} width="8" height="16" rx="0.8" fill="#1d4ed8" stroke="#ffffff" strokeWidth="0.5" />
      {Array.from({ length: n }, (_, i) => (
        <line key={i} x1={x - 2.4} y1={y + 5 - i * 4.6} x2={x + 2.4} y2={y + 1.8 - i * 4.6} stroke="#ffffff" strokeWidth="1.3" />
      ))}
    </g>
  );
}

/* The motorway symbol (white, on a blue square) centred at (x, y). */
function MotorwaySymbol({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-9 10 L-3 -6 L-1 -6 L-5 10 Z M9 10 L3 -6 L1 -6 L5 10 Z" fill="#ffffff" />
      <rect x="-10" y="-9" width="20" height="3" fill="#ffffff" />
      <rect x="-0.6" y="0" width="1.2" height="3" fill="#ffffff" />
      <rect x="-0.6" y="5" width="1.2" height="3" fill="#ffffff" />
    </g>
  );
}

/* A headlight beam from a car facing up the page at (x, y).
   kind: "dipped" (short, aimed down and to the left) or "main" (long). */
function Beam({ x, y, kind = "dipped", reach }) {
  const id = useId().replace(/:/g, "");
  const r = reach ?? (kind === "main" ? 84 : 34);
  const pts = kind === "main"
    ? `${x - 3},${y - 7} ${x + 3},${y - 7} ${x + 13},${y - r} ${x - 13},${y - r}`
    : `${x - 3},${y - 7} ${x + 3},${y - 7} ${x + 3},${y - r} ${x - 13},${y - r + 3}`;
  return (
    <g>
      <defs>
        <linearGradient id={`bm${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#fde68a" stopOpacity="0.85" />
          <stop offset="1" stopColor="#fde68a" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <polygon points={pts} fill={`url(#bm${id})`} />
    </g>
  );
}

/* A night-time ground for the drawings: dark verges. */
function Night() {
  return <rect x="0" y="0" width="160" height="100" fill="#1e293b" />;
}

/* A fog bank fading in from `y0` (clear) up to the top of the frame. */
function Fog({ y0 = 100, top = 0.92 }) {
  const id = useId().replace(/:/g, "");
  return (
    <g>
      <defs>
        <linearGradient id={`fg${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#f8fafc" stopOpacity="0.15" />
          <stop offset="1" stopColor="#f8fafc" stopOpacity={top} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="160" height={y0} fill={`url(#fg${id})`} />
    </g>
  );
}

/* A ring of items (icon + label), 3 per row — for checklists and bans. */
function IconGrid({ cells, ring = C.bad, rows = 3, size = 9 }) {
  const cols = 3, rowH = 100 / rows;
  return cells.map(([icon, label], i) => {
    const x = 27 + (i % cols) * 53;
    const y = rowH * Math.floor(i / cols) + rowH * 0.42;
    return (
      <g key={label}>
        <circle cx={x} cy={y} r={size} fill="#ffffff" stroke={ring} strokeWidth="1.2" />
        {icon === "L"
          ? <g><rect x={x - size * 0.55} y={y - size * 0.55} width={size * 1.1} height={size * 1.1} fill="#ffffff" stroke="#dc2626" strokeWidth="0.6" /><text x={x} y={y + size * 0.37} fontSize={size} fontWeight="900" textAnchor="middle" fill="#dc2626" fontFamily="system-ui">L</text></g>
          : <text x={x} y={y + size * 0.37} fontSize={size * 1.05} textAnchor="middle">{icon}</text>}
        <Tag x={x} y={y + size + 5.5} size="3.3" weight={700}>{label}</Tag>
      </g>
    );
  });
}

/* A tunnel bore seen from above: walls either side, two lanes going up the
   page (one direction), lights along the roof. */
function TunnelBore({ h = 100 }) {
  return (
    <g>
      <rect x="0" y="0" width="160" height={h} fill="#1f2937" />
      <rect x="40" y="0" width="80" height={h} fill={C.road} />
      <rect x="34" y="0" width="6" height={h} fill="#9ca3af" />
      <rect x="120" y="0" width="6" height={h} fill="#9ca3af" />
      <line x1="80" y1="0" x2="80" y2={h} stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      {Array.from({ length: Math.ceil(h / 14) }, (_, i) => (
        <rect key={i} x="78.5" y={4 + i * 14} width="3" height="1.4" fill="#fef9c3" opacity="0.8" />
      ))}
    </g>
  );
}

/* A row of numbered step chips, wrapping onto a second row if needed. */
function StepChips({ steps, y = 30, perRow = 4, color = "#047857", start = 1 }) {
  const w = 160 / perRow;
  return steps.map((t, i) => {
    const col = i % perRow, row = Math.floor(i / perRow);
    const x = col * w + w / 2, yy = y + row * 34;
    return (
      <g key={i}>
        <circle cx={x} cy={yy} r="9" fill={color} />
        <text x={x} y={yy + 3.6} fontSize="10" fontWeight="900" textAnchor="middle" fill="#ffffff" fontFamily="system-ui">{i + start}</text>
        <Tag x={x} y={yy + 16} size="3.3" weight={800}>{t}</Tag>
        {col < perRow - 1 && i < steps.length - 1 && <path d={`M${x + 11} ${yy} L${x + w - 11} ${yy}`} stroke={color} strokeWidth="1" strokeDasharray="2 1.6" />}
      </g>
    );
  });
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

  /* ---------------- bends (Unit 1.4) ---------------- */
  "bend-left": () => (
    <Frame title="Left-hand bend: centre of your lane">
      <path d="M80 100 L80 58 Q80 24 44 24 L0 24" fill="none" stroke={C.road} strokeWidth="38" />
      <path d="M80 100 L80 58 Q80 24 44 24 L0 24" fill="none" stroke={C.line} strokeWidth="0.9" strokeDasharray="6 5" />
      <Car x="70.5" y="84" color={C.good} />
      <Arrow d="M70.5 74 L70.5 58 Q70.5 33 44 33 L10 33" />
      <Tag x="126" y="50" size="4.4">LEFT-HAND BEND</Tag>
      <Tag x="126" y="56" size="3.6" weight={600}>keep to the centre</Tag>
      <Tag x="126" y="61" size="3.6" weight={600}>of your lane</Tag>
    </Frame>
  ),

  "bend-right": () => (
    <Frame title="Right-hand bend: keep to the left">
      <path d="M80 100 L80 58 Q80 24 116 24 L160 24" fill="none" stroke={C.road} strokeWidth="38" />
      <path d="M80 100 L80 58 Q80 24 116 24 L160 24" fill="none" stroke={C.line} strokeWidth="0.9" strokeDasharray="6 5" />
      <Car x="66" y="84" color={C.good} />
      <Arrow d="M66 74 L66 58 Q66 10 116 10 L154 10" />
      <Tag x="30" y="50" size="4.4">RIGHT-HAND</Tag>
      <Tag x="30" y="56" size="4.4">BEND</Tag>
      <Tag x="30" y="63" size="3.6" weight={600}>keep to the left —</Tag>
      <Tag x="30" y="68" size="3.6" weight={600}>best view round it</Tag>
    </Frame>
  ),

  "bend-speed": () => (
    <Frame title="Speed through a bend">
      <path d="M20 100 L20 70 Q20 30 60 30 L160 30" fill="none" stroke={C.road} strokeWidth="30" />
      <path d="M20 100 L20 70 Q20 30 60 30 L160 30" fill="none" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <circle cx="14" cy="88" r="3" fill={C.amber} />
      <circle cx="18" cy="52" r="3" fill={C.bad} />
      <circle cx="46" cy="36" r="3" fill={C.good} />
      <circle cx="110" cy="36" r="3" fill={C.good} />
      <Tag x="58" y="84" size="3.6" anchor="start">① slow down in good time</Tag>
      <Tag x="30" y="62" size="3.6" anchor="start">② lowest speed as you enter</Tag>
      <Tag x="52" y="50" size="3.6" anchor="start">③ drive round "under acceleration"</Tag>
      <Tag x="92" y="18" size="3.6" anchor="start">④ mirrors, make progress</Tag>
    </Frame>
  ),

  /* ---------------- junctions (Unit 1.4) ---------------- */
  "junction-t": () => (
    <Frame title="T-junction">
      <rect x="0" y="24" width="160" height="30" fill={C.road} />
      <line x1="0" y1="39" x2="160" y2="39" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <rect x="65" y="54" width="30" height="46" fill={C.road} />
      <line x1="80" y1="62" x2="80" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <line x1="65" y1="56" x2="80" y2="56" stroke={C.line} strokeWidth="1" strokeDasharray="2 1.5" />
      <Car x="72" y="72" color={C.good} />
      <Arrow d="M72 62 Q72 46 56 46 L20 46" dash="2 1.5" />
      <Arrow d="M72 62 Q74 34 100 32 L140 32" color={C.amber} dash="2 1.5" />
      <Tag x="80" y="16" size="4.8">T-JUNCTION</Tag>
      <Tag x="130" y="76" size="3.4" weight={600}>emerging from the</Tag>
      <Tag x="130" y="81" size="3.4" weight={600}>minor road</Tag>
    </Frame>
  ),

  "junction-y": () => (
    <Frame title="Y-junction">
      <rect x="0" y="22" width="160" height="30" fill={C.road} />
      <line x1="0" y1="37" x2="160" y2="37" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <path d="M120 100 L84 52" stroke={C.road} strokeWidth="26" />
      <path d="M120 100 L90 60" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <Tag x="40" y="12" size="4.8">Y-JUNCTION</Tag>
      <Tag x="44" y="76" size="3.4" weight={600}>a road joining at an angle</Tag>
    </Frame>
  ),

  "junction-cross": () => (
    <Frame title="Crossroads">
      <rect x="0" y="35" width="160" height="30" fill={C.road} />
      <rect x="65" y="0" width="30" height="100" fill={C.road} />
      <line x1="0" y1="50" x2="65" y2="50" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <line x1="95" y1="50" x2="160" y2="50" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <line x1="80" y1="0" x2="80" y2="35" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <line x1="80" y1="65" x2="80" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <Tag x="32" y="20" size="4.8">CROSSROADS</Tag>
      <Tag x="126" y="84" size="3.4" weight={600}>four ways — watch</Tag>
      <Tag x="126" y="89" size="3.4" weight={600}>for emerging traffic</Tag>
    </Frame>
  ),

  /* Both turning right at a crossroads, right side to right side: each
     drives past the other, then turns behind it. Driving on the left, so
     northbound traffic is on the left half, eastbound on the upper half. */
  "right-turns-offside": () => (
    <Frame title="Both turning right: right side to right side">
      <rect x="0" y="30" width="160" height="40" fill={C.road} />
      <rect x="60" y="0" width="40" height="100" fill={C.road} />
      <line x1="0" y1="50" x2="60" y2="50" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <line x1="100" y1="50" x2="160" y2="50" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <line x1="80" y1="0" x2="80" y2="30" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <line x1="80" y1="70" x2="80" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      {/* where they came from */}
      <path d="M72 98 L72 60" stroke={C.good} strokeWidth="0.9" strokeDasharray="1.5 1.5" />
      <path d="M88 2 L88 40" stroke={C.amber} strokeWidth="0.9" strokeDasharray="1.5 1.5" />
      <Car x="72" y="51" color={C.good} />
      <Car x="88" y="49" rot={180} color={C.amber} />
      {/* each turns behind the other */}
      <Arrow d="M72 43 Q72 38 80 38 L152 38" />
      <Arrow d="M88 57 Q88 62 80 62 L8 62" color={C.amber} />
      <Tag x="128" y="14" size="4.2">RIGHT SIDE TO RIGHT SIDE</Tag>
      <Tag x="128" y="20" size="3.4" weight={600}>pass each other, turn behind</Tag>
      <Tag x="34" y="86" size="3.4" weight={600}>both get a clear view</Tag>
      <Tag x="34" y="91" size="3.4" weight={600}>of approaching traffic</Tag>
    </Frame>
  ),

  "junction-staggered": () => (
    <Frame title="Staggered junction">
      <rect x="65" y="0" width="30" height="100" fill={C.road} />
      <line x1="80" y1="0" x2="80" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <rect x="0" y="62" width="65" height="22" fill={C.road} />
      <rect x="95" y="16" width="65" height="22" fill={C.road} />
      <Tag x="130" y="60" size="4.4">STAGGERED</Tag>
      <Tag x="130" y="66" size="4.4">JUNCTION</Tag>
      <Tag x="32" y="96" size="3.3" weight={600}>side roads offset,</Tag>
      <Tag x="130" y="76" size="3.3" weight={600}>not opposite each other</Tag>
    </Frame>
  ),

  "roundabout": () => (
    <Frame title="Roundabout">
      <rect x="68" y="0" width="24" height="100" fill={C.road} />
      <rect x="0" y="38" width="160" height="24" fill={C.road} />
      <circle cx="80" cy="50" r="30" fill={C.road} />
      <circle cx="80" cy="50" r="13" fill="#7aa35a" stroke={C.line} strokeWidth="0.8" />
      {/* clockwise flow */}
      <Arrow d="M80 27 A23 23 0 0 1 103 50" w={1.4} />
      <Arrow d="M103 50 A23 23 0 0 1 80 73" w={1.4} />
      <Arrow d="M80 73 A23 23 0 0 1 57 50" w={1.4} />
      <Arrow d="M57 50 A23 23 0 0 1 80 27" w={1.4} />
      <line x1="68" y1="80.5" x2="80" y2="80.5" stroke={C.line} strokeWidth="1" strokeDasharray="2 1.5" />
      <Car x="74" y="92" color={C.amber} />
      <Tag x="130" y="16" size="4.6">ROUNDABOUT</Tag>
      <Tag x="130" y="82" size="3.4" weight={600}>give way to traffic</Tag>
      <Tag x="130" y="87" size="3.4" weight={600}>from the right</Tag>
      <Tag x="30" y="16" size="3.2" weight={600}>clockwise flow</Tag>
    </Frame>
  ),

  "roundabout-lanes": () => (
    <Frame title="Lanes on approach to a roundabout">
      <rect x="50" y="46" width="60" height="54" fill={C.road} />
      <circle cx="80" cy="18" r="30" fill={C.road} />
      <circle cx="80" cy="18" r="12" fill="#7aa35a" />
      <line x1="70" y1="54" x2="70" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <line x1="90" y1="54" x2="90" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <LaneArrow x={60} y={78} kind="left" s={1.6} />
      <LaneArrow x={80} y={78} kind="ahead" s={1.6} />
      <LaneArrow x={100} y={78} kind="right" s={1.6} />
      <Tag x="26" y="72" size="3.5" weight={700}>LEFT lane:</Tag>
      <Tag x="26" y="77" size="3.3" weight={600}>turn left</Tag>
      <Tag x="26" y="86" size="3.3" weight={600}>(left or middle</Tag>
      <Tag x="26" y="91" size="3.3" weight={600}>for ahead)</Tag>
      <Tag x="134" y="72" size="3.5" weight={700}>RIGHT lane:</Tag>
      <Tag x="134" y="77" size="3.3" weight={600}>turn right</Tag>
    </Frame>
  ),

  "stop-yield": () => (
    <Frame title="Stop line and yield line">
      <rect x="0" y="0" width="160" height="30" fill={C.road} />
      <rect x="10" y="30" width="60" height="70" fill={C.road} />
      <rect x="90" y="30" width="60" height="70" fill={C.road} />
      <rect x="10" y="32" width="30" height="3" fill={C.line} />
      <text x="25" y="52" fontSize="8" fontWeight="900" fill={C.line} textAnchor="middle" fontFamily="system-ui">STOP</text>
      <line x1="90" y1="33" x2="120" y2="33" stroke={C.line} strokeWidth="1.2" strokeDasharray="3 2" />
      <line x1="90" y1="36" x2="120" y2="36" stroke={C.line} strokeWidth="1.2" strokeDasharray="3 2" />
      <path d="M98 44 L112 44 L105 56 Z" fill="none" stroke={C.line} strokeWidth="1.3" />
      <Tag x="40" y="74" size="4">STOP LINE</Tag>
      <Tag x="40" y="80" size="3.3" weight={600}>you must ALWAYS stop</Tag>
      <Tag x="120" y="74" size="4">YIELD LINE</Tag>
      <Tag x="120" y="80" size="3.3" weight={600}>be PREPARED to stop —</Tag>
      <Tag x="120" y="85" size="3.3" weight={600}>give way to traffic</Tag>
    </Frame>
  ),

  "building-line": () => (
    <Frame title="Building line restricting the view at a junction">
      <rect x="0" y="16" width="160" height="30" fill={C.road} />
      <line x1="0" y1="31" x2="160" y2="31" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <rect x="65" y="46" width="30" height="54" fill={C.road} />
      <rect x="20" y="50" width="42" height="50" fill="#cbd5e1" stroke="#64748b" strokeWidth="0.6" />
      <rect x="98" y="50" width="42" height="50" fill="#cbd5e1" stroke="#64748b" strokeWidth="0.6" />
      <Tag x="41" y="78" size="3.4" color="#334155">building</Tag>
      {/* Set back from the junction, the buildings cut the view to a
          narrow slice of the main road. */}
      <Car x="72" y="84" color={C.good} />
      <path d="M72 76 L58 26" stroke={C.amber} strokeWidth="0.9" strokeDasharray="2 1.5" />
      <path d="M72 76 L118 26" stroke={C.amber} strokeWidth="0.9" strokeDasharray="2 1.5" />
      <Car x="14" y="38" rot={90} color={C.bad} ghost />
      <Tag x="120" y="10" size="4">BUILDING LINE</Tag>
      <Tag x="126" y="80" size="3.3" weight={600}>view into the</Tag>
      <Tag x="126" y="85" size="3.3" weight={600}>junction is hidden —</Tag>
      <Tag x="126" y="90" size="3.3" weight={600}>"peep and creep"</Tag>
    </Frame>
  ),

  "wide-reserve": () => (
    <Frame title="Emerging right across a wide central reserve">
      <rect x="0" y="6" width="160" height="22" fill={C.road} />
      <line x1="0" y1="17" x2="160" y2="17" stroke={C.line} strokeWidth="0.7" strokeDasharray="6 5" />
      <rect x="0" y="28" width="160" height="22" fill="#7aa35a" />
      <rect x="58" y="28" width="30" height="22" fill={C.road} />
      <rect x="0" y="50" width="160" height="22" fill={C.road} />
      <line x1="0" y1="61" x2="160" y2="61" stroke={C.line} strokeWidth="0.7" strokeDasharray="6 5" />
      <rect x="58" y="72" width="30" height="28" fill={C.road} />
      <Car x="66" y="88" color={C.good} />
      <Arrow d="M66 78 L66 42" />
      <Car x="66" y="38" color={C.good} ghost />
      <Arrow d="M70 32 Q72 12 100 11 L150 11" color="#059669" />
      <Arrow d="M150 55 L118 55" color={C.grey} w={1} />
      <Tag x="120" y="44" size="3.4" weight={700} color="#14532d">② wait in the reserve,</Tag>
      <Tag x="120" y="48.5" size="3.4" weight={700} color="#14532d">look left</Tag>
      <Tag x="120" y="84" size="3.4" weight={700}>① cross when clear</Tag>
      <Tag x="120" y="89" size="3.4" weight={700}>from your right</Tag>
      <Tag x="30" y="4.5" size="3.2" weight={700}>③ into the left-hand lane</Tag>
    </Frame>
  ),

  /* ---------------- hills (Unit 1.5) — side views ---------------- */
  "hill-up": () => (
    <Frame title="Going uphill">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <path d="M0 92 L160 30 L160 100 L0 100 Z" fill="#a3c38a" />
      <path d="M0 92 L160 30" stroke={C.road} strokeWidth="3" />
      <SideCar x="70" y="63.5" rot={-21} color={C.good} />
      <circle cx="56" cy="44" r="6" fill="#ffffff" stroke={C.good} strokeWidth="1" />
      <text x="56" y="47.4" fontSize="9" fontWeight="900" textAnchor="middle" fill="#047857" fontFamily="system-ui">2</text>
      <Tag x="40" y="14" size="4.6">GOING UPHILL</Tag>
      <Tag x="40" y="21" size="3.4" weight={600}>lower gear before the climb</Tag>
      <Tag x="40" y="26" size="3.4" weight={600}>harder to gain or keep speed</Tag>
      <Tag x="128" y="76" size="3.4" weight={600} color="#14532d">brakes slow you sooner —</Tag>
      <Tag x="128" y="81" size="3.4" weight={600} color="#14532d">you can brake later</Tag>
      <SideCar x="132" y="38" rot={-21} color={C.grey} flip />
      <Tag x="132" y="18" size="3.2" weight={700} color={C.bad}>oncoming: faster,</Tag>
      <Tag x="132" y="22.5" size="3.2" weight={700} color={C.bad}>less able to stop</Tag>
    </Frame>
  ),

  "hill-down": () => (
    <Frame title="Going downhill">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <path d="M0 30 L160 92 L160 100 L0 100 Z" fill="#a3c38a" />
      <path d="M0 30 L160 92" stroke={C.road} strokeWidth="3" />
      <SideCar x="70" y="56.5" rot={21} color={C.good} />
      <circle cx="58" cy="34" r="6" fill="#ffffff" stroke={C.good} strokeWidth="1" />
      <text x="58" y="37.4" fontSize="9" fontWeight="900" textAnchor="middle" fill="#047857" fontFamily="system-ui">2</text>
      <Tag x="118" y="14" size="4.6">GOING DOWNHILL</Tag>
      <Tag x="118" y="21" size="3.4" weight={600}>low gear as you approach —</Tag>
      <Tag x="118" y="26" size="3.4" weight={600}>engine braking helps control speed</Tag>
      <Tag x="40" y="82" size="3.4" weight={600} color={C.bad}>brakes take longer —</Tag>
      <Tag x="40" y="87" size="3.4" weight={600} color={C.bad}>brake sooner</Tag>
      <Tag x="40" y="94" size="3.2" weight={600}>clutch down = car speeds up</Tag>
    </Frame>
  ),

  "brake-fade": () => (
    <Frame title="Brake fade">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <path d="M0 26 L160 88 L160 100 L0 100 Z" fill="#a3c38a" />
      <path d="M0 26 L160 88" stroke={C.road} strokeWidth="3" />
      <SideCar x="82" y="57.8" rot={21} color={C.good} />
      {[0, 1, 2].map(i => (
        <path key={i} d={`M${86 + i * 4} ${50 - i} q2 -4 0 -8`} fill="none" stroke={C.bad} strokeWidth="0.9" opacity={0.8 - i * 0.2} />
      ))}
      <Tag x="44" y="14" size="4.6" color={C.bad}>BRAKE FADE</Tag>
      <Tag x="44" y="21" size="3.4" weight={600}>brakes used all the way down</Tag>
      <Tag x="44" y="26" size="3.4" weight={600}>overheat and stop less well</Tag>
      <Tag x="126" y="86" size="3.4" weight={700} color="#047857">use the correct combination</Tag>
      <Tag x="126" y="91" size="3.4" weight={700} color="#047857">of lower gears and braking</Tag>
    </Frame>
  ),

  "dead-ground": () => (
    <Frame title="Dead ground">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <path d="M0 70 Q30 40 56 44 Q80 48 98 74 Q112 88 128 78 Q146 64 160 52 L160 100 L0 100 Z" fill="#a3c38a" />
      <path d="M0 70 Q30 40 56 44 Q80 48 98 74 Q112 88 128 78 Q146 64 160 52" fill="none" stroke={C.road} strokeWidth="3" />
      <SideCar x="36" y="48.5" rot={-12} color={C.good} />
      <path d="M44 38 L150 44" stroke={C.amber} strokeWidth="0.9" strokeDasharray="2 1.5" />
      <SideCar x="114" y="82" rot={-12} color={C.bad} flip ghost />
      <Tag x="114" y="66" size="3.4" weight={700} color={C.bad}>hidden in the dip</Tag>
      <Tag x="40" y="14" size="4.6">DEAD GROUND</Tag>
      <Tag x="40" y="21" size="3.4" weight={600}>a dip that hides oncoming traffic</Tag>
      <Tag x="40" y="94" size="3.6" weight={800} color={C.bad}>Don't overtake on approach</Tag>
      <Tag x="128" y="30" size="3.2" weight={600}>your line of sight</Tag>
    </Frame>
  ),

  "brow": () => (
    <Frame title="The brow of a hill">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <path d="M0 88 Q70 20 160 88 L160 100 L0 100 Z" fill="#a3c38a" />
      <path d="M0 88 Q70 20 160 88" fill="none" stroke={C.road} strokeWidth="3" />
      <SideCar x="42" y="60" rot={-24} color={C.good} />
      <path d="M50 46 L120 30" stroke={C.amber} strokeWidth="0.9" strokeDasharray="2 1.5" />
      <SideCar x="118" y="66" rot={26} color={C.grey} flip ghost />
      <Tag x="80" y="12" size="4.6">BROW OF A HILL</Tag>
      <Tag x="80" y="19" size="3.4" weight={600}>view of the road ahead is restricted</Tag>
      <Tag x="40" y="82" size="3.3" weight={600}>keep well left, ease off the gas</Tag>
      <Tag x="128" y="90" size="3.3" weight={600}>never park here</Tag>
    </Frame>
  ),

  /* Parking on a hill, top-down. variant: up-kerb | up-nokerb | down-kerb | down-nokerb.
     The car faces up the page; "uphill" means up the page is uphill. */
  "hill-park": ({ variant = "up-kerb" }) => {
    const up = variant.startsWith("up");
    const kerb = variant.endsWith("-kerb");
    const steer = up && kerb ? 30 : -30;
    const gear = up ? "first gear" : "reverse gear";
    const slope = up ? C.good : C.amber;
    return (
      <Frame title="Parking on a hill">
        {kerb && <rect x="44" y="0" width="6" height="100" fill={C.kerb} stroke="#a8a29e" strokeWidth="0.5" />}
        <rect x="50" y="0" width="60" height="100" fill={C.road} />
        <line x1="80" y1="0" x2="80" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
        {/* the slope: the car faces up the page */}
        {[22, 50, 78].map(y => (
          <path key={y} d={`M130 ${y + 8} L130 ${y - 8} M126 ${y - 4} L130 ${y - 8} L134 ${y - 4}`} stroke={slope} strokeWidth="1.4" fill="none" />
        ))}
        <Tag x="138" y="96" size="3.4" weight={800} color={up ? "#047857" : "#b45309"}>{up ? "road CLIMBS ahead" : "road DROPS ahead"}</Tag>
        <WheelCar x="58" y="50" steer={steer} />
        <Arrow d={steer > 0 ? "M62 36 L72 27" : "M54 36 L44 27"} color="#f59e0b" w={1.3} />
        <Tag x="24" y="10" size="4.2">{up ? "FACING UPHILL" : "FACING DOWNHILL"}</Tag>
        <Tag x="24" y="16" size="3.6" weight={700} color={kerb ? C.ink : "#64748b"}>{kerb ? "with a kerb" : "no kerb"}</Tag>
        <Tag x={steer > 0 ? 96 : 24} y={steer > 0 ? 30 : 40} size="3.8" weight={800} color="#b45309">{steer > 0 ? "wheels RIGHT" : "wheels LEFT"}</Tag>
        <Tag x="24" y="78" size="3.4" weight={600}>handbrake on</Tag>
        <Tag x="24" y="84" size="3.4" weight={600}>{gear}</Tag>
        <Tag x="24" y="90" size="3" weight={600} color="#64748b">(automatic: park)</Tag>
      </Frame>
    );
  },

  /* ---------------- overtaking (Unit 1.6) ---------------- */
  "overtake-path": () => (
    <Frame title="Overtaking a moving vehicle">
      <VRoad />
      <Lorry x={62} y={46} />
      <Car x="62" y="88" color={C.good} ghost />
      <Arrow d="M62 79 Q62 70 80 66 Q97 62 97 54 L97 34 Q97 24 80 21 Q62 18 62 6" />
      <Car x="97" y="46" color={C.good} />
      <line x1="68" y1="50" x2="92" y2="50" stroke={C.ink} strokeWidth="0.5" strokeDasharray="1.2 1" />
      <Tag x="22" y="84" size="3.4" weight={800}>① hold back:</Tag>
      <Tag x="22" y="89" size="3.2" weight={600}>near enough, not</Tag>
      <Tag x="22" y="93.5" size="3.2" weight={600}>too close — look, decide</Tag>
      <Tag x="138" y="70" size="3.4" weight={800}>② out smoothly</Tag>
      <Tag x="138" y="46" size="3.4" weight={800}>③ promptly, with</Tag>
      <Tag x="138" y="51" size="3.4" weight={800}>adequate clearance</Tag>
      <Tag x="22" y="12" size="3.4" weight={800}>④ back in when</Tag>
      <Tag x="22" y="17" size="3.2" weight={600}>it's in your mirror —</Tag>
      <Tag x="22" y="21.5" size="3.2" weight={600} color={C.bad}>don't cut in</Tag>
    </Frame>
  ),

  "overtake-view": () => (
    <Frame title="Holding back to see past">
      {[[8, 72], [88, 152]].map(([l, r]) => (
        <g key={l}>
          <rect x={l} y="0" width={r - l} height="100" fill={C.road} />
          <line x1={(l + r) / 2} y1="0" x2={(l + r) / 2} y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
        </g>
      ))}
      {/* too close: the lorry fills the view */}
      <Lorry x={24} y={28} />
      <Car x="24" y="51" color={C.bad} />
      <path d="M24 45 L19 42.5 M24 45 L29 42.5" stroke={C.amber} strokeWidth="0.9" strokeDasharray="1.5 1" />
      <Car x="56" y="12" rot={180} color={C.grey} ghost />
      <Tag x="56" y="26" size="3.2" weight={700} color={C.bad}>unseen</Tag>
      {/* held back: a clear view past it */}
      <Lorry x={104} y={28} />
      <Car x="108" y="80" color={C.good} />
      <path d="M109 73 L126 4" stroke={C.amber} strokeWidth="0.9" strokeDasharray="2 1.5" />
      <Car x="136" y="12" rot={180} color={C.grey} />
      <Tag x="138" y="26" size="3.2" weight={700} color="#047857">seen</Tag>
      <Tag x="40" y="70" size="4" color={C.bad}>✗ TOO CLOSE</Tag>
      <Tag x="40" y="76" size="3.3" weight={600}>can't see past it</Tag>
      <Tag x="120" y="93" size="4" color="#047857">✓ HELD BACK</Tag>
      <Tag x="120" y="98.5" size="3.3" weight={600}>a clear view ahead</Tag>
    </Frame>
  ),

  "pass-stationary": () => (
    <Frame title="Passing a stationary vehicle on your side">
      <VRoad />
      <Car x="54" y="38" color={C.grey} />
      <Car x="97" y="26" rot={180} color={C.amber} />
      <Arrow d="M97 36 L97 60" color={C.amber} w={1.2} />
      <Car x="62" y="86" color={C.good} />
      <path d="M62 78 Q63 62 76 52 L76 22 Q76 12 64 6" fill="none" stroke={C.good} strokeWidth="1.2" strokeDasharray="2 1.6" />
      <line x1="58.5" y1="38" x2="71.5" y2="38" stroke={C.ink} strokeWidth="0.5" strokeDasharray="1.2 1" />
      <Tag x="22" y="34" size="3.4" weight={800}>obstruction</Tag>
      <Tag x="22" y="39" size="3.4" weight={800}>on YOUR side</Tag>
      <Tag x="138" y="20" size="3.4" weight={800} color="#b45309">oncoming traffic</Tag>
      <Tag x="138" y="25" size="3.4" weight={800} color="#b45309">has priority</Tag>
      <Tag x="22" y="80" size="3.3" weight={700}>wait well back —</Tag>
      <Tag x="22" y="85" size="3.1" weight={600}>clear view, without</Tag>
      <Tag x="22" y="89.5" size="3.1" weight={600}>blocking oncoming</Tag>
      <Tag x="138" y="70" size="3.3" weight={700} color="#047857">then move out early:</Tag>
      <Tag x="138" y="75" size="3.3" weight={700} color="#047857">a gradual change</Tag>
      <Tag x="138" y="80" size="3.3" weight={700} color="#047857">of course</Tag>
    </Frame>
  ),

  "obstructions-both": () => (
    <Frame title="Obstructions on both sides">
      <VRoad />
      <Car x="51" y="44" color={C.grey} />
      <Car x="109" y="50" rot={180} color={C.grey} />
      <Car x="94" y="14" rot={180} color={C.amber} />
      <Car x="64" y="86" color={C.good} />
      <Tag x="80" y="66" size="3.6" weight={800}>only room for one</Tag>
      <Tag x="22" y="30" size="3.4" weight={800}>be prepared</Tag>
      <Tag x="22" y="35" size="3.4" weight={800}>to give way</Tag>
      <Tag x="138" y="80" size="3.3" weight={700} color={C.bad}>don't rely on</Tag>
      <Tag x="138" y="85" size="3.3" weight={700} color={C.bad}>oncoming traffic</Tag>
      <Tag x="138" y="90" size="3.3" weight={700} color={C.bad}>to give you priority</Tag>
    </Frame>
  ),

  "double-white": () => (
    <Frame title="Double white lines">
      {[[8, 72, false], [88, 152, true]].map(([l, r, broken]) => {
        const m = (l + r) / 2;
        return (
          <g key={l}>
            <rect x={l} y="0" width={r - l} height="100" fill={C.road} />
            <line x1={m - 1.4} y1="0" x2={m - 1.4} y2="100" stroke={C.line} strokeWidth="1" />
            <line x1={m + 1.4} y1="0" x2={m + 1.4} y2="100" stroke={C.line} strokeWidth="1" strokeDasharray={broken ? "6 5" : undefined} />
            <Car x={l + 16} y="64" color={C.good} />
            <path d={`M${l + 16} 55 Q${l + 16} 46 ${m + 10} 36`} fill="none" stroke={C.bad} strokeWidth="1.2" strokeDasharray="2 1.6" />
            <Tag x={m + 10} y="30" size="6" color={C.bad}>✗</Tag>
          </g>
        );
      })}
      <Tag x="40" y="84" size="3.8">BOTH LINES SOLID</Tag>
      <Tag x="40" y="90" size="3.2" weight={600}>don't cross or straddle</Tag>
      <Tag x="120" y="84" size="3.8">SOLID LINE</Tag>
      <Tag x="120" y="89" size="3.8">NEAREST YOU</Tag>
      <Tag x="120" y="95" size="3.2" weight={600}>don't cross it to overtake</Tag>
    </Frame>
  ),

  "crawler-lane": () => (
    <Frame title="Crawler lane">
      <rect x="25" y="0" width="5" height="100" fill={C.kerb} />
      <rect x="30" y="0" width="96" height="100" fill={C.road} />
      <rect x="126" y="0" width="5" height="100" fill={C.kerb} />
      <line x1="62" y1="0" x2="62" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <line x1="92.6" y1="0" x2="92.6" y2="100" stroke={C.line} strokeWidth="1" />
      <line x1="95.4" y1="0" x2="95.4" y2="100" stroke={C.line} strokeWidth="1" />
      <Lorry x={46} y={36} />
      <Car x="78" y="56" color={C.good} />
      <Arrow d="M78 46 L78 14" />
      <Car x="111" y="30" rot={180} color={C.grey} />
      <Arrow d="M111 40 L111 60" color={C.grey} w={1.2} />
      <Tag x="46" y="66" size="3.4" weight={800}>CRAWLER</Tag>
      <Tag x="46" y="71" size="3.4" weight={800}>LANE</Tag>
      <Tag x="62" y="88" size="3.6">UPHILL: 2 lanes</Tag>
      <Tag x="111" y="88" size="3.6">DOWN: 1</Tag>
      <Tag x="144" y="50" size="3.2" weight={700} anchor="middle">double</Tag>
      <Tag x="144" y="54.5" size="3.2" weight={700} anchor="middle">white</Tag>
      <Tag x="144" y="59" size="3.2" weight={700} anchor="middle">lines</Tag>
      <Tag x="12" y="12" size="3.6" weight={800} color="#047857">↑</Tag>
      <Tag x="12" y="18" size="3" weight={700} color="#047857">hill</Tag>
    </Frame>
  ),

  "overtake-left": () => (
    <Frame title="Passing on the left of a vehicle turning right">
      <VRoad />
      <rect x="115" y="22" width="45" height="22" fill={C.road} />
      <rect x="0" y="22" width="45" height="22" fill={C.road} />
      <line x1="115" y1="33" x2="160" y2="33" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <line x1="0" y1="33" x2="45" y2="33" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <Car x="74" y="56" color={C.amber} />
      <RightIndicator x={74} y={56} />
      <Car x="56" y="86" color={C.good} />
      <Arrow d="M56 78 L56 4" />
      <Car x="96" y="12" rot={180} color={C.bad} ghost />
      <path d="M94 20 Q90 30 70 30 L20 30" fill="none" stroke={C.bad} strokeWidth="1.1" strokeDasharray="2 1.6" />
      <Tag x="134" y="64" size="3.4" weight={800} color="#b45309">positioned and</Tag>
      <Tag x="134" y="69" size="3.4" weight={800} color="#b45309">signalling right</Tag>
      <Tag x="24" y="62" size="3.4" weight={800} color="#047857">you may pass</Tag>
      <Tag x="24" y="67" size="3.4" weight={800} color="#047857">on the left</Tag>
      <Tag x="22" y="8" size="3.1" weight={700} color={C.bad}>may cross your path —</Tag>
      <Tag x="22" y="12.5" size="3.1" weight={700} color={C.bad}>hidden by the turning car</Tag>
      <Tag x="120" y="92" size="3.8">OVERTAKING</Tag>
      <Tag x="120" y="97" size="3.8">ON THE LEFT</Tag>
    </Frame>
  ),

  "queue-left": () => (
    <Frame title="Left lane moving more quickly than a queue on the right">
      <VRoad />
      {[18, 38, 58].map(y => <Car key={y} x="97" y={y} color={C.grey} />)}
      <Car x="62" y="82" color={C.good} />
      <Arrow d="M62 72 L62 6" />
      <Tag x="80" y="98" size="3.4" weight={700}>both lanes ↑ one direction</Tag>
      <Tag x="22" y="40" size="3.4" weight={800} color="#047857">left lane moving</Tag>
      <Tag x="22" y="45" size="3.4" weight={800} color="#047857">more quickly</Tag>
      <Tag x="138" y="34" size="3.4" weight={800}>slow queue</Tag>
      <Tag x="138" y="39" size="3.4" weight={800}>on your right</Tag>
      <Tag x="138" y="74" size="3.1" weight={700} color={C.bad}>don't move into a lane</Tag>
      <Tag x="138" y="78.5" size="3.1" weight={700} color={C.bad}>on your left just</Tag>
      <Tag x="138" y="83" size="3.1" weight={700} color={C.bad}>to overtake</Tag>
    </Frame>
  ),

  "being-overtaken": () => (
    <Frame title="Being overtaken">
      <VRoad />
      <Car x="58" y="56" color={C.good} />
      <Car x="97" y="60" color={C.amber} />
      <Arrow d="M97 50 L97 30 Q97 22 80 20 Q66 18 64 10" color={C.amber} w={1.2} dash="2 1.6" />
      <Tag x="22" y="48" size="3.4" weight={800}>keep left</Tag>
      <Tag x="22" y="56" size="3.4" weight={800}>don't accelerate</Tag>
      <Tag x="22" y="64" size="3.2" weight={600}>ease off if it's</Tag>
      <Tag x="22" y="68.5" size="3.2" weight={600}>not making ground</Tag>
      <Tag x="138" y="20" size="3.3" weight={800} color={C.bad}>be alert: it may</Tag>
      <Tag x="138" y="25" size="3.3" weight={800} color={C.bad}>pull in suddenly</Tag>
      <Tag x="80" y="92" size="4">BEING OVERTAKEN</Tag>
    </Frame>
  ),

  "overtake-large": () => (
    <Frame title="Overtaking a long vehicle">
      <VRoad />
      <Lorry x={62} y={34} len={40} long />
      <Car x="62" y="88" color={C.good} />
      <line x1="70" y1="55" x2="70" y2="79" stroke={C.good} strokeWidth="0.8" />
      <line x1="67" y1="55" x2="73" y2="55" stroke={C.good} strokeWidth="0.8" />
      <line x1="67" y1="79" x2="73" y2="79" stroke={C.good} strokeWidth="0.8" />
      <Arrow d="M98 80 L98 6" color={C.amber} w={1.2} dash="2 1.6" />
      <Tag x="138" y="30" size="3.6" weight={800}>LONG VEHICLE</Tag>
      <Tag x="138" y="35.5" size="3.2" weight={600}>at least 13 m long</Tag>
      <Tag x="138" y="48" size="3.2" weight={700} color="#b45309">extra road length</Tag>
      <Tag x="138" y="52.5" size="3.2" weight={700} color="#b45309">to pass and return</Tag>
      <Tag x="22" y="62" size="3.3" weight={800} color="#047857">a greater gap:</Tag>
      <Tag x="22" y="67" size="3.2" weight={600}>a clear view</Tag>
      <Tag x="22" y="71.5" size="3.2" weight={600}>ahead</Tag>
    </Frame>
  ),

  "horse-rider": () => (
    <Frame title="Passing a horse and rider">
      <VRoad />
      <text x="0" y="0" fontSize="11" textAnchor="middle" dominantBaseline="central" transform="translate(52 40) rotate(90)">🏇</text>
      <Car x="62" y="88" color={C.good} />
      <Arrow d="M62 79 Q62 68 86 60 L86 22 Q86 14 64 8" dash="2 1.6" />
      <line x1="58" y1="40" x2="81" y2="40" stroke={C.ink} strokeWidth="0.5" strokeDasharray="1.2 1" />
      <Tag x="22" y="18" size="3.4" weight={800}>animals are</Tag>
      <Tag x="22" y="23" size="3.4" weight={800}>frightened by noise</Tag>
      <Tag x="138" y="34" size="3.4" weight={800} color="#047857">allow</Tag>
      <Tag x="138" y="39" size="3.4" weight={800} color="#047857">enough room</Tag>
      <Tag x="138" y="62" size="3.4" weight={800} color={C.bad}>🔇 don't sound</Tag>
      <Tag x="138" y="67" size="3.4" weight={800} color={C.bad}>the horn</Tag>
      <Tag x="22" y="70" size="3.1" weight={600}>watch the rider's</Tag>
      <Tag x="22" y="74.5" size="3.1" weight={600}>signals</Tag>
    </Frame>
  ),

  "no-overtake-places": () => {
    const cells = [
      ["🚸", "pedestrian crossing"], ["🔀", "junction"], ["↩️", "corner or bend"],
      ["⛰️", "brow of a hill"], ["🌉", "hump-back bridge"], ["🚂", "level crossing"],
      ["⚠️", "road narrows"], ["▧", "chevrons / hatching"], ["🚫", "No Overtaking sign"],
    ];
    return (
      <Frame title="Places you must not overtake">
        {cells.map(([icon, label], i) => {
          const x = 27 + (i % 3) * 53;
          const y = 15 + Math.floor(i / 3) * 31;
          return (
            <g key={label}>
              <circle cx={x} cy={y} r="9" fill="#ffffff" stroke={C.bad} strokeWidth="1.2" />
              <text x={x} y={y + 3.4} fontSize="9.5" textAnchor="middle" fill={C.ink}>{icon}</text>
              <Tag x={x} y={y + 15} size="3.4" weight={700}>{label}</Tag>
            </g>
          );
        })}
      </Frame>
    );
  },

  /* ---------------- level crossings & tramways (Unit 1.7) ---------------- */
  "crossing-lights": () => (
    <Frame title="Level crossing light sequence">
      {[[38, "amber"], [122, "red"]].map(([x, stage]) => (
        <g key={x}>
          <rect x={x - 3} y="56" width="6" height="30" fill="#475569" />
          <rect x={x - 20} y="14" width="40" height="44" rx="6" fill="#111827" />
          <circle cx={x} cy="25" r="6" fill={stage === "amber" ? "#f59e0b" : "#3f3f46"} />
          {stage === "amber" && <circle cx={x} cy="25" r="10" fill="#f59e0b" opacity="0.25" />}
          {[-10, 10].map(dx => (
            <g key={dx}>
              <circle cx={x + dx} cy="45" r="6" fill={stage === "red" ? "#ef4444" : "#3f1d1d"} className={stage === "red" ? "vis-blink" : ""} />
              {stage === "red" && <circle cx={x + dx} cy="45" r="10" fill="#ef4444" opacity="0.25" className="vis-blink" />}
            </g>
          ))}
          <text x={x + 26} y="20" fontSize="8" textAnchor="middle">🔔</text>
        </g>
      ))}
      <Arrow d="M64 36 L94 36" color={C.ink} w={1.2} />
      <Tag x="79" y="31" size="3.4" weight={700}>then</Tag>
      <Tag x="38" y="91" size="3.8">① STEADY AMBER</Tag>
      <Tag x="38" y="96.5" size="3.2" weight={600}>+ the audible alarm</Tag>
      <Tag x="122" y="91" size="3.8" color={C.bad}>② TWIN FLASHING RED</Tag>
      <Tag x="122" y="96.5" size="3.2" weight={600}>STOP — don't drive on</Tag>
    </Frame>
  ),

  "crossing-half": () => (
    <Frame title="Automatic half-barrier level crossing">
      <VRoad />
      <Rails y={50} />
      <Barrier x1={45} x2={79} y={62} />
      <Barrier x1={115} x2={81} y={38} />
      <line x1="45" y1="68" x2="80" y2="68" stroke={C.line} strokeWidth="1.2" />
      <CrossingLights x={38} y={66} />
      <CrossingLights x={122} y={34} />
      <Car x="62" y="82" color={C.good} />
      <path d="M66 74 Q92 70 92 56 Q92 44 70 36" fill="none" stroke={C.bad} strokeWidth="1.1" strokeDasharray="2 1.6" />
      <Tag x="96" y="64" size="6" color={C.bad}>✗</Tag>
      <Train x={34} y={50} />
      <Arrow d="M36 50 L44 50" color="#15803d" w={1.2} />
      <Tag x="80" y="9" size="4.2">HALF BARRIERS</Tag>
      <Tag x="80" y="15" size="3.3" weight={600}>operated automatically by the train</Tag>
      <Tag x="22" y="84" size="3.3" weight={700}>wait at the</Tag>
      <Tag x="22" y="88.5" size="3.3" weight={700}>white line</Tag>
      <Tag x="138" y="80" size="3.2" weight={800} color={C.bad}>never zigzag</Tag>
      <Tag x="138" y="84.5" size="3.2" weight={800} color={C.bad}>round them</Tag>
    </Frame>
  ),

  "crossing-open": () => (
    <Frame title="Open level crossing">
      <VRoad />
      <Rails y={46} />
      <line x1="45" y1="62" x2="80" y2="62" stroke={C.line} strokeWidth="1.2" />
      <line x1="80" y1="30" x2="115" y2="30" stroke={C.line} strokeWidth="1.2" />
      <CrossingLights x={38} y={62} />
      <CrossingLights x={122} y={30} />
      <Car x="62" y="76" color={C.good} />
      <Train x={160} y={46} left />
      <Tag x="80" y="9" size="4.2">OPEN CROSSING</Tag>
      <Tag x="80" y="15" size="3.3" weight={600}>no gates or barriers — controlled by lights</Tag>
      <Tag x="136" y="76" size="3.4" weight={800} color={C.bad}>red lights:</Tag>
      <Tag x="136" y="81" size="3.4" weight={800} color={C.bad}>STOP</Tag>
      <Tag x="22" y="84" size="3.1" weight={600}>no attendant,</Tag>
      <Tag x="22" y="88.5" size="3.1" weight={600}>no gates, no barriers</Tag>
    </Frame>
  ),

  "crossing-gates": () => (
    <Frame title="Unattended crossing with gates you open yourself">
      <VRoad />
      <Rails y={50} />
      {/* gates swung open onto the verges */}
      {[[45, 38, -1], [115, 38, 1], [45, 62, -1], [115, 62, 1]].map(([x, y, d], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2={x + d * 14} y2={y + (y < 50 ? -10 : 10)} stroke="#ffffff" strokeWidth="2" />
          <line x1={x} y1={y} x2={x + d * 14} y2={y + (y < 50 ? -10 : 10)} stroke="#dc2626" strokeWidth="2" strokeDasharray="2.5 2.5" />
          <circle cx={x} cy={y} r="1.6" fill="#334155" />
        </g>
      ))}
      <Car x="62" y="84" color={C.good} />
      <text x="34" y="66" fontSize="7" textAnchor="middle">🧍</text>
      <text x="128" y="28" fontSize="7" textAnchor="middle">☎️</text>
      <Tag x="128" y="18" size="3" weight={700}>railway phone</Tag>
      <Tag x="22" y="12" size="3.1" weight={800}>① stop short</Tag>
      <Tag x="22" y="17" size="3.1" weight={800}>② get out, look</Tag>
      <Tag x="22" y="21.5" size="3.1" weight={800}>both ways, listen</Tag>
      <Tag x="138" y="72" size="3.1" weight={800}>③ open BOTH gates</Tag>
      <Tag x="138" y="77" size="3.1" weight={800}>④ if safe, drive</Tag>
      <Tag x="138" y="81.5" size="3.1" weight={800}>all the way across</Tag>
      <Tag x="138" y="86.5" size="3.1" weight={800}>⑤ close BOTH gates</Tag>
    </Frame>
  ),

  "crossing-clear": () => (
    <Frame title="Keep the crossing clear">
      <VRoad />
      <Rails y={40} />
      <YellowBox x={45} y={30} w={70} h={20} />
      <Car x="62" y="18" color={C.grey} />
      <Car x="62" y="0" color={C.grey} />
      <Car x="62" y="72" color={C.good} />
      <Car x="62" y="92" color={C.grey} />
      <Tag x="22" y="12" size="3.2" weight={700}>queue on the</Tag>
      <Tag x="22" y="16.5" size="3.2" weight={700}>far side</Tag>
      <Tag x="138" y="36" size="3.4" weight={800} color="#a16207">yellow box:</Tag>
      <Tag x="138" y="41" size="3.2" weight={700}>keep it clear</Tag>
      <Tag x="22" y="66" size="3.2" weight={800} color="#047857">wait until the road</Tag>
      <Tag x="22" y="70.5" size="3.2" weight={800} color="#047857">beyond is clear</Tag>
      <Tag x="138" y="74" size="3.2" weight={800} color={C.bad}>✗ not nose to tail</Tag>
      <Tag x="138" y="79" size="3.2" weight={800} color={C.bad}>✗ never stop on it</Tag>
    </Frame>
  ),

  "crossing-breakdown": () => (
    <Frame title="Breakdown on a level crossing">
      <VRoad />
      <Rails y={46} />
      <Car x="62" y="47" color={C.good} />
      <g className="vis-blink">
        <rect x="57.6" y="39" width="1.8" height="1.6" fill={C.amber} />
        <rect x="64.6" y="39" width="1.8" height="1.6" fill={C.amber} />
      </g>
      <text x="26" y="76" fontSize="7" textAnchor="middle">🚶</text>
      <text x="34" y="80" fontSize="7" textAnchor="middle">🚶</text>
      <Arrow d="M54 56 Q44 66 38 70" color={C.good} w={1.2} />
      <text x="130" y="68" fontSize="7" textAnchor="middle">☎️</text>
      <Train x={160} y={46} left len={30} />
      <Tag x="80" y="9" size="3.6" weight={800}>① everyone out — clear of the crossing</Tag>
      <Tag x="80" y="15" size="3.3" weight={700}>② railway telephone: inform the signalman</Tag>
      <Tag x="80" y="21" size="3.3" weight={700}>③ move the car only if told it's safe</Tag>
      <Tag x="80" y="94" size="3.8" color={C.bad}>train or alarm? GET CLEAR — it can't stop</Tag>
    </Frame>
  ),

  "countdown-markers": () => (
    <Frame title="Countdown markers before a concealed level crossing">
      <VRoad />
      <Rails y={10} />
      <rect x="0" y="16" width="44" height="14" fill="#4d7c0f" />
      <rect x="116" y="16" width="44" height="14" fill="#4d7c0f" />
      {[[3, 86], [2, 64], [1, 42]].map(([n, y]) => (
        <g key={n}>
          <rect x="30" y={y - 9} width="8" height="18" fill="#ffffff" stroke="#334155" strokeWidth="0.4" />
          {Array.from({ length: n }, (_, i) => (
            <line key={i} x1="30.6" y1={y + 6 - i * 5.5} x2="37.4" y2={y + 2 - i * 5.5} stroke="#dc2626" strokeWidth="1.6" />
          ))}
        </g>
      ))}
      <Car x="62" y="90" color={C.good} />
      <Arrow d="M62 80 L62 66" />
      <Tag x="138" y="52" size="3.8">COUNTDOWN</Tag>
      <Tag x="138" y="57.5" size="3.8">MARKERS</Tag>
      <Tag x="138" y="64" size="3.1" weight={600}>red and white —</Tag>
      <Tag x="138" y="68.5" size="3.1" weight={600}>a concealed level</Tag>
      <Tag x="138" y="73" size="3.1" weight={600}>crossing ahead</Tag>
    </Frame>
  ),

  "tram-swept-path": () => (
    <Frame title="The tram's swept path">
      <rect x="15" y="0" width="5" height="100" fill={C.kerb} />
      <rect x="20" y="0" width="120" height="100" fill={C.road} />
      <rect x="140" y="0" width="5" height="100" fill={C.kerb} />
      <rect x="54" y="0" width="52" height="100" fill={C.amber} opacity="0.25" />
      <line x1="54" y1="0" x2="54" y2="100" stroke={C.amber} strokeWidth="0.8" strokeDasharray="2 1.5" />
      <line x1="106" y1="0" x2="106" y2="100" stroke={C.amber} strokeWidth="0.8" strokeDasharray="2 1.5" />
      {[64, 70, 90, 96].map(x => <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="#cbd5e1" strokeWidth="0.9" />)}
      <Tram x={67} y={40} />
      <Tram x={93} y={70} rot={180} />
      {/* overhead wires */}
      <line x1="67" y1="0" x2="67" y2="100" stroke="#0f172a" strokeWidth="0.35" strokeDasharray="4 2" />
      <line x1="93" y1="0" x2="93" y2="100" stroke="#0f172a" strokeWidth="0.35" strokeDasharray="4 2" />
      <line x1="10" y1="88" x2="150" y2="88" stroke="#0f172a" strokeWidth="0.35" />
      <circle cx="10" cy="88" r="1.6" fill="#334155" />
      <circle cx="150" cy="88" r="1.6" fill="#334155" />
      <line x1="56" y1="8" x2="104" y2="8" stroke={C.ink} strokeWidth="0.6" />
      <Tag x="80" y="5" size="3.6">≈ 7 m swept path</Tag>
      <Car x="36" y="60" color={C.good} />
      <Tag x="36" y="78" size="3" weight={700}>traffic</Tag>
      <Tag x="80" y="96" size="3.2" weight={700}>overhead wires — care with high loads</Tag>
      <Tag x="124" y="30" size="3" weight={700}>two tracks:</Tag>
      <Tag x="124" y="34.5" size="3" weight={700}>trams pass</Tag>
      <Tag x="124" y="39" size="3" weight={700}>each way</Tag>
    </Frame>
  ),

  "tram-kerb": () => (
    <Frame title="Never between a tram and the left kerb">
      <VRoad />
      {[60, 66].map(x => <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="#cbd5e1" strokeWidth="0.9" />)}
      <Tram x={63} y={40} />
      <Car x="51" y="72" color={C.bad} ghost />
      <path d="M51 64 L51 52" stroke={C.bad} strokeWidth="1.1" strokeDasharray="2 1.6" />
      <Tag x="51" y="88" size="6" color={C.bad}>✗</Tag>
      <Car x="97" y="56" rot={180} color={C.grey} />
      <Tag x="22" y="36" size="3.3" weight={800} color={C.bad}>don't drive between</Tag>
      <Tag x="22" y="41" size="3.3" weight={800} color={C.bad}>a tram and the</Tag>
      <Tag x="22" y="46" size="3.3" weight={800} color={C.bad}>left kerb</Tag>
      <Tag x="138" y="80" size="3.2" weight={700}>don't park where</Tag>
      <Tag x="138" y="84.5" size="3.2" weight={700}>you'd obstruct a tram</Tag>
      <Tag x="138" y="20" size="3.4" weight={800}>trams have</Tag>
      <Tag x="138" y="25" size="3.4" weight={800}>priority</Tag>
    </Frame>
  ),

  "tram-lane": () => (
    <Frame title="Tram lane">
      <rect x="25" y="0" width="5" height="100" fill={C.kerb} />
      <rect x="30" y="0" width="34" height="100" fill="#7c5a50" />
      <rect x="64" y="0" width="66" height="100" fill={C.road} />
      <rect x="130" y="0" width="5" height="100" fill={C.kerb} />
      <line x1="64" y1="0" x2="64" y2="100" stroke={C.line} strokeWidth="1.2" />
      {Array.from({ length: 13 }, (_, i) => <circle key={i} cx="61" cy={4 + i * 8} r="0.9" fill="#facc15" />)}
      <line x1="97" y1="0" x2="97" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      {[44, 50].map(x => <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="#cbd5e1" strokeWidth="0.9" />)}
      <Tram x={47} y={36} />
      <Car x="80" y="70" color={C.good} />
      <rect x="4" y="60" width="18" height="22" rx="1.5" fill="#1d4ed8" stroke="#ffffff" strokeWidth="0.6" />
      <rect x="7" y="64" width="5" height="10" rx="1" fill="#ffffff" />
      <path d="M17 76 L17 65 M15 67 L17 64.5 L19 67" stroke="#ffffff" strokeWidth="0.9" fill="none" />
      <Tag x="47" y="72" size="3.4" weight={800}>TRAM</Tag>
      <Tag x="47" y="77" size="3.4" weight={800}>LANE</Tag>
      <Tag x="13" y="90" size="2.8" weight={700}>blue sign</Tag>
      <Tag x="146" y="40" size="3" weight={800} color={C.bad}>don't</Tag>
      <Tag x="146" y="44.5" size="3" weight={800} color={C.bad}>enter a</Tag>
      <Tag x="146" y="49" size="3" weight={800} color={C.bad}>tram-only</Tag>
      <Tag x="146" y="53.5" size="3" weight={800} color={C.bad}>lane</Tag>
      <Tag x="97" y="96" size="3" weight={700}>white line, yellow dots, different surface</Tag>
    </Frame>
  ),

  "lana-tram": () => (
    <Frame title="LÁNA TRAM road marking">
      <VRoad />
      {[59, 65].map(x => <line key={x} x1={x} y1="0" x2={x} y2="46" stroke="#cbd5e1" strokeWidth="0.9" />)}
      <text x="62" y="62" fontSize="7" fontWeight="900" fill={C.line} textAnchor="middle" fontFamily="system-ui">TRAM</text>
      <text x="62" y="54" fontSize="7" fontWeight="900" fill={C.line} textAnchor="middle" fontFamily="system-ui">LÁNA</text>
      <Tram x={62} y={18} len={34} />
      <Car x="62" y="84" color={C.good} />
      <Tag x="22" y="44" size="3.3" weight={800}>tram tracks</Tag>
      <Tag x="22" y="49" size="3.3" weight={800}>ahead</Tag>
      <Tag x="138" y="44" size="3.2" weight={700}>road used by</Tag>
      <Tag x="138" y="48.5" size="3.2" weight={700}>trams AND vehicles —</Tag>
      <Tag x="138" y="53" size="3.2" weight={700} color="#b45309">share it, extra care</Tag>
    </Frame>
  ),

  "tram-crossing-sign": () => (
    <Frame title="Tram crossing warning sign">
      <rect x="38" y="66" width="3" height="30" fill="#475569" />
      <path d="M40 6 L66 32 L40 58 L14 32 Z" fill="#facc15" stroke="#111827" strokeWidth="1.4" />
      <rect x="30" y="26" width="20" height="10" rx="2" fill="#111827" />
      <line x1="40" y1="26" x2="40" y2="19" stroke="#111827" strokeWidth="1" />
      <line x1="34" y1="19" x2="46" y2="19" stroke="#111827" strokeWidth="1" />
      <rect x="12" y="60" width="56" height="9" rx="1" fill="#ffffff" stroke="#111827" strokeWidth="0.7" />
      <text x="40" y="66.6" fontSize="4.4" fontWeight="900" textAnchor="middle" fill="#111827" fontFamily="system-ui">LOOK BOTH WAYS</text>
      <Tag x="116" y="22" size="4">TRAM CROSSING POINT</Tag>
      <Tag x="116" y="34" size="3.4" weight={700}>cross the tracks only</Tag>
      <Tag x="116" y="39" size="3.4" weight={700}>where you see this sign</Tag>
      <Tag x="116" y="52" size="3.4" weight={700} color="#047857">stop · look both ways · listen</Tag>
      <Tag x="116" y="57" size="3.4" weight={700} color="#047857">for horns and tram chimes</Tag>
      <Tag x="116" y="72" size="3" weight={600}>may read instead:</Tag>
      <Tag x="116" y="77" size="3" weight={600}>LOOK RIGHT · LOOK LEFT</Tag>
    </Frame>
  ),

  "no-entry-trams": () => (
    <Frame title="No entry except trams">
      {[[40, ["EXCEPT TRAMS"], "trams only — no other traffic"], [120, ["EXCEPT TRAMS", "AND ACCESS"], "only to enter or leave a building"]].map(([x, plate, means]) => (
        <g key={x}>
          <circle cx={x} cy="30" r="20" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
          <rect x={x - 13} y="26.5" width="26" height="7" fill="#ffffff" />
          <rect x={x - 22} y="54" width="44" height={plate.length * 7 + 3} rx="1" fill="#ffffff" stroke="#111827" strokeWidth="0.7" />
          {plate.map((l, i) => (
            <text key={l} x={x} y={60 + i * 7} fontSize="4.8" fontWeight="900" textAnchor="middle" fill="#111827" fontFamily="system-ui">{l}</text>
          ))}
          <Tag x={x} y="85" size="3.3" weight={700}>{means}</Tag>
        </g>
      ))}
    </Frame>
  ),

  "tram-junction": () => (
    <Frame title="Tram turning at a junction">
      <rect x="0" y="28" width="160" height="34" fill={C.road} />
      <rect x="60" y="62" width="40" height="38" fill={C.road} />
      <line x1="0" y1="45" x2="60" y2="45" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <line x1="104" y1="45" x2="160" y2="45" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <YellowBox x={60} y={28} w={40} h={34} />
      <path d="M70 100 L70 62 Q70 42 50 40 L0 40" fill="none" stroke={C.amber} strokeWidth="16" opacity="0.28" />
      {[67, 73].map(x => (
        <path key={x} d={`M${x} 100 L${x} 62 Q${x} ${x === 67 ? 44 : 38} ${x === 67 ? 50 : 52} ${x === 67 ? 43 : 37} L0 ${x === 67 ? 43 : 37}`} fill="none" stroke="#cbd5e1" strokeWidth="0.9" />
      ))}
      <Tram x={70} y={84} len={30} />
      <Arrow d="M70 66 Q70 46 50 40 L20 40" color={C.amber} w={1.2} dash="2 1.6" />
      <line x1="104" y1="45" x2="104" y2="62" stroke={C.line} strokeWidth="1.2" />
      <Car x="116" y="53" rot={-90} color={C.good} />
      <circle cx="108" cy="68" r="2.6" fill="#111827" />
      <circle cx="108" cy="68" r="1.5" fill="#ef4444" />
      <Tag x="130" y="20" size="3.4" weight={800} color="#a16207">keep the yellow box clear</Tag>
      <Tag x="130" y="76" size="3.2" weight={700}>obey the traffic lights</Tag>
      <Tag x="28" y="76" size="3.2" weight={700} color="#b45309">allow for the</Tag>
      <Tag x="28" y="80.5" size="3.2" weight={700} color="#b45309">tram's sweep on</Tag>
      <Tag x="28" y="85" size="3.2" weight={700} color="#b45309">bends and corners</Tag>
    </Frame>
  ),

  /* ---------------- motorway driving (Unit 1.8) ---------------- */
  "motorway-lanes": () => (
    <Frame title="Motorway lanes">
      <Motorway />
      <Car x="46" y="70" color={C.good} />
      <Car x="66" y="40" color={C.amber} />
      <Arrow d="M66 30 Q66 20 50 12 L46 4" color={C.amber} w={1.1} dash="2 1.6" />
      <Tag x="46" y="88" size="3.2" weight={800}>LANE 1</Tag>
      <Tag x="46" y="93" size="2.8" weight={700}>normal</Tag>
      <Tag x="76" y="56" size="3.2" weight={800}>LANES 2 & 3</Tag>
      <Tag x="76" y="61" size="2.8" weight={700}>overtaking</Tag>
      <Tag x="132" y="88" size="3" weight={700}>overtake, then</Tag>
      <Tag x="132" y="92.5" size="3" weight={700}>back to lane 1</Tag>
      <Tag x="12" y="30" size="3" weight={800} color={C.bad}>HARD</Tag>
      <Tag x="12" y="34.5" size="3" weight={800} color={C.bad}>SHOULDER</Tag>
      <Tag x="12" y="40" size="2.7" weight={700}>emergencies</Tag>
      <Tag x="12" y="44" size="2.7" weight={700}>only</Tag>
      <Tag x="132" y="40" size="3.2" weight={800}>central</Tag>
      <Tag x="132" y="44.5" size="3.2" weight={800}>reservation</Tag>
      <Tag x="132" y="49" size="2.8" weight={700}>never cross it</Tag>
      <Tag x="132" y="70" size="3" weight={700} color="#475569">opposite direction</Tag>
    </Frame>
  ),

  "motorway-join": () => (
    <Frame title="Joining a motorway">
      <Motorway other={false} />
      <rect x="6" y="40" width="18" height="60" fill={C.road} />
      <path d="M6 40 L24 20 L24 40 Z" fill={C.road} />
      <rect x="24" y="20" width="12" height="80" fill={C.road} />
      <line x1="36" y1="20" x2="36" y2="100" stroke={C.line} strokeWidth="0.9" strokeDasharray="2 2" />
      <Car x="26" y="74" color={C.good} />
      <g className="vis-blink"><rect x="29.4" y="66" width="1.8" height="1.6" fill={C.amber} /></g>
      <Arrow d="M27 64 Q28 46 44 34 L46 24" />
      <Car x="46" y="90" color={C.grey} />
      <Car x="46" y="12" color={C.grey} />
      <Car x="66" y="56" color={C.grey} />
      <Tag x="132" y="16" size="3.4" weight={800}>ACCELERATION LANE</Tag>
      <Tag x="132" y="26" size="3.1" weight={700} color="#047857">build up speed to</Tag>
      <Tag x="132" y="30.5" size="3.1" weight={700} color="#047857">match a gap in lane 1</Tag>
      <Tag x="132" y="40" size="3.1" weight={700}>MSPSL — always signal</Tag>
      <Tag x="132" y="50" size="3.1" weight={800} color={C.bad}>YIELD to traffic</Tag>
      <Tag x="132" y="54.5" size="3.1" weight={800} color={C.bad}>on the motorway</Tag>
      <Tag x="132" y="66" size="3" weight={600}>try not to stop —</Tag>
      <Tag x="132" y="70.5" size="3" weight={600}>but be ready to</Tag>
      <Tag x="132" y="82" size="3" weight={700}>then keep left until</Tag>
      <Tag x="132" y="86.5" size="3" weight={700}>you've adjusted</Tag>
    </Frame>
  ),

  "motorway-leave": () => (
    <Frame title="Leaving a motorway">
      <Motorway other={false} />
      <path d="M24 0 L24 30 L36 36 L36 0 Z" fill={C.road} />
      <rect x="4" y="0" width="20" height="30" fill={C.road} />
      <line x1="36" y1="0" x2="36" y2="34" stroke={C.line} strokeWidth="0.9" strokeDasharray="2 2" />
      <ExitMarker x={14} y={88} n={3} />
      <ExitMarker x={14} y={66} n={2} />
      <ExitMarker x={14} y={44} n={1} />
      <Car x="46" y="80" color={C.good} />
      <g className="vis-blink"><rect x="40.8" y="72" width="1.8" height="1.6" fill={C.amber} /></g>
      <Arrow d="M46 70 L46 46 Q46 34 32 26 L18 6" />
      <Tag x="132" y="10" size="3.4" weight={800}>DECELERATION LANE</Tag>
      <Tag x="132" y="15" size="3" weight={700}>slow down here</Tag>
      <Tag x="132" y="30" size="3.1" weight={700}>countdown markers:</Tag>
      <Tag x="132" y="35" size="3.1" weight={700}>300 · 200 · 100 m</Tag>
      <Tag x="132" y="50" size="3.1" weight={700} color="#047857">mirrors + signal at the</Tag>
      <Tag x="132" y="54.5" size="3.1" weight={700} color="#047857">first marker at least</Tag>
      <Tag x="132" y="68" size="3" weight={700}>in lane 1 from the first</Tag>
      <Tag x="132" y="72.5" size="3" weight={700}>route sign for your exit</Tag>
      <Tag x="132" y="86" size="3" weight={800} color={C.bad}>one lane at a time —</Tag>
      <Tag x="132" y="90.5" size="3" weight={800} color={C.bad}>never cut across</Tag>
    </Frame>
  ),

  "cats-eyes": () => (
    <Frame title="Reflective studs on a motorway">
      <Motorway studs other={false} />
      <rect x="4" y="56" width="20" height="44" fill={C.road} />
      <path d="M24 56 L24 40 L36 40 L36 56 Z" fill="#6b7280" />
      {[60, 66, 72, 78, 84, 90, 96].map(y => <circle key={y} cx="30" cy={y} r="1" fill="#22c55e" />)}
      <Tag x="132" y="16" size="3.3" weight={800}>WHITE</Tag>
      <Tag x="132" y="20.5" size="2.9" weight={600}>between lanes</Tag>
      <Tag x="132" y="34" size="3.3" weight={800} color="#b91c1c">RED (yellow/red)</Tag>
      <Tag x="132" y="38.5" size="2.9" weight={600}>left edge — the hard shoulder</Tag>
      <Tag x="132" y="52" size="3.3" weight={800} color="#b45309">AMBER</Tag>
      <Tag x="132" y="56.5" size="2.9" weight={600}>right edge — central reserve:</Tag>
      <Tag x="132" y="61" size="2.9" weight={600}>do not cross</Tag>
      <Tag x="132" y="75" size="3.3" weight={800} color="#15803d">GREEN</Tag>
      <Tag x="132" y="79.5" size="2.9" weight={600}>across slip roads and lay-bys:</Tag>
      <Tag x="132" y="84" size="2.9" weight={600}>safe to cross the edge line</Tag>
      <Tag x="132" y="95" size="2.8" weight={600} color="#475569">green/yellow: roadworks layout</Tag>
    </Frame>
  ),

  "gantry-signals": () => (
    <Frame title="Overhead motorway signals">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <rect x="0" y="62" width="160" height="38" fill={C.road} />
      {[53, 107].map(x => <line key={x} x1={x} y1="62" x2={x} y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />)}
      <rect x="6" y="10" width="148" height="7" fill="#64748b" />
      <rect x="4" y="10" width="4" height="54" fill="#64748b" />
      <rect x="152" y="10" width="4" height="54" fill="#64748b" />
      {[26, 80, 134].map(x => <rect key={x} x={x - 17} y="17" width="34" height="32" rx="2" fill="#111827" />)}
      <circle cx="26" cy="33" r="11" fill="#ffffff" stroke="#dc2626" strokeWidth="2.6" />
      <text x="26" y="37" fontSize="11" fontWeight="900" textAnchor="middle" fill="#111827" fontFamily="system-ui">80</text>
      <path d="M80 23 L80 40 M74 34 L80 41 L86 34" stroke="#ffffff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {[[126, 24], [142, 24], [126, 42], [142, 42]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.4" fill="#ef4444" className={i % 2 ? "" : "vis-blink"} />
      ))}
      <Tag x="26" y="58" size="3" weight={800}>mandatory limit</Tag>
      <Tag x="80" y="58" size="3" weight={800}>lane open</Tag>
      <Tag x="134" y="58" size="3" weight={800} color={C.bad}>red: don't go on</Tag>
      <Tag x="134" y="80" size="3" weight={700} color={C.bad}>no further</Tag>
      <Tag x="134" y="84.5" size="3" weight={700} color={C.bad}>in this lane</Tag>
      <Tag x="26" y="80" size="3" weight={700}>until a new limit</Tag>
      <Tag x="26" y="84.5" size="3" weight={700}>or signs switch off</Tag>
      <Tag x="80" y="80" size="3" weight={700}>arrows guide you</Tag>
      <Tag x="80" y="84.5" size="3" weight={700}>when lanes reduce</Tag>
    </Frame>
  ),

  "lri-sign": () => (
    <Frame title="Location Reference Indicator signs">
      {[[44, "#1d4ed8", "M7", "motorway: blue"], [116, "#15803d", "N11", "dual carriageway: green"]].map(([x, col, road, lbl]) => (
        <g key={x}>
          <rect x={x - 1.5} y="58" width="3" height="26" fill="#475569" />
          <rect x={x - 16} y="10" width="32" height="50" rx="2" fill={col} stroke="#ffffff" strokeWidth="1" />
          {[road, "N", "23.4"].map((t, i) => (
            <text key={i} x={x} y={25 + i * 14} fontSize="9" fontWeight="900" textAnchor="middle" fill="#ffffff" fontFamily="system-ui">{t}</text>
          ))}
          <Tag x={x} y="91" size="3.3" weight={800}>{lbl}</Tag>
        </g>
      ))}
      <Tag x="80" y="24" size="2.8" weight={700} anchor="middle">① road</Tag>
      <Tag x="80" y="38" size="2.8" weight={700} anchor="middle">② direction</Tag>
      <Tag x="80" y="52" size="2.8" weight={700} anchor="middle">③ distance</Tag>
      <Tag x="80" y="98" size="3" weight={600}>tell the emergency services exactly where you are</Tag>
    </Frame>
  ),

  "hard-shoulder-stop": () => (
    <Frame title="An emergency stop on the hard shoulder">
      <rect x="0" y="0" width="14" height="100" fill="#7aa35a" />
      <line x1="16" y1="0" x2="16" y2="100" stroke="#cbd5e1" strokeWidth="1.4" />
      <rect x="17" y="0" width="7" height="100" fill={C.ground} />
      <Motorway other={false} />
      <Car x="30" y="40" color={C.good} />
      <g className="vis-blink">
        {[[25.6, 32], [32.6, 32], [25.6, 46.4], [32.6, 46.4]].map(([x, y], i) => <rect key={i} x={x} y={y} width="1.8" height="1.6" fill={C.amber} />)}
      </g>
      <path d="M30 78 L27 84 L33 84 Z" fill="none" stroke="#dc2626" strokeWidth="1" />
      <text x="7" y="34" fontSize="6" textAnchor="middle">🧍</text>
      <text x="7" y="42" fontSize="6" textAnchor="middle">🧍</text>
      <Arrow d="M25 38 L12 38" color={C.good} w={1} />
      <rect x="18" y="8" width="5" height="9" fill="#ffffff" stroke="#334155" strokeWidth="0.4" />
      <text x="20.5" y="14.5" fontSize="4.5" textAnchor="middle">☎</text>
      <Car x="66" y="70" color={C.grey} />
      <Tag x="132" y="16" size="3.3" weight={800}>far left, hazards on,</Tag>
      <Tag x="132" y="20.5" size="3.1" weight={700}>sidelights if needed</Tag>
      <Tag x="132" y="34" size="3.1" weight={800} color="#047857">everyone out by the</Tag>
      <Tag x="132" y="38.5" size="3.1" weight={800} color="#047857">LEFT-hand doors —</Tag>
      <Tag x="132" y="43" size="3.1" weight={800} color="#047857">behind the barrier</Tag>
      <Tag x="132" y="56" size="3" weight={700}>animals stay in the car</Tag>
      <Tag x="132" y="70" size="3" weight={700} color="#b91c1c">warning triangle well</Tag>
      <Tag x="132" y="74.5" size="3" weight={700} color="#b91c1c">back on the hard shoulder</Tag>
      <Tag x="132" y="88" size="3" weight={700}>SOS phone: about every</Tag>
      <Tag x="132" y="92.5" size="3" weight={700}>1.6 km — follow the arrow</Tag>
    </Frame>
  ),

  "two-second-rule": () => (
    <Frame title="The two-second rule">
      <rect x="0" y="34" width="160" height="34" fill={C.road} />
      <line x1="0" y1="51" x2="160" y2="51" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <rect x="94" y="28" width="3" height="6" fill="#475569" />
      <rect x="92" y="22" width="7" height="6" fill="#ffffff" stroke="#334155" strokeWidth="0.4" />
      <Car x="112" y="42" rot={90} color={C.grey} />
      <Car x="30" y="42" rot={90} color={C.good} />
      <line x1="38" y1="74" x2="104" y2="74" stroke={C.good} strokeWidth="0.8" />
      <line x1="38" y1="71" x2="38" y2="77" stroke={C.good} strokeWidth="0.8" />
      <line x1="104" y1="71" x2="104" y2="77" stroke={C.good} strokeWidth="0.8" />
      <Tag x="71" y="83" size="3.6" color="#047857">a two-second gap</Tag>
      <Tag x="80" y="12" size="4.2">KEEP YOUR DISTANCE</Tag>
      <Tag x="80" y="18" size="3.2" weight={600}>at least 1 m per km/h — or a two-second gap</Tag>
      <Tag x="95.5" y="40" size="2.8" weight={700}>marker</Tag>
          </Frame>
  ),

  "motorway-signs": () => (
    <Frame title="Start and end of motorway signs">
      {[[44, false, "MOTORWAY STARTS", "regulations apply"], [116, true, "MOTORWAY ENDS", "regulations no longer apply"]].map(([x, end, a, b]) => (
        <g key={x}>
          <rect x={x - 22} y="12" width="44" height="44" rx="4" fill="#1d4ed8" stroke="#ffffff" strokeWidth="1.2" />
          <MotorwaySymbol x={x} y={34} s={1.5} />
          {end && <line x1={x - 18} y1="52" x2={x + 18} y2="16" stroke="#dc2626" strokeWidth="4" />}
          <Tag x={x} y="70" size="3.6">{a}</Tag>
          <Tag x={x} y="76" size="3" weight={600}>{b}</Tag>
        </g>
      ))}
      <Tag x="80" y="92" size="3.2" weight={700}>motorway signs are blue</Tag>
    </Frame>
  ),

  "motorway-banned": () => {
    const cells = [
      ["🚶", "pedestrians"], ["🚲", "pedal cyclists"], ["🐄", "animals"],
      ["🛵", "under 50 cc"], ["L", "learner drivers"], ["🦽", "invalid carriages"],
      ["🚜", "can't do 50 km/h"], ["🚛", "oversized, no permit"], ["↩️", "reversing, U-turns"],
    ];
    return (
      <Frame title="Not allowed on a motorway">
        {cells.map(([icon, label], i) => {
          const x = 27 + (i % 3) * 53;
          const y = 15 + Math.floor(i / 3) * 31;
          return (
            <g key={label}>
              <circle cx={x} cy={y} r="9" fill="#ffffff" stroke={C.bad} strokeWidth="1.2" />
              {icon === "L"
                ? <g><rect x={x - 5} y={y - 5} width="10" height="10" fill="#ffffff" stroke="#dc2626" strokeWidth="0.6" /><text x={x} y={y + 3.4} fontSize="9" fontWeight="900" textAnchor="middle" fill="#dc2626" fontFamily="system-ui">L</text></g>
                : <text x={x} y={y + 3.4} fontSize="9.5" textAnchor="middle">{icon}</text>}
              <Tag x={x} y={y + 15} size="3.4" weight={700}>{label}</Tag>
            </g>
          );
        })}
      </Frame>
    );
  },

  "average-speed": () => (
    <Frame title="Average speed cameras">
      <rect x="0" y="40" width="160" height="30" fill={C.road} />
      <line x1="0" y1="55" x2="160" y2="55" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      {[20, 140].map((x, i) => (
        <g key={x}>
          <rect x={x - 1} y="22" width="2" height="18" fill="#475569" />
          <rect x={x - 5} y="16" width="10" height="7" rx="1" fill="#facc15" stroke="#111827" strokeWidth="0.5" />
          <text x={x} y="21.6" fontSize="5" textAnchor="middle">📷</text>
          <Tag x={x} y="11" size="3.6">{i ? "B" : "A"}</Tag>
        </g>
      ))}
      <Car x="56" y="47" rot={90} color={C.good} />
      <Arrow d="M66 47 L96 47" />
      <line x1="20" y1="80" x2="140" y2="80" stroke={C.ink} strokeWidth="0.6" />
      <Tag x="80" y="88" size="3.4" weight={700}>time from A to B = your average speed</Tag>
      <Tag x="80" y="94" size="3.1" weight={600} color={C.bad}>there too soon → a record goes to the Gardaí</Tag>
    </Frame>
  ),

  /* ---------------- night driving (Unit 1.9) ---------------- */
  "dipped-main": () => (
    <Frame title="Dipped and main beam">
      <Night />
      {[[8, 72], [88, 152]].map(([l, r]) => (
        <g key={l}>
          <rect x={l} y="0" width={r - l} height="100" fill={C.road} />
          <line x1={(l + r) / 2} y1="0" x2={(l + r) / 2} y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
        </g>
      ))}
      <Beam x={26} y={88} kind="dipped" />
      <Car x="26" y="88" color={C.good} />
      <Beam x={106} y={88} kind="main" reach={86} />
      <Car x="106" y="88" color={C.good} />
      <Tag x="40" y="34" size="3.8" color="#047857">DIPPED</Tag>
      <Tag x="40" y="40" size="3" weight={700}>short, aimed</Tag>
      <Tag x="40" y="44.5" size="3" weight={700}>down and left</Tag>
      <Tag x="134" y="50" size="3.8" color="#1d4ed8">MAIN BEAM</Tag>
      <Tag x="134" y="56" size="3" weight={700}>long — dip it</Tag>
      <Tag x="134" y="60.5" size="3" weight={700}>for others</Tag>
    </Frame>
  ),

  "stop-in-lights": () => (
    <Frame title="Stopping within the distance you can see">
      <Night />
      <VRoad />
      <Beam x={62} y={92} kind="dipped" reach={60} />
      <Car x="62" y="92" color={C.good} />
      <line x1="74" y1="85" x2="74" y2="40" stroke={C.good} strokeWidth="1" />
      <line x1="71" y1="85" x2="77" y2="85" stroke={C.good} strokeWidth="1" />
      <line x1="71" y1="40" x2="77" y2="40" stroke={C.good} strokeWidth="1" />
      <Tag x="96" y="64" size="3.2" weight={800} color="#047857">stopping</Tag>
      <Tag x="96" y="68.5" size="3.2" weight={800} color="#047857">distance</Tag>
      <text x="56" y="16" fontSize="7" textAnchor="middle" opacity="0.5">🚶</text>
      <Tag x="138" y="20" size="3.2" weight={800}>beyond your lights:</Tag>
      <Tag x="138" y="25" size="3.2" weight={800}>unseen</Tag>
      <Tag x="22" y="50" size="3.2" weight={800}>stop within</Tag>
      <Tag x="22" y="55" size="3.2" weight={800}>the distance</Tag>
      <Tag x="22" y="60" size="3.2" weight={800}>your lights show</Tag>
    </Frame>
  ),

  "dazzle": () => (
    <Frame title="Dazzled by an oncoming vehicle">
      <Night />
      <VRoad />
      <g transform="rotate(180 97 22)"><Beam x={97} y={22} kind="main" reach={70} /></g>
      <Car x="97" y="22" rot={180} color={C.grey} />
      <Car x="62" y="80" color={C.good} />
      <path d="M60 72 L48 50" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 1.5" />
      <text x="50" y="40" fontSize="6" textAnchor="middle">🚲</text>
      <Tag x="22" y="70" size="3.2" weight={800} color="#047857">look to the</Tag>
      <Tag x="22" y="75" size="3.2" weight={800} color="#047857">left verge</Tag>
      <Tag x="22" y="30" size="3" weight={700}>watch for cyclists</Tag>
      <Tag x="22" y="34.5" size="3" weight={700}>and pedestrians</Tag>
      <Tag x="138" y="68" size="3.2" weight={800}>slow down —</Tag>
      <Tag x="138" y="73" size="3.2" weight={800}>stop if necessary</Tag>
      <Tag x="138" y="86" size="3" weight={700} color={C.bad}>don't look into</Tag>
      <Tag x="138" y="90.5" size="3" weight={700} color={C.bad}>the lights</Tag>
    </Frame>
  ),

  "dip-left-bend": () => (
    <Frame title="Dip earlier on a left-hand bend">
      <Night />
      <path d="M48 100 L48 60 Q48 20 8 18 L0 18 L0 40 L8 40 Q26 42 26 62 L26 100 Z" fill={C.road} transform="translate(30 0)" />
      <path d="M67 100 L67 62 Q67 32 38 29 L30 29" fill="none" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <polygon points="60,80 64,80 82,14 50,16" fill="#fde68a" opacity="0.35" />
      <Car x="62" y="88" color={C.good} />
      <Car x="40" y="23" rot={90} color={C.grey} />
      <Tag x="122" y="50" size="3.6" color="#047857">LEFT-HAND BEND:</Tag>
      <Tag x="122" y="56" size="3.6" color="#047857">DIP EARLIER</Tag>
      <Tag x="122" y="63" size="3" weight={700}>than for a right-hand bend —</Tag>
      <Tag x="122" y="67.5" size="3" weight={700}>your lights are focused</Tag>
      <Tag x="122" y="72" size="3" weight={700}>more towards the left</Tag>
    </Frame>
  ),

  "follow-night": () => (
    <Frame title="Following another vehicle at night">
      <Night />
      <VRoad />
      <Car x="62" y="24" color={C.grey} />
      <rect x="57.8" y="30" width="2.2" height="1.4" fill="#ef4444" />
      <rect x="64" y="30" width="2.2" height="1.4" fill="#ef4444" />
      <Beam x={62} y={84} kind="dipped" reach={30} />
      <Car x="62" y="84" color={C.good} />
      <Tag x="138" y="30" size="3.3" weight={800}>keep well back,</Tag>
      <Tag x="138" y="35" size="3.3" weight={800}>dipped beam</Tag>
      <Tag x="22" y="20" size="3" weight={700} color={C.bad}>don't "drive on</Tag>
      <Tag x="22" y="24.5" size="3" weight={700} color={C.bad}>its tail lights" —</Tag>
      <Tag x="22" y="29" size="3" weight={700} color={C.bad}>a false sense</Tag>
      <Tag x="22" y="33.5" size="3" weight={700} color={C.bad}>of security</Tag>
    </Frame>
  ),

  "brake-dazzle": () => (
    <Frame title="Brake lights dazzling the driver behind">
      <Night />
      <VRoad />
      <rect x="45" y="6" width="35" height="3" fill={C.line} />
      <Car x="62" y="24" color={C.good} />
      <ellipse cx="62" cy="40" rx="10" ry="8" fill="#ef4444" opacity="0.35" />
      <rect x="57.8" y="30" width="2.2" height="1.4" fill="#ef4444" />
      <rect x="64" y="30" width="2.2" height="1.4" fill="#ef4444" />
      <Car x="62" y="62" color={C.grey} />
      <Tag x="22" y="20" size="3.2" weight={800} color="#047857">waiting at</Tag>
      <Tag x="22" y="25" size="3.2" weight={800} color="#047857">a junction:</Tag>
      <Tag x="22" y="30" size="3.2" weight={800} color="#047857">handbrake on,</Tag>
      <Tag x="22" y="35" size="3.2" weight={800} color="#047857">foot off the brake</Tag>
      <Tag x="138" y="40" size="3" weight={700} color={C.bad}>brake lights dazzle</Tag>
      <Tag x="138" y="44.5" size="3" weight={700} color={C.bad}>the driver behind</Tag>
      <Tag x="138" y="62" size="3" weight={700}>in fog: keep your</Tag>
      <Tag x="138" y="66.5" size="3" weight={700}>foot on the brake</Tag>
      <Tag x="138" y="71" size="3" weight={700}>to help following drivers</Tag>
    </Frame>
  ),

  "night-parking": () => (
    <Frame title="Parking at night">
      <Night />
      <VRoad />
      <Car x="51" y="56" color={C.good} />
      <rect x="47.3" y="62.6" width="2" height="1.4" fill="#ef4444" />
      <rect x="52.7" y="62.6" width="2" height="1.4" fill="#ef4444" />
      <circle cx="47.6" cy="49" r="0.9" fill="#fef9c3" />
      <circle cx="54.4" cy="49" r="0.9" fill="#fef9c3" />
      <Car x="109" y="40" color={C.bad} ghost />
      <Tag x="109" y="58" size="6" color={C.bad}>✗</Tag>
      <Car x="62" y="94" color={C.grey} />
      <Tag x="22" y="70" size="3" weight={800} color="#047857">on the left,</Tag>
      <Tag x="22" y="74.5" size="3" weight={800} color="#047857">reflectors facing</Tag>
      <Tag x="22" y="79" size="3" weight={800} color="#047857">following traffic</Tag>
      <Tag x="22" y="30" size="3" weight={700}>unlit road:</Tag>
      <Tag x="22" y="34.5" size="3" weight={700}>sidelights on</Tag>
      <Tag x="22" y="44" size="3" weight={700} color={C.bad}>headlights OFF</Tag>
      <Tag x="138" y="70" size="3" weight={800} color={C.bad}>not on the right —</Tag>
      <Tag x="138" y="74.5" size="3" weight={700}>except in a</Tag>
      <Tag x="138" y="79" size="3" weight={700}>one-way street</Tag>
    </Frame>
  ),

  "dark-car-dusk": () => (
    <Frame title="Dark-coloured cars at dusk">
      <defs>
        <linearGradient id="duskSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#334155" />
          <stop offset="1" stopColor="#a16207" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="160" height="70" fill="url(#duskSky)" />
      <rect x="0" y="70" width="160" height="30" fill="#4b5563" />
      <SideCar x="44" y="72" color="#1f2937" />
      <path d="M56 64 L76 58 L76 70 Z" fill="#fde68a" opacity="0.6" />
      <SideCar x="116" y="72" color="#e2e8f0" />
      <Tag x="44" y="84" size="3.3" weight={800}>dark car: lights on</Tag>
      <Tag x="44" y="89" size="3.3" weight={800}>sooner, off later</Tag>
      <Tag x="116" y="84" size="3.3" weight={800}>light-coloured car:</Tag>
      <Tag x="116" y="89" size="3.3" weight={800}>easier to see</Tag>
      <Tag x="80" y="14" size="3.6">DUSK</Tag>
      <Tag x="80" y="20" size="3" weight={700}>lights on before lighting-up time — to be seen</Tag>
    </Frame>
  ),

  /* Dashboard light symbols. variant: side | dipped | main | front-fog | rear-fog */
  "light-symbol": ({ variant = "dipped" }) => {
    const v = {
      side: ["#22c55e", "SIDELIGHTS", "to be seen — not to see by"],
      dipped: ["#22c55e", "DIPPED HEADLIGHTS", "short, aimed down and left"],
      main: ["#2563eb", "MAIN BEAM", "long — dip for others"],
      "front-fog": ["#22c55e", "FRONT FOG LIGHTS", "dense fog and falling snow only"],
      "rear-fog": ["#f59e0b", "REAR FOG LIGHTS", "visibility under 100 m"],
    }[variant];
    const [col, name, note] = v;
    const lamp = (cx, flip) => (
      <path d={flip ? `M${cx} 22 Q${cx + 16} 22 ${cx + 16} 37 Q${cx + 16} 52 ${cx} 52 Z` : `M${cx} 22 Q${cx - 16} 22 ${cx - 16} 37 Q${cx - 16} 52 ${cx} 52 Z`} fill="none" stroke={col} strokeWidth="3" strokeLinejoin="round" />
    );
    return (
      <Frame title={name}>
        <rect x="0" y="0" width="160" height="100" fill="#0f172a" />
        {variant === "side" ? (
          <g>
            <path d="M70 26 Q60 26 60 37 Q60 48 70 48 Z" fill="none" stroke={col} strokeWidth="2.6" />
            <path d="M90 26 Q100 26 100 37 Q100 48 90 48 Z" fill="none" stroke={col} strokeWidth="2.6" />
            {[30, 37, 44].map(y => <g key={y}><line x1="57" y1={y} x2="49" y2={y} stroke={col} strokeWidth="2.4" /><line x1="103" y1={y} x2="111" y2={y} stroke={col} strokeWidth="2.4" /></g>)}
          </g>
        ) : variant === "rear-fog" ? (
          <g>
            {lamp(70, true)}
            {[28, 37, 46].map(y => <line key={y} x1="90" y1={y} x2="104" y2={y} stroke={col} strokeWidth="2.6" />)}
            <path d="M97 22 Q93 30 97 37 Q101 44 97 52" fill="none" stroke={col} strokeWidth="2.2" />
          </g>
        ) : (
          <g>
            {lamp(92, false)}
            {[28, 37, 46].map(y => (
              <line key={y} x1="72" y1={y} x2="56" y2={variant === "dipped" ? y + 7 : y} stroke={col} strokeWidth="2.6" />
            ))}
            {variant === "front-fog" && <path d="M64 22 Q68 30 64 37 Q60 44 64 52" fill="none" stroke={col} strokeWidth="2.2" />}
          </g>
        )}
        <Tag x="80" y="74" size="4.6">{name}</Tag>
        <Tag x="80" y="82" size="3.4" weight={600}>{note}</Tag>
      </Frame>
    );
  },

  /* ---------------- weather & vision (Unit 1.10) ---------------- */
  "fog-distance": () => (
    <Frame title="Driving in fog">
      <VRoad />
      <Fog y0={70} />
      <Car x="62" y="30" color={C.grey} ghost />
      <rect x="57.8" y="36" width="2.2" height="1.4" fill="#ef4444" />
      <rect x="64" y="36" width="2.2" height="1.4" fill="#ef4444" />
      <Beam x={62} y={90} kind="dipped" reach={26} />
      <Car x="62" y="90" color={C.good} />
      <line x1="74" y1="82" x2="74" y2="62" stroke={C.good} strokeWidth="1" />
      <line x1="71" y1="82" x2="77" y2="82" stroke={C.good} strokeWidth="1" />
      <line x1="71" y1="62" x2="77" y2="62" stroke={C.good} strokeWidth="1" />
      <Tag x="138" y="72" size="3.2" weight={800} color="#047857">stop well within</Tag>
      <Tag x="138" y="77" size="3.2" weight={800} color="#047857">the distance you</Tag>
      <Tag x="138" y="82" size="3.2" weight={800} color="#047857">can see is clear</Tag>
      <Tag x="22" y="30" size="3" weight={800} color={C.bad}>don't hang on to</Tag>
      <Tag x="22" y="34.5" size="3" weight={800} color={C.bad}>its tail lights —</Tag>
      <Tag x="22" y="39" size="3" weight={700}>you'll be too close</Tag>
      <Tag x="22" y="82" size="3" weight={700}>dipped beam +</Tag>
      <Tag x="22" y="86.5" size="3" weight={700}>fog lights</Tag>
      <Tag x="80" y="9" size="4">FOG</Tag>
    </Frame>
  ),

  "fog-shadow": () => (
    <Frame title="Main beam behind another car in fog">
      <VRoad />
      <Fog y0={100} top={0.75} />
      <Beam x={62} y={90} kind="main" reach={84} />
      <Car x="62" y="40" color={C.grey} />
      <polygon points="58,32 66,32 70,6 54,6" fill="#0f172a" opacity="0.55" />
      <Car x="62" y="90" color={C.good} />
      <Tag x="22" y="20" size="3.2" weight={800} color={C.bad}>its own shadow</Tag>
      <Tag x="22" y="25" size="3.2" weight={800} color={C.bad}>falls ahead of it</Tag>
      <Tag x="138" y="66" size="3.2" weight={800}>✗ main beam in fog</Tag>
      <Tag x="138" y="71" size="3" weight={700}>shadows the car ahead,</Tag>
      <Tag x="138" y="75.5" size="3" weight={700}>and may dazzle</Tag>
      <Tag x="138" y="90" size="3.2" weight={800} color="#047857">✓ dipped beam</Tag>
    </Frame>
  ),

  "fog-junction": () => (
    <Frame title="At a junction in fog">
      <rect x="0" y="12" width="160" height="30" fill={C.road} />
      <line x1="0" y1="27" x2="160" y2="27" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <rect x="62" y="42" width="36" height="58" fill={C.road} />
      <line x1="62" y1="43.5" x2="80" y2="43.5" stroke={C.line} strokeWidth="1" strokeDasharray="2 1.5" />
      <Fog y0={45} top={0.95} />
      <Car x="71" y="56" color={C.good} />
      <ellipse cx="71" cy="68" rx="7" ry="5" fill="#ef4444" opacity="0.35" />
      <g className="vis-blink"><rect x="74.6" y="48.2" width="1.8" height="1.6" fill={C.amber} /></g>
      <path d="M62 50 q-3 3 0 6 M59 48 q-5 5 0 10" fill="none" stroke={C.ink} strokeWidth="0.7" />
      <Tag x="30" y="56" size="3" weight={800}>window open —</Tag>
      <Tag x="30" y="60.5" size="3" weight={800}>listen for traffic</Tag>
      <Tag x="30" y="74" size="3" weight={700}>horn, if it would</Tag>
      <Tag x="30" y="78.5" size="3" weight={700}>warn others</Tag>
      <Tag x="130" y="56" size="3" weight={800}>signal early</Tag>
      <Tag x="130" y="70" size="3" weight={700}>footbrake for short</Tag>
      <Tag x="130" y="74.5" size="3" weight={700}>stops — warns those</Tag>
      <Tag x="130" y="79" size="3" weight={700}>behind</Tag>
      <Tag x="80" y="94" size="3" weight={700} color={C.bad}>never use the centre line as a guide</Tag>
    </Frame>
  ),

  "stopping-weather": () => (
    <Frame title="Stopping distances in the wet and on ice">
      {[["DRY", 1, "#64748b", 16], ["WET", 2, "#3b82f6", 46], ["ICY", 10, "#93c5fd", 76]].map(([lbl, k, col, y]) => (
        <g key={lbl}>
          <Tag x="16" y={y + 4} size="4">{lbl}</Tag>
          <rect x="30" y={y - 4} width={Math.min(12 * k, 122)} height="10" rx="2" fill={col} />
          <SideCar x={30 + Math.min(12 * k, 122) - 2} y={y + 6} color={C.good} />
        </g>
      ))}
      <Tag x="64" y="35" size="3.2" weight={700}>at least double — tyres have less grip</Tag>
      <Tag x="92" y="95" size="3.2" weight={800} color="#1d4ed8">up to ten times as far</Tag>
    </Frame>
  ),

  "aquaplaning": () => (
    <Frame title="Steering goes light on water">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <rect x="0" y="66" width="160" height="34" fill={C.road} />
      <rect x="0" y="62" width="160" height="5" fill="#60a5fa" opacity="0.75" />
      <SideCar x="70" y="62" color={C.good} />
      <path d="M86 61 q6 -6 12 -2 q4 -6 10 -1" fill="none" stroke="#3b82f6" strokeWidth="1.2" />
      <Tag x="80" y="14" size="4">STEERING UNRESPONSIVE?</Tag>
      <Tag x="80" y="21" size="3.3" weight={600}>water is stopping the tyres gripping the road</Tag>
      <Tag x="80" y="80" size="3.6" color="#047857">ease off the accelerator</Tag>
      <Tag x="80" y="86" size="3.6" color="#047857">slow down gradually</Tag>
      <Tag x="80" y="95" size="3" weight={700} color={C.bad}>no sudden braking or steering</Tag>
    </Frame>
  ),

  "crosswind": () => (
    <Frame title="Strong crosswinds">
      <VRoad />
      <rect x="0" y="0" width="40" height="100" fill="#4d7c0f" />
      <rect x="0" y="34" width="40" height="18" fill={C.ground} />
      {[38, 43, 48].map(y => <Arrow key={y} d={`M4 ${y} L36 ${y}`} color="#0ea5e9" w={1.1} />)}
      <Lorry x={62} y={30} len={30} />
      <text x="0" y="0" fontSize="7" textAnchor="middle" dominantBaseline="central" transform="translate(92 40) rotate(-90)">🏍️</text>
      <path d="M90 42 Q86 34 92 26" fill="none" stroke={C.bad} strokeWidth="0.9" strokeDasharray="2 1.5" />
      <Car x="62" y="86" color={C.good} />
      <Tag x="20" y="30" size="3" weight={800} color="#0369a1">gap in the hedge</Tag>
      <Tag x="20" y="62" size="2.8" weight={700}>gusts blow cyclists,</Tag>
      <Tag x="20" y="66.5" size="2.8" weight={700}>motorcyclists, riders</Tag>
      <Tag x="20" y="71" size="2.8" weight={700}>— and cars — off course</Tag>
      <Tag x="138" y="66" size="3.1" weight={800}>keep well back from</Tag>
      <Tag x="138" y="70.5" size="3.1" weight={800}>a motorcyclist passing</Tag>
      <Tag x="138" y="75" size="3.1" weight={800}>a high-sided vehicle</Tag>
      <Tag x="138" y="90" size="3" weight={700}>open roads, bridges, gaps</Tag>
    </Frame>
  ),

  "snowplough": () => (
    <Frame title="Snowploughs">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <VRoad kerb={false} />
      <rect x="45" y="0" width="35" height="50" fill="#e2e8f0" />
      <rect x="80" y="0" width="35" height="100" fill="#cbd5e1" opacity="0.5" />
      <g transform="translate(62 54)">
        <rect x="-6" y="-10" width="12" height="22" rx="1.5" fill="#f59e0b" stroke="#0f172a" strokeWidth="0.4" />
        <rect x="-9" y="-14" width="18" height="3" fill="#475569" />
      </g>
      {[[-1, 44], [1, 80]].map(([d, x]) => (
        <g key={d}>{[0, 1, 2].map(i => <circle key={i} cx={x + d * i * 4} cy={36 + i * 3} r="1.6" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.3" />)}</g>
      ))}
      <Car x="62" y="88" color={C.good} />
      <Tag x="22" y="20" size="3" weight={800}>snow thrown</Tag>
      <Tag x="22" y="24.5" size="3" weight={800}>out both sides</Tag>
      <Tag x="138" y="40" size="3.1" weight={800} color={C.bad}>never overtake —</Tag>
      <Tag x="138" y="44.5" size="3.1" weight={700}>unless the lane you'll</Tag>
      <Tag x="138" y="49" size="3.1" weight={700}>use is already cleared</Tag>
      <Tag x="138" y="76" size="3" weight={700}>care passing gritters</Tag>
      <Tag x="138" y="80.5" size="3" weight={700}>spreading salt</Tag>
    </Frame>
  ),

  "icy-bend": () => (
    <Frame title="Ice on a bend">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <path d="M62 100 L62 50 Q62 20 100 18 L160 18 L160 46 L102 46 Q88 48 88 62 L88 100 Z" fill={C.road} />
      <path d="M75 100 L75 56 Q75 32 102 32 L160 32" fill="none" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <path d="M62 52 Q62 20 100 18 L160 18 L160 46 L102 46 Q88 48 88 60 Z" fill="#bfdbfe" opacity="0.55" />
      <rect x="63" y="66" width="11" height="22" fill={C.good} opacity="0.35" />
      <Car x="68" y="94" color={C.good} />
      <Arrow d="M68 86 L68 60 Q68 38 92 30 L140 26" color="#047857" w={1.1} dash="2 1.6" />
      <Tag x="30" y="74" size="3.2" weight={800} color="#047857">brake gently</Tag>
      <Tag x="30" y="79" size="3.2" weight={800} color="#047857">on the straight</Tag>
      <Tag x="120" y="64" size="3.2" weight={800}>then steer smoothly</Tag>
      <Tag x="120" y="69" size="3.2" weight={800}>round — no sudden</Tag>
      <Tag x="120" y="74" size="3.2" weight={800}>actions</Tag>
      <Tag x="40" y="10" size="3" weight={700}>light steering, no tyre noise = ice</Tag>
    </Frame>
  ),

  "low-sun": () => (
    <Frame title="Low sun on a wet road">
      <rect x="0" y="0" width="160" height="100" fill="#fef3c7" />
      <circle cx="80" cy="30" r="12" fill="#fbbf24" />
      <circle cx="80" cy="30" r="20" fill="#fde68a" opacity="0.6" />
      <path d="M60 100 L76 44 L84 44 L100 100 Z" fill={C.road} />
      <path d="M68 100 L78 44 L82 44 L92 100 Z" fill="#ffffff" opacity="0.55" />
      <line x1="80" y1="100" x2="80" y2="46" stroke={C.line} strokeWidth="0.6" strokeDasharray="4 4" opacity="0.4" />
      <Tag x="80" y="8" size="3.6">LOW SUN, WET ROAD</Tag>
      <Tag x="30" y="64" size="3" weight={800}>glare off the road</Tag>
      <Tag x="30" y="68.5" size="3" weight={800}>hides the markings</Tag>
      <Tag x="130" y="58" size="3" weight={800} color="#047857">sun visor, correct</Tag>
      <Tag x="130" y="62.5" size="3" weight={800} color="#047857">sunglasses</Tag>
      <Tag x="130" y="74" size="3" weight={800}>clean screen inside</Tag>
      <Tag x="130" y="78.5" size="3" weight={800}>and out</Tag>
      <Tag x="130" y="90" size="3" weight={800} color={C.bad}>dazzled? slow down,</Tag>
      <Tag x="130" y="94.5" size="3" weight={800} color={C.bad}>stop if necessary</Tag>
    </Frame>
  ),

  "demist": () => (
    <Frame title="Clearing a misted windscreen">
      <rect x="0" y="0" width="160" height="100" fill="#cbd5e1" />
      <path d="M14 70 Q80 6 146 70 Z" fill="#94a3b8" stroke="#334155" strokeWidth="1.2" />
      <path d="M14 70 Q80 6 146 70 Z" fill="#f8fafc" opacity="0.55" />
      <path d="M40 66 Q80 26 120 66 Z" fill="#7dd3fc" opacity="0.55" />
      <rect x="0" y="70" width="160" height="30" fill="#334155" />
      {[[40, "FRESH AIR", true], [120, "RECIRCULATE", false]].map(([x, lbl, ok]) => (
        <g key={lbl}>
          <rect x={x - 18} y="76" width="36" height="12" rx="3" fill={ok ? "#047857" : "#7f1d1d"} />
          <text x={x} y="84.2" fontSize="4.6" fontWeight="900" textAnchor="middle" fill="#ffffff" fontFamily="system-ui">{lbl}</text>
          <Tag x={x} y="96" size="4" color={ok ? "#047857" : C.bad}>{ok ? "✓" : "✗"}</Tag>
        </g>
      ))}
      <Tag x="80" y="44" size="3.4" weight={800}>demister + warm, dry air</Tag>
      <Tag x="80" y="50" size="3" weight={700}>open a window to let moisture out</Tag>
      <Tag x="80" y="22" size="3" weight={700}>clean the inside before you set out</Tag>
    </Frame>
  ),

  "winter-kit": () => (
    <Frame title="Winter emergency kit">
      <IconGrid ring={C.good} rows={3} size={8} cells={[
        ["🧊", "de-icer, scraper"], ["🔦", "torch"], ["🧥", "warm clothes"],
        ["🥾", "boots"], ["🩹", "first aid kit"], ["🔋", "jump leads"],
        ["🪏", "shovel"], ["☕", "warm drink"], ["🍫", "emergency food"],
      ]} />
    </Frame>
  ),

  /* ---------------- tunnels (Unit 1.11) ---------------- */
  "tunnel-sign": () => (
    <Frame title="Tunnel ahead warning sign">
      <rect x="78" y="62" width="4" height="34" fill="#475569" />
      <path d="M80 6 L112 38 L80 70 L48 38 Z" fill="#facc15" stroke="#111827" strokeWidth="1.6" />
      <path d="M68 50 L68 36 Q68 24 80 24 Q92 24 92 36 L92 50 Z" fill="#111827" />
      <path d="M72 50 L72 37 Q72 28 80 28 Q88 28 88 37 L88 50 Z" fill="#facc15" />
      <path d="M76 50 L78 36 L82 36 L84 50 Z" fill="#111827" />
      <Tag x="80" y="86" size="4">TUNNEL AHEAD</Tag>
    </Frame>
  ),

  "tunnel-approach": () => (
    <Frame title="Before entering a tunnel">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <rect x="0" y="40" width="160" height="60" fill="#a3c38a" />
      <path d="M30 40 L30 18 Q30 2 80 2 Q130 2 130 18 L130 40 Z" fill="#78716c" />
      <path d="M44 40 L44 22 Q44 10 80 10 Q116 10 116 22 L116 40 Z" fill="#111827" />
      <path d="M50 100 L66 40 L94 40 L110 100 Z" fill={C.road} />
      <line x1="80" y1="40" x2="80" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="5 4" />
      <path d="M68 92 L72 60 L78 60 L76 92 Z" fill="#fde68a" opacity="0.45" />
      <Tag x="22" y="54" size="3.2" weight={800}>🕶️ sunglasses off</Tag>
      <Tag x="22" y="59" size="2.8" weight={700}>in good time</Tag>
      <Tag x="22" y="72" size="3.2" weight={800}>💡 dipped headlights</Tag>
      <Tag x="138" y="54" size="3.2" weight={800}>⛽ check fuel</Tag>
      <Tag x="138" y="68" size="3.2" weight={800}>📻 FM frequency</Tag>
      <Tag x="138" y="73" size="2.8" weight={700}>shown before entry</Tag>
      <Tag x="80" y="96" size="3" weight={800} color={C.bad}>unwell or unroadworthy? don't enter</Tag>
    </Frame>
  ),

  "tunnel-distance": () => (
    <Frame title="Keeping your distance in a tunnel">
      <TunnelBore />
      <Car x="60" y="12" color={C.grey} />
      <Car x="60" y="52" color={C.good} />
      <Lorry x={100} y={30} len={26} />
      <line x1="50" y1="20" x2="50" y2="44" stroke={C.good} strokeWidth="0.9" />
      <line x1="47" y1="20" x2="53" y2="20" stroke={C.good} strokeWidth="0.9" />
      <line x1="47" y1="44" x2="53" y2="44" stroke={C.good} strokeWidth="0.9" />
      <Car x="100" y="92" color={C.grey} />
      <line x1="110" y1="44" x2="110" y2="84" stroke={C.amber} strokeWidth="0.9" />
      <Tag x="18" y="30" size="3.3" weight={800} color="#047857">cars:</Tag>
      <Tag x="18" y="35" size="3.3" weight={800} color="#047857">at least 50 m</Tag>
      <Tag x="143" y="62" size="3.3" weight={800} color="#b45309">behind</Tag>
      <Tag x="143" y="67" size="3.3" weight={800} color="#b45309">a lorry:</Tag>
      <Tag x="143" y="72" size="3.3" weight={800} color="#b45309">100 m</Tag>
      <Tag x="18" y="70" size="2.9" weight={700}>stay in your lane;</Tag>
      <Tag x="18" y="74.5" size="2.9" weight={700}>overtake only if</Tag>
      <Tag x="18" y="79" size="2.9" weight={700}>totally necessary</Tag>
      <Tag x="18" y="90" size="2.9" weight={800} color={C.bad}>never reverse</Tag>
      <Tag x="18" y="94.5" size="2.9" weight={800} color={C.bad}>or U-turn</Tag>
    </Frame>
  ),

  /* A fire in a tunnel. variant: ahead | behind */
  "tunnel-fire": ({ variant = "ahead" }) => {
    const ahead = variant === "ahead";
    return (
      <Frame title={ahead ? "Smoke or fire ahead" : "Smoke or fire behind"}>
        <TunnelBore />
        <text x="60" y={ahead ? 14 : 94} fontSize="11" textAnchor="middle">🔥</text>
        <ellipse cx="80" cy={ahead ? 14 : 90} rx="40" ry="12" fill="#6b7280" opacity="0.55" />
        <Car x="60" y="50" color={C.good} />
        {ahead ? (
          <g>
            <rect x="20" y="40" width="12" height="12" rx="1" fill="#16a34a" />
            <text x="26" y="49" fontSize="8" textAnchor="middle">🏃</text>
            <Arrow d="M52 54 L36 50" color="#16a34a" w={1.2} />
            <Tag x="140" y="40" size="3.2" weight={800}>stop, engine off,</Tag>
            <Tag x="140" y="45" size="3.2" weight={800}>leave the vehicle</Tag>
            <Tag x="140" y="58" size="3.2" weight={800} color="#047857">out by the nearest</Tag>
            <Tag x="140" y="63" size="3.2" weight={800} color="#047857">pedestrian exit</Tag>
            <Tag x="140" y="76" size="2.9" weight={700}>distance markers on</Tag>
            <Tag x="140" y="80.5" size="2.9" weight={700}>the wall show the way</Tag>
            <Tag x="140" y="14" size="3.6" color={C.bad}>FIRE AHEAD</Tag>
          </g>
        ) : (
          <g>
            <Arrow d="M60 42 L60 8" />
            <Tag x="140" y="90" size="3.6" color={C.bad}>FIRE BEHIND</Tag>
            <Tag x="140" y="40" size="3.4" weight={800} color="#047857">drive on,</Tag>
            <Tag x="140" y="45" size="3.4" weight={800} color="#047857">out of the tunnel</Tag>
          </g>
        )}
      </Frame>
    );
  },

  "tunnel-safety": () => (
    <Frame title="Tunnel safety features">
      <TunnelBore />
      <rect x="20" y="30" width="20" height="34" fill={C.road} />
      <line x1="40" y1="30" x2="40" y2="64" stroke={C.line} strokeWidth="0.8" strokeDasharray="2 2" />
      <Car x="30" y="48" color={C.good} />
      <g className="vis-blink">
        {[[25.6, 40], [32.6, 40], [25.6, 54.4], [32.6, 54.4]].map(([x, y], i) => <rect key={i} x={x} y={y} width="1.8" height="1.6" fill={C.amber} />)}
      </g>
      {[[37, 8, "☎️"], [37, 80, "🧯"], [123, 20, "📹"], [123, 60, "📢"]].map(([x, y, ic], i) => (
        <g key={i}><circle cx={x} cy={y} r="4.6" fill="#ffffff" stroke="#334155" strokeWidth="0.4" /><text x={x} y={y + 1.8} fontSize="5" textAnchor="middle">{ic}</text></g>
      ))}
      <rect x="56" y="2" width="48" height="9" rx="1" fill="#111827" stroke="#facc15" strokeWidth="0.5" />
      <text x="80" y="8.4" fontSize="4.2" fontWeight="800" textAnchor="middle" fill="#facc15" fontFamily="monospace">KEEP DISTANCE</text>
      <Tag x="16" y="22" size="2.8" weight={800}>emergency</Tag>
      <Tag x="16" y="26" size="2.8" weight={800}>lay-by ~1 km</Tag>
      <Tag x="16" y="8" size="2.8" weight={700}>phones: left</Tag>
      <Tag x="16" y="90" size="2.8" weight={700}>hydrants 125 m,</Tag>
      <Tag x="16" y="94" size="2.8" weight={700}>hose reels 60 m</Tag>
      <Tag x="143" y="30" size="2.8" weight={700}>CCTV sees</Tag>
      <Tag x="143" y="34" size="2.8" weight={700}>every part</Tag>
      <Tag x="143" y="70" size="2.8" weight={700}>loudspeakers</Tag>
      <Tag x="143" y="74" size="2.8" weight={700}>and message</Tag>
      <Tag x="143" y="78" size="2.8" weight={700}>signs: obey</Tag>
    </Frame>
  ),

  "tunnel-banned": () => (
    <Frame title="Tunnel restrictions">
      <IconGrid rows={2} cells={[
        ["🚶", "no pedestrians"], ["L", "no learner drivers"], ["🚲", "no pedal cyclists"],
        ["📏", "high or wide: check limits"], ["☣️", "hazardous loads: permission"], ["↩️", "never reverse or U-turn"],
      ]} />
    </Frame>
  ),

  /* ================= BOOK 2 ================= */
  /* ---------------- car controls (Unit 2.1) ---------------- */
  "driving-seat": () => (
    <Frame title="A good driving position">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      {/* seat */}
      <path d="M38 88 L72 88 L74 80 L44 78 Z" fill="#475569" />
      <path d="M38 88 L30 40 Q29 34 35 34 L40 34 L46 78 Z" fill="#475569" />
      <rect x="29" y="22" width="12" height="12" rx="3" fill="#64748b" />
      {/* driver */}
      <circle cx="42" cy="26" r="7" fill="#fcd34d" stroke="#0f172a" strokeWidth="0.5" />
      <path d="M40 34 L46 72" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" />
      <path d="M46 72 L76 70" stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round" />
      <path d="M76 70 L96 86" stroke="#1e3a8a" strokeWidth="5" strokeLinecap="round" />
      <path d="M95 86 L104 82" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      <path d="M44 42 L66 50 L84 42" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* wheel and pedal */}
      <line x1="88" y1="30" x2="84" y2="56" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
      <line x1="104" y1="74" x2="110" y2="90" stroke="#111827" strokeWidth="2" />
      <rect x="102" y="70" width="8" height="4" rx="1" fill="#111827" />
      <path d="M36 42 L58 70" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="2 1.5" />
      <Tag x="128" y="16" size="3.2" weight={800}>reach every control</Tag>
      <Tag x="128" y="21" size="3.2" weight={800}>without stretching</Tag>
      <Tag x="128" y="36" size="3" weight={700} color="#047857">arms relaxed,</Tag>
      <Tag x="128" y="40.5" size="3" weight={700} color="#047857">bent at the elbows</Tag>
      <Tag x="128" y="58" size="3" weight={700} color="#047857">knee slightly bent</Tag>
      <Tag x="128" y="62.5" size="3" weight={700} color="#047857">with the clutch down</Tag>
      <Tag x="18" y="12" size="3" weight={700}>head restraint</Tag>
      <Tag x="18" y="54" size="2.8" weight={700}>seat belt</Tag>
      <Tag x="80" y="97" size="3" weight={700}>seat locked in position · clear view of the road</Tag>
    </Frame>
  ),

  "pedals": () => (
    <Frame title="Foot controls: A, B and C">
      <rect x="0" y="0" width="160" height="100" fill="#1f2937" />
      {[[40, 26, 22, "C", "CLUTCH", "left foot", "#f59e0b"], [80, 26, 22, "B", "BRAKE", "right foot", "#ef4444"], [120, 14, 30, "A", "ACCELERATOR", "right foot", "#22c55e"]].map(([x, w, h, l, name, foot, col]) => (
        <g key={l}>
          <line x1={x} y1="6" x2={x} y2="40" stroke="#6b7280" strokeWidth="2" />
          <rect x={x - w / 2} y="40" width={w} height={h} rx="3" fill="#374151" stroke={col} strokeWidth="1.4" />
          {[0, 1, 2, 3].map(i => <line key={i} x1={x - w / 2 + 3} y1={44 + i * (h - 6) / 3} x2={x + w / 2 - 3} y2={44 + i * (h - 6) / 3} stroke="#4b5563" strokeWidth="1" />)}
          <text x={x} y="58" fontSize="12" fontWeight="900" textAnchor="middle" fill={col} fontFamily="system-ui">{l}</text>
          <Tag x={x} y="82" size="3.6" weight={900} color={col}>{name}</Tag>
          <Tag x={x} y="88" size="3" weight={700}>{foot}</Tag>
        </g>
      ))}
      <Tag x="80" y="97" size="3" weight={700}>left to right: Clutch · Brake · Accelerator</Tag>
    </Frame>
  ),

  /* Hands on the wheel. variant: ten-two | quarter-three | crossed */
  "wheel-hands": ({ variant = "quarter-three" }) => {
    const ang = { "ten-two": [-60, 60], "quarter-three": [-90, 90], crossed: [20, -30] }[variant];
    const bad = variant === "crossed";
    const pos = a => [80 + 30 * Math.sin(a * Math.PI / 180), 48 - 30 * Math.cos(a * Math.PI / 180)];
    return (
      <Frame title="Holding the steering wheel">
        <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
        <circle cx="80" cy="48" r="30" fill="none" stroke="#111827" strokeWidth="5" />
        <circle cx="80" cy="48" r="8" fill="#374151" />
        {[-90, 90, 180].map(a => { const [x, y] = pos(a); return <line key={a} x1="80" y1="48" x2={x} y2={y} stroke="#374151" strokeWidth="3" />; })}
        {ang.map((a, i) => { const [x, y] = pos(a); return <circle key={i} cx={x} cy={y} r="5.5" fill={bad ? "#fca5a5" : "#fcd34d"} stroke="#0f172a" strokeWidth="0.6" />; })}
        {bad && <path d="M60 60 L100 36 M60 36 L100 60" stroke={C.bad} strokeWidth="1.4" opacity="0.7" />}
        <Tag x="80" y="88" size="4" color={bad ? C.bad : "#047857"}>
          {{ "ten-two": "TEN TO TWO", "quarter-three": "QUARTER TO THREE", crossed: "✗ HANDS CROSSED" }[variant]}
        </Tag>
        <Tag x="80" y="94" size="3" weight={700}>{bad ? "less control — and the airbag drives your arms into your face" : "light but firm grip, thumbs up, both hands on"}</Tag>
      </Frame>
    );
  },

  "push-pull": () => (
    <Frame title="Push-pull steering">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      {[[40, "①", "left hand pulls down"], [120, "②", "right hand pushes up"]].map(([cx, n, lbl], k) => (
        <g key={cx}>
          <circle cx={cx} cy="46" r="26" fill="none" stroke="#111827" strokeWidth="4.5" />
          <circle cx={cx} cy="46" r="6" fill="#374151" />
          <circle cx={cx - 26} cy={k ? 52 : 34} r="4.6" fill="#fcd34d" stroke="#0f172a" strokeWidth="0.5" />
          <circle cx={cx + 26} cy={k ? 34 : 52} r="4.6" fill="#fcd34d" stroke="#0f172a" strokeWidth="0.5" />
          <Arrow d={k ? `M${cx + 30} 56 Q${cx + 34} 40 ${cx + 26} 28` : `M${cx - 30} 30 Q${cx - 34} 48 ${cx - 24} 62`} color="#047857" w={1.2} />
          <Tag x={cx} y="84" size="3.4" weight={800}>{n} {lbl}</Tag>
        </g>
      ))}
      <Tag x="80" y="10" size="3.8">PUSH-PULL — turning left</Tag>
      <Tag x="80" y="94" size="3" weight={700}>feed the wheel through your hands · never cross them</Tag>
    </Frame>
  ),

  "gear-pattern": () => (
    <Frame title="A typical gear pattern">
      <rect x="0" y="0" width="160" height="100" fill="#1f2937" />
      <path d="M40 50 L120 50 M40 22 L40 78 M80 22 L80 78 M120 22 L120 78" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" />
      {[[40, 22, "1"], [40, 78, "2"], [80, 22, "3"], [80, 78, "4"], [120, 22, "5"], [120, 78, "R"]].map(([x, y, g]) => (
        <g key={g}>
          <circle cx={x} cy={y} r="7" fill={g === "R" ? "#7f1d1d" : "#111827"} stroke="#e5e7eb" strokeWidth="1" />
          <text x={x} y={y + 3.4} fontSize="9" fontWeight="900" textAnchor="middle" fill="#ffffff" fontFamily="system-ui">{g}</text>
        </g>
      ))}
      <circle cx="80" cy="50" r="3" fill="#f59e0b" />
      <Tag x="88" y="47" size="2.8" weight={800} anchor="start">neutral</Tag>
      <Tag x="40" y="94" size="2.9" weight={800}>palm towards</Tag>
      <Tag x="40" y="98" size="2.9" weight={800}>passenger</Tag>
      <Tag x="80" y="94" size="2.9" weight={800}>palm on top</Tag>
      <Tag x="120" y="94" size="2.9" weight={800}>palm towards</Tag>
      <Tag x="120" y="98" size="2.9" weight={800}>driver</Tag>
      <Tag x="22" y="10" size="3" weight={800} color="#047857">1st: most powerful</Tag>
      <Tag x="140" y="8" size="3" weight={800} color="#047857">top: least powerful,</Tag>
      <Tag x="140" y="13" size="3" weight={800} color="#047857">most economical</Tag>
    </Frame>
  ),

  /* The clutch. variant: up (engaged) | down (disengaged) | biting */
  "clutch-plates": ({ variant = "up" }) => {
    const gap = { up: 0, biting: 4, down: 18 }[variant];
    const aL = 66 - gap / 2, bL = 74 + gap / 2;   /* plate left edges, 8 wide */
    const pad = { up: [36, 64], biting: [34, 77], down: [29, 89] }[variant];
    const col = { up: "#047857", biting: "#b45309", down: C.bad }[variant];
    return (
      <Frame title="How the clutch works">
        <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
        {/* shafts and plates */}
        <rect x="6" y="31" width={aL - 6} height="7" fill="#64748b" />
        <rect x={bL + 8} y="31" width={154 - bL - 8} height="7" fill="#64748b" />
        <rect x={aL} y="10" width="8" height="49" rx="2" fill="#475569" />
        <rect x={bL} y="10" width="8" height="49" rx="2" fill="#b45309" />
        {variant !== "down" && [16, 48].map(y => (
          <path key={y} d={`M${bL + 10} ${y} l3 -3 l3 6 l3 -6 l3 6 l3 -3`} fill="none" stroke="#0f172a" strokeWidth="0.9" />
        ))}
        {/* drive: full, partial, none */}
        {variant === "up" && <Arrow d="M10 66 L150 66" color={col} w={2.4} />}
        {variant === "biting" && <Arrow d="M10 66 L120 66" color={col} w={1.6} dash="3 2" />}
        {variant === "down" && (
          <g>
            <Arrow d="M10 66 L58 66" color="#475569" w={2} />
            <text x="80" y="70" fontSize="10" fontWeight="900" textAnchor="middle" fill={C.bad} fontFamily="system-ui">✗</text>
          </g>
        )}
        {/* the pedal */}
        <rect x="6" y="56" width="40" height="40" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />
        <line x1="8" y1="93" x2="44" y2="93" stroke="#334155" strokeWidth="1.2" />
        <circle cx="14" cy="60" r="1.6" fill="#334155" />
        <line x1="14" y1="60" x2={pad[0]} y2={pad[1]} stroke="#111827" strokeWidth="2" />
        <rect x={pad[0] - 3} y={pad[1] - 1.5} width="8" height="3.4" rx="1" fill={col} transform={`rotate(-30 ${pad[0]} ${pad[1]})`} />
        <Tag x="26" y="52" size="2.8" weight={800}>clutch pedal</Tag>
        <Tag x="22" y="26" size="3.2" weight={800}>ENGINE</Tag>
        <Tag x="136" y="26" size="3.2" weight={800}>GEARBOX → wheels</Tag>
        <Tag x="102" y="82" size="3.8" color={col}>
          {{ up: "PEDAL UP — plates held together", down: "PEDAL DOWN — plates apart", biting: "BITING POINT — plates just touching" }[variant]}
        </Tag>
        <Tag x="102" y="89" size="2.9" weight={700}>
          {{ up: "spring pressure: the engine drives the wheels", down: "the engine runs without driving the wheels", biting: "engine note drops slightly — felt and heard" }[variant]}
        </Tag>
      </Frame>
    );
  },

  "oversteer": () => (
    <Frame title="Oversteer and understeer">
      <path d="M40 100 L40 60 Q40 22 80 20 L160 20 L160 46 L82 46 Q66 48 66 64 L66 100 Z" fill={C.road} />
      <Car x="53" y="88" color={C.good} />
      <Arrow d="M53 78 L53 62 Q53 34 86 33 L150 33" />
      <path d="M53 76 Q55 54 70 52 L92 60" fill="none" stroke={C.bad} strokeWidth="1.3" strokeDasharray="2 1.6" />
      <path d="M53 78 L54 56 Q58 26 96 12 L110 6" fill="none" stroke={C.amber} strokeWidth="1.3" strokeDasharray="2 1.6" />
      <Tag x="122" y="42" size="3.2" weight={800} color="#047857">what you steered for</Tag>
      <Tag x="112" y="72" size="3.3" weight={800} color={C.bad}>OVERSTEER</Tag>
      <Tag x="112" y="77" size="2.9" weight={700}>turns MORE than you expect</Tag>
      <Tag x="122" y="8" size="3.3" weight={800} color="#b45309">UNDERSTEER</Tag>
      <Tag x="122" y="13" size="2.9" weight={700}>turns LESS than you expect</Tag>
      <Tag x="112" y="92" size="2.8" weight={700}>steering lock: the angle the front wheels can turn</Tag>
    </Frame>
  ),

  "progressive-brake": () => (
    <Frame title="Progressive braking">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <line x1="20" y1="80" x2="148" y2="80" stroke="#334155" strokeWidth="0.8" />
      <line x1="20" y1="80" x2="20" y2="14" stroke="#334155" strokeWidth="0.8" />
      <path d="M20 80 Q40 78 60 56 Q80 30 100 28 Q120 30 140 70" fill="none" stroke="#047857" strokeWidth="2" />
      <path d="M20 80 L24 20 L44 20 L46 80" fill="none" stroke={C.bad} strokeWidth="1.2" strokeDasharray="2 1.6" />
      <Tag x="40" y="70" size="3" weight={800} color="#047857">① light</Tag>
      <Tag x="88" y="22" size="3" weight={800} color="#047857">② firmer as it slows</Tag>
      <Tag x="132" y="56" size="3" weight={800} color="#047857">③ ease off</Tag>
      <Tag x="132" y="61" size="3" weight={800} color="#047857">to stop</Tag>
      <Tag x="50" y="14" size="3" weight={800} color={C.bad}>✗ harsh: all at once</Tag>
      <Tag x="84" y="90" size="3" weight={700}>time →</Tag>
      <Tag x="10" y="48" size="2.8" weight={700}>pressure</Tag>
    </Frame>
  ),

  "ignition": () => (
    <Frame title="Ignition switch positions">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <circle cx="56" cy="50" r="28" fill="#e2e8f0" stroke="#334155" strokeWidth="1.4" />
      <rect x="52" y="30" width="8" height="40" rx="3" fill="#94a3b8" stroke="#334155" strokeWidth="0.8" transform="rotate(30 56 50)" />
      {[["0", -60], ["1", -10], ["2", 30], ["3", 70]].map(([n, a]) => {
        const x = 56 + 36 * Math.sin(a * Math.PI / 180), y = 50 - 36 * Math.cos(a * Math.PI / 180);
        return <text key={n} x={x} y={y + 2} fontSize="7" fontWeight="900" textAnchor="middle" fill="#0f172a" fontFamily="system-ui">{n}</text>;
      })}
      <Tag x="124" y="24" size="3.2" weight={800}>1 · accessories</Tag>
      <Tag x="124" y="29" size="2.8" weight={600}>e.g. radio</Tag>
      <Tag x="124" y="44" size="3.2" weight={800}>2 · ignition</Tag>
      <Tag x="124" y="49" size="2.8" weight={600}>and instruments</Tag>
      <Tag x="124" y="64" size="3.2" weight={800}>3 · starter</Tag>
      <Tag x="124" y="69" size="2.8" weight={600}>release once it starts</Tag>
      <Tag x="80" y="94" size="3" weight={700}>before starting: parking brake on, gear lever in neutral (P in an automatic)</Tag>
    </Frame>
  ),

  "warning-colours": () => (
    <Frame title="Dashboard warning-light colours">
      <rect x="0" y="0" width="160" height="100" fill="#0f172a" />
      {[[30, "#ef4444", "RED", "danger", "(!)"], [80, "#f59e0b", "AMBER", "warning", "⚠"], [130, "#22c55e", "GREEN", "working / in use", "⇦⇨"]].map(([x, col, name, mean, sym]) => (
        <g key={name}>
          <circle cx={x} cy="38" r="16" fill="#111827" stroke={col} strokeWidth="2" />
          <text x={x} y="43" fontSize="11" fontWeight="900" textAnchor="middle" fill={col} fontFamily="system-ui">{sym}</text>
          <Tag x={x} y="70" size="4.2" weight={900} color={col}>{name}</Tag>
          <Tag x={x} y="77" size="3.2" weight={700}>{mean}</Tag>
        </g>
      ))}
      <Tag x="80" y="94" size="3" weight={700}>red or amber while driving usually warns of danger</Tag>
    </Frame>
  ),

  "parking-brake": () => (
    <Frame title="Applying the handbrake">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <rect x="20" y="70" width="60" height="10" rx="2" fill="#475569" />
      <path d="M28 72 L64 34" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <circle cx="66" cy="32" r="4" fill="#ef4444" />
      <Arrow d="M74 40 L74 22" color="#047857" w={1.4} />
      <text x="56" y="58" fontSize="6" fontWeight="900" fill="#ffffff" textAnchor="middle" transform="rotate(-48 56 58)" fontFamily="system-ui">P</text>
      <circle cx="124" cy="40" r="15" fill="#111827" stroke="#ef4444" strokeWidth="2" />
      <text x="124" y="45" fontSize="12" fontWeight="900" textAnchor="middle" fill="#ef4444" fontFamily="system-ui">(!)</text>
      <Tag x="124" y="66" size="3" weight={800}>check only the</Tag>
      <Tag x="124" y="70.5" size="3" weight={800}>parking-brake light shows</Tag>
      <Tag x="44" y="12" size="3" weight={800}>press the button, pull up firmly,</Tag>
      <Tag x="44" y="17" size="3" weight={800}>release the button</Tag>
      <Tag x="80" y="92" size="3" weight={700}>usually works on the rear wheels · electric: a button marked "P"</Tag>
    </Frame>
  ),

  /* ---------------- driving mirrors (Unit 2.2) ---------------- */
  "mirror-coverage": () => (
    <Frame title="What the mirrors cover — and the blind spots">
      <rect x="40" y="0" width="80" height="100" fill={C.road} />
      <line x1="80" y1="0" x2="80" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <path d="M62 32 L54 100 L70 100 Z" fill="#3b82f6" opacity="0.4" />
      <path d="M57 22 L36 100 L50 100 Z" fill="#22c55e" opacity="0.45" />
      <path d="M67 22 L80 100 L96 100 Z" fill="#22c55e" opacity="0.45" />
      <path d="M57 26 L28 34 L42 74 Z" fill={C.bad} opacity="0.45" />
      <path d="M67 26 L100 36 L84 78 Z" fill={C.bad} opacity="0.45" />
      <Car x="62" y="24" color={C.good} />
      <Tag x="62" y="94" size="3" weight={800} color="#1e40af">interior</Tag>
      <Tag x="20" y="40" size="3" weight={800} color="#047857">nearside</Tag>
      <Tag x="20" y="44.5" size="3" weight={800} color="#047857">door mirror</Tag>
      <Tag x="140" y="40" size="3" weight={800} color="#047857">offside</Tag>
      <Tag x="140" y="44.5" size="3" weight={800} color="#047857">door mirror</Tag>
      <Tag x="140" y="74" size="3.2" weight={900} color={C.bad}>BLIND SPOTS</Tag>
      <Tag x="140" y="79" size="2.8" weight={700}>beside the rear —</Tag>
      <Tag x="140" y="83.5" size="2.8" weight={700}>in no mirror</Tag>
      <Arrow d="M124 70 L98 52" color={C.bad} w={0.8} />
      <Tag x="62" y="8" size="3" weight={700}>driving ↑</Tag>
    </Frame>
  ),

  "flat-convex": () => (
    <Frame title="Flat and convex mirrors">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      {[[40, false], [120, true]].map(([cx, convex]) => (
        <g key={cx}>
          <rect x={cx - 30} y="14" width="60" height="38" rx={convex ? 10 : 4} fill="#cbd5e1" stroke="#334155" strokeWidth="1.2" />
          <rect x={cx - 26} y="18" width="52" height="30" rx={convex ? 8 : 2} fill={convex ? "#bae6fd" : "#e0f2fe"} />
          <path d={`M${cx - 26} 48 L${cx - 6} 30 L${cx + 6} 30 L${cx + 26} 48 Z`} fill="#94a3b8" />
          <g transform={`translate(${cx} 36) scale(${convex ? 0.5 : 1.05}) rotate(180)`}><Car x={0} y={0} color={C.blue} /></g>
        </g>
      ))}
      <Tag x="40" y="64" size="4">FLAT GLASS</Tag>
      <Tag x="40" y="70" size="3" weight={700}>interior mirror — a true picture</Tag>
      <Tag x="120" y="64" size="4">CONVEX GLASS</Tag>
      <Tag x="120" y="70" size="3" weight={700}>door mirrors — a wider view, but</Tag>
      <Tag x="120" y="75" size="3" weight={700}>vehicles look smaller and</Tag>
      <Tag x="120" y="80" size="3" weight={700} color={C.bad}>FURTHER AWAY than they are</Tag>
    </Frame>
  ),

  "a-pillar": () => (
    <Frame title="The A-pillar blind spot">
      <rect x="0" y="0" width="160" height="100" fill="#cbd5e1" />
      <rect x="0" y="0" width="160" height="62" fill="#bfdbfe" />
      <rect x="0" y="40" width="160" height="22" fill="#94a3b8" />
      <text x="0" y="0" fontSize="16" textAnchor="middle" dominantBaseline="central" transform="translate(113 47)">🏍️</text>
      <path d="M96 0 L122 0 L112 62 L100 62 Z" fill="#1f2937" />
      <rect x="0" y="62" width="160" height="38" fill="#111827" />
      <path d="M20 100 Q24 76 50 74 Q76 76 80 100" fill="none" stroke="#374151" strokeWidth="5" />
      <Tag x="108" y="70" size="3.2" weight={800}>A-PILLAR</Tag>
      <Tag x="40" y="14" size="3.4" weight={900}>a motorcycle — or a whole car —</Tag>
      <Tag x="40" y="19.5" size="3.4" weight={900}>can hide behind the pillar</Tag>
      <Tag x="40" y="32" size="3" weight={700} color="#047857">move your head: look around it,</Tag>
      <Tag x="40" y="36.5" size="3" weight={700} color="#047857">especially at junctions</Tag>
      <Tag x="132" y="86" size="3" weight={800}>can hide objects</Tag>
      <Tag x="132" y="91" size="3" weight={800}>23 m away</Tag>
    </Frame>
  ),

  /* The interior mirror at night. variant: day | night */
  "anti-dazzle": ({ variant = "day" }) => {
    const night = variant === "night";
    return (
      <Frame title="Day and night (anti-dazzle) mirror">
        <rect x="0" y="0" width="160" height="100" fill="#0f172a" />
        <rect x="76" y="6" width="8" height="10" fill="#475569" />
        <rect x="24" y="16" width="112" height="40" rx="10" fill="#334155" stroke="#94a3b8" strokeWidth="1.2" />
        <rect x="29" y="21" width="102" height="30" rx="7" fill={night ? "#1e293b" : "#1e3a5f"} />
        {[64, 96].map(x => (
          <g key={x}>
            <circle cx={x} cy="36" r={night ? 3 : 9} fill="#fef08a" opacity={night ? 0.7 : 0.9} />
            {!night && <circle cx={x} cy="36" r="16" fill="#fef08a" opacity="0.3" />}
          </g>
        ))}
        <rect x="74" y="56" width="12" height="5" rx="1.5" fill="#94a3b8" />
        {night && <Arrow d="M80 76 L80 64" color="#22c55e" w={1.3} />}
        <Tag x="80" y="80" size="4" color={night ? "#047857" : C.bad}>{night ? "NIGHT SETTING — tab flipped" : "DAZZLED by lights behind"}</Tag>
        <Tag x="80" y="87" size="3" weight={700}>{night ? "glare deflected — but a little less rear clarity" : "flip the tab to deflect the glare"}</Tag>
      </Frame>
    );
  },

  "lorry-blindspot": () => (
    <Frame title="Don't sit in a lorry's blind spot">
      <rect x="30" y="0" width="100" height="100" fill={C.road} />
      <line x1="80" y1="0" x2="80" y2="100" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <path d="M50 52 L30 100 L74 100 L70 52 Z" fill={C.bad} opacity="0.25" />
      <path d="M72 30 L80 30 L80 74 L72 60 Z" fill={C.bad} opacity="0.25" />
      <path d="M48 30 L30 30 L30 74 L48 60 Z" fill={C.bad} opacity="0.25" />
      <Lorry x={60} y={30} len={42} />
      <Car x="97" y="50" color={C.good} />
      <Car x="60" y="82" color={C.grey} />
      <Tag x="148" y="40" size="3" weight={800} color={C.bad} anchor="middle">alongside</Tag>
      <Tag x="148" y="44.5" size="3" weight={800} color={C.bad} anchor="middle">its rear:</Tag>
      <Tag x="148" y="49" size="3" weight={800} color={C.bad} anchor="middle">unseen</Tag>
      <Tag x="14" y="88" size="2.9" weight={800} color={C.bad}>too close</Tag>
      <Tag x="14" y="92.5" size="2.9" weight={800} color={C.bad}>behind</Tag>
      <Tag x="148" y="80" size="2.8" weight={700} anchor="middle">can't see the</Tag>
      <Tag x="148" y="84.5" size="2.8" weight={700} anchor="middle">driver in their</Tag>
      <Tag x="148" y="89" size="2.8" weight={700} anchor="middle">mirror? They</Tag>
      <Tag x="148" y="93.5" size="2.8" weight={700} anchor="middle">can't see you</Tag>
    </Frame>
  ),

  "offside-nearside": () => (
    <Frame title="Offside and nearside">
      <VRoad />
      <Car x="62" y="56" color={C.good} />
      <rect x="55.6" y="52" width="2.2" height="3" fill="#94a3b8" />
      <rect x="66.2" y="52" width="2.2" height="3" fill="#94a3b8" />
      <Arrow d="M76 50 L96 40" color="#047857" w={1.2} />
      <Arrow d="M48 50 L30 40" color="#b45309" w={1.2} />
      <Tag x="22" y="30" size="3.6" color="#b45309">NEARSIDE</Tag>
      <Tag x="22" y="35.5" size="2.9" weight={700}>left — the kerb side</Tag>
      <Tag x="136" y="26" size="3.6" color="#047857">OFFSIDE</Tag>
      <Tag x="136" y="31.5" size="2.9" weight={700}>right — the driver's side</Tag>
      <Tag x="136" y="66" size="2.9" weight={800}>offside mirror before</Tag>
      <Tag x="136" y="70.5" size="2.9" weight={800}>moving right, turning</Tag>
      <Tag x="136" y="75" size="2.9" weight={800}>right or overtaking</Tag>
      <Tag x="22" y="70" size="2.9" weight={800}>exterior mirrors</Tag>
      <Tag x="22" y="74.5" size="2.9" weight={800}>are "directional"</Tag>
    </Frame>
  ),

  "msmpsl": () => (
    <Frame title="The hazard routine: MS(M)PSL">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      {[["M", "Mirrors"], ["S", "Signal"], ["(M)", "Mirror"], ["P", "Position"], ["S", "Speed"], ["L", "Look"]].map(([k, lbl], i) => (
        <g key={i}>
          <rect x={6 + i * 25} y={64 - i * 9} width="23" height="14" rx="2" fill={i === 2 ? "#e2e8f0" : "#047857"} stroke="#047857" strokeWidth="0.8" strokeDasharray={i === 2 ? "2 1.4" : undefined} />
          <text x={17.5 + i * 25} y={74 - i * 9} fontSize="7" fontWeight="900" textAnchor="middle" fill={i === 2 ? "#047857" : "#ffffff"} fontFamily="system-ui">{k}</text>
          <Tag x={17.5 + i * 25} y={84 - i * 9} size="2.8" weight={800}>{lbl}</Tag>
        </g>
      ))}
      <Tag x="134" y="12" size="3" weight={800} color="#047857">LOOK → assess →</Tag>
      <Tag x="134" y="17" size="3" weight={800} color="#047857">decide → act</Tag>
      <Tag x="40" y="20" size="3" weight={700}>(M): an extra check, usually</Tag>
      <Tag x="40" y="24.5" size="3" weight={700}>the door mirror — e.g. turning right</Tag>
      <Tag x="80" y="96" size="2.9" weight={700}>apply it to any hazard: anything that might change your course or speed</Tag>
    </Frame>
  ),

  "mirrors-when": () => (
    <Frame title="Use the mirrors well before…">
      <IconGrid ring={C.good} rows={3} size={8} cells={[
        ["🚦", "moving off"], ["💡", "signalling"], ["↪️", "changing direction"],
        ["🔀", "turning"], ["🚗", "overtaking"], ["🛣️", "changing lane"],
        ["🐢", "slowing or stopping"], ["🚪", "opening your door"], ["🛑", "except: emergency stop"],
      ]} />
    </Frame>
  ),

  /* ---------------- beginning to drive (Unit 2.3) ---------------- */
  "daily-checks": () => (
    <Frame title="Everyday safety checks">
      <IconGrid ring={C.good} rows={2} cells={[
        ["🪟", "glass & mirrors clean"], ["💡", "lights & indicators"], ["🛑", "brakes, first chance"],
        ["🧳", "loads secure"], ["🛞", "tyres look right"], ["🪞", "mirrors not knocked"],
      ]} />
    </Frame>
  ),

  "periodic-checks": () => (
    <Frame title="Periodic checks">
      <IconGrid ring={C.blue} rows={3} size={8} cells={[
        ["🛞", "tyre pressures: weekly"], ["📏", "tread depth legal"], ["🧽", "wipers and blades"],
        ["💧", "washer bottles"], ["🛢️", "oil: level ground, cold"], ["🌡️", "coolant: cold engine"],
        ["🛑", "brake fluid"], ["🔋", "battery"], ["🪢", "seat belts"],
      ]} />
    </Frame>
  ),

  "cockpit-drill": () => (
    <Frame title="The cockpit drill">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <Tag x="80" y="10" size="4">EVERY TIME YOU GET IN</Tag>
      <StepChips y={30} perRow={4} steps={["Handbrake on", "Doors closed", "Seat", "Steering"]} />
      <StepChips y={64} perRow={4} steps={["Seat belts", "Mirrors", "Fuel", "Loads secure"]} color="#0f766e" start={5} />
    </Frame>
  ),

  "observe-routine": () => (
    <Frame title="Moving off: observe, prepare, observe, signal, move">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <StepChips y={36} perRow={5} steps={["Observe", "Prepare", "Observe", "Signal?", "Move off"]} />
      <Tag x="16" y="62" size="2.8" weight={700}>(look)</Tag>
      <Tag x="80" y="62" size="2.8" weight={700}>(mirrors, blind spots)</Tag>
      <Tag x="112" y="62" size="2.8" weight={700}>(if needed)</Tag>
      <Tag x="80" y="12" size="3.6">A VARIATION OF MSM</Tag>
      <Tag x="80" y="84" size="3.4" weight={900} color={C.bad}>You must not cause anyone</Tag>
      <Tag x="80" y="90" size="3.4" weight={900} color={C.bad}>to change speed or direction</Tag>
    </Frame>
  ),

  "move-off-level": () => (
    <Frame title="Moving off from the kerb">
      <VRoad />
      <Car x="50" y="70" color={C.good} />
      <path d="M50 60 Q50 46 60 40 L62 8" fill="none" stroke={C.good} strokeWidth="1.6" strokeDasharray="2 1.6" />
      <path d="M56 74 A16 16 0 0 1 72 90" fill="none" stroke={C.amber} strokeWidth="1.2" />
      <path d="M44 74 A16 16 0 0 0 28 90" fill="none" stroke={C.amber} strokeWidth="1.2" />
      <Car x="62" y="98" color={C.grey} ghost />
      <Car x="97" y="22" rot={180} color={C.grey} />
      <Tag x="22" y="50" size="3" weight={800} color="#b45309">look over</Tag>
      <Tag x="22" y="54.5" size="3" weight={800} color="#b45309">both shoulders</Tag>
      <Tag x="138" y="62" size="3" weight={800}>mirrors and blind</Tag>
      <Tag x="138" y="66.5" size="3" weight={800}>spots, signal if</Tag>
      <Tag x="138" y="71" size="3" weight={800}>necessary, look again</Tag>
      <Tag x="138" y="88" size="3" weight={800} color={C.bad}>nobody should have to</Tag>
      <Tag x="138" y="92.5" size="3" weight={800} color={C.bad}>slow down for you</Tag>
      <Tag x="22" y="20" size="2.9" weight={700} color="#047857">then about 1 m</Tag>
      <Tag x="22" y="24.5" size="2.9" weight={700} color="#047857">from the kerb</Tag>
    </Frame>
  ),

  "angle-start": () => (
    <Frame title="Moving off at an angle">
      <VRoad />
      <Car x="51" y="46" color={C.grey} door />
      <Car x="51" y="76" color={C.good} />
      <path d="M52 66 Q54 58 68 54 L70 22 Q70 12 60 6" fill="none" stroke={C.good} strokeWidth="1.6" strokeDasharray="2 1.6" />
      <Car x="97" y="16" rot={180} color={C.amber} />
      <text x="40" y="34" fontSize="6" textAnchor="middle">🚶</text>
      <Tag x="22" y="62" size="3" weight={800}>a) what angle?</Tag>
      <Tag x="22" y="68" size="3" weight={800}>b) how far out?</Tag>
      <Tag x="22" y="74" size="3" weight={800}>c) oncoming traffic?</Tag>
      <Tag x="136" y="40" size="3" weight={800} color="#047857">slow, with clutch</Tag>
      <Tag x="136" y="44.5" size="3" weight={800} color="#047857">control; extra right</Tag>
      <Tag x="136" y="49" size="3" weight={800} color="#047857">shoulder checks</Tag>
      <Tag x="136" y="66" size="2.9" weight={700}>room for a door to open;</Tag>
      <Tag x="136" y="70.5" size="2.9" weight={700}>watch for pedestrians</Tag>
      <Tag x="136" y="75" size="2.9" weight={700}>stepping out ahead</Tag>
      <Tag x="136" y="90" size="2.9" weight={800} color={C.bad}>don't release the clutch</Tag>
      <Tag x="136" y="94.5" size="2.9" weight={800} color={C.bad}>fully until clear</Tag>
    </Frame>
  ),

  /* Moving off on a slope (side view). variant: up | down */
  "hill-start": ({ variant = "up" }) => {
    const up = variant === "up";
    return (
      <Frame title={up ? "Moving off uphill" : "Moving off downhill"}>
        <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
        <path d={up ? "M0 92 L160 40 L160 100 L0 100 Z" : "M0 40 L160 92 L160 100 L0 100 Z"} fill="#a3c38a" />
        <path d={up ? "M0 92 L160 40" : "M0 40 L160 92"} stroke={C.road} strokeWidth="3" />
        <SideCar x={60} y={up ? 72.5 : 59.5} rot={up ? -18 : 18} color={C.good} />
        <Tag x={up ? 50 : 110} y="14" size="4.2">{up ? "UPHILL START" : "DOWNHILL START"}</Tag>
        {up ? (
          <g>
            <Tag x="50" y="22" size="3.2" weight={800} color="#047857">more gas</Tag>
            <Tag x="50" y="27" size="3.2" weight={800} color="#047857">biting point BEFORE releasing</Tag>
            <Tag x="50" y="32" size="3.2" weight={800} color="#047857">the handbrake — a little more gas</Tag>
            <Tag x="124" y="78" size="3" weight={800} color={C.bad}>else: rolling back</Tag>
            <Tag x="124" y="83" size="3" weight={800} color={C.bad}>or stalling</Tag>
          </g>
        ) : (
          <g>
            <Tag x="110" y="22" size="3.2" weight={800} color="#047857">footbrake on, release the handbrake</Tag>
            <Tag x="110" y="27" size="3.2" weight={800} color="#047857">no gas, no biting point needed</Tag>
            <Tag x="110" y="32" size="3.2" weight={800} color="#047857">gear to suit the slope — maybe 2nd</Tag>
            <Tag x="40" y="76" size="3" weight={800}>the car's weight</Tag>
            <Tag x="40" y="81" size="3" weight={800}>helps you move off</Tag>
          </g>
        )}
      </Frame>
    );
  },

  "look-ahead": () => (
    <Frame title="Look well ahead">
      <VRoad />
      <path d="M62 66 L48 0 L76 0 Z" fill={C.amber} opacity="0.2" />
      <path d="M62 66 L58 54 L66 54 Z" fill={C.bad} opacity="0.4" />
      <Car x="62" y="74" color={C.good} />
      <Tag x="22" y="14" size="3.2" weight={800} color="#047857">✓ look well</Tag>
      <Tag x="22" y="19" size="3.2" weight={800} color="#047857">ahead</Tag>
      <Tag x="22" y="56" size="3.2" weight={800} color={C.bad}>✗ not just over</Tag>
      <Tag x="22" y="61" size="3.2" weight={800} color={C.bad}>the bonnet</Tag>
      <Tag x="136" y="40" size="3" weight={800}>smooth, steady</Tag>
      <Tag x="136" y="44.5" size="3" weight={800}>movements</Tag>
      <line x1="47" y1="90" x2="57" y2="90" stroke={C.good} strokeWidth="0.8" />
      <Tag x="136" y="84" size="3" weight={800} color="#047857">about 1 m from the kerb</Tag>
    </Frame>
  ),

  /* ---------------- changing gear (Unit 2.4) ---------------- */
  "gear-ranges": () => (
    <Frame title="Each gear covers a range of speeds">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <line x1="30" y1="84" x2="150" y2="84" stroke="#334155" strokeWidth="0.8" />
      <Arrow d="M30 90 L150 90" color="#334155" w={0.9} />
      <Tag x="90" y="97" size="3" weight={700}>road speed →</Tag>
      {[["1st", 30, 62], ["2nd", 40, 80], ["3rd", 52, 110], ["4th", 70, 140], ["5th", 92, 148]].map(([g, a, b], i) => (
        <g key={g}>
          <Tag x="16" y={16 + i * 14} size="3.6">{g}</Tag>
          <rect x={a} y={11 + i * 14} width={b - a} height="7" rx="3.5" fill={["#ef4444", "#f97316", "#f59e0b", "#84cc16", "#22c55e"][i]} />
        </g>
      ))}
      <Tag x="120" y="10" size="3" weight={800}>ranges overlap — the same</Tag>
      <Tag x="120" y="14.5" size="3" weight={800}>speed in 2 or 3 gears</Tag>
    </Frame>
  ),

  "rev-counter": () => {
    const cx = 80, cy = 56, r = 34;
    const ang = v => (-120 + v * (240 / 7)) * Math.PI / 180;      /* 0–7 (×1000 rpm) over 240° */
    const pt = (v, rr) => [cx + rr * Math.sin(ang(v)), cy - rr * Math.cos(ang(v))];
    const arc = (v0, v1, col, w) => {
      const [x0, y0] = pt(v0, r), [x1, y1] = pt(v1, r);
      return <path d={`M${x0} ${y0} A${r} ${r} 0 ${ang(v1) - ang(v0) > Math.PI ? 1 : 0} 1 ${x1} ${y1}`} fill="none" stroke={col} strokeWidth={w} />;
    };
    const [nx, ny] = pt(1.8, r - 8);
    return (
      <Frame title="The rev counter">
        <rect x="0" y="0" width="160" height="100" fill="#0f172a" />
        {arc(0, 7, "#334155", 5)}
        {arc(1.5, 2, "#22c55e", 6)}
        {arc(6, 7, "#ef4444", 6)}
        {[0, 1, 2, 3, 4, 5, 6, 7].map(n => {
          const [x, y] = pt(n, r - 11);
          return <text key={n} x={x} y={y + 2.2} fontSize="6.5" fontWeight="800" textAnchor="middle" fill="#e2e8f0" fontFamily="system-ui">{n}</text>;
        })}
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="3.5" fill="#f59e0b" />
        <Tag x="80" y="76" size="3.4" weight={800}>RPM × 1000</Tag>
        <Tag x="80" y="88" size="3.2" weight={800} color="#047857">green: about 1,500–2,000 rpm at a steady speed —</Tag>
        <Tag x="80" y="93.5" size="3.2" weight={800} color="#047857">best fuel economy</Tag>
        <Tag x="140" y="40" size="3" weight={800} color={C.bad}>red line</Tag>
      </Frame>
    );
  },

  "block-change": () => (
    <Frame title="Block gear changing">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      {[5, 4, 3, 2].map((g, i) => (
        <g key={g}>
          <circle cx={26 + i * 36} cy="34" r="10" fill={g === 4 || g === 3 ? "#e2e8f0" : "#047857"} stroke="#047857" strokeWidth="1" strokeDasharray={g === 4 || g === 3 ? "2 1.5" : undefined} />
          <text x={26 + i * 36} y="38" fontSize="11" fontWeight="900" textAnchor="middle" fill={g === 4 || g === 3 ? "#94a3b8" : "#ffffff"} fontFamily="system-ui">{g}</text>
        </g>
      ))}
      <path d="M30 20 Q80 2 130 20" fill="none" stroke="#047857" strokeWidth="1.6" />
      <path d="M126 16 L131 21 L124 22" fill="#047857" />
      <Tag x="80" y="58" size="4">BRAKE FIRST, THEN 5th → 2nd</Tag>
      <Tag x="80" y="66" size="3.2" weight={700}>miss out the gears you don't need</Tag>
      <Tag x="80" y="80" size="3.2" weight={800} color="#047857">just as safe as changing down in order —</Tag>
      <Tag x="80" y="86" size="3.2" weight={800} color="#047857">done in sympathy with the engine</Tag>
    </Frame>
  ),

  "coasting": () => (
    <Frame title="Coasting">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <path d="M0 30 L160 82 L160 100 L0 100 Z" fill="#a3c38a" />
      <path d="M0 30 L160 82" stroke={C.road} strokeWidth="3" />
      <SideCar x="76" y="54.5" rot={18} color={C.bad} />
      <circle cx="60" cy="24" r="9" fill="#ffffff" stroke={C.bad} strokeWidth="1.2" />
      <text x="60" y="28" fontSize="11" fontWeight="900" textAnchor="middle" fill={C.bad} fontFamily="system-ui">N</text>
      <Tag x="120" y="14" size="4" color={C.bad}>✗ COASTING</Tag>
      <Tag x="120" y="21" size="3" weight={700}>clutch down or neutral</Tag>
      <Tag x="120" y="26" size="3" weight={700}>while the car is moving</Tag>
      <Tag x="40" y="80" size="3" weight={800}>less control of</Tag>
      <Tag x="40" y="85" size="3" weight={800}>steering and braking;</Tag>
      <Tag x="40" y="90" size="3" weight={800}>speed builds downhill</Tag>
    </Frame>
  ),

  /* ---------------- braking (Book 2, Unit 2.5) ---------------- */
  "golden-rule": () => (
    <Frame title="Stop well within the distance you can see to be clear">
      <VRoad l={58} r={102} />
      <circle cx="44" cy="8" r="13" fill="#4d7c0f" /><circle cx="60" cy="4" r="11" fill="#4d7c0f" />
      <circle cx="116" cy="8" r="13" fill="#4d7c0f" /><circle cx="100" cy="4" r="11" fill="#4d7c0f" />
      <rect x="58" y="0" width="44" height="16" fill="#4d7c0f" opacity="0.9" />
      <Car x="70" y="86" color={C.good} />
      <line x1="48" y1="18" x2="48" y2="78" stroke="#0369a1" strokeWidth="0.8" />
      <line x1="45" y1="18" x2="51" y2="18" stroke="#0369a1" strokeWidth="0.8" />
      <line x1="45" y1="78" x2="51" y2="78" stroke="#0369a1" strokeWidth="0.8" />
      <line x1="112" y1="44" x2="112" y2="78" stroke="#047857" strokeWidth="1.4" />
      <line x1="109" y1="44" x2="115" y2="44" stroke="#047857" strokeWidth="1.4" />
      <line x1="109" y1="78" x2="115" y2="78" stroke="#047857" strokeWidth="1.4" />
      <Tag x="24" y="44" size="3" weight={800} color="#0369a1">distance you</Tag>
      <Tag x="24" y="49" size="3" weight={800} color="#0369a1">can see to</Tag>
      <Tag x="24" y="54" size="3" weight={800} color="#0369a1">be clear</Tag>
      <Tag x="136" y="56" size="3" weight={800} color="#047857">your stopping</Tag>
      <Tag x="136" y="61" size="3" weight={800} color="#047857">distance —</Tag>
      <Tag x="136" y="66" size="3" weight={800} color="#047857">well within it</Tag>
      <Tag x="80" y="26" size="3.3" weight={800}>? hidden beyond the bend</Tag>
    </Frame>
  ),

  "stopping-distance": () => (
    <Frame title="Stopping distances on a dry road">
      <rect x="0" y="0" width="160" height="100" fill="#f8fafc" />
      <Tag x="80" y="8" size="3.6">DRY ROAD — thinking + braking = stopping</Tag>
      {[[30, 5.5, 5.3, 10.8], [50, 9.2, 14.8, 24.0], [80, 14.7, 38.0, 52.7], [100, 18.3, 59.4, 77.7], [120, 22, 85.5, 107.5]].map(([v, t, b, s], i) => {
        const y = 16 + i * 14, k = 1.05;
        return (
          <g key={v}>
            <Tag x="15" y={y + 5} size="3.4" weight={800}>{v} km/h</Tag>
            <rect x="28" y={y} width={t * k} height="7" fill={C.amber} />
            <rect x={28 + t * k} y={y} width={b * k} height="7" fill={C.bad} />
            <Tag x={30 + s * k} y={y + 5} size="3.2" weight={800} anchor="start">{s} m</Tag>
          </g>
        );
      })}
      <rect x="34" y="88" width="6" height="5" fill={C.amber} />
      <Tag x="42" y="92" size="3.2" weight={700} anchor="start">thinking</Tag>
      <rect x="78" y="88" width="6" height="5" fill={C.bad} />
      <Tag x="86" y="92" size="3.2" weight={700} anchor="start">braking</Tag>
    </Frame>
  ),

  "stopping-wet-dry": () => (
    <Frame title="Stopping distances: dry and wet">
      <rect x="0" y="0" width="160" height="100" fill="#f8fafc" />
      <Tag x="80" y="8" size="3.6">THE SAME SPEED — DRY v WET</Tag>
      {[["60 dry", 11.0, 21.4, 32.4, "#64748b"], ["60 wet", 11.0, 37.5, 48.5, "#3b82f6"], ["100 dry", 18.3, 59.4, 77.7, "#64748b"], ["100 wet", 18.3, 104.3, 122.6, "#3b82f6"]].map(([lbl, t, b, s, col], i) => {
        const y = 16 + i * 16 + (i > 1 ? 6 : 0), k = 0.92;
        return (
          <g key={lbl}>
            <Tag x="15" y={y + 5} size="3.3" weight={800} color={col}>{lbl}</Tag>
            <rect x="28" y={y} width={t * k} height="8" fill={C.amber} />
            <rect x={28 + t * k} y={y} width={b * k} height="8" fill={col} />
            <Tag x={i === 3 ? 140 : 31 + s * k} y={y + (i === 3 ? 13 : 5.5)} size="3.2" weight={800} anchor={i === 3 ? "middle" : "start"}>{s} m</Tag>
          </g>
        );
      })}
      <Tag x="80" y="94" size="3.2" weight={700} color="#1d4ed8">same thinking distance — far longer braking distance in the wet</Tag>
    </Frame>
  ),

  "weight-transfer": () => (
    <Frame title="Braking throws weight onto the front wheels">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <rect x="0" y="72" width="160" height="28" fill={C.road} />
      <g transform="translate(80 72) scale(3)"><SideCar x={0} y={0} rot={4} color={C.good} /></g>
      <Arrow d="M101 30 L101 60" color={C.bad} w={3} />
      <Arrow d="M60 54 L60 60" color={C.grey} w={1.4} />
      <Arrow d="M118 40 L132 40" color="#0369a1" w={1.4} />
      <Tag x="80" y="10" size="4">BRAKING: WEIGHT GOES FORWARD</Tag>
      <Tag x="116" y="28" size="3.2" weight={800} color={C.bad}>more weight on the front</Tag>
      <Tag x="36" y="36" size="3.2" weight={800} color="#475569">rear wheels lighter —</Tag>
      <Tag x="36" y="41" size="3.2" weight={800} color="#475569">they lock more easily</Tag>
      <Tag x="142" y="48" size="3" weight={700} color="#0369a1">direction</Tag>
      <Tag x="80" y="92" size="3.2" weight={700}>the harder you brake, the more weight is thrown forward</Tag>
    </Frame>
  ),

  "brake-bend": () => (
    <Frame title="Braking on a bend">
      <path d="M40 100 L40 60 Q40 20 80 20 L160 20" fill="none" stroke={C.road} strokeWidth="34" />
      <path d="M40 100 L40 60 Q40 20 80 20 L160 20" fill="none" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <Car x="32" y="84" color={C.good} />
      <Arrow d="M32 76 L32 60" color="#047857" w={1.4} />
      <Car x="38" y="40" rot={40} color={C.bad} ghost />
      <Arrow d="M40 38 L22 18" color={C.bad} w={1.4} dash="2 1.5" />
      <Tag x="100" y="56" size="3.4" weight={800} color="#047857">✓ brake on the straight,</Tag>
      <Tag x="100" y="61" size="3.4" weight={800} color="#047857">before the bend</Tag>
      <Tag x="100" y="74" size="3.4" weight={800} color={C.bad}>✗ braking while steering —</Tag>
      <Tag x="100" y="79" size="3.4" weight={800} color={C.bad}>weight thrown outward: skid</Tag>
      <Tag x="16" y="12" size="3" weight={800} color={C.bad}>skid</Tag>
    </Frame>
  ),

  "normal-stop": () => (
    <Frame title="Stopping normally">
      <rect x="0" y="0" width="160" height="100" fill="#f8fafc" />
      <Tag x="80" y="10" size="3.8">STOPPING NORMALLY</Tag>
      <StepChips y={26} perRow={4} steps={["Mirrors", "Signal?", "Off the gas", "Light footbrake"]} />
      <StepChips y={62} perRow={4} start={5} color="#0f766e" steps={["Clutch just before", "Ease the brake", "Handbrake", "Neutral"]} />
      <Tag x="80" y="96" size="3" weight={700}>then cancel any signal and take your feet off the pedals</Tag>
    </Frame>
  ),

  "emergency-stop": () => (
    <Frame title="The emergency stop">
      <VRoad />
      <text x="70" y="22" fontSize="9" textAnchor="middle">🧒</text>
      <circle cx="60" cy="26" r="2.4" fill="#f97316" />
      <Car x="64" y="62" color={C.good} />
      <path d="M62 70 L62 90 M66 70 L66 90" stroke="#111827" strokeWidth="0.9" opacity="0.5" />
      <Tag x="80" y="8" size="3.8">AN EMERGENCY: IMMINENT DANGER TO PEOPLE</Tag>
      <Tag x="138" y="30" size="3.1" weight={800} color="#047857">both hands on</Tag>
      <Tag x="138" y="34.5" size="3.1" weight={800} color="#047857">the wheel</Tag>
      <Tag x="138" y="46" size="3.1" weight={800} color="#047857">footbrake first —</Tag>
      <Tag x="138" y="50.5" size="3.1" weight={800} color="#047857">progressive, firm</Tag>
      <Tag x="138" y="62" size="3.1" weight={800} color="#047857">clutch just</Tag>
      <Tag x="138" y="66.5" size="3.1" weight={800} color="#047857">before stopping</Tag>
      <Tag x="22" y="46" size="3.1" weight={800} color={C.bad}>✗ no mirrors</Tag>
      <Tag x="22" y="51" size="3.1" weight={800} color={C.bad}>✗ no signal</Tag>
      <Tag x="22" y="56" size="3.1" weight={800} color={C.bad}>✗ handbrake</Tag>
      <Tag x="22" y="61" size="3.1" weight={800} color={C.bad}>alone</Tag>
      <Tag x="80" y="97" size="3.1" weight={700}>stopped: look all around — over both shoulders — before moving off</Tag>
    </Frame>
  ),

  "cadence-braking": () => (
    <Frame title="Cadence braking">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <line x1="20" y1="80" x2="148" y2="80" stroke="#334155" strokeWidth="0.8" />
      <line x1="20" y1="80" x2="20" y2="14" stroke="#334155" strokeWidth="0.8" />
      <line x1="20" y1="26" x2="148" y2="26" stroke={C.bad} strokeWidth="0.8" strokeDasharray="3 2" />
      <path d="M20 80 L38 30 L46 72 L62 30 L70 72 L86 30 L94 72 L110 30 L118 72 L134 30 L142 80" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinejoin="round" />
      <Tag x="84" y="22" size="3" weight={800} color={C.bad}>wheels lock</Tag>
      <Tag x="40" y="42" size="2.8" weight={800} color="#7c3aed">press</Tag>
      <Tag x="56" y="86" size="2.8" weight={800} color="#7c3aed">release just before lock</Tag>
      <Tag x="120" y="86" size="2.8" weight={800} color="#7c3aed">reapply</Tag>
      <Tag x="84" y="94" size="3" weight={700}>pumping — for older cars without ABS</Tag>
      <Tag x="10" y="48" size="2.8" weight={700}>pressure</Tag>
      <Tag x="80" y="9" size="3.6">CADENCE BRAKING</Tag>
    </Frame>
  ),

  "abs-steer": () => (
    <Frame title="ABS keeps steering control">
      <VRoad />
      <rect x="53" y="18" width="18" height="9" rx="1.5" fill={C.amber} stroke="#0f172a" strokeWidth="0.4" />
      <Car x="62" y="86" color={C.good} />
      <Arrow d="M62 78 Q62 52 84 40 L88 26" color="#047857" w={1.4} />
      <Car x="62" y="42" color={C.bad} ghost />
      <Arrow d="M62 50 L62 31" color={C.bad} w={1} dash="2 1.5" />
      <Tag x="80" y="10" size="3.8">BRAKING HARD WITH ABS</Tag>
      <Tag x="138" y="58" size="3.2" weight={800} color="#047857">✓ ABS: you can</Tag>
      <Tag x="138" y="63" size="3.2" weight={800} color="#047857">steer while braking</Tag>
      <Tag x="22" y="40" size="3.1" weight={800} color={C.bad}>locked wheels:</Tag>
      <Tag x="22" y="45" size="3.1" weight={800} color={C.bad}>no steering</Tag>
      <Tag x="80" y="98" size="3" weight={700}>limits: ice, snow, wet leaves, loose gravel</Tag>
    </Frame>
  ),

  "pedestrian-speed": () => (
    <Frame title="Speed and pedestrian survival">
      <rect x="0" y="0" width="160" height="100" fill="#f8fafc" />
      <Tag x="80" y="9" size="3.6">PEDESTRIANS HIT BY A CAR</Tag>
      {[[30, 60, 9], [80, 50, 5], [130, 30, 1]].map(([cx, v, dead]) => (
        <g key={v}>
          <circle cx={cx} cy="26" r="9" fill="#ffffff" stroke="#dc2626" strokeWidth="2" />
          <text x={cx} y="29.3" fontSize="8" fontWeight="900" textAnchor="middle" fill="#0f172a" fontFamily="system-ui">{v}</text>
          {Array.from({ length: 10 }, (_, i) => {
            const x = cx - 16 + (i % 5) * 8, y = 46 + Math.floor(i / 5) * 14;
            const col = i < dead ? C.bad : C.good;
            return (
              <g key={i}>
                <circle cx={x} cy={y - 3} r="1.8" fill={col} />
                <rect x={x - 1.6} y={y - 0.8} width="3.2" height="6" rx="1.2" fill={col} />
              </g>
            );
          })}
          <Tag x={cx} y="82" size="3.4" weight={800} color={C.bad}>{dead} in 10 killed</Tag>
        </g>
      ))}
      <Tag x="80" y="95" size="3.1" weight={700}>that's why there are 30 km/h slow zones</Tag>
    </Frame>
  ),

  "rural-speed-sign": () => (
    <Frame title="Rural speed limit sign">
      <rect x="30" y="6" width="60" height="94" rx="6" fill="#365314" />
      <rect x="58" y="62" width="4" height="38" fill="#94a3b8" />
      <circle cx="60" cy="34" r="20" fill="#ffffff" stroke="#0f172a" strokeWidth="1.2" />
      <clipPath id="rss"><circle cx="60" cy="34" r="18" /></clipPath>
      <g clipPath="url(#rss)">
        {[-8, -3, 2, 7, 12].map(d => <line key={d} x1={60 - 24 + d} y1={34 + 24 + d} x2={60 + 24 + d} y2={34 - 24 + d} stroke="#0f172a" strokeWidth="1.6" />)}
      </g>
      <rect x="44" y="58" width="32" height="12" rx="1.5" fill="#ffffff" stroke="#0f172a" strokeWidth="0.6" />
      <text x="60" y="63.5" fontSize="4" fontWeight="800" textAnchor="middle" fontFamily="system-ui" fontStyle="italic">Go Mall</text>
      <text x="60" y="68.5" fontSize="4" fontWeight="900" textAnchor="middle" fontFamily="system-ui">SLOW</text>
      <Tag x="122" y="30" size="3.2" weight={800}>white circle,</Tag>
      <Tag x="122" y="35" size="3.2" weight={800}>black diagonal lines</Tag>
      <Tag x="122" y="48" size="3" weight={700}>from 2015: use your</Tag>
      <Tag x="122" y="52.5" size="3" weight={700}>judgement — never</Tag>
      <Tag x="122" y="57" size="3" weight={700}>above 80 km/h</Tag>
    </Frame>
  ),

  /* ---------------- road holding (Book 2, Unit 2.6) ---------------- */
  "car-forces": () => (
    <Frame title="Forces acting on a moving car">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <rect x="0" y="70" width="160" height="30" fill={C.road} />
      <g transform="translate(80 70) scale(2.6)"><SideCar x={0} y={0} color={C.good} /></g>
      <Arrow d="M82 38 L82 58" color="#7c3aed" w={1.6} />
      <Arrow d="M138 44 L116 44" color="#0ea5e9" w={1.6} />
      <Arrow d="M80 76 L58 76" color={C.amber} w={1.6} />
      <Arrow d="M30 60 L50 60" color="#047857" w={1.6} />
      <Tag x="82" y="34" size="3.3" weight={800} color="#7c3aed">GRAVITY — down onto the road</Tag>
      <Tag x="140" y="38" size="3.3" weight={800} color="#0369a1">DRAG</Tag>
      <Tag x="140" y="52" size="2.8" weight={700} color="#0369a1">air resistance</Tag>
      <Tag x="60" y="84" size="3.2" weight={800} color="#b45309">FRICTION — road v tyres</Tag>
      <Tag x="24" y="50" size="3.1" weight={800} color="#047857">ACCELERATION:</Tag>
      <Tag x="24" y="54.5" size="2.8" weight={700} color="#047857">weight to the rear</Tag>
      <Tag x="80" y="12" size="3.8">MOST STABLE: STRAIGHT, LEVEL, STEADY SPEED</Tag>
      <Tag x="80" y="95" size="3" weight={700}>braking moves the weight — and the grip — to the front</Tag>
    </Frame>
  ),

  "cornering-force": () => (
    <Frame title="Cornering force">
      <path d="M50 100 L50 64 Q50 30 90 30 L160 30" fill="none" stroke={C.road} strokeWidth="40" />
      <path d="M50 100 L50 64 Q50 30 90 30 L160 30" fill="none" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <g transform="translate(46 56) rotate(35)"><Car x={0} y={0} color={C.good} /></g>
      <Arrow d="M42 52 L22 40" color={C.bad} w={1.8} />
      <circle cx="40" cy="62" r="2.2" fill={C.amber} /><circle cx="46" cy="50" r="2.2" fill={C.amber} />
      <Tag x="16" y="32" size="3.2" weight={800} color={C.bad}>cornering</Tag>
      <Tag x="16" y="36.5" size="3.2" weight={800} color={C.bad}>force</Tag>
      <Tag x="112" y="56" size="3.2" weight={800}>steer RIGHT → weight thrown</Tag>
      <Tag x="112" y="61" size="3.2" weight={800}>to the LEFT (outside) wheels</Tag>
      <Tag x="112" y="74" size="3.1" weight={800} color={C.bad}>too fast: it slides sideways —</Tag>
      <Tag x="112" y="79" size="3.1" weight={800} color={C.bad}>or rolls over</Tag>
      <Tag x="112" y="92" size="3" weight={700} color="#b45309">brake + steer = front-outside wheel</Tag>
      <Tag x="112" y="96.5" size="3" weight={700} color="#b45309">acts as an anchor</Tag>
    </Frame>
  ),

  "flood-ford": () => (
    <Frame title="Driving through a flood">
      <rect x="0" y="0" width="160" height="100" fill="#e0ecf5" />
      <path d="M0 70 L40 70 Q60 82 100 82 Q120 82 160 70 L160 100 L0 100 Z" fill={C.road} />
      <path d="M40 70 Q60 82 100 82 Q120 82 140 72 Z" fill="#60a5fa" opacity="0.75" />
      <g transform="translate(30 70) scale(1.6)"><SideCar x={0} y={0} color={C.good} /></g>
      <line x1="90" y1="70" x2="90" y2="82" stroke="#0f172a" strokeWidth="0.8" />
      <line x1="87" y1="70" x2="93" y2="70" stroke="#0f172a" strokeWidth="0.8" />
      <Tag x="80" y="10" size="3.8">A FLOOD OR FORD AHEAD</Tag>
      <Tag x="40" y="22" size="3.2" weight={800}>① stop and check the depth</Tag>
      <Tag x="40" y="27" size="2.9" weight={700}>too deep? turn back</Tag>
      <Tag x="116" y="22" size="3.2" weight={800} color="#047857">② slowly, 1st gear,</Tag>
      <Tag x="116" y="27" size="3.2" weight={800} color="#047857">revs high, slip the clutch</Tag>
      <Tag x="116" y="40" size="3.2" weight={800} color="#1d4ed8">③ after: mirrors, then</Tag>
      <Tag x="116" y="45" size="3.2" weight={800} color="#1d4ed8">test the brakes</Tag>
      <Tag x="102" y="66" size="2.8" weight={700}>depth?</Tag>
      <Tag x="80" y="94" size="3" weight={700} color={C.bad}>never rush through: lose control, stall, block the road</Tag>
    </Frame>
  ),

  "snow-ice": () => (
    <Frame title="Driving on snow and ice">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <IconGrid ring="#0284c7" rows={2} cells={[
        ["🛣️", "markings hidden"], ["🧽", "screen and windows clear"], ["↔️", "bigger gap"],
        ["🦶", "test brakes gently"], ["⛓️", "chains or snow tyres"], ["⚙️", "high gear, low revs"],
      ]} />
    </Frame>
  ),

  "black-ice": () => (
    <Frame title="Black ice">
      <rect x="0" y="0" width="160" height="100" fill="#cbd5e1" />
      <VRoad />
      <path d="M50 10 L110 10 L110 60 L50 60 Z" fill="#1e293b" opacity="0.35" />
      {[[58, 20], [74, 34], [92, 18], [100, 46], [64, 50]].map(([x, y]) => <path key={x} d={`M${x} ${y} l4 -2`} stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />)}
      <Car x="62" y="80" color={C.good} />
      <Tag x="80" y="6" size="3.6">BLACK ICE: RAIN FREEZING AS IT FALLS</Tag>
      <Tag x="28" y="70" size="3.1" weight={800} color="#1d4ed8">invisible —</Tag>
      <Tag x="28" y="75" size="3.1" weight={800} color="#1d4ed8">first warning:</Tag>
      <Tag x="28" y="80" size="3.1" weight={800} color="#1d4ed8">light steering</Tag>
      <Tag x="136" y="70" size="3" weight={800} color={C.bad}>worse as it</Tag>
      <Tag x="136" y="74.5" size="3" weight={800} color={C.bad}>begins to thaw</Tag>
      <Tag x="136" y="84" size="3" weight={700}>ABS won't keep</Tag>
      <Tag x="136" y="88.5" size="3" weight={700}>tyres on the road</Tag>
    </Frame>
  ),

  "snow-hill": () => (
    <Frame title="Hills in snow and ice">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <path d="M0 90 L40 90 L130 40 L160 40 L160 100 L0 100 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" />
      <g transform="translate(26 90) scale(1.3)"><SideCar x={0} y={0} color={C.good} /></g>
      <g transform="translate(110 51) rotate(-29) scale(1.3)"><SideCar x={0} y={0} color={C.grey} /></g>
      <line x1="44" y1="78" x2="96" y2="50" stroke="#0369a1" strokeWidth="0.8" strokeDasharray="2 1.5" />
      <Tag x="80" y="10" size="3.6">GOING UP: HIGHEST GEAR YOU REASONABLY CAN</Tag>
      <Tag x="44" y="22" size="3.1" weight={800} color="#047857">select it BEFORE the climb —</Tag>
      <Tag x="44" y="27" size="3.1" weight={800} color="#047857">changing on the slope can spin the wheels</Tag>
      <Tag x="60" y="56" size="3.1" weight={800} color="#0369a1">extra gap: if they</Tag>
      <Tag x="60" y="61" size="3.1" weight={800} color="#0369a1">stop, you keep going</Tag>
      <Tag x="120" y="84" size="3" weight={700}>coming down: slow well</Tag>
      <Tag x="120" y="88.5" size="3" weight={700}>before the slope, use</Tag>
      <Tag x="120" y="93" size="3" weight={700}>engine compression</Tag>
    </Frame>
  ),

  "tyre-tread": () => (
    <Frame title="Legal tyre tread">
      <rect x="0" y="0" width="160" height="100" fill="#f8fafc" />
      <rect x="40" y="22" width="80" height="50" rx="8" fill="#1f2937" />
      {[0, 1, 2, 3, 4, 5, 6].map(i => <rect key={i} x={46 + i * 10.5} y="26" width="5" height="42" rx="1" fill="#374151" />)}
      <rect x="50" y="20" width="60" height="54" fill="none" stroke={C.good} strokeWidth="1.4" strokeDasharray="3 2" />
      <Tag x="80" y="12" size="3.8">AT LEAST 1.6 mm</Tag>
      <Tag x="80" y="82" size="3.1" weight={800} color="#047857">across the central three-quarters (75%) of the width</Tag>
      <Tag x="80" y="88" size="3.1" weight={700}>all the way round — tread visible outside the band too</Tag>
      <Tag x="80" y="96" size="2.9" weight={700} color={C.bad}>check for cuts and bulges · keep out grease, oil and stones</Tag>
    </Frame>
  ),

  "tyre-ply": () => (
    <Frame title="Cross-ply and radial-ply tyres">
      <rect x="0" y="0" width="160" height="100" fill="#f8fafc" />
      {[[42, "CROSS-PLY", "cords run diagonally", "older vehicles"], [118, "RADIAL-PLY", "cords at right angles", "thinner, flexible walls"]].map(([x, name, a, b], k) => (
        <g key={name}>
          <rect x={x - 26} y="16" width="52" height="46" rx="6" fill="#1f2937" />
          <clipPath id={`ply${k}`}><rect x={x - 24} y="18" width="48" height="42" rx="5" /></clipPath>
          <g clipPath={`url(#ply${k})`}>
            {k === 0
              ? [-40, -28, -16, -4, 8, 20, 32].flatMap(d => [
                  <line key={"a" + d} x1={x + d} y1="18" x2={x + d + 42} y2="60" stroke="#f59e0b" strokeWidth="1" />,
                  <line key={"b" + d} x1={x + d + 42} y1="18" x2={x + d} y2="60" stroke="#f59e0b" strokeWidth="1" />])
              : [-20, -12, -4, 4, 12, 20].map(d => <line key={d} x1={x + d} y1="18" x2={x + d} y2="60" stroke="#f59e0b" strokeWidth="1.2" />)}
          </g>
          <Tag x={x} y="70" size="3.5">{name}</Tag>
          <Tag x={x} y="76" size="3" weight={700}>{a}</Tag>
          <Tag x={x} y="81" size="3" weight={700}>{b}</Tag>
        </g>
      ))}
      <Tag x="80" y="94" size="3.1" weight={800} color={C.bad}>never mix types — keep the same type all round</Tag>
    </Frame>
  ),

  "tyre-burst": () => (
    <Frame title="A tyre burst">
      <VRoad />
      <Car x="62" y="60" color={C.good} />
      <circle cx="57.5" cy="54" r="3" fill="none" stroke={C.bad} strokeWidth="1" />
      <path d="M53 50 l-3 -3 M53 58 l-3 3 M50 54 l-4 0" stroke={C.bad} strokeWidth="0.8" />
      <Arrow d="M62 50 L62 22" color="#047857" w={1.4} />
      <path d="M62 66 Q56 72 60 80 Q66 88 60 96" fill="none" stroke={C.bad} strokeWidth="0.8" strokeDasharray="2 1.5" />
      <Tag x="80" y="10" size="3.8">A BLOW-OUT</Tag>
      <Tag x="138" y="34" size="3.1" weight={800} color="#047857">grip the wheel</Tag>
      <Tag x="138" y="38.5" size="3.1" weight={800} color="#047857">firmly — keep</Tag>
      <Tag x="138" y="43" size="3.1" weight={800} color="#047857">it straight</Tag>
      <Tag x="138" y="56" size="3.1" weight={800} color="#047857">roll to a halt</Tag>
      <Tag x="138" y="60.5" size="3.1" weight={800} color="#047857">in a safe place</Tag>
      <Tag x="22" y="40" size="3.1" weight={800} color={C.bad}>✗ heavy</Tag>
      <Tag x="22" y="45" size="3.1" weight={800} color={C.bad}>braking</Tag>
    </Frame>
  ),

  "rear-skid": () => (
    <Frame title="Correcting a rear-wheel skid">
      <VRoad />
      <g transform="translate(62 56) rotate(-25)"><WheelCar x={0} y={0} steer={25} /></g>
      <Arrow d="M66 72 L80 76" color={C.bad} w={1.4} />
      <Arrow d="M62 38 L64 20" color="#047857" w={1.4} />
      <Tag x="80" y="9" size="3.6">REAR SLIDES RIGHT → STEER RIGHT</Tag>
      <Tag x="136" y="66" size="3.1" weight={800} color={C.bad}>rear swings</Tag>
      <Tag x="136" y="71" size="3.1" weight={800} color={C.bad}>out to the right</Tag>
      <Tag x="136" y="30" size="3.1" weight={800} color="#047857">release the brake,</Tag>
      <Tag x="136" y="35" size="3.1" weight={800} color="#047857">steer into the skid</Tag>
      <Tag x="22" y="40" size="3" weight={800} color="#b45309">over-correct:</Tag>
      <Tag x="22" y="44.5" size="3" weight={800} color="#b45309">skid the</Tag>
      <Tag x="22" y="49" size="3" weight={800} color="#b45309">other way</Tag>
    </Frame>
  ),

  "wheelspin": () => (
    <Frame title="Wheel spin">
      <rect x="0" y="0" width="160" height="100" fill="#f1f5f9" />
      <rect x="0" y="70" width="160" height="30" fill="#e2e8f0" />
      <g transform="translate(80 70) scale(2.4)"><SideCar x={0} y={0} color={C.good} /></g>
      {[0, 1, 2].map(i => <path key={i} d={`M${58 - i * 5} ${66 - i * 3} q-4 -4 -8 0`} fill="none" stroke="#94a3b8" strokeWidth="0.9" />)}
      <path d="M96 64 a8 8 0 1 1 -1 -0.1" fill="none" stroke={C.bad} strokeWidth="1" />
      <Tag x="80" y="12" size="3.8">SKID BY ACCELERATION</Tag>
      <Tag x="80" y="20" size="3" weight={700}>harsh acceleration spins the DRIVEN wheels</Tag>
      <Tag x="80" y="84" size="3.2" weight={800} color="#047857">release the accelerator — let the tyres grip again</Tag>
      <Tag x="80" y="90" size="3" weight={700}>sliding sideways? don't steer until some grip returns</Tag>
      <Tag x="80" y="97" size="2.9" weight={700} color="#0369a1">moving off in snow: low revs, higher gear</Tag>
    </Frame>
  ),

  "skid-causes": () => (
    <Frame title="Skids: in order of importance">
      <rect x="0" y="0" width="160" height="100" fill="#f8fafc" />
      <IconGrid ring={C.bad} rows={2} cells={[["🧑", "1 · the driver"], ["🚗", "2 · the vehicle"], ["🛣️", "3 · the road"]]} />
      <Tag x="80" y="68" size="3.4" weight={800}>tyres lose grip when you change speed or</Tag>
      <Tag x="80" y="73.5" size="3.4" weight={800}>direction too suddenly</Tag>
      <Tag x="80" y="86" size="3.2" weight={800} color="#047857">PARKED CARS DON'T SKID — DRIVERS CAUSE SKIDS</Tag>
    </Frame>
  ),

  "esc": () => (
    <Frame title="Electronic Stability Control">
      <path d="M40 100 L40 64 Q40 30 80 30 L160 30" fill="none" stroke={C.road} strokeWidth="40" />
      <path d="M40 100 L40 64 Q40 30 80 30 L160 30" fill="none" stroke={C.line} strokeWidth="0.8" strokeDasharray="6 5" />
      <path d="M30 96 L30 66 Q30 40 74 40 L150 40" fill="none" stroke="#047857" strokeWidth="1.2" strokeDasharray="3 2" />
      <path d="M30 70 Q30 50 14 30" fill="none" stroke={C.bad} strokeWidth="1" strokeDasharray="2 1.5" />
      <g transform="translate(32 60) rotate(20)"><Car x={0} y={0} color={C.good} /></g>
      <circle cx="33" cy="67" r="2.6" fill="none" stroke={C.amber} strokeWidth="1.2" />
      <Tag x="112" y="58" size="3.1" weight={800} color="#047857">where you're steering</Tag>
      <Tag x="112" y="66" size="3.1" weight={800} color={C.bad}>where the car is going</Tag>
      <Tag x="112" y="78" size="3" weight={800} color="#b45309">ESC brakes one wheel and</Tag>
      <Tag x="112" y="82.5" size="3" weight={800} color="#b45309">cuts power to hold the line</Tag>
      <Tag x="112" y="94" size="3" weight={700}>not a substitute for safe driving</Tag>
      <Tag x="14" y="24" size="2.8" weight={800} color={C.bad}>slide</Tag>
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
