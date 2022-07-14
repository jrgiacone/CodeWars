function getMiddle(s) {
  return s.length % 2 === 0 ? evenStr(s) : oddStr(s)
}

function oddStr(s){
  let middle = Math.ceil(s.length/2)
  return s.charAt(middle-1)
}

function evenStr(s){
  let middle = s.length/2
  return s.substring(middle-1,middle+1)
}