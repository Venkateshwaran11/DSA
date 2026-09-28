// Maximum Subarray → Kadane's Algorithm
function maximumSubarray(nums){
let currentSum = nums[0];//-2 -2 -1 -1
let maxSum = nums[0];//-2 -2 -1 -1
for (let i=1;i<nums.length;i++){
    currentSum = Math.max(nums[i],currentSum+nums[i]); //-2 -1 -1
    maxSum = Math.max(currentSum,maxSum)//-2 -1 -1
}
return maxSum
}
const nums = [-5,4,2]
console.log(maximumSubarray(nums))//-2, -3, -1, -5