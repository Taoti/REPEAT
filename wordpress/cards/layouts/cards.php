<?php
use Modules\Cards;

$args = array(
	'heading' => get_sub_field('heading'),
	'description' => get_sub_field('description'),
	'button_label' => get_sub_field('button_label'),
	'button_url' => get_sub_field('button_url'),
	'background_image' => get_sub_field('background_image'),
	'overlay_color' => get_sub_field('overlay_color'),
);
$cta = new Cards($args);
$cta->render();
