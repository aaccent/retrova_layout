export default () => {
  const promocodes = Array.from(document.querySelectorAll('.js-promocode'));

  if(promocodes.length) {
    promocodes.forEach(promocode => {
      promocode.querySelector('.promocode__button').addEventListener('click', () => {
        if( promocode.querySelector('.promocode__input').value &&
        (promocode.querySelector('.promocode__input').value).toLowerCase() === 'promotest') {
          promocode.classList.add('promocode--valid');

          setTimeout(() => {
            promocode.classList.remove('promocode--valid');
          }, 2000);
        } else {
          promocode.classList.add('promocode--not-valid');

          setTimeout(() => {
            promocode.classList.remove('promocode--not-valid');
          }, 2000);
        }
      })
    })
  }
}
