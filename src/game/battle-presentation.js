// Optional, read-only presentation capture. Simulation/AI never waits for the UI.
const observers=new WeakMap();
export function presentationSnapshot(state){const {events,log,...rest}=state;return structuredClone({...rest,events:[],log:[...log]});}
export function capturePresentation(state,event){observers.get(state)?.set(event.seq,presentationSnapshot(state));}
export function observePresentation(state){const frames=new Map();observers.set(state,frames);return {
 take(events){return events.map(event=>{const presentationState=frames.get(event.seq);frames.delete(event.seq);return {...event,presentationState};});},
 destroy(){frames.clear();observers.delete(state);}
};}
