/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let cuts = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for(let i=0; i<arr.length; i++){
        max = Math.max(arr[i], max);
        if(max == i) cuts++;
    }
    return cuts;
};