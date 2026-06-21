const fImg=document.getElementById('fImg'), mediaBox=document.getElementById('mediaBox');
fImg.onchange=e=>{
  const f=e.target.files[0]; if(!f)return; data.media=f;
  const url=URL.createObjectURL(f);
  mediaBox.style.display='block';
  mediaBox.innerHTML = `${f.type.startsWith('video')?`<video src="${url}" controls></video>`:`<img src="${url}">`}
    <div class="overlay" onclick="fImg.click()">+ Tambahkan media</div>
    <div class="tools">
      <button onclick="fImg.click()"><img src="assets/img/img-icon-edit.svg" width="32" height="32"></button>
      <button onclick="delMedia()"><img src="assets/img/img-icon-delete.svg" width="32" height="32"></button>
    </div>`;
  send.disabled=false;
};
function delMedia(){ data.media=null; mediaBox.style.display='none'; mediaBox.innerHTML=''; send.disabled=!data.text.trim(); }
