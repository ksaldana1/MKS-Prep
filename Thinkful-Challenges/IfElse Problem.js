function animalPlural(animal) {
	var number = prompt("How many animals do you have?")
	number = + number
	if (number === 1) {
		console.log(number + " " + animal);
	}
	else {
		console.log(number + " " + animal + "s");
	};
}

