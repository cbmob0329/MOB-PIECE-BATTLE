import {soulById} from '../game/soul-battle.js';
import {publicAsset} from '../data/public-assets.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function versusStage({playerId,enemyId,playerLabel='あなた',enemyLabel,caption=''}){
 const player=soulById.get(playerId),enemy=soulById.get(enemyId);
 const fighter=(f,label,side)=>`<figure class="versus-fighter ${side}"><i class="versus-halo" aria-hidden="true"></i>${f?`<img src="${esc(f.image)}" alt="${esc(f.name)}" draggable="false">`:''}<figcaption><small>${esc(label)}</small><strong>${esc(f?.name||'')}</strong></figcaption></figure>`;
 return `<div class="versus-stage" style="--versus-art:url('${new URL(publicAsset('assets/towers/layers/versus-arena-retro-oct09.png'),document.baseURI).href}')"><div class="versus-backdrop" aria-hidden="true"></div><div class="versus-light" aria-hidden="true"></div>${caption?`<p class="versus-caption">${esc(caption)}</p>`:''}<div class="versus-cast">${fighter(player,playerLabel,'versus-player')}<b class="versus-mark" aria-label="対">VS</b>${fighter(enemy,enemyLabel||'対戦相手','opponent')}</div><i class="versus-edge" aria-hidden="true"></i></div>`;
}
