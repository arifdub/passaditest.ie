# Landing page at `/`, app at `/app`

**Read section 1 before you push.** This batch moves a file rather than only
adding files, and getting that step wrong takes the app offline.

| File | Goes to |
|---|---|
| `index.html` | **repo root** — the new landing page |
| `app/index.html` | **new `app/` folder** — see section 1 |
| `vite.config.js` | repo root — see section 1 |
| `public/robots.txt`, `public/sitemap.xml` | `public` |
| `public/manifest.json` | `public` — start_url moved to `/app/` |
| `public/logo-hero.png`, `logo-mark.png`, `wheel-sm.png` | `public` |
| `src/screens.jsx` + 7 others | `src` — carried from previous batches |
| `sql/add-section-results.sql` | **Supabase SQL editor** — from the last batch, still needs running |

---

## 1. The move — do this first

Right now your repo root has an `index.html` that loads the React app. It has
to move so the landing page can take that address.

```
BEFORE                        AFTER
index.html   ← the app        index.html      ← the landing page (new)
                              app/index.html  ← the app (moved)
```

**Step by step:**

1. Create a folder called `app` at the repo root.
2. **Move** your existing root `index.html` into it → `app/index.html`.
3. Copy this batch's `index.html` into the root.
4. Copy `vite.config.js` into the root — **but read the note below first.**

I've included my own `app/index.html`, and it should work as-is. But yours may
have things mine doesn't know about — analytics, a font, a verification tag. If
yours has anything beyond the standard Vite boilerplate, **move yours and take
only these two changes from mine**:

```html
<!-- add, so the app doesn't compete with the landing page in search -->
<meta name="robots" content="noindex, follow" />
```
```js
// change, so the service worker governs /app only
navigator.serviceWorker.register("/sw.js", { scope: "/app/" })
```

Also check the script tag is `src="/src/main.jsx"` with the **leading slash**. A
relative `./src/main.jsx` resolves differently at `/app` than at `/app/` and
will 404 on one of them.

### About `vite.config.js`

**If you already have one, don't replace it.** Copy just the `build` block into
yours:

```js
build: {
  rollupOptions: {
    input: { landing: "index.html", app: "app/index.html" },
  },
},
```

Yours may have plugins or aliases mine knows nothing about, and overwriting it
would drop them.

No `vercel.json` needed. Vercel serves `/app` from `dist/app/index.html` the
same way it serves `/` from `dist/index.html`. Your app has no client-side
router — navigation is React state — so there are no deep links to rewrite.

**After deploying, check `/app` loads before you tell anyone about the landing
page.**

---

## 2. What's on the page

The whole ADI process, written for someone who has just typed "how to become a
driving instructor in Ireland" into Google and knows nothing yet.

- **Eligibility** — six requirement cards. The two-year full-licence rule is
  given its own card because it's the one that most often means "not yet".
- **The process** — all eight steps in order, as a numbered timeline, with the
  three test stages highlighted and priced.
- **The deadline nobody mentions** — six months between stages, two years
  overall. Called out in a box of its own, because missing it means starting
  and paying again.
- **The three tests in detail** — format, duration, what's assessed.
- **What it costs** — a table totalling **€800** for a clean run, plus the
  trainee licence and the two-yearly renewal.
- **The app** — what it does and why per-section marking matters.
- **Ten FAQs** — the actual questions people search for.

### The numbers, and where each came from

Everything on the page is from official sources:

| Fact | Source |
|---|---|
| Stage 1 €150, ID rules, booking | Driver theory test service |
| Stage 2 €200, 60–100 minutes | RSA |
| Stage 3 €200, two 30-minute phases, results in 10 working days | RSA |
| Trainee licence €50, 6 months, sponsor, 20% supervision, 20 hours | RSA |
| Registration €250, renewal €250 every 2 years, check test | RSA |
| Six months between stages, two years overall | RSA |
| Eligibility, Garda vetting, tax clearance | RSA |
| Insurance certificate from 9 March 2026 | RSA |

