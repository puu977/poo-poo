function renderChips(){
  document.getElementById('chips').innerHTML=`
    <div class="chip" onclick="fMus.click()">🎵 Musik${data.music?'✓':''}</div>
    <div class="chip" onclick="tag()">👤 Orang${data.tags.length?'✓':''}</div>
    <div class="chip" onclick="getLoc()">📍 Lokasi${data.loc?'✓':''}</div>
    <div class="chip" onclick="feel()">🙂 Perasaan${data.feeling?'✓':''}</div>`;
}
const fMus=document.getElementById('fMus');
fMus.onchange=e=>{ data.music=e.target.files[0]; renderChips(); };
function getLoc(){ navigator.geolocation.getCurrentPosition(p=>{ data.loc=`${p.coords.latitude.toFixed(4)},${p.coords.longitude.toFixed(4)}`; document.getElementById('meta').textContent=data.loc; renderChips(); }); }
function tag(){ const t=prompt('Tag orang (pisah koma):'); if(t) data.tags=t.split(','); renderChips(); }
function feel(){ const f=prompt('Perasaan:'); if(f){ data.feeling=f; document.getElementById('meta').textContent=f; renderChips(); } }
renderChips();
