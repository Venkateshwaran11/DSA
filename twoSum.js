const nums = [2,7,11,15];
const target  = 9;

function twoSums(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        if(map.has(needed)){
            return [map.get(needed),i]
        }else{
            map.set(nums[i],i)
        }
    }
}
console.log(twoSums(nums,target))