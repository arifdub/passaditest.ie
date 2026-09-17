/*
  ===========================================================================
  QUIZ PLAYER

  Runs both a section practice and the 100-question mock.

  What's here beyond a plain quiz:

    · Previous and Next. You can go back over questions you've already
      answered and change your mind before finishing.
    · Pause. Stops the clock and saves the whole attempt — which questions,
      what you picked, where you were, how long you'd spent. Coming back
      puts you on the same question with the same answers in place.
    · The paused attempt is stored by question id, not by copying the
      questions, so it stays small and survives the bank being edited.
      Anything that has since disappeared from the bank is dropped on
      resume rather than crashing.
  ===========================================================================
*/

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft, ChevronRight, Check, X, Clock, RotateCcw, Flag,
  Pause, Play, Star, ChevronDown, ChevronUp,
} from "lucide-react";
import {
  ScreenHeader, Screen, ProgressBar, ProgressRing,
  PrimaryButton, SecondaryButton,
} from "./ui";
import { useProgress } from "./progressStore";
import { verdictFor, PASS_MARK } from "./appStructure";
import { QUESTION_BY_QID } from "./adiSections";

/* ---------------------------------------------------------------------------
   Paused attempts
   --------------------------------------------------------------------------- */
const pauseKey = (moduleId) => `pdt-paused-${moduleId}`;

function loadPaused(moduleId) {
  try {
    const raw = localStorage.getItem(pauseKey(moduleId));
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (!saved?.qids?.length) return null;

    // Rebuild from ids. A question removed from the bank since pausing is
    // dropped, along with the answer that went with it.
    const questions = [];
    const answers = [];
    saved.qids.forEach((qid, i) => {
      const q = QUESTION_BY_QID[qid];
      if (!q) return;
      questions.push(q);
      answers.push(saved.answers?.[i] ?? null);
    });
    if (!questions.length) return null;

    return {
      questions,
      answers,
      index: Math.min(saved.index || 0, questions.length - 1),
      elapsed: saved.elapsed || 0,
      savedAt: saved.savedAt,
    };
  } catch {
    return null;
  }
}

function savePaused(moduleId, { questions, answers, index, elapsed }) {
  try {
    localStorage.setItem(pauseKey(moduleId), JSON.stringify({
      qids: questions.map(q => q.qid),
      answers,
      index,
      elapsed,
      savedAt: new Date().toISOString(),
    }));
  } catch {
    /* storage full or private mode — the attempt just won't be resumable */
  }
}

function clearPaused(moduleId) {
  try { localStorage.removeItem(pauseKey(moduleId)); } catch { /* ignore */ }
}

/* ---------------------------------------------------------------------------
   Helpers
   --------------------------------------------------------------------------- */
