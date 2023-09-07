import Swiper from 'swiper/swiper-bundle';
import { Navigation } from 'swiper/swiper-element-bundle';

export default () => {
  if (Array.from(document.querySelectorAll('.js-looks-swiper')).length >= 1) {

    Array.from(document.querySelectorAll('.js-looks-swiper')).forEach( item => {
      const lookSwiper = new Swiper(item.querySelector('.swiper'), {
        slidesPerView: 4,
        spaceBetween: 16,

        navigation: {
          nextEl: item.querySelector('.slider__button--next'),
          prevEl: item.querySelector('.slider__button--prev'),
          disabledClass: 'swiper-button-disabled'
        },
      })
    })
  }
}
