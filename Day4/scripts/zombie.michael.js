function Michael() {
	Zombie.apply(this, arguments);
	this.speed = 2;
	this.health = 70;
	// this.name = "michael";
	this.element.addClass("michael");
}

Michael.prototype = Object.create(Zombie.prototype);