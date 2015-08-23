function LetterChanges(str) {  // Declare function LetterChanges. Takes 1 string as argument
	var alpha1 = "abcdefghijklmnopqrstuvwxyz"; // Declare string alpha1 
	var alpha2 = "bcdEfghIjklmnOpqrstUvwxyzA"; // Declare string alpha2
	var result = ""	// Declare result empty string
	for (var i = 0; i < str.length; i++) { // For loop, increments through each character in string
		if (alpha1.indexOf(str[i]) !== -1) { // Conditional -- checks if character is included in alpha1

			var index = alpha1.indexOf(str[i]); // Declare local variable index assigned to location of character in string
			result += alpha2.charAt(index); // Adds applicable character from alpha2, based on index of previously declared variable. Adds character to string result.
		}
		else {						// If character not included in alpha1, add character to result
			result += str[i];
		}

	}

  // code goes here  
  return result; 			// Function returns final string
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());       // Call Function                     















                            
                            
                            
  