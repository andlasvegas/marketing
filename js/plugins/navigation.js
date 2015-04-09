/*
 * Off-Canvas Navigation
 */

(function ($) {
	$(function() {

		// Mobile Menu Header
		var siteSlogan = $('#site-slogan').html();
		$('<div class=js-mobile-nav-header><h2 class=js-menu-slogan>'+siteSlogan+'</h2><div class=js-menu-close /></div>').prependTo('#mobile-nav');

		// Toggle Mobile Navigation and Overlay
		$('.mobile-nav-controls, .js-menu-close').click(function() {
			$('html').toggleClass('js-nav-open');
		});

		// Wrap Expanded Menu Anchors
		// Insert Button to Toggle Menu
		$('#mobile-nav li > ul').prev('a, span')
			.wrap('<div class=js-expanded-wrapper />')
			.after('<span class=js-expanded-btn />');

		// Toggle Expanded Menu
		$('.js-expanded-wrapper ').click(function() {
			$(this).closest('li').toggleClass('js-expanded-open');
		});
		
		// Add Level Class Names to UL
		$('#mobile-nav .content ul').addClass(function() {
		   return "js-menu-level-"+$(this).parents('ul').length;
		});


		// Hide Mobile Menu On Page reszie
		// $(window).resize(function() {
		// 	$('html').removeClass('js-expanded-open');
		// 	$('#mobile-nav li').removeClass('js-menu-open');
		// });

    });
})(jQuery);