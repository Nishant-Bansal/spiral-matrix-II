/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    // let minVal = Number.MAX_SAFE_INTEGER;
    let maxVal = Number.MIN_SAFE_INTEGER;

    let min = new Array(arr.length);
    let max = new Array(arr.length);

    max[0] = maxVal;
    for(let i =1; i<arr.length; i++){
        max[i] = Math.max(max[i-1], arr[i-1])
    }

    min[arr.length-1] = arr[arr.length-1];
    for(let i=arr.length-2; i>=0; i--){
        min[i] = Math.min(min[i+1], arr[i])
    }

    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(max[i]<=min[i]) count++;
    }
    return count;
}