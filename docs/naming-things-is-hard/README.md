# Naming Things Is Hard
> There are only two hard things in Computer Science: cache invalidation and naming things. - Phil Something

* I don't know much about cache invalidation either, but you get the idea. My goal here is to gather as much context as possible about naming things so that we can make informed decisions about the hard task ahead of us.

## START
* Alex put together a nice visual reference in [Miro](https://miro.com/app/board/o9J_ktoaYKI=/) for different organizational systems.

## Taoti Themes
* I've listed some examples of [Taoti themes](https://taoti.github.io/REPEAT/docs/themes/) as they currently exist.

## Atomic Design
* In 2016, Brad Frost wrote an excellent book called [Atomic Design](https://atomicdesign.bradfrost.com/). Here's a summary:
* "Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner."
```
1.atoms
2.molecules
3.organisms
4.templates
5.pages
```

1. "Atoms serve as the foundational building blocks that comprise all our user interfaces. These atoms include basic HTML elements like form labels, inputs, buttons, and others that can't be broken down any further without ceasing to be functional."
2. "Molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule."
3. "Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface."
4. "Templates are page-level objects that place components into a layout and articulate the design's underlying content structure."
5. "Pages are specific instances of templates that show what a UI looks like with real representative content in place."

### Modified Atomic Design
* Copycat-based themes introduced a structure that was a (confusing) hybrid of Atomic Design and [SCMACSS](http://smacss.com/) (?)
```
00-global
01-base
02-layouts
03-components
04-templates
05-pages
```

* In a recent secret project that will not be named, Alex, Jeff, and I converted a Copycat-based theme to a structure that was much closer to original Atomic Design.
```
00-fundamentals (previously 'universal')
01-atoms
02-molecules
03-organisms
04-prototypes
```

## Design System Resources
* There are LOTS of other examples to look at in terms of design systems. Note that the lines are blurry between what others define as a 'design system' or a 'pattern library', or a 'style guide' and all of these names are used somewhat interchangeably because, again, naming things is hard.
  * [Style Guides](http://styleguides.io/) - one of the original resources, curated by Brad Frost and others
  * [Design Systems Repo](https://designsystemsrepo.com/design-systems) - more recent aggregated list
  * [Awesome Design Systems](https://github.com/alexpate/awesome-design-systems) - aggregated list on GitHub

## Design Tokens
* The concept of design tokens is worth mentioning here. [Firefox](https://design.firefox.com/photon/resources/design-tokens.html) has a good definition (below).
* "A design token is an abstraction of a visual property such as color, font, width, animation, etc. These raw values are language application agnostic and once transformed and formatted can be used on any platform."
* Here's a fairly typical example in a visual format:
  * [Feelix Design Tokens](https://feelix.myob.com/#/Design%20tokens)

## CMS Naming Conventions
* It is also important to understand naming conventions in the specific CMS platforms we use, even if our internal naming conventions end up being platform agnostic.

### Drupal
* Drupal has a modular content model, which supports a high level of complexity. There are many specific terms to understand, including node, region, block, view, paragraph, etc.
  * [Drupal Docs: Modular Content](https://www.drupal.org/docs/user_guide/en/planning-modular.html)
  * [Drupal Docs: Planning your Content Structure](https://www.drupal.org/docs/user_guide/en/planning-structure.html)
  * [Drupal Docs: Taxonomy](https://www.drupal.org/docs/user_guide/en/structure-taxonomy.html)

* Here is an example Drupal page, edited for clarity (e.g. simplifying Drupalisms like 'views-view' to 'view' and so on)
```
node--example-page
  region--header
    block--branding
    block--main-menu
  region--content
    view--grid-with-two-columns
      paragraph--image-text
        field_image
        field_text
      paragraph--image-text
        field_image
        field_text
  region--footer
```

### WordPress
* WordPress has a less complex content model compared to Drupal. Since WordPress started as a blogging platform, much of its default structure is still geared towards supporting blog posts.
  * [WordPress Template Hierarchy](https://developer.wordpress.org/files/2014/10/Screenshot-2019-01-23-00.20.04.png)

* Here is an example WordPress page, using a simple page template with a sidebar.
```
page-sidebar
  header
  content
  sidebar
    widget (e.g. 'recent posts')
    widget (e.g. 'recent comments')}
  footer
```

## Potential Options

### Expand Atomic Design
* It was suggested during the meeting that expanding Atomic Design to include more levels of hierarchy could help avoid the problem of 'everything is a molecule' or 'everything is an organism'
```
00-fundamentals
01-atoms
02-?
03-molecules
04-?
05-organisms
06-?
07-prototypes
```

### Abandon Atomic Design
* On the other hand, it may be better to simply abandon Atomic Design altogether. Both Alex and Jeff mentioned having trouble finding things or remembering whether something should be a molecule or an organism. Maybe it's time to move on.

### Everything Is (Or Isn't) A Component
* In this approach, all components would be in a single 'components' folder
* I would suggest starting as simply as possible, with two top-level categories: 'components' and 'non-components'
* Possible names for 'non-components'
  * Fundamentals
  * Foundations
  * Resources
  * ... (naming things is hard)
```
components
  accordion
  button
  card
    card-variation-one
    card-variation-two
  something-really-small-and-simple
  something-really-large-and-complex
non-components
  design (similar to design tokens above)
    typography
    color
  dev (things that exist only in code)
    normalize
    clearfix
    anything-else-that-is-not-a-component
```
