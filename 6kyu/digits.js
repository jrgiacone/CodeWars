function digPow(n, p){
  let arr=n.toString().split('').map(Number).reduce((total,currentValue,i,arr)=>total+(Math.pow(arr[i],p+i)),0)/n
  return (''+arr).includes('.')?-1:arr
}