// complete the given function

function palindrome(str){
const str1 = str.toLowerCaser();
const temp1 = str1.split("")
temp1.reverse();
const res = temp1.join("");
if(str1===res) return true;
else return false;
}
module.exports = palindrome
