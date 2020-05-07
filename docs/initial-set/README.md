# Initial Set
* Jimi is gathering about 5 – 6 paragraphs to be our "starter" set for the REPEAT importer. These are commonly repeated paragraphs on Drupal sites we build. However, implementation and structure vary from site to site, dev to dev. Let's spend a little time now building some quick consensus around structure for this small, initial set of paragraphs. (Example: for Left/Right Images do we use a field to allow the user to select orientation? Should accordions be made up of nested paragraph types?)

* Inital Set of Paragraphs
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
<div{{_ attributes.addClass(classes) _}}>
  {%_ block content _%}

    <div class="accordion__title accordion__trigger--toggle-accordion">
      {{_ content.field_title|field_value _}}

      <button class="accordion__toggle accordion__trigger--toggle-accordion">
        <span class="accordion__toggle-label visually-hidden">expand and show content</span>
        <div class="accordion__toggle-icon">
          <div class="accordion__toggle-icon-horizontal"></div>
          <div class="accordion__toggle-icon-vertical"></div>
        </div>
      </button>
    </div>

    <div class="accordion__content">
      {{_ content.field_content|field_value _}}
    </div>

  {%_ endblock _%}
</div>
```

### Scentair (Accordion)
* templates/paragraphs/paragraph--faq-accordion--default.html.twig

```twig
{%_ extends '@scentair/paragraphs/paragraph.html.twig' _%}
{%_ block content _%}
  <section class="faq-accordion-section">
      <div class="container">
        <h2 class="faq-accordion-title">{{_ content.field_title _}}</h2>
        <div class="faq-accordion-subtitle">{{_ content.field_subtitle _}}</div>
        <div class="faq-accordion" id="scentair-accordion-{{_ paragraph.id() _}}">
          {%_ for question in paragraph.field_questions _%}
            {{_ drupal_entity('paragraph', question.target_id) _}}
          {%_ endfor _%}
        </div>
      </div>
  </section>
{%_ endblock _%}
```

* templates/paragraphs/paragraph--faq.html.twig

```twig
{%_ extends '@scentair/paragraphs/paragraph.html.twig' _%}
{%_ block content _%}
  <div class="card">
    <div class="card-header" id="accordion-item-{{_ paragraph.id() _}}">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-{{_ paragraph.id() _}}" aria-expanded="false" aria-controls="collapse-{{_ paragraph.id() _}}">
          {{_ paragraph.field_question.value _}}
        </button>
      </h2>
    </div>

    <div id="collapse-{{_ paragraph.id() _}}" class="collapse" aria-labelledby="accordion-item-{{_ paragraph.id() _}}" data-parent="#scentair-accordion-{{_ paragraph.parent_id.value _}}">
      <div class="card-body">
        {{_ content.field_long_answer _}}
      </div>
    </div>
  </div>
{%_ endblock _%}
```

### AAU EDU (Accordion)
* templates/paragraphs/paragraph--block-accordion-item.html.twig

```twig
{{_ attach_library('aau/paragraph-block-accordion') _}}
...
<div{{_ attributes.addClass(classes) _}}>
  <h2 class="bi-accordion-header">{{_ content.field_header_text _}}</h2>
  <div class="bi-accordion-content">
    {{_ content.field_custom_block _}}
    {{_ content.field_block_view_reference _}}
    {{_ content.field_system_block_reference _}}
  </div>
</div>
```

* templates/paragraphs/paragraph--accordion-item.html.twig

```twig
{{_ attach_library('aau/paragraph-accordion') _}}
...
<div{{_ attributes.addClass(classes) _}}>
  <h2 class="bi-accordion-header">{{_ content.field_header_text _}}</h2>
  <div class="accordion-items">
    {{_ content.field_body _}}
    {{_ content.field_private_file _}}
  </div>
</div>
```

### Security First (Accordion)
* templates/paragraphs/paragraph--accordion.html.twig

```twig
<div{{_ attributes.addClass(classes) _}}> 
  <div class="accordion_sub-title">
    {{_ content.field_subtitle _}}
  </div>
  <div class="accordion_title"> 
    {{_ content.field_title _}}
  </div>
  <div class="accordion_description"> 
    {{_ content.field_wysiwyg _}}
  </div>
  <div class="accordion_items"> 
    {{_ content.field_accordion_items _}} 
  </div>
