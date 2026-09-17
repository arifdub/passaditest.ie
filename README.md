# Everything to push, in one set

Complete bundle — the 1,024-question banks plus this round's landing page work.
Folders mirror your repo. Only `index.html` changed this round; everything else
is carried so you can push it all together.

---

## What changed on the landing page

### 1. Justified text

All body paragraphs and list items are justified, with **hyphenation switched
on**. That second part matters: justifying without hyphens leaves the browser
able to stretch only the spaces, which opens white rivers running down a narrow
column. `hyphens:auto` lets it break long words instead.

**One caveat, stated plainly.** On a phone the reading column is about 42
characters. Justification works well from roughly 60 characters up — below
that even with hyphenation the spacing can look loose. My test browser has no
hyphenation dictionaries installed, so I could not verify how it looks on a
real device; Safari and Chrome on a phone both hyphenate properly, so it will
read better than my screenshots did.

If it looks gappy on yours, this one line in the `<style>` block reverts it on
phones while keeping it on tablets and desktop:

```css
@media(max-width:600px){ p,li,.lede{text-align:left} }
```

Headings, buttons and table cells stay left-aligned throughout — justifying a
two-line heading stretches it into something that reads as a mistake.

### 2. The hero strip is three stats, not four

You were right that it was squeezed. At 390px the fourth forced every label
onto three lines and it stopped reading as headline numbers. The practice
question count moved down to the app section, where it belongs anyway — these
three are facts about the qualification, not about us.

### 3. Icons

21 icons defined once as inline SVG symbols and referenced throughout — on
every section heading, each eligibility card, each test stage, both warning
callouts, and the hero stats. No icon font to download, no extra requests, and
they take the colour of the text beside them.

### 4. Animations

Blocks fade and rise into view as you scroll. Card grids come in from
alternating sides on desktop, staggered so a row arrives in sequence rather
than as a slab.

Two deliberate details:

- **The hidden state is added by the script, not written into the CSS.** If the
  script never runs — JavaScript off, old browser, a crawler — nothing is ever
  hidden and the page renders exactly as before. The common version of this
  effect puts the hidden state in CSS, which means a broken script leaves a
  blank page.
- **`prefers-reduced-motion` is respected.** Anyone who has asked their phone
  to stop animating gets the page with no movement at all.

### 5. The app section, rebuilt

- **Three counters that animate from zero** when the strip scrolls into view —
  1,024+ questions, 455 flashcards, 6 mock papers. The final figures are in the
  HTML, so they are correct before any script runs and correct if it never does.
- **Feature list rebuilt with icons** and a heading line per item, so the text
  sits properly instead of running on.
- **A "No App Store needed" block** explaining it is a progressive web app —
  nothing to download, no listing to find, and how to add it to the home screen
  on iPhone and Android.
- Open the app / Log in.

**On the numbers:** you said 500+ flashcards and 7+ mock tests. The real figures
are **455** and **6**, so that is what the page says. Advertising numbers you
don't have is the kind of thing that gets noticed, and the true ones are good
enough. 455 becomes 500+ with 45 more cards, and the seventh paper needs about
25 more questions in Mechanics and Category B — say the word for either.

---

## Two bugs this turned up

**The slide-in animations created horizontal scroll on phones.** A 26px offset
on a 350px card inside a 390px viewport is 6px of real page width, so the whole
page could be dragged sideways. Fixed by only using sideways entrances above
700px — below that the grids are a single column anyway, where alternating
sides looks arbitrary rather than deliberate.

**"Add to Home Screen" was invisible.** `strong` is globally set to the dark
ink colour, which on the dark app section rendered navy on navy. Every dark
block now re-colours its emphasis. Checked the whole section afterwards: the
lowest contrast ratio is 5.7:1, against the 4.5:1 AA threshold.

---

## Verified

Rendered in a real browser at 390px and 1280px:

```
mobile  390px   page 12,509px   sideways scroll: no   0 console errors
desktop 1280px  page  8,075px   sideways scroll: no   0 console errors

29 icon instances from 21 symbol definitions
36 reveal blocks, all shown after a normal-speed scroll
counters settle on 1,024+ / 455 / 6
contrast on the dark sections: lowest 5.7:1 (AA needs 4.5)
home-screen redirect: 4 of 4 cases pass
JSON-LD valid, 10 FAQs matching 10 on the page
title 52/60, description 154/160 characters
```

---

## Push order

Same as before — the only step that isn't drag-and-drop is that your root
`index.html` currently loads the app and has to move to `app/index.html` first.
On github.com, open it, click the pencil, and change the **filename box** to
`app/index.html`; typing the slash creates the folder.

**After deploying, check `/app` loads.**

---

## Still outstanding

1. **`sql/add-section-results.sql` has still not been run.** Until it is, the
   server records a correctly-failed mock as passed.
2. 45 more flashcards would make 500+ honest.
3. ~25 more Mechanics and Category B questions would give you a seventh mock.
4. The pre-existing 666 questions score 39% against a "pick the longest option"
   strategy — the new 358 are down at 29%. Worth a pass if you want it.
