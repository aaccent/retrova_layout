export default () => {
  const seoExpandBtn = document.querySelectorAll('.seo-section__button');

  if(seoExpandBtn.length < 1) return;

  Array.from(seoExpandBtn).forEach( btn => {
    btn.onclick = () => {
      btn.classList.toggle('expand-btn--active');

      let seoText = btn.closest('.seo-section__body').querySelector('.seo-section__text');

      if(seoText) {
        seoText.classList.toggle('seo-section__text--opened');
      }
    }
  })
}
