import IMask from 'imask';

export default function inputMasks() {
  const phoneInputs = document.querySelectorAll('.js-phone-mask, input[name="client-phone"], input[name="partner-phone"], input[name="user-phone"], input[name="request-phone"]');
  const nameInputs = document.querySelectorAll('input[name="client-name"], input[name="user-name"], input[name="user-surname"], input[name="client-surname"], input[name="partner-name"], input[name="client-patronymic"]');
  const emailInputs = document.querySelectorAll('input[name="client-email"], input[name="email"],  input[name="partner-email"], input[name="user-email"], input[name="partner-email"]');
  const birthdayInputs = document.querySelectorAll('input[name="user-birthday"]');

  if(phoneInputs.length) {
    phoneInputs.forEach(phoneInput => {
      const phoneMask = IMask(phoneInput, {
        mask: '+{7}(000)000-00-00'
      });

      phoneInput.oninvalid = (e) => {
        console.log('invalid');
        InvalidMsg(e.target);
      }
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

  function InvalidMsg(textbox) {
    console.log(textbox.value.length);
    
    let errorText = textbox.parentElement.querySelector('.input-box__error').innerText;
    if(!textbox.validity.valid) {
      if(textbox.value.length < 16 && textbox.value.length > 0) {
        errorText = '';
        errorText = 'Введите номер полностью';
      } else if(textbox.value.length < 1) {
        errorText = '';
        errorText = 'Укажите телефон';
      }

      textbox.parentElement.classList.add('_invalid');

      setTimeout(() => {
        textbox.parentElement.classList.remove('_invalid');
      }, 2000);
    } else {
      
    }

    return true;
  }
}
