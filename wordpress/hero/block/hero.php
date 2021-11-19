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
	// $new_module = new Hero($args);
	// $new_module->render();

class hero {
	protected $defaults;
	protected $context;

	public function __construct( $args=[] ){
		$this->defaults = [
			'heading' => false,
			'alternative_heading' => false,
			'overlay_options' => false,
			'description' => false,
			'breadcrumbs_output' => false,
			'background_image_url' => false,
			'classes' => [
				'l-module',
				'hero',
			]
		];

		extract(array_merge($this->defaults, $args));

		if( !is_search() && !$breadcrumbs_output && function_exists('yoast_breadcrumb') ) {
			ob_start();
				yoast_breadcrumb( '<span>','</span>' );
				$breadcrumbs_output = ob_get_clean();
		}

		if( !$background_image_url ){

			// Try to get a 1080p size featured image first...
			$background_image_url = Get::featured_image_url( 'hero', get_the_ID() );
			// Try to get a 1080p size featured image first...
			$background_image_url = Get::featured_image_url( '1080p', get_the_ID() );

			// ... or if that's not available, try for a 720p...
			if( !$background_image_url ){
				$background_image_url = Get::featured_image_url( '720p', get_the_ID() );
			}

		}

		if( $background_image_url ){
			$classes[] = 'lazyload';
		}

		$this->context = Timber::get_context();
		$this->context['heading'] = $heading;
		$this->context['alternative_heading'] = $alternative_heading;
		$this->context['overlay_options'] = $overlay_options;
		$this->context['breadcrumbs_output'] = $breadcrumbs_output;
		$this->context['description'] = $description;
		$this->context['background_image_url'] = $background_image_url;
		$this->context['classes'] = implode(' ', $classes);

	}

	public function render(){
		Timber::render('hero.twig', $this->context);
	}

}