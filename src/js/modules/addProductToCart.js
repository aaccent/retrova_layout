export default () => {
  const products = document.querySelectorAll('.product-card');
  const popupCart = document.querySelector('.popup-cart');

  if(products.length < 1 && !popupCart) return;

  Array.from(products).forEach( product => {
    product.addEventListener('click', (e) => {
      if(e.target.closest('.cart__input') && e.target.closest('.cart__input').checked) {
        showPopup();
      }
    })
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
}
