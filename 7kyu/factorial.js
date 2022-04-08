/* Takes in a number input and returns
 * the factorial of the number, however,
 * if the number is outside of the range 0-12,
 * the program throws a range error! */
function factorial(n)
{
  if (n < 0 || n > 12){
    throw new RangeError();
  }else if (n === 0){
    return 1;
  }else{
    let sum = 1;
    for (let i = n; i > 0; i--){
     sum*=i;
    }
    return sum;
  }
}
