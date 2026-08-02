// ===================== DATA =====================
const SONGS = [
  { id:1,  title:"Naatu Naatu",            artist:"Rahul Sipligunj & Kaala Bhairava", album:"RRR",                     lang:"Telugu",   dur:"3:40", seed:"t1"  },
  { id:2,  title:"Srivalli",               artist:"Sid Sriram",                       album:"Pushpa",                  lang:"Telugu",   dur:"4:10", seed:"t2"  },
  { id:3,  title:"Saami Saami",            artist:"Mounika Yadav",                    album:"Pushpa",                  lang:"Telugu",   dur:"3:55", seed:"t3"  },
  { id:4,  title:"Buttabomma",             artist:"Armaan Malik",                     album:"Ala Vaikunthapurramuloo", lang:"Telugu",   dur:"4:22", seed:"t4"  },
  { id:5,  title:"Ramuloo Ramulaa",        artist:"Anurag Kulkarni",                  album:"Ala Vaikunthapurramuloo", lang:"Telugu",   dur:"3:50", seed:"t5"  },
  { id:6,  title:"Oo Antava",              artist:"Indravathi Chauhan",               album:"Pushpa",                  lang:"Telugu",   dur:"3:30", seed:"t6"  },
  { id:7,  title:"Enjoy Enjaami",          artist:"Dhee ft. Arivu",                   album:"Single",                  lang:"Tamil",    dur:"4:05", seed:"tm1" },
  { id:8,  title:"Arabic Kuthu",           artist:"Anirudh Ravichander",              album:"Beast",                   lang:"Tamil",    dur:"3:48", seed:"tm2" },
  { id:9,  title:"Kannazhaga",             artist:"Dhanush & Shruti Haasan",          album:"3",                       lang:"Tamil",    dur:"5:12", seed:"tm3" },
  { id:10, title:"Rowdy Baby",             artist:"Dhanush & Dhee",                   album:"Maari 2",                 lang:"Tamil",    dur:"3:33", seed:"tm4" },
  { id:11, title:"Vaathi Coming",          artist:"Anirudh Ravichander",              album:"Master",                  lang:"Tamil",    dur:"3:55", seed:"tm5" },
  { id:12, title:"Kaavaalaa",              artist:"Shilpa Rao & Anirudh",             album:"Jailer",                  lang:"Tamil",    dur:"4:18", seed:"tm6" },
  { id:13, title:"Kesariya",               artist:"Arijit Singh",                     album:"Brahmastra",              lang:"Hindi",    dur:"4:28", seed:"h1"  },
  { id:14, title:"Tum Hi Ho",              artist:"Arijit Singh",                     album:"Aashiqui 2",              lang:"Hindi",    dur:"4:37", seed:"h2"  },
  { id:15, title:"Raataan Lambiyan",       artist:"Jubin Nautiyal & Asees Kaur",      album:"Shershaah",               lang:"Hindi",    dur:"3:55", seed:"h3"  },
  { id:16, title:"Apna Bana Le",           artist:"Arijit Singh",                     album:"Bhediya",                 lang:"Hindi",    dur:"4:50", seed:"h4"  },
  { id:17, title:"Ghungroo",               artist:"Arijit Singh & Shilpa Rao",        album:"War",                     lang:"Hindi",    dur:"5:05", seed:"h5"  },
  { id:18, title:"Dil Chahta Hai",         artist:"Shankar-Ehsaan-Loy",              album:"Dil Chahta Hai",           lang:"Hindi",    dur:"4:15", seed:"h6"  },
  { id:19, title:"Blinding Lights",        artist:"The Weeknd",                       album:"After Hours",              lang:"English",  dur:"3:20", seed:"e1"  },
  { id:20, title:"Shape of You",           artist:"Ed Sheeran",                       album:"Divide",                  lang:"English",  dur:"3:54", seed:"e2"  },
  { id:21, title:"Stay",                   artist:"The Kid LAROI & Justin Bieber",    album:"F*CK LOVE 3",             lang:"English",  dur:"2:21", seed:"e3"  },
  { id:22, title:"As It Was",              artist:"Harry Styles",                     album:"Harry's House",           lang:"English",  dur:"2:37", seed:"e4"  },
  { id:23, title:"Anti-Hero",              artist:"Taylor Swift",                     album:"Midnights",               lang:"English",  dur:"3:21", seed:"e5"  },
  { id:24, title:"Levitating",             artist:"Dua Lipa",                         album:"Future Nostalgia",        lang:"English",  dur:"3:24", seed:"e6"  },
  { id:25, title:"Jimikki Kammal",         artist:"Vineeth Sreenivasan",              album:"Velipadinte Pusthakam",   lang:"Malayalam",dur:"3:45", seed:"ml1" },
  { id:26, title:"Malare",                 artist:"Vijay Yesudas",                    album:"Premam",                  lang:"Malayalam",dur:"4:30", seed:"ml2" },
  { id:27, title:"Poomaram",               artist:"Kalidas Jayaram",                  album:"Poomaram",                lang:"Malayalam",dur:"4:05", seed:"ml3" },
  { id:28, title:"Kidu Padam",             artist:"Shaan Rahman",                     album:"Single",                  lang:"Malayalam",dur:"3:10", seed:"ml4" },
  { id:29, title:"Yoyo",                   artist:"Vijay Prakash",                    album:"KGF Chapter 1",           lang:"Kannada",  dur:"3:22", seed:"kn1" },
  { id:30, title:"Salaga Salaga",          artist:"Ravi Basrur",                      album:"KGF Chapter 2",           lang:"Kannada",  dur:"4:00", seed:"kn2" },
  { id:31, title:"Toofan",                 artist:"Ravi Basrur",                      album:"KGF Chapter 2",           lang:"Kannada",  dur:"3:48", seed:"kn3" },
  { id:32, title:"Huttidare Kannada Nadu", artist:"Rajkumar",                         album:"Classic Hits",            lang:"Kannada",  dur:"5:15", seed:"kn4" },
];

