// Sum Numbers
function sum (numbers) {
  let sum = 0;
  numbers.map(x => x === undefined ? 0 : sum=sum+x)
  return sum
};