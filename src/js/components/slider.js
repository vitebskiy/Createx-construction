const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));


import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const portfolioSlider = new Swiper('.portfolio-section__items', {

  slidesPerView: '3',
  loop: true,
  centeredSlides: true,
  spaceBetween: gap,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },

});
