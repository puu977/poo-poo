// 1. Sidebar bisa buka tutup
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');

menuBtn.onclick = () => sidebar.classList.toggle('open');

// klik luar nutup
document.addEventListener('click', (e) => {
  if (sidebar.classList.contains('open') && !e.target.closest('.sidebar') && e.target !== menuBtn) {
    sidebar.classList.remove('open');
  }
});

// 2. Data postingan (sementara pakai localStorage)
let posts = JSON.parse(localStorage.getItem('puu_posts') || '[]');

// 3. Render feed
function render() {
  const feed = document.getElementById('feed');
  if (posts.length === 0) {
    feed.innerHTML = `<div class="card" style="text-align:center;color:var(--muted)">Belum ada postingan</div>`;
    return;
  }
  feed.innerHTML = posts.map((p,i) => `
    <div class="post">
      <div class="post-h">
        <div class="avatar"></div>
        <div><div class="name">${p.name}</div><div class="time">baru saja</div></div>
        <div class="menu">•••</div>
      </div>
      <div class="post-b">${p.text}</div>
      <div class="post-f">
        <button>Suka</button>
        <button>Komentar</button>
        <button>Bagikan</button>
      </div>
    </div>
  `).join('');
}

// 4. Klik "Apa yang Anda pikirkan?"
document.getElementById('makePost').onclick = () => {
  const text = prompt('Tulis postingan:');
  if (!text) return;
  posts.unshift({ name: 'User', text });
  localStorage.setItem('puu_posts', JSON.stringify(posts));
  render();
};

render();
