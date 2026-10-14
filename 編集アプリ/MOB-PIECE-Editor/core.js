(function(root){
'use strict';
const clone=x=>JSON.parse(JSON.stringify(x));
const stable=x=>JSON.stringify(x,(_,v)=>v&&typeof v==='object'&&!Array.isArray(v)?Object.fromEntries(Object.keys(v).sort().map(k=>[k,v[k]])):v);
const equal=(a,b)=>stable(a)===stable(b);
const classes=['seed','middle','mob'];
const caches=new WeakMap();
function index(data){if(!caches.has(data)){const plans=new Map();for(const [id,p]of Object.entries(data.plans)){const key=stable(p);if(!plans.has(key))plans.set(key,new Set());for(const r of data.records)if(String(r.skill.program)===id)plans.get(key).add(r.skill.timing);}caches.set(data,{plans,base:new Map(data.records.map(r=>[r.id,r]))});}return caches.get(data);}
function status(r,data){
 if(r.skill.mode==='custom')return {code:'implementation-required',label:'追加実装が必要（独自スキル）'};
 const cache=index(data),valid=cache.plans.get(stable(r.skill.plan))?.has(r.skill.timing);
 if(!valid)return {code:'combination-review-required',label:'追加実装・組合せ検証が必要'};
 const original=cache.base.get(r.id);
 const changed=!equal(original?.skill,r.skill);
 return {code:changed?'existing-plan-integration-required':'source-unchanged',label:changed?'既存効果に一致・本体反映待ち':'元データの既存実装'};
}
function filter(records,f,groups){
 const q=(f.q||'').trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
 return records.filter(r=>(!f.series||r.series===f.series)&&(!f.soulClass||r.soulClass===f.soulClass)&&(!f.rarity||r.rarity===f.rarity)&&(!f.attribute||r.attribute===f.attribute)&&(!f.tag||r.tags.includes(f.tag))&&q.every(w=>[r.name,r.id,r.uid,r.skill.name,r.skill.description,r.series].join(' ').toLocaleLowerCase().includes(w)))
 .sort((a,b)=>(groups.indexOf(a.series)<0?999:groups.indexOf(a.series))-(groups.indexOf(b.series)<0?999:groups.indexOf(b.series))||classes.indexOf(a.soulClass)-classes.indexOf(b.soulClass)||a.id.localeCompare(b.id,'ja',{numeric:true}));
}
function groups(records,mode){
 const m=new Map();for(const r of records){const k=mode==='name'?r.skill.name:mode==='text'?r.skill.description:stable({mode:r.skill.mode,timing:r.skill.timing,plan:r.skill.mode==='custom'?r.skill.custom:r.skill.plan,...(r.skill.mode==='custom'?{description:r.skill.description}:{})});if(!m.has(k))m.set(k,[]);m.get(k).push(r);}
 return [...m.values()].sort((a,b)=>b.length-a.length);
}
function changes(records,data){const by=new Map(data.records.map(r=>[r.id,r]));return records.filter(r=>!equal(r,by.get(r.id))).map(r=>({id:r.id,base:clone(by.get(r.id)??null),edited:clone(r),fields:Object.keys(r).filter(k=>!equal(r[k],by.get(r.id)?.[k])),implementation:status(r,data)}));}
function validate(records,data){
 const warnings=[];const by=new Map(records.map(r=>[r.id,r])),tagIds=new Set(data.tags.map(t=>t.id));
 const warn=(id,message)=>warnings.push({id,message}); const edges=new Map(records.map(r=>[r.id,[]]));
 for(const r of records){
  if(!r.name.trim())warn(r.id,'名称が空です');
  for(const k of ['atk','def'])if(!Number.isFinite(r[k])||r[k]<0)warn(r.id,k.toUpperCase()+'は0以上の数値が必要です');
  if(!classes.includes(r.soulClass))warn(r.id,'未対応の段階');
  if(new Set(r.tags).size!==r.tags.length)warn(r.id,'タグが重複しています');
  for(const t of r.tags)if(!tagIds.has(t))warn(r.id,'未登録タグ '+t+'（新規タグ定義が必要）');
  if(r.tags.length>(data.rules.tagLimits[r.rarity]||Infinity))warn(r.id,'現行レア度のタグ上限超過');
  if(r.skill.mode==='custom')warn(r.id,'独自スキル：追加実装が必要。説明だけでは効果は変わりません');
  else if(status(r,data).code==='combination-review-required')warn(r.id,'選択した効果・対象・発動時点の組合せは既存実装と一致しません');
  const base=data.records.find(x=>x.id===r.id);
  if(base&&r.skill.description!==base.skill.description&&equal(r.skill.plan,base.skill.plan)&&r.skill.mode!=='custom')warn(r.id,'説明文のみ変更：実際の効果プランは元のままです');
  if(r.summon.normal&&r.soulClass!=='seed')warn(r.id,'Middle/MOBの通常召喚案：現行ルール外');
  for(const rec of r.summon.recipes){
   if(rec.target!==r.id)warn(r.id,'レシピの召喚先IDが編集対象と異なります');
   if(!Array.isArray(rec.materials)||rec.materials.length!==2){warn(r.id,'現行融合は素材2枠が必要');continue;}
   if(rec.fromClass&&classes.indexOf(r.soulClass)!==classes.indexOf(rec.fromClass)+1)warn(r.id,'段階が連続していません（Seed→MOB飛び越し・同段階等）');
   const flatten=m=>m.any?m.any.flatMap(flatten):[m];
   for(const mat of rec.materials.flatMap(flatten)){
    if(mat.id){const src=by.get(mat.id);if(!src)warn(r.id,'存在しない素材ID: '+mat.id);else{edges.get(r.id).push(mat.id);if(src.id===r.id)warn(r.id,'自分自身を素材にしています');if(classes.indexOf(r.soulClass)!==classes.indexOf(src.soulClass)+1)warn(r.id,'素材 '+mat.id+' からの段階飛び越し／同段階別キャラ（既存特殊例外は原典確認）');}}
    else if(mat.tag&&!tagIds.has(mat.tag))warn(r.id,'素材の未登録タグ: '+mat.tag);
    else if(!mat.tag&&!mat.attribute&&!mat.rarity&&!mat.class)warn(r.id,'素材条件が未入力');
   }
  }
  const e=r.summon.passive?.evolve;
  if(e){if(!by.has(e.target))warn(r.id,'存在しない条件進化先: '+e.target);else{edges.get(r.id).push(e.target);if(classes.indexOf(by.get(e.target).soulClass)!==classes.indexOf(r.soulClass)+1)warn(r.id,'条件進化の段階飛び越し／同段階（原典例外確認）');}if(!Number.isFinite(e.cost)||e.cost<0)warn(r.id,'進化コストは0以上の数値が必要');}
 }
 // Fusion dependency and forward evolution have opposite edge semantics: detect separately.
 const cycle=(graph,label)=>{const visiting=new Set(),done=new Set(),found=new Set();function dfs(id,chain){if(visiting.has(id)){for(const n of chain.slice(chain.indexOf(id)))found.add(n);return;}if(done.has(id))return;visiting.add(id);for(const next of graph.get(id)||[])dfs(next,[...chain,id]);visiting.delete(id);done.add(id);}for(const id of graph.keys())dfs(id,[]);for(const id of found)warn(id,label);};
 const materialIds=m=>m.any?m.any.flatMap(materialIds):m.id?[m.id]:[];
 const fusion=new Map(records.map(r=>[r.id,r.summon.recipes.flatMap(x=>x.materials||[]).flatMap(materialIds).filter(id=>by.has(id))]));
 const evolution=new Map(records.map(r=>[r.id,r.summon.passive?.evolve?[r.summon.passive.evolve.target]:[]]));
 cycle(fusion,'融合レシピに循環参照があります');cycle(evolution,'条件進化に循環参照があります');return warnings;
}
function envelope(records,data,orphans=[]){return {schema:data.schema,kind:'mpb-editor-draft-and-patch',sourceVersion:data.sourceVersion,sourceHash:data.sourceHash,exportedAt:new Date().toISOString(),integration:'NO_AUTOMATIC_GAME_WRITE',records:clone(records),changes:changes(records,data),unresolvedImports:clone(orphans)};}
function parseImport(text,data){
 if(text.length>30*1024*1024)throw Error('30MBを超えるファイルは読み込めません');
 const o=JSON.parse(text,(k,v)=>{if(['__proto__','constructor','prototype'].includes(k))throw Error('危険なプロパティを含むため読み込めません');return v;});
 if(o.schema!==data.schema)throw Error('未対応schemaです。元ファイルを保持し、対応版で開いてください');
 if(!Array.isArray(o.records))throw Error('records配列がありません');
 const seen=new Set(),known=new Set(data.records.map(r=>r.id));
 for(const r of o.records){if(!r||typeof r.id!=='string'||seen.has(r.id))throw Error('IDが不正または重複しています');seen.add(r.id);if(known.has(r.id)&&r.uid!==data.records.find(f=>f.id===r.id).uid)throw Error(r.id+': 固定UIDが元データと異なります');
  for(const k of ['name','uid','series','soulClass','rarity','attribute','attackType','role'])if(typeof r[k]!=='string')throw Error(r.id+': '+k+' が文字列ではありません');
  if(!Array.isArray(r.tags)||r.tags.some(t=>typeof t!=='string')||!r.skill||!['existing','custom'].includes(r.skill.mode)||typeof r.skill.name!=='string'||typeof r.skill.description!=='string'||typeof r.skill.timing!=='string'||!r.skill.plan||typeof r.skill.plan!=='object'||Array.isArray(r.skill.plan)||!r.skill.custom||typeof r.skill.custom!=='object'||!r.summon||typeof r.summon.normal!=='boolean'||!Array.isArray(r.summon.recipes)||!r.summon.passive||typeof r.summon.passive!=='object'||typeof r.summon.notes!=='string'||(r.atk!==null&&typeof r.atk!=='number')||(r.def!==null&&typeof r.def!=='number'))throw Error(r.id+': データ構造が不正です');
  const validMaterial=(m,depth=0)=>!!m&&typeof m==='object'&&!Array.isArray(m)&&depth<8&&(!m.any||(Array.isArray(m.any)&&m.any.every(x=>validMaterial(x,depth+1))))&&['id','tag','attribute','rarity','class'].every(k=>m[k]===undefined||typeof m[k]==='string');
  for(const rec of r.summon.recipes)if(!rec||typeof rec.id!=='string'||typeof rec.target!=='string'||!Array.isArray(rec.materials)||rec.materials.some(m=>!validMaterial(m)))throw Error(r.id+': レシピ構造が不正です');
  if(r.summon.passive.evolve&&(typeof r.summon.passive.evolve!=='object'||typeof r.summon.passive.evolve.target!=='string'||(r.summon.passive.evolve.cost!==null&&typeof r.summon.passive.evolve.cost!=='number')))throw Error(r.id+': 進化構造が不正です');
 }
 if(o.unresolvedImports!==undefined&&!Array.isArray(o.unresolvedImports))throw Error('未解決データの構造が不正です');
 return {value:o,conflict:o.sourceHash!==data.sourceHash||o.sourceVersion!==data.sourceVersion,missing:data.records.filter(r=>!seen.has(r.id)).map(r=>r.id),unknown:o.records.filter(r=>!known.has(r.id))};
}
function importRecords(parsed,current){const by=new Map(parsed.value.records.map(r=>[r.id,r]));return current.map(r=>clone(by.get(r.id)||r));}
root.MPB_CORE={clone,stable,equal,classes,status,filter,groups,changes,validate,envelope,parseImport,importRecords};
})(typeof window==='undefined'?globalThis:window);
