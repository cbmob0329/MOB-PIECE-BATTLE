// Offline, read-only source import. Performance is derived from authored ability data, never names.
import fs from 'node:fs';
import crypto from 'node:crypto';
import vm from 'node:vm';
const root=new URL('../',import.meta.url),source='D:/GitHub/MOB-QUEST/';
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const catalog=json(source+'js/figure-catalog-v218.json');
const originals=[...catalog.figures,...json(source+'js/mint-figures-v237.json'),...json(source+'js/macaron-figures-v247.json')];
const legacy=json(new URL('src/data/figures_master_v170.json',root));
const snapshotPath='D:/MOB-QUEST-データ/game-data-20260929/current-data.json',snapshot=json(snapshotPath);
const edits=vm.runInNewContext('('+read(source+'js/boss-edits-v250.js').match(/const BOSS_EDITS_V250=([\s\S]*?);\r?\nfunction/)[1]+')');
const caps={R:3,SR:5,SSR:7,UR:9,MOB:12};
const bounds={seed:{R:[50,100],SR:[90,140],SSR:[120,160],UR:[100,180],MOB:[170,220]},middle:{R:[80,160],SR:[120,180],SSR:[150,200],UR:[180,240],MOB:[220,280]},mob:{R:[160,220],SR:[180,250],SSR:[240,300],UR:[280,320],MOB:[300,400]}};
const names=new Map(catalog.tags.map(t=>[t.id,t.name]));
const normalize=s=>s.normalize('NFKC').replace(/\s+/g,'');
const actors=[...snapshot.players.map(p=>({...p,...p.stats75,category:'party',passiveDescription:snapshot.passives[p.id]})),...snapshot.catalog.map(r=>r.reference75)];
const byName=new Map(actors.map(p=>[normalize(p.name),p]));
const aliases={'モブネオマスター':'モブネオンマスター','スライム':'モブスライム'};
const statBonus=(text,key)=>{const re=new RegExp('(?:^|[ &])'+key+'\\s*\\+\\s*(\\d+)');return Number(text.match(re)?.[1]||0);};
function sourceActor(f){
 const n=f.name.replace(/\s*超合金/g,'').replace(/^MOB SHOT (?:PET|SOUL)\s*/,'');
 const candidates=actors.filter(a=>normalize(a.name)===normalize(n)||aliases[n]&&normalize(a.name)===normalize(aliases[n]));
 if(f.image.startsWith('figplay/'))return candidates.find(a=>a.category==='party')||null;
 return candidates.find(a=>a.category!=='party'&&!/legacy|shadow|sq-/.test(a.id))||candidates.find(a=>a.category==='party')||candidates[0]||null;
}
function translate(f,actor){
 const text=f.soul?.text||f.traitText||f.statsText;
 const evidence=[text,f.traitText,actor?.passiveDescription||'',...(actor?.enemySkills||[]).map(s=>s.kind+' '+(s.desc||''))].join(' ');
 const amount={R:15,SR:20,SSR:25,UR:30,MOB:35}[f.rarity],effects=[];
 const add=(type,target,value)=>effects.push({type,target,value});
 const all=/味方全体/.test(text)?'allies':'self';
 const enemyStats=text.match(/敵(?:全体|単体)の([^。]+?)(?:ダウン|下げ)/)?.[1]||'';
 if(/復活|蘇生/.test(evidence))add('revive',all,1);
 else if(/反撃|カウンター/.test(evidence))add('counter','self',amount);
 else if(/連撃|追撃|[2-9２-９]回(?!復)|[2-9２-９]連続|連続で/.test(text))add('extraAttack','self',1);
 else if(/敵全体に.*ダメージ|攻撃が全体攻撃/.test(text))add('sweep','self',1);
 else if(/回避/.test(text))add('evade','self',1);
 else if(/HP.*回復|回復量/.test(text))add('heal','life',amount);
 else if(/(?:毒|やけど|混乱|マヒ|眠り|ひるみ).*(?:にする|付与|状態|させ)/.test(text))add('weaken',/敵全体/.test(text)?'enemies':'enemy',amount);
 else if(enemyStats)add(/DEF|MND/.test(enemyStats)?'break':'weaken',/敵全体/.test(text)?'enemies':'enemy',amount);
 else if(/DEF.*(?:アップ|\+)|軽減|耐性|MND.*アップ/.test(text))add('guard',all,amount);
 else if(/(?:ATK|MAG|SPD|会心|命中).*アップ|敵単体.*ダメージ/.test(text))add('boost',all,amount);
 else if(/回避/.test(f.traitText))add('evade','self',1);
 else if(/軽減|DEF/.test(f.traitText+' '+f.statsText))add('guard',all,amount);
 else add('boost',all,amount);
 if(effects[0].type==='heal'&&/解除/.test(text))add('cleanse','allies',0);
 else if(['extraAttack','sweep','counter'].includes(effects[0].type)&&/DEF.*ダウン/.test(text))add('break','enemy',10);
 else if(effects[0].type==='boost'&&/SPD/.test(text))add('guard','self',10);
 const descriptions={boost:e=>`ATKを${e.value}上げる`,guard:e=>`DEFを${e.value}上げる`,heal:e=>`自分のライフを${e.value}回復（上限400）`,weaken:e=>`ATKを${e.value}下げる`,break:e=>`DEFを${e.value}下げる`,evade:()=>`次に受ける攻撃を1回回避する`,counter:e=>`次に攻撃された時、攻撃者とATK＋${e.value}で反撃戦闘を行う`,extraAttack:()=>`このターンの攻撃回数を1回増やす`,sweep:()=>`次の攻撃を相手フィールド全体にする`,revive:()=>`次に撃破された時、同じ枠に1回だけ戻る（差分ライフダメージは受ける）`,cleanse:()=>`ATK・DEF低下を解除する`};
 const targets={self:'自身の',allies:'味方全体の',enemy:'選んだ相手1体の',enemies:'相手全体の',life:''};
 const reactive=['guard','evade','counter','revive'].includes(effects[0].type);
 return {name:f.soul?.name||({guard:'守りの構え',evade:'すり抜け',boost:'集中',counter:'迎撃'}[effects[0].type]||'ソウルガード'),timing:reactive?'either-main':'own-main',effects,description:effects.map(e=>(e.target==='life'?'':targets[e.target])+descriptions[e.type](e)).join('。')+'。強化・妨害・待機効果は使用ターン終了まで。',sourceText:text,designNote:'原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。'};
}
const figures=originals.map(f=>{
 const old=legacy.find(x=>x.image===f.image);if(!old)throw Error('Missing stable id '+f.image);
 const actor=sourceActor(f),adjust=actor&&edits[actor.id];
 let soulClass=f.tags.includes('30')||f.tags.includes('73')&&(f.tags.includes('25')||f.tags.includes('53'))?'mob':f.tags.some(t=>['25','32','53','62'].includes(t))||actor?.category==='boss'?'middle':'seed';
 const classOverrides={'fig/16.png':'seed','figboss/02.png':'mob','figboss/04.png':'mob','figboss/06.png':'mob','eventfig/61.png':'middle','eventfig/62.png':'mob','eventfig/63.png':'middle','eventfig/64.png':'mob'};
 if(classOverrides[f.image])soulClass=classOverrides[f.image];
 const skill=translate(f,actor),sourceText=[f.soul?.text,f.traitText,f.statsText].join(' ');
 const attribute=actor?.attribute?.split('・')[0]||sourceText.match(/([火水雷地風光闇無])(?:属性|の(?:物理|魔法))/)?.[1]||({'56':'火','51':'雷','75':'風','76':'水','77':'地','79':'光','80':'水'}[f.tags.find(t=>['56','51','75','76','77','79','80'].includes(t))])||'無';
 const atk=statBonus(f.statsText||'','ATK')+statBonus(f.statsText||'','MAG'),def=statBonus(f.statsText||'','DEF')+statBonus(f.statsText||'','MND'),speed=statBonus(f.statsText||'','SPD');
 const role=['guard','heal','revive','evade'].includes(skill.effects[0].type)?'support':def>atk+2?'defender':atk>def||speed>4?'attacker':'balanced';
 const [lo,hi]=bounds[soulClass][f.rarity];
 const roleBias={support:[.28,.70],defender:[.3,.82],attacker:[.80,.3],balanced:[.60,.60]}[role];
 const powerSkill=['sweep','extraAttack','revive','evade'].includes(skill.effects[0].type)? .12:0;
 const ratio=actor?Math.max(-.10,Math.min(.10,((Math.max(actor.atk||0,actor.mag||0))-(actor.def||0))/Math.max(1,actor.atk||0,actor.mag||0)*.15)):0;
 const fixed=(bias,extra)=>Math.max(lo,Math.min(hi,Math.round((lo+(hi-lo)*(bias-powerSkill+extra))/5)*5));
 const relationTags=f.tags.filter(t=>!['02','03','04','05','06','07','08','28','29','31'].includes(t));
 return {id:old.sourceId,name:f.name,image:f.image,rarity:f.rarity,soulClass,atk:fixed(roleBias[0],ratio),def:fixed(roleBias[1],-ratio),attribute,tags:[...relationTags,...f.tags.filter(t=>!relationTags.includes(t))].slice(0,caps[f.rarity]),soulSkill:skill,source:{figureFile:f.source||'figure-catalog-v218.json',image:f.image,rarity:f.rarity,statsText:f.statsText||'',traitText:f.traitText||'',soul:f.soul||null,tags:f.tags,actor:actor?{id:actor.id,name:actor.name,category:actor.category,attribute:actor.attribute,role:actor.role||actor.normalAttackType,atk:actor.atk,mag:actor.mag,def:actor.def,res:actor.res,spd:actor.spd,passive:actor.passive,passiveDescription:actor.passiveDescription,statusResist:actor.statusResist,elementResist:actor.elementResist,ults:actor.ults,skills:actor.enemySkills,evasion:adjust?.evasion??actor.evasion,damageReduction:adjust?.damageReduction??actor.damageReduction,actions:adjust?.actions??actor.actionCount,latestEncounterOverride:adjust||null}:null,reference:'MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）',role,decision:`${f.rarity}は原典のレア度を維持。${soulClass}はボス・伝説・変身・強敵タグと原典の役割で分類。${role}型として固定ATK/DEFを設定。属性根拠：${actor?.attribute?'原キャラクター':sourceText.match(/([火水雷地風光闇無])(?:属性|の(?:物理|魔法))/)?'原典の能力文':attribute==='無'?'属性指定なし（無）':'原典の属性タグ'}。`}};
});
const recipes=[];
for(const f of figures.filter(f=>f.soulClass!=='seed')){
 const fromClass=f.soulClass==='middle'?'seed':'middle',lower=figures.filter(g=>g.soulClass===fromClass);
 const evolutionPairs={'figboss/02.png':'figboss/01.png','figboss/04.png':'figboss/03.png','figboss/06.png':'figboss/05.png','eventfig/62.png':'eventfig/61.png','eventfig/64.png':'eventfig/63.png'};
 const base=figures.find(g=>g.image===evolutionPairs[f.image]&&g.soulClass===fromClass);
 if(base)recipes.push({id:f.id+':evolution',target:f.id,fromClass,materials:[{id:base.id},{attribute:base.attribute}],label:base.name+' ＋ '+base.attribute+'属性',basis:'原典のⅡ形態・変身系列を優先'});
 const family=f.source.tags.find(t=>['01','11','14','16','17','20','21','22','24','38','52','61','65','67','68','73'].includes(t)&&lower.some(g=>g.tags.includes(t)));
 if(family)recipes.push({id:f.id+':family',target:f.id,fromClass,materials:[{tag:family},{tag:family}],label:`${names.get(family)} × 2`,basis:'原典の同種族・同シリーズタグ'});
 const element=lower.some(g=>g.attribute===f.attribute)?f.attribute:'無';
 recipes.push({id:f.id+':element',target:f.id,fromClass,materials:[{attribute:element},{attribute:element}],label:`${element}属性 × 2`,basis:element===f.attribute?'原典属性から新作向けに設定':'同階級の到達経路を確保する新作レシピ（無属性）'});
 f.fusionMaterials=recipes.filter(r=>r.target===f.id);
}
for(const f of figures)f.fusionTargets=recipes.filter(r=>r.fromClass===f.soulClass&&r.materials.some(m=>m.id?f.id===m.id:m.tag?f.tags.includes(m.tag):f.attribute===m.attribute)).map(r=>r.target).filter((id,i,a)=>a.indexOf(id)===i);
const files=['js/figure-catalog-v218.json','js/mint-figures-v237.json','js/macaron-figures-v247.json','js/boss-hp-v249.js','js/boss-edits-v250.js','js/finale-combat-v248.js','js/figures-v220.js'];
const evidence={builtAt:new Date().toISOString(),sourceRoot:source,snapshot:{path:snapshotPath,version:snapshot.version,sha256:crypto.createHash('sha256').update(read(snapshotPath)).digest('hex')},files:files.map(p=>({path:p,sha256:crypto.createHash('sha256').update(read(source+p)).digest('hex')})),figures:figures.length,matchedActors:figures.filter(f=>f.source.actor).length,limitations:'専用モンスターが無いロゴ・コラボ・合金フィギュアも、原典のフィギュア能力・特性・タグから設計。原典に無い属性や戦闘履歴は推測しない。v249のHP倍率は新作にHPが無いためATK/DEFへ転写しない。'};
fs.writeFileSync(new URL('src/data/soul-catalog.js',root),'// Generated fixed design data; no runtime rolls. See scripts/build-soul-catalog.mjs.\nexport default '+JSON.stringify({figures,recipes,tags:catalog.tags.map(t=>({id:t.id,name:t.name})),bounds},null,2)+';\n');
fs.writeFileSync(new URL('docs/soul-source-audit.json',root),JSON.stringify(evidence,null,2));
console.log(JSON.stringify({...evidence,classes:Object.fromEntries(['seed','middle','mob'].map(k=>[k,figures.filter(f=>f.soulClass===k).length]))},null,2));
