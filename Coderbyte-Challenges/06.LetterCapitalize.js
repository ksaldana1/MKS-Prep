function LetterCapitalize(str) { 
	str = str.split(" ");
	for (var i = 0; i < str.length; i++) {
		 str[i] = str[i][0].toUpperCase() + str[i].substr(1);

	}
  str = str.join(" ");
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());                            















                            
                            
                            
  