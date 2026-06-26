const dict = {
  en: {
    new_chat: 'New chat',
    vibes: 'Vibes',
    settings: 'Settings',
    language: 'Language',
    search: 'Search'
  },
  id: {
    new_chat: 'Obrolan baru',
    vibes: 'Vibes',
    settings: 'Pengaturan',
    language: 'Bahasa',
    search: 'Cari'
  }
};

export function t(key, lang = 'en') {
  return dict[lang]?.[key] || dict['en'][key] || key;
}