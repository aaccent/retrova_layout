export default () => {
  const inputs = document.querySelectorAll('.input-box');

  if(inputs.length < 1) return;

  Array.from(inputs).forEach(input => {
    input.addEventListener('click', (e) => {
      if(e.target.closest('.input-box__clear')) {
        let i = input.querySelector('.input-box__input');
        i.value = '';

        if(i.hasAttribute('required')) {
          input.classList.add('_invalid');

          setTimeout(() => {
            input.classList.remove('_invalid');
          }, 2000);

          i.addEventListener('change', (e) => {
            e.target.parentElement.classList.remove('_invalid');
          }, { once: true })
        }
      } else {
        return;
      }
    })
  })
}
