// Recursion & Dynamic Programming

// Parens

/*
    Parens: Implement an algorithm to print all valid (e.g., properly opened and closed) 
    combinations of n pairs of parentheses. 

    EXAMPLE 
        Input: 3 
        Output: ( ( () ) ) , ( () () ) , ( () ) () , () ( () ) , () () () 
        Hints: #138, #174, #787, #209, #243, #265, #295 

*/

/*
    I - number of pairs of paratheses to create
    O - paranthese combinations
    C - n/a (time/space???)
    E - n/a
*/

/*

    create function to intake as parameter the amount of paranthese

    create global object to store combinations of parantheses
    create front variable
    create center variable
    create back variable

        create inner recusive function

            base case: if amount === 1
                return ()

            recursive case:
                create empty string for parens
                iterate until i === n
                    if (!front) {
                        global object[parensString += '()' + recursiveCall(parensAmount -= 1)]

                    };

                    if (!back) {
                        global object[parensString += recursiveCall(parensAmount -= 1) + '()']
                    }

                    if (!center) {
                        global object[parensString += '(' + recursiveCall(parensAmount -= 1) + ')]
                    }

    return global object of combinations
    
*/

const parens = n => {

    const getParens = (left, right) => {
        if (left < 0 || right < 0) { return []; }
        if (left === 0 && right === 0) { return ['']; }

        const withRight = getParens(left, right - 1).map(elem => elem + ')');

        if (left > right) {
            const withLeft = getParens(left - 1, right).map(elem => elem + '(');
            return [...withRight, ...withLeft]
        };

        return withRight
    };

    return getParens(n, n)
};

console.log(parens(3));


