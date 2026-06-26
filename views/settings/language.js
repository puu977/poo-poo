import { changeLanguage, getCurrentLanguage } from '../../services/language.js';

export async function LanguageView() {
  const app = document.querySelector('.chat-section');
  const current = getCurrentLanguage();
  
  app.innerHTML = `
    <div class="chat-header">
      <div class="user-header"><h2>Bahasa</h2></div>
    </div>
    <div class="all-chat">
      <ul class="menu-utama">
        <li class="lang-item" data-lang="id">
          <p>Indonesia ${current === 'id'? '✓' : ''}</p>
          <img src="assets/icon/chevron-right.svg">
        </li>
        <li class="lang-item" data-lang="en">
          <p>English ${current === 'en'? '✓' : ''}</p>
          <img src="assets/icon/chevron-right.svg">
        </li>
      </ul>
    </div>
  `;

  document.querySelectorAll('.lang-item').forEach(el => {
    el.onclick = () => {
      changeLanguage(el.dataset.lang);
      location.reload(); // Simple way. Nanti bisa pake re-render
    };
  });
}