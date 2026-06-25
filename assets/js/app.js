import { renderTopbar } from './components/topbar.js';
import { renderSidebar } from './components/sidebar.js';

import { renderHome } from './views/home.js';
import { renderChat } from './views/chat.js';
import { renderGroup } from './views/group.js';
import { renderServer } from './views/server.js';
import { renderSettings } from './views/settings.js';

renderTopbar();

renderSidebar();

renderHome();
renderChat();
renderGroup();
renderServer();
renderSettings();