$('a div').click(function() {
	var dest = $(this).attr('href');
	$.mobile.changePage( dest, {
		transition: transition_by_id($(this).attr('id')),
		// role: 'page';
		// reloadPage: true
	});
	// setTimeout(function() {
	// 	window.location.href = dest;
	// }, 1000);
});

function transition_by_id(id) {
	return 'slidedown';
	if (id === 'back' || id === 'top_button') {
		return 'slidedown';
	}
	else if (id === 'secondhand_exchangecode') {
		return 'pop';
	}
	else {
		return $.mobile.defaultPageTransition;
	}
	// 'fade'
}