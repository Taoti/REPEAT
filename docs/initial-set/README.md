# Initial Set
* Jimi is gathering about 5 – 6 paragraphs to be our "starter" set for the REPEAT importer. These are commonly repeated paragraphs on Drupal sites we build. However, implementation and structure vary from site to site, dev to dev. Let's spend a little time now building some quick consensus around structure for this small, initial set of paragraphs. (Example: for Left/Right Images do we use a field to allow the user to select orientation? Should accordions be made up of nested paragraph types?)

* Inital Set TOC
  * [Accordion](#accordion)
  * [Bio](#bio)
  * [CTA](#cta)
  * [Image Text](#image-text)
  * [Quote](#quote)
  * [WYSIWYG](#wysiwyg)

## Reference D8 Sites
* [AAU EDU](https://dev-aau-edu.pantheonsite.io/)
* [ABA](http://dev-aba-d8.pantheonsite.io/)
* [Creative Forces](http://dev-creative-forces-d8.pantheonsite.io/)
* [Field To Market](https://dev-field-to-market.pantheonsite.io)
* [HFSA](https://dev-hfsa-d8.pantheonsite.io/)
* [IBHRE](http://dev-ibhre.pantheonsite.io/)
* [Scentair](https://dev-scentair.pantheonsite.io/)
* [Security First](https://dev-security-first.pantheonsite.io/)
* [USFS](https://dev-usfs.pantheonsite.io/)

## Accordion
* Mimic
* Scentair
* AAU EDU
* Security First
* Field To Market

### Mimic (Accordion - included in HFSA, IBHRE, USFS, etc.)
* templates/paragraphs/paragraph--accordion.html.twig
```twig
<div{ { attributes.addClass(classes) } }>
  { % block content % }

    <div class="accordion__title accordion__trigger--toggle-accordion">
      { { content.field_title|field_value } }

      <button class="accordion__toggle accordion__trigger--toggle-accordion">
        <span class="accordion__toggle-label visually-hidden">expand and show content</span>
        <div class="accordion__toggle-icon">
          <div class="accordion__toggle-icon-horizontal"></div>
          <div class="accordion__toggle-icon-vertical"></div>
        </div>
      </button>
    </div>

    <div class="accordion__content">
      { { content.field_content|field_value } }
    </div>

  { % endblock % }
</div>
```

### Scentair (Accordion)
* templates/paragraphs/paragraph--faq-accordion--default.html.twig
```twig
{ % extends '@scentair/paragraphs/paragraph.html.twig' % }
{ % block content % }
  <section class="faq-accordion-section">
      <div class="container">
        <h2 class="faq-accordion-title">{ { content.field_title } }</h2>
        <div class="faq-accordion-subtitle">{ { content.field_subtitle } }</div>
        <div class="faq-accordion" id="scentair-accordion-{ { paragraph.id() } }">
          { % for question in paragraph.field_questions % }
            { { drupal_entity('paragraph', question.target_id) } }
          { % endfor % }
        </div>
      </div>
  </section>
{ % endblock % }
```

* templates/paragraphs/paragraph--faq.html.twig
```twig
{ % extends '@scentair/paragraphs/paragraph.html.twig' % }
{ % block content % }
  <div class="card">
    <div class="card-header" id="accordion-item-{ { paragraph.id() } }">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-{ { paragraph.id() } }" aria-expanded="false" aria-controls="collapse-{ { paragraph.id() } }">
          { { paragraph.field_question.value } }
        </button>
      </h2>
    </div>

    <div id="collapse-{ { paragraph.id() } }" class="collapse" aria-labelledby="accordion-item-{ { paragraph.id() } }" data-parent="#scentair-accordion-{ { paragraph.parent_id.value } }">
      <div class="card-body">
        { { content.field_long_answer } }
      </div>
    </div>
  </div>
{ % endblock % }
```

### AAU EDU (Accordion)
* templates/paragraphs/paragraph--block-accordion-item.html.twig
```twig
{ { attach_library('aau/paragraph-block-accordion') } }
...
<div{ { attributes.addClass(classes) } }>
  <h2 class="bi-accordion-header">{ { content.field_header_text } }</h2>
  <div class="bi-accordion-content">
    { { content.field_custom_block } }
    { { content.field_block_view_reference } }
    { { content.field_system_block_reference } }
  </div>
</div>
```

* templates/paragraphs/paragraph--accordion-item.html.twig
```twig
{ { attach_library('aau/paragraph-accordion') } }
...
<div{ { attributes.addClass(classes) } }>
  <h2 class="bi-accordion-header">{ { content.field_header_text } }</h2>
  <div class="accordion-items">
    { { content.field_body } }
    { { content.field_private_file } }
  </div>
</div>
```

### Security First (Accordion)
* templates/paragraphs/paragraph--accordion.html.twig
```twig
<div{ { attributes.addClass(classes) } }> 
  <div class="accordion_sub-title">
    { { content.field_subtitle } }
  </div>
  <div class="accordion_title"> 
    { { content.field_title } }
  </div>
  <div class="accordion_description"> 
    { { content.field_wysiwyg } }
  </div>
  <div class="accordion_items"> 
    { { content.field_accordion_items } } 
  </div>
</div>
```

* templates/paragraphs/paragraph--accordion-item.html.twig
```twig
<div{ { attributes.addClass(classes) } } >
  <div class="accordion-item_sub-heading">
    { { content.field_sub_heading } }
  </div>
  {#<div class="accordion-item_title">
    { { content.field_title } }
  </div>#}
  <div class="accordion-item_description">
    { { content.field_wysiwyg } }
  </div>
  <div class="accordion-item_cta-wrapper">
    <div class="accordion-item_cta accordion-item_cta--{ { content.field_accordion_item_btn_1.0['#markup']|clean_class} }" >
      { { content.field_accordion_item_cta_1 } }
    </div>
      <div class="accordion-item_cta accordion-item_cta--{ { content.field_accordion_item_btn_2.0['#markup']|clean_class} }" >
        { { content.field_accordion_item_cta_2 } }
      </div>
  </div>
  { % block content % }
  { % endblock % }
</div>
```

### Field To Market (Accordion)
* templates/paragraphs/paragraph--accordion.html.twig
```twig
<div{ { attributes.addClass(classes) } } id="paragraph-{ { paragraph.id() } }">
  <div class="accordion__container">
  { % block content % }
    { { content } }
  { % endblock % }
  </div>
</div>
```

* templates/paragraphs/paragraph--accordion-item.html.twig
```twig
{ { attach_library('ftm/poly-details') } }
{ % block paragraph % }
  <details{ { attributes.addClass(classes) } } id="paragraph-{ { paragraph.id() } }">
    { % block content % }
      { % if content.field_accordion_item_title|render % }
        <summary class="accordion__item-summary">
          <div class="accordion__item-summary-container">
            <h3 class="accordion__item-summary-title">{ { content.field_accordion_item_title|field_value } }</h3>
          </div>
        </summary>
      { % endif % }

      { % if content.field_accordion_item_description|render % }
        <div class="accordion__item-content" >
          { { content.field_accordion_item_description|field_value } }
        </div>
      { % endif % }
      { { content|without('field_accordion_item_title', 'field_accordion_item_description') } }
    { % endblock % }
  </details>
{ % endblock paragraph % }
```

## Bio
* ABA
* Creative Forces
* USFS
* Note: Bio examples are generally referred to as 'people' or 'person' and are located in templates/content/ or templates/node/ (not paragraphs)

### ABA (Bio)
* templates/content/node--people-bio--full.html.twig
```twig
<article{ { attributes.addClass(classes) } }>
  
  <div class="person-hero">
    <div class="l-person-hero__columns">
      <div class="l-person-hero__text">
        <div class="l-person-hero__text-constrain">
          <div class="person__breadcrumb">{ { drupal_entity('block', 'breadcrumbs') } }</div>

          <div class="l-person-hero__text-middle">
            <h1 class="person__title">{ { label|field_value } }</h1>
            <div class="person__occupation">{ { content.field_occupation|field_value } }</div>
            <div class="person__bio">{ { content.field_headline_description|field_value } }</div>
          </div>
          
          <div class="l-person-hero__text-bottom">
            { % if 
              content.field_email|render is not empty or
              content.field_facebook|render is not empty or
              content.field_instagram|render is not empty or 
              content.field_linkedin|render is not empty or 
              content.field_twitter|render is not empty 
            % }
              <div class="person__social">
                <div class="person__social-label">
                  Contact Me:
                </div> 
                <ul class="social-list">
                  { % if content.field_email|render is not empty  % }<li class="social-list__item social-list__item--email">{ { content.field_email } }</li>{ % endif % }
                  { % if content.field_facebook|render is not empty  % }<li class="social-list__item social-list__item--facebook">{ { content.field_facebook } }</li>{ % endif % }
                  { % if content.field_twitter|render is not empty % }<li class="social-list__item social-list__item--twitter">{ { content.field_twitter } }</li>{ % endif % }
                  { % if content.field_instagram|render is not empty  % }<li class="social-list__item social-list__item--instagram">{ { content.field_instagram } }</li>{ % endif % }
                  { % if content.field_linkedin|render is not empty  % }<li class="social-list__item social-list__item--linkedin">{ { content.field_linkedin } }</li>{ % endif % }
                </ul>
              </div>
            { % endif % }
          </div>
        </div>
      </div>

      { % set bg_image_url = content.field_background_image|field_value|render|striptags|trim % }

      <div class="l-person-hero__image" style="background-image: url('{ { bg_image_url } }')">
        <div class="l-person-hero__image-constrain">
          { { content.field_hero_image|field_value } }
        </div>
      </div>
    </div>
  </div>

  <div class="person-content l-content-constrain l-paragraph-container">
    { { content.field_content|field_value } }
  </div>

  <section class="post-content">
    <div class="post-content__latest-news">
      { { content.field_latest_news|field_value } } 
    </div>
  </section>

</article>
```

### Creative Forces (Bio)
* templates/content/node--person.html.twig
```twig
<article{ { attributes.addClass(classes) } }>
  <div{ { content_attributes.addClass('node__content') } }>
    <div class="pageheader">
      <div class="l-container">
        <div class="pageheader_breadcrumbs">
          { { drupal_block('system_breadcrumb_block') } }
        </div>
        <div class="pageheader_container">
          <div class="pageheader_title">
            <h1>{ { label } }</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="person__page-container">
      <div class="person__page-content">
        { % if content.field_professional_title.0 % }
        <div class="person__page-professional-title">
          { { content.field_professional_title.0 } }
        </div>
        { % endif % }

        <div class="person__page-info">
        { % if content.field_telephone.0 % }
        <div class="person__page-telephone">
          <label>Telephone:</label>
          { { content.field_telephone.0 } }
        </div>
        { % endif % }

        { % if content.field_email.0 % }
        <div class="person__page-email">
          <label>Email:</label>
          { { content.field_email.0 } }
        </div>
        { % endif % }

        { % if content.field_linkedin.0 % }
        <div class="person__page-social">
          <label>Social:</label>
          <a href="{ { content.field_linkedin.0|render|striptags|trim } }" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        { % endif % }
        </div>

        { % if content.field_summary.0 % }
        <div class="person__page-summary">
        { { content.field_summary.0 } }
        </div>
        { % endif % }
      </div>

      <div class="person__page-picture-quote">
        { % if content.field_person_image.0 % }
        <div class="person__page-image-container lazyload">
          <div class="dodecagon dodecagon-image" tabindex="-1">
            <img alt="" class="dodecagon-image-img" src="{ { content.field_person_image[0]['#item'].entity.uri.value|image_style('profile') } }" tabindex="-1">
            <svg focusable="false" class="dodecagon-image-svg" height="100%" width="100%" focusable="false" tabindex="-1">
              <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{ { content.field_person_image[0]['#item'].entity.uri.value|image_style('profile') } }" width="600" height="600" preserveAspectRatio="xMidYMin slice" tabindex="-1"></image>
            </svg>
          </div>
        </div>
        { % endif % }

        { % if content.field_quote.0 % }
        <blockquote>
          <div class="blockquote-content">
            <span class="quotationMark">“</span>
            { { content.field_quote.0 } }
          </div>
        </blockquote>
        { % endif % }
      </div>
    </div>
  </div>
</article>
```

## USFS (Bio)
* templates/node/node--person--compact.html.twig
```twig
{ % set email = content.field_person_email|render|striptags|trim % }
{ % set image = content.field_person_image|render % }
{ % set name = label  % }
{ % set phone = content.field_person_phone_number % }
{ % set title = content.field_person_title|render % }

{ %
  set classes = [
  'node',
  'node--type-' ~ node.bundle|clean_class,
  view_mode ? 'node--view-mode-' ~ view_mode|clean_class,
  'user-compact',
]
% }

<article{ { attributes.addClass(classes) } }>
  <div class="user-compact__container">
    { % if image % }
      <div class="user-compact__image">
        { { image } }
      </div>
    { % endif % }

    { % if label or phone or email % }
      <div class="user-compact__data">
        { % if name % }
          <div class="user-compact__name">
            { { name } }
          </div>
        { % endif % }

        { % if title % }
          <div class="user-compact__title">
            { { title } }
          </div>
        { % endif % }

        { % if phone % }
          <div class="user-compact__phone">
            { { phone } }
          </div>
        { % endif % }

        { % if email % }
          <div class="user-compact__email">
            <a href="mailto:{ { email } }">Email</a>
          </div>
        { % endif % }
      </div>
    { % endif % }
  </div>
  { % if content % }
    { {- content|without('field_person_title', 'field_person_email', 'field_person_image', 'field_person_phone_number') -} }
  { % endif % }
</article>
```

## CTA
* Creative Forces
* HFSA

### Creative Forces (CTA)
* templates/paragraphs/paragraph--type--internal-cta-section.html.twig
```twig
<div{ { attributes.addClass(classes) } }>
  { % block content % }
    { { content.field_title.0 } }
    { { content.field_internal_cta_image.0 } }
    { { content.field_text.0 } }
    { { content.field_single_cta.0 } }
  { % endblock % }
</div>
```

* templates/paragraphs/paragraph--internal-cta-section.html.twig
```twig
<div{ { attributes.addClass(classes) } }>
  { % block content % }
    <div class="internalCTA--container">
      <div class="internalCTA--imageBox">
        <div class="internalCTA--image" style="background-image:url({ { content.field_internal_cta_image.0|render|striptags|trim } })">
        </div>
      </div>

      <div class="internalCTA--content">
        <h3>{ { content.field_title.0 } }</h3>
        { { content.field_text.0 } }
        { { content.field_single_cta } }
      </div>
    </div>
  { % endblock % }
</div>
```

### HFSA (CTA)
* templates/paragraphs/paragraph--call-to-action.html.twig
```twig
{ % if paragraph.field_background_image.target_id is not empty % }
  { % set background = paragraph.field_background_image.entity.field_media_image.entity.uri.value % }
  { % do attributes.setAttribute("style", "background-image: url('" ~ file_url(background) ~ "')") % }
{ % endif % }
{ % block paragraph % }
  <div{ { attributes.addClass(classes) } }>
    <div class="paragraph-bg"></div>
    <div class="container paragraph-wrapper">
      { % block content % }
        { { content } }
      { % endblock % }
    </div>
  </div>
{ % endblock paragraph % }
```

## Image Text
* USFS
* IBHRE
* HFSA

### USFS (Image Text)
* templates/paragraphs/paragraph--two-column-image-text.html.twig
```twig
{ % set layout = content.field_2_column_image_text_layout[0]|render % }
{ % set image = content.field_2_column_image_text_image[0]|render % }
{ % set text = content.field_2_column_image_text_text[0]|render % }

{ %
  set classes = [
  'paragraph',
  'paragraph--type--' ~ paragraph.bundle|clean_class,
  view_mode ? 'paragraph--view-mode--' ~ view_mode|clean_class,
  not paragraph.isPublished() ? 'paragraph--unpublished',
  'two-column-image-text',
  'two-column-image-text__' ~ layout|replace({'_' : '-'}),
]
% }

{ % block paragraph % }
  <div{ { attributes.addClass(classes) } }>
    { % block content % }
      <div class="two-column-image-text__container">
        { % if image % }
          <div class="two-column-image-text__image-container">
            { { image } }
          </div>
        { % endif % }

        { % if text % }
          <div class="two-column-image-text__text-container">
            { { text } }
          </div>
        { % endif % }
      </div>
      { { content|without('field_2_column_image_text_layout', 'field_2_column_image_text_image','field_2_column_image_text_text') } }
    { % endblock % }
  </div>
{ % endblock paragraph % }
```

### IBHRE (Image Text - referred to as 'Image & CTA')
* templates/paragraphs/paragraph--image-and-cta--default.html.twig
```twig
{ %
  set classes = [
    'paragraph',
    'paragraph--type--' ~ paragraph.bundle|clean_class,
    view_mode ? 'paragraph--view-mode--' ~ view_mode|clean_class,
    not paragraph.isPublished() ? 'paragraph--unpublished',
    (render_var(content.field_orientation.0))
  ]
% }

{ % block paragraph % }
  <div{ { attributes.addClass(classes) } }>
    { % block content % }
      <div class="inner">
        <div class="image">
          { { content.field_image } }
        </div>
        <div class="content">
          { { content|without('field_orientation', 'field_image') } }
        </div>
      </div>
    { % endblock % }
  </div>
{ % endblock paragraph % }
```

### HFSA (Image Text)
* templates/paragraphs/paragraph--image-text.html.twig
```twig
<div{ { attributes.addClass(classes) } }>
  <div class="container paragraph-wrapper">
    { % block content % }
      { % if paragraph.field_rich_text.value | length > 500 % }
        { % if paragraph.field_image_position.value == 'left' % }
          <div class="position-neutra left">
              { % else % }
          <div class="position-neutra right">
          { % endif % }
            <div class="content-without-img-content">
              { {content } }
            </div>
            <div class="content-corner-bottom">
              <div class="content-corner-bottom-left"></div>
              <div class="content-corner-bottom-right"></div>
            </div>
          </div>
        { % elseif paragraph.field_image_position.value == 'left' % }
        <div class="position-left">
          <div class="content-img">
            <div class="content-img-bg"></div>
            { {content.field_image } }
          </div>
        </div>
        <div class="position-right">
          <div class="content-without-img">
            <div class="content-without-img-top"></div>
            <div class="content-without-img-content">
              { { content |without('field_image') } }
            </div>
            <div class="content-without-img-bottom"></div>
            <div class="content-corner-bottom mobile">
              <div class="content-corner-bottom-left"></div>
              <div class="content-corner-bottom-right"></div>
            </div>
          </div>
        </div>
      { % else % }
        <div class="position-left">
          <div class="content-without-img">
            <div class="content-without-img-top"></div>
            <div class="content-without-img-content">{ { content |without('field_image') } }</div>
            <div class="content-without-img-bottom"></div>
            <div class="content-corner-bottom mobile">
              <div class="content-corner-bottom-left"></div>
              <div class="content-corner-bottom-right"></div>
            </div>
          </div>
        </div>
        <div class="position-right">
          <div class="content-img">
            <div class="content-img-bg"></div>
            { {content.field_image } }
          </div>
        </div>
      { % endif % }
    { % endblock % }
  </div>
</div>
```

## Quote
* ABA
* Security First
* IBHRE

### ABA (Quote)
* templates/paragraphs/paragraph--quote.html.twig
```twig
<div{ { attributes.addClass(classes) } }>
    { % block content % }
      <div class="l-quote-container">
        <div class="l-quote__content">
          <div class="quote__icon">&#8220;</div>

          <div class="quote__description">
            { { content.field_description|field_value } }
          </div>

          <div class="quote__byline">
            <div class="quote__image">
              { { content.field_image|field_value } }
            </div>
            <div class="l-quote__byline-text">
              <div class="quote__name-line">
                <div class="quote__name">{ { content.field_title|field_value } }</div> | 
                <div class="quote__position">{ { content.field_position|field_value } }</div>
              </div>
              <div class="quote__company-line">
                { { content.field_company_name|field_value } }, { { content.field_member_since|field_value } }
              </div>
            </div>
          </div>
        </div>
      </div>
    { % endblock % }
  </div>
```

### Security First (Quote)
* templates/paragraphs/paragraph--quote.html.twig
```twig
<div{ { attributes.addClass(classes) } } >
  { % if content.field_quote_text|render|trim % }
    <div class="quote_text">
      { { content.field_quote_text } }
    </div>
  { % endif % }

  { % if content.field_quote_credit|render|trim  % }
    <div class="quote_credit">
      { { content.field_quote_credit } }
    </div>
  { % endif % }

  { % if content.field_subtitle|render|trim  % }
    <div class="quote_subtitle">
      { { content.field_subtitle } }
    </div>
  { % endif % }
  { % block content % }
  { % endblock % }
</div>
```

### IBHRE (Quote)
* templates/paragraphs/paragraph--quote--default.html.twig
```twig
<div{ { attributes.addClass(classes) } }>
  { % block content % }
    { { content|without('field_quote_subtitle', 'field_quote_subtitle_2') } }
    <div class="subtitle-wrap">
      { { content.field_quote_subtitle } }
      { { content.field_quote_subtitle_2 } }
    </div>
  { % endblock % }
</div>
```

## WYSIWYG
* Examples?
