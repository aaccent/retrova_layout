export default function validationForm() {
  const forms = document.querySelectorAll('form');

  if(forms) {
    Array.from(forms).forEach( form => {
      form.querySelector('.js-btn-submit')?.addEventListener('click', () => {
        let validateBool = true;

        Array.from(form.querySelectorAll("[data-required]")).forEach( input => {
          input.classList.remove('input-block__input--invalid');
          if(!input.value) {
            input.classList.add('input-block__input--invalid');
            input.placeholder = input.dataset.required;
            validateBool = false;
          } else {
            validateBool = true;
          }
        })

        if(validateBool) {
          // form.closest('.modal').querySelector('.modal__close-button').click();
          // form.closest('.modal').querySelector('.modal__popup-button')?.click();
          setTimeout(() => {
            form.submit();
          }, 1000);
        }
      })

    })
  }
}
