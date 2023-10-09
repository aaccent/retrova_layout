export default () => {
  const favoriteProducts = document.querySelectorAll('.account-favorites__product-card');

  if(favoriteProducts.length > 0) {
    Array.from(favoriteProducts).forEach( p => {
      p.addEventListener('click', (e) => {
        if(e.target.closest('.favorites__input')) {
          p.remove();
        }
      })
    })
  }
}
