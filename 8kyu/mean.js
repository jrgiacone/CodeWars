function find_average(array) {
  let sum =0;
  array.forEach(x => sum+=x)
  return array.length === 0 ? 0 : sum/array.length
}