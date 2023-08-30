new WOW({
  mobile: false
}).init();

let swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  speed: 1000,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
  breakpoints: {
    1500: {
      slidesPerView: 5
    },
    1250: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 2
    }
  }
});

$(function () {
  // window スクロール
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.floating').fadeIn();
    } else {
      $('.floating').fadeOut();
    }
  });

  // スクロールトップボタン
  $('.floating').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  // モーダル
  let scrollY;
  $('.register-button').click(function () {
    scrollY = -(window.scrollY) + 'px';
    $('#full-screen').fadeIn();
    $('.register').fadeIn();
    $('body').css('position', 'fixed');
    $('body').css('top', scrollY);
  });

  $('.close-button').click(function () {
    $('#full-screen').fadeOut();
    $('.register').fadeOut();
    $('body').css('position', '');
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  });
});