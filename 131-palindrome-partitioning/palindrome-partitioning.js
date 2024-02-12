/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let ans = [];

    function helper (s, myCurrentpartition) {

        if(s.length === 0){
            let newArr = [...myCurrentpartition]
            ans.push(newArr);
            return;
        }

        for(let i = 1; i<=s.length; i++){
            let prefix = s.substring(0, i)
            if(isPalindrome(prefix)){
                let remaining = s.substring(i);
                myCurrentpartition.push(prefix);
                helper(remaining, myCurrentpartition);
                myCurrentpartition.pop();
            }
        }
    }
    
    function isPalindrome (s) {
        let l = 0, r = s.length-1;
        while(l<r){
            if(s.charAt(l) !== s.charAt(r)) 
                return false;
            l++;
            r--;
        }
        return true;
    }

    helper(s, []);
    return ans;
};