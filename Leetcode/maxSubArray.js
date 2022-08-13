const maxSubArray = nums =>  {
    let currentSum = 0;
    let maxSum = Math.min(...nums)
    if (nums.length === 0){
        return 0
    }
    
    nums.forEach((e) => {
        currentSum = Math.max(e, currentSum + e)
        maxSum = Math.max(maxSum, currentSum)
    })
    
    return maxSum
};