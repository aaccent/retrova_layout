export default () => {
  let upBtns = document.querySelectorAll('.js-scroll-up-button');

  if(upBtns.length) {
    Array.from(upBtns).forEach(upBtn => {
      upBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
    })
  }
}
