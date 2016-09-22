$(function() {
	$("#btnGenerate").on("click", generate);	
	$("#btnSlowDown").on("click", slowDown);	
	$("#btnPoison").on("click", poison);

	var $fields = $(".field-line");
	var zombies = [];
	var currentZombieIndex = 0;
	var interval;
	var walkSpeed = 100;




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
	    walk(zombie);
	};

	function walk(zombie){
		interval = setInterval(function() {
		if (!zombie.isAlive) {
			clearInterval(interval);
		} else if (zombie.position  == 870 ) {
			gameOver();
		}
		
		zombie.move();
		 }, walkSpeed);
	};

	function slowDown(){
		$(".shadow").addClass("frozenShadow");

		$.each(zombies, function(index, element){
			element.slowDown();
			});
		clearInterval(interval);
		interval = setTimeout(function() {
			$.each(zombies, function(index, element){
			element.accelerate();
			walk(element);
			});

			$(".shadow").removeClass("frozenShadow");			
		}, 10000);
	};

	function gameOver() {
		clearInterval(interval);
		$.each(zombies, function(index, element) {
			element.die();
		});
		$(".game-over").text('Game Over!');
		$(".game-over").show();
		$(".shadow").addClass("deadShadow");
	};

	function poison (){
		$(".shadow").addClass("poisonShadow");
		$.each(zombies, function(index, value){
			value.growOld();
		});
		$(".shadow").removeClass("poisonShadow");
	};
});
