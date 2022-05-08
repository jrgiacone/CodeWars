function getSum( a,b )
{  
  let sum = 0;
  let arr = [a,b];
  let nums = arr.sort((a,b)=> a-b)
  let start = nums[0];
  let end = nums[1]
  while (start <= end){
    sum +=start;
    start ++;
  }
  return sum;
}