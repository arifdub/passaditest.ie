/*
  ===========================================================================
  INTERACTIVE LEARNING — SCREENS

    LearnHome     the library: books, level and XP
    BookScreen    one book: overall progress, quick review, its units
    UnitScreen    one unit: mastery, the learning path, weak areas, links
    LearnPlayer   runs one activity, a weak-area review, or a quick review

  All of it reads from the engine and the content; nothing here is specific
  to Book 1 or Unit 1.1, so later units and books need no screen changes.
  ===========================================================================
*/

import { scrollAppToTop } from "../appScroll";
import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  ChevronRight, Lock, Check, X, Sparkles, BookOpen, Flame, Trophy,
  RotateCcw, Target, ArrowRight, Zap, Brain,
} from "lucide-react";
import { ScreenHeader, Screen, ProgressBar, ProgressRing, PrimaryButton } from "../ui";
import { BOOKS, BOOK_BY_ID, getUnit } from "./books";
import {
  unitProgress, bookProgress, totalXp, levelFor, badgesFor, weakConcepts,
  reviewPool, reviewDue, buildReview, shuffle, readRecord,
} from "./engine";
import useLearn, { bumpStreak, getStreak } from "./useLearn";
import { useProgress } from "../progressStore";
import { ItemView } from "./items";
import HazardHunt from "./HazardHunt";
import { Visual, Visuals } from "./visuals";

const ACTIVITY_ICON = {
  learn: "📖", recall: "⚡", hunt: "🔎", spot: "🚦", lanes: "🛣️", junctions: "🗺️", parking: "🅿️", overtake: "🏎️", crossings: "🚂", motorway: "🛣️", lights: "🔦", weather: "🌦️", tunnels: "🚇", controls: "🎛️", mirrors: "🪞", ready: "✅", gears: "⚙️", brakes: "🛑", matching: "🧩", procedure: "🔁",
  scenarios: "🚗", walkthrough: "🧭", retention: "🧠", challenge: "🏁",
};