const ALBUMS = [
  { id:"a1",  name:"RRR",                     artist:"M.M. Keeravani",      lang:"Telugu",   seed:"t1",  sids:[1]       },
  { id:"a2",  name:"Pushpa",                  artist:"Devi Sri Prasad",     lang:"Telugu",   seed:"t2",  sids:[2,3,6]   },
  { id:"a3",  name:"Ala Vaikunthapurramuloo", artist:"Thaman S",            lang:"Telugu",   seed:"t4",  sids:[4,5]     },
  { id:"a4",  name:"Beast",                   artist:"Anirudh Ravichander", lang:"Tamil",    seed:"tm2", sids:[8]       },
  { id:"a5",  name:"Master",                  artist:"Anirudh Ravichander", lang:"Tamil",    seed:"tm5", sids:[11]      },
  { id:"a6",  name:"Jailer",                  artist:"Anirudh Ravichander", lang:"Tamil",    seed:"tm6", sids:[12]      },
  { id:"a7",  name:"Maari 2",                 artist:"Yuvan Shankar Raja",  lang:"Tamil",    seed:"tm4", sids:[10]      },
  { id:"a8",  name:"Brahmastra",              artist:"Pritam",              lang:"Hindi",    seed:"h1",  sids:[13]      },
  { id:"a9",  name:"Shershaah",               artist:"Various Artists",     lang:"Hindi",    seed:"h3",  sids:[15]      },
  { id:"a10", name:"Aashiqui 2",              artist:"Mithoon",             lang:"Hindi",    seed:"h2",  sids:[14]      },
  { id:"a11", name:"After Hours",             artist:"The Weeknd",          lang:"English",  seed:"e1",  sids:[19]      },
  { id:"a12", name:"Midnights",               artist:"Taylor Swift",        lang:"English",  seed:"e5",  sids:[23]      },
  { id:"a13", name:"Premam",                  artist:"Rajesh Murugesan",    lang:"Malayalam",seed:"ml2", sids:[26]      },
  { id:"a14", name:"Velipadinte Pusthakam",   artist:"Shaan Rahman",        lang:"Malayalam",seed:"ml1", sids:[25]      },
  { id:"a15", name:"KGF Chapter 2",           artist:"Ravi Basrur",         lang:"Kannada",  seed:"kn2", sids:[30,31]   },
  { id:"a16", name:"Classic Hits",            artist:"Rajkumar",            lang:"Kannada",  seed:"kn4", sids:[32]      },
];

