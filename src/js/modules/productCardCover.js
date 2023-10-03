export default () => {
  const productCards = document.querySelectorAll('.product-card--hovered');

  if(productCards.length > 0) {
    productCards.forEach(productCard => {
      let productCardImages = productCard.querySelectorAll('.product-card__picture');

      productCard.addEventListener('mouseover', (e) => {
        if(e.target.closest('.product-card__hover-item')) {
          let dataHover = e.target.closest('.product-card__hover-item').dataset.hover;

          productCardImages.forEach(productCardImage => {
            productCardImage.classList.remove('product-card__picture--active');
          })

          Array.from(productCardImages).find(item => item.dataset.image === dataHover).classList.add('product-card__picture--active');
        }
      })

      productCard.addEventListener('mouseleave', (e) => {
        productCardImages.forEach(productCardImage => {
          productCardImage.classList.remove('product-card__picture--active');
        })

        productCardImages[0].classList.add('product-card__picture--active');
      })
    })
  }
}
