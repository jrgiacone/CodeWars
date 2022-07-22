function sumDigits(number) {
  let arr = Math.abs(number).toString().split('')
  console.log(arr)
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++)
    sum += +arr[i]
  return sum;
}
