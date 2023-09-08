// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';

import startLocationControl from './modules/startLocationControl';

import headerSetWhiteTheme from './modules/headerSetWhiteTheme';

import catalogOpen from './modules/catalogOpen';
import inputsClear from './modules/inputsClear';
import introSwiper from './modules/introSwiper';
import swiperSliders from './modules/swiperSliders';
import swiperLooks from './modules/swiperLooks';
import seoExpand from './modules/seoExpand';
import rangeSlider from './modules/rangeSlider';
import searchCities from './modules/searchCities';

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  const body = document.body;

  // activate transition:
  setTimeout(() => {
    body.classList.remove('preload');
  }, 500);

  startLocationControl();
  headerSetWhiteTheme();

  lazyIMages();
  initModal();

  catalogOpen();

  introSwiper();
  swiperSliders();
  swiperLooks();

  inputsClear();
  rangeSlider();
  seoExpand();

  searchCities();
});
