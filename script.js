// complete the given function

function palindrome(str){
	const reverse = str.split("").reverse().join("");
	return reverse === str
}
module.exports = palindrome
