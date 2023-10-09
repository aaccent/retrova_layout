export default () => {
  const anchors = document.querySelectorAll('.thumbs__button');

  if(anchors.length < 0) return;

  Array.from(anchors).forEach( item => {
    item.addEventListener('click', () => {
      Array.from(anchors).forEach(link => {
        link.parentElement.classList.remove('_active');
      })

      item.parentElement.classList.add('_active');
      item.closest('.thumbs__list-wrapper').scrollTop = 0;
    })
  })
}
