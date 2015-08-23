function FirstReverse(str) {  // Declare Function firstReverse, taking a string as argument
	str = str.split(""); // Assign string to array of substring
	str = str.reverse(); // Reverse array
	str = str.join(""); // Join Array and convert to String
  	return str;    // Function Returns reversed and joined string 
         // Can also combined first 3 expressions as str = str.split("").reverse().join("")
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline()); // Call function                             
