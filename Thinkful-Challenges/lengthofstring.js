function lengthofString(string) {
	var stringArray = string.split(" ");
	var stringLength = string.split(" ").join("");
	console.log("This string has " + stringArray.length + " words. The average length of each word is " + (stringLength.length / stringArray.length) + " characters");
};
