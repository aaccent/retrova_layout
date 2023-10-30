export default () => {
  const copyLinks = document.querySelectorAll('.order-article__number--icon, .js-copy-link, .card-promocode__copy-link');
  const copyPopup = document.querySelector('.js-success-copy');
  const copyIcons = document.querySelectorAll('.card-promocode__copy-icon');

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

  if(copyIcons.length > 0) {
    copyIcons.forEach( icon => {
      icon.addEventListener('click', (e) => {
        if(e.target.closest('.card-promocode')) {
          let parentLink = e.target.closest('.card-promocode');

          if(parentLink.querySelector('.card-promocode__copy-link')) {
            parentLink.querySelector('.card-promocode__copy-link').click();
          }
        }
      })
    })
  }
}
