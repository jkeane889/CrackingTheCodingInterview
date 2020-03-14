// Recursion & Dynamic Programming

// Coins

/*
    Coins: Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and
    pennies (1 cent), write code to calculate the number of ways of representing n cents. 

    Hints: #300, #324, #343, #380, #394 
*/

/*
    I - "n" representing total cents
    O - number of ways to represent "n" cents
    C - time complexity? linear 
    E - cents remaining being less than 5 (will require multiple 1 cent pieces)

*/

/*
    Consider caching prior results

    Create function to in take n cents
        create global tracker to represent x combinations
        create global array representing coins

        Create inner recursive function to calculate x combinations
            base case: if sum of x combination === n
                combinations += 1
                return 
            
            recursive case:
                iterate over global array of coins
                    create sum first equal to zero
                    add coin to sum
                    store in cache
                    recursive and pass in current sum
                    pop off last coin

        return x combinations
*/

const coinCombos = n => {
    let combinations = null;
    let coins = [25, 10, 5, 1]

    const getCoinCombos = (sum, currentTotal) => {
        if (sum) {
            if (sum === n) { // true
                combinations += 1; // 1
                return
            };
        };

        if (sum > n) {
            return
        };

        for (let i = 0; i < coins.length; i++) {
            if (!currentTotal) {
                currentTotal = [];
            }

            if (!sum) {
                sum = 0;
            };

            totalArr.push(coins[i]); // [25, 25, 10, 5]
            sum = sum.reduce((acc, val) => (acc + val)); // 65
            getCoinCombos(sum, total); // (65, [25, 25, 10, 5])
            let reducer = totalArr.pop(); // 25
            sum = sum - reducer; // 50
        };
    };

    return combinations;
};

console.log(coinCombos(75));

