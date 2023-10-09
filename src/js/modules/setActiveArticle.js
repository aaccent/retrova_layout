export default () => {
  const articlesTitles = document.querySelectorAll('.article-blog__list > article > h4');
  const links = document.querySelectorAll('.article-blog__nav a');

  if(articlesTitles.length == false || links.length == false) return;

  window.addEventListener('scroll', () => {
    articlesTitles.forEach(articlesTitle => {
      if(isElementInViewportFull(articlesTitle) && articlesTitle.parentElement.id) {
        links.forEach(link => {
          link.classList.remove('_active');
        })

        let findedLink = Array.from(links).find(link => link.getAttribute("href") === ('#' + articlesTitle.parentElement.id));
        findedLink.classList.add('_active');
      }
    })
  })

  // is dom element full-size in viewport:
  function isElementInViewportFull(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
