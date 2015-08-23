
var random = Math.round((Math.random()*100));
var guess = undefined
var pastGuess = []
function newGame() {
	random = Math.round((Math.random()*100));
	guess = undefined
	pastGuess = []
};
function submit(guess) { 
	guess = parseInt(guess)
	if (guess === random) {
		return 'You got it!';
	}
	else if (Math.abs(guess - random) >= 50) {
		pastGuess.push(guess);
		console.log("Ice Cold" + " - " + "You have made " + (pastGuess.length) + " guesses so far.");
	}
	else if (Math.abs(guess - random) >= 30) {
		pastGuess.push(guess);
		console.log("Cold" + " - " + "You have made " + (pastGuess.length) + " guesses so far.");
	}
	else if (Math.abs(guess - random) >= 20) {
		pastGuess.push(guess);
		console.log("Warm" + " - " + "You have made " + (pastGuess.length) + " guesses so far.");
	}
	else if (Math.abs(guess-random) >= 10) {
		pastGuess.push(guess);
		console.log("Hot" + " - " + "You have made " + (pastGuess.length) + " guesses so far.");
	}
	else {
		pastGuess.push(guess);
		console.log("Very Hot!" + " - " + "You have made " + (pastGuess.length) + " guesses so far.");
		};


};
function seeGuess() {
	console.log(pastGuess);
};



	
