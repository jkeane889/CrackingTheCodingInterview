// Recursion & Dynamic Programming

// Recursive Multiply

/*

    Recursive Multiply: Write a recursive function to multiply two positive integers without
    using the * operator.
     
    You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.
    
    Hints: #166, #203, #227, #234, #246, #280 

*/

/*
    I - two positive integers
    O - the product of these integer's multiplication
    C - time complexity? n ^ 2 (quadratic -> worst case)
    E - n/a
*/

/*

    BRUTE FORCE APPROACH -> two nested for loops 

    RECURSIVE APPROACH -> still quadratic 

    BIT-SHIFTING -> probably the best time complexity!

*/

const convertToBinary = n => {
    let binary = new Array(n).fill(0);
    let i = 0;

    while (n > 0) {
        binary[i] = n % 2;
        n = Math.floor(n / 2);
        i += 1;
    };

    return parseInt(binary.reverse().join(''));
};

const multiply = (dec1, dec2) => {
    let bin1 = convertToBinary(dec1);
    let bin2 = convertToBinary(dec2);

    let bin1Arr = bin1.toString().split('');
    let bin2Arr = bin2.toString().split('');

    let product = null;

    // if (bin1Arr.length > bin2Arr.length) {



    // } else {



    // }

    return parseInt(product, 2);
};

console.log(multiply(3, 4));

