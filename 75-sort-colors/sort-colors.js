/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    function swap(arr, i, j){
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let i = 0, j=0, k = nums.length -1;

    while(i<= k){
        if(nums[i] === 0){ //region 1
            swap(nums, i, j)
            i++;
            j++;
        } else if(nums[i] === 1){ //region 2
            i++;
        } else { //region3
            swap(nums, i, k)
            k--;
        }
    }
};