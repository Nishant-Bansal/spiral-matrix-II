/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];

    function helper(arr, used, ans){
        if(arr.length == used.length){
            ans.push([...used])
            return;
        }
        for(let i = 0; i < arr.length; i++){
            if(!used.includes(arr[i])){
                used.push(arr[i]);
                helper(arr, used, ans);
                used.pop(arr[i])
            }
        }
    }
    
    let newArr = []
    helper(nums, newArr, ans);
    return ans;
};