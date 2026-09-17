/*
  ===========================================================================
  PROGRESS

  Every quiz, mock test and flashcard deck reports its result here. Every
  progress bar in the app reads from here. Nothing else touches storage.

  How it stores things:
    - Always written to localStorage first, so a result is never lost if the
      network drops mid-test.
    - Also written to Supabase when the learner is signed in with the database
      connected, so progress follows them to another phone or laptop.
    - On sign-in, anything studied before signing in is merged upward. Every
      field merges idempotently — best score wins, ids union, counts take the
      higher of the two. Merging the same data twice must not change it, which
      is why attempts takes the max rather than the sum: local and remote hold
      the same history, not two halves of it. Summing them doubled the count
      on every sign-in until it reached six figures.

  Progress model:
    module   — best %, last %, attempts, passed
    section  — average of its SCORED modules (MCQs and mock tests). Learning
               materials and flashcards don't have a score, so they don't drag
               a section's percentage down.
    path     — average of its sections that have been started.
  ===========================================================================
*/

import React, {
  createContext, useContext, useState, useEffect, useCallback, useMemo, useRef,
} from "react";
import { supabase, HAS_SUPABASE } from "./supabaseClient";
import { useAuth } from "./appAuth";
import { ADI_SECTIONS, MOCKS, PASS_MARK, passMarkFor, verdictFor } from "./appStructure";

const LOCAL_KEY = "pdt-progress-v1";

const ProgressContext = createContext(null);

const emptyEntry = () => ({
  bestPct: 0,
  lastPct: 0,
  lastScore: 0,
  lastTotal: 0,
  attempts: 0,
  correctCount: 0,     // cumulative correct answers, for accuracy
  gradedCount: 0,      // cumulative questions graded, for accuracy
  passed: false,
  completedIds: [],
  updatedAt: null,
});

/* Attempts once compounded on every sign-in (see mergeEntry), so some devices
   hold an absurd figure. Anything past this is treated as corrupt and reset
   rather than shown — a six-figure "tests taken" is worse than none. */
const MAX_SANE_ATTEMPTS = 5000;

function sanitise(entry) {
  const e = { ...emptyEntry(), ...(entry || {}) };
  if (!Number.isFinite(e.attempts) || e.attempts < 0 || e.attempts > MAX_SANE_ATTEMPTS) e.attempts = 0;
  if (!Number.isFinite(e.correctCount) || e.correctCount < 0) e.correctCount = 0;
  if (!Number.isFinite(e.gradedCount) || e.gradedCount < 0) e.gradedCount = 0;
  if (e.correctCount > e.gradedCount) e.correctCount = e.gradedCount;
  return e;
}

/* ------------------------------------------------------------------------- */
function readLocal() {
  try {
    const raw = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
    const out = {};
    for (const [k, v] of Object.entries(raw)) out[k] = sanitise(v);
    return out;
  } catch {
    return {};
  }
}

function writeLocal(data) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  } catch {
    /* out of quota or private mode — in-memory progress still works */
  }
}

/* Merge two entries for the same module. Best score wins, attempts add. */
function mergeEntry(a, b) {
  if (!a) return b;
  if (!b) return a;
  const newer = (b.updatedAt || "") > (a.updatedAt || "") ? b : a;
  return {
    bestPct: Math.max(a.bestPct || 0, b.bestPct || 0),
    lastPct: newer.lastPct || 0,
    lastScore: newer.lastScore || 0,
    lastTotal: newer.lastTotal || 0,
    attempts: Math.max(a.attempts || 0, b.attempts || 0),
    correctCount: Math.max(a.correctCount || 0, b.correctCount || 0),
    gradedCount: Math.max(a.gradedCount || 0, b.gradedCount || 0),
    passed: Boolean(a.passed || b.passed),
    completedIds: Array.from(new Set([...(a.completedIds || []), ...(b.completedIds || [])])),
    updatedAt: newer.updatedAt || null,
  };
}

