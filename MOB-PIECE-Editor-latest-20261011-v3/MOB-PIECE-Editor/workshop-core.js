(function(root){
'use strict';
const C=root.MPB_CORE, copy=x=>x===undefined?undefined:C.clone(x), eq=C.equal;
root.MPB_WORKSHOP_STATE=copy(root.MPB_DATA.workshop);
C.imageFor=(id,data)=>root.MPB_WORKSHOP_STATE.images[id]||data.images[id]||'';
C.installWorkspace=w=>{if(w)root.MPB_WORKSHOP_STATE=copy(w);};
const envelope=C.envelope;
C.envelope=(records,data,orphans)=>({...envelope(records,data,orphans),workshop:copy(root.MPB_WORKSHOP_STATE),workshopBase:copy(data.workshop)});
function check(w){
 if(!w||w.schema!=='mpb-workshop/2'||!w.towers||!w.banners||!w.images)throw Error('タワー・画像データの形式が不正です');
 for(const src of Object.values(w.images))if(typeof src!=='string'||src.length>3*1024*1024||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(src))throw Error('追加画像の形式・容量が不正です');
 const number=v=>Number.isSafeInteger(v)&&v>=0;
 for(const [id,t]of Object.entries(w.towers)){
  if(t.id!==id||typeof t.name!=='string'||!Array.isArray(t.floors)||t.floors.length!==5)throw Error('タワーの形式が不正です');
  for(const [i,f]of t.floors.entries()){
   if(f.number!==i+1||!f.reward||!['coins','diamonds','rubies'].every(k=>number(f.reward[k]))||!f.reward.figures||!Object.values(f.reward.figures).every(number)||!Array.isArray(f.opponents)||!f.opponents.length)throw Error('階層・報酬の形式が不正です');
   for(const e of f.opponents)if(typeof e.id!=='string'||typeof e.name!=='string'||typeof e.rank!=='string'||!Array.isArray(e.deck)||e.deck.length>500||e.deck.some(v=>typeof v!=='string'))throw Error('敵デッキの形式が不正です');
  }
 }
 for(const [id,b]of Object.entries(w.banners))if(b.id!==id||typeof b.name!=='string'||typeof b.subtitle!=='string'||(b.requiresClear&&!w.towers[b.requiresClear])||!['figureIds','featuredIds','pickupIds'].every(k=>Array.isArray(b[k])&&b[k].every(v=>typeof v==='string'))||b.pickupIds.some(v=>!b.figureIds.includes(v))||b.featuredIds.some(v=>!b.figureIds.includes(v)))throw Error('ガチャの形式・解放条件が不正です');
}
const parse=C.parseImport;
C.parseImport=(text,data)=>{const p=parse(text,data);if(p.value.workshop){check(p.value.workshop);if(p.value.workshopBase)check(p.value.workshopBase);}return p;};
const parseSource=C.parseSource;
C.parseSource=text=>{const data=parseSource(text);if(data.workshop)check(data.workshop);else data.workshop=copy(root.MPB_DATA.workshop);return data;};
function mergeValue(base,incoming,current,path,conflicts){
 if(eq(base,incoming)||eq(current,incoming))return copy(current);
 if(eq(base,current))return copy(incoming);
 if(base&&incoming&&current&&typeof base==='object'&&typeof incoming==='object'&&typeof current==='object'&&!Array.isArray(base)&&!Array.isArray(incoming)&&!Array.isArray(current)){
  const out=copy(current);for(const k of new Set([...Object.keys(base),...Object.keys(incoming)])){const v=mergeValue(base[k],incoming[k],current[k],[...path,k],conflicts);if(v===undefined)delete out[k];else out[k]=v;}return out;
 }
 conflicts.push({reason:'workshop-conflict',path,base:copy(base),current:copy(current),proposed:copy(incoming)});return copy(current);
}
const merge=C.mergeImport;
C.mergeImport=(p,current,targetWorkspace=root.MPB_WORKSHOP_STATE)=>{
 const additions=(p.patches||[]).filter(c=>c.base===null), rest=(p.patches||[]).filter(c=>c.base!==null);
 const result=merge({...p,patches:rest},current);
 for(const c of additions){const existing=result.records.find(r=>r.id===c.id);if(!c.edited.editorAdded){result.unknown.push({reason:'unmarked-added-figure',change:c});continue;}if(!existing)result.records.push(copy(c.edited));else if(!eq(existing,c.edited))result.conflicts.push({reason:'added-figure-conflict',id:c.id,proposed:copy(c.edited)});}
 result.workshop=p.value.workshop?mergeValue(p.value.workshopBase||root.MPB_DATA.workshop,p.value.workshop,targetWorkspace,['workshop'],result.conflicts):copy(targetWorkspace);
 return result;
};
C.importRecords=(p,current)=>C.mergeImport(p,current).records;
C.deckWarnings=(deck,records,data)=>{
 const by=new Map(records.map(r=>[r.id,r])),counts={},warnings=[];
 if(deck.length!==data.rules.deckSize)warnings.push('合計 '+deck.length+' 枚 / 必要 '+data.rules.deckSize+' 枚');
 for(const id of deck)counts[id]=(counts[id]||0)+1;
 for(const [id,n]of Object.entries(counts)){const r=by.get(id);if(!r)warnings.push('存在しないID: '+id);else if(n>(data.rules.copyLimits[r.soulClass]||1))warnings.push(r.name+'：同名上限 '+data.rules.copyLimits[r.soulClass]+' 枚');}return warnings;
};
C.workshopWarnings=(records,data)=>{
 const ids=new Set(records.map(r=>r.id)),out=[],w=root.MPB_WORKSHOP_STATE;
 for(const t of Object.values(w.towers))for(const f of t.floors){for(const e of f.opponents)for(const message of C.deckWarnings(e.deck,records,data))out.push(t.name+' '+f.number+'階 '+e.name+'：'+message);for(const id of Object.keys(f.reward.figures))if(!ids.has(id))out.push(t.name+'：報酬のIDがありません '+id);}
 for(const b of Object.values(w.banners)){if(!b.figureIds.length)out.push(b.name+'：ラインナップが空です');for(const id of b.figureIds)if(!ids.has(id))out.push(b.name+'：IDがありません '+id);}return out;
};
})(window);
