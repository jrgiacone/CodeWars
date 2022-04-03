/*Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

*/


function solution(nums){
  return nums === null ? [] : sort=nums.sort((a,b)=>a-b);
} 

/* The function above takes in an array of numbers in a random order and sorts all the numbers from smallest to biggest. If the array entered is null, then the function will return and empy array. */
