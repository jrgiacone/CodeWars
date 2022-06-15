function findDifference(a, b) {
  let one = 1;
  let two = 1;
  a.forEach(x => one*=x)
  b.forEach(x => two*=x)
  return Math.abs(one - two)
}