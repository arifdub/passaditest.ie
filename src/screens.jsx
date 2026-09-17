/*
  ===========================================================================
  SCREENS

  Home is built around the five Stage 1 exam sections. Each shows how much of
  its bank has been covered and how the last test went. Below them sits the
  mock test, and below that the flashcard decks — study material rather than
  assessment, so they don't compete with the sections for attention.
  ===========================================================================
*/

import React from "react";
import {
  ClipboardCheck, ShieldCheck, GraduationCap, Wrench, Truck, Layers,
  TrendingUp, User, LogOut, Shield, ChevronRight, Trash2, Timer,
  Smartphone, Download, Share2, Check, Lock,
} from "lucide-react";
import { ADI_SECTIONS, MOCK, DECKS, PASS_MARK, lockedForGuest } from "./appStructure";
import { useAuth } from "./appAuth";
import { useProgress } from "./progressStore";
import usePwaInstall from "./usePwaInstall";
import { getDeck } from "./contentSources";
import {
  Logo, Screen, ScreenHeader, ProgressBar, ProgressRing, EmptyState,
  SecondaryButton, PrimaryButton,
} from "./ui";

const SECTION_ICON = {
  "adi.sec.procedure": ClipboardCheck,
  "adi.sec.safety": ShieldCheck,
  "adi.sec.pedagogy": GraduationCap,
  "adi.sec.mechanics": Wrench,
  "adi.sec.categoryb": Truck,
};

/* ===========================================================================
   HOME
   =========================================================================== */
