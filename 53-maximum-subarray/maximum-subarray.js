/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let length = nums.length;

    if(nums.length < 2){
        return nums[0]
    } else {
        let sum = 0;
        let ans = nums[0];

        for(let i=0; i<length; i++){
            sum += nums[i]

            if(sum > ans){
                ans = sum
            }
            if(sum < 0){
                sum = 0
            }
        }

        return ans;
    }
};

console.log(maxSubArray([5,4,-1,7,8]))