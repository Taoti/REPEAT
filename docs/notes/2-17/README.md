# Notes 2-17

## New Patterns
* [Image-Text-Combo](https://taoti.github.io/REPEAT/70/pattern-lab/public/?p=viewall-molecules-image-text-combo)
	* Molecule, changed name - not set on the term 'Combo' but should avoid 'Paragraph' in naming conventions, to avoid confusion with 'Paragraph' as used in Drupal
* [Image-Text-Repeat](https://taoti.github.io/REPEAT/70/pattern-lab/public/?p=viewall-organisms-image-text-repeat)
	* Organism, includes following variations: media left, media right, media alternating between left and right

## Observations
* Drupal specific files do not play nicely in PL source folder
* We're manually translating these files to Drupal syntax anyway
* Further, these patterns won't always be a strict 1-to-1, as the same basic Image-Text pattern can be used for different templates - paragraphs, nodes, etc. 
* Concluded Drupal files should be separated from PL source folder

## Proposed Structure
* Based on Nick's proposed plans from last week, modified to separate PL patterns from files intended for Drupal

```
REPEAT/70
  components/
    drupal/
      paragraph-text-image/
        config/
          paragraph-image-text.yml
            * config yml without UUIDs
        _paragraph-image-text.twig
          * basically a compiled version of the source pattern 
          * use field_* rather than normal PL names 
          * have no dependencies/@ calls
        _paragraph-image-text.scss
          * SCSS required for component
        _paragraph-image-text.js
          * JS required for component
        libraries.yml
          * reference to required JS
          * appended to theme libraries.yml
        reference.md
          * cite specific reference to source/_patterns/...
          * plus list of pattern dependencies, i.e. atoms, molecules, etc.
    wordpress/
      * structure needed to import component into WordPress
  source/
    _patterns/
      00-universal
      01-atoms
      02-moleclues
      03-organisms
      04-prototypes
```

## Asset Categories
* Fundamental
	* Required by most components, and not expected to change, e.g. utility classes, default grids, etc.
* Theme
	* Required by most components, but expected to change per custom theme, e.g. colors, typography, etc.
* Component
	* Specific styles for individual components

## Proposed Plan
* Alex
	* Keep XD files synced with dev adjustments
* Jimi
	* Build new patterns in PL based on XD files
	* Translate to Drupal syntax, add to components folder
	* Organize SCSS into asset categories (see above)
* Jeff
	* Modify Mimic to account for import plan, (per Nick) possibly adjust gulp config, etc.
	* Drupal integration - decide whether component would be better as a paragraph or a node, adjust variables accordingly
* Nick (as he spelled out last week)
	* Create basic importer for the above
	* Create example site
	* Import to an existing site for demonstration's sake
