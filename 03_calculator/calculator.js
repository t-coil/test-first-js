function Calculator () {
	var total = 0;

	this.add = function(num) {
		total += num;
	};

	this.subtract = function(num) {
		total -= num;
	};

	this.value = function() {
		return total;
	};
}