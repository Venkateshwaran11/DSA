const nums = [5, 2, 8, 5, 9];

function findDuplicates(nums){
    const seen = new Set();
    for(let i = 0; i<nums.length;i++){
        if(seen.has(nums[i])){
            return nums[i];
        }else{
            seen.add(nums[i])
            console.log(seen)
        }
    }
}

console.log(findDuplicates(nums))