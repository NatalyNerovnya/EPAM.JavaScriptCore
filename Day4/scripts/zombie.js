$(function (){
	function zombie() {

		this.move = function() {
			var right = $(".zombie").css("right");
			var newRight = +right.split("px")[0] + 1;
			var x = newRight + 'px';
			$(".zombie").css("right", newRight + 'px');
			
			if (right == "856px") {
				clearInterval(interval);
			};
		};
		this.die = function() {
			$(body).append("<div class='game-over'>Game over!</div>");
		};

		this.health;
		}
	};
);