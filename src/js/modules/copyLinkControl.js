export default () => {
  const copyLinks = document.querySelectorAll('.order-article__number--icon, .js-copy-link, .card-promocode__copy-link');
  const copyPopup = document.querySelector('.js-success-copy');

  if(copyLinks.length > 0) {
    copyLinks.forEach( link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        let data = link.textContent;
        navigator.clipboard.writeText(data);

        if(copyPopup) {
          copyPopup.classList.add("is-visible");

          setTimeout(() => {
            copyPopup.classList.remove("is-visible");
          }, 2000);
        }
      })
    });
  }
}
