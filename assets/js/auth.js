function showToast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=> t.classList.remove('show'), 2500);
}

function setLoading(btn, loading, text='Memproses…'){
  if(!btn) return;
  btn.disabled = loading;
  btn.dataset._label = btn.dataset._label || btn.textContent;
  btn.textContent = loading ? text : btn.dataset._label;
}

// ambil user session
async function getCurrentUser(){
  if(!window.sb) return null;
  const { data } = await sb.auth.getUser();
  return data?.user || null;
}

// cek session
async function checkAlreadyLoggedIn(){
  if(!window.sb) return false;
  const { data } = await sb.auth.getSession();
  return !!data?.session;
}

// error mapping
function authError(err){
  const m = (err?.message || '').toLowerCase();
  if(m.includes('invalid login')) return 'Email atau password salah';
  if(m.includes('email not confirmed')) return 'Email belum dikonfirmasi';
  if(m.includes('already registered')) return 'Email sudah terdaftar';
  return err?.message || 'Terjadi kesalahan';
}

// local user cache
function saveLocalUser(user){
  if(!user) return;
  localStorage.setItem("puu_user", JSON.stringify({
    id: user.id,
    email: user.email
  }));
}

function loadLocalUser(){
  return JSON.parse(localStorage.getItem("puu_user") || "null");
}
