function tribonacci(signature,n){
  let trib = signature;
  for(let i = 3; i < n; i++){
    trib.push((trib[i-1] + trib[i-2] + trib[i-3]));
  }
  return trib.slice(0, n);
}