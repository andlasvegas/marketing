/*
 * Full Viewport Height
 * Make element height match the full viewport height.
 *
 * Usage: 
 * $('.full-height').fullHeight;
 *
 * Flex Box Vertical Alignment
 * @include display-flex();
 * @include align-items(center);
 * @include justify-content(center);
 * 
 */

(function ($) {

    $.fn.fullHeight = function() {
 		
    	var $obj = $(this);

        return this.each(function() {
			$obj.css('height', $(window).height()); // Get the window height
			$(window).resize(function() {
				$obj.css('height', $(window).height()); // Get the window height
			});
        }); 
    };
 
}(jQuery));