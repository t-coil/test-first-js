function f2c (far) {
	var cel = (far -  32)  *  5/9;
	return cel;
}

function c2f (cel) {
	var far = cel * (9/5) + 32;
	return far;
}

function Temperature(temp) {
var far = temp;

	this.setFahrenheit = function(num) {far = num;}
	this.setCelcius = function(num) {far = c2f(num);}
	this.celcius = function() {return f2c(far);}
	this.fahrenheit = function() {return far;}
}

