# CLAUDE.md — Pokémon × Daggerheart GM Wiki

Orientation for any Claude Code session working in this folder.

## What this is
A **read-only**, self-contained campaign wiki (static files, no database, no build step, no runtime
deps) for a Pokémon-flavored *Daggerheart* game in the region **Mimic**.

- Repo: https://github.com/ilypoopbutterfly/PokemonDaggerheart (public, branch `main`)
- Hosted (GitHub Pages): https://ilypoopbutterfly.github.io/PokemonDaggerheart/
- The `origin` remote is already configured; `git push` works. Pages auto-deploys on push (~1 min).

## File layout
- `index.html` — presentation shell: all CSS/JS, layout, tabs. Also holds some **seeded content**:
  the Region Map (`seededMapLocations`), Domains (`domainData`), the Pokédex data, and the Mechanics
  rules text.
- `data.js` — **most campaign content**, as a pretty-printed `var data = {…}` (keys: `world`, `npcs`,
  `players`, `arcs`, `sessions`, `encounters`, `mechs`, `domainCards`, `caught`). Loaded via
  `<script src="data.js">` right before the main script. **This is the file to edit for most changes.**
- `images/` — extracted assets: `portrait-30x.jpg` (NPCs), `sprite-50x.*` (companions), `type-chart.jpg`.
- `*.pdf` — player character sheets under **version-free static names**; to update, overwrite the same
  filename and commit (never rename, so links never break).
- `.gitattributes` pins PDFs/images as binary and `index.html` to LF (the machine has global
  `core.autocrlf=true`).

## How to edit
1. Edit `data.js` for NPCs/party/sessions/arcs/world lore/etc. (small edits = clean diffs).
   For map / Domains / Pokédex / Mechanics text, edit `index.html`.
2. To add/replace an image: put a file in `images/` and point the relevant `"image"` / `"sprite"`
   value at it.
3. Commit and push. That's it — **no wholesale regeneration** (the old workflow of regenerating the
   entire HTML is retired).

## Important notes
- It is **read-only by design**: the old in-browser form fields and Add/Remove controls are hidden by
  a "read-only presentation layer" (CSS near `</style>`, JS IIFE `makeReadOnly` near `</script>`).
  Old `localStorage` persistence is unused — the files on disk are the single source of truth.
- Local preview: needs a static server (e.g. Node). Opening `index.html` via `file://` mostly works,
  but a server is cleaner for verifying image/data loading.
