function Zombie() {
	this.health = 50;
	this.speed = 1;
	this.element = $("<div class='zombie'></div>");
	
}

Zombie.prototype.move = function() {
	var self = this;
	var right = self.element.css("right");
	var newRight = parseInt(right) + 1;
	self.element.css("right", newRight + 'px');
};
