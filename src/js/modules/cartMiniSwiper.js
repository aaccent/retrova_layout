import Swiper from 'swiper/swiper-bundle';
import { Navigation } from 'swiper/swiper-element-bundle';

export default () => {
  const miniSwiperWrappers = document.querySelectorAll('.js-mini-swiper');

  if(miniSwiperWrappers.length < 1) return;

  miniSwiperWrappers.forEach(item => {
    let miniSwiper = new Swiper(item.querySelector('.swiper'), {
      slidesPerView: 3,
      spaceBetween: 16,

      navigation: {
        nextEl: item.querySelector('.mini-slider__button--next'),
        prevEl: item.querySelector('.mini-slider__button--prev'),
      },

    })
  })
}
