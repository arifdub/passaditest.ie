/*
  ===========================================================================
  ADMIN — manage learner accounts

  Reachable from Settings by an account whose profiles.role is 'admin'
  (sql/admin-users.sql makes arifdub@gmail.com the admin). Everything here
  is enforced again in the database: the policies only let an admin read
  other people's rows, and every action is a security-definer function that
  checks is_admin() first.

    - who has registered, newest first, with "new since your last visit"
    - approve / block / unblock / delete
    - each learner's progress: exam sections, mock papers, flashcards and
      Interactive Learning books
    - the "new accounts need approval" switch
  ===========================================================================
*/

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Search, Users, UserCheck, Ban, Trash2, ChevronRight, ShieldCheck, Clock, RefreshCw } from "lucide-react";
import { ScreenHeader, Screen, ProgressBar, Toggle } from "./ui";
import { supabase, HAS_SUPABASE } from "./supabaseClient";
import { useAuth } from "./appAuth";
import { SECTION_BY_ID } from "./adiSections";
import { MOCK_BY_ID, DECK_BY_ID } from "./appStructure";
import { BOOK_BY_ID } from "./learn/books";
import { bookProgress, readRecord } from "./learn/engine";

const SEEN_KEY = "pdt-admin-last-seen";

function readSeen() {
  try { return Number(localStorage.getItem(SEEN_KEY)) || 0; } catch { return 0; }
}
function writeSeen(ms) {
  try { localStorage.setItem(SEEN_KEY, String(ms)); } catch { /* private mode */ }
}

function fmtDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-IE", { day: "numeric", month: "short", year: "numeric" });
}
function ago(iso) {
  if (!iso) return "never";
  const m = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (m < 2) return "just now";
  if (m < 60) return `${m} min ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} h ago`;
  const d = Math.round(h / 24);
  return `${d} day${d === 1 ? "" : "s"} ago`;
}

const STATUS_STYLE = {
  active: "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400",
  pending: "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400",
  blocked: "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400",
};

/* Turn one progress row into something readable. */
function describeRow(row) {
  const id = row.module_id;
  if (SECTION_BY_ID[id]) {
    return { kind: "Exam section", label: SECTION_BY_ID[id].label, pct: row.best_pct, extra: `${row.attempts} attempt${row.attempts === 1 ? "" : "s"}${row.passed ? " · passed" : ""}` };
  }
  if (MOCK_BY_ID[id]) {
    return { kind: "Mock paper", label: MOCK_BY_ID[id].label, pct: row.best_pct, extra: `${row.attempts} attempt${row.attempts === 1 ? "" : "s"}${row.passed ? " · passed" : ""}` };
  }
  if (DECK_BY_ID[id]) {
    const n = (row.completed_ids || []).length;
    return { kind: "Flashcards", label: DECK_BY_ID[id].label, pct: null, extra: `${n} card${n === 1 ? "" : "s"} known` };
  }
  const book = Object.values(BOOK_BY_ID).find(b => b.moduleId === id);
  if (book) {
    const bp = bookProgress(readRecord(row.completed_ids || []), book);
    return { kind: "Interactive Learning", label: `Book ${book.number}: ${book.title}`, pct: bp.overall, extra: "" };
  }
  return { kind: "Other", label: id, pct: row.best_pct || null, extra: "" };
}

