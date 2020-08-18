<?php
use Modules\FullWidthMedia;

$args = array(
	'image_or_video' => get_sub_field('image_or_video'),
	'image_array' => get_sub_field('image_array'),
	'video_embed' => get_sub_field('video_embed'),
	'caption' => get_sub_field('caption'),
);
$fullWidthMedia = new FullWidthMedia($args);
$fullWidthMedia->render();
