export default () => {
  const list = document.querySelector('.js-map-search-list');

  if(list && window.matchMedia("(max-width: 1024px)").matches) {
    const btn = document.getElementById('drag-list-btn');
    const menu = document.getElementById('map-search-list');

    function DragMenu (options) {
      const self    = this;
      self.menu     = options.el;
      self.hasTouch = 'ontouchstart' in window;
      self.isMoving = false;
      self.isOpen   = false;

      const compStyles = window.getComputedStyle(self.menu);

      self.position = {
        min: parseInt(compStyles.bottom),
        max: 0,
        current: 0
      };

      self.position.snapBorder = 20;

      self.btn = options.toggleButton;

      self.btn && self.btn.addEventListener('click', function() {
        self.setOpen(!self.isOpen);
      });

      if (self.hasTouch) {
        self.eventStart  = 'touchstart';
        self.eventMove = 'touchmove';
        self.eventEnd  = 'touchend';
      } else {
        return;
      }

      self.menu.addEventListener(self.eventStart, e => {
        e.stopPropagation();
        console.log('dragstart');
        if(e.target.closest('.modal-del-point__hanger')) {
          var evt = e.type === 'touchstart' ? e.changedTouches[0] : e;
          self.position.current = Math.abs((self.menu.offsetTop + self.menu.offsetHeight) - evt.clientY);
        } else {
          return;
        }
      }, {passive: true});

      self.menu.addEventListener(self.eventMove, e => {
        self.menu.classList.add('is-moving');
        e.stopPropagation();

        if(e.target.closest('.modal-del-point__hanger')) {
          var evt = e.type === 'touchmove' ? e.changedTouches[0] : e;
          var move = (window.innerHeight - (evt.clientY)) - self.position.current;

          if ((move) < self.position.max && (move) >= self.position.min && !self.menu.classList.contains('open')) {
            self.setOpen(false);
            self.menu.style.bottom = `${move}px`;
          } else if ((move) < self.position.max && (move) >= self.position.min && self.menu.classList.contains('open')) {
            self.menu.style.bottom = `${move}px`;
          }
        }
      }, {passive: true});

      self.menu.addEventListener(self.eventEnd, e => {
        self.menu.classList.remove('is-moving');
        e.stopPropagation();
        if(e.target.closest('.modal-del-point__hanger')) {
          // var evt = e.type === 'touchend' ? e.changedTouches[0] : e;
          var l = parseInt(menu.style.bottom);

          if( Math.abs(l) > self.position.snapBorder && !self.menu.classList.contains('open')) {
            self.setOpen(true);
          } else if( Math.abs(l) > self.position.snapBorder && self.menu.classList.contains('open')){
            self.setOpen(false);
          }

          self.menu.style.bottom = null;
          self.menu.style.pointerEvents = 'initial';
        }

      }, {passive: true});

      self.setOpen = isOpen => {
        self.isOpen = isOpen;
        self.menu.classList[isOpen ? 'add' : 'remove']('open');
      }
    }

    new DragMenu({el: menu, toggleButton: btn});
  }
}
