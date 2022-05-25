function XO(str) {
  let x = 0;
  let o = 0;
  str = str.toLowerCase()
  for (i = 0; i <= str.length; i++){
    if(str.charAt(i) === 'x'){
      x+=1;
    }else if (str.charAt(i) === 'o'){
      o+=1;
    }
  }
  return x === o;
}