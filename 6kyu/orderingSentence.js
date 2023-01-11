const order = (sentence) => {
  let arr = sentence.split(' ');
  let result = [];
  
  arr.forEach(word => {
    let x = word.split('')
    let num = x.find(el => parseInt(el))
    result.push([word,parseInt(num)])
  })
  result.sort((a,b) => a[1] - b[1]).map(x=> x.splice(1,1))
  return result.join(' ')
}

