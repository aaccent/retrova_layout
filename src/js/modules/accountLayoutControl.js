export default () => {
  const accountLayout = document.querySelector('.js-account-layout');

  if(!accountLayout) return;

  const accountBody = accountLayout.querySelector('.account-layout__body');
  const switchBody = accountLayout.querySelector('.js-switch-window');
  const switchBack = accountLayout.querySelector('.js-switch-back');

  onResizeFunction();

  accountBody.classList.remove('account-layout__body--block');

  window.addEventListener("resize", onResizeFunction);

  if(switchBody) {
    switchBody.addEventListener('click', () => {
      accountBody.classList.remove('account-layout__body--transform');
      accountBody.classList.add('account-layout__body--expand');
    })
  }

  if(switchBack) {
    switchBack.addEventListener('click', () => {
      accountBody.classList.add('account-layout__body--transform');
      accountBody.classList.remove('account-layout__body--expand');
    })
  }

  function onResizeFunction(e) {
    const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

    if(isDesktop) {
      accountBody.classList.remove('account-layout__body--transform');
    } else {
      accountBody.classList.add('account-layout__body--transform');
    }
  }
}
