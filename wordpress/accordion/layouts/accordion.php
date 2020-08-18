<?php
use Modules\Accordion;

$args = array(
	'primary_heading' => get_sub_field('primary_heading'),
	'accordion_items' => get_sub_field('accordion_items'),);
$accordion = new Accordion($args);
$accordion->render();
