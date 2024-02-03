/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let len = nums.length;

    if(len === 1) return 0;
    if(nums[0]>nums[1]) return 0;
    if(nums[len-1] > nums[len-2]) return len-1;

    let left = 1;
    let right = len-2;
    let ans= -1;

    while(left<=right){
        let mid = Math.floor(left + (right-left)/2);

        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]){
            ans = mid;
            break
        } else if(nums[mid]>nums[mid-1]) left = mid+1;
        else right = mid-1;
    }
    return ans;
};