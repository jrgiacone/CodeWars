var maxSequence = function(arr){
  
  let currentSum = 0;
  let maxSum = 0;
  
  if(arr.length === 0){
    return 0
  }
  

  
  arr.forEach((e) => {
    currentSum = Math.max(e, currentSum + e)
    maxSum = Math.max(maxSum, currentSum)

  })
  
  return maxSum

}