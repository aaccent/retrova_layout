export default () => {
  const orderArticles = document.querySelectorAll('.order-article');
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  if(orderArticles.length < 1) return;

  if(!isMobile) {
    Array.from(orderArticles).forEach(orderArticle => {
      parseArticleLinks(orderArticle, 3);
    })
  } else {
    Array.from(orderArticles).forEach(orderArticle => {
      parseArticleLinks(orderArticle, 2);
    })
  }

  function parseArticleLinks(orderArticle, counter) {
    let links = Array.from(orderArticle.querySelectorAll('.order-article__image'));

    if(links.length > counter) {
      let length = links.length;
      for (let index = 0; index < links.length; index++) {
        if(index > counter) {
          links[index].remove();
        } else {
          links[index].style.opacity = '1';
        }

        if(index === counter) {
          links[index].classList.add('order-article__image--collapsed');
          links[index].dataset.counter = length - counter - 1 ;
        }
      }
    } else {
      links.forEach(link => {
        link.style.opacity = '1';
      })
    }

  }
}
