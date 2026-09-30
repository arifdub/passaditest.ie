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
    order      tap the steps into the right order
    match      pair each left-hand item with its right-hand partner
    sort       put each card in its group
  ===========================================================================
*/

import React, { useState, useMemo } from "react";
import { Check, X, RotateCcw } from "lucide-react";
import { shuffle } from "./engine";

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
    default: return <Choice key={k} item={item} onAnswer={onAnswer} />;
  }
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

/* ---------------------------------------------------------------- order */
function Order({ item, onAnswer }) {
  const pool = useMemo(() => {
    let s = shuffle(item.steps);
    // Never start already solved.
    while (s.every((x, i) => x === item.steps[i]) && item.steps.length > 1) s = shuffle(item.steps);
    return s;
  }, [item]);
  const [placed, setPlaced] = useState([]);
  const [checked, setChecked] = useState(false);
  const left = pool.filter(p => !placed.includes(p));

  const check = () => {
    setChecked(true);
    const right = placed.filter((p, i) => p === item.steps[i]).length;
    onAnswer({ score: right / item.steps.length, correct: right === item.steps.length });
  };

  return (
    <div>
      <Label>{item.label || "Procedure builder"}</Label>
      <p className="rd-lead font-bold text-slate-900 dark:text-white">{item.prompt}</p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Tap the steps in order. Tap a placed step to take it back.</p>

      <ol className="mt-4 space-y-2">
        {item.steps.map((_, i) => {
          const val = placed[i];
          const ok = checked && val === item.steps[i];
          const wrong = checked && val !== item.steps[i];
          return (
            <li key={i}>
              <button
                disabled={checked || !val}
                onClick={() => setPlaced(placed.filter(p => p !== val))}
                className={`w-full flex items-center gap-3 rounded-xl border-2 px-3 py-2.5 text-left min-h-[48px] ${
                  ok ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40"
                    : wrong ? "border-red-400 bg-red-50 dark:bg-red-950/40"
                    : val ? "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                    : "border-dashed border-slate-200 dark:border-slate-700"
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-slate-900 dark:bg-slate-600 text-white text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                <span className={`font-semibold ${val ? "text-slate-900 dark:text-white" : "text-slate-300 dark:text-slate-600"}`}>{val || "…"}</span>
                {wrong && <span className="ml-auto text-xs font-bold text-emerald-600 dark:text-emerald-400">{item.steps[i]}</span>}
              </button>
            </li>
          );
        })}
      </ol>

      {!checked && (
        <div className="mt-4 flex flex-wrap gap-2">
          {left.map(p => (
            <button key={p} onClick={() => setPlaced([...placed, p])}
              className="rounded-xl bg-slate-900 dark:bg-slate-700 text-white font-bold px-4 py-3 active:scale-95 transition">
              {p}
            </button>
          ))}
        </div>
      )}

      {!checked && (
        <div className="mt-5 flex gap-2.5">
          <button onClick={() => setPlaced([])} disabled={!placed.length}
            className="border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold px-4 py-3 rounded-xl disabled:opacity-40 inline-flex items-center gap-1.5">
            <RotateCcw size={15} /> Reset
          </button>
          <button onClick={check} disabled={placed.length !== item.steps.length}
            className="flex-1 bg-emerald-500 text-slate-900 font-bold py-3 rounded-xl disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-500">
            Check order
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- match */
const PAIR_TONES = ["bg-sky-100 border-sky-400 dark:bg-sky-950/50", "bg-violet-100 border-violet-400 dark:bg-violet-950/50", "bg-amber-100 border-amber-400 dark:bg-amber-950/50", "bg-pink-100 border-pink-400 dark:bg-pink-950/50", "bg-teal-100 border-teal-400 dark:bg-teal-950/50", "bg-lime-100 border-lime-400 dark:bg-lime-950/50"];

function Match({ item, onAnswer }) {
  /* Right-hand cards are tracked by their position in the shuffled list,
     not by their text — two cards can say the same thing. A pairing is
     marked on the text, so either of two identical answers counts. */
  const rights = useMemo(() => shuffle(item.pairs.map(p => p[1])), [item]);
  const [sel, setSel] = useState(null);           // left index selected
  const [links, setLinks] = useState({});         // left index -> right index
  const [checked, setChecked] = useState(false);
  const linkedRights = Object.values(links);
  const textOf = (i) => (links[i] === undefined ? undefined : rights[links[i]]);

  const pickRight = (ri) => {
    if (checked || sel === null) return;
    const next = { ...links };
    for (const k of Object.keys(next)) if (next[k] === ri) delete next[k];
    next[sel] = ri;
    setLinks(next);
    setSel(null);
  };

  const check = () => {
    setChecked(true);
    const right = item.pairs.filter((p, i) => textOf(i) === p[1]).length;
    onAnswer({ score: right / item.pairs.length, correct: right === item.pairs.length });
  };

  const toneFor = (i) => PAIR_TONES[i % PAIR_TONES.length];

  return (
    <div>
      <Label>{item.label || "Match"}</Label>
      <p className="rd-lead font-bold text-slate-900 dark:text-white">{item.prompt}</p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Tap an item on the left, then its match on the right.</p>

      <div className="mt-4 grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-2.5">
        <div className="space-y-2">
          {item.pairs.map((p, i) => {
            const linked = links[i] !== undefined;
            const ok = checked && textOf(i) === p[1];
            return (
              <button key={i} disabled={checked} onClick={() => setSel(sel === i ? null : i)}
                className={`w-full min-h-[56px] rounded-xl border-2 px-3 py-2 text-left font-bold text-sm text-slate-900 dark:text-white transition ${
                  checked ? (ok ? good : bad)
                    : sel === i ? "border-slate-900 dark:border-white bg-white dark:bg-slate-800"
                    : linked ? toneFor(i) : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                }`}>
                {p[0]}
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {rights.map((r, ri) => {
            const owner = Object.keys(links).find(k => links[k] === ri);
            return (
              <button key={ri} disabled={checked} onClick={() => pickRight(ri)}
                className={`w-full min-h-[56px] rounded-xl border-2 px-3 py-2 text-left text-[13px] leading-snug text-slate-700 dark:text-slate-200 transition ${
                  owner !== undefined && !checked ? toneFor(Number(owner))
                    : sel !== null && !checked ? "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 animate-pulse"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                }`}>
                {r}
              </button>
            );
          })}
        </div>
      </div>

      {checked && item.pairs.some((p, i) => links[i] !== p[1]) && (
        <div className="mt-4 rounded-2xl border border-slate-200 dark:border-slate-700 p-3.5 space-y-1.5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Correct pairs</p>
          {item.pairs.map(p => (
            <p key={p[0]} className="text-sm text-slate-700 dark:text-slate-200"><b>{p[0]}</b> → {p[1]}</p>
          ))}
        </div>
      )}

      {!checked && (
        <button onClick={check} disabled={linkedRights.length !== item.pairs.length}
          className="mt-5 w-full bg-emerald-500 text-slate-900 font-bold py-3 rounded-xl disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-500">
          Check matches
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
