// $(function() {
// 	$('a #top_button, a #back').click(function() {
// 		var dest = $(this).parent().attr('href');
// 		$.mobile.changePage( dest, {
// 			transition: "slidedown",
// 		});
// 		setTimeout(function(){
// 			window.location.href = dest;
// 		}, 1000);
// 	});
// });

$('a #top_button, a #back').click(function() {
	var dest = $(this).parent().attr('href');
	$.mobile.changePage( dest, {
		transition: "slidedown",
	});
	setTimeout(function(){
		window.location.href = dest;
	}, 1000);
});
