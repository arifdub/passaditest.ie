-- ===========================================================================
-- PassDrivingTest.ie — ADMIN, USER STATUS AND ACCOUNT DELETION
--
-- Run this ONCE in Supabase → SQL Editor, after app-accounts-and-progress.sql.
-- Safe to run again: every statement is idempotent.
--
-- What it adds:
--   profiles.role            'user' | 'admin'
--   profiles.status          'active' | 'pending' | 'blocked'
--   profiles.last_seen_at    when the learner last opened the app
--   profiles.admin_notified  whether the "new registration" email has gone
--   admin_config             app-wide switches (require_approval)
--   is_admin()               used by the policies below
--   admin_set_status, admin_delete_user, admin_set_config,
--   delete_my_account, mark_admin_notified
--
-- arifdub@gmail.com is made admin (now, and automatically if they ever
-- re-register). Nobody can make themselves admin from the app: a trigger
-- resets role and status on any change not made by an admin.
-- ===========================================================================


-- ---------------------------------------------------------------------------
-- 1. NEW COLUMNS
-- ---------------------------------------------------------------------------
alter table public.profiles add column if not exists role text not null default 'user';
alter table public.profiles add column if not exists status text not null default 'active';
alter table public.profiles add column if not exists last_seen_at timestamptz;
alter table public.profiles add column if not exists admin_notified boolean not null default false;

do $$ begin
  alter table public.profiles add constraint profiles_role_chk check (role in ('user', 'admin'));
exception when duplicate_object then null; end $$;
do $$ begin
  alter table public.profiles add constraint profiles_status_chk check (status in ('active', 'pending', 'blocked'));
exception when duplicate_object then null; end $$;

-- Everyone who registered before this script has already been told about.
update public.profiles set admin_notified = true where created_at < now() - interval '1 minute';


-- ---------------------------------------------------------------------------
-- 2. APP-WIDE SETTINGS
-- ---------------------------------------------------------------------------
create table if not exists public.admin_config (
  key        text primary key,
  value      jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.admin_config enable row level security;
insert into public.admin_config (key, value) values ('require_approval', 'false'::jsonb)
  on conflict (key) do nothing;

drop policy if exists "admin_config: read all" on public.admin_config;
create policy "admin_config: read all" on public.admin_config for select using (true);


-- ---------------------------------------------------------------------------
-- 3. WHO IS AN ADMIN
-- ---------------------------------------------------------------------------
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

update public.profiles set role = 'admin', status = 'active'
 where lower(email) = 'arifdub@gmail.com';


-- ---------------------------------------------------------------------------
-- 4. ADMINS CAN SEE EVERYONE'S PROFILE AND PROGRESS
-- ---------------------------------------------------------------------------
drop policy if exists "profiles: admin read" on public.profiles;
create policy "profiles: admin read" on public.profiles for select using (public.is_admin());

drop policy if exists "progress: admin read" on public.progress;
create policy "progress: admin read" on public.progress for select using (public.is_admin());


-- ---------------------------------------------------------------------------
-- 5. NOBODY PROMOTES OR UNBLOCKS THEMSELVES
--    A learner may still update their own name and last_seen_at. Changes run
--    from the SQL editor (no auth.uid()) are left alone.
-- ---------------------------------------------------------------------------
create or replace function public.guard_profile_fields()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is not null and not public.is_admin() then
    if tg_op = 'UPDATE' then
      new.role := old.role;
      new.status := old.status;
      new.admin_notified := old.admin_notified or new.admin_notified;
    else
      new.role := 'user';
      new.status := case when coalesce((select value::text from public.admin_config where key = 'require_approval'), 'false') = 'true'
                         then 'pending' else 'active' end;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists guard_profile_fields on public.profiles;
create trigger guard_profile_fields
  before insert or update on public.profiles
  for each row execute function public.guard_profile_fields();


-- ---------------------------------------------------------------------------
-- 6. NEW SIGN-UPS: role and status set at creation
-- ---------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_admin boolean := lower(new.email) = 'arifdub@gmail.com';
  v_pending boolean := coalesce((select value::text from public.admin_config where key = 'require_approval'), 'false') = 'true';
begin
  insert into public.profiles (id, email, full_name, role, status)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    case when v_admin then 'admin' else 'user' end,
    case when v_admin or not v_pending then 'active' else 'pending' end
  )
  on conflict (id) do nothing;
  return new;
end;
$$;


-- ---------------------------------------------------------------------------
-- 7. ADMIN ACTIONS
-- ---------------------------------------------------------------------------
create or replace function public.admin_set_status(p_user uuid, p_status text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then raise exception 'Admins only'; end if;
  if p_status not in ('active', 'pending', 'blocked') then raise exception 'Bad status'; end if;
  if p_user = auth.uid() then raise exception 'You cannot change your own status'; end if;
  update public.profiles set status = p_status, updated_at = now() where id = p_user;
end;
$$;

create or replace function public.admin_delete_user(p_user uuid)
returns void
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  if not public.is_admin() then raise exception 'Admins only'; end if;
  if p_user = auth.uid() then raise exception 'Use Delete my account for your own account'; end if;
  if exists (select 1 from public.profiles where id = p_user and role = 'admin') then
    raise exception 'Another admin cannot be deleted from the app';
  end if;
  delete from auth.users where id = p_user;   -- cascades to profiles and progress
end;
$$;

create or replace function public.admin_set_config(p_key text, p_value jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then raise exception 'Admins only'; end if;
  insert into public.admin_config (key, value, updated_at) values (p_key, p_value, now())
    on conflict (key) do update set value = excluded.value, updated_at = now();
end;
$$;


-- ---------------------------------------------------------------------------
-- 8. A LEARNER DELETES THEIR OWN ACCOUNT
-- ---------------------------------------------------------------------------
create or replace function public.delete_my_account()
returns void
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  if auth.uid() is null then raise exception 'Not signed in'; end if;
  delete from auth.users where id = auth.uid();   -- cascades to profiles and progress
end;
$$;


-- ---------------------------------------------------------------------------
-- 9. "NEW REGISTRATION" EMAIL — sent once per account
--    The /api/notify-signup function calls this with the new user's token.
--    It returns true only the first time, so the email can't be repeated.
-- ---------------------------------------------------------------------------
create or replace function public.mark_admin_notified()
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare v_done int;
begin
  update public.profiles set admin_notified = true
   where id = auth.uid() and admin_notified = false;
  get diagnostics v_done = row_count;
  return v_done > 0;
end;
$$;


-- ---------------------------------------------------------------------------
-- 10. PERMISSIONS FOR THE APP
-- ---------------------------------------------------------------------------
revoke all on function public.admin_set_status(uuid, text) from public, anon;
revoke all on function public.admin_delete_user(uuid) from public, anon;
revoke all on function public.admin_set_config(text, jsonb) from public, anon;
revoke all on function public.delete_my_account() from public, anon;
revoke all on function public.mark_admin_notified() from public, anon;
grant execute on function public.admin_set_status(uuid, text) to authenticated;
grant execute on function public.admin_delete_user(uuid) to authenticated;
grant execute on function public.admin_set_config(text, jsonb) to authenticated;
grant execute on function public.delete_my_account() to authenticated;
grant execute on function public.mark_admin_notified() to authenticated;
grant execute on function public.is_admin() to authenticated;
