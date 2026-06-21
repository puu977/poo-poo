async function loadFeed(){
  const {data}=await sb.from('posts').select('*').order('created_at',{ascending:false});
  document.getElementById('feed').innerHTML = data.map(p=>`
    <div class="post">
      <div class="post-h">
        <img class="avatar" src="assets/img/img-profil-blank.svg" width="38" height="38">
        <div><div class="name">${p.user}</div><div class="time">${new Date(p.created_at).toLocaleString('id-ID')}</div></div>
      </div>
      <div class="post-b">${p.text||''}${p.media_url?`<img src="${p.media_url}" style="width:100%;margin-top:8px;border-radius:8px">`:''}</div>
    </div>`).join('');
}
loadFeed(); setInterval(loadFeed,5000);
