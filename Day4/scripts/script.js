$(function() {
	$("#btnGenerate").on("click", generate);		

	var $fields = $(".field-line");
	var zombies = [];
	var currentZombieIndex = 0;


	function random(min, max) {
	    return Math.floor((Math.random() * max) + min);
	}

	function generate() {
		var fieldIndex = random(0, $fields.length);
		var zombieVarient = random(1, 2);
		// if (zombieVarient == 1) {
			zombies[currentZombieIndex] = new Michael();
			currentZombieIndex = currentZombieIndex + 1;
			$($fields[fieldIndex]).append(zombies[currentZombieIndex - 1].element);
		//}

		var interval = setInterval(function() {
			zombies[currentZombieIndex - 1].move();
		}, 100);

	};


});