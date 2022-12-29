function vowelIndices(word){
  let answer = []
  let vowels = 'aeiouy'
  word.toLowerCase().split('').forEach((letter, idx) => {
    if (vowels.includes(letter)) {
      answer.push(idx+1)
    }
  })
  return answer
}
