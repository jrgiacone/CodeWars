/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first. */

// My Solutions:

// This function takes the highest and lowest values as a string of inputs and returns the highest and lowest value of that string.
// This works by taking the string and splitting it into and array at the spaces.
// Then using the Math.max and Math.min functions we return the values in string form.

function highAndLow(numbers){
  let nums = numbers.split(' ');
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}
