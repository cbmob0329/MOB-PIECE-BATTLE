export const enemyThemes={
 grass:{bosses:['160','mq:eventfig/33','MB039','MB050','MB030'],support:['MB025','MB035','MB030','MB039','MB050'],seedTags:[]},
 desert:{bosses:['162','mq:eventfig/59','MB030','M4F_DOK_B01','RUN_B01'],support:['MB030','M4F_DOK_M01','M4F_DOK_M02','M4F_DOK_B01','RUN_M01','RUN_M02','RUN_B01'],seedTags:[]},
 sea:{bosses:['129','219','BFX050','MB016','M4F_SIL_B01'],support:['BFX023','BFX040','BFX034','BFX050','MB004','MB037','MB016','CRY_M02'],seedTags:[]},
 music:{bosses:['BFX045','BFX050','176','M4F_NEO_B01','piece:025'],support:['M4F_NEO_M01','M4F_NEO_M02','M4F_NEO_B01','piece:022','piece:040','piece:025'],tags:['12','44']},
 castle:{bosses:['156','202','207','210','mq:eventfig/54'],support:['192'],extraSeeds:['84','85','86','87','97']},
 susu:{bosses:['NS2_050','NS2_051','NS2_052','NS2_053','NS2_054'],support:['NS2_047','NS2_048','NS2_049']},
 keke:{bosses:['NS2_050','NS2_051','NS2_052','NS2_053','NS2_054'],support:['NS2_041','NS2_046'],extraSeeds:['mq:eventfig/24']},
 ame:{bosses:['NS2_050','NS2_051','NS2_052','NS2_053','NS2_054'],support:[]},
 hero:{bosses:['190','200','216','piece:039','piece:049'],support:['215','216','M4F_MIM_M01','piece:038','piece:040','piece:039','piece:046','piece:048','piece:049'],extraSeeds:['70','71','72','73','74','79','80','185']},
 lilith:{bosses:['207','MB016','218','ECL_B01','M4F_SIL_B01'],support:['157','158','MB016','218','ECL_M01','ECL_M02','ECL_B01','M4F_SIL_M01','M4F_SIL_M02','M4F_SIL_B01'],extraSeeds:['84','85','86','87','152'],reserves:['181','182','183','184','157','158','ECL_M01','ECL_M02','M4F_SIL_M01','M4F_SIL_M02','207','MB016','218','ECL_B01','M4F_SIL_B01']}
};

// Enemy-only policy. Material conditions never change a figure's membership.
export const enemySeedAnchors={grass:['45','46','89','93','50'],desert:['49','101','102','211','212'],sea:['124','125','126','43','mq:eventfig/43'],music:['BFX009','BFX027','piece:023','SWEET05','SWEET18'],castle:['149','150','152','177','178'],susu:['NS2_001','NS2_002','NS2_003','NS2_004','NS2_009'],keke:['NS2_027','NS2_005','NS2_006','NS2_007','NS2_008'],ame:['NS2_034','NS2_033','NS2_035','NS2_036','NS2_037'],hero:['47','191','44'],lilith:['177','178','179','180','84']};
export function enemyFigureAllowed(enemy,figure){
 const policy=enemyThemes[enemy.baseThemeId||enemy.id];if(!policy||!figure||figure.retired)return false;
 if(policy.reserves&&figure.soulClass!=='seed'&&!policy.reserves.includes(figure.id))return false;
 return enemy.materialSupportIds?.includes(figure.id)&&figure.soulClass==='seed'||figure.tags.some(t=>(policy.tags||enemy.themeTagIds).includes(t))||policy.support.includes(figure.id)||figure.soulClass==='seed'&&(figure.image.startsWith('piecefig/')||policy.extraSeeds?.includes(figure.id));
}
