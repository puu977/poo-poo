export const state = {
  user: {
    id: 1,
    name: 'joe',
    avatar: 'assets/icon/profile.png'
  },
  settings: {
    language: localStorage.getItem('app_lang') || 'en',
    theme: 'dark',
    autoTranslate: true
  },
  chats: [],
  groups: []
};

export function setLanguage(lang) {
  state.settings.language = lang;
  localStorage.setItem('app_lang', lang);
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
}
