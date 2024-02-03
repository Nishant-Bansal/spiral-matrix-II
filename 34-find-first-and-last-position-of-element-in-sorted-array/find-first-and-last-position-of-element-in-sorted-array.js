/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function binarySearch(nums, target, is_searching_left){
        let left = 0;
        let right = nums.length-1;
        let idx = -1

        while(left <= right){
            let mid = Math.floor((left+right)/2);

            if(nums[mid] > target) right = mid-1
            else if(nums[mid]<target) left = mid+1
            else {
                idx = mid

                if(is_searching_left) right = mid-1
                else left = mid+1
            }
        }
        return idx;
    }

    let left = binarySearch(nums, target, true)
    let right = binarySearch(nums, target, false)

    return [left, right]
    // let len = nums.length;
    // let ans = [];

    // if(len===0) return [-1, -1];
    // if(len === 1 && target === nums[0]){
    //     return [0, 0]
    // } else if(len === 1 && target !== nums[0]){
    //     return [-1, -1]
    // }

    // let left = 0, right = len-1;

    // if(nums.includes(target)){
    //     while(left<=right){
    //         let mid = Math.floor(left + (right-left)/2);

    //         if(nums[mid] === target){
    //             if(nums[mid-1] === target) ans.push(mid-1, mid)
    //             else if(nums[mid+1] === target) ans.push(mid, mid+1)
    //             else ans.push(mid, mid)
    //             return ans;
    //         } else if(nums[mid]>target){
    //             right = mid-1;
    //         } else left = mid+1
    //     }
    // } else return [-1, -1]
    // return ans;
};