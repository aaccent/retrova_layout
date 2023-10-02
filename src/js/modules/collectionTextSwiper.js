import Swiper from 'swiper/swiper-bundle';
import { FreeMode, Autoplay, Virtual } from 'swiper/swiper-element-bundle';

export default () => {
  const textSider = document.querySelector('.js-collection-intro-text > span');

  if(!textSider) return;

  for (let index = 0; index < 10; index++) {
    let newSpan = textSider.cloneNode(true);
    textSider.parentElement.append(newSpan);
  }

}
