# Themes
* Currently, Taoti themes use different structures and naming conventions, collected here for reference.

## Drupal 8
* Two basic flavors for Drupal 8 themes, Mimic-based, and Copycat-based (includes Pattern Lab integration)

### Mimic-based
```
themes/theme-name
  templates/
    paragraphs/ (with an 's')
      paragraph--component-name.html.twig
  js/
    component-name.js
    vendor/
      vendor.js
  sass/

    *** mimic (starter theme)
    1.utilities
    2.global
    3.components
      _component-name.scss

    *** hfsa-d8, scai, usfs, ibhre, etc. (most common)
    0.config (added)
    1.utilities
    2.global
    3.components
    4.content-types (added)

    *** creative-forces-d8 (slight variation)
    1.utilities
    2.global
    3.layout (replacing 3. above)
    4.components (moved up to 4.)

    *** abt (older variation)
    base
    components
    layout
    print
    utilities

    *** fulbright-d8 (atomic design, completely different)
    00-fundamentals
    01-atoms
    02-molecules
    03-organisms
    04-prototypes
```

### Copycat-based
```
themes/theme-name/
  templates/
    paragraph/ (without an 's')
      paragraph--component-name.html.twig
  js/
    component-name.js
    vendor/
      vendor.js
  source/ (NO sass folder)

    *** copycat, arda, arda, dcpcsb-d8, etc. (consistent structure for all copycat based themes)
    _patterns/
      00-global
      01-base
      02-layouts
      03-components
        _component-name.scss
      04-templates
      05-pages
```

## WordPress
* Very consistent structure and naming across WordPress themes, yet very different compared to Drupal themes above.

### JP-base
```
themes/theme-name
  modules
    componentName/    
      js/
        componentName.js
      scss/
        _componentName.scss
      views/
        componentName.twig
      componentName.php
```
