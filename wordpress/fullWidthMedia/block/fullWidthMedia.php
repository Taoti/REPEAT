<?php
namespace Modules;
use Timber;
use JP\Get;

### Example usage
	// $args = [
	// 	'image_or_video' => get_sub_field('image_or_video'),
	// 	'image_array' => get_sub_field('image'),
	// 	'video_embed' => get_sub_field('video_embed'),
	// 	'caption' => get_sub_field('caption'),
	// ];
	// $new_module = new FullWidthMedia($args);
	// $new_module->render();

class FullWidthMedia {
	protected $defaults;
	protected $context;

	public function __construct( $args=[] ){
		$this->defaults = [
			'image_or_video' => false,
			'image_array' => false,
			'video_embed' => false,
			'caption' => false,
			'classes' => [
				'l-module',
				'l-has-no-background',
				'fullWidthMedia',
			]
		];

		extract(array_merge($this->defaults, $args));

		$classes[] = 'fullWidthMedia-has'.ucwords( $image_or_video );

		if( !$caption && isset($image_array['caption']) && $image_array['caption'] ){
			$caption = esc_html( $image_array['caption'] );
		}

		$image_args = [
			'image_array' => $image_array,
			'size' => '1080p',
			'classes' => [
				'fullWidthMedia-image'
			],
		];
		$image_html = Get::image_html($image_args);

		if( !$image_html ){
			$image_args['size'] = '720p';
			$image_html = Get::image_html($image_args);
		}

		$this->context = Timber::get_context();
		$this->context['image_or_video'] = $image_or_video;
		$this->context['image_html'] = $image_html;
		$this->context['video_embed'] = $video_embed;
		$this->context['caption'] = $caption;
		$this->context['classes'] = implode(' ', $classes);

	}

	public function render(){
		Timber::render('fullWidthMedia.twig', $this->context);
	}

}
