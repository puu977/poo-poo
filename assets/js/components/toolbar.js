// toolbar Facebook-style
export function renderToolbar(targetId){
  document.getElementById(targetId).innerHTML = `
  <div style="display:flex;gap:18px;padding:12px 4%;border-top:2px solid #544F7E;background:#3F3B62;overflow-x:auto">
    <button class="tool" data-act="live" style="background:none;border:none;color:#E2D3F4;display:flex;align-items:center;gap:6px;white-space:nowrap;cursor:pointer">
      <span style="font-size:20px">🔴</span> Siaran Langsung
    </button>
    <button class="tool" data-act="foto" style="background:none;border:none;color:#E2D3F4;display:flex;align-items:center;gap:6px;cursor:pointer">
      <span style="font-size:20px">🖼️</span> Foto/Video
    </button>
    <button class="tool" data-act="lokasi" style="background:none;border:none;color:#E2D3F4;display:flex;align-items:center;gap:6px;cursor:pointer">
      <span style="font-size:20px">📍</span> Lokasi
    </button>
    <button class="tool" data-act="aktivitas" style="background:none;border:none;color:#E2D3F4;display:flex;align-items:center;gap:6px;cursor:pointer">
      <span style="font-size:20px">😊</span> Perasaan
    </button>
    <button class="tool" data-act="tagar" style="background:none;border:none;color:#E2D3F4;display:flex;align-items:center;gap:6px;cursor:pointer">
      <span style="font-size:20px">#</span> Tagar
    </button>
  </div>`;
  
  // events
  document.querySelectorAll('.tool').forEach(b=>{
    b.onclick = ()=> handleTool(b.dataset.act);
  });
}

function handleTool(act){
  const txt = document.getElementById('txt');
  const prev = document.getElementById('prev');
  
  if(act==='foto') document.getElementById('fImg').click();
  if(act==='lokasi'){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(p=>{
        txt.value += `\n📍 Lokasi: ${p.coords.latitude.toFixed(4)}, ${p.coords.longitude.toFixed(4)} `;
        txt.dispatchEvent(new Event('input'));
      });
    } else alert('Lokasi tidak didukung');
  }
  if(act==='aktivitas'){
    const actv = prompt('Lagi ngapain? (main game, makan, dll)');
    if(actv) { txt.value += `\n😊 sedang ${actv} `; txt.dispatchEvent(new Event('input')); }
  }
  if(act==='tagar'){
    const tag = prompt('Masukkan tagar (tanpa #)');
    if(tag) { txt.value += ` #${tag.replace(/\s/g,'')} `; txt.dispatchEvent(new Event('input')); }
  }
  if(act==='live'){
    alert('Fitur Siaran Langsung: akan buka kamera (butuh WebRTC). Untuk sekarang, upload video aja ya.');
    document.getElementById('fImg').click();
  }
      }
