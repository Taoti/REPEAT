<?php
use Modules\Table;

$args = [
	'primary_heading' => get_sub_field('primary_heading'),
	'buttons' => get_sub_field('buttons'),
	'table_annotation' => get_sub_field('table_annotation'),
	'table_array' => get_sub_field('table'),
];
$table = new Table($args);
$table->render();