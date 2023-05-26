// complete the given function

function palindrome(str){
	const reverse = (str) => str.split("").reverse().join("");
	return console.log(reverse === str)
}
module.exports = palindrome
