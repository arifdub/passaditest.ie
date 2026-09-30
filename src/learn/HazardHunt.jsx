/*
  ===========================================================================
  HAZARD HUNT

  A top-down street drawn in SVG. The learner taps what they think is a
  hazard; "I've finished" reveals anything missed, and every hazard then
  explains itself — its type and why it matters — from the workbook.

  The scene is drawn on a 100 × 130 grid. Hotspot x/y in the content file
  are percentages of width and height, so the content stays independent of
  the drawing's units.
  ===========================================================================
*/

import React, { useState } from "react";
import { Check, Search } from "lucide-react";

const W = 100, H = 130;

export default function HazardHunt({ activity, onDone }) {
  const [found, setFound] = useState([]);
  const [finished, setFinished] = useState(false);
  const [open, setOpen] = useState(null);
  const [ping, setPing] = useState(null);

  const spots = activity.hotspots;

  const tapSpot = (id) => {
    if (finished) { setOpen(id); return; }
    if (!found.includes(id)) setFound([...found, id]);
    setOpen(id);
  };

  const tapEmpty = (e) => {
    if (finished) return;
    const r = e.currentTarget.getBoundingClientRect();
    setPing({ x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H, k: Date.now() });
  };

  const finish = () => {
    setFinished(true);
    setOpen(null);
    onDone({ found: found.length, total: spots.length, score: found.length / spots.length });
  };

  const openSpot = spots.find(s => s.id === open);

  return (
    <div>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        Hazard hunt
      </p>
      <p className="rd-lead font-bold text-slate-900 dark:text-white">{activity.intro}</p>

      <div className="mt-3 flex items-center justify-between text-sm font-bold">
        <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
          <Search size={15} /> {found.length} hazard{found.length === 1 ? "" : "s"} found
        </span>
        {finished && (
          <span className="text-emerald-600 dark:text-emerald-400">{found.length} of {spots.length}</span>
        )}
      </div>

      <div className="mt-2 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-[#cfe3c0] dark:bg-[#27402a]">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block select-none" role="img" aria-label="Street scene">
          <Scene />
          {/* empty taps */}
          <rect x="0" y="0" width={W} height={H} fill="transparent" onClick={tapEmpty} />
          {ping && (
            <circle key={ping.k} cx={ping.x} cy={ping.y} r="3" fill="none" stroke="#64748b" strokeWidth="0.6" className="hunt-ping" />
          )}
          {spots.map((s, i) => {
            const cx = (s.x / 100) * W, cy = (s.y / 100) * H;
            const isFound = found.includes(s.id);
            const missed = finished && !isFound;
            return (
              <g key={s.id} onClick={() => tapSpot(s.id)} style={{ cursor: "pointer" }}>
                <circle cx={cx} cy={cy} r="8" fill="transparent" />
                {(isFound || missed) && (
                  <>
                    <circle cx={cx} cy={cy} r="6.5" fill={isFound ? "rgba(16,185,129,.18)" : "rgba(245,158,11,.22)"}
                      stroke={isFound ? "#10b981" : "#f59e0b"} strokeWidth="0.9" className={isFound ? "hunt-found" : ""} />
                    <circle cx={cx + 5} cy={cy - 5} r="2.6" fill={isFound ? "#10b981" : "#f59e0b"} />
                    <text x={cx + 5} y={cy - 4.1} textAnchor="middle" fontSize="2.8" fontWeight="800" fill="#fff">{i + 1}</text>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {openSpot && (
        <div className="mt-3 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 p-3.5 learn-fade">
          <p className="text-sm font-black text-slate-900 dark:text-white">
            {openSpot.label} <span className="ml-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">{openSpot.type}</span>
          </p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{openSpot.why}</p>
        </div>
      )}

      {!finished ? (
        <button onClick={finish}
          className="mt-4 w-full bg-emerald-500 text-slate-900 font-bold py-3 rounded-xl">
          I've found them all
        </button>
      ) : (
        <div className="mt-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">Why they matter</p>
          <ul className="space-y-2">
            {spots.map((s, i) => {
              const got = found.includes(s.id);
              return (
                <li key={s.id} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 flex gap-3">
                  <span className={`w-6 h-6 rounded-full text-white text-xs font-black flex items-center justify-center shrink-0 ${got ? "bg-emerald-500" : "bg-amber-500"}`}>
                    {got ? <Check size={13} /> : i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {s.label} <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">· {s.type}{got ? "" : " · missed"}</span>
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug mt-0.5">{s.why}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

/* The street. Drawn to match the hotspot positions in unit1_1.js. */
function Scene() {
  const y = (pct) => (pct / 100) * H;
  return (
    <g>
      {/* footpaths */}
      <rect x="24" y="34" width="6" height={H - 34} fill="#d6d3cc" />
      <rect x="70" y="34" width="6" height={H - 34} fill="#d6d3cc" />
      {/* side road on the left (junction) */}
      <rect x="0" y={y(30) - 6} width="31" height="12" fill="#5b6470" />
      <line x1="30" y1={y(30) - 5} x2="30" y2={y(30) + 5} stroke="#fff" strokeWidth="0.7" strokeDasharray="1.2 1" />
      {/* main road, bending right at the top */}
      <path d={`M30 ${H} L30 34 Q30 8 58 4 L100 0 L100 20 L66 22 Q70 24 70 34 L70 ${H} Z`} fill="#5b6470" />
      {/* centre line */}
      <path d={`M50 ${H} L50 34 Q50 16 72 12 L100 9`} fill="none" stroke="#f8fafc" strokeWidth="0.7" strokeDasharray="4 3" />
      {/* bend warning chevrons */}
      <g transform="translate(76 10)">
        <rect x="-4" y="-3" width="9" height="6" rx="0.8" fill="#fbbf24" stroke="#111827" strokeWidth="0.4" />
        <path d="M-2 -1.6 L0.5 0 L-2 1.6 M1 -1.6 L3.5 0 L1 1.6" fill="none" stroke="#111827" strokeWidth="0.7" />
      </g>
      {/* road works: cones and sign in the right-hand lane */}
      <g fontSize="5" textAnchor="middle">
        <text x="60" y={y(24) + 2}>🚧</text>
        <text x="64.5" y={y(24) + 6.5} fontSize="3.4">🔺</text>
        <text x="58.5" y={y(24) + 7.5} fontSize="3.4">🔺</text>
      </g>
      {/* cyclist, oncoming */}
      <text x="57" y={y(40) + 2} fontSize="6" textAnchor="middle">🚴</text>
      {/* children and ball on the right verge */}
      <text x="79" y={y(40) + 1} fontSize="5.5" textAnchor="middle">🧒</text>
      <text x="84" y={y(40) + 4} fontSize="3.2" textAnchor="middle">⚽</text>
      {/* parked car in our lane */}
      <g transform={`translate(40 ${y(50)})`}>
        <rect x="-4.2" y="-7" width="8.4" height="14" rx="2.2" fill="#2563eb" />
        <rect x="-3.2" y="-4.6" width="6.4" height="3" rx="0.8" fill="#bfdbfe" />
        <rect x="-3.2" y="2" width="6.4" height="2.4" rx="0.8" fill="#bfdbfe" />
      </g>
      {/* bus at a stop on the far side */}
      <g transform={`translate(64 ${y(60)})`}>
        <rect x="-4.6" y="-10" width="9.2" height="20" rx="1.6" fill="#f59e0b" />
        <rect x="-3.6" y="-8" width="7.2" height="3" rx="0.6" fill="#fef3c7" />
        <rect x="-3.6" y="-2" width="7.2" height="1.6" fill="#fde68a" />
        <rect x="-3.6" y="2" width="7.2" height="1.6" fill="#fde68a" />
      </g>
      <g transform={`translate(73 ${y(60)})`}>
        <rect x="-0.4" y="-5" width="0.8" height="8" fill="#334155" />
        <rect x="-2.4" y="-7.5" width="4.8" height="3" rx="0.6" fill="#0ea5e9" />
        <text x="0" y="-5.3" fontSize="2" textAnchor="middle" fill="#fff" fontWeight="700">BUS</text>
      </g>
      {/* pedestrian at the kerb */}
      <text x="27" y={y(64) + 2} fontSize="6" textAnchor="middle">🚶</text>
      {/* wet patch across the road */}
      <ellipse cx="50" cy={y(80)} rx="15" ry="4" fill="#60a5fa" opacity="0.55" />
      <ellipse cx="45" cy={y(80) - 0.8} rx="4" ry="1" fill="#dbeafe" opacity="0.8" />
      <text x="58" y={y(80) + 1.5} fontSize="3.4" textAnchor="middle">💧</text>
      {/* houses and trees for the setting */}
      <rect x="3" y="60" width="16" height="12" rx="1" fill="#e2e8f0" />
      <path d="M2 60 L11 53 L20 60 Z" fill="#b45309" />
      <rect x="82" y="80" width="15" height="12" rx="1" fill="#e2e8f0" />
      <path d="M81 80 L89.5 73 L98 80 Z" fill="#b45309" />
      <circle cx="10" cy="100" r="5" fill="#4d7c0f" />
      <circle cx="90" cy="110" r="5" fill="#4d7c0f" />
      {/* you */}
      <g transform={`translate(40 ${H - 10})`}>
        <rect x="-4.2" y="-7" width="8.4" height="14" rx="2.2" fill="#10b981" stroke="#064e3b" strokeWidth="0.5" />
        <rect x="-3.2" y="-4.8" width="6.4" height="3" rx="0.8" fill="#d1fae5" />
        <text x="0" y="3.4" fontSize="2.6" textAnchor="middle" fontWeight="800" fill="#064e3b">YOU</text>
      </g>
    </g>
  );
}
