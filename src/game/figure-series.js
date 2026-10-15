export const figureSeriesList=f=>[...new Set([f.series||f.collection||'未分類',f.series2].filter(x=>typeof x==='string'&&x.trim()).map(x=>x.trim()))];
export const figureSeries=f=>figureSeriesList(f).join(' / ');
export const figureSeriesNames=figures=>[...new Set(figures.flatMap(figureSeriesList))].sort((a,b)=>a.localeCompare(b,'ja'));
