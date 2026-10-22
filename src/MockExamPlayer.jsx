/*
  ===========================================================================
  MOCK EXAM PLAYER

  Runs a mock paper the way the real Stage 1 exam runs, as described by a
  candidate who sat it:

    · Five sections, one after another, each on its own clock — 25 minutes
      for the 25 Road Safety questions, 20 minutes for each of the others.
      Time left over in one section does not carry into the next.
    · When a section's clock reaches zero the section closes where it is and
      the next one is ready to start. Anything unanswered stays blank and is
      marked wrong.
    · Inside a section you can move freely, skip, come back, and flag a
      question for review. An overview shows which are answered, blank and
      flagged.
    · Answering the last question in a section asks whether to finish the
      section or review the flagged ones. A finished section can't be
      reopened.
    · No marks along the way. After the last section the test asks "Finish
      the test?", and only then is the paper marked and the result shown,
      section by section.

  The attempt saves itself after every change and when the app goes to the
  background, so leaving never loses a place. The clock stops while the
  paper is closed — the real exam won't, and the intro says so.

  Section practice still runs in QuizPlayer; the result screen is shared.
  ===========================================================================
*/

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft, ChevronRight, Check, Clock, Flag, Play, AlertTriangle,
  LayoutGrid, Layers, Lock, Hourglass,
} from "lucide-react";
import { ScreenHeader, Screen, ProgressBar, PrimaryButton, SecondaryButton } from "./ui";
import { useProgress } from "./progressStore";
import {
  ADI_SECTIONS, PASS_MARK, MOCK_WEIGHTS, MOCK_SECTION_MINUTES,
  gradeMock, mockVerdict,
} from "./appStructure";
import { QUESTION_BY_QID } from "./adiSections";
import { QuizResult, formatClock } from "./QuizPlayer";
import QuestionImage, { preloadImages } from "./QuestionImage";

/* ---------------------------------------------------------------------------
   Saved attempts

   Same key the home screen checks for a "Resume" card. `v: 2` marks the
   sectioned format; an attempt saved by the old single-clock mock can't be
   carried over and is dropped.
   --------------------------------------------------------------------------- */
const saveKey = (moduleId) => `pdt-paused-${moduleId}`;

function saveExam(moduleId, exam) {
  try {
    localStorage.setItem(saveKey(moduleId), JSON.stringify({
      v: 2,
      current: exam.current,
      index: exam.index,
      phase: exam.phase,
      sections: exam.sections.map(s => ({
        id: s.id,
        qids: s.questions.map(q => q.qid),
        answers: s.answers,
        flags: s.flags,
        elapsed: s.elapsed,
        status: s.status,
        timedOut: s.timedOut,
      })),
      savedAt: new Date().toISOString(),
    }));
  } catch { /* storage full or blocked — the attempt just isn't resumable */ }
}

function clearExam(moduleId) {
  try { localStorage.removeItem(saveKey(moduleId)); } catch { /* ignore */ }
}

function loadExam(moduleId) {
  try {
    const raw = localStorage.getItem(saveKey(moduleId));
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (saved?.v !== 2 || !Array.isArray(saved.sections)) {
      clearExam(moduleId);
      return null;
    }

    const sections = saved.sections.map(s => {
      const def = sectionDef(s.id);
      const questions = [], answers = [], flags = [];
      (s.qids || []).forEach((qid, i) => {
        const q = QUESTION_BY_QID[qid];
        if (!q) return;          // removed from the bank since — drop it
        questions.push(q);
        answers.push(s.answers?.[i] ?? null);
        flags.push(Boolean(s.flags?.[i]));
      });
      return {
        ...def,
        questions,
        answers,
        flags,
        elapsed: s.elapsed || 0,
        status: s.status || "pending",
        timedOut: Boolean(s.timedOut),
      };
    }).filter(s => s.questions.length);
    if (!sections.length) return null;

    const current = Math.min(saved.current || 0, sections.length - 1);
    return {
      sections,
      current,
      index: Math.min(saved.index || 0, sections[current].questions.length - 1),
      phase: saved.phase || "running",
      savedAt: saved.savedAt,
    };
  } catch {
    return null;
  }
}

function sectionDef(id) {
  const s = ADI_SECTIONS.find(x => x.id === id) || {};
  return {
    id,
    number: s.number ?? "",
    label: s.examLabel || s.label || "",
    short: s.short || s.label || "",
    minutes: MOCK_SECTION_MINUTES[id] || 20,
    passMark: s.passMark ?? PASS_MARK,
  };
}

