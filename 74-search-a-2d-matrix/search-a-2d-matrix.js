/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let i=0; j=cols-1;

    while(i<rows && j>=0){
        let curr = matrix[i][j];
        if(curr === target) return true;
        else if(target > curr) i++;
        else j--
    }
    return false
};