# Paragraphs
* Relevant to both the 70/30 initiative and the Better Build Spec initiative, this is an in-progress list of Drupal paragraphs intended for import into future D8 builds.

## Demo
* A small number of paragraphs have been successfully tested using the REPEAT-CLI to import into new builds. So far, these have been taken directly from existing projects.

### Demo Paragraphs
* [Creative Forces - Impact Statistics](https://github.com/Taoti/REPEAT/tree/master/70/drupal/cf-impact-statistics) - second section on the [Creative Forces Homepage](http://dev-creative-forces-d8.pantheonsite.io/) featuring statistics numbers increasing, chosen to test a component using custom JS.
  * field_title
  * field_subheading
  * field_percentage_one
  * field_percentage_two
  * field_percentage_three
  * field_shortdescription_one
  * field_shortdescription_two
  * field_shortdescription_three
* [SCAI - Image & Text](https://github.com/Taoti/REPEAT/tree/master/70/drupal/scai-image-text) - literally taken from the SCAI repo, but obviously referencing HFSA, see section midway down the [SCAI Homepage](http://dev-scai.pantheonsite.io/) starting with 'Professional Development', etc.
  * field_image
  * field_image_position
  * field_rich_text

## START
* [START](https://taoti.github.io/REPEAT/START/) contains a reference library of static HTML, CSS, and JS files, matching XD files from the Creative Services team as closely as possible.

### START Paragraphs
* [Image Text Item](https://taoti.github.io/REPEAT/START/image-text-item/) - similar to 'SCAI - Image & Text' above
  * field_image
  * field_heading
  * field_body
  * field_button
* [Image Text List](https://taoti.github.io/REPEAT/START/image-text-list/) - extending 'Image Text Item' ideally by replacing the less flexible 'field_image_position' option on SCAI (specified individually for each item) with a more flexible option for all 'Image Text Items' in a list to display as 'Image Flip', 'Image Left', or 'Image Right'. Note: this may be implemented as a block or a view, rather than a paragraph.
  * field_image_position
* [Accordion](https://xd.adobe.com/view/3e3d33a0-4a2c-4dc5-520a-216177e06457-480c/screen/54e4297e-8569-4050-9df4-5eafa619d398/Accordion) - need live example ([ScentAir](https://dev-scentair.pantheonsite.io/support-center/frequently-asked-questions) was proposed, but other examples may be better)
  * field_accordion_link
  * field_accordion_body
  * field_accordion_button_one
  * field_accordion_button_two
* [Bio Card](https://xd.adobe.com/view/3e3d33a0-4a2c-4dc5-520a-216177e06457-480c/screen/88eac106-e0cd-4243-9940-2cb48d2a5265/Bio-Card)
  * field_image
  * field_name
  * field_position
  * field_affiliation
* [Bio Section](https://xd.adobe.com/view/3e3d33a0-4a2c-4dc5-520a-216177e06457-480c/screen/ac6331ee-9f3f-423e-a5a6-6572ca954c65/Bio-Sections) - similar to 'Image Text List' (see above), ideally this functions as a wrapper for multiple 'Bio Cards'
  * field_title
  * field_items_per_row (to add the appropriate column class to display items in a grid)
* [Card](https://xd.adobe.com/view/3e3d33a0-4a2c-4dc5-520a-216177e06457-480c/screen/732d34ce-d953-4388-97f4-2a20119740e0/Card)
  * field_image
  * field_title
  * field_type
  * field_body
  * field_label_one
  * field_label_two
* [Call To Action](https://xd.adobe.com/view/3e3d33a0-4a2c-4dc5-520a-216177e06457-480c/screen/12be00f3-a829-4760-90fd-d1e98093cf6f/Call-to-Action)
  * field_title
  * field_body
  * field_button_one
  * field_button_two
  * field_button_three
* [Hero](https://xd.adobe.com/view/3e3d33a0-4a2c-4dc5-520a-216177e06457-480c/screen/1729f746-ed34-4f56-9466-697e96fd5d32/Heros)
  * field_title
  * field_body
  * field_button_one
  * field_button_two
  * field_button_three
