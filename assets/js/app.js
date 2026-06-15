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
document.getElementById('avatarUpload').addEventListener('change', async e=>{
  const file = e.target.files[0]; if(!file) return
  const url = URL.createObjectURL(file) 
  document.getElementById('topAvatar').src = url
  localStorage.setItem('puu_avatar', url)
  showToast('Foto profil diperbarui')
})
