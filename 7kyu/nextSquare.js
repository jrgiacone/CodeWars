function findNextSquare(sq) {
  let num = Math.sqrt(sq)
  if(num % 1 !== 0) return -1
  
  return Math.pow(num + 1, 2)
}