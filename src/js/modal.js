const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', handlerOpenModal);
refs.closeModalBtn.addEventListener('click', handlerClosenModal);
refs.modal.addEventListener('click', handlerCloseModalBackdrop);

function handlerOpenModal(evt) {
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', handlerEscClose);
}

function handlerClosenModal(evt) {
  refs.modal.classList.add('is-hidden');
  removeEventListenerKeydown();
}

function handlerCloseModalBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    refs.modal.classList.add('is-hidden');
    removeEventListenerKeydown();
  }
}

function handlerEscClose(evt) {
  console.log(evt);
  if (evt.code === 'Escape') {
    refs.modal.classList.add('is-hidden');
    removeEventListenerKeydown();
  }
}

function removeEventListenerKeydown() {
  document.removeEventListener('keydown', handlerEscClose);
}
