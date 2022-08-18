function towerBuilder(nFloors) {
  let solution = [];
  for (let i = 0; i < nFloors; i++){
    solution.push(" ".repeat((nFloors -i) -1) + "*".repeat((i*2)+1) + " ".repeat((nFloors - i) - 1));
  }
  return solution
}