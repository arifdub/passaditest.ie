# Landing page v2 — where each file goes in GitHub, plus four fixes

Replaces the previous landing batch. If you haven't pushed that one, push this
instead. If you have, this updates it.

---

## 1. Where these go in GitHub

**The zip mirrors your repo exactly.** Unzip it, and each folder maps
one-to-one onto a folder in your repository. Same names, same places.

```
your-repo/
│
├── index.html          ← REPLACE.  Currently loads the app.
│                          Becomes the landing page.
│
├── app/                ← NEW FOLDER. Create it.
│   └── index.html         The app's entry point, moved here.
│
├── vite.config.js      ← ADD or MERGE (see below)
│
├── public/             ← existing folder, add/replace 6 files
│   ├── robots.txt         new
│   ├── sitemap.xml        new
│   ├── manifest.json      replace
│   ├── logo-hero.png      new
│   ├── logo-mark.png      new
│   └── wheel-sm.png       new
│
├── src/                ← existing folder, replace 8 files
│   └── … 8 .jsx/.js files
│
└── sql/                ← not GitHub. Supabase SQL editor.
```

### The one step that isn't drag-and-drop

Your root `index.html` currently loads the app, and the landing page needs that
filename. So it moves rather than being overwritten:

**On github.com**, you can't drag a file between folders. Do this instead:

1. Open your existing root `index.html` on GitHub and click the pencil icon.
2. Change the **filename box** at the top from `index.html` to
   `app/index.html`. Typing the slash creates the folder — that's GitHub's way
   of moving a file.
3. Commit. Your root is now empty of `index.html` and `app/index.html` exists.
4. Now upload this batch's `index.html` to the root, and the rest of the files
   to their folders.

I've included my own `app/index.html`, so if you'd rather skip steps 1–3 you
can just upload mine and delete the old root one. **But check yours first** —
if it has analytics, a font link or a site-verification tag, mine doesn't know
about them. In that case move yours and take only these two changes from mine:

```html
<meta name="robots" content="noindex, follow" />
```
```js
navigator.serviceWorker.register("/sw.js", { scope: "/app/" })
```

### vite.config.js

**If you already have one, don't replace it** — copy just this block in:

```js
build: {
  rollupOptions: {
    input: { landing: "index.html", app: "app/index.html" },
  },
},
```

Yours may have plugins or aliases mine knows nothing about.

### After the push

Vercel builds both pages. **Check `/app` loads before you tell anyone about the
landing page.** No `vercel.json` needed — Vercel serves `/app` from
`dist/app/index.html` automatically.

---

## 2. The header under the Dynamic Island

The page sets `viewport-fit=cover` so the dark header runs edge to edge behind
the status bar, which looks right. The cost is that the bar's contents sit
*under* the Dynamic Island unless they're pushed clear of it.

Fixed with `padding-top: env(safe-area-inset-top)` on the header — the notch
height, which is 0 on desktop and Android so nothing else changes.

Verified by forcing a 59px inset (iPhone 15 Pro) in a real browser:

```
no inset (Android/desktop)   header 63px   logo at  8px   button at  7px   clear
59px inset (iPhone 15 Pro)   header 122px  logo at 67px   button at 66px   clear
```

Anchor links got the same treatment — `scroll-margin-top` now adds the inset,
so tapping a nav link on an iPhone doesn't land with the heading behind the
island.

---

## 3. Apply now button

A green **Click here to apply now →** button at the end of the Apply step,
linking to the RSA guidance page you gave me. Opens in a new tab — someone
halfway through the eight steps shouldn't lose their place, and they need to
come back for steps 3 to 8.

I opened the page to check the link was live, and it gave up two facts worth
adding:

- **Garda vetting takes a minimum of six to eight weeks**, and you can't book
  Stage 1 until it clears. That's the first real bottleneck and nobody
  mentions it. It's now on the vetting step and in the FAQ — with the point
  that the wait is the time to study, which is also the argument for your app.
- **You must declare any convictions on the form.** Failing to disclose can
  delay or refuse the application, which is worse than the conviction would
  have been.

---

## 4. The home-screen icon always opens the app

This needed more than the manifest.

The manifest says `start_url: /app/`, which covers an install made from `/app`.
But someone can add to home screen **while reading the landing page**, and iOS
then captures whatever is in the address bar — `/` — ignoring the manifest
entirely. Their icon would open a marketing page with no way into their
progress.

So the landing page checks how it was launched. If it's running as an installed
app, it redirects to `/app/` before anything paints. Two signals are tested:
`display-mode: standalone` (the standard one) and `navigator.standalone`
(Safari's older iOS-only one — and iOS is exactly the case that needs it).

It's the first thing in `<head>`, before the stylesheet, so there's no flash of
the landing page on every launch. It uses `replace()` rather than `assign()` so
Back doesn't bounce them straight back.

### Getting out to the landing page from inside the app

**The app's logo is now the link**, and it opens in the browser rather than in
the app window. That matters: an installed app has no address bar and no Back
button, so a same-window navigation would strand someone on the landing page
with no way back to their progress.

It carries `?stay=1`, which tells the landing page's redirect to leave them
alone — that redirect exists to make the icon always open the app, and this is
the one case where the landing page was asked for deliberately.

### All four cases, tested in a real browser

```
1. normal browser visit                    → landing page      PASS
2. home-screen launch (iPhone)             → /app/             PASS
3. home-screen launch (Android)            → /app/             PASS
4. logo tapped from inside the app         → landing page      PASS
```

My first attempt at testing this reported a failure on case 2. That turned out
to be my test harness not applying the emulated display mode rather than a bug
in the page — worth saying because I'd rather tell you I chased a false alarm
than quietly present four green ticks.

---

## 5. Checked

```
desktop 1280x900   page 8689px    horizontal overflow: no   console errors: 0
mobile   390x844   page 14129px   horizontal overflow: no   console errors: 0

Dynamic Island    header clears a forced 59px inset
apply button      href correct, target=_blank, rel=noopener, 231x49px
JSON-LD           valid — 10 FAQs, 8 HowTo steps
FAQ consistency   all 10 structured questions appear on the page
title             52 / 60 chars
description      154 / 160 chars
```

---

## 6. Still outstanding

- **`sql/add-section-results.sql` still needs running** in Supabase. Without it
  the server overwrites a correctly-failed mock as passed.
- **Submit the sitemap** in Google Search Console once live.
- **A proper 1200×630 social card** — `og:image` currently points at the
  transparent logo, which works but looks plain when the link is shared.
- **Mock 3** needs 26 more questions.
