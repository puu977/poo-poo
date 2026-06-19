// POST.JS
const id = new URLSearchParams(location.search).get('id') || 0
let posts = JSON.parse(localStorage.ps || '[]')
const p = posts[id] || {n:'User',a:'assets/img/avatar-blank.png',t:Date.now(),x:'',l:0,c:[],s:0}

function render(){
  const v = document.getElementById('postView'); if(!v) return
  v.innerHTML = `
    <div class="post" style="cursor:default">
      <div class="ph">
        <img src="${p.a}">
        <div><div class="pn">${p.n}</div><div class="pt">${new Date(p.t).toLocaleString('id')}</div></div>
        <div class="pm" onclick="alert('Menu')">•••</div>
      </div>
      ${p.x?`<div class="pb">${p.x}</div>`:''}
      ${p.m?`<div class="pmed" style="position:relative">${p.mt==='v'?`<video src="${p.m}" controls></video>`:`<img src="${p.m}">`}<button onclick="download('${p.m}')" style="position:absolute;top:10px;right:10px;background:#0009;color:#fff;border:none;width:32px;height:32px;border-radius:50%">⬇</button></div>`:''}
      <div class="ps"><span>👍 ${p.l} suka</span><span>${p.s||0} dibagikan</span></div>
      <div class="pa">
        <button onclick="like()">Suka</button>
        <button onclick="comment()">Komentar</button>
        <button onclick="share()">Bagikan</button>
      </div>
    </div>
    <div style="margin-top:20px">
      <a href="comments.html?id=${id}" style="display:block;background:var(--card);padding:14px;border-radius:12px;text-align:center;color:var(--t);text-decoration:none">Lihat ${p.c.length} komentar →</a>
    </div>
  `
}
function like(){ p.l++; save(); render() }
function save(){ posts[id]=p; localStorage.ps=JSON.stringify(posts) }
function download(u){ const a=document.createElement('a');a.href=u;a.download='puu';a.click() }
function comment(){ location.href=`comments.html?id=${id}` }
function share(){ alert('Bagikan') }

render()
