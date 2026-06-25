import { navigate } from '../core/router.js';

export function renderSidebar(){

  const sidebar = document.getElementById('sidebar');

  sidebar.innerHTML = `

    <nav class="sidebar-nav">

      <button class="nav-btn" data-view="home">
        <img src="assets/img/icons/home.png">
        <span>Home</span>
      </button>

      <button class="nav-btn" data-view="chat">
        <img src="assets/img/icons/chat.png">
        <span>Chat</span>
      </button>

      <button class="nav-btn" data-view="group">
        <img src="assets/img/icons/group.png">
        <span>Group</span>
      </button>

      <button class="nav-btn" data-view="server">
        <img src="assets/img/icons/server.png">
        <span>Server</span>
      </button>

      <button class="nav-btn" data-view="settings">
        <img src="assets/img/icons/settings.png">
        <span>Settings</span>
      </button>

    </nav>

  `;

  sidebar.querySelectorAll('.nav-btn')
    .forEach(btn=>{

      btn.addEventListener('click',()=>{

        navigate(btn.dataset.view);

      });

    });

}
