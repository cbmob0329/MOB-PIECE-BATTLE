import {applyOct15} from './oct15-additions.js';
import {applyOct14} from './oct14-additions.js';
import {applyOct10Additions} from './oct10-addition-updates.js';
import {applyOct07Skills} from './oct07-skills.js';
import {applyOct07Safe} from './oct07-safe.js';
import {applyOct06Spec} from './oct06-spec.js';
import {applyBattleCorrections} from './battle-corrections.js';
import {applyOct05Spec} from './oct05-spec.js';
import {extendPieceCatalog} from './piece-catalog.js';
import {applyOceanSeries} from './ocean-series.js';

// Shared by runtime and master regeneration; keep user-approved overlays last.
export const applyPriorCatalogUpdates=base=>applyOct15(applyOct14(applyOct10Additions(applyOct07Skills(applyOct07Safe(applyOct06Spec(applyBattleCorrections(applyOct05Spec(extendPieceCatalog(base)))))))));
export const applyCatalogUpdates=base=>applyOceanSeries(applyPriorCatalogUpdates(base));
