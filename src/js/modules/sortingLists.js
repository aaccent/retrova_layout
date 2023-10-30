export default () => {
  const sortingPanels = document.querySelectorAll('.sorting:not(.sorting--about)');

  if(sortingPanels.length < 1) return;

  Array.from(sortingPanels).forEach(sortingPanel => {
    sortingPanel.addEventListener('click', (e) => {
      if(e.target.closest('.sorting__button--desktop')) {
        let openButton = e.target.closest('.sorting__button--desktop');
        let list = sortingPanel.querySelector('.sorting__list');
        let buttons = sortingPanel.querySelectorAll('.sorting__item > button');

        openButton.classList.toggle('sorting__button--opened');
        list.classList.toggle('sorting__list--open');

        buttons.forEach( btn => {
          btn.addEventListener('click', () => {
            buttons.forEach( b => {
              b.classList.remove('_active');
            })

            btn.classList.add('_active');

            setTimeout(() => {
              list.classList.remove('sorting__list--open');
              openButton.classList.remove('sorting__button--opened');
            }, 100);
          })
        })
      }
    })
  })
}
