import fs from 'node:fs';
const p='src/game/profile.js';let s=fs.readFileSync(p,'utf8');s="import {testSettings} from '../data/test-settings.js';\n"+s;s=s.replace('export const profile=loadProfile();','export const profile=loadProfile();\n// テスト中は起動時に補充。既存の所持・編成・抽選率は変更しません。\nif(testSettings.enabled){profile.diamonds=testSettings.maxCurrency;saveProfile();}');fs.writeFileSync(p,s);
