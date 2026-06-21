async function toggleLike(postId, el){
  // el = tombol yang diklik
  const countEl = el.querySelector('b') || el;
  let n = parseInt(countEl.textContent) || 0;
  
  el.disabled = true;
  
  const { data } = await supa.from('post_likes')
    .select('post_id')
    .eq('post_id', postId)
    .eq('user_id', USER_ID)
    .maybeSingle();

  if(data){
    await supa.from('post_likes').delete().eq('post_id', postId).eq('user_id', USER_ID);
    n = Math.max(0, n-1);
    el.classList.remove('liked');
  }else{
    await supa.from('post_likes').insert({ post_id: postId, user_id: USER_ID });
    n = n + 1;
    el.classList.add('liked');
  }
  
  countEl.textContent = n;
  await supa.from('posts').update({likes_count: n}).eq('id', postId);
  el.disabled = false;
}
