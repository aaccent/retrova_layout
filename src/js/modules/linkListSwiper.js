import Swiper from 'swiper/swiper-bundle';
import { Navigation, Pagination, Autoplay } from 'swiper/swiper-element-bundle';

export default () => {
  const linkListSlider = document.querySelector('.js-link-list-slider');

  if(!linkListSlider) return;

  const linkListSwiper = new Swiper(linkListSlider, {
    slidesPerView: 1,

    on: {
      init: function () {
        let linkForSlides = document.querySelectorAll('.js-collection-link');

        linkForSlides.forEach(link => {
          link.addEventListener('mouseover', (e) => {
            let index = Array.from(linkForSlides).indexOf(link);
            this.slideTo(index, 1)
          })
        })
      }
    },
  })
}
