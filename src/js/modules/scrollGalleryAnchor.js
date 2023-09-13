export default () => {
  const anchors = document.querySelectorAll('.thumbs__button');

  if(anchors.length < 0) return;

  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
}