</div>
```

* templates/paragraphs/paragraph--accordion-item.html.twig

```twig
<div{{_ attributes.addClass(classes) _}} >
  <div class="accordion-item_sub-heading">
    {{_ content.field_sub_heading _}}
  </div>
  {#<div class="accordion-item_title">
    {{_ content.field_title _}}
  </div>#}
  <div class="accordion-item_description">
    {{_ content.field_wysiwyg _}}
  </div>
  <div class="accordion-item_cta-wrapper">
    <div class="accordion-item_cta accordion-item_cta--{{_ content.field_accordion_item_btn_1.0['#markup']|clean_class_}}" >
      {{_ content.field_accordion_item_cta_1 _}}
    </div>
      <div class="accordion-item_cta accordion-item_cta--{{_ content.field_accordion_item_btn_2.0['#markup']|clean_class_}}" >
        {{_ content.field_accordion_item_cta_2 _}}
      </div>
  </div>
  {%_ block content _%}
  {%_ endblock _%}
</div>
```

### Field To Market (Accordion)
* templates/paragraphs/paragraph--accordion.html.twig

```twig
<div{{_ attributes.addClass(classes) _}} id="paragraph-{{_ paragraph.id() _}}">
  <div class="accordion__container">
  {%_ block content _%}
    {{_ content _}}
  {%_ endblock _%}
  </div>
</div>
```

* templates/paragraphs/paragraph--accordion-item.html.twig

```twig
{{_ attach_library('ftm/poly-details') _}}
{%_ block paragraph _%}
  <details{{_ attributes.addClass(classes) _}} id="paragraph-{{_ paragraph.id() _}}">
    {%_ block content _%}
      {%_ if content.field_accordion_item_title|render _%}
        <summary class="accordion__item-summary">
          <div class="accordion__item-summary-container">
            <h3 class="accordion__item-summary-title">{{_ content.field_accordion_item_title|field_value _}}</h3>
          </div>
        </summary>
      {%_ endif _%}

      {%_ if content.field_accordion_item_description|render _%}
        <div class="accordion__item-content" >
          {{_ content.field_accordion_item_description|field_value _}}
        </div>
      {%_ endif _%}
      {{_ content|without('field_accordion_item_title', 'field_accordion_item_description') _}}
    {%_ endblock _%}
  </details>
{%_ endblock paragraph _%}
```

## Bio
* ABA
* Creative Forces
* USFS
* Note: Bio examples are generally referred to as 'people' or 'person' and are located in templates/content/ or templates/node/ (not paragraphs)

### ABA (Bio)
* templates/content/node--people-bio--full.html.twig

```twig
<article{{_ attributes.addClass(classes) _}}>
  
  <div class="person-hero">
    <div class="l-person-hero__columns">
      <div class="l-person-hero__text">
        <div class="l-person-hero__text-constrain">
          <div class="person__breadcrumb">{{_ drupal_entity('block', 'breadcrumbs') _}}</div>

          <div class="l-person-hero__text-middle">
            <h1 class="person__title">{{_ label|field_value _}}</h1>
            <div class="person__occupation">{{_ content.field_occupation|field_value _}}</div>
            <div class="person__bio">{{_ content.field_headline_description|field_value _}}</div>
          </div>
          
          <div class="l-person-hero__text-bottom">
            {%_ if 
              content.field_email|render is not empty or
              content.field_facebook|render is not empty or
              content.field_instagram|render is not empty or 
              content.field_linkedin|render is not empty or 
              content.field_twitter|render is not empty 
            _%}
              <div class="person__social">
                <div class="person__social-label">
                  Contact Me:
                </div> 
                <ul class="social-list">
                  {%_ if content.field_email|render is not empty  _%}<li class="social-list__item social-list__item--email">{{_ content.field_email _}}</li>{%_ endif _%}
                  {%_ if content.field_facebook|render is not empty  _%}<li class="social-list__item social-list__item--facebook">{{_ content.field_facebook _}}</li>{%_ endif _%}
                  {%_ if content.field_twitter|render is not empty _%}<li class="social-list__item social-list__item--twitter">{{_ content.field_twitter _}}</li>{%_ endif _%}
                  {%_ if content.field_instagram|render is not empty  _%}<li class="social-list__item social-list__item--instagram">{{_ content.field_instagram _}}</li>{%_ endif _%}
                  {%_ if content.field_linkedin|render is not empty  _%}<li class="social-list__item social-list__item--linkedin">{{_ content.field_linkedin _}}</li>{%_ endif _%}
                </ul>
              </div>
            {%_ endif _%}
          </div>
        </div>
      </div>

      {%_ set bg_image_url = content.field_background_image|field_value|render|striptags|trim _%}

      <div class="l-person-hero__image" style="background-image: url('{{_ bg_image_url _}}')">
        <div class="l-person-hero__image-constrain">
          {{_ content.field_hero_image|field_value _}}
        </div>
      </div>
    </div>
  </div>

  <div class="person-content l-content-constrain l-paragraph-container">
    {{_ content.field_content|field_value _}}
  </div>

  <section class="post-content">
    <div class="post-content__latest-news">
      {{_ content.field_latest_news|field_value _}} 
    </div>
  </section>

</article>
```

### Creative Forces (Bio)
* templates/content/node--person.html.twig

```twig
<article{{_ attributes.addClass(classes) _}}>
  <div{{_ content_attributes.addClass('node__content') _}}>
    <div class="pageheader">
      <div class="l-container">
        <div class="pageheader_breadcrumbs">
          {{_ drupal_block('system_breadcrumb_block') _}}
        </div>
        <div class="pageheader_container">
          <div class="pageheader_title">
            <h1>{{_ label _}}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="person__page-container">
      <div class="person__page-content">
        {%_ if content.field_professional_title.0 _%}
        <div class="person__page-professional-title">
          {{_ content.field_professional_title.0 _}}
        </div>
        {%_ endif _%}

        <div class="person__page-info">
        {%_ if content.field_telephone.0 _%}
        <div class="person__page-telephone">
          <label>Telephone:</label>
          {{_ content.field_telephone.0 _}}
        </div>
        {%_ endif _%}

        {%_ if content.field_email.0 _%}
        <div class="person__page-email">
          <label>Email:</label>
          {{_ content.field_email.0 _}}
        </div>
        {%_ endif _%}

        {%_ if content.field_linkedin.0 _%}
        <div class="person__page-social">
          <label>Social:</label>
          <a href="{{_ content.field_linkedin.0|render|striptags|trim _}}" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        {%_ endif _%}
        </div>

        {%_ if content.field_summary.0 _%}
        <div class="person__page-summary">
        {{_ content.field_summary.0 _}}
        </div>
        {%_ endif _%}
      </div>

      <div class="person__page-picture-quote">
        {%_ if content.field_person_image.0 _%}
        <div class="person__page-image-container lazyload">
          <div class="dodecagon dodecagon-image" tabindex="-1">
            <img alt="" class="dodecagon-image-img" src="{{_ content.field_person_image[0]['#item'].entity.uri.value|image_style('profile') _}}" tabindex="-1">
            <svg focusable="false" class="dodecagon-image-svg" height="100%" width="100%" focusable="false" tabindex="-1">
              <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{_ content.field_person_image[0]['#item'].entity.uri.value|image_style('profile') _}}" width="600" height="600" preserveAspectRatio="xMidYMin slice" tabindex="-1"></image>
            </svg>
          </div>
        </div>
        {%_ endif _%}

        {%_ if content.field_quote.0 _%}
        <blockquote>
          <div class="blockquote-content">
            <span class="quotationMark">“</span>
            {{_ content.field_quote.0 _}}
          </div>
        </blockquote>
        {%_ endif _%}
      </div>
    </div>
  </div>
