// Chapter 8

// n-Queens

/*
    Eight Queens: Write an algorithm to print all ways of arranging 'n' queens on an nxn chess board
    so that none of them share the same row, column, or diagonal. 
    
    In this case, "diagonal" means all diagonals, not just the two that bisect the board. 
*/

/*
    I - 'n' representing the number of queens and n-length and n-width of board  
    O - number of ways to arrange queens on board
    C - time-complexity (recursive); exponential time/quadratic?
    E - 
        1. unable to place a queen horizontally
        2. unabale to place a queen diagonally
        3. no N given

*/

/*
    1. Create helper function to test for any diagonal conflicts (major and minor)
    2. Create helper function to test for any horizontal conflicts
    3. Create togglePiece helper function to set and reset position on board
    4. Given N, create an N x N board (matrix)
    5. Iterate over matrix, row by row
    6. Recursive backtracking:
        - base case: if diagonal conflict OR horizontal conflict
                        return
        - recursive case: place down queen, add one to solution, recurse
*/

/*  
                                n = 3;

                            [[0, 0, 0],
                             [0, 0, 0],
                             [0, 0, 0]]

            [[1, 1, 1],       [[1, 1, 1],       [[1, 1, 1],
             [1, 1, 0],        [1, 0, 1]         [0, 1, 1],
             [1, 0, 1]]        [0, 0, 0]],       [1, 0, 1]]

*/

let iterations = 0;

const printBoard = (columns) => {
    let n = columns.length, row = 0, col = 0

    while (row < n) {
        while (col < n) {
            console.log(columns[row] === col ? 'Q ' : '# ');
            col++;
        }

        console.log('\n');
        col = 0;
        row++;
    };
};

const hasConflict = (columns) => {
    let length = columns.length, last = columns[length - 1], previous = length - 2

    while (previous >= 0) {
        if (columns[previous] === last) {
            return true
        }

        if (last - (length - 1) === columns[previous] - previous) {
            return true
        }

        if (last + (length - 1) === columns[previous] + previous) {
            return true
        }

        previous--;
    }

    return false
}

const placeNextQueen = (total, queens, columns) => {
    if (queens === 0) {
        return columns
    }

    columns = columns || [];

    for (let column = 0; i < total; column++) {
        columns.push(column);
        iterations++;
        if (!hasConflict(columns) && placeNextQueen(total, queens - 1, columns)) {
            return columns
        }
        
        columns.pop(column)
    }

    return null
}

printBoard(placeNextQueen(28, 28))