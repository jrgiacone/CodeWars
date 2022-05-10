/*
This function takes the scores from games input in an array as ["3:1","0:2",...]: following these rules it tallies the score:
Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

    if x > y: 3 points
    if x < y: 0 point
    if x = y: 1 point

Notes:

    there are 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4
*/

// My Solution:
function points(games) {
  let score = 0;
  games = games.map(x => x.split(':'));
  games.forEach(x => {
    if (x[0] > x[1]){
      score += 3;
    }else if (x[0] < x[1]){
      return
    }else{
      score += 1;
    }
  })
  return score;
}