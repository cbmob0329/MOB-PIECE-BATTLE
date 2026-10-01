import adjacency from '../data/quest-adjacency.js?v=7.3.0';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function figureSkillInfo(f){
 const skills=Object.entries(f.pieceSoul||{});
 return '<section class="figure-skill-info"><h3>FIGURE SOUL</h3>'+ (skills.length?'<b>'+esc(f.soul?.name||skills[0][1].name)+'</b><p>タグ数＋タグ効果でSOULを獲得。各ラウンド最大2体、同じフィギュアは1対戦に1回。</p>'+skills.map(([tier,skill])=>'<div><small>SOUL '+tier+'</small><span>'+esc(skill.text)+'</span></div>').join(''):'<p>このフィギュアのSOULスキルはありません。</p>')+(f.adjacencyTags?.length?'<h3>隣接連携</h3>'+f.adjacencyTags.map(id=>adjacency.find(t=>t.id===id)).filter(Boolean).map(t=>'<div><b>'+esc(t.name)+'</b><span>'+esc(t.piece)+'</span></div>').join(''):'')+'</section>';
}
