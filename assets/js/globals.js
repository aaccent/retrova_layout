// Show notification
void function () {
  window.showNotification = function({ title, text, image, iconHref = 'assets/images/sprites/sprite-mono.svg#cart' }) {
    const el = document.createElement('div')
    el.className = 'popup-cart'
    el.innerHTML = `
      <div class="popup-cart__body">
        <div class="popup-cart__image">
          <img src="${image}" alt="">
        </div>
        <div class="popup-cart__info">
          <div class="popup-cart__heading">
            <span class="popup-cart__title">${title}</span>
            <svg class="icon icon-cart"><use href="${iconHref}"></use></svg>
          </div>
          <div class="popup-cart__desc">${text}</div>
        </div>
      </div>
    `

    document.querySelector('.popup-cart')?.remove()
    document.querySelector('.site-container').append(el)
    requestAnimationFrame(() => el.classList.add('popup-cart--visible'))

    setTimeout(() => {
      el.classList.add('popup-cart--closed');
    }, 2000);

    setTimeout(() => {
      el.classList.remove('popup-cart--closed');
      el.classList.remove('popup-cart--visible');
      document.querySelector('.popup-cart')?.remove()
    }, 2500);
  }
}()
