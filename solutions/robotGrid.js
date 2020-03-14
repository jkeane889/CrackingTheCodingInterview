// Recursion & Dynamic Programming

// Robot in a Grid

/*
    Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns. 
    
    The robot can only move in two directions, right and down, but certain cells are "off limits" 
    such that the robot cannot step on them. 
    
    Design an algorithm to find a path for the robot from the top left to the bottom right. 
    
    Hints: #331, #360, #388 
*/

/*
    I - matrix with "r" rows and "c" columns
    O - path for robot to travel through maze
    C - recursion using BFS/DFS to find route
    E - undefined position in matrix (out-of-bounds)
*/

/*
    const grid = [
        [x, 0, 0, 1],
        [1, 0, 1, 1],
        [0, 0, 1, 0],
        [1, 0, 0, 0]
    ];

    create a visited object to push in coordinates of where robot has visited

    create movement helper function to store directions of where robot can move
        parameters

    inner recursive algorithm

        base case:  if robot position === r && c
            return true

        recursive case:
            if movement.right
                robot's position goes to the right
                add coordinate to visited
                recurse from new location looking at other possible locations

            if movement.down
                robot's position goes down  
                add coordinate to visited
                recurse from new location looking at other possible locations

        return false
*/

const MakeGrid = n => {
    let grid = [];

    for (let i = 0; i < n; i++) {
        grid.push([]);
        for (let j = 0; j < n; j++) {
            grid[i].push(false);
        };
    };

    grid.toggle = (i, j) => {
        grid[i][j] = !grid[i][j];
    };

    grid.visited = (i, j) => {
        return grid[i][j]
    };

    return grid
};

let pathsCounter = n => {
    let paths = 0;
    let grid = MakeGrid(n);

    const findPaths = (i, j) => {
        if (i === n - 1 && j === n - 1) {
            paths++;
            return;
        };

        if (i < 0 || i >= n || j < 0 || j >= n) {
            return
        };

        if (grid.visited(i, j)) {
            return
        } else {
            grid.toggle(i, j);
            findPaths(i, j + 1);
            findPaths(i + 1, j);
            grid.toggle(i, j);
        }
    };

    findPaths(0, 0);
    return paths;
};