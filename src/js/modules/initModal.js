import { Modal } from "./Modal";

export default () => {
  let takeBtn = null;

  const modal = new Modal({
    isOpen: (modal) => {
      const modals = Array.from(document.querySelectorAll('.modal.is-open'));
      const backBtn = document.querySelector('.js-back-modal-btn');

      if(modals.length > 1) {
        takeBtn = modals[0].firstElementChild.dataset.target;
      }

      if(backBtn) {
        backBtn.addEventListener('click', () => {
            setTimeout(() => {
                const button = document.createElement('button');
                button.classList.add('visually-hidden');
                button.dataset.path = 'modal-login';
                document.body.append(button);
                button.click();
                button.remove();
            }, 50);
        })
      }

    },
    isClose: (modal) => {
      if( takeBtn !== null) {
        const button = document.createElement('button');
        button.classList.add('visually-hidden');
        button.dataset.path = takeBtn;
        document.body.append(button);
        button.click();
        takeBtn = null;
      }
    },
  });

  // window.medikamarket_API.modal = modal;
};
