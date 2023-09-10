export default () => {
  const body = document.body;
  const header = document.querySelector('.header');
  const burgerBtn = document.querySelector('.hamburger-btn');

  if(!burgerBtn) return;

  burgerBtn.addEventListener('click', () => {
    body.classList.toggle('menu-is-open');
    burgerBtn.classList.toggle('hamburger-btn--open');
  })
}
