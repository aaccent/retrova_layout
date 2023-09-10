// import Swiper JS
import Swiper from 'swiper/swiper-bundle';
import { Navigation, FreeMode } from 'swiper/swiper-element-bundle';

export default () => {
  const slidersPopular = document.querySelectorAll('.js-popular-swiper');
  const slidersSeasons = document.querySelectorAll('.js-seasons-swiper');


  if(slidersPopular.length >= 1) {
    slidersPopular.forEach( slider => {
      const swiperPopular = new Swiper(slider.querySelector('.swiper'), {
        slidesPerView: 1.25,
        spaceBetween: 12,

        navigation: {
          nextEl: slider.querySelector('.slider__button--next'),
          prevEl: slider.querySelector('.slider__button--prev'),
          disabledClass: 'swiper-button-disabled'
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 3,
            speed: 1
          }
        }
      })
    })
  }

  if(slidersSeasons.length >= 1) {
    slidersSeasons.forEach( slider => {
      const swiperSeason = new Swiper(slider.querySelector('.swiper'), {
        slidesPerView: 'auto',
        spaceBetween: 12,
        centeredSlides: true,

        navigation: {
          nextEl: slider.querySelector('.seasons-look__button--next'),
          prevEl: slider.querySelector('.seasons-look__button--prev'),
          disabledClass: 'swiper-button-disabled'
        },

        breakpoints: {

          1280: {
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      })
    })
  }
}
