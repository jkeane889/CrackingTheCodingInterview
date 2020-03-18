/*

    A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

    The robot can only move either down or right at any point in time. 
    
    The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

    How many possible unique paths are there?

    Input: m = 3, n = 2
    Output: 3
    Explanation:
    
    From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Right -> Down
    2. Right -> Down -> Right
    3. Down -> Right -> Right

*/
  

/*
    base case: if robot's location === last array's length and last array's last index
        ways count ++ 

    Handle all edge cases of robot's movement outside of map

    if robot's x location < current location's x index
        return
        
    if robot's x location > current location's x index
        return
        
    if robot's y location < current location's y index
        return
        
    if robot's y location > current location's y index
        return
        
    Movement left in a matrix [-1, 0]
    Movement right in a matrix [+1, 0]
    Movement up in a matrix [0,-1]
    Movement down in a matrix [0, +1]

*/

var uniquePaths = function(m, n) {
let map = [];
let waysCount = 0;
let last = [n, m];

let options = [[0, 1],[1, 0]];

for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
        row.push(0);
    };
    map.push(row)
};

const findWays = (x, y) => {
    if (x === last[0] && y === last[1]) {
        waysCount += 1
        return
    }

    if (x > n) {
        return
    }

    if (y > m) {
        return
    }

    for (let i = 0; i < options.length; i++) {
        findWays(x + options[i][0], y + options[i][1]);
    }
}

findWays(0, 0)

return waysCount
};

console.log(uniquePaths(3, 2));