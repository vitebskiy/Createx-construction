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

const testimonialsSlider = new Swiper('.testimonials__items', {

  slidesPerView: '1',
  loop: true,
  spaceBetween: gap,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },

});
