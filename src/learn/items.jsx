/*
  ===========================================================================
  INTERACTIVE LEARNING — ITEM TYPES

  One component per interaction. Each shows its item and reports once the
  learner commits: onAnswer({ score, correct }), score 0–1. Feedback, retry
  and XP are the runner's job (LearnScreens.jsx), so these stay small.

    flash      tap to reveal, then "Knew it" / "Not yet" (self-rated)
    truefalse  a statement, true or false
    choice     tap the correct option (statements, rules, scenarios)
    fill       tap the missing word
    order      drag (or tap) the step cards into the right order
    match      drag (or tap) each meaning onto its term
    sort       put each card in its group
  ===========================================================================
*/

import React, { useState, useMemo, useRef } from "react";
import { Check, X, RotateCcw } from "lucide-react";
import { shuffle } from "./engine";
import { Visual } from "./visuals";

const btnBase = "w-full text-left border rounded-2xl px-4 py-3.5 transition active:scale-[0.99]";
const idle = "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-emerald-400";
const good = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40";
const bad = "border-red-400 bg-red-50 dark:bg-red-950/40";

export function ItemView({ item, attempt, onAnswer }) {
  /* The key remounts the item on a retry, so it starts clean. */
  const k = `${item.id}-${attempt}`;
  switch (item.type) {
    case "flash": return <Flash key={k} item={item} onAnswer={onAnswer} />;
    case "truefalse": return <TrueFalse key={k} item={item} onAnswer={onAnswer} />;
    case "fill": return <Fill key={k} item={item} onAnswer={onAnswer} />;
    case "order": return <Order key={k} item={item} onAnswer={onAnswer} />;
    case "match": return <Match key={k} item={item} onAnswer={onAnswer} />;
    case "sort": return <Sort key={k} item={item} onAnswer={onAnswer} />;
    case "picture": return <Picture key={k} item={item} onAnswer={onAnswer} />;
    default: return <Choice key={k} item={item} onAnswer={onAnswer} />;
  }
}

/* -------------------------------------------------------------- picture
   "Spot it": the options are drawings, labels hidden, and the learner taps
   the one that matches. Recognition by sight, not by reading.
   item: { prompt, options: [visualId, ...], answer, names?: [...] }
   `names` label each drawing once answered. */
