(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			function make_writer($ele) {
				var str = $ele.html(), progress = 0, flag = 0;
				return function() {
					var timer = setInterval(function() {
						var current = str.substr(progress, 1);
						if (current == '<') {
							progress = str.indexOf('>', progress) + 1;
						} else {
							progress = progress + flag;
						}
						$ele.html(str.substring(0, progress) + (flag & 1 ? '' : '_'));
						if (progress >= str.length) {
							clearInterval(timer);
						}
						flag = 1 - flag;
					}, 75);
				}
			}
			var $ele = $(this);
			var writer = make_writer($ele);
			$ele.click(writer);
			$ele.html('');
		});
		return this;
	};
})(jQuery);
