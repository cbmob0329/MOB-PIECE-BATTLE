const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=process.cwd(),work=path.join(root,'artifacts/butter-remake'),dest=path.join(root,'新フィギュア/バター');
const read=f=>JSON.parse(fs.readFileSync(path.join(work,f),'utf8').replace(/^\uFEFF/,''));
const old=read('remake-comparison.json'),newSpec=read('new-character-proposals.json');
const prior=path.join(work,'backup-before-32-roster');fs.mkdirSync(prior,{recursive:true});
for(const f of ['remake-comparison.json','バターシリーズ_制作状況と未確定事項.txt'])if(fs.existsSync(path.join(work,f))&&!fs.existsSync(path.join(prior,f)))fs.copyFileSync(path.join(work,f),path.join(prior,f));
const names=['モブバターシールド・ガーディアン','モブバターロッド・マイスター','モブバターウェーブ・フロウ','モブバターランス・スピン','モブバターシールド','モブバターロッド','モブバターウェーブ','モブバターランス'];
const stats=[[155,175],[100,110],[175,140],[115,90],[130,165],[80,115],[175,180],[125,120],[125,185],[160,150],[165,145],[185,155],[75,130],[110,100],[95,115],[115,95]];
const skills=[
['盾からの反撃','次の相手ターン終了まで、自分が最初の攻撃を受けて生き残った場合、次の自分のターン終了まで自分のATK+30。'],
['バターパリィ','次の相手ターン終了まで、自分が受ける最初のATK低下を20まで軽減する。'],
['荒野の放電','敵1体を選ぶ。このターンその敵のDEF-30、自分のATK+15。'],
['携帯バター電池','このターン自分のATK+25。使用後、次の相手ターン終了まで自分のDEF-15。'],
['からまる巻物','敵1体を選ぶ。このターンその敵への最初のスキルによるDEF上昇を無効にする。'],
['糸のゆるみ','自分のATK・DEF低下を合計20まで戻す。戻す配分を選べる。元の値を超えない。'],
['二重バター軌道','味方1体と敵1体を選ぶ。次の相手ターン終了まで味方のDEF+25、敵のATK-20。'],
['小さな衛星','自分以外の味方1体を選ぶ。次の相手ターン終了まで、その味方が受ける最初のDEF低下を無効にする。'],
['大盾の退路','味方1体を選ぶ。次の相手ターン終了まで、その味方への最初の攻撃を自分が代わりに受ける。'],
['横薙ぎバターロッド','敵2体までを選ぶ。このターン、それぞれのDEF-15。'],
['波の押し返し','敵1体を選ぶ。次の相手ターン終了まで、その敵のATK-30。'],
['螺旋の突き','敵MIDDLEまたはMOB1体を選ぶ。このターンその敵を攻撃するときだけ自分のATK+45。他の敵を攻撃できない。'],
['薄塗りシールド','次の相手ターン終了まで自分のDEF+25。このターン自分のATK-10。'],
['やわらかい杖先','敵1体を選ぶ。このターンその敵のDEF-20。'],
['小波の受け流し','次の相手ターン終了まで、自分が最初の攻撃を受けて生き残ったら、攻撃した敵のATKを15下げる。'],
['間合いの一歩','自分よりDEFが高い敵1体を選ぶ。このターンその敵を攻撃するときだけ自分のATK+30。']
];
let rows=old.map((r,i)=>({id:r.id,file:r.file,name:i<8?r.name:names[i-8],nameOrigin:i<8?'既存ファイル名保持':'ユーザー承認に基づく命名案',stage:r.proposedStage,stageOrigin:r.confirmedStage?'既存ファイル名':'ユーザー承認に基づく配分案',rarity:r.proposedRarity,rarityOrigin:'指定総数に合わせた個別配分案',artStatus:'完成・既存同名上書き',difference:r.difference,confirmedSettings:{ATK:null,DEF:null,skill:null},proposal:{ATK:stats[i][0],DEF:stats[i][1],skillName:skills[i][0],skillText:skills[i][1],usesPerBattle:1,timing:'自分メインフェイズ'},implemented:false}));
newSpec.jobs.forEach((j,i)=>rows.push({id:'NEW'+String(i+1).padStart(2,'0'),file:j[0],name:j[1],nameOrigin:'ユーザー承認に基づく命名案',stage:i<12?'SEED':'MOB',stageOrigin:'指定総数に合わせた追加枠',rarity:j[2],rarityOrigin:'指定総数に合わせた個別配分案',artStatus:'完成・新規個別生成',difference:j[7],confirmedSettings:{ATK:null,DEF:null,skill:null},proposal:{ATK:Math.min(300,Math.round(j[3]/10)*5),DEF:Math.min(300,Math.round(j[4]/10)*5),skillName:j[5],skillText:i===9?'次の相手ターン終了まで自分のDEF+25。このターン自分のATK-10。':j[6],usesPerBattle:1,timing:'自分メインフェイズ'},implemented:false}));
const stages={SEED:{SR:17,SSR:3},MIDDLE:{SSR:6,UR:2},MOB:{SSR:2,UR:1,MOB:1}},counts={};
for(const r of rows){counts[r.stage]??={};counts[r.stage][r.rarity]=(counts[r.stage][r.rarity]||0)+1;if(!fs.existsSync(path.join(work,r.file)))throw Error('Missing '+r.file);}
if(rows.length!==32||new Set(rows.map(x=>x.file)).size!==32)throw Error('Count or filename mismatch');
for(const [s,v]of Object.entries(stages))for(const [rarity,n]of Object.entries(v))if(counts[s]?.[rarity]!==n)throw Error('Rarity mismatch');
for(const r of rows)fs.copyFileSync(path.join(work,r.file),path.join(dest,r.file));
const ordered=['SEED','MIDDLE','MOB'].flatMap(s=>rows.filter(r=>r.stage===s));
const manifest={series:'バター',date:'2026-10-30',status:'32個別画像完成。設定は提案・未実装',counts,rows:ordered};
fs.writeFileSync(path.join(work,'butter-32-manifest.json'),JSON.stringify(manifest,null,2));
fs.writeFileSync(path.join(dest,'バターシリーズ_32体設定案.json'),JSON.stringify(manifest,null,2));
let txt='バターシリーズ 32体設定案・ステータス/スキルTXT\n2026-10-30\n\n既存16枚を個別リメイク＋追加16体。合計32枚の個別PNG。\nSEED20: SR17/SSR3\nMIDDLE8: SSR6/UR2\nMOB4: SSR2/UR1/MOB1\n\n【確定事項と提案の区別】\n総数・レアリティ内訳・共通デザイン条件はユーザー指定。既知8枚の名前とSEED/MIDDLEを保持。\n日付ファイル名8枚と新規16体の名前・段階配分は、2026-10-30の提案許可に基づく案。元の日付ファイル名は変更していない。\n既存ATK/DEF/個別スキルの資料は確認できなかったため、以下の数値・技はすべて新規提案。採用済み・実装済みではない。\n参照: src/data/oct15-new-figures.json の数値帯と新スキル一覧.txtの効果表現。数値バランスは要プレイテスト。\n共通案: 各スキルは各個体につき1バトル1回、自分メインフェイズで使用。対象がいなければ使用不可。持続期間がない能力値変動は場にいる間継続し、場を離れると解除。能力値は0未満にならない。\n\n【共通外見】\nカートゥーン・猫耳型被り物・丸眼鏡・バター要素・口なし。線の目、ダイヤ、ハート、王冠、インベーダーは使用しない。瞳・衣装・ポーズを描き分ける。\n\n';
for(const s of ['SEED','MIDDLE','MOB']){txt+=`\n===== ${s} =====\n`;for(const r of ordered.filter(x=>x.stage===s)){txt+=`\n${r.id} ${r.name}\n段階: ${r.stage}\nレアリティ配分案: ${r.rarity}\n画像ファイル: ${r.file}\n名前根拠: ${r.nameOrigin}\n既存確定ATK/DEF/技: 資料未確認\n提案ATK: ${r.proposal.ATK}\n提案DEF: ${r.proposal.DEF}\n提案スキル: ${r.proposal.skillName}\n効果案: ${r.proposal.skillText}\n回数/タイミング案: 1バトル1回 / 自分メインフェイズ\n実装状態: 未実装\n`;}}
txt+='\n【保存・検証】\n原画16枚控え: artifacts/butter-remake/backup-20261030-091500\n更新前の16体制作状況TXTと対照JSON控え: artifacts/butter-remake/backup-before-32-roster\n32体一覧: artifacts/butter-remake/butter-32-contact.png\n検証: artifacts/butter-remake/butter-32-validation.json\n正規組み込みimage_genで1体1枚生成。ゲームデータ実装、Git push、公開は実施していない。\n';
fs.writeFileSync(path.join(dest,'バターシリーズ_32体ステータスとスキル案.txt'),txt);
fs.writeFileSync(path.join(work,'バターシリーズ_32体ステータスとスキル案.txt'),txt);
let index='バターシリーズ 32体画像・名称対照一覧\n総数32（既存16＋追加16）。名称・個別配分は提案、既知の名前/段階は保持。\n\n';
for(const r of ordered)index+=`${r.id} | ${r.stage} | ${r.rarity} | ${r.name}\n${r.file}\n\n`;
fs.writeFileSync(path.join(dest,'バターシリーズ_32体対照一覧.txt'),index);fs.writeFileSync(path.join(work,'バターシリーズ_32体対照一覧.txt'),index);
const status='バターシリーズ制作完了: 32体の個別PNG（既存16リメイク＋追加16）を同フォルダへ保存。\nSEED20=SR17/SSR3、MIDDLE8=SSR6/UR2、MOB4=SSR2/UR1/MOB1。\n詳細は「バターシリーズ_32体ステータスとスキル案.txt」「バターシリーズ_32体対照一覧.txt」を参照。\n新規命名/段階配分の提案は承認済み。数値・技は提案として分離し、ゲーム本体には未実装。\n原画と旧制作状況TXTの控えはartifacts/butter-remakeに保存。\nLibrary保存はPC接続処理のPermission deniedで完了未確認。Library ID未取得。代替外部アップロードなし。\n';
for(const dir of [work,dest])fs.writeFileSync(path.join(dir,'バターシリーズ_制作状況と未確定事項.txt'),status);
console.log(JSON.stringify({count:rows.length,counts,uniqueFiles:new Set(rows.map(r=>r.file)).size}));
