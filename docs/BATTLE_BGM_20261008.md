# BATTLE BGM / SE update

Base commit: 0fceffd. Only MOB-PIECE-BATTLE changed; no source audio changed, no commit/push/deploy performed by this task. Machine-readable original-name / ASCII-runtime / SHA256 mapping: BATTLE_BGM_20261008.json.

## BGM selection

003 is the normal battle default. MOB tower (all floors) takes priority with005. Floor5 masters use002 grass,006 town,007 castle,008 sea,011 desert,012 neon; region II uses the same named-region mapping. Unspecified regions keep normal battle music. Non-tower modes always use003. Match requests carry explicit towerId/floor so titles are not parsed.

Eight MP3 songs only. Existing user-20261007/battle.mp3 is reused as002; seven new ASCII copies live in bgm-20261008. WAV originals and001/002 remain untouched; no duplicate001 WAV is shipped. Other-game-only004/009/010/013/014/015 are not added to this runtime.

One streaming Audio element is reused for all BGM, with a WebAudio gain bridge where supported (element-volume fallback otherwise). Existing gain multiplier0.22 and saved master volume/mute are retained. Switches fade out160ms, pause and replace the source, then fade in240ms; tracks never intentionally overlap. Result stops fade out; disposal stops immediately. Visibility pauses and resumes the same position; gesture unlock, zero volume, retry and stale play promises are guarded.

No musical bar/beat loop markers were provided. Native looping repeats each entire media file from0 to its own duration, without invented musical cuts. The eight whole-file durations are approximately98.36–106.28s. Actual end-to-start playback was technically checked. Subjective seam quality and physical-device/iOS listening remain unverified.

## Four damaged source effects

Current source052/065/066/067 all fail browser decoding and begin with the same non-audio bytes;065 and066 are byte-identical. WAV RIFF headers are absent. Original source files are preserved, rather than silently repaired.

Git commit a22caa9 contains valid versions of all four:052 decodes to8.16s and065/066/067 to1s. Runtime052/065/067 are recovered from those Git blobs. Existing healthy runtime066 already matches the recovered blob and is retained. This is historical recovery, not a claim that the current damaged updates were decoded.

Memo-based skill assignments:052 → figure167 Dragon Breath;065 → figure208 Hell Slash;066 → debuff skills;067 → mq:eventfig/10 Potion Shower. Gameplay behavior is unchanged. Total numbered SE files37.

## Validation

- Audio unit tests:117 attribute variants +31 cues, settings, scopes, cancellation, fallbacks.
- New BGM test:8 exact source/runtime hashes, unique songs,95 tower/floor mappings plus other-mode default.
- Browser:8 real MP3 playback, one element, WebAudio gain, locked startup, rapid switching, full-file loop wrap, mute/zero/volume, simulated visibility, mute-during-fade race, scope end,37 SE decode, no page errors.
- Campaign regression:19 towers /239 legal enemies /478 completed battles. Legacy tower regression:50 completed battles and save/reward/deck invariants.
- No listening-quality claim: these are technical decode/playback measurements. iOS Safari/physical devices and musical loop seamlessness not auditioned.

Run pnpm test:bgm. Browser check: node scripts/oct09-bgm-browser.mjs with MPB_BASE_URL (default localhost5208) and MPB_BGM_REPORT (output file) if needed. No save data is reused by browser tests.
