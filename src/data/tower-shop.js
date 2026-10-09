// Fixed contents, lifetime stock. Deck cubes are cosmetic equipment, never random draws.
export const towerShopItems=[
 ...['014','015','016','017'].map(n=>({id:'bakery-'+n,kind:'figure',figureId:'piece:'+n,currency:'diamonds',price:5,limit:1,note:'草原タワーのパン屋 · 1体を確実に迎える'})),
 ...['026','027','028','029'].map(n=>({id:'balloon-'+n,kind:'figure',figureId:'piece:'+n,price:null,limit:1,requiresTower:'desert',note:'砂漠タワーのオブジェ · 2属性を持つシード'})),
 {id:'single-tassel',kind:'figure',figureId:'ECL_S03',price:600,limit:1,note:'手札補充と小さな回復'},
 {id:'single-sumine',kind:'figure',figureId:'NIN_S03',price:700,limit:1,note:'味方2体の攻撃を支援'},
 {id:'single-pufu',kind:'figure',figureId:'FRG_S03',price:400,limit:1,note:'攻撃力を伸ばす風の助け'},
 {id:'single-oniru',kind:'figure',figureId:'CRY_S03',price:450,limit:1,note:'相手の守りを崩す'},
 {id:'single-toru',kind:'figure',figureId:'RUN_S03',price:500,limit:1,note:'攻撃を弱め、味方を守る'},
 {id:'cube-sprout',kind:'cube',cubeId:'sprout',price:1500,limit:1,note:'若葉色のデッキキューブ。性能は変わりません。'},
 {id:'cube-comet',kind:'cube',cubeId:'comet',price:1800,limit:1,note:'星空色のデッキキューブ。性能は変わりません。'}
];
