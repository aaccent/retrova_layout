// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import contactsMapClassInit from './modules/contactsMapClassInit';
import masks from './modules/masks';
// import validationForm from './modules/validationForm';

import startLocationControl from './modules/startLocationControl';

import headerSetWhiteTheme from './modules/headerSetWhiteTheme';
import searchBarControl from './modules/searchBarControl';

import categoryTabsControl from './modules/categoryTabsControl';
import sortingLists from './modules/sortingLists';
import viewSwitcherControl from './modules/viewSwitcherControl';

import setColorsFromCheckbox from './modules/setColorsFromCheckbox';
import productViewSwiper from './modules/productViewSwiper';

import catalogOpen from './modules/catalogOpen';
import hamburgerControl from './modules/hamburgerControl';
import inputsClear from './modules/inputsClear';
import introSwiper from './modules/introSwiper';
import swiperSliders from './modules/swiperSliders';
import swiperLooks from './modules/swiperLooks';
import seoExpand from './modules/seoExpand';
import rangeSlider from './modules/rangeSlider';
import searchCities from './modules/searchCities';
import footerAcco from './modules/footerAcco';

import modalFilterDetecting from './modules/modalFilterDetecting';
import fixedFooterControl from './modules/fixedFooterControl';
import scrollGalleryAnchor from './modules/scrollGalleryAnchor';

import cartMiniSwiper from './modules/cartMiniSwiper';
import paymentMethodRadioControl from './modules/paymentMethodRadioControl';
import makingOrder from './modules/makingOrder';

import videoPlay from './modules/videoPlay';

import accountMapClassInit from './modules/accountMapClassInit';
import orderArticleImageCollapse from './modules/orderArticleImageCollapse';

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  const body = document.body;

  // activate transition:
  setTimeout(() => {
    body.classList.remove('preload');
  }, 500);

  startLocationControl();
  headerSetWhiteTheme();
  searchBarControl();
  footerAcco();

  lazyIMages();
  initModal();

  contactsMapClassInit();

  masks();

  catalogOpen();
  hamburgerControl();

  setColorsFromCheckbox();
  productViewSwiper();

  introSwiper();
  swiperSliders();
  swiperLooks();

  inputsClear();
  rangeSlider();
  seoExpand();

  categoryTabsControl();
  sortingLists();
  viewSwitcherControl();

  searchCities();
  modalFilterDetecting();
  fixedFooterControl();
  scrollGalleryAnchor();

  cartMiniSwiper();

  paymentMethodRadioControl();
  makingOrder();

  videoPlay();

  accountMapClassInit();
  orderArticleImageCollapse();
});
