export default () => {
  const questionnairesSection = document.querySelector('.js-questionnaires');

  if(!questionnairesSection) return;

  const steps = document.querySelectorAll('.questionnaires__step');
  const readyInputs = document.querySelectorAll('.ready-inputs > .ready-inputs__input');


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

      if(validateBool) {
        setTimeout(() => {
          steps[0].classList.add('questionnaires__step--done');

          questionnairesSection.querySelector('[name="ready-name"]').value = questionnairesSection.querySelector('[name="client-name"]').value;
          questionnairesSection.querySelector('[name="ready-phone"]').value = questionnairesSection.querySelector('[name="client-phone"]').value;
          questionnairesSection.querySelector('[name="ready-email"]').value = questionnairesSection.querySelector('[name="client-email"]').value;

          steps[1].classList.add('questionnaires__step--active');
        }, 500);
      }
    })
  })
}
