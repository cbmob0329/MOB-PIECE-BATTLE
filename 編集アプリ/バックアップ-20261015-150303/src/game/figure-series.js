export const figureSeries=f=>f.series||f.collection||'未分類';
export const figureSeriesNames=figures=>[...new Set(figures.map(figureSeries))].sort((a,b)=>a.localeCompare(b,'ja'));
