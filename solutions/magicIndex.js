// Recursion & Dynamic Programming

// Magic Index

/*
    Magic Index: A magic index in an array A [0...n -1] is defined to be an index such that A[i] = i. 
    
    Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
    
    FOLLOW UP
    What if the values are not distinct?
    
    Hints:#770, #204, #240, #286, #340
*/

/*
    I - sorted array of distinct integers
    O - index where A[i] === i
    C - worst case: having to visit each value (node) [linear O(n)]
    E - No value where A[i] === i

*/

/*
    Sorted array (descending, ascending?) with ordered values
    Utilize binary search algorithm to split array until we find A[i] === i

    Create global magic index variable

    Create inner recursive function
        base case: if array[0] === index, return true

        recursive case:

            get midPoint of array
            if i < midPoint
                call recursive case and slice array from 0 till midPoint
            if i >= MidPoint
                call recursive case and slice array from midpoint till end
            
*/

const getMagicIndex = magicArray => {
    let magicIndex = null;
    let magicArr = magicArray;

    const findMagicIndex = (magicArray) => {
        console.log(magicArr.indexOf(magicArray[0]));
        if (magicArray[0] === magicArr.indexOf(magicArray[0])) {
            return true
        };

        let midPoint = Math.floor(magicArray.length / 2);

        if (magicArray[midPoint] < midPoint) {
            return findMagicIndex(magicArray.slice(0, midPoint));
        } else if (magicArray[midPoint] >= midPoint) {
            return findMagicIndex(magicArray.slice(midPoint));
        };

        return false
    };

    return findMagicIndex(magicArray);
};