export function Sidebar(){
  const side = document.createElement('div');
  side.className = 'side-menu';
  side.innerHTML = `
    <div class="search-bar">
      <img src="assets/icons/search.svg" alt="search">
      <input type="text" placeholder="Search...">
    </div>
    <ul>
      <li>
        <img src="assets/icons/home.svg" alt="">
        <a href="#/" class="active">Home</a>
      </li>
      <li>
        <img src="assets/icons/chat.svg" alt="">
        <a href="#/chat">Chat</a>
      </li>
      <li>
        <img src="assets/icons/group.svg" alt="">
        <a href="#/group">Groups</a>
      </li>
      <li>
        <img src="assets/icons/server.svg" alt="">
        <a href="#/server">Server</a>
      </li>
      <li>
        <img src="assets/icons/settings.svg" alt="">
        <a href="#/settings">Settings</a>
      </li>
    </ul>
    <div class="chat-sec">
      <div class="chat">
        <img src="assets/img/avatar-blank.png" alt="">
        <p>Online Friends</p>
      </div>
    </div>
  `;
  return side;
}
