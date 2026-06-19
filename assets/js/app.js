// APP.JS FINAL - Puu Chat
const BL = 'assets/img/avatar-blank.png'
if(!localStorage.pid) localStorage.pid = 'User#'+Math.floor(1000+Math.random()*9000)
const me = localStorage.pn || localStorage.pid
const av = localStorage.getItem('puu_avatar') || localStorage.pa || BL
let posts = JSON.parse(localStorage.ps || '[]')

function avatarUrl(url){ return url && url.trim()? url : BL }
function toggleMenu(){ document.getElementById('side')?.classList.toggle('open') }
function time(t){ const d=Date.now()-t,m=d/60000|0; return m<1?'Baru':m<60?m+'m':(m/60|0)<24?(m/60|0)+'j':new Date(t).toLocaleDateString('id') }

function showToast(msg){
  let t = document.getElementById('toast')
  if(!t){ t=document.createElement('div'); t.id='toast'; t.style.cssText='position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#2a1b40;padding:10px 18px;border-radius:8px;z-index:99;color:#fff'; document.body.appendChild(t) }
  t.textContent=msg; t.style.display='block'; setTimeout(()=>t.style.display='none',2000)
}

function renderFeed(){
  const f = document.getElementById('feed'); if(!f) return

  const stories = `
    <div style="display:flex;gap:10px;overflow-x:auto;padding:12px;background:var(--card);border:1px solid var(--b);border-radius:14px;margin-bottom:14px;scrollbar-width:none">
      <div onclick="location.href='create.html'" style="min-width:68px;text-align:center;cursor:pointer">
        <div style="width:60px;height:60px;border-radius:50%;background:var(--card2);display:flex;align-items:center;justify-content:center;font-size:26px;border:2px dashed var(--a);color:var(--a)">+</div>
        <div style="font-size:11px;margin-top:5px;color:var(--d)">Buat</div>
      </div>
      ${['Royany','Aini','Budi','Siti','Dewi'].map(n=>`
        <div onclick="showToast('Story ${n}')" style="min-width:68px;text-align:center;cursor:pointer">
          <img src="https://i.pravatar.cc/60?u=${n}" style="width:60px;height:60px;border-radius:50%;border:3px solid var(--a);padding:2px;object-fit:cover">
          <div style="font-size:11px;margin-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n}</div>
        </div>
      `).join('')}
    </div>
  `

  const composer = `
    <div class="post" style="padding:12px;margin-bottom:14px">
      <div style="display:flex;gap:10px;align-items:center">
        <img src="${av}" style="width:40px;height:40px;border-radius:50%;cursor:pointer;object-fit:cover" onclick="document.getElementById('avatarUpload')?.click()">
        <input onclick="location.href='create.html'" placeholder="Apa yang Anda pikirkan?" readonly style="flex:1;background:var(--card2);border:1px solid var(--b);padding:10px 14px;border-radius:20px;color:var(--t);outline:none;font-family:Poppins">
      </div>
      <input type="file" id="avatarUpload" hidden accept="image/*">
    </div>
  `

  if(!posts.length){
    f.innerHTML = stories + composer + '<div style="text-align:center;color:var(--d);padding:40px">Belum ada postingan<br><br><button onclick="demo()" style="background:var(--a);color:#fff;border:none;padding:10px 20px;border-radius:8px;margin-top:10px;cursor:pointer">Buat Demo</button></div>'
    bindAvatar(); return
  }

  f.innerHTML = stories + composer + posts.map((p,i)=>`
    <div class="post" onclick="openPost(${i})" style="cursor:pointer">
      <div class="ph">
        <img src="${avatarUrl(p.a)}">
        <div><div class="pn">${p.n}</div><div class="pt">${time(p.t)}</div></div>
        <div class="pm" onclick="event.stopPropagation();openMenu(${i})">•••</div>
      </div>
      ${p.x?`<div class="pb">${p.x}</div>`:''}
      ${p.m?`<div class="pmed">${p.mt==='v'?`<video src="${p.m}" controls style="width:100%"></video>`:`<img src="${p.m}">`}</div>`:''}
      <div class="ps"><span>👍 ${p.l||0}</span><span>${(p.c||[]).length} komentar</span></div>
      <div class="pa">
        <button onclick="event.stopPropagation();like(${i})">Suka</button>
        <button onclick="event.stopPropagation();openPost(${i})">Komentar</button>
        <button onclick="event.stopPropagation();share(${i})">Bagikan</button>
      </div>
    </div>
  `).join('')
  bindAvatar()
}

function bindAvatar(){
  const up = document.getElementById('avatarUpload'); if(!up) return
  up.onchange = e => {
    const file = e.target.files[0]; if(!file) return
    const url = URL.createObjectURL(file)
    localStorage.setItem('puu_avatar', url)
    localStorage.pa = url
    showToast('Foto profil diperbarui')
    setTimeout(()=>location.reload(),500)
  }
}

function openPost(i){ location.href = `post.html?id=${i}` }
function like(i){ posts[i].l = (posts[i].l||0)+1; save() }
function save(){ localStorage.ps = JSON.stringify(posts); renderFeed() }
function demo(){
  posts.unshift({n:me,a:av,t:Date.now(),x:'Halo ini postingan pertama Puu Chat! 🎉',m:'',mt:'',l:5,c:[],s:0})
  save()
}
function openMenu(i){ showToast('Menu postingan') }
function share(i){ showToast('Dibagikan') }

document.addEventListener('DOMContentLoaded', renderFeed)

// Tutup sidebar kalau klik di luar
document.addEventListener('click', e => {
  const side = document.getElementById('side')
  const isHam = e.target.closest('.ham')
  const isInside = e.target.closest('.side')
  if(side?.classList.contains('open') &&!isHam &&!isInside){
    side.classList.remove('open')
  }
})