const GENRES = [
  { name:"Telugu",    color:"linear-gradient(135deg,#f59e0b,#ef4444)", icon:"fa-music"      },
  { name:"Tamil",     color:"linear-gradient(135deg,#ec4899,#a855f7)", icon:"fa-drum"       },
  { name:"Hindi",     color:"linear-gradient(135deg,#7c3aed,#a855f7)", icon:"fa-microphone" },
  { name:"English",   color:"linear-gradient(135deg,#0ea5e9,#7c3aed)", icon:"fa-headphones" },
  { name:"Malayalam", color:"linear-gradient(135deg,#10b981,#0ea5e9)", icon:"fa-guitar"     },
  { name:"Kannada",   color:"linear-gradient(135deg,#f97316,#f59e0b)", icon:"fa-star"       },
];

const LANGCOLORS = {
  Telugu:"#f59e0b", Tamil:"#ec4899", Hindi:"#a855f7",
  English:"#0ea5e9", Malayalam:"#10b981", Kannada:"#f97316"
};

// ===================== STATE =====================
let favs       = new Set();
let myPlaylist = [];
let curId   = null;
let playing = false;
let timer   = null;
let prog    = 0;
let queue   = [];
let qi      = 0;
let heroSong  = null;
let sotdSong  = null;
let recent    = [];
let stats     = {};
let prevSec   = "home";

const img   = (seed, sz = 180) => `https://picsum.photos/seed/${seed}/${sz}/${sz}`;
const byId  = id => SONGS.find(s => s.id === id);
const cur   = () => byId(curId);

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ni').forEach(n =>
    n.addEventListener('click', () => goSec(n.dataset.sec))
  );
  renderGrid('trendGrid', ALBUMS.slice(0, 8));
  renderGrid('moreGrid',  ALBUMS.slice(8));
  renderGenres();
  renderPlaylist();
  renderChips();
  renderTicker();
  renderSotd();
  refreshHero();
});

// ===================== NAVIGATION =====================
function goSec(sec) {
  prevSec = document.querySelector('.sec.active')?.id || 'home';
  document.querySelectorAll('.ni').forEach(n => n.classList.toggle('active', n.dataset.sec === sec));
  document.querySelectorAll('.sec').forEach(s => s.classList.remove('active'));
  document.getElementById(sec).classList.add('active');
  document.getElementById('mainEl').scrollTop = 0;
  if (sec === 'favourites') renderFavs();
  if (sec === 'playlist')   renderPlaylist();
}

function goBack() {
  document.querySelectorAll('.sec').forEach(s => s.classList.remove('active'));
  document.getElementById(prevSec).classList.add('active');
  document.querySelectorAll('.ni').forEach(n => n.classList.toggle('active', n.dataset.sec === prevSec));
  document.getElementById('mainEl').scrollTop = 0;
}

// ===================== HERO =====================
function refreshHero() {
  let p;
  do { p = SONGS[Math.floor(Math.random() * SONGS.length)]; }
  while (heroSong && p.id === heroSong.id && SONGS.length > 1);
  heroSong = p;
  const al = ALBUMS.find(a => a.sids.includes(p.id));
  document.getElementById('heroTag').textContent   = '🔥 Featured · ' + p.lang;
  document.getElementById('heroTitle').textContent = p.title;
  document.getElementById('heroSub').textContent   = `By ${p.artist} · ${al ? al.name : p.album} · ${p.lang}`;
  document.getElementById('heroImg').src           = img(p.seed, 320);
}

