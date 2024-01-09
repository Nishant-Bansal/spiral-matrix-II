/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length<2){
        return 0;
    } else {
        //sort the array
        nums=nums.sort((a,b)=>a-b)
        
        //find the maximum diffrence
        let maxDiff = 0;
        for(let i=0; i<=nums.length-2; i++){
            maxDiff = Math.max(maxDiff, nums[i]>nums[i+1] ? nums[i]-nums[i+1] : nums[i+1]-nums[i])
        }
        return maxDiff;
    }
};

console.log(maximumGap([100, 3, 2, 1]))