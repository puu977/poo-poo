async function toggleLike(id,btn){
  const b = btn.querySelector('b'); 
  let n = parseInt(b.textContent)||0;
  btn.disabled = true;
  
  // CEK DULU APAKAH UDAH LIKE
  const { data: existing, error } = await supa
    .from('post_likes')
    .select('post_id')
    .eq('post_id', id)
    .eq('user_id', USER_ID)
    .maybeSingle();

  if(error && error.code !== 'PGRST116'){ // PGRST116 = not found, itu normal
    console.error(error); btn.disabled=false; return;
  }

  if(existing){
    // UDAH LIKE → UNLIKE
    await supa.from('post_likes').delete().eq('post_id',id).eq('user_id',USER_ID);
    n = Math.max(0, n-1);
    btn.classList.remove('liked');
  } else {
    // BELUM LIKE → LIKE
    await supa.from('post_likes').insert({ post_id:id, user_id:USER_ID });
    n = n + 1;
    btn.classList.add('liked');
  }
  
  b.textContent = n;
  await supa.from('posts').update({ likes_count: n }).eq('id', id);
  btn.disabled = false;
}
