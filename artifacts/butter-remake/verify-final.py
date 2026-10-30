import json, hashlib
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
root=Path.cwd(); work=root/'artifacts/butter-remake'; dest=root/'新フィギュア/バター'
manifest=json.loads((work/'butter-32-manifest.json').read_text(encoding='utf-8-sig'))
rows=manifest['rows']; assert len(rows)==32
assert len(list(dest.glob('*.png')))==32
font=ImageFont.truetype('C:/Windows/Fonts/meiryo.ttc',15)
small=ImageFont.truetype('C:/Windows/Fonts/meiryo.ttc',13)
sheet=Image.new('RGB',(2000,1680),(235,233,226)); draw=ImageDraw.Draw(sheet)
draw.text((25,12),'バターシリーズ｜32体  SEED20 / MIDDLE8 / MOB4',font=font,fill=(30,30,30))
qa=[]
for i,r in enumerate(rows):
 p=dest/r['file']; im=Image.open(p); assert im.mode=='RGBA',(p,im.mode)
 a=im.getchannel('A'); hard=a.point(lambda v:255 if v>32 else 0); b=hard.getbbox(); assert b
 edge=sum(1 for crop in [a.crop((0,0,im.width,1)),a.crop((0,im.height-1,im.width,im.height)),a.crop((0,0,1,im.height)),a.crop((im.width-1,0,im.width,im.height))] for v in crop.getdata() if v>32)
 assert edge==0,(p,edge)
 h=hashlib.sha256(p.read_bytes()).hexdigest(); assert h==hashlib.sha256((work/r['file']).read_bytes()).hexdigest()
 qa.append({'id':r['id'],'file':r['file'],'mode':im.mode,'width':im.width,'height':im.height,'visibleBoundsAlphaAbove32':b,'edgePixelsAlphaAbove32':edge,'sha256':h})
 thumb=im.crop(b); thumb.thumbnail((226,333),Image.Resampling.LANCZOS)
 x=(i%8)*250; y=50+(i//8)*405
 sheet.paste(thumb,(x+(250-thumb.width)//2,y+(335-thumb.height)//2),thumb)
 draw.text((x+8,y+340),r['id']+'  '+r['stage']+' / '+r['rarity'],font=small,fill=(40,40,40))
 name=r['name']; lines=[name] if len(name)<=18 else [name[:18],name[18:36]]
 for n,line in enumerate(lines):draw.text((x+8,y+360+n*18),line,font=small,fill=(20,20,20))
assert len(set(r['sha256'] for r in qa))==32
original=json.loads((work/'original-inventory.json').read_text(encoding='utf-8-sig'))
for r in original:assert hashlib.sha256((work/'backup-20261030-091500'/r['file']).read_bytes()).hexdigest().upper()==r['sha256']
sheet.save(work/'butter-32-contact.png')
(work/'butter-32-validation.json').write_text(json.dumps({'count':32,'counts':manifest['counts'],'allRGBA':True,'allBordersClearAboveAlpha32':True,'uniqueImageHashes':32,'originalBackupHashesVerified':16,'images':qa},ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'count':32,'allRGBA':True,'allBordersClearAboveAlpha32':True,'uniqueImages':32,'backupVerified':16}))
