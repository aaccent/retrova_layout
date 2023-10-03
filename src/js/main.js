// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import contactsMapClassInit from './modules/contactsMapClassInit';
import masks from './modules/masks';
// import validationForm from './modules/validationForm';

import startLocationControl from './modules/startLocationControl';
import bonusesCardRangeProgress from './modules/bonusesCardRangeProgress';

import headerSetWhiteTheme from './modules/headerSetWhiteTheme';
import serviceFooterControl from './modules/serviceFooterControl';
import searchBarControl from './modules/searchBarControl';

import categoryTabsControl from './modules/categoryTabsControl';
import sortingLists from './modules/sortingLists';
import viewSwitcherControl from './modules/viewSwitcherControl';

import setColorsFromCheckbox from './modules/setColorsFromCheckbox';
import productViewSwiper from './modules/productViewSwiper';
import priceFilterRangeControl from './modules/priceFilterRangeControl';

import catalogOpen from './modules/catalogOpen';
import mobileMenuCatalogSwiper from './modules/mobileMenuCatalogSwiper';
import hamburgerControl from './modules/hamburgerControl';
import inputsClear from './modules/inputsClear';
import introSwiper from './modules/introSwiper';
import linkListSwiper from './modules/linkListSwiper';
import swiperSliders from './modules/swiperSliders';
import swiperLooks from './modules/swiperLooks';
import seoExpand from './modules/seoExpand';
import rangeSlider from './modules/rangeSlider';
import searchCities from './modules/searchCities';
import cartCounterControl from './modules/cartCounterControl';
import removeProductFromCart from './modules/removeProductFromCart';
import footerAcco from './modules/footerAcco';

import modalFilterDetecting from './modules/modalFilterDetecting';
import fixedFooterControl from './modules/fixedFooterControl';
import scrollGalleryAnchor from './modules/scrollGalleryAnchor';

import cartMiniSwiper from './modules/cartMiniSwiper';
import paymentMethodRadioControl from './modules/paymentMethodRadioControl';
import makingOrder from './modules/makingOrder';
import pickupMapClassInit from './modules/pickupMapClassInit';
import postsMapClassInit from './modules/postsMapClassInit';

import videoPlay from './modules/videoPlay';

import accountMapClassInit from './modules/accountMapClassInit';
import orderArticleImageCollapse from './modules/orderArticleImageCollapse';
import copyLinkControl from './modules/copyLinkControl';
import catalogControlSticky from './modules/catalogControlSticky';
import addingCartBehavior from './modules/addingCartBehavior';
import scrollTopButton from './modules/scrollTopButton';
import collectionTextSwiper from './modules/collectionTextSwiper';
import accountNotificationsSwitch from './modules/accountNotificationsSwitch';
import setActiveArticle from './modules/setActiveArticle';
import productCardCover from './modules/productCardCover';

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
  bonusesCardRangeProgress();

  masks();

  catalogOpen();
  serviceFooterControl();
  hamburgerControl();
  mobileMenuCatalogSwiper();

  setColorsFromCheckbox();
  productViewSwiper();

  introSwiper();
  linkListSwiper();
  swiperSliders();
  swiperLooks();

  inputsClear();
  rangeSlider();
  priceFilterRangeControl();
  seoExpand();
  cartCounterControl();
  removeProductFromCart();

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
  pickupMapClassInit();
  postsMapClassInit();

  videoPlay();

  accountMapClassInit();
  orderArticleImageCollapse();
  copyLinkControl();
  catalogControlSticky();
  addingCartBehavior();
  scrollTopButton();
  collectionTextSwiper();
  accountNotificationsSwitch();
  setActiveArticle();
  productCardCover();
});
