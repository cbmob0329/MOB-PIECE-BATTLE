import {publicAsset} from './public-assets.js';
// Editable STORY release data. Existing figure definitions and recipes remain authoritative.
export const towerVersion=1;
export const commonTowerIds=Array.from({length:31},(_,i)=>String(i+1).padStart(2,'0'));
export const initialTowerExtra=['MB001','MB003','MB006','MB007','MB009','MB010','ECL_S01','ECL_S02','ECL_M02','NIN_S01','NIN_S02','NIN_M01','FRG_S01','FRG_S02','FRG_M01','CRY_S01','CRY_S02','CRY_M01','RUN_S01','RUN_S02','RUN_M01','SPI_S01','SPI_S02','SPI_M01','BFX001','BFX009','BFX023','BFX035','BFX040','BFX050'];
const replace=(pairs)=>initialTowerExtra.map(id=>pairs[id]||id);
export const towerBanners=[
 {id:'tower-beginning',name:'陽だまりの仲間たち',subtitle:'陽だまりの旅団を、少しずつ強く。',color:'#82c6a4',backdrop:'assets/towers/layers/gacha-sun-retro-oct09.png',figureIds:['01','02','03','04','05','06','07','08','18','21','ECL_S01','ECL_S02','NIN_S01','NIN_S02','FRG_S01','FRG_S02','ECL_S03','NIN_S03','FRG_S03','ECL_M01','ECL_M02','NIN_M01','NIN_M02','FRG_M01','FRG_M02'],featuredIds:['NIN_S01','ECL_M02','FRG_S02'],pickupIds:['ECL_M02','NIN_M02','FRG_M02']},
 {id:'tower-guardians',name:'木もれびの仲間たち',subtitle:'木もれびの守り手に、新しい選択肢を。',color:'#8ba9d3',backdrop:'assets/towers/layers/gacha-moon-retro-oct09.png',figureIds:['09','10','11','12','13','14','15','17','19','20','CRY_S01','CRY_S02','RUN_S01','RUN_S02','SPI_S01','SPI_S02','CRY_S03','RUN_S03','SPI_S03','CRY_M01','CRY_M02','RUN_M01','RUN_M02','SPI_M01','SPI_M02'],featuredIds:['CRY_S01','SPI_M02','RUN_S02'],pickupIds:['SPI_M02','CRY_M02','RUN_M02']},
 {id:'tower-crossroads',name:'赤青の旅路',subtitle:'草原クリアで開放 · 双拳・結晶・霊灯の出会い',color:'#cc8953',requiresClear:'grass',extraIds:replace({ECL_S01:'DUA_S01',ECL_S02:'DUA_S03',ECL_M02:'DUA_M01'}),featuredIds:['DUA_S01','CRY_M01','BFX050'],pickupIds:['BFX050','BFX040','DUA_M01']},
 {id:'tower-lanterns',name:'月明かりの交差点',subtitle:'草原クリアで開放 · 霊火・機構・遺跡の混合ガチャ',color:'#82769f',requiresClear:'grass',extraIds:replace({NIN_S01:'GHO_S01',NIN_S02:'GHO_S02',NIN_M01:'GHO_M02'}),featuredIds:['GHO_S02','FRG_M01','BFX050'],pickupIds:['BFX050','BFX040','GHO_M02']}
].map(b=>({...b,figureIds:b.figureIds||[...commonTowerIds,...b.extraIds]}));
export const bannerUnlocked=(profile,banner)=>!banner.requiresClear||profile.towerProgress?.cleared?.includes(5)===true;
const triple=ids=>ids.flatMap(id=>[id,id,id]);
export const towerStarters=[
 {id:'a',name:'陽だまりの旅団',deck:[...triple(['01','02','03','04','05','06','07','08','18','21']),...['ECL_S01','ECL_S02','NIN_S01','NIN_S02','FRG_S01','FRG_S02'].flatMap(id=>[id,id]),'ECL_M02','NIN_M01','FRG_M01']},
 {id:'b',name:'木もれびの守り手',deck:[...triple(['09','10','11','12','13','14','15','17','19','20']),...['CRY_S01','CRY_S02','RUN_S01','RUN_S02','SPI_S01','SPI_S02'].flatMap(id=>[id,id]),'CRY_M01','RUN_M01','SPI_M01']}
];
export const towerMix={id:'mix',name:'組み替えC',deck:[...triple(['01','02','09','10','11','12','13','14','18','21']),...['ECL_S01','ECL_S02','CRY_S01','CRY_S02','RUN_S01','RUN_S02'].flatMap(id=>[id,id]),'ECL_M02','CRY_M01','RUN_M01']};
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
 const strategy={atk:1,def:1,skill:'support',fusionEvery:floor===5?3:4,fusionLimit:floor<=2?0:1,skillEvery:floor===5?3:4,skillLimit:floor<=2?0:1};
 return {id:'tower-grass-'+floor,name:spec.opponent,rank:spec.rank,deck:triple(ids),strategy,themeTagIds:[]};
}
