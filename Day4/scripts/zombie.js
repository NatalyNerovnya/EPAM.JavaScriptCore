function Zombie() {
	this.name;
	this.speed;
	this.baseSpeed;
	this.minSpeed = 1;
	this.position = 0;
	this.health = 50;
	this.currentHealth = this.health;
	this.isAlive = true;

	this.element = $("<div class='zombie'></div>");
	
	this.healthWrapper = $("<div class='health-bar-wrapper'></div>");
	this.healthBarText =  $("<p>" + this.currentHealth + '/' + this.health + "</p>");
	this.currentHealthBar = $("<div class='health-bar-current'></div>");

	this.healthWrapper.append("<div class='health-bar'></div>");
	this.healthWrapper.append(this.currentHealthBar);
	this.healthWrapper.append(this.healthBarText);

	this.element.append(this.healthWrapper);

}

Zombie.prototype.move = function() {
	var self = this;
	self.position += self.speed;
	self.element.css('right', self.position);
	
};

Zombie.prototype.die = function() {
	$(this.element, '#field').remove();
	this.isAlive = false;
};

Zombie.prototype.slowDown = function() {
	this.speed = this.minSpeed;
};

Zombie.prototype.accelerate = function() {
	this.speed = this.baseSpeed;
};


Zombie.prototype.growOld = function() {
	var self = this;
	var currentTime = 0;

	var refreshIntervalId = setInterval(function() {
		self.explode(1);
		currentTime++;
		if (!self.isAlive) {
			clearInterval(refreshIntervalId);
		}
	}, 1000);
};

Zombie.prototype.explode = function(power) {
	this.currentHealth -= power;
	this.currentHealthBar.width((this.healthWrapper.width()/this.health)*this.currentHealth);
	this.healthBarText.text(this.currentHealth + '/' + this.health);

	if (this.currentHealth <= 0 || !this.isAlive) {
		this.die();
	}
}