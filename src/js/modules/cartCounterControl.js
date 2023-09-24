export default () => {
  const counterPanels = document.querySelectorAll('.counter-panel');

  if(counterPanels.length > 0) {
    Array.from(counterPanels).forEach( counterPanel => {
      counterPanel.addEventListener('click', (e) => {
        let input = counterPanel.querySelector('.counter-panel__input');

        if(e.target.closest('.counter-panel__button--minus')) {
          if(input.value > 1) {
            input.value = Number(input.value) - 1;
          }
        }

        if(e.target.closest('.counter-panel__button--plus')) {
          if(input.value < 10) {
            input.value = Number(input.value) + 1;
          }
        }
      })
    })
  }
}
