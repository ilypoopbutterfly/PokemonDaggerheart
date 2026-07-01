# Pokémon × Daggerheart — GM Wiki

A self-contained, read-only campaign wiki for a Pokémon-flavored *Daggerheart* game set in
the region of **Mimic**. Everything (styles, scripts, and all 16 images) is baked into a single
`index.html` file — no database, no build step, no server-side code, and no runtime dependencies.

## Viewing it

- **Locally:** open `index.html` in any modern browser.
- **Hosted:** published via GitHub Pages at
  <https://ilypoopbutterfly.github.io/PokemonDaggerheart/>.

## PDFs (required for the download links)

The Mechanics and Party tabs link to character-sheet PDFs by relative path. These files must live
in the repository root next to `index.html`, or those "Download" buttons will 404. Add:

- `trainer_breeder_v4.pdf`
- `trainer_entertainer_v4.pdf`
- `trainer_researcher_v4.pdf`
- `trainer_specialist_v4.pdf`
- `trainer_master_v4.pdf`
- `pokemon_companion_sheet_v2.pdf`

## Editing / updating content

This wiki is **read-only by design**. All content is seeded directly into `index.html` (in the
`let data = JSON.parse(...)` object and the surrounding markup). The old in-browser form fields and
"Add / Remove" controls have been hidden — editing on the live site does nothing and is never saved.

To change the wiki:

1. Regenerate / edit the `index.html` content.
2. Commit and push. GitHub Pages redeploys automatically.

> Note: earlier versions saved edits to the browser's `localStorage`. That path is intentionally
> disabled here — the file on disk is the single source of truth.

## Structure

Single file, `index.html`, with tabs for: World & Lore, Region Map, Pokédex, NPCs & Factions,
Party & Pokémon, Domains, Sessions, and Mechanics.
