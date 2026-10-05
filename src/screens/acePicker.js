import {soulFigures,classNames} from '../game/soul-battle.js';
import catalog from '../data/soul-catalog.js';
import {isFavorite,prepareFavoriteToggle} from '../game/favorites.js';
import {commitProfile} from '../game/profile.js?v=7.3.0';
const drafts=new Map(),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize=s=>s.normalize('NFKC').toLocaleLowerCase('ja');
const tagNames=new Map(catalog.tags.map(t=>[t.id,t.name]));
export function mountAcePicker(dialog,profile,owned,slot){
 const candidates=soulFigures.filter(f=>owned[f.id]>0),byId=new Map(candidates.map(f=>[f.id,f]));
 const draft=drafts.get(slot)||{ids:[],query:'',tag:'ALL',favorites:false};draft.ids=draft.ids.filter(id=>byId.has(id)).slice(0,5);drafts.set(slot,draft);
 dialog.classList.add('ace-picker');
 dialog.querySelector('section').innerHTML=`<div class="ace-filter-bar"><p class="ace-intro">好きな5体を軸に、所持フィギュアで編成します。</p><label class="search-label">名前・ID・タグ<input id="ace-search" type="search" placeholder="エースを探す" value="${esc(draft.query)}" autocomplete="off"></label><div class="ace-filter-row"><label>タグ<select id="ace-tag"><option value="ALL">すべて</option>${catalog.tags.map(t=>`<option value="${esc(t.id)}" ${draft.tag===t.id?'selected':''}>${esc(t.name)}</option>`).join('')}</select></label><button type="button" data-ace-favorites aria-pressed="${draft.favorites}">★ お気に入り</button></div><p data-ace-results role="status"></p></div><div class="ace-results" tabindex="-1"><div class="assist-cards ace-grid"></div></div>`;
 const footer=document.createElement('footer');footer.className='ace-footer';footer.innerHTML='<div class="ace-selection-heading"><b data-ace-count aria-live="polite"></b><small>タップで選択を解除</small></div><div class="ace-tray" aria-label="選択したエース"></div><p class="assist-error" role="alert"></p><button type="button" data-aces-build disabled>5体を選んで編成へ</button>';dialog.append(footer);
 const search=dialog.querySelector('#ace-search'),grid=dialog.querySelector('.ace-grid');let composing=false;
 function renderSelection(){
  dialog.querySelector('[data-ace-count]').textContent=`選択 ${draft.ids.length} / 5`;
  const build=dialog.querySelector('[data-aces-build]');build.disabled=draft.ids.length!==5;build.textContent=draft.ids.length===5?'この5体で編成案をつくる':`あと${5-draft.ids.length}体を選択`;
  dialog.querySelector('.ace-tray').innerHTML=Array.from({length:5},(_,i)=>{const f=byId.get(draft.ids[i]);return f?`<button type="button" data-ace-remove="${esc(f.id)}" aria-label="${esc(f.name)}の選択を解除"><img src="${esc(f.image)}" alt=""><span>${esc(f.name)}</span><i aria-hidden="true">×</i></button>`:`<span class="ace-empty" aria-label="未選択 ${i+1}">${i+1}</span>`;}).join('');
  for(const input of grid.querySelectorAll('[data-ace-pick]')){input.checked=draft.ids.includes(input.value);input.disabled=draft.ids.length===5&&!input.checked;input.closest('.ace-card').classList.toggle('is-selected',input.checked);}
 }
 function renderResults(){
  const rows=candidates.filter(f=>(!draft.favorites||isFavorite(profile,f.id))&&(draft.tag==='ALL'||f.tags.includes(draft.tag))&&normalize([f.name,f.id,...f.tags.map(t=>tagNames.get(t)||t)].join(' ')).includes(normalize(draft.query)));
  dialog.querySelector('[data-ace-results]').textContent=`${rows.length}体の候補 · 選択は絞り込み後も保持`;
  grid.innerHTML=rows.map(f=>`<article class="ace-card"><label><input type="checkbox" data-ace-pick value="${esc(f.id)}"><span class="ace-mark" aria-hidden="true">✓</span><small>${esc(f.rarity)} · ${esc(f.attribute)}</small><img src="${esc(f.image)}" alt="" loading="lazy"><b>${esc(f.name)}</b><small>${classNames[f.soulClass]} · 所持 ${profile.owned[f.id]||0}</small></label><button type="button" class="figure-favorite" data-ace-favorite="${esc(f.id)}" aria-pressed="${isFavorite(profile,f.id)}" aria-label="${esc(f.name)}のお気に入り${isFavorite(profile,f.id)?'解除':'登録'}">${isFavorite(profile,f.id)?'★':'☆'}</button></article>`).join('')||'<p class="figure-empty">該当するフィギュアがありません。検索やタグ、お気に入りの条件を変えてください。</p>';
  renderSelection();
 }
 const input=e=>{if(e.target===search&&!composing&&!e.isComposing){draft.query=search.value;renderResults();}};
 const start=()=>{composing=true;},end=()=>{composing=false;draft.query=search.value;renderResults();};
 const change=e=>{if(e.target.id==='ace-tag'){draft.tag=e.target.value;renderResults();}if(e.target.matches('[data-ace-pick]')){const id=e.target.value;if(e.target.checked&&!draft.ids.includes(id)&&draft.ids.length<5)draft.ids.push(id);else if(!e.target.checked)draft.ids=draft.ids.filter(x=>x!==id);renderSelection();}};
 const click=e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-ace-favorites')){draft.favorites=!draft.favorites;b.setAttribute('aria-pressed',String(draft.favorites));renderResults();}
  else if(b.dataset.aceRemove){draft.ids=draft.ids.filter(id=>id!==b.dataset.aceRemove);renderSelection();(dialog.querySelector('[data-ace-remove]')||search).focus({preventScroll:true});}
  else if(b.dataset.aceFavorite){e.preventDefault();e.stopPropagation();const id=b.dataset.aceFavorite;if(!commitProfile(prepareFavoriteToggle(profile,id))){dialog.querySelector('.assist-error').textContent='保存できませんでした。お気に入りは変更していません。';return;}dialog.querySelector('.assist-error').textContent='';renderResults();const replacement=[...grid.querySelectorAll('[data-ace-favorite]')].find(x=>x.dataset.aceFavorite===id);(replacement||dialog.querySelector('[data-ace-favorites]')).focus({preventScroll:true});}
 };
 dialog.addEventListener('click',click);dialog.addEventListener('change',change);search.addEventListener('input',input);search.addEventListener('search',input);search.addEventListener('compositionstart',start);search.addEventListener('compositionend',end);renderResults();
 return {ids:()=>[...draft.ids],dispose(){dialog.removeEventListener('click',click);dialog.removeEventListener('change',change);dialog.classList.remove('ace-picker');footer.remove();}};
}
