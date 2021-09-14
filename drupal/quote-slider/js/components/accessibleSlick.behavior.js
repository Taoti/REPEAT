(function ($, Drupal) {

  "use strict";


$(document).ready(slickenate);


function slickenate() {

  $('.accessible-slick-slider__slides').slick({
    dots: false,
    arrows: true,
    centerMode: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 1349,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2
      }
    },
    {
      breakpoint: 720,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
      }
    }
    ]
  });
}

})(jQuery, Drupal);