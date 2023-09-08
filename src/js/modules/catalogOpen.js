export default () => {
  const header = document.querySelector('.header');
  const catalogMenu = document.querySelector('.catalog-menu');
  const catalogButton = document.querySelector('.js-catalog');
  const main = document.querySelector('.main');
  const fixBlocks = document.querySelectorAll('.fix-block');

  if(!header) return;

  let catalogIsOpen = false;

  header.addEventListener('click', (e) => {

    if(e.target.closest('.js-catalog')) {
      setTimeout(() => {
        catalogButton.classList.add('menu__link--no-event');
        catalogIsOpen = true;
        header.classList.add('header--catalog-open');
        catalogButton.classList.add('menu__link--active');
        lockPadding();
        main.classList.add('main--mask');
        document.body.classList.add('disable-scroll');
      }, 100);
    }

    if((e.relatedTarget === null)) {
      catalogIsOpen = false;
    } else if(e.relatedTarget.closest('.js-catalog')) {
      catalogIsOpen = false;
    }

  })

  if(catalogMenu && catalogButton) {
    catalogMenu.addEventListener('click', (e) => {
      if(e.target.closest('.catalog-menu__close')) {
        catalogButton.classList.remove('menu__link--no-event');
        catalogMenu.classList.add('visually-hidden');
        header.classList.remove('header--catalog-open');
        unlockPadding();
        main.classList.remove('main--mask');
        document.body.classList.remove('disable-scroll');
      }
    })
  }

  if(catalogMenu && catalogButton) {
    catalogButton.addEventListener('click', (e) => {
      e.preventDefault();
      catalogButton.classList.remove('menu__link--no-event');
      catalogMenu.classList.add('visually-hidden');
      header.classList.remove('header--catalog-open');
      unlockPadding();
      main.classList.remove('main--mask');
      document.body.classList.remove('disable-scroll');
    })
  }

  const config = {
    attributes: true
  };

  const callback = function(mutationsList, catalogIsOpen) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        if(header.classList.contains('header--catalog-open')) {
          catalogMenu.classList.remove('visually-hidden');
        } else {
        }
      }
    }
  }

  const observer = new MutationObserver(callback);
  observer.observe(header, config);

  function lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';

    if(fixBlocks) {
      fixBlocks.forEach((el) => {
        el.style.paddingRight = paddingOffset;
      });
    }

    document.body.style.paddingRight = paddingOffset;
  }

  function unlockPadding() {
    if(fixBlocks) {
      fixBlocks.forEach((el) => {
        el.style.paddingRight = '0px';
      });
    }

    document.body.style.paddingRight = '0px';
  }
}
