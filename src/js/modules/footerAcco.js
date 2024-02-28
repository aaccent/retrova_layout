export default () => {
  const btns = document.querySelectorAll('.footer-menu__button:not(.mobile-menu__link, .js-catalog-next-slide)')

  btns.forEach(btn => {
    btn.addEventListener('click', () => btn.classList.toggle('footer-menu__button--opened'))
  })
}
