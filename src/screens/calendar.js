import {isQualifierWeek,isRankUpWeek} from '../data/competition.js?v=7.2.0';

const monthName = n => `${n}月`;
const eventLabel = (year,month,week) => {
  const list=[];
  if(month<=11 && isQualifierWeek(month,week)) list.push('MOB LEAGUE 予選');
  if(isRankUpWeek(month,week)) list.push('RANK UP TOURNAMENT');
  if(month===12 && week<=2) list.push('MOB LEAGUE 本戦');
  if(year>=2 && month===12 && week===3) list.push('MOB MASTER 決定戦');
  if(month===12 && week===4) list.push('SEASON END');
  return list;
};

export function calendarScreen(c, view='year', selectedMonth=null){
  const current=c.profile.competition.date,month=selectedMonth||current.month;
  const menu=c.menuArt('calendar','calendar-title-art','CALENDAR');
  const tabs=`<div class="calendar-tabs"><button data-calendar-view="year" class="${view==='year'?'active':''}">YEAR</button><button data-calendar-view="month" class="${view==='month'?'active':''}">MONTH</button></div>`;
  if(view==='month'){
    const weeks=[1,2,3,4].map(w=>{const events=eventLabel(current.year,month,w);const here=month===current.month&&w===current.week;return `<article class="calendar-week ${here?'current':''}"><div><small>WEEK</small><b>第${w}週</b>${here?'<em>NOW</em>':''}</div><section>${events.length?events.map(e=>`<span>${e}</span>`).join(''):'<span class="quiet">通常週</span>'}</section></article>`;}).join('');
    return `<section class="library calendar-page"><div class="asset-page-heading">${menu}<div><span class="eyebrow">SEASON SCHEDULE</span><h1>CALENDAR</h1><p>月ごとの大会・リーグ予定を確認できます。</p></div></div>${tabs}<div class="calendar-month-picker"><button data-calendar-month="${month===1?12:month-1}">←</button><b>${current.year}年目 · ${monthName(month)}</b><button data-calendar-month="${month===12?1:month+1}">→</button></div><div class="calendar-month-weeks">${weeks}</div></section>`;
  }
  const months=Array.from({length:12},(_,i)=>i+1).map(m=>{const currentMonth=m===current.month;return `<button class="calendar-year-month ${currentMonth?'current':''}" data-calendar-open-month="${m}"><header><small>MONTH</small><b>${m}</b>${currentMonth?'<em>NOW</em>':''}</header><div>${[1,2,3,4].map(w=>{const ev=eventLabel(current.year,m,w);return `<span class="${ev.length?'event':''} ${m===current.month&&w===current.week?'now':''}"><b>W${w}</b><small>${ev[0]||'—'}</small></span>`;}).join('')}</div></button>`;}).join('');
  return `<section class="library calendar-page"><div class="asset-page-heading">${menu}<div><span class="eyebrow">SEASON SCHEDULE</span><h1>CALENDAR</h1><p>1年48週。年単位と月単位を切り替えて確認できます。</p></div></div>${tabs}<div class="calendar-year-grid">${months}</div></section>`;
}
