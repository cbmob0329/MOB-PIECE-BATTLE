import {RANKS} from './competition.js';

export {RANKS};

// Final v170 MOB QUEST rewards: v137 standardized diamonds while preserving v132 coin values.
export const FREE_BATTLE = Object.freeze({
  easy:{label:'EASY',coins:1000,diamonds:1,unlockRank:'F'},
  hard:{label:'HARD',coins:3000,diamonds:1,unlockRank:'C'},
  inferno:{label:'INFERNO',coins:5000,diamonds:1,unlockRank:'A'}
});

export const RANK_MATCH_REWARDS = Object.freeze({
  F:{coins:1000,diamonds:3}, E:{coins:1500,diamonds:3}, D:{coins:2000,diamonds:3},
  C:{coins:3000,diamonds:3}, B:{coins:4000,diamonds:3}, A:{coins:5000,diamonds:3},
  S:{coins:7000,diamonds:3}, SS:{coins:10000,diamonds:3}
});

export const CPU_CONFIG = Object.freeze({
  free:{
    easy:{weights:{R:.70,SR:.25,SSR:.05},theme:false,adherence:0,ai:0},
    hard:{dist:{R:1,SR:11,SSR:11,UR:2},theme:'hard',adherence:.68,ai:1},
    inferno:{dist:{SR:2,SSR:15,UR:7,MOB:1},theme:'wide',adherence:.80,ai:2}
  },
  rank:{
    F:{dist:{R:25},theme:false,adherence:0,ai:0},
    E:{dist:{R:13,SR:12},theme:false,adherence:0,ai:0},
    D:{dist:{SR:13,SSR:12},theme:false,adherence:0,ai:0},
    C:{dist:{SR:10,SSR:12,UR:3},theme:false,adherence:0,ai:1},
    B:{dist:{SR:3,SSR:16,UR:6},theme:false,adherence:0,ai:1},
    A:{dist:{SR:5,SSR:17,UR:3},theme:'wide',adherence:.78,ai:2},
    S:{dist:{SR:1,SSR:16,UR:7,MOB:1},theme:'wide',adherence:.88,ai:3},
    SS:{dist:{SSR:15,UR:7,MOB:3},theme:'wide',adherence:.94,ai:3}
  }
});

export const CPU_THEMES = Object.freeze([
  {id:'grass-desert',tags:['41','42']},{id:'rural-neon',tags:['43','44']},
  {id:'underwater-tribe',tags:['45','46']},{id:'friends',tags:['13']},
  {id:'magma',tags:['47']},{id:'demon',tags:['48']},{id:'tough',tags:['32','39']},
  {id:'power',tags:['34','35']},{id:'speed',tags:['36','50','51']},
  {id:'magic',tags:['37']},{id:'dragon',tags:['38']},{id:'bond',tags:['40']}
]);

export const BATTLE_TIMING = Object.freeze({
  drawStep:105, drawHold:230, gather:520, startFlash:340,
  normalStrike:165, powerStrike:220, ko:420, betweenActionsMin:12,
  betweenActionsMax:40, roundResult:900, nextRound:600
});

export const TAG_EFFECT_CAPS = Object.freeze({
  lifePct:.60,hpPct:.60,attackPct:.60,defensePct:.60,speedPct:.50,
  enemyAttackPct:-.40,enemyDefensePct:-.40,enemySpeedPct:-.35,
  centerLifePct:.60,centerHpPct:.60,centerAttackPct:.60,centerDefensePct:.60,centerSpeedPct:.60
});

export const RARITY_POWER_HIT = Object.freeze({R:.16,SR:.21,SSR:.27,UR:.34,MOB:.40});
export const RARITY_VALUE = Object.freeze({R:1,SR:2,SSR:3,UR:4,MOB:5});
