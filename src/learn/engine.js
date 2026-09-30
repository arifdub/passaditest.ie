/*
  ===========================================================================
  INTERACTIVE LEARNING — THE ENGINE

  Everything about progress that isn't drawing: what a learner has done,
  what it's worth, how well they know a unit, and what to bring back.

  THE RECORD
  A book's whole record is a list of short string ids, stored as one
  progress module (see progressStore.replaceIds). That keeps it on the
  existing sync path with no schema change, and makes merging two devices
  a plain union — every id below is written so that a union of two records
  is still a correct record:

    done:<unit>:<activity>                 the activity has been completed
    best:<unit>:<activity>:<pct>           a score; the highest one counts
    xp:<unit>:<key>:<n>                    XP earned once for <key>
    miss:<unit>:<concept>:<time>           a wrong answer on a concept
    fix:<unit>:<concept>:<time>            a later correct answer on it
    ret:<unit>:<time>:<pct>                a retention check or quick review
    seen:<unit>:<time>                     last activity in the unit
    skill:<unit>:<skill>:<pct>             challenge result per skill
    streak:<n>                             a streak of n reached

  Times are minutes since 2020 in base 36 — short, and sort correctly as
  numbers. Old events are pruned so the list stays small.
  ===========================================================================
*/

const EPOCH = Date.UTC(2020, 0, 1);
export const nowStamp = () => Math.floor((Date.now() - EPOCH) / 60000).toString(36);
const stampToMs = (s) => parseInt(s, 36) * 60000 + EPOCH;

/* ---------------------------------------------------------------------------
   Reading the record
   --------------------------------------------------------------------------- */
export function readRecord(ids = []) {
  const r = {
    done: new Set(),
    best: {},        // "unit:activity" -> pct
    xpKeys: {},      // "unit:key" -> n
    miss: {},        // "unit:concept" -> latest ms
    missCount: {},   // "unit:concept" -> count since last fix
    fix: {},         // "unit:concept" -> latest ms
    ret: {},         // unit -> [{ at, pct }]
    seen: {},        // unit -> latest ms
    skill: {},       // "unit:skill" -> best pct
    bestStreak: 0,
  };
  const misses = [];

  for (const id of ids) {
    const p = String(id).split(":");
    switch (p[0]) {
      case "done": r.done.add(`${p[1]}:${p[2]}`); break;
      case "best": {
        const k = `${p[1]}:${p[2]}`;
        r.best[k] = Math.max(r.best[k] || 0, Number(p[3]) || 0);
        break;
      }
      case "xp": r.xpKeys[`${p[1]}:${p[2]}`] = Math.max(r.xpKeys[`${p[1]}:${p[2]}`] || 0, Number(p[3]) || 0); break;
      case "miss": misses.push([`${p[1]}:${p[2]}`, stampToMs(p[3])]); break;
      case "fix": {
        const k = `${p[1]}:${p[2]}`;
        r.fix[k] = Math.max(r.fix[k] || 0, stampToMs(p[3]));
        break;
      }
      case "ret": (r.ret[p[1]] = r.ret[p[1]] || []).push({ at: stampToMs(p[2]), pct: Number(p[3]) || 0 }); break;
      case "seen": r.seen[p[1]] = Math.max(r.seen[p[1]] || 0, stampToMs(p[2])); break;
      case "skill": {
        const k = `${p[1]}:${p[2]}`;
        r.skill[k] = Math.max(r.skill[k] || 0, Number(p[3]) || 0);
        break;
      }
      case "streak": r.bestStreak = Math.max(r.bestStreak, Number(p[1]) || 0); break;
      default: break;
    }
  }

  /* A concept is weak while it has misses newer than its last fix. */
  for (const [k, at] of misses) {
    if (at > (r.fix[k] || 0)) {
      r.miss[k] = Math.max(r.miss[k] || 0, at);
      r.missCount[k] = (r.missCount[k] || 0) + 1;
    }
  }
  return r;
}

export function totalXp(record) {
  return Object.values(record.xpKeys).reduce((a, b) => a + b, 0);
}

/* Levels — a steady climb, named for driver training rather than games. */
const LEVELS = ["Learner", "Observer", "Planner", "Anticipator", "Defensive Driver", "Hazard Expert", "Road Safety Pro"];
export function levelFor(xp) {
  const per = 250;
  const n = Math.floor(xp / per);
  return {
    number: n + 1,
    name: LEVELS[Math.min(n, LEVELS.length - 1)],
    into: xp - n * per,
    per,
  };
}

