function squareDigits(num){
  let sum = 0;;
  num.toString().split('').map(x => parseInt(x)).forEach(x => sum += `${Math.pow(x,2)}`)
  return parseInt(sum.slice(1))
}