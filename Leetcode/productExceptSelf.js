var productExceptSelf = function(nums) {
    let output = [];
    let leftMult = 1;
    let rightMult = 1;
    console.log('right')
    for(i = nums.length -1; i>=0; i--){
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    
    console.log(output)
    console.log('left')
    for (j = 0; j < nums.length; j++){
        output[j] *= leftMult;
        leftMult *= nums[j];
    }
    console.log(output)
    return output;
};