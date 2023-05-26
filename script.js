// complete the given function

function palindrome(str){
const temp1 = str.split("")
temp1.reverse();
const res = temp1.join("");
if(str===res) return true;
else return false;
}
module.exports = palindrome
