<?php
use Modules\Quote;

$args = [
	'quoted_text' => get_sub_field('content'),
	'primary_heading' => get_sub_field('primary_heading'),
];

$quote = new Quote($args);
$quote->render();
