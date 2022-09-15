const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: 'fade',
  speed: 1500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

swiper();
