# Saraiki Tech — Website

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Language](https://img.shields.io/badge/Copy-Roman%20Urdu-0d9488)

Brand website of **Saraiki Tech** — AI courses aur viral prompts, 100% Roman Urdu copy.

## What's inside

- **Home** — Sticker-Premium design, services, courses & prompts preview
- **Courses** — YouTube / TikTok / Facebook Automation with full curricula
- **Prompts** — master AI prompt library with one-click copy buttons
- **About / Contact** — brand story, contact & WhatsApp CTA

## Tech stack

- React 19 + React Router 7, Vite 7 with `vite-plugin-singlefile` — builds to **one self-contained `index.html`**
- Framer Motion, Lucide icons
- Brand palette: deep teal + amber
- `courses.json`, `prompts.json`, `tools.json` load at **runtime** — update content by re-uploading JSON, no rebuild

## Project structure

```
src/
  pages/        # Home, Courses, Prompts, About, Contact, 404
  components/   # nav, cards, prompt cards
  data/         # JSON sources
  App.jsx
public/
  courses.json  # live course catalog (runtime)
  prompts.json  # live prompt library (runtime)
  tools.json    # live tools (runtime)
  images/       # course covers
.htaccess       # clean-URL rewrites for Apache
```

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # -> dist/ (single-file index.html)
```

## Deployment

Upload to `public_html` root: `index.html`, `courses.json`, `prompts.json`, `tools.json`, `.htaccess`, `images/`.
Content updates = re-upload the JSON files only.

## License

All rights reserved — Saraiki Tech / Saqlain Abid.
