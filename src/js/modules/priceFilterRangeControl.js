export default () => {
  const priceFilters = document.querySelectorAll('.price-filter');

  if(priceFilters.length > 0) {
    priceFilters.forEach(priceFilter => {
      let range = priceFilter.querySelector('.price-filter__input-range');

      range.addEventListener('input', () => {
        priceFilter.querySelector('[name="price-end-number"]').value = range.value;
      })
    })
  }

}
