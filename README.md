# Search engines — what was there, what was missing, where to submit

4 files. `index.html` to the repo root, the other three into `public`.

---

## What was already in place

The page was built for search from the start:

- Title (52 chars), meta description (154), canonical, robots meta
- Open Graph and Twitter card for link previews
- `WebSite`, `HowTo` and `FAQPage` structured data — the FAQ one is what earns
  expandable answers in Google's results
- `robots.txt` and `sitemap.xml`
- One H1, clean heading order, every image with alt text, `lang="en-IE"`
- Static HTML, 53KB, no JavaScript needed to read it

---

## The gap, and it was the one that mattered for your question

You asked about someone searching **"PassADITest"**. That is a *brand* search,
and brand searches work differently from topic searches.

For "how to become a driving instructor in Ireland", the page was already well
set up. For your brand name, there was **nothing telling Google that
"PassADITest" is an entity and that this domain is it.** No `Organization`
schema at all.

Added:

- **`Organization`** — the name, logo, description, and that it serves Ireland.
- **Four brand aliases** on it: `PassADITest`, `Pass ADI Test`,
  `Pass ADI Test Ireland`, `PassADITest Ireland`. People type it spaced, joined,
  with and without the country. Each variant is now explicitly the same entity.
- **`WebApplication`** for the app itself — free, educational, runs in a
  browser with no app store download, with its feature list. This is what makes
  the app eligible to be described as an app in results rather than as a page.
- `publisher` links tying the WebSite and WebApplication back to the
  Organization, so it reads as one entity rather than three unrelated objects.

**A note on the title.** It is "How to Become a Driving Instructor in Ireland
(2026)" with no brand, because at 52 characters there is no room for
"| PassADITest.ie" without Google truncating it. That is the right trade — the
keyword phrase earns far more traffic than the brand will for a while, and with
`Organization` schema plus `og:site_name` Google generally appends the site name
to the result itself.

---

## AI assistants — ChatGPT, Gemini, Claude, Perplexity

`robots.txt` now names fourteen crawlers explicitly.

The wildcard `User-agent: *  Allow: /` already permitted all of them, so most of
this is making intent unambiguous. **One is not cosmetic:**

> **`Google-Extended` is an opt-in.** Google treats an absent rule for it
> conservatively, so without an explicit `Allow` your content is not eligible
> to be used in AI Overviews or Gemini answers — only in the blue links.

Named: `Google-Extended`, `OAI-SearchBot`, `GPTBot`, `ChatGPT-User`,
`ClaudeBot`, `Claude-Web`, `anthropic-ai`, `PerplexityBot`, `bingbot`,
`Applebot`, `Applebot-Extended`, `FacebookBot`, `CCBot`.

If you ever want the opposite — content kept out of AI answers — change the
relevant `Allow` to `Disallow` in that one file. Nothing else needs touching.

### `public/llms.txt`

A new convention: a plain-language summary of what the site covers, written for
AI assistants that would otherwise have to infer it from the page. It states
the key ADI facts directly — the €800, the six-month and two-year deadlines,
the six-to-eight-week vetting wait, and that every exam section carries its own
pass mark.

It is a courtesy to those systems rather than a ranking device, and nothing
depends on it. But when an assistant does read it, it gets your facts stated
plainly instead of paraphrasing the marketing.

---

## Where to submit — do these in order

### 1. Google Search Console — the important one

1. Go to **search.google.com/search-console** and add a property.
2. Choose **Domain** and enter `passaditest.ie`. It will ask for a DNS TXT
   record — add it wherever your domain is registered. (The URL-prefix option
   is quicker but only covers one protocol and subdomain; Domain covers
   everything.)
3. Once verified: **Sitemaps** → enter `sitemap.xml` → Submit.
4. **URL Inspection** → paste `https://passaditest.ie/` → **Request Indexing**.
   This is the fastest route into the index; without it you wait for a crawl.
5. Check **Rich Results** a week later — the FAQ and HowTo markup should be
   detected there.

First indexing typically takes a few days to two weeks for a new domain.

### 2. Bing Webmaster Tools

**bing.com/webmasters** — it can import directly from Search Console, which
takes about a minute. Worth doing on its own merits, and Bing's index still
feeds several other products.

### 3. ChatGPT, Claude, Perplexity — there is no submission form

None of them accept submissions. They find sites by crawling, which the
`robots.txt` above now explicitly permits, and several of them lean on existing
search indexes. **Getting into Google and Bing is the practical route into AI
answers** — there is no separate door.

What genuinely helps beyond that:

- **Links from sites that already rank.** One mention from an Irish driving
  instructor forum or a training provider is worth more than any amount of
  on-page work.
- **A Google Business Profile**, if you have anything resembling a business
  address. Free, and it creates a strong entity record that ties the brand to
  the domain.
- **Being the clearest source.** Your page states the six-to-eight-week vetting
  wait and the per-section pass mark plainly — two things most competing pages
  omit. That specificity is exactly what gets quoted.

### 4. Set expectations honestly

A brand-new domain does not rank quickly for "how to become a driving
instructor in Ireland" — that is a competitive phrase held by training
providers with years of history. What you can expect sooner:

- **"PassADITest"** and its variants: within weeks of indexing, and the
  Organization schema is what makes that reliable
- **Long-tail phrases** — "ADI stage 1 pass mark each section", "how long does
  Garda vetting take ADI", "ADI theory test cost Ireland": weeks to months
- **The head phrase**: months, and it depends far more on links than on
  anything in these files

---

## After deploying, verify

1. `passaditest.ie/robots.txt`, `/sitemap.xml` and `/llms.txt` all load.
2. Paste the homepage into **search.google.com/test/rich-results** — it should
   report FAQ and HowTo as valid.
3. Paste it into **validator.schema.org** — all five schema types should appear
   with no errors.

Verified here before shipping: JSON-LD parses, all five types present, every
cross-reference resolves, all three files return HTTP 200, one H1, no images
missing alt text, no console errors.
