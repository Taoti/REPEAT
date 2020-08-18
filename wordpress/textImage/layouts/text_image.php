<?php
use Modules\TextImage;

$args = array(
	'image_orientation' => get_sub_field('image_orientation'),
	'image' => get_sub_field('image'),
	'primary_heading' => get_sub_field('primary_heading'),
	'description' => get_sub_field('description'),
	'button_label' => get_sub_field('button_label'),
	'button_url' => get_sub_field('button_url'),
);
$textImage = new TextImage($args);
$textImage->render();