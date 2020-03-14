// Recursion & Dynamic Programming

// Power Set

/*
    Power Set: Write a method to return all subsets of a set. 
    
    Hints: #273, #290, #338, #354, #373 

*/

/*
    I - given a set of values
    O - all subsets of given set
    C - time complexity in generating all subsets
    E - n/a

*/

/*
    let string = 'abcde'

    powerSet(string); //

    [ ‘’, ‘a’, ‘ab’, ‘abc’, ‘abcd’, ‘abcde’, 
      ‘abce’, ‘abd’, ‘abde’, ‘abe’, ‘ac’,
      ‘acd’, ‘acde’, ‘ace’, ‘ad’, ‘ade’,
      ‘ae’, ‘b’, ‘bc’, ‘bcd’, ‘bcde’, ‘bce’,
      ‘bd’, ‘bde’, ‘be’, ‘c’, ‘cd’, ‘cde’,
      ‘ce’, ‘d’, ‘de’, ‘e’ ];


    Create global storage array to hold combinations
    Create global object to storage created combinations

    Iterate over input string's elements

    base case: 
               
        if combination does not exist in storage object
            push combination in storage array
            return
    
    recursive case:

        iterate over string values
            add current string value to global string
            slice string and recurse
            remove last element from string
    
*/

const powerSet = string => {
    let powerSetArr = [];
    let powerSetObj = {};
    let strArr = string.split('');

    const getPowerSet = (stringSet, stringArr) => {
        if (!stringArr.length) {
            return
        };

        for (let i = 0; i < stringArr.length; i++) { // [e]
            if (!stringSet) {
                stringSet = []; // []
            };

            if (!stringSet.includes(stringArr[i])) {
                stringSet.push(stringArr[i]); // [a, b, c, d, e] 
                let str = stringSet.join('').toString(); // "abcde"
                
                if (!powerSetObj[str]) { // true
                    powerSetObj[str] = str; // { abcde: "abcde" }
                    getPowerSet(stringSet, stringArr.slice(1)); // [a, b, c, d], []
                    stringSet.pop();
                };
            };
        };
    };

    getPowerSet(null, strArr);
    return Object.values(powerSetObj);
};