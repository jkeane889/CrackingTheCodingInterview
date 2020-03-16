/*

    You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

    Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

    Example:

    Input: 4
    Output: false 

    Explanation: If there are 4 stones in the heap, then you will never win the game;
                No matter 1, 2, or 3 stones you remove, the last stone will always be 
                removed by your friend.

*/

/*
  @param {number} n
  @return {boolean}

*/


/*
    I - 'n' representing the given amount of stones on the table
    O - boolean value indicating whether I can win the game or not
    C - time complexity
    E - empty table without stones
*/

      var canWinNim = function(n) {
        /*
        
            Similar to recursive one, two, three step problem
            and coin sums
            
            Create global switch case where initialize to player 1
        
            Create inner recursive function that takes in stones and player
                base case: if player === player 1
                                
                                if stones === 4
                                    
                                    return false
                                    
                recursive case:        
                    iterate from 1 to 3
                        recurse(stones - i, switch player)

                return true
        
        */
        
        return n % 4 !== 0
    };