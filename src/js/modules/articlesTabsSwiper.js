import Swiper from 'swiper/swiper-bundle';
import { Navigation, FreeMode, Controller  } from 'swiper/swiper-element-bundle';

export default () => {
  const articlesTabs = document.querySelector('.js-articles-tabs');

  if(!articlesTabs) return;

  const tabSwiper = new Swiper(articlesTabs, {
    slidesPerView: 'auto',
    spaceBetween: 29,
  })
}
