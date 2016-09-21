$(function() {
	$("#btnGenerate").on("click", generate);	
	$("#btnSlowDown").on("click", slowDown);	

	var $fields = $(".field-line");
	var zombies = [];
	var currentZombieIndex = 0;

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

	function slowDown(){
		$(".shadow").addClass("frozenShadow");

		$.each(zombies, function(index, element){
			element.slowDown();
			});

		setTimeout(function() {
			$.each(zombies, function(index, element){
			element.accelerate();
			});

			$(".shadow").removeClass("frozenShadow");			
		}, 10000);
	};
});

