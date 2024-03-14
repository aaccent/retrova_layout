import { Modal } from "./Modal";

export default () => {
  let takeBtn = null;

  const modal = new Modal({
    isOpen: (modal) => {
      const modals = Array.from(document.querySelectorAll('.modal.is-open'));

      if(modals.length > 1) {
        takeBtn = modals[0].firstElementChild.dataset.target;
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
