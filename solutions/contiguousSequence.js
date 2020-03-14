// Arrays & Strings

/*
    Contiguous Sequence: You are given an array of integers (both positive and negative). Find the 
    contiguous sequence with the largest sum. Return the sum. EXAMPLE 
    
    Input:2, -8, 3, -2, 4, -10 
    Output: 5 ( i. e • , { 3, -2, 4}) 

*/

/*
    I - array of positive and negative integers
    O - sequence that yields that largest sum of input sequence
    C - consideration of time complexity with interation
    E - given array sequence is empty; multiple sums equal (give the first combination of integers)
*/

/*
    Create a global variable to store potential max sequence make it equal to 0 at first
    create empty sequence equal to an array

    do a nested for loop iteration to start at each index and loop through the array's elements

    inside the inner for loop, utilize Math.max to compare the global max value and the current contiguous sum

    if the current sum is greater than the max global amount, create a copy of the current iteration from element i to j
        and set it equal to the empty global sequence
*/

const getGreatestSum = arr => {
    let max = 0;
    let maxSum = [];

    let findGreatest = sumArr => {
        for (let i = 0; i < sumArr.length; i++) {
            let sequence = [];
            sequence.push(sumArr[i]);
            for (let j = i + 1; j < sumArr.length; j++) {
                sequence.push(sumArr[j]);
                let currentSum = sequence.reduce((val, acc) => { return acc + val});
                let greater = Math.max(currentSum, max);
                maxSum = arr.slice(i, j + 1);
                max = greater;
            };
        };
    };

    findGreatest(arr);
    return maxSum;
};

// This is just returning the greatest calculated contiguous sequence amount
const getGreatestSum = arr => {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (maxSum < currentSum) {
            maxSum = currentSum
        } else if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
};


console.log(getGreatestSum([-8, 3, -2, 4, -10]));


