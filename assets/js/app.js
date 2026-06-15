const BLANK_AVATAR = 'assets/img/avatar-blank.png'
function avatarUrl(url){ return url && url.trim()? url : BLANK_AVATAR }

async function loadTopAvatar(){
  const img = document.getElementById('topAvatar')
  if(!img) return
  const saved = localStorage.getItem('puu_avatar')
  if(saved){ img.src = saved; return }
  img.src = BLANK_AVATAR
}
document.addEventListener('DOMContentLoaded', loadTopAvatar)

// sidebar mobile
document.addEventListener('click', e=>{
  if(e.target.closest('#hamburger')) document.getElementById('sidebar')?.classList.toggle('open')
})

function showToast(msg){
  const t = document.getElementById('toast')
  if(!t) return
  t.textContent = msg; t.classList.add('show')
  setTimeout(()=>t.classList.remove('show'), 2000)
}
