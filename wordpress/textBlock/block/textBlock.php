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

class TextBlock {
	protected $defaults;
	protected $context;

	public function __construct( $args=[] ){
		$this->defaults = [
			'primary_heading' => false,
			'content' => false,
			'classes' => [
				'l-module',
				'textBlock',
			]
		];
		extract(array_merge($this->defaults, $args));


		$id = '';
		if( $primary_heading && function_exists('taoti_inPageNav_get_increment_counter') ){
			$id = 'section-'.taoti_inPageNav_get_increment_counter();
		}


		$this->context = Timber::get_context();
		$this->context['primary_heading'] = $primary_heading;
		$this->context['content'] = $content;
		$this->context['id'] = $id;

	}

	public function render(){
		Timber::render('textBlock.twig', $this->context);
	}

}
