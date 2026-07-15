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
- `images/` — extracted assets: `portrait-30x.jpg` (NPCs), `sprite-50x.*` (companions), `type-chart.jpg`,
  `mimic-map.webp` (region map), and `dex/` (all 284 Pokédex sprites, vendored locally — never hotlink).
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

---

## Campaign context

Lore and design facts carried over from the original Claude.ai design sessions. The **file layout /
build details from those sessions are obsolete** — this repo (static `index.html` + `data.js`) is the
current source of truth. What follows is campaign knowledge, not architecture.

### Premise
**"The Very Best"** — a Pokémon-themed campaign on the **Daggerheart** system. **Ily** is the GM;
there are **five players**. Set in the **Mimic region**, structured as a **counter-clockwise 8-gym
journey**. Base town is **Bogen**, a jungle-canopy settlement.

Trainer subclasses in the system: **Master, Researcher, Breeder, Specialist, Entertainer, Rebel**.

**Big secret (players do not know):** Mimic is a sealed **simulation dome** observed by unknown outside
forces. No in-world character is aware of this.

### Player characters
| PC | Subclass | Starter | Notes |
|----|----------|---------|-------|
| **Axel** | Entertainer | shiny Mudkip | Idol is Maximus (secretly his half-brother) |
| **Nea Stone** | Researcher | shiny Charmander | Darkrai-connected tattoos from a sealed ruins chamber; guardian is Sutton Holloway |
| **Coral Kai** | Breeder | Popplio | |
| **Llewellyn "Lew" Morse** | Specialist | shiny Rowlet | Surname is **Morse**, not Moss. Had a twin who died in utero |
| **Briar Gacha** | Master | Cyndaquil | From Sandbar (Town 20, Twisselmon biome). Father Aster (deceased explorer), mother Lark, sibling Robin |

### Key NPCs
- **Professor Jayne Willow** (Weavile, Bogen)
- **Zoe Willow** — rival, 17, Grookey. Professor Jayne's younger sister
- **Evander Null** — paranormal Pokémon specialist, Bogen. Provided the Rowlet for the ceremony
- **Nurse Mabel**, **Captain Thaddeus**, **Yousef**, **Gran Gran Dorothy**
- **MOSS** — canopy rescue team
- **Sutton Holloway** — Nea's guardian (GM secrets TBD)
- **Krick** — Pokémon Trapper, morally ambiguous recurring NPC
- **Earl** — Route Keeper, Bewear
- **Petunia** — wandering merchant, Nidoking. **Trades, does not sell.** (Name is Petunia, not "Petra")

### Villains — House Veil
Shadow network. Aesthetic: black/gold/red; symbol is a black heart with a gold lace veil. Operates
behind **The Apothecary Collective**, a legitimate medical front (red/pink/black, pink potion-bottle
symbol). Pokémon Center nurses unknowingly file intake reports that feed back to House Veil.
- **Lace** — leader. White-haired, eye-patched, black/gold suit, red collar.
- **Rue** — leader. Bright red curly hair, gold eyes, red dress, black collar.

**All regional variants in Mimic are House Veil mutation experiments** — collectively "the Veil Dex"
(34 variants). In-world strain names are still an open question: real-region names
(Alolan/Galarian/Hisuian/Paldean) are placeholders Ily does **not** want in the final game.

### GM secrets (key threads)
- Mimic is a **simulation dome**.
- **Nea** has Darkrai-connected tattoos from a sealed ruins chamber.
- **Axel's** idol Maximus is his unknown **half-brother**.
- **Briar's** father **Aster** was killed in a trap at the **Mt. Ao ruins** while working for **Sutton
  Holloway** (neither Briar nor Nea know of the connection).
- **Llewellyn** had a twin who died in utero, buried in **The Boneyard in Wickport**. The party's
  **Misdreavus** mourns that twin (never caught; mechanical status is an open thread).
- **Galarian legendary birds** are part of the simulation's original architecture (exempt from the Veil Dex).
- **Legendary bonds:** Zapdos/Axel, Articuno/Llewellyn, Darkrai/Nea, and Briar's potential bond
  (**Moltres, not yet confirmed**).

### In-world session calendar
- **Session 0:** 12/31–1/2 · **Session 1:** 1/3–1/4 · **Session 2:** "Route 101, Pt. 2," 1/4–1/5

### Pokédex & Veil Dex facts
- **284 Pokémon**, numbered contiguously **0001–0284** by regional Dex number. Regional variants
  removed from the main dex (Sirfetch'd also removed, Farfetch'd kept); base/normal forms are authoritative.
- **Veil Dex:** 34 regional variants grouped by strain — Alolan (12), Galarian (9, incl. Galarian
  Farfetch'd), Hisuian (12), Paldean (1, Annihilape = Fighting/Ghost, base Primeape #0048).

### Domain cards (Daggerheart)
Level 1 and Level 2 sets are designed and shipped for **all 18 types** using a **Move/Trait
framework**. Levels 3–10 are in progress: the target is **two cards per level up to Level 10** for
every type. Any Level 3+ cards already present are the new designs — they stay (the old pre-redesign
high-level cards were deleted long ago; do not treat current ones as leftovers).

Design principles: Moves are **active** (require rolls), Traits are **passive/triggered**; each Level 1
set has ≥1 Move and ≥1 Trait, mixing damage/utility/control/support. Use real Pokémon move/ability
names where possible. Dice may be written with leading numbers ("1d8" is fine — an earlier no-leading-
numbers rule was dropped). Hope costs capped at 2 and optional (not forced); healing always costs
Hope. Ghost cards interact with **Fear dice**; Psychic cards with **Hope/Fear outcomes**.

### Confirmed mechanics
- **Catching:** Push-the-roll costs 1 Stress (reroll, take better). Critical failure breaks the Ball or
  lets the Pokémon shake free — no further pushes allowed after a crit fail.
- **Damage thresholds:** Stage-based (Stage 0/1/2/Legendary) with Minor/Major/Severe → Stress marked
  (1/2/3). KO is a note below the table, not a row. Only Stage 0 was explicitly provided; Stage
  1/2/Legendary numbers are **estimated and need confirmation**.

### Open threads
- Domain cards Levels 3–10 for all 18 types (two cards per level; L1–L2 complete).
- Confirm extrapolated Stage 1/2/Legendary damage thresholds.
- Final **in-world strain names** for the Veil Dex (replace region-name placeholders).
- Confirm Briar's legendary bond with Moltres.
- Sutton Holloway's GM secrets (TBD).
- Llewellyn's Misdreavus mechanical status.
- Friend Ball / Luxury Ball effects (pending a friendship/bond mechanic).
