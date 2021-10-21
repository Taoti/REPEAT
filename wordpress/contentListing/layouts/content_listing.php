<?php
use Modules\ContentListing;

$args = array(
	'image_or_video' => get_sub_field('image_or_video'),
	'image_array' => get_sub_field('image_array'),
	'video_embed' => get_sub_field('video_embed'),
	'caption' => get_sub_field('caption'),
);
$contentListing = new ContentListing($args);
$contentListing->render();
