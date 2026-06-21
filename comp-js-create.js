let data={text:'',media:null,music:null,loc:'',feeling:'',tags:[]};
const txt=document.getElementById('txt'),send=document.getElementById('send');
txt.oninput=()=>{data.text=txt.value;send.disabled=!data.text.trim()&&!data.media};
