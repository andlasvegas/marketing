/*
 * Scroll Top
 */
 
(function ($) {
	$(function() {
		$('body').prepend('<div id=j-top />').append('<a id=j-top-btn href=#j-top />');

		$(window).scroll(function() {
			if ($(this).scrollTop() > 200) {
				$('#j-top-btn').fadeIn();
			} else {
				$('#j-top-btn').fadeOut();
			}
		});	
	});
})(jQuery);