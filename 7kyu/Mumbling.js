function accum(s) {
  let result = [];
	let str = s.toLowerCase().split('')
  str.forEach((x,i) => {
    let letter = ''
    for(let j = 0; j <=i; j ++){
      letter += str[i]
    }
    result.push(letter)
  })
  result = result.map(x => x.charAt(0).toUpperCase() + x.substring(1))
  return result.join('-')
}