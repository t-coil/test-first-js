function repeat (a, b) {
	var total = "";
	for(var i = 0; i < b; i++) {
		total += a;
	}
	return total;
}

function join (array, limit) {
	var total = "";
	if(limit == undefined) {
		for(var i = 0; i < array.length; i++) {
			total += array[i];
		}
	} else {
		for(var i = 0; i < array.length; i++) {
			total += array[i];
			total += "/";
		}
		total = total.slice(0,-1);
	}
	return total;
}

function sum (array) {
	var finished = 0;
	for(var i = 0; i < array.length; i++) {
		finished += array[i];
	}
	return finished;
}

function paramify (hash) {
	var keys = Object.keys(hash);
	keys.sort();

	var values = keys.map(function(i) {return hash[i]; });
	var param = "";


	for(var i = 0; i < values.length; i++) {
		param += keys[i];
		param += "=";
		param += values[i];
		param += "&";
	}
	param = param.slice(0,-1);
	return param;
}

function factorial (num) {
	var total = 1;
	for(var i = 1; i <= num; i++) {
		total *= i;
	};
	return total;
}

function concat_string () {
	var string = Array.prototype.slice.call(arguments);
	var total = "";
	for(var i = 0; i < string.length; i++) {
		total += string[i];
	}
	return total;
}