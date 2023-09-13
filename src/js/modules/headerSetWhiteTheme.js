import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const header = document.querySelector('.header');

  if(!header) return;

  let str = ScrollTrigger.create({
    trigger: 0,
    end: "max",
    onUpdate: (self) => {
      let rect = document.body.getBoundingClientRect();

      if(Math.abs(rect.y) > header.clientHeight) {
        header.classList.add('header--light-theme');
      } else {
        header.classList.remove('header--light-theme');
      }
    }
  });
}
