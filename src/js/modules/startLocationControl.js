export default () => {
  const popupLocation = document.querySelector('.popup-location');

  if(!popupLocation) return;

  popupLocation.addEventListener('click', (e) => {
    if(e.target.closest('._affirmative-answer')) {
      popupLocation.classList.add('visually-hidden');
    } else if (e.target.closest('._negative-answer')) {
      setTimeout(() => {
        popupLocation.classList.add('visually-hidden');
      }, 100);
    }
  })

}
