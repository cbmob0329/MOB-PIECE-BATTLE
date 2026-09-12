export function normalizeFigureRecords(profile){if(!profile.figureRecords||typeof profile.figureRecords!=='object')profile.figureRecords={};return profile.figureRecords;}
function row(profile,id){normalizeFigureRecords(profile);if(!profile.figureRecords[id])profile.figureRecords[id]={appearances:0,roundWins:0,matchWins:0};return profile.figureRecords[id];}
export function applyBattleFigureRecords(profile,result){
  if(!result?.match)return;const rounds=Array.isArray(result.match.history)?result.match.history:[];const matchSeen=new Set();
  for(const r of rounds){for(const id of r.pHand||[]){const rec=row(profile,id);rec.appearances++;matchSeen.add(id);if(r.won)rec.roundWins++;}}
  if(result.won)for(const id of matchSeen)row(profile,id).matchWins++;
}
export function enrichedHistoryRow(result,request,extra={}){
  const m=result?.match||{};return {...extra,won:Boolean(result?.won),score:[Number(result?.battleFor||0),Number(result?.battleAgainst||0)],opponentName:request?.opponentName||'CPU',title:request?.title||'',playerDeck:[...(m.playerDeckOriginal||[])],opponentDeck:[...(m.cpuDeckOriginal||[])],rounds:(m.history||[]).map(r=>({...r,pHand:[...(r.pHand||[])],cHand:[...(r.cHand||[])]})),pieceBoostUsed:Boolean(m.pieceBoostUsed)};
}
export function figureRecord(profile,id){const r=normalizeFigureRecords(profile)[id]||{};return {appearances:Number(r.appearances||0),roundWins:Number(r.roundWins||0),matchWins:Number(r.matchWins||0)};}
