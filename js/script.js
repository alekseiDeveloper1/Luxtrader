let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function(e) {
  let user_menu = document.querySelector('.user-header__menu');
  user_menu.classList.toggle('_active');
});


$(document).ready(function(){
  $('.menu__icon').click(function(event){
    $('.menu__icon,.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest(".actions-header")) {
    let user_menu = document.querySelector(".user-header__menu");
    user_menu.classList.remove("_active");
  }
});



let main_slider = new Swiper('.main-slider__body', {
  /*
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  */
  // observer: true,
  // observeParents: true,
  // slidesPerView: 1,
  // spaceBetween: 0,
 
  speed: 800,
  //touchRatio: 0,
  // simulateTouch: false,
  // loop: true,
  // preloadImages: false,
  //lazy: true,
  //Dotts
  // pagination: {
  //   el: '.slider-quality__pagging',
  //   clickable: true,
  // },
  //Arrows
  navigation: {
    nextEl: '.control-slider__arrow_next',
    prevEl: '.control-slider__arrow_prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      autoHeight: true,
    },
    // when window width is >= 480px
    768: {
      autoHeight: false,
    },
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
let lot_slider = new Swiper('.slider-lots__body', {
  /*
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  */
  // observer: true,
  // observeParents: true,
  slidesPerView: 3,
  // spaceBetween: 0,
 
  speed: 800,
  //touchRatio: 0,
  // simulateTouch: false,
  // loop: true,
  // preloadImages: false,
  //lazy: true,
  //Dotts
  // pagination: {
  //   el: '.slider-quality__pagging',
  //   clickable: true,
  // },
  //Arrows
  navigation: {
    nextEl: '.control-slider-lots__arrow_next',
    prevEl: '.control-slider-lots__arrow_prev',
  },
  breakpoints: {
    // when window width is >= 320px
    992: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
    },
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
let quotes_slider = new Swiper('.quotes__body', {
  effect: 'fade',
  /*
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  */
  // observer: true,
  // observeParents: true,
  slidesPerView: 1,
  // spaceBetween: 0,
 
  speed: 800,
  //touchRatio: 0,
  // simulateTouch: false,
  loop: true,
  // preloadImages: false,
  //lazy: true,
  //Dotts
  // pagination: {
  //   el: '.slider-quality__pagging',
  //   clickable: true,
  // },
  //Arrows
  navigation: {
    nextEl: '.control-slider-quotes__link'
  },
  
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});