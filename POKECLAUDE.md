# CLAUDE.md — "The Very Best" Campaign Project

> Context handoff for Claude Code. This file catches you up on a Pokémon-themed
> TTRPG campaign run on the **Daggerheart** system. It covers the world, cast,
> the file architecture, the established workflows, and the open threads. Read
> this first before touching any project files.

---

## 1. What this project is

**"The Very Best"** is a Pokémon-themed tabletop RPG campaign built on the
**Daggerheart** system. Ily is the GM. There are **five players**. The campaign
is set in the **Mimic region** and structured around a **counter-clockwise
8-gym regional journey**. Base town is **Bogen**, a jungle canopy settlement.

The deliverables in this repo are GM tools: a canonical wiki, a Pokédex
printout, a secrets document, character sheets, companion sheets, and Daggerheart
domain cards. The work is done in an **iterative approval workflow** — content
is designed and discussed, approved, then committed to files. Ily reviews each
step before the next proceeds.

**Big secret (players do not know):** the Mimic region is a sealed **simulation
dome** observed by unknown outside forces. No in-world character is aware of this.

---

## 2. The five player characters

| PC | Subclass | Starter | Notes |
|----|----------|---------|-------|
| **Axel** | Entertainer | shiny Mudkip | Idol is Maximus (secretly his half-brother) |
| **Nea Stone** | Researcher | shiny Charmander | Darkrai-connected tattoos from a sealed ruins chamber; guardian is Sutton Holloway |
| **Coral** | Breeder | Popplio | |
| **Llewellyn "Lew" Morse** | Specialist | shiny Rowlet | Surname is **Morse**, not Moss. Had a twin who died in utero |
| **Briar** | Master | Cyndaquil | From Sandbar (Town 20, Twisselmon biome). Father Aster (deceased explorer), mother Lark, sibling Robin |

**Trainer subclasses in the system:** Master, Researcher, Breeder, Specialist,
Entertainer, Rebel.

---

## 3. Key NPCs

- **Professor Jayne Willow** (Weavile, Bogen)
- **Zoe Willow** — rival, 17, Grookey. Professor Jayne's younger sister
- **Evander Null** — paranormal Pokémon specialist, Bogen. Provided the Rowlet for the ceremony
- **Nurse Mabel**, **Captain Thaddeus**, **Yousef**, **Gran Gran Dorothy**
- **MOSS** — canopy rescue team
- **Sutton Holloway** — Nea's guardian (GM secrets TBD)
- **Krick** — Pokémon Trapper, morally ambiguous recurring NPC
- **Earl** — Route Keeper, Bewear
- **Petunia** — wandering merchant, Nidoking. **Trades, does not sell.** (Name is Petunia, not "Petra")

---

## 4. Villains

**House Veil** — shadow network. Aesthetic: black/gold/red, symbol is a black
heart with a gold lace veil. Operates behind **The Apothecary Collective**, a
legitimate medical front (red/pink/black, pink potion-bottle symbol).

- **Lace** — leader. White-haired, eye-patched, black/gold suit, red collar.
- **Rue** — leader. Bright red curly hair, gold eyes, red dress, black collar.

Pokémon Center nurses unknowingly file intake reports that feed back to House
Veil. **All regional variants in Mimic are House Veil mutation experiments** —
collectively "the Veil Dex."

---

## 5. GM secrets (key threads)

- Mimic is a **simulation dome**.
- **Nea** has Darkrai-connected tattoos from a sealed ruins chamber.
- **Axel's** idol Maximus is his unknown **half-brother**.
- **Briar's** father **Aster** was killed in a trap at the **Mt. Ao ruins** while working for **Sutton Holloway** (neither Briar nor Nea know of the connection).
- **Llewellyn** had a twin who died in utero, buried in **The Boneyard in Wickport**. The party's **Misdreavus** mourns that twin (never caught; mechanical status is an open thread).
- **Galarian legendary birds** are part of the simulation's original architecture (exempt from the Veil Dex).
- **Legendary bonds:** Zapdos/Axel, Articuno/Llewellyn, Darkrai/Nea, and Briar's potential bond (**Moltres, not yet confirmed**).

---

## 6. In-world session calendar

- **Session 0:** 12/31–1/2
- **Session 1:** 1/3–1/4
- **Session 2 recap:** "Route 101, Pt. 2," dates 1/4–1/5

---

## 7. Files & architecture

### The wiki is the single source of truth
**`gm_wiki__merged_.html`** is canonical. It merges all previously forked
versions. It contains: Briar/5th player, the GM-note blur feature, Encounters
tab removed, Llewellyn Morse surname, the 284-Pokémon Dex, the Caught Pokémon
subsection under the Party & Pokémon tab, and the Session 2 recap. Older/forked
copies are superseded. **The Pokédex printout and secrets doc are downstream of
the wiki.**

### Most recent output files
- **`gm_wiki__merged_.html`** — master wiki (284-mon dex, all merges applied)
- **`pokedex_printout.pdf`** — A5 two-column GM reference, ~19pp, reportlab-built from the wiki dex
- **`gm_secrets.docx`** / **`gm_secrets.pdf`** — includes "The Veil Dex — Known Mutations" subsection

### Templates
- **`trainer_master_v5.pdf`** — master character-sheet template; filled per-player PDFs exist for all 5
- **`pokemon_companion_sheet_v2.pdf`** — companion sheet template

### Pokédex facts
284 Pokémon, numbered contiguously **0001–0284** by regional Dex number.
Regional variants removed from the main dex (Sirfetch'd also removed, Farfetch'd
kept). Base/normal forms are authoritative.

