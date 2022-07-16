function race(v1, v2, g) {
  if (v1 > v2) return null

  let res = (g/(v2 - v1))
  
  return([
    Math.floor(res),
    Math.floor(res*60%60),
    Math.floor(res*3600%60)
  ])
  
}