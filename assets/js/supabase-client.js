const SUPABASE_URL = "https://gttedpjwqgiyszmrcnoe.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dGVkcGp3cWdpeXN6bXJjbm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNjk3MjIsImV4cCI6MjA5Njk0NTcyMn0.GzouEkyd6pRvT_IQuNR7LTyN6ewPiCTj2Xqu8l9yEcY"
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
const avatarInput = document.getElementById('avatarUpload')
if (avatarInput) {
  avatarInput.addEventListener('change', async e => {
    const file = e.target.files[0]; if(!file) return
    const url = URL.createObjectURL(file)
    document.getElementById('topAvatar')?.setAttribute('src', url)
    const preview = document.getElementById('profileAvatarPreview')
    if (preview) preview.src = url
    localStorage.setItem('puu_avatar', url)
    showToast('Foto profil diperbarui')
  })
}