export default () => {
  const questionnairesSection = document.querySelector('.js-questionnaires');

  if(!questionnairesSection) return;

  let steps = document.querySelectorAll('.questionnaires__step');
  let target = document.querySelector('.questionnaires__body');
  let closeStepBtns = document.querySelectorAll('.js-close-step');

  closeStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      steps[1].classList.add('questionnaires__step--done');
      steps[2].classList.add('questionnaires__step--active');
      document.querySelector('.js-map-search-list').classList.remove('open');
    })
  })

  if(document.querySelector('.non-authenticated-user .js-questionnaires')) {
    steps[0].classList.add('questionnaires__step--active');
  }


  Array.from(steps[0].querySelectorAll("[data-required]")).forEach( input => {
    input.addEventListener('change', () => {
      let validateBool = true;

      Array.from(steps[0].querySelectorAll("[data-required] > input")).forEach(i => {
        if(i.value) {
          return;
        } else {
          validateBool = false;
        }
      })

      if(validateBool && validMail(questionnairesSection.querySelector('[name="client-email"]').value) && validPhone(questionnairesSection.querySelector('[name="client-phone"]').value)) {
        setTimeout(() => {
          steps[0].classList.add('questionnaires__step--done');

          questionnairesSection.querySelector('[name="ready-name"]').value = questionnairesSection.querySelector('[name="client-name"]').value + ' ' + questionnairesSection.querySelector('[name="client-surname"]').value + ' ' + questionnairesSection.querySelector('[name="client-patronymic"]').value;
          questionnairesSection.querySelector('[name="ready-phone"]').value = questionnairesSection.querySelector('[name="client-phone"]').value;
          questionnairesSection.querySelector('[name="ready-email"]').value = questionnairesSection.querySelector('[name="client-email"]').value;

          steps[1].classList.add('questionnaires__step--active');
        }, 500);
      } else {

      }
    })
  })

  let deliveryBtns = document.querySelectorAll('[data-button]');

  Array.from(deliveryBtns).forEach(deliveryBtn => {
    deliveryBtn.addEventListener('click', () => {

      Array.from(deliveryBtns).forEach( btn => {
        btn.classList.remove("shipping-btn--active");
      })

      deliveryBtn.classList.add("shipping-btn--active");
    })
  })

  let changeFormBtns = document.querySelectorAll('.js-edit-form');

  if(changeFormBtns.length > 0) {
    Array.from(changeFormBtns).forEach( changeFormBtn => {
      changeFormBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if(changeFormBtn.classList.contains('js-edit-form-first-step')) {
          steps[0].classList.remove('questionnaires__step--done');
          steps[0].classList.add('questionnaires__step--active');

          questionnairesSection.querySelector('[name="ready-name"]').value = '';
          questionnairesSection.querySelector('[name="ready-phone"]').value = '';
          questionnairesSection.querySelector('[name="ready-email"]').value = '';

        } else if(changeFormBtn.classList.contains('js-edit-form-second-step')) {
          steps[1].classList.remove('questionnaires__step--done');
          steps[1].classList.add('questionnaires__step--active');
        } else if(changeFormBtn.classList.contains('js-edit-form-third-step')) {
          steps[2].classList.remove('questionnaires__step--done');
          steps[2].classList.add('questionnaires__step--active');
        } else {
          return;
        }
      })
    })
  }

  let paymentMethods = document.querySelectorAll('.payment-method__item input[type="radio"]');

  if(paymentMethods.length > 0) {
    Array.from(paymentMethods).forEach( item => {
      item.addEventListener('input', () => {
        let id = item.id;

        Array.from(document.querySelectorAll('.ready-payment__item')).forEach(item => {
          item.classList.remove('ready-payment__item--active');

          if(item.dataset.payments === id) {
            item.classList.add('ready-payment__item--active');

            if(item.classList.contains('ready-payment__item--parts')) {
              document.querySelector('.payment-method__link').classList.add('payment-method__link--visible');
            } else {
              document.querySelector('.payment-method__link').classList.remove('payment-method__link--visible');
            }
          }
        })

        steps[2].classList.add('questionnaires__step--done');
        target.classList.add('questionnaires__body--full')
      })
    })
  }


  if(target) {
    // Конфигурация observer (за какими изменениями наблюдать)
    const config = {
      attributes: true
    };

    // Колбэк-функция при срабатывании мутации
    const callback = function(mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          if(!document.querySelector('.order-info').classList.contains('order-info--active')) {
            document.querySelector('.order-info').classList.add('order-info--active');
          } else {
            return;
          }

          observer.disconnect();
        }
      }
    };

    // Создаём экземпляр наблюдателя с указанной функцией колбэка
    const observer = new MutationObserver(callback);

    // Начинаем наблюдение за настроенными изменениями целевого элемента
    observer.observe(target, config);
  }

  function validMail(mail) {
    return /^\S+@\S+\.\S+$/.test(mail);
  }

  function validPhone(phone) {
    return /^(\+7|7|8)?[\s\-]?\(?[123456789][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(phone);
  }
}
