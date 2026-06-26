import { Navbar } from '../../components/topbar.js';
import { Sidebar } from '../../components/sidebar.js';
import { Feed } from './feed.js';

export async function HomeView(){
  const app = document.getElementById('app');
  app.innerHTML = '';
  
  app.appendChild(Navbar());
  
  const bottomSec = document.createElement('div');
  bottomSec.className = 'bottom-sec';
  bottomSec.appendChild(Sidebar());
  
  const chatSection = document.createElement('div');
  chatSection.className = 'chat-section';
  chatSection.appendChild(await Feed());
  bottomSec.appendChild(chatSection);
  
  app.appendChild(bottomSec);
}
import { state } from '../../core/state.js';

export async function HomeView(){
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="navbar">
      <div class="nav-left">
        <button class="toggle-btn">
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
        <div class="user">
          <img src="${state.user.avatar}" alt="user">
        </div>
      </div>
    </div>
    
    <div class="bottom-sec">
      <div class="side-menu">
        <div class="search-bar">
          <img src="assets/icons/search.svg" alt="search">
          <input type="text" placeholder="Search...">
        </div>
        <ul>
          <li><img src="assets/icons/home.svg"><a href="#/" class="active">Home</a></li>
        </ul>
      </div>
      
      <div class="chat-section">
        <div class="chat-header">
          <div class="user-header"><h2>Home Feed</h2></div>
          <button><img src="assets/icons/threedot.svg" class="threedot"></button>
        </div>
        <div class="all-chat">
          <div class="chat-box">
            <img src="${state.user.avatar}">
            <div class="chat-txt">
              <h4>Anonim <span>now</span></h4>
              <p>Layout udah muncul anjirr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.querySelector('.toggle-btn').onclick = () => {
    document.querySelector('.side-menu')?.classList.toggle('active');
  };
}
