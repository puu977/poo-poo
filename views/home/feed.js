import { supa } from '../../core/api.js';
import { state } from '../../core/state.js';
import { LikeButton } from '../../components/buttons/like.js';
import { Avatar } from '../../components/profile/avatar.js';

export async function Feed(){
  const {data:posts} = await supa.from('posts').select('*').order('created_at',{ascending:false});
  const {data:likes} = await supa.from('post_likes').select('post_id').eq('user_id',state.user.id);
  state.myLikes = new Set(likes.map(x=>x.post_id));
  
  const section = document.createElement('div');
  section.innerHTML = `
    <div class="chat-header">
      <div class="user-header">
        <h2>Home Feed</h2>
      </div>
      <button>
        <img src="assets/icons/threedot.svg" class="threedot" alt="more">
      </button>
    </div>
    <div class="all-chat" id="feed-list"></div>
  `;
  
  const list = section.querySelector('#feed-list');
  posts.forEach(p=>{
    const box = document.createElement('div');
    box.className = 'chat-box';
    box.innerHTML = `
      <div class="chat-txt">
        <h4>${p.username} <span>${new Date(p.created_at).toLocaleTimeString()}</span></h4>
        <p>${p.content||''}</p>
        ${p.image_url?`<img src="${p.image_url}" style="width:100%;border-radius:10px;margin-top:10px">`:''}
      </div>
    `;
    box.prepend(Avatar({avatar:''}));
    box.querySelector('.chat-txt').appendChild(LikeButton(p));
    list.appendChild(box);
  });
  return section;
}
