function count (string) {  
  let count = {};
  string.split('').forEach(s=> count[s] ? count[s]++ : count[s] = 1)
  return count;
}