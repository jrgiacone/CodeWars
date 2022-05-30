/* Problem:
Given a string, double each charracter in the string, return the new string
*/

/*
Seudocode:

Take a function as a parameter, will be a string input

turn the string into an array to use map or forEach 

at each character position/index, double the character, maybe something like x = x + x

rejoin the characters without spacing.

*/
function doubleChar(str) {
  return str.split('').map(x=> x=x+x).join('')
}

/*
Tests:

if dog should return ddoogg

if happy!! should return hhaappppyy!!!!

*/