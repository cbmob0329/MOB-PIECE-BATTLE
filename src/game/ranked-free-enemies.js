// Rank settings use the same legal actions and visible board as every opponent.
export const rankedEnemySpecs=[
 ['rookie-haru','F','若葉のハル','grass',0],
 ['rookie-nagi','F','潮風のナギ','sea',0],
 ['rookie-rin','E','音合わせのリン','music',3],
 ['adept-sara','D','砂紋のサラ','desert',null],
 ['adept-sumi','C','煤隊長スミ','susu',null],
 ['adept-keke','C','機巧士ケケル','keke',null],
 ['expert-ame','B','飴槍のアメリア','ame',null],
 ['expert-leon','B','光騎士レオン','hero',null],
 ['expert-noa','A','深海司令ノア','sea',null],
 ['master-luna','S','四姉妹の導師ルナ','lilith',null],
 ['master-zen','SS','封印王ゼノ','castle',null],
 ['master-beat','SS','極音指揮者ビート','music',null]
].map(([id,rank,name,baseThemeId,middleCount])=>({id,rank,name,baseThemeId,middleCount,...(id==='rookie-rin'?{preferredMiddleId:'piece:006',materialSupportIds:['04']}:{})}));
export const rankSettings={
 F:{seedOnly:true,fusionEvery:4,fusionLimit:1,skillEvery:3,skillLimit:1},
 E:{fusionEvery:2,fusionLimit:1,skillEvery:2,skillLimit:1},
 D:{fusionEvery:1,fusionLimit:2,skillEvery:1,skillLimit:1},
 C:{fusionEvery:1,fusionLimit:3,skillEvery:1,skillLimit:2},
 B:{fusionEvery:1,fusionLimit:4,skillEvery:1,skillLimit:3},
 A:{fusionEvery:1,fusionLimit:6,skillEvery:1,skillLimit:4},
 S:{fusionEvery:1,fusionLimit:8,skillEvery:1,skillLimit:6},
 SS:{fusionEvery:1,fusionLimit:20,skillEvery:1,skillLimit:20}
};