/* ---------------------------------------------------------------------------
   Unit progress and mastery
   --------------------------------------------------------------------------- */
export function activityStatus(record, unitId, activity) {
  const done = record.done.has(`${unitId}:${activity.id}`);
  const best = record.best[`${unitId}:${activity.id}`];
  return { done, best: best ?? (done && activity.kind === "learn" ? 100 : null) };
}

/* Mastery is a weighted average across every activity, not a single score.
   An activity not yet done counts as 0. A unit is Mastered only when every
   activity is done, overall mastery is 80%+, the challenge is 80%+ and the
   retention check is 70%+ — one good score can't carry it. */
export function unitProgress(record, unit) {
  const content = unit.content;
  if (!content) return { available: false, completion: 0, mastery: 0, state: "soon" };

  let wSum = 0, mSum = 0, doneCount = 0;
  const rows = content.activities.map(a => {
    const st = activityStatus(record, unit.id, a);
    const w = a.weight || 1;
    wSum += w;
    mSum += w * (st.best || 0);
    if (st.done) doneCount++;
    return { activity: a, ...st };
  });

  const completion = Math.round((doneCount / content.activities.length) * 100);
  const mastery = wSum ? Math.round(mSum / wSum) : 0;
  const challenge = record.best[`${unit.id}:challenge`] || 0;
  const retention = record.best[`${unit.id}:retention`] || 0;
  const mastered = doneCount === content.activities.length && mastery >= 80 && challenge >= 80 && retention >= 70;

  const weak = weakConcepts(record, unit);
  const xp = Object.entries(record.xpKeys)
    .filter(([k]) => k.startsWith(`${unit.id}:`))
    .reduce((a, [, v]) => a + v, 0);

  const next = rows.find(r => !r.done)?.activity || null;

  return {
    available: true,
    rows,
    completion,
    mastery,
    mastered,
    state: mastered ? "mastered" : doneCount > 0 ? "progress" : "new",
    weak,
    xp,
    lastSeen: record.seen[unit.id] || null,
    next,
    skills: ["knowledge", "application", "recognition", "retention"].map(s => ({
      id: s, pct: record.skill[`${unit.id}:${s}`] ?? null,
    })),
  };
}

export function weakConcepts(record, unit) {
  const content = unit.content;
  if (!content) return [];
  return Object.keys(record.miss)
    .filter(k => k.startsWith(`${unit.id}:`))
    .map(k => {
      const id = k.slice(unit.id.length + 1);
      return { id, count: record.missCount[k], at: record.miss[k], concept: content.concepts[id] };
    })
    .filter(w => w.concept)
    .sort((a, b) => b.count - a.count || b.at - a.at);
}

export function bookProgress(record, book) {
  const units = book.units.map(u => ({ unit: u, p: unitProgress(record, u) }));
  const n = book.units.length || 1;
  const overall = Math.round(units.reduce((a, x) => a + (x.p.available ? x.p.completion : 0), 0) / n);
  const mastery = Math.round(units.reduce((a, x) => a + (x.p.available ? x.p.mastery : 0), 0) / n);
  return { units, overall, mastery };
}

/* ---------------------------------------------------------------------------
   Badges
   --------------------------------------------------------------------------- */
export function badgesFor(record, book) {
  const out = [];
  for (const u of book.units) {
    const c = u.content;
    if (!c) continue;
    for (const b of c.badges || []) {
      const got = (record.best[`${u.id}:${b.rule.activity}`] || 0) >= b.rule.min;
      out.push({ ...b, unit: u.id, earned: got });
    }
    const p = unitProgress(record, u);
    out.push({ id: `mastered-${u.id}`, icon: "⭐", label: `Unit ${u.id} Mastered`, unit: u.id, earned: p.mastered });
  }
  out.push({ id: "streak-10", icon: "🔥", label: "10 in a Row", earned: record.bestStreak >= 10 });
  return out;
}

/* ---------------------------------------------------------------------------
   Review: what to bring back
   --------------------------------------------------------------------------- */

/* Every question-shaped item in a unit that can be asked on its own — used
   by weak-area review and quick review. Flash cards and orderings qualify;
   the hunt and the learning cards don't. */
export function reviewPool(unit) {
  const c = unit.content;
  if (!c) return [];
  const out = [];
  for (const a of c.activities) {
    if (a.kind !== "items") continue;
    for (const it of a.items) out.push({ ...it, _from: a.id });
  }
  return out;
}

