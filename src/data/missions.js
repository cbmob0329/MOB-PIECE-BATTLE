export const MISSION_RANKS=['F','E','D','C','B','A','S','SS'];
export const RANK_THRESHOLDS={F:[1,5,15,30,45,60,75,100],E:[115,130,145,160,175,185,200,215,230]};
let last=230;for(let i=2;i<MISSION_RANKS.length;i++){RANK_THRESHOLDS[MISSION_RANKS[i]]=Array.from({length:8+i},()=>last+=15);}
export const STANDARD_REWARD={diamonds:5,coins:1000};
export const MISSIONS=MISSION_RANKS.flatMap((rank,index)=>[
 ...['battles','wins','freeBattles','freeWins'].flatMap(metric=>RANK_THRESHOLDS[rank].map(target=>({id:`v2:${metric}:${target}`,rank,category:({battles:'累計対戦',wins:'累計勝利',freeBattles:'フリー対戦',freeWins:'フリー勝利'})[metric],title:`${rank} · ${target}回`,description:({battles:'全モードで対戦',wins:'全モードで勝利',freeBattles:'フリーバトルで対戦',freeWins:'フリーバトルで勝利'})[metric]+` ${target}回`,metric,target,reward:STANDARD_REWARD}))),
 {id:`v2:promotion:${rank}`,rank,category:'ミッション昇格',title:index===7?'SSランク全達成':`${MISSION_RANKS[index+1]}ランクへ昇格`,description:`累計対戦・累計勝利の${rank}ランクをすべて達成`,metric:'rankCompletion',target:RANK_THRESHOLDS[rank].at(-1),reward:{diamonds:50,coins:10000}},
 {id:`v2:rank:${rank}`,rank:'F',category:'ランク到達',title:`プレイヤー ${rank}ランク`,description:`タワーで${rank}ランクの相手に勝利（過去の到達ランクも対象）`,metric:'playerRank',target:index+1,reward:STANDARD_REWARD}
]);
