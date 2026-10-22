"""Build the two design-reviewed dorayaki series without changing original art."""
from pathlib import Path
import json, shutil

ROOT=Path(__file__).resolve().parents[1]
DESERT='砂漠を癒すどら焼き'
SEA='海底の秘宝どら焼き'
DT='series-dorayaki-desert'
ST='series-dorayaki-sea'
rows=[]
def add(n,name,attr,atk,defense,skill,text,plan,rarity='SR',sea=False,stage=None,timing='own-main',passive=None,extra=()):
    stage=stage or ('seed' if n<=15 else 'middle')
    fid=f'DORA_{n:03}'
    tags=['18','45' if sea else '42',ST if sea else DT,*extra]
    rows.append(dict(id=fid,uid=fid,number=f'{n:03}',name=name,soulClass=stage,rarity=rarity,attribute=attr,attackType='魔法' if attr in ['光','闇','風','水'] else '物理',atk=atk,def_=defense,role=skill,collection='main',family='DORA_SEA' if sea else 'DORA_DESERT',series=SEA if sea else DESERT,tags=tags,image=f'assets/figures/dorayaki/{n:03}.png',passive=passive or {},soulSkill=dict(name=skill,description=text,effect=text,timing=timing,timingLabel='相手の攻撃宣言時' if timing=='attack-response' else '自分のメインフェイズ',runtimePlan={'revision':'oct07',**plan})))

