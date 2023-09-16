import IMask from 'imask';

export default function inputMasks() {
  const phoneInputs = document.querySelectorAll('input[name="client-phone"]');
  const nameInputs = document.querySelectorAll('input[name="client-name"], input[name="client-surname"], input[name="client-patronymic"]');
  const emailInputs = document.querySelectorAll('input[name="client-email"], input[name="email"]');


  if(phoneInputs.length) {
    phoneInputs.forEach(phoneInput => {
      const phoneMask = IMask(phoneInput, {
        mask: '+{7}(000)000-00-00'
      });
    })
  }

  if(nameInputs.length) {
    nameInputs.forEach(nameInput => {
      const nameMask = IMask(nameInput, {
        mask: /^[А-Яа-яЁёA-Za-z ]+$/,
      });
    })
  }

  if(emailInputs.length) {
    emailInputs.forEach(emailInput => {
      const emailMask = IMask(emailInput, {
        mask: /^\S*@?\S*$/,
      });
    })
  }
}
