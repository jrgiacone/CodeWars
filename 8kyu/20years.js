function stairsIn20(s){
  let sum = 0;
  s.forEach(x => {
    x.forEach(s => {
      sum += s
    })
  })
  return sum*20
}
