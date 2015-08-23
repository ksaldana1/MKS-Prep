function FirstFactorial(num) { // Declare function FirstFactorial -- takes number as argument
	if (num >= 1 && num <= 18) { // Conditional for Range -- Argument must be between 1 and 18
		var result = 1; // Declare local result variable 
		for (var i = num; i > 0; i--) { // For Loop. Increment begins at argument given.
			result *= i;    // Loop starts at number passed through as argument, multiplies current result value with increment.
							// Loop continues until i = 0
		};
	}
	else {					// Conditional to give feedback if given invalid argument (number not between 1 and 18)
		console.log("Invalid Argument");
	};
  // code goes here  
  return result; 			// Function returns result variable
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());  // Variable Called