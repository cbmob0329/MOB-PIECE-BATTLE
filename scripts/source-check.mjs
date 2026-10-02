import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';

const files=[];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())walk(p);else if(/\.(?:js|mjs|css|html|json)$/.test(p))files.push(p);}}
walk('src');walk('scripts');files.push('index.html','vite.config.js','package.json');
let failures=0;
for(const file of files){
 const text=fs.readFileSync(file,'utf8');
 if(/^(?:<{7}(?: |$)|={7}\s*$|>{7}(?: |$))/m.test(text)){console.error('Unresolved merge conflict: '+file);failures++;}
 if(/\.(?:js|mjs)$/.test(file)){
  const result=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});
  if(result.status!==0){console.error(result.stderr||result.error);failures++;}
 }
}
if(failures)process.exit(1);
console.log('PASS: source syntax and merge-conflict markers ('+files.length+' files)');
