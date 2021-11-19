<?php
namespace Modules;
use Timber;
use JP\Get;

### Example usage
	// $args = [
	// 	'heading' => get_field('heading'),
	// 	'description' => get_field('description'),
	// 	'button_url' => get_field('button_url'),
	// 	'button_label' => get_field('button_label'),
	// ];
	// $new_module = new CTA($args);
	// $new_module->render();

class TextImage {
	protected $defaults;
	protected $context;

	public function __construct( $args=[] ){
		$this->defaults = [
			'image_orientation' => false,
			//'image' => false,
			'image_array' => false,
			'primary_heading' => false,
			'description' => false,
			'button_label' => false,
			'button_url' => false,
			'classes' => [
				'l-module',
				'textImage',
			]
		];
		extract(array_merge($this->defaults, $args));

		$image_args = [
			'image_array' => $image,
			'size' => 'image-column-large',
			'classes' => [
				'textImage-large'
			],
		];
		$image_html = Get::image_html($image_args);


		$id = '';
		if( $primary_heading && function_exists('taoti_inPageNav_get_increment_counter') ){
			$id = 'section-'.taoti_inPageNav_get_increment_counter();
		}


		$this->context = Timber::get_context();
		$this->context['image_orientation'] = $image_orientation;
		$this->context['image_html'] = $image_html;
		$this->context['primary_heading'] = $primary_heading;
		$this->context['description'] = $description;
		$this->context['button_label'] = $button_label;
		$this->context['button_url'] = $button_url;
		$this->context['id'] = $id;
		$this->context['classes'] = implode(' ', $classes);

	}

	public function render(){
		Timber::render('textImage.twig', $this->context);
	}

}
