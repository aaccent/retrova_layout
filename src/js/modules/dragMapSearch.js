export default () => {
  const list = document.querySelector('.js-map-search-list');

  if(list && window.matchMedia("(max-width: 1024px)").matches) {
    const btn = document.getElementById('drag-list-btn');
    const menu = document.getElementById('map-search-list');

    const debounce = (func, wait, immediate) => {
      var timeout;

      return function () {
        var context = this,
            args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        callNow && func.apply(context, args);
      };
    }

    function DragMenu (options) {
      const self    = this;
      self.menu     = options.el;
      self.hasTouch = 'ontouchstart' in window;
      self.isMoving = false;
      self.isOpen   = false;

      const compStyles = window.getComputedStyle(self.menu);

      self.position = {
        min: parseInt(compStyles.bottom),
        // max: Math.abs(self.menu.offsetHeight),
        max: 0,
        current: 0
      };

      self.position.snapBorder = ((self.position.min + self.position.max) * 0.05);

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
        e.preventDefault();
        var evt = e.type === 'touchstart' ? e.changedTouches[0] : e;
        self.position.current = Math.abs((self.menu.offsetTop + self.menu.offsetHeight) - evt.clientY);
        var l = parseInt(menu.style.bottom);
      });

      self.menu.addEventListener(self.eventMove, debounce(e => {
        self.menu.classList.add('is-moving');
        var evt = e.type === 'touchmove' ? e.changedTouches[0] : e;
        var move = (window.innerHeight - (evt.clientY)) - self.position.current;

        if ((move) >= self.position.min && (move) <= self.position.max) {
          self.setOpen(false);
          self.menu.style.bottom = `${move}px`;
        }
      }), 200);

      self.menu.addEventListener(self.eventEnd, e => {
        self.menu.classList.remove('is-moving');
        var evt = e.type === 'touchstart' ? e.changedTouches[0] : e;
        var l = parseInt(menu.style.bottom);

        console.log(l);
        console.log(self.position.snapBorder);

        if( l < self.position.snapBorder) {
          self.setOpen(true);
        }

        self.menu.style.bottom = null;
      });

      self.setOpen = isOpen => {
        self.isOpen = isOpen;
        self.btn.classList[isOpen ? 'add' : 'remove']('menu--open');
        self.menu.classList[isOpen ? 'add' : 'remove']('open');
        document.body.classList[isOpen ? 'add' : 'remove']('sidebar-menu-open');
      }
    }

    new DragMenu({el: menu, toggleButton: btn});

    menu.addEventListener('mouseover', (e) => {
      menu.classList.add('step');

      e.target.addEventListener('mouseout', () => {
        menu.classList.remove('step');
      })
    })
  }
}
