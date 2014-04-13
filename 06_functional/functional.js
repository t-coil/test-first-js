function countWords(sentence) {
	return sentence.split(" ").length;
}


function makeAdder(num) {
	return function(num2) {return num + num2;}
}

function forEach(array, adfunction) {
	var returned = undefined;
	for(var i = 0; i < array.length; i++) {
		 returned += adfunction(array[i]);
	}
	return returned
}

function map(array, adfunction) {
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		newArray.push(adfunction(array[i]));
	}
	return newArray
}

function filter(array, adfunction) {
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		if(adfunction(array[i])) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

function contains(hash, num) {
	var trueOrFalse = false;

	if (hash instanceof Array) {
		for(var i = 0; i < hash.length; i++) {
			if(hash[i] == num) {
				trueOrFalse = true; 
			}
		}
	} else {
	var keys = Object.keys(hash);
	var values = keys.map(function(i) {return hash[i]; });
		for(var i = 0; i < values.length; i++) {
			if(values[i] == num) {
				trueOrFalse = true; 
			}
		}
	}

	return trueOrFalse;
}

function reduce(array, start, adfunction) {
	for(var i = 0; i < array.length; i++) {
		start = adfunction(start, array[i]);
	}
	return start;
}

function countWordsInReduce(start, word_array){
	if(start instanceof String) {
		return start.split(" ").length + word_array.split(" ").length;
	} else {
		return start + word_array.split(" ").length;
	}
}

function sum(array) {
	return reduce(array, 0, function(first, second) {return first + second;} );
}

function every(array, value) {
	for(var i = 0; i < array.length; i++) {
		if(value(array[i]) == false) {
			return false;
		}
	}
return true;
}

function any(array, value) {

for(var i = 0; i < array.length; i++) {
	if(typeof(value) === 'undefined') {
		if(array[i] == true) {
			return true;
		}
	} else if(value(array[i]) == true) {
		return true;
	}
} 

return false;
}

function once(adfunction) {
	var counter = 0;
	return function() {
		if(counter == 0){
			counter++;
			return adfunction();
		}
	}
}

function wrapper(func, funcBlock) {
	return function() {return funcBlock(func); }
}
