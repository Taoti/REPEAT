<?php
/**
 * @todo Add header docblock
 * @todo Remove extract()
 * @todo Add a phpcs.xml file to wordpress/ so these are linted properly.
 */
namespace Modules;

use Timber;

class Cards {
	protected $defaults;
	protected $context;

	public function __construct( $args = [] ) {
		$this->defaults = [
			'cards' => null,
		];

		extract( array_merge( $this->defaults, $args ) );

		$this->context          = Timber::get_context();
		$this->context['cards'] = $cards;
		$this->context['count'] = count($cards);
	}

	public function render() {
		Timber::render( 'cards.twig', $this->context );
	}

	public function compile() {
		return Timber::compile( 'cards.twig', $this->context );
	}
}
