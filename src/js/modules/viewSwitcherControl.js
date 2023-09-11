export default () => {
  const viewSwitcher = document.querySelector('.view-switcher');

  if(!viewSwitcher) return;

  let viewSwitcherInput = document.querySelectorAll('.view-switcher__input');
  let catalogList = document.querySelector('.catalog-layout__list');

  Array.from(viewSwitcherInput).forEach( input => {
    input.addEventListener('input', () => {
      catalogList.classList.remove('catalog-layout__list--wrap-three');
      catalogList.classList.remove('catalog-layout__list--wrap-four');

      catalogList.classList.add(`${input.value}`);
    })
  })
}
