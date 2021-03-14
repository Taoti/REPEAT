<?php
use Modules\hero;

$args = array(
	'heading' => get_sub_field('heading'),
	'alternative_heading' => get_sub_field('alternative_heading'),
	'overlay_options' => get_sub_field('overlay_options'),
	'description' => get_sub_field('description'),
	'breadcrumbs_output' => get_sub_field('breadcrumbs_output'),
	'background_image_url' => get_sub_field('background_image_url'),
);
$hero = new hero($args);
$hero->render();
