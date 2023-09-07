// import Swiper JS
import Swiper from 'swiper/swiper-bundle';
import { Navigation } from 'swiper/swiper-element-bundle';

export default () => {
  const slidersPopular = document.querySelectorAll('.js-popular-swiper');
  const slidersSeasons = document.querySelectorAll('.js-seasons-swiper');


  if(slidersPopular.length >= 1) {
    slidersPopular.forEach( slider => {
      const swiper = new Swiper(slider.querySelector('.swiper'), {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 3,
        speed: 1,

        navigation: {
          nextEl: slider.querySelector('.slider__button--next'),
          prevEl: slider.querySelector('.slider__button--prev'),
          disabledClass: 'swiper-button-disabled'
        },
      })
    })
  }

  if(slidersSeasons.length >= 1) {
    slidersSeasons.forEach( slider => {
      const swiperSeason = new Swiper(slider.querySelector('.swiper'), {
        slidesPerView: 1,

        navigation: {
          nextEl: slider.querySelector('.seasons-look__button--next'),
          prevEl: slider.querySelector('.seasons-look__button--prev'),
          disabledClass: 'swiper-button-disabled'
        },
      })
    })
  }
}
