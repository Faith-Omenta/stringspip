// Write a function that takes an array of numbers as input and returns 
// the sum of all the numbers
function calculateArray(array){
  let total = 0;

  for (const value of array) {
    total += value;
  }

  return total;
}
const answer=calculateArray([4,5,7,9,2])
console.log(answer)
// Write a function that takes two numbers as input and returns true if 
// their sum is greater than 100,And false otherwise
function addTwoNumbers(num1,num2){
  let num = num1+num2
  if (num>100){
  return true
  }
  else{
    return false
  }
}
console.log(addTwoNumbers(34,87))


// Write a function that takes a string as input and returns the number of 
// vowels in the string
function getVowelsCount(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count=0;

for(let v of s) {
    if(vowels.includes(v)){
        console.log(v);
        count++
    }
       }
return count

}
let s="Lindsay"
console.log(getVowelsCount(s));
// Write a function that takes in a array of numbers as a parameter and 
// returns the second largest number in the array
function secondLargest(arr) {
  var max1 = arr[0];
  var max2 = 0;
  
  for(var i=0; i<arr.length; i++) {
    if(arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    }
    else if(arr[i] > max2 && arr[i] != max1) {
      max2 = arr[i];
    }
  }

  return max2;
}

console.log(secondLargest([100,2,4,54,27,98,99]));
// Write a function that takes a string as a parameter and returns true if 
// the string is a palindrome and false otherwise
function isPalindrome(str){
  let strtwo=str.split('').reverse('').join('')
  if(str===strtwo){
    return true
  }
  else{
    return false
  }
  }
console.log(isPalindrome("racecar"))

