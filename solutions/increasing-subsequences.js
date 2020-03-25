/*
    Given an integer array, your task is to find all the different possible
    increasing subsequences of the given array, and the length of an 
    increasing subsequence should be at least 2.

    Example:

    Input: [4, 6, 7, 7]
    Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]

*/

const findSubsequences = (nums) => {
    return helper(nums);
};
  
const helper = (arr, start = 0, selected = [], output = []) => {
    if (selected.length >= 2) {
        output.push([...selected]);
    }

    const visited = new Set();
    
    for (let i = start; i < arr.length; i++) {
        if ((i > start && arr[i] === arr[i - 1]) || visited.has(arr[i])) {
            continue;
        }
        
        if (!selected.length || arr[i] >= selected[selected.length - 1]) {
            visited.add(arr[i]);
            selected.push(arr[i]);
            helper(arr, i + 1, selected, output);
            selected.pop();
        }
    }

    return output;
}

console.log(findSubsequences([4, 6, 7, 7]));