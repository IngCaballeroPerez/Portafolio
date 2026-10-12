# Gameplay Portfolio — Jose Caballero

Static, bilingual (English native + Spanish) portfolio for a gameplay programmer
and tools engineer. Open `index.html` with a double click after extracting.
No installs, server, accounts or internet connection required.

## Files

    portafolio/
      index.html         Content, projects and contact data (EN by default)
      css/styles.css     Dark theme, typography, layout, gallery, responsive
      js/i18n.js         EN/ES dictionary + language detection and toggle
      js/main.js         Accessible mobile menu, gallery swap, footer year
      assets/            Your screenshots, CV and icons
      README.md          This guide

## Projects included

- **M.E.S** (featured) — Industrial MES with real gallery of 5 screenshots.
- **Knight-Plugin 4.3** — Engineering plugin for Claude, Codex and Qwen.
- **LocalChat v0.2.1** — Fully local desktop messaging in Python/Tkinter.

## Language (EN / ES)

English is the native language. On load, the site detects `navigator.language`
and shows Spanish if it starts with `es`, otherwise English. The `EN/ES` button
in the header switches it manually.

The choice is **not persisted** (no cookies, no `localStorage`): this keeps the
site fully private and static. All visible text is driven by `data-i18n` /
`data-i18n-html` / `data-i18n-attr` keys whose translations live in `js/i18n.js`.
To edit any text, change it there for **both** languages.

## Screenshots

The M.E.S project uses 5 real screenshots. Save them in `assets/` with these
exact names:

- `mes-login.webp`     → MES login with the ten businesses
- `mes-requests.webp`  → Requests list + approval detail
- `mes-help.webp`      → Help centre with topic list
- `mes-password.webp`  → Change-password form
- `mes-error.webp`     → Error state with traceable folio

You can export them as `.png` or `.jpg` instead of `.webp`, but then update the
paths in `index.html` (`src="..."` and `data-full="..."`).

## Adding the CV

Save your real PDF as `assets/cv.pdf`. The "Download CV" button already points
to it. If you do not have a CV yet, remove that `<a>` from the hero actions.

## Changing the look

Edit the variables in `:root` at the top of `css/styles.css`:
- `--accent` is the brand accent (kept as `#484279`).
- `--accent-text` is the readable lavender for accent text on dark backgrounds.
- `--paper` is the page background, `--ink` the main text.

Check contrast after changing colours. System fonts only.

## Footer reveal effect

The footer is pinned to the bottom of the viewport (`position: sticky; bottom: 0`)
behind the content (`.page-shell`, solid background + shadow). As you reach the
end of the page, the footer is progressively revealed from below. Pure CSS:
works without JavaScript and respects reduced motion.

## Behaviour and review

- Sections and project details work without JavaScript.
- Without JS, the M.E.S thumbnails open their full image directly.
- With JavaScript the mobile menu opens via a button; Escape closes it and
  returns focus to the button. Choosing a section closes the menu and moves
  focus to the destination. The menu label stays in sync with the active
  language. The M.E.S thumbnails swap the main image on click.
- The page respects reduced-motion and offers a skip link, visible focus and
  semantic HTML.
- No analytics, cookies, browser storage, forms or external requests.

## Publishing

The site is not published yet. When you decide to:

1. Confirm you have permission to show the M.E.S screenshots.
2. Upload `index.html`, `css/`, `js/` and your `assets/` files to the root of
   any static host, keeping the paths.
3. Open the assigned URL and check links, captures, contact and both languages.

No build step or environment variables. You do not need to upload this README
or `assets/LEEME.txt`.

## Validation performed

Balanced HTML tags, unique ids, internal link targets, existence of local
resources, balanced CSS braces, balanced JS delimiters, and — for the bilingual
system — that every `data-i18n` / `data-i18n-html` / `data-i18n-attr` key used
in the HTML exists in both the EN and ES dictionaries. Visual review in a real
browser is still pending: before publishing, open the page, resize it, test the
menu with Tab/Enter/Escape, switch languages, click each M.E.S thumbnail, open
the three projects and check 200% zoom.