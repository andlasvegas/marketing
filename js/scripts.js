(function ($) {
	$(function() {

		/*
		 * Non Touch Device Scripts
		 */
		var isTouch = 'ontouchstart' in document.documentElement;

		if(!isTouch) {
			// Add Non Touch Device Scripts Here
		} // Non Touch Device

		/*
		 * Superfish Navigation
		 */
		// $('.sfmenu .content > ul.menu').superfish();

		/*
		 * Open All External Links In New Window
		 */
		$('a').filter(function() { return this.hostname && this.hostname !== location.hostname; }).attr('target', '_blank');

		// Clone User Menu
		$('#block-system-user-menu .content .menu').clone().appendTo('#block-menu-block-1 > .content');

		// Clone Loggedin User Name
			$('#block-block-6 .content .current-user-name').clone()
			.prependTo('#block-system-user-menu .content');


		/* 
		 * Views
		 */
		// Responsive Views Table
		$('.views-table').parent().addClass('js-responsive-table');

		// Toggle Exposed Filters
		$('<div class=js-filters-toggle><span>Show</span> Search Filters</div>')
			.insertBefore('.view-filters')
			.click(function(){
				var toggleBtn = $(this).children('span');
				toggleBtn.html(toggleBtn.text() == 'Hide' ? 'Show' : 'Hide')
				$(this).next().toggleClass('js-filter-open');
			});

		/*
		 * Projects & Production View
		 * Wrap Exposed Filters
		 */
		$('.view-projects, .view-production').find('.views-exposed-widgets #edit-author-wrapper')
			.prev().addBack().wrapAll('<div class=js-filter-text />');
		$('.view-projects, .view-production').find('.views-exposed-widgets #edit-assign-wrapper')
			.nextUntil('.views-submit-button').addBack().wrapAll('<div class=js-filter-select />');
		$('.view-projects, .view-production').find('.views-exposed-widgets .views-submit-button')
			.next().addBack().wrapAll('<div class=js-filter-btns />');

		// Production Schedule Header
		var assignTo = $('.view-production #edit-assign').val();
		if (assignTo == 'All') {
			$('.view-production .view-header h2').remove();
		};


		/*
		 * Logo Code Snippet
		 * Node Table
		 * Format JPG File Name and Link on Node
		 * Change to look like PNG and SVG links
		 */

		$('#block-system-main .field-name-field-logo-jpg').each(function(){
			var logoPath = $(this).text();
				logoNameIndex = logoPath.lastIndexOf("/") + 1;
				logoName = logoPath.substr(logoNameIndex);
			$(this).replaceWith('<div class="field field-name-field-logo-svg field-type-file field-label-hidden"><span class=file><img class=file-icon title=image/jpg src=/modules/file/icons/image-x-generic.png><a href=' + logoPath + '>'+ logoName + '</a></span></div>');
		});

		/*
		 * Logo Code Snippet
		 * View Content Pane
		 */

		// Replace Content With Path
		$('.view-logos li')
			// SVG and PNG			
			.find('a').each(function() {
				var logoPath = $(this).attr('href');
				$(this).closest('li').html(logoPath);
			}).end()
			// JPG
			.find('img').each(function() {
				var logoPath = $(this).attr('src');
				$(this).closest('li').html(logoPath);
			});

		// Replace Content With Code Snippet
		$('.view-logos li').each(function(){
			var logoPath = $(this).text();
				logoNameIndex = logoPath.lastIndexOf("/") + 1;
				logoName = logoPath.substr(logoNameIndex);
			$(this).html('<div class=js-logo-snippet-wrapper><div class=js-snippet-logo><img src='+ logoPath +'><br /><b>File Name:</b> '+ logoName +'</div><div class=js-logo-snippet-content><h2>IMG Tag</h2><div contenteditable class=js-logo-snippet-tag onclick=document.execCommand("selectAll",false,null)>&lt;img src=' + logoPath + ' /&gt;</div><h2>IMG Path</h2><div contenteditable class=js-logo-snippet-path onclick=document.execCommand("selectAll",false,null)>' + logoPath + '</div></div></div>');
		});

		/*
		 * Add Node
		 */
		// Make Plup the Default
		$('body.page-node-add a.filefield-source-plupload').click();

	});
})(jQuery);