export default () => {
  const form = document.querySelector('.pin__list');
  const countdown = document.querySelector('._countdown-number');

  if(form) {
    let inputs = document.querySelectorAll('.pin__list > input');

    inputs.forEach((input, key) => {
      input.addEventListener('keyup', function () {
        if (input.value) {
          if (key === 3) {
            const userCode = [...inputs].map((input) => input.value).join('');
          } else {
            inputs[key + 1].focus();
          }
        }
      });
    });
  };

  if(countdown) {
    let number = Number(countdown.textContent);
    let requestBtn = document.querySelector('.js-request-code');

    if(requestBtn) {
      requestBtn.addEventListener('click', () => {
        let downloadTimer = setInterval( () => {
          number--;
          countdown.textContent = number;

          if(number <= 0) {
            clearInterval(downloadTimer);
            countdown.closest('.modal-certificate__countdown').classList.add('modal-certificate__countdown--active');
          };

        }, 1000);
      })
    }
  }

}
