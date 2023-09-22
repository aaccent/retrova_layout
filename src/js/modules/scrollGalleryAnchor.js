export default () => {
  const anchors = document.querySelectorAll('.thumbs__button, .article-blog__nav > a');

  if(anchors.length < 0) return;

  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      anchor.classList.add('_active');
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}
