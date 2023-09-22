export default () => {
  const labels = document.querySelectorAll('[data-color]');
  const valueView = document.getElementById("color-value-span");

  if(!labels.length && !valueView) return;

  labels.forEach(item => {
    let input = item.querySelector('.color-checkbox__input');

    input.addEventListener('input', () => {
      if(input.checked === true) {
        valueView.textContent = '';
        valueView.textContent = input.parentElement.dataset.color;
      }
    })
  })
}
