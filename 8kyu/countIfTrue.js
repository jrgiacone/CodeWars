function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach(x => x===true ? count++ : null)
  return count
}