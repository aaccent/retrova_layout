export default () => {
  const inputs = document.querySelectorAll('.input-box');

  if(inputs.length < 1) return;

  Array.from(inputs).forEach(input => {
    input.addEventListener('click', (e) => {
      if(e.target.closest('.input-box__clear')) {
        input.querySelector('.input-box__input').value = '';
      } else {
        return;
      }
    } )
  })
}
