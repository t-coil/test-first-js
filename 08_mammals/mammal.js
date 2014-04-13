function Mammal(name) {

	this.name = name;
	this.offspring = [];
}

Mammal.prototype = {
	sayHello: function() {return "My name is " + this.name + ", I'm a Mammal";},
	haveBaby: function() {
		var child = new Mammal ("Baby " + this.name);
		this.offspring.push(child);
		return child;
	}
}

function Cat(name, color) {
	this.name = name;
	this.color = color;
}

Cat.prototype = new Mammal();

Cat.prototype.haveBaby = function(color) {
	var child = new Cat ("Baby " + this.name, color);
	this.offspring.push(child);
	return child;
}