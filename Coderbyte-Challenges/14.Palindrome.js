function Palindrome(str) {
 var stringSpace = str.replace(/[\s]/g,"");
 var string2 = stringSpace.split("").reverse().join("");
 if (stringSpace === string2) {
     return true;
 }
    else {
        return false;
    }
    
}