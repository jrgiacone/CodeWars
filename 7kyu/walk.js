// 10 minutes early
// input is an array of letters
// n , s , e , w
// can only walk one block in each direction
// takes 1 minute to travel one block

function isValidWalk(walk) {
  let dx = 0;
  let dy = 0;
  let dt = walk.length;
  walk.forEach((x) => {
    switch(x){
      case 'n': dy--; break;
      case 's': dy++; break;
      case 'w': dx--; break;
      case 'e': dx++; break;
    }
  })
  return dt === 10 && dx === 0 && dy === 0
}