function playHero() {
  if (!heroSong) return;
  loadPlay(heroSong.id, SONGS.map(s => s.id));
  toast('Now playing: ' + heroSong.title);
}

// ===================== TICKER =====================
function renderTicker() {
  const el  = document.getElementById('tickerEl');
  const all = [...SONGS, ...SONGS];
  const ids = SONGS.map(s => s.id).join(',');
  el.innerHTML = all.map(s =>
    `<span class="titem" onclick="loadPlay(${s.id},[${ids}])">
      <b>${s.title}</b> — ${s.artist} · ${s.lang}
    </span>`
  ).join('');
}

// ===================== CHIPS =====================
function renderChips() {
  const langs = ['All', ...GENRES.map(g => g.name)];
  document.getElementById('chipsEl').innerHTML = langs.map((l, i) =>
    `<div class="chip${i === 0 ? ' on' : ''}" onclick="chipFilter('${l}',this)">${l}</div>`
  ).join('');
}

function chipFilter(lang, el) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
  const list = lang === 'All' ? ALBUMS : ALBUMS.filter(a => a.lang === lang);
  renderGrid('trendGrid', list.slice(0, 8));
  renderGrid('moreGrid',  list.slice(8));
  document.getElementById('trendH').textContent = lang === 'All' ? 'Featured Albums' : lang + ' Albums';
  document.getElementById('moreH').textContent  = lang === 'All' ? 'More Albums'     : 'More ' + lang;
}

// ===================== SONG OF THE DAY =====================
function renderSotd() {
  sotdSong   = SONGS[Math.floor(Math.random() * SONGS.length)];
  const al   = ALBUMS.find(a => a.sids.includes(sotdSong.id));
  const el   = document.getElementById('sotdEl');
  const ids  = SONGS.map(s => s.id).join(',');
  el.innerHTML = `
    <img src="${img(sotdSong.seed, 80)}" alt=""/>
    <div class="sotd-info">
      <div class="sotd-badge">🎵 Song of the Day · ${sotdSong.lang}</div>
      <div class="sotd-title">${sotdSong.title}</div>
      <div class="sotd-sub">${sotdSong.artist} · ${al ? al.name : sotdSong.album}</div>
    </div>
    <div class="sotd-play"><i class="fa-solid fa-play"></i></div>`;
  el.onclick = () => {
    loadPlay(sotdSong.id, SONGS.map(s => s.id));
    toast('🎵 Song of the Day: ' + sotdSong.title);
  };
}

// ===================== RECENTLY PLAYED =====================
function addRecent(id) {
  recent = [id, ...recent.filter(x => x !== id)].slice(0, 8);
  document.getElementById('recentSh').style.display = 'flex';
  const seen = new Set();
  const ral  = recent
    .map(sid => ALBUMS.find(a => a.sids.includes(sid)))
    .filter(a => a && !seen.has(a.id) && seen.add(a.id));
  renderGrid('recentGrid', ral);
}

// ===================== STATS =====================
function addStats(song) {
  stats[song.lang] = (stats[song.lang] || 0) + 1;
  document.getElementById('statsSh').style.display = 'flex';
  const max = Math.max(...Object.values(stats));
  document.getElementById('statsGrid').innerHTML =
    Object.entries(stats)
      .sort((a, b) => b[1] - a[1])
      .map(([lang, cnt]) => `
        <div class="statcard">
          <div class="statlang">${lang}</div>
          <div class="statnum">${cnt}<span> plays</span></div>
          <div class="statbar">
            <div class="statfill" style="width:${Math.round(cnt / max * 100)}%;background:${LANGCOLORS[lang] || 'var(--acc2)'}"></div>
          </div>
        </div>`).join('');
}

