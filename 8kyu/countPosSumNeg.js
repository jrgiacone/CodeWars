function countPositivesSumNegatives(input) {
  let pos = 0;
  let neg = 0;
  if (input === null || input.length === 0){
    return [];
  } else {
    input.forEach(x => x > 0 ? pos++ : neg+=x)
  }
  
  return [pos, neg]
}