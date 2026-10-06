// Deterministic pacing avoids random rerolls when the UI requests another action.
// This reads no opposing hand or deck information.
export function cpuActionAllowed(s,kind){
 const q=s.cpuStrategy;if(!q)return true;
 const action=kind==='reaction'?'skill':kind;
 const ownTurn=Math.max(1,Math.ceil(s.turn/2));
 if(ownTurn%(q[action+'Every']||1)!==0)return false;
 const usage=s.cpuRankActions?.turn===s.turn?s.cpuRankActions[action]||0:0;
 return usage<(q[action+'Limit']??Infinity);
}
export function recordCpuAction(s,kind){
 const action=kind==='reaction'?'skill':kind;
 if(s.cpuRankActions?.turn!==s.turn)s.cpuRankActions={turn:s.turn};
 s.cpuRankActions[action]=(s.cpuRankActions[action]||0)+1;
}
