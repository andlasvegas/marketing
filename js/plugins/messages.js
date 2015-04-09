/*
 * Drupal Messages
 */

(function ($) {
	$(function() {

		var messages = '#messages-wrapper';
		// Append Close All Button If More Than 1 Message
		if ($(messages + ' .container').children('div').length > 1) {
			$('<span class=js-close-all> Close All</span>')
				.appendTo(messages + ' .container')
				.click(function() {
					$(messages).remove();
				});
		}

		// Append Close Message Button to Each Message
		$('<span class=js-close />')
			.appendTo('.messages')
			.click(function() {
				if ($(this).parent().siblings('div').length > 0) {
					// Remove Single Message if Multiple Exist
					$(this).parent().remove();
					// Remove Close All Link
					$(messages + ' .container .messages:first-child + span').remove();
				} else {
					// Remove Message Wrapper
					$(messages).remove();
				}
			});

    });
})(jQuery);