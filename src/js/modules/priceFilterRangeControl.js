export default () => {
  const priceFilters = document.querySelectorAll('.price-filter');
  const reset = document.querySelector('.modal-locate-list__reset-input');

  if(priceFilters.length > 0) {
    let rangeMin = 100;
    const range = document.querySelector(".range-selected");
    const rangeInput = document.querySelectorAll(".range-input input");
    const rangePrice = document.querySelectorAll(".range-price input");

    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minRange = parseInt(rangeInput[0].value);
        let maxRange = parseInt(rangeInput[1].value);

        if (maxRange - minRange < rangeMin) {
          if (e.target.className === "min") {
            rangeInput[0].value = maxRange - rangeMin;
          } else {
            rangeInput[1].value = minRange + rangeMin;
          }
        } else {
          rangePrice[0].value = numberWithSpaces(minRange) + " ₽";
          rangePrice[1].value = numberWithSpaces(maxRange) + " ₽";

          range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
          range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
        }
      });
    });

    if(reset) {
      reset.addEventListener('click', () => {
        range.style.left = 33 + "%";
        range.style.right = 33 + "%";
      } )
    }
  }

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}