function timeAgo(ms) {
  if (!ms) return "Not started";
  const m = Math.round((Date.now() - ms) / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m} min ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} h ago`;
  const d = Math.round(h / 24);
  return `${d} day${d === 1 ? "" : "s"} ago`;
}

/* ===========================================================================
   LIBRARY
   =========================================================================== */
export function LearnHome({ go, back }) {
  const { entries } = useProgress();
  /* XP across every book. */
  const xp = BOOKS.reduce((a, b) => a + (b.moduleId ? totalXp(readRecord(entries[b.moduleId]?.completedIds || [])) : 0), 0);
  const lvl = levelFor(xp);

  return (
    <>
      <ScreenHeader
        title="Interactive Learning"
        subtitle="Learn it, practise it, remember it"
        onBack={back}
        backLabel="Home"
        below={<LevelStrip xp={xp} lvl={lvl} />}
      />
      <Screen>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          Separate from the question bank and mock tests: each book is a course
          of short lessons, scenarios and games. When a unit is mastered,
          practise its topic in the question bank.
        </p>

        <div className="mt-4 space-y-2.5">
          {BOOKS.map(book => <BookCard key={book.id} book={book} go={go} />)}
        </div>
      </Screen>
    </>
  );
}

function LevelStrip({ xp, lvl }) {
  return (
    <div className="mt-4 rounded-2xl bg-white/10 p-3.5 flex items-center gap-3">
      <div className="w-11 h-11 rounded-xl bg-emerald-500 text-slate-900 font-black flex items-center justify-center text-lg shrink-0">
        {lvl.number}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <p className="font-bold text-white truncate">Level {lvl.number} · {lvl.name}</p>
          <p className="text-xs font-bold text-emerald-300 tabular-nums shrink-0">{xp} XP</p>
        </div>
        <div className="mt-1.5 h-1.5 rounded-full bg-white/15 overflow-hidden">
          <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${(lvl.into / lvl.per) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}

function BookCard({ book, go }) {
  const { record } = useLearn(book.id);
  const ready = book.units.some(u => u.content);
  const bp = ready ? bookProgress(record, book) : null;

  return (
    <button
      onClick={() => ready && go({ screen: "learnBook", bookId: book.id })}
      disabled={!ready}
      className={`w-full text-left rounded-2xl p-4 border transition ${
        ready
          ? "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-400 active:scale-[0.99]"
          : "bg-white/60 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-70"
      }`}
    >
      <div className="flex items-start gap-3.5">
        <div className={`w-12 h-14 rounded-lg flex flex-col items-center justify-center shrink-0 ${ready ? "bg-slate-900 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-400"}`}>
          <span className="text-[9px] font-bold uppercase tracking-widest opacity-70">Book</span>
          <span className="text-xl font-black leading-none">{book.number}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-slate-900 dark:text-white leading-tight">{book.title}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{book.subtitle}</p>
          {ready && (
            <div className="mt-2.5">
              <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-1">
                <span>{book.units.length} units · {book.units.filter(u => u.content).length} available</span>
                <span>{bp.overall}%</span>
              </div>
              <ProgressBar pct={bp.overall} tone={bp.overall ? "emerald" : "slate"} />
            </div>
          )}
        </div>
        {ready
          ? <ChevronRight size={18} className="text-slate-300 dark:text-slate-600 shrink-0 mt-3" />
          : <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 shrink-0 mt-1">Soon</span>}
      </div>
    </button>
  );
}

/* ===========================================================================
   BOOK DASHBOARD
   =========================================================================== */
export function BookScreen({ bookId, go, back }) {
  const { book, record } = useLearn(bookId);
  if (!book) return null;
  const bp = bookProgress(record, book);
  const due = reviewDue(record, book);
  const badges = badgesFor(record, book);
  const earned = badges.filter(b => b.earned);

  return (
    <>
      <ScreenHeader
        title={book.title}
        subtitle={`Book ${book.number} · ${book.units.length} units`}
        onBack={back}
        backLabel="Library"
        below={
          <div className="mt-4">
            <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
              <span>Overall progress</span>
              <span className="text-white tabular-nums">{bp.overall}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/15 overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full transition-all" style={{ width: `${bp.overall}%` }} />
            </div>
            <p className="mt-2 text-xs text-slate-400">
              {totalXp(record)} XP · {earned.length} badge{earned.length === 1 ? "" : "s"} · mastery {bp.mastery}%
            </p>
          </div>
        }
      />
      <Screen>
        {due.length > 0 && (
          <button
            onClick={() => go({ screen: "learnPlay", bookId, mode: "quick" })}
            className="w-full text-left rounded-2xl p-4 bg-indigo-600 text-white flex items-center gap-3.5 active:scale-[0.99] transition mb-4"
          >
            <Brain size={26} className="shrink-0" />
            <div className="flex-1">
              <p className="font-bold">Quick review</p>
              <p className="text-sm text-indigo-100 leading-snug">
                {due.some(d => d.weak) ? "Bring back what tripped you up — a few questions." : "A few questions from what you've learned, to keep it."}
              </p>
            </div>
            <ArrowRight size={18} className="shrink-0" />
          </button>
        )}

        {book.glossary?.length > 0 && <GlossaryEntry count={book.glossary.length} onOpen={() => go({ screen: "learnGlossary", bookId })} />}

        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Units</p>
        <div className="space-y-2">
          {bp.units.map(({ unit, p }) => <UnitRow key={unit.id} unit={unit} p={p} bookId={bookId} go={go} />)}
        </div>

        {badges.length > 0 && (
          <>
            <p className="mt-6 mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Badges</p>
            <div className="grid grid-cols-3 gap-2">
              {badges.map(b => (
                <div key={b.id} className={`rounded-2xl border p-3 text-center ${
                  b.earned ? "border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-700" : "border-slate-200 dark:border-slate-700 opacity-50"
                }`}>
                  <div className={`text-2xl ${b.earned ? "" : "grayscale"}`}>{b.icon}</div>
                  <p className="mt-1 text-[11px] font-bold leading-tight text-slate-700 dark:text-slate-200">{b.label}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </Screen>
    </>
  );
}

function UnitRow({ unit, p, bookId, go }) {
  const soon = !p.available;
  const mark = soon ? <Lock size={15} className="text-slate-400" />
    : p.mastered ? <Check size={16} className="text-white" strokeWidth={3} />
    : p.state === "progress" ? <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
    : <span className="w-2.5 h-2.5 rounded-full border-2 border-slate-300" />;

  return (
    <button
      disabled={soon}
      onClick={() => go({ screen: "learnUnit", bookId, unitId: unit.id })}
      className={`w-full text-left rounded-2xl border p-3.5 flex items-start gap-3 transition ${
        soon ? "border-slate-200 dark:border-slate-700 opacity-60"
          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-400 active:scale-[0.99]"
      }`}
    >
      <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
        p.mastered ? "bg-emerald-500" : soon ? "bg-slate-100 dark:bg-slate-800" : "bg-slate-100 dark:bg-slate-700"
      }`}>{mark}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="text-[11px] font-black text-slate-400 tabular-nums">{unit.id}</span>
          <span className="font-bold text-slate-900 dark:text-white leading-tight">{unit.title}</span>
        </div>
        {soon ? (
          <p className="text-xs text-slate-400 mt-0.5">Coming soon</p>
        ) : (
          <>
            <div className="mt-2">
              <ProgressBar pct={p.completion} tone={p.mastered ? "emerald" : p.completion ? "amber" : "slate"} height="h-1.5" />
            </div>
            <p className="mt-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              {p.completion}% done · mastery {p.mastery}% · {p.xp} XP
              {p.weak.length > 0 && <span className="text-amber-600 dark:text-amber-400"> · {p.weak.length} weak area{p.weak.length === 1 ? "" : "s"}</span>}
              {" · "}{timeAgo(p.lastSeen)}
            </p>
          </>
        )}
      </div>
      {!soon && <ChevronRight size={17} className="text-slate-300 dark:text-slate-600 shrink-0 mt-1.5" />}
    </button>
  );
}

/* ===========================================================================
   UNIT
   =========================================================================== */
