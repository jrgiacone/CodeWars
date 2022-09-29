// Takes an array of integers and filters the array.

// Using the filter function we can check if each number in the arary is divisible by 2 without a remainder

function getEvenNumbers(numbersArray){
  return numbersArray.filter(x => x % 2 === 0)
}