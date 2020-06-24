(function ($) {
  'use strict';

  $(document).ready(function() {
    
    var carouselSelector = '.carousel__container';
    var $carouselContainer = $(carouselSelector);
    
    if ( !$carouselContainer.length ) {
      return;
    }

    var slidesContainerSelector = carouselSelector + ' .carousel__slides';
    var $slides = $('.carousel__slide', $carouselContainer);
    var numberOfSlides = $slides.length;
    var slideIndex = 0;

    var $carouselPrevious = $('.trigger--show-previous-slide', carouselSelector);
    var $carouselNext = $('.trigger--show-next-slide', carouselSelector);
    var $carouselPager = $('.carousel-control__pagination');

    var i;
    for (i = 1; i <= numberOfSlides; i++) {
      $carouselPager.append(`
        <li class="carousel-control__pagination-item">
          <button class="trigger--show-this-slide" data-slideIndex="`+ i +`">
            <span class="visually-hidden">show slide `+ i +`</span>
            <div class="carousel-control__pagination-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" stroke="#fff" fill="rgba(0,0,0,0.1)" stroke-width="2">
                <title id="title" lang="en">circle</title>  
                <g><circle cx="6" cy="6" r="6"/></g>
              </svg>
            </div>
          </button>
        </li>
      `);
    }

    var $carouselPagerLinks = $('.carousel-control__pagination-item', carouselSelector);


    function setCarouselSlideIndex() {
      slideIndex = this.currentSlide;

      if (slideIndex == 0) {
        $carouselContainer.addClass('carousel--is-at-start');
      }
      else {
        $carouselContainer.removeClass('carousel--is-at-start');
      }

      if (slideIndex == (numberOfSlides - 1)) {
        $carouselContainer.addClass('carousel--is-at-end');
      }
      else {
        $carouselContainer.removeClass('carousel--is-at-end');
      }

      if ($carouselPagerLinks.length > 0) {
        $($carouselPagerLinks)
          .filter('.carousel-item--is-active')
          .removeClass('carousel-item--is-active');

        $($carouselPagerLinks[ slideIndex ])
          .addClass('carousel-item--is-active');
      }
    }


    var factsCarousel = new Siema({
      selector: slidesContainerSelector,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      onInit: setCarouselSlideIndex,
      onChange: setCarouselSlideIndex,
    });


    if ($carouselPrevious.length > 0) {
      $carouselPrevious.unbind('click').click(function(evt) {
        evt.preventDefault();
        factsCarousel.prev();
      });
    }

    if ($carouselNext.length > 0) {
      $carouselNext.unbind('click').click(function(evt) {
        evt.preventDefault();
        factsCarousel.next();
      });
    }

    if ($carouselPagerLinks.length > 0) {
      $carouselPagerLinks.unbind('click').click(function(evt) {
        evt.preventDefault();
        factsCarousel.goTo( $(this).index() );
      });
    }

  });
})(jQuery);
