// Recursion & Dynamic Programming

// Permutations without Dups

/*
    Write a method to compute all permutations of a string of unique characters. 
    Hints: #150, #185, #200, #267, #278, #309, #335, #356 

*/

/*

    I - string of unique characters
    O - all permutations of string
    C - linear (having to touch each element once)
    E - n/a

*/

/*
    Create global storage object for permutations
    Create array representing given string

    Create inner recursive function to take in string

        base case: if permutation length === n.length
                    if permutation object does not have this permutation
                        add to permutation storage
                        return
        
        recursive case:

            iterate over each array element representing characters in string
                create a new empty string
                push current array character into empty string
                recurse and slice array from i
                pop off character from string 

    return all permutations as array

*/

const permutationsWithOutDups = string => {
    let permutations = {};
    let stringArr = string.split('');

    const getPermutations = (strArr, origStrArr) => {
        if (strArr) {
            if (strArr.length === stringArr.length) {
                let arrStr = strArr.join('');
                if (!permutations[arrStr]) {
                    permutations[arrStr] = true;
                    return
                };
            };
        };

        if (!strArr) {
            strArr = [];
        };

        for (let i = 0; i < origStrArr.length; i++) {
            strArr.push(origStrArr[i]);
            let updatedStrArr = origStrArr.slice(0, i).concat(origStrArr.slice(i + 1)); 
            getPermutations(strArr, updatedStrArr);
            strArr.pop();
        };
    };

    getPermutations(null, stringArr);
    return Object.keys(permutations);
};

console.log(permutationsWithOutDups("ABAC"));