(function ($) {

	$(document).ready(function($) {

		var styledValueSelector = '.styledValue';
		if ( !$(styledValueSelector).length ) return;

		inView('.styledValue').on('enter', function(el){
			var current = 0;
			$(el).once('countup').each(function() {

				var $this = $(this),
						countTo = $this.attr('data-count'),
						$time = 0;

				if ( $this.hasClass('field--name-field-percentage-one') ) {
					$time = 3563;
				}
				else if ( $this.hasClass('field--name-field-percentage-two') ) {
					$time = 2471;
				}
				else {
					$time = 5000;
				}

				setTimeout(function() {
					$({ countNum: $this.text()}).animate({
						countNum: countTo,
					},
					{
						duration: $time,
						easing:'linear',
						step: function() {
							$this.find('strong').html(Math.floor(this.countNum));
						},
						complete: function() {
							$this.find('strong').html(this.countNum);
						}
					});
				}, 1000);
			});
		});

	})

})(jQuery);