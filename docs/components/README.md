# Components
* These docs will outline expectations for components in the REPEAT library. Current expected structure is as follows.

## Drupal Structure
```
component/
  config/
    field.field.paragraph.{COMPONENT}.yml
    field.storage.paragraph.{COMPONENT}.yml
    paragraphs.paragraphs_type.{COMPONENT}.yml
    etc. as needed
  templates/
    paragraphs/
      paragraph--component.html.twig
  sass/
    _component-styles.scss

  *** if component uses JS ***
  js/
    custom.js
    vendor/
      vendor.js
  libraries.yml  
    -> appended to THEME/THEME.libraries.yml

  *** if module dependencies ***
  extensions.yml
  composer.yml
```

## WordPress Structure
* TBD
