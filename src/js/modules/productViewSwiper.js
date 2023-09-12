import Swiper from 'swiper/swiper-bundle';
import { Navigation, Pagination } from 'swiper/swiper-element-bundle';

export default () => {
  const productView = document.querySelector('.js-product-view-swiper');

  if(!productView) return;

  let init = false;
  let productViewSwiper = new Swiper('.js-product-view-swiper-pseudo', {});

  function swiperMode() {
    let mobile = window.matchMedia('(min-width: 319px) and (max-width:  1199px)');
    let desktop = window.matchMedia('(min-width: 1200px)');

    if(mobile.matches) {
      if (!init) {
        init = true;
        productViewSwiper = new Swiper(productView, {
          wrapperClass: "product-view__list",
          slideClass: "product-view__item",

          pagination: {
            el: ".swiper-pagination",
            renderBullet: function (index, className) {
              return '<span class="' + className + '">'  + "</span>";
            },
          },
        })
      }
    } else if(desktop.matches) {
      productViewSwiper.destroy();
      init = false;
    }
  }


  window.addEventListener('load', function() {
    swiperMode();
  });

  window.addEventListener('resize', function() {
    swiperMode();
  });
}
