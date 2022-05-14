function grow(x){
  let prod = 1;
  x.map(x => prod*=x)
  return prod;
}