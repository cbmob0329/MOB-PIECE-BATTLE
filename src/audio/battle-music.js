// BGM.txt is authoritative. Keep original WAV/MP3 names in the manifest.
const base='assets/audio/bgm-20261008/';
export const battleMusicTracks={
 normal:{file:base+'battle-normal.mp3',source:'003.mp3',wav:'PIECE BATTLE通常戦闘.wav',duration:99.04},
 grass:{file:'assets/audio/user-20261007/battle.mp3',source:'002.mp3',wav:'001.wav',duration:106.28},
 mob:{file:base+'mob-tower.mp3',source:'005.mp3',wav:'モブナビ戦.wav',duration:98.8},
 town:{file:base+'town-master.mp3',source:'006.mp3',wav:'傷つくキツツキ.wav',duration:98.76},
 castle:{file:base+'castle-master.mp3',source:'007.mp3',wav:'戦闘用魔王城.wav',duration:99.2},
 sea:{file:base+'sea-master.mp3',source:'008.mp3',wav:'戦闘用くまのこみていたあのベルト.wav',duration:98.36},
 desert:{file:base+'desert-master.mp3',source:'011.mp3',wav:'ももいろがえりさ (2).wav',duration:99.92},
 neon:{file:base+'neon-master.mp3',source:'012.mp3',wav:'ももいろがえりさ (1).wav',duration:98.6}
};
// No authored bar/beat loop markers were supplied: loop the full song, not an invented phrase.
for(const track of Object.values(battleMusicTracks))Object.assign(track,{loopStart:0,loopEnd:track.duration,gain:.22});
export function battleMusicFor(request={}){
 if(request.mode!=='tower')return 'normal';
 const region=String(request.towerId||'').replace(/2$/,'');
 if(region==='mob')return 'mob';
 return request.floor===5&&['grass','town','castle','sea','desert','neon'].includes(region)?region:'normal';
}
