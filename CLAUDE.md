# Agora website: project brief

## What this is
The website for **Agora**, a weekly reading and discussion society at Princeton University, founded by Holden Demain and Ammar Omar. Each Sunday afternoon: open with the news → a member presents a reading everyone did beforehand (~90 min) and gives their take → open discussion over good food. The point is cross-field conversation: students locked into one discipline get an outlet to talk about what's happening in others.

Audience: Princeton undergraduates first (recruit them and keep them informed). Faculty, departments and USG/ODUS are secondary readers.

## Hard rules (from the constitution: `src/content/constitution.md`)
- Every page must state that **Agora is open to all Princeton University students** (Art. VIII §4). The footer and `site.openToAll` handle this; don't remove them.
- The reading schedule must stay public (Art. VIII §3), at `/readings`.
- Agora takes **no institutional position** on political, religious or ideological questions (Art. V §6). Site copy must stay neutral.
- No dues, no application, readings free. Never imply otherwise.
- Don't use Princeton's shield or logo, or imply that the site is an official University page.
- The constitution text must match the ratified PDF word for word. Edit only when an amendment is adopted.

## Stack
- Astro 7, static output, no JS framework. Run `npm run dev` to preview locally and `npm run build` to build into `dist/`.
- Fonts are self-hosted via @fontsource: **Libre Caslon Display** (`--display`) for large type only: the hero word, page titles, the nav wordmark and constitution article headings. **Libre Caslon Text** (`--text`) is for everything else, in 400, 400 italic and 700 only. The user picked Caslon (2026-11-22) from a comparison with Schibsted Grotesk, Archivo, Newsreader, Jost and Literata; previews are in `screenshots/fonts/`.
- **Hosting:** GitHub Pages, from the public repo `Mmarz72/agora`, live at https://mmarz72.github.io/agora/ (published 2026-11-22). `.github/workflows/deploy.yml` builds and deploys on every push to `main`, every Monday and on demand. GitHub pauses scheduled runs in repos with no activity for 60 days, so re-enable it in the Actions tab if needed.
- **Base path:** the site is served under `/agora`. Always write internal links and asset paths with `url('/path')` from `src/site.ts`, never a bare `/path`. If Agora moves to its own domain, change `site` and drop `base` in `astro.config.mjs`.

## Where content lives (edit these, not the pages)
- `src/site.ts`: mailing-list URL, email, meeting time and place, `draft` banner flag, founding year, nav.
- `src/data/readings.ts`: the schedule. Empty until the first schedule is approved; the file shows the format.
- `src/data/board.ts`: the officers. An empty `name` shows "To be announced".
- `src/content/constitution.md`: the constitution.

## Design direction (draft 2, 2026-11-21)
Draft 1 (cream, serif, terracotta, pottery drawing, lots of text) was rejected as "very Claude-generated" and too wordy. The user's reference is tiger-cm.com: big letters over an understated background photo, and a club that doesn't over-market itself.
- **Design plugins (installed user-wide 2026-11-24):** use **Impeccable** for critique, audit and polish passes on this site. The **Taste** skill and **scroll-craft** suit flashier product sites and don't fit this brief. Don't let either change the fonts, palette or minimal home page below. **emil-design-eng** (`.agents/skills/`, added 2026-11-24) covers interaction details: press feedback, easing, hover only on pointer devices. First Impeccable polish pass done 2026-11-24.
- **Load the `frontend-design` skill (.claude/skills/) before any design work.** Avoid the defaults it lists: cream with serif and terracotta, ALL-CAPS eyebrow labels, one italic accent word in headlines, 01/02 numbering, middle-dot meta strings, a → on buttons, big-number stat rows.
- **Home stays minimal:** a full-screen darkened photo, "Agora" set huge, one line, one button; below it, two sentences and the next reading. Nothing else. Don't move constitution content onto the home page.
- **Palette:** `--paper #fff`, `--shade #22282e` (text and dark areas), `--stone #6a7076` (secondary text), `--rule #e3e4e5`, and **Princeton orange `--orange #e77500`** as the one accent. The user asked for orange because black and white alone didn't feel like Princeton. Orange appears on buttons (with slate text), link underlines, the current-page nav underline and the top rule of each page's main list. Never use it for text on white (contrast too low).
- **The one bold element** is the giant wordmark over the photo. Everything else is quiet, left-aligned, sentence case, with plain lists and hairline rules only where they separate rows.
- **Keep copy short.** The user dislikes walls of text.
- **Hero photo:** `public/images/nassau-*.jpg` plus `.avif` copies at the same widths (about half the weight; browsers that support AVIF load those). When the photo changes, replace both formats, or AVIF browsers keep showing the old one. Nassau Hall at dusk by Rohit Hirway, CC BY-SA 3.0 (credited in the footer; keep the credit while the photo is used). It's a stand-in chosen by the user. Plan: replace it later, possibly with a logo that ties into the discussion theme. Shade it only where text sits: a band under the nav (deeper on phones, where the nav wraps), a soft pool on `.hero__text::before` that follows the tagline (tall, with an eased fall-off, so it leaves no edge across the sky), and a fall-off behind the wordmark. Don't go back to a full-frame dark overlay, which crushed the building and still left the tagline under 4.5:1 over the sky. Re-measure contrast on the rendered page after any change. Keep `.hero__text` free of `z-index`, or the pool paints over the wordmark.

## Recognition
- Princeton's Student Groups Recognition Committee (SGRC, via USG) requires a petition of **at least 25 undergraduate signatures**, the constitution and the SGRC questionnaire, all as one PDF to sgrc@princeton.edu. Details and deadlines: https://usg.princeton.edu/sgrcclubapproval
- 2026–27 submission deadlines: 11/25/26, 1/27/27, 2/24/27, 3/31/27. Recognition by the April 7, 2027 meeting is needed for the fall 2027 activities fair.
- **Signatures collected (2026-11-24).** The user asked to take the petition off the site: the `/petition` page, the nav item, the home button and `site.petition` were removed. It's in git history (commit d873d97) if ever needed again.
- With no mailing list yet, the home button reads "How to join" and goes to `/join`. Once `site.mailingListUrl` is set, it becomes "Join the mailing list" automatically, and the Join and Readings pages link to the list too.

## Open TODOs
- Real mailing-list link, email, Sunday time and room.
- Real reading schedule; Discussion Leaders.
- Remaining officers' names; confirm founding year.
- Logo (discussion theme), planned for when the stand-in photo goes.
- Custom domain (optional).
