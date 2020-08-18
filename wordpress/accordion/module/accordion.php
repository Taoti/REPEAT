<?php
namespace Modules;
use Timber;

### Example usage
	// $args = array(
	// 	'accordion_items' => get_sub_field('accordion_items'),
	// );
	// $accordion = new Accordion($args);
	// $accordion->render();

class Accordion {
	protected $defaults;
	protected $context;

	public function __construct( $args=[] ){
		$this->defaults = [
			'primary_heading' => false,
			'accordion_items' => false,
			'classes' => [
				'l-module',
				'l-has-no-background',
				'accordion',
			]
		];

		extract(array_merge($this->defaults, $args));

		// echo "<pre>"; print_r($accordion_items); echo "</pre>";


		$id = '';
		if( $primary_heading && function_exists('taoti_inPageNav_get_increment_counter') ){
			$id = 'section-'.taoti_inPageNav_get_increment_counter();
		}


		// The accordion works via checkbox inputs, which need unique IDs so that multiple accordions on the same page don't conflict with each other.
		$string_for_unique_id = random_int(1, 1000);
		$unique_input_id_prefix = md5( $primary_heading.$string_for_unique_id );


		$this->context = Timber::get_context();
		$this->context['primary_heading'] = $primary_heading;
		$this->context['accordion_items'] = $accordion_items;
		// $this->context['icon_arrow'] = file_get_contents( get_template_directory().'/images/icon-arrow-down.svg' );
		$this->context['id'] = $id;
		$this->context['unique_input_id_prefix'] = $unique_input_id_prefix;
		$this->context['classes'] = implode(' ', $classes);

	}

	public function render(){
		Timber::render('accordion.twig', $this->context);
	}

}