// ===================== ALBUM GRID =====================
function renderGrid(cid, albums) {
  const el = document.getElementById(cid);
  if (!el) return;
  el.innerHTML = albums.length
    ? albums.map(a => `
        <div class="acard" onclick="openAlbum('${a.id}')">
          <div class="aiwrap">
            <img src="${img(a.seed)}" alt="${a.name}" loading="lazy"/>
            <div class="hplay"><div class="pcircle"><i class="fa-solid fa-play"></i></div></div>
            <span class="lbadge">${a.lang}</span>
          </div>
          <div class="aname">${a.name}</div>
          <div class="aartist">${a.artist}</div>
        </div>`).join('')
    : '<p class="empty" style="grid-column:1/-1">No albums found.</p>';
}

// ===================== ALBUM DETAIL =====================
function openAlbum(aid) {
  prevSec = document.querySelector('.sec.active')?.id || 'home';
  const al = ALBUMS.find(a => a.id === aid);
  if (!al) return;
  const songs = al.sids.map(id => byId(id)).filter(Boolean);
  document.getElementById('adImg').src              = img(al.seed, 150);
  document.getElementById('adName').textContent     = al.name;
  document.getElementById('adArtist').textContent   = al.artist;
  document.getElementById('adLang').textContent     = al.lang.toUpperCase();
  document.getElementById('adCount').textContent    = `${songs.length} song${songs.length !== 1 ? 's' : ''}`;
  const qids = songs.map(s => s.id);
  document.getElementById('adPlayBtn').onclick = () => songs.length && loadPlay(songs[0].id, qids);
  document.getElementById('adList').innerHTML = songs.map((s, i) => rowHTML(s, i, qids)).join('');
  document.querySelectorAll('.sec').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(n => n.classList.remove('active'));
  document.getElementById('albumDetail').classList.add('active');
  document.getElementById('mainEl').scrollTop = 0;
}

// ===================== SONG ROW =====================
function rowHTML(s, i, qids, inPlaylist = false) {
  const isP   = curId === s.id && playing;
  const liked = favs.has(s.id);
  const inPl  = !!myPlaylist.find(x => x.id === s.id);
  const qenc  = encodeURIComponent(JSON.stringify(qids));
  const actionBtn = inPlaylist
    ? `<button class="hbtn remove-btn" onclick="removeFromPlaylist(event,${s.id})" title="Remove from playlist"><i class="fa-solid fa-trash"></i></button>`
    : `<button class="hbtn add-btn${inPl ? ' in-pl' : ''}" onclick="addToPlaylist(event,${s.id})" title="${inPl ? 'Already in playlist' : 'Add to playlist'}"><i class="fa-solid fa-${inPl ? 'check' : 'plus'}"></i></button>`;
  return `
  <div class="srow${isP ? ' playing' : ''}" id="sr${s.id}" onclick="rowClick(${s.id},'${qenc}')">
    <div class="snum">${i + 1}</div>
    <div class="spicon"><i class="fa-solid fa-volume-high fa-beat"></i></div>
    <div class="sinfo">
      <img src="${img(s.seed, 40)}" loading="lazy"/>
      <div>
        <div class="stitle">${s.title}</div>
        <div class="smeta">${s.lang}</div>
      </div>
    </div>
    <div class="sart">${s.artist}</div>
    <div class="sdur">${s.dur}</div>
    <div class="row-actions">
      <button class="hbtn${liked ? ' liked' : ''}" onclick="toggleFav(event,${s.id})">
        <i class="fa-${liked ? 'solid' : 'regular'} fa-heart"></i>
      </button>
      ${actionBtn}
    </div>
  </div>`;
}

function rowClick(id, qenc) {
  const q = JSON.parse(decodeURIComponent(qenc));
  if (curId === id && playing)       pausePlay();
  else if (curId === id && !playing) startPlay(q);
  else                               loadPlay(id, q);
}

// ===================== SEARCH & GENRES =====================
function renderGenres() {
  document.getElementById('genreEl').innerHTML = GENRES.map(g =>
    `<div class="gc" style="background:${g.color}" onclick="langSearch('${g.name}')">
      <i class="fa-solid ${g.icon}"></i>${g.name}
    </div>`
  ).join('');
}

