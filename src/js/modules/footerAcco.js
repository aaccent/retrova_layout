export default () => {
  const btns = document.querySelectorAll('.footer-menu__button:not(.mobile-menu__link, .js-catalog-next-slide)');

  if(btns.length > 0) {
    Array.from(btns).forEach( btn => {
      btn.addEventListener('click', () => {
        if(btn.classList.contains('footer-menu__button--opened')) {
          Array.from(btns).forEach( b => {
            b.classList.remove('footer-menu__button--opened');
          })
        } else {
          Array.from(btns).forEach( b => {
            b.classList.remove('footer-menu__button--opened');
          })

          btn.classList.add('footer-menu__button--opened');
        }
      })
    })
  }
}
