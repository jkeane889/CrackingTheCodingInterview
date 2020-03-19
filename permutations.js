// Permutations from LeetCode

/*
    Given a collection of distinct integers, return all possible permutations.

    Example:

    Input: [1,2,3]
    Output:
    [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
    ]
*/

var permute = function(nums) {
    /*
        I - array of 'n' integers
        O - all permutations of integers
        C - time complexity (depth-first recursion)
        E - "distinct" integers (no duplicates, no negatives, only positives?)
    */
    
    /*
        Create a global storage array to hold permutations of input integers
        
        Create inner recursive function
            base case: if input array's length === given array's length
                add to global storage array
        
            recursive case:
                iterate over each element in the array
                    if element is not already included in the array
                        push it into the array
                        call inner recursive function again
    */

    const result = [];
    const temp = [];
    findPermutations(temp, nums, result);
    return result;
}

const findPermutations = (temp, nums, result) => {
    if (!nums.length) {
        result.push(temp.concat());
        return
    };

    for (let i = 0; i < nums.length; i++) {
        const newNum = nums[i];
        temp.push(newNum);
        nums.splice(i, 1);
        findPermutations(temp, nums, result);
        temp.pop();
        nums.splice(i, 0, newNum);
    }
}

console.log(permute([1,2,3]));
