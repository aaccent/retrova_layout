export default () => {
  const inputs = document.querySelectorAll('input[name="sorting-radio"], input[name="sorting-orders"]');

  inputs.forEach(i => {
    i.addEventListener('input', () => {
      if(i.checked) {
        let text = i.closest('.radio-input').querySelector('i').textContent;

        if(document.querySelector('.js-sort-value')) {
          document.querySelector('.js-sort-value').textContent = '';
          document.querySelector('.js-sort-value').textContent = text;
        }

        document.querySelector('.js-close-sorting-modal').click();
      }
    })
  })
}
