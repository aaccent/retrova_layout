export default () => {
  const priceFilters = document.querySelectorAll('.price-filter');

  if(priceFilters.length > 0) {
    priceFilters.forEach(priceFilter => {
      let range = priceFilter.querySelector('.price-filter__input-range');

      range.addEventListener('input', () => {
        priceFilter.querySelector('[name="price-end-number"]').value = numberWithSpaces(range.value) + " ₽";
      })
    })
  }

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}