/* A quick review is due two days after the last retention-style check, once
   a unit has been worked through — spaced a little, so it tests memory. */
export function reviewDue(record, book) {
  const due = [];
  for (const u of book.units) {
    if (!u.content) continue;
    const p = unitProgress(record, u);
    if (p.completion < 50) continue;
    const last = (record.ret[u.id] || []).reduce((m, r) => Math.max(m, r.at), 0);
    const since = Date.now() - last;
    if (p.weak.length || since > 2 * 86400000) due.push({ unit: u, weak: p.weak.length, last });
  }
  return due;
}

/* Build a short review: weak concepts first, then a spread of the rest. */
export function buildReview(record, units, size = 6) {
  const picked = [];
  const seen = new Set();
  const take = (it, unitId) => {
    const key = `${unitId}:${it.id}`;
    if (seen.has(key)) return;
    seen.add(key);
    picked.push({ ...it, _unit: unitId });
  };

  for (const u of units) {
    const pool = shuffle(reviewPool(u).filter(it => it.type !== "flash"));
    for (const w of weakConcepts(record, u)) {
      pool.filter(it => it.concept === w.id).slice(0, 2).forEach(it => take(it, u.id));
    }
  }
  const rest = shuffle(units.flatMap(u => reviewPool(u).filter(it => it.type !== "flash").map(it => [it, u.id])));
  for (const [it, uid] of rest) {
    if (picked.length >= size) break;
    take(it, uid);
  }
  return picked.slice(0, Math.max(size, picked.length));
}

export function shuffle(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* ---------------------------------------------------------------------------
   Writing the record
   Returns a new id list; the caller saves it. Kept pure so it's testable.
   --------------------------------------------------------------------------- */
export function applyEvents(ids, events) {
  let set = new Set(ids);
  for (const e of events) set.add(e);
  return prune([...set]);
}

/* Keep the list small: only the best score per activity and skill, the
   latest seen per unit, the last few retention results, and misses/fixes
   that still matter. */
function prune(ids) {
  const keepBest = {}, keepSkill = {}, keepSeen = {}, ret = {}, missBy = {}, fixBy = {};
  const other = [];
  for (const id of ids) {
    const p = id.split(":");
    if (p[0] === "best") {
      const k = `${p[1]}:${p[2]}`;
      if (!keepBest[k] || Number(p[3]) > Number(keepBest[k].split(":")[3])) keepBest[k] = id;
    } else if (p[0] === "skill") {
      const k = `${p[1]}:${p[2]}`;
      if (!keepSkill[k] || Number(p[3]) > Number(keepSkill[k].split(":")[3])) keepSkill[k] = id;
    } else if (p[0] === "seen") {
      if (!keepSeen[p[1]] || parseInt(p[2], 36) > parseInt(keepSeen[p[1]].split(":")[2], 36)) keepSeen[p[1]] = id;
    } else if (p[0] === "ret") {
      (ret[p[1]] = ret[p[1]] || []).push(id);
    } else if (p[0] === "miss") {
      (missBy[`${p[1]}:${p[2]}`] = missBy[`${p[1]}:${p[2]}`] || []).push(id);
    } else if (p[0] === "fix") {
      const k = `${p[1]}:${p[2]}`;
      if (!fixBy[k] || parseInt(p[3], 36) > parseInt(fixBy[k].split(":")[3], 36)) fixBy[k] = id;
    } else if (p[0] === "streak") {
      other.push(id);
    } else {
      other.push(id);
    }
  }
  const byTime = (i) => (a, b) => parseInt(b.split(":")[i], 36) - parseInt(a.split(":")[i], 36);
  const retKept = Object.values(ret).flatMap(list => list.sort(byTime(2)).slice(0, 5));
  const missKept = Object.entries(missBy).flatMap(([k, list]) => {
    const fixAt = fixBy[k] ? parseInt(fixBy[k].split(":")[3], 36) : -1;
    return list.filter(id => parseInt(id.split(":")[3], 36) > fixAt).sort(byTime(3)).slice(0, 5);
  });
  const streaks = other.filter(id => id.startsWith("streak:"));
  const topStreak = streaks.sort((a, b) => Number(b.split(":")[1]) - Number(a.split(":")[1]))[0];
  return [
    ...other.filter(id => !id.startsWith("streak:")),
    ...(topStreak ? [topStreak] : []),
    ...Object.values(keepBest), ...Object.values(keepSkill), ...Object.values(keepSeen),
    ...retKept, ...missKept, ...Object.values(fixBy),
  ];
}
