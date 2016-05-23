$('a div').click(function() {
	var dest = $(this).attr('href');
	var id = $(this).attr('id');

	$.mobile.changePage( dest, {
		transition: transition_by_id(id)
	});
	setTimeout(function() {
		window.location.href = dest;
	}, 1000);
});

function transition_by_id(id) {
	if (id == 'back' || id == 'top_button') {
		return 'slidedown';
	}
	else if (id === 'pop_transition') {
		return 'pop';
	}
	else {
		return $.mobile.defaultPageTransition; // which is fade
	}
}