### Caught Pokémon table (under Party & Pokémon)
Renders one sub-table per trainer. Columns: Sprite, Pokémon, Nickname, Gender,
Ball, Caught (session), Experience (tag name only). Sprites use base64 data URIs;
fallback map `CAUGHT_SPRITE_IDS` points to PokeAPI GitHub sprites (shiny subfolder
for shiny Pokémon). Venipede is Female; Ralts appears after Cyndaquil in Briar's
group.

### Veil Dex
34 regional variants grouped by strain — Alolan (12), Galarian (9, incl.
Galarian Farfetch'd), Hisuian (12), Paldean (1) — with types and base-form dex
numbers. Annihilape is in the Paldean strain (Fighting/Ghost, base: Primeape
#0048). In-lore, House Veil manufactured these mutations.

---

## 8. Domain cards (Daggerheart)

Level 1 card sets are designed for **10 types**: Normal, Fire, Water, Grass,
Fighting, Poison, Flying, Psychic, Bug, Fairy — using a **Move/Trait framework**.

**Eight remaining types** (Electric, Ice, Ground, Rock, Ghost, Dragon, Dark,
Steel) still have placeholder cards needing proper redesign. Higher-level cards
(Levels 2–10) have been stripped from all redesigned domains.

### Design principles
- Moves are **active** (require rolls); Traits are **passive/triggered**.
- Each Level 1 set has at least one Move and one Trait; mix of damage, utility, control, support.
- Use real Pokémon move and ability names where possible.
- No leading numbers on dice (write "d8", not "1d8").
- Hope costs capped at 2; healing effects always require a Hope expenditure.
- Level 1 cards should not be overly complex; Hope costs are optional, not forced.
- Ghost cards should interact with **Fear dice**; Psychic cards with **Hope/Fear outcomes**.

---

## 9. Confirmed mechanics

**Catching:** Push-the-roll costs 1 Stress, reroll and take the better result.
Critical failure on a catch roll breaks the Ball or lets the Pokémon shake free
— no further pushes allowed after a critical fail.

**Damage thresholds:** Stage-based (Stage 0/1/2/Legendary) with Minor/Major/
Severe values determining Stress marked (1/2/3). KO condition is a note below the
table, not a row. Only Stage 0 values were explicitly provided; Stage 1/2/
Legendary numbers were **estimated and need confirmation**.

---

## 10. Established build workflows (do not reinvent)

**File editing pattern (always):**
`copy file to /home/claude/` → edit via Python → validate with `node --check`
→ copy to `/mnt/user-data/outputs/`. Never edit in place without this workflow.

**Wiki JSON blob (double-encoded):** read with `json.loads(json.loads(...))`;
write with `json.dumps(json.dumps(data))` and strip the outer quotes. Locate the
blob with:
```
re.search(r'let data = JSON\.parse\("(.*?)"\);\s*\n', text, re.S)
```

**Version key discipline:** the wiki uses `const KEY = 'gm_wiki_vNN'`. Bump it
any time seed data structure or content changes, to prevent localStorage caching
stale data.

**JS validation:** extract script-tag contents and run `node --check` — must
pass before copying to outputs.

**Pokédex edits:** Python with regex card extraction, anchor-card string
replacement for insertion, a counter-based renumber pass, and Node.js VM syntax
validation.

**Build scripts are project files — keep them, don't reconstruct them each
session** (prevents color/font drift):
- `build_secrets.cjs` (docx npm library) → LibreOffice PDF conversion
- `build_guide.cjs` (docx npm library); A5, Georgia, CC0000 accent
- Established constants: `ACCENT = 'CC0000'`, `GM_BG = 'F5E6D0'`,
  `TBL_BG = 'FFF0F0'`, `BORDER_CLR = 'CCCCCC'`, Georgia font, A5 dimensions.
- Pokédex printout is reportlab-built (A5 two-column) from wiki dex data.

**Image handling:** PNG → JPEG at quality 82, max width 1000px before base64
encoding. Sprites are base64-embedded (primary) with `CAUGHT_SPRITE_IDS` PokeAPI
fallback. Companion-sheet sprites must be **user-provided** (sandbox network
restrictions).

**PDF work:** `pypdf`, `reportlab`, `pdfplumber`, `pdftoppm`, LibreOffice
`soffice.py`. Use `pdftoppm` at 130–150 DPI to visually read PDFs when
`pdftotext` fails on embedded fonts. Image-box detection is done on the original
letter-sized source at 200 DPI, not the scaled output.

---

## 11. Working principles

- **Conversation history > project files.** When project knowledge files conflict
  with conversation history, history reflects the more current confirmed
  decisions and takes precedence. Search chat history before assuming a project
  file is authoritative.
- **No over-asking.** Act on clear tasks rather than deliberating. Flag open
  design questions as future work, not blockers.
- **Wiki-first architecture.** The wiki is canonical; everything else is
  downstream and should be regenerated from it when the dex changes.

---

## 12. On the horizon (open threads)

- Redesign domain cards for the 8 remaining types (Electric, Ice, Ground, Rock, Ghost, Dragon, Dark, Steel).
- Higher-level domain cards (Levels 2–10) for all 18 types.
- Confirm the extrapolated Stage 1/2/Legendary damage-threshold numbers.
- **In-world strain names for the Veil Dex** — currently using real-world region
  names (Alolan/Galarian/Hisuian/Paldean) as placeholders; Ily does **not** want
  those names in the final game.
- Companion sheets for additional Pokémon (workflow established; sprites must be user-provided).
- Confirm Briar's legendary bond with Moltres.
- Sutton Holloway's GM secrets (TBD).
- Llewellyn's Misdreavus mechanical status (open thread).
- Friend Ball and Luxury Ball effects (TBD, pending friendship/bond mechanic).
- If the dex is renumbered later, regenerate the secrets doc so the Veil Dex
  base-form numbers stay in sync.
