function Calculator() {
	var total = [0];
	var calcContents = [];
	var failed = "calculator is empty";

	this.push = function(num) {
		calcContents.push(num);
	};

	this.plus = function() {
		if(calcContents.length == 0) {
			throw failed;
		} else {
			calcContents.push(calcContents.pop() + calcContents.pop());
		};

	};

	this.minus = function() {
		if(calcContents.length == 0) {
			throw failed;
		} else {
			var a = calcContents.pop();
			var b = calcContents.pop();

			calcContents.push(b - a);
		};
	};

	this.times = function() {
		if(calcContents.length == 0) {
			throw failed;
		} else {
			calcContents.push(calcContents.pop() * calcContents.pop());
		};
	};

	this.divide = function() {
		if(calcContents.length == 0) {
			throw failed;
		} else {
			var a = calcContents.pop();
			var b = calcContents.pop();

			calcContents.push(b / a);
		};
	};

	this.value = function() {
		total.push(calcContents[calcContents.length - 1]);
		return total[total.length - 1];
	};
}