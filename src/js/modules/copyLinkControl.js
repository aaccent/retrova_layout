export default () => {
  const copyLinks = document.querySelectorAll('.order-article__number--icon, .js-copy-link');

  if(copyLinks.length > 0) {
    copyLinks.forEach( link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        let data = link.textContent;
        navigator.clipboard.writeText(data);
      })
    });
  }
}
