# Upload checklist — everything, from scratch

You haven't pushed anything yet, so this is the full set. 18 files.

Only two destinations matter: **`src`** and **`public`**. The SQL file never
goes to GitHub.

---

## 1. Fourteen files → `src`

Repo root → `src` folder → **Add file → Upload files** → drag all fourteen in
at once → **Commit changes**.

GitHub will warn that some already exist. That's expected — they're being
replaced.

| File | What it is |
|---|---|
| `App.jsx` | Navigation, tab bar, swipe-back, signed-in gate. **Replaces your existing App.jsx** |
| `AuthScreen.jsx` | Login, sign-up, "Skip for now" guest entry |
| `appAuth.jsx` | Accounts, sessions, guest mode, subscription flag |
| `progressStore.jsx` | Records results, works out progress bars, syncs to Supabase |
| `appStructure.js` | The app's whole shape — sections, modules, pass marks |
| `contentSources.js` | Which data file feeds which module |
| `screens.jsx` | Home, path, section, learning, progress, profile |
| `QuizPlayer.jsx` | Practice MCQs and timed mock tests, result screen |
| `FlashcardPlayer.jsx` | All flashcard decks — swipe, 3D flip, red back face |
| `ui.jsx` | Logo, progress bars, rings, tiles, buttons |
| `usePwaInstall.js` | Detects Android vs iPhone for the install card |
| `supabaseClient.js` | Database connection |
| `rulesFlashcardsData.js` | The 153 Rules of the Road cards, pulled out of App.jsx |
| `rulesQuestions.js` | Those 153 cards turned into MCQs |
| `adiStageOneData.js` | 72 ADI Stage 1 questions, 6 sections |
| `drivingTheoryData.js` | 56 category B theory questions, 7 topics |

## 2. One file → `public`

`logo.png` → repo root → `public` folder → upload.

Not `src`. The app loads it from `/logo.png`, which only works from `public`.

## 3. One file → Supabase, not GitHub

`app-accounts-and-progress.sql` → supabase.com → your project → **SQL Editor**
→ **New query** → paste the whole file → **Run**.

You want "Success. No rows returned."

Then **Authentication → Sign In / Providers**:
- Enable **Email**
- Turn **Confirm email** OFF — Supabase's built-in mail is rate-limited and
  often never arrives, which is why sign-up appeared broken earlier

---

## Before you commit — check `package.json`

Open it in the repo root. The `dependencies` list must include all four:

```
"react"
"react-dom"
"lucide-react"
"@supabase/supabase-js"
```

The copy you sent me was missing `@supabase/supabase-js`. If yours still is,
edit the file and add it above the `lucide-react` line, keeping the commas
tidy:

```
"@supabase/supabase-js": "^2.45.0",
```

Without it the build fails.

## Also check `src` already contains these four

These are yours, not mine, and the app imports all of them:

- `roadSignsData.js` — if it's sitting at the repo root instead of in `src`,
  move it
- `adiTheoryPracticeData.js`
- `adiFlashcardsData.js`
- `main.jsx`

And `public/signs/` should still hold the 199 sign images.

---

## After it deploys

1. Watch the Vercel deployment. Green means it built.
2. Open passdrivingtest.ie — you should land on the login screen.
3. Sign up with your own email.
4. ADI → Theory Test → Practice MCQs → finish one.
5. Supabase → **Table Editor → progress**. Your score should be a row there.

That last step is the one worth doing. It confirms progress will follow people
between devices rather than living only in one browser.

If the build fails, copy the last few red lines from the Vercel log and send
them. It's almost always `package.json` or a missing file from the list above.

---

## What you'll see

- Logo centred at the top, two buttons: **Driving & Theory Test** and **ADI Test**
- Guest entry via "Skip for now" — progress saves locally and merges into an
  account if they sign up later
- Subscription reads **Active** for everyone, nothing charged
- Flashcards swipe left and right, tap to flip, red back face
- Install-to-home-screen card in Profile
- Pass marks: 88% theory, 75% ADI. Verdicts are Passed / Almost there / Keep
  practising — never "failed"

## What's still empty

ADI Practical (Stage 2), ADI Instructability (Stage 3), and the practical
driving test MCQs. They show as "Coming soon" rather than opening empty. All
four workbooks you sent cover Stage 1 only.

## One decision you haven't made

This replaces the site entirely. Visitors hit a login screen, and the lesson
booking page and admin dashboard disappear — your old `App.jsx` is the only
place they exist. It stays in your GitHub history, so nothing is lost, but it
won't be live.

If booking brings in customers, tell me and I'll put the app behind `/app` and
leave the public site intact. That's a small change now and a much bigger one
once people are using it.
