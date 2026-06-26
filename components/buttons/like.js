import { supa } from '../../core/api.js';
import { state } from '../../core/state.js';

export function LikeButton(post) {
  const liked = state.myLikes.has(post.id);
  const btn = document.createElement('button');
  btn.className = 'like-btn';
 
