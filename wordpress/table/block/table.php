<?php
namespace Modules;
use Timber;

### Note - requires the Table Field addon for ACF (https://wordpress.org/plugins/advanced-custom-fields-table-field)

### Example usage
	// $args = [
	// 	'table_array' => get_sub_field('table'),
	// ];
	// $new_module = new Table($args);
	// $new_module->render();

class Table {
	protected $defaults;
	protected $context;

	public function __construct( $args=[] ){
		$this->defaults = [
			'primary_heading' => false,
			'buttons' => false,
			'table_array' => false,
			'table_annotation' => false,
			'classes' => [
				'l-module',
				'l-container',
				'table',
				'responsive',
			]
		];

		extract(array_merge($this->defaults, $args));


		// Use the given array to generate the table HTML.
		// https://wordpress.org/plugins/advanced-custom-fields-table-field/#how%20to%20output%20the%20table%20html%3F
		$table_html = '';

		if( is_array($table_array) && !empty( $table_array ) ){

		    $table_html .= '<table class="table-table responsive" border="0" cellpadding="0">';

		        if( !empty( $table_array['caption'] ) ){
		            $table_html .= '<caption class="table-caption">' . $table_array['caption'] . '</caption>';
		        }

		        if( !empty( $table_array['header'] ) ){

		            $table_html .= '<thead class="table-head">';

		                $table_html .= '<tr class="table-tr">';

		                    foreach( $table_array['header'] as $th ){

		                        $table_html .= '<th class="table-th">';
		                            $table_html .= $th['c'];
		                        $table_html .= '</th>';
		                    }

		                $table_html .= '</tr>';

		            $table_html .= '</thead>';
		        }

		        $table_html .= '<tbody class="table-body">';

		            foreach( $table_array['body'] as $tr ){

		                $table_html .= '<tr class="table-tr">';

		                    foreach( $tr as $td ){

		                        $table_html .= '<td class="table-td">';
		                            $table_html .= $td['c'];
		                        $table_html .= '</td>';
		                    }

		                $table_html .= '</tr>';
		            }

		        $table_html .= '</tbody>';

		    $table_html .= '</table>';

		}


		$id = '';
		if( $primary_heading && function_exists('taoti_inPageNav_get_increment_counter') ){
			$id = 'section-'.taoti_inPageNav_get_increment_counter();
		}


		$this->context = Timber::get_context();
		$this->context['table_array'] = $table_array;
		$this->context['table_html'] = $table_html;
		$this->context['primary_heading'] = $primary_heading;
		$this->context['table_annotation'] = $table_annotation;
		$this->context['buttons'] = $buttons;
		$this->context['id'] = $id;
		$this->context['classes'] = implode(' ', $classes);

	}

	public function render(){
		Timber::render('table.twig', $this->context);
	}

}
