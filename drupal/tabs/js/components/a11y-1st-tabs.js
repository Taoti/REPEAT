// JS Fiddle https://jsfiddle.net/link2twenty/v2d1htzx/
// Tabs built based on the article at https://dev.to/link2twenty/accessibility-first-tabs-ken
(function($) {

  "use strict";

class TabController {
  constructor(container) {
    this.container = document.querySelector(container);
    this.tablist = this.container.querySelector('[role=tablist]');
    this.tabs = this.container.querySelectorAll('[role=tab]');
    this.tabpanels = this.container.querySelectorAll('[role=tabpanel]');
    this.activeTab = this.container.querySelector('[role=tab][aria-selected=true]');

    this._addEventListeners();
  }

  // Private function to set event listeners
  _addEventListeners() {
    for (let tab of this.tabs) {
      tab.addEventListener('click', e => {
        e.preventDefault();
        this.setActiveTab(tab.getAttribute('aria-controls'));
      });
      tab.addEventListener('keydown', e => {
        if (e.keyCode == 13 || e.keyCode == 32) { // return or space
          e.preventDefault();
          this.setActiveTab(tab.getAttribute('aria-controls'));
        }
      })
    }
    this.tablist.addEventListener('keyup', e => {
      switch (e.keyCode) {
        case 35: // end key
          e.preventDefault();
          this.setActiveTab(this.tabs[this.tabs.length - 1].getAttribute('aria-controls'));
          break;
        case 36: // home key
          e.preventDefault();
          this.setActiveTab(this.tabs[0].getAttribute('aria-controls'));
          break;
        case 37: // left arrow
          e.preventDefault();
          let previous = [...this.tabs].indexOf(this.activeTab) - 1;
          previous = previous >= 0 ? previous : this.tabs.length - 1;
          this.setActiveTab(this.tabs[previous].getAttribute('aria-controls'));
          break;
        case 39: // right arrow
          e.preventDefault();
          let next = [...this.tabs].indexOf(this.activeTab) + 1;
          next = next < this.tabs.length ? next : 0
          this.setActiveTab(this.tabs[next].getAttribute('aria-controls'));
          break;
      }
    })
  }

  // Public function to set the tab by id
  // This can be called by the developer too.
  setActiveTab(id) {
    for (let tab of this.tabs) {
      if (tab.getAttribute('aria-controls') == id) {
        tab.setAttribute('aria-selected', "true");
        tab.focus();
        this.activeTab = tab;
      } else {
        tab.setAttribute('aria-selected', "false");
      }
    }
    for (let tabpanel of this.tabpanels) {
      if (tabpanel.getAttribute('id') == id) {
        tabpanel.setAttribute('aria-expanded', "true");
      } else {
        tabpanel.setAttribute('aria-expanded', "false");
      }
    }
  }
}

const tabElements = document.querySelectorAll('.paragraph--repeat-tabbed-content .tab-container');
const tabControllers = [];

for (let i = 0; i < tabElements.length; i++ ) {
  let tabWidgetId = '#' + tabElements[i].getAttribute('id');
  tabControllers[i] = new TabController(tabWidgetId);
}  

})(jQuery);