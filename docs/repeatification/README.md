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

### Sass
7. Add relevant scss file to the sass folder
8. Refactor file, replacing things like includes for mixins that won't necessarily exist in the new site
9. Update styles to match the START library as closely as possible

### Templates
10. Add relevant twig file to an appropriate subfolder, e.g. in the case of paragraphs, create subfolder for `templates/paragraphs`
11. Refactor file, removing any external references that may not exist in the isolated component, and updating references to fields that have been renamed to `repeat`
  * Example `paragraph.field_image_position.value` would likely become `paragraph.repeat_image.position.value`

### JS
* If JS, more things happen that I will write about later...

### YML Files
* You will also add some other .yml files to the new component folder, including
  * composer.yml
  * extensions.yml
  * and more to come...

## Additional Notes
* Nick's notes on what configs to include: "I think the best option is to only include new or significantly changed config.
Like if you depend on a core or module provided config, as long as you declare that you depend on that module, then don't include the config (for example, core media types, image styles). That should make it the safest to install in the most conditions."
