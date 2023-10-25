export default () => {
  const form = document.querySelector('.js-code-validate');
  const countdown = document.querySelector('._countdown-number');

  if(form) {
    let pin = document.querySelector('.pin');
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

    form.addEventListener('invalid', (function(){
      return function(e) {
        e.preventDefault();
        pin.classList.add('pin--invalid');

        setTimeout(() => {
          pin.classList.remove('pin--invalid');
        }, 30000);
      };
    })(), true);

    form.onsubmit = () => {

    }
  };

  if(countdown) {
    let number = Number(countdown.textContent);
    let requestBtn = document.querySelector('.js-request-code');

    if(requestBtn) {
      requestBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let phoneWrapper = e.target.closest('form').querySelector('div[data-phone]');
        let input = phoneWrapper.querySelector('input[required]');

        if(validPhone(input.value)) {
          document.getElementById('close-login-modal').click();
          openNextModal();

          let downloadTimer = setInterval( () => {
            number--;
            countdown.textContent = number;

            if(number <= 0) {
              clearInterval(downloadTimer);
              countdown.closest('.modal-certificate__countdown').classList.add('modal-certificate__countdown--active');
            };

          }, 1000);
        } else {
          phoneWrapper.classList.add('_invalid');

          setTimeout(() => {
            phoneWrapper.classList.remove('_invalid');
          }, 2000);
          return;
        }
      })
    }
  }

  function openNextModal() {
    let btn = document.createElement('button');
    btn.classList.add('vissualy-hidden');
    btn.dataset.path = 'modal-code';
    document.body.appendChild(btn);
    btn.click();
  }

  function validPhone(phone) {
    return /^(\+7|7|8)?[\s\-]?\(?[123456789][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(phone);
  }
}
