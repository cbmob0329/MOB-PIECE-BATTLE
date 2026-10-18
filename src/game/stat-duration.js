// Only the sentence describing the stat change controls its lifetime. A later
// sentence about attack/fusion restrictions must not expire the stat modifier.
export function statEffectUntil(skill,key,scheduledUntil){
 if(!['atk','def','atkSet','defSet'].includes(key))return scheduledUntil;
 const text=(skill?.description||skill?.text||'').split(/パッシブ\s*[:：]/)[0];
 const stat=key.startsWith('atk')?'ATK':'DEF';
 const sentences=text.split(/[。\n]/).filter(Boolean);
 const index=sentences.findIndex(t=>t.toUpperCase().includes(stat));
 if(index<0)return Infinity;
 const sentence=sentences[index];
 const timed=/(?:この|その|次の|次に|ターン終了|ターン中|攻撃終了|戦闘中).*(?:ターン|攻撃|終了|まで|のみ)|このターン|ターン終了まで/;
 // Some descriptions explicitly extend a buff in the following sentence.
 if(timed.test(sentence)||/この強化を維持/.test(sentences[index+1]||''))return scheduledUntil;
 return Infinity;
}
