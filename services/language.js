import { state, setLanguage } from '../core/state.js';
import { t } from '../config/i18n.js';

export function changeLanguage(langCode) {
  setLanguage(langCode);
}

export function getCurrentLanguage() {
  return state.settings.language;
}

export function translate(key) {
  return t(key, state.settings.language);
}