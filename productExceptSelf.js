const nums = [1, 2, 3, 4]

function productExpectSelf(nums) {
    let leftProduct = 1;
    let rightProduct = 1;
    const left = new Array(nums.length);
    const right = new Array(nums.length);
    const result = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        left[i] = leftProduct
        leftProduct = leftProduct * nums[i];
    }
    for (let i = nums.length-1; i >= 0; i--) {
        right[i] = rightProduct
        rightProduct = rightProduct * nums[i];
    }
    for (let i=0; i<nums.length;i++){
        result[i]= left[i]*right[i]
    }
    return result
}
console.log(productExpectSelf(nums))