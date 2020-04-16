# Themes
* Currently, Taoti themes for Drupal 8 use different structures and naming conventions, collected here for reference.

## Mimic-based Themes
```
themes/theme-name
  templates/paragraphs (with an 's')
  sass/
  
  * hfsa-d8, scai, usfs, ibhre, etc. (most common)
    0.config (missing in some)
    1.utilities
    2.global
    3.components
    4.content-types (new addition in some)

  * creative-forces-d8 (slight variation)
    1.utilities
    2.global
    3.layout (replacing 3.components above)
    4.components (shifted to #4)

  * fulbright-d8 (atomic design)
    00-fundamentals
    01-atoms
    02-molecules
    03-organisms

  * abt (another variation)
    base
    components
    layout
    print
    utilities
```

## Copycat-based Themes
```
themes/theme-name/
  templates/paragraph (without an 's')
  NO sass folder

* earth-lab-cu, arda, dcpcsb-d8, etc. (consistent structure for all copycat based themes)
  source/
    _patterns/
      00-global
      01-base
      02-layouts
      03-components
      04-templates
      05-pages
```
