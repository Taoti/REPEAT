# REPEATification
* Here's the current steps I take to turn an existing component into a REPEAT component

## Step by Step
1. Add new component folder to `repeat/70/drupal`
2. Add folders for config, sass, templates, and js (optional)

### Config
3. In the config folder, add all relevant .yml files for the new component. These are fairly standard for paragraphs, and should include:
  * core.entity_form_display.paragraph.COMPONENT.yml
  * core.entity_view_display.paragraph.COMPONENT.yml
  * paragraphs.paragraphs_type.COMPONENT.yml
  * 
  field.field.paragraph.COMPONENT.FIELD.yml (multiple)
  * field.storage.paragraph.FIELD.yml (multiple)
4. For all configs, remove the first line for `uuid: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
5. For all field configs, rename the end of the file from `...field_NAME.yml` to `...repeat_NAME.yml`
6. For all configs, update any references to these renamed files in the .yml files themselves. So, this will be some version of a find and replace for
  * `: field_` and `.field_` 
  * to
  * `: repeat_` and `.repeat_`
7. Only include config necessary/changed - if necessary config is provided by default by the media module for example, require the media module instead of providing that config as well.

### Sass
8. Add relevant scss file to the sass folder
9. Refactor file, replacing things like includes for mixins that won't necessarily exist in the new site
10. Update styles to match the START library as closely as possible

### Templates
11. Add relevant twig file to an appropriate subfolder, e.g. in the case of paragraphs, create subfolder for `templates/paragraphs`. If you have only one twig file, it is fine to have it loose in your component folder in which case it will go to [destination_theme]/templates/[filename].
12. Refactor file, removing any external references that may not exist in the isolated component, and updating references to fields that have been renamed to `repeat`
  * Example `paragraph.field_image_position.value` would likely become `paragraph.repeat_image.position.value`

### JS
* If JS, more things happen that I will write about later...

### Component Level Metadata
* Create a `component.info.yml` to store metadata for the component. At minimum this should have `name` and `description` details entered. Full example:
```
name: 'Example'
description: 'An example component'
post-install notes: 'Some post install note that should be echo'd to user installing the component.'
dependencies:
  components:
    - machine_name_of_a_component
  composer:
    drupal/paragraphs: ^1.11
    symfony/something: ^5.0
  extensions:
    - paragraphs
    - drupal_module_n
```

### YML Files
* You will can extend theme yml files - for example [theme].libraries.yml by including a file in the root of the component named libraries.yml. This will be appended to the existing yml file if it exists, or create it. Any reference to `- theme/` will be replaced by `- [real theme machine name]/` on install.

### Theme hooks
* You can include theme hooks within a file named `component.theme` just name the hooks to the style of `function theme_preprocess_node...` and `theme` will be replaced with the correct theme machine name on install.
