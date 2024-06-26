// import Swiper JS
import Swiper from 'swiper/swiper-bundle';
import { Navigation, FreeMode, Controller  } from 'swiper/swiper-element-bundle';

export default () => {
  const slidersPopular = document.querySelectorAll('.js-popular-swiper');
  const slidersBlogs = document.querySelectorAll('.js-blogs-swiper');
  const slidersSeasons = document.querySelectorAll('.js-seasons-swiper');
  const slidersArticleProducts = document.querySelectorAll('.js-article-product-slider');
  const slidersAboutPage = document.querySelectorAll('.js-about-page-swiper');
  const sliderBanksCards = document.querySelector('.js-bank-card-swiper');
  const sliderTypical = document.querySelector('.js-typical-slider');
  const sliderStores = document.querySelector('.js-stores-swiper');


  if(slidersPopular.length >= 1) {
    slidersPopular.forEach( slider => {
      const swiperPopular = new Swiper(slider.querySelector('.swiper'), {
        slidesPerView: 1.25,
        spaceBetween: 12,
        slideVisibleClass: 'swiper-slide-visible',
        speed: 1700,

        navigation: {
          nextEl: slider.querySelector('.slider__button--next'),
          prevEl: slider.querySelector('.slider__button--prev'),
          disabledClass: 'swiper-button-disabled'
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
            speed: 1700,
          },
          1200: {
            followFinger: false,
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 3,
            speed: 1,
            watchSlidesProgress: true,
          }
        }
      })

      let shadowSlider = slider.querySelector('.js-popular-shadow-swiper');

      if(shadowSlider && window.matchMedia("(min-width: 1200px)").matches) {
        const shadowSwiper = new Swiper(shadowSlider, {
          slidesPerView: 1.25,
          spaceBetween: 12,
          longSwipesRatio: 0.7,
          speed: 700,

          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
              speed: 700,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 16,
              slidesPerGroup: 3,
              speed: 1,
              allowTouchMove: false,
            }
          }
        })

        swiperPopular.controller.control = shadowSwiper;
      }

    })
  }

  if(sliderBanksCards) {
    const swiperBanksCards = new Swiper(sliderBanksCards, {
      slidesPerView: 'auto',
      spaceBetween: 8,

      breakpoints: {
        768: {
          spaceBetween: 13,
          slidesPerView: 3,
        }
      }
    })
  }

  if(sliderStores) {
    const swiperStores= new Swiper(sliderStores, {
      slidesPerView: 'auto',
      spaceBetween: 8,
    })
  }

  if(sliderTypical) {
    const swiperTypical = new Swiper(sliderTypical, {
      slidesPerView: 1.25,
      spaceBetween: 12,

      navigation: {
        nextEl: sliderTypical.querySelector('.slider__button--next'),
        prevEl: sliderTypical.querySelector('.slider__button--prev'),
      },

      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    })
  }

  if(slidersAboutPage.length >= 1) {
    slidersAboutPage.forEach( slider => {
      const swiperAboutPage = new Swiper(slider, {
        slidesPerView: 1.25,
        spaceBetween: 12,
        speed: 700,

        navigation: {
          nextEl: slider.querySelector('.slider__button--next'),
          prevEl: slider.querySelector('.slider__button--prev'),
          disabledClass: 'swiper-button-disabled'
        },

        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 0
          },
        }
      })

      if(document.querySelectorAll('.js-about-info-slider')) {
        const swiperAboutPageInfo = new Swiper('.js-about-info-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        })

        swiperAboutPage.controller.control = swiperAboutPageInfo;
      }
    })
  }

  if(slidersBlogs.length >= 1) {
    slidersBlogs.forEach( slider => {
      const swiperBlogs = new Swiper(slider.querySelector('.swiper'), {
        slidesPerView: 1.25,
        spaceBetween: 12,

        navigation: {
          nextEl: slider.querySelector('.slider__button--next'),
          prevEl: slider.querySelector('.slider__button--prev'),
          disabledClass: 'swiper-button-disabled'
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 16,
          }
        }
      })
    })
  }

  if(slidersSeasons.length >= 1) {
    slidersSeasons.forEach( slider => {
      const swiperSeason = new Swiper(slider.querySelector('.swiper'), {
        slidesPerView: 'auto',
        spaceBetween: 12,
        centeredSlides: true,
        speed: 700,

        navigation: {
          nextEl: slider.querySelector('.seasons-look__button--next'),
          prevEl: slider.querySelector('.seasons-look__button--prev'),
          disabledClass: 'swiper-button-disabled'
        },

        breakpoints: {

          1280: {
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      })
    })
  }

  if(slidersArticleProducts.length >= 1) {
    slidersArticleProducts.forEach( sl => {
      const swiperArticleProduct = new Swiper(sl, {
        slidesPerView: 1.1,
        spaceBetween: 5,

        breakpoints: {

          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          }
        }
      })
    })
  }
}
