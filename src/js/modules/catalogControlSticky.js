import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default () => {
  const stickyControl = document.querySelector('.catalog-layout__sticky-control');

  if(!stickyControl) return;

  let offsetTopValue = stickyControl.offsetTop;

  let stickyTrigger = ScrollTrigger.create({
    start: offsetTopValue,
    end: "max",
    onToggle: (self) => {
      stickyControl.classList.toggle('catalog-layout__sticky-control--fixed');
    }
  })

  let upBtn = stickyControl.querySelector('.js-scroll-up');

  if(upBtn) {
    upBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }
}
