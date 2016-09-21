$(function() {
	$("#btnGenerate").on("click", generate);		

	var $fields = $(".field-line");
	var zombies = [];
	var currentZombieIndex = 0;


	
	var EXPLODE_RATE = 15;
	var walkSpeed = 100;

	var gameover = false;
	var zombies;
	var plants = [];
	var numberOfplants = 0;
	var occupiedLines = [];





	function random(min, max) {
	    return Math.floor((Math.random() * max) + min);
	}

	function generate() {
		var fieldIndex = random(0, $fields.length);
		var zombieVarient = random(1, 2);
		 if(zombieVarient == 1)
		 {
		 	var zombie = new Michael();
		 }
		 else
		 {
		 	var zombie = new Strong();
		 }
			
		
		zombies[currentZombieIndex] = zombie;
		currentZombieIndex = currentZombieIndex + 1;
		$($fields[fieldIndex]).append(zombie.element);
	    zombie.move(walkSpeed);
		

	};


});

