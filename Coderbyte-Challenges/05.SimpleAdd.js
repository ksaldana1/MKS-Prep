function SimpleAdding(num) { 
	var result = 0
	if (num >= 1 && num <= 1000) {
		for (i = 1; i <= num; i++) {
			result += i;
		}
	}
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());           
