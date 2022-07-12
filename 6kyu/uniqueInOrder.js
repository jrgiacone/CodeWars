var uniqueInOrder=function(iterable){
  let sorted;
 
  typeof iterable === 'string' ? sorted = iterable.split('') : sorted = iterable
  
  let sum = [];
  
  sorted.forEach((x,i) => sorted[i] != sorted[i+1] ? sum.push(sorted[i]) : null)
  
  return sum
}