**One thing I would not state as fact:** the individual section pass marks. The
RSA doesn't publish them, so the FAQ says exactly that and gives the training
providers' figures as a range rather than as gospel. Putting invented precision
on a page that ranks is how you end up quoted and wrong.

The footer says the page is independent of the RSA and dates the review to
September 2026, because fees change and an undated page ages badly.

---

## 3. Why it's built the way it is

**One file, no framework, no build step.** The page is 41KB of HTML with the
CSS inline and one small script. First view is **82KB over 3 requests with zero
bytes of JavaScript needed to read it.** Someone on 4G has it readable almost
immediately — which matters because page speed is a ranking factor and, more to
the point, people leave.

**The app is `noindex`.** A screen behind a login has nothing to rank, and
letting it get indexed means two of your own pages competing for the same
searches, with the worse one sometimes winning.

**`robots.txt` deliberately does NOT block `/app`.** This looks wrong and
isn't. Disallow and noindex cancel each other out: a crawler blocked from
fetching the page never sees the noindex tag, and Google will still list a
blocked URL if something links to it — which the landing page does, nine times.
You'd get a bare URL in the results with no description. Allowing the crawl is
what lets the noindex actually be obeyed.

**Structured data.** Three JSON-LD blocks: `FAQPage`, `HowTo`, `WebSite`. The
FAQ one is the valuable one — it's what earns expandable answers directly in
Google's results. Every answer in it is a copy of what a human reads on the
page; Google penalises structured data that says something the page doesn't, so
**if you edit a question, edit both copies.**

**Nine routes into the app**: header button, two hero buttons, the Stage 1 step,
the promo section, the final CTA, three footer links, and a sticky bar on
mobile.

---

## 4. Things I found and fixed while building it

**Your logo was 665KB.** On the page that's meant to rank, that alone would
have hurt Core Video Vitals more than everything else combined. Resized and
quantised to **31KB** — 5% of the size, and I compared them side by side to
confirm no visible loss. The original stays untouched for the app.

**The header logo was unreadable.** Your logo is a wordmark *under* a wheel;
shrink that to a 34px header bar and the words become a smudge. The header now
uses the wheel alone with the name in live text beside it — crisp at any size,
and 3KB instead of 10.

**The hero logo pushed the H1 below the fold.** At 300px it filled the entire
first screen on a phone, so someone arriving from a Google result saw a logo and
had to scroll to find out if they were in the right place. Now 190px, with the
headline and both buttons above the fold on a 390px screen.

**The sticky mobile button sat an inch from an identical one.** It now slides
up only once the hero's button has scrolled away.

**The title and description were both too long** — 91 and 225 characters, so
Google would have truncated both mid-phrase. Now 52 and 154.

**Anchor links landed under the header.** Fixed with `scroll-margin-top`.

**Fourteen mobile tap targets were under 40px**, mostly footer links at 16px
with 8px gaps — small enough to hit the wrong one. Three remain, all inline
links inside sentences, which is the correct exception.

---

## 5. Checked

Rendered in a real browser at 390px and 1280px, not eyeballed in source:

```
desktop 1280x900   page 8317px   horizontal overflow: no   console errors: 0
mobile   390x844   page 13538px  horizontal overflow: no   console errors: 0

JSON-LD          3 blocks, valid, 10 FAQs + 8 HowTo steps in order
FAQ consistency  every structured-data question appears on the page
anchors          all 4 nav links resolve and settle clear of the header
title            52 / 60 chars
description     154 / 160 chars
first view       82KB, 3 requests, 0 bytes of JavaScript
```

---

## 6. Still outstanding

- **`sql/add-section-results.sql` from the last batch still needs running** in
  Supabase. Without it the server overwrites a correctly-failed mock as passed.
- **Update `sitemap.xml`'s `lastmod`** when you change the page's content — but
  not on every deploy, or Google learns to ignore it.
- **Submit the sitemap** in Google Search Console once it's live, and request
  indexing on `/` to speed up the first crawl.
- **`og:image` points at `/logo-hero.png`**, which is a transparent PNG. It'll
  work, but a proper 1200×630 social card with the headline on it would look far
  better when someone shares the link. Say the word.
- **Mock 3** still needs 26 more questions.