add(1,'どら焼きのオアシス給仕','風',70,85,'ひとくちのおもてなし','自分のライフを20回復し、味方1体のDEFを10アップする。',dict(heal=20,target='ally',def_=10),rarity='R')
add(2,'どら焼きの砂丘探検家','地',95,85,'砂に眠る補給品','シードデッキから1体ドローする。',dict(draw=1),rarity='R')
add(3,'どら焼きの小さな炎魔','火',100,65,'あつあつあんこ弾','相手のライフに20ダメージを与える。',dict(lifeDamage=20),rarity='R')
add(4,'どら焼きの黄金ミイラ','地',70,110,'黄金の包帯','味方1体のDEFを15アップする。',dict(target='ally',def_=15),rarity='R')
add(5,'どら焼きの泡玉ダイバー','水',70,95,'泡玉シールド','攻撃対象となった味方のDEFを20アップする。',dict(guardAlly=20),rarity='R',sea=True,timing='attack-response')
add(6,'どら焼きの月砂魔女','闇',95,80,'月影のまどろみ','相手1体のATKを15ダウンする。',dict(target='enemy',atk=-15),rarity='R')
add(7,'どら焼きの旅する菓子職人','地',85,95,'焼きたての差し入れ','自分のライフを30回復する。',dict(heal=30),rarity='R')
add(8,'どら焼きの海亀守り','水',65,110,'きよらかな潮水','味方1体のスキルによるATK・DEF低下を解除し、自分のライフを15回復する。防御で失ったDEFは戻らない。',dict(target='ally',cleanse=True,heal=15),rarity='R',sea=True)
add(9,'どら焼きの真珠サンタ','水',90,90,'海底への贈り物','シードデッキから1体ドローし、自分のライフを10回復する。',dict(draw=1,heal=10),sea=True)
add(10,'どら焼きの砂漠配達員','風',95,95,'砂風のエール','味方1体のATKを15アップする。',dict(target='ally',atk=15),rarity='R')
add(11,'どら焼きのあんこゴースト','闇',80,100,'とろける砂の呪い','相手1体のDEFを15ダウンする。',dict(target='enemy',def_=-15),rarity='R')
add(12,'どら焼きの翡翠ティーマスター','光',100,110,'翡翠のお茶会','自分のライフを25回復し、味方1体のATKを10アップする。',dict(heal=25,target='ally',atk=10))
add(13,'どら焼きの月読魔女','闇',115,90,'月読みの封砂','相手1体のATKを20ダウンする。',dict(target='enemy',atk=-20),extra=('37',))
add(14,'どら焼きの紅炎術師','火',120,85,'焦がしあんこの炎','相手1体のDEFを20ダウンする。',dict(target='enemy',def_=-20),extra=('56',))
add(15,'どら焼きの黄金墓守','地',85,125,'砂金の護符','このフィギュアのDEFを25アップする。',dict(def_=25),extra=('54',))
add(16,'どら焼きのオアシス賢者','光',165,185,'恵みのオアシス','自分のライフを30回復し、「砂漠を癒すどら焼き」タグを持つ味方全体のDEFを15アップする。',dict(heal=30,target='allies',filterTag=DT,def_=15),rarity='SSR')
add(17,'どら焼きの紅蓮イフリート','火',210,150,'紅蓮の焼き印','このターン、このフィギュアのATKを35アップする。相手のライフに20ダメージを与える。',dict(atk=35,duration='turn',lifeDamage=20),rarity='SSR',extra=('56',))
add(18,'どら焼きの黄金守護神','地',150,215,'不落の黄金盾','このフィギュアのDEFを30アップする。このターン、相手はこのフィギュアを優先して攻撃対象に選ぶ。',dict(def_=30,taunt=True),rarity='SSR',extra=('54',))
add(19,'どら焼きの潮流導師','水',165,180,'潮流の結界','自分のライフを20回復し、自分の場の水属性フィギュア全体のDEFを20アップする。',dict(heal=20,target='allies',filterAttribute='水',def_=20),rarity='SSR',sea=True,extra=('37',))
add(20,'どら焼きの紫煙魔導師','闇',185,170,'紫煙の砂嵐','相手全体のATKを15ダウンする。',dict(target='enemies',atk=-15),rarity='SSR',extra=('37',))
add(21,'どら焼きの翡翠潮風精','風/水',155,200,'浄化の潮風','味方1体のスキルによるATK・DEF低下を解除し、ATKを10アップする。自分のライフを30回復する。防御で失ったDEFは戻らない。',dict(target='ally',cleanse=True,atk=10,heal=30),rarity='SSR',sea=True)
add(22,'どら焼きの紫紺召喚士','闇',200,170,'秘伝のあんこ魔法','シードデッキから1体ドローし、このフィギュアのATKを20アップする。',dict(draw=1,atk=20),rarity='SSR',extra=('37',))
add(23,'どら焼きの紅砂槍使い','火',205,165,'紅砂の突破槍','このターン、このフィギュアのATKを30アップし、守護を無視して攻撃対象を選べる。',dict(atk=30,pierceGuard=True,duration='turn'),rarity='SSR')
add(24,'どら焼きの蒼海奏者','水',205,225,'秘宝の潮騒','自分のライフを25回復し、自分の場の水属性フィギュア全体のATKを15アップする。',dict(heal=25,target='allies',filterAttribute='水',atk=15),rarity='SSR',sea=True,stage='mob')
add(25,'どら焼きの海底秘宝姫','水/光',255,270,'海底秘宝の祝福','自分のライフを40回復し、自分の場の水属性フィギュア全体のDEFを25アップする。',dict(heal=40,target='allies',filterAttribute='水',def_=25),rarity='UR',sea=True,stage='mob')
add(26,'どら焼きの紫砂大魔導','闇',245,255,'紫砂の秘術','相手1体のATKを30ダウンし、相手のライフに20ダメージを与える。',dict(target='enemy',atk=-30,lifeDamage=20),rarity='UR',stage='mob',extra=('37',))
add(27,'どら焼きの黒蜜魔王','闇/火',280,260,'黒蜜の王域','相手全体のATKを20ダウンし、このフィギュアのATKを20アップする。',dict(target='enemies',atk=-20,selfAtk=20),rarity='MOB',stage='mob',extra=('37','56'))
add(29,'どら焼きの花砂修復師','光',150,185,'花あんこの手当て','味方1体のスキルによるATK・DEF低下を解除し、自分のライフを40回復する。防御で失ったDEFは戻らない。',dict(target='ally',cleanse=True,heal=40),rarity='SR')
add(30,'どら焼きの砂時計技師','地',175,170,'からくり補給','シードデッキから1体ドローし、味方1体のDEFを20アップする。',dict(draw=1,target='ally',def_=20),rarity='SR')
add(31,'どら焼きの癒砂王ファラオ','光/地',250,295,'癒砂王の大饗宴','自分のライフを50回復し、「砂漠を癒すどら焼き」タグを持つ味方全体のDEFを20アップする。',dict(heal=50,target='allies',filterTag=DT,def_=20),rarity='MOB',stage='mob',extra=('54',))
add(32,'どら焼きの真珠貝の案内人','水',75,95,'真珠の道しるべ','自分のライフを20回復し、味方1体のDEFを10アップする。',dict(heal=20,target='ally',def_=10),rarity='R',sea=True,stage='seed')
add(33,'どら焼きの珊瑚の菓子職人','水',85,90,'珊瑚のおやつ','自分のライフを30回復する。',dict(heal=30),rarity='R',sea=True,stage='seed')
add(34,'どら焼きのくらげ灯の配達員','水',90,80,'くらげ灯の補給便','シードデッキから1体ドローする。',dict(draw=1),rarity='R',sea=True,stage='seed')
add(35,'どら焼きの潮星の見張り番','水',105,90,'潮星の照準','相手1体のDEFを15ダウンする。',dict(target='enemy',def_=-15),rarity='SR',sea=True,stage='seed')
add(36,'どら焼きのタツノオトシゴの探索者','風/水',100,85,'秘宝への追い風','味方1体のATKを15アップする。',dict(target='ally',atk=15),rarity='R',sea=True,stage='seed')
add(37,'どら焼きの泡の宝箱守り','水',70,120,'泡宝箱の錠前','このフィギュアのDEFを25アップする。',dict(def_=25),rarity='SR',sea=True,stage='seed')
add(38,'どら焼きの潮音の笛吹き','水',90,105,'潮音の応援歌','自分の場の水属性フィギュア全体のATKを10アップする。',dict(target='allies',filterAttribute='水',atk=10),rarity='SR',sea=True,stage='seed')
add(39,'どら焼きの真珠珊瑚の司祭','水/光',155,205,'真珠珊瑚の祈り','自分のライフを35回復し、「海底の秘宝どら焼き」タグを持つ味方全体のDEFを15アップする。',dict(heal=35,target='allies',filterTag=ST,def_=15),rarity='SSR',sea=True)
add(40,'どら焼きの竜潮の秘宝騎士','水',210,160,'竜潮の突破槍','このターン、このフィギュアのATKを30アップし、守護を無視して攻撃対象を選べる。',dict(atk=30,pierceGuard=True,duration='turn'),rarity='SSR',sea=True)
for f in rows:
    f['def']=f.pop('def_')
    q=f['soulSkill']['runtimePlan']
    if 'def_' in q:q['def']=q.pop('def_')
    if q.get('guardAlly'):q.pop('revision',None)
    # All stat changes without an explicit expiry persist on the field.
    if 'duration' not in q:q['duration']='persistent'

