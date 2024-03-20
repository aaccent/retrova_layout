export default () => {
    const articlesHeadings = Array.from(document.querySelectorAll('.article-blog__list > div > h4, .article-blog__list > div > h2, .article-blog__list > div > h3, .article-blog__list > div > h1'));
    if(articlesHeadings.length < 1) return;

    articlesHeadings.forEach((h, index) => {
        h.parentElement.id = 'article-' + index;
        h.parentElement.dataset.article = index;  
    })

    const navList = document.querySelector('.article-blog__nav > ul');
    let articlesDivs = Array.from(document.querySelectorAll('.article-blog__list > div[data-article]'));

    if(articlesDivs.length) {
        articlesDivs.forEach((d, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#article-' + index;
            a.textContent = d.firstElementChild.textContent;
            if(index === 0) {
                a.classList.add('_active');
            }
            li.append(a);
            navList.append(li);
        })
    }
}