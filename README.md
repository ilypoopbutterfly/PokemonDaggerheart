# Pokémon × Daggerheart — GM Wiki

A self-contained, read-only campaign wiki for a Pokémon-flavored *Daggerheart* game set in
the region of **Mimic**. No database, no build step, no server-side code, and no runtime
dependencies — just static files:

- `index.html` — the presentation shell (all CSS + JS, layout, and tabs).
- `data.js` — **all campaign content** as a `var data = {…}` object. This is the file you edit.
- `images/` — extracted portraits, companion sprites, and the type chart.
- `*.pdf` — downloadable player character sheets (see below).

## Viewing it

- **Locally:** open `index.html` in any modern browser.
- **Hosted:** published via GitHub Pages at
  <https://ilypoopbutterfly.github.io/PokemonDaggerheart/>.

## PDFs (required for the download links)

The Mechanics and Party tabs link to character-sheet PDFs by relative path. These files live in the
repository root next to `index.html`, under **version-free static names** so links never need
updating — when a new version is ready, just overwrite the same filename and commit:

- `trainer_breeder.pdf`
- `trainer_entertainer.pdf`
- `trainer_researcher.pdf`
- `trainer_specialist.pdf`
- `trainer_master.pdf`
- `pokemon_companion_sheet.pdf`

## Editing / updating content

This wiki is **read-only by design** (the old in-browser form fields and "Add / Remove" controls
are hidden — editing on the live site does nothing and is never saved).

Almost all content lives in **`data.js`**. To change the wiki:

1. Edit `data.js` — it's a plain, pretty-printed `var data = {…}` object (NPCs, party, sessions,
   arcs, map locations, world lore, etc.). Small edits = small, readable diffs.
2. To add/replace an image, drop a file in `images/` and point the relevant `"image"` /
   `"sprite"` value at it (e.g. `"images/portrait-306.jpg"`).
3. Commit and push. GitHub Pages redeploys automatically (~1 minute).

A little content still lives in `index.html` itself (the Mechanics rules text, Pokédex, type chart,
and page scaffolding); edit there for those sections.

> No regeneration needed. Earlier the whole wiki was one giant `index.html` you regenerated wholesale;
> now content is split out so you make targeted edits instead. Old `localStorage` persistence is
> disabled — the files on disk are the single source of truth.

## Structure

Tabs: World & Lore, Region Map, Pokédex, NPCs & Factions, Party & Pokémon, Domains, Sessions,
and Mechanics. Presentation in `index.html`; content in `data.js`; assets in `images/` and the PDFs.
