/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase()
  str2=str2.toLowerCase()
  let l1=[];
  let l2=[];
  if(str1.length==str2.length){
    for(i=0;i<str1.length;i++){
      l1.push(str1[i])
      l2.push(str2[i])
    }
    l1.sort();
    l2.sort();

    if(l1.join()===l2.join()){
      return true;
    }else{
      return false
    }

  }else{
    return false;
  }

}
console.log(isAnagram("Debit Card","Bad Credit"))
module.exports = isAnagram;
