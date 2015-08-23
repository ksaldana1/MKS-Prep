function VowelCount(str) { 
	var result = 0;
	str = str.split("");
	for (i = 0; i < str.length; i++) {
		if (str[i] === 'a' || str[i] === 'e' || str[i] === 'o' || str[i] === 'u') {
			result += 1
		}


	}



  // code goes here  
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount("test")                            















                            
                            
                            
