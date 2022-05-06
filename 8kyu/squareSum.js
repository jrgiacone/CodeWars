function squareSum(numbers){
  let sum = 0;
  numbers.forEach(x => {
    sum+=Math.pow(x,2);
  });
  return sum;
}
