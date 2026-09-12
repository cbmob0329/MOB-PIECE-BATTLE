export const MISSIONS = Object.freeze([
  {id:'deck_ready',category:'DECK',title:'25 PIECES',description:'有効な25体デッキを1つ完成させる',metric:'deckReady',target:1,reward:{coins:3000,diamonds:3}},

  {id:'battle_001',category:'BATTLE',title:'はじめての対戦',description:'対戦を1回プレイ',metric:'battles',target:1,reward:{coins:1000,diamonds:1}},
  {id:'battle_005',category:'BATTLE',title:'バトルスタート',description:'対戦を5回プレイ',metric:'battles',target:5,reward:{coins:3000,diamonds:3}},
  {id:'battle_010',category:'BATTLE',title:'10 BATTLES',description:'対戦を10回プレイ',metric:'battles',target:10,reward:{coins:5000,diamonds:5}},
  {id:'battle_025',category:'BATTLE',title:'バトル常連',description:'対戦を25回プレイ',metric:'battles',target:25,reward:{coins:10000,diamonds:15}},
  {id:'battle_050',category:'BATTLE',title:'50 BATTLES',description:'対戦を50回プレイ',metric:'battles',target:50,reward:{coins:15000,diamonds:20}},
  {id:'battle_100',category:'BATTLE',title:'100 BATTLES',description:'対戦を100回プレイ',metric:'battles',target:100,reward:{coins:30000,diamonds:30}},
  {id:'battle_250',category:'BATTLE',title:'250 BATTLES',description:'対戦を250回プレイ',metric:'battles',target:250,reward:{coins:50000,diamonds:50}},
  {id:'battle_500',category:'BATTLE',title:'BATTLE LEGEND',description:'対戦を500回プレイ',metric:'battles',target:500,reward:{coins:100000,diamonds:100}},

  {id:'win_001',category:'WIN',title:'FIRST WIN',description:'対戦で1勝する',metric:'wins',target:1,reward:{coins:1000,diamonds:1}},
  {id:'win_010',category:'WIN',title:'10 WINS',description:'対戦で10勝する',metric:'wins',target:10,reward:{coins:5000,diamonds:5}},
  {id:'win_025',category:'WIN',title:'25 WINS',description:'対戦で25勝する',metric:'wins',target:25,reward:{coins:10000,diamonds:15}},
  {id:'win_050',category:'WIN',title:'50 WINS',description:'対戦で50勝する',metric:'wins',target:50,reward:{coins:18000,diamonds:22}},
  {id:'win_100',category:'WIN',title:'100 WINS',description:'対戦で100勝する',metric:'wins',target:100,reward:{coins:40000,diamonds:40}},
  {id:'win_250',category:'WIN',title:'VICTORY MASTER',description:'対戦で250勝する',metric:'wins',target:250,reward:{coins:100000,diamonds:100}},

  {id:'collect_010',category:'COLLECTION',title:'10 FIGURES',description:'異なるフィギュアを10種所持',metric:'uniqueOwned',target:10,reward:{coins:3000,diamonds:3}},
  {id:'collect_025',category:'COLLECTION',title:'25 FIGURES',description:'異なるフィギュアを25種所持',metric:'uniqueOwned',target:25,reward:{coins:8000,diamonds:10}},
  {id:'collect_050',category:'COLLECTION',title:'50 FIGURES',description:'異なるフィギュアを50種所持',metric:'uniqueOwned',target:50,reward:{coins:10000,diamonds:15}},
  {id:'collect_100',category:'COLLECTION',title:'100 FIGURES',description:'異なるフィギュアを100種所持',metric:'uniqueOwned',target:100,reward:{coins:30000,diamonds:30}},
  {id:'collect_200',category:'COLLECTION',title:'200 FIGURES',description:'異なるフィギュアを200種所持',metric:'uniqueOwned',target:200,reward:{coins:75000,diamonds:75}},
  {id:'collect_all',category:'COLLECTION',title:'FIGURE COMPLETE',description:'公開中の全フィギュアを図鑑登録',metric:'collectionComplete',target:1,reward:{coins:100000,diamonds:100}},

  {id:'gacha_010',category:'GACHA',title:'10 SUMMONS',description:'ガチャを累計10回引く',metric:'gachaDraws',target:10,reward:{coins:3000,diamonds:3}},
  {id:'gacha_050',category:'GACHA',title:'50 SUMMONS',description:'ガチャを累計50回引く',metric:'gachaDraws',target:50,reward:{coins:10000,diamonds:15}},
  {id:'gacha_100',category:'GACHA',title:'100 SUMMONS',description:'ガチャを累計100回引く',metric:'gachaDraws',target:100,reward:{coins:20000,diamonds:25}},
  {id:'convert_001',category:'GACHA',title:'LIMIT OVER',description:'所持上限超過で1体ルビー変換',metric:'conversions',target:1,reward:{coins:1000,diamonds:1}},
  {id:'convert_010',category:'GACHA',title:'RUBY CONVERTER',description:'所持上限超過で10体ルビー変換',metric:'conversions',target:10,reward:{coins:10000,diamonds:15}},
  {id:'convert_050',category:'GACHA',title:'RUBY FACTORY',description:'所持上限超過で50体ルビー変換',metric:'conversions',target:50,reward:{coins:50000,diamonds:50}},

  {id:'qualifier_002',category:'LEAGUE',title:'MOB LEAGUE DEBUT',description:'MOBリーグ予選を2試合プレイ',metric:'qualifierBattles',target:2,reward:{coins:3000,diamonds:3}},
  {id:'qualifier_020',category:'LEAGUE',title:'QUALIFIER 20',description:'MOBリーグ予選を20試合プレイ',metric:'qualifierBattles',target:20,reward:{coins:10000,diamonds:15}},
  {id:'league_001',category:'LEAGUE',title:'TOP 8 STAGE',description:'MOBリーグ本戦を1試合プレイ',metric:'leagueBattles',target:1,reward:{coins:10000,diamonds:15}},
  {id:'league_007',category:'LEAGUE',title:'FULL LEAGUE',description:'MOBリーグ本戦を累計7試合プレイ',metric:'leagueBattles',target:7,reward:{coins:25000,diamonds:25}},
  {id:'rankup_001',category:'TOURNAMENT',title:'TOURNAMENT WIN',description:'ランクアップトーナメントで1勝',metric:'rankUpWins',target:1,reward:{coins:5000,diamonds:5}},
  {id:'rankup_010',category:'TOURNAMENT',title:'CUP FIGHTER',description:'ランクアップトーナメントで10勝',metric:'rankUpWins',target:10,reward:{coins:30000,diamonds:30}},
  {id:'master_001',category:'MASTER',title:'MOB MASTER',description:'MOB MASTER決定戦で勝利し称号を獲得',metric:'masterWins',target:1,reward:{coins:100000,diamonds:100}}
]);