</article>
```

## USFS (Bio)
* templates/node/node--person--compact.html.twig

```twig
{%_ set email = content.field_person_email|render|striptags|trim _%}
{%_ set image = content.field_person_image|render _%}
{%_ set name = label  _%}
{%_ set phone = content.field_person_phone_number _%}
{%_ set title = content.field_person_title|render _%}

{%_
  set classes = [
  'node',
  'node--type-' ~ node.bundle|clean_class,
  view_mode ? 'node--view-mode-' ~ view_mode|clean_class,
  'user-compact',
]
_%}

<article{{_ attributes.addClass(classes) _}}>
  <div class="user-compact__container">
    {%_ if image _%}
      <div class="user-compact__image">
        {{_ image _}}
      </div>
    {%_ endif _%}

    {%_ if label or phone or email _%}
      <div class="user-compact__data">
        {%_ if name _%}
          <div class="user-compact__name">
            {{_ name _}}
          </div>
        {%_ endif _%}

        {%_ if title _%}
          <div class="user-compact__title">
            {{_ title _}}
          </div>
        {%_ endif _%}

        {%_ if phone _%}
          <div class="user-compact__phone">
            {{_ phone _}}
          </div>
        {%_ endif _%}

        {%_ if email _%}
          <div class="user-compact__email">
            <a href="mailto:{{_ email _}}">Email</a>
          </div>
        {%_ endif _%}
      </div>
    {%_ endif _%}
  </div>
  {%_ if content _%}
    {{_- content|without('field_person_title', 'field_person_email', 'field_person_image', 'field_person_phone_number') -_}}
  {%_ endif _%}
