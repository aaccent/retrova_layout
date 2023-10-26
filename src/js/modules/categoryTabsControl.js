import Swiper from 'swiper/swiper-bundle';
import { Navigation, FreeMode, Controller  } from 'swiper/swiper-element-bundle';

export default () => {
  const categoryTabs = document.querySelector('.js-category-tabs');
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if(!categoryTabs) return;

  if(!isMobile) {
    const categoryTabsItems = document.querySelectorAll('.category-tabs__item');
    const categoryTabsList = document.querySelector('.category-tabs__list');

    if(categoryTabsItems.length < 1 || !categoryTabsList) return;

    let allTab = document.querySelector('.category-tabs__tab--all');
    let areSort = true;

    let initialSortingItem = (areSort) => {
      let filteredResult = Array.from(categoryTabsItems).filter( item => {
        if(!item.firstElementChild.classList.contains('category-tabs__tab--main') &&
        !item.firstElementChild.classList.contains('category-tabs__tab--all')) {
          return item;
        }
      });
      let dataAmount = categoryTabsList.dataset.amount | 5;
      let slicedResult = filteredResult.slice(0, dataAmount);
      let categoryTabsItemAll = document.querySelector('.category-tabs__tab--all').parentElement;

      if(areSort) {
        Array.from(filteredResult).forEach( item => {
          item.remove();
        })
        Array.from(slicedResult).forEach( item => {
          categoryTabsList.insertBefore(item, categoryTabsItemAll);
        })

        categoryTabsList.classList.add('category-tabs__list--sorted');
      } else {
        Array.from(filteredResult).forEach( item => {
          categoryTabsList.insertBefore(item, categoryTabsItemAll);
        })

        categoryTabsList.classList.remove('category-tabs__list--sorted');
      }

      areSort = categoryTabsList.classList.contains('category-tabs__list--sorted');
    }

    initialSortingItem(areSort);

    if(allTab) {
      allTab.addEventListener('click', () => {
        areSort = !areSort;
        initialSortingItem(areSort);
        allTab.classList.add('visually-hidden');

        let list = Array.from(categoryTabsList.querySelectorAll('.category-tabs__item'));

        for (let i = 0; i < list.length; i++) {
          const element = list[i];

          if(element.offsetTop > list[0].offsetTop) {
            element.firstElementChild.classList.add('category-tabs__tab--no-icon');
            return;
          }
        }
      })
    }
  } else {
    categoryTabs.classList.add('swiper');
    categoryTabs.firstElementChild.classList.add('swiper-wrapper');
    categoryTabs.querySelectorAll('.category-tabs__item').forEach(item => {
      item.classList.add('swiper-slide');
    })

    const tabsSwiper = new Swiper(categoryTabs, {
      slidesPerView: 'auto',
      spaceBetween: 12,
    })
  }
}
