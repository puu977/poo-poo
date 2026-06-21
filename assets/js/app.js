const supa = window.supabase.createClient(
  'https://YOUR-PROJECT.supabase.co',
  'YOUR-ANON-KEY'
);
const USER_ID = localStorage.puu_id || (localStorage.puu_id = 'u_' + Math.random().toString(36).slice(2,9));

async function loadFeed(){
  const feed = document.getElementById('feed');
  const stories = document.getElementById('stories');
  try{
    const { data: posts } = await supa.from('posts').select('*').order('created_at', {ascending:false}).limit(50);
    const { data: myLikes } = await supa.from('post_likes').select('post_id').eq('user_id', USER_ID);
    const liked = new Set(myLikes.map(x=>x.post_id));

    stories.innerHTML = `<div class="story add" onclick="location.href='create-post.html'"><div class="ava">+</div><span>Kamu</span></div>` +
      posts.filter(p=>p.image_url).slice(0,10).map(p=>`<div class="story"><div class="ava" style="background-image:url('${p.image_url}')"></div><span>${(p.username||'Anon').slice(0,8)}</span></div>`).join('');

    feed.innerHTML = posts.map(p=>`
      <article class="post">
        ${p.user_id===USER_ID?`<button class="menu" onclick="menu(${p.id})">⋮</button>`:''}
        <div class="head"><div class="ava-sm"></div><div><div class="name">${p.username||'Anonim'}</div><div class="time">${new Date(p.created_at).toLocaleString('id-ID',{day:'2-digit',month:'short'})}</div></div></div>
        <div class="content">${(p.content||'').replace(/</g,'&lt;')}</div>
        ${p.image_url?`<img class="img" src="${p.image_url}">`:''}
        <div class="actions">
          <button onclick="like(${p.id},this)" class="${liked.has(p.id)?'liked':''}">Suka<b>${p.likes_count||0}</b></button>
          <button onclick="location.href='comment.html?id=${p.id}'">Komentar</button>
          <button onclick="share(${p.id},this)">Bagikan<b>${p.shares_count||0}</b></button>
        </div>
      </article>`).join('');
  }catch(e){
    feed.innerHTML = `<p style="color:#f88;padding:20px">GAGAL LOAD: ${e.message}</p>`;
  }
}

async function like(id, btn){
  const b = btn.querySelector('b'); let n = +b.textContent;
  btn.disabled = true;
  const { data } = await supa.from('post_likes').select().eq('post_id',id).eq('user_id',USER_ID).maybeSingle();
  if(data){
    await supa.from('post_likes').delete().eq('post_id',id).eq('user_id',USER_ID);
    n--; btn.classList.remove('liked');
  }else{
    await supa.from('post_likes').insert({post_id:id,user_id:USER_ID});
    n++; btn.classList.add('liked');
  }
  b.textContent = n;
  await supa.from('posts').update({likes_count:n}).eq('id',id);
  btn.disabled = false;
}

function menu(id){ if(confirm('Hapus post?')) supa.from('posts').delete().eq('id',id).then(loadFeed) }
async function share(id,btn){ const b=btn.querySelector('b'); b.textContent=+b.textContent+1; await supa.from('posts').update({shares_count:+b.textContent}).eq('id',id); }
function toggleNav(){ nav.classList.toggle('open'); ov.classList.toggle('show') }

document.addEventListener('DOMContentLoaded', loadFeed);
