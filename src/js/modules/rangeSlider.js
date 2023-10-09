export default () => {
  const reset = document.querySelector('.modal-locate-list__reset-input');

  for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));

    if(reset) {
      reset.addEventListener('click', () => {
        e.style.setProperty('--value', e.max);
      } )
    }
  }


  const ranges = Array.from(document.querySelectorAll('.range-certificates'));

  if(ranges.length < 1) return;

  ranges.forEach( range => {
    range.querySelector('input[type=range]').addEventListener('input', (e) => {

      range.querySelectorAll('.range-certificates__number').forEach(number => {
        number.classList.remove('range-certificates__number--active');
      })

      range.querySelectorAll("[data-select]").forEach( number => {
        if(Number(number.dataset.select) === Number(e.target.value)) {
          number.classList.add('range-certificates__number--active');
        }
      })
    });
  })
}
