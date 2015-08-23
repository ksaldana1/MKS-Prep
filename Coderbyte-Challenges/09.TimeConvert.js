function TimeConvert(num) { 
	var minutes;
	var hours;

	if (num < 60 && num > 0) {
		minutes = num;
		return 0 + ":" + minutes;
	}
	else {
		hours = Math.floor(num / 60);
		minutes = num % 60;
		return hours + ":" + minutes;
	}
  
 
         
}
   

TimeConvert(readline());                            















                            
                            
                            
  