# Tower / commerce / audio local changes

Canonical repo: C:/Users/CB-Me/Documents/GitHub/MOB-PIECE-BATTLE. Verified origin cbmob0329/MOB-PIECE-BATTLE; current HEAD 52ff644. This task did not commit, push, or publish. Existing fusion-line / selected-instance fixes are retained.

## Presentation

- Paired player/opponent VS artwork in tower setup and battle intro. Existing character assets, independent flat cartoon background and frame.
- Nineteen tower sprites replaced with a simple outlined retro atlas; horizontal floor navigation; locked floor previews contain only unlock requirements. Forged locked floor requests rejected.
- THEME FREE BATTLE entries hidden; ordinary CPU entries retained. Theme engine/data and player mixing remain intact.
- Seed detail fusion-target list and production notes removed from display only; recipes/deck assist remain.
- Gacha header uses shared wallet; debug funding is behind explicit testMode. Two separate flat illustrated banners with floating character layers. Cubes retain existing design.

## Starter and acquisition

New starter A/B each contain 45 figures (42 Seed + 3 Middle), with six key Seeds at two copies. IDs of A and B remain mutually exclusive. Already-granted profiles are unchanged. The mix template remains legal with new ownership.

Initial banners: tower-beginning / tower-guardians, each 25 figures: ten corresponding common Seeds, nine Seeds from the three starter families, six corresponding Middles. No MOB in initial pools. Extra family Seeds make every included Middle reachable. Example: ECL_M01 requires ECL_S02 + ECL_S03; the missing S03 is now included. Two later 61-figure banners retain their unlock gates.

Prices, rarity weight constants, special probability and guarantee implementation are unchanged. Restricting the pool changes effective normalized rarity probabilities; lineup displays the recalculated actual probabilities.

Shop contains fixed single copies of ECL_S03 (600), NIN_S03 (700), FRG_S03 (400), CRY_S03 (450), RUN_S03 (500), plus cosmetic sprout (1500) / comet (1800) cubes. Currency is coins. Each product has lifetime purchase limit 1. Figure ownership at 3 blocks further purchase. Stale clicks, insufficient balance and unowned cosmetic equip are rejected; profile commits are atomic on save failure. Existing saves are not reduced or reassigned.

## Audio / image diagnosis

The old reported 7 images / 3 failures did not reproduce on this PC. Current Vite and case-sensitive source hosting decode all tested gacha images. Failed image URLs now emit mpb:image-error and a bounded per-screen console warning. A CSS custom-property background URL did resolve relative to the stylesheet before; VS/banner background URLs are now absolute based on document.baseURI.

34 numbered audio files load successfully. Healthy recovered 066.wav is now used for debuffs; older recovery notes describing its corruption refer to the prior disk. Draw=003, summon/fusion=055, guard=007, turn=100, battle/start=097, end=003. Other attribute mappings remain. Sample onset silence is trimmed at runtime (034 had approximately 0.26s silence), minimum 0.45s playback prevents short presentation durations cutting off onset, sample gain increases 0.45 to 0.7 while respecting saved volume/mute and limiter. Touch/click unlock and rejection diagnostics added.

## Validation

- New commerce regression: new/old startup, deck legality, pool boundaries, draw costs/guarantees, stock/caps/stale clicks, cube ownership, save failure atomicity.
- Tower regression: 7 suites, 50 battles completed; initial and reserve recipe closure; saves and series snapshots retained.
- Mobile Edge browser at 320/390/430: tower lock/forged entry, setup/intro portraits, battle/return, hidden theme entries; gacha/shop images, overflow, purchase and cube ownership.
- Case-sensitive source server under /MOB-PIECE-BATTLE/ passes gacha/shop and audio test.
- WebAudio: 22 direct event/attribute/support cues, 34 decoded samples, mute/zero-volume/context suspend/resume; actual engine-to-director playback recorded separately.
- Broad regression: 47 non-browser checks, 44 passed after pool expectation updates. Three legacy assertions remain: battle-corrections-check tag-count cap; oct06-runtime-check expects no option for a now-valid strengthening pair; oct06-stage-rules-check expects BFX050 ATK250 versus current235. These source rules were not changed here. The historical gacha-state browser check targets absent port5173; current browser coverage uses port5208 and case-sensitive5206.

Evidence in sibling Codex task workspace: oct09-tower-proof (before/after mobile screenshots); oct09-commerce-proof (screenshots, results and broad regression output); oct09-case-proof; oct09-audio-proof/engine-playback.json. Node reports retain the first failed attempts; later focused reruns passed as described.

Not verified: physical-device subjective loudness, iOS Safari, published deployment. Six requested mascot variants remain blocked by the existing local-reference image transfer limitation; no guessed mascot was substituted. No user save was used in browser checks.
