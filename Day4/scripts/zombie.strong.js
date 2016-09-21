function Strong() {
	Zombie.apply(this, arguments);
	this.name = "strong";
	this.speed = 2;
	this.health = 100;
	this.currentHealth = this.health;
	this.element.addClass("strong");
}

Strong.prototype = Object.create(Zombie.prototype);