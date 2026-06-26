import { state } from '../../core/state.js';

export async function HomeView(){
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="navbar">
      <div class="nav-left">
        <button class="toggle-btn">
          <img src="assets/icon/menu.svg" alt="menu">
        </button>
        <img src="assets/icon/logo.svg" class="main-logo" alt="Puu Puu">
      </div>
      <div class="nav-right">
        <button class="setting">
          <img src="assets/icon/setting.svg" alt="setting">
        </button>
        <div class="user">
          <img src="assets/icon/profile.png" alt="user">
        </div>
      </div>
    </div>
    
    <div class="bottom-sec">
      <div class="side-menu">
        <div class="search-bar">
          <img src="assets/icon/search.svg" alt="search">
          <input type="text" placeholder="Search...">
        </div>
        <ul>
          <li><img src="assets/icon/home.png"><a href="#/" class="active">Home</a></li>
        </ul>
      </div>
      
      <div class="chat-section">
        <div class="chat-header">
          <div class="user-header"><h2>Home Feed</h2></div>
          <button><img src="assets/icon/threedot.png" class="threedot"></button>
        </div>
        <div class="all-chat">
          <div class="chat-box">
            <img src="assets/icon/profile.png">
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
