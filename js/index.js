// Изменение стилей при скроллинге
window.onscroll = () => {
  // если ширина экрана <= 992 тогда выполнить код
  const width = document.documentElement.clientWidth;
  if (width <= 992) return;

  const navbar = document.querySelector('.navbar');
  const navbarWrap = document.querySelector('.navbar__wrap');
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.style.background = `linear-gradient(
        90deg,
        rgba(213, 32, 71, 0.9) 0%,
        rgba(238, 61, 27, 0.9) 100%
      )`;
    navbarWrap.style.paddingTop = '0px';
    navbarWrap.style.height = '60px';
  } else {
    navbar.style.background = '';
    navbarWrap.style.paddingTop = '';
    navbarWrap.style.height = '';
  }
};

//Навбар
const navbar = (function () {
  const btn = document.querySelector('.burger span');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');

  // если ширина экрана >= 992 тогда выполнить код
  const width = document.documentElement.clientWidth;
  if (width >= 992) return;

  body.addEventListener('click', e => {
    // Код идет дальше только если есть актив и клик был на бургер
    if (!btn.classList.contains('active') && !e.target.closest('.burger')) {
      return;
    }

    // 1 открытие или закрытие по нажатию // 2 закрытие по клику на элементы // 3 закрытие по клику запределы
    if (
      e.target.closest('.burger') ||
      e.target.matches('li a') ||
      !e.target.closest('.navbar')
    ) {
      btn.classList.toggle('active');
      menu.classList.toggle('animate');
    }
  });
})();

//Плавный скролл
const smoothScroll = (function () {
  const menu = document.querySelector('.menu');

  //функция плавного скролла
  const scrollTo = id => {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  // запуск плавного скролла
  menu.addEventListener('click', e => {
    if (e.target.closest('li a')) {
      e.preventDefault();
      const attr = e.target.closest('li a').getAttribute('href');
      if (attr === '#') return;
      scrollTo(attr);
    }
  });
})();

//Слайдер
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
