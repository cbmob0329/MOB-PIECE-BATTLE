# Deck builder follow-up

Base: `2fd1c5d0d6e6d18434d127e58e490383c6c4e2fb` (`up`), C:\Users\CB-Me\Documents\GitHub\MOB-PIECE-BATTLE on DESKTOP-CEK06PJ. The previous 14-file UI changes were already committed in the retrieved version; the working tree was clean at this task's start. No commit/push/deployment or real-user save operations were performed.

## Changes

1. Added visible **DECK Nを空にする** beside **1からデッキ編成**. A slot-specific confirmation names the deck and count; cancellation preserves it. Only the selected deck is emptied through existing validated storage.
2. Added a separate rarity filter to the normal owned inventory, combined with stage, tag and name/ID search.
3. Added labeled, numbered, colored stage badges: ① シード (green), ② ミドル (blue), ③ MOB (purple). Rarity remains separately labeled.
4. Recommended seed/route buttons now add and save the missing quantities directly. Already-present material, full decks, stale source decks and storage failure have visible messages in the fixed dialog footer. Existing 5-ace bulk replacement retains its explicit preview/confirmation.
5. Middle/MOB recommendation details openly show ATK/DEF, attribute, rarity, skill name/text/timing and per-turn/per-match use limits alongside fusion conditions.
6. Added a temporary new-deck flow: select owned Middle/MOB → actual fusion material routes (including intervening middles) → all owned seeds → review and save exactly 45. Original saved decks stay intact until final confirmation. Existing fusion recommendation and legality functions are reused; candidate routes do not restrict the full owned seed list. Back preserves the current draft; cancel/Escape/navigation discards only the draft. Storage failure leaves the draft available for retry.
7. Added rarity and stage filters to the ace picker, combined with favorites, tag and name search. Search inputs are not recreated during filtering/IME composition; selected five remain present across filters.

No changes to 45-card size, Seed 3 / Middle 1 / MOB 1 copy caps, DECK 1/2 ID exclusion, ownership, gacha illustrations/prices/odds, tower, save reset, BGM or STORY. No image generation or new raster assets.

## Concrete reproduction

The old `soulDeckAssist.js` from HEAD was served only to an isolated test browser; it was not restored over the working source. With Middle `ECL_M02` (モブフレアベル), clicking **このシードを追加** only opened a second preview; storage stayed unchanged until **この編成を反映**. This explains the reproducible button-pressed-but-not-yet-added state without claiming the existing engine could never save.

A 45-seed deck lacking the route materials rejected addition with the 45-card limit. That rejection remains correct. For this one-route fixture the old error was on-screen, so it is not claimed that every old failure was hidden. The new message is consistently placed in the fixed footer. The successful new action adds モブヒバナ and モブミカゲ, updates counts, saves immediately and survives reload; clicking an already satisfied route reports that no additional material is needed.

MOB `27` was tested through Middle IDs `16` and `103`, with seed quantities from the real route. Both middle cards were present in the saved 45-card deck.

## Verification

- 32 existing/related suites passed (`oct10-deck-proof/regression.json`), including unchanged gacha and deck rules, 220 enemy-theme battles and 50 tower battles.
- New `scripts/deck-builder-check.mjs`: non-mutating draft creation, recursive materials, duplicate-route idempotence, ownership/copy/size/exclusion boundaries, full 45 save and stale-original rejection.
- New `scripts/deck-builder-browser.mjs`: current UI workflow at 320/390/430px. Empty-confirm/cancel → choose Middle → recommended seeds → seed outside recommendations → 45 save → reload. Other decks and owned inventory preserved. Also cancel/navigation, double save click, combined filters, IME, retained five aces, direct material addition and already-present/full messages.
- Separate isolated edge test: actual MOB intermediate route, injected storage failure/retry, no owned seeds, Escape and 320x430 controls.
- Existing deck browser test: starter application, +/- counts, five-ace preview/apply and battle navigation still pass.
- Production build passed; source syntax check 288 files. Existing large JS chunk warning remains.
- Production subpath `/MOB-PIECE-BATTLE/`: default starter ownership → new Middle/seed deck → 45 save/reload; filters/performance; no page errors.
- Actual screenshots were opened and visually checked at 320, 390 and 430px.

## Evidence

Workspace: `C:\Users\CB-Me\Documents\Codex\2026-10-05\task\oct10-deck-proof`.

- `before-second-confirmation.png`, `before-full-error-offscreen.png` (filename retained; recorded offscreen value is false).
- `editor-{320,390,430}.png`, `clear-{320,390,430}.png`, `inventory-filter-{320,390,430}.png`.
- `materials-{320,390,430}.png`, `all-seeds-{320,390,430}.png`, `review-{320,390,430}.png`.
- `ace-filters-{320,390,430}.png`, `performance.png`, `full-deck-visible-error.png`.
- `mob-route-320.png`, `save-failure-320.png`, `compact-builder.png`.
- `production-review-390.png`, `production-performance-390.png`; `result.json`, `edge-result.json`, `production-result.json`, `build.txt`.

Limits: physical iPhone Edge/WebKit and its real software keyboard were not tested. Desktop Edge viewport emulation and synthetic IME events were used. Tests used new isolated browser contexts only.
