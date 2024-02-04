/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let ans;
    let newPower = n
    if(n<0) newPower = n*-1;

    if(newPower==0) return 1;
    let halfPower = Math.floor(newPower/2);
    let newPow = myPow(x, halfPower);
    if(n%2 == 0) ans = newPow * newPow
    else ans = x*newPow*newPow

    if(n<0){
        return 1/ans;
    } else return ans;
};