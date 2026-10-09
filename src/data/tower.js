import {publicAsset} from './public-assets.js';
// Editable STORY release data. Existing figure definitions and recipes remain authoritative.
export const towerVersion=2;
export const commonTowerIds=Array.from({length:31},(_,i)=>String(i+1).padStart(2,'0'));
export const initialTowerExtra=['MB001','MB003','MB006','MB007','MB009','MB010','ECL_S01','ECL_S02','ECL_M02','NIN_S01','NIN_S02','NIN_M01','FRG_S01','FRG_S02','FRG_M01','CRY_S01','CRY_S02','CRY_M01','RUN_S01','RUN_S02','RUN_M01','SPI_S01','SPI_S02','SPI_M01','BFX001','BFX009','BFX023','BFX035','BFX040','BFX050'];
const replace=(pairs)=>initialTowerExtra.map(id=>pairs[id]||id);
export const towerBanners=[
 {"id":"tower-beginning","name":"陽だまりの仲間たち","color":"#82c6a4","backdrop":"assets/towers/layers/gacha-sun-retro-oct09.png","subtitle":"3つのスターターに、新しい仲間を少しずつ。","figureIds":["piece:002","piece:003","piece:004","piece:005","piece:006","piece:007","piece:008","piece:009","piece:010","piece:011","piece:012","piece:013","piece:022","piece:023","piece:024","piece:025","ECL_S01","NIN_S01","FRG_S01","piece:031","piece:042","CRY_S01","RUN_S01","SPI_S01","piece:035","piece:044","DUA_S01","GHO_S01","piece:019","MB006","01","02","ECL_M02","CRY_M01","DUA_M01"],"featuredIds":["ECL_M02","CRY_S01","DUA_S01"],"pickupIds":["ECL_M02","CRY_M01","DUA_M01"]},
 {"id":"tower-guardians","name":"木もれびの仲間たち","color":"#8ba9d3","backdrop":"assets/towers/layers/gacha-moon-retro-oct09.png","subtitle":"3つのスターターに、新しい仲間を少しずつ。","figureIds":["piece:002","piece:003","piece:004","piece:005","piece:006","piece:007","piece:008","piece:009","piece:010","piece:011","piece:012","piece:013","piece:022","piece:023","piece:024","piece:025","ECL_S02","NIN_S02","FRG_S02","piece:032","piece:043","CRY_S02","RUN_S02","SPI_S02","piece:037","piece:045","DUA_S02","GHO_S02","MB010","09","11","NIN_M01","RUN_M01","GHO_M02"],"featuredIds":["RUN_M01","DUA_S02","ECL_S02"],"pickupIds":["RUN_M01","GHO_M02","NIN_M01"]},
 {"id":"tower-adventure","name":"夕焼けの仲間たち","color":"#d09b64","backdrop":"assets/towers/layers/gacha-sun-retro-oct09.png","subtitle":"3つのスターターに、新しい仲間を少しずつ。","figureIds":["piece:002","piece:003","piece:004","piece:005","piece:006","piece:007","piece:008","piece:009","piece:010","piece:011","piece:012","piece:013","piece:022","piece:023","piece:024","piece:025","ECL_S03","NIN_S03","FRG_S03","piece:033","CRY_S03","RUN_S03","SPI_S03","piece:041","DUA_S03","GHO_S03","piece:018","04","15","ECL_M02","CRY_M01","DUA_M01"],"featuredIds":["DUA_M01","ECL_S03","CRY_S03"],"pickupIds":["DUA_M01","ECL_M02","CRY_M01"]},
 {"id":"tower-crossroads","name":"リングの挑戦者たち","subtitle":"草原クリア記念 · 拳を合わせて、ミドルへ！","color":"#ef6949","theme":"ring","requiresClear":"grass","figureIds":["01","02","03","04","05","piece:010","piece:012","piece:023","piece:024","piece:018","piece:019","piece:020","piece:021","piece:042","piece:043","piece:044","piece:045","piece:046","piece:047","piece:048","MB001","DUA_S01","DUA_S02","DUA_S03","DUA_M01","DUA_M02"],"featuredIds":["piece:046","piece:021","piece:048"],"pickupIds":["piece:021","piece:048","piece:046"]},
 {"id":"tower-lanterns","name":"モブ兵士の進軍","subtitle":"草原クリア記念 · 仲間を集めて、部隊を編成！","color":"#70a77a","theme":"soldiers","requiresClear":"grass","figureIds":["01","02","03","04","05","piece:010","piece:012","piece:023","piece:024","piece:031","piece:032","piece:033","piece:034","piece:035","piece:036","piece:037","piece:038","piece:040","piece:041"],"featuredIds":["piece:036","piece:034","piece:038"],"pickupIds":["piece:036","piece:034","piece:040"]}
].map(b=>({...b,figureIds:[...new Set([...(b.figureIds||[...commonTowerIds,...b.extraIds]),...(b.requiresClear?[]:["piece:002","piece:003","piece:004","piece:005","piece:006","piece:007","piece:008","piece:009","piece:010","piece:011","piece:012","piece:013","piece:022","piece:023","piece:024","piece:025"])])]}));
export const bannerUnlocked=(profile,banner)=>!banner.requiresClear||profile.towerCampaign?.regions?.[banner.requiresClear]?.cleared?.includes(5)===true||banner.requiresClear==='grass'&&profile.towerProgress?.cleared?.includes(5)===true;
const triple=ids=>ids.flatMap(id=>[id,id,id]);
export const towerStarters=[
  {
    "id": "a",
    "name": "陽だまりの旅団",
    "deck": [
      "01",
      "01",
      "01",
      "02",
      "02",
      "02",
      "03",
      "03",
      "03",
      "04",
      "04",
      "04",
      "05",
      "05",
      "05",
      "06",
      "06",
      "06",
      "07",
      "07",
      "07",
      "08",
      "08",
      "08",
      "18",
      "18",
      "18",
      "21",
      "21",
      "21",
      "ECL_S01",
      "ECL_S01",
      "ECL_S02",
      "ECL_S02",
      "NIN_S01",
      "NIN_S01",
      "NIN_S02",
      "NIN_S02",
      "FRG_S01",
      "FRG_S01",
      "FRG_S02",
      "FRG_S02",
      "piece:002",
      "piece:006",
      "ECL_M02"
    ]
  },
  {
    "id": "b",
    "name": "木もれびの守り手",
    "deck": [
      "09",
      "09",
      "09",
      "10",
      "10",
      "10",
      "11",
      "11",
      "11",
      "12",
      "12",
      "12",
      "13",
      "13",
      "13",
      "14",
      "14",
      "14",
      "15",
      "15",
      "15",
      "17",
      "17",
      "17",
      "19",
      "19",
      "19",
      "20",
      "20",
      "20",
      "CRY_S01",
      "CRY_S01",
      "CRY_S02",
      "CRY_S02",
      "RUN_S01",
      "RUN_S01",
      "RUN_S02",
      "RUN_S02",
      "SPI_S01",
      "SPI_S01",
      "SPI_S02",
      "SPI_S02",
      "piece:003",
      "piece:005",
      "CRY_M01"
    ]
  },
  {
    "id": "c",
    "name": "夕焼けの冒険隊",
    "deck": [
      "01",
      "01",
      "01",
      "02",
      "02",
      "02",
      "09",
      "09",
      "09",
      "10",
      "10",
      "10",
      "11",
      "11",
      "11",
      "12",
      "12",
      "12",
      "13",
      "13",
      "13",
      "14",
      "14",
      "14",
      "18",
      "18",
      "18",
      "21",
      "21",
      "21",
      "ECL_S01",
      "ECL_S01",
      "ECL_S02",
      "ECL_S02",
      "CRY_S01",
      "CRY_S01",
      "CRY_S02",
      "CRY_S02",
      "RUN_S01",
      "RUN_S01",
      "RUN_S02",
      "RUN_S02",
      "piece:004",
      "piece:008",
      "RUN_M01"
    ]
  }
];
export const towerMix={id:'mix',name:'組み替えC',deck:[...towerStarters[2].deck]};
export const grassTower={id:'grass',title:'モブタワーマスターへの道',name:'草原の塔',background:publicAsset('assets/backgrounds/grassland-five-floor-tower.png'),masterId:'MB025',floors:[
 {id:1,rank:'F',name:'はじまりの一歩',opponent:'草原の見習い ハル'},
 {id:2,rank:'F',name:'風の通り道',opponent:'風追いのナギ'},
 {id:3,rank:'E',name:'木もれびの広場',opponent:'若葉の守り手'},
 {id:4,rank:'E',name:'頂上への階段',opponent:'草原の案内人'},
 {id:5,rank:'D',name:'草原のマスター',opponent:'草原マスター ハナミ',dialogue:'ここまで登ってきたね。3つのデッキに、きみらしさを込めて。さあ、草原の風と勝負しよう！'}
]};
// No unapproved numeric fig IDs, passive summons or off-theme fallback cards.
const seeds=['MB001','MB002','MB003','MB005','MB006','MB007','MB009','MB010','MB017','MB018','MB021','MB022','MB023','MB027','MB029'];
export function towerEnemy(floor){
 const spec=grassTower.floors.find(f=>f.id===floor);if(!spec)throw Error('階が見つかりません');
 let ids=[...seeds];if(floor>=3)ids.splice(0,3,'MB019','MB025','MB035');if(floor===5)ids.splice(3,3,'MB024','MB037','MB048');
 const strategy={atk:1,def:1,skill:'support',fusionEvery:floor===5?3:4,fusionLimit:1,...(floor<=2?{seedOnly:true}:{} ),skillEvery:floor===5?3:4,skillLimit:floor<=2?0:1};
 return {id:'tower-grass-'+floor,name:spec.opponent,rank:spec.rank,deck:triple(ids),strategy,themeTagIds:[]};
}
