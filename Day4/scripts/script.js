$(function() {
	$("#btnGenerate").on("click", generate);


	var $fields = $(".field-line");
	var zombie = new michael();


	function random(min, max) {
        return Math.floor((Math.random() * max) + min);
    }

	function generate() {
		var fieldIndex = random(0, $fields.length);
		$($fields[fieldIndex]).append("<div class='zombie michael'></div>");
		interval = setInterval(zombie.move, 100);
	};



		// function move(index) {
		// 	var right = $(".zombie").css("right");
		// 	var newRight = +right.split("px")[0] + 1;
		// 	var x = newRight + 'px';
		// 	$(".zombie").css("right", newRight + 'px');
		// 	if (right == "856px") {
		// 		clearInterval(interval);
		// 	}		
		// }	
		
});