// User-requested tactical update, 2026-10-04. IDs 0–101 stay stable.
export const revisedTexts={
 7:'相手攻撃宣言時 | このフィギュアを対象にした攻撃を1回無効にし、自分ライフを10回復する。',
 30:'自分メイン | このターンATK+20。このフィギュアがこのターン相手を撃破した時、1体ドローする。',
 47:'自分メイン | 次の相手ターン終了まで、このフィギュアのATK+30、DEF+20。',
 91:'自分メイン | 味方1体のATK+20。その味方がこのターン相手を撃破した時、1体ドローする。'
};
export const revisedPlans={7:{cancelAttack:true,heal:10},30:{atk:20,killDraw:true},47:{atk:30,def:20,duration:'next-opponent'},91:{target:'ally',atk:20,killDraw:true}};
export const newSkills=[
 {program:102,name:'リミックス・リロード',text:'自分メイン | 手札の別の1体を墓地へ送り、シードデッキから2体ドローする。',plan:{discardCost:1,draw:2}},
 {program:103,name:'同調アンテナ',text:'自分メイン | 自分ライフを20消費し、このフィギュアと同じ属性を1つ以上持つシード1体をデッキから手札へ加える。',plan:{lifeCost:20,attributeSearch:true}},
 {program:104,name:'おかえりセッション',text:'自分メイン | 自分の墓地からシード1体を手札へ戻す。',plan:{recoverSeed:true}},
 {program:105,name:'カラー・ユニゾン',text:'自分メイン | 次の相手ターン終了まで、このフィギュアと同じ属性を1つ以上持つ味方全体のATKとDEFを+20する。',plan:{target:'attributeAllies',atk:20,def:20,duration:'next-opponent'}},
 {program:106,name:'ノイズ・スナップ',text:'自分メイン | 相手1体のATK-10。相手ライフに20ダメージを与える。',plan:{target:'enemy',atk:-10,lifeDamage:20}},
 {program:107,name:'リターン・ビート',text:'自分メイン | 手札の別の1体を墓地へ送り、相手フィールドのシード1体を相手の手札へ戻す。',plan:{discardCost:1,target:'enemySeed',bounceEnemy:true}},
 {program:108,name:'リフレクト・ポップ',text:'相手攻撃宣言時 | このフィギュアを対象にした攻撃を無効にし、相手ライフに20ダメージを与える。',plan:{cancelAttack:true,lifeDamage:20}},
 {program:109,name:'サイレント・カット',text:'相手スキル発動時 | 自分ライフを30消費し、相手のソウルスキルを無効にする。その後1体ドローする。',plan:{lifeCost:30,cancelSkill:true,draw:1}},
 {program:110,name:'テンポ・ブレーキ',text:'自分メイン | 相手1体のDEF-10。次の相手ターン終了まで、そのフィギュアはフュージョン素材にできない。シードデッキから1体ドローする。',plan:{target:'enemy',def:-10,fusionLock:true,draw:1}},
 {program:111,name:'トップ・チューニング',text:'自分メイン | シードデッキの上から3体までを確認し、その中の1体を手札へ加える。残りの順番は変えない。',plan:{scout:true}}
];
export function applyTacticalText(f,texts){const p=f.soulSkill.program;if(!revisedTexts[p])return f;const [timingLabel,effect]=texts[p].split(' | ');return {...f,soulSkill:{...f.soulSkill,timingLabel,effect,description:effect,sourceText:effect},source:{...f.source,decision:(f.source.decision||'')+' 2026-10-04: 位置変更効果を戦術効果へ置換（ユーザー依頼）。'}};}
