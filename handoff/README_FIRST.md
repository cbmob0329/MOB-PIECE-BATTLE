# MOB PIECE BATTLE — Astra handoff v170

This package was extracted from:
`MOB-QUEST-v170-TRAINING-SCROLL-FIX.zip`

## Contents

- `ASTRA_PROMPT.txt`
  - Copy/paste instructions for Astra/Codex.
- `data/figures_master_v170.json`
  - 265 figure records.
  - Original source ID is preserved.
  - `dexNo` / `displayNo` are sequential display numbers.
- `data/tags_master_v170.json`
  - 52 tag records with MOB PIECE effects.
- `reference/mob_piece_reference.js`
  - Focused source excerpts from the original `game.js`.
  - Includes historical patches because later versions override earlier ones.
- `reference/mob_piece_reference.css`
  - Focused CSS excerpts for MOB PIECE.

## Canonical runtime warning

The original source is patch-based. Do not use the oldest function definition just because it appears first.

For the current battle:
- v115: figure stats, COST, duplicate deck limits
- v132: FREE / RANK / CPU / reward / rank
- v133: individual 5v5 battle presentation
- v136: final combat tempo override

The independent version should preserve those behaviors while refactoring into modules.

## Assets

The uploaded v170 ZIP contains code files only and references image paths such as `fig/...`.
It does not contain the actual figure/background image files.
Do not replace missing images with unrelated art. Keep stable asset paths/placeholders until the actual assets are supplied.
