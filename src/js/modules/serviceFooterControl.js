import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const header = document.querySelector('.header');
  const serviceFooter = document.querySelector('.service-footer');

  if(!serviceFooter || !header) return;


  let str1 = ScrollTrigger.create({
    trigger: header.offsetTop,
    endTrigger: '#end-trigger',
    end: 'center',
    onToggle: (self) => {
      serviceFooter.classList.toggle('service-footer--visible');
    }
  });
}
