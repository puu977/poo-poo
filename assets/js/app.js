const supa = window.supabase.createClient('https://YOUR-PROJECT.supabase.co','YOUR-ANON-KEY');
const USER_ID = localStorage.puu_id || (localStorage.puu_id='u_'+Math.random().toString(36).slice(2,9));

async function loadFeed(){
 const feed=document.getElementById('feed');
 const {data:posts}=await supa.from('posts').select('*').order('created_at',{ascending:false});
 const {data:myLikes}=await supa.from('post_likes').select('post_id').eq('user_id',USER_ID);
 const liked=new Set(myLikes.map(x=>x.post_id));
 feed.innerHTML=posts.map(p=>`
  <article class="post">
   <div class="head"><b>${p.username||'Anon'}</b></div>
   <div>${p.content||''}</div>
   ${p.image_url?`<img src="${p.image_url}" style="max-width:100%">`:''}
   <button onclick="like(${p.id},this)" class="${liked.has(p.id)?'liked':''}">♥ ${p.likes_count||0}</button>
  </article>`).join('');
}
async function like(id,btn){
 const n=parseInt(btn.textContent.match(/\d+/)[0]);
 const {data}=await supa.from('post_likes').select().eq('post_id',id).eq('user_id',USER_ID).maybeSingle();
 if(data){await supa.from('post_likes').delete().eq('post_id',id).eq('user_id',USER_ID);btn.innerHTML='♥ '+(n-1);btn.classList.remove('liked');await supa.from('posts').update({likes_count:n-1}).eq('id',id);}
 else{await supa.from('post_likes').insert({post_id:id,user_id:USER_ID});btn.innerHTML='♥ '+(n+1);btn.classList.add('liked');await supa.from('posts').update({likes_count:n+1}).eq('id',id);}
}
document.addEventListener('DOMContentLoaded',loadFeed);
