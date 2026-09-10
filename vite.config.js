import './scripts/index-assets.mjs';
import { defineConfig } from 'vite';
import { cpSync, existsSync } from 'node:fs';
// Preserve original stable asset paths in production as well as development.
export default defineConfig({base:'./',plugins:[{name:'figure-assets',closeBundle(){for(const dir of ['fig','figboss','figene','figplay','eventfig','spbossfig','gacha','icon'])if(existsSync(dir))cpSync(dir,`dist/${dir}`,{recursive:true});}}]});
