<div class="pagination-container">
	<?php
	the_posts_pagination( array(
			'mid_size'  => 2,
			'prev_text' => '<i class="pagination-arrow pagination-arrow-left"></i>',
			'next_text' => '<i class="pagination-arrow pagination-arrow-right"></i>',
			'screen_reader_text' => null
	));
	?>
</div>
