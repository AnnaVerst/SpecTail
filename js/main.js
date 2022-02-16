var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let burger = document.querySelector('.header-menu-btn');
let close = document.querySelector('.main-nav-close');
let menuMobile = document.querySelector('.main-nav')

burger.addEventListener('click', () => {
  menuMobile.style.display = 'block';
  burger.style.display = 'none';
  close.style.display = 'block';

});

close.addEventListener('click', () => {
  menuMobile.style.display = 'none';
  close.style.display = 'none';
  burger.style.display = 'block';
});





