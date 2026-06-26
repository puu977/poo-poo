import { HomeView } from './views/home/index.js';
import { state } from './core/state.js';
window.state = state;

document.addEventListener('DOMContentLoaded', HomeView);
