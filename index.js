function reversed(word)
{
  const reversedWord=word.split("")
  const reversedArray=reversedWord.reverse()
  const finalWord=reversedArray.join("")
  return finalWord;
}



function isPalindrome(word) {
  // Write your algorithm here
  const finalWord=reversed(word)
  if (reversed(word)===finalWord) {
   return true  ;  }
   else ; {
   return false  ; 
   }
 
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
