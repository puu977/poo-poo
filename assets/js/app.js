async function loadFeed(){
  const feed = document.getElementById('feed');

  const { data: posts, error } = await supa
    .from('posts')
    .select('*')
    .order('created_at', { ascending:false });

  console.log('POSTS=', posts);
  console.log('ERROR=', error);

  if(error){
    feed.innerHTML = '<div style="padding:20px;color:red">'+error.message+'</div>';
    return;
  }

  feed.innerHTML = JSON.stringify(posts);
}
function toggleNav() {
  document.getElementById('nav')?.classList.toggle('open');
  document.getElementById('ov')?.classList.toggle('show');
}
