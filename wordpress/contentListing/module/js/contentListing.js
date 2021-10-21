// @todo Add docblocks to functions
// @todo Add descriptions to variables for docblocks
(function () {

  // Check URL params to make a pre filter
  // Check if we have filters and query params 
  if (jQuery('.js-filter-item').length > 0 && window.location.search != '') {
      
      
      // Set filters values on each filter based on query params
      if (getUrlParameter('topics') != undefined) {
          var topics = getUrlParameter('topics').split(',');
          console.log('hay ' + topics.length + ' topics');
          jQuery(topics).each(function(index) {
              jQuery('#topic-' + topics[index]).prop('checked', true);
          });
      }

      // Set filters values on each filter based on query params
      if (getUrlParameter('types') != undefined) {
          var types = getUrlParameter('types').split(',');
          jQuery(types).each(function(index) {
              jQuery('#type-' + types[index]).prop('checked', true);
          });
      }

      // Set filters values on each filter based on query params
      if (getUrlParameter('categories') != undefined) {
          var categories = getUrlParameter('categories').split(',');
          jQuery(categories).each(function(index) {
              jQuery('#category-' + categories[index]).prop('checked', true);
          });

          doResourcesFilter($('.js-filter-btn'));
      }
  }

  // Select All
  $('.js-select-all').on('change', function () {
      const $this = $(this);
      if ($this.prop('checked')) {
          $this.closest('.js-filter-group').find('.js-filter-item input[type="checkbox"]').prop('checked', true);
      } else {
          $this.closest('.js-filter-group').find('.js-filter-item input[type="checkbox"]').prop('checked', false);
      }
  });

  // Clear All
  $('.js-filter-clear').on('click', function () {
      const $this = $(this);
      $this.closest('.js-filter-sidebar').find('input[type="checkbox"]').prop('checked', false);
      $this.addClass('hide').hide();
  });

  // Toggle Clear All Link
  $('.js-filter-sidebar').find('input[type="checkbox"]').on('change', function () {
      const $clearAll = $('.js-filter-clear');
      if ($('.js-filter-sidebar').find('input[type="checkbox"]:checked').length) {
          if ($clearAll.hasClass('hide')) {
              $clearAll.removeClass('hide').show();
          }
      } else {
          $clearAll.addClass('hide').hide();
      }
  });

  // Filter
  $('.js-filter-btn').on('click', function () {
      doResourcesFilter(this);
  });
})()

// Filter Function
function doResourcesFilter(obj) {
  const $this = $(obj);

  if ($this.hasClass('working')) {
      return;
  }

  const resourcesTopics = [];
  $('.js-filter-item.resource-topic input[type=checkbox]:checked').each((index, item) => {
      resourcesTopics.push(item.value);
  });

  const resourcesTypes = [];
  $('.js-filter-item.resources-type input[type=checkbox]:checked').each((index, item) => {
      resourcesTypes.push(item.value);
  });

  const categories = [];
  $('.js-filter-item.resource-category input[type=checkbox]:checked').each((index, item) => {
      categories.push(item.value);
  });

  const roles = [];
  $('.js-filter-item.resource-role input[type=checkbox]:checked').each((index, item) => {
      roles.push(item.value);
  });

  const $resourcesContainer = $this.closest('.js-filter-sidebar').next('.js-resources-container');

  $resourcesContainer.addClass('working');
  $this.addClass('working');

  const params = { ...$this.get(0).dataset }; // k, sort, post-type, page
  const container = $this.attr('container');
  const $container = $(`${container}`)
  const $infiniteScrollBtn = $(`.js-infinite-scroll[container="${container}"]`);

  window.scrollTo({ top: $('.js-filter-sidebar').offset().top - 50, behavior: 'smooth' });

  buildQueryParameters(resourcesTopics, resourcesTypes, categories);

  $.ajax({
      url: taoti_js.ajax_url,
      method: 'POST',
      data: {
          action: 'load_more',
          topics: resourcesTopics.join(','),
          types: resourcesTypes.join(','),
          categories: categories.join(','),
          roles: roles.join(','),
          ...params,
      }, success: function (response) {
          if (response && response.success) {
              const { html, maxNumPages } = response.data;

              $container.html(html ? html : 'No records found.');

              if (maxNumPages > params.page) {
                  $infiniteScrollBtn.attr('data-page', 2).show();
              } else {
                  $infiniteScrollBtn.hide();
              }
          } else {
              $container.html('');
              $infiniteScrollBtn.hide();
          }
          $resourcesContainer.removeClass('working');
          $this.removeClass('working');
      }, error: function (error) {
          console.log(error);
          $resourcesContainer.removeClass('working');
          $this.removeClass('working');
      }
  });
}

// Helper function to get URL parameters
function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
};

// Add filters used to URL as params. This is used to save filters on URL to allow sharing
function buildQueryParameters(resourcesTopics, resourcesTypes, categories) {
var url_params = '';
var current_url = window.location.protocol + "//" + window.location.host + window.location.pathname;
if (resourcesTopics.length > 0) {
      url_params = '?topics=' + resourcesTopics.join(',');
  }
  if (resourcesTypes.length > 0) {
      if (url_params == '') 
          url_params += '?';
      else 
          url_params += '&';
      url_params += 'types=' + resourcesTypes.join(',');
  }
  if (categories.length > 0) {
      if (url_params == '') 
          url_params += '?';
      else 
          url_params += '&';
      url_params += 'categories=' + categories.join(',');
  }
current_url += url_params;
window.history.pushState({ path: current_url }, '', current_url);
}
