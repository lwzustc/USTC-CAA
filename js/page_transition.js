$('a div').click(function() {
	var dest = $(this).attr('href');
	var id = $(this).attr('id');
	if (id == 'back' || id == 'top_button') {
		$.mobile.changePage( dest, {
			transition: 'slidedown',
		});
		setTimeout(function() {
			window.location.href = dest;
		}, 1000);
	}
	else {
		window.location.href = dest;
	}
});

function transition_by_id(id) {
	// return 'slidedown';
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