export default function AdminScreen({ back }) {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);
  const [requireApproval, setRequireApproval] = useState(false);
  const [lastSeen] = useState(readSeen);

  const load = useCallback(async () => {
    if (!HAS_SUPABASE) { setError("The database isn't connected, so there are no accounts to manage."); setLoading(false); return; }
    setLoading(true);
    setError(null);
    const [{ data, error: err }, cfg] = await Promise.all([
      supabase.from("profiles")
        .select("id, email, full_name, role, status, created_at, last_seen_at")
        .order("created_at", { ascending: false }),
      supabase.from("admin_config").select("value").eq("key", "require_approval").maybeSingle(),
    ]);
    if (err) setError(err.message);
    else setUsers(data || []);
    if (cfg?.data) setRequireApproval(cfg.data.value === true);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);
  /* Leaving the screen counts as having seen everyone on it. */
  useEffect(() => () => writeSeen(Date.now()), []);

  const isNew = (u) => new Date(u.created_at).getTime() > lastSeen;
  const counts = useMemo(() => ({
    all: users.length,
    new: users.filter(isNew).length,
    pending: users.filter(u => u.status === "pending").length,
    blocked: users.filter(u => u.status === "blocked").length,
  }), [users, lastSeen]);

  const shown = users.filter(u => {
    if (filter === "new" && !isNew(u)) return false;
    if (filter === "pending" && u.status !== "pending") return false;
    if (filter === "blocked" && u.status !== "blocked") return false;
    const q = query.trim().toLowerCase();
    return !q || (u.email || "").toLowerCase().includes(q) || (u.full_name || "").toLowerCase().includes(q);
  });

  async function setStatus(id, status) {
    const { error: err } = await supabase.rpc("admin_set_status", { p_user: id, p_status: status });
    if (err) return setError(err.message);
    setUsers(list => list.map(u => (u.id === id ? { ...u, status } : u)));
  }

  async function removeUser(id) {
    const { error: err } = await supabase.rpc("admin_delete_user", { p_user: id });
    if (err) return setError(err.message);
    setUsers(list => list.filter(u => u.id !== id));
    setOpenId(null);
  }

  async function toggleApproval(next) {
    const { error: err } = await supabase.rpc("admin_set_config", { p_key: "require_approval", p_value: next });
    if (err) return setError(err.message);
    setRequireApproval(next);
  }

  const FILTERS = [
    { id: "all", label: "All" },
    { id: "new", label: "New" },
    { id: "pending", label: "Pending" },
    { id: "blocked", label: "Blocked" },
  ];

  return (
    <>
      <ScreenHeader
        title="Admin"
        subtitle="Learner accounts"
        onBack={back}
        backLabel="Settings"
        below={
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[["Accounts", counts.all, Users], ["New", counts.new, Clock], ["Pending", counts.pending, UserCheck]].map(([label, n, Icon]) => (
              <div key={label} className="rounded-2xl bg-white/10 p-3">
                <Icon size={16} className="text-emerald-300" />
                <p className="mt-1 text-2xl font-black tabular-nums">{n}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">{label}</p>
              </div>
            ))}
          </div>
        }
      />
      <Screen>
        {error && (
          <div className="mb-3 rounded-2xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 p-3 text-sm text-red-700 dark:text-red-300">
            {error}
          </div>
        )}

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl">
          <Toggle
            label="New accounts need approval"
            description={requireApproval
              ? "New sign-ups see Book 1 and Section 1 only until you approve them"
              : "New sign-ups get full access straight away"}
            icon={ShieldCheck}
            checked={requireApproval}
            onChange={() => toggleApproval(!requireApproval)}
          />
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3">
          <Search size={16} className="text-slate-400 shrink-0" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search name or email"
            className="flex-1 bg-transparent py-3 text-sm text-slate-900 dark:text-white outline-none"
          />
          <button onClick={load} aria-label="Refresh" className="p-1.5 text-slate-400 hover:text-emerald-500">
            <RefreshCw size={16} />
          </button>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-bold border transition ${
                filter === f.id
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
              }`}
            >
              {f.label} <span className="opacity-60 tabular-nums">{counts[f.id]}</span>
            </button>
          ))}
        </div>

        <div className="mt-3 space-y-2.5">
          {loading && <p className="text-sm text-slate-500 py-6 text-center">Loading accounts…</p>}
          {!loading && !shown.length && <p className="text-sm text-slate-500 py-6 text-center">No accounts here.</p>}
          {shown.map(u => (
            <UserCard
              key={u.id}
              u={u}
              isNew={isNew(u)}
              isSelf={u.id === user?.id}
              open={openId === u.id}
              onToggle={() => setOpenId(openId === u.id ? null : u.id)}
              onStatus={setStatus}
              onDelete={removeUser}
            />
          ))}
        </div>
      </Screen>
    </>
  );
}

function UserCard({ u, isNew, isSelf, open, onToggle, onStatus, onDelete }) {
  const [rows, setRows] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (!open || rows) return;
    supabase.from("progress")
      .select("module_id, best_pct, attempts, passed, completed_ids, updated_at")
      .eq("user_id", u.id)
      .order("updated_at", { ascending: false })
      .then(({ data }) => setRows(data || []));
  }, [open, rows, u.id]);

  const protectedAcct = isSelf || u.role === "admin";
  const details = (rows || []).map(r => ({ ...describeRow(r), at: r.updated_at }));

  return (
    <div className={`rounded-2xl bg-white dark:bg-slate-800 border ${isNew ? "border-emerald-300 dark:border-emerald-800" : "border-slate-200 dark:border-slate-700"}`}>
      <button onClick={onToggle} className="w-full text-left p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-black text-slate-500 dark:text-slate-300 shrink-0">
          {(u.full_name || u.email || "?").trim().charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <p className="font-bold text-slate-900 dark:text-white truncate">{u.full_name || u.email?.split("@")[0]}</p>
            {isNew && <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-emerald-500 text-white">New</span>}
            {u.role === "admin" && <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-slate-900 dark:bg-white text-white dark:text-slate-900">Admin</span>}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{u.email}</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Joined {fmtDate(u.created_at)} · last active {ago(u.last_seen_at)}</p>
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shrink-0 ${STATUS_STYLE[u.status] || STATUS_STYLE.active}`}>
          {u.status}
        </span>
        <ChevronRight size={16} className={`text-slate-300 shrink-0 transition ${open ? "rotate-90" : ""}`} />
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-slate-100 dark:border-slate-700">
          <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">Progress</p>
          {!rows && <p className="mt-2 text-sm text-slate-500">Loading…</p>}
          {rows && !details.length && <p className="mt-2 text-sm text-slate-500">Nothing studied yet (or only on their own device as a guest).</p>}
          <div className="mt-2 space-y-2">
            {details.map((d, i) => (
              <div key={i} className="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-2.5">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-tight">{d.label}</p>
                  {d.pct !== null && <span className="text-sm font-black tabular-nums text-slate-700 dark:text-slate-200 shrink-0">{d.pct}%</span>}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">{d.kind}{d.extra ? ` · ${d.extra}` : ""} · {ago(d.at)}</p>
                {d.pct !== null && <div className="mt-1.5"><ProgressBar pct={d.pct} height="h-1.5" tone={d.pct >= 75 ? "emerald" : "slate"} /></div>}
              </div>
            ))}
          </div>

          {protectedAcct ? (
            <p className="mt-4 text-xs text-slate-400">{isSelf ? "This is your account." : "Admin accounts can't be changed from the app."}</p>
          ) : (
            <div className="mt-4 grid grid-cols-2 gap-2">
              {u.status === "pending" && (
                <button onClick={() => onStatus(u.id, "active")} className="col-span-2 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 text-slate-900 font-bold py-2.5">
                  <UserCheck size={16} /> Approve
                </button>
              )}
              {u.status === "blocked" ? (
                <button onClick={() => onStatus(u.id, "active")} className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold py-2.5">
                  <UserCheck size={16} /> Unblock
                </button>
              ) : (
                <button onClick={() => onStatus(u.id, "blocked")} className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-500 text-amber-600 dark:text-amber-400 font-bold py-2.5">
                  <Ban size={16} /> Block
                </button>
              )}
              {confirmDelete ? (
                <button onClick={() => onDelete(u.id)} className="flex items-center justify-center gap-1.5 rounded-xl bg-red-600 text-white font-bold py-2.5">
                  <Trash2 size={16} /> Tap to confirm
                </button>
              ) : (
                <button onClick={() => setConfirmDelete(true)} className="flex items-center justify-center gap-1.5 rounded-xl border border-red-500 text-red-600 dark:text-red-400 font-bold py-2.5">
                  <Trash2 size={16} /> Delete
                </button>
              )}
              {confirmDelete && (
                <p className="col-span-2 text-xs text-red-600 dark:text-red-400">
                  Deleting removes the login, profile and all synced progress. It can't be undone.{" "}
                  <button onClick={() => setConfirmDelete(false)} className="underline font-semibold">Cancel</button>
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
