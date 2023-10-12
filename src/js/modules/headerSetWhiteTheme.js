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
      console.log(
        "progress:",
        self.progress.toFixed(3),
        "direction:",
        self.direction,
        "velocity",
        self.getVelocity()
      );

      if( (self.direction < 0) ) {
        header.classList.add('header--light-theme');
      } else {
        header.classList.remove('header--light-theme');
      }

      if(self.progress.toFixed(3) == 0) {
        header.classList.remove('header--light-theme');
      }
    }
  });
}
