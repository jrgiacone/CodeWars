function alphabetPosition(text) {
  let alph = "abcdefghijklmnopqrstuvwxyz".split('')
  let filtered = '';
  text = text.toLowerCase().replace(/[^a-z]/gi, '').split(' ').join('').split('')
  text.map(x => {
    alph.map(y => {
      if(x === y){
        filtered += ' ' + (alph.indexOf(y)+1)
      }
    })
  })
  return filtered.trim()
}