export function UnitScreen({ bookId, unitId, go, back }) {
  const { book, record } = useLearn(bookId);
  const unit = getUnit(bookId, unitId);
  if (!unit?.content) return null;
  const c = unit.content;
  const p = unitProgress(record, unit);
  const idx = book.units.findIndex(u => u.id === unitId);
  const nextUnit = book.units[idx + 1];
  const badges = badgesFor(record, book).filter(b => b.unit === unitId);

  return (
    <>
      <ScreenHeader
        title={c.title}
        /* Which course this is, not where it sits in the source book —
           page numbers mean nothing to a learner who hasn't got it. */
        subtitle={`${book.title} · Unit ${c.number}`}
        onBack={back}
        backLabel={`Book ${book.number}`}
      />
      <Screen>
        {/* Mastery */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex items-center gap-4 -mt-9 shadow-lg">
          <ProgressRing pct={p.mastery} size={76} stroke={7} tone={p.mastered ? "emerald" : "amber"} label="mastery" />
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-black ${p.mastered ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white"}`}>
              {p.mastered ? "Mastered" : p.completion === 0 ? "Not started" : "In progress"}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
              {p.mastered
                ? "You've shown you understand it, can apply it and remember it."
                : "Mastered needs every activity done, 80% overall, 80% in the challenge and 70% in the retention check."}
            </p>
            <p className="mt-1.5 text-xs font-bold text-slate-400">{p.completion}% done · {p.xp} XP</p>
          </div>
        </div>

        {/* Objectives */}
        {p.completion === 0 && (
          <div className="mt-4 rounded-2xl border border-slate-200 dark:border-slate-700 p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">By the end you'll be able to state</p>
            <ul className="mt-2 space-y-1.5">
              {c.objectives.map(o => (
                <li key={o} className="flex gap-2 text-sm text-slate-700 dark:text-slate-200"><Target size={15} className="text-emerald-500 shrink-0 mt-0.5" />{o}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Weak areas */}
        {p.weak.length > 0 && (
          <div className="mt-4 rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">Weak areas</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {p.weak.map(w => (
                <span key={w.id} className="text-xs font-bold rounded-lg bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-800 text-slate-700 dark:text-slate-200 px-2 py-1">{w.concept.title}</span>
              ))}
            </div>
            <button
              onClick={() => go({ screen: "learnPlay", bookId, unitId, mode: "weak" })}
              className="mt-3 w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 rounded-xl inline-flex items-center justify-center gap-2"
            >
              <RotateCcw size={16} /> Review weak areas
            </button>
          </div>
        )}

        {/* The learning path */}
        <p className="mt-6 mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Your learning path</p>
        <ol className="space-y-2">
          {p.rows.map(({ activity, done, best }, i) => {
            const isNext = p.next?.id === activity.id;
            return (
              <li key={activity.id}>
                <button
                  onClick={() => go({ screen: "learnPlay", bookId, unitId, activityId: activity.id })}
                  className={`w-full text-left rounded-2xl border p-3.5 flex items-center gap-3 transition active:scale-[0.99] ${
                    isNext ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 ring-2 ring-emerald-400/30"
                      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-emerald-400"
                  }`}
                >
                  <span className="text-2xl w-9 text-center shrink-0" aria-hidden="true">{ACTIVITY_ICON[activity.id] || "•"}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 dark:text-white leading-tight">
                      <span className="text-slate-400 font-black text-xs mr-1.5 tabular-nums">{i + 1}</span>{activity.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{activity.blurb}</p>
                  </div>
                  {done ? (
                    <span className={`text-xs font-black tabular-nums shrink-0 px-2 py-1 rounded-lg ${
                      (best ?? 100) >= 80 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400"
                    }`}>
                      {activity.kind === "learn" ? <Check size={14} /> : `${best ?? 0}%`}
                    </span>
                  ) : isNext ? (
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 shrink-0">Up next</span>
                  ) : (
                    <ChevronRight size={17} className="text-slate-300 dark:text-slate-600 shrink-0" />
                  )}
                </button>
              </li>
            );
          })}
        </ol>

        {/* Challenge results by skill */}
        {p.skills.some(s => s.pct !== null) && (
          <div className="mt-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">Challenge — best by skill</p>
            <SkillBars skills={p.skills} />
          </div>
        )}

        {badges.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {badges.map(b => (
              <span key={b.id} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold ${
                b.earned ? "border-amber-300 bg-amber-50 text-amber-800 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-700" : "border-slate-200 dark:border-slate-700 text-slate-400"
              }`}>
                <span className={b.earned ? "" : "grayscale opacity-60"}>{b.icon}</span>{b.label}
              </span>
            ))}
          </div>
        )}

        {/* Onward */}
        <div className="mt-6 space-y-2.5">
          {book.glossary?.some(g => g.unit === unitId) && (
            <GlossaryEntry
              count={book.glossary.filter(g => g.unit === unitId).length}
              label="Visual glossary for this unit"
              onOpen={() => go({ screen: "learnGlossary", bookId, unitId })}
            />
          )}
          {p.rows.find(r => r.activity.id === "challenge")?.done && (
            <button onClick={() => go({ screen: "learnPlay", bookId, unitId, activityId: "challenge" })}
              className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold py-3 rounded-xl inline-flex items-center justify-center gap-2">
              <RotateCcw size={16} /> Retry the challenge
            </button>
          )}
          {c.mcqLink && (
            <div className="rounded-2xl bg-slate-900 p-4 text-white">
              <p className="font-bold">Finished this topic?</p>
              <p className="text-sm text-slate-300 mt-0.5">Test yourself in the question bank: {c.mcqLink.label}.</p>
              <button onClick={() => go({ screen: "section", sectionId: c.mcqLink.sectionId })}
                className="mt-3 w-full bg-emerald-500 text-slate-900 font-bold py-3 rounded-xl inline-flex items-center justify-center gap-2">
                Practise MCQs <ArrowRight size={16} />
              </button>
            </div>
          )}
          {nextUnit && (
            <button
              disabled={!nextUnit.content}
              onClick={() => go({ screen: "learnUnit", bookId, unitId: nextUnit.id })}
              className="w-full border border-slate-200 dark:border-slate-700 font-bold py-3 rounded-xl text-slate-700 dark:text-slate-200 disabled:opacity-50 inline-flex items-center justify-center gap-2"
            >
              Next unit: {nextUnit.id} {nextUnit.title}{nextUnit.content ? "" : " · coming soon"}
            </button>
          )}
        </div>
      </Screen>
    </>
  );
}

/* ===========================================================================
   VISUAL DRIVING GLOSSARY
   Every technical term the course has taught, as a card: the drawing
   (largest), the term, one sentence, the key point, and a real-road example
   where useful. Filterable by unit; opened from the book or a unit.
   =========================================================================== */
function GlossaryEntry({ count, label = "Visual Driving Glossary", onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="w-full text-left rounded-2xl p-4 mb-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 flex items-center gap-3.5 active:scale-[0.99] transition"
    >
      <span className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-2xl shrink-0" aria-hidden="true">👀</span>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-slate-900 dark:text-white">{label}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
          See it, then name it — {count} term{count === 1 ? "" : "s"}, each drawn
        </p>
      </div>
      <ChevronRight size={18} className="text-slate-300 dark:text-slate-600 shrink-0" />
    </button>
  );
}

export function GlossaryScreen({ bookId, unitId, back }) {
  const book = BOOK_BY_ID[bookId];
  const all = book?.glossary || [];
  const units = book.units.filter(u => all.some(g => g.unit === u.id));
  const [filter, setFilter] = useState(unitId || "all");
  const [q, setQ] = useState("");

  const shown = all.filter(g =>
    (filter === "all" || g.unit === filter) &&
    (!q || `${g.term} ${g.meaning}`.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <>
      <ScreenHeader
        title="Visual Driving Glossary"
        subtitle={`${book.title} · see it, then name it`}
        onBack={back}
        backLabel="Back"
      />
      <Screen>
        <input
          type="search"
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Find a term — e.g. hatched, lane, box"
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400"
        />
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {[{ id: "all", label: "All" }, ...units.map(u => ({ id: u.id, label: `${u.id} ${u.title}` }))].map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)}
              className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-bold border transition ${
                filter === f.id
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-emerald-500 dark:text-slate-900 dark:border-emerald-500"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
              }`}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-4">
          {shown.map(g => (
            <article key={g.id} className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 shadow-sm">
              <Visual id={g.visual} />
              <div className="px-1.5 pt-3 pb-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-lg font-black text-slate-900 dark:text-white leading-tight">{g.term}</h2>
                  <span className="text-[10px] font-black text-slate-400 shrink-0 tabular-nums">UNIT {g.unit}</span>
                </div>
                <p className="mt-1 rd-option text-slate-700 dark:text-slate-200 leading-relaxed">{g.meaning}</p>
                <p className="mt-2.5 flex gap-2 text-sm text-slate-800 dark:text-slate-100 leading-snug">
                  <span className="shrink-0 font-black text-emerald-600 dark:text-emerald-400">KEY</span>{g.key}
                </p>
                {g.example && (
                  <p className="mt-1.5 flex gap-2 text-sm text-slate-500 dark:text-slate-400 leading-snug">
                    <span className="shrink-0 font-black">ON THE ROAD</span>{g.example}
                  </p>
                )}
              </div>
            </article>
          ))}
          {!shown.length && <p className="text-center text-sm text-slate-400 py-10">No terms match.</p>}
        </div>
      </Screen>
    </>
  );
}

function SkillBars({ skills }) {
  const names = { knowledge: "Knowledge", application: "Application", recognition: "Recognition", retention: "Retention" };
  return (
    <div className="space-y-2.5">
      {skills.map(s => (
        <div key={s.id}>
          <div className="flex justify-between text-xs font-bold mb-1">
            <span className="text-slate-600 dark:text-slate-300">{names[s.id]}</span>
            <span className="text-slate-400 tabular-nums">{s.pct === null ? "—" : `${s.pct}%`}</span>
          </div>
          <ProgressBar pct={s.pct || 0} tone={s.pct === null ? "slate" : s.pct >= 80 ? "emerald" : "amber"} height="h-1.5" />
        </div>
      ))}
    </div>
  );
}

/* ===========================================================================
   PLAYER
   One screen for everything the learner does:
     activityId          one activity from a unit
     mode "weak"         the unit's weak concepts: a reminder card, then
                         questions on each
     mode "quick"        a spaced quick review across the book
   =========================================================================== */
export function LearnPlayer({ bookId, unitId, activityId, mode, go, back }) {
  const { book, record, save, stamp } = useLearn(bookId);
  const unit = unitId ? getUnit(bookId, unitId) : null;
  const activity = unit?.content?.activities.find(a => a.id === activityId) || null;

  /* Build the review once, when the screen opens. */
  const [plan] = useState(() => {
    if (mode === "weak" && unit) {
      const weak = weakConcepts(record, unit);
      const pool = reviewPool(unit).filter(it => it.type !== "flash");
      const steps = [];
      for (const w of weak) {
        steps.push({ kind: "concept", concept: w.concept, conceptId: w.id });
        shuffle(pool.filter(it => it.concept === w.id)).slice(0, 2).forEach(it => steps.push({ kind: "item", item: it, unitId: unit.id }));
      }
      return { title: `Review · ${unit.content.title}`, steps, kindForXp: "review" };
    }
    if (mode === "quick") {
      const units = book.units.filter(u => u.content && unitProgress(record, u).completion >= 50);
      const items = buildReview(record, units, 6);
      return { title: "Quick review", steps: items.map(it => ({ kind: "item", item: it, unitId: it._unit })), kindForXp: "review" };
    }
    return null;
  });

  const title = activity ? activity.title : plan?.title || "Review";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <PlayerHeader title={title} sub={activity ? `Unit ${unit.id} · ${unit.title}` : book.title} onExit={back} />
      <div className="max-w-2xl mx-auto px-5 pt-5" style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}>
        {activity?.kind === "learn" && (
          <LearnCards activity={activity} unit={unit} save={save} stamp={stamp} go={go} back={back} bookId={bookId} />
        )}
        {activity?.kind === "hunt" && (
          <HuntRun activity={activity} unit={unit} record={record} save={save} stamp={stamp} go={go} back={back} bookId={bookId} />
        )}
        {activity?.kind === "items" && (
          <ItemRunner
            key={activity.id}
            steps={activity.items.map(it => ({ kind: "item", item: it, unitId: unit.id }))}
            activity={activity}
            unit={unit}
            record={record}
            save={save}
            stamp={stamp}
            go={go}
            back={back}
            bookId={bookId}
          />
        )}
        {plan && (
          plan.steps.length ? (
            <ItemRunner steps={plan.steps} review={mode} book={book} unit={unit} record={record}
              save={save} stamp={stamp} go={go} back={back} bookId={bookId} />
          ) : (
            <div className="text-center py-16">
              <p className="text-4xl">🎉</p>
              <p className="mt-3 font-bold text-slate-900 dark:text-white">Nothing to review right now.</p>
              <button onClick={back} className="mt-5 bg-emerald-500 text-slate-900 font-bold px-6 py-3 rounded-xl">Back</button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function PlayerHeader({ title, sub, onExit }) {
  const [streak, setStreak] = useState(getStreak());
  useEffect(() => {
    const t = setInterval(() => setStreak(getStreak()), 400);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="bg-slate-900 text-white sticky top-0 z-10">
      <div className="max-w-2xl mx-auto px-5 pb-3" style={{ paddingTop: "max(1.25rem, calc(env(safe-area-inset-top) + 0.75rem))" }}>
        <div className="flex items-center gap-3">
          <button onClick={onExit} aria-label="Exit" className="shrink-0 bg-white/10 hover:bg-white/20 rounded-xl p-2">
            <X size={18} />
          </button>
          <div className="flex-1 min-w-0">
            <p className="font-black leading-tight truncate">{title}</p>
            <p className="text-xs text-slate-400 truncate">{sub}</p>
          </div>
          {streak >= 3 && (
            <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-orange-500/20 text-orange-300 px-2.5 py-1 text-xs font-black learn-pop" key={streak}>
              <Flame size={13} /> {streak}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   LEARN CARDS — progressive disclosure, one card at a time.
   --------------------------------------------------------------------------- */
function LearnCards({ activity, unit, save, stamp, go, back, bookId }) {
  const cards = activity.cards;
  const [i, setI] = useState(0);
  const [asked, setAsked] = useState(null);   // picked option on a card with `ask`
  const [done, setDone] = useState(false);
  const card = cards[i];
  const gated = card?.ask && asked === null;

  const next = () => {
    if (i + 1 < cards.length) { setI(i + 1); setAsked(null); scrollAppToTop(); return; }
    save([
      `done:${unit.id}:${activity.id}`,
      `best:${unit.id}:${activity.id}:100`,
      `xp:${unit.id}:${activity.id}.done:${activity.xp || 0}`,
      `seen:${unit.id}:${stamp()}`,
    ]);
    setDone(true);
  };

  if (done) {
    return <Finish unit={unit} activity={activity} pct={100} xp={activity.xp} go={go} back={back} bookId={bookId}
      remember={activity.remember} />;
  }

  return (
    <div>
      <Dots n={cards.length} at={i} />
      <div key={i} className="mt-4 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 shadow-sm learn-fade">
        {/* SEE IT → NAME IT → DEFINE IT. The drawing comes first, so the
            learner sees what the term means before reading about it — except
            on a card that asks them to predict first, where it would give
            the answer away; there it opens the reveal instead. */}
        {(card.visual || card.visuals) && !card.ask && <Visuals ids={card.visuals || card.visual} className="-mx-1 mb-4" />}
        <div className="flex items-center gap-2.5">
          <span className="text-3xl" aria-hidden="true">{card.icon}</span>
          <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">{card.kicker}</p>
        </div>
        <h2 className="mt-2 text-xl font-black text-slate-900 dark:text-white leading-tight">{card.title}</h2>

        {card.ask && (
          <div className="mt-4">
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{card.ask.prompt}</p>
            <div className="mt-2.5 space-y-2">
              {card.ask.options.map((o, k) => {
                const st = asked === null ? "border-slate-200 dark:border-slate-700"
                  : k === card.ask.answer ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40"
                  : asked === k ? "border-red-400 bg-red-50 dark:bg-red-950/40" : "border-slate-200 dark:border-slate-700 opacity-60";
                return (
                  <button key={k} disabled={asked !== null} onClick={() => setAsked(k)}
                    className={`w-full text-left rounded-xl border px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-100 ${st}`}>{o}</button>
                );
              })}
            </div>
          </div>
        )}

        {!gated && (
          <div className={card.ask ? "mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 learn-fade" : ""}>
            {(card.visual || card.visuals) && card.ask && <Visuals ids={card.visuals || card.visual} className="-mx-1 mb-1" />}
            {card.body?.map((b, k) => (
              <p key={k} className="mt-3 rd-option text-slate-700 dark:text-slate-200 leading-relaxed">{b}</p>
            ))}
            {card.steps && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {card.steps.map((s, k) => (
                  <span key={s} className="inline-flex items-center gap-1 rounded-lg bg-slate-900 text-white text-sm font-bold px-2.5 py-1.5">
                    <span className="text-emerald-400">{s[0]}</span>{s.slice(1)}{k < card.steps.length - 1 && <ArrowRight size={12} className="ml-1 text-slate-500" />}
                  </span>
                ))}
              </div>
            )}
            {card.tiles && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {card.tiles.map(t => (
                  <div key={t.label} className="rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-3">
                    <p className="font-black text-sm text-slate-900 dark:text-white">{t.label}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-snug">{t.text}</p>
                  </div>
                ))}
              </div>
            )}
            {card.list && (
              <ul className="mt-3 space-y-2">
                {card.list.map(l => (
                  <li key={l} className="flex gap-2.5 rd-option text-slate-700 dark:text-slate-200"><Check size={17} className="text-emerald-500 shrink-0 mt-1" />{l}</li>
                ))}
              </ul>
            )}
            {card.sections?.map(sec => (
              <div key={sec.head} className="mt-4">
                <p className="font-black text-slate-900 dark:text-white">{sec.head}</p>
                <ul className="mt-1.5 space-y-1.5">
                  {sec.list.map(l => (
                    <li key={l} className="flex gap-2 text-[15px] text-slate-700 dark:text-slate-200 leading-snug"><span className="text-emerald-500 font-black">•</span>{l}</li>
                  ))}
                </ul>
              </div>
            ))}
            {card.think && (
              <div className="mt-4 rounded-2xl bg-slate-900 text-white p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Think about</p>
                <ul className="mt-2 space-y-1.5">
                  {card.think.map(t => <li key={t} className="text-[15px]">{t}</li>)}
                </ul>
              </div>
            )}
            {card.callout && (
              <blockquote className="mt-4 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 p-4 rd-lead font-bold text-slate-900 dark:text-white leading-snug">
                {card.callout}
              </blockquote>
            )}
          </div>
        )}
      </div>

      <div className="mt-5 flex gap-2.5">
        {i > 0 && (
          <button onClick={() => { setI(i - 1); setAsked(null); }} className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold px-5 py-3 rounded-xl">
            Back
          </button>
        )}
        <button onClick={next} disabled={gated}
          className="flex-1 bg-emerald-500 text-slate-900 font-bold py-3 rounded-xl disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-500 inline-flex items-center justify-center gap-1.5">
          {gated ? "Answer to continue" : i + 1 < cards.length ? "Continue" : "Finish lesson"} {!gated && <ArrowRight size={16} />}
        </button>
      </div>
    </div>
  );
}

function Dots({ n, at }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: n }, (_, k) => (
        <span key={k} className={`h-1.5 flex-1 rounded-full ${k < at ? "bg-emerald-500" : k === at ? "bg-emerald-300" : "bg-slate-200 dark:bg-slate-700"}`} />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   HAZARD HUNT wrapper — scoring and saving.
   --------------------------------------------------------------------------- */
function HuntRun({ activity, unit, save, stamp, go, back, bookId }) {
  const [result, setResult] = useState(null);
  const onDone = ({ found, total, score }) => {
    const pct = Math.round(score * 100);
    const events = [
      `done:${unit.id}:${activity.id}`,
      `best:${unit.id}:${activity.id}:${pct}`,
      `xp:${unit.id}:${activity.id}.done:${activity.xp || 0}`,
      `seen:${unit.id}:${stamp()}`,
    ];
    if (found < total) events.push(`miss:${unit.id}:hazard-types:${stamp()}`);
    save(events);
    setResult({ pct, found, total });
  };
  return (
    <div>
      <HazardHunt activity={activity} onDone={onDone} />
      {result && (
        <div className="mt-5">
          <Finish unit={unit} activity={activity} pct={result.pct} xp={activity.xp} compact go={go} back={back} bookId={bookId}
            headline={`${result.found} of ${result.total} hazards found`} />
        </div>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   ITEM RUNNER — questions, games, reviews.
   A wrong answer never just says "Wrong": it shows the concept again and
   offers a retry. The first attempt is what's scored.
   --------------------------------------------------------------------------- */
function ItemRunner({ steps, activity, unit, record, save, stamp, go, back, bookId, review, book }) {
  const [at, setAt] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [answer, setAnswer] = useState(null);      // result of the current attempt
  const [scores, setScores] = useState([]);        // { id, score, skill }
  const [xpGained, setXpGained] = useState(0);
  const [toast, setToast] = useState(null);
  const [finished, setFinished] = useState(false);
  const firstResult = useRef(null);

  const step = steps[at];
  const isWalk = activity?.mode === "walkthrough";
  const scored = steps.filter(s => s.kind === "item" && s.item.type !== "flash");

  const unitOf = (s) => s.unitId || unit?.id;

  const onAnswer = (res) => {
    setAnswer(res);
    if (attempt > 0) return;                      // retries don't score
    firstResult.current = res;
    const it = step.item;
    const u = unitOf(step);
    const events = [];

    if (res.score !== null) {
      setScores(sc => [...sc, { id: it.id, score: res.score, skill: it.skill }]);
    }
    const streak = res.selfRated ? getStreak() : bumpStreak(res.correct);
    if (!res.selfRated && [3, 5, 10].includes(streak)) {
      setToast(`🔥 ${streak} in a row`);
      setTimeout(() => setToast(null), 1800);
      events.push(`streak:${streak}`);
    }

    if (res.correct) {
      const per = activity?.xpPer ?? (review ? 5 : 0);
      if (per) {
        const key = `${activity ? activity.id : "review"}.${it.id}`;
        if (!record.xpKeys[`${u}:${key}`]) {
          events.push(`xp:${u}:${key}:${per}`);
          setXpGained(x => x + per);
        }
      }
      if (review && it.concept) events.push(`fix:${u}:${it.concept}:${stamp()}`);
    } else if (it.concept) {
      events.push(`miss:${u}:${it.concept}:${stamp()}`);
    }
    save(events);
  };

  const advance = () => {
    firstResult.current = null;
    setAnswer(null);
    setAttempt(0);
    if (at + 1 < steps.length) { setAt(at + 1); scrollAppToTop(); return; }
    finish();
  };

  const finish = () => {
    const total = scores.length;
    const pct = total ? Math.round((scores.reduce((a, s) => a + s.score, 0) / total) * 100) : 100;
    const events = [];
    const touched = new Set(steps.map(unitOf).filter(Boolean));
    for (const u of touched) events.push(`seen:${u}:${stamp()}`);

    if (activity) {
      events.push(`done:${unit.id}:${activity.id}`, `best:${unit.id}:${activity.id}:${pct}`);
      if (activity.xp) events.push(`xp:${unit.id}:${activity.id}.done:${activity.xp}`);
      if (activity.xpBonus) events.push(`xp:${unit.id}:${activity.id}.bonus:${activity.xpBonus}`);
      if (activity.mode === "retention") events.push(`ret:${unit.id}:${stamp()}:${pct}`);
      if (activity.mode === "challenge") {
        for (const sk of ["knowledge", "application", "recognition", "retention"]) {
          const mine = scores.filter(s => s.skill === sk);
          if (mine.length) events.push(`skill:${unit.id}:${sk}:${Math.round((mine.reduce((a, s) => a + s.score, 0) / mine.length) * 100)}`);
        }
      }
      const newXp = (activity.xp && !record.xpKeys[`${unit.id}:${activity.id}.done`] ? activity.xp : 0)
        + (activity.xpBonus && !record.xpKeys[`${unit.id}:${activity.id}.bonus`] ? activity.xpBonus : 0);
      if (newXp) setXpGained(x => x + newXp);
    } else {
      /* A review counts as a retention check for every unit it touched. */
      for (const u of touched) events.push(`ret:${u}:${stamp()}:${pct}`);
    }
    save(events);
    setFinished({ pct });
  };

  if (finished) {
    const skills = activity?.mode === "challenge"
      ? ["knowledge", "application", "recognition", "retention"].map(sk => {
          const mine = scores.filter(s => s.skill === sk);
          return { id: sk, pct: mine.length ? Math.round((mine.reduce((a, s) => a + s.score, 0) / mine.length) * 100) : null };
        })
      : null;
    return (
      <Finish unit={unit} activity={activity} review={review} pct={finished.pct} xp={xpGained} skills={skills}
        go={go} back={back} bookId={bookId}
        headline={scores.length ? `${scores.filter(s => s.score === 1).length} of ${scores.length} fully right` : null} />
    );
  }

  /* A concept reminder step (weak-area review). */
  if (step.kind === "concept") {
    return (
      <div>
        <Dots n={steps.length} at={at} />
        <div className="mt-4 rounded-3xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 p-5 learn-fade">
          <p className="text-[11px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">Review this concept</p>
          <h2 className="mt-1.5 text-xl font-black text-slate-900 dark:text-white">{step.concept.title}</h2>
          <p className="mt-3 rd-option text-slate-700 dark:text-slate-200 leading-relaxed">{step.concept.text}</p>
        </div>
        <button onClick={advance} className="mt-5 w-full bg-emerald-500 text-slate-900 font-bold py-3 rounded-xl inline-flex items-center justify-center gap-1.5">
          Got it — test me <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  const it = step.item;
  const concept = it.concept && (unit || getUnit(bookId, step.unitId))?.content?.concepts[it.concept];
  const first = firstResult.current;

  return (
    <div>
      <Dots n={steps.length} at={at} />
      {toast && (
        <div className="fixed left-1/2 -translate-x-1/2 top-24 z-30 rounded-full bg-orange-500 text-white font-black px-4 py-2 shadow-lg learn-pop">{toast}</div>
      )}

      {isWalk && (
        <div className="mt-4 rounded-2xl bg-slate-900 text-white p-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Situation</p>
          <p className="mt-1 text-[15px] leading-relaxed">{activity.situation}</p>
          <p className="mt-3 text-xs font-bold text-slate-400">Step {at + 1} of {steps.length} · {it.step}</p>
        </div>
      )}

      <div className="mt-5">
        <ItemView item={it} attempt={attempt} onAnswer={onAnswer} />
      </div>

      {answer && (
        <Feedback
          item={it}
          answer={answer}
          first={first}
          concept={concept}
          canRetry={!answer.correct && !answer.selfRated && attempt === 0}
          onRetry={() => { setAnswer(null); setAttempt(a => a + 1); }}
          onNext={advance}
          last={at + 1 === steps.length}
          xp={first?.correct && !answer.selfRated ? (activity?.xpPer ?? (review ? 5 : 0)) : 0}
        />
      )}
    </div>
  );
}

function Feedback({ item, answer, first, concept, canRetry, onRetry, onNext, last, xp }) {
  const partial = answer.score !== null && answer.score > 0 && answer.score < 1;
  if (answer.selfRated) {
    return (
      <div className="mt-4 learn-fade">
        {!answer.correct && concept && <ConceptBox concept={concept} />}
        <NextBtn onNext={onNext} last={last} />
      </div>
    );
  }
  return (
    <div className="mt-5 learn-fade">
      <div className={`rounded-2xl border p-4 ${answer.correct ? "border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 dark:border-emerald-800" : "border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-900"}`}>
        <div className="flex items-center gap-2">
          {answer.correct
            ? <><Check size={18} className="text-emerald-600" strokeWidth={3} /><p className="font-black text-emerald-700 dark:text-emerald-400">Correct</p></>
            : <><X size={18} className="text-red-500" strokeWidth={3} /><p className="font-black text-red-600 dark:text-red-400">{partial ? `Nearly — ${Math.round(answer.score * 100)}% right` : "Not quite"}</p></>}
          {xp > 0 && answer.correct && first?.correct && (
            <span className="ml-auto inline-flex items-center gap-1 text-xs font-black text-emerald-700 dark:text-emerald-400 learn-pop"><Zap size={13} />+{xp} XP</span>
          )}
        </div>
        {item.explain && (
          <p className="mt-2 text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed">
            <span className="font-bold">Why? </span>{item.explain}
          </p>
        )}
        {item.detail && answer.correct && (
          <ul className="mt-2 space-y-1">
            {item.detail.map(d => <li key={d} className="text-sm text-slate-700 dark:text-slate-200">• {d}</li>)}
          </ul>
        )}
      </div>

      {/* See it in context — beside the explanation, once answered. */}
      {(item.visual || item.visuals) && <Visuals ids={item.visuals || item.visual} className="mt-3" />}

      {!answer.correct && concept && <ConceptBox concept={concept} />}

      <div className="mt-4 flex gap-2.5">
        {canRetry && (
          <button onClick={onRetry} className="flex-1 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold py-3 rounded-xl inline-flex items-center justify-center gap-1.5">
            <RotateCcw size={16} /> Try again
          </button>
        )}
        <div className="flex-1"><NextBtn onNext={onNext} last={last} /></div>
      </div>
    </div>
  );
}

function ConceptBox({ concept }) {
  return (
    <div className="mt-3 rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4">
      <p className="text-[11px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">Review this concept</p>
      <p className="mt-1 font-black text-slate-900 dark:text-white">{concept.title}</p>
      <p className="mt-1 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{concept.text}</p>
    </div>
  );
}

function NextBtn({ onNext, last }) {
  return (
    <button onClick={onNext} className="w-full bg-emerald-500 text-slate-900 font-bold py-3 rounded-xl inline-flex items-center justify-center gap-1.5">
      {last ? "See results" : "Next"} <ArrowRight size={16} />
    </button>
  );
}

/* ---------------------------------------------------------------------------
   FINISH — what happened, what to remember, what next.
   --------------------------------------------------------------------------- */
function Finish({ unit, activity, review, pct, xp, skills, headline, remember, compact, go, back, bookId }) {
  const { record } = useLearn(bookId);
  const p = unit ? unitProgress(record, unit) : null;
  const next = p?.next && p.next.id !== activity?.id ? p.next : null;
  const good = pct >= 80;

  return (
    <div className={compact ? "" : "pt-4"}>
      <div className="text-center learn-pop">
        <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center text-4xl ${good ? "bg-emerald-100 dark:bg-emerald-900/40" : "bg-amber-100 dark:bg-amber-900/40"}`}>
          {good ? "🏆" : "💪"}
        </div>
        <p className="mt-3 text-2xl font-black text-slate-900 dark:text-white">
          {activity?.kind === "learn" ? "Lesson complete" : good ? "Well done" : "Good effort"}
        </p>
        {headline && <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{headline}</p>}
        <div className="mt-3 flex justify-center gap-2">
          {activity?.kind !== "learn" && (
            <span className="rounded-full bg-slate-900 text-white text-sm font-black px-3 py-1 tabular-nums">{pct}%</span>
          )}
          {xp > 0 && (
            <span className="rounded-full bg-emerald-500 text-slate-900 text-sm font-black px-3 py-1 inline-flex items-center gap-1"><Zap size={14} />+{xp} XP</span>
          )}
        </div>
      </div>

      {skills && (
        <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">Your results</p>
          <SkillBars skills={skills} />
        </div>
      )}

      {remember && (
        <div className="mt-6 rounded-2xl bg-slate-900 text-white p-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Remember</p>
          <ul className="mt-2 space-y-1.5">
            {remember.map(r => <li key={r} className="flex gap-2 text-[15px]"><Sparkles size={15} className="text-emerald-400 shrink-0 mt-1" />{r}</li>)}
          </ul>
        </div>
      )}

      {p?.mastered && activity?.mode === "challenge" && (
        <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 dark:bg-amber-950/30 p-4 text-center">
          <p className="text-3xl">⭐</p>
          <p className="font-black text-slate-900 dark:text-white">Unit {unit.id} mastered</p>
        </div>
      )}

      <div className="mt-6 space-y-2.5">
        {next && (
          <PrimaryButton onClick={() => go({ screen: "learnPlay", bookId, unitId: unit.id, activityId: next.id }, { replace: true })}>
            <span className="inline-flex items-center gap-2">Next: {next.title} <ArrowRight size={16} /></span>
          </PrimaryButton>
        )}
        {!next && p && p.weak.length > 0 && (
          <PrimaryButton onClick={() => go({ screen: "learnPlay", bookId, unitId: unit.id, mode: "weak" }, { replace: true })}>
            <span className="inline-flex items-center gap-2"><RotateCcw size={16} /> Review weak areas</span>
          </PrimaryButton>
        )}
        {!next && unit?.content?.mcqLink && !review && (
          <button onClick={() => go({ screen: "section", sectionId: unit.content.mcqLink.sectionId }, { replace: true })}
            className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl">
            Practise MCQs: {unit.content.mcqLink.label}
          </button>
        )}
        <button onClick={back} className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl">
          {unit ? "Back to the unit" : "Back to the book"}
        </button>
      </div>
    </div>
  );
}
