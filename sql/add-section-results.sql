-- ===========================================================================
--  Per-section mock results, and a pass/fail the server doesn't second-guess
--
--  Run this in the Supabase SQL editor. Safe to run twice.
--
--  Two things:
--
--  1. A `last_sections` column, so the section breakdown of the most recent
--     mock syncs between a learner's devices instead of living only on the
--     phone that sat the paper. Without it, signing in on a tablet shows an
--     empty Section readiness panel.
--
--  2. A fix to `record_result`. It worked out `passed` itself, as
--     `pct >= pass_mark`. That is right for a section practice and WRONG for
--     a mock: Stage 1 is marked section by section, so 88% with one section
--     under its mark is a fail. The server would have written passed = true
--     over the app's correct verdict, and since the merge takes
--     `passed OR passed`, the wrong answer would have won.
--
--     The function now accepts the verdict when the client supplies one, and
--     falls back to the old behaviour when it doesn't.
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- 1. The column
-- ---------------------------------------------------------------------------
alter table public.progress
  add column if not exists last_sections jsonb not null default '[]'::jsonb;

-- ---------------------------------------------------------------------------
-- 2. Retire the old function
--
--    The new one takes extra arguments with defaults. Leaving the 4-argument
--    version in place would make a 4-argument call ambiguous, and Postgres
--    raises an error rather than choosing — so it has to go, not just be
--    replaced.
-- ---------------------------------------------------------------------------
drop function if exists public.record_result(text, int, int, int);

-- ---------------------------------------------------------------------------
-- 3. The new one
-- ---------------------------------------------------------------------------
create or replace function public.record_result(
  p_module_id text,
  p_score     int,
  p_total     int,
  p_pass_mark int     default 75,
  p_passed    boolean default null,      -- the caller's verdict, when it has one
  p_sections  jsonb   default null       -- [{ "id": "...", "c": 15, "t": 20 }, ...]
)
returns public.progress
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_pct      int;
  v_passed   boolean;
  v_sections jsonb;
  v_row      public.progress;
begin
  if p_total <= 0 then
    raise exception 'total must be greater than zero';
  end if;

  v_pct := round((p_score::numeric / p_total::numeric) * 100);

  -- The client knows things this function cannot: for a mock, whether every
  -- section reached its own pass mark. When it says, believe it.
  v_passed := coalesce(p_passed, v_pct >= p_pass_mark);

  -- Must be an array. Anything else is ignored rather than stored, so a bad
  -- payload can't wedge the readiness panel.
  v_sections := case
    when p_sections is null then null
    when jsonb_typeof(p_sections) = 'array' then p_sections
    else null
  end;

  insert into public.progress as pr
        (user_id,    module_id,   best_pct, last_pct, last_score, last_total,
         attempts, correct_count, graded_count, passed,   last_sections)
  values (auth.uid(), p_module_id, v_pct,    v_pct,    p_score,    p_total,
          1,        p_score,       p_total,      v_passed, coalesce(v_sections, '[]'::jsonb))
  on conflict (user_id, module_id) do update
    set best_pct      = greatest(pr.best_pct, excluded.best_pct),
        last_pct      = excluded.last_pct,
        last_score    = excluded.last_score,
        last_total    = excluded.last_total,
        attempts      = pr.attempts + 1,
        correct_count = pr.correct_count + excluded.correct_count,
        graded_count  = pr.graded_count + excluded.graded_count,
        passed        = pr.passed or excluded.passed,
        -- Only overwrite when this attempt actually carried a breakdown, so a
        -- section practice doesn't wipe the last mock's readiness data.
        last_sections = case
          when v_sections is null then pr.last_sections
          else excluded.last_sections
        end,
        updated_at    = now()
  returning * into v_row;

  return v_row;
end;
$$;

-- ---------------------------------------------------------------------------
-- 4. Repair mock rows recorded under the old rule
--
--    Any mock marked passed before this file ran was judged on the overall
--    percentage alone, which is not how Stage 1 is marked. There is no stored
--    breakdown to re-judge them against, so rather than assert a verdict that
--    might be wrong in either direction, those flags are cleared. The next
--    attempt sets an honest one.
--
--    Edit the module id list if you add more papers.
-- ---------------------------------------------------------------------------
update public.progress
   set passed = false
 where module_id in ('adi.mock', 'adi.mock.2')
   and passed = true
   and last_sections = '[]'::jsonb;
