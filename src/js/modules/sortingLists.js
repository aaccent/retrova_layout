export default () => {
  const sortingPanels = document.querySelectorAll('.sorting:not(.sorting--about)');

  if(sortingPanels.length < 1) return;

  Array.from(sortingPanels).forEach(sortingPanel => {
    sortingPanel.addEventListener('click', (e) => {
      if(e.target.closest('.sorting__button')) {
        let list = sortingPanel.querySelector('.sorting__list');
        let buttons = sortingPanel.querySelectorAll('.sorting__item > button');

        list.classList.toggle('sorting__list--open');

        buttons.forEach( btn => {
          btn.addEventListener('click', () => {
            buttons.forEach( b => {
              b.classList.remove('_active');
            })

            btn.classList.add('_active');

            setTimeout(() => {
              list.classList.remove('sorting__list--open');
            }, 300);
          })
        })
      }
    })
  })

  // let parent = document.querySelector('.sticky').parentElement;

  // while (parent) {
  //   const hasOverflow = getComputedStyle(parent).overflow;

  //   if (hasOverflow !== 'visible') {
  //     console.log(hasOverflow, parent);
  //   }

  //   parent = parent.parentElement;
  // }
}
