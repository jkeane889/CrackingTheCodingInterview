// Mock Interview 2

/*

    Q1: URLify: Write a method to replace all spaces in a string with '%20'. 
        
        You may assume that the string has sufficient space at the end to hold the additional characters, 
        and that you are given the "true" length of the string. 
        
        EXAMPLE 

        Input: "Mr John Smith ", 13 

        OUTPUT: "Mr%20John%20Smith" 

        Hints: #53, # 118   

*/

/*
    I - string with words and spaces between words
    O - string with spaces replaced with "%20"
    C - time complexity? shifting array elements (linear) - but if done in place, will this 
        shift array elements?
    E - string doesn't contain spaces / no string; space at the beginning or end of the string

    Approach:

        - Split all characters into an array (including spaces as their own array element)
        - Iterate through characters in array
        - If character === " ", use the native splice operation to select character at location
            in array, remove it and replace it with "%20"
        - after completion of this operation, rejoin array into a string and return

*/

    const replaceChars = str => {
        let replaced = "";
        let strArr = str.split("");

        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] === " ") {
                strArr.splice(i, 1, "%20");
            };
        };

        return strArr.join("")
    };

/*

  Q2: Magic Index: A magic index in an array A [ 0 ... n - 1] is defined to be an index such that A[i] = i. 
      
        Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

    FOLLOW UP
    What if the values are not distinct?
    
    Hints:#770, #204, #240, #286, #340

*/

/*
    I - a sorted array of length n where A[i] = i;
    O - index where index equals the distinct integer at that location
    C - time complexity? Ologn
    E - duplicate values or multiple occurences

    Binary Search algorithm

    Get midpoint of array Math.floor((length / 2))

    base case: if array.length === 1
                if array[0] === indexOf(array[0])
                    magicIndex =  indexOf(array[0])
                    return
                else
                    return

    recursive case: 
                get midpoint and mid-value in array

                if midValue > indexOf(midValue)
                    slice array from beginning to midPoint and recurse
                if midValue < indexOf(midValue)
                    slice array from midPoint to end and recurse

*/

const findMagicIndex = (arr) => {
    let originalArr = arr;
    let magicIndex = null;

    const getMagicIndex = (arr) => {
        if (arr.length === 1) {
            if (array[0] === originalArr.indexOf(array[0])) {
                magicIndex = originalArr.indexOf(array[0]);
                return
            }
            return
        };

        let midPoint = Math.floor(arr.length/2);
        let midValue = arr[midPoint];

        if (midValue > originalArr.indexOf(midValue)) {
            getMagicIndex(arr.slice(0, midPoint));
        }

        if (midValue <= originalArr.indexOf(midValue)) {
            getMagicIndex(arr.slice(midPoint));
        }
    }

    getMagicIndex(arr);
    return magicIndex;
};


/*

    Q3: Hash Table: Design and implement a hash table which uses chaining (linked lists) to handle colli­sions. 

    Hints: #287, #307 

*/

/*

    [{LinkedList}, {LinkedList}, {LinkedList}] ???

    

*/