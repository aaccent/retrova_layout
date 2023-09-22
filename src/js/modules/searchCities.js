export default () => {
  const locationSearch = document.getElementById('js-location-search');
  const loader = document.querySelector('.modal-locate-list__loader');
  const response = document.querySelector('.modal-locate-list__response');

  if(!locationSearch) return;

  let input = locationSearch.querySelector('.search-box__input');
  let inputClear = locationSearch.querySelector('.input-box__clear');
  let submitButton = locationSearch.querySelector('.search-box__icon--loc');
  let citisReadyList = locationSearch.querySelector('.modal-locate-list__cities');
  let citisFoundedList = locationSearch.querySelector('.modal-locate-list__results-list');
  let responseClose = response.querySelector('.modal-locate-list__respons-close');

  input.addEventListener('input', () => {
    if(input.value) {
      citisReadyList.classList.add('visually-hidden');
      citisFoundedList.classList.remove('visually-hidden');
    } else {
      citisReadyList.classList.remove('visually-hidden');
      citisFoundedList.classList.add('visually-hidden');
    }
  })

  submitButton.addEventListener('click', () => {
    if(loader && response) {
      loader.classList.add('modal-locate-list__loader--active');

      setTimeout(() => {
        loader.classList.remove('modal-locate-list__loader--active');
        response.classList.add('modal-locate-list__response--active');
      }, 3000);
    }
  })

  if(responseClose) {
    responseClose.addEventListener('click', () => {
      response.classList.remove('modal-locate-list__response--active');
    })
  }

  inputClear.addEventListener('click', () => {
    citisReadyList.classList.remove('visually-hidden');
    citisFoundedList.classList.add('visually-hidden');
  })
}
