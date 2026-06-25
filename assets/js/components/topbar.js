export function renderTopbar() {
  document.getElementById('topbar').innerHTML = `
    <header class="topbar">

      <button id="menuBtn">
        <img src="assets/img/icons/menu.png" alt="Menu">
      </button>

      <div class="logo">
        Puu Puu
      </div>

      <input
        type="search"
        placeholder="Cari..."
      >

      <div class="top-actions">

        <button>
          <img src="assets/img/icons/bell.png" alt="Notifikasi">
        </button>

        <button>
          <img src="assets/img/icons/settings.png" alt="Pengaturan">
        </button>

        <img
          src="assets/img/avatars/default.png"
          class="avatar"
        >

      </div>

    </header>
  `;
}