export default () => {
  const accountNotificationsBlocks  = document.querySelectorAll('.account-layout__notifications');

  if(accountNotificationsBlocks.length == false) return;


  Array.from(accountNotificationsBlocks).forEach( accountNotificationsBlock => {
    let switchInput = accountNotificationsBlock.querySelector('.switcher > input[type="checkbox"]');

    if(switchInput) {
      switchInput.addEventListener('input', () => {
        accountNotificationsBlock.classList.toggle('account-layout__notifications--active', switchInput.checked);
      })
    }
  })
}
