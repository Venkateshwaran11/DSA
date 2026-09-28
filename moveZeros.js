// This problem teaches the Two Pointer pattern.

function moveZeros(nums){
    let j=0;
    for (let i=0;i<nums.length;i++){
        if(nums[i]!==0){ // 0-false,1-true
            nums[j]=nums[i] 
            j++
        }

    }
    console.log(nums)
    for (let i = nums.length-1; i>=j; i-- ){
        nums[i]=0
    }
    return nums
}

const nums = [0, 1, 0, 3, 12] //[1,1,0,3,12] [1,3,0,3,12] [1,3,12,3,12]
console.log(moveZeros(nums));