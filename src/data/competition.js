export const RANKS = Object.freeze(['F','E','D','C','B','A','S','SS']);

export const QUALIFIER_POINTS = Object.freeze({
  F:{win:1,loss:-1}, E:{win:2,loss:-1}, D:{win:3,loss:-1},
  C:{win:4,loss:-2}, B:{win:5,loss:-2}, A:{win:6,loss:-2},
  S:{win:8,loss:-3}, SS:{win:12,loss:-3}
});

export const QUALIFIER_REWARDS = Object.freeze({
  F:{coins:1000,diamonds:1}, E:{coins:1500,diamonds:2}, D:{coins:2000,diamonds:3},
  C:{coins:3000,diamonds:5}, B:{coins:5000,diamonds:7}, A:{coins:8000,diamonds:10},
  S:{coins:10000,diamonds:12}, SS:{coins:12000,diamonds:15}
});

// F/SSはユーザー指定。中間ランクは段階的に価値が上がるよう調整。
export const RANK_UP_REWARDS = Object.freeze({
  F:{runnerUp:{coins:5000,diamonds:10},winner:{coins:10000,diamonds:30}},
  E:{runnerUp:{coins:8000,diamonds:20},winner:{coins:15000,diamonds:45}},
  D:{runnerUp:{coins:12000,diamonds:30},winner:{coins:22000,diamonds:60}},
  C:{runnerUp:{coins:18000,diamonds:45},winner:{coins:32000,diamonds:85}},
  B:{runnerUp:{coins:25000,diamonds:65},winner:{coins:45000,diamonds:120}},
  A:{runnerUp:{coins:33000,diamonds:90},winner:{coins:62000,diamonds:170}},
  S:{runnerUp:{coins:42000,diamonds:120},winner:{coins:80000,diamonds:230}},
  SS:{runnerUp:{coins:50000,diamonds:150},winner:{coins:100000,diamonds:300}}
});

export const MASTER_BONUS = Object.freeze({coins:20000,diamonds:30});
export const MASTER_PRIZE = Object.freeze({coins:10000000,diamonds:1000});
export const QUALIFIER_MONTHS = Object.freeze([1,2,3,4,5,6,7,8,9,10,11]);
export const QUALIFIER_WEEKS = Object.freeze([1,3]);
export const RANK_UP_MONTHS = Object.freeze([4,7,11]);
export const RANK_UP_WEEK = 2;
export const LEAGUE_FINAL_MONTH = 12;
export const LEAGUE_FINAL_WEEKS = Object.freeze([1,2]);
export const MASTER_CHALLENGE_WEEK = 3;
export const TOP8 = 8;

export const CPU_NAMES = Object.freeze([
  'ALTO','BAMBI','CANDY','DODO','ECHO','FIZZ','GUM','HACHI',
  'IRON','JAM','KILO','LULU','MINT','NOVA','ORCA','PICO',
  'QUU','RICO','SODA','TAMA','UMI','VOLT','WAVE','XENO',
  'YUZU','ZERO','AMBER','BOLT','COCO','DUNE','ELMO','FROG'
]);

export function nextRank(rank){const i=RANKS.indexOf(rank);return i<0||i>=RANKS.length-1?rank:RANKS[i+1];}
export function isQualifierWeek(month,week){return month<=11&&QUALIFIER_WEEKS.includes(week);}
export function isRankUpWeek(month,week){return RANK_UP_MONTHS.includes(month)&&week===RANK_UP_WEEK;}
export function weekKey({year,month,week}){return `${year}-${String(month).padStart(2,'0')}-${week}`;}
export function labelDate({year,month,week}){return `${year}年目 ${month}月 第${week}週`;}
