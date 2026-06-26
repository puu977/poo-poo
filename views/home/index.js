import { Navbar } from '../../components/topbar.js';
import { Sidebar } from '../../components/sidebar.js';
import { Feed } from './feed.js';

export async function HomeView(){
  const app = document.getElementById('app');
  app.innerHTML = '';
  
  app.appendChild(Navbar());
  
  const bottomSec = document.createElement('div');
  bottomSec.className = 'bottom-sec';
  bottomSec.appendChild(Sidebar());
  
  const chatSection = document.createElement('div');
  chatSection.className = 'chat-section';
  chatSection.appendChild(await Feed());
  bottomSec.appendChild(chatSection);
  
  app.appendChild(bottomSec);
}
