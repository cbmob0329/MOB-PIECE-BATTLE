// Read-only import from the sibling game. Never writes to the source repository.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {questTagEffects,effectSpec} from '../src/data/quest-tag-effects.js';
const root=path.resolve(import.meta.dirname,'..');
const source=path.resolve(root,'../MOB-QUEST');
const read=p=>fs.readFileSync(path.join(source,p),'utf8');
const json=p=>JSON.parse(read(p));
const catalog=json('js/figure-catalog-v218.json');
const figures=JSON.parse(fs.readFileSync(path.join(root,'src/data/figures_master_v170.json')));
const tags=JSON.parse(fs.readFileSync(path.join(root,'src/data/tags_master_v170.json')));
const byImage=new Map(figures.map(f=>[f.image,f]));
let added=0;
for(const row of [...catalog.figures,...json('js/mint-figures-v237.json'),...json('js/macaron-figures-v247.json')]){
 let f=byImage.get(row.image);
 if(!f){
  // Match the existing game's rarity balance for new pieces, without changing saved IDs.
  const peers=figures.filter(x=>x.rarity===row.rarity&&!x.pending);
  const stats=Object.fromEntries(['cost','hp','attack','defense','speed'].map(k=>[k,Math.round(peers.reduce((n,x)=>n+x.mobPiece[k],0)/peers.length)]));
  const id='mq:'+row.image.replace('.png','');
  f={id,sourceId:id,dexNo:figures.length+1,displayNo:`No.${String(figures.length+1).padStart(3,'0')}`,mobPiece:stats,mobPieceV115:{...stats}};
  figures.push(f);byImage.set(row.image,f);added++;
 }
 Object.assign(f,row,{pending:false});
 const target=path.join(root,row.image);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(path.join(source,row.image),target);
}
// Retain legacy IDs for saves, but do not offer obsolete image-less entries.
for(const f of figures)if(!fs.existsSync(path.join(root,f.image))){f.pending=true;f.availabilityNote='画像データ待ち';}
// Keep established battle effects. Store Quest's complete descriptions separately.
for(const row of catalog.tags){
 let t=tags.find(t=>t.id===row.id);
 if(!t){t={id:row.id,name:row.name,pieceTwo:{label:'効果なし',effects:{}},pieceThree:{label:'効果なし',effects:{}}};tags.push(t);}
 Object.assign(t,{name:row.name,two:row.two,three:row.three,questPieceTwo:row.pieceTwo,questPieceThree:row.pieceThree});
 if(questTagEffects[row.id]){t.pieceTwo=effectSpec(questTagEffects[row.id][0]);t.pieceThree=effectSpec(questTagEffects[row.id][1]);}
}
const game=read('js/game.js');
const start=game.indexOf('const FIGURE_GACHAS_V96=['),end=game.indexOf('\n];',start)+3;
const range=(dir,a,b)=>Array.from({length:b-a+1},(_,i)=>`${dir}/${String(a+i).padStart(2,'0')}.png`);
const scope={figImgV96:(a,b)=>range('fig',a,b),eneImgV96:(a,b)=>range('figene',a,b),bossImgV96:(a,b)=>range('figboss',a,b)};
const banners=vm.runInNewContext(game.slice(start,end)+';FIGURE_GACHAS_V96',scope);
const add=(id,extra,pickup=false)=>{const b=banners.find(b=>b.id===id);b.extra=[...new Set([...b.extra,...extra])];if(pickup)b.pickup=extra;delete b.disabledReason;};
add('003',range('fig',89,92));add('017',['figboss/43.png'],true);add('020',range('figboss',27,30),true);add('022',range('figboss',35,41),true);
banners.find(b=>b.id==='022').extra=range('figboss',35,41);
for(const [id,extra]of [['004',[...range('figene',51,56),'figboss/09.png','fig/40.png','fig/51.png']],['010',[...range('figene',51,61),'figboss/04.png','fig/39.png','fig/56.png','fig/57.png']],['011',[...range('figene',10,17),'figboss/04.png',...range('figboss',27,30),'fig/59.png','fig/60.png','fig/68.png','fig/69.png']]])banners.find(b=>b.id===id).extra=extra;
for(const b of banners){delete b.unlock;b.subtitle='MOB QUEST コレクション';b.color=['#e6b34b','#91c9a8','#b5a2e7'][Number(b.id)%3];const art=`gacha/${b.id}.png`;b.image=fs.existsSync(path.join(source,art))?art:(b.pickup?.[0]||b.extra[0]||'fig/16.png');if(b.image===art)fs.copyFileSync(path.join(source,art),path.join(root,art));}
function write(name,data){const text=JSON.stringify(data,null,2);fs.writeFileSync(path.join(root,`src/data/${name}.json`),text+'\n');fs.writeFileSync(path.join(root,`src/data/${name}.js`),'export default '+text+';\n');}
write('figures_master_v170',figures);write('tags_master_v170',tags);write('quest-banners',banners);
write('quest-adjacency',catalog.adjacency);
console.log(`Imported ${figures.length} figures (${added} new), ${tags.length} tags, ${banners.length} banners.`);
