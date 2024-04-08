
function isPalindrome(word) {
  // Write your algorithm here

  //remove all the non-alfanumeric characters
  let reg = /[\W_]/g;

  
  let smallStr = word.toLowerCase().replace(reg, "");

//reverse the string, convert it into an array of letters, then rejoin
  let reversed = smallStr.split("").reverse().join("");
  if(reversed === smallStr) return true;

  return false;
}


/* 
  Add your pseudocode here
   - Remove spaces and special characters from the input word
   - Convert the word to lowercase
   - Check if the word reads the same way from the front and the back
   - If they're not equal, return false
*/


/*
  Add written explanation of your solution here
  -Remove all the non-alfanumeric characters by the use of regex(regular expression).
  -Regex is a sequence of characters that define a specific search pattern.
  -Here we will use (/[\W_]/). The 'g' stands for global, hence it will go through the entire sting.
  -Then replace the reg with the string.
  -Check whether the sting is a palindrome.If it is, return 'true'. If not return 'false'
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


