"use strict";

var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev'
  },
});

const burgerIcon = document.querySelector('.menuToggle')
const menuActive = document.querySelector('.nav_list')

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('active')
  menuActive.classList.toggle('nav-active')
})