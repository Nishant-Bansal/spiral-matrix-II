/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let newArr = [...nums, ...nums];
    return newArr;
};

console.log("getConcatenation ==> ", getConcatenation([1,3,2,1]))