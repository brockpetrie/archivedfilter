
(function($) {
	
	/**
	 * Archived Filter
	 *
	 * @author: Brock Petrie, brockpetrie@gmail.com
	 * @source: http://github.com/brockpetrie/archivedfilter
	 */
	 
	// Inits, nothing to see here
	var colindex = 0;
	var table = $('table');
	
	// Initial function: instantiates extension after verifying that the archive field exists
	function initHide() {
		table.find('thead th').each(function(index) {
			var column = $(this);
			var title = $.trim(column.text()).toLowerCase();
			
			// Check name of field to see if it's an archive field.
			// If your field happens to be named something different than 'Archived' or 'Archive', this is where you add it
			if (title == 'archived' || title == 'archive') {
				colindex = index+1;
						
				var btn = $('<a class="button" id="archivecontrol"></a>');
				$('#contents h2').append($(btn));
				
				hideItems();	
			}
		});
	}
	
	// Hide function: parses through each entry and hides it if it's archived; sets toggle to reflect state change
	function hideItems() {
		$('tr th:nth-child('+colindex+')').addClass('hidden');
			
		$('#archivecontrol').bind('click',function() {
			showItems();
		}).html('Show Archived');
			
		table.find('tr td:nth-child('+colindex+')').each(function() {
			var cell = $(this);
			var text = $.trim(cell.text());
			cell.addClass('hidden');
			
			if(text == 'Yes') {
				cell.parent().addClass('inactive hidden').css('display','none');
				cell.parent().appendTo($('form table tbody'));
			}
		});
	}
	
	// Show function: reveals all hidden entries; sets toggle to reflect state change
	function showItems() {
		$('.hidden').removeClass('hidden').css('display','');
		
		$('#archivecontrol').bind('click',function() {
			hideItems();
		}).html('Hide Archived');
	}
		
	 
	$(document).ready(function() {
		initHide();
	});
	
})(jQuery.noConflict());
