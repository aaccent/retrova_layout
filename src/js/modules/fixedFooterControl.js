import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const fixedFooter = document.querySelector('.fixed-footer');

  if(!fixedFooter) return;

  let trigger = document.querySelector('.about-product__cart-button');

  let scrollTrigger = ScrollTrigger.create({
    start: trigger.offsetTop,
    endTrigger: '#end-ff-trigger',
    end: 'center',
    onToggle: (self) => {
      fixedFooter.classList.toggle('fixed-footer--visible');
    }
  })
}
