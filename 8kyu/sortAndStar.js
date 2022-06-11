// P.R.E.P

/*
Parameters: an array of strings, will not be a number, is case censitive, can be one index long or infinite
*/

function twoSort(s) {
  let num="";
  // Sort s and take first index
  s.sort()[0].split('').forEach((x,i) => i === 0 ? num+=x : num+=`***${x}`)
  // forEach index of the first word that is not the first one add *** then the letter
  return num
}

/*
Example: 
twoSort('bee', 'apple') should return a***p***p***l***e

Return:
boolean
*/
            