import IMask from 'imask';
import $ from "jquery";
import 'parsleyjs';

export function inputMasks() {
  const phoneInputs = document.querySelectorAll('.js-phone-mask, input[name="partner-phone"], input[name="user-phone"], input[name="request-phone"]');
  const nameInputs = document.querySelectorAll('input[name="user-name"], input[name="user-surname"], input[name="client-surname"], input[name="partner-name"], input[name="client-patronymic"]');
  const emailInputs = document.querySelectorAll('.js-email-mask, input[name="email"],  input[name="partner-email"], input[name="user-email"], input[name="partner-email"]');
  const birthdayInputs = document.querySelectorAll('input[name="user-birthday"]');


  if(phoneInputs.length) {
    phoneInputs.forEach(phoneInput => {
      const phoneMask = IMask(phoneInput, {
        mask: '+{7}(000)000-00-00'
      });

      phoneInput.oninput = () => {

      }

      phoneInput.oninvalid = () => {

      };
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

export function validation() {
  Parsley.addMessages('ru', {
    defaultMessage: 'Некорректное значение.',
    type: {
        email: 'В данном поле может быть только E-mail',
        url: 'Адрес сайта введен неверно.',
        number: 'Введите число.',
        integer: 'Введите целое число.',
        digits: 'Введите только цифры.',
        alphanum: 'Введите буквенно-цифровое значение.',
    },
    notblank: 'Это поле должно быть заполнено.',
    required: 'Обязательное поле',
    pattern: 'Это значение некорректно.',
    min: 'Это значение должно быть не менее чем %s.',
    max: 'Это значение должно быть не более чем %s.',
    range: 'Это значение должно быть от %s до %s.',
    maxlength: 'Это значение должно содержать не более %s символов.',
    length: 'Это значение должно содержать от %s до %s символов.',
    mincheck: 'Выберите не менее %s значений.',
    maxcheck: 'Выберите не более %s значений.',
    check: 'Выберите от %s до %s значений.',
    equalto: 'Это значение должно совпадать.',
});

  Parsley.setLocale('ru');

  window.Parsley.addValidator('phone', {
    requirementType: 'string',
    validateString: function (value) {
      if (value.trim() === '') return true;
      return /^(\+7|7|8)?[\s\-]?\(?[123456789][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(value);
    },
    messages: {
      en: 'Number field +7(XXX)XXX-XX-XX',
      ru: 'Формат +7(XXX)XXX-XX-XX',
    },
  });

  window.Parsley.addValidator('email', {
    requirementType: 'string',
    validateString: function (value) {
      if (value.trim() === '') return true;
      return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    },
    messages: {
      en: 'Email field',
      ru: 'Введите корректный email',
    },
  });

  const formsToValidate = Array.from(document.querySelectorAll('form[data-need-validation]'));

  formsToValidate.forEach((form) => {
    $(form).parsley();
  });
}