function Picture({ item, onAnswer }) {
  const order = useMemo(() => shuffle(item.options.map((_, i) => i)), [item]);
  const [picked, setPicked] = useState(null);
  const choose = (i) => {
    if (picked !== null) return;
    setPicked(i);
    onAnswer({ score: i === item.answer ? 1 : 0, correct: i === item.answer });
  };
  return (
    <div>
      <Label>{item.label || "Spot it"}</Label>
      <p className="rd-lead font-bold text-slate-900 dark:text-white">{item.prompt}</p>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {order.map(i => {
          const revealed = picked !== null;
          const isAns = i === item.answer;
          return (
            <button key={i} onClick={() => choose(i)} disabled={revealed}
              className={`relative rounded-2xl p-1 border-2 transition active:scale-[0.98] ${
                !revealed ? "border-transparent hover:border-emerald-400"
                  : isAns ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40"
                  : picked === i ? "border-red-400 bg-red-50 dark:bg-red-950/40"
                  : "border-transparent opacity-50"
              }`}>
              <Visual id={item.options[i]} bare />
              {revealed && (isAns || picked === i) && (
                <span className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-white ${isAns ? "bg-emerald-500" : "bg-red-500"}`}>
                  {isAns ? <Check size={14} /> : <X size={14} />}
                </span>
              )}
              {revealed && item.names && (
                <span className="block mt-1 text-[11px] font-bold text-slate-600 dark:text-slate-300 leading-tight">{item.names[i]}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- flash */
function Flash({ item, onAnswer }) {
  const [open, setOpen] = useState(false);
  const [rated, setRated] = useState(null);
  return (
    <div>
      <Label>Flash card</Label>
      <button
        onClick={() => setOpen(true)}
        className={`w-full min-h-[190px] rounded-3xl p-6 flex flex-col items-center justify-center text-center border-2 transition ${
          open ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
        }`}
      >
        <p className="rd-lead font-bold text-slate-900 dark:text-white">{item.front}</p>
        {open ? (
          <p className="mt-4 rd-option text-slate-700 dark:text-slate-200 leading-relaxed learn-fade">{item.back}</p>
        ) : (
          <span className="mt-5 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Tap to reveal</span>
        )}
      </button>
      {open && rated === null && (
        <div className="mt-4 grid grid-cols-2 gap-2.5 learn-fade">
          <button onClick={() => { setRated(false); onAnswer({ score: null, correct: false, selfRated: true }); }}
            className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl">
            Not yet
          </button>
          <button onClick={() => { setRated(true); onAnswer({ score: null, correct: true, selfRated: true }); }}
            className="bg-emerald-500 text-slate-900 font-bold py-3 rounded-xl">
            Knew it
          </button>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------ truefalse */
function TrueFalse({ item, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const choose = (v) => {
    if (picked !== null) return;
    setPicked(v);
    onAnswer({ score: v === item.answer ? 1 : 0, correct: v === item.answer });
  };
  return (
    <div>
      <Label>True or false?</Label>
      <p className="rd-lead font-bold text-slate-900 dark:text-white">{item.statement}</p>
      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {[true, false].map(v => {
          const state = picked === null ? idle : v === item.answer ? good : picked === v ? bad : idle;
          return (
            <button key={String(v)} onClick={() => choose(v)} disabled={picked !== null}
              className={`border rounded-2xl py-5 font-black text-lg text-slate-900 dark:text-white transition ${state}`}>
              {v ? "True" : "False"}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- choice */
function Choice({ item, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const choose = (i) => {
    if (picked !== null) return;
    setPicked(i);
    onAnswer({ score: i === item.answer ? 1 : 0, correct: i === item.answer });
  };
  return (
    <div>
      {item.label && <Label>{item.label}</Label>}
      {/* An item's drawing is shown with the explanation, once answered
          (see Feedback in LearnScreens) — before, it would give it away. */}
      {item.scene && (
        <div className="mb-4 rounded-2xl bg-slate-900 text-white p-4 text-[15px] leading-relaxed">
          {item.scene}
        </div>
      )}
      <p className="rd-lead font-bold text-slate-900 dark:text-white">{item.prompt}</p>
      <div className="mt-5 space-y-2.5">
        {item.options.map((opt, i) => {
          const revealed = picked !== null;
          const state = !revealed ? idle : i === item.answer ? good : picked === i ? bad : idle;
          return (
            <button key={i} onClick={() => choose(i)} disabled={revealed} className={`${btnBase} flex items-start gap-3 ${state}`}>
              <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                revealed && i === item.answer ? "bg-emerald-500 text-white"
                  : revealed && picked === i ? "bg-red-500 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300"
              }`}>
                {revealed && i === item.answer ? <Check size={15} /> : revealed && picked === i ? <X size={15} /> : String.fromCharCode(65 + i)}
              </span>
              <span className="rd-option text-slate-800 dark:text-slate-100 pt-0.5">{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- fill */
function Fill({ item, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const opts = useMemo(() => shuffle(item.options), [item]);
  const choose = (o) => {
    if (picked !== null) return;
    setPicked(o);
    onAnswer({ score: o === item.answer ? 1 : 0, correct: o === item.answer });
  };
  const blank = picked === null ? "_____" : item.answer;
  return (
    <div>
      <Label>Fill the missing word</Label>
      <p className="rd-lead font-bold text-slate-900 dark:text-white leading-relaxed">
        {item.before}{" "}
        <span className={`inline-block min-w-[5rem] text-center px-2 rounded-lg border-b-2 ${
          picked === null ? "border-slate-300 text-slate-300"
            : picked === item.answer ? "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
            : "border-emerald-500 text-emerald-600 dark:text-emerald-400"
        }`}>{blank}</span>{" "}
        {item.after}
      </p>
      <div className="mt-6 flex flex-wrap gap-2.5">
        {opts.map(o => {
          const state = picked === null ? idle : o === item.answer ? good : picked === o ? bad : idle;
          return (
            <button key={o} onClick={() => choose(o)} disabled={picked !== null}
              className={`border rounded-xl px-4 py-3 font-bold text-slate-800 dark:text-slate-100 transition ${state}`}>
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ drag kit
   Pointer-event dragging, so it works the same with a finger or a mouse.
   Drop targets carry data-drop={index}. A press that doesn't move counts
   as a tap, so every drag interaction also works tap-then-tap — for
   anyone who can't drag, and with a keyboard (Enter / Space). */
function buzz() {
  try { navigator.vibrate?.(12); } catch { /* not supported */ }
}

function dropAt(x, y) {
  const el = document.elementFromPoint(x, y)?.closest?.("[data-drop]");
  return el ? Number(el.dataset.drop) : null;
}

function useDrag({ onMove, onDrop, onTap }) {
  const [drag, setDrag] = useState(null);
  const ref = useRef(null);
  const down = (e, from, label) => {
    if (e.button !== undefined && e.button !== 0) return;
    const r = e.currentTarget.getBoundingClientRect();
    ref.current = { from, label, sx: e.clientX, sy: e.clientY, x: e.clientX, y: e.clientY,
      w: r.width, h: r.height, dx: e.clientX - r.left, dy: e.clientY - r.top, moved: false, over: null };
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* ignore */ }
  };
  const move = (e) => {
    const d = ref.current;
    if (!d) return;
    d.x = e.clientX; d.y = e.clientY;
    if (!d.moved && Math.hypot(d.x - d.sx, d.y - d.sy) > 6) d.moved = true;
    if (!d.moved) return;
    d.over = dropAt(d.x, d.y);
    onMove?.(d);
    /* Keep the list in view while dragging near the top or bottom. */
    const sc = document.getElementById("app-scroll");
    if (sc) {
      if (d.y < 110) sc.scrollTop -= 10;
      else if (d.y > window.innerHeight - 130) sc.scrollTop += 10;
    }
    setDrag({ ...d });
  };
  const up = (e) => {
    const d = ref.current;
    ref.current = null;
    setDrag(null);
    if (!d) return;
    if (!d.moved) { onTap?.(d.from); return; }
    onDrop?.(d.from, dropAt(e.clientX, e.clientY), d);
  };
  const cancel = () => { ref.current = null; setDrag(null); };
  const bind = (i, label) => ({
    onPointerDown: (e) => down(e, i, label),
    onPointerMove: move,
    onPointerUp: up,
    onPointerCancel: cancel,
    onKeyDown: (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onTap?.(i); } },
  });
  return { drag, bind };
}

/* The card that follows the finger. */
function Ghost({ drag, children }) {
  if (!drag) return null;
  return (
    <div className="fixed z-50 pointer-events-none" style={{ left: drag.x - drag.dx, top: drag.y - drag.dy, width: drag.w }}>
      <div className="rotate-[1.5deg] scale-[1.04] shadow-2xl shadow-black/40 rounded-2xl">{children}</div>
    </div>
  );
}

/* A little burst for a perfect answer. */
const BURST = ["#10b981", "#34d399", "#f59e0b", "#3b82f6", "#ec4899", "#fbbf24"];
function Burst() {
  const [pieces] = useState(() => Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    return { x: Math.cos(a) * (70 + (i % 3) * 25), y: Math.sin(a) * (60 + (i % 4) * 18) - 30, r: (i * 47) % 360, c: BURST[i % BURST.length], d: (i % 5) * 25 };
  }));
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible">
      <div className="relative">
        {pieces.map((p, i) => (
          <span key={i} className="confetti-piece" style={{ background: p.c, "--x": `${p.x}px`, "--y": `${p.y}px`, "--r": `${p.r}deg`, animationDelay: `${p.d}ms` }} />
        ))}
      </div>
    </div>
  );
}

const Grip = () => (
  <span className="grid grid-cols-2 gap-[3px] shrink-0 opacity-60" aria-hidden="true">
    {[0, 1, 2, 3, 4, 5].map(i => <span key={i} className="w-[4px] h-[4px] rounded-full bg-current" />)}
  </span>
);

/* ---------------------------------------------------------------- order
   A timeline of step cards. Drag a card up or down and the others slide out
   of the way; or tap one card, then tap where it should go. */
function Order({ item, onAnswer }) {
  const [list, setList] = useState(() => {
    let s = shuffle(item.steps);
    // Never start already solved.
    while (s.every((x, i) => x === item.steps[i]) && item.steps.length > 1) s = shuffle(item.steps);
    return s;
  });
  const [sel, setSel] = useState(null);
  const [checked, setChecked] = useState(false);
  const [touched, setTouched] = useState(false);

  const moveItem = (from, to) => setList(l => {
    const x = [...l];
    const [v] = x.splice(from, 1);
    x.splice(to, 0, v);
    return x;
  });

  const { drag, bind } = useDrag({
    onMove: (d) => {
      if (d.over !== null && d.over !== d.from) {
        moveItem(d.from, d.over);
        d.from = d.over;
        setTouched(true);
      }
    },
    onDrop: () => { buzz(); setSel(null); },
    onTap: (i) => {
      if (sel === null) { setSel(i); return; }
      if (sel !== i) { moveItem(sel, i); setTouched(true); buzz(); }
      setSel(null);
    },
  });

  const right = list.filter((v, i) => v === item.steps[i]).length;
  const check = () => {
    setChecked(true);
    setSel(null);
    onAnswer({ score: right / item.steps.length, correct: right === item.steps.length });
  };
  const perfect = checked && right === item.steps.length;
  const draggingText = drag ? list[drag.from] : null;

  return (
    <div className="relative">
      <Label>{item.label || "Procedure builder"}</Label>
      <p className="rd-lead font-bold text-slate-900 dark:text-white">{item.prompt}</p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Drag the cards into order — or tap a card, then tap where it goes.
      </p>

      <ol className="mt-4 relative">
        <span className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
        {list.map((v, i) => {
          const ok = checked && v === item.steps[i];
          const wrong = checked && !ok;
          const isDrag = draggingText === v;
          return (
            <li key={v} className="relative flex items-stretch gap-3 py-1">
              <span className={`relative z-[1] mt-2.5 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 transition ${
                ok ? "bg-emerald-500 text-white" : wrong ? "bg-red-500 text-white" : "bg-slate-900 dark:bg-slate-600 text-white"
              }`}>
                {ok ? <Check size={16} strokeWidth={3} /> : wrong ? <X size={16} strokeWidth={3} /> : i + 1}
              </span>
              <div
                data-drop={i}
                role="button"
                tabIndex={checked ? -1 : 0}
                aria-label={`Step ${i + 1}: ${v}`}
                {...(checked ? {} : bind(i, v))}
                style={{ touchAction: checked ? "auto" : "none", animationDelay: perfect ? `${i * 70}ms` : undefined }}
                className={`flex-1 select-none flex items-center gap-3 rounded-2xl border-2 px-3.5 py-3 min-h-[52px] transition ${
                  perfect ? "learn-pop" : ""} ${
                  ok ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40"
                    : wrong ? "border-red-400 bg-red-50 dark:bg-red-950/40"
                    : isDrag ? "border-dashed border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 opacity-40"
                    : sel === i ? "border-emerald-500 bg-white dark:bg-slate-800 ring-4 ring-emerald-500/20"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-grab active:cursor-grabbing"
                }`}
              >
                {!checked && <span className="text-slate-400"><Grip /></span>}
                <span className="font-semibold text-slate-900 dark:text-white leading-snug">{v}</span>
                {wrong && (
                  <span className="ml-auto shrink-0 text-[11px] font-black rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 px-2 py-0.5">
                    step {item.steps.indexOf(v) + 1}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <Ghost drag={drag}>
        <div className="flex items-center gap-3 rounded-2xl border-2 border-emerald-500 bg-white dark:bg-slate-800 px-3.5 py-3 min-h-[52px]">
          <span className="text-emerald-500"><Grip /></span>
          <span className="font-semibold text-slate-900 dark:text-white leading-snug">{draggingText}</span>
        </div>
      </Ghost>

      {perfect && <Burst />}

      {!checked && (
        <button onClick={check} disabled={!touched}
          className="mt-5 w-full bg-emerald-500 text-slate-900 font-bold py-3.5 rounded-2xl disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-500">
          {touched ? "Check order" : "Move a card to begin"}
        </button>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- match
   Terms on the left, meanings on the right. Drag a meaning onto the term
   it belongs to (the two cards swap places), or tap a meaning then tap
   where it goes. Checking marks every row. */
function derange(arr, target) {
  let best = shuffle(arr), bestHits = Infinity;
  for (let t = 0; t < 40; t++) {
    const s = shuffle(arr);
    const hits = s.filter((v, i) => v === target[i]).length;
    if (hits < bestHits) { best = s; bestHits = hits; }
    if (hits === 0) break;
  }
  return best;
}

function Match({ item, onAnswer }) {
  const want = useMemo(() => item.pairs.map(p => p[1]), [item]);
  const [cards, setCards] = useState(() => derange(want, want));
  const [moved, setMoved] = useState(() => new Set());
  const [sel, setSel] = useState(null);
  const [checked, setChecked] = useState(false);

  const swap = (a, b) => {
    if (b === null || b === undefined || a === b) return;
    setCards(c => { const x = [...c]; [x[a], x[b]] = [x[b], x[a]]; return x; });
    setMoved(m => new Set([...m, a, b]));
    buzz();
  };
  const { drag, bind } = useDrag({
    onDrop: (from, over) => { swap(from, over); setSel(null); },
    onTap: (i) => {
      if (sel === null) { setSel(i); return; }
      swap(sel, i);
      setSel(null);
    },
  });

  const okRow = (i) => cards[i] === want[i];
  const right = want.filter((_, i) => okRow(i)).length;
  const check = () => {
    setChecked(true);
    setSel(null);
    onAnswer({ score: right / want.length, correct: right === want.length });
  };
  const perfect = checked && right === want.length;
  const over = drag?.over;

  return (
    <div className="relative">
      <Label>{item.label || "Match"}</Label>
      <p className="rd-lead font-bold text-slate-900 dark:text-white">{item.prompt}</p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Drag each meaning onto the right term — or tap a meaning, then tap where it goes.
      </p>

      <div className="mt-4 space-y-2.5">
        {item.pairs.map((p, i) => {
          const ok = checked && okRow(i);
          const wrong = checked && !ok;
          const target = drag && over === i && drag.from !== i;
          const isDrag = drag && drag.from === i;
          return (
            <div key={i}>
              <div className="grid grid-cols-[minmax(0,2fr)_18px_minmax(0,3fr)] items-stretch gap-1.5">
                <div data-drop={i}
                  className={`relative min-h-[60px] rounded-2xl border-2 px-3 py-2 flex items-center justify-between gap-2 font-black text-[15px] leading-tight transition ${
                    ok ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-slate-900 dark:text-white"
                      : wrong ? "border-red-400 bg-red-50 dark:bg-red-950/40 text-slate-900 dark:text-white"
                      : target ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 text-slate-900 dark:text-white scale-[1.02]"
                      : moved.has(i) ? "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      : "border-dashed border-slate-300 dark:border-slate-600 bg-white/60 dark:bg-slate-800/50 text-slate-900 dark:text-white"
                  }`}>
                  <span>{p[0]}</span>
                  {ok && <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 learn-pop"><Check size={14} strokeWidth={3} /></span>}
                  {wrong && <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 learn-pop"><X size={14} strokeWidth={3} /></span>}
                </div>
                <svg viewBox="0 0 18 20" className={`self-center w-[18px] ${ok ? "text-emerald-500" : wrong ? "text-red-400" : "text-slate-400"}`} aria-hidden="true">
                  <path d="M16 10 C11 4, 7 16, 3 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" />
                  <path d="M6 7 L2.5 10 L6 13" fill="none" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                <div data-drop={i}
                  role="button"
                  tabIndex={checked ? -1 : 0}
                  aria-label={`${cards[i]} — matched to ${p[0]}`}
                  {...(checked ? {} : bind(i, cards[i]))}
                  style={{ touchAction: checked ? "auto" : "none" }}
                  className={`select-none min-h-[60px] rounded-2xl border-2 px-3 py-2 flex items-center gap-2.5 text-[13.5px] leading-snug font-semibold transition ${
                    ok ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-slate-800 dark:text-slate-100"
                      : wrong ? "border-red-400 bg-red-50 dark:bg-red-950/40 text-slate-800 dark:text-slate-100"
                      : isDrag ? "border-dashed border-emerald-400 opacity-40 text-slate-500"
                      : target ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 text-slate-800 dark:text-slate-100"
                      : sel === i ? "border-emerald-500 ring-4 ring-emerald-500/20 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-grab active:cursor-grabbing"
                  }`}>
                  {!checked && <span className="text-slate-400"><Grip /></span>}
                  <span>{cards[i]}</span>
                </div>
              </div>
              {wrong && (
                <p className="mt-1 ml-1 text-[13px] text-emerald-700 dark:text-emerald-400 learn-fade">
                  <Check size={13} strokeWidth={3} className="inline -mt-0.5 mr-1" />
                  <b>{p[0]}</b> → {p[1]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <Ghost drag={drag}>
        <div className="min-h-[60px] rounded-2xl border-2 border-emerald-500 bg-white dark:bg-slate-800 px-3 py-2 flex items-center gap-2.5 text-[13.5px] leading-snug font-semibold text-slate-800 dark:text-slate-100">
          <span className="text-emerald-500"><Grip /></span>
          <span>{drag ? cards[drag.from] : ""}</span>
        </div>
      </Ghost>

      {perfect && <Burst />}

      {!checked && (
        <button onClick={check} disabled={!moved.size}
          className="mt-5 w-full bg-emerald-500 text-slate-900 font-bold py-3.5 rounded-2xl disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-500">
          {moved.size ? "Check answers" : "Drag a meaning to begin"}
        </button>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------- sort */
function Sort({ item, onAnswer }) {
  const deck = useMemo(() => shuffle(item.cards), [item]);
  const [i, setI] = useState(0);
  const [placed, setPlaced] = useState({});     // cat -> [text]
  const [firstTry, setFirstTry] = useState(0);
  const [miss, setMiss] = useState(null);       // cat id wrongly chosen for current card
  const card = deck[i];

  const drop = (cat) => {
    if (!card) return;
    if (cat !== card.cat) {
      setMiss(cat);
      return;
    }
    const clean = miss === null;
    const nextFirst = firstTry + (clean ? 1 : 0);
    setFirstTry(nextFirst);
    setPlaced(p => ({ ...p, [cat]: [...(p[cat] || []), card.text] }));
    setMiss(null);
    if (i + 1 >= deck.length) {
      setI(i + 1);
      onAnswer({ score: nextFirst / deck.length, correct: nextFirst === deck.length });
    } else {
      setI(i + 1);
    }
  };

  return (
    <div>
      <Label>Sort it</Label>
      <p className="rd-lead font-bold text-slate-900 dark:text-white">{item.prompt}</p>

      <div className="mt-4 h-[84px] flex items-center justify-center">
        {card ? (
          <div key={i} className={`learn-pop rounded-2xl px-5 py-4 bg-slate-900 text-white font-black text-lg shadow-lg ${miss ? "learn-shake" : ""}`}>
            {card.text}
          </div>
        ) : (
          <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">All sorted</p>
        )}
      </div>
      {miss && card && (
        <p className="text-center text-sm font-semibold text-red-600 dark:text-red-400 -mt-1 mb-1">
          Not {item.categories.find(c => c.id === miss)?.label} — try another group.
        </p>
      )}
      <p className="text-center text-xs text-slate-400 mb-3">{Math.min(i + 1, deck.length)} of {deck.length}</p>

      <div className="grid grid-cols-2 gap-2.5">
        {item.categories.map(c => (
          <button key={c.id} onClick={() => drop(c.id)} disabled={!card}
            className={`rounded-2xl border-2 p-3 text-left min-h-[92px] transition active:scale-[0.98] ${
              miss === c.id ? "border-red-400 bg-red-50 dark:bg-red-950/40" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-emerald-400"
            }`}>
            <p className="font-black text-slate-900 dark:text-white text-sm">{c.label}</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {(placed[c.id] || []).map(t => (
                <span key={t} className="text-[11px] font-semibold rounded-md bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5">{t}</span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function Label({ children }) {
  return (
    <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
      {children}
    </p>
  );
}
