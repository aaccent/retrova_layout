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


export function validationDeliveryDataForm() {
  const form = document.querySelector('.js-delivery-form');

  if(!form) return;

  let submitBtn = form.querySelector('.js-btn-submit');

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
        document.querySelector('.modal-delivery__hidden-btn').click();

        setTimeout(() => {
          // form.submit();
        }, 1000);
      }
    })
  }
}

export function validationPartnerShipForm() {
  const form = document.querySelector('.js-partnership-form');

  if(!form) return;

  let submitBtn = form.querySelector('.js-btn-submit');

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
        setTimeout(() => {
          form.submit();
        }, 1000);
      }
    })
  }

}

export function validationCertificateDataForm() {
  const form = document.querySelector('.js-certificate-form');

  if(!form) return;

  form.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
  })(), true);

  form.onsubmit = firstClickHandler;

  function firstClickHandler(e) {
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
        let btn = document.createElement("button");
        btn.classList.add('visually-hidden');
        btn.dataset.path = 'popup-certificate-success';
        document.body.appendChild(btn);
        btn.click();
        btn.remove;

        window.scrollTo(0,0)

        setTimeout(() => {
          console.log('submit');
          form.submit();
        }, 1000);
      }
  }
}