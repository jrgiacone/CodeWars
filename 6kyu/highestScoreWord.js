function high(x){
  let alph = x.split(' ').map(x => [...x].reduce((a,b) => a+b.charCodeAt(0) - 96, 0))
  return x.split(' ')[alph.indexOf(Math.max(...alph))]
}