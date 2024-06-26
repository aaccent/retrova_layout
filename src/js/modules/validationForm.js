export function validationPersonalDataForm() {
  const forms = document.querySelectorAll('.account-form');
  const popup = document.querySelector('.js-success-save');

  if(forms.length < 1) return;

  Array.from(forms).forEach( form => {
    let submitBtn = form.querySelector('.js-btn-submit');
    let processedInputs = form.querySelectorAll('.js-processed-input');
    let userData = {};

    if(processedInputs.length > 0) {
      Array.from(processedInputs).forEach( i => {
        i.querySelector('.input-box__input').addEventListener('change', (e) => {
          let key = e.target.name;
          let value = e.target.value;

          userData[key] = value;
        })
      })
    }


    if(submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let validateBool = true;
        let inputWrappers = form.querySelectorAll("[data-required]")

        Array.from(inputWrappers).forEach( inputWrapper => {
          let input = inputWrapper.querySelector('.input-box__input');

          if(!input.value) {
            input.parentElement.classList.add('_invalid');
            setTimeout(() => {
              input.parentElement.classList.remove('_invalid');
            }, 2000);
            validateBool = false;
          } else {
            validateBool = true;
          }
        })



        if(validateBool) {
          if(popup) {
            popup.classList.add('is-visible');

            setTimeout(() => {
              popup.classList.remove('is-visible');
            }, 3000);
          }

          form.querySelector('.account-form__delivery').classList.add('account-form__delivery--filled');
          window.scrollTo(0,0)

          setTimeout(() => {
            // form.submit();
          }, 1000);
        }
      })
    }
  })
}

export function validationDataForm() {
  const forms = document.querySelectorAll('.js-form-validate');

  if(forms.length < 1) return;

  Array.from(forms).forEach(form => {
    form.addEventListener('invalid', (function(){
      return function(e) {
        e.preventDefault();
      };
    })(), true);

    form.onsubmit = firstClickHandler;

    function firstClickHandler(e) {
      e.preventDefault();

      let validateBool = false;
      let reqInputs = e.target.querySelectorAll('input[required]');

      if(Array.from(reqInputs).find(item => item.validity.tooShort) || Array.from(reqInputs).find(item => item.validity.valueMissing)) {
        return;
      } else {
        validateBool = true;
      }

      if(validateBool) {
        setTimeout(() => {
          if(form.classList.contains('js-form-validate-certif')) {
            openPopup('popup-certificate-success');
          }else if(form.classList.contains('js-form-validate-partnership')) {
            openPopup('popup-partnership-success');
          } else {
            return;
          }
        }, 500);

        setTimeout(() => {
          form.submit();
        }, 4000);
      }
    }

    function openPopup(path) {
      let btn = document.createElement('button');
      btn.classList.add('vissualy-hidden');
      btn.dataset.path = path;
      document.body.appendChild(btn);
      btn.click();
    }
  })
}

export function validationCertActivation() {
  const form = document.querySelector('.js-cert-activation-validate');

  if(!form) return;

  let accountCertificatesBody = document.querySelector('.account-certificates__body');

  form.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
  })(), true);

  form.onsubmit = firstClickHandler;


  function firstClickHandler(e) {
    e.preventDefault();

    let validateBool = false;
    let reqInputs = e.target.querySelectorAll('input[required]');

    if(Array.from(reqInputs).find(item => item.validity.tooShort) || Array.from(reqInputs).find(item => item.validity.valueMissing)) {
      return;
    } else {
      validateBool = true;
    }

    if(validateBool) {
      accountCertificatesBody.classList.remove('account-certificates__body--no-certificates');
    }
  }
}
