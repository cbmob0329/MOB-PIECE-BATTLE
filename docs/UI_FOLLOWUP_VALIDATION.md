# UI follow-up validation

Repository: `C:\Users\CB-Me\Documents\GitHub\MOB-PIECE-BATTLE` on DESKTOP-CEK06PJ.
Starting HEAD: `d8d1fd2` (`up`), origin `cbmob0329/MOB-PIECE-BATTLE`, initially clean.
No commit, push, deployment, real-user save deletion, D-drive or old-PC access.

## Gacha image loading

Reproduced the reported `6 / 6 件確認 · 3件を読み込めませんでした` in an isolated browser while holding the second carousel slide's requests:

- `piecefig/CRY_S01.png`
- `piecefig/SPI_M02.png`
- `piecefig/RUN_S02.png`

The old watcher checked vertical position only. Horizontally clipped lazy images counted as required; a 15-second timeout was recorded as a permanent failure and detached load listeners. Releasing all three requests decoded all six images, but the old error remained.

The watcher now intersects images with the viewport and clipping ancestors. Only visible images block the screen. The selected banner uses eager loading, with a new check after a carousel change. Slow images remain pending, retain listeners and recover when loaded. Actual image errors show the failed URL and support retry. Gacha illustrations, prices, odds and guarantees are unchanged.

`scripts/screen-images-browser.mjs` tests hidden pending images, switching banners, slow visible-image recovery, actual 404 URL identification and retry. Set `MPB_TEST_URL` to the served project URL (default `http://127.0.0.1:5208`) and optionally `MPB_PROOF_DIR`.

## DECK

The starting commit already contains the earlier DECK implementation (`deckWorkshop.js`, `deck-workshop.css`). Reused it without overwriting it. Verified the starter package actually decodes and appears in DECK, five hero illustrations, grouped quantities, separate lineup/inventory/starter panels, and the fixed decision control.

At 320/390/430px: add/remove, search, starter application, ownership preservation, five-ace selection/preview/apply and battle navigation passed. Over 600 owned entries remain in a bounded inner list; favorites/search retain five selected aces. Compact 320x430 controls remain reachable. No deck rules or inventory changes.

## Tower depth

Added native flat-color SVG illustrations for the distant town, platform, contact shadow, stairs/path, foreground gate and tree. Existing tower atlas is unchanged. This is layered 2D art, not actual 3D. Event-driven, clamped parallax uses transforms only and stops for both reduced-motion settings. Event listeners are disposed on rerender.

At 320/390/430px, tower roof/base remain inside the scene and above floor buttons. Locked-floor names/images remain concealed, including a forged locked-floor request. Actual battle start, forfeit/result and return passed in an isolated browser.

## Save deletion

Settings now offers a confirmation dialog listing deletion targets. The final action remains disabled until the confirmation checkbox is selected. Cancellation/Escape keep data and return focus. Only these explicit keys are removed:

- `mob-piece-battle:audio:v1`
- `mob-piece-battle:profile:v1`

No `localStorage.clear()` or prefix deletion. Removal failure attempts to restore the previous values and reports failure. Successful deletion stops sound and reloads into initial startup. Tested only in newly created browser contexts. Other-game and unrelated keys survived. `scripts/save-reset-check.mjs` also covers rollback and read failures.

## Validation and evidence

- All 34 existing/related test suites passed, including 220 themed AI battles and 478 tower-campaign battles.
- Source syntax check: 282 files.
- Browser tests: image failure/recovery, DECK editing/stress, responsive tower/locked routes/battle flow, scoped reset and cancellation. No page errors.
- Production build passed. Existing large-chunk warning remains (about 2.23 MB JS, 338 KB gzip).
- Production loading tests passed under `/MOB-PIECE-BATTLE/` with case-sensitive asset resolution.
- Evidence workspace: `C:\Users\CB-Me\Documents\Codex\2026-10-05\task\oct09-followup-proof` (`result.json`, `regression.json`, `build.txt`, screenshots at all three widths).
- Gacha before: `oct09-gacha-load-proof/before-false-failure.png`; after: `oct09-followup-proof/gacha-hidden-lazy-ok.png`.
- Tower before: `oct09-tower-proof/after-map-390.png`; after: `oct09-followup-proof/tower-depth-390.png`.
- DECK before: `oct09-deck-proof/before-top-390.png`; after: `oct09-followup-proof/deck-lineup-390.png` and `deck-starters-390.png`.

## Limits

Desktop Edge mobile viewport emulation was used; a physical iPhone Edge/WebKit session was not available. The exact matching failure path was reproduced locally, rather than observed directly on the user's phone.

Library preparation succeeded for IMG_6527/6528/6529, but the current official materialization helper received HTTP 403 downloading each image. Their pixels were not acquired or inspected. Local application screenshots above were actually opened and visually reviewed.
