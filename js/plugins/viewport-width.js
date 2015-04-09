/*
 * Viewport Width
 */

(function ($) {
	$(function() {

		var elm ='#viewport-width';
		$(elm)
			.html('Screen width: <span />px')
			.parent().addClass('js-viewport-width');

		function viewportWidth() {
			$(elm + ' span').html($(window).width());
		}

		// Display window width at page load
		viewportWidth();

		// Update window width on resize
		$(window).resize(function() {
			viewportWidth();
		});
	});
})(jQuery);