let toastTimer;

const CURRENT_USER = {
  id:"user",
  name:"User",
  avatar:""
};

function getAvatar(u){
  return u?.avatar || "https://ui-avatars.com/api/?name="+encodeURIComponent(u?.name||"User");
}

function showToast(msg){
  const t=document.getElementById("toast");
  if(!t) return;
  t.textContent=msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove("show"),2000);
}

document.addEventListener("DOMContentLoaded",()=>{

  document.getElementById("hamburger")?.addEventListener("click",()=>{
    document.getElementById("sidebar")?.classList.toggle("open");
  });

  document.getElementById("main")?.addEventListener("click",()=>{
    document.getElementById("sidebar")?.classList.remove("open");
  });

  renderStories();
  renderFeed();
  renderOnline();
  bindUI();
});

/* STORIES */
function renderStories(){
  const el=document.getElementById("storyRow");
  if(!el) return;

  el.innerHTML=`
    <div onclick="showToast('Story coming soon')">
      <div class="story-avatar-inner">+</div>
    </div>
  `;
}

/* FEED */
function renderFeed(){
  const el=document.getElementById("feedGrid");
  if(!el) return;

  el.innerHTML=`
    <div class="card post-card">
      <div class="post-head">
        <img src="${getAvatar(CURRENT_USER)}">
        <div>${CURRENT_USER.name}</div>
      </div>
      <div class="post-body">Welcome ke Puu Chat v2 💜</div>
    </div>
  `;
}

/* ONLINE */
function renderOnline(){
  const el=document.getElementById("onlineNow");
  if(!el) return;

  el.innerHTML=`
    <div class="online-row">
      <img src="${getAvatar(CURRENT_USER)}">
      <div>${CURRENT_USER.name}</div>
    </div>
  `;
}

/* UI */
function bindUI(){
  document.getElementById("globalSearchInput")?.addEventListener("keydown",(e)=>{
    if(e.key==="Enter") showToast("Search belum aktif");
  });

  document.getElementById("topSettingsBtn")?.addEventListener("click",()=>{
    showToast("Settings coming soon");
  });
}