function shuffle(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* A fresh attempt: the paper's questions split into its sections, in exam
   order, each reshuffled so nobody learns an answer by position. */
function newExam(allQuestions) {
  const sections = ADI_SECTIONS
    .map(s => {
      const questions = shuffle(allQuestions.filter(q => q.sectionId === s.id));
      return {
        ...sectionDef(s.id),
        questions,
        answers: new Array(questions.length).fill(null),
        flags: new Array(questions.length).fill(false),
        elapsed: 0,
        status: "pending",
        timedOut: false,
      };
    })
    .filter(s => s.questions.length);
  return { sections, current: 0, index: 0, phase: "between" };
}

const isAnswered = (a) => a !== null && a !== undefined;

function timeAgo(iso) {
  if (!iso) return "earlier";
  const mins = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs} hour${hrs === 1 ? "" : "s"} ago`;
  const days = Math.round(hrs / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

/* ===========================================================================
   ENTRY
   =========================================================================== */
export default function MockExamPlayer({ module, quiz, onExit }) {
  const [stage, setStage] = useState("intro");
  const [exam, setExam] = useState(null);
  const [result, setResult] = useState(null);
  const [saved, setSaved] = useState(() => loadExam(module.id));

  const { recordResult, recordAnswered, getModule } = useProgress();
  const progress = getModule(module.id);

  const allQuestions = quiz.categories.flatMap(c => c.questions);

  const startFresh = () => {
    clearExam(module.id);
    setSaved(null);
    setResult(null);
    setExam(newExam(allQuestions));
    setStage("exam");
  };

  const resume = () => {
    setExam(saved);
    setStage("exam");
  };

  const leave = (state) => {
    const touched = state.sections.some(s => s.status !== "pending");
    if (touched) saveExam(module.id, state);
    setSaved(loadExam(module.id));
    setExam(null);
    setStage("intro");
  };

  const finish = async (state) => {
    /* Marked on the whole paper: a blank is wrong, exactly as in the exam. */
    const log = [];
    const timedOutSections = [];
    let elapsed = 0;
    for (const s of state.sections) {
      elapsed += Math.min(s.elapsed, s.minutes * 60);
      if (s.timedOut) timedOutSections.push(`Section ${s.number}`);
      s.questions.forEach((q, i) => {
        const raw = s.answers[i];
        const skipped = !isAnswered(raw);
        log.push({
          qid: q.qid,
          sectionId: q.sectionId,
          q: q.q,
          image: q.image,
          options: q.options,
          correct: q.correct,
          picked: skipped ? null : raw,
          explain: q.explain,
          sectionLabel: q.sectionLabel,
          skipped,
          isRight: !skipped && raw === q.correct,
        });
      });
    }

    clearExam(module.id);
    setSaved(null);

    const bySection = {};
    for (const item of log) {
      if (item.skipped || !item.qid || !item.sectionId) continue;
      (bySection[item.sectionId] = bySection[item.sectionId] || []).push(item.qid);
    }
    for (const [sectionId, qids] of Object.entries(bySection)) {
      await recordAnswered(sectionId, qids);
    }

    const total = state.sections.reduce((n, s) => n + s.questions.length, 0);
    const grade = gradeMock(log, { totalQuestions: total });
    const verdict = mockVerdict(grade);
    const stored = await recordResult(module.id, grade.score, grade.total, {
      passMark: Math.max(...grade.rows.map(r => r.passMark), PASS_MARK),
      passed: grade.passed,
      sections: grade.rows.map(r => ({ id: r.id, c: r.correct, t: r.total })),
    });

    setResult({
      ...stored,
      score: grade.score,
      total: grade.total,
      pct: grade.pct,
      verdict,
      grade,
      log,
      elapsed,
      timedOutSections,
    });
    setExam(null);
    setStage("result");
  };

  if (stage === "exam" && exam) {
    return (
      <ExamRun
        initial={exam}
        module={module}
        onSave={(state) => saveExam(module.id, state)}
        onLeave={leave}
        onFinish={finish}
      />
    );
  }

  if (stage === "result" && result) {
    return (
      <QuizResult
        module={module}
        result={result}
        onRetry={startFresh}
        onExit={onExit}
      />
    );
  }

  return (
    <ExamIntro
      quiz={quiz}
      progress={progress}
      saved={saved}
      onStart={startFresh}
      onResume={resume}
      onDiscard={() => { clearExam(module.id); setSaved(null); }}
      onExit={onExit}
    />
  );
}

/* ===========================================================================
   INTRO
   =========================================================================== */
function ExamIntro({ quiz, progress, saved, onStart, onResume, onDiscard, onExit }) {
  const sections = ADI_SECTIONS.map(s => ({
    ...sectionDef(s.id),
    count: MOCK_WEIGHTS[s.id] || 0,
  })).filter(s => s.count);
  const totalQ = sections.reduce((n, s) => n + s.count, 0);
  const totalMin = sections.reduce((n, s) => n + s.minutes, 0);

  const savedSection = saved ? saved.sections[saved.current] : null;
  const savedDone = saved ? saved.sections.filter(s => s.status === "done").length : 0;

  return (
    <>
      <ScreenHeader title={quiz.title} subtitle={quiz.subtitle} onBack={onExit} backLabel="Home" />
      <Screen>
        {progress.attempts > 0 && (
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Best score</span>
              <span className="text-xl font-black text-slate-900 dark:text-white">{progress.bestPct}%</span>
            </div>
            <div className="mt-2">
              <ProgressBar pct={progress.bestPct} tone={progress.passed ? "emerald" : "amber"} />
            </div>
          </div>
        )}

        {saved && (
          <div className="mt-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 rounded-2xl p-5">
            <div className="flex items-center gap-2.5">
              <Play size={18} className="text-emerald-600 dark:text-emerald-400" />
              <h2 className="font-bold text-slate-900 dark:text-white">Test in progress</h2>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {savedDone} of {saved.sections.length} sections finished.
              {savedSection && savedSection.status === "active" && (
                <> You were in Section {savedSection.number} with{" "}
                  {formatClock(savedSection.minutes * 60 - savedSection.elapsed)} left on its clock.</>
              )}
              {" "}Saved {timeAgo(saved.savedAt)}.
            </p>
            <div className="mt-4 space-y-2.5">
              <PrimaryButton onClick={onResume}>
                <span className="inline-flex items-center gap-2"><Play size={16} /> Continue the test</span>
              </PrimaryButton>
              <button
                onClick={onDiscard}
                className="w-full text-sm font-semibold text-slate-500 dark:text-slate-400 py-2"
              >
                Discard and start again
              </button>
            </div>
          </div>
        )}

        {!saved && (
          <>
            <div className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
              <h2 className="font-bold text-slate-900 dark:text-white">Exam conditions</h2>
              <ul className="mt-3 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-2.5">
                  <Layers size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  {totalQ} questions in {sections.length} sections, taken one after another.
                </li>
                <li className="flex gap-2.5">
                  <Clock size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  Each section has its own clock — {totalMin} minutes in all. When a section's
                  time runs out, it closes and the next one starts. Unanswered questions stay blank.
                </li>
                <li className="flex gap-2.5">
                  <Flag size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  Skip and come back, or flag a question to review before you finish the section.
                </li>
                <li className="flex gap-2.5">
                  <Lock size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  Finish a section early if you're done — but once finished, you can't go back to it.
                </li>
                <li className="flex gap-2.5">
                  <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  No marks along the way. The result comes at the very end, section by section,
                  and every section has to reach its own pass mark. Blank is marked wrong.
                </li>
                <li className="flex gap-2.5">
                  <AlertTriangle size={16} className="text-amber-500 mt-0.5 shrink-0" />
                  Leaving saves your place and stops the clock. The real exam won't.
                </li>
              </ul>
            </div>

            <div className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
              <h2 className="font-bold text-slate-900 dark:text-white">The five sections</h2>
              <div className="mt-3 divide-y divide-slate-100 dark:divide-slate-700">
                {sections.map(s => (
                  <div key={s.id} className="py-2.5 flex items-center gap-3 text-sm">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200 font-bold flex items-center justify-center shrink-0">
                      {s.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-800 dark:text-slate-100 truncate">{s.label}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {s.count} questions · {s.minutes} minutes
                      </p>
                    </div>
                    <span className="text-right shrink-0 tabular-nums">
                      <span className="block font-bold text-slate-900 dark:text-white">{s.passMark}%</span>
                      <span className="block text-xs font-semibold text-slate-400">
                        {Math.ceil((s.passMark / 100) * s.count)}/{s.count} to pass
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <PrimaryButton onClick={onStart}>
                {progress.attempts > 0 ? "Start again" : "Start the test"}
              </PrimaryButton>
            </div>
          </>
        )}
      </Screen>
    </>
  );
}

/* ===========================================================================
   THE TEST

   phase:
     running   answering questions in the current section
     overview  the current section's question grid
     between   a section has closed; the next one is ready to start
     final     every section is done (or the last is being finished):
               "Finish the test?"
   =========================================================================== */
function ExamRun({ initial, module, onSave, onLeave, onFinish }) {
  const [exam, setExam] = useState(initial);
  const [modal, setModal] = useState(null);          // "complete" | "confirmEnd" | null
  const [flaggedOnly, setFlaggedOnly] = useState(false);
  const finishing = useRef(false);

  const sec = exam.sections[exam.current];
  const isLastSection = exam.current === exam.sections.length - 1;
  const limit = sec.minutes * 60;
  const clockRunning = sec.status === "active";
  const remaining = Math.max(0, limit - sec.elapsed);

  /* ---- save on every change, and when the app is hidden ---- */
  const latest = useRef(exam);
  latest.current = exam;
  useEffect(() => { if (!finishing.current) onSave(exam); }, [exam, onSave]);
  useEffect(() => {
    const save = () => { if (!finishing.current) onSave(latest.current); };
    const onHide = () => { if (document.visibilityState === "hidden") save(); };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", save);
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", save);
    };
  }, [onSave]);

  /* ---- the section clock ----
     Read from the wall clock, not counted in ticks, so a phone that sleeps
     comes back with the right time. It runs only while the section is open;
     leaving the test unmounts this and stops it. */
  useEffect(() => {
    if (!clockRunning) return undefined;
    const startedAt = Date.now() - latest.current.sections[latest.current.current].elapsed * 1000;
    const tick = () => {
      const secs = Math.floor((Date.now() - startedAt) / 1000);
      setExam(prev => {
        const s = prev.sections[prev.current];
        if (s.status !== "active") return prev;
        const lim = s.minutes * 60;
        if (secs >= lim) {
          // Time's up: the section closes where it is.
          return {
            ...updateSection(prev, prev.current, { elapsed: lim, status: "done", timedOut: true }),
            phase: prev.current === prev.sections.length - 1 ? "final" : "between",
          };
        }
        return secs === s.elapsed ? prev : updateSection(prev, prev.current, { elapsed: secs });
      });
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [clockRunning, exam.current]);

  /* Pictures for this section and the next start downloading now, so a sign
     is already in the cache when its question comes up. */
  useEffect(() => {
    const secs = exam.sections.slice(exam.current, exam.current + 2);
    preloadImages(secs.flatMap(s => s.questions.map(q => q.image)));
  }, [exam.current, exam.sections.length]);

  // A section that closed on time can't leave a dialog hanging over the next.
  useEffect(() => {
    if (!clockRunning) { setModal(null); setFlaggedOnly(false); }
  }, [clockRunning]);

  /* ---- actions ---- */
  const set = (patch) => setExam(prev => ({ ...prev, ...patch }));

  const goTo = useCallback((i) => {
    setExam(prev => ({ ...prev, index: i, phase: "running" }));
  }, []);

  function choose(optionIndex) {
    const before = sec.answers.filter(isAnswered).length;
    const answers = [...sec.answers];
    answers[exam.index] = optionIndex;
    setExam(prev => updateSection(prev, prev.current, { answers }));
    // Just answered the last open question in the section: ask what next.
    if (before < answers.length && answers.every(isAnswered)) setModal("complete");
  }

  function toggleFlag() {
    const flags = [...sec.flags];
    flags[exam.index] = !flags[exam.index];
    setExam(prev => updateSection(prev, prev.current, { flags }));
  }

  const flaggedIdx = sec.flags.map((f, i) => (f ? i : -1)).filter(i => i >= 0);

  function reviewFlagged() {
    setModal(null);
    if (!flaggedIdx.length) return;
    setFlaggedOnly(true);
    goTo(flaggedIdx[0]);
  }

  /* Finishing a section. The last one goes to "Finish the test?" with its
     clock still running, so it can be reopened from there; any other is
     confirmed first, because it can't be. */
  function requestEnd() {
    setFlaggedOnly(false);
    if (isLastSection) { setModal(null); set({ phase: "final" }); return; }
    setModal("confirmEnd");
  }

  function endSection() {
    setModal(null);
    setFlaggedOnly(false);
    setExam(prev => ({
      ...updateSection(prev, prev.current, { status: "done" }),
      phase: prev.current === prev.sections.length - 1 ? "final" : "between",
    }));
  }

  function startSection() {
    setExam(prev => {
      // The very first section starts from "between" with nothing done yet.
      const next = prev.sections[prev.current].status === "pending" ? prev.current : prev.current + 1;
      return {
        ...updateSection(prev, next, { status: "active", elapsed: 0 }),
        current: next,
        index: 0,
        phase: "running",
      };
    });
  }

  function finishTest() {
    if (finishing.current) return;
    finishing.current = true;
    const state = latest.current;
    onFinish(updateSection(state, state.current, { status: "done" }));
  }

  const leave = () => onLeave(latest.current);

  /* ---- screens ---- */
  if (exam.phase === "between") {
    return <BetweenSections exam={exam} onStart={startSection} onLeave={leave} />;
  }

  if (exam.phase === "final") {
    return (
      <FinishTest
        exam={exam}
        remaining={remaining}
        canReturn={clockRunning}
        onReturn={() => set({ phase: "overview" })}
        onFinish={finishTest}
        onLeave={leave}
      />
    );
  }

  const answeredCount = sec.answers.filter(isAnswered).length;
  const blankCount = sec.questions.length - answeredCount;
  const warning = remaining <= 300 && remaining > 60;
  const critical = remaining <= 60;

  const topBar = (
    <div className="bg-slate-900 text-white sticky top-0 z-10">
      <div
        className="max-w-2xl mx-auto px-5 pb-3.5"
        style={{ paddingTop: "max(1.75rem, calc(env(safe-area-inset-top) + 1rem))" }}
      >
        <div className="flex items-center justify-between gap-3 mb-2">
          <button
            onClick={leave}
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-400 py-1"
          >
            <ChevronLeft size={16} /> Exit
          </button>
          <span className="text-sm font-bold">
            Section {sec.number} <span className="text-slate-500">of {exam.sections.length}</span>
          </span>
          <span
            className={`flex items-center gap-1.5 text-sm font-mono font-bold tabular-nums ${
              critical ? "text-red-400 animate-pulse" : warning ? "text-amber-400" : "text-slate-300"
            }`}
            title="Time left in this section"
          >
            <Clock size={14} />
            {formatClock(remaining)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 truncate">
            {sec.label}
          </span>
          {exam.phase === "running" && (
            <button
              onClick={() => { setFlaggedOnly(false); set({ phase: "overview" }); }}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white shrink-0"
            >
              <LayoutGrid size={14} /> Overview
            </button>
          )}
        </div>
        <ProgressBar pct={(answeredCount / sec.questions.length) * 100} height="h-1.5" />
      </div>
    </div>
  );

  const banner = critical && (
    <div className="bg-red-500 text-white">
      <div className="max-w-2xl mx-auto px-5 py-2 flex items-center gap-2 text-sm font-bold">
        <AlertTriangle size={15} className="shrink-0" />
        <span>
          {formatClock(remaining)} left in this section
          {blankCount > 0 && ` · ${blankCount} still blank`}
        </span>
      </div>
    </div>
  );

  const dialogs = (
    <>
      {modal === "complete" && (
        <Dialog
          icon={<Check size={22} className="text-emerald-500" />}
          title="All questions answered"
          body={
            <>
              You've answered all {sec.questions.length} questions in Section {sec.number}
              {flaggedIdx.length > 0 && <>, and {flaggedIdx.length} {flaggedIdx.length === 1 ? "is" : "are"} flagged</>}.
              {" "}{isLastSection
                ? "You can finish the test now, or use the time left to review."
                : "Finish the section now, or use the time left to review. Once finished, you can't come back to it."}
            </>
          }
        >
          <PrimaryButton onClick={isLastSection ? requestEnd : endSection}>
            {isLastSection ? "Finish section" : `Finish section ${sec.number}`}
          </PrimaryButton>
          {flaggedIdx.length > 0 && (
            <SecondaryButton onClick={reviewFlagged}>
              <span className="inline-flex items-center gap-2">
                <Flag size={16} /> Review flagged ({flaggedIdx.length})
              </span>
            </SecondaryButton>
          )}
          <button
            onClick={() => { setModal(null); set({ phase: "overview" }); }}
            className="w-full text-sm font-semibold text-slate-500 dark:text-slate-400 py-2"
          >
            Review all questions
          </button>
        </Dialog>
      )}

      {modal === "confirmEnd" && (
        <Dialog
          icon={<Lock size={20} className="text-amber-500" />}
          title={`Finish Section ${sec.number}?`}
          body={
            <>
              You can't come back to this section once it's finished.
              {blankCount > 0 && <> <b>{blankCount} {blankCount === 1 ? "question is" : "questions are"} blank</b> and will be marked wrong.</>}
              {flaggedIdx.length > 0 && <> {flaggedIdx.length} flagged.</>}
            </>
          }
        >
          <PrimaryButton onClick={endSection}>Finish section</PrimaryButton>
          <SecondaryButton onClick={() => setModal(null)}>Keep working</SecondaryButton>
        </Dialog>
      )}
    </>
  );

  /* ---- overview: the section's question grid ---- */
  if (exam.phase === "overview") {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {topBar}
        {banner}
        <div className="max-w-2xl mx-auto px-5 py-6 pb-12">
          <h2 className="text-lg font-black text-slate-900 dark:text-white">Section {sec.number} overview</h2>
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            <Count label="Answered" value={answeredCount} tone="emerald" />
            <Count label="Blank" value={blankCount} tone={blankCount ? "slate" : "emerald"} />
            <Count label="Flagged" value={flaggedIdx.length} tone={flaggedIdx.length ? "amber" : "slate"} />
          </div>

          <div className="mt-5 grid grid-cols-5 sm:grid-cols-8 gap-2">
            {sec.questions.map((q, i) => {
              const done = isAnswered(sec.answers[i]);
              const flagged = sec.flags[i];
              return (
                <button
                  key={q.qid || i}
                  onClick={() => { setFlaggedOnly(false); goTo(i); }}
                  aria-label={`Question ${i + 1}${done ? ", answered" : ", blank"}${flagged ? ", flagged" : ""}`}
                  className={`relative h-12 rounded-xl font-bold text-sm tabular-nums border-2 transition ${
                    done
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                  } ${flagged ? "!border-amber-400" : ""} ${i === exam.index ? "ring-2 ring-offset-2 ring-slate-900 dark:ring-white dark:ring-offset-slate-900" : ""}`}
                >
                  {i + 1}
                  {flagged && (
                    <Flag size={11} className="absolute top-1 right-1 text-amber-400 fill-amber-400" />
                  )}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            Tap a number to go to that question. Green is answered; an amber edge is flagged.
          </p>

          <div className="mt-6 space-y-2.5">
            {flaggedIdx.length > 0 && (
              <SecondaryButton onClick={reviewFlagged}>
                <span className="inline-flex items-center gap-2">
                  <Flag size={16} /> Review flagged questions ({flaggedIdx.length})
                </span>
              </SecondaryButton>
            )}
            <SecondaryButton onClick={() => goTo(exam.index)}>Back to the questions</SecondaryButton>
            <PrimaryButton onClick={requestEnd}>
              {isLastSection ? "Finish section" : `Finish section ${sec.number}`}
            </PrimaryButton>
          </div>
        </div>
        {dialogs}
      </div>
    );
  }

  /* ---- running: one question ---- */
  const q = sec.questions[exam.index];
  const picked = sec.answers[exam.index];
  const flagged = sec.flags[exam.index];
  const total = sec.questions.length;

  // In flagged review, Previous/Next step between flagged questions only.
  const pos = flaggedIdx.indexOf(exam.index);
  const prevIdx = flaggedOnly
    ? (pos > 0 ? flaggedIdx[pos - 1] : -1)
    : exam.index - 1;
  const nextIdx = flaggedOnly
    ? (pos >= 0 ? flaggedIdx[pos + 1] ?? -1 : flaggedIdx.find(i => i > exam.index) ?? -1)
    : (exam.index < total - 1 ? exam.index + 1 : -1);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {topBar}
      {banner}

      {flaggedOnly && (
        <div className="bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200">
          <div className="max-w-2xl mx-auto px-5 py-2 flex items-center gap-2 text-sm font-bold">
            <Flag size={14} className="shrink-0" />
            <span>
              Reviewing flagged{pos >= 0 ? ` · ${pos + 1} of ${flaggedIdx.length}` : ""}
            </span>
            <button
              onClick={() => setFlaggedOnly(false)}
              className="ml-auto text-xs font-bold uppercase tracking-widest underline"
            >
              Show all
            </button>
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto px-5 py-6 pb-40">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 tabular-nums">
            Question {exam.index + 1} of {total}
          </span>
          <button
            onClick={toggleFlag}
            aria-pressed={flagged}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold border transition ${
              flagged
                ? "bg-amber-400 border-amber-400 text-slate-900"
                : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
            }`}
          >
            <Flag size={13} className={flagged ? "fill-slate-900" : ""} />
            {flagged ? "Flagged" : "Flag for review"}
          </button>
        </div>

        {q.image && <QuestionImage src={q.image} className="mb-4" />}

        <h2 className="rd-lead font-bold text-slate-900 dark:text-white">{q.q}</h2>

        <div className="mt-5 space-y-2.5">
          {q.options.map((opt, i) => {
            const isPicked = picked === i;
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                className={`w-full text-left border rounded-2xl px-4 py-3.5 flex items-start gap-3 transition ${
                  isPicked
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                }`}
              >
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                  isPicked ? "bg-emerald-500 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300"
                }`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="rd-option text-slate-800 dark:text-slate-100 pt-0.5">{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-slate-200 dark:border-slate-800 px-5 pt-3">
        <div className="max-w-2xl mx-auto" style={{ paddingBottom: "max(0.875rem, env(safe-area-inset-bottom))" }}>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => goTo(prevIdx)}
              disabled={prevIdx < 0}
              className="flex-1 flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 disabled:opacity-40 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl transition"
            >
              <ChevronLeft size={18} /> Previous
            </button>
            {nextIdx >= 0 ? (
              <button
                onClick={() => goTo(nextIdx)}
                className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 rounded-xl transition"
              >
                Next <ChevronRight size={18} />
              </button>
            ) : (
              <button
                onClick={() => { setFlaggedOnly(false); set({ phase: "overview" }); }}
                className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 rounded-xl transition"
              >
                <LayoutGrid size={16} /> Review section
              </button>
            )}
          </div>
          <button
            onClick={requestEnd}
            className="w-full mt-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-600 py-1.5"
          >
            Finish section {sec.number}
            {blankCount > 0 ? ` · ${blankCount} blank` : ""}
          </button>
        </div>
      </div>

      {dialogs}
    </div>
  );
}

function updateSection(exam, i, patch) {
  return {
    ...exam,
    sections: exam.sections.map((s, j) => (j === i ? { ...s, ...patch } : s)),
  };
}

/* ===========================================================================
   BETWEEN SECTIONS
   Shown before the first section and after each one closes. No marks — only
   whether the section closed on time and how many were left blank.
   =========================================================================== */
function BetweenSections({ exam, onStart, onLeave }) {
  const cur = exam.sections[exam.current];
  const first = cur.status === "pending";
  const next = first ? cur : exam.sections[exam.current + 1];
  const blanks = first ? 0 : cur.answers.filter(a => !isAnswered(a)).length;

  return (
    <>
      <ScreenHeader
        title={first ? "Ready to start" : cur.timedOut ? "Time's up" : `Section ${cur.number} finished`}
        subtitle={first ? `${exam.sections.length} sections` : `Section ${cur.number} of ${exam.sections.length} closed`}
        onBack={onLeave}
        backLabel="Exit"
      />
      <Screen>
        <SectionStrip exam={exam} highlight={next?.number} />

        {!first && (
          <div className={`mt-4 flex gap-3 rounded-2xl p-4 border ${
            cur.timedOut
              ? "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900"
              : "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900"
          }`}>
            {cur.timedOut
              ? <Hourglass size={18} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              : <Check size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />}
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {cur.timedOut
                ? `The clock for Section ${cur.number} reached zero and the section has closed.`
                : `Section ${cur.number} is finished.`}
              {blanks > 0
                ? ` ${blanks} ${blanks === 1 ? "question was" : "questions were"} left blank and will be marked wrong.`
                : " Every question has an answer."}
              {" "}Your result comes at the end of the test.
            </p>
          </div>
        )}

        {next && (
          <div className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              {first ? "First" : "Next"} · Section {next.number} of {exam.sections.length}
            </p>
            <h2 className="mt-1 text-lg font-black text-slate-900 dark:text-white">{next.label}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {next.questions.length} questions · {next.minutes} minutes
            </p>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              The {next.minutes}-minute clock starts when you tap Start.
            </p>
            <div className="mt-4">
              <PrimaryButton onClick={onStart}>
                <span className="inline-flex items-center gap-2"><Play size={16} /> Start section {next.number}</span>
              </PrimaryButton>
            </div>
          </div>
        )}
      </Screen>
    </>
  );
}

/* ===========================================================================
   FINISH THE TEST?
   =========================================================================== */
function FinishTest({ exam, remaining, canReturn, onReturn, onFinish, onLeave }) {
  const last = exam.sections[exam.sections.length - 1];
  const totalBlank = exam.sections.reduce(
    (n, s) => n + s.answers.filter(a => !isAnswered(a)).length, 0,
  );

  return (
    <>
      <ScreenHeader
        title="Finish the test?"
        subtitle={last.timedOut ? `Time's up for Section ${last.number}` : "All sections complete"}
        onBack={onLeave}
        backLabel="Exit"
      />
      <Screen>
        <SectionStrip exam={exam} />

        <div className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
          <h2 className="font-bold text-slate-900 dark:text-white">
            {last.timedOut ? "The last section's time is up" : "You've reached the end of the test"}
          </h2>
          <div className="mt-3 divide-y divide-slate-100 dark:divide-slate-700">
            {exam.sections.map(s => {
              const answered = s.answers.filter(isAnswered).length;
              return (
                <div key={s.id} className="py-2 flex items-center justify-between gap-3 text-sm">
                  <span className="text-slate-700 dark:text-slate-200 truncate">
                    {s.number}. {s.label}
                  </span>
                  <span className="shrink-0 tabular-nums font-semibold text-slate-500 dark:text-slate-400">
                    {answered}/{s.questions.length} answered
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {totalBlank > 0
              ? `${totalBlank} ${totalBlank === 1 ? "question is" : "questions are"} blank and will be marked wrong. `
              : ""}
            Finishing marks the paper and shows your result, section by section.
          </p>
        </div>

        <div className="mt-4 space-y-2.5">
          <PrimaryButton onClick={onFinish}>Finish the test and see results</PrimaryButton>
          {canReturn && (
            <SecondaryButton onClick={onReturn}>
              <span className="inline-flex items-center gap-2">
                <ChevronLeft size={16} /> Back to Section {last.number} · {formatClock(remaining)} left
              </span>
            </SecondaryButton>
          )}
        </div>
      </Screen>
    </>
  );
}

/* Five pills across the top of the between/finish screens: where you are in
   the test, without a single mark on it. */
function SectionStrip({ exam, highlight }) {
  return (
    <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${exam.sections.length}, minmax(0, 1fr))` }}>
      {exam.sections.map(s => {
        const done = s.status === "done";
        const on = s.number === highlight;
        return (
          <div
            key={s.id}
            className={`rounded-xl px-2 py-2 text-center border ${
              done
                ? "bg-slate-900 dark:bg-slate-700 border-slate-900 dark:border-slate-700 text-white"
                : on
                  ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-700 dark:text-emerald-300"
                  : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
            }`}
          >
            <div className="text-sm font-black">{s.number}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide">
              {done ? (s.timedOut ? "Time up" : "Done") : `${s.minutes} min`}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Count({ label, value, tone }) {
  const colour = tone === "emerald" ? "text-emerald-600 dark:text-emerald-400"
    : tone === "amber" ? "text-amber-600 dark:text-amber-400"
    : "text-slate-900 dark:text-white";
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
      <div className={`text-2xl font-black tabular-nums ${colour}`}>{value}</div>
      <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{label}</div>
    </div>
  );
}

function Dialog({ icon, title, body, children }) {
  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center bg-slate-900/60 px-4 pb-4 sm:pb-0" role="dialog" aria-modal="true">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-xl" style={{ marginBottom: "env(safe-area-inset-bottom)" }}>
        <div className="flex items-center gap-2.5">
          {icon}
          <h2 className="text-lg font-black text-slate-900 dark:text-white">{title}</h2>
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{body}</p>
        <div className="mt-4 space-y-2.5">{children}</div>
      </div>
    </div>
  );
}
