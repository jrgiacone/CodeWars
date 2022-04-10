
// Takes two random strings and determines the absolute length between letter groupings of strings

function mxdiflg(a1, a2) {
  let str1 = a1.map(str => str.length);
  let str2 = a2.map(str => str.length);
  if (a1.length === 0 || a2.length === 0){
    return -1
  }else {
    return Math.max(Math.max(...str1)-Math.min(...str2), Math.max(...str2) - Math.min(...str1))
  }
}
