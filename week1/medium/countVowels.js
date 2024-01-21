/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    a=str.split("")
    const vowels=["a","e","i","o","u","A","E","I","O","U"]
    count=0
     for(i=0;i<str.length;i++){
      for(j=0;j<vowels.length;j++){
        if(a[i]===vowels[j]){
          count+=1
        }
      }
    }
    return count
  }
str="Hello World"
console.log(countVowels(str))
module.exports = countVowels;