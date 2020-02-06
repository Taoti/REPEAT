(function ($) {


  'use strict';


  $(document).ready(function() {

    var accordionSelector = '.accordion';

    if ( $(accordionSelector).length) {
      var $accordionContainers = $(accordionSelector);

      $accordionContainers
        .find('.accordion__summary')
        .unbind('click')
        .click(function(evt) {
          evt.preventDefault();
          toggleAccordion( $(this).parent() );
        })
        .keydown(function(evt) {
          if (evt.which == '13') {
            evt.preventDefault();
            toggleAccordion( $(this).parent() );  
          }
        });
    }

    // if there's an accordion group, expand the first accordion at DOM load.
    var accordionGroupSelector = '.accordion-group';

    if ( $(accordionGroupSelector).length) {
      var $accordionGroup = $(accordionGroupSelector);

      var firstAccordionTrigger = $accordionGroup.find('> .accordion:first-child() > .accordion__summary');
      firstAccordionTrigger.trigger('click');
    }


    function toggleAccordion($accordion) {
      var $thisAccordionDetails = $accordion.find('.accordion__details');
      var $thisAccordionIconLabel = $accordion.find('.accordion__icon-label');

      if ( $accordion.hasClass('accordion--open') ) {
        // close it.
        $accordion.removeClass('accordion--open');
        $thisAccordionIconLabel.html('Open and show details.')
        $thisAccordionDetails.slideUp(750);
      }
      else {
        // open it.
        $accordion.addClass('accordion--open');
        $thisAccordionIconLabel.html('Close and hide details.')
        $thisAccordionDetails.slideDown(750);
      }

    }

  });


})(jQuery);

