const $ = s => document.querySelector(s);
function fmtTime(d){ return new Date(d).toLocaleString('id-ID',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}) }

async function loadFeed(){
  const feed = $('#feed'); if(!feed) return;
  feed.innerHTML = '<p style="text-align:center;opacity:.6;padding:30px">Memuat...</p>';
  const [{data:posts,error:e1},{data:likes,error:e2}] = await Promise.all([
    supa.from('posts').select('*').order('created_at',{ascending:false}).limit(50),
    supa.from('post_likes').select('post_id').eq('user_id',USER_ID)
  ]);
  if(e1){ feed.innerHTML = `<p style="color:#ff8a8a;padding:20px">Error: ${e1.message}</p>`; return }
  const liked = new Set((likes||[]).map(x=>x.post_id));
  renderStories(posts); renderPosts(posts,liked);
}

function renderStories(posts){
  const el = $('#stories'); if(!el) return;
  const items = (posts||[]).filter(p=>p.image_url).slice(0,12);
  el.innerHTML = `<div class="story add" onclick="location.href='create-post.html'"><div class="ava">+</div><span>Kamu</span></div>` +
    items.map(p=>`<div class="story"><div class="ava" style="background-image:url('${p.image_url}')"></div><span>${(p.username||'Anon').slice(0,8)}</span></div>`).join('');
}

function renderPosts(posts,liked){
  const feed = $('#feed');
  feed.innerHTML = (posts||[]).map(p=>`
  <article class="post" id="p${p.id}">
    ${p.user_id===USER_ID?`<button class="menu" aria-label="menu" onclick="postMenu(${p.id})">⋮</button>`:''}
    <header class="head"><div class="ava-sm"></div><div><div class="name">${p.username||'Anonim'}</div><div class="time">${fmtTime(p.created_at)}</div></div></header>
    <div class="content">${(p.content||'').replace(/</g,'&lt;')}</div>
    ${p.image_url?`<img class="img" src="${p.image_url}" loading="lazy" alt="">`:''}
    <footer class="actions">
      <button class="${liked.has(p.id)?'liked':''}" onclick="toggleLike(${p.id},this)"><span>Suka</span> <b>${p.likes_count||0}</b></button>
      <button onclick="location.href='comment.html?id=${p.id}'">Komentar</button>
      <button onclick="sharePost(${p.id},this)">Bagikan<b>${p.shares_count||0}</b></button>
    </footer>
  </article>`).join('') || '<p style="text-align:center;opacity:.5;padding:40px">Belum ada postingan</p>';
}

async function toggleLike(id,btn){
  const b = btn.querySelector('b'); let n = parseInt(b.textContent)||0;
  btn.disabled = true;
  const {data} = await supa.from('post_likes').select('post_id').eq('post_id',id).eq('user_id',USER_ID).maybeSingle();
  if(data){ await supa.from('post_likes').delete().eq('post_id',id).eq('user_id',USER_ID); n=Math.max(0,n-1); btn.classList.remove('liked'); }
  else { await supa.from('post_likes').insert({post_id:id,user_id:USER_ID}); n++; btn.classList.add('liked'); }
  b.textContent = n; await supa.from('posts').update({likes_count:n}).eq('id',id); btn.disabled=false;
}

async function sharePost(id,btn){
  try{ await navigator.share({title:'Puu Puu',url:location.origin+location.pathname+'#p'+id}); const b=btn.querySelector('b'); const n=(parseInt(b.textContent)||0)+1; b.textContent=n; await supa.from('posts').update({shares_count:n}).eq('id',id);}catch(e){}
}
function postMenu(id){ if(confirm('Edit postingan ini?')) location.href='edit-post.html?id='+id; else if(confirm('Hapus permanen?')){ supa.from('posts').delete().eq('id',id).then(()=>loadFeed()); } }
function toggleNav(){ $('#nav').classList.toggle('open'); $('#ov').classList.toggle('show'); }
document.addEventListener('DOMContentLoaded', loadFeed);
supa?.channel('rt').on('postgres_changes',{event:'*',schema:'public',table:'posts'},loadFeed).subscribe();
