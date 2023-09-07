export default () => {
  const header = document.querySelector('.header');
  const catalogMenu = document.querySelector('.catalog-menu');

  if(!header) return;

  let catalogIsOpen = false;

  header.addEventListener('mouseover', (e) => {

    if(e.target.closest('.js-catalog')) {
      catalogIsOpen = true;
      // console.log(catalogIsOpen);
      header.classList.add('header--catalog-open');
    }

    if((e.relatedTarget === null)) {
      catalogIsOpen = false;
      // console.log(catalogIsOpen);
      header.classList.remove('header--catalog-open');
    } else if(e.relatedTarget.closest('.js-catalog')) {
      catalogIsOpen = false;
      // console.log(catalogIsOpen);
      header.classList.remove('header--catalog-open');
    }

  })

  if(catalogMenu) {
    catalogMenu.addEventListener('click', (e) => {
      if(e.target.closest('.catalog-menu__close')) {
        catalogMenu.classList.add('visually-hidden');
      }
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
}
