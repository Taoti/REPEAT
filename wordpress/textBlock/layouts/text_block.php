<?php
use Modules\TextBlock;

$args = array(
	'primary_heading' => get_sub_field('primary_heading'),
	'content' => get_sub_field('content'),
);
$text = new TextBlock($args);
$text->render();