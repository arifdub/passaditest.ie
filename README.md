# Green paper in the app too

**1 file** → `app/index.html`

That is the whole change. No `src` file is touched.

---

## Why it is one file and not 57 edits

The app paints its light surfaces with Tailwind utilities — **57 uses of
`bg-white`**, 45 of `border-slate-200`, and so on, each paired with a `dark:`
variant. Editing them individually would mean touching every component, and
the failure mode is silent: one missed class leaves a white card sitting on a
sage page and nobody notices until it ships.

Instead, a `<style>` block in `app/index.html` redefines what those utilities
paint in light mode. One place, and reversible by deleting the block.

**It wins without `!important`.** `html:not(.dark) .bg-white` has specificity
(0,2,1) against Tailwind's own `.bg-white` at (0,1,0). Higher specificity wins
regardless of load order — which matters, because Tailwind's CSS is injected by
the JS bundle after this file's `<head>` has already parsed.

**Dark mode is untouched.** Every rule is gated on `:not(.dark)`, and dark mode
works by adding that class to `<html>`. I verified this by toggling the class in
a browser: with `.dark` on, every surface reverted to the values Tailwind
supplies, exactly as before.

---

## The surfaces, same values as the landing page

```
page            #eaf1e4    bg-slate-50   and the body behind it
cards           #f4f8f0    bg-white
secondary fill  #e1eada    bg-slate-100  explanation boxes, letter chips
borders         #d3ddcb    border-slate-200
progress track  #d3ddcb    bg-slate-200
```

Tailwind's `emerald-50` and `red-50` are mints and pinks mixed from white; on a
sage ground they read as a different material. Remixed from the paper colour so
the correct/wrong answer panels belong to the same page.

The dark header, the dark home-screen banner and the red flashcard back are all
explicit `slate-900` / `red-600` and are left alone — they are the app's dark
furniture and they frame the paper well.

---

## The part that needed measuring

Slate greys were chosen against `#ffffff`. A tinted background is darker, so
**every marginal grey drops below the 4.5:1 AA threshold.** `text-slate-500`
goes from 4.6:1 on white to about 3.9:1 on sage — a real regression, not a
cosmetic one.

All four text weights are re-mixed toward the paper's hue and darkened until
they pass. Measured against all three surfaces, since a card is lighter than
the page and a grey that clears one can fail the other:

```
                  page   card   chip
slate-400 label    4.9    5.3    4.6
slate-500 muted    5.5    5.9    5.2
slate-700 body     9.6   10.3    8.9
emerald accent     5.7    6.2    5.4
```

My first attempt at the label grey passed on the page and **failed at 4.2:1 on
a card** — caught by testing both rather than one.

---

## Check after deploying

Open the app with dark mode **off** — Settings → Dark mode toggle off. The
question screens, flashcards, home and progress screens should all be on the
same sage paper as the landing page.

Then turn dark mode **on** and confirm it looks exactly as it did before. That
is the one thing worth eyeballing, since it is what the `:not(.dark)` gating
protects.
