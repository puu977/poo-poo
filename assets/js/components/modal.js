export function openModal(content){

  const root = document.getElementById('modal-root');

  root.innerHTML = `
  
    <div class="modal-overlay">

      <div class="modal">

        ${content}

      </div>

    </div>

  `;

}

export function closeModal(){

  document.getElementById('modal-root').innerHTML = '';

}