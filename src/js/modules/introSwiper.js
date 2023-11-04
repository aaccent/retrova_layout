import Swiper from 'swiper/swiper-bundle';
import { Navigation, Pagination, Autoplay } from 'swiper/swiper-element-bundle';

export default () => {
  const intros = document.querySelectorAll('.js-intro-swiper');

  if(intros.length < 1) return;

  Array.from(intros).forEach( intro => {
    const introSwiper = new Swiper(intro, {
      speed: 1000,

      navigation: {
        nextEl: '.intro-swiper-btn-next',
        prevEl: '.intro-swiper-btn-prev',
      },

      autoplay: {
        enabled: false,
        delay: 5000
      },

      breakpoints: {
        768: {
          direction: 'vertical',
          loop: true,

          autoplay: {
            enabled: true
          },
        }
      },

      on: {
        init: function () {
          const totals = document.querySelectorAll('.progressbar__total');

          Array.from(totals).forEach( item => {
            item.textContent = this.slides.length;
          })

          renderLine(this, document.querySelectorAll('.progressbar__value'));
        },

        slideChange: function () {
          renderLine(this, document.querySelectorAll('.progressbar__value'));
        }
      },
    })
  })

  function renderLine(sw, arr) {
    Array.from(arr).forEach( item => {
      item.textContent = sw.activeIndex + 1;
      item.parentElement.dataset.index = sw.activeIndex + 1;

      let t = sw.slides.length;
      let i = sw.activeIndex + 1;

      let p =  ( i / (t / 100) ).toFixed(1);
      item.parentElement.style.setProperty('--divider-width', (p + '%'));
    })
  }
}
