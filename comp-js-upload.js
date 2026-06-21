async function uploadPost(){
  send.disabled=true; send.textContent='Mengirim...';
  let mediaUrl=null, musicUrl=null;

  if(data.media){
    const path=`media/${Date.now()}_${data.media.name}`;
    const {data:up}=await sb.storage.from('posts').upload(path,data.media);
    mediaUrl=sb.storage.from('posts').getPublicUrl(up.path).data.publicUrl;
  }
  if(data.music){
    const path=`music/${Date.now()}_${data.music.name}`;
    const {data:up}=await sb.storage.from('posts').upload(path,data.music);
    musicUrl=sb.storage.from('posts').getPublicUrl(up.path).data.publicUrl;
  }
  await sb.from('posts').insert({
    user: localStorage.puu_name||'User',
    text: data.text,
    media_url: mediaUrl,
    music_url: musicUrl,
    location: data.loc,
    feeling: data.feeling,
    tags: data.tags
  });
  location='index.html';
}
document.getElementById('send').onclick = uploadPost;