recipes=[]
def recipe(target,a,b,special=False):
    fid=f'DORA_{target:03}';n=1+sum(r['target']==fid for r in recipes)
    materials=[{'id':f'DORA_{x:03}'} if isinstance(x,int) else x for x in [a,b]]
    stage='middle' if target in [24,25,26,27,31] else 'seed'
    recipes.append(dict(id=f'dorayaki-{target:03}-{n}',target=fid,fromClass=stage,explicitFromClass=stage,materials=materials,special=special,status='implemented'))
for target,a,b in [(16,1,12),(16,1,7),(17,3,14),(17,14,{'attribute':'火'}),(18,4,15),(18,15,{'tag':'42'}),(19,5,9),(19,5,{'attribute':'水'}),(20,6,11),(20,13,{'attribute':'闇'}),(21,8,9),(21,8,{'attribute':'風'}),(22,13,11),(22,13,{'tag':'18'}),(23,2,14),(23,10,3),(29,7,10),(29,7,{'attribute':'光'}),(30,2,15),(30,2,{'attribute':'地'})]:recipe(target,a,b)
for target,a,b in [(39,32,33),(39,32,{'attribute':'水'}),(40,35,36),(40,36,37)]:recipe(target,a,b)
for target,a,b in [(24,19,40),(25,19,21),(25,39,40),(26,20,22),(26,20,23),(27,17,22),(27,17,23),(31,18,29),(31,18,30)]:recipe(target,a,b,True)
recipe(24,19,{'attribute':'水'})
payload=dict(figures=rows,recipes=recipes,tags=[dict(id=DT,name=DESERT),dict(id=ST,name=SEA)])
(ROOT/'src/data/dorayaki-series.json').write_text(json.dumps(payload,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
target=ROOT/'public/assets/figures/dorayaki';target.mkdir(parents=True,exist_ok=True)
for f in rows:shutil.copyfile(ROOT/'新フィギュア/どら焼き'/f"{f['number']}.png",target/f"{f['number']}.png")
def copies(pairs):return [f'DORA_{n:03}' if isinstance(n,int) else n for n,count in pairs for _ in range(count)]
desert=copies([(1,3),(2,3),(3,3),(4,3),(6,2),(7,2),(10,2),(11,2),(12,2),(13,2),(14,3),(15,3),(16,1),(17,2),(18,2),(20,1),(22,2),(23,1),(29,1),(30,2),(26,1),(27,1),(31,1)])
sea=copies([(5,3),(8,3),(9,3),*[(n,3) for n in range(32,39)],(19,3),(21,3),(39,3),(40,3),(24,1),(25,1),('09',1)])
decks=[dict(id='dorayaki-desert',name=DESERT,deck=desert),dict(id='dorayaki-sea',name=SEA,deck=sea)]
(ROOT/'src/data/dorayaki-decks.json').write_text(json.dumps(decks,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f'Built {len(rows)} figures, {len(recipes)} recipes, two 45-card decks; original PNGs untouched.')
