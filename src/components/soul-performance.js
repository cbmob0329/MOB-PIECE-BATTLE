const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labels={seed:'① シード',middle:'② ミドル',mob:'③ MOB'};
export const stageBadge=f=>`<span class="soul-stage-badge stage-${f.soulClass}">${labels[f.soulClass]||esc(f.soulClass)}</span>`;
export function soulPerformance(f){return `<div class="soul-performance">${stageBadge(f)}<span class="soul-rarity-label">レア度 ${esc(f.rarity)}</span><p>${esc(f.attribute)}属性 · ATK <b>${f.atk}</b> / DEF <b>${f.def}</b></p><h3>${esc(f.soulSkill?.name)}</h3><small>${esc(f.soulSkill?.timingLabel)}</small><p>${esc(f.soulSkill?.description)}</p><p class="skill-use-rule">スキルは各個体1ターン1回、対戦中は${{seed:1,middle:2,mob:3}[f.soulClass]}回まで（常時効果を除く）。編成画面では未使用です。</p></div>`;}