function langSearch(lang) {
  document.getElementById('searchQ').value = lang;
  doSearch();
}

function doSearch() {
  const q  = document.getElementById('searchQ').value.toLowerCase().trim();
  const sh = document.getElementById('srH');
  const sg = document.getElementById('srGrid');
  if (!q) { sh.style.display = 'none'; sg.innerHTML = ''; return; }
  sh.style.display = 'flex';
  const r = ALBUMS.filter(a =>
    a.name.toLowerCase().includes(q) ||
    a.artist.toLowerCase().includes(q) ||
    a.lang.toLowerCase().includes(q)
  );
  renderGrid('srGrid', r);
}

// ===================== ADD TO PLAYLIST =====================
function addToPlaylist(e, id) {
  e.stopPropagation();
  if (myPlaylist.find(s => s.id === id)) {
    toast('Already in playlist!');
    return;
  }
  const song = byId(id);
  if (song) {
    myPlaylist.push(song);
    toast('Added to My Playlist ✚');
    // refresh playlist page if open
    if (document.getElementById('playlist').classList.contains('active')) renderPlaylist();
  }
}

function removeFromPlaylist(e, id) {
  e.stopPropagation();
  myPlaylist = myPlaylist.filter(s => s.id !== id);
  toast('Removed from playlist');
  renderPlaylist();
}

// ===================== PLAYLIST =====================
function renderPlaylist() {
  const el = document.getElementById('plList');
  document.getElementById('plCnt').textContent = `${myPlaylist.length} songs`;
  if (!myPlaylist.length) {
    el.innerHTML = '<p class="empty">No songs yet. Hit ✚ on any song to add!</p>';
    return;
  }
  const qids = myPlaylist.map(s => s.id);
  el.innerHTML = myPlaylist.map((s, i) => rowHTML(s, i, qids, true)).join('');
}

function playAll() {
  if (!myPlaylist.length) { toast('Playlist is empty!'); return; }
  loadPlay(myPlaylist[0].id, myPlaylist.map(s => s.id));
}

// ===================== FAVOURITES =====================
function renderFavs() {
  const fs = SONGS.filter(s => favs.has(s.id));
  document.getElementById('favCnt').textContent = `${fs.length} song${fs.length !== 1 ? 's' : ''}`;
  const el = document.getElementById('favList');
  if (!fs.length) { el.innerHTML = '<p class="empty">No liked songs yet. Hit ♥ on any song!</p>'; return; }
  const fids = fs.map(s => s.id);
  el.innerHTML = fs.map((s, i) => rowHTML(s, i, fids)).join('');
}

function playFavs() {
  const fids = SONGS.filter(s => favs.has(s.id)).map(s => s.id);
  if (!fids.length) { toast('No liked songs!'); return; }
  loadPlay(fids[0], fids);
}

// ===================== FAV TOGGLE =====================
function toggleFav(e, id) {
  e.stopPropagation();
  favs.has(id) ? favs.delete(id) : favs.add(id);
  toast(favs.has(id) ? 'Added to Liked Songs ♥' : 'Removed from Liked Songs');
  refreshRows();
  updatePheart();
  if (document.getElementById('favourites').classList.contains('active')) renderFavs();
}

function toggleCurFav() {
  if (curId) toggleFav({ stopPropagation: () => {} }, curId);
}

function updatePheart() {
  const b  = document.getElementById('pheart');
  if (!b || !curId) return;
  const lk = favs.has(curId);
  b.className = 'hbtn' + (lk ? ' liked' : '');
  b.innerHTML = `<i class="fa-${lk ? 'solid' : 'regular'} fa-heart"></i>`;
}

