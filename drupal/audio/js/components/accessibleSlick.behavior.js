(function ($) {

	"use strict";

	$(document).ready(slickenate);


	function slickenate() {

		jQuery('.field--name-field-slide-node').slick({
			slidesToShow: 1,
			dots: false,
			arrows: true,
			centerMode: false,
			infinite: true
		});

		jQuery( '.slick-arrow').on('keypress click', (event) => {
			jQuery('audio').each(function(){
				this.pause(); // Stop audio on frame change
			});
			jQuery('.node--type-story__lb-header-audio-cta').attr('title', 'Play audio:');
			jQuery('.audio-text').text('Play audio:');
		});

		jQuery( '.paragraph--accessible-slick-slider' ).keydown(function() {
			jQuery('.slick-slide audio').attr('tabindex', '-1');
			jQuery('.slick-slide.slick-active audio').attr('tabindex', '0');
		});

	}

})(jQuery);




(function ($) {

	"use strict";

	$(document).ready(slickenate);


	function slickenate() {

		jQuery('.field--name-field-slide-node').slick({
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


		jQuery( '.slick-arrow').on('keypress click', (event) => {
			jQuery('audio').each(function(){
				this.pause(); // Stop audio on frame change
			});
			jQuery('.node--type-story__lb-header-audio-cta').attr('title', 'Play audio:');
			jQuery('.audio-text').text('Play audio:');
		});

		jQuery( '.paragraph--accessible-slick-slider' ).keydown(function() {
			jQuery('.slick-slide audio').attr('tabindex', '-1');
			jQuery('.slick-slide.slick-active audio').attr('tabindex', '0');
		});
	}

})(jQuery);
