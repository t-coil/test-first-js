function translate (phrase) {

	var phraseArray = phrase.split(" ");
	var translated = "";
	var phenom = /qu/g;

	for(var i = 0; i < phraseArray.length; i++) {

		if(phenom.test(phraseArray[i])) {

			var splitNum = phraseArray[i].search(phenom) + 2;

		} else {

			var splitNum = phraseArray[i].search(/[aeiouAEIOU]/);

		}

		var temp = phraseArray[i].split("");

		var first = temp.slice(0, splitNum).join("");
		var second = temp.slice(splitNum).join("");

		phraseArray[i] = second + first + "ay";
	}

	translated = phraseArray.join(" ");
	return translated;
}