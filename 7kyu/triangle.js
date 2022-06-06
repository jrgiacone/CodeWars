function isTriangle(a,b,c) {
  let arr = [a,b,c].sort(function(a, b) { return a - b; });
  return arr[0] + arr[1] > arr[2] ? true : false;
}