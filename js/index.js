const menu = document.querySelector('.menu');

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

//функция плавного скролла
const scrollTo = id => {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

// запуск плавного скролла
menu.addEventListener('click', e => {
  if (e.target.closest('li a')) {
    e.preventDefault();
    scrollTo(e.target.closest('li a').getAttribute('href'));
  }
});