function shuffle(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function formatClock(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function timeAgo(iso) {
  if (!iso) return "";
  const mins = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs} hour${hrs === 1 ? "" : "s"} ago`;
  const days = Math.round(hrs / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

/* ===========================================================================
   ENTRY
   =========================================================================== */
export default function QuizPlayer({ module, quiz, onExit }) {
  const isMock = module.kind === "mock";
  const passMark = module.passMark || PASS_MARK;

  const [stage, setStage] = useState("intro");
  const [session, setSession] = useState(null);
  const [result, setResult] = useState(null);
  const [paused, setPaused] = useState(() => loadPaused(module.id));

  const { recordResult, recordAnswered, getSection, getModule } = useProgress();
  const progress = isMock ? getModule(module.id) : getSection(module.id);

  const allQuestions = quiz.categories.flatMap(c => c.questions);

  const startFresh = () => {
    const questions = isMock ? allQuestions : shuffle(allQuestions);
    setSession({
      questions,
      answers: new Array(questions.length).fill(null),
      index: 0,
      elapsed: 0,
    });
    clearPaused(module.id);
    setPaused(null);
    setStage("running");
  };

  const resume = () => {
    setSession(paused);
    setStage("running");
  };

  const handlePause = (state) => {
    savePaused(module.id, state);
    setPaused(loadPaused(module.id));
    setStage("intro");
    setSession(null);
  };

  const finish = async ({ questions, answers, elapsed }) => {
    const answered = [];
    let score = 0;
    const log = [];

    questions.forEach((q, i) => {
      const picked = answers[i];
      if (picked === null || picked === undefined) return;
      answered.push(q);
      const isRight = picked === q.correct;
      if (isRight) score++;
      log.push({
        qid: q.qid,
        sectionId: q.sectionId,
        q: q.q,
        image: q.image,
        options: q.options,
        correct: q.correct,
        picked,
        explain: q.explain,
        sectionLabel: q.sectionLabel,
        isRight,
      });
    });

    // Credit every answered question to the section it belongs to.
    const bySection = {};
    for (const item of log) {
      if (!item.qid || !item.sectionId) continue;
      (bySection[item.sectionId] = bySection[item.sectionId] || []).push(item.qid);
    }
    for (const [sectionId, qids] of Object.entries(bySection)) {
      await recordAnswered(sectionId, qids);
    }

    const total = log.length || 1;
    const saved = await recordResult(module.id, score, total);

    clearPaused(module.id);
    setPaused(null);
    setResult({ score, total, log, elapsed, passMark, ...saved });
    setStage("result");
  };

  /* ---- intro ---- */
  if (stage === "intro") {
    const answeredCount = paused
      ? paused.answers.filter(a => a !== null && a !== undefined).length
      : 0;

    return (
      <>
        <ScreenHeader
          title={quiz.title}
          subtitle={quiz.subtitle}
          onBack={onExit}
          backLabel="Home"
        />
        <Screen>
          {/* Where you're up to */}
          {!isMock && progress.total > 0 && (
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4">
              <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                <span>Section covered</span>
                <span>{progress.answered} / {progress.total}</span>
              </div>
              <ProgressBar
                pct={progress.coveragePct}
                tone={progress.passed ? "emerald" : progress.started ? "amber" : "slate"}
              />
              {progress.attempts > 0 && (
                <p className={`mt-2 text-sm font-semibold ${
                  progress.passed
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-amber-600 dark:text-amber-400"
                }`}>
                  Best {progress.bestPct}%
                  {progress.passed ? " — at pass standard" : ` — ${passMark}% needed`}
                </p>
              )}
            </div>
          )}

          {isMock && progress.attempts > 0 && (
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  Best score
                </span>
                <span className="text-xl font-black text-slate-900 dark:text-white">
                  {progress.bestPct}%
                </span>
              </div>
              <div className="mt-2">
                <ProgressBar pct={progress.bestPct} tone={progress.passed ? "emerald" : "amber"} />
              </div>
            </div>
          )}

          {/* Resume a paused attempt */}
          {paused && (
            <div className="mt-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 rounded-2xl p-5">
              <div className="flex items-center gap-2.5">
                <Play size={18} className="text-emerald-600 dark:text-emerald-400" />
                <h2 className="font-bold text-slate-900 dark:text-white">Paused attempt</h2>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                You stopped at question {paused.index + 1} of {paused.questions.length},
                with {answeredCount} answered. Saved {timeAgo(paused.savedAt)}.
              </p>
              <div className="mt-4 space-y-2.5">
                <PrimaryButton onClick={resume}>
                  <span className="inline-flex items-center gap-2">
                    <Play size={16} /> Continue where you left off
                  </span>
                </PrimaryButton>
                <button
                  onClick={() => { clearPaused(module.id); setPaused(null); }}
                  className="w-full text-sm font-semibold text-slate-500 dark:text-slate-400 py-2"
                >
                  Discard and start again
                </button>
              </div>
            </div>
          )}

          {/* What this is */}
          {!paused && (
            <>
              <div className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
                <h2 className="font-bold text-slate-900 dark:text-white">
                  {isMock ? "Before you start" : "About this section"}
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex gap-2.5">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    {allQuestions.length} questions
                    {isMock ? ", drawn across all five sections." : " in this section."}
                  </li>
                  <li className="flex gap-2.5">
                    <Star size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    Pass mark {passMark}%.
                  </li>
                  <li className="flex gap-2.5">
                    <Pause size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    You can pause at any point and pick up where you left off.
                  </li>
                  <li className="flex gap-2.5">
                    {isMock
                      ? <Flag size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      : <ChevronLeft size={16} className="text-emerald-500 mt-0.5 shrink-0" />}
                    {isMock
                      ? "Answers are shown at the end, as in the real exam."
                      : "The answer is shown as you go, and you can move back and forward."}
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <PrimaryButton onClick={startFresh}>
                  {progress.attempts > 0 ? "Start again" : "Start"}
                </PrimaryButton>
              </div>
            </>
          )}
        </Screen>
      </>
    );
  }

  /* ---- running ---- */
  if (stage === "running" && session) {
    return (
      <QuizRun
        session={session}
        module={module}
        instantFeedback={!isMock}
        onFinish={finish}
        onPause={handlePause}
        onQuit={() => { setStage("intro"); setSession(null); }}
      />
    );
  }

  /* ---- result ---- */
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

  return null;
}

/* ===========================================================================
   RUNNING
   =========================================================================== */
function QuizRun({ session, module, instantFeedback, onFinish, onPause, onQuit }) {
  const { questions } = session;
  const total = questions.length;

  const [answers, setAnswers] = useState(session.answers);
  const [index, setIndex] = useState(session.index);
  const [elapsed, setElapsed] = useState(session.elapsed);
  const [revealed, setRevealed] = useState(
    instantFeedback && session.answers[session.index] !== null
  );

  const startedAt = useRef(Date.now() - session.elapsed * 1000);
  const finished = useRef(false);

  /* The clock runs while the quiz is on screen. Pausing unmounts this
     component, which stops it — that's the point of the pause. */
  useEffect(() => {
    const t = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startedAt.current) / 1000));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const q = questions[index];
  const picked = answers[index];
  const isLast = index === total - 1;
  const answeredCount = answers.filter(a => a !== null && a !== undefined).length;

  /* Going back to an already-answered question should show its answer again. */
  useEffect(() => {
    setRevealed(instantFeedback && answers[index] !== null && answers[index] !== undefined);
  }, [index, instantFeedback, answers]);

  function choose(optionIndex) {
    if (revealed) return;
    setAnswers(prev => {
      const next = [...prev];
      next[index] = optionIndex;
      return next;
    });
    if (instantFeedback) setRevealed(true);
  }

  const goTo = useCallback((i) => {
    if (i < 0 || i >= total) return;
    setIndex(i);
  }, [total]);

  function handleFinish() {
    if (finished.current) return;
    finished.current = true;
    onFinish({ questions, answers, elapsed });
  }

  function handlePause() {
    onPause({ questions, answers, index, elapsed });
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Top bar. The padding clears the notch and Dynamic Island — the
          previous value was too tight and the row sat under it. */}
      <div className="bg-slate-900 text-white sticky top-0 z-10">
        <div
          className="max-w-2xl mx-auto px-5 pb-3.5"
          style={{ paddingTop: "max(1.75rem, calc(env(safe-area-inset-top) + 1rem))" }}
        >
          <div className="flex items-center justify-between gap-3 mb-3">
            <button
              onClick={onQuit}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-400 py-1"
            >
              <ChevronLeft size={16} /> Exit
            </button>

            <span className="text-sm font-bold">
              {index + 1} <span className="text-slate-500">/ {total}</span>
            </span>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-sm font-mono font-bold text-slate-300">
                <Clock size={14} />
                {formatClock(elapsed)}
              </span>
              <button
                onClick={handlePause}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white"
              >
                <Pause size={14} /> Pause
              </button>
            </div>
          </div>

          <ProgressBar pct={(answeredCount / total) * 100} height="h-1.5" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 py-6 pb-36">
        {q.sectionLabel && module.kind === "mock" && (
          <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            {q.sectionLabel}
          </p>
        )}

        {/* Sign questions carry an image — the sign is the question. */}
        {q.image && (
          <div className="mb-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 flex justify-center">
            <img src={q.image} alt="" className="max-h-36 w-auto object-contain" />
          </div>
        )}

        <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
          {q.q}
        </h2>

        <div className="mt-5 space-y-2.5">
          {q.options.map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            const isPicked = picked === i;
            const isAnswer = i === q.correct;

            let cls = "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800";
            if (revealed && isAnswer) {
              cls = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40";
            } else if (revealed && isPicked) {
              cls = "border-red-400 bg-red-50 dark:bg-red-950/40";
            } else if (isPicked) {
              cls = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40";
            }

            return (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={revealed}
                className={`w-full text-left border rounded-2xl px-4 py-3.5 flex items-start gap-3 transition ${cls}`}
              >
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                  (revealed && isAnswer) || (!revealed && isPicked)
                    ? "bg-emerald-500 text-white"
                    : revealed && isPicked
                      ? "bg-red-500 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300"
                }`}>
                  {revealed && isAnswer ? <Check size={15} />
                    : revealed && isPicked ? <X size={15} />
                    : letter}
                </span>
                <span className="text-sm text-slate-800 dark:text-slate-100 leading-snug pt-0.5">
                  {opt}
                </span>
              </button>
            );
          })}
        </div>

        {revealed && q.explain && (
          <Explanation key={q.qid || index} text={q.explain} />
        )}
      </div>

      {/* Previous / Next, plus Finish once anything has been answered. */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-slate-200 dark:border-slate-800 px-5 pt-3">
        <div
          className="max-w-2xl mx-auto"
          style={{ paddingBottom: "max(0.875rem, env(safe-area-inset-bottom))" }}
        >
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              className="flex-1 flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 disabled:opacity-40 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl transition"
            >
              <ChevronLeft size={18} /> Previous
            </button>

            {isLast ? (
              <button
                onClick={handleFinish}
                disabled={answeredCount === 0}
                className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-900 font-bold py-3 rounded-xl transition"
              >
                <Flag size={16} /> Finish
              </button>
            ) : (
              <button
                onClick={() => goTo(index + 1)}
                className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 rounded-xl transition"
              >
                Next <ChevronRight size={18} />
              </button>
            )}
          </div>

          {/* Finish early, without walking to the last question. */}
          {!isLast && answeredCount > 0 && (
            <button
              onClick={handleFinish}
              className="w-full mt-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-600 py-1.5"
            >
              Finish now · {answeredCount} answered
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ===========================================================================
   RESULT
   =========================================================================== */
function QuizResult({ module, result, onRetry, onExit }) {
  const [reviewing, setReviewing] = useState(false);

  const pct = result.pct ?? Math.round((result.score / result.total) * 100);
  const passMark = result.passMark ?? PASS_MARK;
  const verdict = result.verdict ?? verdictFor(pct, passMark);
  const tone = verdict.status === "pass" ? "emerald"
    : verdict.status === "close" ? "amber" : "red";

  if (reviewing) {
    return (
      <>
        <ScreenHeader
          title="Review answers"
          subtitle={`${result.score} of ${result.total} correct`}
          onBack={() => setReviewing(false)}
          backLabel="Result"
        />
        <Screen>
          <div className="space-y-3">
            {result.log.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl p-4 border ${
                  item.isRight
                    ? "border-emerald-200 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20"
                    : "border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                    item.isRight ? "bg-emerald-500" : "bg-red-500"
                  }`}>
                    {item.isRight
                      ? <Check size={14} className="text-white" />
                      : <X size={14} className="text-white" />}
                  </span>
                  <div className="min-w-0">
                    {item.image && (
                      <img src={item.image} alt="" className="max-h-24 w-auto object-contain mb-2" />
                    )}
                    <p className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                      {item.q}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pl-9 space-y-1 text-sm">
                  {!item.isRight && (
                    <p className="text-red-600 dark:text-red-400">
                      <span className="font-bold">You chose:</span> {item.options[item.picked]}
                    </p>
                  )}
                  <p className="text-emerald-700 dark:text-emerald-400">
                    <span className="font-bold">Answer:</span> {item.options[item.correct]}
                  </p>
                  {item.explain && (
                    <Explanation text={item.explain} inline />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Screen>
      </>
    );
  }

  return (
    <>
      <ScreenHeader title={module.label} subtitle={module.sectionLabel} />
      <Screen>
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center">
          <h2 className={`text-xl font-black tracking-tight ${
            verdict.status === "pass" ? "text-emerald-600 dark:text-emerald-400"
              : verdict.status === "close" ? "text-amber-600 dark:text-amber-400"
              : "text-slate-900 dark:text-white"
          }`}>
            {verdict.title}
          </h2>

          <div className="my-5">
            <ProgressRing pct={pct} size={128} stroke={10} tone={tone} label="Your score" />
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
            {verdict.message}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-slate-100 dark:border-slate-700">
            <Stat label="Correct" value={`${result.score}/${result.total}`} />
            <Stat label="Pass mark" value={`${passMark}%`} />
            <Stat label="Time" value={formatClock(result.elapsed || 0)} />
          </div>
        </div>

        <div className="mt-4 space-y-2.5">
          <PrimaryButton onClick={() => setReviewing(true)}>Review answers</PrimaryButton>
          <SecondaryButton onClick={onRetry}>
            <span className="inline-flex items-center gap-2">
              <RotateCcw size={16} /> Try again
            </span>
          </SecondaryButton>
          <button
            onClick={onExit}
            className="w-full text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-emerald-600 py-2"
          >
            Back to home
          </button>
        </div>
      </Screen>
    </>
  );
}

/* An explanation that collapses when it runs long.

   Most explanations are a sentence or two and show in full. The longer ones
   are clipped to roughly the first three lines with a Read more control, so a
   detailed answer doesn't push the next question off the screen — but the
   detail is still one tap away rather than cut.

   The threshold is on characters rather than a CSS line clamp because the
   control should only appear when there is genuinely more to read; a clamp
   renders the button even when nothing is hidden. */
const EXPLANATION_CLIP = 180;

function Explanation({ text, inline }) {
  const [open, setOpen] = useState(false);
  const long = text.length > EXPLANATION_CLIP;

  // Cut at a word boundary, not mid-word.
  const short = long
    ? text.slice(0, text.lastIndexOf(" ", EXPLANATION_CLIP)).trimEnd() + "…"
    : text;

  const body = (
    <>
      <p className={`leading-relaxed ${
        inline
          ? "text-slate-500 dark:text-slate-400"
          : "text-sm text-slate-700 dark:text-slate-200"
      }`}>
        {open || !long ? text : short}
      </p>

      {long && (
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          className="mt-2 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400"
        >
          {open ? <>Show less <ChevronUp size={14} /></> : <>Read more <ChevronDown size={14} /></>}
        </button>
      )}
    </>
  );

  if (inline) return <div className="pt-1">{body}</div>;

  return (
    <div className="mt-4 bg-slate-100 dark:bg-slate-800 rounded-2xl p-4">
      <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">Why</p>
      {body}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
      <p className="mt-0.5 font-black text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}
