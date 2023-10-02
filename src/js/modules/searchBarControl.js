export default () => {
  const modalSearch = document.querySelector('.js-search-modal');

  if(!modalSearch) return;

  let modalBody = modalSearch.querySelector('.modal-search__body');
  let closeBtn = modalSearch.querySelector('.modal-search__close');
  let submitBtn = modalSearch.querySelector('.input-box__submit');

  modalSearch.querySelector('input').addEventListener('input', (e) => {
    if(e.target.value) {
      modalBody.classList.add('modal-search__body--similars');
      submitBtn.classList.add('input-box__submit--active');
    } else {
      modalBody.classList.remove('modal-search__body--similars');
      submitBtn.classList.remove('input-box__submit--active');
    }
  })

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let requiredStatus = false;

    let requieredForm = e.target.closest('form');
    let mainInput = requieredForm.querySelector('.input-box--big');
    let requieredFields = requieredForm.querySelectorAll('[required]');

    Array.from(requieredFields).forEach( item => {
      if(item.value || !(item.value == 0)) {
        requiredStatus = true;
      } else {
        return;
      }
    })

    if(requiredStatus) {
      requieredForm.submit();
    }
  })
}
