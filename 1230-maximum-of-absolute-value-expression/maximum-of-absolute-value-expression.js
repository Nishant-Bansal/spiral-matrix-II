/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    let a1 = [], a2 = [], a3 = [], a4 = [], resultArr = [];

    for(let i = 0; i < arr1.length; i++){
        a1.push(arr1[i]+arr2[i]+i)
        a2.push(-arr1[i]+arr2[i]+i)
        a3.push(arr1[i]-arr2[i]+i)
        a4.push(-arr1[i]-arr2[i]+i)
    }

    resultArr.push(Math.max(...a1)-Math.min(...a1))
    resultArr.push(Math.max(...a2)-Math.min(...a2))
    resultArr.push(Math.max(...a3)-Math.min(...a3))
    resultArr.push(Math.max(...a4)-Math.min(...a4))


    return Math.max(...resultArr)






    // let max1 = Number.MIN_VALUE;
    // let max2 = Number.MIN_VALUE;
    // let max3 = Number.MIN_VALUE;
    // let max4 = Number.MIN_VALUE;
    // let min1 = Number.MAX_VALUE;
    // let min2 = Number.MAX_VALUE;
    // let min3 = Number.MAX_VALUE;
    // let min4 = Number.MAX_VALUE;

    // let len = arr1.length

    // for(let i=0; i < len; i++){
    //     max1 = Math.max(max1, (arr1[i] + arr2[i] + i))
    //     min1 = Math.min(min1, (arr1[i] + arr2[i] + i))

    //     max2 = Math.max(max2, (-arr1[i] + arr2[i] + i))
    //     min2 = Math.min(min2, (-arr1[i] + arr2[i] + i))

    //     max3 = Math.max(max3, (arr1[i] - arr2[i] + i))
    //     min3 = Math.min(min3, (arr1[i] - arr2[i] + i))

    //     max4 = Math.max(max4, (-arr1[i] - arr2[i] + i))
    //     min4 = Math.min(min4, (-arr1[i] - arr2[i] + i)) 
    // }

    // return Math.max(Math.max(max1-min1, max2-min2), Math.max(max3-min3, max4-min4));
};

console.log("maxAbsValExpr ==> ", maxAbsValExpr([1,-2], [8, 8]))