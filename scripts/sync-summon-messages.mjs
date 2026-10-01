import fs from 'node:fs';
export function syncSummonMessages(){
const data=JSON.parse(fs.readFileSync(new URL('../src/data/summon-messages.json',import.meta.url),'utf8'));
for(const key of ['normal','ssr','pickup','allSSR'])if(!Array.isArray(data.cues?.[key])||data.cues[key].length!==2)throw new Error('Missing cue: '+key);
fs.writeFileSync(new URL('../src/data/summon_messages.js',import.meta.url),'// Generated from summon-messages.json by scripts/sync-summon-messages.mjs.\nconst data = '+JSON.stringify(data)+';\nexport default data;\n');
}
syncSummonMessages();
