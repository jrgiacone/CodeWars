var capitals = function (word) {
  let indexes = [];
  word.split('').forEach(x => {
    if (x === x.toUpperCase()){
      indexes.push(word.indexOf(x))
    }
  })
  return indexes
};