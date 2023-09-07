import Swiper from 'swiper/swiper-bundle';
import { Navigation } from 'swiper/swiper-element-bundle';

export default () => {
  const intros = document.querySelectorAll('.js-intro-swiper');

  if(intros.length < 1) return;

  Array.from(intros).forEach( intro => {
    const introSwiper = new Swiper(intro, {
      loop: true,
      speed: 1000,
      direction: 'vertical',

      // autoplay: {
      //   delay: 3000,
      // },

      navigation: {
        nextEl: '.intro-swiper-btn-next',
        prevEl: '.intro-swiper-btn-prev',
      }
    })
  })
}