function refreshRows() {
  document.querySelectorAll('.srow').forEach(r => {
    const m = r.getAttribute('onclick')?.match(/rowClick\((\d+)/);
    if (!m) return;
    const sid = parseInt(m[1]);
    const b   = r.querySelector('.hbtn');
    if (!b) return;
    const lk = favs.has(sid);
    b.className = 'hbtn' + (lk ? ' liked' : '');
    b.innerHTML = `<i class="fa-${lk ? 'solid' : 'regular'} fa-heart"></i>`;
  });
}

// ===================== PLAYER =====================
function loadPlay(id, q) {
  queue = q || [id];
  qi    = queue.indexOf(id);
  if (qi < 0) qi = 0;
  loadTrack(id);
  startPlay(q);
}

function loadTrack(id) {
  clearInterval(timer);
  curId = id;
  prog  = 0;
  const s = cur();
  if (!s) return;
  document.getElementById('ptitle').textContent   = s.title;
  document.getElementById('partist').textContent  = s.artist;
  document.getElementById('pcover').src           = img(s.seed, 50);
  document.getElementById('progFill').style.width = '0%';
  document.getElementById('ctime').textContent    = '0:00';
  document.getElementById('ttime').textContent    = s.dur;
  document.getElementById('playerEl').style.display = 'grid';
  document.querySelectorAll('.srow').forEach(r => r.classList.remove('playing'));
  updatePheart();
  addRecent(id);
  addStats(s);
}

function startPlay(q) {
  if (!curId) return;
  if (q) queue = q;
  playing = true;
  document.getElementById('ppBtn').innerHTML = '<i class="fa-solid fa-pause"></i>';
  document.querySelectorAll('.srow').forEach(r => {
    const m = r.getAttribute('onclick')?.match(/rowClick\((\d+)/);
    r.classList.toggle('playing', !!m && parseInt(m[1]) === curId);
  });
  clearInterval(timer);
  const s     = cur();
  const pts   = s.dur.split(':');
  const total = +pts[0] * 60 + +pts[1];
  timer = setInterval(() => {
    prog += 100 / total;
    if (prog >= 100) {
      clearInterval(timer);
      nextT();
      return;
    }
    const el = Math.floor(prog / 100 * total);
    document.getElementById('progFill').style.width = prog + '%';
    document.getElementById('ctime').textContent    = fmt(el);
  }, 1000);
}

function pausePlay() {
  playing = false;
  clearInterval(timer);
  document.getElementById('ppBtn').innerHTML = '<i class="fa-solid fa-play"></i>';
  document.querySelectorAll('.srow').forEach(r => r.classList.remove('playing'));
}

function togglePlay() {
  if (!curId) return;
  playing ? pausePlay() : startPlay();
}

function nextT() {
  if (!queue.length) return;
  qi = (qi + 1) % queue.length;
  loadTrack(queue[qi]);
  startPlay();
}

function prevT() {
  if (!queue.length) return;
  if (prog > 15) { prog = 0; loadTrack(curId); startPlay(); return; }
  qi = (qi - 1 + queue.length) % queue.length;
  loadTrack(queue[qi]);
  startPlay();
}

function seekT(e) {
  if (!curId) return;
  const pct   = Math.max(0, Math.min(1, (e.clientX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth));
  prog        = pct * 100;
  const s     = cur();
  const pts   = s.dur.split(':');
  const total = +pts[0] * 60 + +pts[1];
  document.getElementById('progFill').style.width = prog + '%';
  document.getElementById('ctime').textContent    = fmt(Math.floor(pct * total));
  if (playing) { clearInterval(timer); startPlay(); }
}

function toggleShuf() {
  shuffle = !shuffle;
  document.getElementById('shufBtn').classList.toggle('on', shuffle);
  toast(shuffle ? 'Shuffle on' : 'Shuffle off');
}

function toggleRep() {
  repeat = !repeat;
  document.getElementById('repBtn').classList.toggle('on', repeat);
  toast(repeat ? 'Repeat on' : 'Repeat off');
}

function fmt(s) {
  const m = Math.floor(s / 60), sec = s % 60;
  return `${m}:${sec < 10 ? '0' : ''}${sec}`;
}

// ===================== TOAST =====================
let tt;
function toast(msg) {
  const el = document.getElementById('toastEl');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(tt);
  tt = setTimeout(() => el.classList.remove('show'), 2200);
}