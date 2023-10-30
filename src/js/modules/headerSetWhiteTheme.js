import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const header = document.querySelector('.header-main');

  if(!header) return;

  let height = header.clientHeight;

  let str = ScrollTrigger.create({
    start: 0,

    onUpdate: (self) => {
      if( (self.direction < 0) ) {
        header.classList.add('header--light-theme');
        document.body.classList.add('fixed-header');
      } else {
        header.classList.remove('header--light-theme');
        document.body.classList.remove('fixed-header');
      }

      if(self.progress.toFixed(3) == 0) {
        header.classList.remove('header--light-theme');
        document.body.classList.remove('fixed-header');
      }
    }
  });
}
