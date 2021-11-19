<?php
namespace Modules;
use Timber;
use JP\Get;

### Example usage
	// $args = array(
	// 	'primary_heading' => get_sub_field('primary_heading'),
	// 	'quoted_text' => get_sub_field('content'),
	// );
	// $quote = new Quote($args);
	// $quote->render();

class Quote {
	protected $defaults;
	protected $context;

	public function __construct( $args=[] ){
		$this->defaults = [
			'primary_heading' => false,
			'quoted_text' => false,
			'classes' => [
				'l-module',
				'quote',
			]
		];

		extract(array_merge($this->defaults, $args));


		$id = '';
		if( $primary_heading && function_exists('taoti_inPageNav_get_increment_counter') ){
			$id = 'section-'.taoti_inPageNav_get_increment_counter();
		}

		$this->context = Timber::get_context();
		$this->context['primary_heading'] = $primary_heading;
		$this->context['quoted_text'] = $quoted_text;
		$this->context['id'] = $id;
		$this->context['classes'] = implode(' ', $classes);

	}

	public function render(){
		Timber::render('quote.twig', $this->context);
	}

}
