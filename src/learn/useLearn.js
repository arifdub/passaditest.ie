/*
  Connects the engine to the account-synced progress store. One record per
  book, read from and written to that book's progress module.
*/

import { useCallback, useMemo } from "react";
import { useProgress } from "../progressStore";
import { BOOK_BY_ID } from "./books";
import { readRecord, applyEvents, nowStamp } from "./engine";

/* The run of correct answers in this visit. Deliberately not saved — a
   streak is about now — but the best one reached is (see `streak:` ids). */
let sessionStreak = 0;
export const getStreak = () => sessionStreak;
export const bumpStreak = (correct) => {
  sessionStreak = correct ? sessionStreak + 1 : 0;
  return sessionStreak;
};

export default function useLearn(bookId) {
  const book = BOOK_BY_ID[bookId];
  const { entries, replaceIds } = useProgress();
  const moduleId = book?.moduleId;
  const ids = (moduleId && entries[moduleId]?.completedIds) || [];

  const record = useMemo(() => readRecord(ids), [ids]);

  /* Builds on the latest stored list (not this render's copy), so several
     saves in a row — one per answer — don't overwrite each other. */
  const save = useCallback((events) => {
    if (!moduleId || !events.length) return;
    replaceIds(moduleId, (latest) => applyEvents(latest, events));
  }, [moduleId, replaceIds]);

  return { book, record, save, stamp: nowStamp };
}
