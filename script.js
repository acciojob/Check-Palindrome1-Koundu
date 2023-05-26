// complete the given function

function palindrome(str){
const temp1 = str.split("")
temp1.reverse();
const res = temp1.join("");
return console.log(str===res);
}
module.exports = palindrome
