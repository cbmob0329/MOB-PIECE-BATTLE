// Source-branch hosting retains public/; Vite serves/copies its contents at the site root.
// Relative URLs preserve project subpaths and work on case-sensitive static hosts.
const sourceHosting=typeof document!=='undefined'&&import.meta.env?.BASE_URL===undefined;
export const publicAsset=path=>(sourceHosting?'public/':'')+path;
