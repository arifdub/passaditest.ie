# Everything to push, in one set

This is the complete bundle. It carries every batch since the exam-matching
work, so **you don't need any of the earlier zips** — push this one and you're
current.

The folders mirror your repo exactly.

---

## What goes where

```
your-repo/
│
├── index.html          REPLACE   ← currently loads the app; becomes the landing page
├── vite.config.js      ADD or MERGE (see below)
│
├── app/                NEW FOLDER
│   └── index.html         the app's entry point, moved here
│
├── public/             6 files
│   ├── robots.txt         new
│   ├── sitemap.xml        new
│   ├── manifest.json      replace — start_url now /app/
│   ├── logo-hero.png      new — used for link previews only
│   ├── logo-mark.png      new
│   └── wheel-sm.png       new — header mark
│
├── src/                9 files
│   ├── textSize.jsx       NEW FILE — the reading-size preference
│   ├── screens.jsx        Settings screen, Mock Test tab, home screen
│   ├── App.jsx            tabs, routes, providers
│   ├── ui.jsx             Toggle, DangerButton, SettingsGroup, FullScreen
│   ├── QuizPlayer.jsx     countdown, per-section grading, scaled text
│   ├── FlashcardPlayer.jsx
│   ├── progressStore.jsx
│   ├── adiSections.js
│   └── appStructure.js
│
└── sql/                NOT GitHub → Supabase SQL editor
    └── add-section-results.sql
```

### The one step that isn't drag-and-drop

Your root `index.html` currently loads the app, and the landing page needs that
filename. On github.com you can't drag a file between folders, so:

1. Open your existing root `index.html` and click the pencil icon.
2. Change the **filename box** from `index.html` to `app/index.html`. Typing
   the slash creates the folder — that's how GitHub moves a file.
3. Commit.
4. Now upload this bundle's `index.html` to the root and the rest to their
   folders.

I've included my own `app/index.html`, so you can skip 1–3 and just delete the
old root one instead. **Check yours first though** — if it has analytics, a
font link or a verification tag, mine doesn't know about them. In that case
move yours and take only these two changes:

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

### After deploying

**Check `/app` loads before anything else.** That's the one thing that could go
wrong with this push.

---

## This round's two changes

### The hero logo is gone

It was the second time the brand appeared within 160px, and it was pushing the
headline — the thing that tells a visitor from Google whether they're in the
right place — most of the way down the first screen.

```
                    before      after
H1 lands at          273px       127px
CTA buttons at       648px       502px
stats row at         878px       732px   ← now above the fold too
```

On a 390px phone the whole hero now fits one screen: headline, both buttons,
and the four stats. Before, the stats were below the fold.

There's an SEO benefit as well. With the image gone, the H1 becomes the largest
element on first paint — and that's what Google measures as Largest Contentful
Paint. Text renders with the page; an image needs a second request. First view
is now **53KB over 2 requests**, down from 82KB over 3.

`logo-hero.png` is still published — it's the `og:image` used when someone
shares the link.

### The header wheel is 10% bigger

30px → 33px. I nudged only the wheel, not the wordmark beside it; they were set
to match, and moving both would have changed the balance rather than the size.

I also regenerated `wheel-sm.png` at 108px instead of 72. At 33px on a 3×
iPhone screen the browser wants ~99px of real pixels, and 72 would have gone
soft. It's 4.8KB.

---

## Everything else in this bundle

Carried from the previous batches, in case you're pushing them all at once:

- **Mock tests match the real exam** — 100 questions, 20 per section, a
  90-minute countdown that auto-submits, and a result graded section by section
  against each section's own pass mark.
- **Mock Test tab** replacing the dead Learn tab, with a readiness breakdown
  pooled across every paper you've sat.
- **Flashcard screen fills the display** rather than leaving dead space.
- **Landing page** at `/` with the full ADI process, an Apply now button, and
  the Dynamic Island fix.
- **Installed app always opens `/app`**, with the app's logo as the way back
  out to the public site.
- **Settings tab** — dark-mode switch, red reset with a proper warning, and
  four reading sizes.

---

## Checked, after this round's changes

```
mobile  390x844   H1 127px · CTA 502px · stats 732px — all above the fold
desktop 1280x900  H1 127px · CTA 362px · stats 497px
                  horizontal overflow: no    console errors: 0

wheel rendered at 33px, source 108px — sharp at 3x
hero image removed, first view 53KB over 2 requests

home-screen redirect   4/4 cases pass
JSON-LD                valid — 10 FAQs, 8 HowTo steps
title / description    52/60 and 154/160 chars
apply link             present, opens in a new tab
links into the app     9
```

---

## After the push

1. **Run `sql/add-section-results.sql`** in the Supabase SQL editor. It still
   hasn't been run, and without it the server records a correctly-failed mock
   as passed.
2. Check `/app` loads.
3. Submit the sitemap in Google Search Console.

Still on the list whenever you want them: **26 more questions for Mock 3**, and
a proper 1200×630 social card so shared links look right.
