export default () => {
  const container = document.querySelector('.js-set-modal-open');

  if(!container) return;

  let btn = document.createElement('button');
  btn.classList.add('visually-hidden');

  switch (container.dataset.modal) {
    case 'modal-pickup':
      btn.dataset.path = container.dataset.modal;
      break;
  
    default:
      return;
  }

  document.body.appendChild(btn);
  btn.click();
}