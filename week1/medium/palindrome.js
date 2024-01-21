/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  x=str.toLowerCase()
  x=x.replace(/[^a-z0-9]/g,'')
  console.log(x)
  x=x.split(" ").join("")
  a=x.split("").reverse().join("")
  if(x===a){
    return true
  }else{
    return false
  }
}
str="Able, was I ere I saw Elba!"
console.log(isPalindrome(str))
module.exports = isPalindrome;
      