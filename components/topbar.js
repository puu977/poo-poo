import { Avatar } from './profile/avatar.js';
import { state } from '../core/state.js';

export function Navbar(){
  const nav = document.createElement('div');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="nav-left">
      <button class="toggle-btn" id="menuToggle">
        <img src="assets/icons/menu.svg" alt="menu">
      </button>
      <img src="assets/img/logo.svg" class="main-logo" alt="Puu Puu">
    </div>
    <div class="nav-right">
      <div class="search-bar">
        <img src="assets/icons/search.svg" alt="search">
        <input type="text" placeholder="Search...">
      </div>
      <button class="setting">
        <img src="assets/icons/setting.svg" alt="setting">
      </button>
    </div>
  `;
  nav.querySelector('.nav-right').appendChild(Avatar(state.user));
  
  nav.querySelector('#menuToggle').onclick = () => {
    document.querySelector('.side-menu')?.classList.toggle('active');
  };
  return nav;
}
