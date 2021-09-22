(function($) {
	"use strict";

	$(document).ready(playanate);


	function playanate() {
		jQuery('.node--type-story__lb-header-audio-cta').on('keypress click', (event) => {
			event.preventDefault();
			let audio = jQuery(event.currentTarget).parent().find('.node--type-story__lb-header-audio-media audio');
			if ($(event.currentTarget).hasClass('playing')) {
				$(event.currentTarget).removeClass('playing');
				$(event.currentTarget).find('.audio-text').text('Play audio:');
				$(event.currentTarget).attr('aria-label', 'Play audio:');
				audio.trigger('pause');
			}
			else {
				$(event.currentTarget).addClass('playing');
				$(event.currentTarget).find('.audio-text').text('Pause audio:');
				$(event.currentTarget).attr('aria-label', 'Pause audio');
				audio.trigger('play');
			}
		});
	}
})(jQuery);