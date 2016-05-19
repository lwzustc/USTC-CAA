var video = document.querySelector('video');
var video_index = 0;

function set_videochange_listener(callback) {
	$("body").on("swipeleft", function(){
		video_index = (video_index-1+1) % 4 + 1; // 1234 -> 2341; 0 -> 1
		callback(video_index);
	});
	$("body").on("swiperight", function(){
		video_index = (video_index-1+3) % 4 + 1; // 1234 -> 4123; 0 -> 4
		callback(video_index);
	});
	// var scanner = { code:0, timestamp:0 };
	// next();

	// function getscanner() {
	// 	$.get(
	// 	    "http://localhost:3000/getscanner",
	// 	    function(data) {
	// 			var last_code = scanner.code;
	// 			scanner = JSON.parse(data);

	// 			if (scanner.code === last_code || 
	// 				Date.now() - scanner.timestamp > 10000) {
	// 				next();	// do nothing
	// 			}
	// 			else {
	// 				console.log(scanner.code);
	// 				video_index = scanner.code;
	// 				callback(video_index);
	// 				next();
	// 			}
	// 	    }
	// 	);
	// }
	// function next() {
	// 	setTimeout(getScanner, 500);
	// }
}

function flux_init() {
	window.myFlux = new flux.slider('#slider', {
		autoplay: false,
		pagination: false
	});
}