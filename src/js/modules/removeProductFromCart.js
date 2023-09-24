export default () => {
  const productsInCart = document.querySelectorAll('.modal-cart__product');

  if(productsInCart.length > 0) {
    Array.from(productsInCart).forEach( product => {
      product.addEventListener('click', (e) => {
        if(e.target.closest('.cart-product__delete')) {
          setTimeout(() => {
            product.remove();
          }, 100);
        }
      })
    })
  }
}
