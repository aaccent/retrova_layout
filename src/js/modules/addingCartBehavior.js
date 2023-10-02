export default () => {
  const addToCartBtn = Array.from(document.querySelectorAll('.js-add-to-cart'));
  const popupCart = document.querySelector('.popup-cart');

  if(addToCartBtn.length < 1 && !popupCart) return;

  Array.from(addToCartBtn).forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      if(btn.closest('.about-product__body')) {
        let sizeWrappers = btn.closest('.about-product__body').querySelectorAll('.js-size-checkbox');

        if( Array.from(sizeWrappers).find( item => item.querySelector('input[name="size"]').checked) ) {
          showPopup();
        } else {
          let b = document.createElement('button');
          b.classList.add('visually-hidden');
          b.dataset.path = 'modal-add-size';
          document.body.append(b);
          b.click();
          b.remove();
        }

      } else {
        showPopup();
      }
    })

    function showPopup() {
      popupCart.classList.add('popup-cart--visible');

      setTimeout(() => {
        popupCart.classList.add('popup-cart--closed');
      }, 2000);

      setTimeout(() => {
        popupCart.classList.remove('popup-cart--closed');
        popupCart.classList.remove('popup-cart--visible');
      }, 2500);
    }
  })
}
