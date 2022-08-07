function getRealFloor(n) {
  if (n >= 13){
    return n-2
  } else return n>0 ? n-1 : n
}