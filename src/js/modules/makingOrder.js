export default () => {
  const questionnairesSection = document.querySelector('.js-questionnaires');

  if(!questionnairesSection) return;

  const steps = document.querySelectorAll('.questionnaires__step');
  const readyInputs = document.querySelectorAll('.ready-inputs > .ready-inputs__input');

  let closeStepBtns = document.querySelectorAll('.js-close-step');

  closeStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      steps[1].classList.add('questionnaires__step--done');
      steps[2].classList.add('questionnaires__step--active');
    })
  })


  steps[0].classList.add('questionnaires__step--active');

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

  function validMail(mail) {
    return /^\S+@\S+\.\S+$/.test(mail);
  }

  function validPhone(phone) {
    return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone);
  }
}
