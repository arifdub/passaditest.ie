# Site icon — why Google shows a globe, and the fix

| File | Goes to | |
|---|---|---|
| `public/favicon.ico` | `public` | **new** |
| `public/favicon-96.png` | `public` | **new** |
| `public/favicon-192.png` | `public` | **new** |
| `public/favicon.png` | `public` | replaces |
| `public/apple-touch-icon.png` | `public` | replaces |
| `public/icon-192.png` | `public` | replaces |
| `public/icon-512.png` | `public` | replaces |
| `public/maskable-icon-512.png` | `public` | replaces |
| `index.html` | repo root | replaces |
| `app/index.html` | `app` | replaces |

---

## 1. The wheel was already there. That wasn't the problem.

The first thing I did was open `public/favicon.png`, expecting the old stacked
logo. It was the wheel. So the icon wasn't missing — something else was stopping
Google using it.

It was the size. **64 × 64.**

Google's rule for the icon it shows beside a search result is that the file must
be a square whose side is **a multiple of 48** — 48, 96, 144, 192. Not "roughly
that size", a multiple of 48. 64 is not one, so the file is skipped and you get
the default globe. It's an easy rule to trip over because 64 × 64 is a perfectly
ordinary favicon size that every browser accepts happily; it's only Google's
search-results crawler that is fussy.

Every icon in this package is 48, 96, 144, 192, 512 or Apple's 180.

## 2. The second thing taxicard.ie has that this site didn't

A **`/favicon.ico` at the root of the domain.**

Google and older browsers try that exact path by convention, whether or not the
page has a link tag pointing anywhere. It costs nothing to have and it's the
belt to the link tag's braces. There's now one there, with 16, 32 and 48 pixel
versions inside the single file.

I kept it to those three deliberately. Every layer in an `.ico` is stored as an
uncompressed bitmap, and this file gets requested on nearly every visit — with
the larger sizes bundled in it came to 152 KB. It's 10 KB now, and the bigger
sizes are served as PNGs instead, which is what modern browsers prefer anyway.

## 3. While I was in there — the mark was half the size it should have been

The wheel artwork is wide: the disc, plus the three speed lines trailing off to
the left. Squeezing a wide image into a square canvas means letterboxing it, and
the old icons were letterboxed — the artwork filled about **58% of the square's
height**, with empty space above and below.

At a 16-pixel browser tab, that's nine pixels of actual logo.

So the icons are now cropped tight to the disc and the tick, dropping the speed
lines. The mark fills the frame, which roughly doubles how large it reads at
every size. The speed lines are lost, but at favicon scale they were three grey
smudges; nobody was reading them as motion.

I checked the crop at 16, 32 and 48 pixels on both a white and a dark tab strip
before committing to it, rather than judging it at full size where everything
looks fine.

## 4. Home-screen icons

`apple-touch-icon`, `icon-192`, `icon-512` and the maskable icon are rebuilt from
the same tight crop on a **white tile** — the same white your installed icon
already has, so nothing on anyone's home screen changes character, the wheel just
gets bigger.

The maskable one has more padding than the others on purpose: Android crops that
icon to a circle covering about 80% of the width, and anything outside gets cut.
I rendered the crop and checked the wheel survives it with room to spare.

## 5. What I checked

```
every href in both pages resolves            200, correct content-type
every rel="icon" file is square              yes
every rel="icon" side is a multiple of 48    48 / 96 / 192
sizes="" attribute matches the actual file   yes, all four
/favicon.ico present at the domain root      yes
manifest icons match their declared sizes    yes
maskable icon survives the 80% circle crop   yes
landing page still renders, no h-scroll      yes
```

Loaded in a real browser rather than read off the markup.

File sizes came down at the same time — the tiles were storing full 24-bit
colour for what is a flat graphic. `icon-512` went 189 KB → 67 KB with no visible
difference; I compared them side by side before keeping it.

---

## 6. Now the part you'll want to know about: it will not change tomorrow

**Google refreshes favicons on its own schedule, and it is slow.** Typically days,
sometimes a few weeks. There is no "recrawl my favicon" button, and Search
Console will keep showing the globe until it happens.

What you can do to move it along:

1. Push and let Vercel deploy. Then open `https://passaditest.ie/favicon.ico`
   directly in a browser — if the wheel appears, the file is live and the job is
   done on your side.
2. In Search Console, use **URL Inspection** on `https://passaditest.ie/` and
   click **Request Indexing**. The favicon is picked up when the homepage is
   recrawled, so this is the lever that actually exists.
3. Then leave it. Re-requesting indexing repeatedly doesn't speed it up.

Your own browser tab will update much sooner, though browsers cache favicons
aggressively too — a hard reload, or a private window, shows you the truth.

One thing worth knowing: Google takes the favicon from the **homepage** of the
domain, not from whichever page happens to rank. That's why both `index.html`
and `app/index.html` carry the same icon set — so there's no version of the
question where it finds the wrong one.
