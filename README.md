# MOB PIECE BATTLE HOME v1

A from-scratch, mobile-first home/menu foundation for **MOB PIECE BATTLE**.

## Start

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## What is included

- 390x844-first vertical mobile HOME
- Responsive support for 320–430px widths
- Safe-area aware top/bottom UI
- Figure showroom HOME instead of a web-card dashboard
- Large BATTLE CTA
- BATTLE MODE SELECT
  - FREE BATTLE
  - RANK MATCH
  - TOURNAMENT
  - SPECIAL BATTLE
  - BOSS RAID
- FIGURE / DECK / GACHA / MISSION / SHOP / EVENT expansion screens
- Data-driven menu, event, battle-mode and figure definitions
- Separate internal figure ID and visible sequential dex number
- Replaceable asset directories

## Add a real center figure

Put a transparent PNG at:

`public/assets/figures/center.png`

It will automatically replace the placeholder on HOME. The image uses `object-fit: contain` and preserves aspect ratio.

## Where to edit data

- `src/data/figures.js`
- `src/data/battleModes.js`
- `src/data/events.js`
- `src/data/menu.js`

## Asset folders

- `public/assets/figures/`
- `public/assets/backgrounds/`
- `public/assets/ui/`
- `public/assets/icons/`
- `public/assets/banners/`
- `public/assets/effects/`

The current project intentionally does **not** implement the battle engine, gacha logic, deck builder, ranking logic, tournament logic or boss battle logic yet.
