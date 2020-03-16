/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

*/

const hamming_distance = (a, b) => {
    let d = 0;
    let h = a ^ b;
    while (h > 0) {
        d ++;
        h &= h - 1;
    }
    return d;
}

console.log(hamming_distance(5, 6));

// console.log(hammingDistance(1, 4));