export function HomeScreen({ go }) {
  const { displayName, subscription, isGuest, exitGuest } = useAuth();
  const { getSection, getModule, overall } = useProgress();
  const [lockedPrompt, setLockedPrompt] = React.useState(null);

  const mock = getModule(MOCK.id);

  return (
    <>
      <div className="bg-slate-900 text-white">
        <div
          className="max-w-2xl mx-auto px-5 pb-6"
          style={{ paddingTop: "max(1.5rem, calc(env(safe-area-inset-top) + 0.875rem))" }}
        >
          <div className="flex justify-center">
            <Logo size="md" />
          </div>
          <p className="mt-4 text-slate-400 text-sm">Hi {displayName} 👋</p>
          <h1 className="mt-0.5 text-2xl font-black tracking-tight">ADI Theory Test</h1>
          <p className="mt-1 text-sm text-slate-400">
            Stage 1 — Approved Driving Instructor
          </p>
        </div>
      </div>

      <Screen>
        {/* Overall coverage */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex items-center gap-4 -mt-10 shadow-lg">
          <ProgressRing pct={overall.coveragePct} size={72} stroke={6} label="covered" />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Your progress
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-snug">
              {overall.answered === 0
                ? `${overall.total} questions across five sections. Pick one below to start.`
                : `${overall.answered} of ${overall.total} questions answered` +
                  (overall.sectionsPassed > 0
                    ? ` · ${overall.sectionsPassed} of ${overall.sectionCount} sections at pass standard.`
                    : ".")}
            </p>

            {/* Coverage says how much has been seen; accuracy says how well
                it went. Showing only the first flatters a weak score. */}
            {overall.gradedAnswers > 0 && (
              <div className="mt-2.5 flex items-baseline gap-2">
                <span className={`text-lg font-black ${
                  overall.accuracyPct >= PASS_MARK
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-amber-600 dark:text-amber-400"
                }`}>
                  {overall.accuracyPct}%
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  correct · {overall.correctAnswers} of {overall.gradedAnswers}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* The five exam sections */}
        <p className="mt-6 mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
          The five exam sections
        </p>
        <p className="mb-3 text-xs text-slate-400 leading-snug">
          Each section carries its own pass mark in the real test.
        </p>

        <div className="space-y-2.5">
          {ADI_SECTIONS.map(section => {
            const Icon = SECTION_ICON[section.id] || ClipboardCheck;
            const p = getSection(section.id);
            const locked = lockedForGuest(section.id, isGuest);
            return (
              <button
                key={section.id}
                onClick={() => locked
                  ? setLockedPrompt(section.label)
                  : go({ screen: "section", sectionId: section.id })}
                className={`w-full text-left bg-white dark:bg-slate-800 border rounded-2xl p-4 transition active:scale-[0.99] ${
                  locked
                    ? "border-slate-200 dark:border-slate-700 opacity-70"
                    : "border-slate-200 dark:border-slate-700 hover:border-emerald-400"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    locked
                      ? "bg-slate-300 dark:bg-slate-600"
                      : p.passed ? "bg-emerald-500" : "bg-slate-700 dark:bg-slate-600"
                  }`}>
                    {locked
                      ? <Lock size={17} className="text-white" />
                      : <Icon size={18} className="text-white" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] font-black text-slate-300 dark:text-slate-600">
                        {section.number}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white leading-tight">
                        {section.label}
                      </span>
                    </div>

                    {locked ? (
                      <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 leading-snug">
                        {p.total} questions · create a free account to unlock
                      </p>
                    ) : (
                      <div className="mt-2">
                        <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-1">
                          <span>{p.answered} / {p.total} questions</span>
                          <span>
                            {p.attempts > 0
                              ? `${p.accuracyPct}% correct · best ${p.bestPct}%`
                              : "Not started"}
                          </span>
                        </div>
                        <ProgressBar
                          pct={p.coveragePct}
                          tone={p.passed ? "emerald" : p.started ? "amber" : "slate"}
                        />
                      </div>
                    )}

                    {!locked && p.attempts > 0 && (
                      <p className={`mt-1.5 text-xs font-semibold ${
                        p.passed
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-amber-600 dark:text-amber-400"
                      }`}>
                        {p.passed ? "At pass standard" : `Keep practising — ${PASS_MARK}% needed`}
                      </p>
                    )}
                  </div>

                  {locked
                    ? <Lock size={15} className="text-slate-300 dark:text-slate-600 shrink-0 mt-2.5" />
                    : <ChevronRight size={18} className="text-slate-300 dark:text-slate-600 shrink-0 mt-2" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Mock test */}
        <p className="mt-6 mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
          Exam simulation
        </p>
        <button
          onClick={() => lockedForGuest(MOCK.id, isGuest)
            ? setLockedPrompt(MOCK.label)
            : go({ screen: "mock" })}
          className={`w-full text-left rounded-2xl p-5 bg-slate-900 transition active:scale-[0.99] ${
            lockedForGuest(MOCK.id, isGuest) ? "opacity-70" : "hover:bg-slate-800"
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              {lockedForGuest(MOCK.id, isGuest)
                ? <Lock size={20} className="text-white" />
                : <Timer size={22} className="text-white" />}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-black tracking-tight text-white">{MOCK.label}</h2>
              <p className="mt-0.5 text-sm text-slate-300 leading-snug">
                {lockedForGuest(MOCK.id, isGuest)
                  ? "Create a free account to unlock the full mock exam."
                  : MOCK.blurb}
              </p>
              {mock.attempts > 0 && (
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-1">
                    <span>Best score</span>
                    <span>{mock.bestPct}%</span>
                  </div>
                  <div className="h-2 bg-white/15 rounded-full overflow-hidden">
                    <div
                      className={`h-2 rounded-full ${mock.passed ? "bg-emerald-400" : "bg-amber-400"}`}
                      style={{ width: `${mock.bestPct}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
            <ChevronRight size={18} className="text-slate-500 shrink-0 mt-3" />
          </div>
        </button>

        {/* Flashcards */}
        <p className="mt-6 mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
          Flashcards
        </p>
        <p className="mb-3 text-xs text-slate-400 leading-snug">
          Study material. Useful for learning, but not a substitute for the sections above.
        </p>

        <div className="space-y-2.5">
          {DECKS.map(deck => {
            const p = getModule(deck.id);
            /* Count the real deck rather than the figure in appStructure, so
               adding cards to a data file can never leave the home screen
               quoting a stale total. */
            const content = getDeck(deck.id);
            const size = content ? content.cards.length : deck.count;
            const known = Math.min(p.completedIds.length, size);
            const pct = size ? Math.round((known / size) * 100) : 0;
            return (
              <button
                key={deck.id}
                onClick={() => go({ screen: "deck", deckId: deck.id })}
                className="w-full text-left bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex items-center gap-3.5 transition hover:border-emerald-400 active:scale-[0.99]"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
                  <Layers size={18} className="text-slate-600 dark:text-slate-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 dark:text-white">{deck.label}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                    {known > 0
                      ? `${known} of ${size} cards known`
                      : `${size} cards · ${deck.blurb}`}
                  </p>
                  <div className="mt-2 flex items-center gap-2.5">
                    <div className="flex-1">
                      <ProgressBar
                        pct={pct}
                        tone={pct === 100 ? "emerald" : known ? "amber" : "slate"}
                      />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 shrink-0 tabular-nums">
                      {pct}%
                    </span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-300 dark:text-slate-600 shrink-0" />
              </button>
            );
          })}
        </div>

        {isGuest && overall.answered > 0 && (
          <button
            onClick={exitGuest}
            className="mt-6 w-full text-left bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 rounded-2xl p-4 flex items-center gap-3"
          >
            <div className="flex-1">
              <p className="font-bold text-slate-900 dark:text-white text-sm">Save your progress</p>
              <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300 leading-snug">
                Create an account and everything you've studied comes with you.
              </p>
            </div>
            <ChevronRight size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
          </button>
        )}

        {!isGuest && (
          <p className="mt-6 text-center text-xs text-slate-400">
            Subscription: <span className="font-bold text-emerald-600 dark:text-emerald-400">
              {subscription.label}
            </span>
          </p>
        )}
      </Screen>

      {/* Shown when a guest taps something they don't have yet. A sheet rather
          than a redirect, so they can dismiss it and carry on with Section 1
          instead of being thrown out to the sign-up form. */}
      {lockedPrompt && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/70 backdrop-blur-sm flex items-end"
          onClick={() => setLockedPrompt(null)}
        >
          <div
            className="w-full bg-white dark:bg-slate-800 rounded-t-3xl p-6"
            style={{ paddingBottom: "max(1.5rem, calc(env(safe-area-inset-bottom) + 1rem))" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
              <Lock size={18} className="text-white" />
            </div>
            <h2 className="mt-4 text-lg font-black tracking-tight text-slate-900 dark:text-white">
              {lockedPrompt}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Guests get Section&nbsp;1 and the flashcards in full. Create a free
              account to open the other four sections and the mock exam — and
              your progress will follow you to any device.
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Everything you've already studied comes with you.
            </p>

            <div className="mt-5 space-y-2.5">
              <PrimaryButton onClick={exitGuest}>Create a free account</PrimaryButton>
              <button
                onClick={() => setLockedPrompt(null)}
                className="w-full text-sm font-semibold text-slate-500 dark:text-slate-400 py-2.5"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ===========================================================================
   PROGRESS
   =========================================================================== */
export function ProgressScreen({ go }) {
  const { getSection, getModule, overall } = useProgress();
  const mock = getModule(MOCK.id);

  return (
    <>
      <ScreenHeader title="My Progress" subtitle="Across all five exam sections" />
      <Screen>
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex items-center gap-5">
          <ProgressRing pct={overall.coveragePct} size={84} stroke={7} label="covered" />
          <div className="flex-1 grid grid-cols-2 gap-3">
            <Stat label="Answered" value={`${overall.answered} / ${overall.total}`} />
            <Stat
              label="Correct"
              value={overall.gradedAnswers ? `${overall.accuracyPct}%` : "—"}
              tone={overall.gradedAnswers
                ? (overall.accuracyPct >= PASS_MARK ? "good" : "warn")
                : undefined}
            />
            <Stat label="Tests taken" value={overall.testsTaken} />
            <Stat label="Best score" value={overall.bestPct ? `${overall.bestPct}%` : "—"} />
          </div>
        </div>

        {overall.answered === 0 ? (
          <EmptyState
            icon={TrendingUp}
            title="Nothing tracked yet"
            message="Answer some questions in any section and your progress will build here."
          />
        ) : (
          <>
            <p className="mt-6 mb-2.5 text-xs font-bold uppercase tracking-widest text-slate-400">
              By section
            </p>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl divide-y divide-slate-100 dark:divide-slate-700">
              {ADI_SECTIONS.map(s => {
                const p = getSection(s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() => go({ screen: "section", sectionId: s.id })}
                    className="w-full text-left px-4 py-3.5"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                        {s.number}. {s.short}
                      </p>
                      <span className="text-xs font-bold text-slate-400 shrink-0">
                        {p.answered}/{p.total}
                      </span>
                    </div>
                    <div className="mt-1.5">
                      <ProgressBar
                        pct={p.coveragePct}
                        tone={p.passed ? "emerald" : p.started ? "amber" : "slate"}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                      {p.attempts > 0
                        ? `${p.accuracyPct}% correct (${p.correctCount}/${p.gradedCount}) · best ${p.bestPct}% · ${p.attempts} attempt${p.attempts === 1 ? "" : "s"}`
                        : "Not attempted yet"}
                    </p>
                  </button>
                );
              })}
            </div>

            {mock.attempts > 0 && (
              <>
                <p className="mt-6 mb-2.5 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Mock test
                </p>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      Best score
                    </span>
                    <span className="text-xl font-black text-slate-900 dark:text-white">
                      {mock.bestPct}%
                    </span>
                  </div>
                  <div className="mt-2">
                    <ProgressBar pct={mock.bestPct} tone={mock.passed ? "emerald" : "amber"} />
                  </div>
                  <p className={`mt-2 text-sm font-semibold ${
                    mock.passed ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"
                  }`}>
                    {mock.passed ? "At pass standard" : `Keep practising — ${PASS_MARK}% needed`}
                    <span className="font-normal text-slate-400">
                      {" "}· {mock.attempts} attempt{mock.attempts === 1 ? "" : "s"}
                    </span>
                  </p>
                </div>
              </>
            )}
          </>
        )}
      </Screen>
    </>
  );
}

function Stat({ label, value, tone }) {
  const colour = tone === "good" ? "text-emerald-600 dark:text-emerald-400"
    : tone === "warn" ? "text-amber-600 dark:text-amber-400"
    : "text-slate-900 dark:text-white";
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
      <p className={`mt-0.5 text-lg font-black ${colour}`}>{value}</p>
    </div>
  );
}

/* ===========================================================================
   INSTALL CARD
   =========================================================================== */
function InstallCard() {
  const { state, promptInstall } = usePwaInstall();

  if (state === "installed") {
    return (
      <div className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex items-center gap-3">
        <Check size={18} className="text-emerald-500 shrink-0" />
        <div>
          <p className="font-semibold text-slate-900 dark:text-white text-sm">
            Installed on your home screen
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            You're running the app version.
          </p>
        </div>
      </div>
    );
  }

  if (state === "prompt") {
    return (
      <div className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <Smartphone size={18} className="text-emerald-500 shrink-0" />
          <h2 className="font-bold text-slate-900 dark:text-white">Install the app</h2>
        </div>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          Add PassADITest to your home screen for full-screen study with no
          browser bar.
        </p>
        <div className="mt-4">
          <PrimaryButton onClick={promptInstall}>
            <span className="inline-flex items-center gap-2">
              <Download size={16} /> Add to Home Screen
            </span>
          </PrimaryButton>
        </div>
      </div>
    );
  }

  if (state === "ios") {
    return (
      <div className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <Smartphone size={18} className="text-emerald-500 shrink-0" />
          <h2 className="font-bold text-slate-900 dark:text-white">Add to your Home Screen</h2>
        </div>
        <ol className="mt-4 space-y-3">
          <InstallStep n="1">
            Tap the <Share2 size={14} className="inline mx-0.5 -mt-0.5 text-blue-500" />
            <span className="font-semibold"> Share</span> button at the bottom of Safari.
          </InstallStep>
          <InstallStep n="2">
            Scroll down and tap <span className="font-semibold">Add to Home Screen</span>.
          </InstallStep>
          <InstallStep n="3">
            Tap <span className="font-semibold">Add</span> in the top right.
          </InstallStep>
        </ol>
        <p className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-400 leading-relaxed">
          This only works in Safari. If you're in another browser on iPhone,
          open passaditest.ie in Safari first.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex items-start gap-3">
      <Smartphone size={18} className="text-slate-400 shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-slate-900 dark:text-white text-sm">Study on your phone</p>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          Open passaditest.ie on your phone to add it to your home screen.
        </p>
      </div>
    </div>
  );
}

function InstallStep({ n, children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-black text-slate-500 dark:text-slate-300 shrink-0">
        {n}
      </span>
      <span className="text-sm text-slate-600 dark:text-slate-300 leading-snug pt-0.5">
        {children}
      </span>
    </li>
  );
}

/* ===========================================================================
   PROFILE
   =========================================================================== */
export function ProfileScreen({ theme, toggleTheme }) {
  const { profile, displayName, subscription, signOut, mode, isGuest, exitGuest } = useAuth();
  const { resetAll, overall } = useProgress();

  async function handleReset() {
    const ok = window.confirm(
      "Clear all your progress? Every score and answered question will be deleted. This can't be undone."
    );
    if (ok) await resetAll();
  }

  return (
    <>
      <ScreenHeader title="Profile" />
      <Screen>
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
            <User size={24} className="text-slate-500 dark:text-slate-300" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-slate-900 dark:text-white truncate">
              {isGuest ? "Studying as a guest" : displayName}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
              {isGuest ? "No account yet" : profile?.email}
            </p>
          </div>
        </div>

        {isGuest ? (
          <div className="mt-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 rounded-2xl p-5">
            <h2 className="font-bold text-slate-900 dark:text-white">Keep your progress safe</h2>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Your scores live on this device only. Create an account and
              everything you've already done comes with you.
            </p>
            <div className="mt-4">
              <PrimaryButton onClick={exitGuest}>Create an account</PrimaryButton>
            </div>
          </div>
        ) : (
          <div className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-emerald-500" />
                <span className="font-semibold text-slate-900 dark:text-white">Subscription</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                {subscription.label}
              </span>
            </div>
            {subscription.note && (
              <p className="mt-2.5 text-sm text-slate-500 dark:text-slate-400">
                {subscription.note}
              </p>
            )}
          </div>
        )}

        <InstallCard />

        <div className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl divide-y divide-slate-100 dark:divide-slate-700">
          <button onClick={toggleTheme} className="w-full px-4 py-3.5 flex items-center justify-between">
            <span className="font-semibold text-slate-900 dark:text-white">Dark mode</span>
            <span className="text-sm font-semibold text-slate-400">
              {theme === "dark" ? "On" : "Off"}
            </span>
          </button>
          <button onClick={handleReset} className="w-full px-4 py-3.5 flex items-center justify-between">
            <span className="font-semibold text-slate-900 dark:text-white">Reset my progress</span>
            <Trash2 size={16} className="text-slate-400" />
          </button>
        </div>

        {!isGuest && (
          <div className="mt-4">
            <SecondaryButton onClick={signOut}>
              <span className="inline-flex items-center gap-2 text-red-600 dark:text-red-400">
                <LogOut size={16} /> Log out
              </span>
            </SecondaryButton>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-slate-400">
          {overall.answered} of {overall.total} questions answered
          {mode === "local" && " · saved on this device only"}
        </p>
      </Screen>
    </>
  );
}
