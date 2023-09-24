import Swiper from 'swiper/swiper-bundle';
import { Navigation, FreeMode } from 'swiper/swiper-element-bundle';


export default () => {
  const catalogMenuSwiper = document.querySelector('.js-catalog-menu-swiper');

  if(!catalogMenuSwiper) return;

  const catalogSwiperSlider = new Swiper(catalogMenuSwiper, {
    slidesPerView: 1,
    allowTouchMove: false,

    on: {
      init: function () {
        const nextHandlers = document.querySelectorAll('.js-catalog-next-slide');
        const prevHandlers = document.querySelectorAll('.js-catalog-prev-slide');

        const slides = document.querySelectorAll('.mobile-menu__swiper-slide');
        const navHandlers = document.querySelectorAll('.js-catalog-nav-slide');


        Array.from(nextHandlers).forEach( nextHandler => {
          nextHandler.addEventListener('click', () => {
            this.slideNext(1);
          })
        })

        Array.from(prevHandlers).forEach( prevHandler => {
          prevHandler.addEventListener('click', () => {
            this.slideTo(0, 1)
          })
        })

        Array.from(navHandlers).forEach(navBtn => {
          navBtn.addEventListener('click', () => {
            let navParam = navBtn.dataset.nav;
            let findedSlide = Array.from(slides).find( item => item.dataset.slide === navParam);
            let index = Array.from(slides).indexOf(findedSlide);

            this.slideTo(index, 1)
            console.log();
          })
        });
      },
    },
  })
}
