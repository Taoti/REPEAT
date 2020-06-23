(function($) {

	"use strict";


	// initialize accordions and handle roll-up / roll-down.
	var $accordionContainers = $('.accordion');

	if ( !$accordionContainers.length ) return;


	$accordionContainers
		.find('.accordion__trigger--toggle-accordion')
		.unbind('click')
		.click(function(evt) {
			evt.preventDefault();

			var $this = $(this);
			var $thisAccordionContainer = $this.parent();
			var $thisAccordionContent = $this.next('.accordion__content');
			var $thisAccordionToggleLabel = $thisAccordionContainer.find('.accordion__toggle-label');

			if ( $thisAccordionContainer.hasClass('accordion--collapsed') ) {
				// expand it.
				$thisAccordionContainer.removeClass('accordion--collapsed');
				$thisAccordionToggleLabel.html('collapse and hide content')
				$thisAccordionContent.slideDown(750);
			}
			else {
				// collapse it.
				$thisAccordionContainer.addClass('accordion--collapsed');
				$thisAccordionToggleLabel.html('expand and show content')
				$thisAccordionContent.slideUp(750);
			}
		});

})(jQuery);