</article>
```

## CTA
* Creative Forces
* HFSA

### Creative Forces (CTA)
* templates/paragraphs/paragraph--type--internal-cta-section.html.twig

```twig
<div{{_ attributes.addClass(classes) _}}>
  {%_ block content _%}
    {{_ content.field_title.0 _}}
    {{_ content.field_internal_cta_image.0 _}}
    {{_ content.field_text.0 _}}
    {{_ content.field_single_cta.0 _}}
  {%_ endblock _%}
</div>
```

* templates/paragraphs/paragraph--internal-cta-section.html.twig

```twig
<div{{_ attributes.addClass(classes) _}}>
  {%_ block content _%}
    <div class="internalCTA--container">
      <div class="internalCTA--imageBox">
        <div class="internalCTA--image" style="background-image:url({{_ content.field_internal_cta_image.0|render|striptags|trim _}})">
        </div>
      </div>

      <div class="internalCTA--content">
        <h3>{{_ content.field_title.0 _}}</h3>
        {{_ content.field_text.0 _}}
        {{_ content.field_single_cta _}}
      </div>
    </div>
  {%_ endblock _%}
</div>
```

### HFSA (CTA)
* templates/paragraphs/paragraph--call-to-action.html.twig

```twig
{%_ if paragraph.field_background_image.target_id is not empty _%}
  {%_ set background = paragraph.field_background_image.entity.field_media_image.entity.uri.value _%}
  {%_ do attributes.setAttribute("style", "background-image: url('" ~ file_url(background) ~ "')") _%}
{%_ endif _%}
{%_ block paragraph _%}
  <div{{_ attributes.addClass(classes) _}}>
    <div class="paragraph-bg"></div>
    <div class="container paragraph-wrapper">
      {%_ block content _%}
        {{_ content _}}
      {%_ endblock _%}
    </div>
  </div>
{%_ endblock paragraph _%}
```

## Image Text
* USFS
* IBHRE
* HFSA

### USFS (Image Text)
* templates/paragraphs/paragraph--two-column-image-text.html.twig

```twig
{%_ set layout = content.field_2_column_image_text_layout[0]|render _%}
{%_ set image = content.field_2_column_image_text_image[0]|render _%}
{%_ set text = content.field_2_column_image_text_text[0]|render _%}

{%_
  set classes = [
  'paragraph',
  'paragraph--type--' ~ paragraph.bundle|clean_class,
  view_mode ? 'paragraph--view-mode--' ~ view_mode|clean_class,
  not paragraph.isPublished() ? 'paragraph--unpublished',
  'two-column-image-text',
  'two-column-image-text__' ~ layout|replace({'_' : '-'}),
]
_%}

{%_ block paragraph _%}
  <div{{_ attributes.addClass(classes) _}}>
    {%_ block content _%}
      <div class="two-column-image-text__container">
        {%_ if image _%}
          <div class="two-column-image-text__image-container">
            {{_ image _}}
          </div>
        {%_ endif _%}

        {%_ if text _%}
          <div class="two-column-image-text__text-container">
            {{_ text _}}
          </div>
        {%_ endif _%}
      </div>
      {{_ content|without('field_2_column_image_text_layout', 'field_2_column_image_text_image','field_2_column_image_text_text') _}}
    {%_ endblock _%}
  </div>
{%_ endblock paragraph _%}
```

### IBHRE (Image Text - referred to as 'Image & CTA')
* templates/paragraphs/paragraph--image-and-cta--default.html.twig

```twig
{%_
  set classes = [
    'paragraph',
    'paragraph--type--' ~ paragraph.bundle|clean_class,
    view_mode ? 'paragraph--view-mode--' ~ view_mode|clean_class,
    not paragraph.isPublished() ? 'paragraph--unpublished',
    (render_var(content.field_orientation.0))
  ]
_%}

