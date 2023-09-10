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
        delay: 3000
      },

      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
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
        },

        slideChange: function () {
          const values = document.querySelectorAll('.progressbar__value');

          Array.from(values).forEach( item => {
            item.textContent = this.activeIndex + 1;
          })
        }
      },
    })
  })
}
