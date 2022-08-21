function countBy(x, n) {
  let result = [];
  for (let i = x; i <= x*n; i+=x){
    result.push(i)
  }
  return result
}
