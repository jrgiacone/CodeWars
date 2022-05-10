/* This code wars takes parameters hour, minute, and seconds and returns the time in miliseconds

To clearly define the conversions being used I labeled them as funciton level variables
*/

// My Solution:
function past(h, m, s){
  let hr = 3600000;
  let min = 60000;
  let sec = 1000;
  return h*hr + m*min + s*sec;
}