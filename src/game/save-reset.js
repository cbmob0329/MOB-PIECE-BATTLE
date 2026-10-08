// Explicit allowlist: never clear shared-origin storage or other MOB games.
export const battleSaveKeys=Object.freeze(['mob-piece-battle:audio:v1','mob-piece-battle:profile:v1']);
export function deleteBattleSave(storage){
 const previous=battleSaveKeys.map(key=>[key,storage.getItem(key)]);
 try{for(const [key] of previous)storage.removeItem(key);}
 catch(error){
  let restored=true;for(const [key,value] of previous){try{if(value!==null)storage.setItem(key,value);}catch{restored=false;}}
  throw new Error(restored?'削除できませんでした。セーブデータを元に戻しました。':'削除を完了できませんでした。ブラウザの保存設定を確認してください。',{cause:error});
 }
}
