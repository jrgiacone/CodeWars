function findEvenIndex(arr)
{
let sum = 0;
  const total = arr.reduce((a,b)=> a+b , 0);
  return arr.findIndex((x, i, arr) => (total - (sum += x)) * 2 + x === total) ;
}

