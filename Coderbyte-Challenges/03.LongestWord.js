function LongestWord(sen) { // Declare Function LongestWord. Takes string argument
	sen = sen.split(" "); // Assign variable sen to array, sliced by space
	var longestLength = 0; // Declare local variable to keep track of current longest length
	var longestWord  // Declare local variable to keep track of current longest word
	sen = sen.replace(/[^a-zA-Z0-9\s]/g, ""); // Replace punctuation/non-alpha numeric characters
	for (var i = 0; i < sen.length; i++) { // Loop. Starts at beginning of array. Increment adds 1 until i is less than array length
		if (sen[i].length > longestLength) { // Conditional comparing array index value length with current longest length (0 at first run through loop)
			longestLength = sen[i].length; // If conditional is true, assign longestLength to length of array element
			longestWord = sen[i]; // Assign longestWord to array element
		}

	}
  return longestWord;  // Function returns longest word after loop complete
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());  // Call Function                          















                            
                            
                            
  