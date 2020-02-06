(window.webpackJsonp=window.webpackJsonp||[]).push([["pl-modal-viewer"],{"./src/scripts/components/modal-viewer.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/scroll-js/dist/scroll.js\nvar dist_scroll = __webpack_require__(\"./node_modules/scroll-js/dist/scroll.js\");\n\n// EXTERNAL MODULE: ./src/scripts/utils/index.js + 9 modules\nvar utils = __webpack_require__(\"./src/scripts/utils/index.js\");\n\n// EXTERNAL MODULE: ./node_modules/hogan.js/lib/hogan.js\nvar hogan = __webpack_require__(\"./node_modules/hogan.js/lib/hogan.js\");\nvar hogan_default = /*#__PURE__*/__webpack_require__.n(hogan);\n\n// EXTERNAL MODULE: ./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js\nvar prism_normalize_whitespace = __webpack_require__(\"./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js\");\nvar prism_normalize_whitespace_default = /*#__PURE__*/__webpack_require__.n(prism_normalize_whitespace);\n\n// EXTERNAL MODULE: ./node_modules/pretty/index.js\nvar pretty = __webpack_require__(\"./node_modules/pretty/index.js\");\nvar pretty_default = /*#__PURE__*/__webpack_require__.n(pretty);\n\n// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js + 3 modules\nvar lit_html = __webpack_require__(\"./node_modules/lit-html/lit-html.js\");\n\n// EXTERNAL MODULE: ./node_modules/lit-html/directives/unsafe-html.js\nvar unsafe_html = __webpack_require__(\"./node_modules/lit-html/directives/unsafe-html.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-core.js\nvar prism_core = __webpack_require__(\"./node_modules/prismjs/components/prism-core.js\");\nvar prism_core_default = /*#__PURE__*/__webpack_require__.n(prism_core);\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-markup-templating.js\nvar prism_markup_templating = __webpack_require__(\"./node_modules/prismjs/components/prism-markup-templating.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-markup.js\nvar prism_markup = __webpack_require__(\"./node_modules/prismjs/components/prism-markup.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-twig.js\nvar prism_twig = __webpack_require__(\"./node_modules/prismjs/components/prism-twig.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-clike.js\nvar prism_clike = __webpack_require__(\"./node_modules/prismjs/components/prism-clike.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-javascript.js\nvar prism_javascript = __webpack_require__(\"./node_modules/prismjs/components/prism-javascript.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-css.js\nvar prism_css = __webpack_require__(\"./node_modules/prismjs/components/prism-css.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-css-extras.js\nvar prism_css_extras = __webpack_require__(\"./node_modules/prismjs/components/prism-css-extras.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-scss.js\nvar prism_scss = __webpack_require__(\"./node_modules/prismjs/components/prism-scss.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-bash.js\nvar prism_bash = __webpack_require__(\"./node_modules/prismjs/components/prism-bash.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-markdown.js\nvar prism_markdown = __webpack_require__(\"./node_modules/prismjs/components/prism-markdown.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-yaml.js\nvar prism_yaml = __webpack_require__(\"./node_modules/prismjs/components/prism-yaml.js\");\n\n// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-handlebars.js\nvar prism_handlebars = __webpack_require__(\"./node_modules/prismjs/components/prism-handlebars.js\");\n\n// CONCATENATED MODULE: ./src/scripts/components/prism-languages.js\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar PrismLanguages = prism_core_default.a;\n// CONCATENATED MODULE: ./src/scripts/components/panels.js\n/**\n * Default Panels for Pattern Lab plus Panel related events\n *\n * note: config is coming from the default viewer and is passed through from PL's config\n */\n\n\nvar Panels = {\n  panels: [],\n  count: function count() {\n    return this.panels.length;\n  },\n  get: function get() {\n    return JSON.parse(JSON.stringify(Panels.panels));\n  },\n  add: function add(panel) {\n    // if ID already exists in panels array ignore the add()\n    for (var i = 0; i < this.panels.length; ++i) {\n      if (panel.id === this.panels[i].id) {\n        return;\n      }\n    } // it wasn't found so push the tab onto the tabs\n\n\n    this.panels.push(panel);\n  },\n  remove: function remove(id) {\n    var panels = this.panels;\n\n    for (var i = panels.length - 1; i >= 0; i--) {\n      if (panels[i].id === id) {\n        var panelToRemove = panels[i];\n        panels.splice(i, 1); //if removed panel was default, set first panel as new default, if exists\n\n        if (panelToRemove.default && panels.length) {\n          panels[0].default = true;\n        }\n\n        return; //should be no more panels with the same id\n      }\n    }\n  }\n};\n\nfunction init(event) {\n  // does the origin sending the message match the current host? if not dev/null the request\n  var fileSuffixPattern = window.config.outputFileSuffixes !== undefined && window.config.outputFileSuffixes.rawTemplate !== undefined ? window.config.outputFileSuffixes.rawTemplate : '';\n  var fileSuffixMarkup = window.config.outputFileSuffixes !== undefined && window.config.outputFileSuffixes.markupOnly !== undefined ? window.config.outputFileSuffixes.markupOnly : '.markup-only'; // add the default panels\n  // Panels.add({ 'id': 'pl-panel-info', 'name': 'info', 'default': true, 'templateID': 'pl-panel-template-info', 'httpRequest': false, 'prismHighlight': false, 'keyCombo': '' });\n\n  var languages = Object.keys(PrismLanguages.languages); // TODO: sort out pl-panel-html\n\n  Panels.add({\n    id: 'pl-panel-pattern',\n    name: window.config.patternExtension.toUpperCase(),\n    default: true,\n    templateID: 'pl-panel-template-code',\n    httpRequest: true,\n    httpRequestReplace: fileSuffixPattern,\n    httpRequestCompleted: false,\n    prismHighlight: true,\n    language: languages[window.config.patternExtension],\n    keyCombo: 'ctrl+shift+u'\n  });\n  Panels.add({\n    id: 'pl-panel-html',\n    name: 'HTML',\n    default: false,\n    templateID: 'pl-panel-template-code',\n    httpRequest: true,\n    httpRequestReplace: fileSuffixMarkup + '.html',\n    httpRequestCompleted: false,\n    prismHighlight: true,\n    language: 'markup',\n    keyCombo: 'ctrl+shift+y'\n  });\n\n  if (!window.patternlab) {\n    window.patternlab = {};\n  }\n\n  window.patternlab.panels = Panels;\n} // gather panels from plugins\n\n\nutils[\"Dispatcher\"].trigger('setupPanels');\ninit();\n// EXTERNAL MODULE: ./src/scripts/components/panels-util.js\nvar panels_util = __webpack_require__(\"./src/scripts/components/panels-util.js\");\n\n// EXTERNAL MODULE: ./src/scripts/components/pl-copy-to-clipboard/pl-copy-to-clipboard.js\nvar pl_copy_to_clipboard = __webpack_require__(\"./src/scripts/components/pl-copy-to-clipboard/pl-copy-to-clipboard.js\");\n\n// CONCATENATED MODULE: ./src/scripts/components/panels-viewer.js\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n                  <pre\\n                    class=\\\"language-markup\\\"\\n                  ><code id=\\\"pl-code-fill-\", \"\\\" class=\\\"language-\", \"\\\">\", \"</code></pre>\\n                \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n/**\n * Panel Builder - supports building the panels to be included in the modal or styleguide\n */\n\n/* eslint-disable no-param-reassign, no-unused-vars */\n\n\n\n\n\n\n\n\n\n\nvar normalizeWhitespace = new prism_normalize_whitespace_default.a({\n  'remove-trailing': true,\n  'remove-indent': true,\n  'left-trim': true,\n  'right-trim': true,\n  'break-lines': 100,\n  indent: 2,\n  'remove-initial-line-feed': true,\n  'tabs-to-spaces': 2,\n  'spaces-to-tabs': 2\n});\nvar panelsViewer = {\n  // set up some defaults\n  targetOrigin: window.location.protocol === 'file:' ? '*' : window.location.protocol + '//' + window.location.host,\n  initCopy: false,\n  initMoveTo: 0,\n\n  /**\n   * Check to see if all of the panels have been collected before rendering\n   * @param  {String}      the collected panels\n   * @param  {String}      the data from the pattern\n   * @param  {Boolean}     if this is going to be passed back to the styleguide\n   */\n  checkPanels: function checkPanels(panels, patternData, iframePassback, switchText) {\n    // count how many panels have rendered content\n    var panelContentCount = 0;\n\n    for (var i = 0; i < panels.length; ++i) {\n      if (panels[i].content !== undefined) {\n        panelContentCount++;\n      }\n    } // see if the count of panels with content matches number of panels\n\n\n    if (panelContentCount === Panels.count()) {\n      panelsViewer.renderPanels(panels, patternData, iframePassback, switchText);\n    }\n  },\n\n  /**\n   * Gather the panels related to the modal\n   * @param  {String}      the data from the pattern\n   * @param  {Boolean}     if this is going to be passed back to the styleguide\n   */\n  gatherPanels: function gatherPanels(patternData, iframePassback, switchText) {\n    utils[\"Dispatcher\"].addListener('checkPanels', panelsViewer.checkPanels); // set-up defaults\n\n    var template, templateCompiled, templateRendered, templateFormatted; // get the base panels\n\n    var panels = Panels.get(); // evaluate panels array and create content\n\n    for (var i = 0; i < panels.length; ++i) {\n      var panel = panels[i]; // catch pattern panel since it doesn't have a name defined by default\n\n      if (panel.name === undefined) {\n        panel.name = patternData.patternEngineName || patternData.patternExtension;\n        panel.language = patternData.patternExtension;\n      } // if httpRequestReplace has not been set, use the extension. this is likely for the raw template\n\n\n      if (panel.httpRequestReplace === undefined) {\n        panel.httpRequestReplace = '';\n      }\n\n      if (panel.httpRequestReplace === '') {\n        panel.httpRequestReplace = panel.httpRequestReplace + '.' + patternData.patternExtension;\n      }\n\n      if (panel.templateID !== undefined && panel.templateID) {\n        if (panel.httpRequest !== undefined && panel.httpRequest) {\n          // need a file and then render\n          var fileBase = utils[\"urlHandler\"].getFileName(patternData.patternPartial, false);\n          var e = new XMLHttpRequest(); // @todo: look deeper into how we can refactor this particular code block\n\n          /* eslint-disable */\n\n          e.onload = function (i, panels, patternData, iframeRequest) {\n            return function () {\n              // since non-existant files (such as .scss from plugin-tab) still return a 200, we need to instead inspect the contents\n              // we look for responseText that starts with the doctype\n              var rText = this.responseText;\n\n              if (rText.startsWith('<!DOCTYPE html>')) {\n                rText = '';\n              } // use pretty to format HTML\n\n\n              if (panels[i].name === 'HTML') {\n                templateFormatted = pretty_default()(rText, {\n                  ocd: true\n                });\n              } else {\n                templateFormatted = rText;\n              }\n\n              var templateHighlighted = PrismLanguages.highlight(templateFormatted, PrismLanguages.languages[panels[i].name.toLowerCase()] || PrismLanguages.languages['markup'] // Prism.languages[panels[i].name.toLowerCase()],\n              );\n\n              var codeTemplate = function codeTemplate(code, language) {\n                return Object(lit_html[\"html\"])(_templateObject(), language, language, Object(unsafe_html[\"unsafeHTML\"])(code));\n              };\n\n              var result = document.createDocumentFragment();\n              var fallBackResult = document.createDocumentFragment();\n              Object(lit_html[\"render\"])(codeTemplate(templateHighlighted, 'html'), result);\n              Object(lit_html[\"render\"])(codeTemplate(templateFormatted, 'html'), fallBackResult);\n\n              if (result.children) {\n                panels[i].content = result.children[0].outerHTML;\n              } else if (fallBackResult.children) {\n                panels[i].content = fallBackResult.children[0].outerHTML;\n              } else {\n                panels[i].content = '<pre class=\"language-markup\"><code id=\"pl-code-fill-html\" class=\"language-html\">' + templateFormatted.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>';\n              }\n\n              utils[\"Dispatcher\"].trigger('checkPanels', [panels, patternData, iframePassback, switchText]);\n            };\n          }(i, panels, patternData, iframePassback);\n          /* eslint-enable */\n\n\n          e.open('GET', fileBase + panel.httpRequestReplace + '?' + new Date().getTime(), true);\n          e.send();\n        } else {\n          // vanilla render of pattern data\n          template = document.getElementById(panel.templateID);\n          templateCompiled = hogan_default.a.compile(template.innerHTML);\n          templateRendered = templateCompiled.render(patternData);\n          var normalizedCode = normalizeWhitespace.normalize(templateRendered);\n          normalizedCode.replace(/[\\r\\n]+/g, '\\n\\n');\n          var highlightedCode = PrismLanguages.highlight(normalizedCode, PrismLanguages.languages.html);\n          panels[i].content = highlightedCode;\n          utils[\"Dispatcher\"].trigger('checkPanels', [panels, patternData, iframePassback, switchText]);\n        }\n      }\n    }\n  },\n\n  /**\n   * Render the panels that have been collected\n   * @param  {String}      the collected panels\n   * @param  {String}      the data from the pattern\n   * @param  {Boolean}     if this is going to be passed back to the styleguide\n   */\n  renderPanels: function renderPanels(panels, plData, iframePassback, switchText) {\n    // set-up defaults\n    var patternData = plData; // prevents params from getting re-assigned\n\n    var templateRendered;\n    var annotation, count, els, item;\n    var patternPartial = patternData.patternPartial;\n    patternData.panels = panels; // set a default pattern description for modal pop-up\n\n    if (!iframePassback && patternData.patternDesc.length === 0) {\n      patternData.patternDesc = '';\n    } // capitilize the pattern name\n\n\n    patternData.patternNameCaps = patternData.patternName.toUpperCase(); // check for annotations in the given mark-up\n\n    var markup = document.createElement('div');\n    markup.innerHTML = patternData.patternMarkup;\n    count = 1;\n    patternData.annotations = [];\n    delete patternData.patternMarkup;\n\n    for (var i = 0; i < window.comments.comments.length; ++i) {\n      item = window.comments.comments[i];\n      els = markup.querySelectorAll(item.el);\n\n      if (els.length > 0) {\n        annotation = {\n          displayNumber: count,\n          el: item.el,\n          title: item.title,\n          comment: item.comment\n        };\n        patternData.annotations.push(annotation);\n        count++;\n      }\n    } // alert the pattern that annotations should be highlighted\n\n\n    if (patternData.annotations.length > 0) {\n      var obj = JSON.stringify({\n        event: 'patternLab.annotationsHighlightShow',\n        annotations: patternData.annotations\n      });\n      document.querySelector('.pl-js-iframe').contentWindow.postMessage(obj, panelsViewer.targetOrigin);\n    } // add hasComma property to lineage\n\n\n    if (patternData.lineage.length > 0) {\n      for (var _i = 0; _i < patternData.lineage.length; ++_i) {\n        if (_i < patternData.lineage.length - 1) {\n          patternData.lineage[_i].hasComma = true;\n        }\n      }\n    } // add hasComma property to lineageR\n\n\n    if (patternData.lineageR.length > 0) {\n      for (var _i2 = 0; _i2 < patternData.lineageR.length; ++_i2) {\n        if (_i2 < patternData.lineageR.length - 1) {\n          patternData.lineageR[_i2].hasComma = true;\n        }\n      }\n    } // add *Exists attributes for Hogan templates\n    // figure out if the description exists\n\n\n    patternData.patternDescExists = patternData.patternDesc.length > 0 || patternData.patternDescAdditions !== undefined && patternData.patternDescAdditions.length > 0; // figure out if lineage should be drawn\n\n    patternData.lineageExists = patternData.lineage.length !== 0; // figure out if reverse lineage should be drawn\n\n    patternData.lineageRExists = patternData.lineageR.length !== 0; // figure out if pattern state should be drawn\n\n    patternData.patternStateExists = patternData.patternState.length > 0; // figure if annotations should be drawn\n\n    patternData.annotationExists = patternData.annotations.length > 0; // figure if the entire desc block should be drawn\n\n    patternData.descBlockExists = patternData.patternDescExists || patternData.lineageExists || patternData.lineageRExists || patternData.patternStateExists || patternData.annotationExists; // set isPatternView based on if we have to pass it back to the styleguide level\n\n    patternData.isPatternView = iframePassback === false; // render all of the panels in the base panel template\n\n    var template = document.querySelector('.pl-js-panel-template-base');\n    var templateCompiled = hogan_default.a.compile(template.innerHTML);\n    templateRendered = templateCompiled.render(patternData); // make sure templateRendered is modified to be an HTML element\n\n    var div = document.createElement('div');\n    div.className = 'pl-c-pattern-info';\n    div.innerHTML = templateRendered;\n    templateRendered = div; // add click events\n\n    templateRendered = panels_util[\"panelsUtil\"].addClickEvents(templateRendered, patternPartial); // add onclick events to the tabs in the rendered content\n\n    for (var _i3 = 0; _i3 < panels.length; ++_i3) {\n      var panel = panels[_i3]; // default IDs\n\n      var panelTab = '#pl-' + patternPartial + '-' + panel.id + '-tab';\n      var panelBlock = '#pl-' + patternPartial + '-' + panel.id + '-panel'; // show default options\n\n      if (templateRendered.querySelector(panelTab) !== null && panel.default) {\n        templateRendered.querySelector(panelTab).classList.add('pl-is-active-tab');\n        templateRendered.querySelector(panelBlock).classList.add('pl-is-active-tab');\n      }\n    } // gather panels from plugins\n\n\n    utils[\"Dispatcher\"].trigger('insertPanels', [templateRendered, patternPartial, iframePassback, switchText]);\n  }\n};\n/**\n * Pattern panel resizer\n * 1) Add mousedown event listener to the modal resizer tab\n * 2) Display block on the modal cover when the panel is being dragged so fast\n * drags can occur.\n * 3) Create mousemove event on the cover since it spans the entire screen and\n * the mouse can be dragged into it without losing resizing\n * 4) Find the new panel height by taking the window height and subtracting the\n * Y-position within the modal cover. Set modal height to this.\n * 5) Add mouseup event to the body so that when drag is released, the modal\n * stops resizing and modal cover doesn't display anymore.\n */\n// EXTERNAL MODULE: ./src/scripts/store.js + 20 modules\nvar store = __webpack_require__(\"./src/scripts/store.js\");\n\n// EXTERNAL MODULE: ./src/scripts/actions/app.js\nvar app = __webpack_require__(\"./src/scripts/actions/app.js\");\n\n// CONCATENATED MODULE: ./src/scripts/components/modal-viewer.js\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalViewer\", function() { return modalViewer; });\n/* eslint-disable no-unused-vars */\n\n/**\n * \"Modal\" (aka Panel UI) for the Viewer Layer - for both annotations and code/info\n */\n\n\n\n // These are the actions needed by this element.\n\n\nvar modalViewer = {\n  // set up some defaults\n  delayCheckingModalViewer: false,\n  iframeElement: document.querySelector('.pl-js-iframe'),\n  iframeCustomElement: document.querySelector('pl-iframe'),\n  active: false,\n  switchText: true,\n  template: 'info',\n  patternData: {},\n  targetOrigin: window.location.protocol === 'file:' ? '*' : window.location.protocol + '//' + window.location.host,\n\n  /**\n   * initialize the modal window\n   */\n  onReady: function onReady() {\n    window.addEventListener('message', modalViewer.receiveIframeMessage, false); // make sure the listener for checkpanels is set-up\n\n    utils[\"Dispatcher\"].addListener('insertPanels', modalViewer.insert);\n    modalViewer.__storeUnsubscribe = store[\"store\"].subscribe(function () {\n      return modalViewer._stateChanged(store[\"store\"].getState());\n    });\n\n    modalViewer._stateChanged(store[\"store\"].getState()); // check query strings to handle auto-opening behavior\n\n\n    var queryStringVars = utils[\"urlHandler\"].getRequestVars(); // show the modal if code view is called via query string\n\n    if (queryStringVars.view !== undefined && (queryStringVars.view === 'code' || queryStringVars.view === 'c' || queryStringVars.view === 'annotations' || queryStringVars.view === 'a')) {\n      store[\"store\"].dispatch(Object(app[\"updateDrawerState\"])(true));\n    }\n  },\n\n  /**\n   * toggle the modal window open and closed\n   */\n  toggle: function toggle() {\n    if (modalViewer.active) {\n      store[\"store\"].dispatch(Object(app[\"updateDrawerState\"])(false));\n    } else {\n      store[\"store\"].dispatch(Object(app[\"updateDrawerState\"])(true));\n    }\n  },\n\n  /**\n   * open the modal window\n   */\n  open: function open() {\n    modalViewer.queryPattern(); // Show annotations if data is available and modal is open\n\n    if (modalViewer.patternData) {\n      if (modalViewer.patternData.annotations && modalViewer.patternData.annotations.length > 0) {\n        var obj = JSON.stringify({\n          event: 'patternLab.annotationsHighlightShow',\n          annotations: modalViewer.patternData.annotations\n        });\n\n        if (modalViewer.iframeElement.contentWindow) {\n          modalViewer.iframeElement.contentWindow.postMessage(obj, modalViewer.targetOrigin);\n        } else {\n          modalViewer.iframeElement = document.querySelector('.pl-js-iframe');\n\n          if (modalViewer.iframeElement.contentWindow) {\n            modalViewer.open();\n          } else {\n            console.log('modelViewer open cannot find the iframeElement...');\n          }\n        }\n      }\n    }\n  },\n\n  /**\n   * close the modal window\n   */\n  close: function close() {\n    // tell the styleguide to close\n    var obj = JSON.stringify({\n      event: 'patternLab.patternModalClose'\n    });\n\n    if (modalViewer.iframeElement) {\n      if (modalViewer.iframeElement.contentWindow) {\n        modalViewer.iframeElement.contentWindow.postMessage(obj, modalViewer.targetOrigin);\n        var obj2 = JSON.stringify({\n          event: 'patternLab.annotationsHighlightHide'\n        });\n        modalViewer.iframeElement.contentWindow.postMessage(obj2, modalViewer.targetOrigin);\n      } else {\n        modalViewer.iframeElement = document.querySelector('.pl-js-iframe');\n\n        if (modalViewer.iframeElement.contentWindow) {\n          modalViewer.close();\n        } else {\n          console.log('modelViewer close cannot find the iframeElement...');\n        }\n      }\n    }\n  },\n\n  /**\n   * insert the copy for the modal window. if it's meant to be sent back to the iframe, do that.\n   * @param  {String}       the rendered template that should be inserted\n   * @param  {String}       the patternPartial that the rendered template is related to\n   * @param  {Boolean}      if the refresh is of a view-all view and the content should be sent back\n   * @param  {Boolean}      if the text in the dropdown should be switched\n   */\n  insert: function insert(templateRendered, patternPartial, iframePassback, switchText) {\n    if (iframePassback) {\n      // send a message to the pattern\n      var obj = JSON.stringify({\n        event: 'patternLab.patternModalInsert',\n        patternPartial: patternPartial,\n        modalContent: templateRendered.outerHTML\n      });\n\n      if (modalViewer.iframeElement.contentWindow) {\n        modalViewer.iframeElement.contentWindow.postMessage(obj, modalViewer.targetOrigin);\n      } else {\n        modalViewer.iframeElement = document.querySelector('.pl-js-iframe');\n\n        if (modalViewer.iframeElement.contentWindow) {\n          modalViewer.insert(templateRendered, patternPartial, iframePassback);\n        } else {\n          console.log('modelViewer insert cannot find the iframeElement...');\n        }\n      }\n    } else {\n      var contentContainer = document.querySelector('.pl-js-drawer-content'); // Clear out any existing children before appending the new panel content\n\n      if (contentContainer.firstChild !== null) {\n        contentContainer.removeChild(contentContainer.firstChild);\n      }\n\n      contentContainer.appendChild(templateRendered);\n      modalViewer.addClickEvents(contentContainer);\n    }\n  },\n  addClickEvents: function addClickEvents() {\n    var contentContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n    contentContainer.querySelectorAll('.pl-js-lineage-link').forEach(function (link) {\n      link.addEventListener('click', function (e) {\n        var patternPartial = e.target.getAttribute('data-patternpartial');\n\n        if (patternPartial && modalViewer.iframeCustomElement) {\n          e.preventDefault();\n          modalViewer.iframeCustomElement.navigateTo(patternPartial);\n        }\n      });\n    });\n  },\n\n  /**\n   * refresh the modal if a new pattern is loaded and the modal is active\n   * @param  {Object}       the patternData sent back from the query\n   * @param  {Boolean}      if the refresh is of a view-all view and the content should be sent back\n   * @param  {Boolean}      if the text in the dropdown should be switched\n   */\n  refresh: function refresh(patternData, iframePassback, switchText) {\n    // if this is a styleguide view close the modal\n    if (iframePassback) {\n      modalViewer.close();\n    }\n\n    modalViewer.patternData = patternData; // gather the data that will fill the modal window\n\n    panelsViewer.gatherPanels(patternData, iframePassback, switchText);\n  },\n\n  /**\n   * slides the modal window into or out of view\n   * @param  {Integer}      where the modal window should be slide to\n   */\n  slide: function slide(pos) {\n    modalViewer.toggle();\n  },\n\n  /**\n   * slides the modal window to a particular annotation\n   * @param  {Integer}      the number for the element that should be highlighted\n   */\n  slideToAnnotation: function slideToAnnotation(pos) {\n    // remove active class\n    var els = document.querySelectorAll('.pl-js-annotations li');\n\n    for (var i = 0; i < els.length; ++i) {\n      els[i].classList.remove('pl-is-active');\n    }\n\n    var patternInfoElem = document.querySelector('.pl-js-pattern-info'); // const scroll = new Scroll(patternInfoElem);\n    // add active class to called element and scroll to it\n\n    for (var _i = 0; _i < els.length; ++_i) {\n      if (_i + 1 === pos) {\n        els[_i].classList.add('pl-is-active');\n\n        Object(dist_scroll[\"scrollTo\"])(patternInfoElem, document.body, {\n          top: els[_i].offsetTop - 14,\n          behavior: 'smooth'\n        }).then(function () {// console.log('finished scrolling');\n        });\n      }\n    }\n  },\n\n  /**\n   * ask the pattern for info so we can open the modal window and populate it\n   * @param  {Boolean}      if the dropdown text should be changed\n   */\n  queryPattern: function queryPattern(switchText) {\n    // send a message to the pattern\n    var obj = JSON.stringify({\n      event: 'patternLab.patternQuery',\n      switchText: switchText\n    }); // only emit this when the iframe element exists.\n    // @todo: refactor to better handle async UI rendering\n\n    if (modalViewer.iframeElement) {\n      if (modalViewer.iframeElement.contentWindow) {\n        modalViewer.iframeElement.contentWindow.postMessage(obj, modalViewer.targetOrigin);\n      } else {\n        modalViewer.iframeElement = document.querySelector('.pl-js-iframe');\n\n        if (modalViewer.iframeElement.contentWindow) {\n          modalViewer.queryPattern(switchText);\n        } else {\n          console.log('queryPattern cannot find the iframeElement...');\n        }\n      }\n    } else {\n      modalViewer.iframeElement = document.querySelector('.pl-js-iframe');\n\n      if (modalViewer.iframeElement.contentWindow) {\n        modalViewer.iframeElement.contentWindow.postMessage(obj, modalViewer.targetOrigin);\n      }\n    }\n  },\n\n  /**\n   * toggle the comment pop-up based on a user clicking on the pattern\n   * based on the great MDN docs at https://developer.mozilla.org/en-US/docs/Web/API/window.postMessage\n   * @param  {Object}      event info\n   */\n  receiveIframeMessage: function receiveIframeMessage(event) {\n    // does the origin sending the message match the current host? if not dev/null the request\n    if (window.location.protocol !== 'file:' && event.origin !== window.location.protocol + '//' + window.location.host) {\n      return;\n    }\n\n    var data = {};\n\n    try {\n      data = typeof event.data !== 'string' ? event.data : JSON.parse(event.data);\n    } catch (e) {// @todo: how do we want to handle exceptions here?\n    }\n\n    if (data.event !== undefined && data.event === 'patternLab.pageLoad') {\n      // @todo: refactor to better handle async iframe loading\n      // extra check to make sure the PL drawer will always render even if the iframe gets async loaded / rendered.\n      if (modalViewer.delayCheckingModalViewer) {\n        modalViewer._handleInitialModalViewerState();\n      }\n\n      if (data.patternpartial.indexOf('viewall-') === 0 || data.patternpartial.indexOf('all') === 0) {\n        store[\"store\"].dispatch(Object(app[\"isViewallPage\"])(true));\n      } else {\n        store[\"store\"].dispatch(Object(app[\"isViewallPage\"])(false));\n      }\n\n      if (modalViewer.active === false && data.patternpartial !== undefined && data.patternpartial.indexOf('viewall-') === 0 && window.config.defaultShowPatternInfo !== undefined && window.config.defaultShowPatternInfo) {\n        modalViewer.queryPattern(false);\n      } else if (modalViewer.active === true) {\n        modalViewer.queryPattern();\n      }\n    } else if (data.event !== undefined && data.event === 'patternLab.patternQueryInfo') {\n      if (!modalViewer.panelRendered || modalViewer.previouslyRenderedPattern !== data.patternData.patternPartial) {\n        // refresh the modal contents, but only when necessary (ex. when the page changes) -- prevents extra, unnecessary re-renders of content.\n        modalViewer.refresh(data.patternData, data.iframePassback, data.switchText);\n        modalViewer.panelRendered = true;\n        modalViewer.previouslyRenderedPattern = data.patternData.patternPartial;\n      }\n    } else if (data.event !== undefined && data.event === 'patternLab.annotationNumberClicked') {\n      // slide to a given annoation\n      modalViewer.slideToAnnotation(data.displayNumber);\n    }\n  },\n  _handleInitialModalViewerState: function _handleInitialModalViewerState() {\n    // try to re-locate the iframe element if this UI logic ran too early and the iframe component wasn't yet rendered\n    if (!modalViewer.iframeElement) {\n      modalViewer.iframeElement = document.querySelector('.pl-js-iframe');\n    } // only try to auto-open / auto-close the drawer UI if the iframe element exists\n    // @todo: refactor to better handle async UI rendering\n\n\n    if (modalViewer.iframeElement) {\n      modalViewer.delayCheckingModalViewer = false;\n\n      if (modalViewer.active) {\n        modalViewer.open();\n      } else {\n        modalViewer.close();\n      }\n    } else {\n      modalViewer.delayCheckingModalViewer = true;\n    }\n  },\n  _stateChanged: function _stateChanged(state) {\n    modalViewer.active = state.app.drawerOpened;\n\n    if (modalViewer.iframeElement) {\n      modalViewer._handleInitialModalViewerState();\n    }\n  }\n};\nmodalViewer.onReady();\n\n//# sourceURL=webpack:///./src/scripts/components/modal-viewer.js_+_3_modules?")},"./src/scripts/components/panels-util.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panelsUtil", function() { return panelsUtil; });\n/* eslint-disable no-unused-vars */\n\n/**\n * Panels Util - for both styleguide and viewer\n */\nvar panelsUtil = {\n  /**\n   * Add click events to the template that was rendered\n   * @param  {String}      the rendered template for the modal\n   * @param  {String}      the pattern partial for the modal\n   */\n  addClickEvents: function addClickEvents(templateRendered, patternPartial) {\n    var els = templateRendered.querySelectorAll(\'.pl-js-tab-link\');\n\n    for (var i = 0; i < els.length; ++i) {\n      els[i].onclick = function (e) {\n        e.preventDefault();\n        var partial = this.getAttribute(\'data-patternpartial\');\n        var panelID = this.getAttribute(\'data-panelid\');\n        panelsUtil.show(partial, panelID);\n      };\n    }\n\n    return templateRendered;\n  },\n\n  /**\n   * Show a specific modal\n   * @param  {String}      the pattern partial for the modal\n   * @param  {String}      the ID of the panel to be shown\n   */\n  show: function show(patternPartial, panelID) {\n    var activeTabClass = \'pl-is-active-tab\'; // tabPanelabout to become active\n\n    var activeTabPanel = document.querySelector("#pl-".concat(patternPartial, "-").concat(panelID, "-panel"));\n    var parentTabs = activeTabPanel.closest(\'.pl-js-tabs\'); // turn off all of the active tabs\n\n    var allTabLinks = parentTabs.querySelectorAll(".pl-js-tab-link"); // hide all of the panels\n\n    var allTabPanels = parentTabs.querySelectorAll(".pl-js-tab-panel"); // tabLink about to become active\n\n    var activeTabLink = parentTabs.querySelector("#pl-".concat(patternPartial, "-").concat(panelID, "-tab"));\n\n    for (var i = 0; i < allTabLinks.length; ++i) {\n      allTabLinks[i].classList.remove(activeTabClass);\n    }\n\n    for (var _i = 0; _i < allTabPanels.length; ++_i) {\n      allTabPanels[_i].classList.remove(activeTabClass);\n    }\n\n    activeTabLink.classList.add(activeTabClass);\n    activeTabPanel.classList.add(activeTabClass);\n  }\n};\n\n//# sourceURL=webpack:///./src/scripts/components/panels-util.js?')},"./src/scripts/components/pl-copy-to-clipboard/pl-copy-to-clipboard.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipboard */ \"./node_modules/clipboard/dist/clipboard.js\");\n/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Copy to clipboard functionality for code snippet examples\n */\n\nvar clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_0___default.a('.pl-js-code-copy-btn');\nclipboard.on('success', function (e) {\n  var copyButton = document.querySelectorAll('.pl-js-code-copy-btn');\n\n  for (var i = 0; i < copyButton.length; i++) {\n    copyButton[i].innerText = 'Copy';\n  }\n\n  e.trigger.textContent = 'Copied';\n});\n\n//# sourceURL=webpack:///./src/scripts/components/pl-copy-to-clipboard/pl-copy-to-clipboard.js?")}}]);