export function renderSidebar() {
  const sidebar = document.getElementById('sidebar');

  sidebar.innerHTML = `
    <aside class="sidebar">

      <button class="nav-item active" data-view="home">
        <img src="assets/icons/home.png" alt="home">
        <span>Home</span>
      </button>

      <button class="nav-item" data-view="chat">
        <img src="assets/icons/chat.png" alt="chat">
        <span>Chat</span>
      </button>

      <button class="nav-item" data-view="group">
        <img src="assets/icons/group.png" alt="group">
        <span>Group</span>
      </button>

      <button class="nav-item" data-view="server">
        <img src="assets/icons/server.png" alt="server">
        <span>Server</span>
      </button>

      <button class="nav-item" data-view="settings">
        <img src="assets/icons/settings.png" alt="settings">
        <span>Settings</span>
      </button>

    </aside>
  `;
}