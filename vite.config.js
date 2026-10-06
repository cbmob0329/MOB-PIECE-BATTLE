import {syncSummonMessages} from './scripts/sync-summon-messages.mjs';
import './scripts/index-assets.mjs';
import { defineConfig } from 'vite';
import { cpSync, existsSync } from 'node:fs';
let assetOutput='dist';
// Preserve original stable asset paths in production as well as development.
export default defineConfig({base:'./',plugins:[{name:'summon-copy',handleHotUpdate({file}){if(file.endsWith('/summon-messages.json')||file.endsWith('\\summon-messages.json'))syncSummonMessages();}},{name:'figure-assets',configResolved(config){assetOutput=config.build.outDir;},closeBundle(){for(const dir of ['fig','figboss','figene','figplay','eventfig','spbossfig','gacha','icon','menu','rank','mainfig','piecefig','battle','skill','skill2'])if(existsSync(dir))cpSync(dir,`${assetOutput}/${dir}`,{recursive:true});}}]});
