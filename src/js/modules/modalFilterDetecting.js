export default () => {
  const modalFilter = document.querySelector('.js-modal-filters');
  const filterPanel = document.querySelector('.catalog-layout__filters');

  if(!modalFilter || !filterPanel) return;

  let checkboxes = modalFilter.querySelectorAll('input[type="checkbox"]');
  let checkedCheckboxesCounter = [];
  let button = modalFilter.querySelector('.js-filters-submit');
  let counter = 0;

  let filter = filterPanel.querySelector('.filters');

  if(button) {
    button.addEventListener('click', () => {
      Array.from(checkboxes).forEach( checkbox => {
        if(checkbox.checked) {
          if(!checkedCheckboxesCounter.find(item => item === checkbox)) {
            checkedCheckboxesCounter.push(checkbox);
          }
        }
      })

      counter = parseInt(checkedCheckboxesCounter.length);

      if(counter > 0) {
        filter.classList.add('filters--detected');
        filter.querySelector('.filters__counter').textContent = counter;
      }
    })

    checkedCheckboxesCounter = [];
  }
}
