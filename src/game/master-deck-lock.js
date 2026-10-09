export function masterDeckLocked(profile){return [profile.towerCampaign?.active,profile.towerProgress?.active].some(a=>a?.floor===5);}
export const MASTER_DECK_LOCK_MESSAGE='タワーマスターとの連戦中はデッキを編集できません。連戦を完了するか、タワー画面で挑戦を終了してください。';
