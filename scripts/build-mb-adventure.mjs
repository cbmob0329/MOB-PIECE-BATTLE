import fs from 'node:fs';
import catalog from '../src/data/soul-catalog.js';
import {towerStarters,towerBanners} from '../src/data/tower.js';
if(fs.existsSync('src/data/mb-adventure.json')&&JSON.parse(fs.readFileSync('src/data/mb-adventure.json','utf8')).reviewRevision){console.log('Reviewed MB release retained. Edit mb-adventure.json explicitly for future waves.');process.exit(0);}
const plans=JSON.parse(fs.readFileSync('artifacts/mb-adventure/generation-plan.json','utf8'));
const id=n=>'MB'+String(n).padStart(3,'0');
const groups=[
 {key:'grass',name:'ホップステップ草原探検隊',color:'#69ba69',tag:'41',seeds:[1,4,9,8,16,32,5,6,7,18,27,...Array.from({length:9},(_,i)=>76+i)],middles:[54,60,61,69,74,85],mobs:[65,73,86],newSeeds:[76,77,78,79]},
 {key:'desert',name:'奇跡を起こす砂漠のカケラ',color:'#e5b04e',tag:'42',seeds:[20,22,24,41,34,38,26,35,36,46,...Array.from({length:10},(_,i)=>87+i)],middles:[52,56,58,62,64,97],mobs:[72,98,99],newSeeds:[87,88,89,90]},
 {key:'neon',name:'ネオン街のドリームスリーパー',color:'#a77af7',tag:'44',seeds:[28,33,47,10,30,39,19,23,29,31,37,40,...Array.from({length:8},(_,i)=>100+i)],middles:[51,53,57,59,63,66],mobs:[67,68,75],newSeeds:[100,101,102,103]}
];
const evolvedNames={51:'モブユメミア',52:'モブクリスタ',53:'モブナイトモア',54:'モブブレイザー',56:'モブシルヴェール',57:'モブルナヒール',58:'モブサンドベル',59:'モブドリーム',60:'モブアトラス',61:'モブランタン',62:'モブオアスター',63:'モブミストール',64:'モブサハロード',65:'モブフォレストラ',66:'モブパッチェル',67:'モブファンタズム',68:'モブルナロード',69:'モブブレイブ',72:'モブクリスタリア',73:'モブエルダリオン',74:'モブクロスティア',75:'モブユメノヴァ'};
const by=new Map(catalog.figures.map(f=>[f.id,f]));
const figures=[],recipes=[],tags=[],releases=[];
const effects=[['仲間へのエール','味方1体のATKを10アップする。',{target:'ally',atk:10}],['旅の備え','味方1体のDEFを15アップする。',{target:'ally',def:15}],['小さな発見','シードデッキから1体ドローする。',{draw:1}],['やすらぎの灯','自分のライフを20回復する。',{heal:20}],['隙を見つける','相手1体のDEFを10ダウンする。',{target:'enemy',def:-10}],['一歩前へ','このフィギュアのATK・DEFを10アップする。',{target:'self',atk:10,def:10}]];
for(const [gi,g]of groups.entries()){
 const tag='series-mb-'+g.key;tags.push({id:tag,name:g.name});
 const first=[...g.seeds.slice(0,6),...g.newSeeds,...g.middles.slice(0,3)];
 const remainingSeeds=g.seeds.filter(n=>!first.includes(n));
 const second=[...remainingSeeds.slice(0,5),...g.middles.slice(3,5),g.mobs[0]];
 const third=[...remainingSeeds.slice(5),g.middles[5],...g.mobs.slice(1)];
 g.waves=[first,second,third].map(a=>a.map(id));g.featuredIds=g.seeds.slice(0,6).map(id);
 for(const [stage,nums]of [['seed',g.seeds],['middle',g.middles],['mob',g.mobs]])for(const [i,n]of nums.entries()){
  const prior=by.get(id(n)),job=plans[gi].jobs.find(j=>Number(j[0])===n),name=job?.[2]||evolvedNames[n]||prior?.name;
  if(!name)throw Error('missing name '+n);
  const wave=g.waves.findIndex(a=>a.includes(id(n)))+1;
  const rarity=stage==='seed'?([1,38,47].includes(n)?'SSR':i%3===0?'SR':'R'):stage==='middle'?(i%2?'SR':'SSR'):i===0?'SSR':i===1?'UR':'MOB';
  const [skillName,description,basePlan]=effects[(i+gi)%effects.length];
  const scale=stage==='seed'?1:stage==='middle'?2:3,plan=Object.fromEntries(Object.entries(basePlan).map(([k,v])=>[k,typeof v==='number'&&k!=='draw'?v*scale:v]));
  let text=description.replace(/\d+/g,n=>String(Number(n)*('draw'in plan?1:scale)));
  const passive=stage==='mob'?{aura:{tags:[tag],excludeSelf:true,atk:10,def:10}}:{};
  if(stage==='mob')text+='\n【パッシブ：冒険の導き】場にいる間、このフィギュア以外の同シリーズの味方のATK・DEFを10アップする。';
  const total=stage==='seed'?(rarity==='SSR'?220:rarity==='SR'?190:160):stage==='middle'?(rarity==='SSR'?340:300):(rarity==='SSR'?420:rarity==='UR'?480:540);
  const atk=total/2+((i%5)-2)*10;
  figures.push({...prior,id:id(n),uid:id(n),number:id(n),name,soulClass:stage,rarity,series:'モブくんの大冒険',series2:g.name,family:'MB_'+g.key.toUpperCase(),releaseWave:wave,pending:wave>1,collection:'main',image:'piecefig/MB/'+(n>=51&&n<=75?String(n).padStart(3,'0'):id(n))+'.png',tags:[...new Set([...(prior?.tags||[]).filter(t=>!['41','42','44'].includes(t)),g.tag,tag])],attribute:prior?.attribute||(['風','地','光','水','火','闇'][(i+gi*2)%6]),attackType:prior?.attackType||(i%2?'魔法':'物理'),atk,def:total-atk,role:skillName,passive,soulSkill:{name:g.name.slice(0,3)+'・'+skillName,description:text,effect:text,timing:'own-main',runtimePlan:{revision:'oct07',...plan,duration:'persistent'}},fusionMaterials:[],fusionTargets:[]});
 }
 // Every wave's evolution has materials available in that wave or earlier.
 g.middles.forEach((n,i)=>{const materials=i<3?[g.seeds[i*2],g.seeds[i*2+1]]:i<5?[g.newSeeds[i-3],remainingSeeds[i-3]]:[remainingSeeds[5],remainingSeeds[6]];recipes.push({id:'mb-adventure-'+n,target:id(n),fromClass:'seed',explicitFromClass:'seed',materials:materials.map(n=>({id:id(n)})),special:false,status:'implemented'});});
 g.mobs.forEach((n,i)=>{recipes.push({id:'mb-adventure-'+n,target:id(n),fromClass:'middle',explicitFromClass:'middle',materials:[{id:id(g.middles[i])},{id:id(g.middles[i+3])}],special:true,status:'implemented'});});
 releases.push(...g.waves.map((ids,i)=>({wave:i+1,series:g.key,figureIds:ids,status:i?'planned':'live'})));
}
for(const r of [...recipes])if(r.fromClass==='seed'){const f=figures.find(f=>f.id===r.target);recipes.push({...r,id:r.id+'-easy',materials:[r.materials[0],{tag:f.tags.find(t=>t.startsWith('series-mb-'))}]});}
const puni={id:'PUNI_M01',uid:'PUNI_M01',number:'PUNI_M01',name:'ぷにモブパレット',soulClass:'middle',rarity:'SR',attribute:'光',attackType:'魔法',atk:140,def:160,tags:['01','oct06-puni-series'],series:'ぷにモブシリーズ',collection:'main',image:'piecefig/MB/PUNI_M01.png',passive:{},soulSkill:{name:'いろどりの絆',description:'味方1体のATK・DEFを15アップする。',effect:'味方1体のATK・DEFを15アップする。',timing:'own-main',runtimePlan:{revision:'oct07',target:'ally',atk:15,def:15,duration:'persistent'}}};figures.push(puni);recipes.push({id:'puni-palette',target:puni.id,fromClass:'seed',explicitFromClass:'seed',materials:[{tag:'01'},{tag:'01'}],special:false,status:'implemented'});
const removedIds=['MB017','MB021','MB025','MB042','MB044','MB048','MB050'];
const puniIds=[...Array.from({length:15},(_,i)=>String(i+1).padStart(2,'0')),'PUNI_M01'];
const oldPool=[...new Set([...towerStarters.flatMap(s=>s.deck),...towerBanners.filter(b=>!b.requiresClear).flatMap(b=>b.figureIds)])].filter(n=>!n.startsWith('MB')&&!puniIds.includes(n)&&by.has(n));
const banners=[{id:'mb-permanent',name:'いつもの仲間たち',category:'permanent',color:'#e9ba67',subtitle:'以前のスターターの仲間が集まる常設ガチャ',figureIds:oldPool,featuredIds:oldPool.filter(n=>by.get(n).soulClass==='middle').slice(0,3),puniIds,puniRate:.03},...groups.map(g=>({id:'mb-adventure-'+g.key+'-1',name:g.name,category:'adventure',theme:'mb-'+g.key,color:g.color,subtitle:'モブくんの大冒険 第1弾 · シード10体／ミドル3体',figureIds:g.waves[0],featuredIds:[g.featuredIds.find(n=>['MB001','MB038','MB047'].includes(n)),id(g.middles[0]),g.featuredIds[1]],pickupIds:g.featuredIds.filter(n=>['MB001','MB038','MB047'].includes(n)),puniIds,puniRate:.03}))];
const starters=groups.map(g=>({id:'mb-'+g.key,name:g.name,description:'ぷにモブ31体＋指定シード6種×2体＋シリーズのミドル1体＋ぷにモブパレット1体',featuredIds:g.featuredIds,deck:[...Array.from({length:10},(_,i)=>String(i+1).padStart(2,'0')).flatMap(n=>[n,n,n]),'11',...g.featuredIds.flatMap(n=>[n,n]),id(g.middles[0]),'PUNI_M01']}));
fs.writeFileSync('src/data/mb-adventure.json',JSON.stringify({version:20261025,figures,recipes,tags,removedIds,groups,releases,banners,starters,puniIds},null,2));
console.log({figures:figures.length,groups:groups.map(g=>[g.key,g.waves.map(w=>w.length)]),starters:starters.map(s=>s.deck.length)});
