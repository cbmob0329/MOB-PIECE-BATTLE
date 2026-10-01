// Quest's stat bonuses supported by the piece battle engine. RPG-only effects
// remain reference metadata; do not advertise them as active battle bonuses.
const all=n=>({lifePct:n,attackPct:n,defensePct:n,speedPct:n});
const center=n=>({centerLifePct:n,centerAttackPct:n,centerDefensePct:n,centerSpeedPct:n});
export const questTagEffects={
 '53':[{defensePct:.25,attackPct:.15},{defensePct:.4,attackPct:.25}],
 '54':[{enemySpeedPct:-.15,defensePct:.2},{enemySpeedPct:-.25,defensePct:.35}],
 '55':[{speedPct:.4},{speedPct:.6,enemySpeedPct:-.1}],
 '56':[{attackPct:.3,enemyDefensePct:-.1},{attackPct:.5,enemyDefensePct:-.2}],
 '57':[{enemyAttackPct:-.15,enemySpeedPct:-.15},{enemyAttackPct:-.25,enemySpeedPct:-.25}],
 '58':[{},{}],
 '59':[{centerAttackPct:.4,centerSpeedPct:.2},{centerAttackPct:.7,centerSpeedPct:.3}],
 '60':[{attackPct:.25,speedPct:.1},{attackPct:.4}],
 '61':[{defensePct:.3,lifePct:.2},{defensePct:.45,lifePct:.3}],
 '62':[{attackPct:.25,defensePct:.25},{attackPct:.4,defensePct:.4}],
 '63':[{speedPct:.2,defensePct:.2,lifePct:.15},{speedPct:.35,defensePct:.3,lifePct:.25}],
 '64':[{defensePct:.3},{defensePct:.45,enemyAttackPct:-.1}],
 '65':[{lifePct:.3},{lifePct:.5,attackPct:.15}],
 '66':[{defensePct:.2},{defensePct:.3}],
 '67':[{lifePct:.35,defensePct:.15},{lifePct:.55,defensePct:.25}],
 '68':[{attackPct:.35,lifePct:.25},{attackPct:.55,lifePct:.4}],
 '69':[{speedPct:.3,enemyAttackPct:-.1},{speedPct:.45,enemyAttackPct:-.2}],
 '70':[{centerAttackPct:.25,centerDefensePct:.25,centerSpeedPct:.25},{centerAttackPct:.4,centerDefensePct:.4,centerSpeedPct:.4}],
 '71':[{attackPct:.35},{attackPct:.5,enemyDefensePct:-.15}],
 '72':[all(.1),{...all(.2),lifePct:.3}],
 '73':[{attackPct:.2,defensePct:.2,speedPct:.2},{attackPct:.35,defensePct:.35,speedPct:.35}],
 '74':[center(.4),center(.6)],
 '75':[{speedPct:.35,attackPct:.1},{speedPct:.55,attackPct:.2}],
 '76':[{defensePct:.25,speedPct:.15},{defensePct:.4,speedPct:.25}],
 '77':[{lifePct:.4,defensePct:.15},{lifePct:.6,defensePct:.25}],
 '78':[all(.12),all(.22)],
 '79':[{attackPct:.25,speedPct:.25},{attackPct:.4,speedPct:.4}],
 '80':[{defensePct:.25,attackPct:.15},{defensePct:.4,attackPct:.25}],
 '81':[{centerAttackPct:.6,centerDefensePct:-.15},{centerAttackPct:1,centerDefensePct:-.2}],
 '82':[{defensePct:.2},{defensePct:.35}]
};
const names={lifePct:'HP',attackPct:'ATK',defensePct:'DEF',speedPct:'SPD',enemyAttackPct:'相手ATK',enemyDefensePct:'相手DEF',enemySpeedPct:'相手SPD',centerLifePct:'センターHP',centerAttackPct:'センターATK',centerDefensePct:'センターDEF',centerSpeedPct:'センターSPD'};
export const effectSpec=effects=>({effects,label:Object.entries(effects).map(([key,n])=>`${names[key]} ${n>=0?'+':''}${Math.round(n*100)}%`).join(' / ')||'このバトルでの能力補正なし'});
