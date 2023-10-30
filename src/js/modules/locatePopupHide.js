import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  let popupLocation = document.querySelector('.popup-location');

  if(!popupLocation || !document.getElementById('trigger-locate')) return;

  let strP = ScrollTrigger.create({
    trigger: '#trigger-locate',

    onToggle: () => {
      popupLocation.classList.add('popup-location--hidden');
    },

    onLeaveBack:  () => {
      popupLocation.classList.remove('popup-location--hidden');
    },
  });
}
