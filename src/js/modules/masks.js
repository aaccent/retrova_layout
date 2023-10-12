import IMask from 'imask';

export default function inputMasks() {
  const phoneInputs = document.querySelectorAll('input[name="client-phone"], input[name="partner-phone"], input[name="user-phone"], input[name="request-phone"]');
  const nameInputs = document.querySelectorAll('input[name="client-name"], input[name="user-name"], input[name="user-surname"], input[name="client-surname"], input[name="partner-name"], input[name="client-patronymic"]');
  const emailInputs = document.querySelectorAll('input[name="client-email"], input[name="email"],  input[name="partner-email"], input[name="user-email"], input[name="partner-email"]');
  const birthdayInputs = document.querySelectorAll('input[name="user-birthday"]');


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

  if(birthdayInputs.length) {
    birthdayInputs.forEach(birthdayInput => {
      const birthdayMask = IMask(birthdayInput, {
        mask: '00.00.0000'
      });
    })
  }
}
