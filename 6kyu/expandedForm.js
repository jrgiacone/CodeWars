function expandedForm(num) {
  let str = [];
  let mult = 10;
  while (num > 1){
    let remain = num%mult;
    if(remain > 0){
      str.unshift(remain);
    }
    num -= remain;
    mult = mult*10
    console.log(remain)
  }
  return str.join(" + ")
}
