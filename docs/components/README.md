# Components
* These docs will outline expectations for components in the REPEAT library

## Structure
* Current expected structure for each component is as follows:
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
    _component.scss

  * If using JS *
  js/
  	custom.behavior.js
  	vendor/
  		vendor-libraries.js
  libraries.yml  -> appended to THEME/THEME.libraries.yml
```
