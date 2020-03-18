/*
    Reverse bits of a given 32 bits unsigned integer.

    Example.

    Input: 00000010100101000001111010011100
    Ouput: 00111001011110000010100101000000

*/

var reverseBits = function(n) {
    let nStr = n.toString();
    let nArr = nStr.split('').reverse().join('')
    return nArr
};

let x = 00000010100101000001111010011100;

console.log(reverseBits(x))