{%_ block paragraph _%}
  <div{{_ attributes.addClass(classes) _}}>
    {%_ block content _%}
      <div class="inner">
        <div class="image">
          {{_ content.field_image _}}
        </div>
        <div class="content">
          {{_ content|without('field_orientation', 'field_image') _}}
        </div>
      </div>
    {%_ endblock _%}
  </div>
{%_ endblock paragraph _%}
```

### HFSA (Image Text)
* templates/paragraphs/paragraph--image-text.html.twig

```twig
<div{{_ attributes.addClass(classes) _}}>
  <div class="container paragraph-wrapper">
    {%_ block content _%}
      {%_ if paragraph.field_rich_text.value | length > 500 _%}
        {%_ if paragraph.field_image_position.value == 'left' _%}
          <div class="position-neutra left">
              {%_ else _%}
          <div class="position-neutra right">
          {%_ endif _%}
            <div class="content-without-img-content">
              {{_content _}}
            </div>
            <div class="content-corner-bottom">
              <div class="content-corner-bottom-left"></div>
              <div class="content-corner-bottom-right"></div>
            </div>
          </div>
        {%_ elseif paragraph.field_image_position.value == 'left' _%}
        <div class="position-left">
          <div class="content-img">
            <div class="content-img-bg"></div>
            {{_content.field_image _}}
          </div>
        </div>
        <div class="position-right">
          <div class="content-without-img">
            <div class="content-without-img-top"></div>
            <div class="content-without-img-content">
              {{_ content |without('field_image') _}}
            </div>
            <div class="content-without-img-bottom"></div>
            <div class="content-corner-bottom mobile">
              <div class="content-corner-bottom-left"></div>
              <div class="content-corner-bottom-right"></div>
            </div>
          </div>
        </div>
      {%_ else _%}
        <div class="position-left">
          <div class="content-without-img">
            <div class="content-without-img-top"></div>
            <div class="content-without-img-content">{{_ content |without('field_image') _}}</div>
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
            {{_content.field_image _}}
          </div>
        </div>
      {%_ endif _%}
    {%_ endblock _%}
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
<div{{_ attributes.addClass(classes) _}}>
    {%_ block content _%}
      <div class="l-quote-container">
        <div class="l-quote__content">
          <div class="quote__icon">&#8220;</div>

          <div class="quote__description">
            {{_ content.field_description|field_value _}}
          </div>

          <div class="quote__byline">
            <div class="quote__image">
              {{_ content.field_image|field_value _}}
            </div>
            <div class="l-quote__byline-text">
              <div class="quote__name-line">
                <div class="quote__name">{{_ content.field_title|field_value _}}</div> | 
                <div class="quote__position">{{_ content.field_position|field_value _}}</div>
              </div>
              <div class="quote__company-line">
                {{_ content.field_company_name|field_value _}}, {{_ content.field_member_since|field_value _}}
              </div>
            </div>
          </div>
        </div>
      </div>
    {%_ endblock _%}
  </div>
```

### Security First (Quote)
* templates/paragraphs/paragraph--quote.html.twig

```twig
<div{{_ attributes.addClass(classes) _}} >
  {%_ if content.field_quote_text|render|trim _%}
    <div class="quote_text">
      {{_ content.field_quote_text _}}
    </div>
  {%_ endif _%}

  {%_ if content.field_quote_credit|render|trim  _%}
    <div class="quote_credit">
      {{_ content.field_quote_credit _}}
    </div>
  {%_ endif _%}

  {%_ if content.field_subtitle|render|trim  _%}
    <div class="quote_subtitle">
      {{_ content.field_subtitle _}}
    </div>
  {%_ endif _%}
  {%_ block content _%}
  {%_ endblock _%}
</div>
```

### IBHRE (Quote)
* templates/paragraphs/paragraph--quote--default.html.twig

```twig
<div{{_ attributes.addClass(classes) _}}>
  {%_ block content _%}
    {{_ content|without('field_quote_subtitle', 'field_quote_subtitle_2') _}}
    <div class="subtitle-wrap">
      {{_ content.field_quote_subtitle _}}
      {{_ content.field_quote_subtitle_2 _}}
    </div>
  {%_ endblock _%}
</div>
```

## WYSIWYG
* Examples?
