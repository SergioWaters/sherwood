$(document).ready(function () {
  $('.ui-kit.card_slider').slick({
    dots: true,
    appendDots: $('.ui-kit.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.ring1.card_slider').slick({
    dots: true,
    appendDots: $('.ring1.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.ring2.card_slider').slick({
    dots: true,
    appendDots: $('.ring2.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.ring3.card_slider').slick({
    dots: true,
    appendDots: $('.ring3.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.ring4.card_slider').slick({
    dots: true,
    appendDots: $('.ring4.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.ring5.card_slider').slick({
    dots: true,
    appendDots: $('.ring5.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  //
  $('.main_photos_slider').slick({
    dots: true,
    appendDots: $('.main_photos_slider__pagination'),
    arrows: true,
    prevArrow: $('.main_photos .button-circle-left'),
    nextArrow: $('.main_photos .button-circle-right'),
    // autoplay: true,
    // autoplayspeed: 5000,
    // infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          prevArrow: null,
          nextArrow: null,
        }
      },
    ]
  });
  //
  $('.main_team__slider').slick({
    arrows: true,
    prevArrow: $('.main_team .button-circle-left'),
    nextArrow: $('.main_team .button-circle-right'),
    autoplay: false,
    autoplayspeed: 200000,
    infinite: false,
    swipe: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1600,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1300,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 950,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 770,
        settings: { slidesToShow: 1 }
      },
    ]
  });
  // 
  $('.main_daily__slider').slick({
    dots: false,
    arrows: true,
    prevArrow: $('.main_daily .button-circle-left'),
    nextArrow: $('.main_daily .button-circle-right'),
    autoplay: false,
    autoplayspeed: 5000,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    touchMove: false
  });
})