/* ------------------------------------------------------------------------- */
export function ProgressProvider({ children }) {
  const { user, isSignedIn } = useAuth();
  const [entries, setEntries] = useState(() => readLocal());
  const [syncing, setSyncing] = useState(false);
  const mergedFor = useRef(null);

  /* ---- pull from the database on sign-in, merging local work upward ---- */
  useEffect(() => {
    if (!isSignedIn || !HAS_SUPABASE || !user?.id) return;
    if (mergedFor.current === user.id) return;
    mergedFor.current = user.id;

    let cancelled = false;

    (async () => {
      setSyncing(true);
      const { data, error } = await supabase
        .from("progress")
        .select("*")
        .eq("user_id", user.id);

      if (cancelled) return;

      if (error) {
        console.warn("Could not load progress:", error.message);
        setSyncing(false);
        return;
      }

      const remote = {};
      for (const row of data || []) {
        remote[row.module_id] = {
          bestPct: row.best_pct,
          lastPct: row.last_pct,
          lastScore: row.last_score,
          lastTotal: row.last_total,
          attempts: row.attempts,
          correctCount: row.correct_count || 0,
          gradedCount: row.graded_count || 0,
          passed: row.passed,
          completedIds: row.completed_ids || [],
          updatedAt: row.updated_at,
        };
      }

      const local = readLocal();
      const merged = { ...remote };
      const needsPush = [];

      for (const [moduleId, localEntry] of Object.entries(local)) {
        const combined = mergeEntry(remote[moduleId], localEntry);
        merged[moduleId] = combined;
        // Local knew something the database didn't — push it up.
        if (
          !remote[moduleId] ||
          combined.bestPct > (remote[moduleId].bestPct || 0) ||
          combined.attempts > (remote[moduleId].attempts || 0)
        ) {
          needsPush.push([moduleId, combined]);
        }
      }

      setEntries(merged);
      writeLocal(merged);

      for (const [moduleId, entry] of needsPush) {
        await supabase.from("progress").upsert(
          {
            user_id: user.id,
            module_id: moduleId,
            best_pct: entry.bestPct,
            last_pct: entry.lastPct,
            last_score: entry.lastScore,
            last_total: entry.lastTotal,
            attempts: entry.attempts,
            correct_count: entry.correctCount || 0,
            graded_count: entry.gradedCount || 0,
            passed: entry.passed,
            completed_ids: entry.completedIds,
          },
          { onConflict: "user_id,module_id" }
        );
      }

      setSyncing(false);
    })();

    return () => { cancelled = true; };
  }, [isSignedIn, user?.id]);

  /* Signing out shouldn't wipe the device — but it also shouldn't leave one
     learner's scores showing for the next person on a shared phone. */
  useEffect(() => {
    if (!isSignedIn) mergedFor.current = null;
  }, [isSignedIn]);

  /* ---- record a finished quiz or mock test ---- */
  /* `opts` lets the caller supply a verdict this function can't work out for
     itself. A mock passes only if all five sections pass, which is not a fact
     about `score / total` — 88% can be a fail. Without this the store would
     record a pass the result screen is calling a fail. */
  const recordResult = useCallback(async (moduleId, score, total, opts = {}) => {
    if (!total || total <= 0) return null;

    const pct = Math.round((score / total) * 100);
    const passMark = opts.passMark ?? passMarkFor(moduleId) ?? PASS_MARK;
    const didPass = opts.passed !== undefined ? !!opts.passed : pct >= passMark;
    const verdict = verdictFor(pct, passMark);

    let updatedEntry;
    setEntries(prev => {
      const before = prev[moduleId] || emptyEntry();
      updatedEntry = {
        ...before,
        bestPct: Math.max(before.bestPct, pct),
        lastPct: pct,
        lastScore: score,
        lastTotal: total,
        attempts: before.attempts + 1,
        correctCount: (before.correctCount || 0) + score,
        gradedCount: (before.gradedCount || 0) + total,
        passed: before.passed || didPass,
        updatedAt: new Date().toISOString(),
      };
      const next = { ...prev, [moduleId]: updatedEntry };
      writeLocal(next);
      return next;
    });

    if (isSignedIn && HAS_SUPABASE && user?.id) {
      const { error } = await supabase.rpc("record_result", {
        p_module_id: moduleId,
        p_score: score,
        p_total: total,
        p_pass_mark: passMark,
      });
      if (error) console.warn("Progress not synced:", error.message);
    }

    return { pct, passMark, verdict, entry: updatedEntry };
  }, [isSignedIn, user?.id]);

  /* ---- mark a flashcard known / unknown ---- */
  const toggleCardKnown = useCallback(async (moduleId, cardId) => {
    let nextIds;
    setEntries(prev => {
      const before = prev[moduleId] || emptyEntry();
      const has = before.completedIds.includes(cardId);
      nextIds = has
        ? before.completedIds.filter(id => id !== cardId)
        : [...before.completedIds, cardId];
      const next = {
        ...prev,
        [moduleId]: { ...before, completedIds: nextIds, updatedAt: new Date().toISOString() },
      };
      writeLocal(next);
      return next;
    });

    if (isSignedIn && HAS_SUPABASE && user?.id) {
      await supabase.from("progress").upsert(
        { user_id: user.id, module_id: moduleId, completed_ids: nextIds },
        { onConflict: "user_id,module_id" }
      );
    }
  }, [isSignedIn, user?.id]);

  /* ---- reset one module, or everything ---- */
  const resetModule = useCallback(async (moduleId) => {
    setEntries(prev => {
      const next = { ...prev };
      delete next[moduleId];
      writeLocal(next);
      return next;
    });
    if (isSignedIn && HAS_SUPABASE && user?.id) {
      await supabase.from("progress").delete()
        .eq("user_id", user.id).eq("module_id", moduleId);
    }
  }, [isSignedIn, user?.id]);

  const resetAll = useCallback(async () => {
    setEntries({});
    writeLocal({});
    if (isSignedIn && HAS_SUPABASE && user?.id) {
      await supabase.from("progress").delete().eq("user_id", user.id);
    }
  }, [isSignedIn, user?.id]);

  /* -----------------------------------------------------------------------
     RECORD WHICH QUESTIONS HAVE BEEN SEEN

     Section progress is "how many of this section's questions have you
     answered", so every answered question's id is stored. Ids come from the
     question text itself (see adiSections.js), so they survive banks being
     reordered or extended.

     These are kept in the same completedIds field the flashcards use, which
     is already a jsonb column and already syncs.
     ----------------------------------------------------------------------- */
  const recordAnswered = useCallback(async (sectionId, qids) => {
    if (!sectionId || !qids?.length) return;

    let merged;
    setEntries(prev => {
      const before = prev[sectionId] || emptyEntry();
      merged = Array.from(new Set([...(before.completedIds || []), ...qids]));
      const next = {
        ...prev,
        [sectionId]: { ...before, completedIds: merged, updatedAt: new Date().toISOString() },
      };
      writeLocal(next);
      return next;
    });

    if (isSignedIn && HAS_SUPABASE && user?.id) {
      const { error } = await supabase.from("progress").upsert(
        { user_id: user.id, module_id: sectionId, completed_ids: merged },
        { onConflict: "user_id,module_id" }
      );
      if (error) console.warn("Answered questions not synced:", error.message);
    }
  }, [isSignedIn, user?.id]);

  /* ---- readers ---- */
  const getModule = useCallback((moduleId) => {
    const entry = sanitise(entries[moduleId]);
    return {
      ...entry,
      /* A mock has no single pass mark — it has five, and `passed` above is
         the honest answer to "did this paper pass". Reported as null so
         nothing downstream prints a number the exam doesn't use. */
      passMark: null,
      started: entry.attempts > 0 || entry.completedIds.length > 0,
      verdict: null,
    };
  }, [entries]);

  /* One of the five exam sections: how much of it has been covered, and how
     well the last attempt went. */
  const getSection = useCallback((sectionId) => {
    const section = ADI_SECTIONS.find(s => s.id === sectionId);
    const entry = sanitise(entries[sectionId]);
    const total = section?.total || 0;
    const answered = Math.min(entry.completedIds.length, total);

    return {
      total,
      answered,
      remaining: Math.max(0, total - answered),
      coveragePct: total ? Math.round((answered / total) * 100) : 0,
      bestPct: entry.bestPct,
      accuracyPct: entry.gradedCount
        ? Math.round((entry.correctCount / entry.gradedCount) * 100)
        : 0,
      correctCount: entry.correctCount,
      gradedCount: entry.gradedCount,
      attempts: entry.attempts,
      passed: entry.passed,
      started: answered > 0 || entry.attempts > 0,
      /* This section's own exam mark, not a global one. */
      passMark: section?.passMark ?? PASS_MARK,
      verdict: entry.attempts > 0
        ? verdictFor(entry.bestPct, section?.passMark ?? PASS_MARK)
        : null,
    };
  }, [entries]);

  /* Headline numbers across all five sections. */
  const overall = useMemo(() => {
    let answered = 0, total = 0, attempts = 0;
    let correct = 0, graded = 0;
    const scores = [];
    for (const s of ADI_SECTIONS) {
      const e = sanitise(entries[s.id]);
      total += s.total;
      answered += Math.min(e.completedIds.length, s.total);
      attempts += e.attempts;
      correct += e.correctCount;
      graded += e.gradedCount;
      if (e.attempts) scores.push(e.bestPct);
    }
    /* Every mock paper counts toward the totals, not just the first. */
    let mockAttempts = 0, mockBest = 0;
    for (const m of MOCKS) {
      const e = sanitise(entries[m.id]);
      correct += e.correctCount;
      graded += e.gradedCount;
      mockAttempts += e.attempts;
      mockBest = Math.max(mockBest, e.bestPct);
    }

    return {
      answered,
      total,
      coveragePct: total ? Math.round((answered / total) * 100) : 0,
      /* Accuracy is correct answers over questions graded — "how well am I
         doing", as distinct from coverage, which is "how much have I seen". */
      accuracyPct: graded ? Math.round((correct / graded) * 100) : 0,
      correctAnswers: correct,
      gradedAnswers: graded,
      averagePct: scores.length
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : 0,
      bestPct: scores.length ? Math.max(...scores) : 0,
      testsTaken: attempts + mockAttempts,
      mockBest,
      mockAttempts,
      sectionsPassed: ADI_SECTIONS.filter(s => entries[s.id]?.passed).length,
      sectionCount: ADI_SECTIONS.length,
    };
  }, [entries]);

  /* The weakest sections that have actually been attempted. */
  const weakest = useMemo(() => {
    return ADI_SECTIONS
      .filter(s => (entries[s.id]?.attempts || 0) > 0)
      .map(s => ({ id: s.id, label: s.label, short: s.short, pct: entries[s.id].bestPct }))
      .sort((a, b) => a.pct - b.pct)
      .slice(0, 3);
  }, [entries]);

  const value = useMemo(() => ({
    entries,
    syncing,
    recordResult,
    recordAnswered,
    toggleCardKnown,
    resetModule,
    resetAll,
    getModule,
    getSection,
    overall,
    weakest,
  }), [entries, syncing, recordResult, recordAnswered, toggleCardKnown,
       resetModule, resetAll, getModule, getSection, overall, weakest]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside <ProgressProvider>");
  return ctx;
}

export default ProgressProvider;
